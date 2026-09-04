import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM040101 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's1',
      type: 'title',
      tag: isEs ? 'MICROCLASE 4.1.1' : 'MICROCLASS 4.1.1',
      title: isEs ? 'Cortes sin Aire & Ritmo Visual en CapCut' : 'Tight Cuts & Visual Pacing in CapCut',
      subtitle: isEs
        ? 'Cómo eliminar pausas muertas, aplicar cortes J/L y utilizar micro-zooms digitales para sostener la retención.'
        : 'Eliminating dead air, applying J/L cuts, and using digital punch zooms to sustain retention.',
      highlight: isEs ? 'Edición Dinámica Móvil ➔' : 'Mobile Dynamic Editing ➔',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? 'Bienvenidos a la Semana 4. Hoy aprenderán a editar videos verticales con ritmo profesional desde su smartphone.'
          : 'Welcome to Week 4. Today you will master professional vertical video pacing right on your smartphone.',
      },
    },
    {
      id: 's2',
      type: 'concept',
      tag: isEs ? 'EL ENEMIGO DEL SCROLL' : 'THE ENEMY OF SCROLL',
      title: isEs ? 'El Acantilado del Silencio: 0.3s sin Audio = Abandono' : 'The Silence Cliff: 0.3s Gap = Viewer Drops',
      subtitle: isEs
        ? 'En redes sociales, los silencios entre frases se interpretan como el final del video.'
        : 'On social media, silent gaps between sentences feel like the end of the video.',
      points: isEs
        ? [
            {
              label: 'Corte Quirúrgico (Jump Cut)',
              text: 'Corta el clip justo antes de que inicie la primera onda sonora y corta inmediatamente al terminar la última consonante.',
              tag: 'Técnica 1',
            },
            {
              label: 'El Corte J / L de Audio',
              text: 'Haz que el audio de la siguiente frase o toma de B-roll comience 0.2 segundos antes de que cambie la imagen.',
              tag: 'Técnica 2',
            },
            {
              label: 'Micro-Zoom Digital (10%)',
              text: 'Aplica un zoom del 10% en tomas alternadas para simular el efecto dinámico de una configuración de dos cámaras.',
              tag: 'Técnica 3',
            },
          ]
        : [
            {
              label: 'Surgical Jump Cut',
              text: 'Trim exactly before the first sound wave starts and right after the last consonant ends.',
              tag: 'Technique 1',
            },
            {
              label: 'Audio J / L Cut',
              text: 'Let the next phrase or B-roll audio lead by 0.2s before the video visual switches.',
              tag: 'Technique 2',
            },
            {
              label: 'Digital Punch Zoom (10%)',
              text: 'Apply a subtle 10% zoom on alternating sentences to emulate a multi-camera setup.',
              tag: 'Technique 3',
            },
          ],
      instructorNotes: {
        duration: '1:00 - 2:30 min',
        script: isEs
          ? 'Expliquen por qué no debemos dejar pausas de respiración entre tomas.'
          : 'Emphasize eliminating breathing gaps between sentence cuts.',
      },
    },
    {
      id: 's3',
      type: 'comparison',
      tag: isEs ? 'COMPARATIVA FORENSE' : 'FORENSIC COMPARISON',
      title: isEs ? 'Edición con Tiempos Muertos vs. Edición Dinámica UXIO' : 'Lazy Slow Cuts vs. Dynamic UXIO Pacing',
      comparison: isEs
        ? {
            beforeLabel: '❌ Edición Lenta & Amateur',
            before: [
              'Pausas de 1 segundo entre cada frase.',
              'Mismo encuadre estático durante 45 segundos.',
              'Transiciones lentas o disolvencias que frenan el ritmo.',
              'El usuario siente que el video no avanza.',
            ],
            afterLabel: '✓ Edición Dinámica UXIO',
            after: [
              'Cortes exactos al límite de la onda de voz.',
              'Alternancia de planos (plano medio ➔ primer plano ➔ B-roll).',
              'Cortes directos por corte duro o micro-transiciones con Whoosh.',
              'Sensación de velocidad y contenido de alto valor.',
            ],
          }
        : {
            beforeLabel: '❌ Slow & Amateur Edit',
            before: [
              '1-second dead pauses between sentences.',
              'Single static camera framing for 45 seconds.',
              'Slow crossfades killing energy.',
              'Viewer perceives low information density.',
            ],
            afterLabel: '✓ Dynamic UXIO Pacing',
            after: [
              'Exact trims right on audio waveform peaks.',
              'Alternating framing (medium shot ➔ close up ➔ B-roll).',
              'Hard cuts synchronized with whoosh SFX.',
              'High information velocity keeping viewers glued.',
            ],
          },
      instructorNotes: {
        duration: '2:30 - 3:45 min',
        script: isEs
          ? 'Comparen el impacto de un video editado con ritmo ágil frente a uno con pausas.'
          : 'Highlight how tight pacing dramatically improves average percentage viewed.',
      },
    },
    {
      id: 's4',
      type: 'steps',
      tag: isEs ? 'FLUJO EN CAPCUT' : 'CAPCUT WORKFLOW',
      title: isEs ? 'Los 3 Pasos para Montar tu Timeline en 10 Minutos' : '3 Steps to Assemble Your Timeline in 10 Min',
      steps: isEs
        ? [
            {
              number: '1',
              title: 'Importa tus Clips y Limpia Pausas',
              desc: 'Haz zoom en el timeline y elimina todas las tomas fallidas y silencios con la herramienta Split.',
            },
            {
              number: '2',
              title: 'Aplica Zooms Alternados',
              desc: 'En el clip 2 y clip 4, pellizca la pantalla para escalar la imagen al 110% y crear dinamismo.',
            },
            {
              number: '3',
              title: 'Inserta Tomas de B-roll en Overlay',
              desc: 'Coloca tus clips de apoyo en la capa de superposición tapando los cortes donde sea necesario.',
            },
          ]
        : [
            { number: '1', title: 'Import & Trim Gaps', desc: 'Zoom into timeline and remove failed takes and silent pauses using Split tool.' },
            { number: '2', title: 'Apply Alternating Zooms', desc: 'Scale clips 2 and 4 to 110% with 2 fingers to simulate dual angles.' },
            { number: '3', title: 'Insert B-Roll Overlays', desc: 'Drop tactile B-roll on overlay track to mask cuts and illustrate points.' },
          ],
      instructorNotes: {
        duration: '3:45 - 4:30 min',
        script: isEs
          ? 'Guíen a los alumnos por los 3 pasos de ensamblaje en CapCut móvil.'
          : 'Walk through the 3 mobile assembly steps in CapCut.',
      },
    },
    {
      id: 's5',
      type: 'closing',
      tag: isEs ? 'PRÓXIMO PASO' : 'NEXT STEP',
      title: isEs ? '¡Timeline Listo! Pasemos a Subtítulos Animados' : 'Timeline Done! Let’s Add Animated Captions',
      subtitle: isEs
        ? 'En la siguiente microclase aprenderás a configurar subtítulos dinámicos con resaltado de color estilo Alex Hormozi.'
        : 'In the next microclass you will configure high-retention animated captions with custom color highlights.',
      highlight: isEs ? 'Microclase 4.1.2: Subtítulos ➔' : 'Microclass 4.1.2: Captions ➔',
      bgColor: '#FF7F07',
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Ahora que el timeline no tiene aire, vamos a poner subtítulos dinámicos.'
          : 'Now that the timeline is tight, let’s configure dynamic captions.',
      },
    },
  ];

  return {
    id: 'm04-01-01-capcut-cuts-pacing',
    slug: 'm04-01-01-capcut-cuts-pacing',
    lessonId: 'm04-01',
    title: isEs ? 'Cortes sin Aire & Ritmo Visual en CapCut' : 'Tight Cuts & Visual Pacing in CapCut',
    moduleTag: isEs ? 'SEMANA 4 · EDICIÓN & IA' : 'WEEK 4 · EDITING & AI',
    estimatedMinutes: 5,
    slides,
  };
};
