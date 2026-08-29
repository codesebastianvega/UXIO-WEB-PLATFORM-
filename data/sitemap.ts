import { NavSection, Locale } from '@/types';

export const getSitemap = (lang: Locale = 'es'): NavSection[] => [
  // 01: Servicios
  {
    id: 'services',
    groupNumber: '01',
    label: lang === 'es' ? 'Servicios' : 'Services',
    count: '06',
    subroutes: [
      { name: lang === 'es' ? 'Desarrollo' : 'Development', path: `/${lang}/services/technology`, badge: 'Dev', isVisible: true },
      { name: lang === 'es' ? 'Experiencia' : 'Experience', path: `/${lang}/services/experience`, badge: 'Design', isVisible: true },
      { name: lang === 'es' ? 'Identidad & Marca' : 'Brand & Identity', path: `/${lang}/services/brand`, badge: 'Editorial', isVisible: true },
      { name: lang === 'es' ? 'Growth & Estrategia' : 'Growth & Strategy', path: `/${lang}/services/growth`, badge: 'Scale', isVisible: true },
      { name: lang === 'es' ? 'Contenido & Media' : 'Content & Media', path: `/${lang}/services/content`, badge: 'Media', isVisible: true },
      { name: lang === 'es' ? 'Soluciones Core' : 'Core Solutions', path: `/${lang}/services/solutions`, badge: 'Core', isVisible: true },
    ]
  },
  // 02: Proyectos (Con Sub-Grupos: Ecosystems y Disciplines)
  {
    id: 'works',
    groupNumber: '02',
    label: lang === 'es' ? 'Proyectos' : 'Projects',
    count: '14',
    subroutes: [
      // Ecosystems
      { name: 'SIE Travel', path: `/${lang}/works/ecosystems/sie-travel`, badge: 'Eco', isVisible: true },
      { name: 'By Saralú', path: `/${lang}/works/ecosystems/by-saralu`, badge: 'Eco', isVisible: true },
      { name: 'Alto Andino', path: `/${lang}/works/ecosystems/alto-andino`, badge: 'Eco', isVisible: true },
      { name: 'Aluna', path: `/${lang}/works/ecosystems/aluna`, badge: 'Eco', isVisible: true },
      { name: 'Arca', path: `/${lang}/works/ecosystems/arca`, badge: 'Eco', isVisible: true },
      // Disciplines
      { name: lang === 'es' ? 'Sitios Web' : 'Websites', path: `/${lang}/works/disciplines/websites`, badge: 'Web', isVisible: true },
      { name: 'Apps', path: `/${lang}/works/disciplines/apps`, badge: 'App', isVisible: true },
      { name: 'Branding', path: `/${lang}/works/disciplines/branding`, badge: 'Brand', isVisible: true },
      { name: 'UX/UI', path: `/${lang}/works/disciplines/ux-ui`, badge: 'UI', isVisible: true },
      { name: lang === 'es' ? 'Contenido' : 'Content', path: `/${lang}/works/disciplines/content`, isVisible: true },
      { name: lang === 'es' ? 'Fotografía' : 'Photography', path: `/${lang}/works/disciplines/photography`, isVisible: true },
      { name: 'Video', path: `/${lang}/works/disciplines/video`, isVisible: true },
      { name: lang === 'es' ? 'Campañas' : 'Campaigns', path: `/${lang}/works/disciplines/campaigns`, isVisible: true },
      { name: 'Print', path: `/${lang}/works/disciplines/print`, isVisible: true },
    ],
    subGroups: [
      {
        title: lang === 'es' ? 'Ecosistemas' : 'Ecosystems',
        items: [
          { name: 'SIE Travel', path: `/${lang}/works/ecosystems/sie-travel`, badge: 'Eco', isVisible: true },
          { name: 'By Saralú', path: `/${lang}/works/ecosystems/by-saralu`, badge: 'Eco', isVisible: true },
          { name: 'Alto Andino', path: `/${lang}/works/ecosystems/alto-andino`, badge: 'Eco', isVisible: true },
          { name: 'Aluna', path: `/${lang}/works/ecosystems/aluna`, badge: 'Eco', isVisible: true },
          { name: 'Arca', path: `/${lang}/works/ecosystems/arca`, badge: 'Eco', isVisible: true },
        ]
      },
      {
        title: lang === 'es' ? 'Disciplinas' : 'Disciplines',
        items: [
          { name: lang === 'es' ? 'Sitios Web' : 'Websites', path: `/${lang}/works/disciplines/websites`, badge: 'Web', isVisible: true },
          { name: 'Apps', path: `/${lang}/works/disciplines/apps`, badge: 'App', isVisible: true },
          { name: 'Branding', path: `/${lang}/works/disciplines/branding`, badge: 'Brand', isVisible: true },
          { name: 'UX/UI', path: `/${lang}/works/disciplines/ux-ui`, badge: 'UI', isVisible: true },
          { name: lang === 'es' ? 'Contenido' : 'Content', path: `/${lang}/works/disciplines/content`, isVisible: true },
          { name: lang === 'es' ? 'Fotografía' : 'Photography', path: `/${lang}/works/disciplines/photography`, isVisible: true },
          { name: 'Video', path: `/${lang}/works/disciplines/video`, isVisible: true },
          { name: lang === 'es' ? 'Campañas' : 'Campaigns', path: `/${lang}/works/disciplines/campaigns`, isVisible: true },
          { name: 'Print', path: `/${lang}/works/disciplines/print`, isVisible: true },
        ]
      }
    ]
  },
  // 03: Labs
  {
    id: 'labs',
    groupNumber: '03',
    label: 'Labs',
    count: '04',
    subroutes: [
      { name: 'Aluna', path: `/${lang}/labs/aluna`, badge: 'LIVE', status: 'Live', statusColor: '#00F0FF', isVisible: true },
      { name: 'Arca', path: `/${lang}/labs/arca`, badge: 'BETA', status: 'Beta', statusColor: '#FE385B', isVisible: true },
      { name: 'Boku Bento', path: `/${lang}/labs/boku-bento`, badge: 'LIVE', status: 'Live', statusColor: '#FF7F07', isVisible: true },
      { name: 'Experiments', path: `/${lang}/labs/experiments`, badge: 'WIP', status: 'WIP', statusColor: '#FFCC48', isVisible: true },
    ]
  },
  // 04: Resources
  {
    id: 'resources',
    groupNumber: '04',
    label: lang === 'es' ? 'Recursos' : 'Resources',
    count: '05',
    subroutes: [
      { name: lang === 'es' ? 'Componentes' : 'Components', path: `/${lang}/resources/components`, badge: 'UI', isVisible: true },
      { name: lang === 'es' ? 'Librerías' : 'Libraries', path: `/${lang}/resources/libraries`, badge: 'Kit', isVisible: true },
      { name: lang === 'es' ? 'Herramientas' : 'Tools', path: `/${lang}/resources/tools`, badge: 'CLI', isVisible: true },
      { name: lang === 'es' ? 'Plantillas' : 'Templates', path: `/${lang}/resources/templates`, badge: 'Web', isVisible: true },
      { name: 'Open Source', path: `/${lang}/resources/open-source`, badge: 'Free', isVisible: true },
    ]
  },
  // 05: Academy
  {
    id: 'academy',
    groupNumber: '05',
    label: lang === 'es' ? 'Academy' : 'Academy',
    count: '02',
    subroutes: [
      { name: 'Creator Lab', path: `/${lang}/academy/creator-lab`, badge: 'Cohorte 01', status: 'Live', statusColor: '#FE385B', isVisible: true },
      { name: lang === 'es' ? 'Catálogo de Cursos' : 'Course Catalog', path: `/${lang}/academy`, badge: 'Hub', isVisible: true },
    ]
  }
];

export const getSecondaryLinks = (lang: Locale = 'es') => [
  { id: 'insights', label: 'Insights', path: `/${lang}/insights`, count: '12' },
  { id: 'about', label: lang === 'es' ? 'Sobre el Estudio' : 'About', path: `/${lang}/about` },
  { id: 'people', label: lang === 'es' ? 'Equipo' : 'People', path: `/${lang}/people` },
  { id: 'contact', label: lang === 'es' ? 'Contacto' : 'Contact', path: `/${lang}/contact`, highlight: true, isButton: true },
];
