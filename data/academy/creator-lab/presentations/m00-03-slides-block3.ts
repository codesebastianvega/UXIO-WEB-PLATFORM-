import { SlideData } from './types';
import { getLiveLabInstructorNotes } from './m00-03-notes';

export const getLiveLabBlock3 = (isEs: boolean): SlideData[] => {
  const notes = getLiveLabInstructorNotes(isEs);

  return [
    {
      id: 's10',
      type: 'statement',
      tag: isEs ? 'BLOQUE 03 · 45:00 - 70:00 MIN' : 'BLOCK 03 · 45:00 - 70:00 MIN',
      title: isEs
        ? '¿Puedes describir tu oferta estrella en una sola frase?'
        : 'Can you describe your core offer in a single sentence?',
      subtitle: isEs
        ? '[☕ Receso de 3 min] Ve por agua y alista tu Notion o cuaderno. ¡Arrancamos el taller práctico en vivo!'
        : '[☕ 3-Min Break] Grab water and get your notebook ready. Starting our live hands-on workshop!',
      highlight: isEs ? 'Taller Práctico · 3 Ejercicios Guiados' : 'Practical Workshop · 3 Guided Exercises',
      bgColor: '#09090B',
      blockColor: '#09090B',
      auroraColors: ['#09090B', '#1A1A2E', '#16213E'],
      instructorNotes: notes.s10,
    },
    {
      id: 's11',
      type: 'concept',
      tag: isEs ? 'TALLER EN VIVO 01' : 'LIVE WORKSHOP 01',
      title: isEs ? 'Taller 1: Diagnóstico de tu Oferta Estrella' : 'Workshop 1: Core Offer Diagnosis',
      subtitle: isEs
        ? 'Claridad antes de grabar: Si tu oferta no es clara, ningún video la va a vender.'
        : 'Clarity before filming: If your offer is vague, no video will save it.',
      blockColor: '#09090B',
      points: isEs
        ? [
            {
              label: '¿Qué vendes exactamente?',
              text: 'Define el resultado tangible que tu cliente recibe (no el proceso técnico).',
              tag: 'Resultado',
              icon: 'Sparkles',
              detailData: {
                tag: 'TALLER 01 // RESULTADO',
                title: 'Vender la Transformación, No la Herramienta',
                subtitle: 'Tu cliente no compra 5 sesiones de Zoom; compra dejar de sentir dolor o ganar dinero.',
                description: 'Desglosa el beneficio final: "Diseñamos tu tienda online para vender en automático" en vez de "Te configuro Shopify y WooCommerce".',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Enfoque en la entrega de resultados tangibles y medibles',
                highlights: ['Habla del estado final deseado de tu cliente.', 'Elimina jerga técnica que confunde al comprador.', 'Cuantifica el impacto (tiempo ahorrado o dinero).'],
                actionTip: 'Escribe tu servicio como un titular de periódico centrado en el beneficio.',
              },
            },
            {
              label: '¿Quién tiene la billetera?',
              text: 'Identifica al tomador de decisiones dispuesto y con capacidad de pago.',
              tag: 'Comprador',
              icon: 'Users',
              detailData: {
                tag: 'TALLER 01 // COMPRADOR',
                title: 'El Tomador de Decisiones con Presupuesto',
                subtitle: 'No le hables al usuario final si quien paga es el dueño de la empresa.',
                description: 'En servicios B2B le hablas al CEO o director de operaciones; en servicios B2C le hablas a la persona con dolor agudo y tarjeta lista.',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Identificación del perfil del cliente tomador de decisión',
                highlights: ['Nivel de ingresos y urgencia de solución.', 'Canales donde pasa más tiempo.', 'Su mayor objeción antes de pagar.'],
                actionTip: 'Nombra a tu cliente ideal en 1 frase: "Dueños de restaurantes con más de 10 empleados".',
              },
            },
            {
              label: '¿Cuál es tu ticket promedio?',
              text: 'Establece tu precio claro ($50, $200, $1.000 USD) para calcular tu meta.',
              tag: 'Precio',
              icon: 'CheckCircle2',
              detailData: {
                tag: 'TALLER 01 // TICKET',
                title: 'Estructura de Precios y Metas Realistas',
                subtitle: 'Tener seguridad en tu precio se transmite directamente en la mirada frente a cámara.',
                description: 'Cuando dudas de tu tarifa, el cliente lo percibe en tu tono de voz. Establece tu precio estándar y el paquete de mayor margen comercial.',
                image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Definición de precios de paquetes y propuestas comerciales',
                highlights: ['Ticket accesible ($50 - $150) para volumen rápido.', 'Ticket medio ($300 - $800) para servicios especializados.', 'Ticket alto ($1.000+) para consultoría.'],
                actionTip: 'Calcula cuántos clientes necesitas este mes para duplicar tu facturación actual.',
              },
            },
          ]
        : [
            { label: 'What do you sell?', text: 'Define the tangible outcome your client receives.', tag: 'Outcome', icon: 'Sparkles' },
            { label: 'Who holds the wallet?', text: 'Identify the decision maker with purchasing power.', tag: 'Buyer', icon: 'Users' },
            { label: 'What is your price?', text: 'Set your clear price to calculate your goal.', tag: 'Pricing', icon: 'CheckCircle2' },
          ],
      instructorNotes: notes.s11,
    },
    {
      id: 's12',
      type: 'concept',
      tag: isEs ? 'TALLER EN VIVO 02' : 'LIVE WORKSHOP 02',
      title: isEs ? 'Taller 2: Los 3 Dolores Reales vs. Dolores de Relleno' : 'Workshop 2: 3 Real Pains vs. Generic Filler',
      subtitle: isEs
        ? 'La gente no compra por características; compra para apagar un dolor urgente.'
        : 'Audiences do not buy features; they buy to put out an urgent fire.',
      blockColor: '#09090B',
      points: isEs
        ? [
            {
              label: 'Dolor 1: Pérdida de Dinero / Tiempo',
              text: '¿Qué están haciendo mal hoy que les cuesta horas o plata?',
              tag: 'Fricción',
              icon: 'Clock',
              detailData: {
                tag: 'DOLORES // FRICCIÓN ECONÓMICA',
                title: 'La Hemorragia de Recursos de tu Cliente',
                subtitle: 'El gancho más potente en video es mostrar cuánto dinero o tiempo pierden sin saberlo.',
                description: 'Ejemplo: "Si estás pagando $500 en anuncios sin un video de prueba social, estás tirando el 80% de tu presupuesto". Eso despierta alerta inmediata.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Identificación de costos ocultos y cuellos de botella',
                highlights: ['Horas perdidas en tareas manuales repetitivas.', 'Clientes perdidos por respuestas lentas.', 'Presupuesto quemado en estrategias viejas.'],
                actionTip: 'Calcula cuántas horas a la semana le ahorra tu servicio a tu cliente.',
              },
            },
            {
              label: 'Dolor 2: Frustración y Confusión',
              text: '¿Qué han intentado antes que no les funcionó?',
              tag: 'Obstáculo',
              icon: 'ShieldCheck',
              detailData: {
                tag: 'DOLORES // FRUSTRACIÓN PREVIA',
                title: 'El Historial de Intentos Fallidos',
                subtitle: 'Tu cliente ya probó otras soluciones y se sintió estafado o abrumado.',
                description: 'Cuando mencionas los errores de otras metodologías, te posicionas como el aliado honesto que entiende su experiencia previa.',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Empatía con los obstáculos y frustraciones del cliente',
                highlights: ['Cursos genéricos que no aplicaban a su negocio.', 'Promesas mágicas que no trajeron clientes.', 'Sistemas complejos que nadie supo operar.'],
                actionTip: 'Pregúntate: ¿Qué es lo que más odia tu cliente de tu competencia?',
              },
            },
            {
              label: 'Dolor 3: Miedo a Quedar Atrás',
              text: '¿Qué pasa si no resuelven esto en los próximos 6 meses?',
              tag: 'Urgencia',
              icon: 'Sparkles',
              detailData: {
                tag: 'DOLORES // COSTE DE INACCIÓN',
                title: 'El Costo de no Tomar Acción Hoy',
                subtitle: 'El mayor competidor de tu negocio no es otra marca; es la inercia de no hacer nada.',
                description: 'Muestra el panorama futuro: sus competidores ya están captando la atención en TikTok e Instagram mientras su marca se vuelve invisible.',
                image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Urgencia estratégica y relevancia en el mercado vertical',
                highlights: ['Pérdida de mercado frente a creadores ágiles.', 'Dependencia de referidos boca a boca.', 'Reducción de márgenes al competir por precio.'],
                actionTip: 'Plantea en un gancho: "¿Dónde estará tu negocio si sigues sin publicar?".',
              },
            },
          ]
        : [
            { label: 'Pain 1: Lost Money / Time', text: 'What mistake is costing them time or revenue right now?', tag: 'Friction', icon: 'Clock' },
            { label: 'Pain 2: Frustration & Confusion', text: 'What did they try before that failed?', tag: 'Obstacle', icon: 'ShieldCheck' },
            { label: 'Pain 3: Fear of Falling Behind', text: 'What happens if they do not fix this in 6 months?', tag: 'Urgency', icon: 'Sparkles' },
          ],
      instructorNotes: notes.s12,
    },
    {
      id: 's13',
      type: 'concept',
      tag: isEs ? 'TALLER EN VIVO 03' : 'LIVE WORKSHOP 03',
      title: isEs ? 'Taller 3: Tu Promesa Única en 1 Frase' : 'Workshop 3: Your 1-Sentence Core Promise',
      subtitle: isEs
        ? 'La fórmula maestra de posicionamiento que pondrás en tu biografía y tus videos.'
        : 'The positioning master formula for your bio and video hooks.',
      blockColor: '#09090B',
      points: isEs
        ? [
            {
              label: 'La Fórmula Maestra',
              text: '"Ayudo a [Cliente Ideal] a lograr [Resultado Deseado] sin [Mayor Frustración]."',
              tag: 'Plantilla',
              icon: 'Sparkles',
              detailData: {
                tag: 'PROMESA // FÓRMULA',
                title: 'La Declaración de Posicionamiento UXIO',
                subtitle: 'Una sola frase que resume tu valor y filtra a tus clientes ideales.',
                description: 'Esta frase va en la primera línea de tu biografía de Instagram y sirve como gancho recurrente en tus videos de autoridad.',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Fórmula de posicionamiento directo y de alta claridad',
                highlights: ['[Cliente Ideal]: Específico (ej. Abogados).', '[Resultado]: Deseado y medible (ej. 5 citas/semana).', '[Sin Frustración]: Dolor evitado (ej. sin pagar anuncios).'],
                actionTip: 'Rellena los 3 corchetes en tu libreta y léelo en voz alta.',
              },
            },
            {
              label: 'Ejemplo 1 (Servicios)',
              text: '"Ayudo a odontólogos a llenar su agenda semanal sin pagar agencias costosas."',
              tag: 'B2B',
              icon: 'Users',
              detailData: {
                tag: 'PROMESA // CASO SERVICIOS',
                title: 'Aplicación en Servicios Profesionales B2B/B2C',
                subtitle: 'Claridad instantánea para abogados, arquitectos, médicos o consultores.',
                description: 'Cuando un odontólogo lee esta promesa, sabe de inmediato que este contenido fue creado exclusivamente para él y presiona Seguir.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Posicionamiento para profesionales y clínicas especializadas',
                highlights: ['Nicho claro: Odontólogos.', 'Resultado: Agenda semanal completa.', 'Fricción eliminada: Cero agencias caras.'],
                actionTip: 'Adapta esta estructura cambiando la profesión y el resultado clave.',
              },
            },
            {
              label: 'Ejemplo 2 (Educación/Cursos)',
              text: '"Ayudo a emprendedores a vender con su celular sin gastar en cámaras de cine."',
              tag: 'Creator',
              icon: 'CheckCircle2',
              detailData: {
                tag: 'PROMESA // CASO FORMACIÓN',
                title: 'Aplicación en Creadores, Cursos e Infoproductos',
                subtitle: 'Demoler la barrera de entrada para atraer alumnos comprometidos.',
                description: 'Nuestra propia promesa en Creator Lab: democratizar la producción vertical para que cualquier negocio pueda vender sin excusas técnicas.',
                image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Propuesta de valor para infoproductores y formadores',
                highlights: ['Audiencia: Emprendedores y dueños.', 'Resultado: Ventas orgánicas por video.', 'Barrera derribada: Cero estudios caros.'],
                actionTip: 'Escribe tu promesa en el chat para recibir feedback de Sebas en vivo.',
              },
            },
          ]
        : [
            { label: 'Master Formula', text: '"I help [Target Client] achieve [Desired Outcome] without [Biggest Frustration]."', tag: 'Template', icon: 'Sparkles' },
            { label: 'Example 1 (Services)', text: '"I help dentists fill their weekly calendars without paying costly agencies."', tag: 'B2B', icon: 'Users' },
            { label: 'Example 2 (Courses)', text: '"I help founders sell with their phone without buying cinema cameras."', tag: 'Creator', icon: 'CheckCircle2' },
          ],
      instructorNotes: notes.s13,
    },
  ];
};
