import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';
import { getCreatorKitInstructorNotes } from './m00-02-notes';

export const getPresentationM0002 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';
  const notes = getCreatorKitInstructorNotes(isEs);

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Tu Kit de Creación & Setup Accesible' : 'Creator Kit & Smartphone Setup',
      subtitle: isEs
        ? 'Calibra tu teléfono como una cámara profesional en 3 minutos.'
        : 'Calibrate your smartphone like a professional camera in 3 minutes.',
      highlight: isEs ? 'Semana 0 · Setup Técnico' : 'Week 0 · Technical Setup',
      imageUrl:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&auto=format&fit=crop&q=80',
      instructorNotes: notes.s01,
    },
    {
      id: 's02',
      type: 'concept',
      tag: isEs ? 'CONFIGURACIÓN INICIAL' : 'INITIAL SETUP',
      title: isEs ? 'Los 3 Ajustes Innegociables de tu Teléfono' : '3 Non-Negotiable Phone Camera Settings',
      subtitle: isEs
        ? 'Ajustes esenciales en la app de cámara antes de grabar tu primer video.'
        : 'Essential settings in your camera app before shooting your first clip.',
      points: isEs
        ? [
            {
              label: '1. Limpieza de Lente Inmediata',
              text: 'Usa un paño de microfibra. La grasa de los dedos genera el 80% de los videos borrosos y reflejos sucios.',
              tag: 'Cero Grasa',
              icon: 'Sparkles',
            },
            {
              label: '2. Activa la Cuadrícula (Grid 3x3)',
              text: 'Ubica tus ojos en la línea superior de la cuadrícula para lograr encuadres profesionales y contacto visual.',
              tag: 'Regla de Tercios',
              icon: 'Grid',
            },
            {
              label: '3. 4K a 30 FPS / 1080p a 30 FPS',
              text: 'No grabes a 60 FPS ni en cámara lenta. 30 FPS otorga el movimiento natural del ojo humano y optimiza la compresión.',
              tag: '30 FPS Nativo',
              icon: 'Video',
            },
          ]
        : [
            {
              label: '1. Immediate Lens Cleaning',
              text: 'Use a microfiber cloth. Finger oils cause 80% of blurry videos and dirty lens flares.',
              tag: 'Zero Smudge',
              icon: 'Sparkles',
            },
            {
              label: '2. Activate 3x3 Grid',
              text: 'Position your eyes on the upper grid line for natural eye contact and authority.',
              tag: 'Rule of Thirds',
              icon: 'Grid',
            },
            {
              label: '3. 4K at 30 FPS / 1080p at 30 FPS',
              text: 'Do not shoot in 60 FPS. 30 FPS provides natural motion cadence and optimal platform compression.',
              tag: '30 FPS Native',
              icon: 'Video',
            },
          ],
      instructorNotes: notes.s02,
    },
    {
      id: 's03',
      type: 'steps',
      tag: isEs ? 'CHECKLIST RÁPIDO' : 'QUICK CHECKLIST',
      title: isEs ? 'Protocolo de 60 Segundos antes de Grabar' : '60-Second Pre-Recording Checklist',
      subtitle: isEs
        ? 'Sigue estos 4 pasos rápidos antes de presionar el botón rojo de Rec.'
        : 'Follow these 4 steps before pressing the red Record button.',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Modo Avión Activo',
              desc: 'Evita que una llamada entrante arruine tu mejor toma en el segundo 40.',
              tag: 'Blindaje',
            },
            {
              number: '02',
              title: 'Bloqueo AE/AF en Pantalla',
              desc: 'Mantén presionado tu rostro hasta fijar el brillo y evitar saltos de luz.',
              tag: 'Luz Estable',
            },
            {
              number: '03',
              title: 'Lente a Nivel de Ojos',
              desc: 'Coloca el trípode a la altura de tu mirada para hablar de igual a igual.',
              tag: 'Encuadre',
            },
            {
              number: '04',
              title: 'Prueba de Audio de 5s',
              desc: 'Graba una frase y valida con audífonos que el micrófono esté conectado.',
              tag: 'Sonido',
            },
          ]
        : [
            {
              number: '01',
              title: 'Airplane Mode',
              desc: 'Prevent incoming calls from ruining your best take.',
              tag: 'Shield',
            },
            {
              number: '02',
              title: 'AE/AF Lock',
              desc: 'Long press your face until exposure and focus lock.',
              tag: 'Stable Light',
            },
            {
              number: '03',
              title: 'Eye-Level Framing',
              desc: 'Level tripod to eye height for natural peer-to-peer connection.',
              tag: 'Framing',
            },
            {
              number: '04',
              title: '5s Audio Test',
              desc: 'Record a test line and verify microphone connection.',
              tag: 'Sound',
            },
          ],
      instructorNotes: notes.s03,
    },
    {
      id: 's04',
      type: 'concept',
      tag: isEs ? 'ILUMINACIÓN ACCESIBLE' : 'ACCESSIBLE LIGHTING',
      title: isEs ? 'Luz Natural: La Regla de los 45°' : 'Natural Light: The 45° Angle Rule',
      subtitle: isEs
        ? 'Usa una ventana como tu softbox principal sin gastar en aros de luz.'
        : 'Use a window as your key light without buying expensive studio lights.',
      points: isEs
        ? [
            {
              label: 'Posición a 45 Grados',
              text: 'Colócate en ángulo diagonal a la ventana para dar volumen suave sin sombras duras.',
              tag: 'Luz Suave',
              icon: 'Sun',
            },
            {
              label: 'Evita el Contraluz',
              text: 'Nunca te pares con la ventana detrás de ti; tu rostro quedará en sombra total.',
              tag: 'Error #1',
              icon: 'AlertTriangle',
            },
            {
              label: 'Difusión con Cortina',
              text: 'Si el sol entra muy fuerte, cierra una cortina blanca traslúcida para suavizar la luz.',
              tag: 'Difusor Casero',
              icon: 'Layers',
            },
          ]
        : [
            {
              label: '45-Degree Position',
              text: 'Position diagonally to the window for flattering facial volume.',
              tag: 'Soft Falloff',
              icon: 'Sun',
            },
            {
              label: 'Avoid Backlighting',
              text: 'Never stand with a window behind you; your face will be underexposed.',
              tag: 'Core Mistake',
              icon: 'AlertTriangle',
            },
            {
              label: 'Sheer Curtain Diffusion',
              text: 'If sunlight is harsh, close a sheer white curtain for instant soft diffusion.',
              tag: 'DIY Softbox',
              icon: 'Layers',
            },
          ],
      instructorNotes: notes.s04,
    },
    {
      id: 's05',
      type: 'comparison',
      tag: isEs ? 'CALIDAD DE SONIDO' : 'AUDIO QUALITY',
      title: isEs ? 'La Batalla del Audio: ¿Por qué el Micrófono manda?' : 'The Audio Battle: Why Sound is King',
      subtitle: isEs
        ? 'El espectador perdona una imagen modesta, pero abandona un video con mal audio en 2 segundos.'
        : 'Viewers forgive modest video, but bounce from bad audio in 2 seconds.',
      comparison: {
        beforeLabel: isEs ? 'AUDIO DE CELULAR A DISTANCIA' : 'BUILT-IN DISTANT MIC',
        before: isEs
          ? [
              'Eco y rebote en habitaciones con paredes desnudas.',
              'Capta ruidos de fondo, tráfico y ventiladores.',
              'La voz se escucha distante y poco profesional.',
              'El espectador se cansa de forzar el oído y salta el video.',
            ]
          : [
              'Room echo and reflections on bare walls.',
              'Picks up traffic, fans, and background noise.',
              'Voice sounds distant and amateur.',
              'Viewer listener fatigue causes instant drop-off.',
            ],
        afterLabel: isEs ? 'KIT ACCESIBLE ($60.000 COP)' : 'BUDGET KIT ($15 USD)',
        after: isEs
          ? [
              'Cápsula a 15 cm de la boca que aísla la voz.',
              'Audio nítido, cálido y con presencia comercial.',
              'Libertad de movimiento sin perder volumen.',
              'Sensación de podcast y contenido de alta autoridad.',
            ]
          : [
              'Capsule 15 cm from mouth isolates voice.',
              'Crisp, warm audio with commercial punch.',
              'Freedom to gesture without volume loss.',
              'Premium podcast-quality authority.',
            ],
      },
      instructorNotes: notes.s05,
    },
    {
      id: 's06',
      type: 'glossary',
      tag: isEs ? 'VOCABULARIO CLAVE' : 'KEY GLOSSARY',
      title: isEs ? 'Glosario Técnico de Setup & Producción' : 'Setup & Production Technical Glossary',
      subtitle: isEs
        ? 'Domina los conceptos esenciales de captura móvil.'
        : 'Master essential mobile video production terms.',
      glossaryTerms: isEs
        ? [
            {
              term: 'Reverberación',
              definition: 'Rebote del sonido en paredes vacías. Se soluciona con cortinas, cojines o micrófono de solapa.',
              example: 'Una habitación con alfombra reduce la reverberación un 70%.',
              category: 'Audio',
            },
            {
              term: 'Bloqueo AE/AF',
              definition: 'Bloqueo de Exposición y Enfoque Automático para evitar saltos bruscos de brillo al gesticular.',
              example: 'Mantén presionado 2 segundos en tu rostro hasta que aparezca el candado.',
              category: 'Cámara',
            },
            {
              term: 'Headroom (Aire)',
              definition: 'Espacio entre la cabeza y el borde superior del cuadro (ideal: 2 a 3 dedos).',
              example: 'Evita cortar tu frente o dejar medio metro de techo vacío.',
              category: 'Encuadre',
            },
            {
              term: 'Solapero (Lavalier)',
              definition: 'Micrófono pequeño con clip que se engancha en la ropa para capturar voz limpia.',
              example: 'Un micrófono inalámbrico tipo K9 o Boya de $60.000 COP.',
              category: 'Herramientas',
            },
          ]
        : [
            {
              term: 'Reverberation',
              definition: 'Sound bouncing on bare walls. Fixed with curtains, rugs, or a lavalier mic.',
              example: 'A carpeted room cuts reverberation by 70%.',
              category: 'Audio',
            },
            {
              term: 'AE/AF Lock',
              definition: 'Auto Exposure / Auto Focus lock preventing brightness changes while moving hands.',
              example: 'Press and hold your face on screen until the lock icon appears.',
              category: 'Camera',
            },
            {
              term: 'Headroom',
              definition: 'Vertical space between head top and upper frame edge (ideal: 2-3 fingers).',
              example: 'Avoid cutting your forehead or leaving too much empty ceiling.',
              category: 'Framing',
            },
            {
              term: 'Lavalier Mic',
              definition: 'Small clip-on microphone attached near chest for clean direct voice capture.',
              example: 'A budget wireless mic like K9 or Boya.',
              category: 'Gear',
            },
          ],
      instructorNotes: notes.s06,
    },
    {
      id: 's07',
      type: 'challenge',
      tag: isEs ? 'ENTREGABLE TÉCNICO' : 'TECHNICAL MILESTONE',
      title: isEs ? 'Reto 0.2: Foto de tu Set y Clip de Audio de 10s' : 'Challenge 0.2: Setup Photo & 10s Audio Test',
      subtitle: isEs
        ? 'Configura tu espacio y valida tu calidad técnica antes de iniciar el Módulo 1.'
        : 'Set up your recording spot and validate technical quality before Module 1.',
      challengeData: {
        whatToDo: isEs
          ? '1. Toma una foto de tu espacio mostrando la posición del celular y la ventana. 2. Graba un video de 10s diciendo tu nombre y nicho con tu micrófono o audífonos.'
          : '1. Photograph your recording spot relative to window light. 2. Record a 10s test clip stating your name and niche.',
        whatToDeliver: isEs
          ? 'Enlace al video de prueba (Drive, Dropbox o Loom) y foto del setup en el aula virtual.'
          : 'Link to test clip and setup photo submitted in the classroom.',
        whereToSubmit: isEs ? 'Formulario de Entregas del Aula Virtual' : 'Classroom Submission Form',
        criteria: isEs
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
      instructorNotes: notes.s07,
    },
  ];

  return {
    id: 'pres-m00-02',
    slug: 'm00-02-creator-kit',
    lessonId: 'm00-02',
    title: isEs ? 'Tu Kit de Creación & Setup Accesible' : 'Creator Kit & Smartphone Setup',
    moduleTag: isEs ? 'SEMANA 0 · SETUP TÉCNICO' : 'WEEK 0 · TECHNICAL SETUP',
    estimatedMinutes: 8,
    slides,
  };
};
