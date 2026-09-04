import { PresentationContent } from './types';
import { Locale } from '@/types';
import { getLiveLab3Slides } from './m03-03-slides-data';

export const getPresentationM0303 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';
  const slides = getLiveLab3Slides(isEs);

  return {
    id: 'm03-03-live-lab',
    slug: 'm03-03-live-lab',
    lessonId: 'm03-03',
    title: isEs
      ? 'Sesión en Vivo: Clínica de Hooks & Deconstrucción de Formatos'
      : 'Live Masterclass: Hook Forensics & Native Formats',
    moduleTag: isEs ? 'SEMANA 3 · SESIÓN EN VIVO' : 'WEEK 3 · LIVE MASTERCLASS',
    estimatedMinutes: 90,
    slides,
  };
};
