import { SlideData } from './types';

export const getLiveLab3SlidesBlock1 = (isEs: boolean): SlideData[] => [
  {
    id: 's01',
    type: 'title',
    tag: 'UXIO ACADEMY · LIVE MASTERCLASS & CLINIC',
    title: isEs ? 'Masterclass Clínica: Deconstrucción de Hooks & Formatos' : 'Live Clinic: Hook Forensics & Native Formats',
    subtitle: isEs
      ? 'Semana 3 · Sesión en Vivo (90 min) · Diagnóstico de gráficos de retención, teardown de carruseles virales, script doctoring en directo y rúbrica multiformato.'
      : 'Week 3 · Live Masterclass (90 min) · Retention graph diagnostics, viral carousel teardowns, live script doctoring and multiformat rubric.',
    highlight: isEs ? 'Semana 3 · Clínica Práctica Interactiva' : 'Week 3 · Interactive Live Clinic',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&auto=format&fit=crop&q=80',
    titleCard: {
      tag: isEs ? '// LIVE LAB SEMANA 3' : '// WEEK 3 LIVE LAB',
      badge: isEs ? '90 MIN EN VIVO' : '90 MIN LIVE',
      items: [
        { title: isEs ? 'Gráfico de Retención' : 'Retention Graph', desc: isEs ? 'El acantilado del segundo 3' : 'The second-3 retention drop', color: '#FE385B' },
        { title: isEs ? 'Teardown Carrusel 100K' : '100K Carousel Teardown', desc: isEs ? 'Por qué generó 1.200 guardados' : 'Why it drove 1,200 saves', color: '#FF7F07' },
        { title: isEs ? 'Script Doctoring en Vivo' : 'Live Script Doctoring', desc: isEs ? 'Corrección de guiones de alumnos' : 'Live student script audits', color: '#10B981' },
      ],
    },
    instructorNotes: {
      duration: '0:00 - 5:00 min',
      script: isEs
        ? '¡Bienvenidos a la Clínica en Vivo de la Semana 3! Hoy vamos a desarmar la psicología que hace que una persona lea un carrusel completo o mire un video hasta el segundo 45.'
        : 'Welcome to Week 3 Live Clinic! Today we deconstruct the psychology behind full video retention and carousel bookmarking.',
    },
  },
  {
    id: 's02',
    type: 'statement',
    tag: 'BLOQUE 01 · 05:00 - 12:00 MIN',
    title: isEs
      ? 'El algoritmo no premia publicar mucho: premia cuántos segundos logras mantener los ojos de una persona pegados a tu pantalla.'
      : 'Social algorithms do not reward high volume: they reward how many seconds you hold a viewer’s eyes on screen.',
    subtitle: isEs
      ? '1 Reel con 85% de retención genera más ventas y alcance que 10 videos aburridos que la gente salta a los 2 segundos.'
      : '1 Reel with 85% retention generates more pipeline and reach than 10 boring clips skipped within 2 seconds.',
    highlight: isEs ? 'Tiempo de Retención en Pantalla > Cantidad' : 'Retention Watch Time > Volume',
    bgColor: '#FE385B',
    instructorNotes: {
      duration: '5:00 - 12:00 min',
      script: isEs
        ? 'Enfaticen que hoy aprenderán a diagnosticar por qué la gente abandona sus videos analizando las curvas de retención.'
        : 'Reiterate that today students will learn to audit why viewers drop off using retention curves.',
    },
  },
  {
    id: 's03',
    type: 'steps',
    tag: isEs ? 'EL MAPA DE LA SESIÓN DE HOY' : 'TODAY’S MASTERCLASS MAP',
    title: isEs ? 'Los 4 Laboratorios de la Masterclass de Hoy' : 'The 4 Practical Labs of Today’s Clinic',
    steps: isEs
      ? [
          {
            number: '01',
            title: 'Diagnóstico Forense de Retención',
            desc: 'Cómo leer las curvas de TikTok e Instagram para detectar dónde se aburre tu audiencia.',
          },
          {
            number: '02',
            title: 'Teardown: Carrusel 100K vs Ignorado',
            desc: 'Desarme lámina por lámina de un carrusel que generó 1.200 guardados y 40 consultas.',
          },
          {
            number: '03',
            title: 'Hot Seats & Script Doctoring 1 a 1',
            desc: 'Auditoría en directo de los guiones y ganchos redactados por los alumnos de la sala.',
          },
          {
            number: '04',
            title: 'Rúbrica 5.0 del Kit Multiformato',
            desc: 'Los 5 requisitos obligatorios para entregar tu Reel, Carrusel y Stories en el Reto 3.',
          },
        ]
      : [
          { number: '01', title: 'Retention Forensics', desc: 'Decoding TikTok and Instagram analytics curves to fix viewer drop-offs.' },
          { number: '02', title: '100K Carousel Teardown', desc: 'Slide-by-slide autopsy of a carousel driving 1,200 saves and 40 leads.' },
          { number: '03', title: '1-on-1 Script Doctoring', desc: 'Live student script and hook teardowns in real time.' },
          { number: '04', title: 'Multiformat 5.0 Rubric', desc: 'The 5 criteria to submit your Reel, Carousel, and Stories pack in Challenge 3.' },
        ],
    instructorNotes: {
      duration: '12:00 - 18:00 min',
      script: isEs
        ? 'Presenten los 4 laboratorios y motiven a la cohorte a participar en los hot seats.'
        : 'Walk through the 4 labs and encourage active participation in the hot seat reviews.',
    },
  },
  {
    id: 's04',
    type: 'concept',
    tag: isEs ? 'DIAGNÓSTICO ANALÍTICO' : 'ANALYTIC DIAGNOSTICS',
    title: isEs ? 'Anatomía de la Curva de Retención de un Video' : 'Anatomy of a Video Retention Curve',
    subtitle: isEs
      ? 'Los 3 puntos críticos donde se gana o se pierde la viralidad de un contenido.'
      : 'The 3 critical inflection points deciding if a post goes viral or dies.',
    points: isEs
      ? [
          {
            label: '1. El Acantilado del Segundo 3 (Falla de Gancho)',
            text: 'Si la curva cae más del 40% en el segundo 3, tu gancho no atacó un dolor real o tardaste en empezar a hablar.',
            detailData: {
              tag: 'ZONA 01 // 0-3 SEGUNDOS',
              title: 'El Acantilado del Gancho',
              description: 'Ocurre cuando hay saludos corporativos ("Hola amigos"), fondos estáticos o audio lejano.',
              imageCaption: 'Caída Abrupta en Segundo 3',
              image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Elimina 2 segundos de silencio', 'Usa titular grande en el tercio superior'],
              actionTip: 'Empieza con el dolor en la primera sílaba.',
            },
          },
          {
            label: '2. El Valle del Aburrimiento (Segundo 12 a 20)',
            text: 'Ocurre cuando te quedas en la misma toma fija hablando sin meter B-roll ni cambio de plano.',
            detailData: {
              tag: 'ZONA 02 // 12-20 SEGUNDOS',
              title: 'La Fatiga Visual del Espectador',
              description: 'El cerebro humano se desconecta si la imagen no cambia cada 4 a 6 segundos.',
              imageCaption: 'Inserción de B-Roll Dinámico',
              image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Intercala tomas macro de manos', 'Aplica zoom digital sutil del 10%'],
              actionTip: 'Corta cada oración de forma independiente.',
            },
          },
          {
            label: '3. La Meseta de Retención Alta (Pase al Algoritmo)',
            text: 'Cuando la curva se mantiene plana por encima del 60%, el algoritmo dispara el video a audiencia nueva.',
            detailData: {
              tag: 'ZONA 03 // 20-45 SEGUNDOS',
              title: 'La Distribución Algorítmica',
              description: 'Demuestra que el contenido resolvió la promesa del gancho con alta utilidad.',
              imageCaption: 'Curva Plana de Alta Retención',
              image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Cierre rápido sin rodeos de despedida', 'Llamado claro con palabra clave'],
              actionTip: 'Termina el video exactamente cuando entregues el valor.',
            },
          },
        ]
      : [
          { label: '1. The Second-3 Cliff (Hook Failure)', text: 'A >40% drop indicates a weak hook or slow opening.' },
          { label: '2. The Boredom Valley (12-20s)', text: 'Static talking heads with no B-roll cuts cause mid-video viewer fatigue.' },
          { label: '3. The High Retention Plateau (>60%)', text: 'Flat curves trigger viral algorithmic recommendations.' },
        ],
    instructorNotes: {
      duration: '18:00 - 28:00 min',
      script: isEs
        ? 'Muestren en pantalla un gráfico real de retención de TikTok para que los alumnos vean la curva en vivo.'
        : 'Display a real TikTok retention graph live to illustrate the 3 critical drop zones.',
    },
  },
];
