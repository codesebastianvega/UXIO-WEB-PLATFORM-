import { PresentationContent } from './types';
import { Locale } from '@/types';
import { getLiveLab5Slides } from './m05-03-slides-data';

export const getPresentationM0503 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';
  const slides = getLiveLab5Slides(isEs);

  return {
    id: 'm05-03-live-lab',
    slug: 'm05-03-live-lab',
    lessonId: 'm05-03',
    title: isEs
      ? 'Sesión en Vivo: Clínica de Cierre, Embudo a WhatsApp & Graduación'
      : 'Live Masterclass: Sales Closing Clinic & Capstone Graduation',
    moduleTag: isEs ? 'SEMANA 5 · SESIÓN EN VIVO' : 'WEEK 5 · LIVE MASTERCLASS',
    estimatedMinutes: 90,
    slides,
  };
};
