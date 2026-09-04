import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM010102 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? '¿Qué es UGC & Por Qué Vende Tanto?' : 'What is UGC & Why It Converts So High?',
      subtitle: isEs
        ? 'Microclase 1.1.2 · User Generated Content: El formato nativo que reemplazó a los anuncios de televisión en redes sociales.'
        : 'Microclass 1.1.2 · User Generated Content: The native format that replaced TV ads on social feeds.',
      highlight: isEs ? 'Semana 1 · El Activo Humano' : 'Week 1 · The Human Asset',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 1.1.2' : '// KEY CONCEPTS 1.1.2',
        badge: isEs ? 'UGC MASTER' : 'UGC MASTER',
        items: [
          { title: isEs ? '¿Qué es UGC?' : 'What is UGC?', desc: isEs ? 'Contenido generado por el usuario' : 'User Generated Content', color: '#FE385B' },
          { title: isEs ? '3 Formatos Maestros' : '3 Master Formats', desc: isEs ? 'Cliente, Creador Interno y POV' : 'Customer, In-House, POV', color: '#FF7F07' },
          { title: isEs ? 'Fórmula en 4 Pasos' : '4-Step Formula', desc: isEs ? 'Gancho, Problema, Manos, CTA' : 'Hook, Problem, Hands, CTA', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 1.1.2! Hoy vamos a desglosar qué es exactamente el UGC (User Generated Content), por qué es el formato rey en TikTok e Instagram y cómo implementarlo en tu negocio sin pagar a influencers.'
          : 'Welcome to Microclass 1.1.2! Today we break down exactly what UGC (User Generated Content) is, why it rules TikTok & Instagram, and how to deploy it in-house.',
      },
    },
    {
      id: 's02',
      type: 'concept',
      tag: isEs ? 'DEFINICIÓN & ANATOMÍA' : 'DEFINITION & ANATOMY',
      title: isEs ? '¿Qué es UGC (User Generated Content)?' : 'What is UGC (User Generated Content)?',
      subtitle: isEs
        ? 'Contenido con estética de usuario real grabado desde un celular, no producido por una agencia de publicidad.'
        : 'Real-user aesthetic content shot on a smartphone, never staged by an advertising agency.',
      points: isEs
        ? [
            {
              label: '1. UGC de Cliente (Testimonio Real)',
              text: 'Un cliente usando tu producto o servicio y contando su experiencia con sus propias palabras, sin guion forzado.',
              detailData: {
                tag: 'FORMATO 01 // CLIENTE REAL',
                title: 'La Prueba Social Definitiva',
                description: 'Ver a un comprador real mostrando el resultado o desempaque genera confianza inmediata porque no hay interés de venta falso.',
                imageCaption: 'Cliente Real · Cero Guion Publicitario',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Unboxing y primeras impresiones', 'Capturas de chats de WhatsApp reales'],
                actionTip: 'Pide a tus mejores 3 clientes un video selfie de 15 segundos contando qué les pareció el servicio.',
              },
            },
            {
              label: '2. UGC Interno / Fundador (EGC)',
              text: 'El dueño del negocio o especialista técnico hablando como un creador independiente, compartiendo trucos y soluciones.',
              detailData: {
                tag: 'FORMATO 02 // CREADOR INTERNO (EGC)',
                title: 'Autoridad Técnica y Empatía',
                description: 'Employee Generated Content: Cuando el equipo graba con estética casual, el usuario lo percibe como una recomendación de un amigo experto.',
                imageCaption: 'Fundador / Especialista · Rostro Visible',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Cero maquillaje de estudio', 'Respuestas técnicas instantáneas a dudas'],
                actionTip: 'Grábate con luz de ventana explicando por qué decidiste usar ciertos materiales o procesos.',
              },
            },
            {
              label: '3. UGC Demostrativo (POV / Proceso)',
              text: 'Tomas en primera persona (Point of View) donde se ve el uso del producto o la pantalla de trabajo en acción.',
              detailData: {
                tag: 'FORMATO 03 // DEMOSTRACIÓN POV',
                title: 'El Producto en Acción Real',
                description: 'La cámara colocada a la altura de tus ojos mostrando cómo tus manos usan la herramienta o elaboran el entregable.',
                imageCaption: 'POV en Primera Persona · Inmersión Total',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Audio ambiental auténtico (ASMR de trabajo)', 'Demostración de durabilidad y acabados'],
                actionTip: 'Usa un soporte de pecho o recuesta el celular en tu escritorio para grabar tus manos trabajando.',
              },
            },
          ]
        : [
            { label: '1. Customer UGC (Real Reviews)', text: 'Real buyers showcasing unboxings and genuine outcomes.' },
            { label: '2. In-House Founder UGC (EGC)', text: 'Founders sharing expert insights with casual creator aesthetics.' },
            { label: '3. Demonstrative POV UGC', text: 'First-person perspective shots showing craftsmanship and tools.' },
          ],
      instructorNotes: {
        duration: '1:00 - 2:30 min',
        script: isEs
          ? 'Expliquen la definición: UGC son las siglas de User Generated Content. Nació porque el público rechaza los comerciales y prefiere ver a personas reales.'
          : 'Explain the acronym: UGC stands for User Generated Content. It thrives because audiences reject ads and trust real people.',
      },
    },
    {
      id: 's03',
      type: 'statement',
      tag: 'BLOQUE 02 · 02:30 - 03:30 MIN',
      title: isEs
        ? 'La gente no confía en lo que las empresas dicen de sí mismas; confía en lo que los humanos demuestran con sus manos.'
        : 'People do not trust what brands claim; they trust what humans prove with their own hands.',
      subtitle: isEs
        ? 'El UGC triunfa porque no interrumpe el entretenimiento: se mezcla de forma invisible en el feed de TikTok y Reels.'
        : 'UGC wins because it does not interrupt entertainment: it blends seamlessly into TikTok and Reels feeds.',
      highlight: isEs ? 'Autenticidad > Perfección de Estudio' : 'Authenticity > Studio Fluff',
      bgColor: '#FF7F07',
      instructorNotes: {
        duration: '2:30 - 3:30 min',
        script: isEs
          ? 'La clave psicológica del UGC es la ausencia de poses corporativas. Si parece un comercial, la gente desliza; si parece un video orgánico, se quedan hasta el final.'
          : 'The psychology of UGC is zero corporate posing. If it looks like an ad, people swipe; if organic, they watch till the end.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'TABLA COMPARATIVA' : 'COMPARISON TABLE',
      title: isEs ? 'Anuncio Tradicional de Agencia vs. Video UGC' : 'Agency Commercial vs. UGC Video',
      comparison: isEs
        ? {
            beforeLabel: 'Anuncio Tradicional de Agencia',
            before: [
              'Cámara de cine, luces artificiales y actores contratados.',
              'Habla de la empresa: "Somos la solución #1 del mercado".',
              'Costo de producción alto ($1.000 - $5.000 USD).',
              'El usuario lo identifica como publicidad en 0.5s y desliza.',
            ],
            afterLabel: 'Video UGC / Creador Interno (UXIO)',
            after: [
              'Grabado con smartphone en mano, luz natural y voz real.',
              'Habla del dolor del cliente: "Si te pasa esto, prueba este truco".',
              'Costo de producción $0 USD (solo tu tiempo y conocimiento).',
              'El usuario cree que es un consejo de un amigo y mira completo.',
            ],
          }
        : {
            beforeLabel: 'Traditional Agency Commercial',
            before: [
              'Cinema cameras, studio lighting, and hired actors.',
              'Brand-centric: "We are the #1 leader in solutions".',
              'High production cost ($1,000 - $5,000 USD).',
              'User detects ad in 0.5s and immediately swipes.',
            ],
            afterLabel: 'UXIO UGC / In-House Creator Video',
            after: [
              'Handheld smartphone, window light, and genuine voice.',
              'Problem-centric: "If you struggle with this, try this trick".',
              '$0 production cost (just domain mastery and 15 mins).',
              'User feels it is an honest peer tip and watches through.',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:15 min',
        script: isEs
          ? 'Muestren por qué el UGC es 10 veces más rentable para pequeñas y medianas empresas: cuesta cero pesos y convierte 4 veces más.'
          : 'Show why UGC is 10x more profitable for businesses: zero extra budget and 4x conversion rates.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'FÓRMULA PASO A PASO' : 'STEP-BY-STEP FORMULA',
      title: isEs ? 'La Estructura de un Video UGC que Vende' : 'Anatomy of a High-Converting UGC Video',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Gancho Casual (0-3s)',
              desc: 'Cámara en mano o selfie: "Si estás buscando X pero no quieres que te pase Y, mira esto:"',
            },
            {
              number: '02',
              title: 'El Problema Real (3-15s)',
              desc: 'Explica la fricción común que sufren los compradores con las opciones baratas del mercado.',
            },
            {
              number: '03',
              title: 'Demostración en Manos (15-35s)',
              desc: 'Muestra el producto, la textura, la costura o la pantalla explicando por qué funciona.',
            },
            {
              number: '04',
              title: 'Puente a WhatsApp (35-45s)',
              desc: 'Llamado directo: "Comenta INFO si quieres que te asesoremos personalmente por WhatsApp".',
            },
          ]
        : [
            { number: '01', title: 'Casual Hook (0-3s)', desc: 'Handheld selfie: "If you want X without suffering Y, look at this:"' },
            { number: '02', title: 'Real Friction (3-15s)', desc: 'Highlight the common headaches with cheap alternatives.' },
            { number: '03', title: 'Hands-on Demo (15-35s)', desc: 'Showcase build quality, materials, or screen results.' },
            { number: '04', title: 'WhatsApp CTA (35-45s)', desc: 'Direct CTA: "Comment INFO to chat directly on WhatsApp".' },
          ],
      instructorNotes: {
        duration: '4:15 - 5:00 min',
        script: isEs
          ? 'Repasen los 4 pasos. Esta es la estructura que utilizarán para grabar sus primeros videos en la Semana 2.'
          : 'Review the 4 steps. This is the exact structure they will film in Week 2.',
      },
    },
    {
      id: 's06',
      type: 'challenge',
      tag: isEs ? 'CHECKPOINT DE ACCIÓN' : 'ACTION CHECKPOINT',
      title: isEs ? 'Misión 1.1.2: Tu Primer Guion Estilo UGC' : 'Mission 1.1.2: Your First UGC Script',
      challengeData: isEs
        ? {
            whatToDo: 'Elige 1 producto o servicio de tu negocio y redacta un guion UGC de 4 frases siguiendo la estructura casual de 4 pasos.',
            whatToDeliver: '1 Guion UGC listo para grabar en la Semana 2.',
            whereToSubmit: 'Canal de Discord de la cohorte o tu libreta de trabajo.',
            criteria: [
              'Gancho casual en primera persona ("Si estás buscando...")',
              'Mención de un dolor real del cliente',
              'Demostración visual con producto en mano',
              'Llamado con palabra clave hacia WhatsApp',
            ],
          }
        : {
            whatToDo: 'Pick 1 product or service and draft a 4-sentence UGC script using the 4-step casual formula.',
            whatToDeliver: '1 UGC script ready to film in Week 2.',
            whereToSubmit: 'Cohort Discord channel or personal workbook.',
            criteria: [
              'First-person casual hook',
              'Direct buyer friction mention',
              'Hands-on visual proof',
              'Keyword CTA directing to WhatsApp',
            ],
          },
      instructorNotes: {
        duration: '5:00 - 5:30 min',
        script: isEs
          ? 'Cierren felicitando a los alumnos por completar la Clase 1.1 e invítenlos a la Clase 1.2 sobre Contenido Escondido.'
          : 'Congratulate students on finishing Lesson 1.1 and guide them to Lesson 1.2.',
      },
    },
  ];

  return {
    id: 'm01-01-02-ugc-power',
    slug: 'm01-01-02-ugc-power',
    lessonId: 'm01-01',
    title: isEs ? '1.1.2 ¿Qué es UGC & Por Qué Vende Tanto?' : '1.1.2 What is UGC & Why It Converts',
    moduleTag: isEs ? 'SEMANA 1 · CLASE 1.1' : 'WEEK 1 · LESSON 1.1',
    estimatedMinutes: 5,
    slides,
  };
};
