import { createClient } from '@/lib/supabase/server';

export type SubmissionStatus =
  | 'submitted'
  | 'pending_review'
  | 'needs_revision'
  | 'approved';

export type SubmissionType = 'link' | 'document' | 'image' | 'video';

export interface LessonSubmission {
  id: string;
  userId: string;
  courseId: string;
  lessonId: string;
  submissionUrl: string;
  submissionType: SubmissionType;
  status: SubmissionStatus;
  feedbackText?: string | null;
  reviewedAt?: string | null;
  submittedAt: string;
  updatedAt: string;
}

export async function getLessonSubmission(
  courseSlug: string,
  lessonId: string
): Promise<LessonSubmission | null> {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (!user || authError) {
      return null;
    }

    // Query course by slug to get course_id
    const { data: courseRow } = await supabase
      .from('courses')
      .select('id')
      .eq('slug', courseSlug)
      .single();

    if (!courseRow) {
      return null;
    }

    // Query submission
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .eq('user_id', user.id)
      .eq('course_id', courseRow.id)
      .eq('lesson_id', lessonId)
      .maybeSingle();

    if (error || !data) {
      return null;
    }

    return {
      id: data.id,
      userId: data.user_id,
      courseId: data.course_id,
      lessonId: data.lesson_id,
      submissionUrl: data.submission_url,
      submissionType: data.submission_type as SubmissionType,
      status: data.status as SubmissionStatus,
      feedbackText: data.feedback_text,
      reviewedAt: data.reviewed_at,
      submittedAt: data.submitted_at,
      updatedAt: data.updated_at,
    };
  } catch {
    return null;
  }
}
