import { Capability, MicroService } from './types';

export const technologyCapabilities: Capability[] = [
  { 
    id: "custom-software",
    slug: "apps",
    title: "Software a Medida & Web Apps", 
    description: "Construimos el motor digital de tu empresa. Desde plataformas web de alta velocidad hasta aplicaciones móviles nativas, combinamos diseño de vanguardia y arquitectura sólida para convertir ideas complejas en productos rentables, rápidos y listos para escalar.",
    startingPrice: { USD: 1100, COP: 4500000 },
    timeline: "2-4 Semanas",
    tiers: [
      {
        name: "Versión Inicial",
        price: { COP: 4500000, USD: 1100 },
        description: "Alcance cerrado para validación rápida y primera salida al mercado.",
        features: [
          { text: "Discovery y Arquitectura: Definición de flujos y modelo de datos.", icon: "Search" },
          { text: "Diseño UX/UI a medida (1 Rol de Usuario en Figma).", icon: "Figma" },
          { text: "Setup de Repositorios y CI/CD en GitHub.", icon: "Github" },
          { text: "Desarrollo Front-End reactivo (Next.js / Vite / React).", icon: "Code" }, 
          { text: "Base de datos y Autenticación (Supabase / Firebase / Postgres).", icon: "Database" }, 
          { text: "Despliegue automatizado en producción (Vercel / Cloud).", icon: "Cloud" }, 
          { text: "Traspaso total de propiedad (100% Código y Diseño).", icon: "CheckCircle" }
        ]
      },
      {
        name: "Sistema Completo",
        isRecommended: true,
        price: { COP: 9500000, USD: 2400 },
        description: "Alcance cerrado para operar tu negocio con pagos, roles y panel administrativo.",
        features: [
          { text: "Todo el paquete de la Versión Inicial.", icon: "Plus" },
          { text: "Múltiples Roles (Ej. Cliente + Operador + Administrador).", icon: "Users" },
          { text: "Dashboard de Administración & Analítica a medida.", icon: "LayoutDashboard" },
          { text: "Motor de Pagos integrado (Stripe o MercadoPago).", icon: "CreditCard" },
          { text: "Notificaciones Automáticas por Email/WhatsApp y Webhooks.", icon: "Mail" },
          { text: "Lógica de Negocio Avanzada (CRUDS complejos y reportes).", icon: "Settings" },
          { text: "1 mes de garantía y soporte post-lanzamiento.", icon: "ShieldCheck" }
        ]
      },
      {
        name: "Proyecto a Medida",
        price: { COP: null, USD: null },
        description: "Para aplicaciones de alta complejidad, integraciones profundas y pods dedicados.",
        features: [
          { text: "Consultoría y levantamiento de arquitectura técnica a medida.", icon: "Lightbulb" },
          { text: "Desarrollo de Apps Móviles Nativas (iOS & Android).", icon: "Smartphone" },
          { text: "Arquitecturas Cloud personalizadas, Microservicios e IA.", icon: "Server" },
          { text: "Equipo senior dedicado para tu operación continua.", icon: "Briefcase" }
        ]
      }
    ]
  },
  { 
    id: "cms-web",
    slug: "core-architecture",
    title: "Desarrollo Web & CMS", 
    description: "Implementación ágil sobre plantillas de alta conversión. Configuramos tu sitio web en WordPress o tu tienda en Shopify usando estructuras probadas para vender, reduciendo tiempos y costos de lanzamiento al mínimo.",
    startingPrice: { USD: 300, COP: 1200000 },
    timeline: "3 Días a 2 Semanas",
    platforms: [
      {
        id: "wordpress",
        name: "WordPress & WooCommerce",
        badge: "3 Niveles",
        description: "Sitios web y portales autoadministrables con maquetación rápida en Gutenberg o Elementor.",
        startingPrice: { USD: 350, COP: 1400000 },
        tiers: [
          {
            name: "Landing Page WP",
            price: { COP: 1400000, USD: 350 },
            description: "1 Página rápida para validación de oferta o campañas de captación.",
            features: [
              { text: "Plantilla WordPress optimizada para conversión.", icon: "Sparkles" },
              { text: "Formulario de contacto a WhatsApp y Correo.", icon: "Mail" },
              { text: "Optimización de velocidad WPO (90+ en PageSpeed).", icon: "Search" },
              { text: "Entrega express en 3 a 5 días hábiles.", icon: "Clock" }
            ]
          },
          {
            name: "Web Corporativa WP Pro",
            isRecommended: true,
            price: { COP: 2200000, USD: 550 },
            description: "Estructura completa de 5 páginas para empresas y marcas consolidadas.",
            features: [
              { text: "Hasta 5 páginas internas (Inicio, Nosotros, Servicios, Casos, Contacto).", icon: "LayoutDashboard" },
              { text: "Panel autoadministrable fácil para subir contenido y blogs.", icon: "Code" },
              { text: "Configuración SEO on-page y analítica con GA4.", icon: "Search" },
              { text: "Plugin de seguridad activo y backups automáticos.", icon: "ShieldCheck" },
              { text: "Entrega en 1 a 2 semanas.", icon: "Clock" }
            ]
          },
          {
            name: "Tienda WooCommerce Completa",
            price: { COP: 3400000, USD: 850 },
            description: "E-commerce en WordPress con catálogo autoadministrable y pasarelas.",
            features: [
              { text: "Todo el paquete de Web Corporativa.", icon: "Plus" },
              { text: "Catálogo autoadministrable de hasta 20 productos con variantes.", icon: "Database" },
              { text: "Pasarelas de pago (MercadoPago, Wompi, Stripe, PSE, Tarjetas).", icon: "CreditCard" },
              { text: "Cálculo de zonas de envío y correos automáticos de pedido.", icon: "Mail" },
              { text: "Entrega en 2 semanas con capacitación de uso.", icon: "CheckCircle" }
            ]
          }
        ]
      },
      {
        id: "shopify",
        name: "Shopify E-commerce",
        badge: "3 Niveles",
        description: "Tiendas online sobre temas optimizados para vender, con checkout nativo y alta velocidad.",
        startingPrice: { USD: 700, COP: 2800000 },
        tiers: [
          {
            name: "Setup & Lanzamiento Shopify",
            price: { COP: 2800000, USD: 700 },
            description: "Configuración inicial rápida sobre tema probado para comenzar a vender.",
            features: [
              { text: "Instalación y configuración de tema Shopify optimizado para conversión.", icon: "Sparkles" },
              { text: "Carga y categorización de hasta 15 productos con fotos y variantes.", icon: "Database" },
              { text: "Integración de pasarelas colombianas e internacionales (MercadoPago / Wompi / Stripe).", icon: "CreditCard" },
              { text: "Configuración de envíos y políticas de compra legales.", icon: "Mail" },
              { text: "Entrega en 1 semana.", icon: "Clock" }
            ]
          },
          {
            name: "Tienda Shopify Pro & CRO",
            isRecommended: true,
            price: { COP: 4500000, USD: 1125 },
            description: "Tema premium con optimizaciones de conversión, carrito lateral y upsells.",
            features: [
              { text: "Todo el paquete de Setup & Lanzamiento.", icon: "Plus" },
              { text: "Personalización avanzada con código Liquid nativo.", icon: "Code" },
              { text: "Carrito lateral dinámico (Slide-out Cart) con metas de envío gratis.", icon: "CreditCard" },
              { text: "Módulos de Upsell y Bundles de productos para subir ticket promedio.", icon: "Sparkles" },
              { text: "Automatización de emails para recuperar carritos abandonados (Klaviyo).", icon: "Mail" },
              { text: "Entrega en 1 a 2 semanas.", icon: "CheckCircle" }
            ]
          },
          {
            name: "Shopify Plus & Escalamiento",
            price: { COP: 6800000, USD: 1700 },
            description: "Para marcas en expansión con inventarios grandes o integraciones externas.",
            features: [
              { text: "Todo el paquete Shopify Pro & CRO.", icon: "Plus" },
              { text: "Integración con ERPs, software de facturación electrónica o bodegas múltiples.", icon: "Server" },
              { text: "Multi-moneda y multi-idioma para ventas internacionales.", icon: "CreditCard" },
              { text: "Auditoría WPO extrema y configuración avanzada de Meta Pixel CAPI.", icon: "ShieldCheck" },
              { text: "Acompañamiento y soporte post-lanzamiento de 30 días.", icon: "Briefcase" }
            ]
          }
        ]
      },
      {
        id: "landing",
        name: "Landing & Prototipos Rápidos",
        badge: "2 Niveles",
        description: "Valida tu propuesta comercial con prototipos interactivos o landings ultrarrápidas.",
        startingPrice: { USD: 300, COP: 1200000 },
        tiers: [
          {
            name: "Prototipo Interactivo de Alta Fidelidad",
            price: { COP: 1200000, USD: 300 },
            description: "Diseño UI clickeable en Figma para validar con clientes o inversores antes de programar.",
            features: [
              { text: "Diseño UI moderno y estilizado en Figma (Mobile + Desktop).", icon: "Figma" },
              { text: "Prototipo 100% clickeable y navegable con micro-interacciones.", icon: "Smartphone" },
              { text: "Guía de estilos, tokens y componentes reutilizables.", icon: "Sparkles" },
              { text: "Entrega express en 3 a 5 días hábiles.", icon: "Clock" }
            ]
          },
          {
            name: "Landing Page Express de Conversión",
            isRecommended: true,
            price: { COP: 1600000, USD: 400 },
            description: "Maquetación de 1 página de alto impacto para captar clientes desde el día 1.",
            features: [
              { text: "Diseño y desarrollo de 1 página orientada a ventas directas.", icon: "Sparkles" },
              { text: "Copywriting persuasivo y estructura de secciones probada.", icon: "LayoutDashboard" },
              { text: "Integración con botón flotante a WhatsApp y formulario a CRM.", icon: "Mail" },
              { text: "Instalación de Pixel de Meta y Google Analytics 4 para pauta.", icon: "Search" },
              { text: "Entrega express en 3 a 5 días hábiles.", icon: "Clock" }
            ]
          }
        ]
      }
    ]
  },
  { 
    id: "api-ai",
    slug: "automation-ai",
    title: "Integraciones, APIs & IA", 
    description: "Conectamos tu ecosistema digital y automatizamos operaciones con modelos de IA (OpenAI, Claude), APIs REST/GraphQL, webhooks y pipelines de datos.",
    startingPrice: { USD: 450, COP: 1800000 },
    timeline: "1 a 3 Semanas",
    tiers: [
      {
        name: "Integración de APIs & Webhooks",
        price: { COP: 1800000, USD: 450 },
        description: "Conexión bidireccional entre sistemas, pasarelas, CRM y bases de datos.",
        features: [
          { text: "Conexión de APIs REST, GraphQL o Webhooks en tiempo real.", icon: "Code" },
          { text: "Integración con CRMs (HubSpot / Salesforce) o ERPs.", icon: "Database" },
          { text: "Sincronización automatizada de inventarios y usuarios.", icon: "Server" },
          { text: "Manejo de errores, logs y reintentos automáticos.", icon: "ShieldCheck" },
          { text: "Entrega ágil en 1 semana.", icon: "Clock" }
        ]
      },
      {
        name: "Agentes de IA & Automatización",
        isRecommended: true,
        price: { COP: 3500000, USD: 875 },
        description: "Asistentes inteligentes y flujos automatizados con OpenAI y Claude.",
        features: [
          { text: "Integración con modelos LLM líderes (OpenAI, Claude, Gemini).", icon: "Sparkles" },
          { text: "Agente inteligente con base de conocimiento (RAG / Embeddings).", icon: "Lightbulb" },
          { text: "Chatbot de atención y ventas en WhatsApp o plataforma web.", icon: "Smartphone" },
          { text: "Automatización de lectura de documentos y reportes.", icon: "LayoutDashboard" },
          { text: "Entrega completa en 1 a 2 semanas.", icon: "CheckCircle" }
        ]
      },
      {
        name: "Arquitectura IA & Data a Medida",
        price: { COP: null, USD: null },
        description: "Pipelines de datos complejos, fine-tuning y microservicios escalables.",
        features: [
          { text: "Consultoría y levantamiento de arquitectura de IA dedicada.", icon: "Lightbulb" },
          { text: "Pipelines de datos y microservicios serverless de alta concurrencia.", icon: "Server" },
          { text: "Fine-tuning de modelos y vector stores de alta velocidad.", icon: "Database" },
          { text: "Acompañamiento y mantenimiento técnico continuo.", icon: "Briefcase" }
        ]
      }
    ]
  }
];

