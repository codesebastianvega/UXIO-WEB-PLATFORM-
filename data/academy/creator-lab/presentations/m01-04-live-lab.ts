import { PresentationContent } from './types';
import { Locale } from '@/types';
import { getLiveLab1Slides } from './m01-04-slides-data';

export const getPresentationM0104 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';
  const slides = getLiveLab1Slides(isEs);

  return {
    id: 'm01-04-live-lab',
    slug: 'm01-04-live-lab',
    lessonId: 'm01-04',
    title: isEs
      ? 'Sesión en Vivo: Estrategia de Contenido & Calibración de Ganchos'
      : 'Live Masterclass: Content Strategy & Hook Calibration',
    moduleTag: isEs ? 'SEMANA 1 · SESIÓN EN VIVO' : 'WEEK 1 · LIVE MASTERCLASS',
    estimatedMinutes: 90,
    slides,
  };
};
