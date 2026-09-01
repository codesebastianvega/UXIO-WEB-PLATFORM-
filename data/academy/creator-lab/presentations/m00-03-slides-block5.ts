import { SlideData } from './types';
import { getLiveLabInstructorNotes } from './m00-03-notes';

export const getLiveLabBlock5 = (isEs: boolean): SlideData[] => {
  const notes = getLiveLabInstructorNotes(isEs);

  return [
    {
      id: 's18',
      type: 'concept',
      tag: isEs ? 'ECOSISTEMA' : 'ECOSYSTEM',
      title: isEs ? 'Canales Oficiales de Acompañamiento' : 'Official Support Ecosystem',
      subtitle: isEs
        ? 'Dónde interactuar, descargar materiales y pedir ayuda durante la cohorte.'
        : 'Where to connect, get resources, and receive support during cohort.',
      blockColor: '#10B981',
      points: isEs
        ? [
            {
              label: 'Aula Virtual UXIO',
              text: 'Tu centro de mando: videos, diapositivas, tests y entrega de tareas.',
              tag: 'Plataforma',
              icon: 'Sparkles',
              detailData: {
                tag: 'CANAL // AULA VIRTUAL',
                title: 'El Portal de Aprendizaje UXIO Academy',
                subtitle: 'Tu espacio centralizado disponible 24/7 en cualquier dispositivo.',
                description: 'Accede a las presentaciones interactivas, descarga recursos en PDF 16:9 y sigue tu porcentaje de progreso hacia la certificación.',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Plataforma interactiva con motor de diapositivas',
                highlights: ['Acceso ilimitado a grabaciones y updates.', 'Modo oscuro y claro adaptativo.', 'Módulo de autoevaluación y rúbricas.'],
                actionTip: 'Guarda el enlace del aula en tus marcadores favoritos.',
              },
            },
            {
              label: 'Grupo de WhatsApp VIP',
              text: 'Alertas inmediatas de sesiones en vivo y recordatorios clave.',
              tag: 'Alertas',
              icon: 'MessageSquare',
              detailData: {
                tag: 'CANAL // WHATSAPP VIP',
                title: 'El Canal de Avisos y Alertas Inmediatas',
                subtitle: 'Para que nunca te pierdas una sesión en vivo ni un cierre de entrega.',
                description: 'Grupo exclusivo de la cohorte para anuncios prioritarios, enlaces directos a Google Meet y avisos de nuevas plantillas disponibles.',
                image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Comunicación ágil y directa para la cohorte',
                highlights: ['Avisos 15 minutos antes de cada sesión.', 'Recordatorios dominicales de retos.', 'Canal para emergencias de acceso.'],
                actionTip: 'Fija el grupo de WhatsApp en la parte superior de tus chats.',
              },
            },
            {
              label: 'Discord / Mesa Docente',
              text: 'Revisión de guiones, consultas técnicas y networking entre pares.',
              tag: 'Soporte 24/7',
              icon: 'Users',
              detailData: {
                tag: 'CANAL // DISCORD & MESA DOCENTE',
                title: 'La Sala de Trabajo y Colaboración',
                subtitle: 'Canales organizados por temas para destrabar cada etapa de tu proceso.',
                description: 'Comparte borradores de guiones, pide opinión sobre tus primeros cortes de video y conecta con otros fundadores de tu misma industria.',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Espacio de trabajo comunitario y retroalimentación entre pares',
                highlights: ['Canales dedicados por semana formativa.', 'Intercambio de recursos y presets de CapCut.', 'Mesa de ayuda docente activa L-V.'],
                actionTip: 'Descarga Discord en tu teléfono y computador.',
              },
            },
          ]
        : [
            { label: 'UXIO Classroom Portal', text: 'Command hub: lessons, slides, quizzes, and milestone submissions.', tag: 'Platform', icon: 'Sparkles' },
            { label: 'WhatsApp VIP Group', text: 'Instant alerts for live sessions and deadline reminders.', tag: 'Alerts', icon: 'MessageSquare' },
            { label: 'Discord Community', text: 'Script review, technical questions, and peer networking.', tag: '24/7 Support', icon: 'Users' },
          ],
      instructorNotes: notes.s18,
    },
    {
      id: 's19',
      type: 'challenge',
      tag: isEs ? 'RETO DE SEMANA 0' : 'WEEK 0 CHALLENGE',
      title: isEs ? 'Tu Misión para el Domingo: Ficha de Diagnóstico' : 'Your Sunday Mission: Brand Diagnosis Form',
      subtitle: isEs
        ? 'El primer entregable obligatorio para desbloquear tu acceso al Módulo 1.'
        : 'The first mandatory milestone to unlock access to Module 1.',
      blockColor: '#10B981',
      challengeData: {
        whatToDo: isEs
          ? '1. Diligencia tu Ficha de Diagnóstico (Reto 0). 2. Calibra tu smartphone a 30 FPS. 3. Define tus 3 dolores de cliente.'
          : '1. Fill out Brand Diagnosis Form (Challenge 0). 2. Calibrate phone to 30 FPS. 3. Map your 3 customer pain points.',
        whatToDeliver: isEs
          ? 'Ficha de Diagnóstico completada en la plataforma antes del domingo 11:59 PM.'
          : 'Brand Diagnosis submitted in portal before Sunday 11:59 PM.',
        whereToSubmit: isEs ? 'Aula Virtual UXIO (Sección Reto 0)' : 'UXIO Classroom (Challenge 0 tab)',
        criteria: isEs
          ? [
              'Oferta estrella y cliente ideal claramente definidos.',
              'Los 3 dolores reales redactados con precisión.',
              'Cámara de celular calibrada y lista para rodar.',
            ]
          : [
              'Core offer and target client clearly defined.',
              '3 real pain points written with precision.',
              'Phone camera calibrated and ready to shoot.',
            ],
      },
      instructorNotes: notes.s19,
    },
    {
      id: 's20',
      type: 'statement',
      tag: isEs ? 'BLOQUE 05 · 85:00 - 95:00 MIN' : 'BLOCK 05 · 85:00 - 95:00 MIN',
      title: isEs
        ? '¿Listo para hacer que las cosas pasen?'
        : 'Ready to make high-impact things happen?',
      subtitle: isEs
        ? 'Micrófonos abiertos: Levanta la mano en Meet o escribe en el chat para auditar tu caso en vivo con Sebas.'
        : 'Open microphones: Raise your hand on Meet or type in chat to audit your case live with Sebas.',
      highlight: isEs ? 'Destrabe Estratégico 1 a 1 · Despegue Oficial' : '1-on-1 Strategic Feedback · Official Takeoff',
      bgColor: '#7928CA',
      blockColor: '#7928CA',
      auroraColors: ['#7928CA', '#A855F7', '#6D28D9'],
      instructorNotes: notes.s20,
    },
    {
      id: 's21',
      type: 'concept',
      tag: isEs ? 'PRÓXIMO PASO' : 'NEXT STEP',
      title: isEs ? '¡Nos Vemos el Lunes en la Semana 1!' : 'See You Monday in Week 1!',
      subtitle: isEs
        ? 'Semana 1: De Negocio a Contenido — Construcción de tu Matriz de 30 Ideas.'
        : 'Week 1: Business to Content — Building your 30-Idea Commercial Matrix.',
      blockColor: '#7928CA',
      points: isEs
        ? [
            {
              label: 'Lunes 8:00 AM',
              text: 'Apertura de las microclases del Módulo 1 en tu aula virtual.',
              tag: 'Lanzamiento',
              icon: 'Sparkles',
              detailData: {
                tag: 'SEMANA 01 // LANZAMIENTO',
                title: 'Comienza el Módulo 1: Estrategia de Contenidos',
                subtitle: 'Tu primer paso formal hacia un sistema de adquisición predecible.',
                description: 'Aprenderás a extraer 30 ideas comerciales de tu día a día y estructurarlas en una matriz editorial de 5 pilares innegociables.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Apertura oficial de las microclases del Módulo 1',
                highlights: ['2 microclases en video de alta calidad.', 'Plantilla de Matriz 30D descargable.', 'Reto práctico 1: Tus primeras 10 ideas.'],
                actionTip: 'Configura una alarma el lunes a las 8:00 AM para ingresar al aula.',
              },
            },
            {
              label: 'Plantillas Desbloqueadas',
              text: 'Hoja de ruta y generador de ganchos listos para usar.',
              tag: 'Herramientas',
              icon: 'CheckCircle2',
              detailData: {
                tag: 'RECURSOS // PLANTILLAS',
                title: 'Herramientas Listas para Duplicar y Usar',
                subtitle: 'No empieces desde cero; usa estructuras que ya han facturado miles de dólares.',
                description: 'Recibirás las mismas hojas de cálculo y documentos de Notion que usamos internamente en UXIO para producir contenido a escala.',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Hojas de trabajo y matrices comerciales de Creator Lab',
                highlights: ['Banco de 50 ganchos verticales de retención.', 'Guion estructurado en 4 bloques.', 'Filtro de validación de dolor comercial.'],
                actionTip: 'Duplica las plantillas en tu espacio de trabajo de Notion.',
              },
            },
            {
              label: 'Recuerda',
              text: 'Progreso sobre perfección. Es momento de hacer que las cosas pasen.',
              tag: 'Mentalidad',
              icon: 'ShieldCheck',
              detailData: {
                tag: 'MANIFIESTO // CIERRE',
                title: 'Progreso sobre Perfección: Tu Nuevo Estándar',
                subtitle: 'Un creador que publica imperfecto supera al perfeccionista que nunca sube nada.',
                description: 'Tienes todo el equipo necesario en tu bolsillo y a toda una comunidad respaldando tu crecimiento. ¡Nos vemos en el Módulo 1!',
                image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Comunidad UXIO Academy Creator Lab Cohorte 01',
                highlights: ['1 video publicado vale más que 10 borradores.', 'La confianza frente a cámara se construye grabando.', 'Estamos juntos en este viaje.'],
                actionTip: 'Completa tu Reto 0 antes del domingo y prepárate para despegar.',
              },
            },
          ]
        : [
            { label: 'Monday 8:00 AM', text: 'Module 1 video capsules unlocked in your portal.', tag: 'Release', icon: 'Sparkles' },
            { label: 'Worksheets Ready', text: 'Content roadmap and hook generator ready to use.', tag: 'Tools', icon: 'CheckCircle2' },
            { label: 'Remember', text: 'Progress over perfection. It is time to make things happen.', tag: 'Mindset', icon: 'ShieldCheck' },
          ],
      instructorNotes: notes.s21,
    },
  ];
};
