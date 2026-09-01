import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0001 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm00-01',
    slug: 'bienvenida-a-creator-lab',
    moduleSlug: 'semana-0-induccion',
    title: isEs ? 'Clase 0.1 — Bienvenida a UXIO Creator Lab' : 'Lesson 0.1 — Welcome to Creator Lab',
    type: 'microclass',
    duration: '8 min',
    objective: isEs
      ? 'Aprender la metodología exacta para convertir tu teléfono en un canal de adquisición y ventas predecible. Descubrirás por qué la atención vertical es el activo comercial más rentable del mercado actual, cómo derribar el perfeccionismo paralizante que frena al 90% de los negocios y cómo ejecutar el mapa de ruta de 5 semanas para publicar piezas que atraigan clientes reales hacia tu WhatsApp sin gastar en equipos costosos.'
      : 'Learn the exact framework to turn your smartphone into a predictable client acquisition engine. Discover why vertical attention is the highest-ROI asset today, how to overcome perfectionism paralysis holding back 90% of business owners, and how to execute the 5-week milestone roadmap to generate sales inquiries directly to WhatsApp.',
    topics: isEs
      ? [
          'El Manifiesto Creator Lab: La atención vertical como activo de ventas directas',
          'Los 3 pilares del creador comercial: Producción de bolsillo, historias reales y foco en conversión',
          'La regla del 80/20: Por qué un video imperfecto publicado vale más que 10 borradores guardados',
          'Roadmap de 5 semanas: De la estrategia inicial al embudo de cierre de ventas',
        ]
      : [
          'Creator Lab Manifesto: Vertical attention as a direct sales asset',
          '3 pillars of commercial creation: Lean mobile filming, real stories, and conversion focus',
          'The 80/20 rule: Why 1 imperfect published clip beats 10 draft videos in your gallery',
          '5-week roadmap: From strategic positioning to WhatsApp closing funnels',
        ],
    presentationSlug: 'm00-01-welcome',
    microclasses: [
      {
        id: 'mc-00-01-01',
        title: isEs ? '1. El Manifiesto Creator Lab: Tu Celular como Canal de Ventas' : '1. Creator Lab Manifesto: Mobile as a Sales Engine',
        duration: '3:30 min',
        description: isEs
          ? 'En esta cápsula analizamos por qué el 90% de los negocios se desgastan persiguiendo likes vacíos sin generar ingresos. Aprenderás los 3 pilares del creador comercial: cómo capturar la atención en 3 segundos, cómo estructurar historias auténticas que conecten con las necesidades de tus clientes y cómo dirigir a cada espectador cualificado directamente hacia tu canal de ventas.'
          : 'In this capsule, we break down why 90% of businesses waste time chasing vanity likes with zero revenue. Learn the 3 commercial creation pillars: stopping the scroll in 3 seconds, telling authentic problem-solving stories, and guiding qualified viewers straight into your sales pipeline.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm00-01-01-manifesto',
      },
      {
        id: 'mc-00-01-02',
        title: isEs ? '2. La Regla de Oro: Progreso sobre Perfección' : '2. The Golden Rule: Progress over Perfection',
        duration: '4:30 min',
        description: isEs
          ? 'En esta cápsula derribamos el mayor freno mental al crear contenido: la parálisis por perfeccionismo. Te explicamos por qué esperar el momento "perfecto" cuesta millones en ventas perdidas, cómo el mercado te da feedback en tiempo real al publicar y cómo avanzar paso a paso por los 5 módulos del programa para terminar con un sistema de captación 100% operativo.'
          : 'In this capsule, we dismantle the #1 mental barrier in content creation: perfectionism paralysis. Discover why waiting for "ideal conditions" costs thousands in lost sales, how publishing unlocks real market validation, and how to execute the 5-week progression to build an active acquisition engine.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm00-01-02-golden-rule',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint Quiz: Mentalidad & Metodología Comercial' : 'Checkpoint Quiz: Mindset & Commercial System',
      description: isEs
        ? 'Valida los conceptos clave de las 2 microclases antes de descargar tus plantillas de trabajo.'
        : 'Validate key takeaways from the 2 microclasses before accessing your worksheets.',
      questions: [
        {
          id: 'q-00-01-01',
          question: isEs
            ? '¿Cuál es el fin principal del contenido comercial en Creator Lab?'
            : 'What is the primary objective of commercial content in Creator Lab?',
          options: isEs
            ? [
                'Perseguir likes y visualizaciones masivas sin importar la cualificación del espectador',
                'Crear un sistema de contenido que genere conversaciones y ventas reales para tu negocio',
                'Comprar equipos de iluminación de estudio antes de publicar el primer video',
              ]
            : [
                'Chase vanity likes and broad views without audience qualification',
                'Build a structured content engine that drives qualified conversations and revenue',
                'Purchase expensive studio lighting before publishing your first clip',
              ],
          correctOptionIndex: 1,
          explanation: isEs
            ? 'En Creator Lab priorizamos métricas de negocio (leads y ventas) por encima de métricas de vanidad.'
            : 'Creator Lab prioritizes direct business outcomes (qualified leads and sales) over vanity metrics.',
        },
        {
          id: 'q-00-01-02',
          question: isEs
            ? '¿Por qué la metodología establece que "un video imperfecto publicado vale más que 10 guardados en borradores"?'
            : 'Why does the methodology state that "an imperfect published video beats 10 saved in drafts"?',
          options: isEs
            ? [
                'Porque publicar te da retroalimentación real del mercado y acelera tu curva de aprendizaje',
                'Porque a los algoritmos no les importa la calidad del contenido',
                'Porque nunca debemos editar ni revisar los videos antes de subirlos',
              ]
            : [
                'Because publishing gives real market feedback and accelerates your learning curve',
                'Because algorithms do not care about video quality',
                'Because you should never edit or review clips before uploading',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'La retroalimentación real de tus clientes es el único mecanismo para calibrar tu mensaje.'
            : 'Real feedback from your target audience is the only way to refine your commercial hook.',
        },
        {
          id: 'q-00-01-03',
          question: isEs
            ? '¿Qué rol cumple el B-Roll en una pieza de contenido vertical de 45 segundos?'
            : 'What role does B-Roll play in a 45-second vertical video?',
          options: isEs
            ? [
                'Reemplazar por completo la voz del creador',
                'Dinamizar el ritmo visual mostrando el producto, proceso o contexto para elevar la retención',
                'Servir como efecto de relleno cuando no hay nada que decir',
              ]
            : [
                'Completely replace the creator voiceover',
                'Add visual rhythm by showing product details, backstage workflow, or context to boost retention',
                'Act as visual filler when there is no clear message',
              ],
          correctOptionIndex: 1,
          explanation: isEs
            ? 'El B-roll evita que el video sea un busto parlante estático, aumentando el tiempo de visualización.'
            : 'B-roll breaks visual monotony and elevates retention by demonstrating claims in action.',
        },
        {
          id: 'q-00-01-04',
          question: isEs
            ? '¿Cuál es la diferencia central entre un creador amateur y un creador del ecosistema UXIO?'
            : 'What is the key difference between an amateur creator and a UXIO creator?',
          options: isEs
            ? [
                'El creador amateur tiene un llamado a la acción (CTA) claro hacia WhatsApp en cada pieza',
                'El creador UXIO cuenta con un sistema de dolores, guiones probados y ruta directa a ventas',
                'El creador UXIO solo publica cuando siente inspiración artística',
              ]
            : [
                'Amateur creators always have a direct CTA to WhatsApp in every single piece',
                'UXIO creators operate with a clear system of customer pain points, tested scripts, and conversion routes',
                'UXIO creators only post when feeling artistic inspiration',
              ],
          correctOptionIndex: 1,
          explanation: isEs
            ? 'El creador UXIO opera con predictibilidad y estrategia de conversión comercial.'
            : 'UXIO creators build content with predictable conversion systems rather than relying on luck.',
        },
      ],
    },
    resources: [
      {
        id: 'res-00-01-01',
        title: isEs ? 'Guía Rápida de Inicio (Visor Interactivo + PDF A4)' : 'Quickstart Guide (Interactive + A4 PDF)',
        type: 'pdf',
        url: '#quickstart-guide',
        description: isEs
          ? 'Consulta las fechas clave, acuerdos de la cohorte y descarga la guía oficial en A4.'
          : 'Interactive visual overview with downloadable luxury A4 document.',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 0: Ficha de Diagnóstico de Marca' : 'Challenge 0: Brand Diagnosis Sheet',
      whatToDo: isEs
        ? 'Completa los 3 bloques de tu diagnóstico de marca en el modal interactivo (oferta, dolores del cliente y meta comercial a 5 semanas).'
        : 'Complete your brand diagnosis in the interactive modal (offer, pain points, and 5-week sales goal).',
      whatToDeliver: isEs
        ? 'Haz clic en "Enviar Tarea para Revisión 🚀" o descarga tu Ficha en PDF A4 para tu archivo personal.'
        : 'Click "Submit Challenge for Review 🚀" or download your personalized A4 PDF.',
      whereToSubmit: isEs ? 'Ficha de Diagnóstico Interactiva del Aula' : 'Classroom Interactive Modal Form',
      evaluationCriteria: isEs
        ? [
            'Oferta principal y precio o ticket promedio definido.',
            'Cliente ideal claramente identificado con 3 dolores concretos.',
            'Objetivo comercial medible a 5 semanas (ventas o prospectos en WhatsApp).',
          ]
        : [
            'Hero offer and average price point declared.',
            'Target audience defined with 3 concrete pain points.',
            'Measurable 5-week commercial target (sales or WhatsApp leads).',
          ],
    },
  };
};
