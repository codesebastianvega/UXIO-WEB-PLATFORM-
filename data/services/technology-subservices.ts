import { SubService } from './types';
import { technologyCapabilities } from './technology-capabilities';

export const technologySubServices: SubService[] = [
  {
    slug: "apps",
    parentSlug: "technology",
    title: "Software a Medida & Web Apps",
    tagline: "Interfaces ultrarrápidas, fluidas y con geometría suave.",
    description: "Construimos el motor digital de tu empresa. Desde plataformas web de alta velocidad hasta aplicaciones móviles nativas, combinamos diseño de vanguardia y arquitectura sólida para convertir ideas complejas en productos rentables, rápidos y listos para escalar.",
    approach: "Combinamos React, Next.js 15, React Native y Supabase con sistemas de diseño vivos. Cada animación, transición y estado de carga está calibrado a 120 FPS.",
    startingPrice: "$4.500.000 COP",
    startingPriceCOP: "$4.500.000 COP",
    startingPriceUSD: "$1,100 USD",
    estimatedTimeline: "2 a 4 Semanas",
    accent: "#FE385B",
    technologies: [
      "React Native",
      "React",
      "Flutter",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind",
      "Figma",
      "Supabase",
      "Node.js",
      "Python",
      "Stripe",
      "Vercel",
      "GitHub",
      "Vite"
    ],
    deliverables: [
      "Discovery y Arquitectura: Definición de flujos y modelo de datos relacional",
      "Diseño UX/UI a medida en Figma con componentes y tokens",
      "Setup de Repositorios y CI/CD en GitHub con despliegue automatizado",
      "Desarrollo Front-End reactivo (Next.js / Vite / React / React Native)",
      "Base de datos y Autenticación segura (Supabase / PostgreSQL / Firebase)",
      "Traspaso total de propiedad (100% Código fuente, repositorios y diseño)"
    ],
    pricingTiers: [
      {
        id: "inicial",
        name: "Versión Inicial",
        price: "$4.500.000 COP",
        priceCOP: "$4.500.000 COP",
        priceUSD: "$1,100 USD",
        deposit: "$2.250.000 COP (50%)",
        depositCOP: "$2.250.000 COP",
        depositUSD: "$550 USD",
        timeline: "2 a 3 Semanas",
        description: "Alcance cerrado para validación rápida y primera salida al mercado.",
        features: [
          "Diseño UX/UI en Figma de flujos principales.",
          "Front-End de alta velocidad en Next.js o Vite.",
          "Base de datos y autenticación con Supabase.",
          "Despliegue serverless en Vercel con dominio propio.",
          "Código 100% tuyo sin ataduras ni mensualidades ocultas.",
          "Entrega en 2 a 3 semanas."
        ]
      },
      {
        id: "completo",
        name: "Sistema Completo",
        price: "$9.500.000 COP",
        priceCOP: "$9.500.000 COP",
        priceUSD: "$2,400 USD",
        deposit: "$4.750.000 COP (50%)",
        depositCOP: "$4.750.000 COP",
        depositUSD: "$1,200 USD",
        timeline: "4 a 6 Semanas",
        popular: true,
        isRecommended: true,
        description: "Plataforma web o app completa con lógica de negocio y panel de administración.",
        features: [
          "Todo lo incluido en la Versión Inicial.",
          "Panel de administración / Dashboard con métricas clave.",
          "Múltiples roles de usuario y permisos avanzados.",
          "Integración de pasarela de pagos (Wompi, MercadoPago o Stripe).",
          "Notificaciones automáticas por correo y WhatsApp.",
          "1 mes de garantía y soporte post-lanzamiento.",
          "Entrega en 4 a 6 semanas."
        ]
      },
      {
        id: "a-medida",
        name: "Proyecto a Medida",
        price: "Cotizar a Medida",
        priceCOP: "Cotizar a Medida",
        priceUSD: "Custom Quote",
        deposit: "50% de Seña Inicial",
        depositCOP: "50% de Seña Inicial",
        depositUSD: "50% Deposit",
        timeline: "6+ Semanas",
        description: "Para empresas con requerimientos de arquitectura compleja, apps nativas o IA.",
        features: [
          "Arquitectura cloud dedicada y optimización de microservicios.",
          "Apps móviles nativas (iOS y Android con React Native / Flutter).",
          "Integración de modelos de IA y pipelines de datos.",
          "Equipo senior dedicado y sprints quincenales de avance.",
          "Acuerdo de nivel de servicio (SLA) y soporte continuo."
        ]
      }
    ],
    faqs: [
      {
        question: "¿El código fuente me pertenece al finalizar?",
        answer: "Sí, absolutamente. Al completar el proyecto te transferimos la propiedad total de los repositorios de GitHub, diseños de Figma y cuentas de infraestructura. No cobramos mensualidades de mantenimiento forzosas."
      },
      {
        question: "¿Cómo funciona el pago?",
        answer: "Trabajamos con un 50% de seña para reservar el sprint en nuestro calendario e iniciar el diseño/arquitectura, y el 50% restante contra entrega final y despliegue a producción."
      },
      {
        question: "¿Puedo empezar con la versión inicial y luego ampliarla?",
        answer: "Totalmente. Toda nuestra arquitectura está diseñada de forma modular para que puedas validar tu producto rápido y escalar nuevas funcionalidades sobre la misma base sin tener que rehacer código."
      }
    ]
  },
  {
    slug: "core-architecture",
    parentSlug: "technology",
    title: "Desarrollo Web & CMS",
    tagline: "Implementación ágil sobre plantillas y temas de alta conversión.",
    description: "Configuramos tu sitio web en WordPress o tu tienda en Shopify usando estructuras probadas para vender, reduciendo tiempos y costos de lanzamiento al mínimo.",
    approach: "Elegimos la plataforma ideal según tu modelo de negocio: WordPress para blogs y corporativas, Shopify para e-commerce escalable, o Landings a medida para validación rápida.",
    startingPrice: "$1.200.000 COP",
    startingPriceCOP: "$1.200.000 COP",
    startingPriceUSD: "$300 USD",
    estimatedTimeline: "3 Días a 2 Semanas",
    accent: "#0284C7",
    technologies: [
      "WordPress",
      "Shopify",
      "WooCommerce",
      "Liquid",
      "Wompi",
      "Bold",
      "MercadoPago",
      "Stripe",
      "ManyChat",
      "WhatsApp",
      "HubSpot",
      "Mailchimp",
      "Klaviyo",
      "Metricool",
      "GA4",
      "Meta Pixel",
      "Figma",
      "Canva",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    platforms: technologyCapabilities[1].platforms,
    deliverables: [
      "Configuración completa de plataforma (WordPress / Shopify)",
      "Maquetación responsiva optimizada para móvil y desktop",
      "Integración de pasarelas de pago colombianas e internacionales",
      "Optimización de velocidad WPO (Puntajes 90+)",
      "Capacitación en video para autoadministrar tu contenido"
    ],
    pricingTiers: [
      {
        id: "wp-landing",
        name: "Landing Page WP Express",
        price: "$1.400.000 COP",
        priceCOP: "$1.400.000 COP",
        priceUSD: "$350 USD",
        deposit: "$700.000 COP (50%)",
        depositCOP: "$700.000 COP",
        depositUSD: "$175 USD",
        timeline: "3 a 5 Días",
        platformId: "wordpress",
        description: "1 Página rápida para validación de oferta o campañas de captación.",
        features: [
          "Plantilla WordPress optimizada para conversión.",
          "Formulario de contacto a WhatsApp y Correo.",
          "Optimización de velocidad WPO (90+ en PageSpeed).",
          "Entrega express en 3 a 5 días hábiles."
        ]
      },
      {
        id: "wp-corp",
        name: "Web Corporativa WP Pro",
        price: "$2.200.000 COP",
        priceCOP: "$2.200.000 COP",
        priceUSD: "$550 USD",
        deposit: "$1.100.000 COP (50%)",
        depositCOP: "$1.100.000 COP",
        depositUSD: "$275 USD",
        timeline: "1 a 2 Semanas",
        platformId: "wordpress",
        popular: true,
        isRecommended: true,
        description: "Estructura completa de 5 páginas para empresas y marcas consolidadas.",
        features: [
          "Hasta 5 páginas internas (Inicio, Nosotros, Servicios, Casos, Contacto).",
          "Panel autoadministrable fácil para subir contenido y blogs.",
          "Configuración SEO on-page y analítica con GA4.",
          "Plugin de seguridad activo y backups automáticos.",
          "Entrega en 1 a 2 semanas."
        ]
      },
      {
        id: "wp-shop",
        name: "Tienda WooCommerce Completa",
        price: "$3.400.000 COP",
        priceCOP: "$3.400.000 COP",
        priceUSD: "$850 USD",
        deposit: "$1.700.000 COP (50%)",
        depositCOP: "$1.700.000 COP",
        depositUSD: "$425 USD",
        timeline: "2 Semanas",
        platformId: "wordpress",
        description: "E-commerce en WordPress con catálogo autoadministrable y pasarelas.",
        features: [
          "Todo el paquete de Web Corporativa.",
          "Catálogo autoadministrable de hasta 20 productos con variantes.",
          "Pasarelas de pago (MercadoPago, Wompi, Stripe, PSE, Tarjetas).",
          "Cálculo de zonas de envío y correos automáticos de pedido.",
          "Entrega en 2 semanas con capacitación de uso."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Puedo cambiar el contenido de mi web yo mismo?",
        answer: "Sí. Diseñamos sobre paneles autoadministrables intuitivos y te entregamos videos explicativos paso a paso para que tu equipo gestione textos, fotos y productos."
      },
      {
        question: "¿Qué pasarelas de pago se pueden conectar?",
        answer: "MercadoPago, Wompi, PSE, Stripe, PayU, tarjetas de crédito/débito y pagos contra entrega con WhatsApp."
      }
    ]
  },
  {
    slug: "automation-ai",
    parentSlug: "technology",
    title: "Integraciones, APIs & Motores de IA",
    tagline: "Conectamos tu ecosistema digital y automatizamos flujos con IA.",
    description: "Conectamos tu ecosistema digital y automatizamos operaciones con modelos de IA (Google Gemini, OpenAI, Claude), APIs REST/GraphQL, webhooks y pipelines de datos de alta velocidad.",
    approach: "Eliminamos el trabajo manual repetitivo. Conectamos tus herramientas existentes para que los datos fluyan en tiempo real entre tus bases de datos, pasarelas y chats.",
    startingPrice: "$1.800.000 COP",
    startingPriceCOP: "$1.800.000 COP",
    startingPriceUSD: "$450 USD",
    estimatedTimeline: "1 a 3 Semanas",
    accent: "#7928CA",
    technologies: [
      "Google Gemini",
      "OpenAI",
      "Claude",
      "Groq",
      "Make",
      "n8n",
      "Zapier",
      "Python",
      "FastAPI",
      "Node.js",
      "Supabase",
      "Pinecone",
      "GraphQL",
      "Webhooks",
      "Vercel",
      "GitHub"
    ],
    deliverables: [
      "Conexión de APIs REST, GraphQL o Webhooks en tiempo real",
      "Integración con CRMs (HubSpot / Salesforce) o ERPs",
      "Sincronización automatizada de inventarios y bases de datos",
      "Agente inteligente de IA con base de conocimiento (RAG)",
      "Manejo de errores robusto, logs y reintentos automáticos"
    ],
    pricingTiers: [
      {
        id: "api-bridge",
        name: "Integración de APIs & Webhooks",
        price: "$1.800.000 COP",
        priceCOP: "$1.800.000 COP",
        priceUSD: "$450 USD",
        deposit: "$900.000 COP (50%)",
        depositCOP: "$900.000 COP",
        depositUSD: "$225 USD",
        timeline: "1 Semana",
        description: "Conexión bidireccional entre 2 plataformas para sincronizar datos.",
        features: [
          "Conexión de 2 aplicaciones vía API REST o Webhook.",
          "Mapeo y transformación de datos en tiempo real.",
          "Validaciones y manejo de errores con reintentos.",
          "Documentación técnica de la integración."
        ]
      },
      {
        id: "ai-assistant",
        name: "Agente Inteligente de IA (RAG)",
        price: "$3.500.000 COP",
        priceCOP: "$3.500.000 COP",
        priceUSD: "$875 USD",
        deposit: "$1.750.000 COP (50%)",
        depositCOP: "$1.750.000 COP",
        depositUSD: "$437 USD",
        timeline: "2 Semanas",
        popular: true,
        isRecommended: true,
        description: "Bot inteligente entrenado con los documentos y catálogo de tu empresa.",
        features: [
          "Embeddings y base de datos vectorial para conocimiento personalizado.",
          "Conexión con modelos Google Gemini, OpenAI o Claude.",
          "Integración en tu web, WhatsApp o Slack.",
          "Panel de control para auditar conversaciones y respuestas.",
          "Entrega en 2 semanas con pruebas de precisión."
        ]
      },
      {
        id: "custom-pipeline",
        name: "Pipeline de Automatización a Medida",
        price: "Cotizar a Medida",
        priceCOP: "Cotizar a Medida",
        priceUSD: "Custom Quote",
        deposit: "50% de Seña",
        depositCOP: "50% de Seña",
        depositUSD: "50% Deposit",
        timeline: "2 a 4 Semanas",
        description: "Arquitectura completa de datos y automatizaciones multicapa.",
        features: [
          "Flujos complejos con Make, n8n o código en Python / Node.",
          "Procesamiento masivo de datos en segundo plano.",
          "Integración de pagos, facturación electrónica y ERPs.",
          "Monitoreo 24/7 y alertas automáticas a Discord / Telegram."
        ]
      }
    ],
    faqs: [
      {
        question: "¿El agente de IA puede inventar respuestas falsas (alucinaciones)?",
        answer: "No. Utilizamos arquitectura RAG (Retrieval-Augmented Generation) con instrucciones estrictas para que el modelo responda únicamente basándose en la información oficial y documentos de tu empresa."
      },
      {
        question: "¿Cuánto cuesta el consumo de los modelos de IA?",
        answer: "Configuramos tu cuenta oficial de API directa en Google Cloud, OpenAI o Anthropic para que pagues exactamente el costo real por token usado, sin sobrecostos de intermediarios."
      }
    ]
  }
];
