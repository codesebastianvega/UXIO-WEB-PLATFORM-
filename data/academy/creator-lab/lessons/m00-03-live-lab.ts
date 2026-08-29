import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0003 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm00-03',
    slug: 'm00-03-sesion-en-vivo-feedback',
    moduleSlug: 'semana-0-induccion',
    title: isEs
      ? 'Clase 0.2 — Sesión en Vivo: Feedback & Setup Grupal'
      : 'Lesson 0.2 — Live Session: Group Feedback & Setup',
    type: 'live_lab',
    duration: '60 min',
    objective: isEs
      ? 'Resolver dudas técnicas sobre tu kit de grabación y recibir feedback directo en vivo.'
      : 'Solve technical gear questions and get live group feedback.',
    topics: isEs
      ? [
          'Revisión en vivo de los kits y cámaras de los alumnos',
          'Ajustes de iluminación natural y encuadres con el celular',
          'Ronda de preguntas y respuestas abiertas de la cohorte',
        ]
      : [
          'Live review of student mobile gear and setups',
          'Natural lighting calibration and framing with phones',
          'Open Q&A round for the cohort',
        ],
    microclasses: [
      {
        id: 'live-01',
        title: isEs ? 'Sala de Transmisión & Grabación Completa' : 'Live Room & Full Replay',
        duration: '60 min',
        videoUrl: 'https://youtube.com/watch?v=live-recording-demo',
        description: isEs
          ? 'Sesión semanal de 60 minutos con el docente para resolver dudas y feedback.'
          : 'Weekly 60-minute live call with instructor for Q&A and feedback.',
      },
    ],
    resources: [
      {
        id: 'res-live-01',
        title: isEs
          ? 'Guía de Preguntas Frecuentes de la Sesión'
          : 'Live Session FAQ Handout',
        type: 'pdf',
        url: '#',
      },
    ],
  };
};
