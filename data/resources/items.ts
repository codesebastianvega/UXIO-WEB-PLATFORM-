import { ResourceItem } from './types';

export const RESOURCES_DATA: ResourceItem[] = [
  // 1. COMPONENTES UI
  {
    id: 'spotlight-card',
    slug: 'spotlight-card',
    name: 'FluidSpotlightCard',
    description: 'Tarjeta interactiva con inercia física de fluido no newtoniano (amortiguación LERP) e iluminación perimetral en GPU.',
    type: 'component',
    category: 'cards',
    tier: 'pro',
    priceText: '$3 USD · $12K COP',
    badge: 'Pro Kit',
    tech: ['React', 'Next.js', 'Tailwind', '120 FPS'],
    version: 'v1.0.0',
    isOpenSource: false,
    accentColor: '#FE385B',
    previewType: 'spotlight-card',
    previewDetails: {
      tag: 'Pro · GPU Core',
      subtitle: 'Inercia Líquida'
    },
    installCommand: 'npx @uxio/pro add spotlight-card'
  },
  {
    id: 'hover-link-preview',
    slug: 'hover-link-preview',
    name: 'HoverLinkPreview',
    description: 'Mini-ventana flotante animada con física spring que previsualiza enlaces o miniaturas al pasar el cursor.',
    type: 'component',
    category: 'hover',
    tier: 'free',
    priceText: 'Free · MIT',
    badge: 'Open Source',
    tech: ['React', 'Next.js', 'Framer Motion'],
    version: 'v1.0.0',
    isOpenSource: true,
    accentColor: '#0284C7',
    previewType: 'hover-preview',
    previewDetails: {
      tag: '02 · Micro-UI',
      subtitle: 'Floating Popover'
    },
    installCommand: 'npx @uxio/ui add link-preview'
  },
  {
    id: 'magnetic-button',
    slug: 'magnetic-button',
    name: 'MagneticPillButton',
    description: 'Botón con atracción magnética al cursor y resplandor de acento dinámico para llamadas a la acción.',
    type: 'component',
    category: 'buttons',
    tier: 'free',
    priceText: 'Free · MIT',
    badge: 'Open Source',
    tech: ['React', 'Tailwind', 'GPU Magnet'],
    version: 'v1.0.0',
    isOpenSource: true,
    accentColor: '#10B981',
    previewType: 'magnetic-button',
    previewDetails: {
      tag: '03 · CTA Magnet',
      subtitle: 'Attraction Physics'
    },
    installCommand: 'npx @uxio/ui add magnetic-button'
  },
  {
    id: 'shimmer-text',
    slug: 'shimmer-text',
    name: 'ShimmerGradientText',
    description: 'Texto con máscara de gradiente animado y resplandor luminoso continuo para encabezados destacados.',
    type: 'component',
    category: 'text',
    tier: 'free',
    priceText: 'Free · MIT',
    badge: 'Open Source',
    tech: ['CSS Pure', 'Tailwind', 'Accessible'],
    version: 'v1.0.0',
    isOpenSource: true,
    accentColor: '#7928CA',
    previewType: 'shimmer-text',
    previewDetails: {
      tag: '04 · Typography',
      subtitle: 'Luminescent Text'
    },
    installCommand: 'npx @uxio/ui add shimmer-text'
  },
  {
    id: 'noise-mesh-bg',
    slug: 'noise-mesh-bg',
    name: 'NoiseMeshCanvas',
    description: 'Fondo canvas interactivo con ruido procedural, gradientes ambientales y respuesta suave al scroll.',
    type: 'component',
    category: 'backgrounds',
    tier: 'pro',
    priceText: '$3 USD · $12K COP',
    badge: 'Pro Canvas',
    tech: ['Canvas 2D', 'WebGL', 'React'],
    version: 'v1.0.0',
    isOpenSource: false,
    accentColor: '#FFCC48',
    previewType: 'noise-mesh',
    previewDetails: {
      tag: 'PRO · CANVAS FX',
      subtitle: 'Procedural Mesh'
    },
    installCommand: 'npx @uxio/pro add noise-mesh'
  },
  {
    id: 'craft-bento-grid',
    slug: 'craft-bento-grid',
    name: 'BentoCraftGrid',
    description: 'Sistema de grilla asimétrica modular con tarjetas expansibles y micro-animaciones coordinadas.',
    type: 'component',
    category: 'cards',
    tier: 'free',
    priceText: 'Free · MIT',
    badge: 'Open Source',
    tech: ['React', 'Next.js 15', 'Tailwind'],
    version: 'v2.1.0',
    isOpenSource: true,
    accentColor: '#FF7F07',
    previewType: 'bento-grid',
    previewDetails: {
      tag: '07 · Layout',
      subtitle: 'Asymmetric Bento'
    },
    installCommand: 'npx @uxio/ui add bento-grid'
  },
  {
    id: 'dock-navigator',
    slug: 'dock-navigator',
    name: 'ObsidianDockNav',
    description: 'Barra de navegación dock inspirada en macOS con efecto de magnificación de iconos al pasar el cursor.',
    type: 'component',
    category: 'navigation',
    tier: 'free',
    priceText: 'Free · MIT',
    badge: 'Open Source',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    version: 'v1.4.0',
    isOpenSource: true,
    accentColor: '#00F0FF',
    previewType: 'dock-nav',
    previewDetails: {
      tag: '06 · Navigation',
      subtitle: 'macOS Magnifying Dock'
    },
    installCommand: 'npx @uxio/ui add obsidian-dock'
  },
  {
    id: 'kinetic-slider',
    slug: 'kinetic-slider',
    name: 'KineticSnapSlider',
    description: 'Carrusel táctil con aceleración cinética, snapping inercial y zoom dinámico en imágenes activas.',
    type: 'component',
    category: 'carousels',
    tier: 'free',
    priceText: 'Free · MIT',
    badge: 'Open Source',
    tech: ['React', 'Pointer Events', 'Tailwind'],
    version: 'v2.0.0',
    isOpenSource: true,
    accentColor: '#FE385B',
    previewType: 'kinetic-slider',
    previewDetails: {
      tag: '08 · CAROUSEL',
      subtitle: 'Inertial Kinetic Slider'
    },
    installCommand: 'npx @uxio/ui add kinetic-slider'
  },

  // 2. LIBRERÍAS & HOOKS
  {
    id: 'motion-hooks-kit',
    slug: 'motion-hooks-kit',
    name: '@uxio/use-fluid-motion',
    description: 'Colección de hooks de React optimizados para físicas de resortes, seguimiento de cursor y LERP.',
    type: 'library',
    category: 'hover',
    tier: 'free',
    priceText: 'Free · MIT',
    badge: 'Library',
    tech: ['TypeScript', 'React Hooks', 'Zero-Dep'],
    version: 'v1.1.0',
    isOpenSource: true,
    accentColor: '#0284C7',
    previewType: 'interactive-code',
    previewDetails: {
      tag: 'Hook Kit',
      subtitle: 'Physics Primitives'
    },
    installCommand: 'npm i @uxio/use-fluid-motion'
  },
  {
    id: 'palette-contrast-kit',
    slug: 'palette-contrast-kit',
    name: '@uxio/color-space',
    description: 'Motor de cálculo de accesibilidad WCAG y generación de paletas armónicas HSL y OKLCH para UI.',
    type: 'library',
    category: 'all',
    tier: 'free',
    priceText: 'Free · MIT',
    badge: 'Library',
    tech: ['TypeScript', 'OKLCH', 'WCAG AAA'],
    version: 'v1.0.4',
    isOpenSource: true,
    accentColor: '#10B981',
    previewType: 'interactive-code',
    previewDetails: {
      tag: 'Color Engine',
      subtitle: 'OKLCH Palette'
    },
    installCommand: 'npm i @uxio/color-space'
  },

  // 3. HERRAMIENTAS CLI
  {
    id: 'design-tokens-cli',
    slug: 'design-tokens-cli',
    name: 'uxio-tokens-cli',
    description: 'Herramienta de terminal para sincronizar variables de Figma con tokens de Tailwind CSS en tiempo real.',
    type: 'tool',
    category: 'all',
    tier: 'free',
    priceText: 'Free · MIT',
    badge: 'CLI Tool',
    tech: ['Node.js', 'Figma API', 'CLI'],
    version: 'v0.9.4',
    isOpenSource: true,
    accentColor: '#FE385B',
    previewType: 'interactive-code',
    previewDetails: {
      tag: 'Terminal Tool',
      subtitle: 'Figma to Tailwind'
    },
    installCommand: 'npm i -g uxio-tokens-cli'
  },
  {
    id: 'linter-tokens-tool',
    slug: 'linter-tokens-tool',
    name: 'uxio-system-linter',
    description: 'Linter estricto para validar consistencia de espaciados, fuentes y colores en proyectos Next.js.',
    type: 'tool',
    category: 'all',
    tier: 'free',
    priceText: 'Free · MIT',
    badge: 'CLI Tool',
    tech: ['Rust / WASM', 'CLI', 'ESLint'],
    version: 'v1.0.2',
    isOpenSource: true,
    accentColor: '#7928CA',
    previewType: 'interactive-code',
    previewDetails: {
      tag: 'CLI Linter',
      subtitle: 'Design System Rules'
    },
    installCommand: 'npm i -g uxio-system-linter'
  },

  // 4. PLANTILLAS WEB & STARTERS
  {
    id: 'starter-minimal-saas',
    slug: 'starter-minimal-saas',
    name: 'Minimal SaaS Starter',
    description: 'Plantilla de inicio de alta velocidad con autenticación en Supabase, modo oscuro y Tailwind CSS.',
    type: 'template',
    category: 'cards',
    tier: 'free',
    priceText: 'Free · MIT',
    badge: 'Free Template',
    tech: ['Next.js 15', 'Supabase', 'Tailwind'],
    version: 'v2.0.0',
    isOpenSource: true,
    accentColor: '#00F0FF',
    previewType: 'spotlight-card',
    previewDetails: {
      tag: 'Web Starter',
      subtitle: 'Next.js 15 App'
    },
    installCommand: 'npx create-next-app -e uxio-minimal-saas'
  },
  {
    id: 'agency-folio-pro',
    slug: 'agency-folio-pro',
    name: 'Obsidian Studio Folio',
    description: 'Plantilla de portafolio para estudios creativos con animaciones fluidas, panel CMS y estética editorial.',
    type: 'template',
    category: 'cards',
    tier: 'pro',
    priceText: '$29 USD · $110K COP',
    badge: 'Pro Template',
    tech: ['Next.js 15', 'Framer Motion', 'CMS'],
    version: 'v3.0.0',
    isOpenSource: false,
    accentColor: '#FF7F07',
    previewType: 'spotlight-card',
    previewDetails: {
      tag: 'Pro Template',
      subtitle: 'Agency Portfolio'
    },
    installCommand: 'npx @uxio/pro clone obsidian-folio'
  }
];
