import { EcosystemSchema } from '@/types/ecosystem';
import {
  arcaLayers,
  arcaProductTiers,
  arcaUserJourney,
  arcaDetailedRoles,
} from './arca-layers';

export const arcaEcosystem: EcosystemSchema = {
  id: 'arca',
  slug: 'arca',
  accent: '#FF7F07',
  mainConcept: 'Sistema financiero personal y de proyectos aumentado por IA.',
  pitch: 'Arca es una plataforma financiera personal con un copiloto operativo de IA, y Nova es el agente financiero integrado que interpreta lenguaje natural, consulta datos y propone o ejecuta acciones dentro del mismo sistema.',
  identity: {
    name: 'ARCA',
    type: 'Plataforma Financiera Personal & Copiloto Nova AI',
    industry: ['Finanzas Personales', 'Copiloto de IA / Agente', 'PWA Mobile-First', 'SaaS Multi-Workspace'],
    year: 2025,
    status: 'En Producción Activa',
    uxioRole: [
      'Estrategia Digital & Producto',
      'Arquitectura UX & Mobile PWA',
      'Sistema de Diseño (Temas Bronce & Neón)',
      'Ingeniería Full-Stack Next.js 16',
      'Agente Nova AI (+30 Tools de Negocio)',
      'Base de Datos Supabase & RLS',
      'Web Push & Service Worker',
      'Dashboard de Salud Financiera'
    ]
  },
  overview: {
    whatIsIt: 'Plataforma integral de gestión financiera personal y de proyectos con dashboard de salud financiera en tiempo real y Nova, un agente de IA integrado con más de 30 herramientas operacionales.',
    challenge: 'Las apps tradicionales se limitan a registrar gastos pasados de forma manual y agotadora, sin ofrecer claridad sobre cuánto dinero libre se tiene realmente después de pagar deudas y compromisos futuros.',
    roleDescription: 'UXIO conceptualizó y construyó Arca como un sistema financiero integral: diseñó la experiencia mobile-first, construyó el backend en Supabase y programó el agente Nova con Google Gemini y Function Calling.'
  },
  transformation: {
    from: 'App Tradicional de Registro de Gastos',
    to: 'Sistema Financiero Aumentado por IA',
    stages: ['Registro Manual', 'Dashboard de Salud Financiera', 'Copiloto Nova AI', 'Plataforma Multi-Workspace'],
    tagline: 'De anotar gastos a entender el dinero real, compromisos, flujo de caja y decisiones financieras.'
  },
  framework: {
    think: 'Entender a fondo la fricción psicológica del control financiero y la necesidad de conocer el disponible real.',
    design: 'Diseñar una experiencia mobile-first con temas personalizables (Bronce, Neón, Océano) y aprobación visual.',
    build: 'Construir el agente Nova con Google Gemini 3.5 Flash, esquemas Zod estrictos y Next.js 16 Server Actions.',
    operate: 'Resolver el flujo de cuentas, tarjetas, deudas, amortizaciones, presupuestos y metas de vida.',
    scale: 'Estructurar el aislamiento multi-workspace, membresías y suscripciones SaaS para proyectos y empresas.'
  },
  conceptualArchitecture: {
    title: 'ARQUITECTURA CONCEPTUAL',
    subtitle: 'Plataforma financiera personal + Agente Nova AI integrado.',
    branchLeft: {
      title: 'USER & PERSONAL FINANCE',
      badge: 'MOBILE PWA',
      accent: '#FF7F07',
      subBranches: [
        {
          title: 'Dashboard & Dinero',
          items: ['Disponible Real en Vivo', 'Gestor de Cuentas', 'Tarjetas & Cupo', 'Historial de Movimientos', 'Registro Rápido']
        },
        {
          title: 'Agenda & Planificación',
          items: ['Calendario de Vencimientos', 'Plan del Mes %', 'Metas de Vida', 'Cadenas de Ahorro', 'Escuela Nova']
        }
      ]
    },
    branchRight: {
      title: 'INTELLIGENCE & OPERATIONS',
      badge: 'NOVA AI AGENT',
      accent: '#00F0FF',
      subBranches: [
        {
          title: 'Nova AI Engine',
          items: ['Gemini 3.5 Flash', '+30 Financial Tools', 'Function Calling', 'Aprobación Visual UI', 'Context Snapshot']
        },
        {
          title: 'Engine Financiero & SaaS',
          items: ['Simulador Bola de Nieve', 'What-If Compras a Cuotas', 'Business Units', 'Multi-Workspace RLS', 'Web Push Protocol']
        }
      ]
    },
    foundation: {
      title: 'ARCA SYSTEM FOUNDATION',
      stackSummary: 'Next.js 16 (App Router) + React 19 + Google Gemini 3.5 (AI SDK) + Supabase PostgreSQL (RLS) + PWA Web Push'
    }
  },
  layers: arcaLayers,
  productTiers: arcaProductTiers,
  userJourney: arcaUserJourney,
  uxioRolesDetailed: arcaDetailedRoles,
  resilience: {
    title: 'Seguridad Financiera, RLS & Guardrails de IA',
    summary: 'Arquitectura diseñada para proteger la información financiera mediante aislamiento estricto por workspace, validación previa de saldos y confirmación humana obligatoria antes de ejecutar acciones de escritura.',
    pillars: [
      { name: 'Row-Level Security (RLS)', desc: 'Políticas PostgreSQL que restringen el acceso a datos por usuario y workspace' },
      { name: 'Human-in-the-Loop Approval', desc: 'Tarjetas de aprobación visual requeridas antes de crear o mutar registros financieros' },
      { name: 'Token Usage Telemetry', desc: 'Monitoreo de consumo y cuotas de IA registrado en la tabla ai_usage_events' },
      { name: 'Offline PWA Caching', desc: 'Acceso seguro al resumen financiero incluso sin conexión mediante Service Worker' }
    ],
    learnings: 'El desarrollo de un agente con capacidad de mutar datos financieros demostró la necesidad de guardrails estrictos y validaciones de estado previo en cada tool.'
  },
  flow: [
    '01 Autenticación (Supabase Auth & Workspace)',
    '02 Resumen del Día (Disponible Real vs Comprometido)',
    '03 Registro Rápido (Cuentas, Tarjetas & Movimientos)',
    '04 Agenda & Deudas (Vencimientos & Amortización)',
    '05 Consulta a Nova (Lenguaje Natural & Function Calling)',
    '06 Aprobación UI (Confirmación Visual de Acciones)',
    '07 Plan del Mes (Presupuesto & Ahorro Guiado)',
    '08 Metas de Vida (Ahorro Colaborativo & Natilleras)'
  ],
  capabilities: [
    'Agente Nova con +30 Tools Operacionales y Function Calling',
    'Dashboard de Salud Financiera y Cálculo de Disponible Real',
    'Simulador de Deudas (Bola de Nieve, Avalancha y What-If)',
    'Módulo de Metas de Vida y Cadenas de Ahorro (Natilleras)',
    'PWA Instalable con Service Worker y Web Push Notifications',
    'Aislamiento Multi-Workspace y Membresías de Usuario'
  ],
  technology: {
    stack: [
      'Next.js 16 (App Router)',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Google Gemini 3.5 Flash',
      'Vercel AI SDK (@ai-sdk/google)',
      'Supabase PostgreSQL',
      'Supabase Auth',
      'Service Worker PWA'
    ],
    supporting: [
      'Zod Schema Validation',
      'Web Push Protocol (VAPID)',
      'Recharts Analytics',
      'Radix UI Primitives',
      'Inter Typography',
      'Lucide React Icons'
    ],
    architectureSummary: 'Next.js 16 App Router + React 19 + Google Gemini 3.5 Flash via AI SDK + Supabase PostgreSQL with RLS + PWA Service Worker.',
    designTokens: [
      'Temas: Bronce, Neón, Océano, Bosque, Reserva, Claro',
      'Lienzo Oscuro Profundo (#0D0D0E)',
      'Acento Bronce / Naranja (#FF7F07)',
      'Tipografía Inter'
    ],
    backendEntities: [
      'profiles', 'workspaces', 'workspace_members', 'subscription_plans',
      'accounts', 'business_units', 'income_sources', 'expense_categories',
      'transactions', 'debts', 'credit_cards', 'savings_goals', 'savings_chains',
      'monthly_projections', 'scheduled_events', 'ai_usage_events', 'push_subscriptions'
    ]
  },
  works: [
    { id: 'strategy', discipline: 'Strategy', title: 'Evolución: De App de Gastos a Copiloto Financiero', href: '/works/ecosystems/arca/strategy' },
    { id: 'brand', discipline: 'Brand / Digital Identity', title: 'Identidad Visual Arca & Nova (Temas Bronce, Neón, Océano)', href: '/works/ecosystems/arca/brand' },
    { id: 'product', discipline: 'Product Architecture', title: 'Arquitectura de Entidades Financieras & Workspaces', href: '/works/ecosystems/arca/product' },
    { id: 'ux-ui', discipline: 'UX/UI & Research', title: 'Journey Mobile-First PWA & Decision Dashboard', href: '/works/ecosystems/arca/ux-ui' },
    { id: 'app-core', discipline: 'Web Platform / PWA', title: 'Plataforma PWA (Cuentas, Tarjetas & Movimientos)', href: '/works/ecosystems/arca/app-core' },
    { id: 'nova-ai', discipline: 'AI Architecture & Agent', title: 'Nova AI: Copiloto con +30 Tools & Function Calling', href: '/works/ecosystems/arca/nova-ai' },
    { id: 'decision-engine', discipline: 'Data & Telemetry', title: 'Dashboard de Salud Financiera & Cash Flow en Vivo', href: '/works/ecosystems/arca/decision-engine' },
    { id: 'obligations', discipline: 'Financial Engineering', title: 'Motor de Deudas, Créditos & Simulador de Amortización', href: '/works/ecosystems/arca/obligations' },
    { id: 'budgets-goals', discipline: 'Product & Planning', title: 'Planificación Mensual, Metas de Vida & Cadenas de Ahorro', href: '/works/ecosystems/arca/budgets-goals' },
    { id: 'business-units', discipline: 'SaaS & Architecture', title: 'Módulo Multinegocio, Proyectos & Planes SaaS', href: '/works/ecosystems/arca/business-units' },
    { id: 'pwa-push', discipline: 'Mobile Engineering', title: 'PWA Offline, Service Worker & Notificaciones Web Push', href: '/works/ecosystems/arca/pwa-push' },
    { id: 'security-rls', discipline: 'Security & Backend', title: 'Arquitectura Supabase Postgres, RLS & Safe Approval UI', href: '/works/ecosystems/arca/security-rls' },
    { id: 'education', discipline: 'Content & Education', title: 'Escuela Nova: Pedagogía & Contenido de Salud Financiera', href: '/works/ecosystems/arca/education' },
    { id: 'technology', discipline: 'Technology & Cloud', title: 'Infraestructura Full-Stack Next.js 16 + Gemini + Supabase', href: '/works/ecosystems/arca/technology' }
  ],
  links: {
    liveUrl: 'https://arca.finance',
    githubUrl: 'https://github.com/uxio-studio/arca-fintech-engine',
    githubAccess: 'Client Architecture',
    ctaText: 'Construir una Plataforma como Arca'
  },
  futureRoadmap: [
    'Integración de Reconocimiento OCR de Recibos y Facturas',
    'Comandos y Consultas por Voz Multimodal en Navegador',
    'Conexión Asíncrona con WhatsApp Business API para Registro Rápido',
    'Integración con Protocolos de Open Banking & Billeteras Digitales',
    'Motor de Inteligencia de Negocios (BI) para Reportes Corporativos'
  ],
  relations: {
    labs: ['arca', 'experiments'],
    relatedEcosystems: ['sie-travel', 'aluna']
  }
};
