import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM030101 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Psicología del Hook (Los Primeros 3s)' : 'Hook Psychology (First 3 Seconds)',
      subtitle: isEs
        ? 'Microclase 3.1.1 · Por qué el 70% de la audiencia decide si quedarse o deslizar en menos de 3 segundos.'
        : 'Microclass 3.1.1 · Why 70% of viewers decide to stay or swipe in under 3 seconds.',
      highlight: isEs ? 'Semana 3 · La Batalla de los 3 Segundos' : 'Week 3 · The 3-Second Battle',
      imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 3.1.1' : '// KEY CONCEPTS 3.1.1',
        badge: isEs ? 'PSICOLOGÍA DEL SCROLL' : 'SCROLL PSYCHOLOGY',
        items: [
          { title: isEs ? 'El Dedo Impaciente' : 'Impulsive Thumb', desc: isEs ? 'Decisión inconsciente en 0.8s' : 'Subconscious decision in 0.8s', color: '#FE385B' },
          { title: isEs ? 'Bucle de Curiosidad' : 'Curiosity Loop', desc: isEs ? 'Abrir una pregunta sin respuesta inmediata' : 'Open question demanding resolution', color: '#FF7F07' },
          { title: isEs ? 'Cero Introducciones' : 'Zero Corporate Intros', desc: isEs ? 'Eliminar saludos y logotipos' : 'Kill greetings and logos', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Semana 3! Hoy aprendemos el factor #1 que determina si un video se vuelve viral o muere ignorado: los primeros 3 segundos.'
          : 'Welcome to Week 3! Today we master the #1 variable of vertical video retention: the first 3 seconds.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'Si no atrapas a tu cliente en los primeros 3 segundos, los otros 42 segundos de tu video no existen.'
        : 'If you do not capture your client in the first 3 seconds, the remaining 42 seconds of your video do not exist.',
      subtitle: isEs
        ? 'El algoritmo de Instagram y TikTok no evalúa la calidad de tu final si el 80% de las personas deslizan antes del segundo 3.'
        : 'Social algorithms do not evaluate your closing if 80% of viewers drop before second 3.',
      highlight: isEs ? 'Los Primeros 3 Segundos = 80% del Éxito' : 'First 3 Seconds = 80% of Success',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Enfaticen que el gancho es la promesa de valor que compra el tiempo del espectador.'
          : 'Emphasize that the hook is the value promise buying the viewer’s attention.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'LOS 4 TIPOS DE GANCHOS' : 'THE 4 HOOK TYPES',
      title: isEs ? 'Las 4 Familias Psicológicas de Ganchos' : 'The 4 Psychological Hook Archetypes',
      subtitle: isEs
        ? 'Fórmulas maestras para abrir cualquier pieza de video o carrusel.'
        : 'Master formulas to open any video clip or carousel slide.',
      points: isEs
        ? [
            {
              label: '1. Gancho de Fricción / Dolor',
              text: 'Ataca un error doloroso: "Si estás perdiendo dinero por culpa de [Error], mira esto:"',
              detailData: {
                tag: 'TIPO 01 // FRICCIÓN',
                title: 'El Gancho del Error Doloroso',
                description: 'La aversión a la pérdida activa el cerebro reptiliano 2.5 veces más rápido que la promesa de ganancia.',
                imageCaption: 'Gancho de Fricción en Primer Plano',
                image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Cita un síntoma tangible', 'Genera alivio inmediato al ofrecer solución'],
                actionTip: 'Usa palabras como "Error", "Cuidado" o "Para de".',
              },
            },
            {
              label: '2. Gancho de Curiosidad / Bucle Abierto',
              text: 'Rompe una creencia aceptada: "Nadie en nuestra industria te dirá esto sobre [Tema]:"',
              detailData: {
                tag: 'TIPO 02 // CURIOSIDAD',
                title: 'El Bucle Abierto (Open Loop)',
                description: 'El cerebro humano no soporta preguntas inconclusas y se queda a ver el desenlace.',
                imageCaption: 'Curiosidad y Contradicción',
                image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Desafía el sentido común', 'Invita a descubrir el secreto'],
                actionTip: 'Resuelve la duda en el Acto 3 para no decepcionar.',
              },
            },
            {
              label: '3. Gancho de Contraste Extremo',
              text: 'Compara dos realidades opuestas: "Cómo pasamos de 0 a 48 ventas en 7 días sin pauta:"',
              detailData: {
                tag: 'TIPO 03 // CONTRASTE',
                title: 'El Salto Cuántico Visible',
                description: 'Ver una transformación dramática valida la autoridad del creador al instante.',
                imageCaption: 'Contraste Antes vs. Después',
                image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Cifras reales y verificables', 'Contraste visual simultáneo'],
                actionTip: 'Muestra capturas o fotos reales del antes.',
              },
            },
            {
              label: '4. Gancho de Promesa Directa & Tiempo',
              text: 'Promete un beneficio veloz: "Aprende a calibrar tu cámara en 60 segundos con este truco:"',
              detailData: {
                tag: 'TIPO 04 // PROMESA DIRECTA',
                title: 'La Promesa de Velocidad',
                description: 'Ideal para tutoriales rápidos y tips prácticos de alta utilidad.',
                imageCaption: 'Tutorial Paso a Paso',
                image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Cumplimiento exacto en el tiempo prometido', 'Alta tasa de guardados'],
                actionTip: 'Usa números impares (3 pasos, 5 tips).',
              },
            },
          ]
        : [
            { label: '1. Friction / Pain Hook', text: '"If you are losing money to [Mistake], watch this:"' },
            { label: '2. Curiosity / Open Loop', text: '"Nobody in our industry will tell you this about [Topic]:"' },
            { label: '3. Extreme Contrast Hook', text: '"How we scaled from 0 to 48 sales in 7 days without ads:"' },
            { label: '4. Direct Speed Promise', text: '"Learn camera calibration in 60s with this simple trick:"' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Expliquen los 4 arquetipos con ejemplos del nicho de los alumnos.'
          : 'Break down the 4 archetypes with industry-specific examples.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'COMPARATIVA DE GANCHOS' : 'HOOK CONTRAST',
      title: isEs ? 'Gancho Tradicional Débil vs. Gancho Psicológico UXIO' : 'Weak Traditional Hook vs. UXIO Psychological Hook',
      comparison: isEs
        ? {
            beforeLabel: '❌ Gancho Débil (Pérdida del 80%)',
            before: [
              '"Hola amigos, hoy les quiero hablar de nuestro nuevo servicio..."',
              '"Espero que estén teniendo una excelente semana..."',
              'Logotipo animado de 4 segundos con música corporativa.',
              'Voz monótona sin contacto visual al lente.',
            ],
            afterLabel: '✓ Gancho Psicológico UXIO',
            after: [
              '"Si tu cliente te deja en visto en WhatsApp, cometes este error:"',
              'Entrada directa en el segundo 0 sin rodeos ni saludos.',
              'Corte a toma macro en el segundo 2 mostrando la solución.',
              'Contacto visual directo y tono enérgico.',
            ],
          }
        : {
            beforeLabel: '❌ Weak Traditional Hook',
            before: [
              '"Hi everyone, today I want to talk about our new service..."',
              '"Hope you are having a wonderful week..."',
              '4-second animated corporate logo with generic audio.',
              'Monotone voice with drifting eyes.',
            ],
            afterLabel: '✓ UXIO Psychological Hook',
            after: [
              '"If your leads leave you on read in WhatsApp, you make this mistake:"',
              'Instant zero-second attack with zero corporate filler.',
              'Cut to macro proof on second 2 demonstrating solution.',
              'Locked eye contact with warm authority.',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:30 min',
        script: isEs
          ? 'Muestren cómo cortar los primeros 5 segundos de saludo duplica la retención.'
          : 'Show how trimming the first 5 seconds of greetings doubles retention.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'MISIÓN 3.1.1' : 'MISSION 3.1.1',
      title: isEs ? 'Tus 3 Ganchos para la Sesión en Vivo' : 'Your 3 Hooks for the Live Lab',
      steps: isEs
        ? [
            {
              number: '01',
              title: '1. Elige una Idea de tu Matriz',
              desc: 'Toma 1 de tus 30 ideas creadas en la Semana 1.',
            },
            {
              number: '02',
              title: '2. Escribe 1 Gancho de Fricción y 1 de Curiosidad',
              desc: 'Usa las fórmulas de la Bóveda de Ganchos.',
            },
            {
              number: '03',
              title: '3. Guárdalos para el Taller de la Lección 3.3',
              desc: 'Los auditaremos en vivo en la Masterclass.',
            },
          ]
        : [
            { number: '01', title: '1. Pick 1 Matrix Idea', desc: 'Select 1 idea from your Week 1 roadmap.' },
            { number: '02', title: '2. Write 1 Pain & 1 Curiosity Hook', desc: 'Use formulas from the Hook Vault.' },
            { number: '03', title: '3. Bring to Live Lab 3.3', desc: 'We will calibrate them live in the workshop.' },
          ],
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Tengan sus ganchos listos para el Live Lab de la Lección 3.3.'
          : 'Have hooks drafted for live script doctoring in Lesson 3.3.',
      },
    },
  ];

  return {
    id: 'm03-01-01-hook-psychology',
    slug: 'm03-01-01-hook-psychology',
    lessonId: 'm03-01',
    title: isEs
      ? 'Psicología del Hook (Los Primeros 3s)'
      : 'Hook Psychology (First 3 Seconds)',
    moduleTag: isEs ? 'SEMANA 3 · MICROCLASE 3.1.1' : 'WEEK 3 · MICROCLASS 3.1.1',
    estimatedMinutes: 5,
    slides,
  };
};
