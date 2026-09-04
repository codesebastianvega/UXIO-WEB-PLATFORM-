import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM0102 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Tu Marca Tiene Contenido Escondido' : 'Your Brand Has Hidden Content',
      subtitle: isEs
        ? 'Módulo 1 · Aprende a documentar tus procesos y convertir dudas de WhatsApp en guiones de alta venta.'
        : 'Module 1 · Learn to document real workflows and turn WhatsApp FAQs into high-converting scripts.',
      highlight: isEs ? 'Semana 1 · Mapeo de Activos Ocultos' : 'Week 1 · Hidden Asset Mapping',
      imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1600&auto=format&fit=crop&q=80',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Clase 1.2! Hoy eliminamos para siempre el bloqueo de "no sé qué grabar". Vamos a extraer el contenido de oro que ya ocurre todos los días en tu negocio.'
          : 'Welcome to Lesson 1.2! Today we permanently eliminate creative block. We will uncover the goldmine of content happening inside your business daily.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 02 · 00:00 - 12:00 MIN',
      title: isEs
        ? 'No inventes contenido ficticio: documenta lo que ya haces todos los días.'
        : 'Do not invent scripted fiction: document what you already do every single day.',
      subtitle: isEs
        ? 'Lo que para ti es una tarea rutinaria y aburrida, para tu cliente ideal es un proceso fascinante que demuestra maestría.'
        : 'What feels like a routine chore to you is a fascinating demonstration of craftsmanship to your buyer.',
      highlight: isEs ? 'Documentar > Inventar' : 'Document > Invent',
      bgColor: '#FF7F07',
      instructorNotes: {
        duration: '1:00 - 3:00 min',
        script: isEs
          ? 'Este es el cambio mental más liberador para un creador de negocios. No tienes que armar un guión de Hollywood. Simplemente pon tu celular a grabar mientras haces tu trabajo real.'
          : 'This is the most liberating shift for founders. You do not need Hollywood scripts. Just set your camera down while executing your actual work.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'LAS 3 TOMAS DE ORO' : 'THE 3 GOLDEN SHOTS',
      title: isEs ? 'El Backstage que Vende sin Esfuerzo' : 'The Backstage That Sells Effortlessly',
      subtitle: isEs
        ? 'Los 3 encuadres que elevan el valor percibido de tus productos y servicios.'
        : '3 camera setups that immediately elevate the perceived value of your offer.',
      points: isEs
        ? [
            {
              label: '1. El Antes y Después',
              text: 'Muestra la materia prima o el plano inicial caótico antes de convertirse en el entregable impecable.',
              detailData: {
                tag: 'TOMA 01 // TRANSFORMACIÓN',
                title: 'El Contraste Visual que Detiene el Scroll',
                description: 'El cerebro humano busca resolución y orden. Ver cómo transformas un problema en una solución acabada retiene la atención hasta el último segundo.',
                imageCaption: 'Antes vs Después · Impacto Instantáneo',
                image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Genera curiosidad sobre el resultado final', 'Demuestra el esfuerzo y la técnica aplicada'],
                actionTip: 'Graba 5 segundos del estado inicial antes de empezar cualquier trabajo.',
              },
            },
            {
              label: '2. El Macro Shot (Detalle)',
              text: 'Graba a 10 cm de tus manos tecleando, mezclando, cosiendo o ajustando herramientas.',
              detailData: {
                tag: 'TOMA 02 // MAESTRÍA',
                title: 'El Valor del Detalle Artesanal',
                description: 'Los planos cerrados transmiten precisión, higiene y dedicación, justificando de inmediato tarifas y precios profesionales.',
                imageCaption: 'Plano Detalle · Percepción Premium',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Texturas, reflejos y precisión en primer plano', 'Audio ambiental de trabajo (ASMR táctico)'],
                actionTip: 'Limpia el lente del celular y acércate a 15 cm con buena iluminación lateral.',
              },
            },
            {
              label: '3. El Error Corregido',
              text: 'Muestra cuando algo sale mal y explica cómo tu equipo lo soluciona con honestidad radical.',
              detailData: {
                tag: 'TOMA 03 // TRANSPARENCIA',
                title: 'Honestidad Radical que Crea Fanáticos',
                description: 'Los negocios que admiten y muestran cómo resuelven imprevistos generan 3 veces más lealtad que las marcas que fingen ser perfectas.',
                imageCaption: 'Solución Real · Confianza Total',
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Demuestra capacidad de respuesta y garantía', 'Humaniza la marca ante situaciones difíciles'],
                actionTip: 'Explica qué aprendiste del error y qué protocolo creaste para evitarlo.',
              },
            },
          ]
        : [
            {
              label: '1. Before & After',
              text: 'Show the raw materials or chaotic starting point before transforming into the finished product.',
            },
            {
              label: '2. The Macro Shot',
              text: 'Film 10 cm away from your hands typing, mixing, assembling or calibrating tools.',
            },
            {
              label: '3. The Corrected Mistake',
              text: 'Show when something goes wrong and explain your solution with radical transparency.',
            },
          ],
      instructorNotes: {
        duration: '3:00 - 8:00 min',
        script: isEs
          ? 'Hagan énfasis en que estas 3 tomas de B-Roll se pueden grabar en menos de 15 minutos durante su jornada habitual.'
          : 'Emphasize that these 3 B-roll shots can be captured in under 15 minutes during normal business operations.',
      },
    },
    {
      id: 's04',
      type: 'steps',
      tag: isEs ? 'MÉTODO DE CONVERSIÓN' : 'CONVERSION METHOD',
      title: isEs ? 'De Duda de WhatsApp a Video Viral' : 'From WhatsApp FAQ to Viral Video',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Caza la Duda',
              desc: 'Identifica una pregunta repetitiva en tus chats de ventas.',
              detailData: {
                tag: 'PASO 01 // MINERÍA',
                title: 'Identifica las 5 Preguntas Más Frecuentes',
                description: 'Abre tu WhatsApp y busca las dudas que tus clientes siempre hacen antes de pagar: precios, garantías, tiempos y compatibilidad.',
                imageCaption: 'Dudas Reales · Ganchos Reales',
                highlights: ['"¿Por qué cobran más que X?"', '"¿Cuánto tarda el envío?"'],
                actionTip: 'Crea una nota en tu celular llamada "Banco de Preguntas de Clientes".',
              },
            },
            {
              number: '02',
              title: 'Gancho Incómodo',
              desc: 'Formula el inicio: "Un cliente me preguntó ayer por qué cobramos el doble..."',
              detailData: {
                tag: 'PASO 02 // HOOK',
                title: 'La Pregunta Incómoda como Imán',
                description: 'Empezar citando a un cliente real genera intriga inmediata y sitúa la conversación en el terreno de los hechos.',
                imageCaption: 'Gancho Directo · 0 a 3 Segundos',
                highlights: ['Cero rodeos', 'Tono conversacional y seguro'],
                actionTip: 'Graba el gancho mirando fijamente al lente con energía.',
              },
            },
            {
              number: '03',
              title: 'Respuesta Maestra',
              desc: 'Explica en 30 segundos la razón técnica, materiales y garantía.',
              detailData: {
                tag: 'PASO 03 // AUTORIDAD',
                title: 'La Demostración de Calidad',
                description: 'Explica con calma y precisión por qué tu solución vale cada peso, mostrando el producto en tus manos.',
                imageCaption: 'Valor Técnico · Certeza Total',
                highlights: ['Muestra el material o entregable', 'Habla de durabilidad y respaldo'],
                actionTip: 'Usa una analogía sencilla para explicar conceptos técnicos.',
              },
            },
            {
              number: '04',
              title: 'Puente a WhatsApp',
              desc: 'Cierra: "Si quieres ver el catálogo completo, comenta la palabra INFO".',
              detailData: {
                tag: 'PASO 04 // CTA',
                title: 'Llamado a la Acción de Baja Fricción',
                description: 'Invita al espectador a comentar una palabra clave sencilla para recibir atención 1 a 1 por WhatsApp.',
                imageCaption: 'Conversión Directa · Cero Fricción',
                highlights: ['Palabras cortas: GUIA, INFO, PRECIO', 'Automatización de respuesta directa'],
                actionTip: 'Responde los primeros 10 comentarios en menos de 15 minutos.',
              },
            },
          ]
        : [
            { number: '01', title: 'Mine the FAQ', desc: 'Find a recurring question in your sales inbox.' },
            { number: '02', title: 'Uncomfortable Hook', desc: 'Start: "A buyer asked why we charge twice as much..."' },
            { number: '03', title: 'Master Answer', desc: 'Explain materials, process, and warranty in 30 seconds.' },
            { number: '04', title: 'WhatsApp Bridge', desc: 'Close: "Comment CATALOG for instant access on WhatsApp".' },
          ],
      instructorNotes: {
        duration: '8:00 - 12:00 min',
        script: isEs
          ? 'Este circuito de 4 pasos es la fórmula más predecible para monetizar TikTok e Instagram Reels sin invertir un solo dólar en pauta.'
          : 'This 4-step sequence is the most reliable way to monetize vertical feeds without spending ad dollars.',
      },
    },
    {
      id: 's05',
      type: 'challenge',
      tag: isEs ? 'EJERCICIO PRÁCTICO' : 'PRACTICAL EXERCISE',
      title: isEs ? 'Misión 1.2: Las 5 Dudas de Oro' : 'Mission 1.2: 5 Golden FAQs',
      challengeData: isEs
        ? {
            whatToDo: 'Abre tu WhatsApp Business y redacta 5 ganchos en formato "Pregunta Incómoda -> Respuesta Maestra".',
            whatToDeliver: '5 ganchos escritos listos para incorporar a tu Matriz de 30 Ideas.',
            whereToSubmit: 'Subir al canal de Discord de la cohorte o tu libreta de trabajo.',
            criteria: [
              'Al menos 1 objeción de precio',
              'Al menos 1 duda de proceso o tiempos de entrega',
              'Llamado a la acción con palabra clave hacia WhatsApp',
            ],
          }
        : {
            whatToDo: 'Open your sales chat and draft 5 hooks in the "Uncomfortable Question -> Master Answer" format.',
            whatToDeliver: '5 written hooks ready for your 30-Idea Content Matrix.',
            whereToSubmit: 'Submit in cohort Discord or personal worksheet.',
            criteria: [
              'At least 1 pricing objection',
              'At least 1 turnaround / delivery FAQ',
              'Keyword CTA directed to WhatsApp',
            ],
          },
      instructorNotes: {
        duration: '12:00 - 14:00 min',
        script: isEs
          ? 'Motiven a los alumnos a completar sus 5 dudas de oro. En la siguiente clase las integraremos en la Matriz de 30 Ideas de Contenido.'
          : 'Encourage students to finalize their 5 golden FAQs. In the next lesson, we integrate them into the 30-Idea Content Matrix.',
      },
    },
  ];

  return {
    id: 'm01-02-hidden-content',
    slug: 'm01-02-hidden-content',
    lessonId: 'm01-02',
    title: isEs ? 'Clase 1.2 — Tu Marca Tiene Contenido Escondido' : 'Lesson 1.2 — Your Brand Has Hidden Content',
    moduleTag: isEs ? 'SEMANA 1 · ESTRATEGIA' : 'WEEK 1 · STRATEGY',
    estimatedMinutes: 14,
    slides,
  };
};
