import { EcosystemPieceDetail } from '@/types/ecosystem';

export const arcaPiecesOps: EcosystemPieceDetail[] = [
  {
    id: 'obligations',
    slug: 'obligations',
    ecosystemSlug: 'arca',
    discipline: 'Financial Engineering',
    title: 'Motor de Deudas, Créditos & Simulador de Amortización',
    subtitle: 'Estrategias de pago acelerado: Bola de Nieve, Avalancha e impacto What-If.',
    overview: 'Módulo especializado en el control y amortización de deudas bancarias, préstamos personales y tarjetas de crédito, con herramientas de simulación de compra a cuotas y optimización de intereses.',
    theChallenge: 'La falta de claridad en las tasas de interés y los plazos hace que los usuarios paguen millones de pesos adicionales en comisiones financieras.',
    theSolution: 'Implementamos simuladores interactivos que calculan el impacto real de comprar a cuotas y recomiendan estrategias matemáticas de pago anticipado.',
    deliverables: [
      'Simulador de pago de deudas con método Avalancha (mayor interés) y Bola de Nieve',
      'Calculadora de impacto de compras a cuotas (simulate_purchase_impact tool)',
      'Registro de préstamos por cobrar y por pagar a terceros',
      'Calendario de cuotas mensuales y recordatorios de pago'
    ],
    stack: ['Financial Math Library', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
    architectureOrEntities: ['debts_table', 'debt_payments', 'loans_receivable', 'amortization_engine'],
    keyFeatures: [
      { title: 'Simulador What-If', desc: 'Simulación del impacto en tu presupuesto antes de hacer una compra grande.' },
      { title: 'Estrategia de Deuda Cero', desc: 'Plan paso a paso para liquidar tarjetas y créditos en el menor tiempo.' }
    ],
    accent: '#FF7F07'
  },
  {
    id: 'budgets-goals',
    slug: 'budgets-goals',
    ecosystemSlug: 'arca',
    discipline: 'Product & Planning',
    title: 'Planificación Mensual, Metas de Vida & Cadenas de Ahorro',
    subtitle: 'Estructuras de ahorro individual y colaborativo (natilleras) orientadas a objetivos.',
    overview: 'Herramientas para proyectar el presupuesto mensual según porcentajes de ingreso, fijar metas de ahorro para proyectos de vida (viajes, vehículo, vivienda) y administrar cadenas de ahorro colaborativo.',
    theChallenge: 'El ahorro tradicional suele ser pasivo y sin propósito claro, lo que facilita que el dinero se gaste en imprevistos.',
    theSolution: 'Diseñamos un sistema de metas con barra de progreso, aportes automáticos sugeridos por Nova y soporte para cadenas de ahorro comunitarias.',
    deliverables: [
      'Módulo de Plan del Mes con distribución porcentual de ingresos',
      'Seguimiento de Metas de Vida (Viaje, Vehículo, Vivienda, Fondo de Emergencia)',
      'Gestor de Cadenas de Ahorro Colaborativo (Natilleras tradicionales digitalizadas)',
      'Herramienta de ahorro guiado con sugerencias de Nova AI'
    ],
    stack: ['Next.js Server Actions', 'Tailwind CSS', 'Supabase Database', 'TypeScript'],
    architectureOrEntities: ['savings_goals', 'savings_chains', 'monthly_plans', 'budget_allocations'],
    keyFeatures: [
      { title: 'Cadenas de Ahorro', desc: 'Control transparente de turnos y aportes en grupos de ahorro.' },
      { title: 'Metas con Propósito', desc: 'Asignación visual de fondos a objetivos concretos de vida.' }
    ],
    accent: '#10B981'
  },
  {
    id: 'business-units',
    slug: 'business-units',
    ecosystemSlug: 'arca',
    discipline: 'SaaS & Architecture',
    title: 'Módulo Multinegocio, Proyectos & Planes SaaS',
    subtitle: 'Separación de finanzas personales vs proyectos y membresías de workspace.',
    overview: 'Infraestructura SaaS que permite a usuarios avanzados y creadores gestionar múltiples unidades de negocio dentro del mismo login, con aislamiento de transacciones y facturación por planes.',
    theChallenge: 'Mezclar el dinero personal con el capital de trabajo de proyectos independientes genera desorden contable.',
    theSolution: 'Creamos la entidad Business Unit que permite etiquetar transacciones y visualizar balances independientes sin necesidad de crear múltiples cuentas de usuario.',
    deliverables: [
      'Módulo de Unidades de Negocio y Proyectos independientes',
      'Estructura de suscripciones SaaS (Planes Personal, Proyectos, Negocios)',
      'Gestión de membresías y roles de workspace (admin, member)',
      'Reportes financieros consolidados por proyecto'
    ],
    stack: ['Supabase RLS', 'Stripe Billing Logic', 'TypeScript', 'Next.js 16'],
    architectureOrEntities: ['business_units', 'workspaces', 'workspace_members', 'subscription_plans'],
    keyFeatures: [
      { title: 'Multi-Proyecto Limpio', desc: 'Finanzas personales y profesionales completamente diferenciadas.' },
      { title: 'Entitlements SaaS', desc: 'Activación de funcionalidades según el plan de suscripción activo.' }
    ],
    accent: '#7928CA'
  },
  {
    id: 'pwa-push',
    slug: 'pwa-push',
    ecosystemSlug: 'arca',
    discipline: 'Mobile Engineering',
    title: 'PWA Offline, Service Worker & Notificaciones Web Push',
    subtitle: 'Experiencia instalable en iOS y Android con shortcuts rápidos y alertas.',
    overview: 'Implementación completa de Progressive Web App con Service Worker (sw.js), manifest con accesos directos (Dictar a Nova, Escanear recibo), caché estático y notificaciones push web para recordatorios de vencimiento.',
    theChallenge: 'Lograr una experiencia equivalente a una app nativa en iOS y Android sin el costo ni la fricción de publicar en App Store / Play Store.',
    theSolution: 'Configuramos una PWA de alto rendimiento con banner de instalación personalizada, soporte offline básico y envío de notificaciones push desde el servidor.',
    deliverables: [
      'Web App Manifest optimizado para instalación standalone en móviles',
      'Service Worker con estrategia de caché para assets y pantalla offline (/offline)',
      'Integración de Web Push Notifications con llaves VAPID y tabla push_subscriptions',
      'Shortcuts en el icono de la app para acciones directas'
    ],
    stack: ['Service Worker API', 'Web Push Protocol / VAPID', 'Next.js PWA Provider', 'Tailwind Mobile'],
    architectureOrEntities: ['sw_cache', 'push_subscriptions', 'pwa_manifest', 'offline_fallback'],
    keyFeatures: [
      { title: 'Instalación Inmediata', desc: 'App instalable en segundos directamente desde el navegador.' },
      { title: 'Recordatorios Web Push', desc: 'Alertas de vencimientos programados enviadas al dispositivo.' }
    ],
    accent: '#00F0FF'
  },
  {
    id: 'security-rls',
    slug: 'security-rls',
    ecosystemSlug: 'arca',
    discipline: 'Security & Backend',
    title: 'Arquitectura Supabase Postgres, RLS & Safe Approval UI',
    subtitle: 'Seguridad bancaria: aislamiento por workspace y auditoría estricta.',
    overview: 'Estrategia de seguridad basada en políticas de Row-Level Security (RLS) en PostgreSQL, aislamiento estricto de datos por workspace y ejecución segura de herramientas de IA con confirmación humana.',
    theChallenge: 'Garantizar que ningún usuario pueda acceder a datos financieros ajenos y que el agente de IA nunca escriba en cuentas equivocadas.',
    theSolution: 'Implementamos políticas RLS en todas las tablas sensibles, registramos auditorías en admin_audit_log y exigimos aprobación visual para mutaciones de datos.',
    deliverables: [
      'Políticas de Row-Level Security (RLS) en 25+ tablas relacionales',
      'Control de acceso estricto al cliente de administración de Supabase (Service Role)',
      'Registro de eventos de auditoría y consumo de IA en ai_usage_events',
      'Validaciones de saldo e integridad antes de ejecutar cualquier transacción'
    ],
    stack: ['PostgreSQL RLS Policies', 'Supabase Auth', 'Audit Logging', 'Zod Guardrails'],
    architectureOrEntities: ['rls_policies', 'admin_audit_log', 'ai_usage_events', 'workspace_security'],
    keyFeatures: [
      { title: 'Aislamiento RLS Total', desc: 'Cada usuario y workspace solo puede leer y modificar sus propios datos.' },
      { title: 'Auditoría Continua', desc: 'Registro inmutable de cada acción ejecutada por el agente de IA.' }
    ],
    accent: '#10B981'
  },
  {
    id: 'education',
    slug: 'education',
    ecosystemSlug: 'arca',
    discipline: 'Content & Education',
    title: 'Escuela Nova: Pedagogía & Contenido de Salud Financiera',
    subtitle: 'Educación financiera contextual para construir hábitos sostenibles.',
    overview: 'Módulo pedagógico integrado dentro de la aplicación con lecciones interactivas, guías para erradicar gastos hormiga, análisis de tasas de interés y recomendaciones inteligentes de Nova AI.',
    theChallenge: 'La mayoría de personas no entienden conceptos financieros clave como costo de oportunidad, CAT o interés compuesto.',
    theSolution: 'Creamos la Escuela Nova con micro-contenidos visuales y lenguaje accesible, combinados con consejos personalizados según el historial del usuario.',
    deliverables: [
      'Módulo Escuela Nova con lecciones de finanzas personales',
      'Contenidos pedagógicos sobre gestión de deudas y fondos de emergencia',
      'Recomendaciones contextuales generadas automáticamente por Nova',
      'Glosario financiero interactivo de términos bancarios'
    ],
    stack: ['Next.js 16', 'Tailwind Typography', 'Content Dictionary', 'TypeScript'],
    architectureOrEntities: ['education_content', 'learning_modules', 'financial_tips'],
    keyFeatures: [
      { title: 'Educación sin Jerga', desc: 'Explicaciones claras y prácticas aplicables a la vida diaria.' },
      { title: 'Consejos Contextuales', desc: 'Tips sugeridos según los gastos reales del usuario.' }
    ],
    accent: '#FE385B'
  },
  {
    id: 'technology',
    slug: 'technology',
    ecosystemSlug: 'arca',
    discipline: 'Technology & Cloud',
    title: 'Infraestructura Full-Stack Next.js 16 + Gemini + Supabase',
    subtitle: 'Ingeniería moderna con Server Components, IA generativa y base de datos relacional.',
    overview: 'La arquitectura tecnológica completa de Arca construida con Next.js 16 (App Router), React 19, integración de Google Gemini 3.5 Flash, Supabase PostgreSQL y despliegue perimetral en Vercel.',
    theChallenge: 'Orquestar un agente de IA con streaming en tiempo real, Function Calling y consultas a base de datos con latencia mínima en dispositivos móviles.',
    theSolution: 'Utilizamos Server Actions para mutaciones de datos, Server Routes con streamText para la IA y políticas de caché perimetral.',
    deliverables: [
      'Arquitectura Next.js 16 App Router con React 19 y Server Actions',
      'Integración con SDK de Google Gemini y Vercel AI SDK',
      'Base de datos PostgreSQL en Supabase con índices optimizados',
      'Service Worker y manifest PWA para experiencia standalone'
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Google Gemini', 'Supabase', 'Tailwind CSS'],
    architectureOrEntities: ['fullstack_architecture', 'ai_sdk_integration', 'supabase_edge', 'pwa_sw'],
    keyFeatures: [
      { title: 'Streaming de IA sin Latencia', desc: 'Respuestas de Nova generadas en tiempo real mediante Server-Sent Events.' },
      { title: 'Zero Bloat Architecture', desc: 'Carga ultrarrápida sin dependencias pesadas innecesarias.' }
    ],
    accent: '#00F0FF'
  }
];
