import { EcosystemSchema } from '@/types/ecosystem';
import {
  sieTravelLayers,
  sieTravelProductTiers,
  sieTravelUserJourney,
  sieTravelDetailedRoles,
} from './sie-travel-layers';

export const sieTravelEcosystem: EcosystemSchema = {
  id: 'sie-travel',
  slug: 'sie-travel',
  accent: '#00F0FF',
  mainConcept: 'From travel website to digital tourism ecosystem.',
  pitch: 'Transformamos SIE Travel de una operación turística dependiente de procesos manuales en un ecosistema digital capaz de vender, operar y escalar experiencias.',
  identity: {
    name: 'SIE TRAVEL',
    type: 'Plataforma Digital & Ecosistema Operativo Turístico',
    industry: ['Turismo Regenerativo', 'E-Commerce & Booking', 'Fintech / Bold Payments', 'SaaS Operacional', 'B2B'],
    year: 2025,
    status: 'En Producción Activa',
    uxioRole: [
      'Estrategia Digital & Modelo de Negocio',
      'Arquitectura de Experiencia UX (8 Etapas)',
      'Identidad Visual & Sistema de Diseño',
      'Desarrollo Frontend Next.js 16 + React 19',
      'Backend Supabase con PostgreSQL & RLS',
      'Pasarela de Pagos Bold API & Webhooks',
      'Plataforma Back-Office & Operaciones',
      'Portal B2B & Telemetría de Impacto'
    ]
  },
  overview: {
    whatIsIt: 'Plataforma de turismo regenerativo y ecosistema operativo integral para conectar viajeros con experiencias auténticas de naturaleza, bienestar y comunidades en Colombia.',
    challenge: 'Antes de la plataforma, la operación dependía de procesos manuales y herramientas dispersas (ventas por WhatsApp, información fragmentada). Cada crecimiento en ventas significaba más sobrecarga operativa.',
    roleDescription: 'UXIO actuó como Digital Product Partner integral: pensamos el negocio, diseñamos la experiencia, construimos la infraestructura (Next.js 16 + Supabase + Bold) y creamos el back-office para vender, operar, administrar y escalar.'
  },
  transformation: {
    from: 'Presencia Digital (Agencia tradicional)',
    to: 'Sistema Operativo Turístico Escalable',
    stages: ['Presencia Digital', 'Producto Digital', 'Plataforma Transaccional', 'Sistema Operativo Turístico'],
    tagline: 'Construimos la infraestructura digital que permite a SIE: Vender + Operar + Administrar + Aprender + Escalar.'
  },
  framework: {
    think: 'Entender a fondo el modelo de negocio turístico, sus cuellos de botella y oportunidades.',
    design: 'Convertir la visión en una arquitectura de producto integral con filosofía de geometría suave.',
    build: 'Construir tecnología de vanguardia y resiliente con Next.js 16, React 19, TypeScript y Supabase.',
    operate: 'Resolver procesos operativos reales (inventario, salidas, guías, costos, economía e impacto).',
    scale: 'Diseñar la infraestructura para operadores, marketplace, alojamientos y modelo B2B.'
  },
  conceptualArchitecture: {
    title: 'ARQUITECTURA CONCEPTUAL',
    subtitle: 'La interfaz pública es solo la superficie del producto.',
    branchLeft: {
      title: 'TRAVELER DIMENSION',
      badge: 'FRONT-FACING',
      accent: '#FE385B',
      subBranches: [
        {
          title: 'Discover & Explore',
          items: ['Explore Hub', 'Tours & Categorías', 'Calendario Live', 'Reviews & Impacto', 'Wishlist / Favoritos']
        },
        {
          title: 'Travel & Area',
          items: ['Historial My Trips', 'Tickets Digitales con QR', 'Perfil de Viajero', 'Push Notifications', 'Sistema de Logros']
        }
      ]
    },
    branchRight: {
      title: 'BUSINESS & OPERATIONS',
      badge: 'BACK-OFFICE',
      accent: '#10B981',
      subBranches: [
        {
          title: 'Commerce Engine',
          items: ['Booking Multi-Step', 'Pricing Dinámico', 'Bold Payments API', 'B2B Quotes & Scenarios', 'Partners & Marketplace']
        },
        {
          title: 'Operations Desk',
          items: ['Inventario & Cupos', 'Salidas & Guías', 'Leads CRM Pipeline', 'Recetas de Costos & P&L', 'Indicadores de Impacto']
        }
      ]
    },
    foundation: {
      title: 'SIE SYSTEM FOUNDATION',
      stackSummary: 'Next.js 16 + React 19 + Supabase (PostgreSQL, Auth, Storage, RLS) + Bold Webhooks + Resilient Static Fallback'
    }
  },
  layers: sieTravelLayers,
  productTiers: sieTravelProductTiers,
  userJourney: sieTravelUserJourney,
  uxioRolesDetailed: sieTravelDetailedRoles,
  resilience: {
    title: 'Arquitectura Híbrida & Resiliencia en Producción',
    summary: 'Mecanismo construido por UXIO para evitar que las superficies públicas dependan de una sola fuente de datos, manteniendo disponibilidad continua ante contingencias de red, base de datos o almacenamiento.',
    pillars: [
      { name: 'Live Data', desc: 'Sincronización reactiva en tiempo real con Supabase PostgreSQL y APIs' },
      { name: 'Static Catalog', desc: 'Catálogo de experiencias pre-renderizado con ISR para ultra-baja latencia' },
      { name: 'Static Marketing Mode', desc: 'Superficie de venta y marketing operativa incluso sin conexión backend' },
      { name: 'Asset Fallback', desc: 'Respaldo perimetral de imágenes, tokens y assets en CDN distribuida' }
    ],
    learnings: 'El proyecto evidenció retos de producción que permitieron iterar y robustecer la arquitectura a partir de aprendizajes reales, evolucionando continuamente el producto.'
  },
  flow: [
    '01 Discover (Destinos & Naturaleza)',
    '02 Explore (Categorías & Tours)',
    '03 Compare (Tiers & Fechas)',
    '04 Decide (Inclusiones & Requisitos)',
    '05 Book (Viajeros & Add-ons)',
    '06 Pay (Pasarela Bold & Webhooks)',
    '07 Travel (Tickets QR & My Trips)',
    '08 Return (Reviews & Impacto)'
  ],
  capabilities: [
    'Engine de Reservas & Disponibilidad en Tiempo Real',
    'Pasarela de Pago Bold con Webhooks Idempotentes',
    'Back-Office de Operaciones (Inventario, Guías, Salidas)',
    'Portal B2B con Cotizador y Recetas de Costos en PDF',
    'Dashboard de Impacto Ambiental y Comunitario',
    'Tickets Digitales con Códigos QR y Área Privada de Viajero'
  ],
  technology: {
    stack: [
      'Next.js 16 (App Router)',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Supabase Auth',
      'Supabase Storage',
      'Bold Payments'
    ],
    supporting: [
      'Vercel & Speed Insights',
      'Metricool Analytics',
      'Recharts',
      'Radix UI',
      'Lucide React',
      'react-qr-code',
      'html2canvas',
      'jsPDF'
    ],
    architectureSummary: 'Server Components + Client Components + Route Handlers + Server Actions + Supabase PostgreSQL + Bold Payments API + Fallback Estático Resiliente.',
    designTokens: [
      'Dark & Light Mode',
      'Tokens Verdes, Aqua, Sand, Gold, Violet',
      'Tipografías Manrope & Urbanist',
      'Microinteracciones 120 FPS'
    ],
    backendEntities: [
      'tours', 'categories', 'regions', 'departures', 'bookings', 'travelers',
      'guides', 'leads', 'reviews', 'operators', 'agencies', 'ambassadors',
      'impact_metrics', 'cost_recipes', 'storage_buckets'
    ]
  },
  works: [
    { id: 'strategy', discipline: 'Strategy', title: 'Evolución Digital & Modelo de Negocio', href: '/works/ecosystems/sie-travel/strategy' },
    { id: 'brand', discipline: 'Brand / Digital Identity', title: 'Identidad Digital, Tokens & Sistema Visual', href: '/works/ecosystems/sie-travel/brand' },
    { id: 'product', discipline: 'Product Architecture', title: 'Arquitectura de Entidades & Módulos Turísticos', href: '/works/ecosystems/sie-travel/product' },
    { id: 'ux-ui', discipline: 'UX/UI & Research', title: 'User Journey (8 Etapas) & Experiencia de Viajero', href: '/works/ecosystems/sie-travel/ux-ui' },
    { id: 'website', discipline: 'Web Platform', title: 'Plataforma Pública (Explore, Calendar & Tour Details)', href: '/works/ecosystems/sie-travel/website' },
    { id: 'marketplace', discipline: 'Marketplace', title: 'Catálogo Multi-Tier (Core, Signature, Elite)', href: '/works/ecosystems/sie-travel/marketplace' },
    { id: 'booking', discipline: 'Booking Engine', title: 'Wizard de Reserva Multi-Step & Selección de Cupos', href: '/works/ecosystems/sie-travel/booking' },
    { id: 'payments', discipline: 'Payments & Fintech', title: 'Integración Pasarela Bold & Webhooks de Confirmación', href: '/works/ecosystems/sie-travel/payments' },
    { id: 'traveler-app', discipline: 'Traveler Experience', title: 'Portal Privado, Tickets QR & Historial My Trips', href: '/works/ecosystems/sie-travel/traveler-app' },
    { id: 'admin', discipline: 'Admin Back-Office', title: 'Panel de Control de Inventario, Salidas & Pasajeros', href: '/works/ecosystems/sie-travel/admin' },
    { id: 'operations', discipline: 'Operations', title: 'Gestión de Guías, Leads, Reseñas & Costos Operativos', href: '/works/ecosystems/sie-travel/operations' },
    { id: 'b2b', discipline: 'B2B & Enterprise', title: 'Cotizador Corporativo, Simulador & Exportación PDF', href: '/works/ecosystems/sie-travel/b2b' },
    { id: 'impact', discipline: 'Impact Engine', title: 'Telemetría de Impacto Ambiental, Árboles & Agua', href: '/works/ecosystems/sie-travel/impact' },
    { id: 'content', discipline: 'Content & SEO', title: 'Blog Editorial, Campañas & SEO de Destinos', href: '/works/ecosystems/sie-travel/content' },
    { id: 'analytics', discipline: 'Analytics', title: 'Telemetría de Producto con Metricool & Vercel Insights', href: '/works/ecosystems/sie-travel/analytics' },
    { id: 'technology', discipline: 'Technology & Resilience', title: 'Arquitectura Híbrida Resiliente Next.js 16 + Supabase', href: '/works/ecosystems/sie-travel/technology' }
  ],
  links: {
    liveUrl: 'https://sietravel.com',
    githubUrl: 'https://github.com/uxio-studio/sie-travel-ecosystem',
    githubAccess: 'Enterprise Architecture',
    ctaText: 'Construir un Ecosistema como SIE'
  },
  futureRoadmap: [
    'Portal Abierto de Operadores Locales & Marketplace',
    'Módulo de Alojamientos & Experiencias Híbridas',
    'Expansión Internacional con Multi-Lenguaje (i18n)',
    'Automatización con WhatsApp Business API',
    'Motor de Recomendación de Itinerarios con IA',
    'Módulo de Business Intelligence (BI) para Reportes B2B'
  ],
  relations: {
    labs: ['arca', 'aluna'],
    relatedEcosystems: ['alto-andino', 'by-saralu']
  }
};
