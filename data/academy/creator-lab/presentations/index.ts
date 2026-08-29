import { PresentationContent } from './types';
import { Locale } from '@/types';
import { getPresentationM0001 } from './m00-01-welcome';

export * from './types';
export * from './m00-01-welcome';

export function getAllPresentations(lang: Locale = 'es'): PresentationContent[] {
  return [getPresentationM0001(lang)];
}

export function getPresentationBySlug(slug: string, lang: Locale = 'es'): PresentationContent | undefined {
  const normalized = slug.toLowerCase();
  return getAllPresentations(lang).find(
    p => p.slug.toLowerCase() === normalized || p.id.toLowerCase() === normalized
  );
}

export function getPresentationByLessonId(lessonId: string, lang: Locale = 'es'): PresentationContent | undefined {
  const normalized = lessonId.toLowerCase();
  return getAllPresentations(lang).find(p => p.lessonId.toLowerCase() === normalized);
}
