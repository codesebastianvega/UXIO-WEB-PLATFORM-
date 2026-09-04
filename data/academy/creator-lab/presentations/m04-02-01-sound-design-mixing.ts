import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM040201 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's1',
      type: 'title',
      tag: isEs ? 'MICROCLASE 4.2.1' : 'MICROCLASS 4.2.1',
      title: isEs ? 'Sound Design & Mezcla de Audio en 3 Capas' : 'Sound Design & 3-Layer Audio Mixing',
      subtitle: isEs
        ? 'Cómo ecualizar la voz principal, balancear la música de fondo y aplicar efectos de sonido para duplicar la inmersión.'
        : 'EQing lead vocal, balancing background music, and placing tactile SFX to double viewer immersion.',
      highlight: isEs ? 'El 50% de la Experiencia es Audio ➔' : 'Audio is 50% of Video ➔',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? 'El sonido es el responsable del 50% de la percepción de calidad. Hoy aprenderán la fórmula de mezcla en 3 capas.'
          : 'Audio drives 50% of perceived video quality. Today you will master 3-layer sound mixing.',
      },
    },
    {
      id: 's2',
      type: 'concept',
      tag: isEs ? 'LA PIRÁMIDE DEL AUDIO' : 'THE AUDIO PYRAMID',
      title: isEs ? 'Las 3 Capas de Audio en la Línea de Tiempo' : 'The 3 Audio Layers on Your Timeline',
      subtitle: isEs
        ? 'Cada elemento sonoro tiene una función psicológica y un nivel de volumen específico.'
        : 'Every sound asset has a distinct psychological purpose and target dB level.',
      points: isEs
        ? [
            {
              label: 'Capa 1: Voz Principal (-3 dB)',
              text: 'Es la dueña absoluta del video. Debe sonar limpia, presente y con reducción de ruido activada en CapCut.',
              tag: 'Prioridad 1',
            },
            {
              label: 'Capa 2: Efectos de Sonido (-6 dB)',
              text: 'Whooshes en cortes, Pops en subtítulos y Clicks en pantallas. Subrayan las transiciones visuales.',
              tag: 'Prioridad 2',
            },
            {
              label: 'Capa 3: Música de Fondo (-20 dB)',
              text: 'Pista instrumental de baja frecuencia (Lo-Fi / Phonk suave). Jamás debe competir con la frecuencia de la voz humana.',
              tag: 'Prioridad 3',
            },
          ]
        : [
            {
              label: 'Layer 1: Main Vocal (-3 dB)',
              text: 'The star of the mix. Must sound crisp, upfront, and noise-reduced.',
              tag: 'Priority 1',
            },
            {
              label: 'Layer 2: Sound Effects (-6 dB)',
              text: 'Whooshes on transitions, Pops on captions, and subtle Clicks on graphics.',
              tag: 'Priority 2',
            },
            {
              label: 'Layer 3: Background Music (-20 dB)',
              text: 'Instrumental bed (Lo-Fi / chill beats). Never competes with vocal frequencies.',
              tag: 'Priority 3',
            },
          ],
      instructorNotes: {
        duration: '1:00 - 2:30 min',
        script: isEs
          ? 'Expliquen los 3 niveles de decibeles para no saturar la mezcla.'
          : 'Explain the 3 decibel tiers to prevent audio clipping and muddiness.',
      },
    },
    {
      id: 's3',
      type: 'comparison',
      tag: isEs ? 'DIAGNÓSTICO AUDITIVO' : 'AUDIO DIAGNOSTIC',
      title: isEs ? 'Música Estridente vs. Mezcla Calibrada UXIO' : 'Loud Blasting Music vs. Calibrated UXIO Mix',
      comparison: isEs
        ? {
            beforeLabel: '❌ Mezcla Amateur & Saturada',
            before: [
              'Música con voz cantada que distrae del mensaje.',
              'Volumen de la música al 50% tapando la voz del creador.',
              'Cero efectos de sonido en los cortes y títulos.',
              'El espectador tiene que forzar el oído o abandona.',
            ],
            afterLabel: '✓ Mezcla Cinemática UXIO',
            after: [
              'Pista instrumental pura sin vocales.',
              'Volumen de música al 10-15% (-20 dB).',
              'Efectos Whoosh sutiles en cada transición de B-roll.',
              'Claridad vocal cristalina y sensación de documental.',
            ],
          }
        : {
            beforeLabel: '❌ Loud & Muddy Mix',
            before: [
              'Music with vocals competing with speaker.',
              'Music at 50% drowning out the dialogue.',
              'Zero sound effects on cuts and on-screen text.',
              'Viewer strains to listen and swipes away.',
            ],
            afterLabel: '✓ Calibrated UXIO Mix',
            after: [
              'Pure instrumental track without vocal stems.',
              'Music volume set to 10-15% (-20 dB).',
              'Subtle whooshes synced to B-roll cuts.',
              'Crystal clear dialogue feeling like a mini-documentary.',
            ],
          },
      instructorNotes: {
        duration: '2:30 - 3:45 min',
        script: isEs
          ? 'Demuestren cómo la música demasiado alta destruye el mensaje comercial.'
          : 'Emphasize that loud background music kills commercial conversion.',
      },
    },
    {
      id: 's4',
      type: 'steps',
      tag: isEs ? 'PASO A PASO' : 'WORKFLOW',
      title: isEs ? 'Cómo Añadir Efectos de Sonido en CapCut Móvil' : 'How to Add SFX in CapCut Mobile',
      steps: isEs
        ? [
            {
              number: '1',
              title: 'Ve a Audio ➔ Efectos',
              desc: 'En la pestaña "Transición" busca Whoosh o Swoosh y colócalo debajo del corte.',
            },
            {
              number: '2',
              title: 'Ajusta el Volumen a -6 dB',
              desc: 'Toca el efecto y baja el volumen al 30-40% para que sea una textura y no un susto.',
            },
            {
              number: '3',
              title: 'Sincroniza con el Frame Exacto',
              desc: 'Asegúrate de que el pico de la onda del Whoosh coincida con el primer fotograma del cambio de plano.',
            },
          ]
        : [
            { number: '1', title: 'Go to Audio ➔ Effects', desc: 'Under Transition tab search for Whoosh or Swoosh and drop below cut.' },
            { number: '2', title: 'Lower Volume to -6 dB', desc: 'Tap clip and reduce volume to 30-40% so it feels organic.' },
            { number: '3', title: 'Sync to Exact Cut Frame', desc: 'Align SFX waveform peak with the very first frame of the visual cut.' },
          ],
      instructorNotes: {
        duration: '3:45 - 4:30 min',
        script: isEs
          ? 'Guíen el proceso de sincronización fotograma a fotograma en CapCut.'
          : 'Guide the frame-by-frame SFX alignment process in CapCut.',
      },
    },
    {
      id: 's5',
      type: 'closing',
      tag: isEs ? 'SIGUIENTE MICROCLASE' : 'NEXT MICROCLASS',
      title: isEs ? '¡Sonido Calibrado! Ahora Diseñemos Portadas Cohesivas' : 'Audio Done! Let’s Design Cohesive Covers',
      subtitle: isEs
        ? 'En la Microclase 4.2.2 aprenderás a diseñar portadas minimalistas que aumentan el CTR en la cuadrícula de tu perfil.'
        : 'In Microclass 4.2.2 you will learn to design clean covers that boost profile CTR.',
      highlight: isEs ? 'Microclase 4.2.2: Portadas ➔' : 'Microclass 4.2.2: Covers ➔',
      bgColor: '#FF7F07',
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Una vez calibrado el audio, pasemos a diseñar la portada de nuestro video.'
          : 'Now let’s move into cover design for grid consistency.',
      },
    },
  ];

  return {
    id: 'm04-02-01-sound-design-mixing',
    slug: 'm04-02-01-sound-design-mixing',
    lessonId: 'm04-02',
    title: isEs ? 'Sound Design & Mezcla de Audio en 3 Capas' : 'Sound Design & 3-Layer Audio Mixing',
    moduleTag: isEs ? 'SEMANA 4 · EDICIÓN & IA' : 'WEEK 4 · EDITING & AI',
    estimatedMinutes: 5,
    slides,
  };
};
