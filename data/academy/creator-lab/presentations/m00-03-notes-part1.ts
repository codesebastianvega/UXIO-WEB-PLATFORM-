import { InstructorNotes } from './types';

export const getLiveLabInstructorNotesPart1 = (isEs: boolean): Record<string, InstructorNotes> => {
  if (!isEs) {
    return {
      s01: {
        duration: '0:00 - 3:00 min',
        script: `Good evening everyone and welcome to the official Live Kickoff of Creator Lab Cohort 01!\n\nTonight we eliminate the myth of the studio. In the next 90 minutes, we align your offer, your camera, and your pipeline to start turning 60-second vertical videos into qualified inbound clients. Let's make this happen!`,
        keyActions: ['Wide shot smile. High energy welcome. Greet 3-4 attendees live from the chat.'],
        studentQA: [{ question: 'Will this session be recorded?', answer: 'Yes, full 4K replay will be in the classroom within 2 hours.' }],
      },
      s02: {
        duration: '3:00 - 5:00 min',
        script: `Block 1: Welcome, Belief Busting & The UXIO Manifesto.\n\nWhy do 90% of creators quit within 6 months? Because they play the vanity game. Tonight we shift from chasing random likes to building an intentional sales asset.`,
        keyActions: ['Transition energy to focus. Emphasize business intention.'],
      },
      s03: {
        duration: '5:00 - 12:00 min',
        script: `Let's do our live cohort check-in right now!\n\nDrop in the chat: 1. Your exact niche. 2. What you sell. 3. Your 5-week revenue or client goal. I want to see every single business represented in the chat.`,
        keyActions: ['Read 4 student responses out loud. Validate their pricing and niche.'],
      },
      s04: {
        duration: '12:00 - 18:00 min',
        script: `Myth #1: The $5,000 Cinema Rig.\n\nYou do not need a RED camera or expensive cinema lights. Your audience buys based on message clarity and sound quality, not sensor megapixels. Your phone at 30 FPS with side window light beats an overcomplicated studio every time.`,
        keyActions: ['Hold up your phone to camera as live proof of simplicity.'],
      },
      s05: {
        duration: '18:00 - 24:00 min',
        script: `Myth #2: The 100k Followers Trap.\n\nFollowers do not pay invoices. We don't want 100,000 teenagers watching for free entertainment; we want 50 to 100 qualified decision makers with pain and purchasing power writing directly to your WhatsApp.`,
        keyActions: ['Contrast hollow views with real bank deposits.'],
      },
      s06: {
        duration: '24:00 - 28:00 min',
        script: `The UXIO Manifesto: Attention with Intent.\n\n3 seconds of visual hook to stop the scroll, 40 seconds of actionable authority without filler, and a frictionless keyword bridge directly into WhatsApp. That is our entire formula.`,
        keyActions: ['Break down the 3-part timeline on your fingers.'],
      },
      s07: {
        duration: '28:00 - 30:00 min',
        script: `Block 2: The WhatsApp Funnel Strategy & B-Roll Bank.\n\nHow do we turn a short 60-second video into a closed client without spending thousands on paid ads? Let's break down the architecture.`,
        keyActions: ['Set stage for funnel architecture.'],
      },
      s08: {
        duration: '30:00 - 38:00 min',
        script: `The 4-Step Conversion Circuit:\n1. Short vertical clip on Reels/TikTok.\n2. Keyword comment triggering DM micro-commitment.\n3. Pre-filled WhatsApp conversation.\n4. Consultative 1-on-1 closing.\nNotice how there is zero friction at any point.`,
        keyActions: ['Trace the 4 steps on screen with the telestrator tool.'],
      },
      s09: {
        duration: '38:00 - 45:00 min',
        script: `The B-Roll Bank: Film for 1 hour, produce content for an entire month!\n\nShot 1: Hands working. Shot 2: Ambient desk medium shot. Shot 3: Macro product or screen deliverables. With these 3 shots in your camera roll, you can script 30 voiceover videos without filming daily.`,
        keyActions: ['Show examples of hands working on desk.'],
      },
    };
  }

  return {
    s01: {
      duration: '0:00 - 3:00 min',
      script: `¡Buenas noches a todos y bienvenidos oficialmente al Kickoff en Vivo de Creator Lab Cohorte 01!\n\nQuiero que respiren profundo y se feliciten por estar aquí conectados. Hoy derribamos de una vez por todas la excusa de "no tengo el equipo adecuado" o "me da pena hablar a la cámara". En los próximos 90 minutos vamos a alinear exactamente su mentalidad, su oferta estrella y su teléfono para construir un canal predecible de ventas por video vertical.\n\n¡Escriban un "LISTO" en el chat si están listos para despegar!`,
      keyActions: [
        'Plano general con sonrisa amplia y energía alta.',
        'Saluda en vivo mencionando nombres de alumnos que escriban en el chat.',
        'Marca un tono cercano, profesional y de liderazgo inspirador.',
      ],
      studentQA: [
        {
          question: '¿La sesión queda grabada si se me cae el internet?',
          answer: 'Sí, la grabación completa en alta definición estará disponible en el aula virtual en menos de 2 horas.',
        },
      ],
    },
    s02: {
      duration: '3:00 - 5:00 min',
      script: `Entramos al Bloque 1: Bienvenida, Mitos y el Manifiesto UXIO.\n\n¿Por qué el 90% de los creadores fracasa y abandona antes de los 6 meses? No es por falta de talento, es porque juegan al juego equivocado: persiguen likes vacíos y bailes de moda en vez de estructurar un activo de adquisición comercial.\n\nHoy vamos a desmontar las 2 creencias más costosas y a sembrar el Manifiesto UXIO: Atención con Intención.`,
      keyActions: [
        'Cambia el tono a reflexivo y contundente.',
        'Enfatiza la palabra "Intención" con las manos frente al pecho.',
      ],
    },
    s03: {
      duration: '5:00 - 12:00 min',
      script: `Hagamos nuestro check-in oficial en vivo. Quiero que todos abran el chat y escriban exactamente 3 cosas:\n\n1. ¿Cuál es tu nicho o industria exacta?\n2. ¿Qué producto o servicio vendes hoy y cuál es tu precio promedio?\n3. ¿Cuál es tu meta de ventas o clientes para estas 5 semanas de cohorte?\n\nLos voy a estar leyendo en vivo para conocer cada uno de sus modelos de negocio.`,
      keyActions: [
        'Lee en voz alta entre 4 y 6 respuestas del chat.',
        'Valida sus nichos en vivo: "Excelente nicho odontología", "Muy buen ticket consultoría fiscal".',
        'Haz sentir a los estudiantes escuchados y parte de una comunidad élite.',
      ],
      studentQA: [
        {
          question: '¿Qué pasa si tengo dos negocios diferentes?',
          answer: 'Enfócate en tu oferta estrella durante estas 5 semanas. El sistema que aprendas lo replicarás después en el segundo negocio.',
        },
      ],
    },
    s04: {
      duration: '12:00 - 18:00 min',
      script: `Mito #1: "Necesito una cámara Sony de $5.000 USD y un estudio profesional para verme serio".\n\nFalso total. Miren mi celular: cualquier smartphone de los últimos 4 años tiene un sensor capaz de grabar a 1080p o 4K a 30 cuadros por segundo. Tu cliente potencial no compra porque tengas un lente de $2.000 dólares; compra porque tu mensaje es claro, tu luz es suave y tu audio se escucha impecable.\n\nUna ventana de tu casa y un micrófono de $15 dólares le ganan a un estudio mal utilizado el 100% de las veces.`,
      keyActions: [
        'Muestra tu smartphone en la mano como prueba de simplicidad táctica.',
        'Abre el modal de detalle para mostrar el contraste de encuadres.',
      ],
    },
    s05: {
      duration: '18:00 - 24:00 min',
      script: `Mito #2: "Necesito 100.000 seguidores para que esto sea rentable".\n\nLas métricas de vanidad no pagan el arriendo ni las nóminas de tu empresa. Hay creadores con 80.000 seguidores que tienen $0 en la cuenta porque su audiencia solo busca entretenimiento gratuito.\n\nEn UXIO Academy no buscamos viralidad ciega. Queremos que 500 personas calificadas con dolor real y capacidad de pago vean tu video, y que 10 de ellas te escriban a WhatsApp para comprarte. ¡Eso es un negocio!`,
      keyActions: [
        'Contrasta con fuerza las vistas de vanidad vs conversaciones de WhatsApp.',
        'Pide al chat que escriban "Calidad sobre Cantidad".',
      ],
    },
    s06: {
      duration: '24:00 - 28:00 min',
      script: `Aquí tienen los 3 pilares del Manifiesto UXIO: Atención con Intención.\n\n1. Gancho Visual (0 a 3 segundos): Detén el scroll con movimiento y una promesa audaz. Cero introducciones lentas.\n2. Autoridad y Valor (3 a 45 segundos): Da la solución directa, sin rodeos teóricos. Demuestra que eres el especialista.\n3. Puente de Conversión (45 a 60 segundos): Llama a una acción simple con una palabra clave como "GUIA" o "ASESORIA" para moverlos a WhatsApp.`,
      keyActions: [
        'Cuenta los 3 bloques con los dedos.',
        'Usa el botón de abrir detalle en cada tarjeta para ilustrar los ejemplos visuales.',
      ],
    },
    s07: {
      duration: '28:00 - 30:00 min',
      script: `Pasamos al Bloque 2: La Arquitectura del Embudo a WhatsApp y el Banco de B-Roll.\n\n¿Y si un video de 60 segundos fuera todo lo que necesitas para activar una conversación de compra? Vamos a ver el circuito exacto para transformar desconocidos en prospectos que te escriben con la tarjeta lista.`,
      keyActions: [
        'Transición de energía hacia estrategia de conversión pura.',
      ],
    },
    s08: {
      duration: '30:00 - 38:00 min',
      script: `Miren este circuito de 4 pasos:\n\nPaso 1: Tu video vertical en TikTok y Reels ataca el dolor de tu cliente.\nPaso 2: Le pides que comente una palabra clave. El algoritmo detecta engagement masivo y te posiciona mejor.\nPaso 3: El usuario llega a tu WhatsApp con un mensaje prellenado demostrando interés genuino.\nPaso 4: Entablas una conversación humana consultiva, presentas tu oferta y cierras la venta.\n\nCero fricción de páginas web lentas o formularios de 10 campos.`,
      keyActions: [
        'Usa el puntero o lápiz para resaltar el flujo de paso 1 a paso 4.',
        'Explica la tasa de apertura del 98% de WhatsApp.',
      ],
    },
    s09: {
      duration: '38:00 - 45:00 min',
      script: `El secreto de productividad: El Banco de B-Roll.\n\nNo tienen que peinarse ni arreglarse todos los días para grabar. Dediquen 1 hora el viernes a grabar 3 tipos de tomas:\n1. Manos trabajando o tecleando.\n2. Plano medio en su escritorio con luz natural.\n3. Detalle de sus productos o entregables en pantalla.\n\nCon esos 30 clips en su galería, pueden grabar la voz en off en 5 minutos y tener contenido para todo el mes.`,
      keyActions: [
        'Enfatiza cómo esto elimina el agotamiento de grabar a diario.',
      ],
    },
  };
};
