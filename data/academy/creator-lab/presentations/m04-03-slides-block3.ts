import { SlideData } from './types';

export const getLiveLab4SlidesBlock3 = (isEs: boolean): SlideData[] => [
  {
    id: 's9',
    type: 'title',
    tag: isEs ? 'BLOQUE 3 · HOT SEAT EN VIVO' : 'BLOCK 3 · LIVE HOT SEAT',
    title: isEs
      ? 'Edición en Caliente: De Video Crudo a Pieza Pro en 8 Minutos'
      : 'Live Surgery: From Raw Footage to Pro Asset in 8 Min',
    subtitle: isEs
      ? 'El instructor comparte pantalla y edita en vivo el video crudo de 1 alumno de la sala aplicando las 4 pasadas completas.'
      : 'The instructor shares screen and edits 1 student raw video live in CapCut applying all 4 passes.',
    highlight: isEs ? 'Demostración en Tiempo Real ➔' : 'Real-Time Screen Share ➔',
    bgColor: '#7928CA',
    instructorNotes: {
      duration: '60:00 - 65:00 min',
      script: isEs
        ? '¡Momento del Hot Seat! Vamos a tomar los clips en crudo de un alumno y transformarlos en un video dinámico frente a todos.'
        : 'Hot seat time! We take raw student takes and transform them into a high-retention asset right before the cohort.',
    },
  },
  {
    id: 's10',
    type: 'steps',
    tag: isEs ? 'DEMOSTRACIÓN EN DIRECTO' : 'LIVE DEMO',
    title: isEs ? 'Las 4 Pasadas del Hot Seat en Vivo' : 'The 4 Live Surgery Passes',
    steps: isEs
      ? [
          {
            number: 'MIN 0-2',
            title: 'Pasada 1: Poda Quirúrgica',
            desc: 'Eliminación de las 4 tomas falsas y ajuste de cortes al milisegundo exacto.',
          },
          {
            number: 'MIN 2-4',
            title: 'Pasada 2: Zooms & B-Roll',
            desc: 'Zooms al 110% en el segundo 3 y 8 + inserción de 2 clips de B-roll sobre la solución.',
          },
          {
            number: 'MIN 4-6',
            title: 'Pasada 3: Subtítulos Animados',
            desc: 'Generación automática, corrección tipográfica y pintado de palabras clave en amarillo.',
          },
          {
            number: 'MIN 6-8',
            title: 'Pasada 4: Audio & Sound Design',
            desc: 'Normalización de voz a -2 dB, música a -20 dB y Whoosh sincronizado en el cambio de plano.',
          },
        ]
      : [
          { number: 'MIN 0-2', title: 'Pass 1: Surgical Trim', desc: 'Cutting 4 failed takes and locking sentence waveform borders.' },
          { number: 'MIN 2-4', title: 'Pass 2: Zooms & B-Roll', desc: '110% punch zooms at 3s and 8s + 2 tactile B-roll overlays on solution.' },
          { number: 'MIN 4-6', title: 'Pass 3: Dynamic Captions', desc: 'Auto-captions generation, text cleanup, and yellow keyword highlighting.' },
          { number: 'MIN 6-8', title: 'Pass 4: Audio & SFX', desc: 'Normalize voice to -2 dB, duck music to -20 dB, and frame-align whoosh SFX.' },
        ],
    instructorNotes: {
      duration: '65:00 - 75:00 min',
      script: isEs
        ? 'Realicen la edición en vivo en CapCut compartiendo pantalla mientras narran cada gesto táctil.'
        : 'Execute the live CapCut edit via screen mirror, explaining each tactile tap and pinch.',
    },
  },
  {
    id: 's11',
    type: 'comparison',
    tag: isEs ? 'RESULTADO DEL HOT SEAT' : 'HOT SEAT RESULT',
    title: isEs ? 'Antes vs. Después del Video Auditado en Directo' : 'Before vs. After Live Surgery Result',
    comparison: isEs
      ? {
          beforeLabel: 'Antes (Video Crudo sin Editar)',
          before: [
            'Duración: 1 minuto y 15 segundos con pausas y titubeos.',
            'Voz lejana y con eco de habitación.',
            'Mismo ángulo fijo durante todo el video.',
            'Cero subtítulos ni música de ambientación.',
          ],
          afterLabel: 'Después (Pieza Pro Terminada)',
          after: [
            'Duración: 44 segundos exactos con ritmo vertiginoso.',
            'Voz potente con reducción de ruido y calidez.',
            'Dinamismo de cámara con zooms y tomas de B-roll.',
            'Subtítulos bold con palabras clave y música Lo-Fi a -20 dB.',
          ],
        }
      : {
          beforeLabel: 'Before (Raw Unedited Takes)',
          before: [
            'Duration: 1m 15s with awkward pauses and stumbles.',
            'Distant echoey room audio.',
            'Single static angle throughout.',
            'Zero captions or background ambiance.',
          ],
          afterLabel: 'After (Finished Pro Asset)',
          after: [
            'Duration: Exactly 44s with tight professional pacing.',
            'Punchy vocal with noise reduction and warmth.',
            'Dynamic visual rhythm with zooms and tactile B-roll.',
            'Bold captions with colored keyword triggers and -20 dB Lo-Fi beat.',
          ],
        },
    instructorNotes: {
      duration: '75:00 - 80:00 min',
      script: isEs
        ? 'Reproduzcan el video final terminado frente a la sala para mostrar el salto cuántico de calidad.'
        : 'Play the final rendered video to the room to showcase the massive leap in perceived quality.',
    },
  },
  {
    id: 's12',
    type: 'concept',
    tag: isEs ? 'DINÁMICA EN EL CHAT' : 'CHAT SPRINT',
    title: isEs ? 'Dinámica de 3 Minutos: Diagnóstico Rápido de tu Timeline' : '3-Minute Sprint: Fast Timeline Audit',
    subtitle: isEs
      ? 'Abre tu proyecto actual en CapCut y escribe en el chat cuánto tiempo duran tus silencios más largos.'
      : 'Open your current CapCut project and post your longest dead pause duration in the chat.',
    points: isEs
      ? [
          {
            label: 'Paso 1: Abre tu Proyecto en CapCut',
            text: 'Pellizca con 2 dedos para abrir la vista máxima de la onda de sonido.',
            tag: 'Paso 1',
          },
          {
            label: 'Paso 2: Busca el Silencio Mayor',
            text: 'Mide cuántos segundos o milisegundos pasan entre el final de una palabra y el inicio de la siguiente.',
            tag: 'Paso 2',
          },
          {
            label: 'Paso 3: Poda y Comparte en el Chat',
            text: 'Corta el silencio hasta dejarlo en 0.1s y escribe "¡Poda completada!" en el chat.',
            tag: 'Paso 3',
          },
        ]
      : [
          {
            label: 'Step 1: Open Project in CapCut',
            text: 'Pinch out with 2 fingers to expand audio waveform to millisecond precision.',
            tag: 'Step 1',
          },
          {
            label: 'Step 2: Find Longest Silence',
            text: 'Measure the gap between the end of one word and the start of the next.',
            tag: 'Step 2',
          },
          {
            label: 'Step 3: Trim & Post in Chat',
            text: 'Trim gap down to 0.1s and drop "Trimmed!" into the cohort chat.',
            tag: 'Step 3',
          },
        ],
    instructorNotes: {
      duration: '80:00 - 85:00 min',
      script: isEs
        ? 'Den 3 minutos de reloj para que toda la sala pode su primer silencio en CapCut.'
        : 'Give the cohort 3 minutes on the clock to execute their first live timeline trim.',
    },
  },
  {
    id: 's13',
    type: 'concept',
    tag: isEs ? 'PARÁMETROS DE EXPORTACIÓN' : 'EXPORT PRESETS',
    title: isEs ? 'Configuración de Render: El Secreto para Evitar que Instagram Comprima' : 'Export Settings: How to Avoid Social Compression',
    subtitle: isEs
      ? 'Por qué exportar en 4K en el teléfono arruina la nitidez al subir a Reels o TikTok.'
      : 'Why exporting in 4K on your phone causes terrible compression artifacts on Instagram and TikTok.',
    points: isEs
      ? [
          {
            label: 'Resolución: 1080p (FHD)',
            text: 'Instagram y TikTok recomprimen los videos 4K con algoritmos agresivos. Subir en 1080p nativo mantiene la nitidez exacta.',
            tag: '1080p',
          },
          {
            label: 'Tasa de Cuadros: 30 FPS',
            text: 'A menos que sea cámara lenta, 30 FPS reproduce con fluidez sin duplicar el peso del archivo.',
            tag: '30 FPS',
          },
          {
            label: 'Tasa de Bits (Bitrate): Más Alto',
            text: 'Configura la tasa de bits en "Más alto" (High Bitrate) y desactiva "Smart HDR" para evitar tonos quemados.',
            tag: 'High Bitrate',
          },
        ]
      : [
          {
            label: 'Resolution: 1080p (FHD)',
            text: 'Social apps compress 4K uploads aggressively. Uploading native 1080p preserves sharp edges.',
            tag: '1080p',
          },
          {
            label: 'Frame Rate: 30 FPS',
            text: 'Unless shooting slow motion, 30 FPS provides cinematic motion blur without file bloat.',
            tag: '30 FPS',
          },
          {
            label: 'Code Rate: High Bitrate',
            text: 'Set bitrate slider to High and disable Smart HDR to avoid blown-out highlights.',
            tag: 'High Bitrate',
          },
        ],
    instructorNotes: {
      duration: '85:00 - 88:00 min',
      script: isEs
        ? 'Expliquen los parámetros de renderizado exactos antes de la rúbrica del reto.'
        : 'Detail the exact render parameters before reviewing the weekly challenge rubric.',
    },
  },
];
