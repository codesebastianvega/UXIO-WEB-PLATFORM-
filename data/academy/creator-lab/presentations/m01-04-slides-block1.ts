import { SlideData } from './types';

export const getLiveLab1SlidesBlock1 = (isEs: boolean): SlideData[] => [
  {
    id: 's01',
    type: 'title',
    tag: 'UXIO ACADEMY · LIVE MASTERCLASS',
    title: isEs ? 'Estrategia de Contenido & Calibración de Ganchos' : 'Live Content Strategy & Hook Calibration',
    subtitle: isEs
      ? 'Semana 1 · Sesión en Vivo (90 min) · Auditoría de matrices en tiempo real, calibración de ganchos y Q&A.'
      : 'Week 1 · Live Masterclass (90 min) · Real-time matrix audits, hook tuning and open Q&A.',
    highlight: isEs ? 'Semana 1 · Masterclass & Mesa de Calibración' : 'Week 1 · Masterclass & Calibration',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&auto=format&fit=crop&q=80',
    titleCard: {
      tag: isEs ? '// LIVE LAB SEMANA 1' : '// WEEK 1 LIVE LAB',
      badge: isEs ? '90 MIN EN VIVO' : '90 MIN LIVE',
      items: [
        { title: isEs ? 'Calibración de Ganchos' : 'Hook Tuning', desc: isEs ? 'Retención en los primeros 3s' : '0-3s high-retention filters', color: '#FE385B' },
        { title: isEs ? 'Hot Seats en Caliente' : 'Live Hot Seats', desc: isEs ? 'Auditoría a 3 negocios de la cohorte' : 'Real-time cohort student audit', color: '#FF7F07' },
        { title: isEs ? 'Rúbrica Reto 1 (5.0 ★)' : 'Challenge 1 Rubric', desc: isEs ? 'Criterios para aprobar la matriz' : '30-day matrix passing criteria', color: '#10B981' },
      ],
    },
    instructorNotes: {
      duration: '0:00 - 5:00 min',
      script: isEs
        ? '¡Bienvenidos al Live Lab de la Semana 1! Hoy nos ponemos en modo taller: auditamos en caliente las matrices de 30 ideas y calibramos los ganchos de 3 segundos para que sus videos detengan el scroll de inmediato.'
        : 'Welcome to Week 1 Live Lab! Today we audit 30-day content matrices and fine-tune 3-second hooks so your videos stop the scroll instantly.',
    },
  },
  {
    id: 's02',
    type: 'statement',
    tag: 'BLOQUE 01 · 05:00 - 12:00 MIN',
    title: isEs
      ? 'El gancho es el 80% del éxito de un video: si fallas en los primeros 3 segundos, nadie escuchará tu oferta.'
      : 'The hook is 80% of video success: fail the first 3 seconds and nobody hears your commercial offer.',
    subtitle: isEs
      ? 'Un gancho magnético no promete humo ni saluda con cortesías lentas: ataca una fricción real y promete una solución concreta en 30 segundos.'
      : 'A magnetic hook does not sell hype; it targets a painful friction and promises a concrete 30-second solution.',
    highlight: isEs ? '0 a 3 Segundos · Retención Total' : '0 to 3 Seconds · Total Retention',
    bgColor: '#FE385B',
    instructorNotes: {
      duration: '5:00 - 12:00 min',
      script: isEs
        ? 'Expliquen el concepto de "Cero Saludos". En TikTok y Reels cada milisegundo cuenta. Quien dice "Hola amigos, ¿cómo están?" pierde al 70% de la audiencia en el segundo 1.'
        : 'Emphasize the zero-intro rule. Saying "Hi guys" drops 70% of viewers by second 1.',
    },
  },
  {
    id: 's03',
    type: 'steps',
    tag: isEs ? 'ESTRUCTURA DE LA SESIÓN' : 'SESSION STRUCTURE',
    title: isEs ? 'Los 4 Bloques del Live Lab de Hoy' : 'The 4 Blocks of Today’s Live Lab',
    steps: isEs
      ? [
          {
            number: '01',
            title: 'Diagnóstico & Repaso',
            desc: 'La muerte del anuncio tradicional, el poder del UGC y la minería de objeciones de WhatsApp.',
          },
          {
            number: '02',
            title: 'Mesa de Hot Seats',
            desc: 'Reescritura de guiones y calibración de ganchos en vivo para 3 alumnos de la cohorte.',
          },
          {
            number: '03',
            title: 'Rúbrica de la Matriz',
            desc: 'Cómo estructurar los 5 pilares en la plantilla oficial para obtener calificación 5.0 ★.',
          },
          {
            number: '04',
            title: 'Q&A & Plan Dominical',
            desc: 'Ronda de preguntas abiertas y plan de acción para entregar el Reto 1 antes del domingo.',
          },
        ]
      : [
          { number: '01', title: 'Diagnosis & Review', desc: 'The death of traditional ads, UGC power and WhatsApp mining.' },
          { number: '02', title: 'Hot Seats Table', desc: 'Real-time script rewriting and hook tuning for 3 students.' },
          { number: '03', title: 'Matrix Rubric', desc: '5-pillar structure in official template for a 5.0 ★ grade.' },
          { number: '04', title: 'Q&A & Sunday Plan', desc: 'Live open questions and execution plan to submit Challenge 1.' },
        ],
    instructorNotes: {
      duration: '12:00 - 18:00 min',
      script: isEs
        ? 'Presenten los 4 bloques con claridad. Recuerden a la audiencia que pueden levantar la mano para el Hot Seat.'
        : 'Walk through the 4 session blocks and invite attendees to raise hands for hot seats.',
    },
  },
  {
    id: 's04',
    type: 'concept',
    tag: isEs ? 'ANATOMÍA DEL VIDEO COMERCIAL' : 'COMMERCIAL VIDEO ANATOMY',
    title: isEs ? 'Los 3 Filtros de Retención de un Video Nativo' : 'The 3 Retention Filters of Native Videos',
    subtitle: isEs
      ? 'La estructura temporal exacta que convierte espectadores fríos en chats de WhatsApp.'
      : 'The exact timing framework that turns cold viewers into warm WhatsApp conversations.',
    points: isEs
      ? [
          {
            label: '1. Filtro de Gancho (0-3s)',
            text: 'Detener el scroll enunciando el problema o mostrando una toma hipnótica de manos trabajando.',
            detailData: {
              tag: 'FILTRO 01 // 0-3 SEGUNDOS',
              title: 'La Interrupción del Patrón',
              description: 'El cerebro humano decide en 1.5 segundos si un video merece atención o es publicidad barata.',
              imageCaption: '0-3s · Gancho de Fricción',
              image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
              highlights: ['"Si estás pagando de más por X..."', '"El error que te cuesta dinero en Y..."'],
              actionTip: 'Prohibido saludar o presentarse en los primeros 3 segundos.',
            },
          },
          {
            label: '2. Filtro de Demostración (3-30s)',
            text: 'Mostrar la técnica, el proceso y la solución real sin maquillaje corporativo.',
            detailData: {
              tag: 'FILTRO 02 // 3-30 SEGUNDOS',
              title: 'Demostración de Autoridad',
              description: 'Enseñar el trabajo en manos o la pantalla de trabajo genera confianza instantánea.',
              imageCaption: '3-30s · Proceso en Manos',
              image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Tomas macro de costura/herramientas', 'Audio ambiental real sin música invasiva'],
              actionTip: 'Intercala cambios de plano cada 4 a 6 segundos.',
            },
          },
          {
            label: '3. Filtro de Conversión (30-45s)',
            text: 'Llamado a la acción directo con palabra clave hacia el canal de cierre de WhatsApp.',
            detailData: {
              tag: 'FILTRO 03 // 30-45 SEGUNDOS',
              title: 'El Puente hacia WhatsApp',
              description: 'No pidas "likes" vacíos; pide una palabra clave que active una conversación personalizada.',
              imageCaption: '30-45s · Palabra Clave CTA',
              image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
              highlights: ['"Comenta GUIA para enviarte el paso a paso"', '"Escribe BOTAS para el catálogo con envío gratis"'],
              actionTip: 'Haz que el llamado requiera un solo toque.',
            },
          },
        ]
      : [
          { label: '1. Hook Filter (0-3s)', text: 'Stop the scroll addressing the pain directly.' },
          { label: '2. Proof Filter (3-30s)', text: 'Showcase craftsmanship, workflow and authority.' },
          { label: '3. Conversion Filter (30-45s)', text: 'Keyword CTA directing to WhatsApp.' },
        ],
    instructorNotes: {
      duration: '18:00 - 25:00 min',
      script: isEs
        ? 'Muestren cómo los 3 filtros eliminan la fricción de compra. Cada bloque tiene una sola misión.'
        : 'Walk through the 3 filters explaining why each section has a single goal.',
    },
  },
];
