import { EcosystemSchema } from '@/types/ecosystem';

export const altoAndinoEcosystem: EcosystemSchema = {
  id: 'alto-andino',
  slug: 'alto-andino',
  accent: '#FF7F07',
  identity: {
    name: 'ALTO ANDINO',
    type: 'Ecosistema de Café de Especialidad DTC & Agritech',
    industry: ['Café de Especialidad', 'Comercio Directo', 'Agritech', 'E-Commerce DTC'],
    year: 2024,
    status: 'En Producción Activa',
    uxioRole: [
      'Diseño Industrial & Empaques',
      'Pasaporte Digital con QR Dinámico',
      'Plataforma E-Commerce & Suscripciones',
      'Integración POS para Retail'
    ]
  },
  overview: {
    whatIsIt: 'Ecosistema de café de especialidad de origen con trazabilidad blockchain desde la finca hasta la taza y modelo de suscripción recurrente inteligente.',
    challenge: 'Los consumidores de café premium exigían transparencia radical sobre origen, notas de cata y compensación justa a caficultores, mientras que el modelo de compra requería recurrencia automatizada.',
    roleDescription: 'Diseñamos la identidad de empaque con códigos QR interactivos de trazabilidad, la plataforma de e-commerce con motor de suscripciones personalizadas y la integración con puntos de venta físicos.'
  },
  conceptualArchitecture: {
    title: 'ARQUITECTURA CONCEPTUAL',
    subtitle: 'La tienda digital es solo la superficie del ecosistema.',
    branchLeft: {
      title: 'CONSUMER & DTC STORE',
      badge: 'FRONT-FACING',
      accent: '#FF7F07',
      subBranches: [
        {
          title: 'Coffee Experience',
          items: ['Selector de Notas Sensoriales', 'Fichas de Catación SCA', 'Catálogo de Micro-Lotes', 'Pasaporte Digital QR']
        },
        {
          title: 'Subscription Hub',
          items: ['Suscripción Recurrente Flexible', 'Gestión de Frecuencia', 'Checkout Rápido Stripe', 'Beneficios de Origen']
        }
      ]
    },
    branchRight: {
      title: 'FARM & LOGISTICS OPERATIONS',
      badge: 'BACK-OFFICE',
      accent: '#10B981',
      subBranches: [
        {
          title: 'Trazabilidad & Fincas',
          items: ['Mapa de Origen por Altura', 'Telemetría de Cosecha', 'Compensación Directa al Caficultor', 'Control de Micro-Lotes']
        },
        {
          title: 'Operaciones & Tueste',
          items: ['Lotes de Tueste Fresco', 'Despachos Automatizados', 'Stripe Billing Logic', 'Integración POS Retail']
        }
      ]
    },
    foundation: {
      title: 'ALTO ANDINO DTC FOUNDATION',
      stackSummary: 'Next.js 16 + React 19 + Tailwind CSS + Stripe Subscriptions + PostgreSQL Traceability'
    }
  },
  flow: [
    'Crop Telemetry',
    'Packaging QR Passport',
    'Flavor Profile Matcher',
    'Smart Subscription',
    'Farmer Direct Bonus'
  ],
  capabilities: [
    'Pasaporte Digital del Grano con Trazabilidad en Tiempo Real',
    'Motor de Suscripción con Frecuencia y Molienda Adaptativa',
    'Diseño de Empaques con Certificación Ecológica',
    'Integración POS para Cafeterías de Especialidad'
  ],
  technology: {
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Stripe Billing', 'Supabase Postgres'],
    supporting: ['QR Dynamic Engine', 'ReCharge Subscriptions', 'Resend', 'Google Analytics 4', 'Vercel Analytics'],
    architectureSummary: 'Arquitectura omnicanal conectada a Stripe Billing para gestión de pagos recurrentes y APIs de trazabilidad geolocalizada por lote de cosecha.'
  },
  works: [
    {
      id: 'alto-platform',
      discipline: 'Websites & E-Commerce',
      title: 'Plataforma DTC & Motor de Suscripciones',
      href: '/works/project/alto-andino'
    },
    {
      id: 'alto-packaging',
      discipline: 'Packaging & Print',
      title: 'Diseño de Empaque & Pasaporte Digital QR',
      href: '/works/project/alto-andino'
    },
    {
      id: 'alto-brand',
      discipline: 'Branding',
      title: 'Sistema de Marca & Guía de Origen Botánico',
      href: '/works/project/alto-andino'
    }
  ],
  links: {
    liveUrl: 'https://altoandino.coffee',
    githubUrl: 'https://github.com/uxio-studio/alto-andino-traceability',
    githubAccess: 'Private Repo',
    ctaText: 'Desarrollar Ecosistema DTC'
  },
  relations: {
    labs: ['arca'],
    relatedEcosystems: ['sie-travel', 'by-saralu']
  }
};
