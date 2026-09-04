import { SlideData } from './types';

export const getLiveLab1SlidesBlock2 = (isEs: boolean): SlideData[] => [
  {
    id: 's05',
    type: 'comparison',
    tag: isEs ? 'REESCRITURA EN VIVO' : 'LIVE SCRIPT REWRITE',
    title: isEs ? 'De Anuncio Tradicional a Gancho Nativo (Casos Reales)' : 'Traditional Ad vs. Native Hook (Live Examples)',
    comparison: isEs
      ? {
          beforeLabel: '❌ Frases Corporativas que Nadie Escucha',
          before: [
            '"Somos la empresa líder en soluciones contables."',
            '"Visita nuestra tienda con 20% de descuento."',
            '"Ofrecemos tratamientos odontológicos de última tecnología."',
            '"Compre nuestros cursos para crecer en redes sociales."',
          ],
          afterLabel: '✓ Ganchos Nativos que Abren Conversaciones',
          after: [
            '"Si estás pagando de más en impuestos por no saber esto, mira este truco..."',
            '"Por qué este par de botas dura 4 años sin despegarse: te muestro la suela..."',
            '"El error al cepillarte que te mancha los dientes en 6 meses..."',
            '"Cómo llenar tu WhatsApp de clientes sin pagar a influencers de $2.000 USD."',
          ],
        }
      : {
          beforeLabel: '❌ Corporate Pitches Nobody Listens To',
          before: [
            '"We are the #1 accounting firm for businesses."',
            '"Visit our store for 20% off today."',
            '"Top quality cosmetic dentistry solutions."',
            '"Buy our marketing courses for social growth."',
          ],
          afterLabel: '✓ Native Problem-Solving Hooks',
          after: [
            '"If you are overpaying in taxes because of this rule, watch this..."',
            '"Why these leather boots last 4 years without breaking: let me show you..."',
            '"The #1 mistake that stains your teeth within 6 months..."',
            '"How to fill WhatsApp with clients without $2k influencers."',
          ],
        },
    instructorNotes: {
      duration: '25:00 - 35:00 min',
      script: isEs
        ? 'Pidan a los alumnos que lean sus frases actuales. En vivo transformamos 2 o 3 frases del chat en ganchos de alta retención.'
        : 'Ask attendees for current slogans in chat and rewrite 2-3 live into native hooks.',
    },
  },
  {
    id: 's06',
    type: 'concept',
    tag: isEs ? 'LOS 3 FORMATOS UGC' : 'THE 3 UGC FORMATS',
    title: isEs ? 'Los 3 Formatos Maestros de UGC Comercial' : 'The 3 Master Commercial UGC Formats',
    subtitle: isEs
      ? 'Cómo utilizar el contenido generado por usuarios y creadores internos sin actores ni agencias caras.'
      : 'How to deploy user and in-house creator content without expensive actors or agencies.',
    points: isEs
      ? [
          {
            label: '1. UGC de Cliente Real (Testimonio)',
            text: 'Unboxing o reacción honesta de un comprador mostrando el producto y su satisfacción en 15 segundos.',
            detailData: {
              tag: 'FORMATO 01 // TESTIMONIAL',
              title: 'La Voz del Cliente Satisfecho',
              description: 'Grabar un selfie espontáneo o compartir una captura de WhatsApp elimina el miedo al fraude.',
              imageCaption: 'Cliente Real · Desempaque Espontáneo',
              image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Sin guion forzado ni poses de catálogo', 'Muestra el producto recién llegado'],
              actionTip: 'Pide a tus mejores clientes un video de 15 segundos a cambio de un beneficio.',
            },
          },
          {
            label: '2. UGC de Creador Interno (EGC)',
            text: 'El fundador o especialista técnico hablando como creador independiente, aportando trucos y autoridad.',
            detailData: {
              tag: 'FORMATO 02 // CREADOR INTERNO',
              title: 'Autoridad Técnica sin Filtros',
              description: 'Nadie conoce tu producto mejor que tú. Tu voz experta genera 4 veces más confianza que un influencer contratado.',
              imageCaption: 'Fundador · Creador Independiente',
              image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Celular en mano y luz de ventana', 'Lenguaje cercano de tú a tú'],
              actionTip: 'Habla como si le estuvieras explicando el truco a un amigo en un café.',
            },
          },
          {
            label: '3. UGC Demostrativo en Primera Persona (POV)',
            text: 'Tomas a la altura de los ojos donde solo se ven tus manos manipulando la herramienta o el material.',
            detailData: {
              tag: 'FORMATO 03 // POV DEMO',
              title: 'La Inmersión Total en el Oficio',
              description: 'Ideal para quienes no quieren dar la cara todo el tiempo: el foco visual está en la textura y el trabajo.',
              imageCaption: 'Manos Trabajando · Audio Real',
              image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Plano detalle macro a 15cm', 'Sonido ambiente ASMR sin cortes'],
              actionTip: 'Usa un trípode de pecho o apoya el celular en un estante a la altura de tus ojos.',
            },
          },
        ]
      : [
          { label: '1. Customer UGC', text: 'Real buyer unboxing and honest review in 15s.' },
          { label: '2. In-House Creator (EGC)', text: 'Founder or specialist providing authentic technical authority.' },
          { label: '3. POV Hands-On Demo', text: 'First-person perspective focusing on tools and craftsmanship.' },
        ],
    instructorNotes: {
      duration: '35:00 - 45:00 min',
      script: isEs
        ? 'Expliquen los 3 formatos y aclaren que no es necesario dar la cara en todos los videos: el formato POV es ideal para empezar.'
        : 'Clarify that students do not need to show face on every clip: POV demo is perfect for introverts.',
    },
  },
  {
    id: 's07',
    type: 'steps',
    tag: isEs ? 'MINERÍA DE VENTAS' : 'SALES MINING',
    title: isEs ? 'El Circuito de 4 Pasos para Desarmar Objeciones' : 'The 4-Step Objection Defusing Framework',
    steps: isEs
      ? [
          {
            number: '01',
            title: 'Caza la Duda',
            desc: 'Revisa tus chats de WhatsApp y extrae la pregunta o reparo que más te hacen antes de comprar.',
          },
          {
            number: '02',
            title: 'Gancho Incómodo',
            desc: 'Abre el video citando la objeción: "Un cliente me dijo que cobramos caro; esta fue mi respuesta:"',
          },
          {
            number: '03',
            title: 'Respuesta Maestra',
            desc: 'Explica en 30 segundos la ciencia, los materiales y la garantía que justifican tu valor.',
          },
          {
            number: '04',
            title: 'Puente a WhatsApp',
            desc: 'Cierra invitando a comprobar el servicio con una palabra clave ("Comenta INFO").',
          },
        ]
      : [
          { number: '01', title: 'Hunt the FAQ', desc: 'Scan WhatsApp chats for the top recurring buyer hesitation.' },
          { number: '02', title: 'Uncomfortable Hook', desc: 'Open citing friction: "A customer told me we charge too much:"' },
          { number: '03', title: 'Master Answer', desc: 'Deliver a 30s technical breakdown of craftsmanship and warranty.' },
          { number: '04', title: 'WhatsApp Bridge', desc: 'Close with keyword trigger to continue the conversation.' },
        ],
    instructorNotes: {
      duration: '45:00 - 52:00 min',
      script: isEs
        ? 'Las objeciones no son quejas: son guiones de venta ya redactados por tus propios clientes.'
        : 'Objections are not complaints: they are scripts written by your prospects.',
    },
  },
  {
    id: 's08',
    type: 'statement',
    tag: 'BLOQUE 02 · 52:00 - 58:00 MIN',
    title: isEs
      ? 'Tu cliente no compra cuando entiende lo que vendes; compra cuando siente que tú entiendes su problema mejor que él.'
      : 'Buyers do not purchase when they understand your offer; they purchase when they feel you understand their problem better than they do.',
    subtitle: isEs
      ? 'Cuando describes el dolor con sus palabras exactas, el cliente asume automáticamente que tienes la solución correcta.'
      : 'When you describe their friction with precision, prospects automatically assume you have the exact solution.',
    highlight: isEs ? 'Empatía Radical = Conversión Acelerada' : 'Radical Empathy = Fast Conversion',
    bgColor: '#FF7F07',
    instructorNotes: {
      duration: '52:00 - 58:00 min',
      script: isEs
        ? 'Esta es la ley psicológica de Creator Lab: quien mejor articula el problema se queda con la venta.'
        : 'The foundational psychology rule: whoever articulates the pain best closes the sale.',
    },
  },
];
