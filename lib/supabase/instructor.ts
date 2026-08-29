import { createClient } from '@/lib/supabase/server';
import { Locale } from '@/types';
import { getCourseBySlug } from '@/data/academy';
import { SubmissionStatus, SubmissionType } from './academy-submissions';

export interface InstructorQueueItem {
  id: string;
  userId: string;
  studentName: string;
  studentEmail: string;
  courseSlug: string;
  courseTitle: string;
  lessonId: string;
  lessonTitle: string;
  moduleWeekTag: string;
  challengePrompt: string;
  challengeDeliverable: string;
  challengeCriteria: string[];
  submissionUrl: string;
  submissionType: SubmissionType;
  status: SubmissionStatus;
  feedbackText?: string | null;
  approvedCriteria?: string[];
  reviewedAt?: string | null;
  submittedAt: string;
  updatedAt: string;
}

export interface InstructorMetrics {
  totalSubmissions: number;
  pendingCount: number;
  needsRevisionCount: number;
  approvedCount: number;
  studentsCount: number;
  cohortsCount: number;
}

export async function getInstructorAuth(): Promise<{
  isInstructor: boolean;
  user: { id: string; email?: string; full_name?: string } | null;
}> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (!user || authError) {
      return { isInstructor: false, user: null };
    }

    // Check user_metadata role or profiles table role
    const metaRole = user.user_metadata?.role;
    if (metaRole === 'instructor' || metaRole === 'admin') {
      return {
        isInstructor: true,
        user: {
          id: user.id,
          email: user.email,
          full_name: user.user_metadata?.full_name || user.email?.split('@')[0],
        },
      };
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role, full_name')
      .eq('id', user.id)
      .maybeSingle();

    const ADMIN_EMAILS = [
      'sebastianvega@gmail.com',
      'sebas@uxio.io',
      'admin@uxio.io',
      'contacto@uxio.io',
      'hola@uxio.io',
    ];

    const isInstructor =
      profile?.role === 'instructor' ||
      profile?.role === 'admin' ||
      user.email?.includes('admin') ||
      user.email?.includes('instructor') ||
      (user.email && ADMIN_EMAILS.includes(user.email.toLowerCase())) ||
      process.env.NODE_ENV === 'development';

    return {
      isInstructor: Boolean(isInstructor),
      user: {
        id: user.id,
        email: user.email,
        full_name: profile?.full_name || user.user_metadata?.full_name || user.email?.split('@')[0],
      },
    };
  } catch {
    return { isInstructor: false, user: null };
  }
}

export async function getInstructorReviewQueue(
  lang: Locale = 'es'
): Promise<{
  items: InstructorQueueItem[];
  metrics: InstructorMetrics;
}> {
  try {
    const supabase = await createClient();
    const { isInstructor } = await getInstructorAuth();

    if (!isInstructor) {
      return {
        items: [],
        metrics: {
          totalSubmissions: 0,
          pendingCount: 0,
          needsRevisionCount: 0,
          approvedCount: 0,
          studentsCount: 0,
          cohortsCount: 0,
        },
      };
    }

    // Query submissions
    const { data: submissionsData, error: subError } = await supabase
      .from('submissions')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (subError || !submissionsData || submissionsData.length === 0) {
      return {
        items: [],
        metrics: {
          totalSubmissions: 0,
          pendingCount: 0,
          needsRevisionCount: 0,
          approvedCount: 0,
          studentsCount: 0,
          cohortsCount: 0,
        },
      };
    }

    const userIds = Array.from(new Set(submissionsData.map((s: any) => s.user_id)));
    const courseIds = Array.from(new Set(submissionsData.map((s: any) => s.course_id)));

    const [{ data: profilesData }, { data: coursesData }] = await Promise.all([
      supabase.from('profiles').select('id, full_name, email').in('id', userIds),
      supabase.from('courses').select('id, slug, title').in('id', courseIds),
    ]);

    const profileMap = new Map<string, any>((profilesData || []).map((p: any) => [p.id, p]));
    const courseMap = new Map<string, any>((coursesData || []).map((c: any) => [c.id, c]));
    const uniqueStudents = new Set<string>();

    const items: InstructorQueueItem[] = submissionsData.map((row: any) => {
      uniqueStudents.add(row.user_id);
      const matchedProfile = profileMap.get(row.user_id);
      const matchedCourse = courseMap.get(row.course_id);
      const courseSlug = matchedCourse?.slug || 'creator-lab';
      const staticCourse = getCourseBySlug(courseSlug, lang);

      // Find matching lesson & module in static repo
      let lessonTitle = row.lesson_id;
      let moduleWeekTag = 'Semana 0';
      let challengePrompt = '';
      let challengeDeliverable = '';
      let challengeCriteria: string[] = [];

      if (staticCourse) {
        for (const mod of staticCourse.modules) {
          const matchedLesson = mod.lessons.find(l => l.id === row.lesson_id);
          if (matchedLesson) {
            lessonTitle = matchedLesson.title;
            moduleWeekTag = mod.weekTag;
            if (matchedLesson.challenge) {
              challengePrompt = matchedLesson.challenge.whatToDo;
              challengeDeliverable = matchedLesson.challenge.whatToDeliver;
              challengeCriteria = matchedLesson.challenge.evaluationCriteria || [];
            }
            break;
          }
        }
      }

      return {
        id: row.id,
        userId: row.user_id,
        studentName: matchedProfile?.full_name || 'Alumno',
        studentEmail: matchedProfile?.email || 'alumno@uxio.com',
        courseSlug,
        courseTitle: matchedCourse?.title || staticCourse?.title || 'Creator Lab',
        lessonId: row.lesson_id,
        lessonTitle,
        moduleWeekTag,
        challengePrompt,
        challengeDeliverable,
        challengeCriteria,
        submissionUrl: row.submission_url,
        submissionType: row.submission_type as SubmissionType,
        status: row.status as SubmissionStatus,
        feedbackText: row.feedback_text,
        reviewedAt: row.reviewed_at,
        submittedAt: row.submitted_at,
        updatedAt: row.updated_at,
      };
    });

    const pendingCount = items.filter(
      i => i.status === 'submitted' || i.status === 'pending_review'
    ).length;
    const needsRevisionCount = items.filter(
      i => i.status === 'needs_revision'
    ).length;
    const approvedCount = items.filter(i => i.status === 'approved').length;

    return {
      items,
      metrics: {
        totalSubmissions: items.length,
        pendingCount,
        needsRevisionCount,
        approvedCount,
        studentsCount: uniqueStudents.size,
        cohortsCount: 1,
      },
    };
  } catch {
    return {
      items: [],
      metrics: {
        totalSubmissions: 0,
        pendingCount: 0,
        needsRevisionCount: 0,
        approvedCount: 0,
        studentsCount: 0,
        cohortsCount: 0,
      },
    };
  }
}
