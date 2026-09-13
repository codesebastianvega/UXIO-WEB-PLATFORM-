import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0502 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm05-02',
    slug: 'el-puente-contenido-conversacion-whatsapp',
    moduleSlug: 'semana-5-contenido-que-vende',
    title: isEs
      ? 'El Puente: Del Contenido a la Conversación por WhatsApp'
      : 'The Bridge: Content to WhatsApp Conversation & Sales',
    type: 'microclass',
    duration: '18 min',
    objective: isEs
      ? 'Construir un puente automático entre los comentarios de tus videos y tus chats privados de WhatsApp Business, cerrando ventas con audios cálidos y respuestas rápidas.'
      : 'Build an automated bridge from video comments to WhatsApp Business chats, closing sales with warm voice notes and quick replies.',
    topics: isEs
      ? [
          'Automatización ManyChat de comentarios a DMs en 3 segundos',
          'El enlace inteligente wa.link con mensaje precargado',
          'El protocolo de cierre en 4 pasos por WhatsApp Business y audios de 20s',
        ]
      : [
          'ManyChat comment-to-DM automation delivered in 3 seconds',
          'Smart wa.link generation with pre-filled context message',
          '4-step WhatsApp Business closing framework powered by 20s voice notes',
        ],
    presentationSlug: 'm05-02-01-dm-to-whatsapp-bridge',
    microclasses: [
      {
        id: 'mc-05-02-01',
        title: isEs ? '1. Automatización de DMs con Palabras Clave' : '1. Keyword DM Automation',
        duration: '5:00 min',
        description: isEs
          ? 'Configuración del disparador automático que responde públicamente y entrega el link privado en el inbox al instante.'
          : 'Setting up automated triggers that reply publicly and deliver private links directly into user inboxes.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm05-02-01-dm-to-whatsapp-bridge',
      },
      {
        id: 'mc-05-02-02',
        title: isEs ? '2. Protocolo de Cierre en 4 Pasos por WhatsApp' : '2. 4-Step WhatsApp Closing Protocol',
        duration: '5:00 min',
        description: isEs
          ? 'Estructura de atención en chat: saludo personalizado, micro-pregunta de filtro, audio de 20s y link de pago directo.'
          : 'Chat sales framework: personal greeting, qualifying micro-question, 20s voice note, and payment link.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm05-02-02-closing-conversations-scripts',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint: Embudo a WhatsApp & Cierre' : 'Checkpoint: WhatsApp Funnel & Closing',
      description: isEs
        ? 'Valida tus conocimientos sobre la automatización del puente a chat y el protocolo de ventas.'
        : 'Test your understanding of DM automation workflows and chat closing techniques.',
      questions: [
        {
          id: 'q1',
          question: isEs
            ? '¿Por qué es fundamental que la herramienta de automatización responda con un comentario público además del mensaje privado (DM)?'
            : 'Why must automation tools reply with a public comment in addition to sending a private DM?',
          options: isEs
            ? [
                'Porque infla el contador de comentarios e impulsa al algoritmo a recomendar el video a más personas',
                'Porque es un requisito legal de Instagram y TikTok',
                'Porque si no se comenta públicamente el usuario no puede abrir el DM',
                'Porque reduce el consumo de batería del teléfono',
              ]
            : [
                'Because it inflates comment count signals, nudging the algorithm to distribute the video further',
                'Because it is a legal requirement from Meta and ByteDance',
                'Because users cannot open DMs without a public comment notification',
                'Because it conserves phone battery',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'El algoritmo detecta alta interacción en los comentarios y amplifica la distribución orgánica del video en el feed.'
            : 'Social algorithms perceive high comment volume as high retention and push the video to wider audiences.',
        },
        {
          id: 'q2',
          question: isEs
            ? 'En WhatsApp Business, ¿cuál es la duración ideal recomendada para un audio de asesoría o cierre?'
            : 'In WhatsApp Business, what is the optimal recommended duration for a voice note?',
          options: isEs
            ? [
                'Entre 20 y 25 segundos (conciso, cálido y directo)',
                'Más de 3 minutos para explicar cada detalle del producto',
                '10 minutos grabados en modo podcast',
                'Nunca se deben mandar audios, solo textos fríos',
              ]
            : [
                'Between 20 and 25 seconds (crisp, warm, and direct)',
                'Over 3 minutes to exhaustively detail every feature',
                '10-minute long podcast-style voice messages',
                'Never send audio; only cold text walls',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'Un audio de 20 segundos se reproduce de inmediato, humaniza la marca y no agota la paciencia del cliente.'
            : 'A 20-second voice note gets listened to immediately, humanizes the brand, and respects buyer attention.',
        },
      ],
    },
    resources: [
      {
        id: 'res-m05-02-01',
        title: isEs ? 'Guía de Respuestas Rápidas para WhatsApp Business' : 'Quick Replies Guide for WhatsApp Business',
        description: isEs
          ? 'Los 5 atajos esenciales (/precio, /pago, /seguimiento, /envios, /bienvenida) listos para copiar.'
          : 'The 5 essential shortcuts (/pricing, /pay, /followup, /shipping, /welcome) ready to deploy.',
        type: 'guide',
        url: '#quick-replies-whatsapp-guide',
      },
      {
        id: 'res-m05-02-02',
        title: isEs ? 'Diagrama de Flujo ManyChat ➔ WhatsApp' : 'ManyChat to WhatsApp Flow Blueprint',
        description: isEs
          ? 'Esquema visual para conectar comentarios en Reels/TikTok con tu WhatsApp Business en 3 pasos.'
          : 'Visual blueprint to connect Reels/TikTok comments to WhatsApp Business in 3 steps.',
        type: 'template',
        url: '#manychat-whatsapp-flow-blueprint',
      },
    ],
  };
};
