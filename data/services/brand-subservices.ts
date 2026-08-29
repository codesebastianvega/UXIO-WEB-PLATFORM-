import { SubService } from './types';

export const brandSubServices: SubService[] = [
  {
    slug: "brand-strategy",
    parentSlug: "brand",
    title: "Naming & Estrategia de Marca",
    tagline: "Encontramos el nombre perfecto y definimos la personalidad de tu negocio.",
    description: "Construimos los cimientos verbales y estratégicos de tu marca para que comunique con claridad, autoridad y diferenciación desde el primer día.",
    approach: "Un gran producto con un mal nombre o un mensaje confuso pierde clientes antes de empezar. Definimos quién eres y por qué le importas al mundo.",
    startingPrice: "$300 USD",
    startingPriceCOP: "$1.200.000 COP",
    startingPriceUSD: "$300 USD",
    estimatedTimeline: "1 a 2 Semanas",
    accent: "#FE385B",
    deliverables: [
      "Taller de descubrimiento conceptual y análisis de competidores",
      "Batería de 15-20 propuestas de nombres con verificación de dominios",
      "Arquetipo de marca, tono de voz y matriz de personalidad",
      "Manifiesto de marca y propuesta de valor única (UVP)",
      "Documento de lineamientos estratégicos en Notion / PDF"
    ],
    pricingTiers: [
      {
        id: "naming-sprint",
        name: "Naming Sprint",
        price: "$1.200.000 COP",
        deposit: "$600.000 COP (50%)",
        priceCOP: "$1.200.000 COP",
        priceUSD: "$300 USD",
        depositCOP: "$600.000 COP",
        depositUSD: "$150 USD",
        timeline: "1 Semana",
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
        id: "full-strategy",
        name: "Estrategia Completa",
        price: "$2.500.000 COP",
        deposit: "$1.250.000 COP (50%)",
        priceCOP: "$2.500.000 COP",
        priceUSD: "$600 USD",
        depositCOP: "$1.250.000 COP",
        depositUSD: "$300 USD",
        timeline: "2 Semanas",
        isRecommended: true,
        popular: true,
        description: "Definición profunda de la personalidad, mensaje y arquitectura verbal de tu marca.",
        features: [
          "Todo lo incluido en el Naming Sprint",
          "Definición de arquetipo, pilares y tono de voz",
          "Manifiesto de marca y propuesta de valor única (UVP)",
          "Guía de pilares narrativos y mensajes clave por audiencia",
          "Deck estratégico en Notion / PDF listo para el equipo"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Los nombres propuestos están disponibles como dominio?",
        answer: "Sí, cada propuesta de nombre que te presentamos viene verificada previamente con disponibilidad en dominios (.com, .co o la extensión deseada) y sin conflictos evidentes de marcas."
      }
    ]
  },
  {
    slug: "visual-identity",
    parentSlug: "brand",
    title: "Diseño de Logo & Identidad Visual",
    tagline: "Creación desde cero y rediseño de marcas que transmiten confianza y autoridad.",
    description: "Diseñamos logotipos memorables y sistemas visuales completos con paletas cromáticas calibradas y manuales de marca para garantizar consistencia total.",
    approach: "Tu logotipo y sistema visual son la primera impresión de tu negocio. Diseñamos con geometría precisa y tipografía de vanguardia para conectar al instante.",
    startingPrice: "$350 USD",
    startingPriceCOP: "$1.400.000 COP",
    startingPriceUSD: "$350 USD",
    estimatedTimeline: "2 a 3 Semanas",
    accent: "#FE385B",
    deliverables: [
      "Diseño de logotipo principal, secundario, isotipo y favicon",
      "3 direcciones conceptuales desarrolladas en contexto",
      "Paleta de color corporativa con tokens digitales e impresos",
      "Selección y jerarquía tipográfica para web y marketing",
      "Brandbook / Manual de identidad de marca completo",
      "Paquete de archivos vectoriales (AI, SVG, EPS, PNG, WebP)"
    ],
    pricingTiers: [
      {
        id: "logo-essentials",
        name: "Logo & Esenciales",
        price: "$1.400.000 COP",
        deposit: "$700.000 COP (50%)",
        priceCOP: "$1.400.000 COP",
        priceUSD: "$350 USD",
        depositCOP: "$700.000 COP",
        depositUSD: "$175 USD",
        timeline: "1 a 2 Semanas",
        description: "Creación o rediseño de logotipo con variantes cromáticas y tipográficas listas para producción.",
        features: [
          "Diseño de logotipo principal, secundario e isotipo",
          "3 direcciones conceptuales desarrolladas en contexto",
          "Paleta cromática con códigos HEX, RGB y CMYK",
          "Selección tipográfica y jerarquía para web y print",
          "Exportación vectorial en AI, SVG, EPS, PNG y WebP"
        ]
      },
      {
        id: "full-brand-system",
        name: "Sistema Completo",
        price: "$3.800.000 COP",
        deposit: "$1.900.000 COP (50%)",
        priceCOP: "$3.800.000 COP",
        priceUSD: "$950 USD",
        depositCOP: "$1.900.000 COP",
        depositUSD: "$475 USD",
        timeline: "3 Semanas",
        isRecommended: true,
        popular: true,
        description: "Identidad visual de clase mundial con manual de marca y biblioteca de activos lista para escalar.",
        features: [
          "Diseño de logotipo, isotipo, versiones y patrones visuales",
          "Brandbook interactivo (Manual de normas y uso de marca)",
          "Set de aplicaciones digitales básicas (Web, Email, Social)",
          "Guía de estilo para fotografía e iconografía corporativa",
          "Archivos fuente editables + biblioteca organizada en la nube"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Hacen tanto creación desde cero como rediseño de logo?",
        answer: "Sí. Para marcas nuevas creamos desde cero sobre bases conceptuales sólidas, y para marcas existentes pulimos la geometría, modernizamos la tipografía y vectorizamos en alta definición conservando la esencia."
      },
      {
        question: "¿Cuántas propuestas de logotipo recibo?",
        answer: "Presentamos 2 a 3 direcciones visuales sólidas y totalmente desarrolladas en contexto para que elijas la que mejor representa tu visión, y sobre esa hacemos rondas de pulido."
      }
    ]
  },
  {
    slug: "packaging-apps",
    parentSlug: "brand",
    title: "Empaques & Aplicaciones",
    tagline: "Llevamos tu marca al mundo físico y digital con piezas listas para producción.",
    description: "Diseñamos empaques, etiquetas, firmas de correo, plantillas de redes y material corporativo que llevan la experiencia de tu marca al siguiente nivel.",
    approach: "El momento del unboxing o la primera interacción digital definen la percepción de calidad. Cuidamos cada detalle técnico de impresión y visualización.",
    startingPrice: "$300 USD",
    startingPriceCOP: "$1.200.000 COP",
    startingPriceUSD: "$300 USD",
    estimatedTimeline: "1 a 2 Semanas",
    accent: "#FE385B",
    deliverables: [
      "Planos de troqueles y cajas listos para producción con imprenta",
      "Diseño de etiquetas, sellos, stickers y papelería corporativa",
      "Plantillas editables en Figma para publicaciones en redes sociales",
      "Firmas de correo corporativas en HTML responsive",
      "Mockups hiperrealistas en 3D para validación previa"
    ],
    pricingTiers: [
      {
        id: "digital-kit",
        name: "Kit Digital",
        price: "$1.200.000 COP",
        deposit: "$600.000 COP (50%)",
        priceCOP: "$1.200.000 COP",
        priceUSD: "$300 USD",
        depositCOP: "$600.000 COP",
        depositUSD: "$150 USD",
        timeline: "1 Semana",
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
        id: "packaging-design",
        name: "Diseño de Empaque",
        price: "$2.200.000 COP",
        deposit: "$1.100.000 COP (50%)",
        priceCOP: "$2.200.000 COP",
        priceUSD: "$550 USD",
        depositCOP: "$1.100.000 COP",
        depositUSD: "$275 USD",
        timeline: "2 Semanas",
        isRecommended: true,
        popular: true,
        description: "Diseño de empaques, etiquetas y unboxing de alto impacto listos para imprenta.",
        features: [
          "Diseño de troquel o caja con especificaciones técnicas",
          "Diseño de etiquetas, stickers y cintas de empaque",
          "Mockups hiperrealistas en 3D para validación visual",
          "Archivos finales en PDF de alta resolución listos para imprenta",
          "Acompañamiento técnico con el proveedor de impresión"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Se encargan de la impresión física?",
        answer: "Entregamos los archivos técnicos finales con guías de corte, sangrados y perfiles de color listos para que cualquier imprenta los produzca sin errores, y coordinamos especificaciones técnicas con tu impresor."
      }
    ]
  }
];
