import { Lesson } from '../../types';
import { Locale } from '@/types';
import { getLessonM0001 } from './m00-01-welcome';
import { getLessonM0002 } from './m00-02-creator-kit';

export * from './m00-01-welcome';
export * from './m00-02-creator-kit';

export function getAllLessons(lang: Locale = 'es'): Lesson[] {
  return [
    getLessonM0001(lang),
    getLessonM0002(lang),
  ];
}

export function getLessonsByModuleSlug(moduleSlug: string, lang: Locale = 'es'): Lesson[] {
  return getAllLessons(lang).filter(lesson => lesson.moduleSlug === moduleSlug);
}

export function getLessonBySlug(lessonSlug: string, lang: Locale = 'es'): Lesson | undefined {
  const normalized = lessonSlug.toLowerCase();
  return getAllLessons(lang).find(
    l => l.slug.toLowerCase() === normalized || l.id.toLowerCase() === normalized
  );
}
