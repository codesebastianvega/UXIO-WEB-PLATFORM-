import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0401 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm04-01',
    slug: 'edicion-rapida-y-dinamica-capcut',
    moduleSlug: 'semana-4-edicion-ia',
    title: isEs ? 'Edición Rápida y Dinámica en CapCut Móvil' : 'Fast & Dynamic Mobile CapCut Editing',
    type: 'microclass',
    duration: '14 min',
    objective: isEs
      ? 'Dominar los cortes sin aire (jump cuts), cortes J/L, micro-zooms digitales y subtítulos automáticos animados en CapCut móvil.'
      : 'Master tight jump cuts, audio J/L cuts, digital punch zooms, and dynamic auto-captions in mobile CapCut.',
    topics: isEs
      ? [
          'Eliminación quirúrgica de pausas de memoria y respiraciones',
          'El corte J/L de audio y micro-zooms al 110% en tomas alternadas',
          'Subtítulos automáticos dinámicos con resaltado de color en zona segura',
        ]
      : [
          'Surgical trimming of breathing pauses and dead gaps',
          'Audio J/L cuts and 110% punch zooms on alternating cuts',
          'Dynamic auto-captions with color-highlighted keywords in safe zones',
        ],
    presentationSlug: 'm04-01-01-capcut-cuts-pacing',
    microclasses: [
      {
        id: 'mc-04-01-01',
        title: isEs ? '1. Cortes sin Aire & Ritmo Visual' : '1. Tight Cuts & Visual Pacing',
        duration: '5:00 min',
        description: isEs
          ? 'Cómo eliminar pausas muertas y aplicar micro-zooms del 10% para resetear el reloj de atención del espectador.'
          : 'Eliminating dead pauses and applying 10% punch zooms to reset viewer attention.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm04-01-01-capcut-cuts-pacing',
      },
      {
        id: 'mc-04-01-02',
        title: isEs ? '2. Subtítulos Dinámicos & Resaltado de Color' : '2. Dynamic Captions & Color Highlights',
        duration: '5:00 min',
        description: isEs
          ? 'Configuración de subtítulos automáticos palabra por palabra con estilos y colores de alto contraste para feeds en silencio.'
          : 'Configuring word-by-word animated auto-captions with high-contrast color pills for silent scrolling.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm04-01-02-animated-captions',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint: Edición Dinámica & Subtítulos' : 'Checkpoint: Dynamic Editing & Captions',
      description: isEs
        ? 'Valida tus conceptos de ritmo y montaje en CapCut antes de comenzar a editar.'
        : 'Test your grasp of timeline pacing and CapCut assembly before editing.',
      questions: [
        {
          id: 'q1',
          question: isEs
            ? '¿Por qué es fundamental eliminar las pausas de respiración y silencios mayores a 0.2 segundos en un video vertical?'
            : 'Why must you eliminate breathing pauses and dead gaps longer than 0.2s in vertical video?',
          options: isEs
            ? [
                'Porque en redes sociales los silencios se perciben como el final del video y provocan el abandono',
                'Porque CapCut no permite exportar si hay silencios',
                'Porque los algoritmos bajan la resolución del video',
                'Porque el audio se distorsiona',
              ]
            : [
                'Social feed users perceive dead silence as the video ending and scroll away immediately',
                'CapCut blocks export if silence is detected',
                'Algorithms degrade video resolution',
                'Audio distorts',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'El ritmo continuo y veloz retiene la atención del usuario impidiendo que deslice.'
            : 'Continuous fast pacing keeps the viewer cognitively engaged and prevents swiping.',
        },
        {
          id: 'q2',
          question: isEs
            ? '¿Qué es un "Micro-Zoom Digital" y cómo se aplica en CapCut móvil?'
            : 'What is a "Digital Punch Zoom" and how is it applied in mobile CapCut?',
          options: isEs
            ? [
                'Escalar la toma al 110% en clips alternados para simular una segunda cámara',
                'Usar una lupa física sobre la lente del teléfono',
                'Acercar el teléfono físicamente a la cara mientras hablas',
                'Poner el video en cámara lenta',
              ]
            : [
                'Scaling alternating cuts to 110% with 2 fingers to emulate a two-camera setup',
                'Placing a physical magnifying glass on camera lens',
                'Physically moving phone closer to face while speaking',
                'Setting video to slow motion',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'El cambio sutil de plano cada 3-5 segundos resetea la fatiga visual del espectador.'
            : 'A subtle framing shift every 3-5 seconds resets visual fatigue and keeps the clip fresh.',
        },
        {
          id: 'q3',
          question: isEs
            ? '¿Dónde debe posicionarse el texto de los subtítulos dinámicos en la pantalla 9:16?'
            : 'Where should dynamic captions be positioned on a 9:16 vertical screen?',
          options: isEs
            ? [
                'En el tercio inferior medio (sobre el nombre de usuario y debajo de la barbilla)',
                'En la parte superior tapando los ojos del hablante',
                'En la esquina inferior derecha debajo de los botones de interacción',
                'En el centro exacto tapando la boca del hablante',
              ]
            : [
                'In lower-middle third (safely above platform UI handles and below chin)',
                'At top edge covering speaker eyes',
                'In bottom right corner covered by UI like icons',
                'In exact center covering speaker mouth',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'El tercio inferior medio garantiza legibilidad limpia sin ser tapado por los elementos de la interfaz de Instagram o TikTok.'
            : 'The lower-middle zone ensures clean readability unobstructed by platform UI buttons or captions.',
        },
      ],
    },
    resources: [
      {
        id: 'res-m04-01-01',
        title: isEs ? 'Cheat Sheet de Gestos y Atajos en CapCut Móvil' : 'CapCut Mobile Gestures & Shortcuts Cheat Sheet',
        description: isEs
          ? 'Guía rápida descargable con gestos táctiles, ajustes de subtítulos y configuración de exportación.'
          : 'Downloadable cheat sheet with touchscreen gestures, caption styling, and export presets.',
        type: 'guide',
        url: '#capcut-shortcuts-cheat-sheet',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 4.1: Edita los Primeros 15 Segundos de tu Video' : 'Challenge 4.1: Edit the First 15 Seconds of Your Video',
      whatToDo: isEs
        ? 'Importa tus clips de la Semana 2 o 3 en CapCut. Elimina todos los silencios del gancho (0-3s) y problema (3-15s) y añade subtítulos dinámicos con 2 palabras resaltadas.'
        : 'Import your raw takes into CapCut. Trim all silence from hook (0-3s) and problem (3-15s) and add dynamic captions with 2 highlighted keywords.',
      whatToDeliver: isEs
        ? 'Tu proyecto guardado en CapCut listo para añadir B-roll y sound design en la siguiente clase.'
        : 'Your saved CapCut project ready to layer B-roll and sound design in next lesson.',
      whereToSubmit: isEs ? 'Libreta de Trabajo del Aula Virtual' : 'Classroom Workspace Notes',
      evaluationCriteria: isEs
        ? [
            'Cero silencios mayores a 0.2 segundos.',
            'Subtítulos automáticos legibles en zona segura.',
            'Micro-zoom aplicado en la segunda frase.',
          ]
        : [
            'Zero dead pauses over 0.2 seconds.',
            'Legible dynamic captions in safe zone.',
            'Punch zoom applied on second sentence.',
          ],
    },
  };
};
