import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0501 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm05-01',
    slug: 'llamados-a-la-accion-y-contenido-comercial',
    moduleSlug: 'semana-5-contenido-que-vende',
    title: isEs ? 'Llamados a la Acción (CTA) y Ofertas Irresistibles' : 'Calls to Action & Irresistible Commercial Offers',
    type: 'microclass',
    duration: '14 min',
    objective: isEs
      ? 'Aprender a diseñar CTAs magnéticos basados en micro-compromisos de una palabra clave y estructurar ofertas de venta directa en video vertical sin generar fricción.'
      : 'Master frictionless magnetic CTAs using keyword micro-commitments and structure direct response offers in vertical video.',
    topics: isEs
      ? [
          'La regla del objetivo único: Por qué pedir más de 1 acción paraliza la venta',
          'La palabra clave de baja fricción en comentarios ("PRECIO", "GUIA")',
          'Los 3 formatos comerciales en vertical: Demostración rápida, Antes/Después y Testimonio',
        ]
      : [
          'The single goal rule: Why asking for multiple actions kills conversion',
          'Low-friction keyword prompts in comments ("PRICE", "GUIDE")',
          '3 vertical direct response frameworks: Rapid demo, Before/After, and Spoken testimonial',
        ],
    presentationSlug: 'm05-01-01-call-to-actions',
    microclasses: [
      {
        id: 'mc-05-01-01',
        title: isEs ? '1. Anatomía de un CTA Magnético & Sin Fricción' : '1. Anatomy of a Frictionless Magnetic CTA',
        duration: '5:00 min',
        description: isEs
          ? 'Cómo pedir micro-compromisos de 1 sola palabra que multipliquen los comentarios comerciales en tus publicaciones.'
          : 'How to prompt single-word micro-commitments that multiply qualified buyer comments.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm05-01-01-call-to-actions',
      },
      {
        id: 'mc-05-01-02',
        title: isEs ? '2. Ofertas Irresistibles & Formatos Comerciales' : '2. Irresistible Offers & Commercial Frameworks',
        duration: '5:00 min',
        description: isEs
          ? 'Los 3 esquemas de video vertical para presentar productos o servicios resolviendo el dolor en menos de 45 segundos.'
          : '3 vertical video setups to pitch products or services solving customer pain in under 45 seconds.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm05-01-02-commercial-offers',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint: Llamados a la Acción & Ofertas' : 'Checkpoint: Calls to Action & Offers',
      description: isEs
        ? 'Valida tus conceptos sobre diseño de CTAs y formulación de ofertas comerciales en video vertical.'
        : 'Verify your understanding of high-converting CTAs and commercial offer structures.',
      questions: [
        {
          id: 'q1',
          question: isEs
            ? '¿Cuál es el principal error al formular un llamado a la acción (CTA) en un video vertical?'
            : 'What is the most fatal mistake when formulating a CTA in vertical video?',
          options: isEs
            ? [
                'Pedir múltiples acciones a la vez (dar like, guardar, comentar y visitar el link de la bio)',
                'Pronunciar el llamado a la acción en voz alta en los últimos segundos',
                'Colocar un sticker en la zona segura inferior',
                'Elegir una palabra clave corta como "PRECIO"',
              ]
            : [
                'Asking for multiple actions at once (like, save, comment, and check bio link)',
                'Speaking the call to action aloud in the closing seconds',
                'Placing an animated banner in the lower safe area',
                'Choosing a short trigger keyword like "PRICE"',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'Pedir más de una acción satura la carga cognitiva del usuario. Un solo objetivo claro ("Comenta PRECIO") multiplica la tasa de respuesta.'
            : 'Demanding multiple actions overwhelms cognitive capacity. A single clear trigger multiplies response rates.',
        },
        {
          id: 'q2',
          question: isEs
            ? 'En el formato de "Demostración Rápida" (45 segundos), ¿qué debe mostrarse en los primeros 3 segundos?'
            : 'In the 45-second "Rapid Demonstration" framework, what should appear in the first 3 seconds?',
          options: isEs
            ? [
                'El resultado final o el producto terminado en acción',
                'El logotipo de tu empresa con música de fondo',
                'Una bienvenida formal de 15 segundos presentándote',
                'El precio en letras gigantes',
              ]
            : [
                'The finished outcome or the product working in action',
                'A corporate logo reveal with intro music',
                'A 15-second formal greeting introducing yourself',
                'A giant price tag on screen',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'Mostrar el resultado final en los primeros 3 segundos actúa como gancho visual irrefutable para captar al comprador interesado.'
            : 'Revealing the finished payoff in the first 3 seconds acts as an undeniable hook for motivated buyers.',
        },
      ],
    },
    resources: [
      {
        id: 'res-m05-01-01',
        title: isEs ? 'Bóveda de 15 CTAs de Alta Conversión' : 'Vault of 15 High-Converting CTAs',
        description: isEs
          ? 'Plantilla con 15 llamados a la acción probados para productos físicos, servicios y creadores.'
          : 'Cheat sheet with 15 proven calls to action for physical goods, services, and digital creators.',
        type: 'guide',
        url: '#vault-15-high-converting-ctas',
      },
      {
        id: 'res-m05-01-02',
        title: isEs ? 'Matriz de Ofertas Irresistibles en Video' : 'Irresistible Video Offer Matrix',
        description: isEs
          ? 'Estructura paso a paso para guionar demostraciones de 45 segundos con escasez genuina.'
          : 'Step-by-step framework to script 45-second product demos with authentic scarcity.',
        type: 'template',
        url: '#irresistible-video-offer-matrix',
      },
    ],
  };
};
