import { Module } from '../types';
import { Locale } from '@/types';
import {
  getLessonM0001,
  getLessonM0002,
  getLessonM0003,
  getLessonM0101,
  getLessonM0102,
  getLessonM0103,
  getLessonM0104,
  getLessonM0201,
  getLessonM0202,
  getLessonM0203,
  getLessonM0204,
  getLessonM0301,
  getLessonM0302,
  getLessonM0303,
  getLessonM0304,
  getLessonM0401,
  getLessonM0402,
  getLessonM0403,
  getLessonM0404,
  getLessonM0501,
  getLessonM0502,
  getLessonM0503,
  getLessonM0504,
} from './lessons';

export const getCreatorLabModules = (lang: Locale = 'es'): Module[] => {
  const isEs = lang === 'es';

  return [
    {
      id: 'm00',
      slug: 'semana-0-induccion',
      weekNumber: 0,
      weekTag: isEs ? 'Semana 0 · 24–30 Sep' : 'Week 0 · Sept 24–30',
      dates: isEs ? '24–30 septiembre' : 'September 24–30',
      title: isEs ? 'Inducción & Tu Kit de Creación' : 'Induction & Creator Kit',
      subtitle: isEs ? 'Preparación técnica antes del inicio oficial' : 'Technical setup prior to official launch',
      objective: isEs ? 'Configurar tus herramientas móviles y definir el objetivo comercial de tu negocio.' : 'Set up mobile tools and define business goals.',
      lessons: [
        getLessonM0001(lang),
        getLessonM0002(lang),
        getLessonM0003(lang),
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
      id: 'm01',
      slug: 'semana-1-estrategia',
      weekNumber: 1,
      weekTag: isEs ? 'Semana 1 · 1–7 Oct' : 'Week 1 · Oct 1–7',
      dates: isEs ? '1–7 octubre' : 'October 1–7',
      title: isEs ? 'Estrategia — De Negocio a Contenido' : 'Strategy — From Business to Content',
      subtitle: isEs ? 'Módulo 1: Encontrar el valor que ya existe en tu marca' : 'Module 1: Uncover hidden brand assets',
      objective: isEs ? 'Identificar el contenido oculto en tu producto, proceso y clientes, creando una matriz de 30 ideas.' : 'Identify hidden content in products, processes, and clients to build a 30-idea matrix.',
      lessons: [
        getLessonM0101(lang),
        getLessonM0102(lang),
        getLessonM0103(lang),
        getLessonM0104(lang),
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
      id: 'm02',
      slug: 'semana-2-grabacion',
      weekNumber: 2,
      weekTag: isEs ? 'Semana 2 · 8–14 Oct' : 'Week 2 · Oct 8–14',
      dates: isEs ? '8–14 octubre' : 'October 8–14',
      title: isEs ? 'Grabación — Aprende a Grabar con el Celular' : 'Filming — Mobile Production Masterclass',
      subtitle: isEs ? 'Módulo 2: Cámara, luz, composición y confianza' : 'Module 2: Camera, light, composition & confidence',
      objective: isEs ? 'Dominar la técnica de captura con smartphone y perder el miedo a hablarle al lente.' : 'Master smartphone camera fundamentals and speak to the lens with confidence.',
      lessons: [
        getLessonM0201(lang),
        getLessonM0202(lang),
        getLessonM0203(lang),
        getLessonM0204(lang),
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
      id: 'm03',
      slug: 'semana-3-creacion',
      weekNumber: 3,
      weekTag: isEs ? 'Semana 3 · 15–21 Oct' : 'Week 3 · Oct 15–21',
      dates: isEs ? '15–21 octubre' : 'October 15–21',
      title: isEs ? 'Creación — Convertir Ideas en Contenido' : 'Creation — Turning Ideas into Formats',
      subtitle: isEs ? 'Módulo 3: Hooks, guiones, storytelling y formatos' : 'Module 3: Hooks, scripts, storytelling & formats',
      objective: isEs ? 'Aprender las fórmulas de retención para Reels, TikTok, carruseles y Stories de venta.' : 'Learn retention formulas for Reels, TikToks, carousels, and sales Stories.',
      lessons: [
        getLessonM0301(lang),
        getLessonM0302(lang),
        getLessonM0303(lang),
        getLessonM0304(lang),
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
      id: 'm04',
      slug: 'semana-4-edicion-ia',
      weekNumber: 4,
      weekTag: isEs ? 'Semana 4 · 22–28 Oct' : 'Week 4 · Oct 22–28',
      dates: isEs ? '22–28 octubre' : 'October 22–28',
      title: isEs ? 'Edición & IA — Produce como un Profesional' : 'Editing & AI — Pro Mobile Production',
      subtitle: isEs ? 'Módulo 4: CapCut, Canva, Inteligencia Artificial y Repurposing' : 'Module 4: CapCut, Canva, AI & Repurposing',
      objective: isEs ? 'Editar ágilmente en CapCut, diseñar en Canva y multiplicar tu tiempo con IA.' : 'Edit quickly in CapCut, design in Canva, and accelerate output with AI.',
      lessons: [
        getLessonM0401(lang),
        getLessonM0402(lang),
        getLessonM0403(lang),
        getLessonM0404(lang),
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
      id: 'm05',
      slug: 'semana-5-contenido-que-vende',
      weekNumber: 5,
      weekTag: isEs ? 'Semana 5 · 29 Oct – 1 Nov' : 'Week 5 · Oct 29 – Nov 1',
      dates: isEs ? '29 octubre – 1 noviembre' : 'October 29 – November 1',
      title: isEs ? 'Contenido que Vende — Del Contenido al Negocio' : 'Content That Sells — Content to Revenue',
      subtitle: isEs ? 'Módulo 5: Cierre por WhatsApp, métricas y sistema continuo' : 'Module 5: WhatsApp closing, metrics & sustainable system',
      objective: isEs ? 'Convertir la atención en dinero real conectando contenido, WhatsApp y métricas comerciales.' : 'Turn social attention into revenue by bridging content, WhatsApp conversations, and business metrics.',
      lessons: [
        getLessonM0501(lang),
        getLessonM0502(lang),
        getLessonM0503(lang),
        getLessonM0504(lang),
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
