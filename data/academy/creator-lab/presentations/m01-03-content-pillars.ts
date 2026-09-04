import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM0103 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Pilares de Contenido & Matriz 30D' : 'Content Pillars & 30-Day Matrix',
      subtitle: isEs
        ? 'Módulo 1 · Aprende a balancear tu estrategia con los 5 pilares y construye tu calendario mensual.'
        : 'Module 1 · Master the 5 content pillars and build your complete monthly filming calendar.',
      highlight: isEs ? 'Semana 1 · El Sistema de 30 Ideas' : 'Week 1 · 30-Idea Content System',
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&auto=format&fit=crop&q=80',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Clase 1.3! Hoy armamos la arquitectura completa de tu mes de contenido. Al terminar esta clase, tendrás 30 ideas estructuradas y listas para grabar.'
          : 'Welcome to Lesson 1.3! Today we build your complete monthly content architecture. By the end, you will have 30 structured ideas ready to shoot.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 03 · 00:00 - 15:00 MIN',
      title: isEs
        ? 'Una dieta balanceada de contenido es lo que separa a un spammer de una marca respetada.'
        : 'A balanced content diet is what separates an annoying spammer from a respected brand.',
      subtitle: isEs
        ? 'Si solo vendes, la gente se aburre; si solo entretienes, no vendes nada. El secreto está en la proporción 40/20/20/10/10.'
        : 'Hard selling burns your audience; pure entertainment generates zero sales. The secret is the 40/20/20/10/10 ratio.',
      highlight: isEs ? 'La Dieta de los 5 Pilares' : 'The 5 Pillars Diet',
      bgColor: '#10B981',
      instructorNotes: {
        duration: '1:00 - 3:00 min',
        script: isEs
          ? 'Expliquen a sus alumnos que un negocio debe ser percibido como una fuente inagotable de valor. Cuando el 80% de lo que publicas educa y ayuda, el 20% de venta directa se recibe con agradecimiento.'
          : 'Explain to students that a business must be perceived as a generous fountain of value. When 80% educates and helps, the 20% direct sale is welcomed enthusiastically.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'ESTRUCTURA ESTRATÉGICA' : 'STRATEGIC ARCHITECTURE',
      title: isEs ? 'Los 5 Pilares Maestros de Creator Lab' : 'The 5 Master Content Pillars',
      subtitle: isEs
        ? 'La distribución recomendada para 4 a 5 publicaciones por semana.'
        : 'The recommended distribution for 4 to 5 high-impact weekly posts.',
      points: isEs
        ? [
            {
              label: '1. Educar (40%)',
              text: 'Tutoriales rápidos, trucos prácticos y soluciones a micro-problemas sin rodeos teóricos.',
              detailData: {
                tag: 'PILAR 01 // EDUCACIÓN (40%)',
                title: 'El Imán de Prospectos Cualificados',
                description: 'Enseñar cómo resolver un problema específico demuestra que eres el especialista número 1 en tu sector, atrayendo a clientes con capacidad de pago.',
                imageCaption: 'Valor Técnico · Resolución Inmediata',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
                highlights: ['"El error #1 al hacer X"', '"3 pasos para solucionar Y"'],
                actionTip: 'Elige un problema que puedas resolver en menos de 45 segundos.',
              },
            },
            {
              label: '2. Conectar & Autoridad (40%)',
              text: 'Historias detrás de cámaras, valores de marca y casos de éxito reales de clientes felices.',
              detailData: {
                tag: 'PILAR 02 & 03 // CONEXIÓN & PRUEBA (40%)',
                title: 'Humanización y Prueba Social Irrefutable',
                description: 'Mostrar el backstage y los resultados reales de personas que ya confiaron en ti disuelve el escepticismo de nuevos compradores.',
                imageCaption: 'Casos Reales · Conexión Emocional',
                image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Antes vs Después de clientes', 'Filosofía y valores de la empresa'],
                actionTip: 'Entrevista a un cliente satisfecho o muestra capturas de sus mensajes en WhatsApp.',
              },
            },
            {
              label: '3. Desmentir & Venta (20%)',
              text: 'Derribar mitos comunes de la industria y presentar tu oferta estrella con CTA directo.',
              detailData: {
                tag: 'PILAR 04 & 05 // MITOS & VENTA (20%)',
                title: 'Conversión Directa sin Vergüenza',
                description: 'Presentar tu producto con claridad y seguridad. Quien ya consumió tus videos educativos estará listo para dar el paso de compra.',
                imageCaption: 'Llamado a la Acción · Cierre Directo',
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80',
                highlights: ['"Por qué no deberías hacer X"', 'Oferta directa con cupos limitados'],
                actionTip: 'Usa palabras clave cortas: "Comenta INFO para escribirte por WhatsApp".',
              },
            },
          ]
        : [
            { label: '1. Educate (40%)', text: 'Actionable tutorials, practical tricks and micro-problem solutions.' },
            { label: '2. Connect & Proof (40%)', text: 'Backstage stories, brand values and real customer case studies.' },
            { label: '3. Debunk & Sell (20%)', text: 'Busting industry myths and presenting direct offers with WhatsApp CTAs.' },
          ],
      instructorNotes: {
        duration: '3:00 - 8:00 min',
        script: isEs
          ? 'Muestren cómo esta distribución asegura que el canal de redes sociales sea un generador constante de confianza y ventas.'
          : 'Demonstrate how this ratio ensures social channels remain a steady generator of customer trust and pipeline.',
      },
    },
    {
      id: 's04',
      type: 'steps',
      tag: isEs ? 'LAS 5 COLUMNAS' : 'THE 5 COLUMNS',
      title: isEs ? 'La Anatomía de la Matriz de 30 Ideas' : 'Anatomy of the 30-Idea Matrix',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Pilar Asignado',
              desc: 'Educar, Conectar, Demostrar, Desmentir o Venta Directa.',
            },
            {
              number: '02',
              title: 'Gancho (0-3s)',
              desc: 'Frase de impacto que detiene el scroll y promete una solución.',
            },
            {
              number: '03',
              title: 'Problema / Duda',
              desc: 'La fricción específica o pregunta de cliente que resuelve el clip.',
            },
            {
              number: '04',
              title: 'Toma B-Roll',
              desc: 'Encuadre sugerido: manos trabajando, pantalla o plano medio.',
            },
            {
              number: '05',
              title: 'CTA a WhatsApp',
              desc: 'Palabra clave y acción que debe realizar el espectador.',
            },
          ]
        : [
            { number: '01', title: 'Content Pillar', desc: 'Educate, Connect, Prove, Debunk or Direct Sale.' },
            { number: '02', title: 'Hook (0-3s)', desc: 'Attention-grabbing sentence stopping the scroll.' },
            { number: '03', title: 'Problem / FAQ', desc: 'Specific buyer friction or objection addressed.' },
            { number: '04', title: 'B-Roll Shot', desc: 'Suggested camera framing: hands, screen, or medium shot.' },
            { number: '05', title: 'WhatsApp CTA', desc: 'Target keyword and direct action for the viewer.' },
          ],
      instructorNotes: {
        duration: '8:00 - 11:00 min',
        script: isEs
          ? 'Repasen cada una de las 5 columnas. Insistan en que llenar la matriz toma menos de 45 minutos y ahorra semanas de indecisión.'
          : 'Review each of the 5 columns. Emphasize that filling the matrix takes under 45 minutes and saves weeks of hesitation.',
      },
    },
    {
      id: 's05',
      type: 'challenge',
      tag: isEs ? 'ENTREGABLE OFICIAL SEMANA 1' : 'OFFICIAL WEEK 1 DELIVERABLE',
      title: isEs ? 'Reto 1: Tu Matriz de 30 Ideas' : 'Challenge 1: Your 30-Idea Matrix',
      challengeData: isEs
        ? {
            whatToDo: 'Descarga la plantilla en Notion o PDF interactivo, completa las 30 filas con tus ganchos y súbela al aula virtual.',
            whatToDeliver: 'Enlace de Notion o archivo PDF con la Matriz de 30 Ideas completa.',
            whereToSubmit: 'Subir en la sección Entregable de la Semana 1 en el Aula Virtual.',
            criteria: [
              '30 ideas categorizadas en los 5 pilares',
              'Ganchos directos sin introducciones lentas',
              'Llamados a la acción hacia WhatsApp definidos',
              'Entrega antes del domingo a las 11:59 PM',
            ],
          }
        : {
            whatToDo: 'Download the Notion or interactive PDF template, fill the 30 rows with your hooks, and upload to the portal.',
            whatToDeliver: 'Notion link or completed PDF file with the 30-Idea Matrix.',
            whereToSubmit: 'Submit in Week 1 Deliverable section in the Classroom.',
            criteria: [
              '30 ideas mapped across all 5 pillars',
              'Direct hooks without slow intros',
              'Clear WhatsApp keyword CTAs',
              'Submission before Sunday 11:59 PM',
            ],
          },
      instructorNotes: {
        duration: '11:00 - 15:00 min',
        script: isEs
          ? 'Cierren felicitando a la cohorte por completar la Semana 1 de Estrategia. Recuerden que en la Semana 2 empezaremos a grabar con el celular.'
          : 'Congratulate the cohort on completing Week 1 Strategy. Remind them that in Week 2 we begin mobile filming.',
      },
    },
  ];

  return {
    id: 'm01-03-content-pillars',
    slug: 'm01-03-content-pillars',
    lessonId: 'm01-03',
    title: isEs ? 'Clase 1.3 — Pilares de Contenido & Matriz 30D' : 'Lesson 1.3 — Content Pillars & 30-Day Matrix',
    moduleTag: isEs ? 'SEMANA 1 · ESTRATEGIA' : 'WEEK 1 · STRATEGY',
    estimatedMinutes: 15,
    slides,
  };
};
