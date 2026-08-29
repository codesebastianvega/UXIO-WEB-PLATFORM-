'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
import { getInstructorAuth } from '@/lib/supabase/instructor';
import { SubmissionStatus } from '@/lib/supabase/academy-submissions';

interface ReviewPayload {
  submissionId: string;
  status: 'approved' | 'needs_revision';
  feedbackText: string;
  lang?: string;
}

export async function reviewSubmissionAction({
  submissionId,
  status,
  feedbackText,
  lang = 'es',
}: ReviewPayload): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    // 1. Authorize instructor server-side
    const { isInstructor } = await getInstructorAuth();
    if (!isInstructor) {
      return {
        success: false,
        error: 'Unauthorized: Permiso denegado. Solo instructores pueden calificar retos.',
      };
    }

    if (!['approved', 'needs_revision'].includes(status)) {
      return {
        success: false,
        error: 'Estado de revisión no válido.',
      };
    }

    const supabase = await createClient();
    const now = new Date().toISOString();

    // 2. Update submission
    const { error: updateErr } = await supabase
      .from('submissions')
      .update({
        status,
        feedback_text: feedbackText.trim() || null,
        reviewed_at: now,
        updated_at: now,
      })
      .eq('id', submissionId);

    if (updateErr) {
      return { success: false, error: updateErr.message };
    }

    // 3. Revalidate instructor and classroom views
    revalidatePath(`/${lang}/academy/instructor`, 'page');
    revalidatePath(`/${lang}/academy/classroom`, 'layout');

    return { success: true };
  } catch (err: any) {
    return {
      success: false,
      error: err?.message || 'Error al procesar la revisión.',
    };
  }
}
