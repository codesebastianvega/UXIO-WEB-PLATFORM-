import { SubService } from './types';

export const experienceSubServices: SubService[] = [
  {
    slug: "service-design",
    parentSlug: "experience",
    title: "Service Design & Operaciones",
    tagline: "Optimización de procesos híbridos (Físico + Digital) y reducción del caos operativo.",
    description: "Analizamos cómo se mueve la información, los pedidos y el personal en tu negocio para diseñar flujos limpios, eliminar tiempos muertos y optimizar tus márgenes.",
    approach: "Conectamos la experiencia visible que vive tu cliente con los procesos internos y herramientas de tu equipo para lograr una operación sin fricciones.",
    startingPrice: "$600 USD",
    startingPriceCOP: "$2.500.000 COP",
    startingPriceUSD: "$600 USD",
    estimatedTimeline: "1 a 2 Semanas",
    accent: "#FFCC48",
    deliverables: [
      "Jornada de observación contextual (Shadowing) y entrevistas de fricción operativa",
      "Mapeo de cuellos de botella e ineficiencias de comunicación entre áreas",
      "Service Blueprint visual completo en Figma/Miro (Frontstage + Backstage)",
      "Manual operativo de estandarización de procesos y respuestas para el equipo",
      "Plan de integración de herramientas y roadmap tecnológico de implementación",
      "Sesión estratégica de alineación y entrega ejecutiva de 60 minutos"
    ],
    pricingTiers: [
      {
        id: "operational-audit",
        name: "Auditoría Operativa",
        price: "$2.500.000 COP",
        deposit: "$1.250.000 COP (50%)",
        priceCOP: "$2.500.000 COP",
        priceUSD: "$600 USD",
        depositCOP: "$1.250.000 COP",
        depositUSD: "$300 USD",
        timeline: "1 Semana",
        description: "Diagnóstico profundo in-situ y digital para destrabar fricciones operativas y cuellos de botella.",
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
        id: "service-blueprint",
        name: "Service Blueprint",
        price: "$3.500.000 COP",
        deposit: "$1.750.000 COP (50%)",
        priceCOP: "$3.500.000 COP",
        priceUSD: "$850 USD",
        depositCOP: "$1.750.000 COP",
        depositUSD: "$425 USD",
        timeline: "2 Semanas",
        isRecommended: true,
        popular: true,
        description: "Arquitectura completa del servicio de punta a punta: estandarización de procesos, software y manual operativo.",
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
    ],
    faqs: [
      {
        question: "¿Qué tipo de negocios se benefician de Service Design?",
        answer: "Cualquier empresa con interacción física y digital (restaurantes, clínicas, retail, inmobiliarias o servicios profesionales) donde la operación interna impacte la experiencia del cliente."
      },
      {
        question: "¿Cómo se realiza el Shadowing si mi equipo trabaja en remoto?",
        answer: "Hacemos sesiones de observación por pantalla compartida, analizamos los registros de tareas y grabamos los flujos de trabajo habituales de tus colaboradores."
      }
    ]
  },
  {
    slug: "ux-research",
    parentSlug: "experience",
    title: "UX Research & Validación",
    tagline: "Investigación profunda para entender a tus usuarios antes de invertir en código.",
    description: "Entendemos profundamente las motivaciones y fricciones de tus usuarios antes de gastar en desarrollo, o validamos un producto recién lanzado con métricas y testeos reales.",
    approach: "La intuición sin datos es un riesgo costoso. Conducimos sesiones estructuradas con clientes reales para extraer insights accionables y priorizar lo que de verdad mueve la aguja.",
    startingPrice: "$450 USD",
    startingPriceCOP: "$1.800.000 COP",
    startingPriceUSD: "$450 USD",
    estimatedTimeline: "1 a 2 Semanas",
    accent: "#FFCC48",
    deliverables: [
      "Reclutamiento segmentado de usuarios reales de tu Buyer Persona",
      "Grabaciones completas de pantalla y voz con análisis de micro-expresiones",
      "Customer Journey Maps y mapas de empatía validados con evidencia",
      "Métricas duras de tasa de éxito, tiempos de tarea y abandono",
      "Matriz de priorización de features RICE lista para tu equipo técnico",
      "Video Loom ejecutivo de 25 min con los hallazgos y soluciones clave"
    ],
    pricingTiers: [
      {
        id: "usability-testing",
        name: "Pruebas de Usabilidad",
        price: "$1.800.000 COP",
        deposit: "$900.000 COP (50%)",
        priceCOP: "$1.800.000 COP",
        priceUSD: "$450 USD",
        depositCOP: "$900.000 COP",
        depositUSD: "$225 USD",
        timeline: "1 Semana",
        description: "Testeo de usabilidad con personas reales para descubrir por qué se pierden, abandonan o no compran.",
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
        id: "discovery-sprint",
        name: "Discovery Sprint",
        price: "$3.500.000 COP",
        deposit: "$1.750.000 COP (50%)",
        priceCOP: "$3.500.000 COP",
        priceUSD: "$850 USD",
        depositCOP: "$1.750.000 COP",
        depositUSD: "$425 USD",
        timeline: "2 Semanas",
        isRecommended: true,
        popular: true,
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
    ],
    faqs: [
      {
        question: "¿Cómo reclutan a los usuarios para los tests?",
        answer: "Filtramos usuarios que coincidan exactamente con tu perfil de cliente ideal (Buyer Persona) o reclutamos de tu base de clientes activa mediante incentivos."
      },
      {
        question: "¿En qué formato nos entregan los resultados?",
        answer: "Entregamos un informe ejecutivo interactivo en Notion con clips de video seleccionados de los momentos de mayor fricción, métricas de usabilidad y un checklist priorizado."
      }
    ]
  },
  {
    slug: "ux-architecture",
    parentSlug: "experience",
    title: "Arquitectura UX (Software)",
    tagline: "Estructura, lógica y planos arquitectónicos para productos digitales sin fricción.",
    description: "Reducimos la carga cognitiva de tus usuarios definiendo la navegación, jerarquía y flujos de pantalla antes de programar, evitando retrabajos y deuda técnica.",
    approach: "Diseñamos la estructura lógica y funcional para que los desarrolladores construyan sin ambigüedades sobre planos claros y probados.",
    startingPrice: "$350 USD",
    startingPriceCOP: "$1.500.000 COP",
    startingPriceUSD: "$350 USD",
    estimatedTimeline: "1 a 2 Semanas",
    accent: "#FFCC48",
    deliverables: [
      "Auditoría técnica de 10 principios heurísticos de usabilidad",
      "Diagramas de flujo de usuario (User Flows) con todos los casos de error",
      "Mapa de navegación y arquitectura de información del sistema (Sitemap)",
      "Set de 15 a 20 pantallas wireframe estructurales en Figma",
      "Prototipo interactivo clickeable en baja fidelidad para pruebas",
      "Sesión de Handoff técnico de 60 min con tu equipo de desarrollo"
    ],
    pricingTiers: [
      {
        id: "heuristic-audit",
        name: "Auditoría Heurística",
        price: "$1.500.000 COP",
        deposit: "$750.000 COP (50%)",
        priceCOP: "$1.500.000 COP",
        priceUSD: "$350 USD",
        depositCOP: "$750.000 COP",
        depositUSD: "$175 USD",
        timeline: "1 Semana",
        description: "Evaluación técnica y forense de la usabilidad de tu software para eliminar sobrecarga cognitiva.",
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
        id: "wireframing-flows",
        name: "Wireframing & Flujos",
        price: "$2.800.000 COP",
        deposit: "$1.400.000 COP (50%)",
        priceCOP: "$2.800.000 COP",
        priceUSD: "$700 USD",
        depositCOP: "$1.400.000 COP",
        depositUSD: "$350 USD",
        timeline: "2 Semanas",
        isRecommended: true,
        popular: true,
        description: "Planos arquitectónicos completos y prototipo interactivo en baja fidelidad para programar sin fallas.",
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
    ],
    faqs: [
      {
        question: "¿Por qué los wireframes no tienen color ni diseño final?",
        answer: "Porque eliminar la estética visual permite evaluar con total objetividad la lógica, usabilidad y jerarquía de la información sin distracciones cosméticas."
      },
      {
        question: "¿Puedo entregar estos wireframes directamente a mis programadores?",
        answer: "Totalmente. Incluyen notas de comportamiento, estados de error, validaciones de formularios y flujos completos listos para desarrollo frontend y backend."
      }
    ]
  }
];
