import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM050201 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's1',
      type: 'title',
      tag: isEs ? 'MICROCLASE 5.2.1' : 'MICROCLASS 5.2.1',
      title: isEs ? 'El Puente: Automatización de DMs con Palabras Clave' : 'The Bridge: Keyword DM Automation',
      subtitle: isEs
        ? 'Cómo convertir cada comentario en tu video en un mensaje privado instantáneo que lleva al cliente a WhatsApp.'
        : 'How to convert every video comment into an automated DM that guides buyers directly into WhatsApp.',
      highlight: isEs ? 'Automatización de Conversión ➔' : 'Conversion Automation ➔',
      bgColor: '#10B981',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? 'En esta microclase aprenderán la arquitectura técnica para responder comentarios en 3 segundos de forma automática y trasladar al cliente a WhatsApp.'
          : 'In this microclass you will master the automated workflow to answer comments in 3s and bridge buyers into WhatsApp.',
      },
    },
    {
      id: 's2',
      type: 'steps',
      tag: isEs ? 'EL FLUJO DE 3 SEGUNDOS' : 'THE 3-SECOND FLOW',
      title: isEs ? 'Arquitectura del Puente ManyChat / Instagram' : 'ManyChat / Instagram Bridge Architecture',
      subtitle: isEs
        ? 'Un sistema automático que trabaja 24/7 sin que tengas que responder a mano cada comentario.'
        : 'An automated 24/7 engine that handles comments without manual DM typing.',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Disparador de Palabra Clave',
              desc: 'El usuario comenta "PRECIO" en tu Reel o TikTok. El webhook se activa al instante.',
              tag: 'Paso 1',
            },
            {
              number: '02',
              title: 'Respuesta Pública en el Post',
              desc: 'El bot responde al comentario: "¡Te acabo de enviar el link por DM!" para inflar el algoritmo.',
              tag: 'Paso 2',
            },
            {
              number: '03',
              title: 'Mensaje Directo con Botón',
              desc: 'Se envía un DM privado con un saludo cordial y un botón directo a tu WhatsApp Business.',
              tag: 'Paso 3',
            },
          ]
        : [
            {
              number: '01',
              title: 'Keyword Trigger',
              desc: 'User comments "PRICE" on your Reel or TikTok. Webhook fires in milliseconds.',
              tag: 'Step 1',
            },
            {
              number: '02',
              title: 'Public Post Reply',
              desc: 'Bot replies publicly: "Just sent you the link via DM!" boosting social algorithm.',
              tag: 'Step 2',
            },
            {
              number: '03',
              title: 'Direct Message with Link',
              desc: 'Sends a warm personal DM with an interactive button pointing to WhatsApp Business.',
              tag: 'Step 3',
            },
          ],
      instructorNotes: {
        duration: '1:00 - 3:00 min',
        script: isEs
          ? 'Expliquen que responder públicamente infla el contador de comentarios y hace que el algoritmo recomiende el video a más personas.'
          : 'Explain how public replies artificially double comment counts and boost algorithm distribution.',
      },
    },
    {
      id: 's3',
      type: 'concept',
      tag: isEs ? 'MÉTRICAS DEL EMBUDO' : 'FUNNEL METRICS',
      title: isEs ? 'Los 3 Ratios de Conversión del Puente' : 'The 3 Bridge Conversion Ratios',
      subtitle: isEs
        ? 'Monitorea estos porcentajes para saber si tu automatización está funcionando al máximo.'
        : 'Track these percentages to verify your automation performance.',
      points: isEs
        ? [
            {
              label: 'Comentario ➔ DM Enviado (100%)',
              text: 'La herramienta debe entregar el mensaje en menos de 10 segundos para no perder el impulso de compra.',
              tag: 'Velocidad',
            },
            {
              label: 'DM Abierto (80%+)',
              text: 'El mensaje debe iniciar con el nombre del usuario y la foto de perfil clara para que no parezca spam.',
              tag: 'Apertura',
            },
            {
              label: 'Clic al Enlace de WhatsApp (40%+)',
              text: 'El botón debe decir exactamente a dónde van: "Abrir chat en WhatsApp" con el icono verde.',
              tag: 'Conversión',
            },
          ]
        : [
            {
              label: 'Comment ➔ Sent DM (100%)',
              text: 'Tool must deliver message in under 10 seconds while the buyer impulse is burning hot.',
              tag: 'Speed',
            },
            {
              label: 'Open Rate (80%+)',
              text: 'Message must begin with the user name and clear brand avatar so it avoids spam flags.',
              tag: 'Open Rate',
            },
            {
              label: 'Click to WhatsApp (40%+)',
              text: 'Button text must set clear expectations: "Open chat on WhatsApp" with green icon.',
              tag: 'Conversion',
            },
          ],
      instructorNotes: {
        duration: '3:00 - 4:00 min',
        script: isEs
          ? 'Muestren cómo un 40% de clics a WhatsApp es un estándar excelente en la industria para tráfico orgánico.'
          : 'Point out that a 40% click-through to WhatsApp is considered world-class for organic social.',
      },
    },
    {
      id: 's4',
      type: 'challenge',
      tag: isEs ? 'MISIÓN PRÁCTICA' : 'PRACTICAL MISSION',
      title: isEs ? 'Misión 5.2.1: El Enlace Inteligente de WhatsApp' : 'Mission 5.2.1: Smart WhatsApp Link',
      subtitle: isEs
        ? 'Crea tu enlace directo de WhatsApp con mensaje precargado para saber de qué video vienen.'
        : 'Generate your direct WhatsApp link with pre-filled text to know exactly which video triggered it.',
      points: isEs
        ? [
            {
              label: 'Estructura wa.link',
              text: 'Usa wa.link o el creador de enlaces oficial de WhatsApp con mensaje personalizado.',
            },
            {
              label: 'Mensaje Precargado',
              text: '"Hola, vi tu video sobre [tema] y quiero saber más sobre [producto]".',
            },
            {
              label: 'Prueba en Vivo',
              text: 'Toca tu propio enlace desde el móvil y comprueba que se abra la app de WhatsApp al instante.',
            },
          ]
        : [
            {
              label: 'wa.link Setup',
              text: 'Use wa.link or official WhatsApp link generator with custom pre-filled message.',
            },
            {
              label: 'Pre-filled Text',
              text: '"Hello! I saw your video about [topic] and want info on [product]".',
            },
            {
              label: 'Mobile Test',
              text: 'Tap link on your smartphone to confirm it launches WhatsApp without error.',
            },
          ],
      instructorNotes: {
        duration: '4:00 - 5:00 min',
        script: isEs
          ? 'Hagan énfasis en que el mensaje precargado ahorra fricción al cliente: no tienen que pensar qué escribir.'
          : 'Emphasize that pre-filled text removes friction: buyers do not have to think about what to say.',
      },
    },
  ];

  return {
    id: 'm05-02-01-dm-to-whatsapp-bridge',
    slug: 'm05-02-01-dm-to-whatsapp-bridge',
    lessonId: 'm05-02',
    title: isEs ? 'El Puente: Automatización de DMs con Palabras Clave' : 'The Bridge: Keyword DM Automation',
    moduleTag: isEs ? 'SEMANA 5 · LECCIÓN 5.2' : 'WEEK 5 · LESSON 5.2',
    estimatedMinutes: 5,
    slides,
  };
};
