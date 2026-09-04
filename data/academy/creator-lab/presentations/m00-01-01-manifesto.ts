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
      type: 'statement',
      tag: 'PRINCIPIO CENTRAL',
      title: isEs
        ? 'El video vertical no es un pasatiempo: es la infraestructura comercial del negocio moderno.'
        : 'Vertical video is not a hobby: it is the modern commercial infrastructure.',
      subtitle: isEs
        ? 'Quien domina el arte de explicar su valor en 45 segundos tiene clientes perpetuos sin depender de agencias ni presupuestos millonarios de pauta.'
        : 'Whoever masters explaining value in 45s creates evergreen client flow with zero ad agency dependency.',
      highlight: isEs ? 'Claridad > Complejidad' : 'Clarity > Complexity',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '0:45 - 1:45 min',
        script: isEs
          ? 'Expliquen este principio con contundencia: la cámara es un multiplicador de confianza.'
          : 'Deliver this principle with energy: camera presence multiplies commercial trust.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'LOS 3 PILARES DEL MANIFIESTO' : 'THE 3 MANIFESTO PILLARS',
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
                  'Limpia siempre el lente de tu cámara con microfibra antes de grabar.',
                  'Activa la cuadrícula 3x3 en Ajustes de Cámara para mantener tus ojos en el tercio superior.',
                  'Graba en 4K a 30fps o 1080p a 60fps con bloqueo de exposición/enfoque.',
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
                  'Habla en segunda persona ("Tú") en lugar de hablar de "Nosotros".',
                  'Muestra el detrás de cámaras y los desafíos reales de tu sector.',
                ],
                actionTip:
                  'Revisa tu último post: si parece un volante tradicional, transfórmalo en una anécdota de un cliente real.',
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
                  'Usa palabras clave de activación en tus CTAs: "Comenta SISTEMA".',
                  'Enlace directo a WhatsApp Business con mensaje predefinido en la bio.',
                  'Mide el Costo por Conversación Iniciada y la Tasa de Cierre.',
                ],
                actionTip:
                  'Configura un link de WhatsApp con mensaje personalizado en tu biografía.',
              },
            },
          ]
        : [
            {
              label: '1. Lean Mobile Production',
              text: 'Shoot when the idea is fresh with zero technical friction.',
              tag: 'Zero Friction',
              icon: 'Smartphone',
            },
            {
              label: '2. Stories Over Ads',
              text: 'Audiences skip traditional ads but connect with real humans solving problems.',
              tag: 'Authenticity',
              icon: 'Sparkles',
            },
            {
              label: '3. Conversion Focus',
              text: 'Every video has a direct CTA to WhatsApp or your product catalog.',
              tag: 'Real Revenue',
              icon: 'TrendingUp',
            },
          ],
      instructorNotes: notes.s02,
    },
    {
      id: 's04',
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
    {
      id: 's05',
      type: 'challenge',
      tag: isEs ? 'COMPROMISO DE LA COHORTE' : 'COHORT COMMITMENT',
      title: isEs ? 'Firma tu Compromiso de Creador' : 'Sign Your Creator Commitment',
      challengeData: isEs
        ? {
            whatToDo: 'Abre la Ficha de Diagnóstico de Marca en el aula virtual y completa los 3 campos iniciales.',
            whatToDeliver: 'Tu Ficha de Diagnóstico completada.',
            whereToSubmit: 'Sección Reto 0 en el Aula Virtual.',
            criteria: [
              'Oferta principal definida con precio o ticket promedio',
              '3 Dolores concretos de tu cliente ideal',
              'Meta comercial de prospectos para las 5 semanas',
            ],
          }
        : {
            whatToDo: 'Open the Brand Diagnosis Sheet and complete the 3 onboarding fields.',
            whatToDeliver: 'Your completed Brand Diagnosis Sheet.',
            whereToSubmit: 'Challenge 0 section in Classroom.',
            criteria: [
              'Main offer defined with price point',
              '3 concrete buyer pain points',
              '5-week commercial inbound goal',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:15 min',
        script: isEs
          ? 'Cierren felicitando a los alumnos por dar el primer paso y anímenlos a ver la Microclase 2 sobre la Regla de Oro.'
          : 'Congratulate students on taking step one and guide them to Microclass 2.',
      },
    },
  ];

  return {
    id: 'pres-m00-01-01',
    slug: 'm00-01-01-manifesto',
    lessonId: 'm00-01',
    title: isEs ? 'Microclase 1: El Manifiesto Creator Lab' : 'Microclass 1: Creator Lab Manifesto',
    moduleTag: isEs ? 'SEMANA 0 · MICROCLASE 1' : 'WEEK 0 · MICROCLASS 1',
    estimatedMinutes: 5,
    slides,
  };
};
