import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM050101 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's1',
      type: 'title',
      tag: isEs ? 'MICROCLASE 5.1.1' : 'MICROCLASS 5.1.1',
      title: isEs ? 'Anatomía de un CTA Magnético & Sin Fricción' : 'Anatomy of a Frictionless Magnetic CTA',
      subtitle: isEs
        ? 'Cómo pedir micro-compromisos de 1 solo paso que multipliquen las conversaciones en lugar de ahuyentar a los clientes.'
        : 'How to ask for single-step micro-commitments that trigger conversations without repelling buyers.',
      highlight: isEs ? 'Llamados a la Acción Efectivos ➔' : 'Effective Calls to Action ➔',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? 'Bienvenidos a la Semana 5. Hoy aprenderemos a convertir la atención de nuestros videos en conversaciones reales que cierran ventas.'
          : 'Welcome to Week 5. Today we will learn how to turn video attention into real conversations that close sales.',
      },
    },
    {
      id: 's2',
      type: 'concept',
      tag: isEs ? 'LA PSICOLOGÍA DEL COMPROMISO' : 'PSYCHOLOGY OF COMMITMENT',
      title: isEs ? 'El Error del CTA Desesperado vs. El Micro-Compromiso' : 'The Desperate CTA Mistake vs. Micro-Commitment',
      subtitle: isEs
        ? 'Pedir una compra directa en un video vertical genera fricción. En redes se avanza paso a paso.'
        : 'Demanding immediate purchase in vertical video triggers friction. Social selling moves step by step.',
      points: isEs
        ? [
            {
              label: 'La Regla del Objetivo Único',
              text: '1 solo llamado a la acción por video. Pedir like, guardar, comentar y click en bio satura al cerebro y paraliza la acción.',
              tag: 'Regla 1',
            },
            {
              label: 'Palabra Clave de Baja Resistencia',
              text: 'Pide una sola palabra en comentarios ("Comenta PRECIO", "Escribe GUIA"). El usuario no tiene que redactar nada complejo.',
              tag: 'Regla 2',
            },
            {
              label: 'El Doble Estímulo (Voz + Texto)',
              text: 'Pronuncia la palabra clave en los últimos 4 segundos mientras aparece un sticker o banner animado en la zona segura.',
              tag: 'Regla 3',
            },
          ]
        : [
            {
              label: 'Single Goal Rule',
              text: 'Exactly 1 CTA per video. Asking to like, save, comment, and check bio overwhelms cognitive bandwidth.',
              tag: 'Rule 1',
            },
            {
              label: 'Low-Friction Keyword',
              text: 'Prompt a single word in comments ("Comment PRICE", "Drop GUIDE"). Users do not want to compose long texts.',
              tag: 'Rule 2',
            },
            {
              label: 'Dual Sensory Trigger',
              text: 'Speak the keyword in the final 4 seconds while showing a high-contrast banner in the safe zone.',
              tag: 'Rule 3',
            },
          ],
      instructorNotes: {
        duration: '1:00 - 3:00 min',
        script: isEs
          ? 'Expliquen por qué pedir un comentario de 1 palabra multiplica la tasa de respuesta por 8 frente a mandar al link de la bio.'
          : 'Explain why 1-word comment prompts generate 8x more response than bio link redirects.',
      },
    },
    {
      id: 's3',
      type: 'comparison',
      tag: isEs ? 'COMPARATIVA DE CONVERSIÓN' : 'CONVERSION COMPARISON',
      title: isEs ? 'CTA Tradicional vs. CTA UXIO de Conversación' : 'Traditional CTA vs. UXIO Conversational CTA',
      comparison: isEs
        ? {
            beforeLabel: 'CTA TRADICIONAL (0.4% CONVERSIÓN)',
            before: [
              '"Visita el enlace de mi biografía para comprar"',
              '"Comenta qué opinas, dale like y compártelo"',
              'Sin palabra clave específica',
              'El usuario tiene que salir del feed y buscar un enlace',
            ],
            afterLabel: 'CTA UXIO (8.2% CONVERSIÓN)',
            after: [
              '"Comenta PRECIO y te mando el catálogo a tu DM"',
              'Un solo objetivo claro y ultra rápido',
              'Palabra clave en mayúsculas visible en pantalla',
              'La automatización entrega el link en 3 segundos al inbox',
            ],
          }
        : {
            beforeLabel: 'TRADITIONAL CTA (0.4% CONVERSION)',
            before: [
              '"Click link in bio to buy right now"',
              '"Like, comment, share and save this video"',
              'No specific trigger keyword',
              'Forces user to leave feed and hunt down link',
            ],
            afterLabel: 'UXIO CTA (8.2% CONVERSION)',
            after: [
              '"Comment PRICE and I will DM you the catalog"',
              'One single effortless goal',
              'Prominent keyword banner in safe area',
              'Automation delivers link to inbox in 3 seconds',
            ],
          },
      instructorNotes: {
        duration: '3:00 - 4:00 min',
        script: isEs
          ? 'Muestren cómo la fricción cero en el feed es lo que hace que la gente interactúe sin dudarlo.'
          : 'Highlight how zero-friction actions keep users engaging without second thoughts.',
      },
    },
    {
      id: 's4',
      type: 'challenge',
      tag: isEs ? 'MISIÓN PRÁCTICA' : 'PRACTICAL MISSION',
      title: isEs ? 'Misión 5.1.1: Tu Palabra Clave Comercial' : 'Mission 5.1.1: Your Commercial Keyword',
      subtitle: isEs
        ? 'Define la palabra clave exacta que utilizarás en el cierre de tu próximo video comercial.'
        : 'Choose the exact trigger keyword you will use at the end of your next commercial video.',
      points: isEs
        ? [
            {
              label: 'Paso 1: Elige tu Palabra',
              text: 'Palabras cortas y directas: "PRECIO", "INFO", "AUDITORIA", "PLAN", "GUIA".',
            },
            {
              label: 'Paso 2: Diseña el Sticker',
              text: 'Crea un banner en CapCut o Canva con fondo negro y texto en Coral UXIO (#FE385B).',
            },
            {
              label: 'Paso 3: Ensaya el Audio',
              text: 'Prueba decirlo en menos de 4 segundos: "Comenta PRECIO y te mando los detalles completos al privado".',
            },
          ]
        : [
            {
              label: 'Step 1: Choose Keyword',
              text: 'Short, memorable terms: "PRICE", "AUDIT", "PLAN", "GUIDE", "START".',
            },
            {
              label: 'Step 2: Design Banner',
              text: 'Create a black background pill with UXIO Coral text (#FE385B) in CapCut or Canva.',
            },
            {
              label: 'Step 3: Rehearse Audio',
              text: 'Practice the 4s sign-off: "Drop PRICE below and I will send the full breakdown to your DMs".',
            },
          ],
      instructorNotes: {
        duration: '4:00 - 5:00 min',
        script: isEs
          ? 'Pidan que cada alumno escriba su palabra clave en los comentarios de la lección antes de pasar a la siguiente.'
          : 'Encourage students to post their trigger keyword in comments before moving forward.',
      },
    },
  ];

  return {
    id: 'm05-01-01-call-to-actions',
    slug: 'm05-01-01-call-to-actions',
    lessonId: 'm05-01',
    title: isEs ? 'Anatomía de un CTA Magnético & Sin Fricción' : 'Anatomy of a Frictionless Magnetic CTA',
    moduleTag: isEs ? 'SEMANA 5 · LECCIÓN 5.1' : 'WEEK 5 · LESSON 5.1',
    estimatedMinutes: 5,
    slides,
  };
};
