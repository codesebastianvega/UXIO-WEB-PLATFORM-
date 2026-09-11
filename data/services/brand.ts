import { ServiceItem } from './types';
import { brandSubServices } from './brand-subservices';

export const brandService: ServiceItem = {
  slug: "brand",
  title: "Identidad & Marca",
  subtitle: "Sistemas visuales que construyen autoridad.",
  approach: "Construimos identidades de marca sólidas, coherentes y memorables. No hacemos 'logos bonitos'; creamos ecosistemas visuales y verbales listos para escalar, conectar con tu audiencia y dominar tu industria.",
  accent: "#FE385B",
  capabilities: [
    {
      id: "brand-strategy",
      slug: "brand-strategy",
      title: "Estrategia de Marca & Naming",
      description: "Encontramos el nombre perfecto y definimos la personalidad y mensaje de tu negocio para conectar con tu cliente ideal.",
      imageUrl: "/services/cards/brand-strategy-naming.jpg",
      badge: "Estrategia & Naming",
      startingPrice: { COP: 1200000, USD: 300 },
      timeline: "1 a 2 Semanas",
      tiers: [
        { 
          name: "Naming Sprint", 
          price: { COP: 1200000, USD: 300 }, 
          description: "Metodología creativa para encontrar un nombre memorable, registrable y con dominio disponible.",
          features: [
            "Taller de descubrimiento y mapa de territorio conceptual",
            "Generación de 15 a 20 propuestas de nombres categorizados",
            "Verificación de disponibilidad de dominios (.com / .co)",
            "Chequeo previo de viabilidad fonética y de pronunciación",
            "Filtro de nombres por arquetipo de marca y categoría"
          ] 
        },
        { 
          name: "Estrategia Completa", 
          isRecommended: true, 
          price: { COP: 2500000, USD: 600 }, 
          description: "Definición profunda de la personalidad, mensaje y arquitectura verbal de tu marca.",
          features: [
            "Todo lo incluido en el Naming Sprint",
            "Definición de arquetipo, pilares y tono de voz",
            "Manifiesto de marca y propuesta de valor única (UVP)",
            "Guía de pilares narrativos y mensajes clave por audiencia",
            "Deck estratégico en Notion / PDF listo para el equipo"
          ] 
        }
      ]
    },
    {
      id: "visual-identity",
      slug: "visual-identity",
      title: "Diseño de Logo & Identidad Visual",
      description: "Logotipo profesional, paleta de colores, tipografías y manual de marca para que tu negocio transmita prestigio y autoridad.",
      imageUrl: "/services/cards/brand-logo-design.jpg",
      badge: "Logo & Manual",
      startingPrice: { COP: 1400000, USD: 350 },
      timeline: "2 a 3 Semanas",
      tiers: [
        { 
          name: "Logo & Esenciales", 
          price: { COP: 1400000, USD: 350 }, 
          description: "Creación o rediseño de logotipo con variantes cromáticas y tipográficas listas para producción.",
          features: [
            "Diseño de logotipo principal, secundario e isotipo",
            "3 direcciones conceptuales desarrolladas en contexto",
            "Paleta cromática con códigos de color para pantalla e impresión",
            "Selección tipográfica institucional (Primaria y secundaria)",
            "Manual básico de uso de marca en PDF interactivo",
            "Exportación de archivos en todos los formatos (AI, SVG, PNG, EPS)"
          ] 
        },
        { 
          name: "Sistema de Identidad Completo", 
          isRecommended: true, 
          price: { COP: 2900000, USD: 725 }, 
          description: "Ecosistema visual exhaustivo con patrones, iconografía, mockups y manual de identidad 360°.",
          features: [
            "Todo lo incluido en el paquete Logo & Esenciales",
            "Sistema de patrones gráficos, texturas y elementos visuales de apoyo",
            "Set de 20 iconos corporativos personalizados",
            "Mockups de aplicación real en papelería, web y redes sociales",
            "Guía de estilo para fotografía e iconografía corporativa",
            "Archivos fuente editables + biblioteca organizada en la nube"
          ] 
        }
      ]
    },
    {
      id: "packaging-apps",
      slug: "packaging-apps",
      title: "Empaques, Etiquetas & Piezas Digitales",
      description: "Llevamos tu marca al mundo físico y digital: diseño de cajas, etiquetas para productos, plantillas para redes y papelería corporativa.",
      imageUrl: "/services/cards/brand-packaging-collateral.jpg",
      badge: "Empaques & Digital",
      startingPrice: { COP: 1200000, USD: 300 },
      timeline: "1 a 2 Semanas",
      tiers: [
        { 
          name: "Kit Digital", 
          price: { COP: 1200000, USD: 300 }, 
          description: "Plantillas y piezas digitales para vestir tus canales con coherencia absoluta.",
          features: [
            "Diseño de portadas y banners para LinkedIn, Twitter y YouTube",
            "5 plantillas editables en Figma para publicaciones en redes",
            "Firmas de correo corporativas en HTML responsive",
            "Plantilla para cotizaciones y documentos en PDF",
            "Guía de exportación rápida para tu equipo"
          ] 
        },
        { 
          name: "Diseño de Empaque", 
          isRecommended: true, 
          price: { COP: 2200000, USD: 550 }, 
          description: "Diseño de empaques, etiquetas y unboxing de alto impacto listos para imprenta.",
          features: [
            "Diseño de troquel o caja con especificaciones técnicas",
            "Diseño de etiquetas, stickers y cintas de empaque",
            "Mockups hiperrealistas en 3D para validación visual",
            "Archivos finales en PDF de alta resolución listos para imprenta",
            "Acompañamiento técnico con el proveedor de impresión"
          ] 
        }
      ]
    }
  ],
  microServices: [
    { 
      id: "logo-creation", 
      title: "Creación de Logotipo Express", 
      description: "Diseño de logotipo profesional desde cero con 3 propuestas vectoriales y variantes.", 
      price: { USD: 200, COP: 800000 },
      accent: "#FE385B",
      timeline: "48h a 72h",
      deliverables: [
        "3 propuestas conceptuales de logotipo desarrolladas en contexto real.",
        "Isotipo, logotipo horizontal, vertical y versión en negativo/positivo.",
        "Archivos vectoriales listos para impresión y web (AI, SVG, PNG, WebP).",
        "Mini guía de color (HEX/RGB/CMYK) y tipografía corporativa."
      ]
    },
    { 
      id: "logo-redesign", 
      title: "Rediseño & Vectorización de Logo", 
      description: "Modernización, ajuste geométrico y digitalización en alta definición de tu logo actual.", 
      price: { USD: 120, COP: 450000 },
      accent: "#FF7F07",
      timeline: "24h a 48h",
      deliverables: [
        "Re-dibujado vectorial geométrico y corrección de curvas y nodos.",
        "Ajuste de espaciado (Kerning) tipográfico y alineación de isotipo.",
        "Exportación en todos los formatos vectoriales y transparentes.",
        "Optimización para favicons, app icons y perfiles sociales."
      ]
    },
    { 
      id: "social-kit", 
      title: "Set de Redes Sociales (Figma)", 
      description: "5 plantillas estratégicas listas para que tu equipo edite.", 
      price: { USD: 100, COP: 400000 },
      accent: "#10B981",
      timeline: "24h",
      deliverables: [
        "5 plantillas editables en Figma (Posts + Stories).",
        "Diseño alineado a la identidad y tono de tu marca.",
        "Componentes reutilizables con variantes de texto e imagen.",
        "Mini video tutorial de 3 min para tu equipo de marketing."
      ]
    },
    { 
      id: "pitch-deck", 
      title: "Diseño de Pitch Deck", 
      description: "Diseño premium de tu presentación comercial o para inversionistas (10 slides).", 
      price: { USD: 250, COP: 1000000 },
      accent: "#7928CA",
      timeline: "48h a 72h",
      deliverables: [
        "Diseño de 10 diapositivas de alto impacto visual y narrativa.",
        "Diagramación de métricas, gráficos y datos financieros.",
        "Formato editable en Figma / Google Slides / PDF.",
        "Versión para proyección 16:9 en 4K y versión ligera para email."
      ]
    }
  ],
  subServices: brandSubServices,
};
