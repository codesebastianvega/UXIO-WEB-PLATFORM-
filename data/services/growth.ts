import { ServiceItem } from './types';
import { growthSubServices } from './growth-subservices';

export const growthService: ServiceItem = {
  slug: "growth",
  title: "Growth & Estrategia",
  subtitle: "El éxito como pilar fundamental.",
  approach: "Crear algo hermoso es solo el primer paso. Nos obsesionamos con que tu producto llegue a las manos correctas, optimizando cada métrica para que tus expectativas de negocio se conviertan en realidad y crecimiento escalable.",
  accent: "#10B981",
  capabilities: [
    {
      id: "cro-conversion",
      slug: "cro-conversion",
      title: "Conversión & CRO",
      description: "Afinamos la experiencia para que cada visitante entienda el valor y se convierta en usuario activo o cliente recurrente.",
      startingPrice: { COP: 1500000, USD: 350 },
      timeline: "2 Semanas",
      tiers: [
        { 
          name: "Auditoría CRO", 
          price: { COP: 1500000, USD: 350 }, 
          description: "Diagnóstico profundo de embudo identificando fugas y pérdidas de conversión.",
          features: [
            "Análisis exhaustivo de mapas de calor y clicks",
            "Detección de fricciones y fugas en el embudo de compra",
            "Reporte técnico y visual de optimización UX/UI",
            "Matriz de mejoras prioritarias de alto impacto inmediato"
          ] 
        },
        { 
          name: "Funnel Setup", 
          isRecommended: true, 
          price: { COP: 2800000, USD: 700 }, 
          description: "Rediseño completo de embudo y landing pages con pruebas A/B estructuradas.",
          features: [
            "Diseño de Landing Pages de alta conversión en Figma/Web",
            "Configuración de experimentos y A/B Testing continuo",
            "Optimización de checkout y formularios de captación",
            "Copywriting persuasivo y telemetría de eventos de conversión"
          ] 
        }
      ]
    },
    {
      id: "acquisition-ads",
      slug: "acquisition-ads",
      title: "Adquisición & Performance",
      description: "Estrategias de pauta publicitaria que respetan la estética de tu marca mientras escalan tus resultados comerciales con un ROAS positivo.",
      startingPrice: { COP: 1200000, USD: 300 },
      timeline: "Mes a Mes",
      tiers: [
        { 
          name: "Setup Campañas", 
          price: { COP: 1200000, USD: 300 }, 
          description: "Puesta a punto técnica y estratégica de tus cuentas publicitarias.",
          features: [
            "Estructuración de cuenta Meta / Google Ads",
            "Segmentación avanzada de audiencias y públicos similares",
            "Configuración de píxeles y eventos de conversión",
            "Entrega de estructura lista para pautar con confianza"
          ] 
        },
        { 
          name: "Gestión Mensual", 
          isRecommended: true, 
          price: { COP: 2500000, USD: 600 }, 
          description: "Gestión y optimización continua de adquisición para marcas en aceleración.",
          features: [
            "Optimización diaria de pauta, pujas y presupuestos",
            "Creación de copys y creativos persuasivos continuos",
            "Reportes semanales de rendimiento y análisis de ROAS",
            "Acompañamiento estratégico continuo sin ataduras"
          ] 
        }
      ]
    },
    {
      id: "automation-retention",
      slug: "automation-retention",
      title: "Automatización & Retención",
      description: "Sistemas automáticos para recuperar ventas perdidas y aumentar el ciclo de vida (LTV) de tus clientes sin esfuerzo manual.",
      startingPrice: { COP: 1800000, USD: 450 },
      timeline: "2 Semanas",
      tiers: [
        { 
          name: "Email Flows", 
          price: { COP: 1800000, USD: 450 }, 
          description: "Flujos automatizados de email esenciales para tiendas y plataformas digitales.",
          features: [
            "Recuperación de carritos abandonados automatizada",
            "Secuencias de bienvenida y educación de leads",
            "Flujos de reactivación y cross-selling inteligente",
            "Plantillas responsive diseñadas con la identidad de tu marca"
          ] 
        },
        { 
          name: "CRM Setup", 
          isRecommended: true, 
          price: { COP: 3500000, USD: 850 }, 
          description: "Implementación integral de CRM y embudos automatizados para tu equipo de ventas.",
          features: [
            "Implementación de CRM (HubSpot / ActiveCampaign / Supabase)",
            "Scoring y enrutamiento inteligente de leads",
            "Automatización de pipelines y tareas del equipo comercial",
            "Capacitación en video para el uso diario de la plataforma"
          ] 
        }
      ]
    }
  ],
  microServices: [
    { 
      id: "ga4-setup", 
      title: "Setup Google Analytics 4", 
      description: "Configuración profesional de eventos y conversiones en GA4.", 
      price: { USD: 100, COP: 400000 },
      accent: "#10B981",
      timeline: "24h",
      deliverables: [
        "Instalación limpia de GA4 sin romper la velocidad web.",
        "Configuración de eventos de conversión (Leads, Compras, WhatsApp).",
        "Embudos de conversión personalizados.",
        "Verificación con Google Tag Assistant en vivo."
      ]
    },
    { 
      id: "ads-audit", 
      title: "Auditoría de Meta/Google Ads", 
      description: "Revisión profunda de tus campañas actuales para frenar el desperdicio de presupuesto.", 
      price: { USD: 150, COP: 600000 },
      accent: "#FF7F07",
      timeline: "24h a 48h",
      deliverables: [
        "Diagnóstico de audiencias, creativos y ROAS actual.",
        "Detección de palabras clave negativas y fugas de presupuesto.",
        "Revisión técnica de píxeles y API de conversiones (CAPI).",
        "Loom explicativo de 20 min con plan de optimización inmediato."
      ]
    },
    { 
      id: "looker-dashboard", 
      title: "Dashboard Ejecutivo", 
      description: "Panel en Looker Studio con tus KPIs de negocio en tiempo real.", 
      price: { USD: 200, COP: 800000 },
      accent: "#2563EB",
      timeline: "48h",
      deliverables: [
        "Tablero interactivo conectado a GA4, Shopify y Meta Ads.",
        "Métricas clave de CAC, ROAS, LTV y tasa de conversión.",
        "Diseño visual alineado a la paleta de tu empresa.",
        "Acceso en tiempo real compartible para inversores y equipo."
      ]
    }
  ],
  subServices: growthSubServices,
};
