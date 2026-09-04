import { SlideData } from './types';

export const getLiveLab2SlidesBlock3 = (isEs: boolean): SlideData[] => [
  {
    id: 's09',
    type: 'section',
    tag: isEs ? 'TEARDOWN DE ANUNCIOS COMERCIALES' : 'COMMERCIAL AD TEARDOWN',
    title: isEs ? 'Laboratorio de Teardown: Video $3.8K vs. Video Fracasado' : 'Teardown Lab: $3.8K Revenue Video vs. Zero-Reach Flop',
    subtitle: isEs
      ? 'Análisis quirúrgico segundo a segundo de dos piezas de video reales: por qué una murió en el scroll y la otra colapsó el WhatsApp de ventas.'
      : 'Second-by-second forensic teardown of two real videos: why one flopped and one drove $3.8K in sales.',
    highlight: isEs ? 'Análisis Forense Segundo a Segundo' : 'Second-by-Second Video Forensics',
    bgColor: '#7928CA',
    instructorNotes: {
      duration: '60:00 - 64:00 min',
      script: isEs
        ? 'Entramos al corazón de la sesión: vamos a proyectar dos videos reales y comparar la retención segundo por segundo.'
        : 'Screen both videos and guide the cohort through second-by-second analytics.',
    },
  },
  {
    id: 's10',
    type: 'comparison',
    tag: isEs ? 'DESARME FORENSE' : 'FORENSIC BREAKDOWN',
    title: isEs ? 'La Anatomía del Video Fracasado vs. Video Ganador ($3.8K)' : 'Anatomy of a Flop Video vs. $3.8K Winner Video',
    comparison: isEs
      ? {
          beforeLabel: '❌ Video Fracasado (Cero Conversión)',
          before: [
            '0-4s: Logotipo animado con música corporativa aburrida (pérdida del 70% de audiencia).',
            '4-20s: El fundador habla a cámara fija sin ningún corte ni B-roll de apoyo.',
            '20-40s: Lista técnica de características que no le importan al cliente.',
            '40-50s: Termina con "Síguenos para más consejos y dale like".',
          ],
          afterLabel: '✓ Video Ganador ($3.800 USD en 48 Horas)',
          after: [
            '0-2s: Gancho al dolor sosteniendo el producto con las manos: "El error que arruina tu compra:".',
            '2-15s: Corte a toma macro 2x mostrando la costura interna de calidad superior.',
            '15-35s: Prueba de resistencia en vivo con sonido real (ASMR de tijera y doble puntada).',
            '35-45s: "Comenta BOTAS para enviarte catálogo a WhatsApp con envío gratis hoy".',
          ],
        }
      : {
          beforeLabel: '❌ Flop Video (Zero Conversion)',
          before: [
            '0-4s: Animated corporate logo losing 70% of viewers instantly.',
            '4-20s: Monotone talking head with zero visual B-roll layers.',
            '20-40s: Dry technical spec list instead of client benefits.',
            '40-50s: Weak "like and follow for more" closing.',
          ],
          afterLabel: '✓ Winner Video ($3.8K Revenue in 48h)',
          after: [
            '0-2s: Friction attack holding product: "The #1 mistake ruining your purchase:".',
            '2-15s: 2x macro cut showcasing genuine internal double-stitch.',
            '15-35s: Live durability stress test with tactile ASMR sound.',
            '35-45s: "Comment BOOTS for WhatsApp catalog + free shipping today".',
          ],
        },
    instructorNotes: {
      duration: '64:00 - 72:00 min',
      script: isEs
        ? 'Muestren cómo el video ganador usó el celular exacto y un B-roll de 5 segundos para cerrar 48 ventas en WhatsApp.'
        : 'Highlight how simple 5s B-roll cuts and direct WhatsApp CTA generated 48 sales.',
    },
  },
  {
    id: 's11',
    type: 'concept',
    tag: isEs ? 'RETENCIÓN VISUAL' : 'VISUAL RETENTION',
    title: isEs ? 'Los 3 Ganchos Visuales de B-Roll (0 a 0.8 Segundos)' : '3 Visual B-Roll Hooks (0 to 0.8 Seconds)',
    subtitle: isEs
      ? 'Cómo detener el dedo del usuario antes de que escuche tu primera palabra con movimiento físico.'
      : 'How to stop the thumb scroll before viewers even hear your first spoken word.',
    points: isEs
      ? [
          {
            label: '1. El Movimiento Inverso (Desempaque Rápido)',
            text: 'Comienza el video abriendo la caja o despegando un sello a 5 cm del lente en el segundo 0.',
            detailData: {
              tag: 'GANCHO 01 // MOVIMIENTO INVERSO',
              title: 'La Curiosidad del Desempaque',
              description: 'El cerebro humano no puede resistir ver qué hay dentro de un paquete que se abre frente a sus ojos.',
              imageCaption: 'Desempaque en Primer Plano',
              image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Sonido ASMR de caja abriéndose', 'Movimiento hacia la cámara'],
              actionTip: 'Haz el movimiento enérgico y sin titubeos.',
            },
          },
          {
            label: '2. La Prueba de Resistencia / Estrés',
            text: 'Dobla el material, corta la muestra o moja la tela para demostrar durabilidad en el segundo 1.',
            detailData: {
              tag: 'GANCHO 02 // PRUEBA DE ESTRÉS',
              title: 'La Demostración Innegable',
              description: 'Ver que el producto resiste una prueba extrema destruye el 100% de las objeciones de precio.',
              imageCaption: 'Prueba de Resistencia en Vivo',
              image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Genera tensión visual instantánea', 'Prueba la calidad en lugar de prometerla con palabras'],
              actionTip: 'Usa una toma cenital a 90° con buena luz.',
            },
          },
          {
            label: '3. El POV de Pantalla / Métricas',
            text: 'Muestra la pantalla de tu laptop con los datos o el mensaje de un cliente sonriendo diciendo "me encantó".',
            detailData: {
              tag: 'GANCHO 03 // PANTALLA Y PRUEBA SOCIAL',
              title: 'La Prueba Social en Pantalla',
              description: 'Un mensaje real en WhatsApp o gráfico de rendimiento capta credibilidad subconsciente inmediata.',
              imageCaption: 'POV de Pantalla con Resultados Reales',
              image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Cero diapositivas teóricas', 'Captura de pantalla real en el celular'],
              actionTip: 'Protege datos privados de clientes con un desenfoque suave.',
            },
          },
        ]
      : [
          { label: '1. Fast Unboxing Motion', text: 'Open package 5cm from lens on second 0 for instant curiosity.' },
          { label: '2. Live Stress / Durability Test', text: 'Bend, scratch or stress-test material to destroy price doubts.' },
          { label: '3. Screen POV Social Proof', text: 'Show real client WhatsApp chat screenshot validating your work.' },
        ],
    instructorNotes: {
      duration: '72:00 - 78:00 min',
      script: isEs
        ? 'Expliquen que el gancho visual es la imagen que entra antes de que el cerebro procese el audio.'
        : 'Explain that the visual hook triggers before the brain decodes audio speech.',
    },
  },
  {
    id: 's12',
    type: 'concept',
    tag: isEs ? 'SCRIPT DOCTORING EN VIVO' : 'LIVE SCRIPT DOCTORING',
    title: isEs ? 'Transformación de Guiones en Vivo (Script Teardown)' : 'Real-Time Script Transformation Lab',
    subtitle: isEs
      ? 'Cómo reescribir un guion aburrido de alumno y convertirlo en un imán de prospectos calificados en WhatsApp.'
      : 'Turning weak student scripts into qualified WhatsApp lead magnets live.',
    points: isEs
      ? [
          {
            label: 'Guion Original (Aburrido y Genérico)',
            text: '"Hola a todos, en nuestra tienda ofrecemos las mejores botas de cuero hechas a mano con materiales de primera..."',
            detailData: {
              tag: 'DIAGNÓSTICO // GUION DÉBIL',
              title: 'Por qué este guion no vende',
              description: 'Nadie se despierta con ganas de ver un comercial de "las mejores botas". Suena a anuncio de radio de 1995.',
              imageCaption: 'Guion Tradicional Débil',
              image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Cero dolor del cliente', 'Egocéntrico (habla de la empresa, no del comprador)'],
              actionTip: 'Elimina siempre la palabra "Ofrecemos" o "Nuestra empresa".',
            },
          },
          {
            label: 'Guion Transformado UXIO (Gancho al Dolor)',
            text: '"Si compraste botas que a los 2 meses se abrieron en la punta, este es el pegamento barato que usaron:" (Corta a B-roll)',
            detailData: {
              tag: 'TRANSFORMACIÓN // GUION UXIO',
              title: 'Por qué este guion detiene el scroll',
              description: 'Ataca una frustración dolorosa que el comprador ya vivió y le enseña cómo identificar la trampa.',
              imageCaption: 'Guion UXIO Orientado al Dolor',
              image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Posiciona al creador como el defensor del cliente', 'Genera deseo por la solución superior'],
              actionTip: 'Muestra la costura real en la toma siguiente.',
            },
          },
          {
            label: 'Llamado a la Acción (Puente a Conversación)',
            text: '"Comenta BOTAS y te envío el catálogo con fotos reales de la costura por WhatsApp."',
            detailData: {
              tag: 'CIERRE // PUENTE WHATSAPP',
              title: 'Conversación Privada de Alto Cierre',
              description: 'Mueve al prospecto caliente directo a una conversación 1 a 1 donde la tasa de cierre es superior al 40%.',
              imageCaption: 'Cierre Directo a WhatsApp',
              image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Palabra clave de una sola palabra', 'Incentivo de atención personalizada'],
              actionTip: 'Ten listo el enlace directo wa.me en tu biografía.',
            },
          },
        ]
      : [
          { label: 'Original Script (Weak & Generic)', text: '"Hello everyone, at our shop we sell the best handmade leather shoes..."' },
          { label: 'Transformed UXIO Script (Pain Hook)', text: '"If your boots tore apart after 2 months, here is the cheap glue they used:"' },
          { label: 'Conversion CTA (WhatsApp Bridge)', text: '"Comment BOOTS to get catalog with raw stitching photos on WhatsApp."' },
        ],
    instructorNotes: {
      duration: '78:00 - 84:00 min',
      script: isEs
        ? 'Tomen 2 guiones del chat y reescríbanlos en directo con los alumnos aplicando esta misma fórmula.'
        : 'Take 2 live script submissions from chat and rewrite them using this formula.',
    },
  },
  {
    id: 's13',
    type: 'steps',
    tag: isEs ? 'DINÁMICA EN DIRECTO' : 'LIVE CHALLENGE',
    title: isEs ? 'Dinámica de 3 Minutos: Tu Gancho de Fricción en el Chat' : '3-Minute Live Sprint: Write Your Pain Hook in Chat',
    steps: isEs
      ? [
          {
            number: '01',
            title: 'Elige el Dolor Más Caro de tu Cliente',
            desc: '¿Qué error le hace perder tiempo, dinero o tranquilidad al comprar en tu industria?',
          },
          {
            number: '02',
            title: 'Escribe tu Gancho de 1 Frase',
            desc: 'Usa la estructura: "El error al [Acción] que te cuesta [Pérdida/Frustración]:"',
          },
          {
            number: '03',
            title: 'Pégalo en el Chat para Feedback en Vivo',
            desc: 'El instructor seleccionará 3 ganchos para calibrarlos y afinarlos en directo.',
          },
        ]
      : [
          { number: '01', title: 'Pick Client’s Costliest Pain', desc: 'What mistake costs them money, time or peace of mind?' },
          { number: '02', title: 'Draft 1-Sentence Hook', desc: 'Use formula: "The #1 mistake when [Action] that costs you [Pain]:"' },
          { number: '03', title: 'Paste in Chat for Live Tuning', desc: 'Instructor selects 3 live hooks for immediate calibration.' },
        ],
    instructorNotes: {
      duration: '84:00 - 88:00 min',
      script: isEs
        ? 'Cronometren 3 minutos de música en vivo y lean los ganchos más potentes del chat.'
        : 'Set a 3-minute timer with live music and spotlight the best chat hooks.',
    },
  },
];
