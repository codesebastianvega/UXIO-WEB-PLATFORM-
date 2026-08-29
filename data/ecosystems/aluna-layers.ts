import { EcosystemLayer, EcosystemProductTier, EcosystemJourneyStep } from '@/types/ecosystem';

export const alunaLayers: EcosystemLayer[] = [
  {
    id: 'customer-experience',
    title: 'Customer QR & Digital Ordering',
    category: 'Experiencia del Comensal',
    description: 'Menú digital interactivo en mesa, selección de productos, modificadores y pedido directo.',
    items: [
      'Menú Digital Web & PWA por Código QR de Mesa',
      'Carrito de Compras Flotante & Selector de Variantes',
      'Módulo de Notas Especiales & Modificadores de Plato',
      'Confirmación de Pedido & Checkout a Mesa',
      'Sincronización en Tiempo Real con Cocina'
    ]
  },
  {
    id: 'waiter-operations',
    title: 'Waiter & Floor Management Desk',
    category: 'Operaciones de Salón & Meseros',
    description: 'Terminal táctil para asignación de mesas, toma de pedidos manuales y gestión de salón.',
    items: [
      'Mapa Interactivo de Salón & Estado de Mesas (Libre, Ocupada, Sucia, Por Cobrar)',
      'Toma Rápida de Comandas Táctil para Meseros',
      'Fusión y Adición de Ítems a Órdenes Activas por Mesa',
      'Asignación de Mesero por Turno y Área de Salón',
      'Envío Inmediato de Comandas a Cocina con 1 Toque'
    ]
  },
  {
    id: 'kitchen-kds',
    title: 'Kitchen Display System (KDS)',
    category: 'Centro de Producción & Cocina',
    description: 'Pantalla de producción para cocineros con ordenamiento por tiempos y alertas sonoras.',
    items: [
      'Cola de Comandas en Vivo con Estados (New ➔ Preparing ➔ Ready)',
      'Suscripciones Supabase Realtime para Nuevas Órdenes',
      'Alertas Sonoras y Notificaciones de Pedido Urgente',
      'Driver de Impresión Térmica para Comandas de Cocina',
      'Cronómetro de Tiempo de Preparación por Plato'
    ]
  },
  {
    id: 'pos-billing',
    title: 'POS & Multi-Tender Payment Desk',
    category: 'Caja & Facturación',
    description: 'Terminal de cobro con soporte para múltiples métodos de pago, propinas y división de cuentas.',
    items: [
      'Cobro Multiformato (Efectivo, Tarjeta, Transferencia)',
      'Cálculo de Propinas (Service Fee) y Descuentos',
      'División de Cuenta y Pagos Parciales (Order Payments)',
      'Impresión de Recibo Fiscal y Comprobante de Pago',
      'Cierre de Caja y Arqueo Diario por Turno'
    ]
  },
  {
    id: 'catalog-engine',
    title: 'Menu, Recipes & Catalog Engine',
    category: 'Catálogo & Recetas',
    description: 'Gestor centralizado de platos, grupos de modificadores, alérgenos y recetas base.',
    items: [
      'Gestión de Categorías, Platos y Disponibilidad de Stock',
      'Grupos de Modificadores (Término de Carne, Acompañamientos, Extras)',
      'Costos de Empaque y Lógica de Upsell Inteligente',
      'Vinculación de Platos con Fichas de Recetas e Ingredientes',
      'Control de Horarios de Disponibilidad por Categoría'
    ]
  },
  {
    id: 'inventory-costing',
    title: 'Inventory & Provider Network',
    category: 'Insumos & Proveedores',
    description: 'Control de ingredientes, proveedores y stock por ubicación física.',
    items: [
      'Catálogo de Ingredientes y Categorías de Insumos',
      'Gestión de Proveedores y Precios de Compra',
      'Inventario por Sede con Niveles Mínimos de Alerta',
      'Recetas Base e Ingredientes por Porción',
      'Monitoreo de Costos Unitarios de Producción'
    ]
  },
  {
    id: 'multi-brand-rls',
    title: 'Multi-Brand & Location Architecture',
    category: 'Arquitectura Multi-Sede',
    description: 'Aislamiento jerárquico por marca y sede con políticas de seguridad RLS en PostgreSQL.',
    items: [
      'Jerarquía Holding ➔ Brand ➔ Location',
      'Aislamiento de Datos por Brand ID y Location ID',
      'Control de Acceso Basado en Roles (Owner, Manager, Waiter, Kitchen, Cashier)',
      'Políticas de Row-Level Security (RLS) Exhaustivas',
      'Perfiles de Personal y Registro de Auditoría'
    ]
  },
  {
    id: 'analytics-telemetry',
    title: 'Operational Analytics & Insights',
    category: 'Datos & Telemetría',
    description: 'Tableros de rendimiento operativo, tiempos de servicio y ventas por sede.',
    items: [
      'Eventos de Telemetría Operativa (analytics_events)',
      'Métricas de Tiempo Promedio de Preparación y Entrega',
      'Ranking de Platos más Vendidos y Rentabilidad',
      'Volumen de Ventas por Franja Horaria y Sede',
      'Exportación de Reportes Operativos'
    ]
  }
];

