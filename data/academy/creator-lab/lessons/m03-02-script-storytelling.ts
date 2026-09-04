import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0302 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm03-02',
    slug: 'estructuras-de-guion-y-storytelling',
    moduleSlug: 'semana-3-creacion',
    title: isEs ? 'Estructuras de Guion & Storytelling' : 'Script Frameworks & Storytelling',
    type: 'microclass',
    duration: '16 min',
    objective: isEs
      ? 'Dominar las estructuras de persuasión comercial (PAS, BAB, AIDA) y el relato del fundador para redactar guiones de 45 segundos en 10 minutos.'
      : 'Master commercial persuasion models (PAS, BAB, AIDA) and founder storytelling to write 45-second scripts in 10 minutes.',
    topics: isEs
      ? [
          'Framework PAS (Problema → Agitación → Solución → CTA)',
          'Framework BAB (Antes → Puente → Después) para transformaciones',
          'Storytelling de Fundador: El poder de la vulnerabilidad estratégica',
        ]
      : [
          'PAS Framework (Problem → Agitation → Solution → CTA)',
          'BAB Framework (Before → Bridge → After) for transformations',
          'Founder Storytelling: Strategic vulnerability and non-negotiable standards',
        ],
    presentationSlug: 'm03-02-01-script-frameworks',
    microclasses: [
      {
        id: 'mc-03-02-01',
        title: isEs ? '1. Estructuras de Guion: PAS, BAB & AIDA' : '1. Script Frameworks: PAS, BAB & AIDA',
        duration: '5:00 min',
        description: isEs
          ? 'Los 3 modelos comprobados de redacción publicitaria aplicados al formato de video corto de 45 segundos.'
          : 'The 3 proven copywriting frameworks applied to 45-second short-form video.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm03-02-01-script-frameworks',
      },
      {
        id: 'mc-03-02-02',
        title: isEs ? '2. Storytelling de Fundador' : '2. Founder Storytelling & Values',
        duration: '5:00 min',
        description: isEs
          ? 'Cómo narrar anécdotas y crisis reales de tu negocio para construir autoridad inquebrantable y conexión humana.'
          : 'Narrating real business hurdles to build authentic authority and brand loyalty.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm03-02-02-storytelling-founder',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint: Guionización & Storytelling' : 'Checkpoint: Scripting & Storytelling',
      description: isEs
        ? 'Evalúa tu comprensión de los frameworks de persuasión antes de escribir tus guiones.'
        : 'Test your grasp of persuasion frameworks before writing your scripts.',
      questions: [
        {
          id: 'q1',
          question: isEs
            ? '¿Cuál es el objetivo de la fase de "Agitación" en la fórmula PAS?'
            : 'What is the purpose of the "Agitation" phase in the PAS framework?',
          options: isEs
            ? [
                'Dimensionar las consecuencias y el costo real de dejar el problema sin resolver',
                'Poner música estruendosa en el video',
                'Hacer que el video dure más de 5 minutos',
                'Pedir que sigan tu cuenta',
              ]
            : [
                'Quantify the tangible cost and friction of leaving the problem unsolved',
                'Play loud background audio',
                'Make the video exceed 5 minutes',
                'Ask viewers to subscribe',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'La agitación conecta emocionalmente al prospecto con la urgencia de resolver su dolor.'
            : 'Agitation links the viewer emotionally with the real cost of procrastination.',
        },
        {
          id: 'q2',
          question: isEs
            ? '¿Qué diferencia al storytelling auténtico de fundador del autobombo corporativo?'
            : 'What separates genuine founder storytelling from corporate bragging?',
          options: isEs
            ? [
                'El storytelling muestra la vulnerabilidad, los errores y la lección aprendida',
                'El storytelling requiere contratar actores profesionales',
                'El storytelling solo se hace en televisión',
                'El autobombo siempre vende más',
              ]
            : [
                'Storytelling reveals vulnerability, mistakes, and learned quality standards',
                'Storytelling requires hiring professional actors',
                'Storytelling only works on television',
                'Bragging always converts better',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'Mostrar el error humano y la lección aprendida genera empatía y respeto instantáneo.'
            : 'Sharing human struggles and non-negotiable standards inspires buyer trust.',
        },
        {
          id: 'q3',
          question: isEs
            ? '¿Qué duración debe tener la fase de Solución y Demostración en un Reel de 45 segundos?'
            : 'What duration should the Solution & Demo act take in a 45s Reel?',
          options: isEs
            ? [
                'Entre 15 y 20 segundos con apoyo de tomas de B-roll',
                '40 segundos completos sin dejar tiempo al cierre',
                '1 segundo',
                '10 minutos',
              ]
            : [
                '15 to 20 seconds layered with tactile B-roll cuts',
                '40 full seconds leaving no room for CTA',
                '1 second',
                '10 minutes',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? '15 a 20 segundos es el tiempo exacto para demostrar visualmente el resultado con B-roll sin perder el ritmo.'
            : '15 to 20 seconds is the sweet spot to validate your claim with B-roll before closing.',
        },
      ],
    },
    resources: [
      {
        id: 'res-m03-02-01',
        title: isEs ? 'Bóveda de Frameworks de Guion (PAS, BAB & Story)' : 'Script Frameworks Vault (PAS, BAB & Story)',
        description: isEs
          ? 'Plantillas descargables para guionizar tus piezas en 4 actos en menos de 10 minutos.'
          : 'Downloadable templates to script your 4-act assets in under 10 minutes.',
        type: 'template',
        url: '#script-frameworks-vault',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 3.2: Escribe 2 Guiones Comerciales Completos' : 'Challenge 3.2: Write 2 Full Commercial Scripts',
      whatToDo: isEs
        ? 'Escribe 1 guion comercial usando el framework PAS (45s) y 1 guion usando el framework Storytelling de Fundador (45s).'
        : 'Write 1 commercial script using PAS framework (45s) and 1 script using Founder Storytelling framework (45s).',
      whatToDeliver: isEs
        ? 'Tus 2 guiones estructurados listos para ser auditados en el Live Lab de la Lección 3.3.'
        : 'Your 2 structured scripts ready for live audit in Lesson 3.3 Live Lab.',
      whereToSubmit: isEs ? 'Libreta de Guiones del Aula Virtual' : 'Classroom Script Workspace',
      evaluationCriteria: isEs
        ? [
            'Estructura exacta en 4 actos para el guion PAS.',
            'Relato con crisis y lección para el guion de Fundador.',
            'Llamado a la acción claro hacia WhatsApp.',
          ]
        : [
            'Exact 4-act structure on the PAS script.',
            'Genuine obstacle and quality lesson on Founder Story.',
            'Clear keyword trigger CTA bridging to WhatsApp.',
          ],
    },
  };
};
