import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';
import { getWelcomeInstructorNotes } from './m00-01-notes';

export const getPresentationM000101 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';
  const notes = getWelcomeInstructorNotes(isEs);

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'El Manifiesto Creator Lab' : 'The Creator Lab Manifesto',
      subtitle: isEs
        ? 'Microclase 1 · Tu celular es el canal de ventas más rentable de tu negocio.'
        : 'Microclass 1 · Your smartphone is your most profitable sales channel.',
      highlight: isEs ? 'Semana 0 · Inducción' : 'Week 0 · Induction',
      imageUrl:
        'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&auto=format&fit=crop&q=80',
      instructorNotes: notes.s01,
    },
    {
      id: 's02',
      type: 'concept',
      tag: isEs ? 'EL PRINCIPIO' : 'THE PRINCIPLE',
      title: isEs ? 'La Atención Vertical es el Nuevo Activo' : 'Vertical Attention is the New Asset',
      subtitle: isEs
        ? 'Tu negocio no necesita cámaras de cine; necesita claridad y conversión.'
        : 'Your business does not need cinema cameras; it needs clarity and conversion.',
      points: isEs
        ? [
            {
              label: '1. Producción de Bolsillo',
              text: 'Graba en el momento en que surge la idea, sin fricción técnica ni preparaciones eternas.',
              tag: 'Cero Fricción',
              icon: 'Smartphone',
              detailData: {
                tag: 'PRINCIPIO 01 // CERO FRICCIÓN',
                title: 'Producción de Bolsillo: La Velocidad Vence a la Perfección',
                subtitle: 'Tu smartphone es una cámara 4K de nivel broadcast si dominas la luz y el encuadre.',
                description:
                  'La mayoría de negocios posponen la creación de contenido esperando comprar cámaras pesadas, micrófonos caros y sets de iluminación. En Creator Lab demostramos que un smartphone bien calibrado elimina el 100% de las excusas y permite grabar 3 piezas en menos de 20 minutos.',
                image:
                  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Setup móvil ligero: luz natural lateral + cuadrícula en pantalla',
                highlights: [
                  'Limpia siempre el lente de tu cámara con microfibra antes de grabar (el 80% de videos borrosos se deben a grasa de dedos).',
                  'Activa la cuadrícula 3x3 en Ajustes de Cámara para mantener tus ojos en el tercio superior.',
                  'Graba en 4K a 30fps o 1080p a 60fps con bloqueo de exposición/enfoque (AE/AF Lock).',
                ],
                actionTip:
                  'Saca tu celular ahora mismo, limpia el lente y graba una toma de prueba de 10 segundos mirando directo al lente.',
              },
            },
            {
              label: '2. Historias sobre Anuncios',
              text: 'La gente salta los anuncios tradicionales, pero conecta con personas reales resolviendo problemas.',
              tag: 'Autenticidad',
              icon: 'Sparkles',
              detailData: {
                tag: 'PRINCIPIO 02 // NARRATIVA ORGÁNICA',
                title: 'Historias que Venden sin Parecer Comerciales',
                subtitle: 'El consumidor moderno desarrolló ceguera publicitaria; lo que busca es empatía y soluciones.',
                description:
                  'Cuando un video empieza con un logotipo corporativo o música estridente, el usuario desliza en 0.8 segundos. Cuando empieza mostrando un error común o un resultado sorprendente en primera persona, la retención se multiplica por 4.',
                image:
                  'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Narrativa cercana en primera persona conectando directamente con la audiencia',
                highlights: [
                  'Estructura Hook → Contexto → Solución → CTA en 45 segundos.',
                  'Habla en segunda persona ("Tú") en lugar de hablar de "Nosotros" o "Mi empresa".',
                  'Muestra el detrás de cámaras y los desafíos reales de tu sector para generar confianza inmediata.',
                ],
                actionTip:
                  'Revisa tu último post: si parece un volante publicitario tradicional, transfórmalo en una anécdota de un cliente real.',
              },
            },
            {
              label: '3. Foco en Conversión',
              text: 'Cada pieza tiene un llamado a la acción claro hacia WhatsApp o tu canal comercial.',
              tag: 'Ventas Reales',
              icon: 'TrendingUp',
              detailData: {
                tag: 'PRINCIPIO 03 // MONETIZACIÓN DIRECTA',
                title: 'De Vistas Vacías a Conversaciones de Venta',
                subtitle: 'Los "likes" no pagan las cuentas del negocio; los mensajes cualificados sí.',
                description:
                  'Un video viral con 100,000 visitas que no genera prospectos es un gasto de energía. Un video con 1,200 visitas que genera 18 conversaciones de WhatsApp y 3 ventas directas es un canal comercial de alto rendimiento.',
                image:
                  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Embudo directo de video vertical a canal comercial WhatsApp Business',
                highlights: [
                  'Usa palabras clave de activación en tus CTAs: "Comenta SISTEMA y te paso el acceso directo".',
                  'Enlace directo y optimizado a WhatsApp Business con mensaje predefinido en la biografía.',
                  'Mide el Costo por Conversación Iniciada y la Tasa de Cierre en lugar del alcance bruto.',
                ],
                actionTip:
                  'Configura un link de WhatsApp con mensaje personalizado (ej. "Hola Sebas, vi tu video sobre el kit y quiero cotizar").',
              },
            },
          ]
        : [
            {
              label: '1. Lean Mobile Production',
              text: 'Shoot when the idea is fresh with zero technical friction.',
              tag: 'Zero Friction',
              icon: 'Smartphone',
              detailData: {
                tag: 'PRINCIPLE 01 // ZERO FRICTION',
                title: 'Pocket Production: Speed Beats Perfection',
                subtitle: 'Your smartphone is a 4K broadcast studio when you master light and framing.',
                description: 'Eliminate heavy camera friction. Shoot, edit, and publish directly with your phone.',
                highlights: [
                  'Always wipe your camera lens clean before recording.',
                  'Use 3x3 grid to keep eye level in the upper third.',
                  'Lock exposure & focus before every take.',
                ],
                actionTip: 'Record a quick 10s practice clip right now to verify audio clarity.',
              },
            },
            {
              label: '2. Stories Over Ads',
              text: 'Audiences skip traditional ads but connect with real humans solving problems.',
              tag: 'Authenticity',
              icon: 'Sparkles',
              detailData: {
                tag: 'PRINCIPLE 02 // STORYTELLING',
                title: 'Stories That Convert Organically',
                subtitle: 'Build human connection before presenting the solution.',
                description: 'Speak directly to one specific pain point per 45-second vertical clip.',
                highlights: [
                  'Use Hook → Story → Solution → CTA structure.',
                  'Focus on customer outcomes, not technical features.',
                  'Show real behind-the-scenes transformations.',
                ],
                actionTip: 'Turn your best customer FAQ into a short story script.',
              },
            },
            {
              label: '3. Conversion Focus',
              text: 'Every video has a direct CTA to WhatsApp or your product catalog.',
              tag: 'Real Revenue',
              icon: 'TrendingUp',
              detailData: {
                tag: 'PRINCIPLE 03 // REVENUE FOCUS',
                title: 'Turning Views into Qualified Sales Chats',
                subtitle: 'Vanity metrics do not pay salaries; inbound conversations do.',
                description: 'Design every single clip with a clear commercial next step.',
                highlights: [
                  'Use activation trigger words for direct engagement.',
                  'Route leads directly to WhatsApp Business.',
                  'Track conversations generated per video.',
                ],
                actionTip: 'Add a pre-filled WhatsApp link to your profile bio.',
              },
            },
          ],
      instructorNotes: notes.s02,
    },
    {
      id: 's03',
      type: 'comparison',
      tag: isEs ? 'CAMBIO DE PARADIGMA' : 'PARADIGM SHIFT',
      title: isEs ? 'Creador Amateur vs. Sistema UXIO' : 'Amateur Creator vs. UXIO System',
      subtitle: isEs
        ? 'Por qué el 90% de los creadores se frustran y cómo construimos predictibilidad.'
        : 'Why 90% of creators burn out and how we build predictable growth.',
      comparison: {
        beforeLabel: isEs ? 'CREADOR AMATEUR / SIN SISTEMA' : 'AMATEUR CREATOR',
        before: isEs
          ? [
              'Publica cuando "le llega la inspiración".',
              'Graba tomas improvisadas con mal encuadre.',
              'Depende de likes y métricas vanidosas.',
              'Cero llamados a la acción claros.',
            ]
          : [
              'Posts only when inspiration randomly strikes.',
              'Improvised shaky shots with poor lighting.',
              'Chases vanity likes and views.',
              'Zero direct calls to action.',
            ],
        afterLabel: isEs ? 'CREATOR LAB / SISTEMA UXIO' : 'UXIO CREATOR SYSTEM',
        after: isEs
          ? [
              'Matriz de 30 ideas y 5 pilares comerciales.',
              'Planos limpios, luz de ventana y audio nítido.',
              'Mide conversaciones generadas y ventas.',
              'Embudos directos a WhatsApp Business.',
            ]
          : [
              '30-day matrix with 5 commercial pillars.',
              'Clean framing, window light, and crisp sound.',
              'Tracks qualified conversations and sales.',
              'Direct funnel routes to WhatsApp.',
            ],
      },
      instructorNotes: notes.s03,
    },
  ];

  return {
    id: 'pres-m00-01-01',
    slug: 'm00-01-01-manifesto',
    lessonId: 'm00-01',
    title: isEs ? 'Microclase 1: El Manifiesto Creator Lab' : 'Microclass 1: Creator Lab Manifesto',
    moduleTag: isEs ? 'SEMANA 0 · MICROCLASE 1' : 'WEEK 0 · MICROCLASS 1',
    estimatedMinutes: 4,
    slides,
  };
};
