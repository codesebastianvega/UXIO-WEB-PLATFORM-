import { PresentationContent } from './types';
import { Locale } from '@/types';
import { getLiveLab4Slides } from './m04-03-slides-data';

export const getPresentationM0403 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';
  const slides = getLiveLab4Slides(isEs);

  return {
    id: 'm04-03-live-lab',
    slug: 'm04-03-live-lab',
    lessonId: 'm04-03',
    title: isEs
      ? 'Sesión en Vivo: Clínica de Edición en Directo & Timeline'
      : 'Live Masterclass: Editing Clinic & Timeline Forensics',
    moduleTag: isEs ? 'SEMANA 4 · SESIÓN EN VIVO' : 'WEEK 4 · LIVE MASTERCLASS',
    estimatedMinutes: 90,
    slides,
  };
};
