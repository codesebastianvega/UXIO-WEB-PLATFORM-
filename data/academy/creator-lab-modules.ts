import { CourseModule } from './types';
import { Locale } from '@/types';

export const getCreatorLabModules = (lang: Locale = 'es'): CourseModule[] => {
  const isEs = lang === 'es';

  return [
    {
      weekNumber: 0,
      weekTag: 'Semana 0 · 24–30 Sep',
      dates: '24–30 septiembre',
      title: isEs ? 'Inducción & Tu Kit de Creación' : 'Induction & Creator Kit',
      subtitle: isEs ? 'Preparación técnica antes del inicio oficial' : 'Technical setup prior to official launch',
      objective: isEs ? 'Configurar tus herramientas móviles y definir el objetivo comercial de tu negocio.' : 'Set up mobile tools and define business goals.',
      lessons: [
        {
          title: isEs ? 'Clase 0 — Bienvenida a UXIO Creator Lab' : 'Lesson 0 — Welcome to Creator Lab',
          topics: isEs 
            ? ['Cómo funciona el programa y la plataforma', 'Calendario y ritmo de entregables', 'Reglas de la comunidad', 'Qué necesitas para arrancar']
            : ['Program roadmap & platform mechanics', 'Calendar and weekly deliverable pace', 'Community guidelines', 'Prerequisites'],
        },
        {
          title: isEs ? 'Clase 0.1 — Tu kit de creación accesible' : 'Lesson 0.1 — Your accessible creator kit',
          topics: isEs 
            ? ['Tu celular como equipo principal', 'Trípode y micrófono opcional', 'Aprovechar la luz natural sin gastar', 'Apps gratuitas imprescindibles (CapCut, Canva, IA)']
            : ['Smartphone as your primary camera', 'Tripods and optional mics', 'Natural window light setups', 'Free essentials (CapCut, Canva, AI)'],
        },
      ],
      projectDeliverable: {
        title: isEs ? 'Actividad de Arranque' : 'Kickoff Activity',
        description: isEs ? 'Presentación de tu negocio/proyecto y definición de metas comerciales para el programa.' : 'Pitch your project and set key commercial goals.',
        items: [
          isEs ? 'Ficha de diagnóstico de tu marca' : 'Brand diagnosis sheet',
          isEs ? 'Objetivo de venta o alcance para las 5 semanas' : 'Conversion and reach goal for the 5 weeks',
        ],
      },
    },
    {
      weekNumber: 1,
      weekTag: 'Semana 1 · 1–7 Oct',
      dates: '1–7 octubre',
      title: isEs ? 'Estrategia — De Negocio a Contenido' : 'Strategy — From Business to Content',
      subtitle: isEs ? 'Módulo 1: Encontrar el valor que ya existe en tu marca' : 'Module 1: Uncover hidden brand assets',
      objective: isEs ? 'Identificar el contenido oculto en tu producto, proceso y clientes, creando una matriz de 30 ideas.' : 'Identify hidden content in products, processes, and clients to build a 30-idea matrix.',
      lessons: [
        {
          title: isEs ? '¿Qué es contenido comercial vs. orgánico?' : 'Commercial vs. Organic Content',
          topics: isEs ? ['Contenido vs. Publicidad tradicional', 'UGC (User Generated Content) explicado', 'Influencer marketing vs. Creadores internos'] : ['Content vs traditional ads', 'UGC mechanics explained', 'Internal creators vs influencers'],
        },
        {
          title: isEs ? 'Tu marca tiene contenido escondido' : 'Your brand has hidden content',
          topics: isEs ? ['Producto, servicio y backstage del proceso', 'Historias de clientes, dudas frecuentes y objeciones', 'Experiencias de compra y vida real'] : ['Product, service, and backstage process', 'Customer stories, FAQs, and objections', 'Real-life buying experiences'],
        },
        {
          title: isEs ? 'Pilares y Audiencia Objetivo' : 'Content Pillars & Target Audience',
          topics: isEs ? ['Los 5 pilares: Educar, Entretener, Inspirar, Conectar y Vender', 'Definir dolores, deseos y lenguaje del cliente', 'Estructurar tu calendario mensual'] : ['5 Pillars: Educate, Entertain, Inspire, Connect, Sell', 'Customer pain points and vocabulary', 'Monthly content architecture'],
        },
      ],
      projectDeliverable: {
        title: isEs ? 'Entregable Semana 1' : 'Week 1 Deliverable',
        description: isEs ? 'Construcción de tu mapa de contenido de 30 días.' : 'Build your 30-day content roadmap.',
        items: [
          isEs ? '5 pilares de contenido adaptados a tu nicho' : '5 tailored content pillars',
          isEs ? 'Matriz de 30 ideas de contenido listas para grabar' : '30-idea ready-to-shoot content matrix',
        ],
      },
    },
    {
      weekNumber: 2,
      weekTag: 'Semana 2 · 8–14 Oct',
      dates: '8–14 octubre',
      title: isEs ? 'Grabación — Aprende a Grabar con el Celular' : 'Filming — Mobile Production Masterclass',
      subtitle: isEs ? 'Módulo 2: Cámara, luz, composición y confianza' : 'Module 2: Camera, light, composition & confidence',
      objective: isEs ? 'Dominar la técnica de captura con smartphone y perder el miedo a hablarle al lente.' : 'Master smartphone camera fundamentals and speak to the lens with confidence.',
      lessons: [
        {
          title: isEs ? 'El celular como cámara profesional' : 'Smartphone as a pro camera',
          topics: isEs ? ['Resolución, 4K/1080p, 24/30/60 FPS', 'Bloqueo de enfoque y exposición (AF/AE Lock)', 'Composición, regla de tercios, planos y ángulos'] : ['Resolution, 4K/1080p, 24/30/60 FPS', 'AF/AE lock techniques', 'Rule of thirds, framing and camera angles'],
        },
        {
          title: isEs ? 'Luz, Audio y Banco de B-Roll' : 'Light, Audio & B-Roll Library',
          topics: isEs ? ['Luz natural de ventana y contraluz controlado', 'Audio limpio: distancias de micrófono y acústica casera', 'Cómo capturar B-roll estético: texturas, detalles y movimiento'] : ['Natural window light and backlighting', 'Clean mobile audio and mic distances', 'Shooting aesthetic B-roll: textures, details, motion'],
        },
        {
          title: isEs ? 'Grabarte hablando y vencer la fricción' : 'Speaking on camera without fear',
          topics: isEs ? ['Presencia, contacto visual, dicción y naturalidad', 'Técnica de fragmentación de tomas', 'Cómo superar el miedo y la autocrítica'] : ['Presence, eye contact, and natural tone', 'Single-sentence shooting technique', 'Overcoming camera anxiety'],
        },
      ],
      projectDeliverable: {
        title: isEs ? 'Entregable Semana 2' : 'Week 2 Deliverable',
        description: isEs ? 'Tu primer banco de clips y video hablado.' : 'Your first clip library and spoken-word video.',
        items: [
          isEs ? 'Banco de 30 clips de B-roll de tu negocio' : '30 aesthetic B-roll clips of your business',
          isEs ? '1 video de 45-60s hablando directamente a cámara' : '1 45-60s spoken video direct to lens',
        ],
      },
    },
    {
      weekNumber: 3,
      weekTag: 'Semana 3 · 15–21 Oct',
      dates: '15–21 octubre',
      title: isEs ? 'Creación — Convertir Ideas en Contenido' : 'Creation — Turning Ideas into Formats',
      subtitle: isEs ? 'Módulo 3: Hooks, guiones, storytelling y formatos' : 'Module 3: Hooks, scripts, storytelling & formats',
      objective: isEs ? 'Aprender las fórmulas de retención para Reels, TikTok, carruseles y Stories de venta.' : 'Learn retention formulas for Reels, TikToks, carousels, and sales Stories.',
      lessons: [
        {
          title: isEs ? 'La ciencia del Hook (Los primeros 3 segundos)' : 'The Science of the Hook (First 3 Seconds)',
          topics: isEs ? ['Ganchos de curiosidad, problema, promesa y contraste', 'Hooks visuales vs. Hooks verbales vs. Hooks de texto', 'Fórmulas para detener el scroll'] : ['Curiosity, problem, promise, and contrast hooks', 'Visual vs. verbal vs. text hooks', 'Scroll-stopping mechanics'],
        },
        {
          title: isEs ? 'Estructuras de Guion y Storytelling' : 'Script Frameworks & Storytelling',
          topics: isEs ? ['Hook → Problema → Desarrollo → Solución → CTA', 'Hook → Historia personal → Aprendizaje → CTA', 'Estructura Problema → Demostración → Resultado'] : ['Hook → Problem → Deep dive → Solution → CTA', 'Hook → Story → Lesson → CTA', 'Problem → Demonstration → Result'],
        },
        {
          title: isEs ? 'Formatos Nativos: Reels, Carruseles y Stories' : 'Native Formats: Reels, Carousels, Stories',
          topics: isEs ? ['Ritmo y retención en videos cortos', 'Carruseles: portadas irresistibles y fluidez de lectura', 'Stories interactivas para calentar prospectos (encuestas, preguntas, conversación)'] : ['Short-form pacing and retention graph', 'Carousels: hook covers and seamless slides', 'Interactive stories to warm up prospects'],
        },
      ],
      projectDeliverable: {
        title: isEs ? 'Entregable Semana 3' : 'Week 3 Deliverable',
        description: isEs ? 'Kit multiformato de tu marca.' : 'Multi-format brand pack.',
        items: [
          isEs ? '3 Reels/TikToks grabados con gancho y guion' : '3 Reels/TikToks with proven scripts',
          isEs ? '1 Carrusel de alto valor educativo' : '1 Educational slide carousel',
          isEs ? '1 Secuencia de 5 Stories conversacionales' : '1 5-story conversational sequence',
        ],
      },
    },
    {
      weekNumber: 4,
      weekTag: 'Semana 4 · 22–28 Oct',
      dates: '22–28 octubre',
      title: isEs ? 'Edición & IA — Produce como un Profesional' : 'Editing & AI — Pro Mobile Production',
      subtitle: isEs ? 'Módulo 4: CapCut, Canva, Inteligencia Artificial y Repurposing' : 'Module 4: CapCut, Canva, AI & Repurposing',
      objective: isEs ? 'Editar ágilmente en CapCut, diseñar en Canva y multiplicar tu tiempo con IA.' : 'Edit quickly in CapCut, design in Canva, and accelerate output with AI.',
      lessons: [
        {
          title: isEs ? 'Edición Dinámica en CapCut' : 'Dynamic Editing in CapCut',
          topics: isEs ? ['Cortes sin aire, ritmo y dinamismo visual', 'Subtítulos animados automáticos y destacados de color', 'Música en tendencia, efectos de sonido y exportación 1080p nítida'] : ['Tight cuts and visual pacing', 'Auto-captions with keyword color accents', 'Trending audio, sound FX, and crisp export'],
        },
        {
          title: isEs ? 'Canva Ágil & Packaging Visual' : 'Agile Canva & Visual Packaging',
          topics: isEs ? ['Portadas de Reels cohesivas', 'Plantillas de carruseles limpias y tipografía editorial', 'Cómo evitar que tu contenido parezca genérico'] : ['Cohesive Reel cover templates', 'Editorial carousel slides', 'Avoiding generic design traps'],
        },
        {
          title: isEs ? 'Inteligencia Artificial para Creadores' : 'AI for Solo Creators',
          topics: isEs ? ['Investigación de audiencias con ChatGPT y Claude', 'Generación de 50 ganchos y copies comerciales', 'Repurposing: de 1 video largo a 4 reels, 1 carrusel y un hilo'] : ['Audience research with AI', 'Generating 50 hooks and sales copies', 'Repurposing: 1 video into 4 reels + carousel'],
        },
      ],
      projectDeliverable: {
        title: isEs ? 'Entregable Semana 4' : 'Week 4 Deliverable',
        description: isEs ? 'Flujo de trabajo completo terminado.' : 'Full production pipeline execution.',
        items: [
          isEs ? '1 pieza audiovisual completa: idea → guion con IA → grabación → edición CapCut → publicación' : '1 complete piece: idea → AI script → shoot → CapCut edit → publish',
        ],
      },
    },
    {
      weekNumber: 5,
      weekTag: 'Semana 5 · 29 Oct – 1 Nov',
      dates: '29 octubre – 1 noviembre',
      title: isEs ? 'Contenido que Vende — Del Contenido al Negocio' : 'Content That Sells — Content to Revenue',
      subtitle: isEs ? 'Módulo 5: Cierre por WhatsApp, métricas y sistema continuo' : 'Module 5: WhatsApp closing, metrics & sustainable system',
      objective: isEs ? 'Convertir la atención en dinero real conectando contenido, WhatsApp y métricas comerciales.' : 'Turn social attention into revenue by bridging content, WhatsApp conversations, and business metrics.',
      lessons: [
        {
          title: isEs ? 'Llamados a la Acción (CTA) y Contenido Comercial' : 'Calls to Action & Commercial Content',
          topics: isEs ? ['La anatomía de un CTA que no suena desesperado', 'Casos de éxito, testimonios y demostraciones en vivo', 'Ofertas irresistibles en formato vertical'] : ['CTAs that attract without sounding needy', 'Case studies, testimonials, and live demos', 'Irresistible vertical video offers'],
        },
        {
          title: isEs ? 'El Puente: Contenido → Conversación → Venta por WhatsApp' : 'The Bridge: Content → WhatsApp Chat → Sale',
          topics: isEs ? ['Automatizar palabras clave en comentarios para llevar a DM', 'Respuestas rápidas y guiones de cierre por WhatsApp', 'Cómo tratar prospectos tibios sin ser invasivo'] : ['Keyword triggers in comments to DM', 'Quick-reply scripts for WhatsApp closing', 'Nurturing warm prospects non-invasively'],
        },
        {
          title: isEs ? 'Métricas Clave y Tu Sistema de Producción Sostenible' : 'Key Metrics & Sustainable Production',
          topics: isEs ? ['Retención vs. Alcance vs. Clics en enlace', 'Qué hacer cuando un video funciona (escalar y replicar)', 'Cómo producir 1 mes de contenido en solo 4 horas de grabación'] : ['Retention vs. reach vs. link clicks', 'What to do when a video spikes', 'Batch-producing a month of content in 4 hours'],
        },
      ],
      projectDeliverable: {
        title: isEs ? 'Proyecto Final & Graduación' : 'Final Capstone & Graduation',
        description: isEs ? 'Entrega de tu sistema de 30 días y solicitud de constancia.' : '30-day operating system submission and certificate unlock.',
        items: [
          isEs ? 'Calendario de 30 días con copies y guiones listos' : '30-day ready-to-run content schedule with scripts',
          isEs ? 'Sistema de producción semanal documentado para tu negocio' : 'Weekly batching workflow documented for your team',
        ],
      },
    },
  ];
};
