import { SlideData } from './types';
import { getLiveLabInstructorNotes } from './m00-03-notes';

export const getLiveLabBlock1 = (isEs: boolean): SlideData[] => {
  const notes = getLiveLabInstructorNotes(isEs);

  return [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs
        ? 'Kickoff Oficial: De Creador Amateur a Vendedor con Sistema'
        : 'Official Kickoff: From Amateur Creator to Systematic Seller',
      subtitle: isEs
        ? 'Cohorte 01 · La sesión maestra en vivo para alinear tu mentalidad, oferta y equipo.'
        : 'Cohort 01 · Live masterclass to align your mindset, offer, and setup.',
      highlight: isEs ? 'Semana 0 · Masterclass en Vivo (90 min)' : 'Week 0 · Live Masterclass (90 min)',
      imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1600&auto=format&fit=crop&q=80',
      blockColor: '#FE385B',
      instructorNotes: notes.s01,
    },
    {
      id: 's02',
      type: 'statement',
      tag: isEs ? 'BLOQUE 01 · 00:00 - 25:00 MIN' : 'BLOCK 01 · 00:00 - 25:00 MIN',
      title: isEs
        ? '¿Por qué el 90% de los creadores fracasa antes de los 6 meses?'
        : 'Why do 90% of creators fail within their first 6 months?',
      subtitle: isEs
        ? 'Vamos a desmontar las 2 creencias más costosas y a plantar el Manifiesto UXIO para transformar tu celular en un activo de ventas.'
        : 'We will dismantle the 2 costliest myths and establish the UXIO Manifesto to turn your phone into a sales engine.',
      highlight: isEs ? 'Desmontaje de Creencias · Atención con Intención' : 'Belief Busting · Attention with Intent',
      bgColor: '#FE385B',
      blockColor: '#FE385B',
      auroraColors: ['#FE385B', '#FF6B8A', '#E02050'],
      instructorNotes: notes.s02,
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'ROMPEHIELOS EN VIVO' : 'LIVE ICEBREAKER',
      title: isEs ? 'Check-in de la Cohorte: ¿Quién Eres y Qué Vendes?' : 'Cohort Check-in: Who Are You & What Do You Sell?',
      subtitle: isEs
        ? 'Escribe en el chat ahora mismo: Tu nombre, tu ciudad y tu producto o servicio principal.'
        : 'Drop in the chat right now: Your name, city, and core product or service.',
      blockColor: '#FE385B',
      points: isEs
        ? [
            {
              label: '1. Tu Nicho',
              text: '¿A qué te dedicas y en qué industria operas?',
              tag: 'Identidad',
              icon: 'Users',
              detailData: {
                tag: 'ROMPEHIELOS // IDENTIDAD',
                title: 'Definiendo tu Territorio Comercial',
                subtitle: 'Si le hablas a todo el mundo, nadie se siente interpelado.',
                description: 'Los negocios que más rápido crecen en video vertical se enfocan en un nicho muy específico: odontología estética, consultoría fiscal o fitness para ejecutivos.',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Comunidad de creadores alineando su propuesta de valor',
                highlights: ['Evita descripciones genéricas como "soy coach de vida".', 'Usa fórmulas: "Ayudo a [nicho] a lograr [resultado]".', 'Tu nicho define las palabras clave de tus ganchos.'],
                actionTip: 'Escribe en el chat tu nicho en máximo 5 palabras.',
              },
            },
            {
              label: '2. Tu Oferta',
              text: '¿Qué vendes actualmente (servicio, producto, curso, asesoría)?',
              tag: 'Producto',
              icon: 'Sparkles',
              detailData: {
                tag: 'ROMPEHIELOS // OFERTA',
                title: 'El Vehículo de Monetización de tu Marca',
                subtitle: 'No creamos contenido por diversión; lo creamos para alimentar una oferta clara.',
                description: 'Tener claro qué vendes y cuál es tu precio te permite diseñar llamados a la acción precisos sin rodeos innecesarios.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Estructuración de ofertas y paquetes comerciales',
                highlights: ['Servicios 1 a 1, paquetes de suscripción o infoproductos.', 'Define si tu oferta es de ticket bajo ($50) o alto ($500+).', 'El ticket define si tu embudo va a catálogo o videollamada.'],
                actionTip: 'Nombra tu producto insignia y su precio promedio en dólares.',
              },
            },
            {
              label: '3. Tu Meta a 5 Semanas',
              text: '¿Cuántos clientes o qué facturación buscas generar?',
              tag: 'Objetivo',
              icon: 'CheckCircle2',
              detailData: {
                tag: 'ROMPEHIELOS // COMPROMISO',
                title: 'El Resultado Tangible de tu Cohorte',
                subtitle: 'Una meta sin número es solo una expresión de deseo.',
                description: 'Al graduarte habrás publicado tus primeros 15-30 videos y construido tu embudo a WhatsApp. Saber tu meta nos permite medir el ROI exacto.',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Medición de metas comerciales e ingresos generados',
                highlights: ['Meta concreta: "Cerrar 3 clientes nuevos de $400 USD".', 'Tener 30 clips en tu banco de contenidos reutilizable.', 'Aprobar el 100% de los retos para tu certificación oficial.'],
                actionTip: 'Declara en el chat tu meta de ventas para estas 5 semanas.',
              },
            },
          ]
        : [
            { label: '1. Your Niche', text: 'What industry do you operate in?', tag: 'Identity', icon: 'Users' },
            { label: '2. Your Offer', text: 'What do you sell (service, product, consulting)?', tag: 'Product', icon: 'Sparkles' },
            { label: '3. 5-Week Target', text: 'How many sales or revenue are you aiming for?', tag: 'Goal', icon: 'CheckCircle2' },
          ],
      instructorNotes: notes.s03,
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'DESMONTAJE DE MITOS 01' : 'MYTH BUSTING 01',
      title: isEs ? 'El Mito del Equipo de $5.000 USD' : 'The $5,000 Gear Myth',
      subtitle: isEs
        ? 'La calidad del contenido no depende del sensor; depende de la luz y el mensaje.'
        : 'Content quality does not depend on sensor size; it depends on lighting and clarity.',
      blockColor: '#FE385B',
      comparison: {
        beforeLabel: isEs ? 'CREENCIA LIMITANTE' : 'LIMITING BELIEF',
        before: isEs
          ? [
              'Esperar a comprar una Sony FX3 o micrófono de estudio.',
              'Sentir que la cámara del celular "no es profesional".',
              'Complicarse con configuraciones de 10 bits y perfiles LOG.',
              'Resultado: Meses sin publicar ni un solo video.',
            ]
          : [
              'Waiting to buy a Sony FX3 or studio microphone.',
              'Feeling a phone camera is not "professional enough".',
              'Overcomplicating with 10-bit log color profiles.',
              'Result: Months with zero published videos.',
            ],
        afterLabel: isEs ? 'REALIDAD CREATOR LAB' : 'CREATOR LAB REALITY',
        after: isEs
          ? [
              'Cualquier smartphone moderno a 1080p o 4K 30 FPS.',
              'Luz de ventana gratuita o aro de $15 USD bien ubicado.',
              'Micrófono lavalier de solapa accesible de $10 USD.',
              'Resultado: Grabación en 15 minutos y ventas reales.',
            ]
          : [
              'Any modern phone at 1080p or 4K 30 FPS.',
              'Free window light or $15 soft light ring.',
              'Affordable $10 clip-on lapel mic.',
              'Result: Filming in 15 min and closing real deals.',
            ],
      },
      instructorNotes: notes.s04,
    },
    {
      id: 's05',
      type: 'comparison',
      tag: isEs ? 'DESMONTAJE DE MITOS 02' : 'MYTH BUSTING 02',
      title: isEs ? 'El Mito de los 100k Seguidores' : 'The 100k Followers Myth',
      subtitle: isEs
        ? 'No necesitas millones de vistas; necesitas 100 clientes ideales que compren.'
        : 'You do not need millions of views; you need 100 qualified buyers.',
      blockColor: '#FE385B',
      comparison: {
        beforeLabel: isEs ? 'MÉTRICAS DE VANIDAD' : 'VANITY METRICS',
        before: isEs
          ? [
              'Buscar viralidad con bailes o audios en tendencia sin contexto.',
              'Tener 50.000 seguidores pero $0 en la cuenta bancaria.',
              'Audiencia que solo busca entretenimiento gratuito.',
              'Cero llamadas a la acción ni embudo hacia WhatsApp.',
            ]
          : [
              'Chasing viral trends and dances with no commercial context.',
              'Having 50k followers but $0 in the bank.',
              'Audience seeking free entertainment only.',
              'Zero calls to action and no WhatsApp pipeline.',
            ],
        afterLabel: isEs ? 'SISTEMA COMERCIAL UXIO' : 'UXIO COMMERCIAL ENGINE',
        after: isEs
          ? [
              'Videos específicos dirigidos al dolor exacto de tu cliente.',
              'Con 500 vistas calificadas puedes cerrar 5 a 10 ventas.',
              'Posicionamiento como autoridad indiscutible en tu nicho.',
              'CTA directo a WhatsApp para conversación y cierre humano.',
            ]
          : [
              'Laser-targeted videos addressing exact buyer pain points.',
              'With 500 qualified views you can close 5 to 10 deals.',
              'Authority positioning as the go-to expert in your niche.',
              'Direct WhatsApp CTA for personal high-trust closing.',
            ],
      },
      instructorNotes: notes.s05,
    },
    {
      id: 's06',
      type: 'concept',
      tag: isEs ? 'EL MANIFIESTO' : 'THE MANIFESTO',
      title: isEs ? 'El Manifiesto UXIO: Atención con Intención' : 'The UXIO Manifesto: Attention with Intent',
      subtitle: isEs
        ? 'Los 3 pilares que rigen cada segundo de contenido que aprenderás a crear.'
        : 'The 3 core pillars governing every piece of content you will create.',
      blockColor: '#FE385B',
      points: isEs
        ? [
            {
              label: '1. Gancho Visual (Seg 0 - 3)',
              text: 'Detén el scroll con movimiento, contraste y una promesa audaz.',
              tag: 'Captura',
              icon: 'Sparkles',
              detailData: {
                tag: 'MANIFIESTO // PILAR 01',
                title: 'Los 3 Segundos que Salvan o Destruyen tu Video',
                subtitle: 'El cerebro del usuario toma la decisión de quedarse o deslizar en menos de 1 segundo.',
                description: 'En Creator Lab no empezamos con introducciones aburridas. Entramos directo al conflicto con un gancho visual o verbal que plantea una disrupción inmediata.',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Toma frontal dinámica atrapando la atención en el primer segundo',
                highlights: ['Movimiento en los primeros cuadros.', 'Titular en pantalla en los primeros 2 tercios.', 'Pregunta provocadora que desafía el sentido común.'],
                actionTip: 'Corta siempre los primeros 1.5 segundos de silencio antes de hablar.',
              },
            },
            {
              label: '2. Autoridad & Valor (Seg 3 - 45)',
              text: 'Resuelve un problema real sin rodeos; demuestra que sabes lo que haces.',
              tag: 'Retención',
              icon: 'ShieldCheck',
              detailData: {
                tag: 'MANIFIESTO // PILAR 02',
                title: 'El Cuerpo del Video: Valor de Alta Densidad',
                subtitle: 'Entrega 1 solución accionable por cada 45 segundos de video.',
                description: 'Evita la teoría abstracta. Da el paso 1, 2 y 3 exactos. La generosidad en el contenido gratuito demuestra que tu servicio de pago es insuperable.',
                image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Demostración práctica y entrega de pasos accionables',
                highlights: ['Cambia de ángulo o plano B-roll cada 4-6 segundos.', 'Usa ejemplos concretos con números reales.', 'Habla con convicción: tú eres el especialista.'],
                actionTip: 'Si una frase no aporta a la solución del problema, bórrala.',
              },
            },
            {
              label: '3. Puente de Venta (Seg 45 - 60)',
              text: 'Envía a la persona a escribirte con una palabra clave específica.',
              tag: 'Conversión',
              icon: 'MessageSquare',
              detailData: {
                tag: 'MANIFIESTO // PILAR 03',
                title: 'El Cierre: Convertir Espectadores en Leads',
                subtitle: 'Nunca dejes que un video termine sin un siguiente paso comercial claro.',
                description: 'Pide una micro-acción sencilla: "Comenta PROTOCOLO si quieres que te envíe la plantilla por mensaje". Eso filtra prospectos con intención de compra.',
                image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Llamado a la acción directo con palabra clave comercial',
                highlights: ['Usa una sola palabra clave en mayúsculas ("AUDITORIA").', 'Responde manualmente o con automatización en <15 min.', 'Llévalos a WhatsApp Business para conversar.'],
                actionTip: 'Define hoy tu palabra clave de activación para tus próximos 5 videos.',
              },
            },
          ]
        : [
            { label: '1. Visual Hook (Sec 0 - 3)', text: 'Stop the scroll with motion, contrast, and a bold promise.', tag: 'Capture', icon: 'Sparkles' },
            { label: '2. Value & Authority (Sec 3 - 45)', text: 'Solve a real problem directly; prove your expertise.', tag: 'Retention', icon: 'ShieldCheck' },
            { label: '3. Conversion Bridge (Sec 45 - 60)', text: 'Drive viewers to DM you with a specific keyword.', tag: 'Conversion', icon: 'MessageSquare' },
          ],
      instructorNotes: notes.s06,
    },
  ];
};
