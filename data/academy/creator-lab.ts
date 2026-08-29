import { CourseProgram } from './types';
import { Locale } from '@/types';
import { getCreatorLabModules } from './creator-lab-modules';

export const getCreatorLabData = (lang: Locale = 'es'): CourseProgram => {
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
    commercialDuration: isEs ? '5 semanas' : '5 weeks',
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
        title: isEs ? 'Plantillas de Guiones & Canva' : 'Script & Canva Templates',
        desc: isEs ? 'Estructuras Hook → Problema → Demostración → CTA listas para usar.' : 'Ready-to-use Hook → Problem → Demo → CTA frameworks.',
        icon: 'LayoutDashboard',
      },
      {
        title: isEs ? 'Comunidad Privada de Creadores' : 'Private Creator Community',
        desc: isEs ? 'Espacio exclusivo para networking, feedback y dudas.' : 'Dedicated channel for networking, feedback, and support.',
        icon: 'Briefcase',
      },
      {
        title: isEs ? 'Kit de Inteligencia Artificial' : 'Creator AI Toolkit',
        desc: isEs ? 'Prompts para ideación, calendarios, hooks y copies comerciales.' : 'Prompt libraries for ideation, hooks, scripts, and copywriting.',
        icon: 'Sparkles',
      },
      {
        title: isEs ? 'Proyecto Final de 30 Días' : '30-Day Final Capstone',
        desc: isEs ? 'Sistema completo de producción listo para tu marca.' : 'Production system fully customized to your business.',
        icon: 'CheckCircle',
      },
      {
        title: isEs ? 'Constancia UXIO Creator Lab' : 'UXIO Creator Lab Proof',
        desc: isEs ? 'Verificación de finalización de proyecto emitido por el estudio.' : 'Studio-issued project completion badge.',
        icon: 'ShieldCheck',
      },
    ],
    modules: getCreatorLabModules(lang),
    schedule: [
      {
        dates: '24–30 Sep',
        weekLabel: 'Semana 0',
        title: isEs ? 'Inducción & Setup Móvil' : 'Induction & Mobile Setup',
        milestone: isEs ? 'Kickoff del programa y comunidad' : 'Kickoff and community onboarding',
      },
      {
        dates: '1–7 Oct',
        weekLabel: 'Semana 1',
        title: isEs ? 'Estrategia & Matriz de Contenido' : 'Strategy & Content Matrix',
        isLive: true,
        milestone: isEs ? 'Sesión en vivo: 30 ideas para tu negocio' : 'Live session: 30 ideas for your brand',
      },
      {
        dates: '8–14 Oct',
        weekLabel: 'Semana 2',
        title: isEs ? 'Grabación Móvil & B-Roll' : 'Mobile Filming & B-Roll',
        isLive: true,
        milestone: isEs ? 'Sesión en vivo: Auditoría de planos e iluminación' : 'Live session: Framing and lighting audit',
      },
      {
        dates: '15–21 Oct',
        weekLabel: 'Semana 3',
        title: isEs ? 'Creación de Hooks & Reels' : 'Hook Crafting & Reels',
        isLive: true,
        milestone: isEs ? 'Sesión en vivo: Desarmando hooks ganadores' : 'Live session: Dissecting winning hooks',
      },
      {
        dates: '22–28 Oct',
        weekLabel: 'Semana 4',
        title: isEs ? 'Edición CapCut + Canva + IA' : 'CapCut + Canva + AI Editing',
        isLive: true,
        milestone: isEs ? 'Sesión en vivo: Masterclass de edición rápida' : 'Live session: Speed editing masterclass',
      },
      {
        dates: '29 Oct – 1 Nov',
        weekLabel: 'Semana 5',
        title: isEs ? 'Ventas por WhatsApp & Sistema Final' : 'WhatsApp Closing & Final System',
        isLive: true,
        milestone: isEs ? 'Sesión en vivo: Cierre comercial y revisión de proyectos' : 'Live session: Sales closing & capstone review',
      },
      {
        dates: '1 Nov',
        weekLabel: isEs ? 'Cierre' : 'Wrap-up',
        title: isEs ? 'Revisión Final & Constancia UXIO' : 'Final Review & UXIO Completion Proof',
        milestone: isEs ? 'Emisión de constancia de finalización de cohorte' : 'Cohort completion verification badge issue',
      },
    ],
    targetAudiences: [
      {
        name: isEs ? 'Emprendedores y Dueños de Negocio' : 'Entrepreneurs & Founders',
        description: isEs ? 'Tienen un excelente producto o servicio físico/digital pero sus redes no generan ventas directas.' : 'Have an exceptional product or service but social media produces zero direct revenue.',
        icon: 'Briefcase',
        tags: [isEs ? 'Negocios locales' : 'Local brands', isEs ? 'Retail' : 'Retail', isEs ? 'Servicios' : 'Services'],
      },
      {
        name: isEs ? 'Turismo, Hotelería y Gastronomía' : 'Tourism, Hospitality & Food',
        description: isEs ? 'Experiencias, hoteles, restaurantes y operadores que necesitan capturar la emoción de sus espacios en video vertical.' : 'Experiences, boutique hotels, and restaurants needing to capture sensory moments in vertical video.',
        icon: 'Lightbulb',
        tags: [isEs ? 'Hoteles boutique' : 'Boutique hotels', isEs ? 'Restaurantes' : 'Restaurants', isEs ? 'Agencias' : 'Travel'],
      },
      {
        name: isEs ? 'Profesionales Independientes' : 'Solo Professionals & Coaches',
        description: isEs ? 'Consultores, diseñadores, médicos, abogados o coaches que buscan posicionar su autoridad sin sentirse incómodos frente a la cámara.' : 'Consultants, designers, attorneys, and coaches wanting authority without camera awkwardness.',
        icon: 'Users',
        tags: [isEs ? 'Consultoría' : 'Consulting', isEs ? 'Salud' : 'Wellness', isEs ? 'Coaching' : 'Coaching'],
      },
      {
        name: isEs ? 'Aspirantes a Creadores y UGC' : 'Aspiring Creators & UGC Talent',
        description: isEs ? 'Personas que quieren aprender a producir contenido profesional para terceros y cobrar por crear videos a marcas.' : 'Individuals looking to master mobile production to earn as UGC creators for commercial brands.',
        icon: 'Smartphone',
        tags: ['UGC Creator', 'TikTok', 'Instagram Reels'],
      },
    ],
    certificateInfo: {
      title: isEs ? 'Constancia de Finalización UXIO Creator Lab' : 'UXIO Creator Lab Project Completion Proof',
      description: isEs
        ? 'Al entregar con éxito el proyecto final de 30 días de contenido y sistema de producción, recibirás una constancia verificable expedida por UXIO Studio.'
        : 'Upon successfully completing the 30-day capstone project, you receive a verifiable project badge issued by UXIO Studio.',
      disclaimer: isEs
        ? 'Importante: Esta constancia avala la participación y desarrollo de proyectos prácticos dentro de la metodología de UXIO. No constituye título profesional universitario ni certificación de educación formal reconocida por el Ministerio de Educación.'
        : 'Note: This proof verifies hands-on project completion inside UXIO Studio methodology. It is not an accredited formal academic diploma or state-certified educational degree.',
      badge: 'VERIFIED LAB DELIVERABLE',
    },
    faqs: [
      {
        question: isEs ? '¿Qué equipo o celular necesito para participar?' : 'What smartphone or equipment do I need?',
        answer: isEs
          ? 'Cualquier celular Android o iPhone de los últimos 4 o 5 años que grabe en 1080p es suficiente. No necesitas cámaras réflex, lentes caros ni computadores potentes.'
          : 'Any iPhone or Android from the last 4-5 years filming in 1080p is sufficient. No pro DSLRs or heavy computers needed.',
      },
      {
        question: isEs ? '¿Qué pasa si no puedo asistir a las sesiones en vivo?' : 'What if I miss a live session?',
        answer: isEs
          ? 'Todas las sesiones en vivo quedan grabadas y subidas en alta definición en menos de 24 horas con acceso permanente para la cohorte.'
          : 'All live sessions are recorded in HD and uploaded within 24 hours with perpetual access for cohort members.',
      },
      {
        question: isEs ? '¿Cuánto tiempo por semana debo dedicarle?' : 'How much weekly time is required?',
        answer: isEs
          ? 'Recomendamos entre 3 y 4 horas semanales: 1 hora para clases/sesiones y 2-3 horas para aplicar los ejercicios prácticos con tu negocio.'
          : 'We recommend 3 to 4 hours per week: 1 hour for sessions and 2-3 hours to shoot and edit hands-on projects for your brand.',
      },
      {
        question: isEs ? '¿Cómo funciona la garantía o métodos de pago?' : 'What are the accepted payment methods?',
        answer: isEs
          ? 'Aceptamos transferencias bancarias directas (Bancolombia, Nequi, Daviplata), tarjetas de crédito/débito vía pasarela segura y atención personalizada por WhatsApp Concierge.'
          : 'We accept credit/debit cards via secure checkout, Colombian bank transfers (Nequi, Bancolombia), and personalized assistance via WhatsApp Concierge.',
      },
      {
        question: isEs ? '¿Recibo acompañamiento si tengo dudas con mi nicho?' : 'Will I get feedback on my specific industry?',
        answer: isEs
          ? 'Sí. Durante las 5 semanas cuentas con retroalimentación directa de tus entregables y canal privado de preguntas para adaptar las ideas a tu negocio.'
          : 'Yes. Throughout the 5 weeks you receive direct feedback on your deliverables to customize every lesson to your business.',
      },
    ],
  };
};
