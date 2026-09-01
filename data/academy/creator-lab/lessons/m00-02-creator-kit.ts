import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0002 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm00-02',
    slug: 'tu-kit-de-creacion-setup',
    moduleSlug: 'semana-0-induccion',
    title: isEs ? 'Clase 0.2 — Tu Kit de Creación & Setup Accesible' : 'Lesson 0.2 — Creator Kit & Smartphone Setup',
    type: 'microclass',
    duration: '8 min',
    objective: isEs
      ? 'Configurar los parámetros de cámara de tu smartphone, dominar la luz natural a 45° y lograr audio nítido sin eco.'
      : 'Calibrate smartphone camera settings, master 45° natural lighting, and capture clean audio without echo.',
    topics: isEs
      ? [
          'Los 3 ajustes innegociables: Lente limpio, cuadrícula 3x3 y 4K a 30 FPS',
          'Protocolo de grabación en 60 segundos (Modo Avión y Bloqueo AE/AF)',
          'Iluminación natural: La regla de los 45° frente a la ventana',
          'La batalla del audio: Micrófono de solapa ($60.000 COP) vs audio de cámara',
        ]
      : [
          '3 non-negotiable phone settings: Clean lens, 3x3 grid, and 4K at 30 FPS',
          '60-second filming checklist (Airplane Mode and AE/AF Lock)',
          'Natural lighting: The 45° window angle rule',
          'Audio breakdown: Lavalier mic ($15 USD) vs built-in camera mic',
        ],
    presentationSlug: 'm00-02-creator-kit',
    microclasses: [
      {
        id: 'mc-00-02-01',
        title: isEs ? '1. Calibración de Cámara y Cuadrícula Móvil' : '1. Smartphone Camera & Grid Calibration',
        duration: '4:00 min',
        description: isEs
          ? 'Los 3 ajustes innegociables para que tu celular grabe con nitidez y movimiento fluido de 30 FPS.'
          : 'The 3 essential settings to capture sharp footage with natural 30 FPS motion.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
      },
      {
        id: 'mc-00-02-02',
        title: isEs ? '2. Luz Natural a 45° y Audio Nítido' : '2. 45° Natural Light & Crisp Audio',
        duration: '4:00 min',
        description: isEs
          ? 'Cómo iluminar tu rostro con una ventana y aislar tu voz con un micrófono accesible de $60.000 COP.'
          : 'How to illuminate your face using a window and isolate clean voice audio with a $15 USD lavalier mic.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint Quiz: Calibración Técnica & Audio' : 'Checkpoint Quiz: Technical Setup & Audio',
      description: isEs
        ? 'Valida los conceptos técnicos de la lección antes de realizar tu prueba de grabación.'
        : 'Validate technical setup concepts before completing your recording test.',
      questions: [
        {
          id: 'q-00-02-01',
          question: isEs
            ? '¿Por qué se recomienda grabar a 30 FPS para redes sociales en lugar de 60 FPS o más?'
            : 'Why is 30 FPS recommended for social media instead of 60 FPS or higher?',
          options: isEs
            ? [
                'Porque 30 FPS produce un movimiento cinematográfico natural y evita la compresión excesiva en redes',
                'Porque a 60 FPS la cámara se apaga por sobrecalentamiento',
                'Porque a 30 FPS el video pesa el doble que a 60 FPS',
              ]
            : [
                'Because 30 FPS delivers natural cinematic motion and avoids harsh platform compression',
                'Because 60 FPS causes instant camera shutdown',
                'Because 30 FPS produces double file size compared to 60 FPS',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'Los 30 FPS replican la cadencia del ojo humano y no sufren artefactos de compresión en Instagram y TikTok.'
            : '30 FPS replicates natural human eye cadence and avoids compression artifacts on Instagram and TikTok.',
        },
        {
          id: 'q-00-02-02',
          question: isEs
            ? '¿Cuál es la posición recomendada al iluminarse con una ventana natural?'
            : 'What is the recommended position when using a natural window for lighting?',
          options: isEs
            ? [
                'Pararse con la ventana a la espalda para crear un efecto de silueta oscura',
                'Colocarse en un ángulo diagonal de 45° respecto a la ventana para dar volumen suave sin sombras duras',
                'Apagar todas las luces y grabar a oscuras con el brillo de la pantalla',
              ]
            : [
                'Stand with the window behind your back to create a silhouette effect',
                'Position yourself at a 45° diagonal angle to the window to create soft facial volume without harsh shadows',
                'Turn off all lights and record in the dark using screen glow',
              ],
          correctOptionIndex: 1,
          explanation: isEs
            ? 'El ángulo a 45° modela las facciones del rostro con sombras suaves y textura profesional.'
            : 'A 45° angle sculpts facial features with soft, flattering falloff and professional texture.',
        },
        {
          id: 'q-00-02-03',
          question: isEs
            ? '¿Cómo solucionar el eco o reverberación en una habitación con paredes desnudas?'
            : 'How can you eliminate room echo and reverberation in a bare room?',
          options: isEs
            ? [
                'Gritar más fuerte a la cámara para opacar el eco',
                'Colocar cojines, cortinas o usar un micrófono de solapa cercano al pecho (a 15 cm de la boca)',
                'Grabar únicamente en el baño con azulejos',
              ]
            : [
                'Shout louder at the camera to overpower the room echo',
                'Add pillows, curtains, or use a lavalier microphone pinned 15 cm from your mouth',
                'Film exclusively inside a tiled bathroom',
              ],
          correctOptionIndex: 1,
          explanation: isEs
            ? 'Un micrófono de solapa aísla la voz capturando el sonido antes de que rebote en las paredes.'
            : 'A lavalier microphone isolates direct voice capture before reflections bounce off bare walls.',
        },
      ],
    },
    resources: [
      {
        id: 'res-00-02-01',
        title: isEs ? 'Checklist de Grabación en 60 Segundos (PDF A4)' : '60-Second Filming Checklist (A4 PDF)',
        type: 'pdf',
        url: '#setup-checklist',
        description: isEs
          ? 'Guía imprimible con los 4 pasos antes de pulsar el botón rojo de Rec.'
          : 'Printable pocket guide with the 4 critical steps before hitting Record.',
      },
      {
        id: 'res-00-02-02',
        title: isEs ? 'Guía de Accesorios Económicos (< $100k COP)' : 'Budget Creator Gear Buyer Guide',
        type: 'link',
        url: '#gear-guide',
        description: isEs
          ? 'Micrófonos inalámbricos de $55.000 COP, trípodes de mesa y difusores caseros.'
          : 'Curated list of budget wireless mics, tabletop tripods, and DIY diffusers.',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 0.2: Prueba de Grabación y Foto del Setup' : 'Challenge 0.2: Setup Photo & 10s Audio Test',
      whatToDo: isEs
        ? '1. Toma una foto de tu espacio mostrando la posición del celular y la ventana. 2. Graba un video de 10s diciendo tu nombre y nicho con tu micrófono o audífonos.'
        : '1. Take a photo of your recording spot showing phone and window position. 2. Record a 10-second clip stating your name and niche.',
      whatToDeliver: isEs
        ? 'Pega el enlace al video de prueba (Drive, Dropbox o Loom) y la foto en el formulario de entregas.'
        : 'Paste the public link to your test clip and photo in the classroom submission box.',
      whereToSubmit: isEs ? 'Formulario de Entregas del Aula Virtual' : 'Classroom Submission Form',
      evaluationCriteria: isEs
        ? [
            'Lente limpio y encuadre nivelado a la altura de los ojos.',
            'Voz nítida y audible sin eco metálico molesto.',
            'Rostro iluminado suavemente a 45° sin contraluz.',
          ]
        : [
            'Clean lens and leveled eye-level framing.',
            'Clear, audible voice without harsh room reverb.',
            'Face softly illuminated at 45° without backlighting.',
          ],
    },
  };
};
