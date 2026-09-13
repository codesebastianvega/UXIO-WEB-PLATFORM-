import { SlideData } from './types';

export const getLiveLab5Block4 = (isEs: boolean): SlideData[] => [
  {
    id: 's13',
    type: 'section',
    tag: isEs ? 'BLOQUE 4: PROYECTO FINAL' : 'BLOCK 4: CAPSTONE DELIVERABLE',
    title: isEs ? 'Rúbrica Oficial del Proyecto Final del Creator Lab' : 'Official Creator Lab Capstone Rubric',
    subtitle: isEs
      ? 'Los 3 entregables que debes subir al aula virtual para graduarte y recibir tu constancia certificada.'
      : 'The 3 assets you must upload to the virtual classroom to graduate and unlock your official certificate.',
    highlight: isEs ? 'Rúbrica de Graduación ➔' : 'Graduation Rubric ➔',
    bgColor: '#7928CA',
    instructorNotes: {
      duration: '75:00 - 80:00 min',
      script: isEs
        ? 'Explicaremos la rúbrica oficial de entrega del Proyecto Final para que todos tengan su certificación aprobada.'
        : 'Walk through the official capstone evaluation rubric so all students can successfully certify.',
    },
  },
  {
    id: 's14',
    type: 'checklist',
    tag: isEs ? 'RÚBRICA DE EVALUACIÓN' : 'EVALUATION RUBRIC',
    title: isEs ? 'Los 3 Entregables del Proyecto Final' : 'The 3 Final Capstone Deliverables',
    subtitle: isEs
      ? 'Asegúrate de incluir estos 3 archivos en tu entrega antes del domingo a las 11:59 PM.'
      : 'Ensure all 3 items are attached before Sunday 11:59 PM.',
    points: isEs
      ? [
          {
            label: '1. Calendario de 30 Días Estructurado',
            text: 'Tu matriz de contenido completa con los 5 pilares, ganchos psicológicos y formatos definidos.',
          },
          {
            label: '2. Enlace de tu Video Comercial Terminado',
            text: '1 video editado con cortes sin aire, subtítulos con color, música a -20 dB y CTA con palabra clave.',
          },
          {
            label: '3. Flujo Documentado de WhatsApp Business',
            text: 'Captura de tus 3 respuestas rápidas (/precio, /pago, /seguimiento) configuradas en tu móvil.',
          },
        ]
      : [
          {
            label: '1. 30-Day Structured Calendar',
            text: 'Your complete content matrix spanning 5 brand pillars, psychological hooks, and formats.',
          },
          {
            label: '2. Commercial Video URL',
            text: '1 polished video featuring tight jump cuts, colored auto-captions, -20 dB audio mix, and keyword CTA.',
          },
          {
            label: '3. WhatsApp Business Workflow',
            text: 'Screenshot of your 3 quick replies (/pricing, /pay, /followup) live in your WhatsApp Business app.',
          },
        ],
    instructorNotes: {
      duration: '80:00 - 84:00 min',
      script: isEs
        ? 'Aclaren que el equipo docente revisará cada entrega personalmente y otorgará retroalimentación.'
        : 'Assure students that the instructor team will review each capstone submission individually.',
    },
  },
  {
    id: 's15',
    type: 'section',
    tag: isEs ? 'BLOQUE 5: GRADUACIÓN' : 'BLOCK 5: GRADUATION',
    title: isEs ? 'De Creadores Amateur a Marcas con Voz Propia' : 'From Amateur Creators to Sovereign Brands',
    subtitle: isEs
      ? 'Celebramos la transformación de 5 semanas de trabajo intenso, superando el miedo a la cámara y dominando la producción móvil.'
      : 'Celebrating 5 weeks of dedicated execution: overcoming camera anxiety and mastering smartphone production.',
    highlight: isEs ? '¡Felicidades Cohorte 01! ➔' : 'Congratulations Cohort 01! ➔',
    bgColor: '#10B981',
    instructorNotes: {
      duration: '84:00 - 87:00 min',
      script: isEs
        ? 'Momento emotivo. Reconozcan el esfuerzo de todos los que llegaron hasta esta última sesión.'
        : 'Emotional milestone. Acknowledge the grit and consistency of every creator present.',
    },
  },
  {
    id: 's16',
    type: 'statement',
    tag: isEs ? 'MANIFIESTO FINAL' : 'FINAL MANIFESTO',
    title: isEs
      ? '"La consistencia vence al talento cuando el talento no es consistente."'
      : '"Consistency beats raw talent when talent fails to show up consistently."',
    subtitle: isEs
      ? 'Ya no necesitas cámaras de cine ni presupuestos gigantes. Tienes un estudio completo en el bolsillo de tu pantalón.'
      : 'You no longer need cinema cameras or massive agency budgets. You carry a full production studio in your pocket.',
    instructorNotes: {
      duration: '87:00 - 89:00 min',
      script: isEs
        ? 'Compartan este mensaje de empoderamiento: el activo más valioso es su propia voz y su capacidad de comunicar con claridad.'
        : 'Deliver an empowering close: their most valuable asset is their own authentic voice and clarity.',
    },
  },
  {
    id: 's17',
    type: 'closing',
    tag: isEs ? 'BIENVENIDOS A LA COMUNIDAD' : 'WELCOME TO THE NETWORK',
    title: isEs ? 'Acceso Vitalicio a la Red de Creadores UXIO' : 'Lifetime Access to UXIO Creator Network',
    subtitle: isEs
      ? 'Su viaje no termina aquí. Continuarán recibiendo actualizaciones de tendencias, sesiones de feedback mensuales y conexiones comerciales con la comunidad.'
      : 'Your journey begins now. Enjoy ongoing monthly trend teardowns, feedback jams, and peer networking in our alumni circle.',
    highlight: isEs ? '¡Nos Vemos en las Redes! 🚀' : 'See You on the Feeds! 🚀',
    instructorNotes: {
      duration: '89:00 - 90:00 min',
      script: isEs
        ? 'Agradezcan a todos, tomen una foto final de la pantalla con las cámaras encendidas y cierren la sesión con aplausos.'
        : 'Thank everyone, snap a group screen capture with cameras turned on, and conclude with warm applause.',
    },
  },
];
