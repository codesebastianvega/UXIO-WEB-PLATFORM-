import { SlideData } from './types';

export const getLiveLab5Block3 = (isEs: boolean): SlideData[] => [
  {
    id: 's9',
    type: 'section',
    tag: isEs ? 'BLOQUE 3: HOT SEAT EN VIVO' : 'BLOCK 3: LIVE HOT SEAT',
    title: isEs ? 'Auditoría en Directo: Los Guiones de WhatsApp de la Cohorte' : 'Live Hot Seat: Auditing Student WhatsApp Scripts',
    subtitle: isEs
      ? 'Subimos a 2 alumnos al escenario para reescribir sus respuestas rápidas y afinar su proceso comercial.'
      : 'Bringing 2 students on stage to rewrite their quick replies and tighten up sales conversion.',
    highlight: isEs ? 'Hot Seat con la Cohorte ➔' : 'Cohort Hot Seat ➔',
    bgColor: '#FE385B',
    instructorNotes: {
      duration: '45:00 - 50:00 min',
      script: isEs
        ? 'Invitamos a los 2 voluntarios seleccionados a abrir micrófono y compartir sus respuestas actuales en pantalla.'
        : 'Invite selected volunteers to unmute and share their current WhatsApp replies on screen.',
    },
  },
  {
    id: 's10',
    type: 'concept',
    tag: isEs ? 'CASO EN VIVO #1' : 'LIVE CASE #1',
    title: isEs ? 'Hot Seat 1: Producto Físico / E-commerce Local' : 'Hot Seat 1: Physical Goods & Local Brand',
    subtitle: isEs
      ? 'Cómo transformar la típica pregunta "¿Qué precio tiene?" en una venta con envío el mismo día.'
      : 'Turning the typical "What is the price?" into a same-day fulfilled order.',
    points: isEs
      ? [
          {
            label: 'Diagnóstico del Error',
            text: 'El alumno respondía solo "$85.000" sin contexto, lo que mataba la interacción y causaba silencios.',
            tag: 'Antes',
          },
          {
            label: 'Ajuste Inmediato UXIO',
            text: '"¡Hola Dani! El set completo está en $85.000 e incluye [beneficio clave]. ¿Para qué ciudad sería el envío?".',
            tag: 'Corrección',
          },
          {
            label: 'Resultado',
            text: 'El cliente responde su ciudad de inmediato y el vendedor envía link de pago con costo de flete calculado.',
            tag: 'Impacto',
          },
        ]
      : [
          {
            label: 'Diagnosis of Mistake',
            text: 'Student replied with just "$85" and zero context, which stalled the chat and produced ghosting.',
            tag: 'Before',
          },
          {
            label: 'Instant UXIO Refactor',
            text: '"Hey Dani! The complete kit is $85 and includes [key bonus]. Which city would we be shipping to?".',
            tag: 'Correction',
          },
          {
            label: 'Result',
            text: 'Buyer immediately drops their city, allowing instant payment link generation with exact shipping.',
            tag: 'Impact',
          },
        ],
    instructorNotes: {
      duration: '50:00 - 60:00 min',
      script: isEs
        ? 'Muestren cómo hacer una pregunta sobre el envío al final del precio redirige la atención hacia la entrega y no hacia el costo.'
        : 'Demonstrate how appending a shipping location question naturally guides focus toward receiving the goods.',
    },
  },
  {
    id: 's11',
    type: 'concept',
    tag: isEs ? 'CASO EN VIVO #2' : 'LIVE CASE #2',
    title: isEs ? 'Hot Seat 2: Servicios Profesionales & Asesorías' : 'Hot Seat 2: Professional Services & Consulting',
    subtitle: isEs
      ? 'Cómo filtrar clientes de alto valor sin regalar tu tiempo en llamadas eternas.'
      : 'Qualifying high-ticket clients without wasting hours on endless free discovery calls.',
    points: isEs
      ? [
          {
            label: 'Diagnóstico del Error',
            text: 'El alumno agendaba llamadas de 45 minutos con cualquier persona sin saber si tenían presupuesto.',
            tag: 'Antes',
          },
          {
            label: 'Ajuste Inmediato UXIO',
            text: 'Filtro por WhatsApp en 2 preguntas: "¿Cuál es tu meta de facturación?" y "¿Cuentas con presupuesto activo?".',
            tag: 'Corrección',
          },
          {
            label: 'Resultado',
            text: 'Solo agenda videollamada con clientes calificados listos para pagar su servicio premium.',
            tag: 'Impacto',
          },
        ]
      : [
          {
            label: 'Diagnosis of Mistake',
            text: 'Student booked 45-minute calls with anyone without knowing if they had budget or real intent.',
            tag: 'Before',
          },
          {
            label: 'Instant UXIO Refactor',
            text: '2-question chat qualifier: "What is your revenue goal?" and "Do you have active budget allocated?".',
            tag: 'Correction',
          },
          {
            label: 'Result',
            text: 'Only pre-qualified buyers reach the calendar, boosting closing rate on high-ticket proposals.',
            tag: 'Impact',
          },
        ],
    instructorNotes: {
      duration: '60:00 - 70:00 min',
      script: isEs
        ? 'Expliquen que decir "no" o filtrar prospectos por chat eleva el valor percibido del servicio profesional.'
        : 'Highlight how qualifying prospects in chat actually increases perceived service prestige and value.',
    },
  },
  {
    id: 's12',
    type: 'challenge',
    tag: isEs ? 'DINÁMICA EN DIRECTO (3 MIN)' : 'LIVE SPRINT (3 MIN)',
    title: isEs ? 'Reto en Caliente: Tu Respuesta Rápida a "¿Cuánto Cuesta?"' : 'Live Challenge: Your Quick Reply to "How Much Is It?"',
    subtitle: isEs
      ? 'Todos los alumnos redactan ahora mismo en el chat su respuesta perfecta para cuando un cliente pide precio.'
      : 'Every student types their optimal answer into the live chat right now for price requests.',
    points: isEs
      ? [
          { label: 'Requisito 1: Saludo con Nombre', text: 'Empieza con amabilidad real y saluda por su nombre.' },
          { label: 'Requisito 2: Qué Incluye + Valor', text: 'Menciona el beneficio principal antes de soltar la cifra.' },
          { label: 'Requisito 3: Pregunta de Rebote', text: 'Termina con una pregunta que exija respuesta para mantener el chat vivo.' },
        ]
      : [
          { label: 'Requirement 1: Personal Greeting', text: 'Warmly address the buyer by their real name.' },
          { label: 'Requirement 2: Value Anchor', text: 'State the primary outcome before stating the exact investment.' },
          { label: 'Requirement 3: Rebound Question', text: 'End with an open question to keep dialogue momentum alive.' },
        ],
    instructorNotes: {
      duration: '70:00 - 75:00 min',
      script: isEs
        ? 'Lean 3 respuestas enviadas por los alumnos al chat y felicítenlos por corregir el error del texto frío.'
        : 'Read 3 student chat submissions aloud and praise their shift toward warm, proactive dialogue.',
    },
  },
];
