import { SubService } from './types';

export const solutionsSubServices: SubService[] = [
  {
    slug: "venture-builder",
    parentSlug: "solutions",
    title: "Venture Builder (End-to-End)",
    tagline: "Construimos plataformas complejas, SaaS y aplicaciones robustas desde cero.",
    description: "Operamos como tu propio departamento de tecnología e ingeniería de producto para incubar, diseñar y lanzar software escalable de clase mundial.",
    approach: "Eliminamos la necesidad de coordinar 5 agencias distintas. Un solo equipo senior de UXIO construyendo tu visión de principio a fin.",
    startingPrice: "Cotizar según alcance",
    startingPriceCOP: "Cotizar según alcance",
    startingPriceUSD: "Custom Quote",
    estimatedTimeline: "8 a 12 Semanas",
    accent: "#00F0FF",
    deliverables: [
      "Discovery técnico, arquitectura de software y diagramas de bases de datos",
      "Diseño UX/UI completo en Figma (Design System, Wireframes y Prototipos)",
      "Desarrollo Full-Stack en Next.js, Node.js, Python o Go con Supabase / AWS",
      "Infraestructura cloud con pipelines de CI/CD automatizados",
      "Pasarelas de pagos (Stripe, MercadoPago, Wompi) y autenticación segura",
      "Sesiones semanales de demo y 60 días de garantía y soporte técnico"
    ],
    pricingTiers: [
      {
        id: "mvp-builder",
        name: "MVP Builder",
        price: "Cotizar según alcance",
        deposit: "50% de inicio · 50% al entregar",
        priceCOP: "Cotizar según alcance",
        priceUSD: "Custom Quote",
        depositCOP: "50% de inicio",
        depositUSD: "50% deposit",
        timeline: "8 a 12 Semanas",
        description: "El sprint definitivo para fundadores que van a validar y levantar capital.",
        features: [
          "Discovery técnico y funcional completo",
          "Diseño de arquitectura de software escalable",
          "Desarrollo ágil full-stack en 8-12 semanas",
          "Despliegue en producción y pruebas de carga"
        ]
      },
      {
        id: "dedicated-squad",
        name: "Dedicated Squad",
        price: "Tarifa Mensual / Retainer",
        deposit: "Mes anticipado",
        priceCOP: "Tarifa Mensual",
        priceUSD: "Monthly Retainer",
        depositCOP: "Mes anticipado",
        depositUSD: "Monthly advance",
        timeline: "Mes a Mes (Renovable)",
        isRecommended: true,
        popular: true,
        description: "Equipo senior dedicado exclusivamente al desarrollo y evolución continua de tu plataforma.",
        features: [
          "1 Dev Senior Full-Stack + 1 Diseñador UX + 1 Product Manager",
          "Asignación 100% exclusiva para tu empresa",
          "Iteración continua, CI/CD y escalabilidad técnica",
          "Sprint reviews semanales y roadmap vivo en Jira/Linear"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Cómo nos comunicamos durante el desarrollo del proyecto?",
        answer: "Creamos un canal privado de Slack o WhatsApp para comunicación diaria, sprints semanales de demo y acceso continuo a staging en tiempo real."
      },
      {
        question: "¿El código fuente y la propiedad intelectual son nuestros?",
        answer: "100%. Todo el código, repositorios en GitHub, bases de datos y archivos de diseño se transfieren a tu propiedad absoluta tras el lanzamiento."
      }
    ]
  },
  {
    slug: "hardware-wearables",
    parentSlug: "solutions",
    title: "Hardware, Wearables & IoT",
    tagline: "Llevamos tu producto más allá del teléfono a dispositivos conectados.",
    description: "Diseñamos y desarrollamos experiencias digitales para smartwatches, terminales punto de venta (POS), kioscos interactivos y hardware conectado.",
    approach: "El hardware sin una interfaz intuitiva genera fricción. Creamos experiencias táctiles y hápticas de alta velocidad que cualquiera puede usar.",
    startingPrice: "Cotizar según hardware",
    startingPriceCOP: "Cotizar según hardware",
    startingPriceUSD: "Custom Quote",
    estimatedTimeline: "4 a 8 Semanas",
    accent: "#00F0FF",
    deliverables: [
      "Investigación de ergonomía digital para pantallas de muñeca o terminales POS",
      "Software táctil y apps nativas para Apple Watch (watchOS), WearOS o Android POS",
      "Integración de protocolos Bluetooth Low Energy (BLE), NFC y RFID",
      "Sincronización bidireccional de datos en tiempo real con nube central",
      "Pruebas de estrés de conectividad, consumo de batería y latencia"
    ],
    pricingTiers: [
      {
        id: "wearable-ux",
        name: "Wearable UX/UI",
        price: "Cotizar según dispositivo",
        deposit: "50% de inicio · 50% al entregar",
        priceCOP: "Cotizar",
        priceUSD: "Custom Quote",
        depositCOP: "50% de inicio",
        depositUSD: "50% deposit",
        timeline: "4 a 6 Semanas",
        description: "Diseño ergonómico de interfaces de alto contraste para smartwatches y POS.",
        features: [
          "Investigación de ergonomía digital y ángulos de visión",
          "Interfaces de alto contraste para pantallas reducidas",
          "Prototipos interactivos con micro-interacciones hápticas",
          "Diseño para Apple Watch, WearOS y terminales POS"
        ]
      },
      {
        id: "native-integration",
        name: "Integración Nativa & IoT",
        price: "Cotizar según stack",
        deposit: "50% de inicio · 50% al entregar",
        priceCOP: "Cotizar",
        priceUSD: "Custom Quote",
        depositCOP: "50% de inicio",
        depositUSD: "50% deposit",
        timeline: "6 a 8 Semanas",
        isRecommended: true,
        popular: true,
        description: "Desarrollo de software nativo con conexión Bluetooth, NFC y sincronización en tiempo real.",
        features: [
          "Conexión Bluetooth Low Energy (BLE) y protocolos NFC",
          "Sincronización de telemetría y datos en tiempo real",
          "Desarrollo nativo e integración con firmware/IoT",
          "Pruebas de consumo energético y estabilidad de conexión"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué tipo de dispositivos y hardware soportan?",
        answer: "Desarrollamos para smartwatches (Apple Watch, Wear OS), terminales POS inteligentes (Sunmi, Clover, PAX), tótems táctiles y placas IoT (ESP32, Raspberry Pi)."
      }
    ]
  },
  {
    slug: "phygital-experiences",
    parentSlug: "solutions",
    title: "Experiencias Phygitales (Físico + Digital)",
    tagline: "Ecosistemas interactivos donde el mundo físico interactúa con el digital.",
    description: "Diseñamos ecosistemas donde los espacios físicos se potencian con pantallas, gamificación, sensores y automatización para retail, restaurantes y turismo.",
    approach: "La experiencia presencial se vuelve memorable cuando se amplifica con interfaces digitales ágiles, pedidos autónomos y fidelización.",
    startingPrice: "Cotizar según espacio",
    startingPriceCOP: "Cotizar según espacio",
    startingPriceUSD: "Custom Quote",
    estimatedTimeline: "4 a 10 Semanas",
    accent: "#00F0FF",
    deliverables: [
      "Service Blueprint híbrido conectando el espacio físico con los puntos de contacto digitales",
      "Software táctil para kioskos de autoservicio o tótems interactivos",
      "Integración de sensores, códigos QR dinámicos y tags RFID",
      "App móvil de acompañamiento y fidelización con pasarela de pagos",
      "Panel de control centralizado y monitoreo remoto de dispositivos en tiempo real"
    ],
    pricingTiers: [
      {
        id: "ecosystem-design",
        name: "Diseño de Ecosistema",
        price: "Cotizar según espacio",
        deposit: "50% de inicio · 50% al entregar",
        priceCOP: "Cotizar",
        priceUSD: "Custom Quote",
        depositCOP: "50% de inicio",
        depositUSD: "50% deposit",
        timeline: "4 a 6 Semanas",
        description: "Mapeo arquitectónico y diseño de la experiencia híbrida para tu espacio físico.",
        features: [
          "Service Blueprint híbrido (Espacio físico + Pantallas)",
          "Arquitectura de sensores, códigos QR dinámicos y RFID",
          "Lógica operativa para el personal del local",
          "Mapeo de flujos de interacción del visitante"
        ]
      },
      {
        id: "omnichannel-dev",
        name: "Desarrollo Omnicanal",
        price: "Cotizar según alcance",
        deposit: "50% de inicio · 50% al entregar",
        priceCOP: "Cotizar",
        priceUSD: "Custom Quote",
        depositCOP: "50% de inicio",
        depositUSD: "50% deposit",
        timeline: "6 a 10 Semanas",
        isRecommended: true,
        popular: true,
        description: "Construcción del software para tótems, pasarelas de pago y sincronización centralizada.",
        features: [
          "Software para tótems táctiles y kioskos interactivos",
          "Bases de datos centralizadas en tiempo real",
          "App móvil compañera y pasarelas de pago integradas",
          "Monitoreo remoto y actualización OTA de dispositivos"
        ]
      }
    ],
    faqs: [
      {
        question: "¿Cómo gestionan el software si los tótems pierden conexión a Internet?",
        answer: "Diseñamos con arquitectura Offline-First: las transacciones y pedidos se almacenan localmente y se sincronizan automáticamente en cuanto se restablece la red."
      }
    ]
  }
];
