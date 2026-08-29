import { EcosystemSchema } from '@/types/ecosystem';
import {
  alunaLayers,
  alunaProductTiers,
  alunaUserJourney,
  alunaDetailedRoles,
} from './aluna-layers';

export const alunaEcosystem: EcosystemSchema = {
  id: 'aluna',
  slug: 'aluna',
  accent: '#10B981',
  mainConcept: 'Infraestructura digital integral para operar un negocio gastronómico.',
  pitch: 'Aluna es un sistema operativo para la hospitalidad que unifica comercio, salón, comandas de cocina en tiempo real, catálogo, inventario, cobro en caja y experiencia digital por código QR en una misma arquitectura multi-sede.',
  identity: {
    name: 'ALUNA',
    type: 'Hospitality Operating System & Plataforma Gastronómica',
    industry: ['Hospitality & Gastronomía', 'POS & Comandas de Cocina (KDS)', 'Menú Digital QR', 'SaaS Multi-Sede'],
    year: 2024,
    status: 'En Producción Activa',
    uxioRole: [
      'Estrategia & Definición de Producto',
      'Arquitectura de Salón, Cocina & Mesas',
      'Sistema Visual & Tokens de Diseño',
      'Frontend React + Vite & PWA',
      'Canales Supabase Realtime para KDS',
      'Base de Datos PostgreSQL con RLS Multi-Sede',
      'Integración con Impresoras Térmicas ESC/POS',
      'Panel de Cobro POS & Analítica Operativa'
    ]
  },
  overview: {
    whatIsIt: 'Plataforma digital para la gestión operativa y comercial de restaurantes y marcas de hospitalidad, con catálogo interactivo, pedidos por QR, control de mesas para meseros, pantalla de cocina (KDS), inventario y administración multi-sede.',
    challenge: 'Los restaurantes tradicionales operan con sistemas fragmentados: comandas en papel propensas a errores, menús QR en PDFs estáticos difíciles de actualizar y falta de sincronización en tiempo real entre salón y cocina.',
    roleDescription: 'UXIO diseñó y construyó Aluna como un sistema operativo para la hospitalidad: diseñó la experiencia del comensal y del personal de servicio, estructuró la jerarquía multi-marca en PostgreSQL con RLS y programó la sincronización reactiva en tiempo real entre salón, cocina y caja.'
  },
  transformation: {
    from: 'Menús QR Estáticos & Comandas Manuales en Papel',
    to: 'Sistema Operativo Gastronómico (Hospitality OS)',
    stages: ['Menú Digital QR', 'Control de Salón & Mesas', 'KDS de Cocina en Realtime', 'Ecosistema Multi-Sede'],
    tagline: 'De simples pedidos aislados a una infraestructura operativa completa que conecta salón, cocina y caja.'
  },
  framework: {
    think: 'Entender la velocidad y los puntos de fricción reales en el servicio gastronómico durante horas pico.',
    design: 'Diseñar interfaces táctiles de alto contraste para cocineros y meseros, y un menú QR fluido para comensales.',
    build: 'Construir la plataforma con React, Vite, Tailwind CSS y suscripciones reactivas en Supabase Realtime.',
    operate: 'Resolver el flujo completo de mesas, comandas, KDS, división de cuentas, propinas e inventario base.',
    scale: 'Estructurar la arquitectura multi-brand y multi-location con seguridad RLS para franquicias y holdings.'
  },
  conceptualArchitecture: {
    title: 'ARQUITECTURA CONCEPTUAL',
    subtitle: 'La experiencia del comensal es solo la superficie del sistema operativo.',
    branchLeft: {
      title: 'CUSTOMER & FLOOR EXPERIENCE',
      badge: 'SALÓN & COMENSAL',
      accent: '#10B981',
      subBranches: [
        {
          title: 'Comensal en Mesa (QR)',
          items: ['Menú Digital Web/PWA', 'Selector de Modificadores', 'Carrito a Mesa', 'Checkout Directo']
        },
        {
          title: 'Operación de Salón (Meseros)',
          items: ['Mapa de Mesas en Vivo', 'Toma Rápida de Comandas', 'Fusión de Órdenes', 'Estados de Mesa']
        }
      ]
    },
    branchRight: {
      title: 'PRODUCTION & MANAGEMENT',
      badge: 'COCINA & ADMINISTRACIÓN',
      accent: '#00F0FF',
      subBranches: [
        {
          title: 'Cocina & KDS Realtime',
          items: ['Comandas en Vivo', 'Alertas Sonoras', 'Cronómetro de Preparación', 'Impresión Térmica ESC/POS']
        },
        {
          title: 'Caja, Recetas & Multi-Sede',
          items: ['Terminal de Cobro POS', 'Propinas & Pagos Divididos', 'Fichas de Recetas & Stock', 'Aislamiento Multi-Brand RLS']
        }
      ]
    },
    foundation: {
      title: 'ALUNA HOSPITALITY FOUNDATION',
      stackSummary: 'React 18 + Vite + Tailwind CSS + Supabase (PostgreSQL, Auth, Realtime, RLS) + ESC/POS Thermal Printing'
    }
  },
  layers: alunaLayers,
  productTiers: alunaProductTiers,
  userJourney: alunaUserJourney,
  uxioRolesDetailed: alunaDetailedRoles,
  resilience: {
    title: 'Sincronización Realtime, Aislamiento RLS & Resiliencia Operativa',
    summary: 'Arquitectura diseñada para mantener la operación del restaurante activa sin caídas mediante suscripciones reactivas a base de datos, aislamiento estricto por marca/sede y soporte para comandas impresas.',
    pillars: [
      { name: 'Supabase Realtime Engine', desc: 'Canales postgres_changes que notifican a cocina y salón en milisegundos' },
      { name: 'Multi-Brand RLS Isolation', desc: 'Políticas PostgreSQL que blindan los datos de cada sede y marca' },
      { name: 'Thermal ESC/POS Fallback', desc: 'Impresión física de comandas como respaldo operativo en cocina' },
      { name: 'PWA Touch Shell', desc: 'Caché de assets estáticos para respuesta táctil instantánea en tablets' }
    ],
    learnings: 'La operación en horas pico requiere que las mutaciones de estado de mesas y órdenes sean atómicas para evitar duplicación de comandas.'
  },
  flow: [
    '01 Escaneo QR (Mesa Automática)',
    '02 Selección & Modificadores de Plato',
    '03 Envío de Orden & Fusión con Mesa',
    '04 Recepción en Cocina vía Realtime (KDS)',
    '05 Preparación (New ➔ Preparing ➔ Ready)',
    '06 Servicio a Mesa & Notificación a Mesero',
    '07 Cobro POS (Propinas & Pagos Divididos)',
    '08 Cierre de Cuenta & Telemetría Diaria'
  ],
  capabilities: [
    'Menú Digital QR Interactivo con Modificadores de Plato',
    'Mapa de Mesas Táctil y Terminal de Meseros (AdminWaiter)',
    'Kitchen Display System (KDS) en Tiempo Real con Alertas',
    'Terminal POS con Pagos Divididos y Soporte de Propinas',
    'Módulo de Recetas Base, Insumos e Inventario por Sede',
    'Aislamiento Multi-Brand y Multi-Location con Seguridad RLS'
  ],
  technology: {
    stack: [
      'React 18',
      'Vite',
      'TypeScript / JavaScript',
      'Tailwind CSS',
      'Supabase PostgreSQL',
      'Supabase Auth',
      'Supabase Realtime Channels',
      'Supabase Edge Functions',
      'PWA Service Worker'
    ],
    supporting: [
      'ESC/POS Thermal Print Protocol',
      'Web Audio API (Alertas KDS)',
      'Context API (State Management)',
      'Lucide React Icons',
      'PostgreSQL RLS Policies'
    ],
    architectureSummary: 'React 18 SPA + Vite + Tailwind CSS + Supabase (PostgreSQL, Auth, Realtime, Storage, RLS) + Thermal Printing.',
    designTokens: [
      'Lienzo Oscuro Profundo (#0E0E10)',
      'Acento Esmeralda / Cyan (#10B981 / #00F0FF)',
      'Código de Color de Mesas (Verde, Amarillo, Rojo, Azul)',
      'Tipografía Táctil de Alto Contraste'
    ],
    backendEntities: [
      'brands', 'locations', 'profiles', 'staff', 'products', 'categories',
      'modifier_groups', 'modifier_options', 'restaurant_tables', 'orders',
      'order_items', 'order_payments', 'ingredients', 'recipes', 'recipe_ingredients',
      'location_inventory', 'payment_methods', 'analytics_events'
    ]
  },
  works: [
    { id: 'strategy', discipline: 'Strategy', title: 'Evolución: De Simple Menú QR a Hospitality OS', href: '/works/ecosystems/aluna/strategy' },
    { id: 'brand', discipline: 'Brand / Digital Identity', title: 'Identidad Visual Aluna (Hospitality Premium & UI Esmeralda)', href: '/works/ecosystems/aluna/brand' },
    { id: 'product', discipline: 'Product Architecture', title: 'Jerarquía Multi-Brand, Multi-Location & Entidades', href: '/works/ecosystems/aluna/product' },
    { id: 'ux-ui', discipline: 'UX/UI & Research', title: 'Flujo Operativo de Mesas & Journey de Cliente QR', href: '/works/ecosystems/aluna/ux-ui' },
    { id: 'qr-menu', discipline: 'Customer Experience / Web', title: 'Menú Digital Interactivo & Carrito a Mesa', href: '/works/ecosystems/aluna/qr-menu' },
    { id: 'waiter-pos', discipline: 'Operations / Tablet App', title: 'Terminal de Meseros & Asignación de Mesas', href: '/works/ecosystems/aluna/waiter-pos' },
    { id: 'kds-kitchen', discipline: 'Kitchen Display System (KDS)', title: 'Kitchen Display System en Realtime con Alertas', href: '/works/ecosystems/aluna/kds-kitchen' },
    { id: 'order-engine', discipline: 'Backend & Transactions', title: 'Motor Transaccional de Órdenes & Fusión de Mesas', href: '/works/ecosystems/aluna/order-engine' },
    { id: 'pos-payments', discipline: 'POS & Billing', title: 'Terminal de Pagos, Propinas & División de Cuentas', href: '/works/ecosystems/aluna/pos-payments' },
    { id: 'catalog-modifiers', discipline: 'Catalog & Product Engine', title: 'Catálogo de Productos, Modificadores & Upsell', href: '/works/ecosystems/aluna/catalog-modifiers' },
    { id: 'inventory-recipes', discipline: 'Inventory & Costing', title: 'Insumos, Proveedores, Recetas & Stock por Sede', href: '/works/ecosystems/aluna/inventory-recipes' },
    { id: 'multi-location-rls', discipline: 'Security & Multi-Tenant', title: 'Arquitectura Multi-Sede & Seguridad RLS', href: '/works/ecosystems/aluna/multi-location-rls' },
    { id: 'analytics', discipline: 'Data & Telemetry', title: 'Telemetría Operativa & Métricas de Servicio', href: '/works/ecosystems/aluna/analytics' },
    { id: 'technology', discipline: 'Technology & Cloud', title: 'Stack React + Vite + Supabase Realtime + Thermal Print', href: '/works/ecosystems/aluna/technology' }
  ],
  links: {
    liveUrl: 'https://alunapos.com',
    githubUrl: 'https://github.com/uxio-studio/aluna-hospitality-os',
    githubAccess: 'Client Architecture',
    ctaText: 'Construir un Ecosistema como Aluna'
  },
  futureRoadmap: [
    'Integración con Facturación Electrónica DIAN / Fiscal Automática',
    'Conexión Bidireccional con Plataformas de Delivery (Rappi / iFood)',
    'Motor de Fidelización de Clientes y Puntos por Consumo',
    'Kardex Completo y Descuento Automático de Stock por Venta',
    'Aplicación Nativa Offline con Sincronización Diferida'
  ],
  relations: {
    labs: ['aluna', 'hospitality'],
    relatedEcosystems: ['sie-travel', 'arca']
  }
};
