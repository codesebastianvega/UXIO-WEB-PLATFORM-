import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM020101 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Configuración Pro del Sensor Móvil' : 'Mobile Sensor Pro Setup',
      subtitle: isEs
        ? 'Microclase 2.1.1 · 4K vs 1080p, 24 vs 30 vs 60 FPS, Cuadrícula y la Regla del Lente Limpio.'
        : 'Microclass 2.1.1 · 4K vs 1080p, framerates, grid overlay and clean lens rule.',
      highlight: isEs ? 'Semana 2 · De la Idea al Lente' : 'Week 2 · Idea to Lens',
      imageUrl: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 2.1.1' : '// KEY CONCEPTS 2.1.1',
        badge: isEs ? 'CONFIG CÁMARA' : 'CAMERA SETUP',
        items: [
          { title: isEs ? '4K a 30 FPS' : '4K at 30 FPS', desc: isEs ? 'Nitidez máxima para TikTok y Reels' : 'Maximum clarity for social compression', color: '#FE385B' },
          { title: isEs ? 'Regla del Lente Limpio' : 'Clean Lens Rule', desc: isEs ? 'Elimina la bruma de huellas dactilares' : 'Eliminate fingerprint haze instantly', color: '#FF7F07' },
          { title: isEs ? 'Cuadrícula 3x3' : '3x3 Grid Overlay', desc: isEs ? 'Alineación de horizonte y mirada' : 'Horizon and eye-level alignment', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Semana 2! En esta microclase aprenderemos a configurar la cámara de tu celular para que grabe con calidad cinematográfica antes de tocar cualquier botón.'
          : 'Welcome to Week 2! Today we configure your mobile camera sensor for crisp cinema quality.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'El 90% de los videos borrosos no son culpa de un mal celular; son culpa de un lente sucio de huellas y grasa.'
        : '90% of blurry mobile videos are not caused by bad sensors; they are caused by dirty, greasy lenses.',
      subtitle: isEs
        ? 'Limpia siempre el lente trasero de tu celular con tu camiseta o microfibra antes de presionar grabar.'
        : 'Always wipe the rear lens with microfiber or your shirt before hitting record.',
      highlight: isEs ? 'Regla de Oro: Lente Limpio Primero' : 'Golden Rule: Wipe Lens First',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Muestren a la cámara cómo limpiar el lente. Es el hábito #1 de todo creador profesional.'
          : 'Demonstrate lens wiping on camera. It is habit #1 for pro creators.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'RESOLUCIÓN & CUADROS' : 'RESOLUTION & FRAMERATE',
      title: isEs ? 'La Configuración Estándar para Redes Sociales' : 'Standard Social Feed Settings',
      subtitle: isEs
        ? 'Los parámetros recomendados en los ajustes nativos de iOS y Android.'
        : 'Recommended native settings for iOS and Android camera apps.',
      points: isEs
        ? [
            {
              label: '1. Resolución: 4K (3840x2160)',
              text: 'Permite reencuadrar y hacer zoom digital del 120% en edición sin perder nada de nitidez.',
              detailData: {
                tag: 'RESOLUCIÓN // 4K NATIVO',
                title: 'El Margen de Maniobra en Edición',
                description: 'Grabar en 4K te permite cortar de plano general a plano medio en CapCut sin pixelación.',
                imageCaption: '4K Nativo · Margen de Reencuadre',
                image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Activación en Ajustes > Cámara', 'Permite zoom digital sin ruido'],
                actionTip: 'Si tienes poco almacenamiento en el celular, usa 1080p a 30 FPS.',
              },
            },
            {
              label: '2. Tasa de Cuadros: 30 FPS vs 60 FPS',
              text: 'Usa 30 FPS para hablar a cámara (movimiento natural) y 60 FPS solo para tomas B-roll que quieras ralentizar.',
              detailData: {
                tag: 'FPS // FLUIDEZ & CÁMARA LENTA',
                title: 'La Regla de los Cuadros por Segundo',
                description: '30 FPS da aspecto cinematográfico real. 60 FPS te permite cámara lenta al 50% en edición.',
                imageCaption: '30 FPS Hablado · 60 FPS B-Roll',
                image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80',
                highlights: ['30 FPS: Videos hablados y tutoriales', '60 FPS: Planos macro de texturas y agua'],
                actionTip: 'No uses 60 FPS para hablar a cámara porque luce como videojuego hiper-acelerado.',
              },
            },
            {
              label: '3. Cuadrícula (Grid) Activa',
              text: 'Activa la cuadrícula 3x3 en los ajustes para mantener tus ojos en el tercio superior.',
              detailData: {
                tag: 'GUÍAS // CUADRÍCULA 3x3',
                title: 'Nivelación y Altura de Ojos',
                description: 'Evita planos torcidos y garantiza que tu rostro no quede tapado por los botones de TikTok.',
                imageCaption: 'Cuadrícula Activa · Composición Perfecta',
                image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Ojos alineados con la línea superior', 'Horizonte recto sin inclinaciones'],
                actionTip: 'Activa "Cuadrícula" en los ajustes de cámara de tu teléfono.',
              },
            },
          ]
        : [
            { label: '1. Resolution: 4K', text: 'Allows cropping and reframing without quality loss.' },
            { label: '2. Framerate: 30 vs 60 FPS', text: '30 FPS for talking head; 60 FPS for slow-mo B-roll.' },
            { label: '3. 3x3 Grid Overlay', text: 'Maintains eye line on top third and avoids crooked shots.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Expliquen la diferencia entre 30 FPS y 60 FPS. 30 FPS para hablar, 60 FPS para ralentizar tomas de producto.'
          : 'Contrast 30 FPS natural motion with 60 FPS B-roll slow-mo.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'ERRORES COMUNES' : 'COMMON MISTAKES',
      title: isEs ? 'Configuración Amateur vs. Configuración Creator Lab' : 'Amateur Setup vs. Creator Lab Setup',
      comparison: isEs
        ? {
            beforeLabel: '❌ Grabación Amateur Descalibrada',
            before: [
              'Lente sucio con halo blanco en las luces.',
              'Grabando a 720p o con compresión de WhatsApp.',
              'Hablando a 60 FPS con movimiento robótico artificial.',
              'Cámara inclinada sin cuadrícula de apoyo.',
            ],
            afterLabel: '✓ Configuración Calibrada UXIO',
            after: [
              'Lente limpio con contraste nítido y colores vivos.',
              '4K / 1080p a 30 FPS configurado en la app nativa.',
              'Cuadrícula 3x3 activa y horizonte perfectamente nivelado.',
              'Memoria libre verificada antes de empezar a rodar.',
            ],
          }
        : {
            beforeLabel: '❌ Amateur Uncalibrated Settings',
            before: [
              'Greasy lens with light bloom and white haze.',
              '720p resolution or compressed WhatsApp footage.',
              'Talking head at 60 FPS with hyper-real motion.',
              'Crooked tilt without grid guidelines.',
            ],
            afterLabel: '✓ UXIO Calibrated Setup',
            after: [
              'Pristine wiped lens with sharp contrast and punchy colors.',
              'Native 4K / 1080p at 30 FPS.',
              '3x3 grid active with level horizon.',
              'Verified phone storage ready to film.',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:30 min',
        script: isEs
          ? 'Muestren en vivo el cambio drástico al limpiar la cámara y activar la cuadrícula.'
          : 'Show the immediate visual difference after wiping lens and turning on grid.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'MISIÓN 2.1.1' : 'MISSION 2.1.1',
      title: isEs ? 'Calibra tu Celular en 3 Pasos' : 'Calibrate Your Phone in 3 Steps',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Limpia tu Lente',
              desc: 'Toma una microfibra y limpia el lente trasero hasta eliminar cualquier rastro de grasa.',
            },
            {
              number: '02',
              title: 'Ajusta Resolución & FPS',
              desc: 'Entra a Ajustes > Cámara > Grabar Video: Selecciona 4K a 30 FPS (o 1080p a 30 FPS).',
            },
            {
              number: '03',
              title: 'Activa la Cuadrícula',
              desc: 'Enciende el interruptor "Cuadrícula" para ver las líneas guía de tercios en pantalla.',
            },
          ]
        : [
            { number: '01', title: 'Clean Lens', desc: 'Wipe camera with microfiber to eliminate oily fingerprints.' },
            { number: '02', title: 'Set 4K / 30 FPS', desc: 'Go to Camera Settings: select 4K at 30 FPS.' },
            { number: '03', title: 'Enable Grid', desc: 'Turn on 3x3 grid overlay for composition balance.' },
          ],
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Pidan a los alumnos que abran los ajustes de su celular en este momento y lo dejen listo.'
          : 'Instruct students to open phone settings now and calibrate their camera.',
      },
    },
  ];

  return {
    id: 'm02-01-01-sensor-settings',
    slug: 'm02-01-01-sensor-settings',
    lessonId: 'm02-01',
    title: isEs
      ? 'Configuración Pro del Sensor Móvil'
      : 'Mobile Sensor Pro Setup',
    moduleTag: isEs ? 'SEMANA 2 · MICROCLASE 2.1.1' : 'WEEK 2 · MICROCLASS 2.1.1',
    estimatedMinutes: 5,
    slides,
  };
};
