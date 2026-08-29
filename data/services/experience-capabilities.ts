import { Capability, MicroService } from './types';

export const experienceCapabilities: Capability[] = [
  {
    id: "service-design",
    slug: "service-design",
    title: "Service Design & Operaciones",
    description: "Optimización de procesos híbridos (Físico + Digital). Analizamos cómo se mueve la información y el personal en tu negocio para evitar el caos operativo y fugas de rentabilidad.",
    startingPrice: { USD: 600, COP: 2500000 },
    timeline: "1-2 Semanas",
    tiers: [
      { 
        name: "Auditoría Operativa", 
        price: { USD: 600, COP: 2500000 }, 
        description: "Diagnóstico profundo in-situ y digital para destrabar fricciones operativas y cuellos de botella entre tu equipo y tus clientes.",
        features: [
          "Jornada de observación contextual (Shadowing) con tu equipo",
          "Entrevistas estructuradas con líderes para detectar fricción",
          "Auditoría de puntos de contacto cliente-empleado (Front & Backstage)",
          "Mapeo de fugas de tiempo y cuellos de botella en herramientas",
          "Matriz de Impacto vs. Esfuerzo con Quick Wins inmediatos",
          "Informe ejecutivo en Notion con plan de acción paso a paso",
          "Sesión estratégica de entrega de 60 min con el equipo"
        ] 
      },
      { 
        name: "Service Blueprint", 
        isRecommended: true, 
        price: { USD: 850, COP: 3500000 }, 
        description: "Arquitectura completa del servicio de punta a punta: estandarización de procesos, integración de software y manual operativo.",
        features: [
          "Mapeo visual integral en Figma/Miro de todo el ecosistema",
          "Diagramación de procesos visibles (Customer) y ocultos (Backstage)",
          "Definición de puntos de dolor críticos y momentos clave del cliente",
          "Mapeo de flujos de datos y automatización entre canales físicos y digitales",
          "Estandarización de protocolos y plantillas para el personal",
          "Manual operativo interactivo para onboarding de nuevos empleados",
          "Roadmap de adopción tecnológica + 2 semanas de soporte"
        ] 
      }
    ]
  },
  {
    id: "ux-research",
    slug: "ux-research",
    title: "UX Research & Validación",
    description: "Investigación profunda para entender a tus usuarios antes de invertir en desarrollo o validar un producto recién lanzado con métricas reales.",
    startingPrice: { USD: 450, COP: 1800000 },
    timeline: "1-2 Semanas",
    tiers: [
      { 
        name: "Pruebas de Usabilidad", 
        price: { USD: 450, COP: 1800000 }, 
        description: "Testeo de usabilidad con personas reales para descubrir por qué tus usuarios se pierden, abandonan o no compran.",
        features: [
          "Reclutamiento filtrado de 5 usuarios de tu Buyer Persona",
          "Diseño de guión de pruebas y tareas críticas de conversión",
          "Grabaciones completas de pantalla y voz con análisis cualitativo",
          "Métricas duras de tasa de éxito, tiempos y puntos de abandono",
          "Heatmaps de clicks y mapa de navegación real de los usuarios",
          "Loom ejecutivo de 25 min explicando los hallazgos críticos",
          "Checklist de correcciones prioritarias para entregar a desarrollo"
        ] 
      },
      { 
        name: "Discovery Sprint", 
        isRecommended: true, 
        price: { USD: 850, COP: 3500000 }, 
        description: "Investigación holística de mercado y usuario para validar tu producto antes de gastar millones en código.",
        features: [
          "8 a 10 entrevistas a profundidad 1-a-1 con clientes y prospectos",
          "Mapas de Empatía detallados: dolores, motivadores y objeciones",
          "Customer Journey Map de 360° con todas las etapas de decisión",
          "Benchmark competitivo de UX analizando fortalezas y debilidades",
          "Matriz de propuesta de valor y validación de disposición a pagar (WTP)",
          "Definición del Product Backlog con priorización RICE",
          "Taller de co-creación y presentación ejecutiva con stakeholders"
        ] 
      }
    ]
  },
  {
    id: "ux-architecture",
    slug: "ux-architecture",
    title: "Arquitectura UX (Software)",
    description: "Estructura, lógica y planos arquitectónicos para productos digitales. Reducimos la carga cognitiva de tus usuarios y eliminamos retrabajos.",
    startingPrice: { USD: 350, COP: 1500000 },
    timeline: "1-2 Semanas",
    tiers: [
      { 
        name: "Auditoría Heurística", 
        price: { USD: 350, COP: 1500000 }, 
        description: "Evaluación técnica y forense de la usabilidad de tu software para eliminar la sobrecarga cognitiva y optimizar la retención.",
        features: [
          "Evaluación forense bajo los 10 principios de Nielsen Norman Group",
          "Auditoría de consistencia de navegación, jerarquía y accesibilidad",
          "Análisis de fricción en flujos clave (Registro, Onboarding, Checkout)",
          "Detección de patrones confusos y mensajes de error frustrantes",
          "Métricas de carga cognitiva y sugerencias de simplificación",
          "Figma con capturas anotadas mostrando problema y solución visual",
          "Loom de 20 min explicando cada recomendación para tu programador"
        ] 
      },
      { 
        name: "Wireframing & Flujos", 
        isRecommended: true, 
        price: { USD: 700, COP: 2800000 }, 
        description: "Planos arquitectónicos completos y prototipo interactivo en baja fidelidad para construir tu software sin errores ni retrabajos.",
        features: [
          "Arquitectura de información completa y mapa de navegación (Sitemap)",
          "Diagramas de flujo de usuario (User Flows) con casos edge y errores",
          "Hasta 15-20 pantallas wireframe estructurales en Figma (Geometría limpia)",
          "Prototipo clickeable interactivo para validar la lógica antes de programar",
          "Definición de componentes reutilizables y jerarquía de datos",
          "Especificaciones funcionales y notas técnicas para desarrollo",
          "Sesión de traspaso técnico (Handoff) de 60 min con tus ingenieros"
        ] 
      }
    ]
  }
];

