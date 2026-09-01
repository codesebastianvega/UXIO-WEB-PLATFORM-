import { SlideData } from './types';
import { getLiveLabInstructorNotes } from './m00-03-notes';

export const getLiveLabBlock4 = (isEs: boolean): SlideData[] => {
  const notes = getLiveLabInstructorNotes(isEs);

  return [
    {
      id: 's14',
      type: 'statement',
      tag: isEs ? 'BLOQUE 04 · 70:00 - 85:00 MIN' : 'BLOCK 04 · 70:00 - 85:00 MIN',
      title: isEs
        ? '¿Qué separa al estudiante que termina del que abandona?'
        : 'What separates the creator who finishes from the one who quits?',
      subtitle: isEs
        ? 'Los 3 compromisos innegociables de la cohorte, el ciclo de operación semanal y tu primera misión para el domingo.'
        : 'The 3 cohort commitments, weekly operating rhythm, and your first Sunday mission.',
      highlight: isEs ? 'Disciplina de Cohorte · Camino a la Certificación' : 'Cohort Discipline · Certification Path',
      bgColor: '#10B981',
      blockColor: '#10B981',
      auroraColors: ['#10B981', '#34D399', '#059669'],
      instructorNotes: notes.s14,
    },
    {
      id: 's15',
      type: 'concept',
      tag: isEs ? 'PACTO COMUNITARIO' : 'COMMUNITY PACT',
      title: isEs ? 'Los 3 Compromisos Innegociables de la Cohorte' : '3 Non-Negotiable Cohort Commitments',
      subtitle: isEs
        ? 'Las reglas del juego que garantizan que el 100% de los creadores tenga éxito.'
        : 'The rules of the game ensuring 100% of creators cross the finish line.',
      blockColor: '#10B981',
      points: isEs
        ? [
            {
              label: '1. Entrega Dominical Puntual',
              text: 'Cada domingo a las 11:59 PM se cierra la entrega para recibir feedback individual.',
              tag: 'Disciplina',
              icon: 'Calendar',
              detailData: {
                tag: 'PACTO // ENTREGA DOMINICAL',
                title: 'El Hábito de la Entrega Innegociable',
                subtitle: 'La consistencia en la entrega semanal es el predictor #1 de resultados de ventas.',
                description: 'Cada semana tiene 1 reto práctico (guion, video grabado, edición en CapCut o embudo). Entregar a tiempo te da acceso al feedback de la mesa docente.',
                image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Planificación semanal y cumplimiento de fechas de entrega',
                highlights: ['Cierre cada domingo a las 11:59 PM.', 'Calificación con rúbrica oficial de 3 criterios.', 'Feedback constructivo para mejorar.'],
                actionTip: 'Bloquea los viernes por la tarde como tu franja oficial de creación.',
              },
            },
            {
              label: '2. Feedback Mutuo en Comunidad',
              text: 'Comenta y apoya los videos de tus compañeros en WhatsApp y Discord.',
              tag: 'Networking',
              icon: 'Users',
              detailData: {
                tag: 'PACTO // COMUNIDAD',
                title: 'El Poder de una Cohorte Comprometida',
                subtitle: 'Aprender solo es difícil; avanzar junto a 30 fundadores acelera el ritmo un 300%.',
                description: 'En el grupo de WhatsApp y Discord revisamos enlaces, celebramos las primeras ventas y nos damos impulso mutuo con retroalimentación real.',
                image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Networking activo y colaboración entre miembros de la cohorte',
                highlights: ['Canal #revisión-de-guiones en Discord.', 'Espacio seguro libre de críticas destructivas.', 'Alianzas comerciales entre alumnos.'],
                actionTip: 'Preséntate en el canal de bienvenida de Discord hoy mismo.',
              },
            },
            {
              label: '3. Cero Miedo al Error',
              text: 'Aquí no juzgamos si te trabas en cámara; premiamos la acción y la consistencia.',
              tag: 'Zona Segura',
              icon: 'ShieldCheck',
              detailData: {
                tag: 'PACTO // ZONA SEGURA',
                title: 'La Imperfección como Trampolín de Crecimiento',
                subtitle: 'Tu primer video no tiene que ser una obra maestra; solo tiene que existir.',
                description: 'Todos los referentes empezaron con tomas tímidas y poca soltura. En Creator Lab celebramos cada toma grabada porque sabemos que la soltura viene con la práctica.',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Espacio seguro para equivocarse, aprender y mejorar frente a cámara',
                highlights: ['Los tropiezos son parte natural del entrenamiento.', 'El algoritmo premia la autenticidad.', 'Cada semana tu soltura mejorará notablemente.'],
                actionTip: 'El mercado premia a quien se atreve a comunicar con claridad.',
              },
            },
          ]
        : [
            { label: '1. On-Time Sunday Submission', text: 'Every Sunday at 11:59 PM challenge closes for personalized feedback.', tag: 'Discipline', icon: 'Calendar' },
            { label: '2. Constructive Community Support', text: 'Review and support peer clips on WhatsApp and Discord.', tag: 'Networking', icon: 'Users' },
            { label: '3. Zero Fear of Mistakes', text: 'We do not judge on-camera stumbles; we celebrate consistency.', tag: 'Safe Zone', icon: 'ShieldCheck' },
          ],
      instructorNotes: notes.s15,
    },
    {
      id: 's16',
      type: 'steps',
      tag: isEs ? 'METODOLOGÍA' : 'METHODOLOGY',
      title: isEs ? 'El Ciclo Semanal de Operación' : 'The Weekly Operating Cadence',
      subtitle: isEs
        ? 'Así funciona tu rutina de trabajo durante las próximas 5 semanas en UXIO Academy.'
        : 'How your workflow operates across the 5 weeks inside UXIO Academy.',
      blockColor: '#10B981',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Lunes: Clases en Video',
              desc: 'Cápsulas de 10-15 min con plantillas descargables en el aula.',
              tag: 'Aprender',
              detailData: {
                tag: 'CICLO // LUNES',
                title: 'Lunes: Apertura de Módulos & Plantillas',
                subtitle: 'Microclases de alta densidad para estudiar a tu propio ritmo.',
                description: 'Cada lunes a las 8:00 AM se desbloquean las 2 microclases de la semana con sus respectivas plantillas Notion y hojas de trabajo.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Contenido formativo en video y plantillas descargables',
                highlights: ['Videos de 10 a 15 minutos directos al grano.', 'Plantillas listas para duplicar en Notion.', 'Quiz rápido de comprensión.'],
                actionTip: 'Dedica 30 minutos los lunes por la mañana para ver los videos.',
              },
            },
            {
              number: '02',
              title: 'Miércoles: Q&A y Destrabe',
              desc: 'Consultas rápidas en Discord y WhatsApp para afinar guiones.',
              tag: 'Soporte',
              detailData: {
                tag: 'CICLO // MIÉRCOLES',
                title: 'Miércoles: Sesión de Destrabe Estratégico',
                subtitle: 'Aclara dudas sobre tu nicho, ganchos o configuración de equipo.',
                description: 'Si te sientes bloqueado con una idea o no sabes qué gancho usar, nuestro equipo docente revisa tu caso en el canal de soporte.',
                image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Soporte continuo y resolución de dudas técnicas y estratégicas',
                highlights: ['Revisión de guiones y corrección de ganchos.', 'Ajustes en el setup de audio e iluminación.', 'Orientación personalizada.'],
                actionTip: 'Publica tu borrador de guion en Discord para recibir visto bueno.',
              },
            },
            {
              number: '03',
              title: 'Viernes: Grabación & Edición',
              desc: 'Grabación con celular y edición rápida de 15 minutos en CapCut.',
              tag: 'Crear',
              detailData: {
                tag: 'CICLO // VIERNES',
                title: 'Viernes: Bloque de Producción Práctica',
                subtitle: 'El momento de ejecutar con tu smartphone sin distracciones.',
                description: 'Prepara tu espacio con luz de ventana, aplica el checklist de 60 segundos y graba tus tomas. Luego aplica cortes secos y subtítulos en CapCut.',
                image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Sesión de grabación móvil y edición ágil en CapCut',
                highlights: ['Graba 3 variaciones del gancho.', 'Edita en 15 minutos con subtítulos UXIO.', 'Exporta en 1080p a 30 FPS listo para subir.'],
                actionTip: 'Pon tu teléfono en Modo Avión antes de presionar Rec.',
              },
            },
            {
              number: '04',
              title: 'Domingo: Entrega del Reto',
              desc: 'Subida al aula virtual para calificación y feedback oficial.',
              tag: 'Entregar',
              detailData: {
                tag: 'CICLO // DOMINGO',
                title: 'Domingo: Entrega Oficial en Plataforma',
                subtitle: 'El cierre de semana que consolida tu avance hacia la certificación.',
                description: 'Pega el enlace de tu video o documento en el formulario del aula virtual antes de las 11:59 PM para acumular puntaje de graduación.',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
                imageCaption: 'Portal de entregas y certificación académica oficial',
                highlights: ['Confirmación inmediata en el sistema.', 'Calificación con rúbrica pedagógica.', 'Desbloqueo del siguiente módulo.'],
                actionTip: 'Sube tu entrega el sábado para descansar el domingo.',
              },
            },
          ]
        : [
            { number: '01', title: 'Monday: Video Lessons', desc: '10-15 min capsules with worksheets.', tag: 'Learn' },
            { number: '02', title: 'Wednesday: Quick Q&A', desc: 'Unblocking questions on Discord/WhatsApp.', tag: 'Support' },
            { number: '03', title: 'Friday: Film & Edit', desc: 'Mobile filming & fast CapCut editing.', tag: 'Create' },
            { number: '04', title: 'Sunday: Milestone Submission', desc: 'Classroom portal upload for mentor review.', tag: 'Submit' },
          ],
      instructorNotes: notes.s16,
    },
    {
      id: 's17',
      type: 'comparison',
      tag: isEs ? 'MENTALIDAD' : 'MINDSET',
      title: isEs ? 'Estudiante Pasivo vs. Creador de Resultados' : 'Passive Student vs. Result-Driven Creator',
      subtitle: isEs
        ? 'La diferencia entre consumir cursos o construir un canal de ingresos real.'
        : 'The difference between watching passively and building real revenue.',
      blockColor: '#10B981',
      comparison: {
        beforeLabel: isEs ? 'MODO ESPECTADOR' : 'SPECTATOR MODE',
        before: isEs
          ? [
              'Ve los videos pero no completa las plantillas.',
              'Pospone la grabación esperando el fin de semana "perfecto".',
              'No participa en el chat ni pide feedback.',
              'Termina las 5 semanas con cero videos publicados.',
            ]
          : [
              'Watches videos but never fills out worksheets.',
              'Postpones filming waiting for the "perfect" weekend.',
              'Never asks questions in chat.',
              'Finishes 5 weeks with zero published videos.',
            ],
        afterLabel: isEs ? 'CREADOR UXIO' : 'UXIO CREATOR',
        after: isEs
          ? [
              'Completa la Ficha de Diagnóstico el primer día.',
              'Aplica el checklist de 60s y graba sin rodeos.',
              'Entrega cada domingo puntual antes de las 11:59 PM.',
              'Termina con 30 clips producidos y clientes cerrados.',
            ]
          : [
              'Completes Brand Diagnosis on Day 1.',
              'Applies 60s checklist and shoots without delay.',
              'Submits every Sunday before 11:59 PM.',
              'Graduates with 30 clips and closed paying clients.',
            ],
      },
      instructorNotes: notes.s17,
    },
  ];
};
