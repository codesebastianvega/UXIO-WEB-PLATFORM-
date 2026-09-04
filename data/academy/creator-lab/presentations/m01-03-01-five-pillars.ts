import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM010301 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Los 5 Pilares de Contenido UXIO' : 'The 5 UXIO Content Pillars',
      subtitle: isEs
        ? 'Microclase 1.3.1 · La dieta balanceada 40/20/20/10/10 para mantener a tu audiencia expectante y comprando.'
        : 'Microclass 1.3.1 · The 40/20/20/10/10 balanced diet to keep buyers engaged and converting.',
      highlight: isEs ? 'Semana 1 · Pilares Maestros' : 'Week 1 · Master Pillars',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// LA DIETA 40/20/20/10/10' : '// THE 40/20/20/10/10 DIET',
        badge: isEs ? '5 PILARES' : '5 PILLARS',
        items: [
          { title: isEs ? '1. Educar & Resolver (40%)' : '1. Educate (40%)', desc: isEs ? 'Tutoriales rápidos y trucos técnicos' : 'Actionable tutorials & tips', color: '#FE385B' },
          { title: isEs ? '2. Proceso & Artesanía (20%)' : '2. Craftsmanship (20%)', desc: isEs ? 'B-roll de taller y manos trabajando' : 'Macro B-roll & workshops', color: '#FF7F07' },
          { title: isEs ? '3. Prueba Social (20%)' : '3. Social Proof (20%)', desc: isEs ? 'Testimonios y transformaciones reales' : 'Case studies & testimonials', color: '#10B981' },
          { title: isEs ? '4. Desmitificar (10%)' : '4. Debunking (10%)', desc: isEs ? 'Desarmar mitos y malas prácticas' : 'Busting industry myths', color: '#00F0FF' },
          { title: isEs ? '5. Venta Directa (10%)' : '5. Direct Pitch (10%)', desc: isEs ? 'Oferta estructurada con CTA WhatsApp' : 'Direct offer with WhatsApp CTA', color: '#7928CA' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 1.3.1! Hoy aprenderemos a balancear los 5 pilares para que tu canal no se sienta como un volante de ofertas ni como una cuenta de memes.'
          : 'Welcome to Microclass 1.3.1! Today we balance the 5 pillars so your channel delivers value and sales consistently.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'Una cuenta que solo vende aleja seguidores; una cuenta que solo entretiene no paga las cuentas.'
        : 'An account that only pitches drives users away; an account that only entertains cannot pay bills.',
      subtitle: isEs
        ? 'El secreto del éxito comercial es la dieta balanceada: 80% de valor irremplazable (educación, proceso, casos y mitos) y 20% de venta estructurada hacia WhatsApp.'
        : 'The secret is a balanced diet: 80% irreplaceable value (education, craft, proof, myths) and 20% structured selling to WhatsApp.',
      highlight: isEs ? 'Dieta 80/20 · Crecimiento Sostenible' : '80/20 Diet · Sustainable Growth',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'La consistencia en ventas no se logra gritando "cómprame", sino educando a tu cliente para que reconozca tu valor.'
          : 'Sales consistency is not achieved by shouting discounts, but by educating buyers to see your worth.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'LOS 5 PILARES MAESTROS' : 'THE 5 MASTER PILLARS',
      title: isEs ? 'Los 5 Pilares de Contenido UXIO (Desglose)' : 'The 5 UXIO Content Pillars (Breakdown)',
      subtitle: isEs
        ? 'Cada uno cumple una función psicológica en la mente del comprador antes de escribir a WhatsApp.'
        : 'Each serves a precise psychological role in the buyer journey before contacting WhatsApp.',
      points: isEs
        ? [
            {
              label: '1. Educar & Resolver (40%)',
              text: 'Tutoriales rápidos y soluciones a micro-problemas que demuestran tu conocimiento técnico.',
              detailData: {
                tag: 'PILAR 01 // EDUCACIÓN (40%)',
                title: 'Autoridad Técnica Inmediata',
                description: 'Enseñar cómo resolver una fricción atrae a compradores cualificados que valoran tu especialidad.',
                imageCaption: 'Educación Práctica · Solución en 45s',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
                highlights: ['"El truco para hacer X en 30s"', '"3 errores al contratar Y"'],
                actionTip: 'Elige un problema que resuelvas en 45 segundos.',
              },
            },
            {
              label: '2. Proceso & Artesanía (20%)',
              text: 'Tomas de manos trabajando, herramientas, preparación y el cuidado en cada detalle.',
              detailData: {
                tag: 'PILAR 02 // PROCESO & BACKSTAGE (20%)',
                title: 'Elevación de Valor Percibido',
                description: 'Mostrar las horas de trabajo y la precisión artesanal justifica precios altos sin resistencia.',
                imageCaption: 'Tomas Macro · Audio ASMR Real',
                image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Time-lapse de fabricación', 'Inspección de costuras y materiales'],
                actionTip: 'Graba 5 tomas de tus manos antes de cerrar el día.',
              },
            },
            {
              label: '3. Prueba Social & Casos Reales (20%)',
              text: 'Historias de clientes, capturas de chats de satisfacción y el antes/después del servicio.',
              detailData: {
                tag: 'PILAR 03 // PRUEBA SOCIAL (20%)',
                title: 'Eliminación del Riesgo de Compra',
                description: 'La prueba de terceros destruye el escepticismo: si le funcionó a alguien como yo, me funcionará a mí.',
                imageCaption: 'Transformaciones · Chats Reales',
                image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Capturas de pantalla de WhatsApp', 'Video selfie de cliente con el paquete'],
                actionTip: 'Pide una nota de voz a tu cliente más reciente.',
              },
            },
            {
              label: '4. Desmitificar & Opinión Fuerte (10%)',
              text: 'Derribar malas prácticas de la industria y alertar sobre opciones baratas engañosas.',
              detailData: {
                tag: 'PILAR 04 // DESMITIFICAR (10%)',
                title: 'Posicionamiento Polarizante',
                description: 'Tomar una postura honesta frente a las mentiras de tu sector genera lealtad incondicional.',
                imageCaption: 'Transparencia Radical · Mitos Fuera',
                image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80',
                highlights: ['"Por qué lo barato sale caro en X"', '"La mentira que te contaron sobre Y"'],
                actionTip: 'Nombra una práctica que tus competidores hacen mal.',
              },
            },
            {
              label: '5. Venta Directa & Oferta (10%)',
              text: 'Presentación clara de tu servicio con cupos disponibles y llamado con palabra clave a WhatsApp.',
              detailData: {
                tag: 'PILAR 05 // VENTA DIRECTA (10%)',
                title: 'Conversión con Palabra Clave',
                description: 'Hacer el llamado a la acción seguro y directo para quienes ya consumieron tu contenido de valor.',
                imageCaption: 'Llamado Claro · Cierre en WhatsApp',
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80',
                highlights: ['"Abrimos 5 cupos para este mes"', '"Comenta ASESORIA para pasarte los datos"'],
                actionTip: 'Cierra siempre con 1 solo paso claro.',
              },
            },
          ]
        : [
            { label: '1. Educate & Solve (40%)', text: 'Actionable micro-problem solving tutorials.' },
            { label: '2. Process & Craft (20%)', text: 'Hands-on macro B-roll and workshop craftsmanship.' },
            { label: '3. Social Proof (20%)', text: 'Customer case studies, unboxing and chat screenshots.' },
            { label: '4. Debunking (10%)', text: 'Busting industry myths and poor competitor practices.' },
            { label: '5. Direct Pitch (10%)', text: 'Clear commercial offers with limited spots & WhatsApp CTA.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Muestren cada uno de los 5 pilares en pantalla interactiva. Los 5 pilares cubren todas las etapas del comprador.'
          : 'Show all 5 pillars on the interactive deck covering every buyer psychological trigger.',
      },
    },
    {
      id: 's04',
      type: 'steps',
      tag: isEs ? 'CALENDARIO SEMANAL' : 'WEEKLY CALENDAR',
      title: isEs ? 'Los 5 Pilares en tu Calendario Semanal (L-V)' : 'The 5 Pillars on Your Weekly Schedule (M-F)',
      steps: isEs
        ? [
            {
              number: 'LUN',
              title: '1. Educar (40%)',
              desc: 'Tutorial técnico de 45s resolviendo una fricción habitual de tus clientes.',
            },
            {
              number: 'MAR',
              title: '2. Proceso (20%)',
              desc: 'Tomas de detalle de tu taller, pantalla o herramientas trabajando.',
            },
            {
              number: 'MIÉ',
              title: '3. Prueba Social (20%)',
              desc: 'Caso de éxito real: el antes y después de un cliente satisfecho.',
            },
            {
              number: 'JUE',
              title: '4. Desmitificar (10%)',
              desc: 'Derribar un mito de la industria ("Por qué lo barato sale caro").',
            },
            {
              number: 'VIE',
              title: '5. Venta Directa (10%)',
              desc: 'Oferta comercial de fin de semana con llamado a WhatsApp.',
            },
          ]
        : [
            { number: 'MON', title: '1. Educate (40%)', desc: '45-second technical tutorial fixing a common friction.' },
            { number: 'TUE', title: '2. Process (20%)', desc: 'Macro craftsmanship B-roll of tools and preparation.' },
            { number: 'WED', title: '3. Proof (20%)', desc: 'Real customer story: before & after satisfaction.' },
            { number: 'THU', title: '4. Myth (10%)', desc: 'Busting an industry myth and exposing cheap alternatives.' },
            { number: 'FRI', title: '5. Pitch (10%)', desc: 'Weekend commercial intake with keyword WhatsApp CTA.' },
          ],
      instructorNotes: {
        duration: '3:30 - 4:15 min',
        script: isEs
          ? 'Este calendario de 5 días de Lunes a Viernes asigna exactamente 1 pilar por día. Cero estrés y máxima variedad.'
          : 'This 5-day Monday to Friday schedule assigns exactly 1 pillar per day for seamless execution.',
      },
    },
    {
      id: 's05',
      type: 'comparison',
      tag: isEs ? 'CONTRASTE ESTRATÉGICO' : 'STRATEGIC CONTRAST',
      title: isEs ? 'Cuenta sin Pilares vs. Cuenta con Sistema UXIO' : 'Random Posts vs. UXIO Pillar Strategy',
      comparison: isEs
        ? {
            beforeLabel: 'Publicar sin Pilares (A la Deriva)',
            before: [
              'Publica solo cuando "se le ocurre una idea".',
              'Sube fotos de stock con frases motivacionales.',
              'No sabe por qué un video funcionó y otro no.',
              'Cero conversaciones de venta iniciadas en el mes.',
            ],
            afterLabel: 'Estrategia con 5 Pilares UXIO',
            after: [
              '30 ideas planificadas en 45 minutos para todo el mes.',
              'Cada video tiene un objetivo claro (autoridad, prueba o venta).',
              'Medición precisa de retención y palabras clave comentadas.',
              'Flujo constante de 15 a 40 prospectos calificados por semana.',
            ],
          }
        : {
            beforeLabel: 'Random Posting (No System)',
            before: [
              'Publishes only when inspiration strikes randomly.',
              'Posts generic quote templates and stock images.',
              'No understanding of why videos perform or fail.',
              'Zero sales conversations started all month.',
            ],
            afterLabel: 'UXIO 5-Pillar System',
            after: [
              '30 ideas structured in 45 minutes for the month.',
              'Every video has a concrete objective (authority, proof, CTA).',
              'Precise tracking of retention and keyword triggers.',
              'Steady pipeline of 15-40 qualified WhatsApp leads per week.',
            ],
          },
      instructorNotes: {
        duration: '4:15 - 4:45 min',
        script: isEs
          ? 'El orden da tranquilidad mental. Cuando tienes tus 5 pilares definidos, nunca más sufres del bloqueo de no saber qué publicar.'
          : 'Structure brings peace of mind. With 5 pillars mapped, creative block is eliminated permanently.',
      },
    },
    {
      id: 's06',
      type: 'challenge',
      tag: isEs ? 'CHECKPOINT PRÁCTICO' : 'PRACTICAL CHECKPOINT',
      title: isEs ? 'Misión 1.3.1: Asigna tus 5 Temas' : 'Mission 1.3.1: Map Your 5 Topics',
      challengeData: isEs
        ? {
            whatToDo: 'Escribe en una hoja 1 tema para cada uno de los 5 pilares adaptado a tu negocio.',
            whatToDeliver: '5 Títulos preliminares para tu Matriz de 30 Días.',
            whereToSubmit: 'Canal de Discord de la cohorte.',
            criteria: [
              'Pilar 1: 1 Tema educativo técnico (40%)',
              'Pilar 2: 1 Toma de proceso / backstage (20%)',
              'Pilar 3: 1 Caso real o testimonio (20%)',
              'Pilar 4: 1 Mito a desmentir (10%)',
              'Pilar 5: 1 Oferta con llamado a WhatsApp (10%)',
            ],
          }
        : {
            whatToDo: 'Write down 1 topic for each of the 5 pillars tailored to your specific offer.',
            whatToDeliver: '5 Preliminary titles for your 30-Day Matrix.',
            whereToSubmit: 'Cohort Discord channel.',
            criteria: [
              'Pillar 1: 1 Technical educational topic (40%)',
              'Pillar 2: 1 Process / backstage scene (20%)',
              'Pillar 3: 1 Real customer case study (20%)',
              'Pillar 4: 1 Industry myth to debunk (10%)',
              'Pillar 5: 1 Commercial offer with WhatsApp CTA (10%)',
            ],
          },
      instructorNotes: {
        duration: '4:45 - 5:15 min',
        script: isEs
          ? 'En la siguiente microclase entraremos de lleno en la plantilla oficial de la Matriz de 30 Días del Reto 1.'
          : 'In the next microclass, we dive into the official Challenge 1 matrix template.',
      },
    },
  ];

  return {
    id: 'm01-03-01-five-pillars',
    slug: 'm01-03-01-five-pillars',
    lessonId: 'm01-03',
    title: isEs ? '1.3.1 Los 5 Pilares de Contenido UXIO' : '1.3.1 The 5 UXIO Content Pillars',
    moduleTag: isEs ? 'SEMANA 1 · CLASE 1.3' : 'WEEK 1 · LESSON 1.3',
    estimatedMinutes: 5,
    slides,
  };
};
