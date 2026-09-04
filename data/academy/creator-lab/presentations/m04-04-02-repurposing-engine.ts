import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM040402 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's1',
      type: 'title',
      tag: isEs ? 'MICROCLASE 4.4.2' : 'MICROCLASS 4.4.2',
      title: isEs ? 'El Motor de Repurposing 1 a 5 con Inteligencia Artificial' : 'The 1-to-5 AI Content Repurposing Engine',
      subtitle: isEs
        ? 'Cómo transformar un solo video vertical de 45 segundos en 5 activos de contenido para Reels, TikTok, Carruseles, Stories y WhatsApp.'
        : 'Transforming a single 45-second vertical video into 5 high-converting assets across Reels, Carousels, Stories, and WhatsApp.',
      highlight: isEs ? 'Multiplica tu Alcance ➔' : 'Multiply Reach 5x ➔',
      bgColor: '#10B981',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? 'No crees contenido desde cero todos los días. Graba 1 pieza central y multiplícala con el motor de repurposing.'
          : 'Stop creating from scratch daily. Film 1 pillar asset and multiply it with the repurposing engine.',
      },
    },
    {
      id: 's2',
      type: 'concept',
      tag: isEs ? 'LA PIRÁMIDE DE MULTIPLICACIÓN' : 'MULTIPLICATION PYRAMID',
      title: isEs ? '1 Idea Central ➔ 5 Formatos Nativos' : '1 Core Idea ➔ 5 Platform Assets',
      subtitle: isEs
        ? 'Cada formato captura al prospecto en una etapa diferente del proceso de decisión de compra.'
        : 'Each format catches your buyer at a distinct touchpoint in their purchase journey.',
      points: isEs
        ? [
            {
              label: 'Activo 1: Reel / TikTok (45s)',
              text: 'Video dinámico con gancho triple y PAS para atraer audiencia fría de exploración.',
              tag: 'Atracción',
            },
            {
              label: 'Activo 2: Carrusel Educativo (7 Slides)',
              text: 'Láminas minimalistas con la tabla resumen de la solución para generar guardados.',
              tag: 'Autoridad',
            },
            {
              label: 'Activo 3: Secuencia de 5 Stories',
              text: 'Embudo conversacional con encuesta y enlace a WhatsApp para prospectos tibios.',
              tag: 'Conversión',
            },
          ]
        : [
            {
              label: 'Asset 1: Reel / TikTok (45s)',
              text: 'Dynamic video with triple hook and PAS capturing cold discovery traffic.',
              tag: 'Attraction',
            },
            {
              label: 'Asset 2: Educational Carousel (7 Slides)',
              text: 'Clean slides with cheat sheet summary table driving bookmarks and saves.',
              tag: 'Authority',
            },
            {
              label: 'Asset 3: 5-Story Sales Funnel',
              text: 'Conversational sequence with poll sticker and WhatsApp closing link.',
              tag: 'Conversion',
            },
          ],
      instructorNotes: {
        duration: '1:00 - 2:30 min',
        script: isEs
          ? 'Expliquen los 3 roles de la pirámide de contenidos.'
          : 'Walk through the 3 strategic tiers of the content pyramid.',
      },
    },
    {
      id: 's3',
      type: 'comparison',
      tag: isEs ? 'SISTEMA DE TRABAJO' : 'WORKFLOW COMPARISON',
      title: isEs ? 'Crear Todo Desde Cero vs. Sistema de Repurposing UXIO' : 'Burnout Daily Creation vs. UXIO Repurposing Engine',
      comparison: isEs
        ? {
            beforeLabel: '❌ Creador Agotado (Burnout)',
            before: [
              'Piensa 5 ideas diferentes todos los días.',
              'Pasa 4 horas al día grabando y editando.',
              'Formatos inconexos que no se apoyan entre sí.',
              'Abandona la creación al cabo de 3 semanas.',
            ],
            afterLabel: '✓ Sistema de Repurposing UXIO',
            after: [
              'Elige 1 idea potente de su Matriz por semana.',
              'Graba en 1 bloque de 45 minutos.',
              'La IA adapta el guion a carrusel, stories y mensajes.',
              'Consistencia garantizada y flujo comercial continuo.',
            ],
          }
        : {
            beforeLabel: '❌ Creator Burnout',
            before: [
              'Brainstorms 5 disconnected ideas daily.',
              'Spends 4 hours a day shooting and editing.',
              'Fragmented assets with zero strategic synergy.',
              'Quits after 3 weeks due to fatigue.',
            ],
            afterLabel: '✓ UXIO Repurposing Engine',
            after: [
              'Picks 1 validated idea from matrix weekly.',
              'Shoots entire week in one 45-minute batch.',
              'AI instantly adapts core script to carousels & stories.',
              'Unstoppable consistency and steady inbound leads.',
            ],
          },
      instructorNotes: {
        duration: '2:30 - 3:45 min',
        script: isEs
          ? 'Muestren cómo este sistema previene el agotamiento y garantiza la consistencia.'
          : 'Highlight how repurposing prevents creator burnout and guarantees consistency.',
      },
    },
    {
      id: 's4',
      type: 'steps',
      tag: isEs ? 'FLUJO EN 3 PASOS' : '3-STEP FLOW',
      title: isEs ? 'Cómo Ejecutar el Repurposing con IA en 5 Minutos' : 'How to Run AI Repurposing in 5 Minutes',
      steps: isEs
        ? [
            {
              number: '1',
              title: 'Copia el Prompt de Repurposing',
              desc: 'Toma el prompt #3 del recurso #ai-creator-prompt-pack del aula virtual.',
            },
            {
              number: '2',
              title: 'Pega tu Guion Final Aprobado',
              desc: 'Inserta el guion del video que ya grabaste en la ventana de chat con Claude o ChatGPT.',
            },
            {
              number: '3',
              title: 'Copia los Textos a tus Plantillas',
              desc: 'Pega el texto del carrusel en tu plantilla de diseño y programa tus 5 Stories en Instagram.',
            },
          ]
        : [
            { number: '1', title: 'Copy Repurposing Prompt', desc: 'Grab prompt #3 from #ai-creator-prompt-pack in your classroom.' },
            { number: '2', title: 'Paste Approved Video Script', desc: 'Feed your filmed video script into Claude or ChatGPT.' },
            { number: '3', title: 'Paste Text into Templates', desc: 'Drop carousel copy into your design slides and schedule 5 stories.' },
          ],
      instructorNotes: {
        duration: '3:45 - 4:30 min',
        script: isEs
          ? 'Guíen a los alumnos para ejecutar el flujo de repurposing.'
          : 'Guide the 3-step repurposing execution workflow.',
      },
    },
    {
      id: 's5',
      type: 'closing',
      tag: isEs ? 'RETO SEMANAL' : 'WEEKLY CHALLENGE',
      title: isEs ? '¡Semana 4 Completada! A Entregar el Reto Oficial' : 'Week 4 Complete! Submit Official Challenge',
      subtitle: isEs
        ? 'Completa tu video editado en CapCut con subtítulos dinámicos, sound design y portada antes del domingo a las 11:59 PM.'
        : 'Submit your CapCut video with dynamic captions, sound design, and cover before Sunday at 11:59 PM.',
      highlight: isEs ? 'Reto 4: Entrega Oficial ➔' : 'Challenge 4: Official Submission ➔',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? '¡Felicitaciones! Ahora pasen a entregar el Reto 4 Oficial en el Aula Virtual.'
          : 'Congratulations! Head to the classroom portal to submit Challenge 4.',
      },
    },
  ];

  return {
    id: 'm04-04-02-repurposing-engine',
    slug: 'm04-04-02-repurposing-engine',
    lessonId: 'm04-04',
    title: isEs ? 'El Motor de Repurposing 1 a 5 con Inteligencia Artificial' : 'The 1-to-5 AI Content Repurposing Engine',
    moduleTag: isEs ? 'SEMANA 4 · EDICIÓN & IA' : 'WEEK 4 · EDITING & AI',
    estimatedMinutes: 5,
    slides,
  };
};