export const alunaProductTiers: EcosystemProductTier[] = [
  {
    name: 'BOUTIQUE',
    badge: '1 Sede / Local Único',
    description: 'Ideal para cafeterías, bistrós y restaurantes independientes que buscan digitalizar su menú QR, mesas y cocina.',
    highlights: ['Menú QR y pedido a mesa', 'KDS de cocina en realtime', 'POS de cobro y comandas']
  },
  {
    name: 'MULTI-SEDE',
    badge: 'Cadenas & Franquicias',
    description: 'Diseñado para marcas gastronómicas con múltiples ubicaciones físicas que requieren menús, stock y reportes diferenciados.',
    highlights: ['Aislamiento multi-location', 'Inventario por sede', 'Roles de manager y personal']
  },
  {
    name: 'ENTERPRISE',
    badge: 'Holdings Gastronómicos',
    description: 'Arquitectura multi-brand completa para grupos con diversas marcas, bodegas centrales y telemetría consolidada.',
    highlights: ['Multi-brand holding', 'Integración térmica avanzada', 'Telemetría de rendimiento']
  }
];

export const alunaUserJourney: EcosystemJourneyStep[] = [
  { step: '01', label: 'ESCANEO QR', question: '¿Cómo accede el comensal al menú digital desde su mesa sin instalar apps?' },
  { step: '02', label: 'EXPLORACIÓN & SELECCIÓN', question: '¿Cómo visualiza los platos con fotos, alérgenos y opciones de personalización?' },
  { step: '03', label: 'ENVÍO DE ORDEN', question: '¿Cómo se confirma el pedido a la mesa y se vincula con la orden activa del salón?' },
  { step: '04', label: 'RECEPCIÓN EN COCINA', question: '¿Cómo llega la comanda al KDS de cocina en tiempo real con alertas sonoras?' },
  { step: '05', label: 'PREPARACIÓN & ESTADOS', question: '¿Cómo avanza el pedido de "New" a "Preparing" y "Ready" con control de tiempos?' },
  { step: '06', label: 'SERVICIO A MESA', question: '¿Cómo sabe el mesero que los platos están listos para ser llevados a la mesa?' },
  { step: '07', label: 'COBRO EN POS', question: '¿Cómo se procesa la cuenta con división de pagos, propinas y cierre de mesa?' },
  { step: '08', label: 'TELEMETRÍA & STOCK', question: '¿Cómo se actualizan los reportes de ventas y la telemetría operativa del día?' }
];

export const alunaDetailedRoles = [
  { area: 'Strategy', description: 'Concepción de Aluna como Hospitality OS integral, unificando comercio, salón, cocina e inventario.' },
  { area: 'Product', description: 'Definición de modelos de datos para órdenes, mesas, comandas KDS, recetas y jerarquía multi-brand.' },
  { area: 'UX', description: 'Diseño de flujos táctiles de alta velocidad para meseros, panel de cocina sin fricción y menú QR para comensales.' },
  { area: 'UI', description: 'Sistema de diseño visual editorial con tonos esmeralda y componentes táctiles de alta visibilidad en cocina.' },
  { area: 'Engineering', description: 'Desarrollo frontend en React + Vite + Tailwind CSS con arquitectura PWA y soporte offline.' },
  { area: 'Realtime Architecture', description: 'Sincronización instantánea de comandas vía canales Postgres de Supabase Realtime.' },
  { area: 'Backend & Security', description: 'Esquema relacional en PostgreSQL con políticas RLS exhaustivas para aislamiento por marca y sede.' },
  { area: 'Hardware Integration', description: 'Desarrollo del módulo de impresión térmica ESC/POS para recibos de caja y comandas de cocina.' }
];
