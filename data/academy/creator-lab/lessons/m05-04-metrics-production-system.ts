import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0504 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm05-04',
    slug: 'metricas-clave-y-sistema-de-produccion',
    moduleSlug: 'semana-5-contenido-que-vende',
    title: isEs
      ? 'Métricas Clave y Tu Sistema Continuo de Producción en 4 Horas'
      : 'Key Metrics & Sustainable 4-Hour Monthly Batching System',
    type: 'microclass',
    duration: '16 min',
    objective: isEs
      ? 'Medir las métricas comerciales que verdaderamente impactan tu cuenta bancaria y establecer un sistema mensual de grabación por lotes (batching) en 4 horas para nunca quemarte.'
      : 'Track meaningful commercial revenue metrics and implement a 4-hour monthly batch production system to avoid creator burnout.',
    topics: isEs
      ? [
          'Métricas de negocio vs. Métricas de vanidad: Retención, DMs y Tasa de Cierre',
          'El protocolo del "Batching Sunday": Grabar 1 mes de contenido en 4 horas',
          'Delegación inteligente de la edición y entrega del Proyecto Final',
        ]
      : [
          'Business metrics vs. vanity metrics: Retention, DMs, and WhatsApp closing rate',
          'The "Batching Sunday" protocol: Filming a full month of content in 4 hours',
          'Smart post-production delegation and Final Capstone delivery',
        ],
    presentationSlug: 'm05-04-01-retention-vs-vanity-metrics',
    microclasses: [
      {
        id: 'mc-05-04-01',
        title: isEs ? '1. Métricas de Negocio vs. Métricas de Vanidad' : '1. Business Metrics vs. Vanity Metrics',
        duration: '5:00 min',
        description: isEs
          ? 'Por qué los likes no pagan cuentas y cómo leer la retención a 3s y la tasa de conversión a chat para optimizar tus ventas.'
          : 'Why likes do not pay bills and how to read 3s retention and chat conversion rates to maximize sales.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm05-04-01-retention-vs-vanity-metrics',
      },
      {
        id: 'mc-05-04-02',
        title: isEs ? '2. El Sistema Continuo: Producir 1 Mes en 4 Horas' : '2. The Sustainable Engine: Batch 1 Month in 4 Hours',
        duration: '5:00 min',
        description: isEs
          ? 'El cronograma exacto para seleccionar 12 guiones, montar tu set una sola vez al mes y delegar la edición sin perder calidad.'
          : 'The exact schedule to select 12 scripts, set up your mobile studio once a month, and delegate editing without quality loss.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm05-04-02-four-hour-batching-system',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint: Métricas & Batching de Producción' : 'Checkpoint: Metrics & Batch Production',
      description: isEs
        ? 'Valida tus conceptos sobre análisis de métricas comerciales y organización de sesiones de grabación por lotes.'
        : 'Verify your understanding of business conversion metrics and batch production logistics.',
      questions: [
        {
          id: 'q1',
          question: isEs
            ? 'Entre las siguientes métricas, ¿cuál es la más representativa del éxito comercial de un video vertical?'
            : 'Among the following metrics, which one best represents the commercial success of vertical video?',
          options: isEs
            ? [
                'La cantidad de personas que comentaron la palabra clave y abrieron chat para pedir precio',
                'El número total de likes y corazones en la publicación',
                'Que el video tenga más de 50,000 reproducciones de usuarios no calificados',
                'La cantidad de veces que el video fue compartido en estados de WhatsApp personales',
              ]
            : [
                'The number of people who commented the keyword and initiated chat to inquire about pricing',
                'The aggregate number of likes and hearts on the post',
                'Reaching over 50k views from non-targeted audiences',
                'Number of casual status shares without buying intent',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'La conversación iniciada con intención comercial es el único indicador directo que alimenta el pipeline de ventas de tu negocio.'
            : 'A chat initiated with purchase intent is the single direct leading indicator that feeds your sales pipeline.',
        },
        {
          id: 'q2',
          question: isEs
            ? '¿Cuál es el beneficio fundamental de grabar 12 videos en una sola sesión de 4 horas (Batching) en lugar de grabar 1 diario?'
            : 'What is the primary advantage of batch-filming 12 videos in one 4-hour session instead of daily recording?',
          options: isEs
            ? [
                'Elimina la fricción mental de montar luz y trípode cada día y previene el agotamiento creativo',
                'Permite que el algoritmo recomiende los videos todos juntos en la misma hora',
                'Hace que la batería del celular dure el doble',
                'Garantiza que todos los videos se vuelvan virales automáticamente',
              ]
            : [
                'Eliminates daily gear setup friction and protects against creative creator burnout',
                'Forces the algorithm to distribute all videos simultaneously',
                'Doubles smartphone battery longevity',
                'Guarantees all videos become viral automatically',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'Grabar por lotes reduce la fricción de fricción operativa a 1 sola vez al mes, garantizando que el negocio nunca se quede sin contenido.'
            : 'Batch filming consolidates operational setup friction into 1 monthly sprint, ensuring consistent social visibility.',
        },
      ],
    },
    resources: [
      {
        id: 'res-m05-04-01',
        title: isEs ? 'Tablero de Métricas Comerciales en Notion/Sheets' : 'Commercial Metrics Dashboard Template',
        description: isEs
          ? 'Plantilla para registrar visualizaciones, retención a 3s, DMs generados y ventas cerradas por video.'
          : 'Ready-to-use template to log views, 3s retention, generated DMs, and closed sales per video.',
        type: 'template',
        url: '#commercial-metrics-dashboard-template',
      },
      {
        id: 'res-m05-04-02',
        title: isEs ? 'Manual del Sistema Batching de 4 Horas' : '4-Hour Batching System Playbook',
        description: isEs
          ? 'Guía paso a paso para organizar tu sesión mensual de grabación y delegar la edición a un asistente.'
          : 'Step-by-step operating procedure to execute your monthly shoot and hand off editing seamlessly.',
        type: 'guide',
        url: '#four-hour-batching-playbook',
      },
    ],
  };
};
