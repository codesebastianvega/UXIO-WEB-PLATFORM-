import { PlatformGroup } from './types';

export const contentPlatformsTikTokGoogle: PlatformGroup[] = [
  {
    id: "tiktok",
    name: "Ecosistema TikTok",
    badge: "TikTok",
    tagline: "Lenguaje nativo, tendencias y crecimiento orgánico acelerado.",
    description: "Estrategias de contenido vertical nativo para conectar con audiencias masivas, viralidad y Spark Ads en TikTok.",
    startingPrice: { COP: 1200000, USD: 300 },
    tiers: [
      {
        name: "TikTok Base",
        price: { COP: 1200000, USD: 300 },
        description: "Contenido optimizado para el algoritmo con guiones y tendencias.",
        features: [
          "Guiones estructurados para 4 videos",
          "Curación de tendencias y audios virales",
          "Edición nativa dinámica para la app",
          "Estrategia de hashtags y SEO para TikTok"
        ]
      },
      {
        name: "TikTok Creator",
        isRecommended: true,
        price: { COP: 2500000, USD: 600 },
        description: "Escala con más volumen de video e integración de creadores UGC.",
        features: [
          "8 videos mensuales editados con guion",
          "Integración y gestión con creadores UGC",
          "Estrategia de crecimiento orgánico acelerado",
          "Análisis de retención segundo a segundo"
        ]
      },
      {
        name: "TikTok Ads Full",
        price: { COP: 3800000, USD: 950 },
        description: "Gestión publicitaria en TikTok Ads con Spark Ads y optimización de leads.",
        features: [
          "Gestión integral orgánica + Pauta en TikTok Ads",
          "Campañas Spark Ads con contenido de creadores",
          "Optimización de costo por lead y conversiones",
          "Reporte mensual de rendimiento y viralidad"
        ]
      }
    ],
    microServices: [
      {
        id: "tiktok-scripts-4",
        title: "Guionización de 4 TikToks Virales",
        description: "Guiones con ganchos magnéticos de primeros 3 segundos para maximizar retención.",
        price: { USD: 60, COP: 250000 },
        accent: "#F06C83",
        timeline: "24h",
        deliverables: [
          "4 guiones con ganchos magnéticos de primeros 3 segundos.",
          "Estructura de retención y llamado a la acción claro.",
          "Indicaciones de planos, gestos y textos en pantalla.",
          "Lista de audios en tendencia recomendados."
        ]
      },
      {
        id: "ugc-video",
        title: "Video UGC (Grabado por creador de contenido)",
        description: "Grabación auténtica de review o demostración de producto con creador.",
        price: { USD: 110, COP: 450000 },
        accent: "#FF7F07",
        timeline: "48h a 72h",
        deliverables: [
          "Grabación auténtica con creador alineado a tu público.",
          "Review, unboxing o demostración práctica del producto.",
          "Edición vertical con subtítulos y música.",
          "Derechos de uso comercial para redes y pauta publicitaria."
        ]
      },
      {
        id: "tiktok-seo-audit",
        title: "Auditoría de Perfil y Optimización SEO en TikTok",
        description: "Optimización de biografía, palabras clave y categorización para posicionar en búsquedas.",
        price: { USD: 50, COP: 200000 },
        accent: "#10B981",
        timeline: "24h",
        deliverables: [
          "Optimización de nombre, biografía y palabras clave de búsqueda.",
          "Revisión de portadas y categorización de listas de reproducción.",
          "Estrategia de palabras clave para posicionar en el buscador de TikTok.",
          "Checklist de buenas prácticas de publicación."
        ]
      },
      {
        id: "tiktok-trending-audio",
        title: "Búsqueda y Mapeo de Audios en Tendencia (Mensual)",
        description: "Reporte con 15 audios en tendencia ascendente e ideas de aplicación a tu nicho.",
        price: { USD: 40, COP: 150000 },
        accent: "#635BFF",
        timeline: "24h",
        deliverables: [
          "Reporte mensual con 15 audios en tendencia ascendente.",
          "Ideas prácticas de contenido aplicables a tu nicho.",
          "Enlaces directos a los audios en TikTok.",
          "Actualización mensual para aprovechar la ola algorítmica."
        ]
      }
    ]
  },
  {
    id: "google-youtube",
    name: "Ecosistema Google & YouTube",
    badge: "Google & YouTube",
    tagline: "Captura la intención de búsqueda e impacta con video.",
    description: "Estrategias de pauta publicitaria en Google Search, Performance Max, Display y anuncios audiovisuales en YouTube.",
    startingPrice: { COP: 1500000, USD: 350 },
    tiers: [
      {
        name: "Search Básico",
        price: { COP: 1500000, USD: 350 },
        description: "Captura clientes listos para comprar con red de búsqueda y palabras clave.",
        features: [
          "Setup integral de red de búsqueda en Google Ads",
          "Investigación exhaustiva de Keywords y negativas",
          "Optimización y redacción de copys de anuncios",
          "Configuración de extensiones y llamadas"
        ]
      },
      {
        name: "Performance Max",
        isRecommended: true,
        price: { COP: 2800000, USD: 700 },
        description: "Presencia en todo el ecosistema de Google con optimización algorítmica.",
        features: [
          "Campañas Performance Max en todo el ecosistema Google",
          "Anuncios en Red de Display y Gmail",
          "Integración con Google Analytics 4 y conversiones",
          "Optimización algorítmica de costo por adquisición"
        ]
      },
      {
        name: "YouTube Ads",
        price: { COP: 4000000, USD: 1000 },
        description: "Impacto audiovisual con anuncios de video y segmentación avanzada.",
        features: [
          "Banners y Pre-rolls en video para YouTube",
          "Segmentación avanzada por canales, intereses e intención",
          "Optimización de conversiones y visualizaciones",
          "Dashboard en Looker Studio en tiempo real"
        ]
      }
    ],
    microServices: [
      {
        id: "google-business-setup",
        title: "Setup y Optimización de Google Mi Negocio",
        description: "Posicionamiento local en Google Maps y plantilla de captación de reseñas.",
        price: { USD: 90, COP: 350000 },
        accent: "#10B981",
        timeline: "24h a 48h",
        deliverables: [
          "Configuración completa del perfil de Google Business.",
          "Optimización de categorías, servicios, fotos y horarios.",
          "Estrategia y plantilla para captación de reseñas de 5 estrellas.",
          "Geolocalización para aparecer en búsquedas locales de Google Maps."
        ]
      },
      {
        id: "seo-blog-article",
        title: "Redacción de 1 Artículo SEO (Blog)",
        description: "Artículo de 1.200 a 1.500 palabras optimizado para posicionar en buscadores.",
        price: { USD: 80, COP: 320000 },
        accent: "#F06C83",
        timeline: "48h",
        deliverables: [
          "Artículo de 1.200 a 1.500 palabras optimizado para SEO.",
          "Investigación de palabras clave con volumen y baja dificultad.",
          "Estructura H1, H2, H3 con meta-título y meta-descripción.",
          "Listo para publicar en WordPress, Webflow o tu CMS."
        ]
      },
      {
        id: "google-display-banners",
        title: "Set de Banners Adaptables para Google Display",
        description: "Creativos en todos los formatos oficiales de Google Display para remarketing.",
        price: { USD: 75, COP: 300000 },
        accent: "#2563EB",
        timeline: "24h",
        deliverables: [
          "Set de creativos en todos los tamaños oficiales de Google Display.",
          "Formatos rectangulares, rascacielos y cuadrados para móviles y desktop.",
          "Diseño optimizado para captar atención y generar clics.",
          "Archivos finales en JPG/PNG ultraligeros para carga rápida."
        ]
      },
      {
        id: "keyword-research-audit",
        title: "Auditoría de Palabras Clave (Keyword Research)",
        description: "Matriz de 50+ palabras clave con volumen, dificultad y términos negativos.",
        price: { USD: 110, COP: 450000 },
        accent: "#FF7F07",
        timeline: "48h",
        deliverables: [
          "Matriz completa de 50+ palabras clave con volumen e intención.",
          "Mapeo de palabras clave negativas para no desperdiciar pauta.",
          "Análisis de términos que usa tu competencia directa.",
          "Guía de priorización por rentabilidad y facilidad de posicionamiento."
        ]
      },
      {
        id: "ga4-tech-setup",
        title: "Setup Técnico de Google Analytics 4",
        description: "Instalación limpia, eventos personalizados y embudos de conversión en GA4.",
        price: { USD: 100, COP: 400000 },
        accent: "#635BFF",
        timeline: "24h",
        deliverables: [
          "Instalación y configuración sin afectar la velocidad de carga.",
          "Creación de eventos personalizados (Clicks, Formularios, Compras).",
          "Configuración de embudos de conversión y vinculación con Google Ads.",
          "Verificación con Google Tag Assistant en tiempo real."
        ]
      }
    ]
  }
];
