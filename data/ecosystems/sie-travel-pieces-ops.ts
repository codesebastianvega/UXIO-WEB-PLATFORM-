import { EcosystemPieceDetail } from '@/types/ecosystem';

export const sieTravelPiecesOps: EcosystemPieceDetail[] = [
  {
    id: 'traveler-app',
    slug: 'traveler-app',
    ecosystemSlug: 'sie-travel',
    discipline: 'Traveler Experience',
    title: 'Portal Privado, Tickets QR & Historial My Trips',
    subtitle: 'El centro de control personal del viajero antes, durante y después del viaje.',
    overview: 'Área privada de usuario con autenticación Supabase Auth donde cada viajero accede a sus reservas activas, descarga tickets con código QR para check-in en punto de encuentro y revisa itinerarios detallados.',
    theChallenge: 'Los viajeros perdían los PDFs de confirmación enviados por WhatsApp o no sabían a qué hora ni en qué punto exacto debían presentarse.',
    theSolution: 'Creamos un portal móvil optimizado con tickets digitales interactivos, generador de QR offline y acceso directo a contactos de emergencia y guías asignados.',
    deliverables: [
      'Portal de usuario autenticado con Supabase Auth (Email & Magic Link)',
      'Generador de Tickets Digitales con react-qr-code para check-in rápido',
      'Historial de viajes pasados y próximas salidas confirmadas (My Trips)',
      'Módulo de favoritos y lista de deseos para próximas aventuras'
    ],
    stack: ['Supabase Auth', 'react-qr-code', 'Tailwind CSS', 'Next.js 16'],
    architectureOrEntities: ['user_profiles', 'tickets_qr', 'user_favorites'],
    keyFeatures: [
      { title: 'Check-In con QR', desc: 'Validación en segundos por parte del guía en el punto de partida.' },
      { title: 'Acceso Offline de Tickets', desc: 'Tickets descargables en imagen/PDF para zonas sin señal.' }
    ],
    accent: '#00F0FF'
  },
  {
    id: 'admin',
    slug: 'admin',
    ecosystemSlug: 'sie-travel',
    discipline: 'Admin Back-Office',
    title: 'Panel de Control de Inventario, Salidas & Pasajeros',
    subtitle: 'El back-office unificado que sustituye hojas de cálculo dispersas.',
    overview: 'Dashboard administrativo para el equipo de SIE Travel que centraliza el control de cupos por salida, listados de pasajeros con datos médicos para aseguradoras y estado de reservas en tiempo real.',
    theChallenge: 'Coordinar salidas de fin de semana requería cruzar mensajes de WhatsApp con tablas de Excel, con alto riesgo de duplicar cupos o extraviar datos de seguros.',
    theSolution: 'Construimos una suite administrativa completa con tablas interactivas, filtros por fecha y exportación de manifiestos de viaje en 1 clic.',
    deliverables: [
      'Dashboard central con métricas de ocupación y calendario de salidas',
      'Gestión de cupos disponibles, bloqueados y confirmados por tour',
      'Generación automática de manifiesto de pasajeros para pólizas de seguro',
      'Roles y permisos diferenciados con Supabase Row-Level Security (RLS)'
    ],
    stack: ['Supabase RLS', 'Tailwind CSS', 'Recharts', 'Next.js Server Actions'],
    architectureOrEntities: ['admin_users', 'manifest_exports', 'capacity_tracker'],
    keyFeatures: [
      { title: 'Exportación de Manifiestos', desc: 'Descarga instantánea de listados en Excel/PDF para las aseguradoras.' },
      { title: 'Control de Cupos en Vivo', desc: 'Visualización clara de ocupación por salida en formato semáforo.' }
    ],
    accent: '#FF7F07'
  },
  {
    id: 'operations',
    slug: 'operations',
    ecosystemSlug: 'sie-travel',
    discipline: 'Operations',
    title: 'Gestión de Guías, Leads, Reseñas & Costos Operativos',
    subtitle: 'Software operacional diseñado para hacer rentable y sostenible cada salida.',
    overview: 'Módulo de operaciones que permite asignar guías certificados a cada viaje, dar seguimiento a prospectos comerciales (Leads CRM), moderar reseñas de viajeros y auditar costos reales vs presupuestados.',
    theChallenge: 'Calcular la rentabilidad real de cada viaje y coordinar a los guías de territorio sin una herramienta centralizada generaba pérdidas y demoras.',
    theSolution: 'Diseñamos un pipeline operativo que conecta la asignación de personal con el cálculo de punto de equilibrio y la retroalimentación de calidad de los usuarios.',
    deliverables: [
      'Directorio y asignación de guías locales con historial de salidas',
      'Pipeline de Leads CRM para solicitudes personalizadas y grupos',
      'Sistema de moderación y aprobación de reseñas de clientes',
      'Calculadora de costos operativos (transporte, alimentación, guianza)'
    ],
    stack: ['Supabase PostgreSQL', 'Next.js 16', 'Tailwind CSS', 'Zod'],
    architectureOrEntities: ['guides_directory', 'crm_leads', 'reviews_moderation', 'trip_costs'],
    keyFeatures: [
      { title: 'Control de Costos por Salida', desc: 'Auditoría precisa de márgenes de ganancia antes y después del viaje.' },
      { title: 'CRM Integrado', desc: 'Seguimiento automatizado a cotizaciones pendientes y empresas.' }
    ],
    accent: '#10B981'
  },
  {
    id: 'b2b',
    slug: 'b2b',
    ecosystemSlug: 'sie-travel',
    discipline: 'B2B & Enterprise',
    title: 'Cotizador Corporativo, Simulador & Exportación PDF',
    subtitle: 'Infraestructura comercial para agencias mayoristas y empresas.',
    overview: 'Herramienta de cotización inteligente para viajes corporativos, salidas de bienestar para empresas y alianzas con agencias de viajes internacionales.',
    theChallenge: 'Elaborar propuestas corporativas personalizadas tomaba entre 24 y 48 horas de trabajo manual entre llamadas y armado de PDFs.',
    theSolution: 'Implementamos un simulador de escenarios con recetas de costos automatizadas y generación instantánea de propuestas comerciales en PDF con diseño editorial premium.',
    deliverables: [
      'Simulador de cotizaciones con cálculo de margen según número de pasajeros',
      'Recetas de costos modulares por proveedor y servicio incluido',
      'Motor de generación de propuestas comerciales en PDF con jsPDF y html2canvas',
      'Portal de registro para agencias aliadas y operadores mayoristas'
    ],
    stack: ['jsPDF', 'html2canvas', 'TypeScript', 'Supabase Database'],
    architectureOrEntities: ['b2b_quotes', 'cost_recipes', 'agency_partners'],
    keyFeatures: [
      { title: 'Propuestas en 60 Segundos', desc: 'Generación de PDFs comerciales impecables listos para enviar a clientes.' },
      { title: 'Simulación de Margen', desc: 'Ajuste dinámico de rentabilidad según tamaño del grupo y servicios extra.' }
    ],
    accent: '#7928CA'
  },
  {
    id: 'impact',
    slug: 'impact',
    ecosystemSlug: 'sie-travel',
    discipline: 'Impact Engine',
    title: 'Telemetría de Impacto Ambiental, Árboles & Agua',
    subtitle: 'El propósito del turismo regenerativo integrado directamente en el software.',
    overview: 'Módulo de telemetría que cuantifica el impacto positivo de cada viaje: árboles sembrados, fuentes hídricas protegidas, residuos evitados y fondos destinados a comunidades locales.',
    theChallenge: 'Muchos proyectos turísticos afirman ser sostenibles pero no ofrecen métricas tangibles ni auditables a sus viajeros.',
    theSolution: 'Construimos un motor de cálculo de huella positiva que asigna indicadores de impacto por cada reserva y los muestra en la web pública y en el ticket del viajero.',
    deliverables: [
      'Motor de cálculo de impacto por pasajero y por destino',
      'Dashboard público y privado de árboles sembrados y huella mitigada',
      'Certificados digitales de impacto regenerativo por viajero',
      'Reportes de impacto para empresas aliadas y fondos ESG'
    ],
    stack: ['Recharts', 'Supabase PostgreSQL', 'Tailwind CSS', 'Next.js 16'],
    architectureOrEntities: ['impact_telemetry', 'tree_plantations', 'community_funds'],
    keyFeatures: [
      { title: 'Métricas Tangibles', desc: 'Cada viajero conoce exactamente cuántos árboles y qué impacto generó su reserva.' },
      { title: 'Reportes ESG para Empresas', desc: 'Certificados listos para auditorías de sostenibilidad corporativa.' }
    ],
    accent: '#10B981'
  },
  {
    id: 'content',
    slug: 'content',
    ecosystemSlug: 'sie-travel',
    discipline: 'Content & SEO',
    title: 'Blog Editorial, Campañas & SEO de Destinos',
    subtitle: 'Narrativa de territorio y adquisición de tráfico orgánico de alta intención.',
    overview: 'Capa de contenidos editoriales, crónicas de expediciones, guías de viaje por departamentos de Colombia y optimización para búsquedas de turismo de naturaleza y aventura.',
    theChallenge: 'Captar tráfico calificado de viajeros en Google sin depender exclusivamente de pauta publicitaria paga.',
    theSolution: 'Estructuramos un blog con arquitectura SEO semántica, metadatos enriquecidos (Schema.org) y artículos conectados directamente con los tours relacionados.',
    deliverables: [
      'Blog editorial con crónicas de campo y fotografías de alta resolución',
      'Optimización de metadatos Schema.org para eventos turísticos en Google',
      'Landings de campañas de temporada (Semana Santa, Puentes, Fin de Año)',
      'Call-to-actions contextuales dentro de los artículos hacia las salidas activas'
    ],
    stack: ['Next.js 16 MDX/Content', 'Schema.org JSON-LD', 'Tailwind Typography'],
    architectureOrEntities: ['blog_posts', 'seo_metadata', 'campaign_landings'],
    keyFeatures: [
      { title: 'SEO Semántico de Destinos', desc: 'Posicionamiento en búsquedas de senderismo, páramos y cascadas en Colombia.' },
      { title: 'Conversión Contextual', desc: 'Enlaces directos al booking engine desde las guías de viaje.' }
    ],
    accent: '#FE385B'
  },
  {
    id: 'analytics',
    slug: 'analytics',
    ecosystemSlug: 'sie-travel',
    discipline: 'Analytics',
    title: 'Telemetría de Producto con Metricool & Vercel Insights',
    subtitle: 'Toma de decisiones basada en comportamiento real de usuarios.',
    overview: 'Configuración de observabilidad y telemetría de eventos para monitorear embudos de conversión en el checkout, rendimiento de carga con Core Web Vitals y comportamiento de navegación.',
    theChallenge: 'Identificar en qué paso del checkout abandonaban los usuarios y cómo afectaba la velocidad de carga a la conversión.',
    theSolution: 'Integramos Vercel Speed Insights y telemetría de eventos con Metricool sin comprometer la privacidad ni la velocidad de la aplicación.',
    deliverables: [
      'Tracking de eventos en pasos del wizard de reserva y clics en Bold',
      'Monitoreo continuo de Core Web Vitals (LCP, FID, CLS) con Vercel',
      'Métricas de adquisición y engagement en redes con Metricool',
      'Paneles de control de producto para optimización continua de CRO'
    ],
    stack: ['Vercel Speed Insights', 'Metricool API', 'Google Analytics 4', 'Next.js Telemetry'],
    architectureOrEntities: ['analytics_events', 'conversion_funnel', 'performance_metrics'],
    keyFeatures: [
      { title: 'Monitoreo en Tiempo Real', desc: 'Detección inmediata de caídas en pasarela de pagos o lentitud en APIs.' },
      { title: 'Zero Bloat Scripting', desc: 'Telemetría ligera que no penaliza el score de rendimiento 100/100.' }
    ],
    accent: '#00F0FF'
  },
  {
    id: 'technology',
    slug: 'technology',
    ecosystemSlug: 'sie-travel',
    discipline: 'Technology & Resilience',
    title: 'Arquitectura Híbrida Resiliente Next.js 16 + Supabase',
    subtitle: 'Ingeniería robusta diseñada para mantenerse activa ante contingencias.',
    overview: 'La infraestructura de software completa construida con Server Components, base de datos PostgreSQL en Supabase, mecanismos de fallback estático y despliegue perimetral en Vercel.',
    theChallenge: 'Evitar que una falla en la base de datos o corte de red deje inoperativo el sitio público de SIE Travel.',
    theSolution: 'Diseñamos una arquitectura híbrida con Live Data + Static Catalog + Static Marketing Mode + Asset Fallback, garantizando máxima resiliencia en producción.',
    deliverables: [
      'Arquitectura Next.js 16 App Router con Server Actions y Route Handlers',
      'Base de datos PostgreSQL con RLS, triggers y funciones de integridad',
      'Mecanismos de fallback estático para disponibilidad ininterrumpida',
      'Auditoría y resolución de deuda técnica aprendida en producción'
    ],
    stack: ['Next.js 16', 'React 19', 'Supabase PostgreSQL', 'Tailwind CSS', 'Vercel Edge'],
    architectureOrEntities: ['hybrid_resilience', 'database_triggers', 'edge_handlers'],
    keyFeatures: [
      { title: 'Disponibilidad Continua', desc: 'Superficie comercial operativa incluso durante mantenimientos de base de datos.' },
      { title: 'Serverless Edge Latency', desc: 'Respuestas de API y páginas cacheadas en nodos perimetrales globales.' }
    ],
    accent: '#7928CA'
  }
];
