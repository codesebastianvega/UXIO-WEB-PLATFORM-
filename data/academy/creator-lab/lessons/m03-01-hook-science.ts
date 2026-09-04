import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0301 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm03-01',
    slug: 'la-ciencia-del-hook',
    moduleSlug: 'semana-3-creacion',
    title: isEs ? 'La Ciencia del Hook (Los Primeros 3s)' : 'The Science of the Hook (First 3s)',
    type: 'microclass',
    duration: '14 min',
    objective: isEs
      ? 'Dominar las fórmulas psicológicas y la sincronía triple (Visual + Verbal + Texto) para detener el scroll en los primeros 3 segundos.'
      : 'Master psychological hook formulas and the triple hook synchronization (Visual + Spoken + Text) to stop the scroll in 3 seconds.',
    topics: isEs
      ? [
          'Los 4 arquetipos psicológicos de gancho: Fricción, Curiosidad, Contraste y Promesa',
          'La sincronía triple: Movimiento visual + entonación verbal + titular en zona segura',
          'Eliminación de la caída del 40% en el segundo 3',
        ]
      : [
          'The 4 psychological hook archetypes: Friction, Curiosity, Contrast, and Promise',
          'The triple hook sync: Visual motion + spoken punch + safe zone headline',
          'Eliminating the 40% second-3 retention cliff',
        ],
    presentationSlug: 'm03-01-01-hook-psychology',
    microclasses: [
      {
        id: 'mc-03-01-01',
        title: isEs ? '1. Psicología del Hook (Los Primeros 3s)' : '1. Hook Psychology (First 3s)',
        duration: '5:00 min',
        description: isEs
          ? 'Por qué el 70% de la audiencia decide quedarse o deslizar antes de escuchar la primera frase.'
          : 'Why 70% of viewers decide to stay or scroll before decoding the first sentence.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm03-01-01-hook-psychology',
      },
      {
        id: 'mc-03-01-02',
        title: isEs ? '2. La Sincronía del Gancho Triple' : '2. The Triple Hook Synchronization',
        duration: '5:00 min',
        description: isEs
          ? 'Cómo combinar acción visual en el frame 0, pegada verbal y titular grande para atrapar a usuarios en silencio.'
          : 'Harmonizing frame-0 visual motion, vocal attack, and bold text for muted feed scrollers.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm03-01-02-visual-verbal-hooks',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint: La Ciencia del Hook' : 'Checkpoint: The Science of the Hook',
      description: isEs
        ? 'Valida tu dominio de los disparadores psicológicos antes de redactar tus ganchos.'
        : 'Test your grasp of psychological hook triggers before drafting your scripts.',
      questions: [
        {
          id: 'q1',
          question: isEs
            ? '¿Por qué los saludos corporativos ("Hola amigos, espero que estén bien") destruyen la retención de un video vertical?'
            : 'Why do corporate greetings ("Hi everyone, hope you are well") kill vertical video retention?',
          options: isEs
            ? [
                'Porque desperdician los primeros 3 segundos sin plantear ningún dolor o curiosidad',
                'Porque el algoritmo bloquea la palabra "hola"',
                'Porque hacen que el video sea demasiado corto',
                'Porque solo funcionan en YouTube horizontal',
              ]
            : [
                'They waste the critical 3-second window without stating any pain or curiosity',
                'The algorithm blocks the greeting word',
                'They make the clip too short',
                'They only work on horizontal YouTube',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'El usuario en redes sociales es impaciente; si en 1.5 segundos no ve un beneficio claro, continúa deslizando.'
            : 'Social feed scrollers are impatient; if no clear hook or friction is delivered within 1.5s, they scroll away.',
        },
        {
          id: 'q2',
          question: isEs
            ? '¿Qué elementos componen la técnica del "Gancho Triple UXIO"?'
            : 'What 3 elements constitute the "UXIO Triple Hook" method?',
          options: isEs
            ? [
                'Gancho Visual (movimiento) + Gancho Verbal (voz) + Texto en Pantalla (titular bold)',
                'Tres cámaras grabando al mismo tiempo',
                'Tres personas hablando al unísono',
                'Tres canciones sonando de fondo',
              ]
            : [
                'Visual Hook (motion) + Verbal Hook (voice) + On-Screen Text (bold headline)',
                'Three cameras filming simultaneously',
                'Three speakers talking in unison',
                'Three songs playing concurrently',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'Estimular los 3 canales sensoriales simultáneamente atrapa tanto a los usuarios con audio encendido como a los que navegan en silencio.'
            : 'Stimulating all 3 sensory channels simultaneously captures both sound-on and muted feed viewers.',
        },
        {
          id: 'q3',
          question: isEs
            ? '¿Dónde debe ubicarse el titular de texto del gancho en la pantalla vertical 9:16?'
            : 'Where should the hook text headline be positioned on a 9:16 vertical screen?',
          options: isEs
            ? [
                'En el tercio superior dentro de la zona segura (Safe Zone)',
                'En la esquina inferior derecha tapando los botones de like',
                'En el borde superior pegado a la barra de batería',
                'En el centro exacto tapando la cara del hablante',
              ]
            : [
                'In the upper third within the platform Safe Zone',
                'In bottom right corner covered by UI like buttons',
                'At extreme top edge over battery bar',
                'In exact center covering speaker face',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'El tercio superior garantiza visibilidad limpia sin ser tapado por los subtítulos, botones o descripciones de la plataforma.'
            : 'The upper third ensures unobstructed readability free from captions, action buttons, and platform descriptions.',
        },
      ],
    },
    resources: [
      {
        id: 'res-m03-01-01',
        title: isEs ? 'Bóveda de Ganchos: 30 Fórmulas de Alta Retención' : 'Hooks Vault: 30 High-Retention Formulas',
        description: isEs
          ? 'Bóveda descargable de fórmulas psicológicas clasificadas por dolor, curiosidad y promesa.'
          : 'Downloadable vault of psychological hook formulas categorized by pain, curiosity, and promise.',
        type: 'guide',
        url: '#hook-master-swipefile',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 3.1: Valida 6 Ganchos Triples para tu Negocio' : 'Challenge 3.1: Validate 6 Triple Hooks for Your Business',
      whatToDo: isEs
        ? 'Toma 2 ideas de tu Matriz de Contenido de la Semana 1 y redacta 3 variaciones de gancho para cada una (1 de Fricción, 1 de Curiosidad y 1 de Contraste).'
        : 'Take 2 ideas from your Week 1 Content Matrix and draft 3 hook variations for each (1 Friction, 1 Curiosity, 1 Contrast).',
      whatToDeliver: isEs
        ? 'Tus 6 ganchos con su titular de texto listos en tus notas para usarlos en el Live Lab.'
        : 'Your 6 hooks with on-screen titles ready in your notes for the Live Lab.',
      whereToSubmit: isEs ? 'Libreta de Trabajo del Aula Virtual' : 'Classroom Workspace Notes',
      evaluationCriteria: isEs
        ? [
            'Ganchos que atacan dolores específicos sin saludos corporativos.',
            'Inclusión de titular de texto de máximo 5 palabras.',
            'Variedad de arquetipos psicológicos.',
          ]
        : [
            'Hooks attacking specific friction without corporate greetings.',
            'Inclusion of 5-word max on-screen title.',
            'Variety across psychological archetypes.',
          ],
    },
  };
};