export const experienceMicroServices: MicroService[] = [
  { 
    id: "ux-roast", 
    title: "UX Roast (Video Teardown)", 
    description: "Grabación de 20 min analizando los errores de tu web/app.", 
    price: { USD: 85, COP: 350000 },
    accent: "#FFCC48",
    timeline: "24h",
    deliverables: [
      "Video explicativo de 20 min analizando tu producto pantalla por pantalla.",
      "Detección de puntos de fricción, fugas y caídas de conversión.",
      "Matriz de soluciones inmediatas (Quick Wins) sin rehacer el código.",
      "Recomendaciones prácticas de jerarquía visual y redacción de copy."
    ]
  },
  { 
    id: "consulting-1on1", 
    title: "Consultoría de Fricción (1hr)", 
    description: "Sesión 1 a 1 para destrabar flujos y resolver dudas de UX.", 
    price: { USD: 45, COP: 180000 },
    accent: "#FF7F07",
    timeline: "En vivo",
    deliverables: [
      "Sesión 1-a-1 de 60 minutos en vivo por Google Meet.",
      "Revisión en pantalla compartida de tus flujos o wireframes actuales.",
      "Estrategias de simplificación cognitiva para aumentar retención.",
      "Grabación completa de la sesión + notas estructuradas en Notion."
    ]
  },
  { 
    id: "ux-surveys", 
    title: "Setup de Encuestas sin Sesgo", 
    description: "Diseño de 10 preguntas estratégicas para descubrir por qué compran o se van.", 
    price: { USD: 100, COP: 400000 },
    accent: "#10B981",
    timeline: "24 a 48h",
    deliverables: [
      "Batería de 10 preguntas sin sesgo cognitivo formuladas por expertos.",
      "Configuración e integración en Typeform, Google Forms o Tally.",
      "Lógica condicional de salto y segmentación de usuarios clave.",
      "Plantilla estructurada de análisis de respuestas para toma de decisiones."
    ]
  },
  { 
    id: "5-sec-test", 
    title: "Test de 5 Segundos", 
    description: "Validación rápida de claridad de tu Landing Page con usuarios reales.", 
    price: { USD: 125, COP: 500000 },
    accent: "#635BFF",
    timeline: "24h",
    deliverables: [
      "Testeo de primer impacto con 10 usuarios reales de tu segmento.",
      "Métricas de claridad y recordación de la propuesta de valor.",
      "Mapa de calor y análisis de los primeros elementos que captan atención.",
      "Reporte ejecutivo con plan de ajuste de titulares, botones y jerarquía."
    ]
  }
];