export const technologyMicroServices: MicroService[] = [
  {
    id: "manychat-bot",
    title: "Bot de ManyChat & WhatsApp Automático",
    description: "Respuestas automáticas en DMs de Instagram y botón directo a WhatsApp.",
    accent: "#10B981",
    deliverables: [
      "Flujo de bienvenida interactivo y menú de preguntas frecuentes.",
      "Captura automatizada de leads (emails y teléfonos de prospectos).",
      "Enrutamiento directo a WhatsApp Business para cierre de ventas.",
      "Capacitación en video para modificar textos y respuestas."
    ],
    price: { USD: 115, COP: 450000 },
    timeline: "24 a 48h"
  },
  {
    id: "payment-gateway",
    title: "Integración de Pasarela de Pagos Express",
    description: "Conexión de botón de pagos o checkout con PSE y tarjetas en tu web o tienda.",
    accent: "#635BFF",
    deliverables: [
      "Configuración de llaves API y Webhooks en la pasarela.",
      "Integración técnica de botón de pago o checkout seguro.",
      "Prueba en vivo con transacción real verificada con PSE/Tarjeta.",
      "Configuración de correos automáticos de confirmación de pago."
    ],
    price: { USD: 125, COP: 500000 },
    timeline: "24 a 48h"
  },
  {
    id: "automation-n8n",
    title: "Automatización de Flujo con n8n / Make",
    description: "Sincronización de 1 flujo clave entre formularios, CRM y bases de datos.",
    accent: "#EA4B71",
    deliverables: [
      "Mapeo de datos bidireccional y triggers en tiempo real.",
      "Conexión con CRM (HubSpot / Google Sheets / Supabase).",
      "Notificaciones instantáneas de alerta a WhatsApp / Discord.",
      "Traspaso del archivo ejecutable del workflow."
    ],
    price: { USD: 150, COP: 600000 },
    timeline: "24 a 48h"
  },
  {
    id: "analytics-tracking",
    title: "Setup de Analítica & Tracking (GA4 + Pixel)",
    description: "Instalación de Google Analytics 4, Metricool y Meta Pixel con eventos de conversión.",
    accent: "#F59E0B",
    deliverables: [
      "Instalación de contenedores y scripts sin afectar velocidad.",
      "Configuración de eventos de compra, lead y clic a WhatsApp.",
      "Tablero conectado en Metricool para métricas unificadas.",
      "Verificación de disparos en vivo en Google Tag Assistant."
    ],
    price: { USD: 90, COP: 350000 },
    timeline: "24h"
  },
  {
    id: "wpo-speed",
    title: "Aceleración de Velocidad WPO (Puntaje 90+)",
    description: "Optimización de Core Web Vitals, compresión de assets y caché extrema.",
    accent: "#FE385B",
    deliverables: [
      "Diagnóstico profundo de cuellos de botella en PageSpeed.",
      "Compresión WebP/AVIF y Lazy-Loading de imágenes/videos.",
      "Minificación de CSS/JS y configuración de caché servidor.",
      "Reporte antes/después con puntajes 90+ garantizados."
    ],
    price: { USD: 165, COP: 650000 },
    timeline: "24 a 48h"
  },
  {
    id: "dns-workspace",
    title: "Setup de Dominio, DNS & Correo Corporativo",
    description: "Conexión de dominio con registros de seguridad SPF, DKIM y DMARC anti-spam.",
    accent: "#2563EB",
    deliverables: [
      "Configuración de registros DNS en Vercel, Shopify o Hosting.",
      "Autenticación SPF, DKIM y DMARC para entregabilidad 100%.",
      "Certificado SSL / HTTPS activo en todo el dominio.",
      "Prueba de envío y recepción de correos corporativos."
    ],
    price: { USD: 100, COP: 400000 },
    timeline: "24h"
  }
];
