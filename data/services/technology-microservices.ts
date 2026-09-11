import { MicroService } from './types';

export const technologyMicroServices: MicroService[] = [
  {
    id: "manychat-bot",
    title: "Asistente Automático de WhatsApp & Ventas",
    description: "Atiende clientes, responde preguntas frecuentes y califica prospectos 24/7 sin responder mensajes a mano.",
    imageUrl: "/services/sprints/sprint-whatsapp-bot.jpg",
    accent: "#10B981",
    deliverables: [
      "Flujo de bienvenida interactivo y menú de preguntas frecuentes.",
      "Captura automatizada de teléfonos y correos de clientes interesados.",
      "Enrutamiento directo a WhatsApp Business para cerrar compras.",
      "Capacitación en video para cambiar mensajes cuando quieras."
    ],
    price: { USD: 115, COP: 450000 },
    timeline: "24 a 48h"
  },
  {
    id: "payment-gateway",
    title: "Cobros en Línea & Pasarelas de Pago",
    description: "Activa pagos con PSE, tarjetas de crédito y billeteras en tu página o tienda para vender al instante.",
    imageUrl: "/services/sprints/sprint-payments-checkout.jpg",
    accent: "#635BFF",
    deliverables: [
      "Configuración y activación de tu cuenta en la pasarela de pagos.",
      "Botón de pago directo o checkout seguro integrado en tu web.",
      "Prueba de compra real verificada con PSE y tarjetas.",
      "Correos automáticos de confirmación para ti y tus clientes."
    ],
    price: { USD: 125, COP: 500000 },
    timeline: "24 a 48h"
  },
  {
    id: "automation-n8n",
    title: "Conexión Automática entre tus Aplicaciones",
    description: "Conecta tus formularios, base de datos y CRM para eliminar tareas manuales y ahorrar horas cada semana.",
    imageUrl: "/services/sprints/sprint-app-integrations.jpg",
    accent: "#EA4B71",
    deliverables: [
      "Sincronización automática de contactos y pedidos en tiempo real.",
      "Conexión con tu base de datos o sistema de gestión de clientes.",
      "Alertas inmediatas a tu celular o WhatsApp cuando hay un nuevo cliente.",
      "Flujo automatizado listo para operar sin mantenimiento técnico."
    ],
    price: { USD: 150, COP: 600000 },
    timeline: "24 a 48h"
  },
  {
    id: "analytics-tracking",
    title: "Medición de Visitas y Ventas Digitales",
    description: "Mide cuántas personas visitan tu página, de qué anuncios vienen y qué compran con métricas sencillas y claras.",
    imageUrl: "/services/sprints/sprint-analytics-sales.jpg",
    accent: "#F59E0B",
    deliverables: [
      "Instalación de herramientas de analítica sin hacer lenta tu web.",
      "Registro de clics a WhatsApp, formularios enviados y compras.",
      "Panel visual claro para ver los resultados de tus redes y anuncios.",
      "Verificación en vivo para asegurar que cada dato se registre bien."
    ],
    price: { USD: 90, COP: 350000 },
    timeline: "24h"
  },
  {
    id: "wpo-speed",
    title: "Optimización de Carga Ultra Rápida",
    description: "Aceleramos tu sitio para que abra en menos de 2 segundos y ningún cliente lo abandone por esperar.",
    imageUrl: "/services/sprints/sprint-speed-optimization-v2.jpg",
    accent: "#FE385B",
    deliverables: [
      "Optimización y compresión inteligente de fotos y videos pesados.",
      "Limpieza de código innecesario y aceleración de carga móvil.",
      "Configuración de caché veloz para visitas repetidas.",
      "Reporte comparativo de velocidad antes y después de la entrega."
    ],
    price: { USD: 165, COP: 650000 },
    timeline: "24 a 48h"
  },
  {
    id: "dns-workspace",
    title: "Correo Corporativo & Dominio Profesional",
    description: "Configura tu dominio y correos con nombre propio (@tuempresa.com) blindados contra la carpeta de spam.",
    imageUrl: "/services/sprints/sprint-domain-email.jpg",
    accent: "#2563EB",
    deliverables: [
      "Conexión segura de tu dominio web a tu servidor o plataforma.",
      "Autenticación y sellos de seguridad para que tus correos no caigan en spam.",
      "Certificado de seguridad verde (candado HTTPS) activo en tu web.",
      "Prueba de envío y recepción funcionando desde tu celular y laptop."
    ],
    price: { USD: 100, COP: 400000 },
    timeline: "24h"
  }
];
