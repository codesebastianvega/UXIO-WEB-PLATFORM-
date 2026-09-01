import { SlideData } from './types';
import { getLiveLabInstructorNotes } from './m00-03-notes';

export const getLiveLabSlidesPart1 = (isEs: boolean): SlideData[] => {
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
      instructorNotes: notes.s01,
    },
    {
      id: 's02',
      type: 'title',
      tag: isEs ? 'BLOQUE 01 · 00:00 - 25:00 MIN' : 'BLOCK 01 · 00:00 - 25:00 MIN',
      title: isEs ? '1. Bienvenida, Mitos & El Manifiesto UXIO' : '1. Welcome, Myths & The UXIO Manifesto',
      subtitle: isEs
        ? 'Por qué el 90% de los creadores fracasa y cómo transformar tu celular en un activo de ventas.'
        : 'Why 90% of creators fail and how to turn your phone into a sales asset.',
      highlight: isEs ? 'Desmontaje de Creencias · Atención con Intención' : 'Belief Busting · Attention with Intent',
      imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&auto=format&fit=crop&q=80',
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
      points: isEs
        ? [
            { label: '1. Tu Nicho', text: '¿A qué te dedicas y en qué industria operas?', tag: 'Identidad', icon: 'Users' },
            { label: '2. Tu Oferta', text: '¿Qué vendes actualmente (servicio, producto, curso, asesoría)?', tag: 'Producto', icon: 'Sparkles' },
            { label: '3. Tu Meta a 5 Semanas', text: '¿Cuántos clientes o qué facturación buscas generar?', tag: 'Objetivo', icon: 'CheckCircle2' },
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
      points: isEs
        ? [
            { label: '1. Gancho Visual (Seg 0 - 3)', text: 'Detén el scroll con movimiento, contraste y una promesa audaz.', tag: 'Captura', icon: 'Sparkles' },
            { label: '2. Autoridad & Valor (Seg 3 - 45)', text: 'Resuelve un problema real sin rodeos; demuestra que sabes lo que haces.', tag: 'Retención', icon: 'ShieldCheck' },
            { label: '3. Puente de Venta (Seg 45 - 60)', text: 'Envía a la persona a escribirte con una palabra clave específica.', tag: 'Conversión', icon: 'MessageSquare' },
          ]
        : [
            { label: '1. Visual Hook (Sec 0 - 3)', text: 'Stop the scroll with motion, contrast, and a bold promise.', tag: 'Capture', icon: 'Sparkles' },
            { label: '2. Value & Authority (Sec 3 - 45)', text: 'Solve a real problem directly; prove your expertise.', tag: 'Retention', icon: 'ShieldCheck' },
            { label: '3. Conversion Bridge (Sec 45 - 60)', text: 'Drive viewers to DM you with a specific keyword.', tag: 'Conversion', icon: 'MessageSquare' },
          ],
      instructorNotes: notes.s06,
    },
    {
      id: 's07',
      type: 'title',
      tag: isEs ? 'BLOQUE 02 · 25:00 - 45:00 MIN' : 'BLOCK 02 · 25:00 - 45:00 MIN',
      title: isEs ? '2. La Estrategia: El Embudo a WhatsApp' : '2. Strategy: The WhatsApp Funnel Loop',
      subtitle: isEs
        ? 'Cómo convertir 60 segundos de video en conversaciones de venta directa sin fricción.'
        : 'How to convert 60 seconds of video into direct frictionless sales conversations.',
      highlight: isEs ? 'Arquitectura de Conversión · Producción Inteligente' : 'Conversion Architecture · Smart Production',
      imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&auto=format&fit=crop&q=80',
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
      steps: isEs
        ? [
            { number: '01', title: 'Video en Reels / TikTok', desc: 'Contenido corto que toca el dolor específico de tu cliente.', tag: 'Tráfico Frío' },
            { number: '02', title: 'Palabra Clave en Comentario', desc: 'El usuario comenta "GUIA" o "ASESORIA" para recibir el enlace.', tag: 'Micro-Compromiso' },
            { number: '03', title: 'Chat Directo en WhatsApp', desc: 'Llega con mensaje predefinido demostrando interés genuino.', tag: 'Lead Calificado' },
            { number: '04', title: 'Cierre Humano o Asesoría', desc: 'Presentas tu oferta sin fricción y cierras la venta en 1 a 1.', tag: 'Venta' },
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
      points: isEs
        ? [
            { label: 'Toma 1: Manos Trabajando', text: 'Escribiendo en teclado, Notion, cuaderno o usando tu producto.', tag: 'Acción', icon: 'Sparkles' },
            { label: 'Toma 2: Plano Medio en Escritorio', text: 'Tú mirando la pantalla o tomando notas con luz natural de lado.', tag: 'Ambiente', icon: 'Users' },
            { label: 'Toma 3: Detalle de Producto / Pantalla', text: 'Primer plano del resultado que entregas a tus clientes.', tag: 'Detalle', icon: 'CheckCircle2' },
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
