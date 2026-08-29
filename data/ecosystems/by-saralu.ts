import { EcosystemSchema } from '@/types/ecosystem';

export const bySaraluEcosystem: EcosystemSchema = {
  id: 'by-saralu',
  slug: 'by-saralu',
  accent: '#FE385B',
  identity: {
    name: 'BY SARALÚ',
    type: 'Ecosistema de Alta Costura & Headwear de Lujo',
    industry: ['Alta Costura', 'E-Commerce de Lujo', 'Moda Internacional', 'Venta Mayorista B2B'],
    year: 2024,
    status: 'En Producción Activa',
    uxioRole: [
      'Estrategia de Marca & Naming',
      'Dirección de Arte & Fotografía 4K',
      'Storefront Headless en Next.js 16',
      'Portal Mayorista B2B & Pagos Stripe'
    ]
  },
  overview: {
    whatIsIt: 'Ecosistema digital y editorial para la casa de alta costura By Saralú, combinando e-commerce de lujo con catálogo mayorista B2B internacional.',
    challenge: 'La marca requería elevar radicalmente su percepción de valor hacia mercados de Europa y EE.UU., preservando la autenticidad artesanal sin sacrificar la velocidad de carga de un catálogo visual de alta resolución.',
    roleDescription: 'Desarrollamos una experiencia de compra inmersiva mediante un frontend headless en Next.js conectado a Shopify Plus, junto con la dirección de arte y filmación cinematográfica en 4K.'
  },
  conceptualArchitecture: {
    title: 'ARQUITECTURA CONCEPTUAL',
    subtitle: 'La experiencia de alta costura es solo la superficie del ecosistema.',
    branchLeft: {
      title: 'CLIENT & LUXURY STOREFRONT',
      badge: 'FRONT-FACING',
      accent: '#FF7F07',
      subBranches: [
        {
          title: 'Lookbook & Colecciones',
          items: ['Editorial Lookbook 4K', 'Galerías de Pasarela', 'Guía de Tallas Interactiva', 'Selector de Telas & Texturas']
        },
        {
          title: 'Shopping Experience',
          items: ['Carrito Flotante sin Fricción', 'Checkout Multi-Divisa', 'Concierge de Cliente', 'Seguimiento de Despacho Bespoke']
        }
      ]
    },
    branchRight: {
      title: 'ATELIER & COMMERCE OPERATIONS',
      badge: 'BACK-OFFICE',
      accent: '#10B981',
      subBranches: [
        {
          title: 'Headless Commerce',
          items: ['Shopify Storefront API', 'Inventario de Alta Costura', 'Precios Dinámicos B2B', 'Stripe Multi-Currency']
        },
        {
          title: 'Logística & Atelier',
          items: ['Gestión de Pedidos a Medida', 'Envíos Internacionales DHL', 'Klaviyo CRM Automation', 'Telemetría de Ventas']
        }
      ]
    },
    foundation: {
      title: 'BY SARALÚ HEADLESS FOUNDATION',
      stackSummary: 'Next.js 16 + React 19 + Shopify Plus GraphQL API + Stripe Global + Vercel Edge CDN'
    }
  },
  flow: [
    'Editorial Lookbook',
    'Virtual Fitting & Sizing',
    'Luxury Checkout',
    'Custom Unboxing Tracking',
    'Clientele Concierge'
  ],
  capabilities: [
    'Storefront Headless con Next.js & Shopify Plus',
    'Catálogo B2B con Precios Dinámicos por Volumen',
    'Micro-animaciones a 120 FPS y Transiciones de Página Fluidas',
    'Infraestructura Global con CDN optimizada para Video'
  ],
  technology: {
    stack: ['Next.js 14', 'Shopify Storefront API', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    supporting: ['Klaviyo CRM', 'Gorgias Concierge', 'Cloudinary CDN', 'Vercel Edge', 'Stripe Multi-Currency'],
    architectureSummary: 'Frontend desacoplado de ultra-baja latencia con renderizado híbrido (ISR) para páginas de producto y sincronización de stock en tiempo real con Shopify API.'
  },
  works: [
    {
      id: 'saralu-storefront',
      discipline: 'Websites & E-Commerce',
      title: 'Storefront Headless & Experiencia de Compra',
      href: '/works/project/by-saralu'
    },
    {
      id: 'saralu-identity',
      discipline: 'Branding',
      title: 'Identidad Visual, Monograma & Packaging Editorial',
      href: '/works/project/by-saralu'
    },
    {
      id: 'saralu-editorial',
      discipline: 'Contenido & Media',
      title: 'Lookbook Cinematográfico 4K & Campaña Global',
      href: '/works/project/by-saralu'
    }
  ],
  links: {
    liveUrl: 'https://bysaralu.com',
    githubUrl: 'https://github.com/uxio-studio/by-saralu-storefront',
    githubAccess: 'Client Core',
    ctaText: 'Construir E-Commerce de Lujo'
  },
  relations: {
    labs: ['boku-bento'],
    relatedEcosystems: ['sie-travel', 'alto-andino']
  }
};
