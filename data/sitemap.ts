import { NavSection, Locale } from '@/types';

export const getSitemap = (lang: Locale = 'es'): NavSection[] => {
  const isEs = lang === 'es';

  return [
    // 01: Academy (Máxima prioridad de negocio)
    {
      id: 'academy',
      groupNumber: '01',
      label: 'Academy',
      count: '04',
      subroutes: [
        { name: 'Creator Lab', path: `/${lang}/academy/creator-lab`, badge: 'Cohorte 01', status: isEs ? 'Activo' : 'Active', statusColor: '#FE385B', isVisible: true },
        { name: isEs ? 'Mi Aula' : 'My Classroom', path: `/${lang}/academy/classroom`, badge: 'Aula', isVisible: true },
        { name: isEs ? 'Mesa Docente' : 'Instructor Desk', path: `/${lang}/academy/instructor`, badge: 'Admin', isVisible: true },
        { name: isEs ? 'Cursos' : 'Courses', path: `/${lang}/academy`, badge: 'Hub', isVisible: true },
      ]
    },
    // 02: Servicios
    {
      id: 'services',
      groupNumber: '02',
      label: isEs ? 'Servicios' : 'Services',
      count: '06',
      subroutes: [
        { name: isEs ? 'Desarrollo' : 'Development', path: `/${lang}/services/technology`, badge: 'Dev', isVisible: true },
        { name: isEs ? 'Diseño y Experiencia' : 'Design & Experience', path: `/${lang}/services/experience`, badge: 'Design', isVisible: true },
        { name: isEs ? 'Marca' : 'Brand & Identity', path: `/${lang}/services/brand`, badge: 'Brand', isVisible: true },
        { name: isEs ? 'Marketing y Crecimiento' : 'Marketing & Growth', path: `/${lang}/services/growth`, badge: 'Growth', isVisible: true },
        { name: isEs ? 'Contenido' : 'Content & Media', path: `/${lang}/services/content`, badge: 'Media', isVisible: true },
        { name: isEs ? 'Soluciones Digitales' : 'Digital Solutions', path: `/${lang}/services/solutions`, badge: 'Solutions', isVisible: true },
      ]
    },
    // 03: Proyectos (Con Sub-Grupos: Proyectos y Especialidades)
    {
      id: 'works',
      groupNumber: '03',
      label: isEs ? 'Proyectos' : 'Projects',
      count: '14',
      subroutes: [
        // Proyectos
        { name: 'SIE Travel', path: `/${lang}/works/ecosystems/sie-travel`, badge: 'Eco', isVisible: true },
        { name: 'By Saralú', path: `/${lang}/works/ecosystems/by-saralu`, badge: 'Eco', isVisible: true },
        { name: 'Alto Andino', path: `/${lang}/works/ecosystems/alto-andino`, badge: 'Eco', isVisible: true },
        { name: 'Aluna', path: `/${lang}/works/ecosystems/aluna`, badge: 'Eco', isVisible: true },
        { name: 'Arca', path: `/${lang}/works/ecosystems/arca`, badge: 'Eco', isVisible: true },
        // Especialidades
        { name: isEs ? 'Sitios Web' : 'Websites', path: `/${lang}/works/disciplines/websites`, badge: 'Web', isVisible: true },
        { name: 'Apps', path: `/${lang}/works/disciplines/apps`, badge: 'App', isVisible: true },
        { name: 'Branding', path: `/${lang}/works/disciplines/branding`, badge: 'Brand', isVisible: true },
        { name: 'UX/UI', path: `/${lang}/works/disciplines/ux-ui`, badge: 'UI', isVisible: true },
        { name: isEs ? 'Contenido' : 'Content', path: `/${lang}/works/disciplines/content`, isVisible: true },
        { name: isEs ? 'Fotografía' : 'Photography', path: `/${lang}/works/disciplines/photography`, isVisible: true },
        { name: 'Video', path: `/${lang}/works/disciplines/video`, isVisible: true },
        { name: isEs ? 'Campañas' : 'Campaigns', path: `/${lang}/works/disciplines/campaigns`, isVisible: true },
        { name: 'Print', path: `/${lang}/works/disciplines/print`, isVisible: true },
      ],
      subGroups: [
        {
          title: isEs ? 'Proyectos' : 'Projects',
          items: [
            { name: 'SIE Travel', path: `/${lang}/works/ecosystems/sie-travel`, badge: 'Eco', isVisible: true },
            { name: 'By Saralú', path: `/${lang}/works/ecosystems/by-saralu`, badge: 'Eco', isVisible: true },
            { name: 'Alto Andino', path: `/${lang}/works/ecosystems/alto-andino`, badge: 'Eco', isVisible: true },
            { name: 'Aluna', path: `/${lang}/works/ecosystems/aluna`, badge: 'Eco', isVisible: true },
            { name: 'Arca', path: `/${lang}/works/ecosystems/arca`, badge: 'Eco', isVisible: true },
          ]
        },
        {
          title: isEs ? 'Especialidades' : 'Specialties',
          items: [
            { name: isEs ? 'Sitios Web' : 'Websites', path: `/${lang}/works/disciplines/websites`, badge: 'Web', isVisible: true },
            { name: 'Apps', path: `/${lang}/works/disciplines/apps`, badge: 'App', isVisible: true },
            { name: 'Branding', path: `/${lang}/works/disciplines/branding`, badge: 'Brand', isVisible: true },
            { name: 'UX/UI', path: `/${lang}/works/disciplines/ux-ui`, badge: 'UI', isVisible: true },
            { name: isEs ? 'Contenido' : 'Content', path: `/${lang}/works/disciplines/content`, isVisible: true },
            { name: isEs ? 'Fotografía' : 'Photography', path: `/${lang}/works/disciplines/photography`, isVisible: true },
            { name: 'Video', path: `/${lang}/works/disciplines/video`, isVisible: true },
            { name: isEs ? 'Campañas' : 'Campaigns', path: `/${lang}/works/disciplines/campaigns`, isVisible: true },
            { name: 'Print', path: `/${lang}/works/disciplines/print`, isVisible: true },
          ]
        }
      ]
    },
    // 04: Labs
    {
      id: 'labs',
      groupNumber: '04',
      label: 'Labs',
      count: '04',
      subroutes: [
        { name: 'Aluna', path: `/${lang}/labs/aluna`, badge: 'Activo', status: isEs ? 'Activo' : 'Active', statusColor: '#00F0FF', isVisible: true },
        { name: 'Arca', path: `/${lang}/labs/arca`, badge: 'Beta', status: 'Beta', statusColor: '#FE385B', isVisible: true },
        { name: 'Boku Bento', path: `/${lang}/labs/boku-bento`, badge: 'Activo', status: isEs ? 'Activo' : 'Active', statusColor: '#FF7F07', isVisible: true },
        { name: isEs ? 'Experimentos' : 'Experiments', path: `/${lang}/labs/experiments`, badge: 'Lab', status: isEs ? 'Experimental' : 'Experimental', statusColor: '#FFCC48', isVisible: true },
      ]
    },
    // 05: Recursos
    {
      id: 'resources',
      groupNumber: '05',
      label: isEs ? 'Recursos' : 'Resources',
      count: '05',
      subroutes: [
        { name: isEs ? 'Componentes UI' : 'UI Components', path: `/${lang}/resources/components`, badge: 'UI', isVisible: true },
        { name: isEs ? 'Librerías' : 'Libraries', path: `/${lang}/resources/libraries`, badge: 'Kit', isVisible: true },
        { name: isEs ? 'Herramientas' : 'Tools', path: `/${lang}/resources/tools`, badge: 'Tools', isVisible: true },
        { name: isEs ? 'Plantillas' : 'Templates', path: `/${lang}/resources/templates`, badge: 'Web', isVisible: true },
        { name: 'Open Source', path: `/${lang}/resources/open-source`, badge: 'Free', isVisible: true },
      ]
    }
  ];
};

export const getSecondaryLinks = (lang: Locale = 'es') => [
  { id: 'insights', label: 'Insights', path: `/${lang}/insights`, count: '12' },
  { id: 'about', label: lang === 'es' ? 'Sobre UXIO' : 'About UXIO', path: `/${lang}/about` },
  { id: 'people', label: lang === 'es' ? 'Equipo' : 'Team', path: `/${lang}/people` },
  { id: 'contact', label: lang === 'es' ? 'Contacto' : 'Contact', path: `/${lang}/contact`, highlight: true, isButton: true },
];
