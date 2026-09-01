import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0003 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm00-03',
    slug: 'sesion-en-vivo-kickoff',
    moduleSlug: 'semana-0-induccion',
    title: isEs ? 'Clase 0.3 — Sesión en Vivo: Kickoff Oficial' : 'Lesson 0.3 — Live Kickoff Session',
    type: 'live_lab',
    duration: '45 min',
    objective: isEs
      ? 'Alinear acuerdos de la cohorte, presentar al equipo docente y resolver preguntas en vivo sobre el setup y metodología.'
      : 'Establish cohort agreements, meet the mentors, and answer live questions about smartphone setup and roadmap.',
    topics: isEs
      ? [
          'Bienvenida comunitaria y presentación de la cohorte 01',
          'Los 3 compromisos de entrega y cultura de feedback',
          'Línea de tiempo semanal (Lunes a Domingo)',
          'Ronda abierta de preguntas y respuestas (Q&A en vivo)',
        ]
      : [
          'Cohort 01 community welcome and mentor intros',
          '3 core milestone agreements and positive feedback culture',
          'Weekly operating cadence (Monday to Sunday)',
          'Open live Q&A session',
        ],
    presentationSlug: 'm00-03-live-lab',
    microclasses: [],
    resources: [
      {
        id: 'res-00-03-01',
        title: isEs ? 'Diapositivas de la Sesión en Vivo (PDF 16:9)' : 'Live Session Slide Deck (16:9 PDF)',
        type: 'pdf',
        url: '/resources/kickoff-live-slides.pdf',
        description: isEs
          ? 'Descarga la presentación maestra con los acuerdos y fechas clave de la cohorte.'
          : 'Download master presentation with agreements and key dates.',
      },
      {
        id: 'res-00-03-02',
        title: isEs ? 'Grupo Privado de WhatsApp de la Cohorte 01' : 'Cohort 01 Private WhatsApp Group',
        type: 'link',
        url: 'https://chat.whatsapp.com/uxio-creator-lab-01',
        description: isEs
          ? 'Únete para recibir alertas de sesiones en vivo y avisos urgentes.'
          : 'Join for live session reminders and cohort updates.',
      },
    ],
  };
};
