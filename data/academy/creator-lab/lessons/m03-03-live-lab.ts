import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0303 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm03-03',
    slug: 'live-lab-clinica-de-hooks-y-formatos',
    moduleSlug: 'semana-3-creacion',
    title: isEs ? 'Live Lab: Clínica de Hooks & Deconstrucción de Formatos' : 'Live Lab: Hook Forensics & Native Formats',
    type: 'live_lab',
    duration: '90 min',
    objective: isEs
      ? 'Sesión en vivo de 90 minutos para diagnosticar curvas de retención, desarmar carruseles virales y realizar script doctoring en directo con los alumnos antes de la entrega oficial.'
      : '90-minute live masterclass to diagnose retention graphs, teardown viral carousels, and run live script doctoring sprints.',
    topics: isEs
      ? [
          'Diagnóstico forense del gráfico de retención: El acantilado del segundo 3 y el valle del aburrimiento',
          'Teardown: Por qué un carrusel generó 1.200 guardados vs por qué otro fue ignorado',
          'Hot Seats en directo: Corrección y calibración de guiones de los alumnos en tiempo real',
        ]
      : [
          'Retention graph forensics: The second-3 cliff and mid-video boredom valley',
          'Teardown: Slide-by-slide autopsy of a 1.2K save carousel vs zero-engagement flop',
          'Live student hot seats: Real-time script doctoring and hook calibration',
        ],
    presentationSlug: 'm03-03-live-lab',
    microclasses: [],
    resources: [
      {
        id: 'res-m03-03-01',
        title: isEs ? 'Bóveda de Ganchos: 30 Fórmulas de Retención' : 'Hooks Vault: 30 Retention Formulas',
        description: isEs
          ? 'Banco de ganchos categorizados por Fricción, Curiosidad y Promesa con ejemplos reales.'
          : 'Hook swipe file categorized by Friction, Curiosity, and Promise with examples.',
        type: 'guide',
        url: '#hook-master-swipefile',
      },
      {
        id: 'res-m03-03-02',
        title: isEs ? 'Bóveda de Frameworks de Guion (PAS, AIDA, BAB)' : 'Script Frameworks Vault (PAS, AIDA, BAB)',
        description: isEs
          ? 'Estructuras de persuasión directa calibradas a 45 segundos con plantillas de llenado.'
          : 'Direct persuasion architectures calibrated to 45 seconds with fill-in templates.',
        type: 'template',
        url: '#script-frameworks-vault',
      },
    ],
    challenge: {
      title: isEs ? 'Misión en Vivo: Calibración de tu Gancho Triple' : 'Live Mission: Calibrate Your Triple Hook',
      whatToDo: isEs
        ? 'Participa en la dinámica en directo escribiendo tu gancho triple (Visual + Verbal + Texto) en el chat para recibir retroalimentación inmediata del instructor.'
        : 'Participate in the live chat sprint sharing your triple hook for real-time instructor calibration.',
      whatToDeliver: isEs
        ? 'Tu gancho validado y listo para rodar en la Lección 3.4 (Formatos Nativos).'
        : 'Your validated hook ready to produce in Lesson 3.4 (Native Formats).',
      whereToSubmit: isEs ? 'Chat en Vivo del Aula Virtual' : 'Classroom Live Chat',
      evaluationCriteria: isEs
        ? [
            'Gancho que ataca un dolor sin saludos ni rodeos.',
            'Titular de texto de alto impacto en zona segura.',
            'Llamado a la acción con palabra clave hacia WhatsApp.',
          ]
        : [
            'Hook attacking friction without corporate greetings.',
            'High-impact safe-zone text title.',
            'Keyword trigger CTA bridging to WhatsApp.',
          ],
    },
  };
};
