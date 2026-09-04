import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0201 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm02-01',
    slug: 'el-celular-como-camara-profesional',
    moduleSlug: 'semana-2-grabacion',
    title: isEs ? 'El Celular como Cámara Profesional' : 'Smartphone as a Pro Camera',
    type: 'microclass',
    duration: '15 min',
    objective: isEs
      ? 'Configuración óptima de resolución, FPS, bloqueo de exposición AF/AE y composición 9:16.'
      : 'Optimal resolution, framerate, AF/AE lock and 9:16 composition.',
    topics: isEs
      ? [
          'Resolución 4K vs 1080p, 24/30/60 FPS y la regla del lente limpio',
          'Bloqueo de enfoque y exposición (AF/AE Lock a -0.3 EV)',
          'Composición, regla de tercios vertical y los 3 planos maestros',
        ]
      : [
          '4K vs 1080p resolution, 24/30/60 FPS and clean lens rule',
          'AF/AE Lock at -0.3 EV for zero flicker and rich skin tones',
          '9:16 composition, mobile rule of thirds and 3 master shots',
        ],
    presentationSlug: 'm02-01-01-sensor-settings',
    microclasses: [
      {
        id: 'mc-02-01-01',
        title: isEs ? '1. Configuración del Sensor (4K, FPS & Cuadrícula)' : '1. Sensor Setup (4K, FPS & Grid)',
        duration: '5:00 min',
        description: isEs
          ? 'Aprende los ajustes nativos de cámara en iOS y Android para obtener la máxima nitidez sin sobrecalentar el equipo.'
          : 'Learn native camera settings for iOS and Android to maximize sharpness.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm02-01-01-sensor-settings',
      },
      {
        id: 'mc-02-01-02',
        title: isEs ? '2. Control de Exposición & Bloqueo AF/AE' : '2. Exposure Control & AF/AE Lock',
        duration: '5:00 min',
        description: isEs
          ? 'El truco milimétrico del sol para eliminar el parpadeo automático y darle tono de cine a tu piel.'
          : 'The subtle sun slider trick to prevent exposure hunting and enrich skin tones.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm02-01-02-af-ae-lock',
      },
      {
        id: 'mc-02-01-03',
        title: isEs ? '3. Composición & Encuadre Vertical 9:16' : '3. Composition & 9:16 Vertical Framing',
        duration: '5:00 min',
        description: isEs
          ? 'Línea de ojos, zonas seguras de TikTok/Instagram y la trinidad de planos (medio, macro y POV).'
          : 'Eye line placement, TikTok/Instagram safe zones and the 3 master camera angles.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm02-01-03-framing-composition',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint: Calibración de Cámara Móvil' : 'Checkpoint: Mobile Camera Calibration',
      description: isEs
        ? 'Verifica tus conocimientos antes de rodar tus primeras tomas de prueba.'
        : 'Verify camera fundamentals before filming your test shots.',
      questions: [
        {
          id: 'q1',
          question: isEs
            ? '¿Cuál es la tasa de cuadros (FPS) recomendada para hablar directamente a cámara?'
            : 'What is the recommended framerate (FPS) for talking head videos?',
          options: isEs
            ? [
                '60 FPS para que parezca un videojuego',
                '30 FPS para un movimiento natural y aspecto cinematográfico',
                '120 FPS siempre',
                '15 FPS para ahorrar espacio',
              ]
            : [
                '60 FPS for hyper-smooth motion',
                '30 FPS for natural cinematic motion',
                '120 FPS always',
                '15 FPS to save storage',
              ],
          correctOptionIndex: 1,
          explanation: isEs
            ? '30 FPS es el estándar óptimo para video hablado; 60 FPS se reserva para B-roll a cámara lenta.'
            : '30 FPS is standard for talking head; 60 FPS is reserved for slow-motion B-roll.',
        },
        {
          id: 'q2',
          question: isEs
            ? '¿Qué beneficio principal tiene activar el bloqueo AF/AE en el rostro?'
            : 'What is the primary benefit of locking AF/AE on your face?',
          options: isEs
            ? [
                'Hace que la batería dure el doble',
                'Evita que el celular parpadee cambiando de brillo y estabiliza la luz',
                'Aplica un filtro de belleza automático',
                'Aumenta el volumen del micrófono',
              ]
            : [
                'Doubles battery life',
                'Prevents automatic exposure hunting and stabilizes brightness',
                'Applies an automatic beauty filter',
                'Increases microphone volume',
              ],
          correctOptionIndex: 1,
          explanation: isEs
            ? 'Bloquear AF/AE fija el punto de luz y enfoque, eliminando saltos de brillo molestos al moverte.'
            : 'Locking AF/AE stabilizes exposure and focus, preventing distracting brightness shifts.',
        },
        {
          id: 'q3',
          question: isEs
            ? '¿Dónde deben posicionarse tus ojos en el encuadre vertical 9:16?'
            : 'Where should your eyes be aligned in a 9:16 vertical frame?',
          options: isEs
            ? [
                'En el borde inferior pegado a la descripción',
                'En el centro exacto de la pantalla',
                'Sobre la línea horizontal superior de la cuadrícula de tercios',
                'En la esquina superior derecha',
              ]
            : [
                'At the very bottom near captions',
                'Dead-center of the screen',
                'Along the upper horizontal third gridline',
                'In the upper right corner',
              ],
          correctOptionIndex: 2,
          explanation: isEs
            ? 'Colocar los ojos en el tercio superior maximiza la conexión visual y evita dejar espacio vacío sobre la cabeza.'
            : 'Placing eyes on the upper third gridline maximizes eye contact and avoids dead headroom.',
        },
      ],
    },
    resources: [
      {
        id: 'res-m02-01-01',
        title: isEs ? 'Guía Rápida de Calibración de Cámara' : 'Mobile Camera Calibration Cheat Sheet',
        description: isEs
          ? 'Ficha técnica descargable con los ajustes recomendados paso a paso para iPhone y Android.'
          : 'Downloadable quick-reference sheet with optimal settings for iPhone and Android.',
        type: 'guide',
        url: '#camera-calibration',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 2.1: Calibración de Sensor & 3 Planos de Prueba' : 'Challenge 2.1: Sensor Calibration & 3 Test Shots',
      whatToDo: isEs
        ? 'Limpia tu lente, configura tu celular en 4K/1080p a 30 FPS, bloquea AF/AE y graba 3 clips de prueba de 5 segundos: 1 plano medio hablado, 1 plano macro de manos y 1 plano POV.'
        : 'Clean your lens, set 4K/1080p at 30 FPS, lock AF/AE and record 3 five-second test clips: 1 medium talking head, 1 macro hands shot, and 1 POV shot.',
      whatToDeliver: isEs
        ? 'Pega el enlace público de tu carpeta de Google Drive, YouTube no listado, TikTok o Instagram con tus 3 clips de prueba.'
        : 'Submit public link to your Google Drive folder, unlisted YouTube, TikTok or Instagram with your 3 test clips.',
      whereToSubmit: isEs ? 'Formulario de Entrega de Reto 2.1' : 'Challenge 2.1 Submission Box',
      evaluationCriteria: isEs
        ? [
            'Lente limpio con nitidez y cero halo blanco en las luces.',
            'AF/AE Lock activo sin parpadeos de brillo al moverse.',
            'Ojos alineados en el tercio superior en el plano medio.',
            'Plano macro nítido enfocado a 15-20 cm.',
          ]
        : [
            'Clean wiped lens with zero white blooming.',
            'Active AF/AE lock with stable exposure.',
            'Eyes framed on upper third in medium shot.',
            'Sharp macro detail shot at 15-20 cm.',
          ],
    },
  };
};
