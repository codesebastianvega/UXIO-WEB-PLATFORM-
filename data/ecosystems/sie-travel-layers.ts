import { EcosystemLayer, EcosystemProductTier, EcosystemJourneyStep } from '@/types/ecosystem';

export const sieTravelLayers: EcosystemLayer[] = [
  {
    id: 'experience',
    title: 'Experience Layer',
    category: 'Viajero & Frontend Público',
    description: 'Superficie de descubrimiento e inmersión visual y experiencial para el usuario.',
    items: [
      'Home & Explore Hub',
      'Categorías & Filtros Avanzados',
      'Catálogo Dinámico de Experiencias',
      'Ficha Detallada (Tour Detail)',
      'Calendario & Disponibilidad en Tiempo Real',
      'Itinerarios Interactivos & Mapas',
      'Inclusiones, Requisitos & FAQs',
      'Reviews Verificados & Métricas de Impacto'
    ]
  },
  {
    id: 'commerce',
    title: 'Commerce Engine',
    category: 'Transaccional & Monetización',
    description: 'Motor de conversión de alta velocidad que conecta adquisición, pago y confirmación.',
    items: [
      'Booking Wizard Multi-Step',
      'Selección de Fechas & Cupos Dinámicos',
      'Selector de Viajeros & Tarifas',
      'Add-ons & Up-selling Modular',
      'Motor de Cupones & Descuentos',
      'Pricing Algorítmico',
      'Pasarela de Pago Bold Integrada',
      'Confirmación Inmediata & Webhooks'
    ]
  },
  {
    id: 'traveler',
    title: 'Traveler Relationship',
    category: 'Área Privada & Post-Compra',
    description: 'Relación continua con el viajero antes, durante y después de la experiencia.',
    items: [
      'Autenticación Segura (Supabase Auth)',
      'Perfil & Datos de Contacto/Médicos',
      'Historial de Viajes (My Trips)',
      'Emisión de Tickets Digitales con QR',
      'Reviews & Calificación de Salidas',
      'Guardado de Favoritos',
      'Centro de Notificaciones',
      'Sistema de Logros & Recompensas'
    ]
  },
  {
    id: 'operations',
    title: 'Operations Back-Office',
    category: 'Gestión Interna del Negocio',
    description: 'Software operacional que reemplaza procesos manuales y hojas de cálculo.',
    items: [
      'Control de Inventario & Cupos',
      'Gestión de Salidas & Fechas',
      'Administración de Reservas & Pasajeros',
      'Asignación & Coordinación de Guías',
      'Gestor de Leads & Pipeline Comercial',
      'Moderación de Reviews & Contenidos',
      'Estructura de Costos & Economía',
      'Registro de Indicadores de Impacto'
    ]
  },
  {
    id: 'b2b',
    title: 'B2B & Enterprise Portal',
    category: 'Comercialización Corporativa',
    description: 'Infraestructura comercial para agencias, empresas y clientes corporativos.',
    items: [
      'Cotizador de Experiencias a Medida',
      'Simulador de Escenarios & Precios',
      'Recetas de Costos por Proveedor',
      'Márgenes & Comisiones Automatizadas',
      'Generador de Propuestas Comerciales',
      'Exportación Instantánea a PDF'
    ]
  },
  {
    id: 'partners',
    title: 'Partners & Ecosystem Expansion',
    category: 'Escalabilidad del Negocio',
    description: 'Arquitectura preparada para integrar aliados, operadores y marketplace.',
    items: [
      'Portal de Aliados Locales',
      'Canal de Agencias Mayoristas',
      'Integración con Operadores de Territorio',
      'Programa de Miembros & Embajadores',
      'Bases para Modelo Marketplace'
    ]
  },
  {
    id: 'content',
    title: 'Content & Acquisition Layer',
    category: 'Editorial & Crecimiento',
    description: 'Capa editorial optimizada para SEO y conversión de tráfico orgánico.',
    items: [
      'Blog Editorial & Crónicas de Territorio',
      'Campañas de Temporada & Destinos',
      'Historias de Impacto & Comunidades',
      'Optimización Técnica SEO & Open Graph',
      'Landing Pages de Conversión Rápida'
    ]
  },
  {
    id: 'system',
    title: 'System & Cloud Foundation',
    category: 'Infraestructura Tecnológica',
    description: 'Arquitectura híbrida resiliente con alta disponibilidad y backend integral.',
    items: [
      'Next.js 16 (App Router) + React 19',
      'TypeScript & Tailwind CSS',
      'Supabase (PostgreSQL, Auth, Storage, RLS)',
      'Bold Payments API & Webhooks',
      'Server Actions & Route Handlers',
      'Vercel Edge & Speed Insights',
      'Fallback Estático & Modo Offline Resiliente'
    ]
  }
];

