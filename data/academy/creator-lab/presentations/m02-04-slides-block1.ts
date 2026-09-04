import { SlideData } from './types';

export const getLiveLab2SlidesBlock1 = (isEs: boolean): SlideData[] => [
  {
    id: 's01',
    type: 'title',
    tag: 'UXIO ACADEMY · LIVE MASTERCLASS & CLINIC',
    title: isEs ? 'Masterclass Clínica: Sets Reales & Teardowns de Anuncios' : 'Live Clinic: Real Sets & Ad Teardowns',
    subtitle: isEs
      ? 'Semana 2 · Sesión en Vivo (90 min) · Solución de escenarios difíciles, psicología frente al lente, análisis de anuncios ganadores y script doctoring.'
      : 'Week 2 · Live Masterclass (90 min) · Difficult lighting setups, camera psychology, viral teardowns and live script doctoring.',
    highlight: isEs ? 'Semana 2 · Clínica Práctica Interactiva' : 'Week 2 · Interactive Live Clinic',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&auto=format&fit=crop&q=80',
    titleCard: {
      tag: isEs ? '// LIVE LAB SEMANA 2' : '// WEEK 2 LIVE LAB',
      badge: isEs ? '90 MIN EN VIVO' : '90 MIN LIVE',
      items: [
        { title: isEs ? 'Escenarios Difíciles' : 'Tough Set Scenarios', desc: isEs ? 'Sin ventanas, de noche y con gafas' : 'No windows, night shooting & glasses', color: '#FE385B' },
        { title: isEs ? 'Teardown de Anuncio $3.8K' : '$3.8K Ad Teardown', desc: isEs ? 'Desarme segundo a segundo' : 'Second-by-second anatomy of winner ad', color: '#FF7F07' },
        { title: isEs ? 'Script Doctoring en Vivo' : 'Live Script Doctoring', desc: isEs ? 'Corrección de guiones de alumnos' : 'Real-time student script audits', color: '#10B981' },
      ],
    },
    instructorNotes: {
      duration: '0:00 - 5:00 min',
      script: isEs
        ? '¡Bienvenidos a la Clínica en Vivo de la Semana 2! Las microclases les dieron las bases técnicas. Hoy vamos a resolver los problemas reales que no salen en los tutoriales: habitaciones sin ventana, miedo escénico, reflejos en gafas y cómo transformar guiones aburridos en piezas que vendan en WhatsApp.'
        : 'Welcome to Week 2 Live Clinic! Today we solve hard real-world problems: dark rooms, camera anxiety, reflective glasses and live script doctoring.',
    },
  },
  {
    id: 's02',
    type: 'statement',
    tag: 'BLOQUE 01 · 05:00 - 12:00 MIN',
    title: isEs
      ? 'El 80% del éxito de un video comercial no ocurre en la cámara: ocurre en cómo resuelves la iluminación en tu espacio y en tu convicción al hablar.'
      : '80% of commercial video success does not happen in the camera: it happens in how you light your room and your conviction on lens.',
    subtitle: isEs
      ? 'Cualquiera puede comprar un trípode de $10 USD. Pero dominar la luz rebotada de noche, eliminar reflejos y hablarle al lente como a tu cliente más querido es lo que genera ventas reales.'
      : 'Anyone can buy a $10 tripod. But mastering night bounce light, eliminating reflections and speaking with warm authority is what drives revenue.',
    highlight: isEs ? 'Resolución de Problemas Reales > Teoría' : 'Real-World Problem Solving > Theory',
    bgColor: '#FE385B',
    instructorNotes: {
      duration: '5:00 - 12:00 min',
      script: isEs
        ? 'Enfaticen que hoy no venimos a repetir qué es 4K, sino a solucionar los retos de grabación de cada alumno en su casa o taller.'
        : 'Reiterate that today is about diagnosing each student’s practical hurdles.',
    },
  },
  {
    id: 's03',
    type: 'steps',
    tag: isEs ? 'EL MAPA DE LA SESIÓN DE HOY' : 'TODAY’S MASTERCLASS MAP',
    title: isEs ? 'Los 4 Laboratorios Prácticos de Hoy' : 'The 4 Practical Labs of Today’s Clinic',
    steps: isEs
      ? [
          {
            number: '01',
            title: 'Set Teardown: Escenarios Difíciles',
            desc: 'Qué hacer si no tienes ventana, si grabas de noche, si usas gafas con reflejos o si tu piso tiene eco de cerámica.',
          },
          {
            number: '02',
            title: 'Psicología & Calentamiento Escénico',
            desc: 'Cómo vencer el síndrome del impostor, la regla de los primeros 10 videos y el calentamiento vocal de 2 minutos.',
          },
          {
            number: '03',
            title: 'Teardown: Video $3.8K vs Video Fracasado',
            desc: 'Desarme segundo a segundo de un video comercial que facturó $3.800 USD vs uno que nadie vio.',
          },
          {
            number: '04',
            title: 'Taller de Script Doctoring & Rúbrica 5.0',
            desc: 'Corrección de 3 guiones de alumnos en directo y los 5 requisitos para aprobar el Reto 2 Oficial.',
          },
        ]
      : [
          { number: '01', title: 'Hard Set Teardowns', desc: 'No-window rooms, night shooting, glasses reflections and echoing floors.' },
          { number: '02', title: 'Camera Psychology & Warmup', desc: 'Overcoming imposter syndrome, rule of first 10 clips and 2-min vocal warmup.' },
          { number: '03', title: '$3.8K Video Teardown', desc: 'Second-by-second breakdown of a $3,800 revenue video vs zero-reach flop.' },
          { number: '04', title: 'Live Script Doctoring & Rubric', desc: 'Live student script rewrites and the 5 criteria for 5.0 ★ challenge grade.' },
        ],
    instructorNotes: {
      duration: '12:00 - 18:00 min',
      script: isEs
        ? 'Presenten los 4 laboratorios. Pidan a la sala que escriban en el chat cuál es su mayor dolor al grabar hoy.'
        : 'Walk through the 4 labs and ask chat for their biggest filming pain point.',
    },
  },
  {
    id: 's04',
    type: 'concept',
    tag: isEs ? 'ESCENARIOS DIFÍCILES // TEARDOWN DE SET' : 'HARD SCENARIOS // SET TEARDOWN',
    title: isEs ? '3 Situaciones Difíciles de Grabación y su Solución' : '3 Tough Filming Situaciones & Their Solutions',
    subtitle: isEs
      ? 'Cómo rodar con calidad cinematográfica cuando tu entorno no es el de un estudio profesional.'
      : 'Achieving cinematic look when your filming environment is far from a studio.',
    points: isEs
      ? [
          {
            label: '1. Sin Ventana o Grabación Nocturna (Luz Rebotada)',
            text: 'Nunca apuntes una bombilla directo a tu cara. Apunta una lámpara común hacia una pared blanca a 1 metro de ti.',
            detailData: {
              tag: 'TÉCNICA // BOUNCE LIGHT',
              title: 'La Luz Rebotada (Bounce Light)',
              description: 'La pared blanca dispersa los fotones convirtiendo un foco duro en una fuente de luz gigante y suave que acaricia la piel.',
              imageCaption: 'Luz Rebotada en Pared Blanca',
              image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Cero sombras duras bajo nariz y ojos', 'Cuesta $0 USD usando cualquier lámpara de mesa'],
              actionTip: 'Pega una cartulina blanca en la pared si la pared es de color oscuro.',
            },
          },
          {
            label: '2. Reflejos en Lentes o Gafas (Ángulo 60°)',
            text: 'Si usas gafas, la luz frontal genera dos círculos blancos que tapan tus pupilas. Eleva la luz a 60° por encima de tus ojos.',
            detailData: {
              tag: 'ÓPTICA // CERO REFLEJOS EN GAFAS',
              title: 'La Regla de Ángulo de Incidencia',
              description: 'Al colocar la fuente de luz por encima de la línea de la ceja, el reflejo rebota hacia el suelo y tus ojos quedan 100% nítidos.',
              imageCaption: 'Luz a 60° · Ojos Visibles y Expresivos',
              image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Contacto visual magnético sin reflejos verdes o blancos', 'Permite que el cliente vea la sinceridad en tus pupilas'],
              actionTip: 'Baja ligeramente el marco de las gafas 1 milímetro si persiste un brillo sutil.',
            },
          },
          {
            label: '3. Habitación Pequeña con Mucho Eco (Trampa Textil)',
            text: 'El sonido rebota en paredes vacías. Abre las puertas de tu clóset de ropa detrás del celular para absorber el 90% del eco.',
            detailData: {
              tag: 'ACÚSTICA // TRAMPA TEXTIL CASERA',
              title: 'El Clóset como Cabina de Estudio',
              description: 'La ropa colgada actúa como trampa de absorción acústica profesional de banda ancha sin gastar un solo centavo.',
              imageCaption: 'Ropa Absorbente · Audio de Estudio',
              image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Elimina la reverberación de baño', 'Ideal para grabar la voz en off de tus videos'],
              actionTip: 'Coloca una toalla doblada en la mesa bajo el celular para evitar rebote de la madera.',
            },
          },
        ]
      : [
          { label: '1. No Windows / Night Shooting', text: 'Bounce a simple desk lamp off a white wall for giant soft light.' },
          { label: '2. Glasses Reflection Fix', text: 'Raise light to 60° angle above eyebrows to bounce reflections to the floor.' },
          { label: '3. Empty Room Echo Fix', text: 'Open wardrobe closet behind phone as a natural acoustic trap.' },
        ],
    instructorNotes: {
      duration: '18:00 - 28:00 min',
      script: isEs
        ? 'Muestren con una lámpara o linterna cómo la luz rebotada en la pared cambia radicalmente el rostro.'
        : 'Demonstrate bounce light against a wall or whiteboard live on webcam.',
    },
  },
];
