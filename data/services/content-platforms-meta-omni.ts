import { PlatformGroup } from './types';

export const contentPlatformsMetaOmni: PlatformGroup[] = [
  {
    id: "omnicanal",
    name: "Paquetes Omnicanal (Mixtos)",
    badge: "Omnicanal",
    tagline: "Presencia total y distribución de contenido cruzado.",
    description: "Estrategia integral de contenidos cruzados para amplificar el alcance de tu marca en todos los canales simultáneamente.",
    startingPrice: { COP: 1200000, USD: 300 },
    tiers: [
      {
        name: "Plan Esencial",
        price: { COP: 1200000, USD: 300 },
        description: "Contenido base para mantener tus redes activas y profesionales.",
        features: [
          "10 Posts adaptados (IG/FB/LinkedIn)",
          "8 Historias mensuales",
          "Calendario base de publicaciones",
          "Definición de pilares de contenido"
        ]
      },
      {
        name: "Plan Pro",
        isRecommended: true,
        price: { COP: 2500000, USD: 600 },
        description: "Distribución líquida de contenido para captar y nutrir audiencia.",
        features: [
          "15 Posts adaptados + 12 Historias",
          "4 Videos cortos (Reels / TikToks)",
          "Distribución de contenido líquido",
          "Reporte mensual de rendimiento"
        ]
      },
      {
        name: "Plan Custom",
        price: { COP: 4500000, USD: 1100 },
        description: "Gestión 360° con grabación presencial y pauta publicitaria.",
        features: [
          "Gestión orgánica 360° en todas las redes",
          "Diseño de campañas Meta/Google Ads",
          "Sesión de grabación presencial incluida",
          "Estrategia de crecimiento continuo"
        ]
      }
    ],
    microServices: [
      {
        id: "shooting-4h",
        title: "Sesión de Grabación (Shooting) de 4 horas",
        description: "Producción audiovisual in-situ con equipo profesional para generar todo tu contenido del mes.",
        price: { USD: 300, COP: 1200000 },
        accent: "#F06C83",
        timeline: "4 Horas",
        deliverables: [
          "Jornada de 4 horas de grabación con equipo profesional.",
          "Iluminación, micrófonos inalámbricos y dirección de escena.",
          "Entrega de todo el material crudo (B-roll + A-roll).",
          "Ideal para generar contenido de 1 mes en 1 solo día."
        ]
      },
      {
        id: "audit-social",
        title: "Auditoría Integral de Marca en Redes",
        description: "Diagnóstico profundo de perfiles, engagement y estética del feed.",
        price: { USD: 150, COP: 600000 },
        accent: "#FF7F07",
        timeline: "24h a 48h",
        deliverables: [
          "Diagnóstico de perfiles en Instagram, LinkedIn y TikTok.",
          "Análisis de engagement, estética del feed y biografía.",
          "Detección de oportunidades de crecimiento orgánico.",
          "Informe en Notion con plan de acción paso a paso."
        ]
      },
      {
        id: "linktree-bio",
        title: "Setup de Linktree/Bio Multi-enlace",
        description: "Página de bio personalizada con tu paleta, enlaces a WhatsApp y píxel de seguimiento.",
        price: { USD: 40, COP: 150000 },
        accent: "#10B981",
        timeline: "24h",
        deliverables: [
          "Página de bio personalizada con tu paleta y tipografía.",
          "Configuración de enlaces directos a WhatsApp, tienda y catálogo.",
          "Instalación de píxel de seguimiento para retargeting.",
          "Entrega en menos de 24 horas."
        ]
      },
      {
        id: "verbal-brandbook",
        title: "Guía de Tono y Estilo Verbal",
        description: "Definición del vocabulario, arquetipo y guías de respuesta para tu marca.",
        price: { USD: 200, COP: 800000 },
        accent: "#7928CA",
        timeline: "48h",
        deliverables: [
          "Definición del vocabulario, arquetipo y tono de voz.",
          "Guía de respuestas para atención al cliente y DMs.",
          "Plantillas de ganchos (Hooks) y llamadas a la acción.",
          "Documento de estilo editorial listo para tu equipo."
        ]
      }
    ]
  },
  {
    id: "meta",
    name: "Ecosistema Meta (Instagram & Facebook)",
    badge: "Meta",
    tagline: "Dominio absoluto de la comunidad visual y conversión directa.",
    description: "Posicionamiento visual impecable, gestión de comunidad y campañas de tráfico y conversión en Instagram y Facebook.",
    startingPrice: { COP: 1500000, USD: 350 },
    tiers: [
      {
        name: "Meta Orgánico",
        price: { COP: 1500000, USD: 350 },
        description: "Diseño y gestión de comunidad enfocado en estética y autoridad.",
        features: [
          "Diseño de Feed impecable y curaduría estética",
          "Gestión de comunidad, comentarios y DMs",
          "Estrategia de crecimiento orgánico",
          "Calendario mensual de publicaciones"
        ]
      },
      {
        name: "Meta Ads Starter",
        isRecommended: true,
        price: { COP: 2200000, USD: 550 },
        description: "Combinación de contenido orgánico con pauta publicitaria estratégica.",
        features: [
          "Gestión orgánica + Pauta publicitaria base",
          "Campañas de tráfico y mensajes a WhatsApp",
          "Diseño de 3 creativos de alto impacto para Ads",
          "Optimización semanal de presupuesto"
        ]
      },
      {
        name: "Meta Performance",
        price: { COP: 3500000, USD: 850 },
        description: "Embudos completos de adquisición y catálogos de venta.",
        features: [
          "Gestión Full Funnel Ads (Atracción, Retargeting)",
          "Pixel, API de conversiones y catálogos de ventas",
          "Set continuo de creativos para pauta",
          "Dashboard de métricas y ROAS en tiempo real"
        ]
      }
    ],
    microServices: [
      {
        id: "carousel-edu",
        title: "Diseño de 1 Carrusel Educativo (5 slides)",
        description: "Carrusel de alto valor diseñado para guardar y compartir en Instagram.",
        price: { USD: 40, COP: 150000 },
        accent: "#F06C83",
        timeline: "24h",
        deliverables: [
          "Diseño de 5 diapositivas con alta retención de lectura.",
          "Estructura de gancho, desarrollo y CTA final.",
          "Formato optimizado 1080x1350px para Instagram.",
          "Archivos listos para publicar + editable en Figma."
        ]
      },
      {
        id: "reel-edit",
        title: "Edición de 1 Reel IG de Alto Impacto",
        description: "Edición dinámica con subtítulos animados, efectos sonoros y música en tendencia.",
        price: { USD: 45, COP: 180000 },
        accent: "#FF7F07",
        timeline: "24h a 48h",
        deliverables: [
          "Edición dinámica con subtítulos animados y transiciones.",
          "Efectos sonoros, música en tendencia y corrección de color.",
          "Formato vertical 9:16 en alta definición.",
          "Entrega en 24 a 48 horas."
        ]
      },
      {
        id: "meta-shopping",
        title: "Setup de Tienda en Instagram/Facebook (Shopping)",
        description: "Activación del catálogo de productos y etiquetas de compra en tus publicaciones.",
        price: { USD: 100, COP: 400000 },
        accent: "#10B981",
        timeline: "48h",
        deliverables: [
          "Vinculación de catálogo de productos desde Shopify/WooCommerce.",
          "Activación de etiquetas de productos en posts y stories.",
          "Verificación de dominio en Meta Business Suite.",
          "Revisión técnica y aprobación de la tienda."
        ]
      },
      {
        id: "ads-banners-3",
        title: "Diseño de 3 Banners Estáticos para Ads",
        description: "Variaciones visuales para pruebas A/B en Meta Ads con alta tasa de clics.",
        price: { USD: 60, COP: 250000 },
        accent: "#2563EB",
        timeline: "24h",
        deliverables: [
          "3 variaciones visuales para pruebas A/B en Meta Ads.",
          "Formatos 1:1 (Feed) y 9:16 (Stories/Reels).",
          "Diseño enfocado en alta tasa de clics (CTR).",
          "Archivos finales en PNG/WebP de alta resolución."
        ]
      },
      {
        id: "social-templates-5",
        title: "Paquete de 5 Plantillas Editables en Figma/Canva",
        description: "Plantillas profesionales listas para que tu equipo edite posts rápidamente.",
        price: { USD: 90, COP: 350000 },
        accent: "#7928CA",
        timeline: "24h",
        deliverables: [
          "5 plantillas estratégicas en Figma o Canva.",
          "Componentes reutilizables adaptados a tu marca.",
          "Variantes para citas, anuncios, lanzamientos y testimonios.",
          "Video tutorial de 3 min para tu equipo."
        ]
      }
    ]
  }
];
