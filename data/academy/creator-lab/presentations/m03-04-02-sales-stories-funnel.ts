import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM030402 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'La Secuencia de 5 Stories para Vender en 24h' : 'The 5-Story 24-Hour Sales Sequence',
      subtitle: isEs
        ? 'Microclase 3.4.2 · Cómo estructurar un embudo conversacional en Stories que calienta prospectos fríos y genera mensajes directos.'
        : 'Microclass 3.4.2 · Structuring a 5-story conversational funnel that warms up cold leads and triggers instant DMs.',
      highlight: isEs ? 'Semana 3 · El Embudo de 24 Horas' : 'Week 3 · The 24-Hour Funnel',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 3.4.2' : '// KEY CONCEPTS 3.4.2',
        badge: isEs ? 'STORIES 24H' : '24H STORIES',
        items: [
          { title: isEs ? 'Story 1: Contexto Real' : 'Story 1: Raw Context', desc: isEs ? 'Sin filtros ni producción pesada' : 'Unfiltered daily context', color: '#FE385B' },
          { title: isEs ? 'Story 3: Encuesta' : 'Story 3: Poll Sticker', desc: isEs ? 'Dispara interacción con 1 tap' : '1-tap interactive engagement', color: '#FF7F07' },
          { title: isEs ? 'Story 5: Enlace WhatsApp' : 'Story 5: WhatsApp Link', desc: isEs ? 'Cierre directo con cupos limitados' : 'Direct link with scarcity', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 3.4.2! Las Stories son el canal más íntimo de venta. Hoy aprenderán la secuencia exacta de 5 láminas.'
          : 'Welcome to Microclass 3.4.2! Stories are the most intimate sales channel. Learn the 5-story conversion formula.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'Los Reels atraen extraños, los Carruseles construyen autoridad, pero las Stories son las que cierran las ventas en WhatsApp.'
        : 'Reels attract strangers, Carousels build authority, but Stories close the sales on WhatsApp.',
      subtitle: isEs
        ? 'No uses Stories para publicar flyers aburridos: úsalas como una conversación 1 a 1 entre dos personas reales.'
        : 'Stop posting boring promotional flyers on Stories: treat them as an intimate 1-on-1 coffee chat.',
      highlight: isEs ? 'Stories = Canal de Cierre Directo' : 'Stories = Direct Conversion Engine',
      bgColor: '#10B981',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Enfaticen la diferencia de rol entre Reels (alcance), Carruseles (autoridad) y Stories (conversión).'
          : 'Clarify the ecosystem roles: Reels for reach, Carousels for authority, Stories for conversions.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'LA SECUENCIA DE 5 HISTORIAS' : 'THE 5-STORY FUNNEL',
      title: isEs ? 'La Secuencia de 5 Stories Paso a Paso' : 'The 5-Story Sales Funnel Step-by-Step',
      subtitle: isEs
        ? 'Cómo guiar a un seguidor desde la curiosidad hasta el mensaje de WhatsApp.'
        : 'Guiding followers from casual interest to direct buying conversation in 5 slides.',
      points: isEs
        ? [
            {
              label: 'Story 1: El Contexto Cotidiano (Gancho Humano)',
              text: 'Foto o video corto de tu café, escritorio o taller: "Estaba revisando esto hoy y no puedo creer cuánta gente sigue cometiendo este error..."',
              detailData: {
                tag: 'STORY 01 // CONTEXTO',
                title: 'La Entrada Sin Filtros',
                description: 'Cero apariencia de anuncio publicitario; parece una historia espontánea compartida con un amigo.',
                imageCaption: 'Story 1 · Contexto Cotidiano',
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Foto casual o video de 5 segundos', 'Texto nativo de la aplicación'],
                actionTip: 'No uses plantillas gráficas en la primera historia.',
              },
            },
            {
              label: 'Story 2: El Dolor / La Consecuencia',
              text: '"Muchos creen que [Error común] no importa, pero la realidad es que te cuesta [Pérdida de dinero o tiempo]."',
              detailData: {
                tag: 'STORY 02 // DOLOR',
                title: 'La Dimensión del Problema',
                description: 'Explica la consecuencia real para que el espectador se sienta identificado.',
                imageCaption: 'Story 2 · Explicación del Dolor',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Resalta 2 palabras con el fondo de color de Instagram', 'Mantén el texto breve'],
                actionTip: 'Escribe en primera persona.',
              },
            },
            {
              label: 'Story 3: Sticker de Interacción (Micro-Compromiso)',
              text: 'Encuesta con 2 opciones fáciles: "¿Te ha pasado esto alguna vez? [Totalmente / Por suerte no]".',
              detailData: {
                tag: 'STORY 03 // ENCUESTA',
                title: 'El Micro-Compromiso de 1 Tap',
                description: 'El sticker de encuesta activa el algoritmo de Instagram y califica a los prospectos más interesados.',
                imageCaption: 'Story 3 · Sticker de Encuesta',
                image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Sticker en la zona inferior de fácil acceso', 'Pregunta que todo el mundo respondería Sí'],
                actionTip: 'Revisa quién votó para enviarles un mensaje privado luego.',
              },
            },
            {
              label: 'Story 4: La Prueba Social / Caso de Éxito',
              text: 'Captura de pantalla de un cliente feliz en WhatsApp o foto del producto entregado: "Esto fue lo que le pasó a María cuando aplicó la solución."',
              detailData: {
                tag: 'STORY 04 // PRUEBA',
                title: 'La Validación Irrefutable',
                description: 'Demuestra que personas reales ya obtuvieron el resultado deseado.',
                imageCaption: 'Story 4 · Prueba Social Real',
                image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Captura de chat con datos privados protegidos', 'Comentarios genuinos de satisfacción'],
                actionTip: 'Resalta la frase de agradecimiento del cliente.',
              },
            },
            {
              label: 'Story 5: Llamado a la Acción + Enlace WhatsApp',
              text: 'Sticker de enlace con oferta o cupos limitados: "Abrí 5 cupos para [Servicio] esta semana. Toca el enlace y escríbeme directo."',
              detailData: {
                tag: 'STORY 05 // CIERRE',
                title: 'El Enlace de Conversión Directa',
                description: 'Un llamado claro con sentido de urgencia que mueve el tráfico caliente a WhatsApp.',
                imageCaption: 'Story 5 · Sticker de Enlace Directo',
                image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Sticker de enlace con texto personalizado', 'Urgencia legítima (cupos o tiempo limitado)'],
                actionTip: 'Pon el sticker con color llamativo.',
              },
            },
          ]
        : [
            { label: 'Story 1: Raw Context', text: 'Unfiltered desk or coffee view introducing the daily dilemma.' },
            { label: 'Story 2: The Pain', text: 'Explain the tangible cost of leaving the friction unsolved.' },
            { label: 'Story 3: Poll Sticker', text: '1-tap interactive poll sticker activating algorithm.' },
            { label: 'Story 4: Social Proof', text: 'Real client WhatsApp screenshot or product delivery photo.' },
            { label: 'Story 5: WhatsApp CTA', text: 'Direct link sticker with limited spots or fast-action bonus.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Expliquen cómo esta secuencia de 5 historias genera ventas inmediatas sin presupuesto de pauta.'
          : 'Highlight how this 5-story drill drives zero-ad-spend sales within 24 hours.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'AUDITORÍA DE STORIES' : 'STORIES AUDIT',
      title: isEs ? 'Flyers Promocionales Fríos vs. Secuencia Conversacional' : 'Cold Promo Flyers vs. Conversational Funnel',
      comparison: isEs
        ? {
            beforeLabel: '❌ Flyers Promocionales Fríos',
            before: [
              'Subir una imagen diseñada con precios y texto saturado.',
              'Cero interacción, cero encuestas y cero humanidad.',
              'El 90% de los seguidores desliza y salta la historia.',
              'Cero mensajes en WhatsApp.',
            ],
            afterLabel: '✓ Secuencia Conversacional UXIO',
            after: [
              '5 historias que cuentan un relato progresivo de 24h.',
              'Sticker de encuesta que involucra a la audiencia con 1 toque.',
              'Prueba de clientes reales que genera confianza inmediata.',
              'Flujo constante de conversaciones abiertas en WhatsApp.',
            ],
          }
        : {
            beforeLabel: '❌ Cold Promo Flyers',
            before: [
              'Posting static graphics stuffed with prices.',
              'Zero interactive stickers or human presence.',
              '90% of viewers skip to the next profile.',
              'Zero incoming direct messages.',
            ],
            afterLabel: '✓ UXIO Conversational Funnel',
            after: [
              '5 stories delivering a cohesive 24h transformation arc.',
              'Interactive poll sticker qualifying buyers.',
              'Tangible client proof building instant trust.',
              'Steady pipeline of qualified WhatsApp conversations.',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:30 min',
        script: isEs
          ? 'Las historias son para conversar; cuando conversas, vendes.'
          : 'Stories are made for conversation; conversation drives revenue.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'MISIÓN 3.4.2' : 'MISSION 3.4.2',
      title: isEs ? 'Tu Secuencia de 5 Stories para el Reto 3' : 'Your 5-Story Sequence for Challenge 3',
      steps: isEs
        ? [
            {
              number: '01',
              title: '1. Elige una Oferta o Servicio Específico',
              desc: 'Define qué producto o asesoría vas a ofrecer en la Story 5.',
            },
            {
              number: '02',
              title: '2. Redacta las 5 Láminas',
              desc: 'Contexto ➔ Dolor ➔ Encuesta ➔ Prueba ➔ Enlace WhatsApp.',
            },
            {
              number: '03',
              title: '3. Publícalas y Toma Captura',
              desc: 'Sube las 5 stories a tu cuenta y guarda las capturas para tu entrega oficial.',
            },
          ]
        : [
            { number: '01', title: '1. Pick Specific Offer', desc: 'Define which service or product you close in Story 5.' },
            { number: '02', title: '2. Draft the 5 Slides', desc: 'Context ➔ Pain ➔ Poll ➔ Proof ➔ WhatsApp Link.' },
            { number: '03', title: '3. Publish & Screenshot', desc: 'Post the 5 stories and screenshot them for Challenge 3.' },
          ],
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Con esto completan el Kit Multiformato oficial de la Semana 3.'
          : 'With this, students finalize the official Week 3 Multiformat Pack.',
      },
    },
  ];

  return {
    id: 'm03-04-02-sales-stories-funnel',
    slug: 'm03-04-02-sales-stories-funnel',
    lessonId: 'm03-04',
    title: isEs
      ? 'La Secuencia de 5 Stories para Vender en 24h'
      : 'The 5-Story 24-Hour Sales Sequence',
    moduleTag: isEs ? 'SEMANA 3 · MICROCLASE 3.4.2' : 'WEEK 3 · MICROCLASS 3.4.2',
    estimatedMinutes: 5,
    slides,
  };
};
