import { createClient } from '@/lib/supabase/server';
import { Locale } from '@/types';
import { getAcademyCourses, getCourseBySlug } from '@/data/academy';
import { getCourseProgress } from './academy-progress';

export type CertificateStatus = 'not_eligible' | 'eligible' | 'issued' | 'revoked';

export interface CertificateRecord {
  id: string;
  userId: string;
  courseId: string;
  certificateNumber: string | null;
  status: CertificateStatus;
  issuedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CertificateEligibility {
  isEligible: boolean;
  status: CertificateStatus;
  certificateNumber?: string | null;
  issuedAt?: string | null;
  completedLessonsCount: number;
  totalLessonsCount: number;
  lessonsProgressPercentage: number;
  requiredChallengesCount: number;
  approvedChallengesCount: number;
  pendingChallengesCount: number;
  needsRevisionCount: number;
  missingRequirements: string[];
}

export async function getStudentCertificate(
  courseSlug: string
): Promise<CertificateRecord | null> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (!user || authError) {
      return null;
    }

    const { data: courseRow } = await supabase
      .from('courses')
      .select('id')
      .eq('slug', courseSlug)
      .single();

    if (!courseRow) return null;

    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .eq('user_id', user.id)
      .eq('course_id', courseRow.id)
      .maybeSingle();

    if (error || !data) return null;

    return {
      id: data.id,
      userId: data.user_id,
      courseId: data.course_id,
      certificateNumber: data.certificate_number,
      status: data.status as CertificateStatus,
      issuedAt: data.issued_at,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  } catch {
    return null;
  }
}

export async function checkStudentEligibility(
  courseSlug: string,
  lang: Locale = 'es'
): Promise<CertificateEligibility> {
  const isEs = lang === 'es';
  const course = getCourseBySlug(courseSlug, lang);

  const fallback: CertificateEligibility = {
    isEligible: false,
    status: 'not_eligible',
    completedLessonsCount: 0,
    totalLessonsCount: 0,
    lessonsProgressPercentage: 0,
    requiredChallengesCount: 0,
    approvedChallengesCount: 0,
    pendingChallengesCount: 0,
    needsRevisionCount: 0,
    missingRequirements: [
      isEs
        ? 'Inicia sesión y completa las lecciones del curso.'
        : 'Sign in and complete the course lessons.',
    ],
  };

  if (!course) return fallback;

  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (!user || authError) return fallback;

    // 1. Check existing DB certificate record
    const certRecord = await getStudentCertificate(courseSlug);

    // 2. Compute lessons progress
    const progressInfo = await getCourseProgress(courseSlug, lang);

    // 3. Query student submissions
    const { data: submissions } = await supabase
      .from('submissions')
      .select('status, lesson_id')
      .eq('user_id', user.id);

    const submissionRows = submissions || [];

    // 4. Count required challenges from static repository
    let requiredChallengesCount = 0;
    const requiredLessonIds: string[] = [];

    for (const mod of course.modules) {
      for (const lesson of mod.lessons) {
        if (lesson.challenge) {
          requiredChallengesCount++;
          requiredLessonIds.push(lesson.id);
        }
      }
    }

    const approvedChallengesCount = submissionRows.filter(
      s => s.status === 'approved' && requiredLessonIds.includes(s.lesson_id)
    ).length;

    const pendingChallengesCount = submissionRows.filter(
      s => (s.status === 'submitted' || s.status === 'pending_review') && requiredLessonIds.includes(s.lesson_id)
    ).length;

    const needsRevisionCount = submissionRows.filter(
      s => s.status === 'needs_revision' && requiredLessonIds.includes(s.lesson_id)
    ).length;

    const missingRequirements: string[] = [];

    if (progressInfo.percentage < 100) {
      missingRequirements.push(
        isEs
          ? `Completar todas las lecciones (${progressInfo.completedCount}/${progressInfo.totalLessons} completadas)`
          : `Complete all lessons (${progressInfo.completedCount}/${progressInfo.totalLessons} done)`
      );
    }

    if (requiredChallengesCount > 0 && approvedChallengesCount < requiredChallengesCount) {
      const remaining = requiredChallengesCount - approvedChallengesCount;
      missingRequirements.push(
        isEs
          ? `Aprobación docente en retos prácticos (${approvedChallengesCount}/${requiredChallengesCount} aprobados, faltan ${remaining})`
          : `Instructor approval for practical challenges (${approvedChallengesCount}/${requiredChallengesCount} approved, ${remaining} remaining)`
      );
    }

    // Eligibility rule: 100% lessons + all required challenges approved
    const isEligible =
      progressInfo.percentage >= 100 &&
      (requiredChallengesCount === 0 || approvedChallengesCount >= requiredChallengesCount);

    let status: CertificateStatus = 'not_eligible';

    if (certRecord) {
      status = certRecord.status;
    } else if (isEligible) {
      status = 'eligible';
    }

    return {
      isEligible,
      status,
      certificateNumber: certRecord?.certificateNumber || null,
      issuedAt: certRecord?.issuedAt || null,
      completedLessonsCount: progressInfo.completedCount,
      totalLessonsCount: progressInfo.totalLessons,
      lessonsProgressPercentage: progressInfo.percentage,
      requiredChallengesCount,
      approvedChallengesCount,
      pendingChallengesCount,
      needsRevisionCount,
      missingRequirements,
    };
  } catch {
    return fallback;
  }
}
