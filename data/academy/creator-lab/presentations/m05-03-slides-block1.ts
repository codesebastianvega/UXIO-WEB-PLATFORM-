import { SlideData } from './types';

export const getLiveLab5Block1 = (isEs: boolean): SlideData[] => [
  {
    id: 's1',
    type: 'title',
    tag: isEs ? 'SEMANA 5 · LIVE LAB FINAL' : 'WEEK 5 · FINAL LIVE LAB',
    title: isEs ? 'Clínica de Cierre, Embudo a WhatsApp & Graduación' : 'Sales Closing Clinic & Capstone Graduation',
    subtitle: isEs
      ? 'Sesión maestra de 90 minutos para auditar tus flujos de venta, eliminar fugas entre el video y el chat, y presentar tu sistema comercial de 30 días.'
      : '90-minute live masterclass to audit your sales funnels, stop chat conversion leaks, and present your 30-day operating system.',
    highlight: isEs ? 'Sesión en Vivo: 90 Minutos ➔' : 'Live Masterclass: 90 Minutes ➔',
    bgColor: '#10B981',
    instructorNotes: {
      duration: '0:00 - 5:00 min',
      script: isEs
        ? 'Bienvenidos al último Live Lab de UXIO Creator Lab. Hoy conectaremos todo lo aprendido para que su contenido facture en el mundo real.'
        : 'Welcome to the final Live Lab of UXIO Creator Lab. Today we tie together all skills to turn your content into predictable revenue.',
    },
  },
  {
    id: 's2',
    type: 'concept',
    tag: isEs ? 'DIAGNÓSTICO FORENSE' : 'FORENSIC AUDIT',
    title: isEs ? '¿Dónde se Pierde el Dinero?: El Embudo de Conversión' : 'Where Does the Revenue Leak?: The Conversion Funnel',
    subtitle: isEs
      ? 'El 90% de los negocios tienen vistas en redes pero sufren de fugas fatales en los pasos intermedios.'
      : '90% of brands get social views but suffer fatal leaks in intermediate steps.',
    points: isEs
      ? [
          {
            label: 'Fuga 1: Video sin CTA Claro (95% Abandono)',
            text: 'El video termina y el espectador no sabe qué hacer. No hay palabra clave ni llamado a la acción.',
            tag: 'Punto Crítico 1',
          },
          {
            label: 'Fuga 2: Retraso en el DM (+6 Horas)',
            text: 'El usuario comentó entusiasmado, pero le respondieron al día siguiente cuando ya compró en otro lugar.',
            tag: 'Punto Crítico 2',
          },
          {
            label: 'Fuga 3: Monólogo Frío en WhatsApp',
            text: 'Mandar un PDF de 20 páginas sin saludar ni preguntar necesidades congela la conversación.',
            tag: 'Punto Crítico 3',
          },
        ]
      : [
          {
            label: 'Leak 1: Video with No Clear CTA (95% Drop)',
            text: 'The video ends and the viewer has no direction. No trigger keyword, no explicit next step.',
            tag: 'Critical Bottleneck 1',
          },
          {
            label: 'Leak 2: Slow DM Delivery (+6 Hours)',
            text: 'Buyer commented while enthusiastic, but got a reply the next day after buying from a competitor.',
            tag: 'Critical Bottleneck 2',
          },
          {
            label: 'Leak 3: Cold WhatsApp Text Wall',
            text: 'Sending a massive 20-page PDF without a personal greeting or qualifying question kills momentum.',
            tag: 'Critical Bottleneck 3',
          },
        ],
    instructorNotes: {
      duration: '5:00 - 10:00 min',
      script: isEs
        ? 'Muestren a la cohorte el gráfico de cómo 10,000 views terminan en cero ventas si no se cuida cada etapa del embudo.'
        : 'Walk through how 10,000 views turn into 0 purchases if the bridge steps are neglected.',
    },
  },
  {
    id: 's3',
    type: 'comparison',
    tag: isEs ? 'COMPARATIVA DE ATENCIÓN' : 'ATTENTION BENCHMARK',
    title: isEs ? 'Atención Desperdiciada vs. Embudo de Alta Conversión' : 'Wasted Attention vs. High-Converting Funnel',
    comparison: isEs
      ? {
          beforeLabel: 'EMBUDO TRADICIONAL ROTO',
          before: [
            '10,000 Visualizaciones en el Reel',
            '50 Clics al link de la bio (fricción alta)',
            '5 Personas escriben a WhatsApp',
            '0 Ventas por respuestas tardías o impersonales',
          ],
          afterLabel: 'EMBUDO CONVERSIÓN UXIO',
          after: [
            '2,000 Visualizaciones en el Reel comercial',
            '180 Comentarios con la palabra clave "INFO"',
            '140 DMs entregados en 3 segundos con ManyChat',
            '60 Chats en WhatsApp ➔ 12 Ventas cerradas con audio',
          ],
        }
      : {
          beforeLabel: 'BROKEN TRADITIONAL FUNNEL',
          before: [
            '10,000 Organic Reel views',
            '50 Bio link clicks (high friction)',
            '5 People reach WhatsApp chat',
            '0 Sales due to slow and robotic replies',
          ],
          afterLabel: 'HIGH-CONVERTING UXIO FUNNEL',
          after: [
            '2,000 Targeted commercial views',
            '180 Comments with trigger keyword "INFO"',
            '140 Automated DMs delivered in 3s via ManyChat',
            '60 WhatsApp chats ➔ 12 Sales closed with voice note',
          ],
        },
    instructorNotes: {
      duration: '10:00 - 15:00 min',
      script: isEs
        ? 'Hagan ver a la cohorte que menos views con mejor embudo produce 10 veces más dinero.'
        : 'Highlight how lower views with a dialed-in funnel produce 10x more revenue.',
    },
  },
  {
    id: 's4',
    type: 'concept',
    tag: isEs ? 'MAPA DEL SISTEMA' : 'SYSTEM BLUEPRINT',
    title: isEs ? 'Los 4 Eslabones del Sistema Comercial de 30 Días' : 'The 4 Links of the 30-Day Commercial Engine',
    subtitle: isEs
      ? 'La ruta completa que cada alumno dominará a partir de hoy.'
      : 'The complete roadmap every student commands starting today.',
    points: isEs
      ? [
          { label: '1. Atracción', text: 'Videos cortos con gancho de dolor y demostración rápida de 45 segundos.' },
          { label: '2. Captura', text: 'Micro-compromiso en comentarios con palabra clave específica ("PRECIO").' },
          { label: '3. Traslado', text: 'Automatización ManyChat entregando link inteligente con mensaje precargado.' },
          { label: '4. Cierre', text: 'Protocolo de 4 pasos en WhatsApp Business con audios humanos de 20 segundos.' },
        ]
      : [
          { label: '1. Attraction', text: 'Short-form videos with sharp problem hooks and 45s rapid demonstrations.' },
          { label: '2. Capture', text: 'Low-friction comment prompt with targeted keyword ("PRICE").' },
          { label: '3. Bridge', text: 'ManyChat automation delivering pre-filled smart WhatsApp link in 3s.' },
          { label: '4. Close', text: '4-step WhatsApp Business closing protocol powered by 20s voice notes.' },
        ],
    instructorNotes: {
      duration: '15:00 - 20:00 min',
      script: isEs
        ? 'Recapitulen cómo cada semana del Creator Lab aportó un eslabón a esta cadena.'
        : 'Recap how every single week of Creator Lab contributed one link to this chain.',
    },
  },
];
