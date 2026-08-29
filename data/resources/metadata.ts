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
    titleEs: 'Biblioteca de Recursos & Artefactos',
    titleEn: 'Resource Library & Artifacts',
    descriptionEs: 'Explora todos los componentes, librerías, herramientas de terminal y plantillas creadas por UXIO.',
    descriptionEn: 'Explore all components, libraries, CLI tools, and web templates crafted by UXIO.',
    descEs: 'Explora todos los componentes, librerías, herramientas de terminal y plantillas creadas por UXIO.',
    descEn: 'Explore all components, libraries, CLI tools, and web templates crafted by UXIO.',
    tag: '// 04 · RECURSOS GLOBALES'
  },
  components: {
    badge: 'UI COMPONENTS',
    titleEs: 'Componentes de UI & Interacciones',
    titleEn: 'UI Components & Interactions',
    descriptionEs: 'Tarjetas con física fluida, botones magnéticos, micro-interacciones y primitivas listas para copiar y pegar (Free & Pro).',
    descriptionEn: 'Fluid physics cards, magnetic buttons, micro-interactions, and ready-to-copy UI primitives (Free & Pro).',
    descEs: 'Tarjetas con física fluida, botones magnéticos, micro-interacciones y primitivas listas para copiar y pegar (Free & Pro).',
    descEn: 'Fluid physics cards, magnetic buttons, micro-interactions, and ready-to-copy UI primitives (Free & Pro).',
    tag: '// 04 · COMPONENTES REACT'
  },
  libraries: {
    badge: 'REACT PACKAGES',
    titleEs: 'Librerías & Hooks de React',
    titleEn: 'Libraries & React Hooks',
    descriptionEs: 'Paquetes npm, hooks de física (LERP, resortes), utilidades de animación y helpers semánticos para Next.js.',
    descriptionEn: 'npm packages, physics hooks (LERP, springs), animation helpers, and semantic utilities for Next.js.',
    descEs: 'Paquetes npm, hooks de física (LERP, resortes), utilidades de animación y helpers semánticos para Next.js.',
    descEn: 'npm packages, physics hooks (LERP, springs), animation helpers, and semantic utilities for Next.js.',
    tag: '// 04 · LIBRERÍAS & KITS'
  },
  tools: {
    badge: 'DEVELOPER CLI',
    titleEs: 'Herramientas de Terminal & CLI',
    titleEn: 'CLI & Developer Tools',
    descriptionEs: 'Generadores de sistemas de diseño, linters de tokens y herramientas de línea de comandos para agilizar el desarrollo.',
    descriptionEn: 'Design system generators, token linters, and command line tools to supercharge product builds.',
    descEs: 'Generadores de sistemas de diseño, linters de tokens y herramientas de línea de comandos para agilizar el desarrollo.',
    descEn: 'Design system generators, token linters, and command line tools to supercharge product builds.',
    tag: '// 04 · HERRAMIENTAS CLI'
  },
  templates: {
    badge: 'WEB STARTERS',
    titleEs: 'Plantillas Web & Starters',
    titleEn: 'Web Templates & Starters',
    descriptionEs: 'Landing pages y dashboards base con arquitectura limpia, Tailwind CSS y rendimiento extremo listos para desplegar.',
    descriptionEn: 'Landing pages, SaaS starters, and dashboard templates with clean architecture and extreme performance.',
    descEs: 'Landing pages y dashboards base con arquitectura limpia, Tailwind CSS y rendimiento extremo listos para desplegar.',
    descEn: 'Landing pages, SaaS starters, and dashboard templates with clean architecture and extreme performance.',
    tag: '// 04 · PLANTILLAS WEB'
  },
  'open-source': {
    badge: 'OPEN SOURCE · MIT',
    titleEs: 'Ecosistema Open Source & Código Abierto',
    titleEn: 'Free Open Source Ecosystem',
    descriptionEs: 'Todos los artefactos, componentes, librerías, plantillas y herramientas 100% gratuitos bajo licencia MIT libre.',
    descriptionEn: 'All artifacts, components, libraries, templates, and developer tools distributed 100% free under MIT license.',
    descEs: 'Todos los artefactos, componentes, librerías, plantillas y herramientas 100% gratuitos bajo licencia MIT libre.',
    descEn: 'All artifacts, components, libraries, templates, and developer tools distributed 100% free under MIT license.',
    tag: '// 04 · OPEN SOURCE (100% FREE)'
  }
};
