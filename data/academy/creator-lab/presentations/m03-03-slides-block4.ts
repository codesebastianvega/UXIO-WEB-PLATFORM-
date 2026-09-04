import { SlideData } from './types';

export const getLiveLab3SlidesBlock4 = (isEs: boolean): SlideData[] => [
  {
    id: 's14',
    type: 'checklist',
    tag: isEs ? 'RÚBRICA DE EVALUACIÓN' : 'EVALUATION RUBRIC',
    title: isEs ? 'Checklist del Reto 3: Criterios para Nota 5.0 ★' : 'Challenge 3 Checklist: Criteria for 5.0 ★ Grade',
    subtitle: isEs
      ? 'Los 5 requisitos obligatorios para que tu Kit Multiformato sea aprobado por la mesa docente.'
      : 'The 5 mandatory criteria required for your Multiformat Pack to achieve a 5.0 ★ grade.',
    content: isEs
      ? [
          '1 Reel/TikTok de 45-60s con gancho triple sincronizado y estructura PAS.',
          '1 Carrusel educativo de 6 a 8 diapositivas con portada click-trigger y tabla resumen.',
          '1 Secuencia de 5 Stories con contexto, dolor, sticker de encuesta, prueba y enlace.',
          'Todos los formatos derivados de 1 sola idea de tu Matriz de Contenido.',
          'Entrega puntual mediante enlace público antes del domingo a las 11:59 PM.',
        ]
      : [
          '1 45-60s Reel/TikTok with synchronized triple hook and PAS structure.',
          '1 Educational 6-8 slide carousel with click-trigger cover and summary table.',
          '1 5-story sales sequence with context, pain, poll sticker, proof and link.',
          'All assets derived from 1 single idea from your Week 1 Content Matrix.',
          'Punctual submission via public share link before Sunday 11:59 PM.',
        ],
    instructorNotes: {
      duration: '88:00 - 91:00 min',
      script: isEs
        ? 'Revisen los 5 criterios de la rúbrica. Cumplir los 5 garantiza nota perfecta y pase a la Semana 4.'
        : 'Walk through the 5 criteria points. Meeting all 5 guarantees a 5.0 ★ pass to Week 4.',
    },
  },
  {
    id: 's15',
    type: 'comparison',
    tag: isEs ? 'ESTÁNDAR DE CALIDAD' : 'QUALITY STANDARD',
    title: isEs ? 'Kit Incompleto vs. Kit Multiformato Aprobado 5.0 ★' : 'Incomplete Submission vs. Approved 5.0 ★ Pack',
    comparison: isEs
      ? {
          beforeLabel: '❌ Entrega con Ajustes Requeridos',
          before: [
            'Reel con intro corporativa aburrida sin gancho en el segundo 0.',
            'Carrusel saturado de texto sin jerarquía tipográfica.',
            'Stories con flyers estáticos sin stickers interactivos.',
            'Formatos inconexos que no siguen una estrategia clara.',
          ],
          afterLabel: '✓ Kit Aprobado con 5.0 ★',
          after: [
            'Reel con gancho triple, tomas de B-roll y CTA a WhatsApp.',
            'Carrusel limpio con portada magnética y tabla de consulta.',
            'Stories conversacionales con encuesta y prueba social real.',
            'Sinergia total: 1 idea distribuida en los 3 canales clave.',
          ],
        }
      : {
          beforeLabel: '❌ Needs Revision Submission',
          before: [
            'Reel with slow corporate greeting and zero hook.',
            'Text-heavy carousel with unreadable tiny fonts.',
            'Stories made of cold promotional flyers with no polls.',
            'Disconnected formats lacking strategic synergy.',
          ],
          afterLabel: '✓ Approved 5.0 ★ Multiformat Pack',
          after: [
            'Reel with triple hook, macro B-roll, and WhatsApp CTA.',
            'Clean carousel with click-trigger cover and cheat sheet table.',
            'Conversational 5-story funnel with poll sticker and real proof.',
            '1 unified core idea multiplied seamlessly across 3 channels.',
          ],
        },
    instructorNotes: {
      duration: '91:00 - 93:00 min',
      script: isEs
        ? 'Muestren el estándar de calidad esperado para la entrega dominical.'
        : 'Highlight the professional output standard expected on Sunday.',
    },
  },
  {
    id: 's16',
    type: 'steps',
    tag: isEs ? 'PLAN DE EJECUCIÓN' : 'PRODUCTION PLAN',
    title: isEs ? 'Tu Plan de Producción para el Fin de Semana' : 'Your Weekend Production Timeline',
    steps: isEs
      ? [
          {
            number: 'VIERNES',
            title: '1. Guioniza y Diseña tu Carrusel',
            desc: 'Escribe tu guion PAS y ensambla las 7 láminas de tu carrusel con la plantilla.',
          },
          {
            number: 'SÁBADO',
            title: '2. Rueda tu Reel y Publica tus Stories',
            desc: 'Graba tu video de 45s frase por frase y sube tu secuencia de 5 historias.',
          },
          {
            number: 'DOMINGO',
            title: '3. Sube tu Enlace al Portal (23:59)',
            desc: 'Pega tu enlace público (Drive, Notion, Reels o TikTok) en el Aula Virtual.',
          },
        ]
      : [
          { number: 'FRIDAY', title: '1. Script & Design Carousel', desc: 'Draft your PAS script and assemble your 7-slide carousel.' },
          { number: 'SATURDAY', title: '2. Film Reel & Publish Stories', desc: 'Shoot 45s video sentence-by-sentence and post your 5-story funnel.' },
          { number: 'SUNDAY', title: '3. Submit Link to Portal (23:59)', desc: 'Submit your public URL in the Classroom challenge portal.' },
        ],
    instructorNotes: {
      duration: '93:00 - 95:00 min',
      script: isEs
        ? 'Recuerden que el plazo cierra el domingo a las 23:59 hora local.'
        : 'Remind the cohort of the strict Sunday 23:59 deadline.',
    },
  },
  {
    id: 's17',
    type: 'challenge',
    tag: isEs ? 'ENTREGABLE OFICIAL' : 'OFFICIAL DELIVERABLE',
    title: isEs ? 'Reto 3 Oficial: El Kit Multiformato de tu Marca' : 'Official Challenge 3: Your Brand Multiformat Pack',
    challengeData: isEs
      ? {
          whatToDo: 'Crea las 3 piezas del Kit Multiformato basadas en 1 idea de tu negocio: 1 Reel comercial (45-60s) + 1 Carrusel educativo (6-8 slides) + 1 Secuencia de 5 Stories.',
          whatToDeliver: 'Enlace público (carpeta de Google Drive, espacio de Notion o enlaces directos a tus publicaciones) pegado en el formulario del Aula Virtual.',
          whereToSubmit: 'Sección "Reto Práctico" de la Lección 3.4 en el Aula Virtual.',
          criteria: [
            '1 Reel/TikTok con gancho triple y estructura PAS.',
            '1 Carrusel con portada click-trigger y tabla resumen.',
            '1 Secuencia de 5 Stories con encuesta y enlace WhatsApp.',
            'Entrega antes del domingo a las 11:59 PM.',
          ],
        }
      : {
          whatToDo: 'Create all 3 assets of the Multiformat Pack based on 1 core business idea: 1 commercial Reel (45-60s) + 1 educational Carousel (6-8 slides) + 1 5-story sales sequence.',
          whatToDeliver: 'Public share link (Google Drive folder, Notion page, or live social URLs) submitted in Classroom portal.',
          whereToSubmit: 'Lesson 3.4 Practical Challenge Submission Box.',
          criteria: [
            '1 Reel/TikTok with triple hook and PAS framework.',
            '1 Carousel with click-trigger cover and summary table.',
            '1 5-Story funnel with poll sticker and WhatsApp CTA.',
            'Submission before Sunday 11:59 PM.',
          ],
        },
    instructorNotes: {
      duration: '95:00 - 97:00 min',
      script: isEs
        ? 'Este reto consolida su capacidad de crear contenido nativo multicanal.'
        : 'This challenge solidifies students’ multi-channel content packaging skills.',
    },
  },
  {
    id: 's18',
    type: 'closing',
    tag: isEs ? 'PRÓXIMA FASE' : 'NEXT PHASE',
    title: isEs ? '¡Semana 3 Completada! Nos Vemos en la Semana 4' : 'Week 3 Complete! See You in Week 4',
    subtitle: isEs
      ? 'La próxima semana aceleramos al máximo: Edición Dinámica en CapCut, Subtítulos Animados con IA, Sound Design y Repurposing Masivo.'
      : 'Next week we accelerate output: Dynamic CapCut Mobile Editing, AI Animated Captions, Sound Design and Multi-Platform Repurposing.',
    highlight: isEs ? 'Semana 4: Edición & IA ➔' : 'Week 4: Editing & AI ➔',
    bgColor: '#10B981',
    instructorNotes: {
      duration: '97:00 - 100:00 min',
      script: isEs
        ? '¡Felicitaciones por dominar la creación de contenido! En la Semana 4 aprenderán a editar en tiempo récord con CapCut e Inteligencia Artificial.'
        : 'Congratulations on mastering content creation! Week 4 is all about rapid editing in CapCut with AI.',
    },
  },
];
