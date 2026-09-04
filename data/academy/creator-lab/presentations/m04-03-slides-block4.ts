import { SlideData } from './types';

export const getLiveLab4SlidesBlock4 = (isEs: boolean): SlideData[] => [
  {
    id: 's14',
    type: 'checklist',
    tag: isEs ? 'RÚBRICA DE EVALUACIÓN' : 'EVALUATION RUBRIC',
    title: isEs ? 'Checklist del Reto 4: Criterios para Nota 5.0 ★' : 'Challenge 4 Checklist: Criteria for 5.0 ★ Grade',
    subtitle: isEs
      ? 'Los 5 requisitos obligatorios de edición para que tu video comercial obtenga aprobación docente.'
      : 'The 5 mandatory editing criteria required for your commercial video to achieve 5.0 ★ certification.',
    content: isEs
      ? [
          '1 Video vertical de 45-60s con ritmo continuo sin silencios mayores a 0.2 segundos.',
          'Subtítulos automáticos dinámicos con palabras clave resaltadas en color.',
          'Mezcla de 3 capas calibrada: Voz principal al frente (-3 dB) y música a -20 dB.',
          'Al menos 2 tomas de B-roll o micro-zooms en sincronía con efectos Whoosh.',
          'Portada minimalista 1:1 diseñada con titular claro en zona segura.',
        ]
      : [
          '1 45-60s vertical video with tight continuous pacing and zero gaps over 0.2s.',
          'Dynamic auto-captions with color-highlighted keyword triggers.',
          'Calibrated 3-layer mix: Upfront dialogue (-3 dB) and ducked music (-20 dB).',
          'At least 2 B-roll overlay cutaways or punch zooms synced to whoosh SFX.',
          'Minimalist 1:1 cover with high-contrast headline in safe zone.',
        ],
    instructorNotes: {
      duration: '88:00 - 91:00 min',
      script: isEs
        ? 'Revisen los 5 criterios de la rúbrica de edición. Cumplirlos garantiza nota 5.0 y pase a la Semana 5.'
        : 'Walk through the 5 rubric criteria. Fulfilling all 5 earns a 5.0 ★ pass into Week 5.',
    },
  },
  {
    id: 's15',
    type: 'comparison',
    tag: isEs ? 'ESTÁNDAR DE ENTREGA' : 'SUBMISSION STANDARD',
    title: isEs ? 'Entrega con Ajustes vs. Entrega Aprobada 5.0 ★' : 'Needs Revision vs. Approved 5.0 ★ Video',
    comparison: isEs
      ? {
          beforeLabel: '❌ Entrega con Ajustes Requeridos',
          before: [
            'Silencios de más de 0.5s donde se nota que estás pensando.',
            'Música tan alta que no se entiende el mensaje del producto.',
            'Subtítulos por defecto sin estilo que tapan los botones.',
            'Portada ausente o con diseño de folleto saturado.',
          ],
          afterLabel: '✓ Video Aprobado con 5.0 ★',
          after: [
            'Cortes quirúrgicos con fluidez y dinamismo de dos planos.',
            'Voz limpia con reducción de ruido y música en segundo plano.',
            'Subtítulos dinámicos y legibles con resaltados de marca.',
            'Portada editorial con titular directo y foto nítida.',
          ],
        }
      : {
          beforeLabel: '❌ Needs Revision Submission',
          before: [
            '0.5s gaps where speaker hesitation is audible.',
            'Loud background music overpowering commercial pitch.',
            'Default unstyled captions masked by UI action icons.',
            'Missing cover or cheap cluttered flyer layout.',
          ],
          afterLabel: '✓ Approved 5.0 ★ Production',
          after: [
            'Surgical jump cuts emulating two-camera dynamic pacing.',
            'Crisp noise-reduced dialogue with music ducked to -20 dB.',
            'Dynamic readable captions with branded keyword accents.',
            'Editorial cover with clear 3-word title and sharp still.',
          ],
        },
    instructorNotes: {
      duration: '91:00 - 93:00 min',
      script: isEs
        ? 'Muestren el estándar de calidad esperado para la entrega dominical.'
        : 'Highlight the professional production standard expected on Sunday.',
    },
  },
  {
    id: 's16',
    type: 'steps',
    tag: isEs ? 'PLAN DE PRODUCCIÓN' : 'PRODUCTION TIMELINE',
    title: isEs ? 'Tu Plan de Edición para el Fin de Semana' : 'Your Weekend Editing Timeline',
    steps: isEs
      ? [
          {
            number: 'VIERNES',
            title: '1. Poda Quirúrgica & B-Roll',
            desc: 'Elimina silencios en CapCut y coloca tus clips de apoyo en la capa Overlay.',
          },
          {
            number: 'SÁBADO',
            title: '2. Subtítulos & Sound Design',
            desc: 'Genera subtítulos dinámicos, pinta palabras clave e inserta Whooshes y música a -20 dB.',
          },
          {
            number: 'DOMINGO',
            title: '3. Diseña Portada y Sube tu Enlace (23:59)',
            desc: 'Crea tu portada 1:1, exporta a 1080p y pega tu enlace público en el Aula Virtual.',
          },
        ]
      : [
          { number: 'FRIDAY', title: '1. Rough Cut & B-Roll', desc: 'Trim silent pauses in CapCut and drop overlay B-roll takes.' },
          { number: 'SATURDAY', title: '2. Captions & Sound Design', desc: 'Generate dynamic captions, color highlights, and layer SFX + music at -20 dB.' },
          { number: 'SUNDAY', title: '3. Design Cover & Submit (23:59)', desc: 'Assemble 1:1 cover, export 1080p, and submit public link in portal.' },
        ],
    instructorNotes: {
      duration: '93:00 - 95:00 min',
      script: isEs
        ? 'Recuerden que el plazo de entrega es el domingo a las 23:59.'
        : 'Remind the cohort of the Sunday 23:59 deadline.',
    },
  },
  {
    id: 's17',
    type: 'challenge',
    tag: isEs ? 'ENTREGABLE OFICIAL' : 'OFFICIAL DELIVERABLE',
    title: isEs ? 'Reto 4 Oficial: Tu Primer Video Editado Profesional' : 'Official Challenge 4: Your First Pro-Edited Video',
    challengeData: isEs
      ? {
          whatToDo: 'Edita 1 video vertical completo de tu negocio (45-60s) en CapCut aplicando las 4 pasadas: Cortes sin aire + Tomas de B-roll + Subtítulos dinámicos + Sound Design en 3 capas + Portada 1:1.',
          whatToDeliver: 'Enlace público (Google Drive, Notion, Reel publicado o TikTok no listado) pegado en el formulario del Aula Virtual.',
          whereToSubmit: 'Sección "Reto Práctico" de la Lección 4.4 en el Aula Virtual.',
          criteria: [
            '1 Video vertical de 45-60s sin silencios mayores a 0.2s.',
            'Subtítulos dinámicos con palabras clave resaltadas.',
            'Mezcla de 3 capas (Voz a -3 dB, música a -20 dB, SFX).',
            'Al menos 2 tomas de B-roll en overlay.',
            'Portada minimalista 1:1 con titular claro.',
            'Entrega antes del domingo a las 11:59 PM.',
          ],
        }
      : {
          whatToDo: 'Edit 1 complete commercial vertical video (45-60s) in CapCut applying all 4 passes: Tight cuts + B-roll overlays + Dynamic captions + 3-layer sound design + 1:1 Cover.',
          whatToDeliver: 'Public share link (Google Drive, Notion, published Reel, or unlisted TikTok) submitted in Classroom.',
          whereToSubmit: 'Lesson 4.4 Practical Challenge Submission Box.',
          criteria: [
            '1 45-60s vertical video without pauses over 0.2s.',
            'Dynamic captions with highlighted keyword triggers.',
            '3-layer audio mix (Voice -3 dB, music -20 dB, SFX).',
            'At least 2 B-roll overlay cutaways.',
            'Minimalist 1:1 cover with clear title.',
            'Submission before Sunday 11:59 PM.',
          ],
        },
    instructorNotes: {
      duration: '95:00 - 97:00 min',
      script: isEs
        ? 'Este reto consolida su capacidad de producir videos terminados listos para pauta o feed orgánico.'
        : 'This challenge solidifies students’ capability to deliver ready-to-publish commercial video assets.',
    },
  },
  {
    id: 's18',
    type: 'closing',
    tag: isEs ? 'PRÓXIMA FASE' : 'NEXT PHASE',
    title: isEs ? '¡Semana 4 Completada! Nos Vemos en la Semana 5' : 'Week 4 Complete! See You in Week 5',
    subtitle: isEs
      ? 'La próxima semana cerramos el ciclo completo: Del Contenido al Negocio (Cierre de Ventas por WhatsApp, Automatizaciones y Métricas).'
      : 'Next week we close the full loop: Content That Sells — WhatsApp Closings, Keyword Automations & Retention Analytics.',
    highlight: isEs ? 'Semana 5: Contenido que Vende ➔' : 'Week 5: Content That Sells ➔',
    bgColor: '#10B981',
    instructorNotes: {
      duration: '97:00 - 100:00 min',
      script: isEs
        ? '¡Felicitaciones por dominar la edición móvil y la IA! En la Semana 5 aprenderán a convertir cada comentario en una venta por WhatsApp.'
        : 'Congratulations on mastering mobile editing and AI! In Week 5 you will learn to turn every comment into a closed WhatsApp sale.',
    },
  },
];
