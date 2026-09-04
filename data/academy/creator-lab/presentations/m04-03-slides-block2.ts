import { SlideData } from './types';

export const getLiveLab4SlidesBlock2 = (isEs: boolean): SlideData[] => [
  {
    id: 's5',
    type: 'concept',
    tag: isEs ? 'TEARDOWN FORENSE' : 'FORENSIC TEARDOWN',
    title: isEs ? 'Edición de $10 USD en Fiverr vs. Edición Pro de $1.000' : '$10 Fiverr Edit vs. $1,000 Pro Direct Response Edit',
    subtitle: isEs
      ? 'Por qué los emojis saltando y las transiciones 3D exageradas destruyen la credibilidad comercial.'
      : 'Why jumping clown emojis and 3D spinning transitions kill direct response commercial credibility.',
    points: isEs
      ? [
          {
            label: 'La Trampa de los Emojis Basura',
            text: 'Poner emojis de fuego y dinero cada 1 segundo hace que tu negocio parezca un esquema piramidal o de apuestas.',
            tag: 'Peligro 1',
          },
          {
            label: 'Transiciones de Circo',
            text: 'Giros 3D y explosiones de fuego distraen del problema del cliente. El corte duro y el corte con Whoosh sutil ganan siempre.',
            tag: 'Peligro 2',
          },
          {
            label: 'El Estilo Documental / Silicon Valley',
            text: 'Tipografía suiza limpia, colores sobrios, sonido táctil ASMR y tomas de proceso real. Inspira respeto y confianza.',
            tag: 'Estándar UXIO',
          },
        ]
      : [
          {
            label: 'The Clown Emoji Trap',
            text: 'Spamming fire and money emojis every second makes your business look like a low-tier crypto scam.',
            tag: 'Danger 1',
          },
          {
            label: 'Circus Transitions',
            text: 'Spinning 3D graphics distract from customer friction. Clean hard cuts and subtle whooshes always win.',
            tag: 'Danger 2',
          },
          {
            label: 'Documentary / High-Trust Style',
            text: 'Clean Swiss typography, muted palette, tactile ASMR sound design, and real process B-roll.',
            tag: 'UXIO Standard',
          },
        ],
    instructorNotes: {
      duration: '28:00 - 38:00 min',
      script: isEs
        ? 'Muestren por qué la edición comercial para servicios B2B o marcas de valor requiere sobriedad y elegancia.'
        : 'Highlight why direct-response commercial editing requires clean elegance over flashy circus tricks.',
    },
  },
  {
    id: 's6',
    type: 'comparison',
    tag: isEs ? 'ANATOMÍA DEL RITMO' : 'PACING ANATOMY',
    title: isEs ? 'El Ritmo Cardíaco del Video Vertical: Estímulo cada 2.5s' : 'Vertical Video Heartbeat: Stimulus Every 2.5s',
    subtitle: isEs
      ? 'La regla de oro: Cada 2.5 a 3 segundos debe ocurrir un micro-cambio visual o sonoro en pantalla.'
      : 'The golden rule: A visual or acoustic micro-event must occur every 2.5 to 3 seconds.',
    comparison: isEs
      ? {
          beforeLabel: '❌ Video Estático (Monótono)',
          before: [
            '0s - 15s: Hablante en plano medio sin cambios.',
            '15s - 30s: Sigue exactamente la misma toma.',
            '30s - 45s: El espectador desconecta y desliza.',
            'Retención promedio: 22%.',
          ],
          afterLabel: '✓ Ritmo Cardíaco UXIO (2.5s)',
          after: [
            '0s: Gancho con titular en zona segura.',
            '2.5s: Zoom digital al 110% (Primer plano).',
            '5s: Corte a B-roll con Whoosh sutil.',
            '7.5s: Resaltado de palabra clave en amarillo.',
            'Retención promedio: 68%.',
          ],
        }
      : {
          beforeLabel: '❌ Static Monotone Pacing',
          before: [
            '0s - 15s: Unchanging talking head medium shot.',
            '15s - 30s: Exact same framing continues.',
            '30s - 45s: Viewer tunes out and swipes away.',
            'Average percentage viewed: 22%.',
          ],
          afterLabel: '✓ UXIO 2.5s Heartbeat Pacing',
          after: [
            '0s: Hook with safe-zone bold headline.',
            '2.5s: 110% punch zoom to close-up.',
            '5s: B-roll cutaway with subtle whoosh.',
            '7.5s: Emerald caption highlight trigger.',
            'Average percentage viewed: 68%.',
          ],
        },
    instructorNotes: {
      duration: '38:00 - 48:00 min',
      script: isEs
        ? 'Expliquen la regla de los 2.5 segundos. Cada estímulo resetea el reloj de atención del usuario.'
        : 'Teach the 2.5-second rule. Each micro-stimulus resets the viewer’s cognitive attention span.',
    },
  },
  {
    id: 's7',
    type: 'concept',
    tag: isEs ? 'CALIBRACIÓN DE VOZ' : 'VOICE EQ',
    title: isEs ? 'Cómo Hacer que tu Micrófono Móvil Suene como un Podcast de $500' : 'Make Your Mobile Mic Sound Like a $500 Podcast',
    subtitle: isEs
      ? 'Los 3 ajustes nativos en CapCut para limpiar el eco de habitación y amplificar la presencia vocal.'
      : '3 native CapCut audio tools to eliminate room reverb and boost vocal presence.',
    points: isEs
      ? [
          {
            label: '1. Reducción de Ruido (Noise Reduction)',
            text: 'Toca tu clip de audio y activa "Reducir Ruido" para eliminar el soplido del aire acondicionado o ventiladores.',
            tag: 'Paso 1',
          },
          {
            label: '2. Normalizar Volumen a 120-140%',
            text: 'Si grabaste a un metro, sube la ganancia para que las ondas alcancen la zona verde alta sin distorsionar en rojo.',
            tag: 'Paso 2',
          },
          {
            label: '3. Efecto de Voz "Micrófono / Profundo"',
            text: 'En Efectos de Voz, añade una ligera calidez en frecuencias graves para que tu voz tenga cuerpo y autoridad.',
            tag: 'Paso 3',
          },
        ]
      : [
          {
            label: '1. Noise Reduction Toggle',
            text: 'Tap audio clip and enable native noise reduction to kill background AC hum and room hiss.',
            tag: 'Step 1',
          },
          {
            label: '2. Normalize Gain to 120-140%',
            text: 'Boost gain so vocal peaks hit safe high-green threshold without clipping into the red.',
            tag: 'Step 2',
          },
          {
            label: '3. Voice Character Warmth',
            text: 'Add subtle low-end warmth in CapCut voice tools giving your dialogue weight and presence.',
            tag: 'Step 3',
          },
        ],
    instructorNotes: {
      duration: '48:00 - 55:00 min',
      script: isEs
        ? 'Muestren en vivo cómo limpiar el audio de un video grabado en una habitación con eco.'
        : 'Demonstrate cleaning an echoey room recording live in CapCut.',
    },
  },
  {
    id: 's8',
    type: 'checklist',
    tag: isEs ? 'CHECKLIST DE EDICIÓN' : 'EDITING CHECKLIST',
    title: isEs ? 'Checklist de 5 Puntos Antes de Exportar' : '5-Point Pre-Export Editing Checklist',
    subtitle: isEs
      ? 'Verifica estos 5 puntos antes de renderizar tu video final.'
      : 'Verify these 5 points before rendering your final deliverable.',
    content: isEs
      ? [
          '¿Se eliminaron todas las pausas de respiración y silencios mayores a 0.2s?',
          '¿Los subtítulos están en zona segura (sin tapar rostro ni botones)?',
          '¿La música de fondo está bajada a -20 dB y no compite con la voz?',
          '¿Hay al menos 2 tomas de B-roll insertadas sobre la voz hablada?',
          '¿El video termina exactamente en el llamado a la acción sin segundos negros?',
        ]
      : [
          'Are all breathing pauses and dead gaps longer than 0.2s eliminated?',
          'Are dynamic captions placed within vertical safe zones?',
          'Is background music ducked to -20 dB without masking dialogue?',
          'Are at least 2 tactile B-roll overlays inserted to illustrate claims?',
          'Does the video cut cleanly right after the CTA without trailing black frames?',
        ],
    instructorNotes: {
      duration: '55:00 - 60:00 min',
      script: isEs
        ? 'Repasen el checklist de 5 puntos antes de pasar al Hot Seat en vivo.'
        : 'Review the 5-point checklist before launching the live student hot seat.',
    },
  },
];
