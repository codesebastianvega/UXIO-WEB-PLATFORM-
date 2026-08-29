import { EcosystemPieceDetail } from '@/types/ecosystem';

export const alunaPiecesOps: EcosystemPieceDetail[] = [
  {
    id: 'order-engine',
    slug: 'order-engine',
    ecosystemSlug: 'aluna',
    discipline: 'Backend & Transactions',
    title: 'Motor Transaccional de Órdenes & Fusión de Mesas',
    subtitle: 'El núcleo de persistencia para órdenes, ítems y transacciones.',
    overview: 'Arquitectura de base de datos relacional y APIs para el ciclo de vida completo de cada comanda: creación, cálculo de impuestos, adición de modificadores, cancelación con motivo y liquidación.',
    theChallenge: 'Evitar inconsistencias en los totales de las órdenes cuando múltiples comensales agregan platos al mismo tiempo desde sus teléfonos.',
    theSolution: 'Implementamos transacciones atómicas en PostgreSQL sobre Supabase con control de concurrencia y registro de auditoría.',
    deliverables: [
      'Modelo de órdenes y líneas de pedido (orders, order_items)',
      'Máquina de estados de orden: waiting_payment, new, preparing, ready, on_table, delivered, cancelled',
      'Lógica de cancelación con motivo y registro de usuario responsable',
      'Historial completo de órdenes con filtros por fecha, mesa y sede'
    ],
    stack: ['Supabase PostgreSQL', 'SQL Schema', 'React Hooks', 'Zod Validation'],
    architectureOrEntities: ['orders', 'order_items', 'order_cancellations', 'table_sessions'],
    keyFeatures: [
      { title: 'Concurrencia Segura', desc: 'Múltiples comensales pueden pedir simultáneamente sin colisiones.' },
      { title: 'Trazabilidad de Cambios', desc: 'Registro exacto de quién agregó o canceló cada ítem.' }
    ],
    accent: '#00F0FF'
  },
  {
    id: 'pos-payments',
    slug: 'pos-payments',
    ecosystemSlug: 'aluna',
    discipline: 'POS & Billing',
    title: 'Terminal de Pagos, Propinas & División de Cuentas',
    subtitle: 'Cobro ágil con soporte para múltiples métodos y recibos térmicos.',
    overview: 'Módulo de caja (PaymentPOSModal) que permite a los cajeros y meseros cerrar cuentas con múltiples formas de pago (efectivo, datáfono, transferencia), calcular propinas sugeridas y emitir recibos.',
    theChallenge: 'La división de cuentas en mesas grandes genera cuellos de botella al momento de cobrar.',
    theSolution: 'Diseñamos una interfaz de pagos parciales (`order_payments`) que permite registrar múltiples cobros sobre una misma orden hasta saldar el monto total.',
    deliverables: [
      'Modal de cobro POS con selector de métodos de pago configurables',
      'Soporte para pagos divididos y registro de propinas (service_fee)',
      'Cálculo de cambio en efectivo y control de vueltas',
      'Integración con impresora térmica (thermalPrint.js) para tickets de pago'
    ],
    stack: ['React', 'Tailwind CSS', 'ESC/POS Thermal Driver', 'Supabase Database'],
    architectureOrEntities: ['order_payments', 'payment_methods', 'location_payment_methods'],
    keyFeatures: [
      { title: 'Cuentas Divididas', desc: 'Cobro de partes de la cuenta con diferentes métodos de pago.' },
      { title: 'Propinas Transparentes', desc: 'Cálculo opcional y transparente de propina sugerida.' }
    ],
    accent: '#10B981'
  },
  {
    id: 'catalog-modifiers',
    slug: 'catalog-modifiers',
    ecosystemSlug: 'aluna',
    discipline: 'Catalog & Product Engine',
    title: 'Catálogo de Productos, Modificadores & Upsell',
    subtitle: 'Estructura flexible para menús dinámicos con variantes y empaques.',
    overview: 'Motor de catálogo gastronómico que permite definir platos, categorías, grupos de modificadores (ej. tamaño, salsa, tipo de cocción), costos de empaque y sugerencias de venta cruzada.',
    theChallenge: 'Los restaurantes cambian de menú con frecuencia y necesitan ocultar productos agotados en segundos sin alterar el historial de ventas.',
    theSolution: 'Construimos un panel de catálogo en tiempo real con interruptores de disponibilidad inmediata (`is_active`, `stock_status`) y grupos de modificadores reutilizables.',
    deliverables: [
      'Gestor de productos, categorías e imágenes de alta resolución',
      'Grupos de modificadores y opciones con precios diferenciales',
      'Cargos por empaque (packaging_fee) y bandera de producto para cocina (requires_kitchen)',
      'Lógica de upsell para recomendar bebidas o postres'
    ],
    stack: ['React Context', 'Tailwind CSS', 'Supabase Storage', 'PostgreSQL'],
    architectureOrEntities: ['products', 'categories', 'modifier_groups', 'modifier_options'],
    keyFeatures: [
      { title: 'Modificadores Dinámicos', desc: 'Personalización de platos con extras y exclusión de ingredientes.' },
      { title: 'Apagado de Ítems en 1 Clic', desc: 'Ocultar platos sin stock instantáneamente en el menú QR.' }
    ],
    accent: '#FF7F07'
  },
  {
    id: 'inventory-recipes',
    slug: 'inventory-recipes',
    ecosystemSlug: 'aluna',
    discipline: 'Inventory & Costing',
    title: 'Insumos, Proveedores, Recetas & Stock por Sede',
    subtitle: 'Base para el control de materias primas y costeo gastronómico.',
    overview: 'Módulo de inventario estructurado que conecta platos con recetas base y recetas con ingredientes, permitiendo registrar proveedores, costos de compra y niveles de stock por sede física.',
    theChallenge: 'La falta de costeo en recetas provoca márgenes negativos en platos con ingredientes de alto costo.',
    theSolution: 'Diseñamos un esquema relacional con recetas base (`recipes`), ingredientes y existencias por ubicación (`location_inventory`) con umbrales de alerta mínima.',
    deliverables: [
      'Catálogo de ingredientes categorizados y unidades de medida',
      'Fichas técnicas de recetas vinculadas a productos de carta',
      'Registro de proveedores y precios de compra unitarios',
      'Control de inventario por ubicación física (location_inventory)'
    ],
    stack: ['PostgreSQL Schema', 'React Data Tables', 'Costing Math Engine'],
    architectureOrEntities: ['ingredients', 'recipes', 'recipe_ingredients', 'location_inventory', 'providers'],
    keyFeatures: [
      { title: 'Fichas de Recetas', desc: 'Composición exacta de cada plato para estandarizar sabor y costo.' },
      { title: 'Alertas de Stock', desc: 'Avisos antes de que un ingrediente crítico se agote en la sede.' }
    ],
    accent: '#FE385B'
  },
  {
    id: 'multi-location-rls',
    slug: 'multi-location-rls',
    ecosystemSlug: 'aluna',
    discipline: 'Security & Multi-Tenant',
    title: 'Arquitectura Multi-Sede & Seguridad RLS',
    subtitle: 'Aislamiento robusto entre marcas y locales en PostgreSQL.',
    overview: 'Políticas exhaustivas de Row-Level Security (RLS) en Supabase para garantizar que cada franquiciado, gerente o personal de sede acceda exclusivamente a la información de su respectiva ubicación.',
    theChallenge: 'Administrar cadenas gastronómicas en una sola base de datos sin riesgo de fuga de datos entre marcas o locales.',
    theSolution: 'Implementamos funciones de seguridad PostgreSQL (`is_brand_manager`, políticas RLS por location_id) aplicadas a nivel de motor de base de datos.',
    deliverables: [
      'Migración integral de seguridad RLS (20240507_comprehensive_rls_security.sql)',
      'Jerarquía de roles: superadmin, owner, manager, waiter, kitchen, cashier',
      'Aislamiento de órdenes, mesas, stock y ventas por brand_id y location_id',
      'Validaciones de sesión seguras en frontend y edge functions'
    ],
    stack: ['PostgreSQL RLS Policies', 'Supabase Auth', 'SQL Functions', 'Security Audits'],
    architectureOrEntities: ['rls_policies', 'security_functions', 'staff_memberships', 'profiles'],
    keyFeatures: [
      { title: 'Seguridad en Motor DB', desc: 'Aislamiento garantizado en la capa de datos, inmune a errores de UI.' },
      { title: 'Roles Granulares', desc: 'Cada colaborador ve solo lo necesario para su función en el turno.' }
    ],
    accent: '#00F0FF'
  },
  {
    id: 'analytics',
    slug: 'analytics',
    ecosystemSlug: 'aluna',
    discipline: 'Data & Telemetry',
    title: 'Telemetría Operativa & Métricas de Servicio',
    subtitle: 'Visibilidad en tiempo real del ritmo del restaurante y las ventas.',
    overview: 'Panel analítico (AdminAnalytics) que registra eventos operativos clave para evaluar tiempos de respuesta de cocina, rotación de mesas, platos más rentables y horas pico de demanda.',
    theChallenge: 'Los dueños de restaurantes suelen enterarse de las fallas de servicio al final del mes cuando ya no pueden corregirlas.',
    theSolution: 'Creamos un registro de telemetría de eventos (`analytics_events`) que mide el tiempo transcurrido entre la toma de la comanda, su preparación y el cobro final.',
    deliverables: [
      'Tablero de control de ventas diarias, ticket promedio y métodos de pago',
      'Métricas de tiempos de preparación en cocina (KDS Lead Time)',
      'Reporte de rotación de mesas y eficiencia por área de salón',
      'Estructura de registro de eventos operativos (analytics_events)'
    ],
    stack: ['React Charts', 'SQL Aggregations', 'Tailwind CSS', 'Supabase Database'],
    architectureOrEntities: ['analytics_events', 'sales_aggregations', 'kds_metrics'],
    keyFeatures: [
      { title: 'Tiempos de Cocina Reales', desc: 'Monitoreo de minutos promedio por plato preparado.' },
      { title: 'Ticket Promedio en Vivo', desc: 'Evolución de ventas y consumo por mesa en tiempo real.' }
    ],
    accent: '#10B981'
  },
  {
    id: 'technology',
    slug: 'technology',
    ecosystemSlug: 'aluna',
    discipline: 'Technology & Cloud',
    title: 'Stack React + Vite + Supabase Realtime + Thermal Print',
    subtitle: 'Ingeniería frontend ultraligera con suscripciones reactivas a base de datos.',
    overview: 'La arquitectura tecnológica completa de Aluna construida con React, Vite, Tailwind CSS, Supabase (PostgreSQL, Auth, Realtime, Storage, Edge Functions) y controladores de impresión térmica ESC/POS.',
    theChallenge: 'Garantizar que la interfaz responda al tacto instantáneamente en tablets económicas de restaurante sin latencia de red.',
    theSolution: 'Construimos una SPA/PWA en React + Vite con Service Worker para assets estáticos y canales Supabase Realtime para sincronización de datos con latencia de milisegundos.',
    deliverables: [
      'Frontend SPA en React 18 / Vite con Tailwind CSS y Context API',
      'Canales Supabase Realtime para sincronización instantánea de comandas',
      'Módulo de impresión térmica ESC/POS para tickets y comandas (thermalPrint.js)',
      'Service Worker y Web App Manifest para experiencia táctil en tablets'
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Supabase Realtime', 'PostgreSQL', 'ESC/POS Driver'],
    architectureOrEntities: ['spa_architecture', 'realtime_channels', 'thermal_driver', 'pwa_sw'],
    keyFeatures: [
      { title: 'Velocidad de Carga Instantánea', desc: 'Build optimizado con Vite para respuesta inmediata en salón.' },
      { title: 'Conexión Directa a Impresoras', desc: 'Envío de tickets térmicos sin drivers pesados.' }
    ],
    accent: '#00F0FF'
  }
];
