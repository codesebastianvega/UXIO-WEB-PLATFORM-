import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0403 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm04-03',
    slug: 'live-lab-clinica-de-edicion-y-timeline',
    moduleSlug: 'semana-4-edicion-ia',
    title: isEs ? 'Live Lab: Clínica de Edición en Directo & Timeline' : 'Live Lab: Editing Clinic & Timeline Forensics',
    type: 'live_lab',
    duration: '90 min',
    objective: isEs
      ? 'Sesión en vivo de 90 minutos para auditar timelines de alumnos, teardown de ritmo de retención y edición en caliente en CapCut móvil frente a la cohorte.'
      : '90-minute live masterclass to audit student timelines, teardown retention pacing, and execute live CapCut surgery.',
    topics: isEs
      ? [
          'Diagnóstico clínico de timelines: Los 4 errores fatales de edición amateur',
          'Teardown: Edición de $10 USD vs Edición Cinemática Pro en Direct Response',
          'Hot Seat en Vivo: El instructor edita en tiempo real los clips crudos de 1 alumno en 8 minutos',
        ]
      : [
          'Clinical timeline audit: 4 fatal mistakes of amateur mobile editing',
          'Teardown: $10 Fiverr edit vs $1,000 direct response pro production',
          'Live Hot Seat: Instructor edits 1 student raw footage live in 8 minutes',
        ],
    presentationSlug: 'm04-03-live-lab',
    microclasses: [],
    resources: [
      {
        id: 'res-m04-03-01',
        title: isEs ? 'Cheat Sheet de Atajos & Gestos en CapCut' : 'CapCut Shortcuts & Gestures Cheat Sheet',
        description: isEs
          ? 'Guía rápida de gestos táctiles, estilos tipográficos y exportación 1080p 30 FPS.'
          : 'Quick reference for mobile gestures, caption fonts, and 1080p 30 FPS render preset.',
        type: 'guide',
        url: '#capcut-shortcuts-cheat-sheet',
      },
      {
        id: 'res-m04-03-02',
        title: isEs ? 'Bóveda de Sound Design & Mezcla de Audio' : 'Sound Design Vault & Audio Mix Guide',
        description: isEs
          ? 'Guía de balance en decibeles (-3 dB voz, -6 dB SFX, -20 dB música) y efectos recomendados.'
          : 'Decibel mixing balance guide and recommended royalty-free tactile sound effects.',
        type: 'template',
        url: '#sound-design-vault',
      },
    ],
    challenge: {
      title: isEs ? 'Misión en Vivo: Poda Quirúrgica de tu Timeline' : 'Live Mission: Surgical Trim of Your Timeline',
      whatToDo: isEs
        ? 'Abre tu proyecto actual en CapCut, localiza tu silencio de respiración más largo, recórtalo a 0.1s y comparte "¡Poda completada!" en el chat.'
        : 'Open your CapCut project, locate your longest dead gap, trim it to 0.1s, and share "Trimmed!" in live chat.',
      whatToDeliver: isEs
        ? 'Tu timeline podado y listo para añadir los prompts de IA y entregar el Reto 4 Oficial.'
        : 'Your trimmed timeline ready for AI repurposing and official Challenge 4 submission.',
      whereToSubmit: isEs ? 'Chat en Vivo del Aula Virtual' : 'Classroom Live Chat',
      evaluationCriteria: isEs
        ? [
            'Cero silencios mayores a 0.2s.',
            'Cortes sincronizados con audio.',
            'Preparado para exportar a 1080p 30 FPS.',
          ]
        : [
            'Zero dead pauses over 0.2s.',
            'Waveform-synced cuts.',
            'Ready to render at 1080p 30 FPS.',
          ],
    },
  };
};
