import { Locale } from '@/types';

export interface ShowcaseCapability {
  name: string;
  desc: string;
  iconName: 'code' | 'cpu' | 'database' | 'globe' | 'sparkles' | 'layout' | 'component' | 'sliders' | 'layers' | 'palette' | 'pen' | 'box' | 'target' | 'rocket' | 'chart' | 'trending' | 'video' | 'workflow';
}

export interface ShowcaseService {
  id: string;
  label: string;
  badge: string;
  accent: string;
  auroraColor: string;
  headline: string;
  description: string;
  metricHighlight: string;
  path: string;
  capabilities: ShowcaseCapability[];
}

export function getServicesShowcaseData(lang: Locale): ShowcaseService[] {
  const isEs = lang === 'es';

  return [
    {
      id: "technology",
      label: isEs ? "Desarrollo" : "Development",
      badge: isEs ? "Websites & Apps" : "Websites & Apps",
      accent: "#00F0FF",
      auroraColor: "rgba(0, 240, 255, 0.15)",
      headline: isEs 
        ? "Websites, tiendas online y aplicaciones."
        : "Websites, online stores, and apps.",
      description: isEs
        ? "Construimos soluciones rápidas, profesionales y fáciles de usar."
        : "We build fast, professional, and easy-to-use digital solutions.",
      metricHighlight: isEs ? "ALTO RENDIMIENTO // NEXT.JS" : "HIGH PERFORMANCE // NEXT.JS",
      path: `/${lang}/services/technology`,
      capabilities: [
        { name: isEs ? "Sitios Web & Tiendas" : "Websites & Stores", desc: isEs ? "Rápidos, modernos y adaptables" : "Fast, modern & responsive", iconName: "code" },
        { name: isEs ? "Aplicaciones a Medida" : "Custom Applications", desc: isEs ? "Plataformas seguras para tu negocio" : "Secure platforms for your business", iconName: "cpu" },
        { name: isEs ? "Conexiones & Datos" : "APIs & Databases", desc: isEs ? "Integración fluida de sistemas" : "Seamless system integrations", iconName: "database" },
        { name: isEs ? "Velocidad de Carga" : "Fast Loading Speed", desc: isEs ? "Experiencia instantánea para clientes" : "Instant experience for users", iconName: "globe" },
        { name: isEs ? "Herramientas con IA" : "AI-Powered Tools", desc: isEs ? "Automatizaciones inteligentes útiles" : "Useful intelligent automations", iconName: "sparkles" },
      ]
    },
    {
      id: "experience",
      label: isEs ? "Diseño y Experiencia" : "Design & Experience",
      badge: isEs ? "UI / UX" : "UI / UX",
      accent: "#FE385B",
      auroraColor: "rgba(254, 56, 91, 0.15)",
      headline: isEs
        ? "Diseñamos interfaces claras y fáciles de usar."
        : "We design clear and easy-to-use interfaces.",
      description: isEs
        ? "Creamos experiencias visuales intuitivas que tus clientes entienden al instante."
        : "We create intuitive visual experiences that your customers understand instantly.",
      metricHighlight: isEs ? "EXPERIENCIA INTUITIVA" : "INTUITIVE EXPERIENCE",
      path: `/${lang}/services/experience`,
      capabilities: [
        { name: isEs ? "Diseño de Interfaces (UI)" : "Interface Design (UI)", desc: isEs ? "Estética cuidada y moderna" : "Polished, modern aesthetics", iconName: "layout" },
        { name: isEs ? "Experiencia de Usuario (UX)" : "User Experience (UX)", desc: isEs ? "Navegación sencilla sin confusiones" : "Simple navigation without friction", iconName: "sliders" },
        { name: isEs ? "Diseño Móvil" : "Mobile-First Design", desc: isEs ? "Perfecto en cualquier smartphone" : "Flawless on any smartphone", iconName: "layers" },
        { name: isEs ? "Componentes Coherentes" : "Design Systems", desc: isEs ? "Misma calidad visual en cada pantalla" : "Consistent quality across all screens", iconName: "component" },
        { name: isEs ? "Interacciones Suaves" : "Smooth Micro-Interactions", desc: isEs ? "Detalles que transmiten calidad" : "Details that convey top quality", iconName: "sparkles" },
      ]
    },
    {
      id: "brand",
      label: isEs ? "Marca" : "Brand & Identity",
      badge: isEs ? "Identidad & Branding" : "Identity & Branding",
      accent: "#FFCC48",
      auroraColor: "rgba(255, 204, 72, 0.15)",
      headline: isEs
        ? "Construimos marcas que se reconocen y se recuerdan."
        : "We build brands that are recognized and remembered.",
      description: isEs
        ? "Diseñamos identidades visuales que transmiten profesionalismo y confianza."
        : "We design visual identities that project authority and trust.",
      metricHighlight: isEs ? "IDENTIDAD & AUTORIDAD" : "IDENTITY & AUTHORITY",
      path: `/${lang}/services/brand`,
      capabilities: [
        { name: isEs ? "Logotipos & Identidad" : "Logos & Visual Identity", desc: isEs ? "Imagen distintiva para tu empresa" : "Distinctive image for your business", iconName: "palette" },
        { name: isEs ? "Colores & Tipografía" : "Colors & Typography", desc: isEs ? "Combinaciones visuales atractivas" : "Attractive visual combinations", iconName: "pen" },
        { name: isEs ? "Guías de Marca" : "Brand Guidelines", desc: isEs ? "Instrucciones claras de uso" : "Clear guidelines for every channel", iconName: "layers" },
        { name: isEs ? "Recursos Visuales" : "Visual Assets", desc: isEs ? "Gráficos para web y presentaciones" : "Assets for web and presentations", iconName: "box" },
        { name: isEs ? "Dirección de Arte" : "Art Direction", desc: isEs ? "Estilo fotográfico y tono de voz" : "Photography style and tone of voice", iconName: "sparkles" },
      ]
    },
    {
      id: "growth",
      label: isEs ? "Marketing y Crecimiento" : "Marketing & Growth",
      badge: isEs ? "Conversión & Ventas" : "Conversion & Sales",
      accent: "#FF7F07",
      auroraColor: "rgba(255, 127, 7, 0.15)",
      headline: isEs
        ? "Ayudamos a que más personas conozcan y elijan tu negocio."
        : "We help more people discover and choose your business.",
      description: isEs
        ? "Optimizamos tu presencia digital para conseguir más clientes y ventas."
        : "We optimize your digital presence to generate more leads and sales.",
      metricHighlight: isEs ? "MÁS CLIENTES & VENTAS" : "MORE CLIENTS & SALES",
      path: `/${lang}/services/growth`,
      capabilities: [
        { name: isEs ? "Optimización de Ventas" : "Conversion Optimization", desc: isEs ? "Convertir más visitantes en compradores" : "Convert more visitors into buyers", iconName: "target" },
        { name: isEs ? "Pruebas de Rendimiento" : "Performance Testing", desc: isEs ? "Mejoras basadas en lo que funciona" : "Improvements based on real results", iconName: "rocket" },
        { name: isEs ? "Métricas Clave" : "Key Analytics", desc: isEs ? "Saber qué hacen tus clientes" : "Understand what customers do", iconName: "chart" },
        { name: isEs ? "Retención & Recompra" : "Customer Retention", desc: isEs ? "Hacer que tus clientes vuelvan" : "Encourage repeat customers", iconName: "trending" },
        { name: isEs ? "Estrategia Comercial" : "Growth Strategy", desc: isEs ? "Prioridades claras para crecer" : "Clear roadmap to grow your revenue", iconName: "sparkles" },
      ]
    },
    {
      id: "content",
      label: isEs ? "Contenido" : "Content",
      badge: isEs ? "Audiovisual & Redes" : "Audiovisual & Social",
      accent: "#10B981",
      auroraColor: "rgba(16, 185, 129, 0.15)",
      headline: isEs
        ? "Fotos, videos y contenido para comunicar mejor lo que haces."
        : "Photos, videos, and content to communicate what you do.",
      description: isEs
        ? "Producimos material visual y audiovisual de alta calidad para redes y web."
        : "We produce high-quality visual and video media for social and web.",
      metricHighlight: isEs ? "PRODUCCIÓN AUDIOVISUAL" : "AUDIOVISUAL PRODUCTION",
      path: `/${lang}/services/content`,
      capabilities: [
        { name: isEs ? "Videos para Redes" : "Social Media Video", desc: isEs ? "Reels y videos verticales dinámicos" : "Engaging Reels & vertical video", iconName: "video" },
        { name: isEs ? "Guiones Comerciales" : "Commercial Scripts", desc: isEs ? "Mensajes claros que captan atención" : "Clear messages that capture attention", iconName: "pen" },
        { name: isEs ? "Fotografía de Producto" : "Product Photography", desc: isEs ? "Imágenes nítidas y profesionales" : "Crisp, professional photography", iconName: "palette" },
        { name: isEs ? "Plan de Publicación" : "Editorial Planning", desc: isEs ? "Calendario de contenido organizado" : "Organized content calendar", iconName: "layers" },
        { name: isEs ? "Formatos con IA" : "AI-Enhanced Media", desc: isEs ? "Producción ágil y de alto impacto" : "Fast, high-impact workflows", iconName: "sparkles" },
      ]
    },
    {
      id: "solutions",
      label: isEs ? "Soluciones Digitales" : "Digital Solutions",
      badge: isEs ? "Herramientas a Medida" : "Custom Tools",
      accent: "#7928CA",
      auroraColor: "rgba(121, 40, 202, 0.15)",
      headline: isEs
        ? "Convertimos procesos y necesidades específicas en herramientas digitales."
        : "We turn specific processes and needs into digital tools.",
      description: isEs
        ? "Desarrollamos herramientas a medida para automatizar y mejorar tus operaciones."
        : "We develop custom tools to automate and streamline your operations.",
      metricHighlight: isEs ? "HERRAMIENTAS A MEDIDA" : "CUSTOM TOOLS",
      path: `/${lang}/services/solutions`,
      capabilities: [
        { name: isEs ? "Plataformas Web Privadas" : "Custom Web Portals", desc: isEs ? "Software adaptado a tu empresa" : "Software tailored to your company", iconName: "code" },
        { name: isEs ? "Automatización de Tareas" : "Workflow Automation", desc: isEs ? "Ahorro de horas en tareas repetitivas" : "Save hours on repetitive tasks", iconName: "workflow" },
        { name: isEs ? "Integración de Sistemas" : "Tool Integrations", desc: isEs ? "Conecta tus programas existentes" : "Connect your existing software", iconName: "cpu" },
        { name: isEs ? "Portales para Clientes" : "Client Dashboards", desc: isEs ? "Espacios seguros para tus usuarios" : "Secure areas for your customers", iconName: "layout" },
        { name: isEs ? "Paneles de Control" : "Control Panels", desc: isEs ? "Visualiza datos y gestiona todo" : "View metrics and manage operations", iconName: "chart" },
      ]
    }
  ];
}
