import { InstructorNotes } from './types';

export const getLiveLabInstructorNotes = (isEs: boolean): Record<string, InstructorNotes> => {
  if (!isEs) {
    return {
      s01: {
        duration: '0:00 - 3:00 min',
        script: `Welcome everyone to the official Live Kickoff of Creator Lab Cohort 01! Tonight we align expectations and start turning your smartphone into a sales machine.`,
        keyActions: ['Wide shot smile. Greet students live by name from the chat.'],
      },
      s02: {
        duration: '3:00 - 5:00 min',
        script: `Block 1: Welcome, Myths & The UXIO Manifesto. Today we break limiting beliefs about expensive gear and vanity followers.`,
        keyActions: ['Introduce Block 1 and set the energy for the session.'],
      },
      s03: {
        duration: '5:00 - 12:00 min',
        script: `Let us do our live check-in. Drop your name, city, and what you sell in the chat. We want to see every niche represented.`,
        keyActions: ['Read 4-5 student responses out loud and validate their business niches.'],
      },
      s04: {
        duration: '12:00 - 18:00 min',
        script: `Myth #1: You need a $5,000 camera. False. Good natural light and a clear message will outperform expensive gear any day.`,
        keyActions: ['Show your own phone on screen as proof of simplicity.'],
      },
      s05: {
        duration: '18:00 - 24:00 min',
        script: `Myth #2: You need 100k followers to make money. We want 100 paying customers with wallets, not hollow vanity metrics.`,
        keyActions: ['Contrast vanity views with direct WhatsApp conversations.'],
      },
      s06: {
        duration: '24:00 - 28:00 min',
        script: `The UXIO Manifesto: Attention with Intent. 3-second hook, high-density value, and a frictionless bridge to WhatsApp.`,
        keyActions: ['Emphasize the 3-part formula.'],
      },
      s07: {
        duration: '28:00 - 30:00 min',
        script: `Block 2: The WhatsApp Funnel Strategy. How to turn a 60-second video into closed sales conversations.`,
        keyActions: ['Transition into conversion mechanics.'],
      },
      s08: {
        duration: '30:00 - 38:00 min',
        script: `The WhatsApp Funnel Anatomy: Reel -> Keyword in comment -> WhatsApp chat -> 1-on-1 human conversion.`,
        keyActions: ['Walk through the 4 steps of the conversion loop.'],
      },
      s09: {
        duration: '38:00 - 45:00 min',
        script: `The B-Roll Bank: Film for 1 hour, produce content for an entire month without daily burnout.`,
        keyActions: ['Show examples of hands working and desk setups.'],
      },
      s10: {
        duration: '45:00 - 48:00 min',
        script: `Block 3: Practical Workshop. 3-minute break! Grab some water and your notebook. We are writing your offer live.`,
        keyActions: ['Play light background music and let students grab water and open Notion.'],
      },
      s11: {
        duration: '48:00 - 55:00 min',
        script: `Workshop 1: Core Offer Diagnosis. Ask yourself: What exact problem do I solve and who is paying for it?`,
        keyActions: ['Ask students to type their core offer price in the chat.'],
      },
      s12: {
        duration: '55:00 - 62:00 min',
        script: `Workshop 2: 3 Real Pains vs. Generic Filler. People buy to fix an urgent pain, not just for interesting features.`,
        keyActions: ['Break down pain points vs feature lists.'],
      },
      s13: {
        duration: '62:00 - 70:00 min',
        script: `Workshop 3: Your 1-Sentence Core Promise: I help [Target] achieve [Outcome] without [Pain].`,
        keyActions: ['Audit 2 students formulas live in the chat.'],
      },
      s14: {
        duration: '70:00 - 72:00 min',
        script: `Block 4: Community Pact, Rhythm & Challenge 0. Let us align our weekly accountability rules.`,
        keyActions: ['Introduce the cohort accountability framework.'],
      },
      s15: {
        duration: '72:00 - 76:00 min',
        script: `The 3 Cohort Commitments: Sunday submissions before 11:59 PM, positive peer feedback, and zero fear of making mistakes.`,
        keyActions: ['Ask everyone to type "I Commit" in the chat.'],
      },
      s16: {
        duration: '76:00 - 80:00 min',
        script: `Our weekly cadence: Mondays learn, Wednesdays Q&A, Fridays film & edit, Sundays submit.`,
        keyActions: ['Clarify weekly rhythms and review timeline.'],
      },
      s17: {
        duration: '80:00 - 83:00 min',
        script: `Spectator Mode vs. UXIO Creator. You are here to execute, publish, and close clients.`,
        keyActions: ['Motivate action and accountability.'],
      },
      s18: {
        duration: '83:00 - 85:00 min',
        script: `Our official support channels: Classroom portal, WhatsApp VIP group, and Discord.`,
        keyActions: ['Remind students where to find worksheets and links.'],
      },
      s19: {
        duration: '85:00 - 87:00 min',
        script: `Week 0 Mission: Brand Diagnosis Form due Sunday at 11:59 PM.`,
        keyActions: ['Explain grading criteria and rubric.'],
      },
      s20: {
        duration: '87:00 - 95:00 min',
        script: `Block 5: Open Microphones: Live Q&A. Raise your hand in Google Meet or write your question in the chat!`,
        keyActions: ['Unmute students and give rapid 1-on-1 strategic feedback.'],
      },
      s21: {
        duration: '95:00 - 98:00 min',
        script: `See you all on Monday 8:00 AM for Week 1: Business to Content. Progress over perfection!`,
        keyActions: ['High energy sign-off and group wave.'],
      },
    };
  }

  return {
    s01: {
      duration: '0:00 - 3:00 min',
      script: `¡Buenas noches y bienvenidos a todos al Kickoff Oficial de Creator Lab Cohorte 01!\n\nHoy arranca oficialmente el camino para transformar tu celular en tu mejor canal de ventas.`,
      keyActions: ['Plano general sonriente. Saluda en vivo a los alumnos presentes leyendo sus nombres en el chat.'],
      studentQA: [
        {
          question: '¿Las sesiones quedan grabadas si no puedo asistir?',
          answer: 'Sí, todas las grabaciones se publican pocas horas después en el aula virtual.',
        },
      ],
    },
    s02: {
      duration: '3:00 - 5:00 min',
      script: `Bloque 1: Bienvenida, Mitos y el Manifiesto UXIO. Hoy desmontamos las excusas de equipos caros y seguidores de vanidad.`,
      keyActions: ['Presenta el Bloque 1 y marca el ritmo dinámico de la sesión.'],
    },
    s03: {
      duration: '5:00 - 12:00 min',
      script: `Vamos con nuestro check-in en vivo. Escriban en el chat ahora mismo: Su nombre, ciudad en la que están y qué producto o servicio venden hoy.`,
      keyActions: ['Lee en voz alta 4 o 5 respuestas del chat, validando los nichos y rompiendo el hielo.'],
    },
    s04: {
      duration: '12:00 - 18:00 min',
      script: `Mito 1: Necesitas una cámara de $5.000 USD. Falso. Una buena luz de ventana y un mensaje claro le ganan a cualquier equipo de cine mal utilizado.`,
      keyActions: ['Muestra tu propio celular a cámara para reforzar la simplicidad.'],
    },
    s05: {
      duration: '18:00 - 24:00 min',
      script: `Mito 2: Necesitas 100k seguidores para vender. Queremos 100 clientes ideales con billetera y dolor real, no números vanidosos que no pagan facturas.`,
      keyActions: ['Contrasta vistas vacías contra conversaciones reales de compra en WhatsApp.'],
    },
    s06: {
      duration: '24:00 - 28:00 min',
      script: `El Manifiesto UXIO: Atención con Intención. 3 segundos de gancho visual, 40 segundos de autoridad y valor, y un puente claro hacia WhatsApp.`,
      keyActions: ['Explica la estructura de los 3 bloques en un video de 60 segundos.'],
    },
    s07: {
      duration: '28:00 - 30:00 min',
      script: `Bloque 2: La Estrategia de Conversión y el Embudo a WhatsApp. Cómo transformar un video corto en clientes reales.`,
      keyActions: ['Introduce el Bloque 2 señalando la arquitectura de monetización.'],
    },
    s08: {
      duration: '30:00 - 38:00 min',
      script: `La Anatomía del Embudo a WhatsApp: Video corto -> Palabra clave en comentarios -> Chat directo -> Cierre humano en 1 a 1.`,
      keyActions: ['Señala cada paso del circuito en pantalla.'],
    },
    s09: {
      duration: '38:00 - 45:00 min',
      script: `El Banco de B-Roll: Graba 1 hora de tomas de apoyo y produce contenido para todo el mes sin quemarte grabando a diario.`,
      keyActions: ['Muestra las 3 tomas maestras que todos deben tener en el celular.'],
    },
    s10: {
      duration: '45:00 - 48:00 min',
      script: `Bloque 3: Taller Práctico en Vivo. ¡Receso de 3 minutos! Vayan por agua fresca y abran Notion o su libreta. ¡Arrancamos a escribir su oferta!`,
      keyActions: ['Pon música suave de fondo de 3 minutos para que los alumnos traigan agua y preparen notas.'],
    },
    s11: {
      duration: '48:00 - 55:00 min',
      script: `Taller 1: Diagnóstico de tu Oferta Estrella. Pregúntate: ¿Qué problema resuelves exactamente y quién está dispuesto a pagar por ello?`,
      keyActions: ['Pide a los alumnos que escriban en el chat el precio de su oferta principal.'],
    },
    s12: {
      duration: '55:00 - 62:00 min',
      script: `Taller 2: Los 3 Dolores Reales vs Dolores de Relleno. La gente compra para apagar un fuego urgente, no por ver características bonitas.`,
      keyActions: ['Desglosa ejemplos de dolores de dinero, tiempo y frustración.'],
    },
    s13: {
      duration: '62:00 - 70:00 min',
      script: `Taller 3: Tu Promesa Única en 1 Frase. Fórmula: "Ayudo a [Cliente Ideal] a lograr [Resultado] sin [Mayor Frustración]".`,
      keyActions: ['Audita en vivo 2 o 3 frases enviadas por los alumnos al chat.'],
    },
    s14: {
      duration: '70:00 - 72:00 min',
      script: `Bloque 4: Pacto Comunitario, Ritmo Semanal y Reto 0. Cómo aseguramos que el 100% de la cohorte termine y se certifique.`,
      keyActions: ['Presenta el marco de disciplina comunitaria.'],
    },
    s15: {
      duration: '72:00 - 76:00 min',
      script: `Los 3 Compromisos Innegociables: Entrega dominical antes de las 11:59 PM, apoyo mutuo en la comunidad y cero miedo al error.`,
      keyActions: ['Pide que todos escriban "Acepto el compromiso" en el chat.'],
    },
    s16: {
      duration: '76:00 - 80:00 min',
      script: `El Ciclo Semanal: Lunes aprendes con microclases, Miércoles resolvemos dudas, Viernes grabas y editas, y Domingo entregas.`,
      keyActions: ['Repasa el calendario de entregas de la cohorte.'],
    },
    s17: {
      duration: '80:00 - 83:00 min',
      script: `Modo Espectador vs Creador UXIO. Vinieron aquí a ejecutar, publicar y generar clientes.`,
      keyActions: ['Eleva la energía y el llamado a la acción disciplinada.'],
    },
    s18: {
      duration: '83:00 - 85:00 min',
      script: `Canales oficiales de soporte: Aula Virtual para tareas y PDFs, WhatsApp VIP para alertas y Discord para networking.`,
      keyActions: ['Recuerda dónde encontrar las plantillas y los enlaces.'],
    },
    s19: {
      duration: '85:00 - 87:00 min',
      script: `Misión de Semana 0: Diligenciar la Ficha de Diagnóstico antes del domingo a las 11:59 PM.`,
      keyActions: ['Explica la rúbrica de calificación sobre 5.0.'],
    },
    s20: {
      duration: '87:00 - 95:00 min',
      script: `Bloque 5: Micrófonos Abiertos: Ronda de Preguntas & Respuestas en Vivo. ¡Levanten la mano en Google Meet o escriban en el chat!`,
      keyActions: ['Abre micrófonos a los alumnos y da retroalimentación estratégica 1 a 1.'],
    },
    s21: {
      duration: '95:00 - 98:00 min',
      script: `¡Nos vemos el lunes a las 8:00 AM para el inicio de la Semana 1: De Negocio a Contenido! ¡Progreso sobre perfección!`,
      keyActions: ['Cierre con energía alta y saludo final en cámara.'],
    },
  };
};
