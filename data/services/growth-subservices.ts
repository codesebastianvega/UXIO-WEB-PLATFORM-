import { SubService } from './types';

export const growthSubServices: SubService[] = [
  {
    slug: "cro-conversion",
    parentSlug: "growth",
    title: "Optimización de Conversión (CRO)",
    tagline: "Convierte más visitantes en clientes sin gastar más en publicidad.",
    description: "Afinamos la experiencia para que cada visitante entienda el valor y se convierta en usuario activo o cliente recurrente.",
    approach: "Un aumento del 1% al 3% en tu tasa de conversión triplica la rentabilidad de tu negocio. Aplicamos ciencia de datos y experimentación continua.",
    startingPrice: "$350 USD",
    startingPriceCOP: "$1.500.000 COP",
    startingPriceUSD: "$350 USD",
    estimatedTimeline: "2 Semanas",
    accent: "#10B981",
    deliverables: [
      "Auditoría cuantitativa de mapas de calor (Heatmaps) y grabaciones de sesión",
      "Detección de puntos de fuga y fricción en todo el embudo de conversión",
      "Rediseño y optimización de Landing Pages de alta conversión",
      "Diseño de experimentos A/B listos para implementar con hipótesis claras",
      "Optimización de textos persuasivos (Copywriting) y llamados a la acción (CTAs)"
    ],
    pricingTiers: [
      {
        id: "cro-audit",
        name: "Auditoría CRO",
        price: "$1.500.000 COP",
        deposit: "$750.000 COP (50%)",
        priceCOP: "$1.500.000 COP",
        priceUSD: "$350 USD",
        depositCOP: "$750.000 COP",
        depositUSD: "$175 USD",
        timeline: "1 a 2 Semanas",
        description: "Diagnóstico profundo de embudo identificando fugas y pérdidas de conversión.",
        features: [
          "Análisis exhaustivo de mapas de calor y clicks",
          "Detección de fricciones y fugas en el embudo de compra",
          "Reporte técnico y visual de optimización UX/UI",
          "Matriz de mejoras prioritarias de alto impacto inmediato"
        ]
      },
      {
        id: "funnel-setup",
        name: "Funnel Setup",
        price: "$2.800.000 COP",
        deposit: "$1.400.000 COP (50%)",
        priceCOP: "$2.800.000 COP",
        priceUSD: "$700 USD",
        depositCOP: "$1.400.000 COP",
        depositUSD: "$350 USD",
        timeline: "2 Semanas",
        isRecommended: true,
        popular: true,
        description: "Rediseño completo de embudo y landing pages con pruebas A/B estructuradas.",
        features: [
          "Diseño de Landing Pages de alta conversión en Figma/Web",
          "Configuración de experimentos y A/B Testing continuo",
          "Optimización de checkout y formularios de captación",
          "Copywriting persuasivo y telemetría de eventos de conversión"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué herramientas de analítica requieren para el CRO?",
        answer: "Trabajamos con Google Analytics 4, Hotjar, Microsoft Clarity, PostHog o Mixpanel según tu plataforma."
      }
    ]
  },
  {
    slug: "acquisition-ads",
    parentSlug: "growth",
    title: "Adquisición & Performance",
    tagline: "Estrategias de pauta publicitaria que escalan resultados con ROAS positivo.",
    description: "Diseñamos y ejecutamos campañas de adquisición que combinan creatividades de clase mundial con segmentación algorítmica y control estricto del CAC.",
    approach: "Tus anuncios deben verse tan profesionales como tu producto. Cero spam, solo contenido que genera deseo real de compra.",
    startingPrice: "$300 USD",
    startingPriceCOP: "$1.200.000 COP",
    startingPriceUSD: "$300 USD",
    estimatedTimeline: "1 Semana / Mensual",
    accent: "#10B981",
    deliverables: [
      "Estructuración técnica de cuentas en Meta Ads y Google Ads",
      "Segmentación de audiencias frías, tibias y retargeting avanzado",
      "Configuración de Píxeles y API de Conversiones (CAPI) para máxima atribución",
      "Set de creatividades y copys persuasivos de alto impacto",
      "Dashboard en Looker Studio para seguimiento del ROAS en tiempo real"
    ],
    pricingTiers: [
      {
        id: "ads-setup",
        name: "Setup Campañas",
        price: "$1.200.000 COP",
        deposit: "$600.000 COP (50%)",
        priceCOP: "$1.200.000 COP",
        priceUSD: "$300 USD",
        depositCOP: "$600.000 COP",
        depositUSD: "$150 USD",
        timeline: "1 Semana",
        description: "Puesta a punto técnica y estratégica de tus cuentas publicitarias.",
        features: [
          "Estructuración de cuenta Meta / Google Ads",
          "Segmentación avanzada de audiencias y públicos similares",
          "Configuración de píxeles y eventos de conversión",
          "Entrega de estructura lista para pautar con confianza"
        ]
      },
      {
        id: "monthly-management",
        name: "Gestión Mensual",
        price: "$2.500.000 COP",
        deposit: "$1.250.000 COP (50%)",
        priceCOP: "$2.500.000 COP",
        priceUSD: "$600 USD",
        depositCOP: "$1.250.000 COP",
        depositUSD: "$300 USD",
        timeline: "Mes a Mes",
        isRecommended: true,
        popular: true,
        description: "Gestión y optimización continua de adquisición para marcas en aceleración.",
        features: [
          "Optimización diaria de pauta, pujas y presupuestos",
          "Creación de copys y creativos persuasivos continuos",
          "Reportes semanales de rendimiento y análisis de ROAS",
          "Acompañamiento estratégico continuo sin ataduras"
        ]
      }
    ],
    faqs: [
      {
        question: "¿El presupuesto publicitario está incluido en el fee?",
        answer: "No, el presupuesto de pauta se abona directamente a las plataformas publicitarias (Meta/Google). Nuestro fee cubre la estrategia, configuración, creativos y optimización diaria."
      }
    ]
  },
  {
    slug: "automation-retention",
    parentSlug: "growth",
    title: "Automatización & Retención",
    tagline: "Recupera ventas perdidas y aumenta el ciclo de vida (LTV) de tus clientes.",
    description: "Construimos sistemas automáticos que nutren a tus prospectos, reactivan compradores inactivos y aumentan la frecuencia de compra de forma 100% automatizada.",
    approach: "Adquirir un cliente nuevo cuesta 5 veces más que retener a uno existente. Diseñamos flujos automáticos que generan ingresos recurrentes.",
    startingPrice: "$450 USD",
    startingPriceCOP: "$1.800.000 COP",
    startingPriceUSD: "$450 USD",
    estimatedTimeline: "2 Semanas",
    accent: "#10B981",
    deliverables: [
      "Secuencias de Email Marketing automatizadas (Bienvenida, Carrito abandonado, Post-compra)",
      "Segmentación de base de datos por comportamiento y volumen de compra",
      "Configuración e integración de CRM (HubSpot, ActiveCampaign, Klaviyo)",
      "Automatización de scoring de prospectos y alertas comerciales a WhatsApp",
      "Pruebas de entregabilidad anti-spam y configuración SPF/DKIM"
    ],
    pricingTiers: [
      {
        id: "email-flows",
        name: "Email Flows",
        price: "$1.800.000 COP",
        deposit: "$900.000 COP (50%)",
        priceCOP: "$1.800.000 COP",
        priceUSD: "$450 USD",
        depositCOP: "$900.000 COP",
        depositUSD: "$225 USD",
        timeline: "1 a 2 Semanas",
        description: "Flujos automatizados de email esenciales para tiendas y plataformas digitales.",
        features: [
          "Recuperación de carritos abandonados automatizada",
          "Secuencias de bienvenida y educación de leads",
          "Flujos de reactivación y cross-selling inteligente",
          "Plantillas responsive diseñadas con la identidad de tu marca"
        ]
      },
      {
        id: "crm-setup",
        name: "CRM Setup",
        price: "$3.500.000 COP",
        deposit: "$1.750.000 COP (50%)",
        priceCOP: "$3.500.000 COP",
        priceUSD: "$850 USD",
        depositCOP: "$1.750.000 COP",
        depositUSD: "$425 USD",
        timeline: "2 Semanas",
        isRecommended: true,
        popular: true,
        description: "Implementación integral de CRM y embudos automatizados para tu equipo de ventas.",
        features: [
          "Implementación de CRM (HubSpot / ActiveCampaign / Supabase)",
          "Scoring y enrutamiento inteligente de leads",
          "Automatización de pipelines y tareas del equipo comercial",
          "Capacitación en video para el uso diario de la plataforma"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué plataforma de email marketing recomiendan?",
        answer: "Para e-commerce recomendamos Klaviyo o Mailchimp; para empresas B2B y SaaS recomendamos HubSpot, ActiveCampaign o Brevo."
      }
    ]
  }
];
