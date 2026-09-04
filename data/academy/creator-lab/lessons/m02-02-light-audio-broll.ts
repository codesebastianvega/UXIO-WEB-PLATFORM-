import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0202 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm02-02',
    slug: 'luz-audio-y-banco-de-b-roll',
    moduleSlug: 'semana-2-grabacion',
    title: isEs ? 'Luz, Audio y Banco de B-Roll' : 'Light, Audio & B-Roll Library',
    type: 'microclass',
    duration: '16 min',
    objective: isEs
      ? 'Dominar la iluminación natural de ventana, captura de audio nítido y rodaje de un banco de 30 clips de B-roll.'
      : 'Master natural window lighting, crisp audio capture, and build a 30-clip B-roll vault.',
    topics: isEs
      ? [
          'Luz natural de ventana a 45° y eliminación de sombras duras',
          'Audio limpio: distancia de 30 cm y amortiguación de eco con telas',
          'El banco de 30 clips: manos, espacio y resultados en 30 minutos',
        ]
      : [
          '45° soft natural window light and shadow falloff',
          'Crisp vocal audio at 30cm and room echo damping with soft fabrics',
          '30-clip B-roll batching: hands, workspace and finished results in 30 minutes',
        ],
    presentationSlug: 'm02-02-01-window-light-audio',
    microclasses: [
      {
        id: 'mc-02-02-01',
        title: isEs ? '1. Luz de Ventana & Audio Nítido sin Gastar' : '1. Window Light & Crisp Budget Audio',
        duration: '5:00 min',
        description: isEs
          ? 'Posición a 45° para modelar tu rostro con volumen natural y cómo eliminar el eco de habitación vacía.'
          : '45° window placement for natural depth and eliminating empty room echo.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm02-02-01-window-light-audio',
      },
      {
        id: 'mc-02-02-02',
        title: isEs ? '2. El Banco de 30 Clips de B-Roll' : '2. The 30-Clip B-Roll Library',
        duration: '5:00 min',
        description: isEs
          ? 'La técnica de batching para rodar 10 tomas de manos, 10 de tu espacio y 10 de resultados en solo 30 minutos.'
          : 'Batching workflow to film 10 hands, 10 workspace and 10 result shots in 30 minutes.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm02-02-02-broll-bank-30-clips',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint: Iluminación & B-Roll Móvil' : 'Checkpoint: Mobile Lighting & B-Roll',
      description: isEs
        ? 'Valida tus conceptos antes de iniciar tu sesión de rodaje de B-roll.'
        : 'Verify lighting and B-roll principles before your filming session.',
      questions: [
        {
          id: 'q1',
          question: isEs
            ? '¿Cuál es la posición ideal respecto a una ventana para lograr una iluminación suave y tridimensional?'
            : 'What is the optimal position relative to a window for soft, flattering dimension?',
          options: isEs
            ? [
                'Espalda a la ventana para quedar en contraluz',
                'En diagonal a 45° de tu rostro con cortina translúcida',
                'Mirando de frente directo al sol del mediodía',
                'En una habitación a oscuras con flash de celular',
              ]
            : [
                'Back to the window causing a silhouette',
                '45° diagonal to your face with soft diffused curtains',
                'Staring straight into harsh midday sun',
                'In pitch black with phone flashlight',
              ],
          correctOptionIndex: 1,
          explanation: isEs
            ? 'La luz a 45° modela el rostro con sombras suaves y textura natural, evitando la luz plana o siluetas oscuras.'
            : '45° diagonal window light creates flattering dimension without harsh front wash or dark shadows.',
        },
        {
          id: 'q2',
          question: isEs
            ? '¿Cuánto tiempo debe durar cada toma de B-roll para que sea fácil y rápida de editar?'
            : 'How long should each individual B-roll clip be for snappy editing?',
          options: isEs
            ? [
                'Entre 5 y 8 segundos de acción constante',
                'Al menos 5 minutos continuos',
                '1 segundo',
                '30 segundos sin moverse',
              ]
            : [
                'Between 5 and 8 seconds of steady action',
                'At least 5 continuous minutes',
                '1 second',
                '30 seconds static',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'Los clips de 5 a 8 segundos son ligeros, fáciles de transferir y perfectos para cortar en CapCut.'
            : '5-to-8-second clips are lightweight, easy to organize, and ideal for timeline cuts.',
        },
        {
          id: 'q3',
          question: isEs
            ? '¿Cuál es la forma más rápida y económica de amortiguar el eco de una habitación?'
            : 'What is the fastest budget method to eliminate room echo?',
          options: isEs
            ? [
                'Pintar las paredes con barniz',
                'Colocar cojines, cobijas o alfombras cerca del micrófono fuera de cuadro',
                'Comprar paneles de espuma de $500 USD obligatoriamente',
                'Hablar en un susurro inaudible',
              ]
            : [
                'Varnishing the walls',
                'Placing pillows, rugs, or curtains near the mic out of frame',
                'Buying expensive acoustic foam panels',
                'Whispering inaudibly',
              ],
          correctOptionIndex: 1,
          explanation: isEs
            ? 'Las telas y cojines absorben los rebotes agudos de las paredes, logrando audio íntimo de estudio sin costo.'
            : 'Soft fabrics and cushions absorb high-frequency wall reflections for clean vocal presence.',
        },
      ],
    },
    resources: [
      {
        id: 'res-m02-02-01',
        title: isEs ? 'Checklist de los 30 Clips de B-Roll' : '30-Clip B-Roll Library Checklist',
        description: isEs
          ? 'Guía detallada con la lista de 30 tomas organizadas por categoría para tu negocio.'
          : 'Detailed 30-shot checklist organized by category for your business.',
        type: 'guide',
        url: '#broll-30-checklist',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 2.2: Banco de 30 Clips de B-Roll' : 'Challenge 2.2: 30-Clip B-Roll Vault',
      whatToDo: isEs
        ? 'Realiza una sesión de rodaje de 30 minutos y captura 30 clips de 5 segundos organizados en: 10 de manos, 10 de espacio/rutina y 10 de resultados terminados.'
        : 'Conduct a 30-minute batch shoot and record 30 five-second clips: 10 hands, 10 workspace, and 10 finished results.',
      whatToDeliver: isEs
        ? 'Pega el enlace público de tu carpeta de Google Drive (o álbum público) con tus 30 clips de B-roll.'
        : 'Submit public link to your Google Drive folder (or cloud album) containing your 30 B-roll clips.',
      whereToSubmit: isEs ? 'Formulario de Entrega de Reto 2.2' : 'Challenge 2.2 Submission Box',
      evaluationCriteria: isEs
        ? [
            '30 clips de 5 a 8 segundos completos.',
            'Luz natural de ventana y estabilidad de cámara.',
            'Variedad de planos (macro, medio y cenital).',
            'Carpeta compartida accesible con permiso de lectura.',
          ]
        : [
            '30 full clips of 5-8 seconds duration.',
            'Natural window light and camera stability.',
            'Variety of angles (macro, medium, top-down).',
            'Publicly accessible shared cloud link.',
          ],
    },
  };
};