export const sieTravelProductTiers: EcosystemProductTier[] = [
  {
    name: 'CORE',
    badge: 'Base & Modulares',
    description: 'Experiencias de entrada, modulares o en alianza con operadores locales que garantizan volumen y accesibilidad.',
    highlights: ['Salidas programadas', 'Operación estandarizada', 'Punto de entrada al ecosistema']
  },
  {
    name: 'SIGNATURE',
    badge: 'Curaduría Propia',
    description: 'Experiencias diseñadas e intervenidas directamente por SIE con narrativa propia, alto valor percibido y mayor diferenciación.',
    highlights: ['Diseño de autor', 'Guías exclusivos de territorio', 'Impacto comunitario directo']
  },
  {
    name: 'ELITE',
    badge: 'Premium & High-End',
    description: 'Experiencias VIP, privadas, multidía de lujo regenerativo con potencial de comercialización internacional.',
    highlights: ['Servicio personalizado VIP', 'Logística privada de alta gama', 'Enfoque global / multi-lenguaje']
  }
];

export const sieTravelUserJourney: EcosystemJourneyStep[] = [
  { step: '01', label: 'DISCOVER', question: '¿Qué puedo hacer y en qué destinos de Colombia?' },
  { step: '02', label: 'EXPLORE', question: '¿Dónde es y qué tipo de aventura / bienestar ofrece?' },
  { step: '03', label: 'COMPARE', question: '¿Cuál experiencia se adapta mejor a mis expectativas?' },
  { step: '04', label: 'DECIDE', question: '¿Cuánto cuesta, qué incluye y qué nivel de preparación exige?' },
  { step: '05', label: 'BOOK', question: '¿Cómo elijo fechas, cupos y add-ons personalizados?' },
  { step: '06', label: 'PAY', question: '¿Cómo pago de forma segura y sin fricción a través de Bold?' },
  { step: '07', label: 'TRAVEL', question: '¿Dónde consulto mis tickets con QR, itinerarios y guías en ruta?' },
  { step: '08', label: 'RETURN', question: '¿Cómo califico el viaje y visualizo el impacto ambiental generado?' }
];

export const sieTravelDetailedRoles = [
  { area: 'Strategy', description: 'Definición de la evolución digital del negocio: de agencia manual a plataforma escalable.' },
  { area: 'Product', description: 'Arquitectura integral de producto, entidades turísticas y definición de módulos operativos.' },
  { area: 'UX', description: 'User journeys de 8 etapas, flujos de conversión, arquitectura de información y experiencia.' },
  { area: 'UI', description: 'Sistema visual contemporáneo, diseño responsive, microinteracciones y dashboards.' },
  { area: 'Technology', description: 'Arquitectura frontend y backend en Next.js 16 + Supabase, Server Actions y APIs.' },
  { area: 'Backend', description: 'Base de datos PostgreSQL, autenticación, storage, RLS y lógica de negocio.' },
  { area: 'Commerce', description: 'Engine de reservas, pricing algorítmico y pasarela de pago Bold con webhooks.' },
  { area: 'Operations', description: 'Back-office operacional para inventarios, cupos, guías, leads, costos e impacto.' },
  { area: 'Content', description: 'Estructura editorial, narrativa de territorio y superficies comerciales optimizadas.' },
  { area: 'Growth', description: 'Estrategia SEO, telemetría de eventos con Metricool/Analytics y captura de leads.' },
  { area: 'Innovation', description: 'Infraestructura preparada para marketplace, B2B corporativo y expansión internacional.' }
];
