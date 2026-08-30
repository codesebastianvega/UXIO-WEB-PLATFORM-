import { InstructorNotes } from './types';

export const getWelcomeInstructorNotes = (isEs: boolean): Record<string, InstructorNotes> => {
  if (!isEs) {
    return {
      s01: {
        duration: '0:00 - 0:45 min',
        script: `Welcome everyone to Cohort 01 of UXIO Creator Lab! I am Sebastián Vega.\n\nOver the next 5 weeks, we are building a predictable client acquisition engine using lean video content.`,
        keyActions: ['Look straight into the camera lens with positive energy and open posture.'],
        studentQA: [{ question: 'Do I need prior video editing experience?', answer: 'No, we start from zero with CapCut step by step.' }],
      },
      s02: {
        duration: '0:45 - 1:45 min',
        script: `Your smartphone is already a 4K powerhouse. What matters is 3-second retention and direct conversion paths.`,
      },
      s03: {
        duration: '1:45 - 2:45 min',
        script: `Amateurs depend on spontaneous inspiration; structured creators use a 30-day business matrix.`,
      },
      s04: {
        duration: '2:45 - 3:30 min',
        script: `Here is our 5-week progression: Strategy, B-roll Filming, High-Retention Scripting, CapCut Editing, and WhatsApp Sales Conversion.`,
      },
      s05: {
        duration: '3:30 - 4:00 min',
        script: `Your first action is Challenge 0: complete the Brand Diagnosis worksheet and submit your public link.`,
      },
      s06: {
        duration: '4:00 - 4:45 min',
        script: `Master these 5 industry terms: B-roll, 3-second hook, conversion CTA, qualified lead, and lean setup.`,
      },
      s07: {
        duration: '4:45 - 5:00 min',
        script: `Remember our golden rule: Progress over Perfection. See you in lesson 0.2!`,
      },
    };
  }

  return {
    s01: {
      duration: '0:00 - 0:45 min',
      script: `¡Hola a todos y bienvenidos a la Cohorte 01 de UXIO Creator Lab! Soy Sebastián Vega.

Quiero felicitarte por dar este paso. La mayoría de emprendedores y profesionales independientes tienen un producto o servicio extraordinario, pero sus redes parecen un catálogo aburrido o un desierto sin respuestas.

Durante estas 5 semanas no te voy a enseñar a bailar ni a perseguir likes vacíos: te voy a entregar la metodología exacta para convertir la atención de redes en conversaciones reales de WhatsApp y ventas cerradas.

Prepárate, porque desde hoy dejas de ser un creador improvisado para convertirte en un creador con sistema comercial.`,
      keyActions: [
        'Mirar directo al lente de la cámara con energía, sonrisa genuina y postura abierta.',
        'Mantener las manos visibles para enfatizar la bienvenida.',
      ],
      studentQA: [
        {
          question: '¿Qué pasa si no tengo experiencia previa grabando?',
          answer: 'Todo el programa está diseñado para construir tu confianza desde la primera toma de 10 segundos, empezando con planos B-Roll sin hablar a cámara.',
        },
      ],
    },
    s02: {
      duration: '0:45 - 1:45 min',
      script: `El primer gran mito que vamos a destruir es creer que necesitas una cámara de cine de $3,000 dólares.

Mírame a los ojos: la atención en TikTok, Instagram y YouTube Shorts se decide en los primeros 3 segundos. Al algoritmo no le importa cuántos megapíxeles tiene tu sensor; le importa si la persona se quedó pegada a la pantalla o si hizo scroll.

1. Tienes en el bolsillo una cámara 4K que supera a los equipos con los que se filmaban documentales hace 15 años.
2. Contenido vs Publicidad: nadie entra a redes a ver comerciales fríos. La gente entra a aprender, entretenerse o resolver un dolor.
3. Conversión Directa: cada video que publiques debe tener un puente claro hacia tu WhatsApp o canal de cierre.`,
      keyActions: [
        'Sostener tu celular en la mano y mostrarlo a cámara como símbolo de poder accesible.',
      ],
      studentQA: [
        {
          question: '¿Y si mi celular es Android de gama media?',
          answer: 'Con buena luz natural de ventana y lente limpio, cualquier teléfono de los últimos 4 años rinde con calidad comercial impecable.',
        },
      ],
    },
    s03: {
      duration: '1:45 - 2:45 min',
      script: `Veamos este contraste en pantalla.

A la izquierda tienes al Creador Amateur: graba cuando le llega la inspiración divina, improvisa lo que va a decir, tiene un audio con eco inentendible y al final se queja de que el algoritmo no lo muestra.

A la derecha está el Sistema UXIO: trabajas con una matriz mensual de 30 ideas categorizadas en 5 pilares comerciales. Graba tomas con luz natural de ventana, limpia el lente y mide su éxito por cuántos mensajes de prospectos cualificados recibe en WhatsApp al mes.

No queremos ser "famosos en internet"; queremos tener un negocio rentable y sostenible.`,
      keyActions: [
        'Hacer contraste con el tono de voz: tono dubitativo al leer la izquierda, y tono de convicción al leer la derecha.',
      ],
    },
    s04: {
      duration: '2:45 - 3:30 min',
      script: `Este es tu plan de vuelo semana a semana:

• Semana 1: Estrategia, donde descubriremos las 30 ideas ocultas en las preguntas que ya te hacen tus clientes.
• Semana 2: Grabación práctica, donde perderás el miedo y filmaremos juntos tu banco de 30 clips B-Roll.
• Semana 3: Creación y Guiones, dominando la fórmula del gancho de 3 segundos y la estructura H-P-S-A.
• Semana 4: Edición ágil en CapCut y multiplicación con Inteligencia Artificial.
• Semana 5: Embudos de conversión a WhatsApp, donde cerraremos el ciclo para transformar vistas en ventas reales.`,
      keyActions: [
        'Señalar con la mano cada uno de los 5 hitos en pantalla de forma dinámica.',
      ],
    },
    s05: {
      duration: '3:30 - 4:00 min',
      script: `Tu primera misión práctica es el Reto 0: Ficha de Diagnóstico de Marca.

No puedes salir a construir un puente si no sabes a dónde quieres llegar. En esta ficha vas a definir tres elementos vitales:
1. Tu cliente ideal con nombre, dolor principal y objeción típica de compra.
2. Tu meta cuantificable para las próximas 5 semanas (por ejemplo: 'Conseguir 15 prospectos cualificados por WhatsApp').
3. Los 3 dolores más profundos que tu producto o servicio soluciona.

Una vez la completes en Notion o Google Docs, copia el enlace con acceso público y entrégalo en la plataforma para recibir mi feedback personalizado.`,
      keyActions: [
        'Enfatizar que la entrega es ÚNICAMENTE mediante enlace público para asegurar orden y trazabilidad.',
      ],
    },
    s06: {
      duration: '4:00 - 4:45 min',
      script: `En esta diapositiva tenemos los 5 conceptos fundamentales del gremio que usaremos todos los días en Creator Lab. Permíteme explicártelos al detalle:

1. B-Roll: Son los planos de apoyo donde muestras tus manos trabajando, tu pantalla o el entorno de tu negocio sin hablar a cámara. Te salvan cuando no quieres mostrar tu rostro y multiplican la retención por 3.
2. Hook (Gancho): Son los primeros 3 segundos de tu video. Si tu gancho es débil, nadie verá los 40 segundos restantes. Aquí aplicaremos ganchos de contradicción, errores comunes y revelaciones directas.
3. CTA (Llamado a la Acción): La orden clara al final del video. Nada de "sígueme para más". Usaremos "comenta la palabra GUÍA y te envío el PDF por mensaje directo".
4. Lead Comercial: Un contacto calificado que pasa de ser un espectador anónimo a una persona con nombre y teléfono en tu WhatsApp preguntando por tu oferta.
5. Setup Accesible: Grabar con lo que tienes: tu celular a la altura de los ojos, luz frontal de ventana y micrófono solapero de $15 dólares. Cero excusas técnicas.`,
      keyActions: [
        'Hacer clic en cada una de las 5 cards para abrir el modal interactivo si deseas mostrar el ejemplo visual o tip a los alumnos.',
      ],
    },
    s07: {
      duration: '4:45 - 5:00 min',
      script: `Cerramos esta clase de inducción con nuestra consigna de oro: "Progreso sobre Perfección".

El primer video que grabes probablemente te dará pena dentro de un año, y eso es una excelente señal de que habrás crecido. Lo único imperdonable es quedarse paralizado sin empezar.

Completa tu Reto 0, únete a la comunidad de WhatsApp y nos vemos en la lección 0.2 para configurar la cámara de tu celular como un profesional.`,
      keyActions: [
        'Sonreír, despedirse a cámara con la mano y mantener la mirada fija 2 segundos antes de cortar la grabación.',
      ],
    },
  };
};
