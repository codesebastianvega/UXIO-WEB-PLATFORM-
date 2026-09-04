import { SlideData } from './types';

export const getLiveLab4SlidesBlock1 = (isEs: boolean): SlideData[] => [
  {
    id: 's1',
    type: 'title',
    tag: isEs ? 'SESIÓN EN VIVO · 90 MIN' : 'LIVE MASTERCLASS · 90 MIN',
    title: isEs
      ? 'Clínica de Edición en Directo & Auditoría de Timeline'
      : 'Live Editing Clinic & Timeline Forensics',
    subtitle: isEs
      ? 'Auditoría forense de timelines de alumnos, teardown de ritmo y edición en caliente en CapCut móvil frente a la cohorte.'
      : 'Real-time student timeline audits, pacing teardowns, and live mobile CapCut editing.',
    highlight: isEs ? 'Semana 4: Edición & IA' : 'Week 4: Editing & AI',
    bgColor: '#FE385B',
    instructorNotes: {
      duration: '0:00 - 5:00 min',
      script: isEs
        ? '¡Bienvenidos al Live Lab de la Semana 4! Hoy vamos a operar en vivo sus líneas de tiempo. Esta sesión es 100% práctica de edición.'
        : 'Welcome to Week 4 Live Lab! Today we operate live on student timelines. 100% practical editing masterclass.',
    },
  },
  {
    id: 's2',
    type: 'concept',
    tag: isEs ? 'DIAGNÓSTICO EN DIRECTO' : 'LIVE DIAGNOSTICS',
    title: isEs ? 'Los 4 Errores Fatales que Hacen que un Video se Vea Amateur' : '4 Fatal Mistakes That Make Your Video Look Amateur',
    subtitle: isEs
      ? 'Auditoría clínica de los errores más comunes cometidos al editar en smartphones.'
      : 'Clinical audit of the most common editing flaws committed on mobile timelines.',
    points: isEs
      ? [
          {
            label: '1. El "Bache de Silencio" de 0.5s',
            text: 'Dejar el espacio donde tomas aire entre frase y frase. En TikTok, 0.5s de silencio se siente como 10 segundos.',
            tag: 'Error #1',
          },
          {
            label: '2. Música al 50% Tapando la Voz',
            text: 'Poner una canción de fondo con volumen alto que obliga al usuario a forzar el oído para entender lo que dices.',
            tag: 'Error #2',
          },
          {
            label: '3. Subtítulos Gigantes en la Barbilla',
            text: 'Bloques de texto que tapan el rostro o quedan tapados por los botones de like y compartir de la app.',
            tag: 'Error #3',
          },
          {
            label: '4. Efectos de Sonido Desfasados',
            text: 'El sonido "Whoosh" suena 3 fotogramas después de que ya cambió la imagen, rompiendo la ilusión visual.',
            tag: 'Error #4',
          },
        ]
      : [
          {
            label: '1. The 0.5s Silence Hole',
            text: 'Leaving breathing room between spoken takes. 0.5s of dead air feels like an eternity on TikTok.',
            tag: 'Mistake #1',
          },
          {
            label: '2. 50% Volume Drowning Music',
            text: 'High-level background tracks forcing viewers to strain to decode dialogue.',
            tag: 'Mistake #2',
          },
          {
            label: '3. Giant Text Over Chin / UI',
            text: 'Text paragraphs placed over speaker face or masked by native UI action buttons.',
            tag: 'Mistake #3',
          },
          {
            label: '4. Lagging Audio SFX',
            text: 'Whoosh SFX firing 3 frames after visual transition already took place.',
            tag: 'Mistake #4',
          },
        ],
    instructorNotes: {
      duration: '5:00 - 15:00 min',
      script: isEs
        ? 'Revisen con la sala los 4 errores fatales. Pidan al chat que admitan cuál de estos cometen con frecuencia.'
        : 'Walk the room through the 4 fatal editing mistakes. Ask the chat to identify their weak spots.',
    },
  },
  {
    id: 's3',
    type: 'comparison',
    tag: isEs ? 'AUDITORÍA VISUAL' : 'VISUAL AUDIT',
    title: isEs ? 'Timeline Lento vs. Timeline Quirúrgico UXIO' : 'Lazy Timeline vs. Surgical UXIO Timeline',
    comparison: isEs
      ? {
          beforeLabel: '❌ Timeline Amateur Descalibrado',
          before: [
            'Clips largos con vacilaciones y muletillas ("ehhh", "mmm").',
            'Pista de música sin ecualizar compitiendo con la voz.',
            'Cero pistas de B-roll en superposición (Overlay).',
            'Exportado en 4K con bitrate bajo generando artefactos.',
          ],
          afterLabel: '✓ Timeline Quirúrgico UXIO',
          after: [
            'Cortes J/L donde el audio de la siguiente frase guía la vista.',
            'Música bajada a -20 dB con ducking automático.',
            'B-roll en overlay con transiciones Whoosh sincronizadas.',
            'Exportado en 1080p 30 FPS con bitrate alto cristalino.',
          ],
        }
      : {
          beforeLabel: '❌ Uncalibrated Amateur Timeline',
          before: [
            'Long takes with verbal pauses and stuttering ("ummm", "ehh").',
            'Unequalized music track competing with vocal dialogue.',
            'Zero B-roll overlay cutaways masking talking head.',
            'Exported in low-bitrate 4K with compression artifacts.',
          ],
          afterLabel: '✓ Surgical UXIO Timeline',
          after: [
            'J/L cuts where incoming audio leads visual transition.',
            'Music ducked strictly to -20 dB under dialogue.',
            'Tactile B-roll on overlay track with frame-synced whooshes.',
            'Exported in high-bitrate 1080p 30 FPS crystal clarity.',
          ],
        },
    instructorNotes: {
      duration: '15:00 - 22:00 min',
      script: isEs
        ? 'Muestren la diferencia anatómica entre ambos timelines en CapCut.'
        : 'Show the visual structural difference between both timeline setups in CapCut.',
    },
  },
  {
    id: 's4',
    type: 'steps',
    tag: isEs ? 'PROTOCOLO DE EDICIÓN' : 'EDITING PROTOCOL',
    title: isEs ? 'El Flujo de Edición Móvil en 4 Pasadas' : 'The 4-Pass Mobile Editing Protocol',
    steps: isEs
      ? [
          {
            number: 'PASADA 1',
            title: 'Corte en Bruto (Rough Cut)',
            desc: 'Elimina silencios, errores y respiraciones hasta dejar solo la voz limpia a ritmo rápido.',
          },
          {
            number: 'PASADA 2',
            title: 'B-Roll & Micro-Zooms',
            desc: 'Añade tomas de apoyo en la capa de Overlay y aplica zoom del 10% en tomas alternadas.',
          },
          {
            number: 'PASADA 3',
            title: 'Subtítulos Dinámicos',
            desc: 'Genera subtítulos automáticos, elige fuente bold y pinta palabras clave en amarillo o verde.',
          },
          {
            number: 'PASADA 4',
            title: 'Sound Design & Mezcla Final',
            desc: 'Inserta música a -20 dB y coloca efectos de sonido (Whoosh, Pop) en sincronía con los cortes.',
          },
        ]
      : [
          { number: 'PASS 1', title: 'Rough Cut (Trimming)', desc: 'Cut dead pauses and verbal tics leaving tight spoken dialogue.' },
          { number: 'PASS 2', title: 'B-Roll & Punch Zooms', desc: 'Add overlay cutaways and apply 10% punch zooms on alternating cuts.' },
          { number: 'PASS 3', title: 'Dynamic Captions', desc: 'Generate auto-captions, pick bold typography, and highlight key trigger words.' },
          { number: 'PASS 4', title: 'Sound Design & Final Mix', desc: 'Layer background music at -20 dB and frame-align whoosh and pop SFX.' },
        ],
    instructorNotes: {
      duration: '22:00 - 28:00 min',
      script: isEs
        ? 'Enseñen a editar por pasadas. Intentar hacer todo al mismo tiempo es lo que causa bloqueos y lentitud.'
        : 'Teach pass-by-pass editing. Doing everything in one pass causes overwhelm and slow output.',
    },
  },
];
