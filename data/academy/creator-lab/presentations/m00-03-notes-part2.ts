import { InstructorNotes } from './types';

export const getLiveLabInstructorNotesPart2 = (isEs: boolean): Record<string, InstructorNotes> => {
  if (!isEs) {
    return {
      s10: {
        duration: '45:00 - 48:00 min',
        script: `Block 3: Live Practical Workshop.\n\n3-minute recess! Grab a glass of water and open your Notion or notebook. In 3 minutes, we begin our 3 guided exercises to write your positioning formula live.`,
        keyActions: ['Play light background music. Let students stretch and prepare notes.'],
      },
      s11: {
        duration: '48:00 - 55:00 min',
        script: `Workshop 1: Core Offer Diagnosis.\n\nIf your offer is vague, no video will save it. Define: 1. The exact outcome your client receives. 2. The decision maker who holds the budget. 3. Your average price point ($100, $500, $1k+).`,
        keyActions: ['Ask students to type their core price point in the chat.'],
      },
      s12: {
        duration: '55:00 - 62:00 min',
        script: `Workshop 2: 3 Real Pains vs. Generic Filler.\n\nPeople buy to put out an urgent fire. Map out: 1. Money/time bleed. 2. Past frustrations with other services. 3. The cost of doing nothing for 6 months.`,
        keyActions: ['Audit 2 pain points from the chat.'],
      },
      s13: {
        duration: '62:00 - 70:00 min',
        script: `Workshop 3: Your 1-Sentence Positioning Promise.\n\n"I help [Target Client] achieve [Desired Outcome] without [Biggest Frustration]."\n\nWrite your sentence in the chat right now; I will audit 3 live!`,
        keyActions: ['Review and refine 3 student formulas live on screen.'],
      },
      s14: {
        duration: '70:00 - 72:00 min',
        script: `Block 4: Community Pact, Weekly Rhythm & Sunday Challenge.\n\nWhat separates those who finish from those who quit? Accountability and clear operating rhythm.`,
        keyActions: ['Transition to cohort accountability.'],
      },
      s15: {
        duration: '72:00 - 76:00 min',
        script: `The 3 Cohort Commitments:\n1. Sunday deadline at 11:59 PM.\n2. Peer encouragement on Discord/WhatsApp.\n3. Zero fear of imperfection.\n\nType "I COMMIT" in the chat if you agree to these rules.`,
        keyActions: ['Check chat for "I Commit" confirmations.'],
      },
      s16: {
        duration: '76:00 - 80:00 min',
        script: `Your weekly cadence:\n- Monday: 10-min video lessons + worksheets.\n- Wednesday: Live Q&A and unblocking.\n- Friday: 45-min filming & CapCut editing.\n- Sunday: Upload milestone before midnight.`,
        keyActions: ['Walk through weekly schedule.'],
      },
      s17: {
        duration: '80:00 - 83:00 min',
        script: `Spectator Mode vs UXIO Creator.\n\nDo not just watch videos; execute the worksheets and film your clips. You joined this cohort to generate real revenue.`,
        keyActions: ['Inspire decisive action.'],
      },
      s18: {
        duration: '83:00 - 85:00 min',
        script: `Our 3 support channels: UXIO Classroom portal for slides and quizzes, WhatsApp VIP group for instant session links, Discord for script reviews.`,
        keyActions: ['Remind students to bookmark the classroom.'],
      },
      s19: {
        duration: '85:00 - 87:00 min',
        script: `Sunday Challenge 0: Brand Diagnosis Sheet.\n\nFill out your worksheet, calibrate your phone to 30 FPS, and submit in the portal before Sunday 11:59 PM.`,
        keyActions: ['Show submission portal rubric.'],
      },
      s20: {
        duration: '87:00 - 95:00 min',
        script: `Block 5: Open Microphones: Live Q&A.\n\nRaise your hand on Google Meet or type in chat. Let us audit your business 1-on-1!`,
        keyActions: ['Unmute students and give rapid strategic feedback.'],
      },
      s21: {
        duration: '95:00 - 98:00 min',
        script: `See you all on Monday 8:00 AM for Module 1: Business to Content. Progress over perfection!`,
        keyActions: ['High energy wave and closing smile.'],
      },
    };
  }

  return {
    s10: {
      duration: '45:00 - 48:00 min',
      script: `Llegamos al Bloque 3: Taller Práctico en Vivo.\n\n¡Momento de receso de 3 minutos! Vayan por un vaso de agua fresca, estiren los hombros y abran su Notion o su libreta de notas. En exactamente 3 minutos volvemos para redactar en vivo su oferta estrella y su promesa de posicionamiento. ¡Nos vemos en 3 minutos!`,
      keyActions: [
        'Pon música suave de fondo de 3 minutos.',
        'Da tiempo a los estudiantes para alistar Notion o papel y lápiz.',
      ],
    },
    s11: {
      duration: '48:00 - 55:00 min',
      script: `Arrancamos con el Taller 1: Diagnóstico de tu Oferta Estrella.\n\nMiren esta regla de oro: Si tu oferta no es clara, ningún video en el mundo la va a vender.\n\nQuiero que respondan en su libreta 3 preguntas esenciales:\n1. ¿Qué vendes exactamente? (Define la transformación final, no el proceso técnico).\n2. ¿Quién tiene la billetera? (Identifica al tomador de decisiones con capacidad de pago).\n3. ¿Cuál es tu ticket promedio? ($50, $200, $1.000 USD).\n\nEscriban en el chat ahora mismo el precio promedio de su producto o servicio principal.`,
      keyActions: [
        'Pide al chat que escriban su precio en dólares.',
        'Explica por qué tener claro el ticket define la estructura del llamado a la acción.',
      ],
    },
    s12: {
      duration: '55:00 - 62:00 min',
      script: `Vamos con el Taller 2: Los 3 Dolores Reales vs Dolores de Relleno.\n\nLa gente no compra características bonitas; compra para apagar un fuego que les duele hoy.\n\nIdentifiquen estos 3 dolores en su cliente ideal:\n- Dolor 1: ¿Cuánto dinero o tiempo están perdiendo hoy por hacer las cosas mal?\n- Dolor 2: ¿Qué soluciones intentaron antes que los frustraron o los hicieron sentir engañados?\n- Dolor 3: ¿Qué costo brutal pagarán si no resuelven este problema en los próximos 6 meses?\n\nEsos 3 dolores son la materia prima de los ganchos de sus primeros 10 videos.`,
      keyActions: [
        'Audita en vivo 2 ejemplos de dolor que envíen al chat.',
        'Enseña a transformar un dolor abstracto ("quiero vender más") en un dolor concreto ("tengo 5 citas vacías esta semana").',
      ],
    },
    s13: {
      duration: '62:00 - 70:00 min',
      script: `Llegamos al Taller 3: Tu Promesa Única en 1 Frase.\n\nEsta es la fórmula maestra que pondrán en la biografía de su perfil y que dirán en sus videos de autoridad:\n\n"Ayudo a [Cliente Ideal] a lograr [Resultado Deseado] sin [Mayor Frustración]."\n\nEjemplo para servicios: "Ayudo a odontólogos a llenar su agenda semanal sin pagar agencias costosas".\nEjemplo para educación: "Ayudo a emprendedores a vender con su celular sin gastar en cámaras de cine".\n\nEscriban su frase en el chat ahora mismo. ¡Voy a auditar 3 frases en vivo con ustedes!`,
      keyActions: [
        'Selecciona 3 frases del chat y corrígelas en vivo en la pantalla.',
        'Felicita a los alumnos que logren una síntesis contundente.',
      ],
    },
    s14: {
      duration: '70:00 - 72:00 min',
      script: `Bloque 4: Pacto Comunitario, Ritmo Semanal y Reto 0.\n\n¿Saben qué separa al estudiante que termina con 30 videos y clientes cerrados del que abandona a la mitad? La disciplina del sistema y el acompañamiento de su cohorte.\n\nVamos a revisar las 3 reglas del juego para asegurar que el 100% de los aquí presentes llegue a la meta de certificación.`,
      keyActions: [
        'Eleva el tono a inspirador y de liderazgo.',
      ],
    },
    s15: {
      duration: '72:00 - 76:00 min',
      script: `Los 3 Compromisos Innegociables de la Cohorte 01:\n\n1. Entrega Dominical Puntual: Cada domingo a las 11:59 PM se cierra el portal para recibir la retroalimentación de la mesa docente.\n2. Apoyo Mutuo: Comentamos, compartimos y nos damos impulso en los canales de WhatsApp y Discord.\n3. Cero Miedo al Error: En UXIO Academy celebramos los tropiezos porque son la única forma de entrenar el músculo de la comunicación.\n\nEscriban "ACEPTO EL PACTO" en el chat si están 100% comprometidos con su propio crecimiento.`,
      keyActions: [
        'Observa las confirmaciones en el chat.',
        'Crea un ambiente de hermandad y pertenencia a una cohorte exclusiva.',
      ],
    },
    s16: {
      duration: '76:00 - 80:00 min',
      script: `Este es su ciclo semanal de trabajo durante las próximas 5 semanas:\n\n- Lunes: Se abren 2 microclases de 10-15 minutos en el aula virtual con sus plantillas descargables.\n- Miércoles: Espacio de Q&A en Discord y WhatsApp para destrabar guiones y ganchos.\n- Viernes: Bloque de 45 minutos para grabar con su celular y editar en CapCut.\n- Domingo: Subida del entregable al aula virtual antes de las 11:59 PM para calificación oficial.`,
      keyActions: [
        'Aclara que el tiempo requerido es de solo 3 a 4 horas por semana bien aprovechadas.',
      ],
    },
    s17: {
      duration: '80:00 - 83:00 min',
      script: `Modo Espectador vs Creador UXIO.\n\nEl espectador solo mira videos, acumula diplomas teóricos y nunca presiona el botón rojo de grabar. El Creador UXIO completa su Ficha de Diagnóstico, graba con luz de ventana aunque sienta nervios, entrega puntual y cierra clientes reales.\n\nUstedes no están aquí para coleccionar cursos; están aquí para construir un negocio sostenible.`,
      keyActions: [
        'Llamado a la acción con energía alta y convicción.',
      ],
    },
    s18: {
      duration: '83:00 - 85:00 min',
      script: `Nuestros 3 canales oficiales de acompañamiento:\n\n1. Aula Virtual UXIO: Su centro de mando con lecciones, diapositivas y portal de retos.\n2. Grupo de WhatsApp VIP: Solo para avisos prioritarios y recordatorios de enlaces en vivo.\n3. Discord y Mesa Docente: El canal para revisar borradores de guiones y hacer networking entre fundadores.`,
      keyActions: [
        'Recuerda guardar el enlace del aula en marcadores favoritos.',
      ],
    },
    s19: {
      duration: '85:00 - 87:00 min',
      script: `Misión para este Domingo: Reto 0 — Ficha de Diagnóstico de Marca.\n\nDeben descargar la plantilla en el aula virtual, definir su oferta estrella, sus 3 dolores de cliente y calibrar la cámara de su celular a 30 FPS. Tienen plazo hasta este domingo a las 11:59 PM para desbloquear el acceso al Módulo 1.`,
      keyActions: [
        'Explica la rúbrica pedagógica de calificación sobre 5.0.',
      ],
    },
    s20: {
      duration: '87:00 - 95:00 min',
      script: `Bloque 5: Micrófonos Abiertos: Ronda de Preguntas & Respuestas en Vivo.\n\n¡Llegó el momento! Levanten la mano en Google Meet o escriban su pregunta en el chat. Voy a abrir micrófonos para auditar sus casos 1 a 1 en tiempo real. ¿Quién levanta la primera mano?`,
      keyActions: [
        'Abre micrófonos a los estudiantes que levanten la mano.',
        'Responde con consejos tácticos, específicos y accionables.',
      ],
    },
    s21: {
      duration: '95:00 - 98:00 min',
      script: `¡Muchísimas gracias a todos por su energía y compromiso en esta sesión de Kickoff!\n\nNos vemos el lunes a las 8:00 AM para la apertura del Módulo 1: De Negocio a Contenido. Recuerden nuestro lema: ¡Progreso sobre perfección!\n\n¡Un abrazo gigante para todos y nos vemos en el aula virtual!`,
      keyActions: [
        'Sonrisa grande, saludo final a la cámara y cierre con música de salida.',
      ],
    },
  };
};
