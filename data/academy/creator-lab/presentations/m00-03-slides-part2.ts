import { SlideData } from './types';
import { getLiveLabInstructorNotes } from './m00-03-notes';

export const getLiveLabSlidesPart2 = (isEs: boolean): SlideData[] => {
  const notes = getLiveLabInstructorNotes(isEs);

  return [
    {
      id: 's10',
      type: 'title',
      tag: isEs ? 'BLOQUE 03 · 45:00 - 70:00 MIN' : 'BLOCK 03 · 45:00 - 70:00 MIN',
      title: isEs ? '3. Taller en Vivo: Diagnóstico de Oferta' : '3. Live Workshop: Offer Diagnosis',
      subtitle: isEs
        ? '[☕ Receso de 3 min] Ve por agua y ten Notion o libreta a la mano. ¡Arrancamos a escribir tu oferta!'
        : '[☕ 3-Min Break] Grab fresh water and your notebook. Time to write your core offer live!',
      highlight: isEs ? 'Taller Práctico · 3 Ejercicios Guiados' : 'Practical Workshop · 3 Guided Exercises',
      imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&auto=format&fit=crop&q=80',
      instructorNotes: notes.s10,
    },
    {
      id: 's11',
      type: 'concept',
      tag: isEs ? 'TALLER EN VIVO 01' : 'LIVE WORKSHOP 01',
      title: isEs ? 'Taller 1: Diagnóstico de tu Oferta Estrella' : 'Workshop 1: Core Offer Diagnosis',
      subtitle: isEs
        ? 'Claridad antes de grabar: Si tu oferta no es clara, ningún video la va a vender.'
        : 'Clarity before filming: If your offer is vague, no video will save it.',
      points: isEs
        ? [
            { label: '¿Qué vendes exactamente?', text: 'Define el resultado tangible que tu cliente recibe (no el proceso técnico).', tag: 'Resultado', icon: 'Sparkles' },
            { label: '¿Quién tiene la billetera?', text: 'Identifica al tomador de decisiones dispuesto y con capacidad de pago.', tag: 'Comprador', icon: 'Users' },
            { label: '¿Cuál es tu ticket promedio?', text: 'Establece tu precio claro ($50, $200, $1.000 USD) para calcular tu meta.', tag: 'Precio', icon: 'CheckCircle2' },
          ]
        : [
            { label: 'What do you sell?', text: 'Define the tangible outcome your client receives (not the process).', tag: 'Outcome', icon: 'Sparkles' },
            { label: 'Who holds the wallet?', text: 'Identify the decision maker with purchasing power.', tag: 'Buyer', icon: 'Users' },
            { label: 'What is your price?', text: 'Set your clear price ($50, $200, $1k USD) to calculate your goal.', tag: 'Pricing', icon: 'CheckCircle2' },
          ],
      instructorNotes: notes.s11,
    },
    {
      id: 's12',
      type: 'concept',
      tag: isEs ? 'TALLER EN VIVO 02' : 'LIVE WORKSHOP 02',
      title: isEs ? 'Taller 2: Los 3 Dolores Reales vs. Dolores de Relleno' : 'Workshop 2: 3 Real Pains vs. Generic Filler',
      subtitle: isEs
        ? 'La gente no compra por características; compra para apagar un dolor urgente.'
        : 'Audiences do not buy features; they buy to put out an urgent fire.',
      points: isEs
        ? [
            { label: 'Dolor 1: Pérdida de Dinero / Tiempo', text: '¿Qué están haciendo mal hoy que les cuesta horas o plata?', tag: 'Fricción', icon: 'Clock' },
            { label: 'Dolor 2: Frustración y Confusión', text: '¿Qué han intentado antes que no les funcionó?', tag: 'Obstáculo', icon: 'ShieldCheck' },
            { label: 'Dolor 3: Miedo a Quedar Atrás', text: '¿Qué pasa si no resuelven esto en los próximos 6 meses?', tag: 'Urgencia', icon: 'Sparkles' },
          ]
        : [
            { label: 'Pain 1: Lost Money / Time', text: 'What mistake is costing them time or revenue right now?', tag: 'Friction', icon: 'Clock' },
            { label: 'Pain 2: Frustration & Confusion', text: 'What did they try before that failed?', tag: 'Obstacle', icon: 'ShieldCheck' },
            { label: 'Pain 3: Fear of Falling Behind', text: 'What happens if they do not fix this in 6 months?', tag: 'Urgency', icon: 'Sparkles' },
          ],
      instructorNotes: notes.s12,
    },
    {
      id: 's13',
      type: 'concept',
      tag: isEs ? 'TALLER EN VIVO 03' : 'LIVE WORKSHOP 03',
      title: isEs ? 'Taller 3: Tu Promesa Única en 1 Frase' : 'Workshop 3: Your 1-Sentence Core Promise',
      subtitle: isEs
        ? 'La fórmula maestra de posicionamiento que pondrás en tu biografía y tus videos.'
        : 'The positioning master formula for your bio and video hooks.',
      points: isEs
        ? [
            { label: 'La Fórmula Maestra', text: '"Ayudo a [Cliente Ideal] a lograr [Resultado Deseado] sin [Mayor Frustración]."', tag: 'Plantilla', icon: 'Sparkles' },
            { label: 'Ejemplo 1 (Servicios)', text: '"Ayudo a odontólogos a llenar su agenda semanal sin pagar agencias costosas."', tag: 'B2B', icon: 'Users' },
            { label: 'Ejemplo 2 (Educación/Cursos)', text: '"Ayudo a emprendedores a vender con su celular sin gastar en cámaras de cine."', tag: 'Creator', icon: 'CheckCircle2' },
          ]
        : [
            { label: 'Master Formula', text: '"I help [Target Client] achieve [Desired Outcome] without [Biggest Frustration]."', tag: 'Template', icon: 'Sparkles' },
            { label: 'Example 1 (Services)', text: '"I help dentists fill their weekly calendars without paying costly agencies."', tag: 'B2B', icon: 'Users' },
            { label: 'Example 2 (Courses)', text: '"I help founders sell with their phone without buying cinema cameras."', tag: 'Creator', icon: 'CheckCircle2' },
          ],
      instructorNotes: notes.s13,
    },
    {
      id: 's14',
      type: 'title',
      tag: isEs ? 'BLOQUE 04 · 70:00 - 85:00 MIN' : 'BLOCK 04 · 70:00 - 85:00 MIN',
      title: isEs ? '4. Pacto Comunitario, Ritmo & Reto 0' : '4. Community Pact, Rhythm & Challenge 0',
      subtitle: isEs
        ? 'Los 3 compromisos de la cohorte, el calendario semanal y la misión para el domingo.'
        : 'Cohort commitments, operating rhythm, and your first mission due Sunday.',
      highlight: isEs ? 'Disciplina de Cohorte · Camino a la Certificación' : 'Cohort Discipline · Certification Path',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80',
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
      points: isEs
        ? [
            { label: '1. Entrega Dominical Puntual', text: 'Cada domingo a las 11:59 PM se cierra la entrega para recibir feedback individual.', tag: 'Disciplina', icon: 'Calendar' },
            { label: '2. Feedback Mutuo en Comunidad', text: 'Comenta y apoya los videos de tus compañeros en WhatsApp y Discord.', tag: 'Networking', icon: 'Users' },
            { label: '3. Cero Miedo al Error', text: 'Aquí no juzgamos si te trabas en cámara; premiamos la acción y la consistencia.', tag: 'Zona Segura', icon: 'ShieldCheck' },
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
      steps: isEs
        ? [
            { number: '01', title: 'Lunes: Clases en Video', desc: 'Cápsulas de 10-15 min con plantillas descargables.', tag: 'Aprender' },
            { number: '02', title: 'Miércoles: Q&A y Destrabe', desc: 'Consultas rápidas en Discord y WhatsApp.', tag: 'Soporte' },
            { number: '03', title: 'Viernes: Grabación & Edición', desc: 'Grabación con celular y edición rápida en CapCut.', tag: 'Crear' },
            { number: '04', title: 'Domingo: Entrega del Reto', desc: 'Subida al aula virtual para calificación y feedback.', tag: 'Entregar' },
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
    {
      id: 's18',
      type: 'concept',
      tag: isEs ? 'ECOSISTEMA' : 'ECOSYSTEM',
      title: isEs ? 'Canales Oficiales de Acompañamiento' : 'Official Support Ecosystem',
      subtitle: isEs
        ? 'Dónde interactuar, descargar materiales y pedir ayuda durante la cohorte.'
        : 'Where to connect, get resources, and receive support during cohort.',
      points: isEs
        ? [
            { label: 'Aula Virtual UXIO', text: 'Tu centro de mando: videos, diapositivas, tests y entrega de tareas.', tag: 'Plataforma', icon: 'Sparkles' },
            { label: 'Grupo de WhatsApp VIP', text: 'Alertas inmediatas de sesiones en vivo y recordatorios clave.', tag: 'Alertas', icon: 'MessageSquare' },
            { label: 'Discord / Mesa Docente', text: 'Revisión de guiones, consultas técnicas y networking entre pares.', tag: 'Soporte 24/7', icon: 'Users' },
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
      type: 'title',
      tag: isEs ? 'BLOQUE 05 · 85:00 - 95:00 MIN' : 'BLOCK 05 · 85:00 - 95:00 MIN',
      title: isEs ? '5. Micrófonos Abiertos: Q&A en Vivo' : '5. Open Microphones: Live Q&A',
      subtitle: isEs
        ? 'Levanta la mano en Google Meet o escribe en el chat para auditar tu caso en vivo con Sebas.'
        : 'Raise your hand on Google Meet or type in chat to audit your case live with Sebas.',
      highlight: isEs ? 'Destrabe Estratégico 1 a 1 · Despegue Oficial' : '1-on-1 Strategic Feedback · Official Takeoff',
      imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1600&auto=format&fit=crop&q=80',
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
      points: isEs
        ? [
            { label: 'Lunes 8:00 AM', text: 'Apertura de las microclases del Módulo 1 en tu aula virtual.', tag: 'Lanzamiento', icon: 'Sparkles' },
            { label: 'Plantillas Desbloqueadas', text: 'Hoja de ruta y generador de ganchos listos para usar.', tag: 'Herramientas', icon: 'CheckCircle2' },
            { label: 'Recuerda', text: 'Progreso sobre perfección. Es momento de hacer que las cosas pasen.', tag: 'Mentalidad', icon: 'ShieldCheck' },
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
