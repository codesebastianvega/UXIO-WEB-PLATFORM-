import { EcosystemPieceDetail } from '@/types/ecosystem';

export const sieTravelPiecesCore: EcosystemPieceDetail[] = [
  {
    id: 'strategy',
    slug: 'strategy',
    ecosystemSlug: 'sie-travel',
    discipline: 'Strategy',
    title: 'Evolución Digital & Modelo de Negocio',
    subtitle: 'De agencia tradicional con ventas por WhatsApp a plataforma turística escalable.',
    overview: 'Diagnóstico y reestructuración del modelo de negocio turístico de SIE Travel para eliminar el cuello de botella de la atención manual y habilitar canales de venta directa, aliados y escalabilidad comercial.',
    theChallenge: 'La comercialización dependía exclusivamente de canales manuales como WhatsApp e Instagram. Cada aumento de tráfico o temporada alta colapsaba al equipo en tareas operativas de cotización y conciliación.',
    theSolution: 'Diseñamos la estrategia de producto digital: automatizar el funnel de reserva y pago para que el equipo humano se concentre en curaduría de experiencias de alto valor y expansión de territorio.',
    deliverables: [
      'Diagnóstico de cuellos de botella operativos y mapa de fricción',
      'Definición de modelo de producto en 3 niveles (Core, Signature, Elite)',
      'Estrategia de monetización, comisiones y pasarelas de pago',
      'Roadmap de evolución tecnológica y fases de lanzamiento'
    ],
    stack: ['Notion Strategy Decks', 'Business Model Canvas', 'Miro Ecosystem Maps'],
    architectureOrEntities: ['canales_adquisicion', 'modelo_tarifas', 'estrategia_aliados'],
    keyFeatures: [
      { title: 'Automatización del Funnel', desc: 'Disponibilidad en tiempo real sin requerir chat previo.' },
      { title: 'Escalabilidad Comercial', desc: 'Capacidad de procesar cientos de reservas simultáneas.' }
    ],
    accent: '#FE385B'
  },
  {
    id: 'brand',
    slug: 'brand',
    ecosystemSlug: 'sie-travel',
    discipline: 'Brand / Digital Identity',
    title: 'Identidad Digital, Tokens & Sistema Visual',
    subtitle: 'Naturaleza + Aventura + Sofisticación + Tecnología.',
    overview: 'Sistema visual y lenguaje de marca digital diseñado para posicionar a SIE Travel como una travel platform contemporánea de clase mundial, lejos de la estética artesanal o genérica de agencias tradicionales.',
    theChallenge: 'Lograr el balance exacto entre el respeto por la biodiversidad colombiana y la sofisticación técnica de una plataforma fintech/travel moderna.',
    theSolution: 'Creamos una paleta de tokens con tonos Verdes profundos, Aqua, Sand, Gold y Violet, soportados por las tipografías contemporáneas Manrope y Urbanist con soporte completo para Dark y Light Mode.',
    deliverables: [
      'Design Tokens para Dark & Light Mode en Figma y código',
      'Jerarquía tipográfica editorial con Manrope y Urbanist',
      'Iconografía bespoke de aventura, clima y dificultad de senderos',
      'Microinteracciones calibradas a 120 FPS y guía de componentes'
    ],
    stack: ['Figma Design System', 'Tailwind CSS Tokens', 'CSS Variables', 'Radix UI'],
    architectureOrEntities: ['tokens_color', 'tipografia_manrope', 'componentes_ui'],
    keyFeatures: [
      { title: 'Dark & Light Mode Nativo', desc: 'Contraste impecable para uso diurno en campo o nocturno en casa.' },
      { title: 'Microinteracciones 120 FPS', desc: 'Feedback háptico y visual en cada interacción de usuario.' }
    ],
    accent: '#10B981'
  },
  {
    id: 'product',
    slug: 'product',
    ecosystemSlug: 'sie-travel',
    discipline: 'Product Architecture',
    title: 'Arquitectura de Entidades & Módulos Turísticos',
    subtitle: 'Convertir un tour en una entidad de software estructurada y programable.',
    overview: 'Estructuración de datos de la entidad Experience / Tour para modelar todos sus atributos (fechas, cupos, itinerarios, recetas de costos, guías, transporte, alojamiento e impacto) en una base de datos relacional.',
    theChallenge: 'Un viaje no es un producto estático de e-commerce; tiene itinerarios por días, cupos limitados por fecha, variaciones de transporte y múltiples proveedores asociados.',
    theSolution: 'Diseñamos un esquema relacional en Supabase PostgreSQL que conecta salidas, cupos, viajeros y costos de forma dinámica con restricciones de integridad.',
    deliverables: [
      'Modelo de datos relacional para Tours, Salidas y Reservas en PostgreSQL',
      'Definición de atributos paramétricos (dificultad, clima, inclusiones, add-ons)',
      'Esquema de recetas de costos por pasajero y punto de equilibrio',
      'Diccionario de entidades y tipos TypeScript autogenerados'
    ],
    stack: ['Supabase PostgreSQL', 'Prisma Schema', 'TypeScript Types', 'Row-Level Security (RLS)'],
    architectureOrEntities: ['tours', 'departures', 'bookings', 'addons', 'cost_recipes'],
    keyFeatures: [
      { title: 'Entidades Paramétricas', desc: 'Cada detalle del viaje es un dato estructurado consultable por API.' },
      { title: 'Integridad Transaccional', desc: 'Control de sobreventa mediante bloqueos y transacciones atómicas.' }
    ],
    accent: '#00F0FF'
  },
  {
    id: 'ux-ui',
    slug: 'ux-ui',
    ecosystemSlug: 'sie-travel',
    discipline: 'UX/UI & Research',
    title: 'User Journey (8 Etapas) & Experiencia de Viajero',
    subtitle: 'Diseñado para responder exactamente lo que el viajero necesita saber en cada paso.',
    overview: 'Investigación de usuarios y diseño del flujo de 8 etapas (Discover, Explore, Compare, Decide, Book, Pay, Travel, Return) eliminando la incertidumbre en la compra de viajes en Colombia.',
    theChallenge: 'El viajero de turismo de naturaleza suele dudar sobre qué llevar, su condición física requerida y la seguridad del destino antes de animarse a reservar.',
    theSolution: 'Diseñamos pantallas fluidas que responden proactivamente a "¿Qué incluye?", "¿Estoy preparado?" y "¿Qué sucede después?" con claridad absoluta.',
    deliverables: [
      'User Journey Map interactivo de 8 etapas',
      'Wireframes y prototipos en alta fidelidad de todo el flujo',
      'Diseño responsive mobile-first para reservas desde el celular',
      'Pruebas de usabilidad y eliminación de fricción cognitiva'
    ],
    stack: ['Figma Prototyping', 'UserTesting', 'Tailwind CSS', 'Framer Motion'],
    architectureOrEntities: ['flow_discover', 'flow_booking', 'flow_traveler_portal'],
    keyFeatures: [
      { title: 'Claridad en Requisitos', desc: 'Indicadores visuales de nivel de esfuerzo físico y equipo necesario.' },
      { title: 'Mobile-First Seamless', desc: 'Reserva completada en menos de 2 minutos desde cualquier smartphone.' }
    ],
    accent: '#FF7F07'
  },
  {
    id: 'website',
    slug: 'website',
    ecosystemSlug: 'sie-travel',
    discipline: 'Web Platform',
    title: 'Plataforma Pública (Explore, Calendar & Tour Details)',
    subtitle: 'El escaparate de alto rendimiento para el catálogo de turismo regenerativo.',
    overview: 'Construcción del frontend público en Next.js 16 con renderizado híbrido (SSR + ISR) para garantizar carga instantánea, SEO optimizado y exploración interactiva de destinos.',
    theChallenge: 'Mantener tiempos de carga inferiores a 1 segundo con galerías fotográficas 4K, mapas y filtros de disponibilidad interactivos.',
    theSolution: 'Implementamos Server Components, optimización perimetral de imágenes en CDN y estado reactivo para filtros de calendario y categorías.',
    deliverables: [
      'Home inmersivo con highlights y destinos destacados',
      'Módulo Explore con filtros multicriterio (región, dificultad, precio, fecha)',
      'Ficha de Tour interactiva con tabs de itinerario, inclusiones y reviews',
      'Calendario unificado de salidas con disponibilidad en tiempo real'
    ],
    stack: ['Next.js 16 (App Router)', 'React 19', 'Tailwind CSS', 'Vercel Edge Network'],
    architectureOrEntities: ['server_components', 'image_optimization', 'live_filters'],
    keyFeatures: [
      { title: 'Carga Sub-segundo', desc: 'Pre-renderizado de páginas con Incremental Static Regeneration (ISR).' },
      { title: 'Filtros Reactivos', desc: 'Búsqueda instantánea sin recargas de página.' }
    ],
    accent: '#7928CA'
  },
  {
    id: 'marketplace',
    slug: 'marketplace',
    ecosystemSlug: 'sie-travel',
    discipline: 'Marketplace',
    title: 'Catálogo Multi-Tier (Core, Signature, Elite)',
    subtitle: 'Segmentación estratégica del catálogo para monetizar diferentes perfiles de viajeros.',
    overview: 'Arquitectura de catálogo que soporta tres niveles de experiencias turísticas (Core modulares, Signature de autor y Elite privadas VIP) con reglas comerciales diferenciadas.',
    theChallenge: 'Diferenciar claramente las salidas grupales accesibles de los viajes privados de alta gama sin confundir al usuario ni diluir la marca.',
    theSolution: 'Diseñamos badges, layouts diferenciados y flujos de personalización exclusiva para las experiencias Signature y Elite.',
    deliverables: [
      'Segmentación de UI y filtros por tier de producto',
      'Configurador de experiencias privadas y fechas a la medida',
      'Módulo de comisiones y acuerdos de aliados para experiencias Core',
      'Soporte para futuras incorporaciones de operadores externos'
    ],
    stack: ['Next.js 16', 'Supabase RLS', 'Tailwind CSS', 'TypeScript'],
    architectureOrEntities: ['product_tiers', 'custom_quotations', 'operator_relations'],
    keyFeatures: [
      { title: 'Badges de Curaduría', desc: 'Identificación visual inmediata de experiencias de autor.' },
      { title: 'Reglas Comerciales Dinámicas', desc: 'Cálculo de depósitos y políticas de cancelación por tier.' }
    ],
    accent: '#FE385B'
  },
  {
    id: 'booking',
    slug: 'booking',
    ecosystemSlug: 'sie-travel',
    discipline: 'Booking Engine',
    title: 'Wizard de Reserva Multi-Step & Selección de Cupos',
    subtitle: 'El motor de conversión sin fricción para reservar en 3 simples pasos.',
    overview: 'Flujo transaccional guiado que permite al viajero seleccionar fecha de salida, número de pasajeros, add-ons opcionales, ingresar datos requeridos y calcular el total en tiempo real.',
    theChallenge: 'Capturar información obligatoria (cédulas, seguros, restricciones médicas) sin generar abandono en el checkout.',
    theSolution: 'Creamos un wizard paso a paso con validación en cliente y servidor, guardado de borrador y resumen flotante de cotización siempre visible.',
    deliverables: [
      'Wizard de reserva de 3 pasos con validación en tiempo real',
      'Selector de cupos dinámico conectado al inventario de salidas',
      'Módulo de add-ons (transporte extra, equipo de camping, comidas especiales)',
      'Cálculo algorítmico de cupones de descuento y promociones'
    ],
    stack: ['React 19 Server Actions', 'Zod Validation', 'Tailwind CSS', 'Radix UI'],
    architectureOrEntities: ['booking_session', 'cart_state', 'inventory_lock'],
    keyFeatures: [
      { title: 'Bloqueo Temporal de Cupos', desc: 'Reserva temporal de 15 minutos mientras el usuario paga.' },
      { title: 'Validación Zod Estricta', desc: 'Cero errores de datos de pasajeros para la emisión de pólizas de seguro.' }
    ],
    accent: '#00F0FF'
  },
  {
    id: 'payments',
    slug: 'payments',
    ecosystemSlug: 'sie-travel',
    discipline: 'Payments & Fintech',
    title: 'Integración Pasarela Bold & Webhooks de Confirmación',
    subtitle: 'Cobros seguros con tarjetas, PSE y botón de pago con conciliación automática.',
    overview: 'Infraestructura de pagos conectada con la pasarela colombiana Bold mediante API y Webhooks criptográficamente verificados, confirmando reservas al instante.',
    theChallenge: 'Evitar reservas duplicadas o pagos huérfanos por fallas de conexión o cierre de ventana del navegador durante la pasarela bancaria.',
    theSolution: 'Implementamos Webhooks idempotentes con reintentos automáticos que actualizan la base de datos de Supabase y emiten los tickets digitales de inmediato.',
    deliverables: [
      'Integración con API de Bold Payments para tarjetas, PSE y Nequi',
      'Manejador de Webhooks seguro con firma HMAC y lógica idempotente',
      'Generación automática de comprobantes y confirmación por email',
      'Panel de conciliación financiera de transacciones para administración'
    ],
    stack: ['Bold Payments API', 'Next.js Route Handlers', 'HMAC Signatures', 'Supabase Database'],
    architectureOrEntities: ['transactions_log', 'webhook_events', 'payment_status'],
    keyFeatures: [
      { title: 'Idempotencia Total', desc: 'Protección contra doble cobro o eventos repetidos de webhook.' },
      { title: 'Confirmación Instantánea', desc: 'El usuario recibe su ticket digital en pantalla en menos de 2 segundos.' }
    ],
    accent: '#10B981'
  }
];
