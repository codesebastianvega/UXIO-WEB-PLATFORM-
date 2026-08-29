import { Project, Locale } from '@/types';

export interface ProjectDetail extends Project {
  client: string;
  timeline: string;
  role: string;
  liveUrl?: string;
  lead: string;
  challenge: string;
  solution: string;
  disciplinesUsed: string[];
  deliverables: string[];
  stack: string[];
  stats: Array<{ label: string; value: string }>;
  categories: string[];
}

export const getProjectsData = (lang: Locale = 'es'): ProjectDetail[] => {
  const isEs = lang === 'es';

  return [
    {
      id: 'sie-travel',
      title: 'SIE Travel',
      tagline: isEs
        ? 'Ecosistema de Turismo Regenerativo & Motor de Reservas'
        : 'Regenerative Tourism Ecosystem & Booking Engine',
      category: 'Websites',
      categories: ['websites', 'ux-ui', 'branding', 'technology'],
      client: 'SIE Travel Group',
      year: '2025',
      timeline: isEs ? '12 Semanas' : '12 Weeks',
      role: isEs ? 'Digital Product Partner Integral' : 'Full Digital Product Partner',
      liveUrl: 'https://sietravel.com',
      customPath: '/works/ecosystems/sie-travel',
      metric: 'Next.js 16 + Supabase',
      lead: isEs
        ? 'Plataforma integral de turismo regenerativo con motor de reservas en tiempo real, pasarela Bold, tickets QR y back-office de operaciones.'
        : 'Comprehensive regenerative tourism platform with real-time booking engine, Bold payments, QR tickets, and operations back-office.',
      challenge: isEs
        ? 'La comercialización dependía de procesos manuales por WhatsApp y hojas de cálculo dispersas, limitando el crecimiento.'
        : 'Sales relied on manual WhatsApp chats and disconnected spreadsheets, creating an operational bottleneck.',
      solution: isEs
        ? 'Construimos un ecosistema digital completo con Next.js 16, Supabase PostgreSQL, pasarela Bold y herramientas operativas para inventario y guías.'
        : 'We built a full digital ecosystem using Next.js 16, Supabase PostgreSQL, Bold payments, and operational tooling for inventory and guides.',
      disciplinesUsed: isEs ? ['Tecnología Web', 'Experiencia (UX/UI)', 'Estrategia', 'Identidad'] : ['Web Technology', 'UX/UI', 'Strategy', 'Brand'],
      deliverables: isEs
        ? ['Plataforma Web de Experiencias', 'Motor de Reservas Multi-Step', 'Pasarela Bold & Webhooks', 'Back-Office Operativo & B2B']
        : ['Web Experience Platform', 'Multi-Step Booking Engine', 'Bold Payments & Webhooks', 'Operations Back-Office & B2B'],
      stack: ['Next.js 16', 'React 19', 'Supabase', 'Bold Payments', 'Tailwind CSS'],
      stats: isEs ? [
        { label: 'Arquitectura', value: 'Server Actions' },
        { label: 'Motor de Pagos', value: 'Bold API' },
        { label: 'Reserva', value: 'Multi-Step' },
        { label: 'Seguridad', value: 'Supabase RLS' }
      ] : [
        { label: 'Architecture', value: 'Server Actions' },
        { label: 'Payments', value: 'Bold API' },
        { label: 'Booking', value: 'Multi-Step' },
        { label: 'Security', value: 'Supabase RLS' }
      ],
      description: isEs
        ? 'Plataforma integral para conectar viajeros con experiencias de naturaleza y bienestar en Colombia, con booking instantáneo y back-office de operaciones.'
        : 'Comprehensive platform connecting travelers with nature experiences in Colombia, featuring instant booking and back-office operations.',
      accentColor: '#00F0FF',
      accentName: 'Cyan Technical',
      tags: [
        { label: 'Websites', isAccent: true, dotColor: '#00F0FF' },
        { label: 'Booking' },
        { label: 'Next.js 16' }
      ],
      canvasType: 'preview'
    },
    {
      id: 'by-saralu',
      title: 'By Saralú',
      tagline: isEs
        ? 'Headless Luxury E-Commerce & Lookbook Cinematográfico'
        : 'Headless Luxury E-Commerce & Cinematic Lookbook',
      category: 'Websites',
      categories: ['websites', 'branding', 'content', 'ux-ui'],
      client: 'By Saralú Atelier',
      year: '2025',
      timeline: isEs ? '8 Semanas' : '8 Weeks',
      role: isEs ? 'Dirección de Arte, E-Commerce & Branding' : 'Art Direction, E-Commerce & Branding',
      liveUrl: 'https://bysaralu.com',
      customPath: '/works/ecosystems/by-saralu',
      metric: 'Headless Storefront',
      lead: isEs
        ? 'Storefront de alta costura con micro-interacciones a 120 FPS, lookbook cinematográfico 4K y checkout internacional multi-divisa.'
        : 'High-fashion storefront featuring 120 FPS micro-interactions, 4K cinematic lookbook, and multi-currency international checkout.',
      challenge: isEs
        ? 'Las plantillas estándar de e-commerce diluían la exclusividad de las prendas de alta costura de la diseñadora.'
        : 'Off-the-shelf e-commerce templates compromised the exclusivity and high-end feel of the atelier.',
      solution: isEs
        ? 'Diseñamos un storefront headless con tipografía de contraste editorial, navegación fluida y renderizado de video 4K sin pérdida de rendimiento.'
        : 'We crafted a headless storefront with editorial contrast typography, fluid navigation, and zero-latency 4K video rendering.',
      disciplinesUsed: isEs ? ['E-Commerce Headless', 'Identidad & Marca', 'Contenido 4K'] : ['Headless E-Commerce', 'Brand & Identity', '4K Content'],
      deliverables: isEs
        ? ['Headless Storefront Next.js', 'Lookbook Editorial Interactivo', 'Design System de Lujo', 'Checkout Multi-Divisa']
        : ['Next.js Headless Storefront', 'Interactive Editorial Lookbook', 'Luxury Design System', 'Multi-Currency Checkout'],
      stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Stripe Payments', 'Vercel Edge'],
      stats: isEs ? [
        { label: 'Storefront', value: 'Headless' },
        { label: 'Fotografía', value: '4K Lookbook' },
        { label: 'Rendimiento', value: '120 FPS' },
        { label: 'Divisas', value: 'USD / EUR / COP' }
      ] : [
        { label: 'Storefront', value: 'Headless' },
        { label: 'Lookbook', value: '4K Quality' },
        { label: 'Performance', value: '120 FPS' },
        { label: 'Currencies', value: 'USD / EUR / COP' }
      ],
      description: isEs
        ? 'Experiencia de compra de lujo digital para colecciones de autor, con pasarela internacional y diseño tipográfico de alta gama.'
        : 'Digital luxury shopping experience for haute couture collections with international checkout and high-end typography.',
      accentColor: '#FE385B',
      accentName: 'Luxury Rose',
      tags: [
        { label: 'Websites', isAccent: true, dotColor: '#FE385B' },
        { label: 'Luxury' },
        { label: 'Headless' }
      ],
      canvasType: 'preview'
    },
    {
      id: 'alto-andino',
      title: 'Alto Andino',
      tagline: isEs
        ? 'DTC Specialty Coffee & Trazabilidad de Origen Botánico'
        : 'DTC Specialty Coffee & Botanical Traceability',
      category: 'Websites',
      categories: ['websites', 'branding', 'ux-ui'],
      client: 'Alto Andino Botanical Coffee',
      year: '2025',
      timeline: isEs ? '6 Semanas' : '6 Weeks',
      role: isEs ? 'E-Commerce DTC, Trazabilidad & Identidad' : 'DTC E-Commerce, Traceability & Identity',
      liveUrl: 'https://altoandino.coffee',
      customPath: '/works/ecosystems/alto-andino',
      metric: 'DTC Subscription Engine',
      lead: isEs
        ? 'Plataforma de suscripción y venta directa de café de especialidad con mapas interactivos de micro-lotes y perfiles de catación.'
        : 'Direct-to-consumer subscription coffee platform with interactive micro-lot origin maps and cupping notes.',
      challenge: isEs
        ? 'Comunicar la pureza botánica y el origen de altura de cada finca de café sin abrumar al comprador casual.'
        : 'Communicating the botanical purity and single-origin elevation of each farm without overwhelming the casual buyer.',
      solution: isEs
        ? 'Creamos un selector visual de notas sensoriales, suscripción recurrente flexible y visor de trazabilidad por QR en cada empaque.'
        : 'We engineered a sensory note selector, flexible recurring subscriptions, and packaging QR traceability viewers.',
      disciplinesUsed: isEs ? ['Tecnología Web', 'Branding', 'Experiencia (UX/UI)'] : ['Web Tech', 'Brand', 'UX/UI'],
      deliverables: isEs
        ? ['Tienda DTC con Suscripciones', 'Módulo de Trazabilidad de Fincas', 'Guía de Catación Interactiva', 'Packaging QR Sync']
        : ['DTC Subscription Store', 'Origin Traceability Module', 'Interactive Cupping Guide', 'Packaging QR Sync'],
      stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Stripe Subscriptions'],
      stats: isEs ? [
        { label: 'Modelo', value: 'DTC Subscriptions' },
        { label: 'Trazabilidad', value: 'Origen QR' },
        { label: 'Notas', value: 'Catación SCA' },
        { label: 'Checkout', value: 'Instantáneo' }
      ] : [
        { label: 'Model', value: 'DTC Subscriptions' },
        { label: 'Traceability', value: 'QR Origin' },
        { label: 'Notes', value: 'SCA Cupping' },
        { label: 'Checkout', value: 'Frictionless' }
      ],
      description: isEs
        ? 'Plataforma de venta directa de café de especialidad con suscripciones flexibles y fichas de cata interactivas.'
        : 'Direct-to-consumer specialty coffee platform with flexible subscriptions and interactive cupping sheets.',
      accentColor: '#FF7F07',
      accentName: 'Coffee Warmth',
      tags: [
        { label: 'Websites', isAccent: true, dotColor: '#FF7F07' },
        { label: 'DTC' },
        { label: 'Subscriptions' }
      ],
      canvasType: 'preview'
    },
    {
      id: 'aluna',
      title: 'Aluna',
      tagline: isEs
        ? 'Hospitality OS & Ecosistema de Operación Gastronómica'
        : 'Hospitality OS & Gastronomic Operations Ecosystem',
      category: 'Apps',
      categories: ['apps', 'ux-ui', 'technology', 'websites'],
      client: 'Aluna Hospitality Group',
      year: '2024',
      timeline: isEs ? '12 Semanas' : '12 Weeks',
      role: isEs ? 'Estrategia, Arquitectura de Producto, UX/UI & Realtime' : 'Strategy, Product Architecture, UX/UI & Realtime',
      liveUrl: 'https://alunapos.com',
      customPath: '/works/ecosystems/aluna',
      metric: 'Realtime KDS + Multi-Sede',
      lead: isEs
        ? 'Sistema operativo para la hospitalidad que unifica pedidos por QR, control de mesas para meseros, pantalla de cocina (KDS) en tiempo real, inventario y cobro POS.'
        : 'Hospitality operating system unifying QR ordering, waiter floor management, realtime kitchen display (KDS), inventory, and POS billing.',
      challenge: isEs
        ? 'Los restaurantes operan con comandas en papel propensas a errores, menús QR estáticos y falta de sincronización en tiempo real con cocina.'
        : 'Restaurants suffer from paper tickets, static QR menus, and lack of realtime sync with kitchen line.',
      solution: isEs
        ? 'Construimos una plataforma en React + Vite + Supabase Realtime con KDS de cocina, terminal de meseros, menú QR a mesa e impresión térmica.'
        : 'We engineered a React + Vite + Supabase Realtime platform with kitchen KDS, waiter desk, table QR menu, and ESC/POS thermal printing.',
      disciplinesUsed: isEs ? ['Estrategia Digital', 'Arquitectura de Producto', 'Experiencia UX/UI', 'Tecnología Realtime'] : ['Digital Strategy', 'Product Architecture', 'UX/UI', 'Realtime Tech'],
      deliverables: isEs
        ? ['Menú Digital QR & Carrito', 'Terminal de Meseros (AdminWaiter)', 'Kitchen Display System (KDS)', 'Aislamiento Multi-Brand RLS']
        : ['QR Digital Menu & Cart', 'Waiter Floor Desk', 'Realtime Kitchen KDS', 'Multi-Brand RLS Isolation'],
      stack: ['React', 'Vite', 'Supabase Realtime', 'PostgreSQL RLS', 'Tailwind CSS'],
      stats: isEs ? [
        { label: 'Cocina KDS', value: 'Realtime' },
        { label: 'Salón', value: 'Mapa Táctil' },
        { label: 'Comensal', value: 'Menú QR' },
        { label: 'Seguridad', value: 'Multi-Sede RLS' }
      ] : [
        { label: 'Kitchen KDS', value: 'Realtime' },
        { label: 'Floor', value: 'Touch Map' },
        { label: 'Customer', value: 'QR Menu' },
        { label: 'Security', value: 'Multi-Brand RLS' }
      ],
      description: isEs
        ? 'Infraestructura digital integral para operar un negocio gastronómico: menú QR, mesas, cocina KDS en vivo, pagos POS e inventario.'
        : 'Comprehensive digital infrastructure for gastronomic operations: QR menu, floor tables, live KDS kitchen, POS payments, and inventory.',
      accentColor: '#10B981',
      accentName: 'Emerald Hospitality',
      tags: [
        { label: 'Apps', isAccent: true, dotColor: '#10B981' },
        { label: 'Hospitality OS' },
        { label: 'Realtime KDS' }
      ],
      canvasType: 'preview'
    },
    {
      id: 'arca',
      title: 'Arca',
      tagline: isEs
        ? 'Plataforma Financiera Personal & Copiloto Nova AI'
        : 'Personal Financial Platform & Nova AI Copilot',
      category: 'Apps',
      categories: ['apps', 'ux-ui', 'technology', 'websites'],
      client: 'Arca Finance Group',
      year: '2025',
      timeline: isEs ? '10 Semanas' : '10 Weeks',
      role: isEs ? 'Estrategia, Producto, UX/UI & Arquitectura de IA' : 'Strategy, Product, UX/UI & AI Architecture',
      liveUrl: 'https://arca.finance',
      customPath: '/works/ecosystems/arca',
      metric: 'Gemini 3.5 + Nova AI',
      lead: isEs
        ? 'Plataforma de finanzas personales y proyectos con dashboard de disponible en tiempo real, gestión de deudas y el agente Nova con más de 30 tools de negocio.'
        : 'Personal and project finance platform with real-time disposable cash dashboard, debt management, and Nova agent with +30 business tools.',
      challenge: isEs
        ? 'Las apps tradicionales de gastos son pasivas y manuales, sin dar claridad sobre el dinero libre real tras compromisos futuros.'
        : 'Traditional expense apps are passive and tedious, failing to provide clarity on actual free cash after upcoming commitments.',
      solution: isEs
        ? 'Desarrollamos una PWA mobile-first en Next.js 16 + Supabase con el agente Nova integrado vía Google Gemini y aprobación humana obligatoria antes de escribir.'
        : 'We engineered a mobile-first Next.js 16 + Supabase PWA with integrated Nova agent via Google Gemini and human-in-the-loop approval before writes.',
      disciplinesUsed: isEs ? ['Arquitectura de IA', 'Tecnología Web', 'Experiencia (UX/UI)', 'Estrategia'] : ['AI Architecture', 'Web Tech', 'UX/UI', 'Strategy'],
      deliverables: isEs
        ? ['PWA Mobile-First Instalable', 'Agente Nova con +30 Tools', 'Dashboard de Salud Financiera', 'Aislamiento Multi-Workspace']
        : ['Installable Mobile-First PWA', 'Nova Agent with +30 Tools', 'Financial Health Dashboard', 'Multi-Workspace Isolation'],
      stack: ['Next.js 16', 'Google Gemini', 'Supabase', 'TypeScript', 'Tailwind CSS'],
      stats: isEs ? [
        { label: 'Copiloto IA', value: 'Nova Agent' },
        { label: 'Tools Activas', value: '+30 Tools' },
        { label: 'Aprobación', value: 'Human-in-Loop' },
        { label: 'Plataforma', value: 'PWA Mobile' }
      ] : [
        { label: 'AI Copilot', value: 'Nova Agent' },
        { label: 'Active Tools', value: '+30 Tools' },
        { label: 'Approval', value: 'Human-in-Loop' },
        { label: 'Platform', value: 'Mobile PWA' }
      ],
      description: isEs
        ? 'Sistema financiero personal y de proyectos con dashboard de salud financiera, control de deudas y agente Nova con más de 30 tools operacionales.'
        : 'Personal and project financial platform with health dashboard, debt management, and Nova agent with +30 operational tools.',
      accentColor: '#FF7F07',
      accentName: 'Bronze Amber',
      tags: [
        { label: 'Apps', isAccent: true, dotColor: '#FF7F07' },
        { label: 'Nova AI' },
        { label: 'PWA' }
      ],
      canvasType: 'preview'
    },
    {
      id: 'boku-bento',
      title: 'Boku Bento',
      tagline: isEs
        ? 'Experiencia Gastronómica Fusión y Kioscos Inteligentes'
        : 'Fusion Dining, Pokes & Autonomous Ordering Kiosks',
      category: 'Branding',
      categories: ['branding', 'ux-ui', 'content', 'apps'],
      client: 'Boku Foods Hospitality',
      year: '2025',
      timeline: isEs ? '10 Semanas' : '10 Weeks',
      role: isEs ? 'Hardware + UX, Branding & Kioskos POS' : 'Hardware + UX, Branding & POS Kiosks',
      liveUrl: 'https://bokubento.com',
      metric: 'POS Touchscreen Hub',
      lead: isEs
        ? 'Diseño integral de experiencia gastronómica, tótems de autoservicio táctiles y orquestación inteligente de pedidos.'
        : 'End-to-end dining experience, self-ordering touch kiosks, and smart kitchen line orchestration.',
      challenge: isEs
        ? 'Las horas pico generaban largas filas en caja y demoras en la personalización de pedidos.'
        : 'Rush hour queues created customer friction and kitchen delays.',
      solution: isEs
        ? 'Desarrollamos una interfaz táctil para tótems de 24 pulgadas con selección visual paso a paso y pagos contactless integrados.'
        : 'We engineered a 24-inch touch kiosk interface with step-by-step visual assembly and contactless payments.',
      disciplinesUsed: isEs ? ['Hardware + UX', 'Identidad & Marca', 'Tecnología Core'] : ['Hardware + UX', 'Brand & Identity', 'Core Technology'],
      deliverables: isEs
        ? ['Software de Kiosco Táctil Autónomo', 'Identidad de Marca & Packaging', 'Integración con Línea de Cocina (KDS)', 'Fotografía & Video']
        : ['Autonomous Touch Kiosk Software', 'Brand Identity & Packaging', 'Kitchen Display System (KDS)', 'Photo & Video Assets'],
      stack: ['React / Electron', 'TypeScript', 'Tailwind CSS', 'Node.js POS Bridge'],
      stats: isEs ? [
        { label: 'Kioscos', value: 'Touch 24"' },
        { label: 'Pagos', value: 'Contactless' },
        { label: 'Cocina', value: 'KDS Sync' },
        { label: 'Brand', value: 'Packaging 3D' }
      ] : [
        { label: 'Kiosks', value: '24" Touch' },
        { label: 'Payments', value: 'Contactless' },
        { label: 'Kitchen', value: 'KDS Sync' },
        { label: 'Brand', value: '3D Packaging' }
      ],
      description: isEs
        ? 'Diseño de experiencia para restaurante de comida fusión japonesa y hawaiana con tótems de autoservicio de alta velocidad.'
        : 'Experience design for Japanese-Hawaiian dining with high-speed self-ordering interactive kiosks.',
      accentColor: '#FFCC48',
      accentName: 'Solar Yellow',
      tags: [
        { label: 'Branding', isAccent: true, dotColor: '#FFCC48' },
        { label: 'UX/UI' },
        { label: 'POS Kiosks' }
      ],
      canvasType: 'preview'
    }
  ];
};

export const getProjects = (lang: Locale = 'es'): Project[] => getProjectsData(lang);

export const getProjectById = (id: string, lang: Locale = 'es'): ProjectDetail | undefined => {
  const projects = getProjectsData(lang);
  return projects.find(p => p.id === id);
};

export const PROJECTS = getProjects('es');

export { getStudioMetrics, type StudioMetric } from './metrics';

