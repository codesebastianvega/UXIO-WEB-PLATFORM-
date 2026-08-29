import { EcosystemLayer, EcosystemProductTier, EcosystemJourneyStep } from '@/types/ecosystem';

export const arcaLayers: EcosystemLayer[] = [
  {
    id: 'product-core',
    title: 'Product & Decision Hub',
    category: 'Dashboard & Salud Financiera',
    description: 'Centro de control diario para entender el flujo de dinero real, disponible y compromisos.',
    items: [
      'Dashboard de Salud Financiera (Decision Dashboard)',
      'Gestor de Cuentas, Efectivo, Billeteras & Inversiones',
      'Administración de Tarjetas de Crédito & Fechas de Corte',
      'Registro Rápido de Movimientos & Transacciones',
      'Agenda Financiera & Calendario de Vencimientos',
      'Presupuesto Mensual & Distribución por Destino'
    ]
  },
  {
    id: 'intelligence',
    title: 'Nova AI Agent Engine',
    category: 'Inteligencia Artificial Operativa',
    description: 'Copiloto financiero con +30 herramientas de lectura/escritura y Function Calling.',
    items: [
      'Chat Inteligente con Gemini 3.5 Flash via AI SDK',
      'Lectura de Context Snapshot del Workspace en Tiempo Real',
      'Ejecución de Acciones CRUD (Cuentas, Categorías, Metas)',
      'Tarjetas de Aprobación Visual (Human-in-the-Loop)',
      'Simuladores de Impacto Financiero & What-If',
      'Auditoría y Diagnóstico Semanal Automatizado'
    ]
  },
  {
    id: 'obligations-debt',
    title: 'Debt & Obligations Engine',
    category: 'Deudas & Compromisos',
    description: 'Motor de proyección de pasivos, créditos bancarios y estrategias de amortización.',
    items: [
      'Control de Créditos Bancarios & Préstamos Personales',
      'Simulador de Pago de Deudas (Bola de Nieve / Avalancha)',
      'Programación de Obligaciones & Alertas de Vencimiento',
      'Cálculo de Pagos Mínimos y Cuotas de Tarjetas',
      'Proyección de Cash Flow Libre vs Comprometido'
    ]
  },
  {
    id: 'savings-goals',
    title: 'Savings & Life Goals',
    category: 'Ahorro & Planificación',
    description: 'Estructuras de ahorro individual y colaborativo orientadas a metas reales.',
    items: [
      'Metas de Ahorro Individuales con Seguimiento Visual',
      'Módulo de Metas de Vida (Viajes, Vehículo, Vivienda)',
      'Cadenas de Ahorro Colaborativo (Natilleras)',
      'Simulador de Capacidad de Ahorro Mensual',
      'Reglas de Aporte y Fondos de Emergencia'
    ]
  },
  {
    id: 'business-units',
    title: 'Business Units & Workspaces',
    category: 'Negocios & Multiusuario',
    description: 'Agrupación de finanzas por unidad de negocio, proyectos y planes SaaS.',
    items: [
      'Aislamiento Multi-Workspace con Supabase RLS',
      'Módulo de Unidades de Negocio & Proyectos',
      'Seguimiento de Ingresos y Gastos por Proyecto',
      'Gestión de Membresías y Roles de Usuario',
      'Suscripciones SaaS & Entitlements de Plan'
    ]
  },
  {
    id: 'pwa-experience',
    title: 'Mobile-First PWA & Web Push',
    category: 'Experiencia & Notificaciones',
    description: 'Aplicación web progresiva instalable con soporte offline y notificaciones push.',
    items: [
      'Manifest PWA & Service Worker Caching',
      'Shortcuts Rápidos (Dictar a Nova, Registrar Gasto)',
      'Web Push Notifications para Recordatorios',
      'Safe Areas & Navegación Táctil Bottom-Nav',
      'Modo Offline para Consulta de Resumen'
    ]
  },
  {
    id: 'education-content',
    title: 'Nova Academy & Pedagogy',
    category: 'Educación Financiera',
    description: 'Capa pedagógica interactiva para aprender a tomar mejores decisiones financieras.',
    items: [
      'Módulos Educativos de Finanzas Personales',
      'Guías de Salud Financiera & Reducción de Gastos Hormiga',
      'Tips Contextuales Generados por Nova AI',
      'Micro-Lecciones sobre Intereses & Créditos'
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Database Foundation',
    category: 'Infraestructura & Seguridad',
    description: 'Backend seguro con PostgreSQL, RLS estricto y tracking de consumo de IA.',
    items: [
      'Next.js 16 (App Router) + React 19 + TypeScript',
      'Supabase PostgreSQL con RLS (Row-Level Security)',
      'Google Gemini vía @ai-sdk/google + Zod Schemas',
      'Tracking de Tokens en Tabla ai_usage_events',
      'Audit Logs de Operaciones Administrativas'
    ]
  }
];

export const arcaProductTiers: EcosystemProductTier[] = [
  {
    name: 'PERSONAL',
    badge: 'Finanzas Personales',
    description: 'Diseñado para individuos que buscan claridad total en su flujo de dinero, control de deudas y metas de ahorro.',
    highlights: ['Dashboard diario de disponible', 'Gestor de cuentas y tarjetas', 'Copiloto Nova AI personal']
  },
  {
    name: 'PROYECTOS',
    badge: 'Freelancers & Creadores',
    description: 'Ideal para profesionales con múltiples fuentes de ingreso, proyectos independientes y planeación fiscal.',
    highlights: ['Business units y proyectos', 'Simuladores avanzados de compra', 'Proyección de flujo de caja']
  },
  {
    name: 'NEGOCIOS',
    badge: 'Startups & Multi-Workspace',
    description: 'Soporte multiusuario para pequeñas empresas con control de roles, membresías de workspace y cuotas de IA ampliadas.',
    highlights: ['Aislamiento multi-workspace', 'Reportes PDF corporativos', 'Mayor cuota de tokens para Nova']
  }
];

export const arcaUserJourney: EcosystemJourneyStep[] = [
  { step: '01', label: 'AUTENTICACIÓN', question: '¿Cómo ingreso de forma segura a mi workspace financiero?' },
  { step: '02', label: 'RESUMEN DEL DÍA', question: '¿Cuánto dinero libre tengo realmente disponible para gastar hoy?' },
  { step: '03', label: 'REGISTRO RÁPIDO', question: '¿Cómo anoto un gasto o ingreso en segundos desde el celular?' },
  { step: '04', label: 'AGENDA & DEUDAS', question: '¿Qué pagos tengo pendientes esta semana y cuáles están vencidos?' },
  { step: '05', label: 'CONSULTA A NOVA', question: '¿Qué pasa si compro una laptop a 6 cuotas con mi tarjeta?' },
  { step: '06', label: 'APROBACIÓN UI', question: '¿Cómo confirmo que Nova ejecute la acción correcta en mi base de datos?' },
  { step: '07', label: 'PLAN DEL MES', question: '¿Cómo distribuyo mis ingresos en porcentajes para ahorro y gastos fijos?' },
  { step: '08', label: 'METAS DE VIDA', question: '¿Cómo va mi progreso de ahorro para mi viaje o fondo de emergencia?' }
];

export const arcaDetailedRoles = [
  { area: 'Strategy', description: 'Transformación del concepto: de simple app de registro de gastos a sistema financiero personal aumentado por IA.' },
  { area: 'Product', description: 'Definición de entidades (cuentas, obligaciones, presupuestos, metas) y arquitectura del copiloto Nova.' },
  { area: 'UX', description: 'User journey mobile-first PWA, flujos de aprobación visual de IA y navegación con bottom-nav.' },
  { area: 'UI', description: 'Sistema visual Arca con temas Bronce, Neón y Océano, tipografía Inter y componentes de tarjeta financiera.' },
  { area: 'AI Architecture', description: 'Integración de Google Gemini con +30 tools de negocio, Function Calling, esquemas Zod y guardrails.' },
  { area: 'Engineering', description: 'Desarrollo full-stack en Next.js 16 + React 19 + TypeScript + Service Worker PWA.' },
  { area: 'Backend & Data', description: 'Esquema relacional en Supabase PostgreSQL con RLS, triggers de actualización y multi-workspace.' },
  { area: 'Security', description: 'Aislamiento de datos por workspace, aprobación humana antes de escritura y control de service role.' }
];
