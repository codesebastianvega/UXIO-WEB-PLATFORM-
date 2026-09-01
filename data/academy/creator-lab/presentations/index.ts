import { PresentationContent } from './types';
import { Locale } from '@/types';
import { getPresentationM0001 } from './m00-01-welcome';
import { getPresentationM000101 } from './m00-01-01-manifesto';
import { getPresentationM000102 } from './m00-01-02-golden-rule';
import { getPresentationM0002 } from './m00-02-creator-kit';
import { getPresentationM0003 } from './m00-03-live-lab';

export * from './types';
export * from './m00-01-welcome';
export * from './m00-01-01-manifesto';
export * from './m00-01-02-golden-rule';
export * from './m00-02-creator-kit';
export * from './m00-03-live-lab';

export function getAllPresentations(lang: Locale = 'es'): PresentationContent[] {
  return [
    getPresentationM0001(lang),
    getPresentationM000101(lang),
    getPresentationM000102(lang),
    getPresentationM0002(lang),
    getPresentationM0003(lang),
  ];
}

export function getPresentationBySlug(
  slug: string,
  lang: Locale = 'es'
): PresentationContent | undefined {
  const normalized = slug.toLowerCase();
  return getAllPresentations(lang).find(
    p => p.slug.toLowerCase() === normalized || p.id.toLowerCase() === normalized
  );
}

export function getPresentationByLessonId(
  lessonId: string,
  lang: Locale = 'es'
): PresentationContent | undefined {
  const normalized = lessonId.toLowerCase();
  return getAllPresentations(lang).find(p => p.lessonId.toLowerCase() === normalized);
}
