import { SlideData } from './types';
import { getLiveLabInstructorNotes } from './m00-03-notes';

export const getLiveLabBlock2 = (isEs: boolean): SlideData[] => {
  const notes = getLiveLabInstructorNotes(isEs);

  return [
    {
      id: 's07',
      type: 'statement',
      tag: isEs ? 'BLOQUE 02 · 25:00 - 45:00 MIN' : 'BLOCK 02 · 25:00 - 45:00 MIN',
      title: isEs
        ? '¿Y si 60 segundos de video bastaran para cerrar una venta?'
        : 'What if a 60-second video was enough to close a deal?',
      subtitle: isEs
        ? 'La arquitectura del embudo más rentable: de tráfico frío en redes a clientes calificados listos en tu WhatsApp.'
        : 'The most profitable funnel architecture: from cold traffic to qualified buyers ready in WhatsApp.',
      highlight: isEs ? 'Arquitectura de Conversión · Producción Inteligente' : 'Conversion Architecture · Smart Production',
      bgColor: '#FF7F07',
      blockColor: '#FF7F07',
      auroraColors: ['#FF7F07', '#FFAA44', '#E06600'],
      instructorNotes: notes.s07,
    },
    {
      id: 's08',
      type: 'steps',
      tag: isEs ? 'ARQUITECTURA' : 'ARCHITECTURE',
      title: isEs ? 'La Anatomía del Embudo a WhatsApp' : 'The WhatsApp Funnel Anatomy',
      subtitle: isEs
        ? 'El circuito exacto que convierte un video de 60 segundos en una conversación de venta.'
        : 'The exact loop converting a 60-second clip into a closed sales conversation.',
      blockColor: '#FF7F07',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Video en Reels / TikTok',
              desc: 'Contenido corto que toca el dolor específico de tu cliente.',
              tag: 'Tráfico Frío',
              detailData: {
                tag: 'EMBUDO // PASO 01',
                title: 'Paso 1: El Video Imán de Tráfico Frío',
                subtitle: 'Llegar a personas que no te conocen pero sufren el problema que tú resuelves.',
                description: 'El algoritmo de video vertical es el motor de descubrimiento más potente del mundo. Con el gancho correcto, tu video se muestra a miles de personas que buscan activamente tu solución.',
                image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Distribución algorítmica en TikTok, Reels y Shorts',
                highlights: ['Formato vertical 9:16 con subtítulos dinámicos.', 'Publicación simultánea en Instagram, TikTok y Shorts.', 'Métrica clave: Retención a los 3 segundos (>60%).'],
                actionTip: 'Publica el mismo video en las 3 plataformas principales sin marca de agua.',
              },
            },
            {
              number: '02',
              title: 'Palabra Clave en Comentarios',
              desc: 'El usuario comenta "GUIA" o "ASESORIA" para recibir el enlace.',
              tag: 'Micro-Compromiso',
              detailData: {
                tag: 'EMBUDO // PASO 02',
                title: 'Paso 2: El Micro-Compromiso en Comentarios',
                subtitle: 'Disparar el engagement orgánico y filtrar prospectos calificados.',
                description: 'Cuando los usuarios comentan una palabra clave, el algoritmo detecta alta interacción y recomienda el video a más personas, mientras tú abres la puerta al contacto privado.',
                image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Interacción y activación de palabras clave en comentarios',
                highlights: ['Automatización con ManyChat o respuesta manual directa en <10 min.', 'El usuario siente que recibe un regalo exclusivo de inmediato.', 'Multiplica las señales de relevancia del video.'],
                actionTip: 'Configura un mensaje automático o respuesta rápida en DM con tu link.',
              },
            },
            {
              number: '03',
              title: 'Chat Directo en WhatsApp',
              desc: 'Llega con mensaje predefinido demostrando interés genuino.',
              tag: 'Lead Calificado',
              detailData: {
                tag: 'EMBUDO // PASO 03',
                title: 'Paso 3: La Llegada a WhatsApp Business',
                subtitle: 'Mover al prospecto de la red social al canal de mayor tasa de apertura.',
                description: 'WhatsApp tiene un 98% de tasa de apertura frente al 20% del correo electrónico. Al recibir un mensaje prellenado, el prospecto ya inició la conversación por iniciativa propia.',
                image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Canal de ventas directo y personalizado en WhatsApp Business',
                highlights: ['Enlace wa.link con mensaje predeterminado claro.', 'Etiquetas de WhatsApp Business para ordenar el embudo.', 'Audios cortos y personalizados para confianza inmediata.'],
                actionTip: 'Crea tu link personalizado en wa.link en menos de 2 minutos.',
              },
            },
            {
              number: '04',
              title: 'Cierre Humano o Asesoría',
              desc: 'Presentas tu oferta sin fricción y cierras la venta en 1 a 1.',
              tag: 'Venta',
              detailData: {
                tag: 'EMBUDO // PASO 04',
                title: 'Paso 4: El Cierre de Venta Consultivo',
                subtitle: 'Diagnosticar, cualificar y presentar el precio con seguridad.',
                description: 'No envíes PDFs pesados sin antes hacer 2 preguntas de cualificación. Cuando entiendes el problema exacto del cliente, tu propuesta es la única opción lógica.',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Cierre de contratos y acuerdos comerciales en 1 a 1',
                highlights: ['Pregunta: "¿Qué es lo que más te cuesta lograr actualmente?".', 'Pregunta: "¿Buscas resolverlo este mes?".', 'Envío de link de pago o llamada de cierre.'],
                actionTip: 'Guarda tu guion de 3 preguntas de cierre en Respuestas Rápidas.',
              },
            },
          ]
        : [
            { number: '01', title: 'Reels / TikTok Clip', desc: 'Short video targeting a specific customer pain point.', tag: 'Cold Traffic' },
            { number: '02', title: 'Keyword in Comments', desc: 'Viewer comments "GUIDE" or "AUDIT" to trigger the link.', tag: 'Micro-Commit' },
            { number: '03', title: 'Direct WhatsApp Chat', desc: 'Lead arrives with pre-filled message showing high intent.', tag: 'Qualified Lead' },
            { number: '04', title: 'Human Closing', desc: 'Frictionless offer presentation and 1-on-1 deal closing.', tag: 'Sale' },
          ],
      instructorNotes: notes.s08,
    },
    {
      id: 's09',
      type: 'concept',
      tag: isEs ? 'PRODUCCIÓN INTELIGENTE' : 'SMART PRODUCTION',
      title: isEs ? 'El Banco de B-Roll: Graba 1 Hora, Produce 1 Mes' : 'The B-Roll Bank: Film 1 Hour, Produce 1 Month',
      subtitle: isEs
        ? 'El secreto de los creadores más productivos para no quemarse grabando a diario.'
        : 'The top creators secret to producing 30 clips without daily burnout.',
      blockColor: '#FF7F07',
      points: isEs
        ? [
            {
              label: 'Toma 1: Manos Trabajando',
              text: 'Escribiendo en teclado, Notion, cuaderno o usando tu producto.',
              tag: 'Acción',
              icon: 'Sparkles',
              detailData: {
                tag: 'B-ROLL // TOMA 01',
                title: 'Tomas de Detalle y Manos en Acción',
                subtitle: 'Genera dinamismo visual y credibilidad sobre tu proceso diario.',
                description: 'Coloca el celular apoyado sobre una taza o libro a 30 cm de tus manos. Graba 5 minutos mientras trabajas o diseñas para tener fondos de voz en off.',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Primer plano de manos interactuando con herramientas',
                highlights: ['Planos cerrados de 5 a 10 segundos.', 'No requiere que hables a cámara ni peinarte.', 'Ideal para videos con texto y música de fondo.'],
                actionTip: 'Graba 3 tomas de tus manos trabajando hoy mismo.',
              },
            },
            {
              label: 'Toma 2: Plano Medio en Escritorio',
              text: 'Tú mirando la pantalla o tomando notas con luz natural de lado.',
              tag: 'Ambiente',
              icon: 'Users',
              detailData: {
                tag: 'B-ROLL // TOMA 02',
                title: 'Plano Medio Ambiental de Trabajo',
                subtitle: 'Muestra tu espacio y genera una atmósfera profesional cercana.',
                description: 'Ubica el celular a 1.5 metros en ángulo diagonal mientras trabajas. Comunica disciplina, enfoque y autoridad sin decir una sola palabra.',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Plano ambiental en escritorio con iluminación suave lateral',
                highlights: ['Luz lateral de ventana para volumen tridimensional.', 'Fondo ordenado con un toque de color.', 'Permite superponer subtítulos legibles.'],
                actionTip: 'Coloca tu teléfono en la esquina de tu mesa y graba 10 minutos.',
              },
            },
            {
              label: 'Toma 3: Detalle de Producto / Pantalla',
              text: 'Primer plano del resultado que entregas a tus clientes.',
              tag: 'Detalle',
              icon: 'CheckCircle2',
              detailData: {
                tag: 'B-ROLL // TOMA 03',
                title: 'El Resultado Tangible: La Prueba Visual',
                subtitle: 'Muestra el antes y el después de lo que tus clientes reciben.',
                description: 'Graba la pantalla de tu computador mostrando métricas, un diseño terminado, o un producto físico. La prueba visual derriba el escepticismo.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Detalle macro de entregables, métricas y dashboards de clientes',
                highlights: ['Tomas de barrido lento de izquierda a derecha.', 'Enfoque nítido en los números de éxito.', 'Acompaña siempre con la explicación del resultado.'],
                actionTip: 'Graba un clip de 5 segundos haciendo scroll sobre tu último caso de éxito.',
              },
            },
          ]
        : [
            { label: 'Shot 1: Hands Working', text: 'Typing on keyboard, notebook, or holding product.', tag: 'Action', icon: 'Sparkles' },
            { label: 'Shot 2: Medium Desk Shot', text: 'Working on computer with side window light.', tag: 'Environment', icon: 'Users' },
            { label: 'Shot 3: Product Detail', text: 'Close-up of client deliverable or physical product.', tag: 'Detail', icon: 'CheckCircle2' },
          ],
      instructorNotes: notes.s09,
    },
  ];
};
