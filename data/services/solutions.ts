import { ServiceItem } from './types';
import { solutionsSubServices } from './solutions-subservices';

export const solutionsService: ServiceItem = {
  slug: "solutions",
  title: "Soluciones Core",
  subtitle: "De la imaginación a la realidad absoluta.",
  approach: "Para los retos que no tienen límites. Combinamos todas nuestras disciplinas —tecnología, experiencia, data y marca— para operar como tu brazo de producto integral. Desde aplicaciones para wearables hasta la digitalización de espacios físicos. Tu éxito total es nuestro único objetivo.",
  accent: "#00F0FF",
  capabilities: [
    {
      id: "venture-builder",
      slug: "venture-builder",
      title: "Venture Builder (End-to-End)",
      description: "Construimos plataformas complejas, SaaS y aplicaciones robustas desde cero, operando como tu propio departamento de tecnología.",
      startingPrice: "Cotizar según alcance",
      timeline: "8 a 12 Semanas",
      tiers: [
        {
          name: "MVP Builder",
          price: { COP: null, USD: null },
          description: "Discovery técnico, arquitectura y desarrollo en 8-12 semanas.",
          features: [
            "Discovery técnico y funcional completo",
            "Diseño de arquitectura de software escalable",
            "Desarrollo ágil en 8-12 semanas",
            "Despliegue y pruebas de carga"
          ]
        },
        {
          name: "Dedicated Squad",
          isRecommended: true,
          price: { COP: null, USD: null },
          description: "1 Dev Senior + 1 UX + 1 PM dedicados 100% en exclusiva.",
          features: [
            "1 Dev Senior + 1 Diseñador UX + 1 Product Manager",
            "Asignación 100% exclusiva para tu empresa",
            "Iteración continua y escalabilidad técnica",
            "Sprint reviews semanales y roadmap vivo"
          ]
        }
      ]
    },
    {
      id: "hardware-wearables",
      slug: "hardware-wearables",
      title: "Hardware, Wearables & IoT",
      description: "Llevamos tu producto más allá del teléfono. Diseñamos y desarrollamos experiencias para smartwatches, terminales punto de venta (POS) y dispositivos conectados.",
      startingPrice: "Cotizar según hardware",
      timeline: "4 a 8 Semanas",
      tiers: [
        {
          name: "Wearable UX/UI",
          price: { COP: null, USD: null },
          description: "Investigación de ergonomía digital e interfaces de alto contraste.",
          features: [
            "Investigación de ergonomía digital",
            "Interfaces de alto contraste para pantallas reducidas",
            "Prototipos interactivos hápticos",
            "Diseño para Apple Watch, WearOS y POS"
          ]
        },
        {
          name: "Integración Nativa",
          isRecommended: true,
          price: { COP: null, USD: null },
          description: "Conexión Bluetooth/NFC y sincronización de datos en tiempo real.",
          features: [
            "Conexión Bluetooth Low Energy (BLE) / NFC",
            "Sincronización de datos en tiempo real",
            "Desarrollo nativo e integración IoT",
            "Pruebas de latencia y consumo de batería"
          ]
        }
      ]
    },
    {
      id: "phygital-experiences",
      slug: "phygital-experiences",
      title: "Experiencias Phygitales (Físico + Digital)",
      description: "Diseñamos ecosistemas donde el mundo físico interactúa con el digital. Gamificación en espacios comerciales, turismo inmersivo y automatización retail.",
      startingPrice: "Cotizar según espacio",
      timeline: "4 a 10 Semanas",
      tiers: [
        {
          name: "Diseño de Ecosistema",
          price: { COP: null, USD: null },
          description: "Service Blueprint híbrido, arquitectura de sensores y lógica operativa.",
          features: [
            "Service Blueprint híbrido (Espacio + Pantallas)",
            "Arquitectura de sensores, códigos QR y RFID",
            "Lógica operativa para el personal",
            "Mapeo de flujos de interacción del visitante"
          ]
        },
        {
          name: "Desarrollo Omnicanal",
          isRecommended: true,
          price: { COP: null, USD: null },
          description: "Software para tótems, bases de datos centralizadas y app móvil compañera.",
          features: [
            "Software para tótems táctiles y kioskos",
            "Bases de datos centralizadas en tiempo real",
            "App móvil compañera y pagos integrados",
            "Monitoreo remoto de dispositivos"
          ]
        }
      ]
    }
  ],
  microServices: [
    {
      id: "tech-feasibility",
      title: "Taller de Viabilidad Técnica (2 Hrs)",
      description: "Sesión 1 a 1 con nuestro arquitecto de software para evaluar factibilidad y stack.",
      price: { USD: 100, COP: 400000 },
      accent: "#00F0FF",
      timeline: "En vivo (2h)",
      deliverables: [
        "Sesión de 2 horas con nuestro arquitecto de software principal.",
        "Evaluación técnica de viabilidad de tu idea o producto.",
        "Recomendación de stack tecnológico, bases de datos y nube.",
        "Documento resumen con riesgos técnicos y estimación de tiempos."
      ]
    },
    {
      id: "cloud-audit",
      title: "Auditoría de Arquitectura Cloud y Bases de Datos",
      description: "Revisión profunda de seguridad, costos y escalabilidad en AWS/GCP/Supabase.",
      price: { USD: 200, COP: 800000 },
      accent: "#2563EB",
      timeline: "24h a 48h",
      deliverables: [
        "Revisión de seguridad, costos y escalabilidad de tu infraestructura.",
        "Detección de cuellos de botella en consultas SQL / NoSQL.",
        "Recomendaciones de optimización de costos en AWS/GCP/Supabase.",
        "Informe técnico con plan de migración o refactorización."
      ]
    },
    {
      id: "phygital-ideation",
      title: "Sesión de Ideación Phygital para Retail/Restaurantes",
      description: "Taller creativo de 90 min para digitalizar tu espacio físico con tecnología interactiva.",
      price: { USD: 125, COP: 500000 },
      accent: "#7928CA",
      timeline: "En vivo (90m)",
      deliverables: [
        "Taller creativo de 90 min para digitalizar tu espacio físico.",
        "Ideas de gamificación, pedidos autónomos y fidelización.",
        "Blueprint conceptual de hardware y software requerido.",
        "Benchmark de experiencias phygitales líderes en el mundo."
      ]
    }
  ],
  subServices: solutionsSubServices,
  relatedProjectIds: ['aluna', 'arca', 'boku-bento']
};
