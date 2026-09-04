import { SlideData } from './types';

export const getLiveLab3SlidesBlock3 = (isEs: boolean): SlideData[] => [
  {
    id: 's09',
    type: 'section',
    tag: isEs ? 'HOT SEATS & SCRIPT DOCTORING' : 'HOT SEATS & SCRIPT DOCTORING',
    title: isEs ? 'Laboratorio de Hot Seats: Auditoría de Guiones en Vivo' : 'Hot Seat Lab: Live Student Script Audits',
    subtitle: isEs
      ? 'Tomamos 3 guiones de la sala y los reescribimos en tiempo real aplicando las fórmulas PAS, ganchos triples y psicología de retención.'
      : 'Transforming 3 student scripts live applying PAS formulas, triple hooks, and retention psychology.',
    highlight: isEs ? 'Auditoría Quirúrgica en Directo' : 'Live Surgical Script Audits',
    bgColor: '#7928CA',
    instructorNotes: {
      duration: '60:00 - 64:00 min',
      script: isEs
        ? 'Abran micrófonos o lean el chat para seleccionar los 3 guiones de la cohorte.'
        : 'Open mics or pull 3 student drafts from chat for live script doctoring.',
    },
  },
  {
    id: 's10',
    type: 'comparison',
    tag: isEs ? 'DESARME EN VIVO' : 'LIVE SCRIPT TEARDOWN',
    title: isEs ? 'Deconstrucción de Guion Alumno #1: Antes vs. Después' : 'Student Script #1 Breakdown: Before vs. After',
    comparison: isEs
      ? {
          beforeLabel: '❌ Guion Crudo del Alumno',
          before: [
            '"Hola a todos, en nuestra academia de idiomas ofrecemos cursos personalizados para profesionales con profesores nativos..."',
            'Cero dolor del cliente; suena a folleto publicitario tradicional.',
            'Duración estimada: 80 segundos (demasiado largo).',
            'Cierre: "Escríbenos para darte más información".',
          ],
          afterLabel: '✓ Guion Transformado UXIO (45s)',
          after: [
            '"Si pierdes ascensos en tu trabajo por miedo a hablar inglés en reuniones de Zoom, este es el error:"',
            'PAS: Dolor de reuniones ➔ Método de 15 min diarios ➔ Demostración en pantalla.',
            'Cierre con palabra clave: "Comenta INGLES para enviarte el diagnóstico gratuito a WhatsApp".',
          ],
        }
      : {
          beforeLabel: '❌ Raw Student Draft',
          before: [
            '"Hello everyone, at our language academy we offer customized courses for professionals with native teachers..."',
            'Zero customer pain; sounds like a 1990s brochure.',
            'Estimated duration: 80 seconds (too slow).',
            'Closing: "Contact us for more info".',
          ],
          afterLabel: '✓ Transformed UXIO Script (45s)',
          after: [
            '"If you are losing job promotions because you freeze speaking English on Zoom, here is the real mistake:"',
            'PAS: Meeting anxiety ➔ 15-min daily method ➔ Live screen proof.',
            'Closing keyword trigger: "Comment ENGLISH for direct WhatsApp diagnostic test".',
          ],
        },
    instructorNotes: {
      duration: '64:00 - 72:00 min',
      script: isEs
        ? 'Muestren cómo pasar de un discurso egocéntrico a un mensaje centrado en el dolor del cliente duplica las ventas.'
        : 'Show how shifting from self-centered copy to customer-pain focus doubles sales.',
    },
  },
  {
    id: 's11',
    type: 'concept',
    tag: isEs ? 'STORIES DE VENTA' : 'SALES STORIES CLINIC',
    title: isEs ? '3 Errores Fatales en Stories de Venta (y su Solución)' : '3 Fatal Sales Story Mistakes (and Solutions)',
    subtitle: isEs
      ? 'Cómo evitar que tus historias parezcan spam y lograr que tus seguidores te escriban por privado.'
      : 'Preventing story spam and driving qualified inbound direct messages.',
    points: isEs
      ? [
          {
            label: '1. El Flyer Estático Cargado de Precios (Cero Humano)',
            text: 'Subir un diseño gráfico lleno de texto hace que la gente pase de largo. Reemplázalo por una foto casual o video de tu espacio.',
            detailData: {
              tag: 'ERROR 01 // FLYER ESTÁTICO',
              title: 'La Trampa del Catálogo Frío',
              description: 'Instagram es una red social de personas; los flyers corporativos matan el alcance de las Stories.',
              imageCaption: 'Foto Cotidiana vs Flyer',
              image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Usa la cámara nativa de Instagram', 'Escribe con la tipografía de la app'],
              actionTip: 'Muestra tu escritorio, café o herramientas.',
            },
          },
          {
            label: '2. Publicar Sin Sticker de Interacción (Cero Alcance)',
            text: 'Sin sticker de encuesta o preguntas en la Story 3, el algoritmo no muestra tu Story 4 ni Story 5.',
            detailData: {
              tag: 'ERROR 02 // CERO INTERACCIÓN',
              title: 'El Disparador del Algoritmo',
              description: 'Los votos en encuestas le dicen a Instagram que la historia es relevante y la empuja a las primeras posiciones.',
              imageCaption: 'Stickers Interactivos en Acción',
              image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Encuestas de Sí / No', 'Preguntas fáciles de responder'],
              actionTip: 'Pon el sticker en una posición accesible para el pulgar.',
            },
          },
          {
            label: '3. Enlace Sin Urgencia ni Contexto',
            text: 'Poner "click aquí" sin decir cuántos cupos quedan o qué beneficio obtendrán genera cero clics.',
            detailData: {
              tag: 'ERROR 03 // SIN URGENCIA',
              title: 'La Razón de Actuar Hoy',
              description: 'La gente pospone si cree que la oferta estará disponible para siempre.',
              imageCaption: 'Sticker de Enlace con Urgencia',
              image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
              highlights: ['"Solo 5 cupos disponibles"', '"Envío gratis solo por hoy"'],
              actionTip: 'Personaliza el texto del sticker de enlace.',
            },
          },
        ]
      : [
          { label: '1. Cold Flyer Spam', text: 'Replace text-heavy graphics with genuine raw photos of your space.' },
          { label: '2. Missing Interaction Stickers', text: 'Without a poll sticker on slide 3, algorithm drops story distribution.' },
          { label: '3. Link Without Urgency', text: 'Always pair link stickers with authentic scarcity or bonuses.' },
        ],
    instructorNotes: {
      duration: '72:00 - 78:00 min',
      script: isEs
        ? 'Revisen con la sala las 5 historias que publicarán este fin de semana.'
        : 'Walk through the 5-story weekend drill with the cohort.',
    },
  },
  {
    id: 's12',
    type: 'concept',
    tag: isEs ? 'SCRIPT DOCTORING EN VIVO' : 'LIVE SCRIPT DOCTORING',
    title: isEs ? 'Transformación de Ganchos en Vivo' : 'Live Hook Transformation Lab',
    subtitle: isEs
      ? 'Reescribiendo ganchos del chat en ganchos de alta retención.'
      : 'Turning student chat submissions into scroll-stopping hooks.',
    points: isEs
      ? [
          {
            label: 'Gancho Original Débil',
            text: '"Hola, hoy te quiero contar cómo elegir un buen abogado para tu empresa..."',
            detailData: {
              tag: 'DIAGNÓSTICO // GANCHOS',
              title: 'Por qué falla',
              description: 'Es pasivo, no genera urgencia y no cita ningún peligro.',
              imageCaption: 'Gancho Débil Tradicional',
              image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Cero dolor', 'Fácil de ignorar'],
              actionTip: 'Cita la cláusula o demanda que se puede evitar.',
            },
          },
          {
            label: 'Gancho Calibrado UXIO (Fricción + Contraste)',
            text: '"La cláusula oculta en contratos comerciales que le costó $12.000 USD a uno de nuestros clientes:"',
            detailData: {
              tag: 'CALIBRACIÓN // UXIO',
              title: 'Por qué detiene el scroll',
              description: 'Cita una cifra de dolor real y advierte sobre una trampa que cualquiera podría tener firmada.',
              imageCaption: 'Gancho UXIO de Alto Impacto',
              image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Curiosidad extrema', 'Posicionamiento como defensor'],
              actionTip: 'Muestra el documento con un resaltador en la toma 2.',
            },
          },
        ]
      : [
          { label: 'Weak Original Hook', text: '"Hello, today I want to share how to pick a good corporate lawyer..."' },
          { label: 'Calibrated UXIO Hook', text: '"The hidden clause in commercial contracts that cost our client $12,000 USD:"' },
        ],
    instructorNotes: {
      duration: '78:00 - 84:00 min',
      script: isEs
        ? 'Tomen 2 ejemplos del chat y hagan la transformación en vivo con la sala.'
        : 'Take 2 chat examples and run live calibrations with the students.',
    },
  },
  {
    id: 's13',
    type: 'steps',
    tag: isEs ? 'DINÁMICA EN DIRECTO' : 'LIVE SPRINT',
    title: isEs ? 'Dinámica de 3 Minutos: Tu Gancho Triple en el Chat' : '3-Minute Live Sprint: Post Your Triple Hook',
    steps: isEs
      ? [
          {
            number: '01',
            title: 'Visual',
            desc: '¿Qué objeto o movimiento pondrás en los primeros 0.8 segundos?',
          },
          {
            number: '02',
            title: 'Verbal',
            desc: 'Escribe tu frase de gancho al dolor en 1 sola línea.',
          },
          {
            number: '03',
            title: 'Texto',
            desc: 'Escribe el titular de 4 palabras en mayúsculas que pondrás en pantalla.',
          },
        ]
      : [
          { number: '01', title: 'Visual', desc: 'What physical motion triggers on frame 0?' },
          { number: '02', title: 'Verbal', desc: 'Draft your 1-line friction hook.' },
          { number: '03', title: 'Text', desc: 'Write your 4-word bold on-screen headline.' },
        ],
    instructorNotes: {
      duration: '84:00 - 88:00 min',
      script: isEs
        ? 'Pongan música de fondo y lean las mejores propuestas del chat.'
        : 'Play 3 minutes of background music and read out the best student hooks.',
    },
  },
];
