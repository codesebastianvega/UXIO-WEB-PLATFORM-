import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0001 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm00-01',
    slug: 'bienvenida-a-creator-lab',
    moduleSlug: 'semana-0-induccion',
    title: isEs ? 'Clase 0 — Bienvenida a UXIO Creator Lab' : 'Lesson 0 — Welcome to Creator Lab',
    type: 'microclass',
    duration: '8 min',
    objective: isEs
      ? 'Entender la dinámica del programa, el ritmo de entregables y las reglas de la comunidad.'
      : 'Understand program mechanics, weekly pace, and community rules.',
    topics: isEs
      ? [
          'Cómo funciona el programa y la plataforma',
          'Calendario y ritmo de entregables',
          'Reglas de la comunidad',
          'Qué necesitas para arrancar',
        ]
      : [
          'Program roadmap & platform mechanics',
          'Calendar and weekly deliverable pace',
          'Community guidelines',
          'Prerequisites',
        ],
    presentationSlug: 'm00-01-welcome',
    microclasses: [
      {
        id: 'mc-00-01-01',
        title: isEs ? '1. Manifiesto y Visión de Creator Lab' : '1. Creator Lab Manifesto & Vision',
        duration: '3 min',
        description: isEs
          ? 'Por qué aprender a crear contenido con tu celular es la habilidad más rentable para tu negocio.'
          : 'Why mobile content creation is the highest ROI skill for modern business.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
      },
      {
        id: 'mc-00-01-02',
        title: isEs ? '2. La Regla de Oro: Progresar antes de Perfeccionar' : '2. Action over Perfection Rule',
        duration: '5 min',
        description: isEs
          ? 'Cómo vencer el perfeccionismo inicial y aprovechar los entregables semanales.'
          : 'Overcoming perfectionism to complete the weekly milestones.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
      },
    ],
    resources: [
      {
        id: 'res-00-01-01',
        title: isEs ? 'Guía de Inicio Rápido Creator Lab (PDF)' : 'Creator Lab Quickstart Guide (PDF)',
        type: 'pdf',
        url: '/resources/creator-lab-quickstart.pdf',
        description: isEs ? 'Resumen visual de las 5 semanas y fechas clave.' : 'Visual overview of the 5 weeks and milestones.',
      },
      {
        id: 'res-00-01-02',
        title: isEs ? 'Plantilla de Diagnóstico de Marca' : 'Brand Diagnosis Template',
        type: 'template',
        url: 'https://notion.so/uxio/brand-diagnosis',
        description: isEs ? 'Documento editable para definir el objetivo comercial de tu negocio.' : 'Editable worksheet for business goals.',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 0: Ficha de Diagnóstico de Marca' : 'Challenge 0: Brand Diagnosis Sheet',
      whatToDo: isEs
        ? 'Diligencia la plantilla de diagnóstico con la información de tu producto o servicio actual y fija tu meta de ventas para las 5 semanas.'
        : 'Complete the brand diagnosis worksheet with your current offer and set your 5-week conversion goal.',
      whatToDeliver: isEs
        ? 'Enlace a tu ficha de diagnóstico o documento PDF en el canal de comunidad.'
        : 'Link to your completed worksheet or PDF in the community channel.',
      whereToSubmit: 'Comunidad Privada de Alumnos / Canal #semana-0-induccion',
      evaluationCriteria: [
        isEs ? 'Claridad en la definición del cliente ideal' : 'Clear target customer definition',
        isEs ? 'Objetivo cuantitativo para las 5 semanas' : 'Quantitative 5-week goal',
        isEs ? 'Identificación de al menos 3 dolores reales' : 'At least 3 defined pain points',
      ],
    },
  };
};
