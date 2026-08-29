import { createClient } from './server';
import { getCourseBySlug } from '@/data/academy';
import { Locale } from '@/types';

export interface CourseProgressInfo {
  completedLessonIds: string[];
  completedCount: number;
  totalLessons: number;
  percentage: number;
  isCompleted: boolean;
}

export async function getCourseProgress(
  courseSlug: string,
  lang: Locale = 'es'
): Promise<CourseProgressInfo> {
  const course = getCourseBySlug(courseSlug, lang);
  const totalLessons = course
    ? course.modules.reduce((acc, m) => acc + m.lessons.length, 0)
    : 0;

  const defaultProgress: CourseProgressInfo = {
    completedLessonIds: [],
    completedCount: 0,
    totalLessons,
    percentage: 0,
    isCompleted: false,
  };

  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (!user || authError || totalLessons === 0) {
    return defaultProgress;
  }

  try {
    // 1. Get course_id from Supabase courses table
    const { data: courseRow, error: courseErr } = await supabase
      .from('courses')
      .select('id')
      .eq('slug', courseSlug)
      .single();

    if (courseErr || !courseRow) {
      return defaultProgress;
    }

    // 2. Fetch completed lesson records for this user & course
    const { data: progressRows, error: progressErr } = await supabase
      .from('lesson_progress')
      .select('lesson_id')
      .eq('user_id', user.id)
      .eq('course_id', courseRow.id)
      .eq('completed', true);

    if (progressErr || !progressRows) {
      return defaultProgress;
    }

    const completedLessonIds = progressRows.map(row => row.lesson_id);
    const completedCount = completedLessonIds.length;
    const percentage = Math.min(100, Math.round((completedCount / totalLessons) * 100));

    return {
      completedLessonIds,
      completedCount,
      totalLessons,
      percentage,
      isCompleted: totalLessons > 0 && completedCount >= totalLessons,
    };
  } catch {
    return defaultProgress;
  }
}
