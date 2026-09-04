import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0203 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm02-03',
    slug: 'live-lab-clinica-de-grabacion',
    moduleSlug: 'semana-2-grabacion',
    title: isEs ? 'Live Lab: Clínica de Grabación & Script Doctoring' : 'Live Lab: Filming Clinic & Script Doctoring',
    type: 'live_lab',
    duration: '90 min',
    objective: isEs
      ? 'Sesión en vivo de 90 minutos para resolver escenarios difíciles de iluminación, vencer el miedo escénico y transformar guiones de alumnos en directo antes del rodaje final.'
      : '90-minute live masterclass to solve tough lighting setups, overcome camera anxiety, and doctor student scripts live.',
    topics: isEs
      ? [
          'Set Teardown: Grabación nocturna (luz rebotada), reflejos en gafas y control de eco',
          'Psicología de cámara: Vencer el qué dirán, la Toma Cero y hablarle a un solo cliente',
          'Teardown forense de anuncio de $3.8K USD y taller de Script Doctoring en vivo',
        ]
      : [
          'Set Teardown: Night bounce light, glasses reflection fix, and acoustic traps',
          'Camera Psychology: Overcoming judgment, Take Zero drill, and single-client avatar',
          '$3.8K Ad forensic teardown and live student script doctoring sprint',
        ],
    presentationSlug: 'm02-03-live-lab',
    microclasses: [],
    resources: [
      {
        id: 'res-m02-03-01',
        title: isEs ? 'Guía de Calibración de Cámara Móvil' : 'Mobile Camera Calibration Guide',
        description: isEs
          ? 'Parámetros técnicos de sensor, FPS, obturador y bloqueo de enfoque/exposición.'
          : 'Technical sensor specs, FPS, shutter rule, and exposure lock.',
        type: 'guide',
        url: '#camera-calibration',
      },
      {
        id: 'res-m02-03-02',
        title: isEs ? 'Checklist de 30 Clips de B-Roll' : '30-Clip B-Roll Checklist',
        description: isEs
          ? 'Banco de tomas de apoyo esenciales divididas en 5 categorías táctiles.'
          : 'Essential supporting B-roll cutaway bank across 5 tactile categories.',
        type: 'template',
        url: '#broll-30-checklist',
      },
    ],
    challenge: {
      title: isEs ? 'Misión en Vivo: Tu Gancho de Fricción Calibrado' : 'Live Mission: Your Calibrated Friction Hook',
      whatToDo: isEs
        ? 'Participa en la dinámica de 3 minutos durante la sesión en vivo escribiendo tu gancho de fricción en el chat para recibir feedback y validación directa del instructor.'
        : 'Participate in the 3-minute live sprint writing your friction hook in chat for direct instructor validation.',
      whatToDeliver: isEs
        ? 'Tu gancho validado y listo para rodar en la Lección 2.4 (Grabarte Hablando).'
        : 'Your approved hook ready to film in Lesson 2.4 (Speaking on Camera).',
      whereToSubmit: isEs ? 'Chat en Vivo del Aula Virtual' : 'Classroom Live Chat',
      evaluationCriteria: isEs
        ? [
            'Gancho que ataca directamente un dolor costoso del cliente.',
            'Cero rodeos o presentaciones corporativas.',
            'Llamado a la acción con palabra clave hacia WhatsApp.',
          ]
        : [
            'Hook attacking a costly customer pain directly.',
            'Zero corporate intros or rambling.',
            'Keyword CTA bridging to WhatsApp chat.',
          ],
    },
  };
};
