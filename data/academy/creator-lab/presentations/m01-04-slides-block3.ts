import { SlideData } from './types';

export const getLiveLab1SlidesBlock3 = (isEs: boolean): SlideData[] => [
  {
    id: 's09',
    type: 'section',
    tag: isEs ? 'HOT SEATS EN TIEMPO REAL' : 'REAL-TIME HOT SEATS',
    title: isEs ? 'Mesa de Calibración: Auditoría a Alumnos' : 'Calibration Table: Live Student Audits',
    subtitle: isEs
      ? 'Subimos a 3 estudiantes al estrado para desarmar sus ganchos, reescribir sus titulares y calibrar su matriz en vivo.'
      : 'Inviting 3 students to the hot seat to audit their hooks and calibrate their matrix in real time.',
    highlight: isEs ? 'Auditoría en Caliente · Feedback 1 a 1' : 'Live Hot Seats · 1-on-1 Feedback',
    bgColor: '#7928CA',
    instructorNotes: {
      duration: '58:00 - 62:00 min',
      script: isEs
        ? 'Abran micrófonos para el primer alumno voluntario. Recuerden mantener las devoluciones constructivas y de aplicación inmediata.'
        : 'Open mic for the first volunteer. Keep feedback actionable, structured and rapid.',
    },
  },
  {
    id: 's10',
    type: 'concept',
    tag: isEs ? 'HOT SEAT 01 · SERVICIOS B2B' : 'HOT SEAT 01 · B2B SERVICES',
    title: isEs ? 'Auditoría #1: Negocio de Servicios Profesionales' : 'Audit #1: Professional Services Business',
    subtitle: isEs
      ? 'Cómo pasar de conceptos técnicos aburridos a ganchos de alto impacto financiero.'
      : 'Turning complex technical jargon into high-impact commercial hooks.',
    points: isEs
      ? [
          {
            label: 'Diagnóstico Inicial',
            text: 'El alumno hablaba de "asesoría tributaria integral", un concepto abstracto que no despierta urgencia.',
            detailData: {
              tag: 'DIAGNÓSTICO // SERVICIOS',
              title: 'El Error de la Terminología Corporativa',
              description: 'Tu cliente no busca "asesoría integral"; busca pagar menos impuestos legalmente o evitar multas costosas.',
              imageCaption: 'Antes: Abstracto · Después: Dinero Real',
              image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Eliminar palabras como "integral, líder, soluciones"', 'Centrarse en el beneficio financiero directo'],
              actionTip: 'Calcula cuánto dinero ahorra o genera tu servicio.',
            },
          },
          {
            label: 'Calibración del Gancho (0-3s)',
            text: 'Reescritura: "Si estás pagando de más en impuestos por no conocer esta deducción, mira cómo ahorrar en 45s."',
            detailData: {
              tag: 'CALIBRACIÓN // GANCHO DE 3s',
              title: 'La Promesa Concreta',
              description: 'El gancho sitúa al espectador en un escenario de pérdida inminente y ofrece el salvavidas de inmediato.',
              imageCaption: 'Gancho Calibrado · Retención 85%',
              image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Muestra el formulario real en pantalla', 'Explica la casilla exacta sin jerga legal'],
              actionTip: 'Usa una captura de pantalla del documento oficial como fondo visual.',
            },
          },
          {
            label: 'Cierre a WhatsApp',
            text: 'CTA: "Comenta DEDUCCION y te paso la plantilla de cálculo directo a tu WhatsApp."',
            detailData: {
              tag: 'CIERRE // CONVERSIÓN',
              title: 'El Imán de Prospectos Calificados',
              description: 'Entregar una herramienta gratuita en WhatsApp inicia una conversación con alguien que ya reconoció su problema.',
              imageCaption: 'Chat WhatsApp · Cierre Directo',
              image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Respuesta automática o manual en 5 minutos', 'Oferta de auditoría de 15 minutos'],
              actionTip: 'Ten listo el mensaje de bienvenida en WhatsApp Business.',
            },
          },
        ]
      : [
          { label: 'Initial Diagnosis', text: 'Vague jargon transformed into sharp financial benefit.' },
          { label: 'Hook Calibration', text: 'Specific tax deduction hook targeting overpaying friction.' },
          { label: 'WhatsApp CTA', text: 'Keyword trigger delivering calculation template in chat.' },
        ],
    instructorNotes: {
      duration: '62:00 - 68:00 min',
      script: isEs
        ? 'Muestren en pantalla cómo el cambio de 3 palabras duplicó la efectividad del mensaje.'
        : 'Demonstrate how a 3-word tweak doubles hook retention.',
    },
  },
  {
    id: 's11',
    type: 'concept',
    tag: isEs ? 'HOT SEAT 02 · PRODUCTOS FÍSICOS' : 'HOT SEAT 02 · PHYSICAL PRODUCTS',
    title: isEs ? 'Auditoría #2: Marca de Producto & Fabricación' : 'Audit #2: Physical Craft & Product Brand',
    subtitle: isEs
      ? 'Cómo vender calidad artesanal destacando la durabilidad frente a opciones baratas.'
      : 'Selling craftsmanship and durability over cheap disposable alternatives.',
    points: isEs
      ? [
          {
            label: 'Diagnóstico Inicial',
            text: 'El alumno publicaba fotos de producto con fondo blanco que parecían anuncios de catálogo sin emoción.',
            detailData: {
              tag: 'DIAGNÓSTICO // PRODUCTOS',
              title: 'La Muerte de la Foto de Catálogo',
              description: 'Las fotos de estudio no transmiten resistencia ni textura. En redes el video en manos vende 6x más.',
              imageCaption: 'Foto Estática vs. Video POV',
              image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Reemplazar fotos fijas por tomas de flexión y corte', 'Audio ASMR de tijeras, martillo y empaque'],
              actionTip: 'Dobla el producto frente a cámara para probar su flexibilidad.',
            },
          },
          {
            label: 'Calibración del Gancho (0-3s)',
            text: 'Reescritura: "Por qué tus zapatos se rompen a los 3 meses y cómo saber si estás comprando plástico pegado:"',
            detailData: {
              tag: 'CALIBRACIÓN // GANCHO DE 3s',
              title: 'La Comparativa Incómoda',
              description: 'Mostrar la costura interna de una opción barata frente al cuero genuino educa al comprador sin sonar agresivo.',
              imageCaption: 'Macro Comparativa · Calidad Real',
              image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Plano detalle a 10cm mostrando el hilo encerado', 'Prueba de resistencia al agua en vivo'],
              actionTip: 'Graba bajo luz natural de ventana.',
            },
          },
          {
            label: 'Cierre a WhatsApp',
            text: 'CTA: "Escribe BOTAS en comentarios y te mando el catálogo con envío gratis asegurado."',
            detailData: {
              tag: 'CIERRE // CONVERSIÓN',
              title: 'Incentivo de Compra Inmediata',
              description: 'El envío gratis o garantía extendida elimina el último obstáculo de compra en el chat.',
              imageCaption: 'Catálogo Móvil · Venta Directa',
              image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Catálogo en PDF optimizado para celular', 'Fotos reales de clientes usando el calzado'],
              actionTip: 'Envía fotos del empaque preparado antes del despacho.',
            },
          },
        ]
      : [
          { label: 'Initial Diagnosis', text: 'Static catalog photos replaced by tactile hands-on video.' },
          { label: 'Hook Calibration', text: 'Contrast comparison exposing cheap glue vs. stitched leather.' },
          { label: 'WhatsApp CTA', text: 'Keyword trigger sending mobile catalog with free shipping.' },
        ],
    instructorNotes: {
      duration: '68:00 - 74:00 min',
      script: isEs
        ? 'Muestren a la cohorte que los productos físicos tienen una ventaja visual inmensa si se aprovecha el macro y el sonido.'
        : 'Highlight that physical products have enormous visual leverage through macro shots and ASMR.',
    },
  },
  {
    id: 's12',
    type: 'concept',
    tag: isEs ? 'HOT SEAT 03 · MARCA PERSONAL' : 'HOT SEAT 03 · PERSONAL BRAND',
    title: isEs ? 'Auditoría #3: Consultor & Creador de Conocimiento' : 'Audit #3: Consultant & Knowledge Creator',
    subtitle: isEs
      ? 'Cómo diferenciarse del 99% de creadores genéricos tomando una postura clara.'
      : 'Standing out from 99% of generic coaches with clear contrarian conviction.',
    points: isEs
      ? [
          {
            label: 'Diagnóstico Inicial',
            text: 'El alumno repetía consejos genéricos que se encuentran gratis en Google, sin opinión propia.',
            detailData: {
              tag: 'DIAGNÓSTICO // CONOCIMIENTO',
              title: 'La Trampa de los Consejos de Manual',
              description: 'Repetir lo obvio te convierte en un commodity. Lo que genera seguidores fieles es tu perspectiva honesta de campo.',
              imageCaption: 'Consejo Genérico vs. Experiencia de Campo',
              image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Comparte lo que aprendiste perdiendo dinero o tiempo', 'Desmiente un mal consejo popular'],
              actionTip: 'Enumera 3 cosas que tus colegas recomiendan y tú no toleras.',
            },
          },
          {
            label: 'Calibración del Gancho (0-3s)',
            text: 'Reescritura: "La mentira de que necesitas 10.000 seguidores para vivir de tu conocimiento: mira mis números:"',
            detailData: {
              tag: 'CALIBRACIÓN // GANCHO DE 3s',
              title: 'La Revelación Transparente',
              description: 'Mostrar números reales y destruir mitos de vanidad atrae a clientes maduros listos para invertir.',
              imageCaption: 'Transparencia Radical · Datos Reales',
              image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Muestra la pantalla de tu panel sin censura', 'Explica por qué 500 seguidores calificados bastan'],
              actionTip: 'Habla desde tus propios resultados, no desde la teoría.',
            },
          },
          {
            label: 'Cierre a WhatsApp',
            text: 'CTA: "Comenta SESION y agendamos una llamada de 15 minutos para diagnosticar tu caso."',
            detailData: {
              tag: 'CIERRE // CONVERSIÓN',
              title: 'El Filtro de Calificación Previa',
              description: 'Antes de agendar, haz 2 preguntas en WhatsApp para asegurarte de que el prospecto cumple el perfil.',
              imageCaption: 'Filtro Previo · Llamada Calificada',
              image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Pregunta: Presupuesto y plazo de tiempo', 'Agenda solo con prospectos calificados'],
              actionTip: 'Usa una herramienta de calendario sincronizada.',
            },
          },
        ]
      : [
          { label: 'Initial Diagnosis', text: 'Generic textbook tips replaced by authentic contrarian views.' },
          { label: 'Hook Calibration', text: 'Debunking the 10k follower myth with transparent real numbers.' },
          { label: 'WhatsApp CTA', text: 'Pre-qualification filter before booking a 15-minute diagnosis.' },
        ],
    instructorNotes: {
      duration: '74:00 - 80:00 min',
      script: isEs
        ? 'Cierren la mesa de hot seats destacando que la autenticidad y los números reales vencen a la pose corporativa.'
        : 'Wrap hot seats by reinforcing that transparency and data destroy fake corporate polish.',
    },
  },
  {
    id: 's13',
    type: 'concept',
    tag: isEs ? 'ESTRUCTURA DE LA MATRIZ' : 'MATRIX BLUEPRINT',
    title: isEs ? 'La Dieta 40/20/20/10/10 en tus 30 Ideas' : 'The 40/20/20/10/10 Ratio Across 30 Ideas',
    subtitle: isEs
      ? 'Cómo se distribuyen exactamente las 30 filas de tu plantilla oficial del Reto 1.'
      : 'Exact breakdown of the 30 rows in your official Challenge 1 worksheet.',
    points: isEs
      ? [
          {
            label: '12 Videos · Educar & Resolver (40%)',
            text: 'Tutoriales rápidos de 45s, soluciones a fricciones cotidianas y guías prácticas paso a paso.',
          },
          {
            label: '6 Videos · Proceso & Artesanía (20%)',
            text: 'Tomas de detalle de tus manos, time-lapse de armado, empaque e inspección de calidad.',
          },
          {
            label: '6 Videos · Prueba Social & Casos (20%)',
            text: 'Testimonios en video, historias de éxito de clientes y capturas de chats reales de satisfacción.',
          },
          {
            label: '3 Videos · Desmitificar & Opinión (10%)',
            text: 'Derribar malas prácticas de la competencia y advertir sobre opciones baratas engañosas.',
          },
          {
            label: '3 Videos · Venta Directa & Oferta (10%)',
            text: 'Presentación de cupos disponibles del mes con palabra clave y llamado urgente a WhatsApp.',
          },
        ]
      : [
          { label: '12 Videos · Educate & Solve (40%)', text: '45-second micro-problem solving tutorials.' },
          { label: '6 Videos · Process & Craft (20%)', text: 'Macro craftsmanship, time-lapse and quality inspection.' },
          { label: '6 Videos · Social Proof (20%)', text: 'Real customer transformations, unboxing and chat screenshots.' },
          { label: '3 Videos · Debunking (10%)', text: 'Busting competitor cheap shortcuts and myths.' },
          { label: '3 Videos · Direct Pitch (10%)', text: 'Commercial intake spots with keyword WhatsApp trigger.' },
        ],
    instructorNotes: {
      duration: '80:00 - 84:00 min',
      script: isEs
        ? 'Muestren la suma: 12 + 6 + 6 + 3 + 3 = 30 videos. Es la fórmula exacta para cubrir todo el mes sin saturar.'
        : 'Show the exact math: 12 + 6 + 6 + 3 + 3 = 30 videos for complete monthly coverage.',
    },
  },
];
