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
      subtitle: isEs ? 'Calibra tu teléfono como una cámara profesional en 3 minutos.' : 'Calibrate your smartphone like a professional camera in 3 minutes.',
      highlight: isEs ? 'Semana 0 · Setup Técnico' : 'Week 0 · Technical Setup',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&auto=format&fit=crop&q=80',
      blockColor: '#FE385B',
      instructorNotes: notes.s01,
    },
    {
      id: 's02',
      type: 'concept',
      tag: isEs ? 'CONFIGURACIÓN INICIAL' : 'INITIAL SETUP',
      title: isEs ? 'Los 3 Ajustes Innegociables de tu Teléfono' : '3 Non-Negotiable Phone Camera Settings',
      subtitle: isEs ? 'Ajustes esenciales en la app de cámara antes de grabar tu primer video.' : 'Essential settings in your camera app before shooting your first clip.',
      blockColor: '#FE385B',
      points: isEs
        ? [
            {
              label: '1. Limpieza de Lente Inmediata',
              text: 'Usa un paño de microfibra. La grasa de los dedos genera el 80% de los videos borrosos y reflejos sucios.',
              tag: 'Cero Grasa',
              icon: 'Sparkles',
              detailData: {
                tag: 'SETUP // LENTE',
                title: 'El Hábito #1: Limpiar el Lente de la Cámara',
                subtitle: 'El 80% de los videos que parecen de "baja calidad" solo tienen grasa en el cristal.',
                description: 'Llevamos el celular en el bolsillo todo el día. Antes de cada toma, pasa tu camiseta o paño de microfibra por los lentes traseros.',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Limpieza de lentes y sensores ópticos móviles',
                highlights: ['Elimina halos de luz y destellos borrosos.', 'Recupera el contraste y saturación nativa del sensor.', 'Toma exactamente 2 segundos antes de presionar Rec.'],
                actionTip: 'Limpia el lente de tu teléfono ahora mismo y comprueba la diferencia en pantalla.',
              },
            },
            {
              label: '2. Activa la Cuadrícula (Grid 3x3)',
              text: 'Ubica tus ojos en la línea superior de la cuadrícula para lograr encuadres profesionales y contacto visual.',
              tag: 'Regla de Tercios',
              icon: 'Grid',
              detailData: {
                tag: 'SETUP // ENCUADRE',
                title: 'La Cuadrícula 3x3: Tu Guía de Composición',
                subtitle: 'Mantén la mirada en el tercio superior para transmitir autoridad y presencia.',
                description: 'Activa la Cuadrícula en Ajustes > Cámara. Coloca tus ojos en la línea horizontal superior y tu rostro centrado.',
                image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Composición con cuadrícula 3x3 y contacto visual',
                highlights: ['Evita cortar tu frente o dejar demasiado techo vacío.', 'Fija el contacto visual con el lente, no con tu pantalla.', 'Deja espacio lateral si vas a insertar texto o gráficos.'],
                actionTip: 'Ve a Ajustes de Cámara en tu teléfono y activa la opción Cuadrícula.',
              },
            },
            {
              label: '3. 4K a 30 FPS / 1080p a 30 FPS',
              text: 'No grabes a 60 FPS ni en cámara lenta. 30 FPS otorga el movimiento natural del ojo humano y optimiza la compresión.',
              tag: '30 FPS Nativo',
              icon: 'Video',
              detailData: {
                tag: 'SETUP // FORMATO',
                title: '30 FPS: La Cadencia Óptima para Redes',
                subtitle: '60 FPS parece videojuego; 24 o 30 FPS otorga textura cinematográfica natural.',
                description: 'Grabar a 30 FPS optimiza el peso del archivo y evita que Instagram o TikTok compriman agresivamente tu video al subirlo.',
                image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Ajuste de resolución y tasa de cuadros nativa',
                highlights: ['1080p a 30 FPS para subida rápida y bajo peso.', '4K a 30 FPS si planeas hacer zoom digital en edición.', 'Desactiva el HDR si genera cambios raros de brillo en tu piel.'],
                actionTip: 'Configura tu cámara en 1080p o 4K a 30 FPS.',
              },
            },
          ]
        : [
            { label: '1. Immediate Lens Cleaning', text: 'Use a microfiber cloth. Finger oils cause 80% of blurry videos.', tag: 'Zero Smudge', icon: 'Sparkles' },
            { label: '2. Activate 3x3 Grid', text: 'Position your eyes on the upper grid line for natural eye contact.', tag: 'Rule of Thirds', icon: 'Grid' },
            { label: '3. 4K at 30 FPS / 1080p at 30 FPS', text: '30 FPS provides natural motion cadence and optimal compression.', tag: '30 FPS Native', icon: 'Video' },
          ],
      instructorNotes: notes.s02,
    },
    {
      id: 's03',
      type: 'steps',
      tag: isEs ? 'CHECKLIST RÁPIDO' : 'QUICK CHECKLIST',
      title: isEs ? 'Protocolo de 60 Segundos antes de Grabar' : '60-Second Pre-Recording Checklist',
      subtitle: isEs ? 'Sigue estos 4 pasos rápidos antes de presionar el botón rojo de Rec.' : 'Follow these 4 steps before pressing the red Record button.',
      blockColor: '#FE385B',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Modo Avión Activo',
              desc: 'Evita que una llamada entrante arruine tu mejor toma en el segundo 40.',
              tag: 'Blindaje',
              detailData: {
                tag: 'CHECKLIST // PASO 1',
                title: 'Modo Avión: Grabación sin Interrupciones',
                subtitle: 'Una llamada en el segundo 35 te obliga a empezar desde cero.',
                description: 'Activa Modo Avión para desconectar notificaciones y llamadas mientras grabas tus tomas principales.',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Blindaje de concentración y grabación continua',
                highlights: ['Cero timbrazos inesperados.', 'Ahorro de batería mientras el sensor procesa video.', 'Concentración absoluta en tu guion.'],
                actionTip: 'Desliza el panel de control y activa el icono del avión antes de empezar.',
              },
            },
            {
              number: '02',
              title: 'Bloqueo AE/AF en Pantalla',
              desc: 'Mantén presionado tu rostro hasta fijar el brillo y evitar saltos de luz.',
              tag: 'Luz Estable',
              detailData: {
                tag: 'CHECKLIST // PASO 2',
                title: 'Bloqueo AE/AF: Exposición Constante',
                subtitle: 'Evita que la cámara parpadee o cambie de brillo cuando mueves las manos.',
                description: 'Mantén el dedo presionado 2 segundos sobre tu rostro en la pantalla hasta que aparezca el candado amarillo "Bloqueo AE/AF".',
                image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Bloqueo de exposición automática y enfoque en pantalla',
                highlights: ['Luz constante de principio a fin del clip.', 'Baja un poco el brillo (sol amarillo) para evitar tonos quemados.', 'El sensor no cambiará de enfoque si te mueves.'],
                actionTip: 'Practica el bloqueo AE/AF abriendo tu cámara ahora mismo.',
              },
            },
            {
              number: '03',
              title: 'Lente a Nivel de Ojos',
              desc: 'Coloca el trípode a la altura de tu mirada para hablar de igual a igual.',
              tag: 'Encuadre',
              detailData: {
                tag: 'CHECKLIST // PASO 3',
                title: 'Altura de Cámara: Hablar de Igual a Igual',
                subtitle: 'Grabar desde abajo te hace ver prepotente; desde arriba te hace ver pequeño.',
                description: 'Coloca el celular exactamente a la altura de tus ojos usando un trípode de mesa, libros o una repisa.',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Posición neutral a nivel de ojos para empatía y autoridad',
                highlights: ['Cámara perpendicular al suelo (sin inclinaciones raras).', 'Sensación de conversación cara a cara con el espectador.', 'Mejora la postura de tu cuello y proyección de voz.'],
                actionTip: 'Apoya tu teléfono sobre 3 libros gruesos para elevarlo si no tienes trípode.',
              },
            },
            {
              number: '04',
              title: 'Prueba de Audio de 5s',
              desc: 'Graba una frase y valida con audífonos que el micrófono esté conectado.',
              tag: 'Sonido',
              detailData: {
                tag: 'CHECKLIST // PASO 4',
                title: 'Test de Audio de 5 Segundos',
                subtitle: 'No grabes 10 videos para descubrir que el micrófono no estaba emparejado.',
                description: 'Graba 5 segundos diciendo: "Prueba de audio 1, 2, 3", dale Play y escucha con volumen alto antes de grabar el guion real.',
                image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Verificación de entrada de audio y nivel de ganancia',
                highlights: ['Verifica que el receptor inalámbrico esté encendido.', 'Asegúrate de que no haya roce de la ropa con la cápsula.', 'Valida que no haya eco metálico en la habitación.'],
                actionTip: 'Haz tu prueba de 5 segundos siempre antes de empezar tu sesión.',
              },
            },
          ]
        : [
            { number: '01', title: 'Airplane Mode', desc: 'Prevent incoming calls from ruining your best take.', tag: 'Shield' },
            { number: '02', title: 'AE/AF Lock', desc: 'Long press your face until exposure and focus lock.', tag: 'Stable Light' },
            { number: '03', title: 'Eye-Level Framing', desc: 'Level tripod to eye height for peer-to-peer connection.', tag: 'Framing' },
            { number: '04', title: '5s Audio Test', desc: 'Record a test line and verify microphone connection.', tag: 'Sound' },
          ],
      instructorNotes: notes.s03,
    },
    {
      id: 's04',
      type: 'concept',
      tag: isEs ? 'ILUMINACIÓN ACCESIBLE' : 'ACCESSIBLE LIGHTING',
      title: isEs ? 'Luz Natural: La Regla de los 45°' : 'Natural Light: The 45° Angle Rule',
      subtitle: isEs ? 'Usa una ventana como tu softbox principal sin gastar en aros de luz.' : 'Use a window as your key light without buying expensive studio lights.',
      blockColor: '#FF7F07',
      points: isEs
        ? [
            {
              label: 'Posición a 45 Grados',
              text: 'Colócate en ángulo diagonal a la ventana para dar volumen suave sin sombras duras.',
              tag: 'Luz Suave',
              icon: 'Sun',
              detailData: {
                tag: 'ILUMINACIÓN // ÁNGULO 45°',
                title: 'La Iluminación a 45°: Volumen y Elegancia',
                subtitle: 'La luz frontal plana borra los rasgos; la luz a 45° crea profundidad profesional.',
                description: 'Párate de modo que la ventana quede a un lado tuyo a unos 45 grados. Un lado de tu rostro quedará suavemente iluminado y el otro tendrá una sombra tenue atractiva.',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Esquema de iluminación natural a 45 grados respecto a ventana',
                highlights: ['Luz suave gratuita que disimula imperfecciones.', 'Resalta la mirada con brillo natural en la pupila (catchlight).', 'Funciona mejor en horas de la mañana o media tarde.'],
                actionTip: 'Ubica tu mesa o escritorio en ángulo de 45° frente a tu ventana más grande.',
              },
            },
            {
              label: 'Evita el Contraluz',
              text: 'Nunca te pares con la ventana detrás de ti; tu rostro quedará en sombra total.',
              tag: 'Error #1',
              icon: 'AlertTriangle',
              detailData: {
                tag: 'ILUMINACIÓN // ERROR COMÚN',
                title: 'El Error del Contraluz: Rostro en Silueta',
                subtitle: 'Si la fuente de luz está detrás de ti, la cámara oscurecerá tu rostro automáticamente.',
                description: 'Siempre debes estar mirando hacia la luz, nunca con la luz a tus espaldas. El fondo no debe brillar más que tu rostro.',
                image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Corrección de contraluz girando 180 grados hacia la fuente de luz',
                highlights: ['Tu rostro debe ser el elemento más iluminado del cuadro.', 'Si el fondo está quemado en blanco, gira tu posición.', 'Mantén el fondo a media distancia para generar desenfoque.'],
                actionTip: 'Gira tu cuerpo 180° si notas que la ventana queda a tu espalda.',
              },
            },
            {
              label: 'Difusión con Cortina',
              text: 'Si el sol entra muy fuerte, cierra una cortina blanca traslúcida para suavizar la luz.',
              tag: 'Difusor Casero',
              icon: 'Layers',
              detailData: {
                tag: 'ILUMINACIÓN // DIFUSOR',
                title: 'Cortina Blanca: Tu Softbox de Estudio Gratuito',
                subtitle: 'El sol directo genera sombras duras bajo los ojos y la nariz.',
                description: 'Una simple cortina blanca traslúcida convierte la luz solar directa y dura en una luz difusa gigante digna de un set de filmación.',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Difusión con cortina traslúcida para luz homogénea',
                highlights: ['Elimina sombras marcadas bajo la nariz y barbilla.', 'Reduce el calor y los brillos excesivos en la frente.', 'Da una estética limpia, minimalista y cálida.'],
                actionTip: 'Cierra una cortina de velo blanco cuando el sol pegue directo en tu ventana.',
              },
            },
          ]
        : [
            { label: '45-Degree Position', text: 'Position diagonally to window for flattering volume.', tag: 'Soft Falloff', icon: 'Sun' },
            { label: 'Avoid Backlighting', text: 'Never stand with a window behind you.', tag: 'Core Mistake', icon: 'AlertTriangle' },
            { label: 'Sheer Curtain Diffusion', text: 'Close a sheer white curtain for instant soft diffusion.', tag: 'DIY Softbox', icon: 'Layers' },
          ],
      instructorNotes: notes.s04,
    },
    {
      id: 's05',
      type: 'comparison',
      tag: isEs ? 'CALIDAD DE SONIDO' : 'AUDIO QUALITY',
      title: isEs ? 'La Batalla del Audio: ¿Por qué el Micrófono manda?' : 'The Audio Battle: Why Sound is King',
      subtitle: isEs ? 'El espectador perdona una imagen modesta, pero abandona un video con mal audio en 2 segundos.' : 'Viewers forgive modest video, but bounce from bad audio in 2 seconds.',
      blockColor: '#FF7F07',
      comparison: {
        beforeLabel: isEs ? 'AUDIO DE CELULAR A DISTANCIA' : 'BUILT-IN DISTANT MIC',
        before: isEs
          ? ['Eco y rebote en habitaciones con paredes vacías.', 'Capta ruidos de fondo, tráfico y ventiladores.', 'La voz se escucha distante y poco profesional.', 'El espectador se cansa de forzar el oído y salta.']
          : ['Room echo and reflections on bare walls.', 'Picks up traffic, fans, and background noise.', 'Voice sounds distant and amateur.', 'Viewer listener fatigue causes instant drop-off.'],
        afterLabel: isEs ? 'KIT ACCESIBLE ($60.000 COP)' : 'BUDGET KIT ($15 USD)',
        after: isEs
          ? ['Cápsula a 15 cm de la boca que aísla la voz.', 'Audio nítido, cálido y con presencia comercial.', 'Libertad de movimiento sin perder volumen.', 'Sensación de podcast y alta autoridad.']
          : ['Capsule 15 cm from mouth isolates voice.', 'Crisp, warm audio with commercial punch.', 'Freedom to gesture without volume loss.', 'Premium podcast-quality authority.'],
      },
      instructorNotes: notes.s05,
    },
    {
      id: 's06',
      type: 'glossary',
      tag: isEs ? 'VOCABULARIO CLAVE' : 'KEY GLOSSARY',
      title: isEs ? 'Glosario Técnico de Setup & Producción' : 'Setup & Production Technical Glossary',
      subtitle: isEs ? 'Domina los conceptos esenciales de captura móvil.' : 'Master essential mobile video production terms.',
      blockColor: '#FF7F07',
      glossaryTerms: isEs
        ? [
            { term: 'Reverberación', definition: 'Rebote del sonido en paredes vacías. Se soluciona con cortinas, cojines o micrófono de solapa.', example: 'Una habitación con alfombra reduce la reverberación un 70%.', category: 'Audio' },
            { term: 'Bloqueo AE/AF', definition: 'Bloqueo de Exposición y Enfoque Automático para evitar saltos bruscos de brillo al gesticular.', example: 'Mantén presionado 2 segundos en tu rostro hasta que aparezca el candado.', category: 'Cámara' },
            { term: 'Headroom (Aire)', definition: 'Espacio entre la cabeza y el borde superior del cuadro (ideal: 2 a 3 dedos).', example: 'Evita cortar tu frente o dejar medio metro de techo vacío.', category: 'Encuadre' },
            { term: 'Solapero (Lavalier)', definition: 'Micrófono pequeño con clip que se engancha en la ropa para capturar voz limpia.', example: 'Un micrófono inalámbrico tipo K9 o Boya de $60.000 COP.', category: 'Herramientas' },
          ]
        : [
            { term: 'Reverberation', definition: 'Sound bouncing on bare walls. Fixed with curtains or lav mic.', example: 'A carpeted room cuts reverberation by 70%.', category: 'Audio' },
            { term: 'AE/AF Lock', definition: 'Auto Exposure / Auto Focus lock preventing brightness jumps.', example: 'Press and hold your face on screen until lock appears.', category: 'Camera' },
            { term: 'Headroom', definition: 'Vertical space between head top and upper frame edge (2-3 fingers).', example: 'Avoid cutting forehead or leaving empty ceiling.', category: 'Framing' },
            { term: 'Lavalier Mic', definition: 'Small clip-on mic for clean direct voice capture.', example: 'A budget wireless mic like K9 or Boya.', category: 'Gear' },
          ],
      instructorNotes: notes.s06,
    },
    {
      id: 's07',
      type: 'challenge',
      tag: isEs ? 'ENTREGABLE TÉCNICO' : 'TECHNICAL MILESTONE',
      title: isEs ? 'Reto 0.2: Foto de tu Set y Clip de Audio de 10s' : 'Challenge 0.2: Setup Photo & 10s Audio Test',
      subtitle: isEs ? 'Configura tu espacio y valida tu calidad técnica antes de iniciar el Módulo 1.' : 'Set up your recording spot and validate technical quality before Module 1.',
      blockColor: '#FF7F07',
      challengeData: {
        whatToDo: isEs
          ? '1. Toma una foto de tu espacio mostrando la posición del celular y la ventana. 2. Graba un video de 10s diciendo tu nombre y nicho con tu micrófono o audífonos.'
          : '1. Photograph your recording spot relative to window light. 2. Record a 10s test clip stating your name and niche.',
        whatToDeliver: isEs ? 'Enlace al video de prueba (Drive, Dropbox o Loom) y foto del setup en el aula virtual.' : 'Link to test clip and setup photo submitted in the classroom.',
        whereToSubmit: isEs ? 'Formulario de Entregas del Aula Virtual' : 'Classroom Submission Form',
        criteria: isEs
          ? ['Lente limpio y encuadre nivelado a la altura de los ojos.', 'Voz nítida y audible sin eco metálico molesto.', 'Rostro iluminado suavemente a 45° sin contraluz.']
          : ['Clean lens and leveled eye-level framing.', 'Clear, audible voice without harsh room reverb.', 'Face softly illuminated at 45° without backlighting.'],
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
