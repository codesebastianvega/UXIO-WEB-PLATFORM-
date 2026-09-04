import { SlideData } from './types';

export const getLiveLab1SlidesBlock4 = (isEs: boolean): SlideData[] => [
  {
    id: 's14',
    type: 'checklist',
    tag: isEs ? 'RÚBRICA DE EVALUACIÓN' : 'EVALUATION RUBRIC',
    title: isEs ? 'Checklist del Reto 1: Criterios para Nota 5.0 ★' : 'Challenge 1 Checklist: Criteria for 5.0 ★ Grade',
    subtitle: isEs
      ? 'Los 5 requisitos obligatorios que revisará la mesa docente antes de aprobar tu entrega dominical.'
      : 'The 5 mandatory requirements reviewed by instructors before approving your submission.',
    content: isEs
      ? [
          'Matriz con 30 filas completas (Título, Pilar, Gancho de 3s y CTA).',
          'Distribución balanceada respetando la dieta 40/20/20/10/10.',
          'Ganchos de apertura sin saludos lentos ni rodeos corporativos.',
          'Al menos 5 objeciones reales extraídas de chats de WhatsApp.',
          'Llamado a la acción con palabra clave hacia WhatsApp en el 100% de los videos.',
        ]
      : [
          'Complete 30-row matrix (Title, Pillar, 3s Hook and CTA).',
          'Balanced distribution following the 40/20/20/10/10 diet.',
          'Zero-intro opening hooks addressing real buyer friction.',
          'At least 5 real objections extracted from WhatsApp chats.',
          'Keyword WhatsApp CTA declared on 100% of rows.',
        ],
    instructorNotes: {
      duration: '84:00 - 87:00 min',
      script: isEs
        ? 'Repasen cada uno de los 5 puntos. Si cumplen los 5, obtienen automáticamente su insignia de aprobación y nota 5.0 ★.'
        : 'Walk through each criteria point for guaranteed 5.0 ★ pass.',
    },
  },
  {
    id: 's15',
    type: 'comparison',
    tag: isEs ? 'ESTÁNDAR DE CALIDAD' : 'QUALITY STANDARD',
    title: isEs ? 'Matriz Aprobada (5.0 ★) vs. Matriz que Requiere Ajustes' : 'Approved Matrix (5.0 ★) vs. Needs Revision',
    comparison: isEs
      ? {
          beforeLabel: '❌ Entrega que Requiere Ajustes',
          before: [
            'Títulos genéricos ("Consejos para tu día a día").',
            '20 de 30 videos son venta directa ("Cómprame").',
            'Ganchos que empiezan con "Hola a todos, hoy les traigo...".',
            'No incluye palabra clave para WhatsApp.',
          ],
          afterLabel: '✓ Entrega Aprobada con 5.0 ★',
          after: [
            'Ganchos ultra-específicos ("Por qué tu suela se despega...").',
            'Dieta exacta 12 Edu, 6 Proc, 6 Casos, 3 Mitos, 3 Venta.',
            'Entrada directa al dolor en el segundo 0.',
            'Palabra clave clara en cada fila ("Comenta GUIA").',
          ],
        }
      : {
          beforeLabel: '❌ Needs Revision Draft',
          before: [
            'Generic titles ("Daily business tips").',
            '20 of 30 rows are pure direct selling.',
            'Hooks starting with "Hello everyone today I share...".',
            'Missing keyword CTA for WhatsApp.',
          ],
          afterLabel: '✓ Approved 5.0 ★ Submission',
          after: [
            'Ultra-specific hooks ("Why your shoes break in 3 months...").',
            'Exact 12 Edu, 6 Proc, 6 Proof, 3 Myth, 3 Pitch breakdown.',
            'Direct friction entry on second 0.',
            'Clear keyword trigger on every row ("Comment GUIDE").',
          ],
        },
    instructorNotes: {
      duration: '87:00 - 90:00 min',
      script: isEs
        ? 'Muestren el contraste. La diferencia entre una entrega mediocre y una excelente es solo la especificidad.'
        : 'Contrast generic versus high-retention submissions.',
    },
  },
  {
    id: 's16',
    type: 'steps',
    tag: isEs ? 'PLAN DE EJECUCIÓN' : 'EXECUTION PLAN',
    title: isEs ? 'Tu Plan de Acción para el Fin de Semana' : 'Your Weekend 3-Step Execution Plan',
    steps: isEs
      ? [
          {
            number: 'VIERNES',
            title: '1. Llena la Matriz de 30 Ideas',
            desc: 'Abre la plantilla oficial en Notion o PDF y vacía tus 30 ideas siguiendo los 5 pilares.',
          },
          {
            number: 'SÁBADO',
            title: '2. Lee tus Ganchos en Voz Alta',
            desc: 'Ponte frente al espejo o celular y di cada gancho. Si tardas más de 4 segundos, recórtalo.',
          },
          {
            number: 'DOMINGO',
            title: '3. Sube tu Entrega al Portal (23:59)',
            desc: 'Pega tu enlace de Notion o PDF en el Aula Virtual para recibir tu calificación y feedback.',
          },
        ]
      : [
          { number: 'FRIDAY', title: '1. Draft Your 30-Idea Matrix', desc: 'Open the official Notion/PDF template and map 30 ideas across 5 pillars.' },
          { number: 'SATURDAY', title: '2. Read Hooks Out Loud', desc: 'Test each opening line out loud. If it exceeds 4 seconds, trim words.' },
          { number: 'SUNDAY', title: '3. Submit to Portal (23:59)', desc: 'Paste your Notion or PDF link in the Classroom for teacher grading.' },
        ],
    instructorNotes: {
      duration: '90:00 - 93:00 min',
      script: isEs
        ? 'Enfaticen el deadline dominical. No lo dejen para el último minuto.'
        : 'Reiterate the Sunday 23:59 strict deadline for teacher cohort reviews.',
    },
  },
  {
    id: 's17',
    type: 'challenge',
    tag: isEs ? 'ENTREGABLE OFICIAL' : 'OFFICIAL DELIVERABLE',
    title: isEs ? 'Reto 1: Matriz de 30 Ideas de Contenido Comercial' : 'Challenge 1: 30-Day Commercial Content Matrix',
    challengeData: isEs
      ? {
          whatToDo: 'Completa las 30 filas de tu Matriz de Contenido en Notion o en la plantilla descargable en PDF A4.',
          whatToDeliver: 'Enlace público a tu página de Notion (o archivo PDF exportado) pegado en el formulario del Aula Virtual.',
          whereToSubmit: 'Sección "Reto Práctico" de la Lección 1.3 en el Aula Virtual.',
          criteria: [
            '30 filas completas con título, pilar, gancho y CTA.',
            'Dieta 40/20/20/10/10 respetada al 100%.',
            'Ganchos de 3 segundos sin saludos lentos.',
            'Llamado a WhatsApp declarado en cada idea.',
          ],
        }
      : {
          whatToDo: 'Complete all 30 rows in your Content Matrix via Notion or downloadable A4 PDF.',
          whatToDeliver: 'Public Notion share link or PDF file submitted in Classroom.',
          whereToSubmit: 'Lesson 1.3 Practical Challenge Submission Box.',
          criteria: [
            '30 full rows with title, pillar, hook and CTA.',
            '40/20/20/10/10 diet respected 100%.',
            '3-second hooks without slow intros.',
            'Declared WhatsApp CTA on every idea.',
          ],
        },
    instructorNotes: {
      duration: '93:00 - 96:00 min',
      script: isEs
        ? 'El Reto 1 es la columna vertebral de todo el programa. Sin la matriz de 30 ideas, la Semana 2 no se puede ejecutar.'
        : 'Challenge 1 is the strategic backbone of the entire lab. Without it, Week 2 cannot be filmed.',
    },
  },
  {
    id: 's18',
    type: 'closing',
    tag: isEs ? 'PRÓXIMA FASE' : 'NEXT PHASE',
    title: isEs ? '¡Semana 1 Completada! Nos Vemos en la Semana 2' : 'Week 1 Complete! See You in Week 2',
    subtitle: isEs
      ? 'La próxima semana pasamos de la estrategia al lente: Grabación de Bolsillo con Smartphone, Iluminación de Ventana y tu Banco de 30 Clips de B-Roll.'
      : 'Next week we move from strategy to the lens: Smartphone Filming, Window Lighting and your 30-Clip B-Roll Bank.',
    highlight: isEs ? 'Semana 2: Producción & Grabación de Bolsillo ➔' : 'Week 2: Smartphone Production ➔',
    bgColor: '#10B981',
    instructorNotes: {
      duration: '96:00 - 100:00 min',
      script: isEs
        ? '¡Felicitaciones a todos por completar la Semana 1! Entreguen sus matrices y preparen sus celulares porque en la Semana 2 salimos a grabar.'
        : 'Congratulations on completing Week 1! Submit your matrices and get your phones ready to film in Week 2.',
    },
  },
];
