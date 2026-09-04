import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0102 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm01-02',
    slug: 'tu-marca-tiene-contenido-escondido',
    moduleSlug: 'semana-1-estrategia',
    title: isEs ? 'Clase 1.2 — Tu Marca Tiene Contenido Escondido' : 'Lesson 1.2 — Your Brand Has Hidden Content',
    type: 'microclass',
    duration: '14 min',
    objective: isEs
      ? 'Aprender a extraer ideas infinitas de contenido documentando los procesos reales, el backstage y las interacciones cotidianas de tu negocio. Descubrirás por qué no necesitas inventar guiones ficticios, cómo convertir las dudas recurrentes de tu WhatsApp en ganchos de alta retención y cómo capturar tomas de procesos que justifiquen el valor y precio de tus productos o servicios.'
      : 'Learn how to extract endless content ideas by documenting real workflows, backstage operations, and daily customer interactions. Discover why you do not need scripted fiction, how to turn WhatsApp buyer FAQs into high-retention video hooks, and how to capture process B-roll that justifies premium pricing.',
    topics: isEs
      ? [
          'El principio de documentación: Dejar de inventar y empezar a registrar tu trabajo diario',
          'Las 3 tomas maestras de backstage: El antes y después, el detalle minucioso (Macro) y el error corregido',
          'Tu WhatsApp como calendario editorial: Convertir preguntas frecuentes en guiones de respuesta directa',
          'La estructura de desmantelamiento de objeciones: Responder en público lo que te preguntan en privado',
        ]
      : [
          'The documentation framework: Stop inventing and start recording your daily operations',
          '3 master backstage shots: The before-and-after, macro texture details, and corrected mistakes',
          'WhatsApp as your editorial calendar: Turning customer FAQs into instant video scripts',
          'The objection-busting structure: Answering in public what clients ask behind closed doors',
        ],
    presentationSlug: 'm01-02-hidden-content',
    microclasses: [
      {
        id: 'mc-01-02-01',
        title: isEs ? '1. La Mina de Oro del Backstage & Procesos Reales' : '1. The Goldmine of Backstage & Real Processes',
        duration: '4:15 min',
        description: isEs
          ? 'En esta cápsula exploramos cómo las tareas que para ti son monótonas u obvias representan contenido magnético para tu cliente ideal. Aprenderás a encuadrar tomas de detalle, cómo grabar el desempaque, la preparación o la consultoría sin interrumpir tu flujo de trabajo y cómo usar ese material para crear videos con voz en off en menos de 5 minutos.'
          : 'In this capsule, we explore why tasks you consider routine are fascinating and educational to your target buyer. Learn how to frame macro details, shoot packaging or workflow B-roll without disrupting daily operations, and use it to craft voiceover assets in under 5 minutes.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm01-02-01-backstage-goldmine',
      },
      {
        id: 'mc-01-02-02',
        title: isEs ? '2. Objeciones y Dudas Frecuentes como Ganchos de Venta' : '2. Objections & FAQs as Sales Hooks',
        duration: '4:30 min',
        description: isEs
          ? 'En esta cápsula te enseñamos a convertir cada conversación de WhatsApp en un guion estructurado. Analizamos la fórmula de "Pregunta Incómoda -> Respuesta Maestra", cómo desactivar objeciones de precio o tiempo de entrega antes de que el cliente las formule y cómo guiar la conversación hacia un cierre de venta natural.'
          : 'In this capsule, we teach you how to turn daily chat messages into structured scripts. Learn the "Uncomfortable Question -> Master Answer" framework, how to defuse pricing and delivery objections proactively, and how to direct viewers to a natural sales close.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm01-02-02-objections-to-hooks',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint Quiz: Mapeo de Procesos & Objeciones' : 'Checkpoint Quiz: Process Mapping & Objections',
      description: isEs
        ? 'Valida cómo extraer contenido de tus operaciones diarias antes de pasar a la matriz de 30 ideas.'
        : 'Validate how to extract content from daily operations before building your 30-idea matrix.',
      questions: [
        {
          id: 'q-01-02-01',
          question: isEs
            ? '¿Cuál es la mejor fuente para encontrar ideas de videos que generen ventas inmediatas?'
            : 'What is the best source to find video ideas that drive immediate commercial sales?',
          options: isEs
            ? [
                'Copiar las tendencias de baile de creadores de entretenimiento',
                'Revisar las dudas, objeciones y preguntas repetitivas que tus clientes hacen en WhatsApp o Instagram',
                'Esperar a tener inspiración creativa espontánea cada mañana',
              ]
            : [
                'Copying dance trends from viral entertainment creators',
                'Reviewing recurring questions, objections, and inquiries from your WhatsApp or IG inbox',
                'Waiting for spontaneous creative inspiration every morning',
              ],
          correctOptionIndex: 1,
          explanation: isEs
            ? 'Las dudas reales de tus compradores indican exactamente qué información necesitan para tomar una decisión de compra con confianza.'
            : 'Real buyer questions pinpoint the exact information needed to make confident purchasing decisions.',
        },
        {
          id: 'q-01-02-02',
          question: isEs
            ? '¿Qué efecto genera mostrar el detalle minucioso (Macro Shot) y el proceso de trabajo en video?'
            : 'What effect does showing macro detail and backstage process work have on prospective clients?',
          options: isEs
            ? [
                'Justifica la calidad, demuestra maestría técnica y respalda precios profesionales o altos',
                'Hace que el video sea demasiado aburrido para redes sociales',
                'Obliga a comprar cámaras de cine de $5.000 USD',
              ]
            : [
                'It proves craftsmanship, technical mastery, and justifies premium pricing',
                'It makes the video too boring for social feeds',
                'It forces you to buy expensive cinema cameras',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'El cliente percibe el cuidado y la dedicación en cada detalle, elevando el valor percibido de tu marca al instante.'
            : 'Buyers perceive the care, precision, and craftsmanship involved, instantly elevating brand perceived value.',
        },
      ],
    },
    resources: [
      {
        id: 'res-01-02-01',
        title: isEs ? 'Catálogo de 6 Ángulos B-Roll & Grabación de Procesos' : 'B-Roll & Process Filming 6 Angles Catalog',
        description: isEs
          ? 'Guía práctica de planos cinematográficos con smartphone para grabar tu negocio, herramientas y procesos con alta autoridad.'
          : 'Practical guide to smartphone angles for filming your workshop, tools, and craftsmanship with high authority.',
        type: 'guide',
        url: '#broll-angles-guide',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 1.2: Plantilla de Minería de 5 Objeciones de WhatsApp' : 'Challenge 1.2: 5 WhatsApp Objections Mining Sheet',
      whatToDo: isEs
        ? 'Completa los 5 campos en la ficha interactiva: extrae 5 dudas u objeciones reales de tus chats de ventas de WhatsApp (precio, tiempos, garantía) y redacta el gancho incómodo de 3 segundos para desarmarlas en video.'
        : 'Complete the 5 fields in the interactive worksheet: extract 5 real objections from your WhatsApp sales chats and draft the 3-second hook for video.',
      whatToDeliver: isEs
        ? 'Haz clic en "Enviar Reto para Revisión 🚀" en el formulario interactivo o descarga tu Ficha en PDF A4.'
        : 'Click "Submit Challenge for Review 🚀" in the interactive form or download your A4 PDF.',
      whereToSubmit: isEs ? 'Formulario Interactivo del Aula Virtual' : 'Classroom Interactive Worksheet',
      evaluationCriteria: isEs
        ? [
            '5 objeciones reales extraídas de clientes o prospectos de WhatsApp.',
            'Ganchos en primera persona citando la duda ("Un cliente me preguntó...").',
            'Respuestas que resaltan técnica, respaldo y materiales con llamado a WhatsApp.',
          ]
        : [
            '5 real objections extracted from actual buyer chats.',
            'First-person opening hooks citing the question directly.',
            'Answers highlighting craftsmanship, warranty, and build quality with WhatsApp CTA.',
          ],
    },
  };
};
