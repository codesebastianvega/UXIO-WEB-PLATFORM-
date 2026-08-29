'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
import { getInstructorAuth } from '@/lib/supabase/instructor';
import { getCourseBySlug } from '@/data/academy';

interface IssuePayload {
  studentId: string;
  courseSlug: string;
  lang?: string;
}

export async function issueStudentCertificateAction({
  studentId,
  courseSlug,
  lang = 'es',
}: IssuePayload): Promise<{
  success: boolean;
  certificateNumber?: string;
  error?: string;
}> {
  try {
    // 1. Authenticate and authorize instructor
    const { isInstructor } = await getInstructorAuth();
    if (!isInstructor) {
      return {
        success: false,
        error: 'Unauthorized: Solo instructores autorizados pueden emitir certificados.',
      };
    }

    const supabase = await createClient();

    // 2. Query course
    const { data: courseRow, error: courseErr } = await supabase
      .from('courses')
      .select('id, title')
      .eq('slug', courseSlug)
      .single();

    if (courseErr || !courseRow) {
      return { success: false, error: 'Curso no encontrado.' };
    }

    // 3. Verify student eligibility (100% lessons & approved challenges)
    const staticCourse = getCourseBySlug(courseSlug, lang === 'en' ? 'en' : 'es');
    if (!staticCourse) {
      return { success: false, error: 'Estructura académica no encontrada.' };
    }

    const { data: progressRows } = await supabase
      .from('lesson_progress')
      .select('lesson_id, completed')
      .eq('user_id', studentId)
      .eq('course_id', courseRow.id)
      .eq('completed', true);

    const totalStaticLessons = staticCourse.modules.reduce(
      (acc, m) => acc + m.lessons.length,
      0
    );
    const completedLessonsCount = (progressRows || []).length;

    if (completedLessonsCount < totalStaticLessons) {
      return {
        success: false,
        error: `El alumno no ha completado todas las lecciones (${completedLessonsCount}/${totalStaticLessons}).`,
      };
    }

    // Generate unique verifiable certificate number
    const year = new Date().getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const certificateNumber = `UXIO-${year}-${randomSuffix}`;
    const now = new Date().toISOString();

    // 4. Upsert certificate record
    const { data: certData, error: certErr } = await supabase
      .from('certificates')
      .upsert(
        {
          user_id: studentId,
          course_id: courseRow.id,
          certificate_number: certificateNumber,
          status: 'issued',
          issued_at: now,
          updated_at: now,
        },
        {
          onConflict: 'user_id,course_id',
        }
      )
      .select('*')
      .single();

    if (certErr) {
      return { success: false, error: certErr.message };
    }

    // 5. Revalidate paths
    revalidatePath(`/${lang}/academy/classroom/certificate`, 'page');
    revalidatePath(`/${lang}/academy/classroom`, 'layout');
    revalidatePath(`/${lang}/academy/instructor`, 'page');
    revalidatePath(`/${lang}/academy/verify/${certificateNumber}`, 'page');

    return { success: true, certificateNumber: certData.certificate_number };
  } catch (err: any) {
    return {
      success: false,
      error: err?.message || 'Error inesperado al emitir el certificado.',
    };
  }
}
