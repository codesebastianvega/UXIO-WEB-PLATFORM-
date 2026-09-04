import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM030102 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'La Sincronía del Gancho Triple' : 'The Triple Hook Synchronization',
      subtitle: isEs
        ? 'Microclase 3.1.2 · Cómo combinar Gancho Visual, Gancho Verbal y Texto en Pantalla en los primeros 1.5 segundos.'
        : 'Microclass 3.1.2 · Harmonizing Visual Hook, Spoken Hook, and On-Screen Text in 1.5 seconds.',
      highlight: isEs ? 'Semana 3 · El Gancho 3x' : 'Week 3 · The 3x Hook',
      imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 3.1.2' : '// KEY CONCEPTS 3.1.2',
        badge: isEs ? 'GANCHO TRIPLE' : 'TRIPLE HOOK',
        items: [
          { title: isEs ? 'Gancho Visual' : 'Visual Hook', desc: isEs ? 'Movimiento físico o corte macro en 0.5s' : 'Physical movement or macro cut in 0.5s', color: '#FE385B' },
          { title: isEs ? 'Gancho Verbal' : 'Verbal Hook', desc: isEs ? 'Primera palabra dicha con energía alta' : 'First spoken word delivered with punch', color: '#FF7F07' },
          { title: isEs ? 'Texto en Pantalla' : 'Text on Screen', desc: isEs ? 'Titular de 4 palabras en el tercio superior' : '4-word headline in upper safe zone', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 3.1.2! La mayoría solo piensa en lo que va a decir. Hoy aprenderán a estimular los 3 sentidos del usuario al mismo tiempo.'
          : 'Welcome to Microclass 3.1.2! Learn to stimulate all 3 user sensory channels simultaneously.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'El 65% de las personas ve videos sin sonido en el transporte o trabajo: si no tienes texto en pantalla y acción visual, tu gancho no existe.'
        : '65% of people watch social videos on mute: without on-screen text and visual motion, your hook is invisible.',
      subtitle: isEs
        ? 'El cerebro procesa una imagen en 13 milisegundos y lee texto antes de escuchar la primera sílaba de tu audio.'
        : 'The brain processes visuals in 13ms and scans text before decoding spoken audio syllables.',
      highlight: isEs ? 'Sincronía Visual + Verbal + Texto' : 'Visual + Verbal + Text Sync',
      bgColor: '#FF7F07',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Expliquen la importancia del texto en pantalla en el tercio superior seguro.'
          : 'Stress the safe-zone placement of upper third hook titles.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'LOS 3 CANALES SENSORIALES' : 'THE 3 SENSORY CHANNELS',
      title: isEs ? 'La Anatomía del Gancho Triple en Acción' : 'Anatomy of the Triple Hook in Action',
      subtitle: isEs
        ? 'Cómo ejecutar los 3 elementos en los primeros 1.5 segundos de tu video.'
        : 'Executing all 3 elements in the first 1.5 seconds of your vertical clip.',
      points: isEs
        ? [
            {
              label: '1. El Canal Visual (Lo que se Mueve)',
              text: 'Acerca un objeto al lente, da un paso al frente o corta a una toma cenital de manos trabajando.',
              detailData: {
                tag: 'CANAL 01 // VISUAL',
                title: 'El Disparador de Atención Visual',
                description: 'El movimiento rompe el patrón estático del feed vertical y obliga al pulgar a frenar.',
                imageCaption: 'Movimiento Físico en Segundo 0',
                image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Cero caras estáticas esperando el conteo', 'Acción física desde el frame 1'],
                actionTip: 'Empieza a hablar mientras te mueves.',
              },
            },
            {
              label: '2. El Canal Verbal (Lo que se Escucha)',
              text: 'Di la palabra más importante primero ("El error...", "Si pagas...", "Cuidado con...").',
              detailData: {
                tag: 'CANAL 02 // VERBAL',
                title: 'La Proyección de Voz con Pegada',
                description: 'La entonación inicial debe sonar segura, sin carraspeo ni "ehhh" de duda.',
                imageCaption: 'Voz Cálida y Proyectada',
                image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Cero silencios al inicio', 'Corta el audio exactamente donde empieza la primera vocal'],
                actionTip: 'Inhala aire antes de dar click a grabar.',
              },
            },
            {
              label: '3. El Canal de Texto (Lo que se Lee)',
              text: 'Coloca un titular en letras grandes amarillas o blancas en la zona segura superior (Safe Zone).',
              detailData: {
                tag: 'CANAL 03 // TEXTO',
                title: 'El Titular de Alto Contraste',
                description: 'Máximo 5 palabras con fondo negro o resaltador de color para lectura en 0.2 segundos.',
                imageCaption: 'Titular en Zona Segura',
                image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
                highlights: ['No tapar con los botones de Instagram', 'Tipografía bold de fácil lectura'],
                actionTip: 'Usa mayúsculas sostenidas en la palabra clave.',
              },
            },
          ]
        : [
            { label: '1. Visual Channel', text: 'Step forward, bring product close to lens or cut to hands in motion.' },
            { label: '2. Verbal Channel', text: 'Deliver the most impactful word on frame 0 with clean audio attack.' },
            { label: '3. Text Channel', text: '4-word bold title in top safe zone for silent feed browsers.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Muestren cómo los 3 canales operan simultáneamente en los primeros 1.5 segundos.'
          : 'Demonstrate how the 3 channels fire together in the opening 1.5 seconds.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'EVALUACIÓN DE EFECTIVIDAD' : 'EFFECTIVENESS MATRIX',
      title: isEs ? 'Gancho Unicanal (Solo Audio) vs. Gancho Triple Sincronizado' : 'Single-Channel vs. Synchronized Triple Hook',
      comparison: isEs
        ? {
            beforeLabel: '❌ Gancho Unicanal (Tradicional)',
            before: [
              'Persona parada quieta hablando sin subtítulos iniciales.',
              'Si el usuario tiene el teléfono en silencio, pasa de largo.',
              'Fondo estático sin ningún cambio de plano en 5 segundos.',
              'Retención promedio de los primeros 3s: 22%.',
            ],
            afterLabel: '✓ Gancho Triple UXIO',
            after: [
              'Movimiento de manos + voz con proyección + titular grande.',
              'Atrapa al 100% de los usuarios (con o sin sonido).',
              'Corte dinámico a toma macro antes del segundo 2.',
              'Retención promedio de los primeros 3s: 74%.',
            ],
          }
        : {
            beforeLabel: '❌ Single-Channel Hook',
            before: [
              'Static standing speaker with no opening title.',
              'Muted viewers scroll past instantly.',
              'Zero visual shift in first 5 seconds.',
              'Average 3s retention rate: 22%.',
            ],
            afterLabel: '✓ UXIO Triple Hook',
            after: [
              'Physical movement + vocal attack + bold title overlay.',
              'Engages 100% of viewers (sound on or muted).',
              'Macro B-roll cut before second 2.',
              'Average 3s retention rate: 74%.',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:30 min',
        script: isEs
          ? 'La diferencia de retención del 22% al 74% es lo que decide si el algoritmo distribuye el video.'
          : 'The retention jump from 22% to 74% is what triggers algorithmic viral push.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'MISIÓN 3.1.2' : 'MISSION 3.1.2',
      title: isEs ? 'Tu Checklist de Gancho Triple' : 'Triple Hook Execution Checklist',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Visual',
              desc: '¿Tienes un movimiento de objeto o cambio de plano en el segundo 0?',
            },
            {
              number: '02',
              title: 'Verbal',
              desc: '¿Tu primera palabra es un sustantivo o verbo de impacto sin saludos?',
            },
            {
              number: '03',
              title: 'Texto',
              desc: '¿Tienes un titular de 4 palabras en el tercio superior de la pantalla?',
            },
          ]
        : [
            { number: '01', title: 'Visual', desc: 'Is there physical motion or a cut on second 0?' },
            { number: '02', title: 'Verbal', desc: 'Does your first word hit a high-impact pain point without greetings?' },
            { number: '03', title: 'Text', desc: 'Is there a bold 4-word title in the top safe zone?' },
          ],
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Con estos 3 filtros aprobados, su gancho está listo para el éxito.'
          : 'With these 3 criteria checked, your hook is guaranteed to stop the scroll.',
      },
    },
  ];

  return {
    id: 'm03-01-02-visual-verbal-hooks',
    slug: 'm03-01-02-visual-verbal-hooks',
    lessonId: 'm03-01',
    title: isEs
      ? 'La Sincronía del Gancho Triple'
      : 'The Triple Hook Synchronization',
    moduleTag: isEs ? 'SEMANA 3 · MICROCLASE 3.1.2' : 'WEEK 3 · MICROCLASS 3.1.2',
    estimatedMinutes: 5,
    slides,
  };
};
