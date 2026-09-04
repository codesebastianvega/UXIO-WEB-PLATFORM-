import { PresentationContent } from './types';
import { Locale } from '@/types';
import { getLiveLab2Slides } from './m02-04-slides-data';

export const getPresentationM0203 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';
  const slides = getLiveLab2Slides(isEs);

  return {
    id: 'm02-03-live-lab',
    slug: 'm02-03-live-lab',
    lessonId: 'm02-03',
    title: isEs
      ? 'Sesión en Vivo: Clínica de Grabación & Script Doctoring'
      : 'Live Masterclass: Filming Clinic & Script Doctoring',
    moduleTag: isEs ? 'SEMANA 2 · SESIÓN EN VIVO' : 'WEEK 2 · LIVE MASTERCLASS',
    estimatedMinutes: 90,
    slides,
  };
};
