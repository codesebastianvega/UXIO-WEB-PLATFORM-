import { ResourceCategory } from './types';

export const CATEGORIES_LIST: Array<{
  id: ResourceCategory;
  labelEs: string;
  labelEn: string;
  nameEs: string;
  nameEn: string;
}> = [
  { id: 'all', labelEs: 'Todos', labelEn: 'All', nameEs: 'Todos los Componentes', nameEn: 'All Components' },
  { id: 'cards', labelEs: 'Cards & Contenedores', labelEn: 'Cards & Containers', nameEs: 'Cards & Contenedores', nameEn: 'Cards & Containers' },
  { id: 'hover', labelEs: 'Hover & Efectos', labelEn: 'Hover & Effects', nameEs: 'Hover & Micro-interacciones', nameEn: 'Hover & Interactions' },
  { id: 'buttons', labelEs: 'Botones & CTAs', labelEn: 'Buttons & CTAs', nameEs: 'Botones & CTAs', nameEn: 'Buttons & CTAs' },
  { id: 'navigation', labelEs: 'Navegación & Docks', labelEn: 'Navigation & Docks', nameEs: 'Navegación & Modales', nameEn: 'Navigation & Modals' },
  { id: 'text', labelEs: 'Texto & Tipografía', labelEn: 'Text & Typography', nameEs: 'Texto & Tipografía', nameEn: 'Text & Typography' },
  { id: 'backgrounds', labelEs: 'Fondos & Canvas', labelEn: 'Backgrounds & Canvas', nameEs: 'Backgrounds & Canvas', nameEn: 'Backgrounds & Canvas' },
  { id: 'carousels', labelEs: 'Carruseles & Sliders', labelEn: 'Carousels & Sliders', nameEs: 'Carruseles & Sliders', nameEn: 'Carousels & Sliders' },
];

export const SECTION_METADATA = {
  all: {
    badge: 'UXIO ARTIFACTS',
    titleEs: 'Recursos & Componentes',
    titleEn: 'Resources & Components',
    descriptionEs: 'Explora todos los componentes UI, librerías, herramientas y plantillas creadas por UXIO.',
    descriptionEn: 'Explore all UI components, libraries, tools, and web templates crafted by UXIO.',
    descEs: 'Explora todos los componentes UI, librerías, herramientas y plantillas creadas por UXIO.',
    descEn: 'Explore all UI components, libraries, tools, and web templates crafted by UXIO.',
    tag: '// 05 · RECURSOS'
  },
  components: {
    badge: 'UI COMPONENTS',
    titleEs: 'Componentes UI',
    titleEn: 'UI Components',
    descriptionEs: 'Tarjetas interactivas, botones magnéticos, micro-interacciones y primitivas listas para copiar y pegar.',
    descriptionEn: 'Fluid physics cards, magnetic buttons, micro-interactions, and ready-to-copy UI primitives.',
    descEs: 'Tarjetas interactivas, botones magnéticos, micro-interacciones y primitivas listas para copiar y pegar.',
    descEn: 'Fluid physics cards, magnetic buttons, micro-interactions, and ready-to-copy UI primitives.',
    tag: '// 05 · COMPONENTES UI'
  },
  libraries: {
    badge: 'REACT PACKAGES',
    titleEs: 'Librerías & Hooks',
    titleEn: 'Libraries & React Hooks',
    descriptionEs: 'Paquetes npm, hooks de animación, utilidades de física y helpers para Next.js.',
    descriptionEn: 'npm packages, animation hooks, physics utilities, and helpers for Next.js.',
    descEs: 'Paquetes npm, hooks de animación, utilidades de física y helpers para Next.js.',
    descEn: 'npm packages, animation hooks, physics utilities, and helpers for Next.js.',
    tag: '// 05 · LIBRERÍAS'
  },
  tools: {
    badge: 'DEVELOPER TOOLS',
    titleEs: 'Herramientas',
    titleEn: 'Developer Tools',
    descriptionEs: 'Generadores de sistemas de diseño, linters de tokens y herramientas para agilizar el desarrollo.',
    descriptionEn: 'Design system generators, token linters, and tools to supercharge product builds.',
    descEs: 'Generadores de sistemas de diseño, linters de tokens y herramientas para agilizar el desarrollo.',
    descEn: 'Design system generators, token linters, and tools to supercharge product builds.',
    tag: '// 05 · HERRAMIENTAS'
  },
  templates: {
    badge: 'WEB TEMPLATES',
    titleEs: 'Plantillas Web',
    titleEn: 'Web Templates',
    descriptionEs: 'Landing pages y aplicaciones base con arquitectura limpia, Tailwind CSS y rendimiento optimizado.',
    descriptionEn: 'Landing pages and starter apps with clean architecture, Tailwind CSS, and optimized performance.',
    descEs: 'Landing pages y aplicaciones base con arquitectura limpia, Tailwind CSS y rendimiento optimizado.',
    descEn: 'Landing pages and starter apps with clean architecture, Tailwind CSS, and optimized performance.',
    tag: '// 05 · PLANTILLAS'
  },
  'open-source': {
    badge: 'OPEN SOURCE · MIT',
    titleEs: 'Código Abierto (Open Source)',
    titleEn: 'Open Source',
    descriptionEs: 'Todos los recursos, componentes, librerías, plantillas y herramientas 100% gratuitos bajo licencia MIT.',
    descriptionEn: 'All resources, components, libraries, templates, and tools distributed 100% free under MIT license.',
    descEs: 'Todos los recursos, componentes, librerías, plantillas y herramientas 100% gratuitos bajo licencia MIT.',
    descEn: 'All resources, components, libraries, templates, and tools distributed 100% free under MIT license.',
    tag: '// 05 · OPEN SOURCE'
  }
};
