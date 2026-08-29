import { Course } from '../types';
import { Locale } from '@/types';
import { getCreatorLabModules } from './modules';

export const getCreatorLabCourse = (lang: Locale = 'es'): Course => {
  const isEs = lang === 'es';

  return {
    id: 'creator-lab',
    slug: 'creator-lab',
    title: 'UXIO Creator Lab',
    commercialName: isEs ? 'Contenido que vende' : 'Content that sells',
    subtitle: isEs
      ? 'Aprende a crear contenido profesional para tu negocio usando únicamente tu celular.'
      : 'Learn to produce professional content for your business using only your smartphone.',
    tagline: isEs
      ? 'Aprende a convertir lo que haces en contenido que vende.'
      : 'Turn what you do into high-converting content.',
    cohortName: 'Cohorte 01',
    cohortCapacity: {
      capacity: 30,
      enrolled: 18,
      enrollmentOpen: true,
      enrollmentDeadline: isEs ? '23 de septiembre de 2026' : 'September 23, 2026',
    },
    priceCOP: 99000,
    priceUSD: 25,
    regularPriceCOP: 220000,
    commercialDuration: isEs ? '4 semanas' : '4 weeks',
    datesOverview: isEs ? '1 de octubre – 1 de noviembre de 2026' : 'October 1 – November 1, 2026',
    inductionNotice: isEs ? 'Semana 0 (Inducción previa): 24–30 de septiembre' : 'Week 0 (Pre-induction): Sept 24–30',
    modality: isEs
      ? 'Online + sesiones en vivo + comunidad + ejercicios prácticos'
      : 'Online + live sessions + private community + hands-on projects',
    lead: isEs
      ? 'Programa intensivo y práctico diseñado para emprendedores, marcas y creadores que necesitan visibilidad comercial real sin gastar en cámaras costosas.'
      : 'Intensive hands-on program designed for entrepreneurs, brands, and creators who need commercial visibility without expensive equipment.',
    problems: isEs
      ? [
          '“No sé qué publicar ni por dónde empezar.”',
          '“Tengo productos o servicios pero no sé cómo grabarlos.”',
          '“Me da pánico o no sé qué decir frente a la cámara.”',
          '“No sé editar en CapCut ni cómo dar ritmo al video.”',
          '“Publico con frecuencia pero nadie me compra por redes.”',
          '“Tengo un negocio increíble pero mis redes no lo reflejan.”',
        ]
      : [
          '“I don’t know what to post or where to start.”',
          '“I have great products but lack the skills to film them.”',
          '“I freeze up speaking in front of the lens.”',
          '“Video editing in CapCut feels overwhelming.”',
          '“I post consistently but get zero sales.”',
          '“My physical business is amazing but invisible online.”',
        ],
    transformations: isEs
      ? [
          {
            before: 'No sé qué publicar ni tengo ideas claras.',
            after: 'Cuentas con una estrategia mensual estructurada de 30 ideas y 5 pilares comerciales.',
          },
          {
            before: 'No sé grabar y los videos se ven amateur.',
            after: 'Dominas planos, luz natural, composición y audio usando únicamente tu celular.',
          },
          {
            before: 'Publico sin rumbo esperando que algo funcione.',
            after: 'Creas piezas con ganchos psicológicos, guiones probados y cierre de ventas a WhatsApp.',
          },
        ]
      : [
          {
            before: 'No idea what to post or how to plan.',
            after: 'A 30-day commercial content roadmap with 5 clear brand pillars.',
          },
          {
            before: 'Raw clips looking amateur and poorly lit.',
            after: 'Mastering composition, natural light, b-roll and crisp audio on mobile.',
          },
          {
            before: 'Posting randomly with zero conversion intent.',
            after: 'Crafting hook-driven videos and stories that turn viewers into WhatsApp leads.',
          },
        ],
    whatIncludes: [
      {
        title: isEs ? '5 Semanas de Formación Activa' : '5 Weeks of Active Training',
        desc: isEs ? 'Clases asíncronas de alta producción paso a paso.' : 'Step-by-step high-production video lessons.',
        icon: 'Smartphone',
      },
      {
        title: isEs ? 'Sesiones en Vivo & Q&A' : 'Live Sessions & Q&A',
        desc: isEs ? 'Feedback directo sobre tus grabaciones, guiones y edición.' : 'Live reviews of your recordings, scripts, and editing.',
        icon: 'Users',
      },
      {
        title: isEs ? 'Ejercicios y Proyectos Semanales' : 'Weekly Practical Projects',
        desc: isEs ? 'Crearás 30 clips, 3 reels, carruseles y guiones reales.' : 'You will build 30 clips, 3 reels, carousels, and real scripts.',
        icon: 'Code',
      },
      {
        title: isEs ? 'Comunidad Privada de Creators' : 'Private Creator Community',
        desc: isEs ? 'Networking, resolución de dudas y revisión de contenido entre pares.' : 'Networking, peer feedback, and fast Q&A.',
        icon: 'MessageSquare',
      },
      {
        title: isEs ? 'Pack de Plantillas y Prompts IA' : 'Templates & AI Prompts Pack',
        desc: isEs ? 'Estructuras de guiones probadas y prompts para ChatGPT/Claude.' : 'Tested script structures and prompts for ChatGPT/Claude.',
        icon: 'Sparkles',
      },
      {
        title: isEs ? 'Acceso Grabado a Todas las Clases' : 'Lifetime Recording Access',
        desc: isEs ? 'Repasa el contenido cuantas veces quieras a tu propio ritmo.' : 'Review lessons anytime at your own pace.',
        icon: 'Video',
      },
      {
        title: isEs ? 'Constancia UXIO de Finalización' : 'UXIO Completion Proof',
        desc: isEs ? 'Reconocimiento tras completar y entregar tu proyecto final.' : 'Verified badge after submitting your final project.',
        icon: 'Award',
      },
      {
        title: isEs ? 'Acceso a Futuras Redes de Talento' : 'Creator Network Pipeline',
        desc: isEs ? 'Prioridad para marcas y proyectos del ecosistema UXIO.' : 'Priority matching for brand UGC and creator campaigns.',
        icon: 'Globe',
      },
    ],
    modules: getCreatorLabModules(lang),
    schedule: [
      {
        dates: isEs ? '24–30 Septiembre' : 'Sept 24–30',
        weekLabel: isEs ? 'Semana 0' : 'Week 0',
        title: isEs ? 'Inducción, Setup Técnico y Diagnóstico de Marca' : 'Induction, Technical Setup & Brand Diagnosis',
        description: isEs ? 'Apertura de plataforma, comunidad y configuración de tu kit de grabación móvil.' : 'Platform onboarding, community access and camera configuration.',
      },
      {
        dates: isEs ? '1–7 Octubre' : 'Oct 1–7',
        weekLabel: isEs ? 'Semana 1' : 'Week 1',
        title: isEs ? 'Estrategia Comercial y Matriz de 30 Ideas' : 'Commercial Strategy & 30-Idea Matrix',
        isLive: true,
        description: isEs ? 'Sesión en vivo de feedback sobre pilares y desbloqueo de ideas.' : 'Live feedback session on content pillars and ideation.',
      },
      {
        dates: isEs ? '8–14 Octubre' : 'Oct 8–14',
        weekLabel: isEs ? 'Semana 2' : 'Week 2',
        title: isEs ? 'Técnica de Grabación, Luz Natural y Audio Móvil' : 'Shooting Technique, Natural Light & Audio',
        description: isEs ? 'Creación de tu primer banco de 30 clips B-roll y tomas habladas.' : 'Building your 30 B-roll clips library and direct-to-lens videos.',
      },
      {
        dates: isEs ? '15–21 Octubre' : 'Oct 15–21',
        weekLabel: isEs ? 'Semana 3' : 'Week 3',
        title: isEs ? 'Hooks Psicológicos, Guiones y Multiformato' : 'Psychological Hooks, Scripts & Formats',
        isLive: true,
        description: isEs ? 'Sesión en vivo: Auditoría de los primeros 3 segundos de tus videos.' : 'Live session: First 3 seconds audit on your drafts.',
      },
      {
        dates: isEs ? '22–28 Octubre' : 'Oct 22–28',
        weekLabel: isEs ? 'Semana 4' : 'Week 4',
        title: isEs ? 'Edición Dinámica en CapCut, Canva e Inteligencia Artificial' : 'Dynamic CapCut Editing, Canva & AI Workflows',
        description: isEs ? 'Ensamblaje, subtítulos con ritmo y multiplicación de piezas con IA.' : 'Pacing, subtitles, sound FX and AI repurposing pipeline.',
      },
      {
        dates: isEs ? '29 Oct – 1 Nov' : 'Oct 29 – Nov 1',
        weekLabel: isEs ? 'Semana 5' : 'Week 5',
        title: isEs ? 'Contenido que Vende, Cierre por WhatsApp y Proyecto Final' : 'Content that Sells, WhatsApp Funnel & Final Capstone',
        isLive: true,
        milestone: isEs ? '1 de Noviembre: Cierre y Graduación' : 'Nov 1: Graduation',
        description: isEs ? 'Presentación de tu sistema de 30 días y entrega de constancia.' : '30-day operating system submission and certificate issuance.',
      },
    ],
    targetAudiences: [
      {
        name: isEs ? 'Emprendedores y Dueños de Negocio' : 'Founders & Business Owners',
        description: isEs ? 'Quieren vender más de sus productos o servicios sin depender de agencias costosas.' : 'Want to drive direct sales without relying on expensive external agencies.',
        icon: 'TrendingUp',
        tags: isEs ? ['E-commerce', 'Servicios', 'Negocios Físicos', 'B2B'] : ['E-commerce', 'Services', 'Retail', 'B2B'],
      },
      {
        name: isEs ? 'Profesionales Independientes' : 'Solo Professionals & Experts',
        description: isEs ? 'Consultores, doctores, coaches o creativos que buscan posicionar su autoridad.' : 'Consultants, coaches, doctors and creatives building personal authority.',
        icon: 'UserCheck',
        tags: isEs ? ['Consultoría', 'Salud', 'Legal', 'Diseño'] : ['Consulting', 'Health', 'Legal', 'Design'],
      },
      {
        name: isEs ? 'Futuros Content Creators & UGC' : 'Aspiring Creators & UGC Talents',
        description: isEs ? 'Personas que quieren monetizar creando contenido profesional para otras marcas.' : 'Individuals looking to monetize by creating content for top brands.',
        icon: 'Sparkles',
        tags: isEs ? ['UGC', 'TikTok', 'Reels', 'Monetización'] : ['UGC', 'TikTok', 'Reels', 'Monetization'],
      },
    ],
    certificateInfo: {
      title: isEs ? 'Constancia UXIO de Finalización' : 'UXIO Completion Proof',
      description: isEs ? 'Al entregar satisfactoriamente el proyecto final de la Semana 5, recibirás tu constancia digital verificada emitida por UXIO Studio.' : 'Upon submitting the Week 5 final capstone, you will receive a verified digital proof by UXIO Studio.',
      disclaimer: isEs ? 'No somos una universidad formal ni emitimos títulos oficiales. Es una prueba práctica de habilidades reales ejecutadas en el mercado.' : 'Not an accredited university degree. It represents a practical proof of real execution skills.',
      badge: isEs ? 'Verificado por UXIO Studio' : 'Verified by UXIO Studio',
    },
    faqs: isEs
      ? [
          { question: '¿Necesito una cámara profesional o micrófono caro?', answer: 'No. El 100% del programa está diseñado para grabarse, editarse y publicarse usando un smartphone moderno (iPhone o Android) y luz natural.' },
          { question: '¿Qué pasa si no puedo asistir a las sesiones en vivo?', answer: 'Todas las sesiones en vivo quedan grabadas en alta definición y se suben a tu aula de UXIO Academy el mismo día.' },
          { question: '¿Cuánto tiempo a la semana debo dedicarle?', answer: 'Recomendamos entre 3 y 5 horas semanales: 1 hora para ver las microclases, 2 horas para grabar/editar y 1 hora para la sesión en vivo.' },
          { question: '¿Cuándo inicia exactamente la Cohorte 01?', answer: 'La inducción y bienvenida técnica inicia el 24 de septiembre de 2026. Las clases oficiales arrancan el 1 de octubre y finalizan el 1 de noviembre de 2026.' },
          { question: '¿Qué métodos de pago aceptan?', answer: 'Aceptamos transferencias bancarias directas en Colombia (Bancolombia, Nequi, Daviplata, PSE) y pagos internacionales en USD ($25) vía tarjeta/Stripe.' },
        ]
      : [
          { question: 'Do I need expensive camera gear?', answer: 'No. The entire program is built to shoot, edit, and publish using your current smartphone and natural window light.' },
          { question: 'What if I cannot attend live sessions?', answer: 'All live sessions are recorded in HD and published to your UXIO Academy student portal within hours.' },
          { question: 'How much time should I invest weekly?', answer: '3 to 5 hours per week: 1 hour for video lessons, 2 hours shooting/editing, and 1 hour for live Q&A.' },
          { question: 'When does Cohort 01 officially start?', answer: 'Week 0 induction opens September 24, 2026. Official classes run October 1 to November 1, 2026.' },
          { question: 'What payment methods are supported?', answer: 'Local transfers in Colombia ($99.000 COP) and international cards via Stripe ($25 USD).' },
        ],
  };
};
