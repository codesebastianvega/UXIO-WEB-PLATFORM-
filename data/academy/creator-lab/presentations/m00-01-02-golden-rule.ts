import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';
import { getWelcomeInstructorNotes } from './m00-01-notes';

export const getPresentationM000102 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';
  const notes = getWelcomeInstructorNotes(isEs);

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'La Regla de Oro: Progreso sobre Perfección' : 'The Golden Rule: Progress Over Perfection',
      subtitle: isEs
        ? 'Microclase 2 · Por qué 1 video publicado vale más que 10 guardados en borradores.'
        : 'Microclass 2 · Why 1 published video beats 10 saved in your drafts folder.',
      highlight: isEs ? 'Semana 0 · Inducción' : 'Week 0 · Induction',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&q=80',
      blockColor: '#FE385B',
      instructorNotes: notes.s01,
    },
    {
      id: 's02',
      type: 'steps',
      tag: 'ROADMAP',
      title: isEs ? 'Las 5 Semanas de Formación' : '5-Week Learning Roadmap',
      subtitle: isEs ? 'El camino paso a paso para construir tu motor de contenidos.' : 'The step-by-step path to build your content acquisition engine.',
      blockColor: '#FE385B',
      steps: isEs
        ? [
            {
              number: 'S1',
              title: 'Estrategia & Matriz',
              desc: 'Auditoría de activos de marca, cliente ideal y diseño de la matriz de 30 ideas comerciales.',
              detailData: {
                tag: 'SEMANA 01 // ESTRATEGIA',
                title: 'Semana 1: Encontrar el Oro Oculto en tu Negocio',
                subtitle: 'Dejar de improvisar qué decir y construir un calendario comercial de 30 días.',
                description: 'En esta primera semana desglosamos tu propuesta de valor, identificamos las 10 preguntas que tus clientes siempre hacen antes de comprar y estructuramos tus 5 pilares.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Planificación de matriz editorial orientada a dolor y solución comercial',
                highlights: ['Plantilla Notion / Sheet de Matriz 30D.', 'Definición de 5 pilares: Educativo, Demo, Caso Real, FAQ, Oferta.', 'Filtro de ideas: cada video resuelve 1 dolor específico.'],
                actionTip: 'Anota las 5 objeciones más frecuentes que te ponen tus clientes antes de pagar.',
              },
            },
            {
              number: 'S2',
              title: 'Grabación de Bolsillo',
              desc: 'Configuración de cámara del celular, iluminación natural, encuadres y banco de tomas B-roll.',
              detailData: {
                tag: 'SEMANA 02 // GRABACIÓN',
                title: 'Semana 2: Tu Celular como Estudio Broadcast',
                subtitle: 'Calibración óptica y técnicas para perder el miedo a hablar a cámara.',
                description: 'Aprenderás a colocar tu teléfono a la altura exacta de los ojos, usar la luz natural de una ventana para iluminarte gratis y grabar 30 tomas secundarias.',
                image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Iluminación natural frontal + celular a nivel de mirada',
                highlights: ['Ajuste de exposición y bloqueo AE/AF para evitar parpadeos.', 'Protocolo B-Roll: 30 clips de 5 segundos mostrando procesos.', 'Técnica de mirar al lente de la cámara, nunca a tu reflejo.'],
                actionTip: 'Coloca tu teléfono frente a una ventana y graba 3 tomas de tus manos trabajando.',
              },
            },
            {
              number: 'S3',
              title: 'Guion & Hooks',
              desc: 'Estructura de ganchos magnéticos en 3 segundos, ritmo verbal y formatos de alta retención.',
              detailData: {
                tag: 'SEMANA 03 // GUIONES',
                title: 'Semana 3: El Arte de Frenar el Scroll',
                subtitle: 'Si no atrapas en los primeros 3 segundos, los otros 40 segundos no existen.',
                description: 'Dominarás las 5 fórmulas de hooks probadas en Creator Lab: la pregunta incómoda, el error oculto, la demostración de velocidad y el contraste antes/después.',
                image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Estructuración de guiones de 45 segundos con retención vertical',
                highlights: ['50 plantillas de hooks rellenables para servicios y productos.', 'Pausas estratégicas y variación de tono de voz.', 'Cierre con llamada a la acción irresistible y palabra clave.'],
                actionTip: 'Escribe 3 variaciones de gancho para el mismo video y elige la de mayor impacto.',
              },
            },
            {
              number: 'S4',
              title: 'Edición Ágil & IA',
              desc: 'Edición rápida de 15 minutos en CapCut, subtítulos dinámicos y prompts para multiplicar ideas con IA.',
              detailData: {
                tag: 'SEMANA 04 // EDICIÓN',
                title: 'Semana 4: Edición en 15 Minutos sin Complicaciones',
                subtitle: 'Cortes de silencios, subtítulos automáticos y apoyo de Inteligencia Artificial.',
                description: 'Aprende el workflow de edición rápida para no pasar horas frente a la computadora. Corta los espacios en blanco, añade subtítulos legibles y usa prompts de IA.',
                image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Flujo de edición móvil en CapCut con subtítulos y zoom punches',
                highlights: ['Eliminación de silencios ("muletillas") con cortes secos.', 'Subtítulos automáticos con tipografía legible y colores UXIO.', 'Zoom in / zoom out en momentos clave para mantener la atención.'],
                actionTip: 'Importa tu último video a CapCut y elimina los primeros 2 segundos de silencio.',
              },
            },
            {
              number: 'S5',
              title: 'Embudos & Ventas',
              desc: 'Conversión directa a WhatsApp Business, guiones de cualificación y métricas comerciales.',
              detailData: {
                tag: 'SEMANA 05 // VENTAS',
                title: 'Semana 5: Monetización y Cierre de Clientes',
                subtitle: 'Convertir espectadores en chats de WhatsApp y prospectos en clientes que pagan.',
                description: 'El módulo culminante: conectar tus videos verticales con tu flujo de ventas por chat. Mensajes de bienvenida automáticos, preguntas de filtro y cierre de presupuestos.',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Canal de mensajería directa y cualificación por WhatsApp Business',
                highlights: ['Catálogo y respuestas rápidas en WhatsApp Business.', 'Guion de 3 preguntas para cualificar leads en 2 minutos.', 'Cálculo de ROI por cada video publicado.'],
                actionTip: 'Crea una respuesta rápida en WhatsApp Business para enviar tu catálogo en 1 toque.',
              },
            },
          ]
        : [
            { number: 'W1', title: 'Strategy', desc: 'Uncover brand assets and build a 30-day content matrix.' },
            { number: 'W2', title: 'Filming', desc: 'Master smartphone optics, B-roll shots, and lens confidence.' },
            { number: 'W3', title: 'Creation', desc: 'Structure 3-second hooks and high-retention vertical formats.' },
            { number: 'W4', title: 'Editing & AI', desc: '15-minute fast editing in CapCut and AI multiplication.' },
            { number: 'W5', title: 'Sales', desc: 'Turn views into qualified WhatsApp conversations and revenue.' },
          ],
      instructorNotes: notes.s04,
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'ACCIÓN INMEDIATA' : 'IMMEDIATE ACTION',
      title: isEs ? 'La Regla del 80/20 en Creación' : 'The 80/20 Creation Rule',
      subtitle: isEs ? 'El perfeccionismo es la forma más cara de procrastinar en redes.' : 'Perfectionism is the most expensive way to procrastinate on social media.',
      blockColor: '#FE385B',
      points: isEs
        ? [
            {
              label: '1. El 80% de Calidad es Suficiente',
              text: 'Tu cliente busca soluciones a sus problemas, no una película de Hollywood.',
              tag: 'Claridad',
              icon: 'CheckCircle2',
              detailData: {
                tag: 'REGLA 80/20 // CLARIDAD',
                title: 'El Mito de la Calidad de Cine',
                subtitle: 'El contenido que parece "demasiado producido" genera desconfianza en redes verticales.',
                description: 'Los videos con luz natural y audio nítido grabados desde el celular transmiten mayor cercanía y credibilidad que los comerciales de agencia de publicidad.',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Autenticidad y claridad de mensaje sobre producción compleja',
                highlights: ['Si el mensaje se escucha claro y se ve nítido, está listo.', 'No gastes semanas editando efectos especiales que nadie pidió.', 'La claridad del consejo es lo que genera guardados y compartidos.'],
                actionTip: 'Lanza tu video cuando sientas que está al 80% de tu estándar perfeccionista.',
              },
            },
            {
              label: '2. Publicar da Datos Reales',
              text: 'Solo el mercado te dirá qué temas conectan y qué videos generan preguntas de compra.',
              tag: 'Feedback',
              icon: 'BarChart3',
              detailData: {
                tag: 'REGLA 80/20 // DATOS',
                title: 'El Algoritmo es tu Laboratorio de Aprendizaje',
                subtitle: 'Un video en borradores tiene cero probabilidades de traerte un cliente nuevo.',
                description: 'Cada video publicado es un experimento con datos reales: retención en el segundo 3, porcentaje de visualización completa y número de mensajes directos.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Métricas de retención y conversión en tiempo real',
                highlights: ['Mira la curva de retención para saber en qué segundo cae el interés.', 'Apunta qué temas generaron más preguntas en comentarios.', 'Duplica los formatos que generaron más clics a tu enlace.'],
                actionTip: 'Publica hoy tu video y anota en 48 horas cuántas conversaciones generó.',
              },
            },
            {
              label: '3. La Maestría Requiere Volumen',
              text: 'Tus primeros 5 videos te darán la soltura que ninguna teoría te puede enseñar.',
              tag: 'Práctica',
              icon: 'Zap',
              detailData: {
                tag: 'REGLA 80/20 // PRÁCTICA',
                title: 'La Confianza Frente a Cámara se Entrena Grabando',
                subtitle: 'Nadie nace siendo un comunicador fluido; es una habilidad muscular.',
                description: 'Tu primer video probablemente te dará vergüenza en 6 meses, y eso es una excelente señal de crecimiento. Al grabar 5 videos seguidos, el miedo al lente desaparece.',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Práctica continua y soltura vocal frente al smartphone',
                highlights: ['Graba en bloques de 3 videos seguidos para aprovechar el calentamiento.', 'Habla como si le estuvieras explicando el tema a un amigo.', 'Celebra cada entrega completada como una victoria de tu negocio.'],
                actionTip: 'Programa 45 minutos en tu calendario exclusivamente para grabar tus primeros 3 clips.',
              },
            },
          ]
        : [
            { label: '1. 80% Quality is Plenty', text: 'Your clients want answers to their pain points, not a Hollywood blockbuster.', tag: 'Clarity', icon: 'CheckCircle2' },
            { label: '2. Publishing Delivers Data', text: 'Only real audience reactions reveal which hooks convert into sales questions.', tag: 'Feedback', icon: 'BarChart3' },
            { label: '3. Mastery Requires Volume', text: 'Your first 5 clips teach you more confidence than reading 10 theory books.', tag: 'Practice', icon: 'Zap' },
          ],
      instructorNotes: notes.s05,
    },
    {
      id: 's04',
      type: 'glossary',
      tag: isEs ? 'VOCABULARIO CLAVE' : 'KEY GLOSSARY',
      title: isEs ? 'Términos Clave del Programa' : 'Core Program Terms',
      subtitle: isEs ? 'Conceptos que escucharás a lo largo de las próximas semanas.' : 'Concepts you will hear throughout the upcoming weeks.',
      blockColor: '#FE385B',
      glossaryTerms: isEs
        ? [
            { term: 'B-Roll', definition: 'Tomas secundarias de apoyo (producto en uso, detalles o procesos) que dinamizan el ritmo.', example: 'Mostrar tus manos empacando un producto mientras hablas de tu servicio.', category: 'Grabación' },
            { term: 'Hook (Gancho)', definition: 'Los primeros 3 segundos de un video diseñados para frenar el scroll y captar la atención.', example: '"Si vendes servicios, este error te está costando 10 clientes al mes..."', category: 'Guion' },
            { term: 'Call to Action (CTA)', definition: 'Llamado explícito al espectador para dar el siguiente paso comercial.', example: '"Escribe la palabra GUIA en los comentarios para enviártela por DM."', category: 'Conversión' },
            { term: 'Lead Comercial', definition: 'Persona interesada que hace una pregunta concreta sobre tu precio o disponibilidad.', example: 'Un mensaje directo en WhatsApp: "Hola, vi tu video, ¿cuánto cuesta tu asesoría?"', category: 'Negocio' },
          ]
        : [
            { term: 'B-Roll', definition: 'Secondary cutaway footage (product in action, details, process) that adds rhythm.', example: 'Showing hands packaging an order while voiceover explains shipping.', category: 'Filming' },
            { term: '3-Second Hook', definition: 'The first 3 seconds crafted to stop vertical scrolling and capture attention.', example: '"If you sell services, this mistake costs you 10 clients monthly..."', category: 'Scripting' },
            { term: 'Call to Action (CTA)', definition: 'Explicit direction prompting the viewer to take the next business action.', example: '"Comment GUIDE below and I will send it to your DMs."', category: 'Conversion' },
            { term: 'Commercial Lead', definition: 'A prospect asking specific questions about pricing, booking, or availability.', example: 'A WhatsApp message asking: "Hello, saw your video, how do we book?"', category: 'Business' },
          ],
      instructorNotes: notes.s06,
    },
    {
      id: 's05',
      type: 'challenge',
      tag: isEs ? 'ENTREGABLE' : 'MILESTONE',
      title: isEs ? 'Reto 0: Ficha de Diagnóstico de Marca' : 'Challenge 0: Brand Diagnosis Sheet',
      subtitle: isEs ? 'Define tu objetivo comercial antes de empezar a grabar en la Semana 1.' : 'Declare your revenue target before filming begins in Week 1.',
      blockColor: '#FE385B',
      challengeData: {
        whatToDo: isEs
          ? 'Descarga la Ficha de Diagnóstico y responde las 3 preguntas sobre tu cliente ideal y meta de ventas.'
          : 'Download the Diagnosis Worksheet and answer the 3 questions on your customer and sales target.',
        whatToDeliver: isEs ? 'Enlace a tu documento público o texto pegado en el formulario de entregas del aula.' : 'Public worksheet link or text pasted into the classroom submission box.',
        whereToSubmit: isEs ? 'Aula Virtual UXIO' : 'UXIO Classroom',
        criteria: isEs
          ? ['Cliente ideal claramente definido.', 'Meta comercial cuantificable.', 'Identificación de 3 dolores del cliente.']
          : ['Clear ideal customer profile.', 'Quantifiable commercial target.', 'Identification of 3 customer pain points.'],
      },
      instructorNotes: notes.s07,
    },
  ];

  return {
    id: 'pres-m00-01-02',
    slug: 'm00-01-02-golden-rule',
    lessonId: 'm00-01',
    title: isEs ? 'Microclase 2: La Regla de Oro' : 'Microclass 2: The Golden Rule',
    moduleTag: isEs ? 'SEMANA 0 · MICROCLASE 2' : 'WEEK 0 · MICROCLASS 2',
    estimatedMinutes: 5,
    slides,
  };
};
