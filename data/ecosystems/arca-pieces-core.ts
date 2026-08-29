import { EcosystemPieceDetail } from '@/types/ecosystem';

export const arcaPiecesCore: EcosystemPieceDetail[] = [
  {
    id: 'strategy',
    slug: 'strategy',
    ecosystemSlug: 'arca',
    discipline: 'Strategy',
    title: 'Evolución: De App de Gastos a Copiloto Financiero',
    subtitle: 'Transformación de registros manuales dispersos en un sistema observable de dinero real.',
    overview: 'Diagnóstico y concepción de Arca: superar la limitación de las aplicaciones tradicionales que solo listan gastos pasados, convirtiendo la herramienta en un copiloto proactivo capaz de proyectar decisiones y compromisos futuros.',
    theChallenge: 'La mayoría de usuarios abandonan las apps de finanzas porque anotar cada café resulta agotador y no les dice cuánto dinero libre tienen realmente después de pagar deudas.',
    theSolution: 'Definimos un sistema centrado en el Disponible Real (Cash Flow libre vs comprometido), integrado con un copiloto de IA capaz de ejecutar acciones en lenguaje natural.',
    deliverables: [
      'Tesis de producto: "No solo registrar gastos, sino actuar como copiloto financiero"',
      'Definición de modelo de workspaces y membresías para finanzas personales y proyectos',
      'Estrategia de tiers de suscripción SaaS (Personal, Proyectos, Negocios)',
      'Roadmap de innovación e integración de capacidades de IA'
    ],
    stack: ['Product Strategy Decks', 'Workspace Data Model', 'SaaS Entitlements Spec'],
    architectureOrEntities: ['workspace_plans', 'subscription_entitlements', 'user_memberships'],
    keyFeatures: [
      { title: 'Dinero Real vs Comprometido', desc: 'Claridad inmediata de lo que se puede gastar sin afectar pagos.' },
      { title: 'Orientación al Futuro', desc: 'Foco en proyecciones y compromisos, no solo en historial pasado.' }
    ],
    accent: '#FF7F07'
  },
  {
    id: 'brand',
    slug: 'brand',
    ecosystemSlug: 'arca',
    discipline: 'Brand / Digital Identity',
    title: 'Identidad Visual Arca & Nova (Temas Bronce, Neón, Océano)',
    subtitle: 'Estética contemporánea inspirada en arquitectura financiera premium.',
    overview: 'Sistema de diseño visual para Arca y Nova con paleta principal en tonos Bronce y Naranja sobre lienzo oscuro profundo, complementado con un selector de 6 temas visuales configurables.',
    theChallenge: 'Crear una identidad que transmitiera solidez y discreción bancaria sin sentirse fría o aburrida como los bancos tradicionales.',
    theSolution: 'Diseñamos una interfaz en modo oscuro por defecto con tokens de color temáticos (Bronce, Neón, Océano, Bosque, Reserva y Claro) y tipografía Inter optimizada para legibilidad de cifras.',
    deliverables: [
      'Paleta de tokens de color y selector de 6 temas (Bronce, Neón, Océano, etc.)',
      'Diseño de componentes de tarjeta financiera (.card-arca) y botones táctiles',
      'Iconografía de finanzas, cuentas bancarias y microinteracciones de balance',
      'Assets de PWA, iconos adaptativos y pantalla de splash'
    ],
    stack: ['Tailwind CSS Tokens', 'CSS Custom Properties', 'Inter Font Family', 'Figma Living Tokens'],
    architectureOrEntities: ['theme_tokens', 'card_arca_styles', 'pwa_splash_assets'],
    keyFeatures: [
      { title: '6 Temas Visuales', desc: 'Personalización de paleta según el estilo del usuario.' },
      { title: 'Contraste Financiero', desc: 'Diferenciación instantánea de ingresos, egresos y deudas.' }
    ],
    accent: '#FF7F07'
  },
  {
    id: 'product',
    slug: 'product',
    ecosystemSlug: 'arca',
    discipline: 'Product Architecture',
    title: 'Arquitectura de Entidades Financieras & Workspaces',
    subtitle: 'Modelo relacional de 25+ tablas para cuentas, deudas, metas y eventos.',
    overview: 'Estructuración de la base de datos relacional en PostgreSQL sobre Supabase con soporte para cuentas bancarias, tarjetas de crédito, deudas, préstamos, presupuestos mensuales y unidades de negocio.',
    theChallenge: 'Conectar transacciones diarias con presupuestos mensuales, fechas de corte de tarjetas y compromisos futuros sin desbalancear los saldos históricos.',
    theSolution: 'Diseñamos un esquema con aislamiento estricto por workspace_id, triggers automáticos para updated_at y restricciones de integridad relacional.',
    deliverables: [
      'Esquema relacional en PostgreSQL con más de 25 tablas especializadas',
      'Modelo de entidades: cuentas, tarjetas, deudas, movimientos, presupuestos, metas',
      'Aislamiento por workspace con membresías y roles de usuario',
      'Tipos TypeScript autogenerados a partir del esquema SQL'
    ],
    stack: ['Supabase PostgreSQL', 'SQL Schema DDL', 'TypeScript Types', 'Row-Level Security (RLS)'],
    architectureOrEntities: ['accounts', 'credit_cards', 'debts', 'transactions', 'budgets', 'workspaces'],
    keyFeatures: [
      { title: 'Multi-Workspace Seguro', desc: 'Separación absoluta de datos entre espacios personales y de proyectos.' },
      { title: 'Integridad Transaccional', desc: 'Balances sincronizados automáticamente con cada movimiento.' }
    ],
    accent: '#00F0FF'
  },
  {
    id: 'ux-ui',
    slug: 'ux-ui',
    ecosystemSlug: 'arca',
    discipline: 'UX/UI & Research',
    title: 'Journey Mobile-First PWA & Decision Dashboard',
    subtitle: 'Diseño enfocado en consultas rápidas con una sola mano desde el celular.',
    overview: 'Arquitectura de experiencia de usuario mobile-first con barra de navegación inferior (Bottom-Nav), accesos a un toque para registrar movimientos y paneles de decisión de alta visibilidad.',
    theChallenge: 'Reducir la fricción de entrada para que el usuario consulte su situación en menos de 5 segundos al abrir la app.',
    theSolution: 'Creamos un dashboard principal que prioriza el "Disponible para Gastar Hoy" y las obligaciones urgentes, dejando las configuraciones avanzadas en menús secundarios.',
    deliverables: [
      'User Journey mobile-first de 8 etapas optimizado para uso diario',
      'Navegación con Bottom-Nav y Safe Areas para dispositivos iOS y Android',
      'Wizard de onboarding para nuevos usuarios y configuración de cuentas iniciales',
      'Modales de confirmación con micro-interacciones hápticas'
    ],
    stack: ['Figma Prototyping', 'Tailwind CSS', 'PWA Touch Standards', 'Radix UI'],
    architectureOrEntities: ['bottom_nav_routes', 'onboarding_flow', 'decision_widgets'],
    keyFeatures: [
      { title: 'Operación con Una Mano', desc: 'Botones clave y registro rápido ubicados en la zona inferior del pulgar.' },
      { title: 'Onboarding en 3 Pasos', desc: 'Configuración inicial guiada de saldo y compromisos principales.' }
    ],
    accent: '#FE385B'
  },
  {
    id: 'app-core',
    slug: 'app-core',
    ecosystemSlug: 'arca',
    discipline: 'Web Platform / PWA',
    title: 'Plataforma PWA (Cuentas, Tarjetas & Movimientos)',
    subtitle: 'El motor operacional de registro, saldos y conciliación financiera.',
    overview: 'Módulos front-end y server actions para la gestión de cuentas bancarias, tarjetas de crédito con control de cupo disponible, registro de ingresos/gastos y agenda de vencimientos.',
    theChallenge: 'Mantener la aplicación ultrarrápida y reactiva en conexiones móviles lentas mientras se actualizan múltiples saldos.',
    theSolution: 'Implementamos Next.js 16 con Server Actions, validación Zod en tiempo real y caché local para consulta inmediata de balances.',
    deliverables: [
      'Pantalla de Cuentas (bancarias, efectivo, billeteras e inversión)',
      'Gestor de Tarjetas de Crédito con cupo, deuda y fechas de corte',
      'Formulario de Registro Rápido con categorización automática',
      'Historial de Movimientos con filtros multicriterio y búsqueda'
    ],
    stack: ['Next.js 16', 'React 19', 'Zod Validation', 'Tailwind CSS'],
    architectureOrEntities: ['accounts_screen', 'cards_screen', 'transactions_history'],
    keyFeatures: [
      { title: 'Registro Instantáneo', desc: 'Ingreso de movimientos en menos de 3 clics.' },
      { title: 'Control de Cupo en Vivo', desc: 'Visualización clara de deuda y cupo restante en tarjetas.' }
    ],
    accent: '#10B981'
  },
  {
    id: 'nova-ai',
    slug: 'nova-ai',
    ecosystemSlug: 'arca',
    discipline: 'AI Architecture & Agent',
    title: 'Nova AI: Copiloto con +30 Tools & Function Calling',
    subtitle: 'Un agente financiero operativo con acceso a base de datos y confirmación humana.',
    overview: 'Implementación del agente Nova con Google Gemini 3.5 Flash vía AI SDK, dotado de más de 30 herramientas de lectura y escritura para consultar balances, simular compras y ejecutar acciones financieras.',
    theChallenge: 'Evitar que el modelo de IA invente datos financieros o ejecute cambios destructivos sin autorización explícita del usuario.',
    theSolution: 'Construimos un pipeline de Function Calling con esquemas Zod estrictos, inyección de snapshot de contexto y tarjetas de aprobación visual (needsApproval: true) antes de escribir en base de datos.',
    deliverables: [
      'Endpoint de chat server-side (/api/chat) conectado con Gemini 3.5 Flash',
      'Catálogo de más de 30 herramientas financieras (financial-tools.ts)',
      'Sistema de tarjetas de aprobación visual para transacciones y creación de cuentas',
      'Tracking de tokens y cuotas de consumo en tabla ai_usage_events'
    ],
    stack: ['@ai-sdk/google', 'Google Gemini 3.5 Flash', 'Zod', 'Next.js Server Route'],
    architectureOrEntities: ['financial_tools', 'ai_usage_events', 'approval_cards', 'context_snapshot'],
    keyFeatures: [
      { title: '+30 Tools Operacionales', desc: 'Capacidad de leer y escribir en todas las entidades del sistema.' },
      { title: 'Human-in-the-Loop', desc: 'Confirmación visual obligatoria antes de alterar balances o crear deudas.' }
    ],
    accent: '#00F0FF'
  },
  {
    id: 'decision-engine',
    slug: 'decision-engine',
    ecosystemSlug: 'arca',
    discipline: 'Data & Telemetry',
    title: 'Dashboard de Salud Financiera & Cash Flow en Vivo',
    subtitle: 'El termómetro del dinero: saldo total, disponible y compromisos.',
    overview: 'Panel de control analítico que calcula el flujo de caja en tiempo real, contrastando los saldos disponibles en cuentas bancarias contra los pagos programados de la semana y del mes.',
    theChallenge: 'Muchos usuarios ven $2.000.000 en su cuenta pero olvidan que $1.500.000 corresponden a la tarjeta de crédito que vence en 3 días.',
    theSolution: 'El Decision Dashboard resta automáticamente las obligaciones inminentes del saldo total, mostrando una cifra clara de "Dinero Libre Real".',
    deliverables: [
      'Algoritmo de cálculo de Disponible Real (Cash Flow libre vs comprometido)',
      'Widget de salud financiera con estado del sistema y alertas de vencimiento',
      'Diagnóstico semanal automatizado de patrones de gasto y ahorro',
      'Indicadores de distribución de presupuesto mensual'
    ],
    stack: ['TypeScript Math Engine', 'Tailwind CSS', 'Recharts', 'Supabase Realtime'],
    architectureOrEntities: ['decision_dashboard', 'today_metrics', 'cash_flow_calculator'],
    keyFeatures: [
      { title: 'Disponible Real', desc: 'Cálculo exacto del dinero que realmente puedes gastar hoy.' },
      { title: 'Alertas Preventivas', desc: 'Avisos antes de que un vencimiento comprometa tu liquidez.' }
    ],
    accent: '#FE385B'
  }
];
