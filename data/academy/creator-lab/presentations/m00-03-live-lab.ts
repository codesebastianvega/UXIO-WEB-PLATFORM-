import { PresentationContent } from './types';
import { Locale } from '@/types';
import { getLiveLabSlides } from './m00-03-slides-data';

export const getPresentationM0003 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';
  const slides = getLiveLabSlides(isEs);

  return {
    id: 'pres-m00-03',
    slug: 'm00-03-live-lab',
    lessonId: 'm00-03',
    title: isEs
      ? 'Sesión en Vivo: Kickoff Oficial Creator Lab'
      : 'Live Kickoff Masterclass: Creator Lab',
    moduleTag: isEs ? 'SEMANA 0 · SESIÓN EN VIVO' : 'WEEK 0 · LIVE MASTERCLASS',
    estimatedMinutes: 90,
    slides,
  };
};
