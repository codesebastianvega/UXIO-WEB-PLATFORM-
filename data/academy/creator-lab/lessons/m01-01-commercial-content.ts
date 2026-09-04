import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0101 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm01-01',
    slug: 'contenido-comercial-vs-organico',
    moduleSlug: 'semana-1-estrategia',
    title: isEs ? 'Clase 1.1 — Contenido Comercial vs. Orgánico' : 'Lesson 1.1 — Commercial vs. Organic Content',
    type: 'microclass',
    duration: '12 min',
    objective: isEs
      ? 'Aprender la diferencia fundamental entre hacer publicidad tradicional invasiva y producir contenido comercial nativo de alta conversión. Descubrirás por qué la ceguera publicitaria destruye los anuncios convencionales, cómo el formato UGC (User Generated Content) y los creadores internos generan hasta 4 veces más conversiones hacia WhatsApp y cómo estructurar piezas orgánicas que eduquen a tu cliente ideal sin sentirse como una venta agresiva.'
      : 'Understand the core difference between intrusive traditional ads and high-converting native commercial content. Learn why banner blindness kills standard ads, how UGC formats and in-house creator videos generate up to 4x more WhatsApp sales conversions, and how to structure organic assets that educate your ideal customer seamlessly.',
    topics: isEs
      ? [
          'La muerte del anuncio tradicional: Por qué los consumidores saltan los comerciales corporativos',
          'Contenido Nativo UXIO: Resolver problemas reales con estructura de gancho, autoridad y llamada a la acción',
          'El poder del UGC y los creadores internos: Por qué el fundador convierte 4 veces más que un influencer externo',
          'El puente de conversión: Cómo mover espectadores de TikTok e Instagram a conversaciones privadas en WhatsApp',
        ]
      : [
          'The death of traditional ads: Why modern buyers skip corporate promos',
          'UXIO Native Content: Solving real customer friction with Hook-Body-CTA pacing',
          'The power of UGC and in-house creators: Why business founders convert 4x better than external influencers',
          'The conversion bridge: Moving vertical viewers from social feeds into private WhatsApp pipelines',
        ],
    presentationSlug: 'm01-01-commercial-content',
    microclasses: [
      {
        id: 'mc-01-01-01',
        title: isEs ? '1. La Muerte del Anuncio Tradicional vs. Contenido Nativo' : '1. Death of Traditional Ads vs. Native Content',
        duration: '4:00 min',
        description: isEs
          ? 'En esta cápsula analizamos por qué los anuncios de radio o televisión trasladados a redes sociales fracasan estrepitosamente. Aprenderás a identificar las 3 características del contenido nativo: atacar un dolor específico en los primeros 3 segundos, demostrar la solución práctica en pantalla y ofrecer un llamado a la acción de baja fricción que abra un canal de comunicación directo.'
          : 'In this capsule, we break down why traditional broadcast ads fail on social feeds. Learn the 3 pillars of native content: hitting a specific pain in 3 seconds, showing the real solution on screen, and delivering a low-friction CTA that starts a high-trust direct chat.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm01-01-01-commercial-vs-organic',
      },
      {
        id: 'mc-01-01-02',
        title: isEs ? '2. ¿Qué es UGC? (User Generated Content) & Creadores Internos' : '2. What is UGC? (User Generated Content) & In-House Creators',
        duration: '5:00 min',
        description: isEs
          ? 'Descubre qué es el UGC (User Generated Content / Contenido Generado por el Usuario): el formato grabado con celular que sustituyó a los anuncios de televisión. Aprende los 3 tipos de UGC (Testimonio de cliente, Creador interno/Fundador y Demostración POV en primera persona) y la estructura de 4 pasos para convertir visitas en prospectos de WhatsApp sin contratar agencias costosas ni influencers.'
          : 'Discover what UGC (User Generated Content) is: the mobile-first format that replaced traditional agency commercials. Learn the 3 core UGC formats (Real customer reviews, In-house founder creator, and First-person POV demos) and the 4-step formula to turn views into WhatsApp buyers with $0 ad spend.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm01-01-02-ugc-power',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint Quiz: Contenido Comercial Nativo' : 'Checkpoint Quiz: Native Commercial Content',
      description: isEs
        ? 'Valida tu comprensión sobre la estructura del contenido nativo antes de pasar al mapeo de procesos.'
        : 'Validate your understanding of native content before moving to process mapping.',
      questions: [
        {
          id: 'q-01-01-01',
          question: isEs
            ? '¿Cuál es la principal ventaja del contenido comercial nativo sobre un anuncio tradicional?'
            : 'What is the main advantage of native commercial content over a traditional ad?',
          options: isEs
            ? [
                'Que cuesta millones de pesos en producción y efectos de estudio',
                'Que se percibe como una recomendación o solución orgánica, evitando la ceguera publicitaria',
                'Que solo sirve para entretener sin mencionar nunca el producto o servicio',
              ]
            : [
                'It requires expensive studio budgets and VFX',
                'It feels like an authentic recommendation or solution, bypassing banner blindness',
                'It only entertains without ever mentioning your commercial offer',
              ],
          correctOptionIndex: 1,
          explanation: isEs
            ? 'El contenido nativo educa y resuelve una fricción en lenguaje cotidiano, logrando que el espectador lo consuma completo sin sentir que le están vendiendo agresivamente.'
            : 'Native content solves friction in natural everyday vocabulary, keeping viewers engaged without feeling pitched.',
        },
        {
          id: 'q-01-01-02',
          question: isEs
            ? '¿Por qué el fundador o creador interno de un negocio suele convertir mejor que un influencer externo?'
            : 'Why does an in-house founder or specialist typically convert better than an external influencer?',
          options: isEs
            ? [
                'Porque tiene autoridad técnica real y conoce a fondo las dudas y objeciones de sus compradores',
                'Porque tiene más seguidores que cualquier celebridad de internet',
                'Porque utiliza cámaras de cine más costosas',
              ]
            : [
                'Because they possess real technical authority and deeply understand buyer objections',
                'Because they have more followers than internet celebrities',
                'Because they use more expensive cinema cameras',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'La autenticidad técnica y la respuesta honesta a las dudas del cliente generan una tasa de cierre significativamente superior a la recomendación pagada de un tercero.'
            : 'Real technical domain mastery and addressing customer objections builds stronger buyer confidence than sponsored mentions.',
        },
      ],
    },
    resources: [
      {
        id: 'res-01-01-01',
        title: isEs ? 'Swipe File: 15 Fórmulas de Ganchos Virales (0-3s)' : 'Swipe File: 15 Viral Hook Formulas (0-3s)',
        description: isEs
          ? 'Banco exclusivo de 15 estructuras de ganchos de alta retención para copiar, adaptar y disparar el tiempo de visualización en TikTok y Reels.'
          : 'Exclusive swipe file of 15 high-retention opening hooks to copy, adapt, and boost watch time on TikTok & Reels.',
        type: 'guide',
        url: '#hook-formulas',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 1.1: Ficha de Reescritura Comercial & Guion UGC' : 'Challenge 1.1: Commercial Rewriting & UGC Script Sheet',
      whatToDo: isEs
        ? 'Completa los 2 bloques de la ficha interactiva: 1) Transforma tu frase publicitaria tradicional en un gancho de dolor de 3 segundos (Microclase 1.1.1), y 2) Estructura tu guion UGC de 4 pasos para creador interno con llamado directo a WhatsApp (Microclase 1.1.2).'
        : 'Complete both worksheet blocks: 1) Rewrite traditional ad into 3s native pain hook (Microclass 1.1.1), and 2) Structure your 4-step in-house creator UGC script with WhatsApp CTA (Microclass 1.1.2).',
      whatToDeliver: isEs
        ? 'Haz clic en "Enviar Reto para Revisión 🚀" en el formulario interactivo o descarga tu Ficha en PDF A4.'
        : 'Click "Submit Challenge for Review 🚀" in the interactive form or download your A4 PDF.',
      whereToSubmit: isEs ? 'Formulario Interactivo del Aula Virtual' : 'Classroom Interactive Worksheet',
      evaluationCriteria: isEs
        ? [
            'Gancho nativo de 3 segundos que enuncia el dolor sin rodeos ni saludos lentos (Microclase 1.1.1).',
            'Guion UGC de 4 pasos estructurado para creador interno o fundador (Microclase 1.1.2).',
            'Llamado a la acción con palabra clave dirigida a iniciar conversación en WhatsApp.',
          ]
        : [
            '3-second native hook addressing friction without slow intros (Microclass 1.1.1).',
            '4-step UGC script structured for in-house creator or founder (Microclass 1.1.2).',
            'Keyword CTA directing viewers to start a 1-on-1 WhatsApp conversation.',
          ],
    },
  };
};
