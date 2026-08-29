import { EcosystemPieceDetail } from '@/types/ecosystem';

export const alunaPiecesCore: EcosystemPieceDetail[] = [
  {
    id: 'strategy',
    slug: 'strategy',
    ecosystemSlug: 'aluna',
    discipline: 'Strategy',
    title: 'Evolución: De Simple Menú QR a Hospitality OS',
    subtitle: 'Digitalizar el alma de la hospitalidad unificando salón, cocina y caja.',
    overview: 'Estrategia y visión de producto para Aluna: trascender los menús QR pasivos en PDF y los sistemas POS aislados para construir un verdadero sistema operativo para la hospitalidad que integra al comensal, al mesero, a la cocina y a la administración en una sola infraestructura.',
    theChallenge: 'La mayoría de restaurantes sufren de silos operativos: comandas en papel perdidas, errores entre meseros y cocina, y desconexión entre el menú digital y el inventario real.',
    theSolution: 'Diseñamos una arquitectura integral donde cada pedido desde QR o terminal de mesero fluye reactivamente a la pantalla de cocina y a la liquidación de caja en tiempo real.',
    deliverables: [
      'Tesis estratégica: "Hospitality Operating System & Experience-Based Commerce"',
      'Jerarquía de negocio: Holding ➔ Marca (Brand) ➔ Sede Física (Location)',
      'Matriz de capacidades operativas y roadmap de fases de producto',
      'Definición de roles operativos (Owner, Manager, Waiter, Kitchen, Cashier)'
    ],
    stack: ['Hospitality Strategy Framework', 'Multi-Brand Model', 'Capability Matrix'],
    architectureOrEntities: ['brands', 'locations', 'staff_roles', 'profiles'],
    keyFeatures: [
      { title: 'Operación Unificada', desc: 'Salón, cocina y caja conectados en la misma base de datos en tiempo real.' },
      { title: 'Multi-Sede Escalable', desc: 'Arquitectura preparada para gestionar múltiples marcas y locales.' }
    ],
    accent: '#00F0FF'
  },
  {
    id: 'brand',
    slug: 'brand',
    ecosystemSlug: 'aluna',
    discipline: 'Brand / Digital Identity',
    title: 'Identidad Visual Aluna (Hospitality Premium & UI Esmeralda)',
    subtitle: 'Estética contemporánea diseñada para legibilidad en entornos gastronómicos.',
    overview: 'Sistema visual para Aluna enfocado en la calidez de la hospitalidad y la máxima legibilidad tanto en pantallas táctiles de salón con iluminación tenue como en el calor de la cocina.',
    theChallenge: 'Crear una identidad visual que se sienta artesanal y elegante para el comensal en su móvil, pero ultraclara y de alto contraste para el personal operativo.',
    theSolution: 'Desarrollamos una paleta con acento esmeralda/cyan técnico sobre lienzo oscuro profundo, tipografía con jerarquía editorial y tokens de diseño reutilizables.',
    deliverables: [
      'Tokens de diseño visual y componentes centralizados (ui.jsx, uiTokens.js)',
      'Diseño de estados de mesa con código de color (libre, ocupada, sucia, por cobrar)',
      'Iconografía de hospitalidad, categorías gastronómicas y estados de cocina',
      'PWA Manifest, iconos adaptativos y pantalla de splash para tablets'
    ],
    stack: ['Tailwind CSS', 'CSS Variables', 'PWA Manifest', 'Figma Living Tokens'],
    architectureOrEntities: ['ui_tokens', 'table_status_colors', 'pwa_manifest'],
    keyFeatures: [
      { title: 'Alto Contraste Operativo', desc: 'Botones y tarjetas diseñados para visualización instantánea a distancia.' },
      { title: 'Estética Premium', desc: 'Menú digital que eleva la percepción de marca del establecimiento.' }
    ],
    accent: '#10B981'
  },
  {
    id: 'product',
    slug: 'product',
    ecosystemSlug: 'aluna',
    discipline: 'Product Architecture',
    title: 'Jerarquía Multi-Brand, Multi-Location & Entidades',
    subtitle: 'Modelo relacional en PostgreSQL para soportar cadenas y franquicias.',
    overview: 'Estructuración de la base de datos relacional sobre Supabase con soporte nativo para múltiples marcas y sedes, vinculando productos, ingredientes, mesas, pedidos y usuarios bajo políticas estrictas de seguridad.',
    theChallenge: 'Garantizar que los precios, el stock y los pedidos de una sede nunca interfieran con las operaciones de otra sede del mismo holding.',
    theSolution: 'Implementamos llaves foráneas compuestas (brand_id + location_id) en todas las tablas transaccionales, reforzadas con políticas de Row-Level Security (RLS).',
    deliverables: [
      'Esquema relacional en PostgreSQL con más de 20 tablas operativas',
      'Entidades de gestión: brands, locations, restaurant_tables, orders, order_items, staff',
      'Políticas RLS para garantizar aislamiento absoluto entre sedes y marcas',
      'Funciones y edge functions para validación de permisos por rol'
    ],
    stack: ['Supabase PostgreSQL', 'Row-Level Security (RLS)', 'SQL DDL', 'Edge Functions'],
    architectureOrEntities: ['brands', 'locations', 'restaurant_tables', 'orders', 'order_items'],
    keyFeatures: [
      { title: 'Aislamiento Multi-Brand', desc: 'Cada sede opera de forma independiente pero administrable centralizadamente.' },
      { title: 'Roles Estrictos', desc: 'Permisos diferenciados para meseros, cocineros, cajeros y administradores.' }
    ],
    accent: '#00F0FF'
  },
  {
    id: 'ux-ui',
    slug: 'ux-ui',
    ecosystemSlug: 'aluna',
    discipline: 'UX/UI & Research',
    title: 'Flujo Operativo de Mesas & Journey de Cliente QR',
    subtitle: 'Interacción táctil a 120 FPS optimizada para la velocidad del servicio.',
    overview: 'Diseño de la experiencia de usuario para comensales en móviles y para el personal de servicio en tablets, priorizando la reducción de toques para enviar comandas y cobrar.',
    theChallenge: 'En horas pico de restaurante, un segundo de retraso en la interfaz genera colas y frustración en el comensal y el equipo.',
    theSolution: 'Diseñamos interfaces táctiles de alta velocidad con botones de gran tamaño, transiciones optimizadas y flujo de pedido en 3 toques.',
    deliverables: [
      'User journey dual: Comensal en móvil QR vs Personal operativo en tablet',
      'Mapa interactivo de mesas con visualización de tiempo de ocupación',
      'Panel de meseros con selector rápido de platos y notas especiales',
      'Modal de cobro con cálculo automático de cambio y propinas'
    ],
    stack: ['Figma UX Architecture', 'React + Vite', 'Tailwind CSS', 'PWA Touch'],
    architectureOrEntities: ['waiter_desk_ui', 'qr_customer_flow', 'pos_checkout_modal'],
    keyFeatures: [
      { title: 'Servicio en 3 Toques', desc: 'Toma de comanda y envío a cocina en segundos.' },
      { title: 'Visibilidad de Salón', desc: 'Mapa de mesas con estado en tiempo real para optimizar rotación.' }
    ],
    accent: '#FE385B'
  },
  {
    id: 'qr-menu',
    slug: 'qr-menu',
    ecosystemSlug: 'aluna',
    discipline: 'Customer Experience / Web',
    title: 'Menú Digital Interactivo & Carrito a Mesa',
    subtitle: 'El comensal pide directamente desde su celular sin descargar aplicaciones.',
    overview: 'Aplicación web progresiva accesible mediante código QR en cada mesa, con fotos en alta definición, filtros por alérgenos, selección de modificadores y envío de orden directo a cocina.',
    theChallenge: 'Los códigos QR tradicionales que solo abren un PDF estático son lentos, difíciles de leer en pantallas pequeñas y no permiten pedir.',
    theSolution: 'Construimos una web interactiva ultraligera que reconoce la mesa automáticamente (`restaurant_tables.qr_code_url`) y permite armar carritos individuales o grupales.',
    deliverables: [
      'Menú digital interactivo con categorías y búsqueda rápida',
      'Selector de modificadores de plato (término, salsas, acompañamientos)',
      'Carrito flotante con resumen de cuenta en vivo',
      'Generador de posters y códigos QR por mesa imprimibles'
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'PWA Service Worker', 'Supabase Client'],
    architectureOrEntities: ['qr_menu_app', 'cart_modal', 'restaurant_tables_qr'],
    keyFeatures: [
      { title: 'Cero Instalación', desc: 'Acceso inmediato escaneando la cámara del teléfono.' },
      { title: 'Personalización de Platos', desc: 'Modificadores y notas de cocina antes de ordenar.' }
    ],
    accent: '#10B981'
  },
  {
    id: 'waiter-pos',
    slug: 'waiter-pos',
    ecosystemSlug: 'aluna',
    discipline: 'Operations / Tablet App',
    title: 'Terminal de Meseros & Asignación de Mesas',
    subtitle: 'El centro de control del salón para meseros y capitanes.',
    overview: 'Interfaz para meseros que permite gestionar el salón en tiempo real: ver mesas libres u ocupadas, abrir cuentas, unir órdenes de comensales que pidieron por QR y agregar platos adicionales.',
    theChallenge: 'Sincronizar los pedidos que hace el comensal desde su teléfono con las adiciones manuales que hace el mesero en la mesa.',
    theSolution: 'Implementamos una lógica de sesión de mesa (`aa_current_table_id`) que fusiona automáticamente ítems nuevos con la orden existente de la mesa sin duplicar cuentas.',
    deliverables: [
      'Módulo AdminWaiter para gestión de mesas y áreas de salón',
      'Toma de pedidos rápida con teclado táctil y modificadores',
      'Fusión de órdenes por mesa y reasignación de meseros',
      'Control de estados de mesa: libre, ocupada, sucia, por cobrar'
    ],
    stack: ['React + Vite', 'Supabase Realtime', 'Tailwind CSS', 'Context API'],
    architectureOrEntities: ['admin_waiter', 'table_session', 'order_merge_logic'],
    keyFeatures: [
      { title: 'Fusión de Cuentas', desc: 'Integración transparente de pedidos de comensales y meseros.' },
      { title: 'Rotación Eficiente', desc: 'Identificación visual de mesas listas para limpieza o facturación.' }
    ],
    accent: '#FF7F07'
  },
  {
    id: 'kds-kitchen',
    slug: 'kds-kitchen',
    ecosystemSlug: 'aluna',
    discipline: 'Kitchen Display System (KDS)',
    title: 'Kitchen Display System en Realtime con Alertas',
    subtitle: 'Comandera digital para la línea de cocina con tiempos y avisos sonoros.',
    overview: 'Pantalla de producción para cocineros y baristas que recibe las órdenes instantáneamente vía Supabase Realtime, organizadas por prioridad, tiempo de espera y estado de preparación.',
    theChallenge: 'El ruido de la cocina y el volumen de comandas impresas provocan olvidos y retrasos en los platos principales.',
    theSolution: 'Creamos un KDS digital con tarjetas visuales de alto contraste, cronómetros de tiempo de preparación y alertas sonoras ante pedidos nuevos o demorados.',
    deliverables: [
      'Pantalla AdminKitchen con tarjetas de comandas en vivo',
      'Canal Supabase Realtime (postgres_changes) para inserción instantánea',
      'Estados de producción: new ➔ preparing ➔ ready ➔ on_table ➔ delivered',
      'Alertas sonoras configurables e integración con impresora térmica'
    ],
    stack: ['Supabase Realtime Channels', 'Web Audio API', 'React + Vite', 'Thermal Print'],
    architectureOrEntities: ['admin_kitchen', 'kds_status_machine', 'realtime_channel'],
    keyFeatures: [
      { title: 'Realtime sin Recargas', desc: 'Las comandas aparecen en la pantalla de cocina en milisegundos.' },
      { title: 'Tiempos Bajo Control', desc: 'Alertas de color cuando un plato supera el tiempo estándar de preparación.' }
    ],
    accent: '#FE385B'
  }
];
