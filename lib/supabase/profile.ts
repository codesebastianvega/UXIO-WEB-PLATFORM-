import { createClient } from '@/lib/supabase/server';
import { Locale } from '@/types';
import { getAcademyCourses, getCourseBySlug } from '@/data/academy';
import { getCourseProgress } from './academy-progress';

export interface StudentProfileData {
  id: string;
  fullName: string;
  email: string;
  avatarUrl?: string | null;
  bio?: string | null;
  instagram?: string | null;
  tiktok?: string | null;
  youtube?: string | null;
  website?: string | null;
  city?: string | null;
  profession?: string | null;
  role: string;
  createdAt: string;
}

export interface StudentOutcomesData {
  courseSlug: string;
  courseTitle: string;
  cohortName: string;
  progressPercentage: number;
  completedLessonsCount: number;
  totalLessonsCount: number;
  submittedChallengesCount: number;
  approvedChallengesCount: number;
  needsRevisionCount: number;
  totalChallengesCount: number;
  isReadyForCertificate: boolean;
}

export async function getStudentProfileData(): Promise<StudentProfileData | null> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (!user || authError) {
      return null;
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();

    const fallbackName =
      user.user_metadata?.full_name || user.email?.split('@')[0] || 'Alumno';

    return {
      id: user.id,
      fullName: profile?.full_name || fallbackName,
      email: user.email || '',
      avatarUrl: profile?.avatar_url || user.user_metadata?.avatar_url || null,
      bio: profile?.bio || '',
      instagram: profile?.instagram || '',
      tiktok: profile?.tiktok || '',
      youtube: profile?.youtube || '',
      website: profile?.website || '',
      city: profile?.city || '',
      profession: profile?.profession || '',
      role: profile?.role || 'student',
      createdAt: profile?.created_at || user.created_at || new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export async function getStudentOutcomesData(
  lang: Locale = 'es'
): Promise<StudentOutcomesData | null> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (!user || authError) {
      return null;
    }

    const courses = getAcademyCourses(lang);
    const primaryCourse = courses[0];
    if (!primaryCourse) return null;

    // 1. Calculate dynamic progress
    const progressInfo = await getCourseProgress(primaryCourse.slug, lang);

    // 2. Query student submissions
    const { data: submissions } = await supabase
      .from('submissions')
      .select('status, lesson_id')
      .eq('user_id', user.id);

    const submissionRows = submissions || [];
    const submittedChallengesCount = submissionRows.length;
    const approvedChallengesCount = submissionRows.filter(
      s => s.status === 'approved'
    ).length;
    const needsRevisionCount = submissionRows.filter(
      s => s.status === 'needs_revision'
    ).length;

    // Count total challenges defined in course
    let totalChallengesCount = 0;
    for (const mod of primaryCourse.modules) {
      for (const lesson of mod.lessons) {
        if (lesson.challenge) totalChallengesCount++;
      }
    }

    // Completion condition for certification preview
    const isReadyForCertificate =
      progressInfo.percentage >= 100 &&
      (totalChallengesCount === 0 || approvedChallengesCount >= totalChallengesCount);

    return {
      courseSlug: primaryCourse.slug,
      courseTitle: primaryCourse.title,
      cohortName: primaryCourse.cohortName,
      progressPercentage: progressInfo.percentage,
      completedLessonsCount: progressInfo.completedCount,
      totalLessonsCount: progressInfo.totalLessons,
      submittedChallengesCount,
      approvedChallengesCount,
      needsRevisionCount,
      totalChallengesCount,
      isReadyForCertificate,
    };
  } catch {
    return null;
  }
}
