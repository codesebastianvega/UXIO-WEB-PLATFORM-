import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0204 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm02-04',
    slug: 'grabarte-hablando-y-vencer-la-friccion',
    moduleSlug: 'semana-2-grabacion',
    title: isEs ? 'Grabarte Hablando & Tu Primer Video Comercial' : 'Speaking on Camera & Your First Video',
    type: 'microclass',
    duration: '12 min',
    objective: isEs
      ? 'Dominar la técnica de fragmentación frase por frase y rodar tu primer video comercial completo de 45 a 60 segundos con B-roll intercalado.'
      : 'Master sentence-by-sentence shooting and film your first 45-60s commercial video with B-roll layers.',
    topics: isEs
      ? [
          'Presencia, contacto visual fijo en el lente y dicción',
          'La técnica frase por frase: cero memorizar y tomas cortas',
          'Estructura del video comercial en 4 bloques (Gancho a WhatsApp)',
        ]
      : [
          'Camera presence, locked eye contact on lens and vocal projection',
          'Sentence-by-sentence technique: zero memorization and tight cuts',
          '4-act commercial video structure (Hook to WhatsApp CTA in 45s)',
        ],
    presentationSlug: 'm02-04-01-sentence-by-sentence',
    microclasses: [
      {
        id: 'mc-02-04-01',
        title: isEs ? '1. La Técnica Frase por Frase' : '1. Sentence-by-Sentence Shooting Technique',
        duration: '5:00 min',
        description: isEs
          ? 'Cómo hablar a cámara con naturalidad grabando oraciones independientes sin memorizar discursos largos.'
          : 'Speak to the lens naturally recording standalone sentences with zero memorization.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm02-04-01-sentence-by-sentence',
      },
      {
        id: 'mc-02-04-02',
        title: isEs ? '2. El Guion de Hablar a Cámara (45s)' : '2. The 45s Spoken Video Script',
        duration: '5:00 min',
        description: isEs
          ? 'Los 4 actos temporales: Gancho (0-3s), Dolor (3-15s), Demostración con B-roll (15-35s) y CTA WhatsApp (35-45s).'
          : 'The 4 timing acts: Hook (0-3s), Pain (3-15s), B-roll Demo (15-35s) and WhatsApp CTA (35-45s).',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm02-04-02-spoken-video-script',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint: Hablar a Cámara & Guionización' : 'Checkpoint: Speaking to Camera & Scripting',
      description: isEs
        ? 'Evalúa tu comprensión de la técnica frase por frase antes de grabar tu entrega oficial.'
        : 'Test your grasp of sentence-by-sentence filming before recording your submission.',
      questions: [
        {
          id: 'q1',
          question: isEs
            ? '¿Por qué la técnica frase por frase es superior a memorizar un guion de 60 segundos?'
            : 'Why is the sentence-by-sentence method superior to memorizing a 60-second speech?',
          options: isEs
            ? [
                'Porque te permite mantener energía alta y corregir errores en 5 segundos sin repetir todo',
                'Porque hace que el video dure 10 minutos',
                'Porque no requiere mirar al lente',
                'Porque añade subtítulos automáticos en la cámara',
              ]
            : [
                'Maintains peak energy and allows fixing mistakes in 5s without restarting the whole video',
                'Makes the video 10 minutes long',
                'Does not require eye contact',
                'Adds automated subtitles in camera',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'Grabar oración por oración elimina la ansiedad de memorizar y garantiza frescura en cada corte.'
            : 'Sentence-by-sentence filming removes memorization anxiety and keeps vocal energy fresh on every take.',
        },
        {
          id: 'q2',
          question: isEs
            ? '¿Hacia dónde debes mirar fijamente mientras hablas a la cámara frontal o trasera?'
            : 'Where should you lock your eyes while speaking to the camera?',
          options: isEs
            ? [
                'Hacia tu propia cara en la pantalla para revisar cómo te ves',
                'Directamente al orificio del lente de la cámara',
                'Hacia el techo para recordar la frase',
                'Hacia tus manos en todo momento',
              ]
            : [
                'At your preview face on the screen',
                'Directly at the glass camera lens hole',
                'Up at the ceiling trying to remember lines',
                'Down at your hands continuously',
              ],
          correctOptionIndex: 1,
          explanation: isEs
            ? 'Mirar al lente crea contacto visual directo con el espectador; mirar la pantalla hace que tus ojos parezcan desviados.'
            : 'Looking at the lens creates direct eye contact; looking at screen preview breaks viewer connection.',
        },
        {
          id: 'q3',
          question: isEs
            ? '¿Qué elemento se debe intercalar en el Acto 3 (15 a 35s) de un video de 45 segundos?'
            : 'What visual element should be layered in Act 3 (15-35s) of a 45-second video?',
          options: isEs
            ? [
                'Una pantalla en negro de 10 segundos',
                'Al menos 2 tomas macro de B-roll mostrando el producto o herramienta en acción',
                'Un logotipo gigante que tape todo',
                'Un meme no relacionado',
              ]
            : [
                'A 10-second black screen',
                'At least 2 macro B-roll shots demonstrating product or tools in action',
                'A giant static logo',
                'An unrelated viral meme',
              ],
          correctOptionIndex: 1,
          explanation: isEs
            ? 'Intercalar tomas de B-roll en el cuerpo demuestra la promesa del video y evita el aburrimiento visual.'
            : 'Layering B-roll cuts during the proof act validates your claim and resets visual attention.',
        },
      ],
    },
    resources: [
      {
        id: 'res-m02-04-01',
        title: isEs ? 'Plantilla de Guion en 4 Bloques (45s)' : '4-Block Fast Scripting Template (45s)',
        description: isEs
          ? 'Estructura descargable para organizar tus 4 actos antes de ponerte frente al lente.'
          : 'Downloadable framework to map your 4 acts before stepping in front of the lens.',
        type: 'template',
        url: '#script-4-blocks',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 2 Oficial: Tu Primer Video Comercial (45-60s)' : 'Official Challenge 2: Your First Commercial Video (45-60s)',
      whatToDo: isEs
        ? 'Graba tu primer video comercial completo de 45 a 60 segundos aplicando la técnica frase por frase, luz de ventana a 45°, AF/AE Lock y al menos 2 tomas de B-roll intercaladas.'
        : 'Record your first full 45-60s commercial video using sentence method, 45° window light, AF/AE lock and at least 2 B-roll cuts.',
      whatToDeliver: isEs
        ? 'Pega el enlace público de tu video (YouTube no listado, Instagram Reel, TikTok o Google Drive) antes del domingo a las 11:59 PM.'
        : 'Submit public share link to your video (unlisted YouTube, Instagram Reel, TikTok or Google Drive) before Sunday at 11:59 PM.',
      whereToSubmit: isEs ? 'Formulario de Entrega Oficial del Reto 2' : 'Official Challenge 2 Submission Box',
      evaluationCriteria: isEs
        ? [
            'Lente limpio y resolución 4K / 1080p a 30 FPS.',
            'Luz suave de ventana a 45° con AF/AE Lock activo sin parpadeo.',
            'Audio nítido grabado a 30 cm de distancia sin eco de habitación.',
            'Estructura de 4 bloques completa con gancho y llamado a WhatsApp.',
            'Entrega puntual antes del domingo a las 11:59 PM.',
          ]
        : [
            'Clean lens and 4K / 1080p at 30 FPS.',
            'Soft 45° window light with active AF/AE lock.',
            'Crisp 30cm vocal audio without room echo.',
            'Complete 4-act structure with hook and WhatsApp CTA.',
            'Punctual submission before Sunday 11:59 PM.',
          ],
    },
  };
};
