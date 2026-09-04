import { SlideData } from './types';

export const getLiveLab2SlidesBlock2 = (isEs: boolean): SlideData[] => [
  {
    id: 's05',
    type: 'comparison',
    tag: isEs ? 'PSICOLOGÍA FRENTE AL LENTE' : 'CAMERA PSYCHOLOGY',
    title: isEs ? 'La Mente del Creador Bloqueado vs. Creador Pragmático UXIO' : 'Blocked Creator Mindset vs. Pragmatic UXIO Creator',
    comparison: isEs
      ? {
          beforeLabel: '❌ Mentalidad de Bloqueo (0 Videos Publicados)',
          before: [
            'Miedo paralizante al qué dirán amigos, colegas o familiares.',
            'Grabar 40 tomas buscando dicción perfecta de locutor de TV.',
            'Esperar a tener un micrófono inalámbrico caro para empezar.',
            'Sufrir porque no le gusta cómo suena su propia voz en el video.',
          ],
          afterLabel: '✓ Mentalidad Pragmática UXIO (Publica y Vende)',
          after: [
            'Entiende que al inicio a nadie le importa; los primeros 10 videos son para calibrar.',
            'Aplica el método frase por frase y acepta pequeñas imperfecciones humanas.',
            'Usa el celular que ya tiene hoy y optimiza la luz con la ventana o pared.',
            'Sabe que su cliente busca la solución a su problema, no un cantante de ópera.',
          ],
        }
      : {
          beforeLabel: '❌ Blocked Mindset (0 Videos Published)',
          before: [
            'Paralyzing fear of judgment from friends or peers.',
            'Shooting 40 takes seeking television announcer perfection.',
            'Waiting to buy a $300 wireless mic before starting.',
            'Cringing at own recorded voice tone.',
          ],
          afterLabel: '✓ Pragmatic UXIO Mindset (Publishes & Sells)',
          after: [
            'Understands early videos are training calibration reps.',
            'Uses sentence method embracing natural human authenticity.',
            'Uses existing smartphone optimized with bounce light.',
            'Focuses on solving customer friction rather than vocal polish.',
          ],
        },
    instructorNotes: {
      duration: '28:00 - 38:00 min',
      script: isEs
        ? 'Dediquen 10 minutos a normalizar el miedo a la cámara. El 100% de los creadores odió su voz en su primer video. Es un proceso neurobiológico normal.'
        : 'Spend 10 minutes addressing imposter syndrome and camera anxiety.',
    },
  },
  {
    id: 's06',
    type: 'concept',
    tag: isEs ? 'RUTINA PRE-RODAJE' : 'PRE-SHOOT ROUTINE',
    title: isEs ? 'El Calentamiento de 2 Minutos Antes de Rodar' : 'The 2-Minute Pre-Shoot Warmup Protocol',
    subtitle: isEs
      ? 'La secuencia física y mental para entrar al set con energía alta, sonrisa natural y cero tensión en el cuello.'
      : 'The physical and mental drill to step in front of the lens with warm authority.',
    points: isEs
      ? [
          {
            label: '1. Desbloqueo Físico (30 Segundos)',
            text: 'Mueve los hombros en círculos, sacude las manos y haz vibrar los labios diciendo "Brrrr" para relajar la mandíbula.',
            detailData: {
              tag: 'ANATOMÍA // RELAJACIÓN MANDIBULAR',
              title: 'Eliminar la Tensión Facial',
              description: 'La tensión en la mandíbula produce miradas congeladas. El ejercicio de labios activa la circulación de las mejillas.',
              imageCaption: 'Relajación Mandibular y Cuello',
              image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Sonrisa genuina y relajada', 'Voz con proyección de diafragma'],
              actionTip: 'Toma un sorbo de agua a temperatura ambiente.',
            },
          },
          {
            label: '2. La "Toma Cero" de Descarte (30 Segundos)',
            text: 'Enciende la cámara y di cualquier tontería absurda ("probando luces, un dos tres"). Rompe el hielo del botón rojo.',
            detailData: {
              tag: 'PSICOLOGÍA // LA TOMA CERO',
              title: 'Destruir la Presión de la Primera Toma',
              description: 'Al saber que esa toma va directo a la papelera, tu cerebro se relaja de inmediato y desaparece la rigidez.',
              imageCaption: 'Toma Cero de Descarte',
              image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Cero expectativa de resultado', 'Prepara tu mente para la toma real'],
              actionTip: 'Borra la toma cero y arranca de inmediato con la toma 1.',
            },
          },
          {
            label: '3. El "Cliente Único" en la Mente (60 Segundos)',
            text: 'No le hables a "millones de seguidores". Imagina a 1 solo cliente específico (ej. Carlos, que ayer te preguntó precio en WhatsApp).',
            detailData: {
              tag: 'CONEXIÓN // EL CLIENTE ÚNICO',
              title: 'La Intimidad de Conversación',
              description: 'Hablarle a una sola persona cambia tu tono de "vendedor ambulante" a "asesor de confianza sentado frente a un café".',
              imageCaption: 'Tono Íntimo de Conversación',
              image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Mirada cálida y atenta al lente', 'Uso de "Tú" en singular en lugar de "Ustedes"'],
              actionTip: 'Usa siempre la segunda persona singular (Tú / Vos).',
            },
          },
        ]
      : [
          { label: '1. Physical Jaw & Body Shake', text: 'Shake shoulders, roll neck and buzz lips to loosen facial tension.' },
          { label: '2. The Throwaway "Take Zero"', text: 'Hit record and say nonsense for 15s to kill the red button pressure.' },
          { label: '3. The Single Customer Avatar', text: 'Speak to 1 single real client sitting across from you enjoying coffee.' },
        ],
    instructorNotes: {
      duration: '38:00 - 48:00 min',
      script: isEs
        ? 'Hagan que toda la sala haga el ejercicio de vibrar labios y la toma cero en vivo.'
        : 'Lead the entire cohort through the 2-minute warmup drill live.',
    },
  },
  {
    id: 's07',
    type: 'steps',
    tag: isEs ? 'ESTRATEGIA DE GRABACIÓN' : 'SHOOTING STRATEGY',
    title: isEs ? 'La Técnica de la "Toma A / Toma B" en Ganchos' : 'The Hook "Take A / Take B" Method',
    steps: isEs
      ? [
          {
            number: '01',
            title: 'Toma A: Gancho Directo al Dolor',
            desc: 'Graba la frase atacando el error: "Si estás pagando de más por [Problema]..."',
          },
          {
            number: '02',
            title: 'Toma B: Gancho de Pregunta Intrigante',
            desc: 'Graba la versión en pregunta: "¿Sabías por qué el 90% de [Producto] se rompe a los 3 meses?"',
          },
          {
            number: '03',
            title: 'Eliges el Mejor en CapCut (Semana 3)',
            desc: 'Tener 2 ganchos grabados te da total libertad creativa sin tener que volver a montar el set.',
          },
        ]
      : [
          { number: '01', title: 'Take A: Pain Attack Hook', desc: 'Direct friction opener: "If you are wasting money on [Problem]..."' },
          { number: '02', title: 'Take B: Intrigue Question Hook', desc: 'Curiosity opener: "Did you know why 90% of [Product] fails?"' },
          { number: '03', title: 'Pick Best Hook in CapCut (W3)', desc: 'Provides editing flexibility without having to reset your studio.' },
        ],
    instructorNotes: {
      duration: '48:00 - 54:00 min',
      script: isEs
        ? 'Grabar 2 versiones del gancho toma solo 30 segundos extra y salva el 50% de las publicaciones en edición.'
        : 'Shooting 2 hook variations takes 30 extra seconds and doubles editing options.',
    },
  },
  {
    id: 's08',
    type: 'statement',
    tag: 'BLOQUE 02 · 54:00 - 60:00 MIN',
    title: isEs
      ? 'La gente no compra de locutores perfectos de televisión: compra de personas reales que demuestran su oficio con pasión y manos en acción.'
      : 'People do not buy from polished television announcers: they buy from real craftspeople demonstrating their work with raw passion.',
    subtitle: isEs
      ? 'La imperfección auténtica genera 4 veces más confianza y tasa de respuesta en WhatsApp que un anuncio corporativo frío de agencia.'
      : 'Authentic human craft builds 4x higher buyer trust and WhatsApp conversion than sterile corporate agency ads.',
    highlight: isEs ? 'Autenticidad Humana = Máxima Conversión' : 'Human Authenticity = Peak Conversion',
    bgColor: '#10B981',
    instructorNotes: {
      duration: '54:00 - 60:00 min',
      script: isEs
        ? 'Cierren la sección de psicología recordando que los clientes compran por confianza, no por efectos de Hollywood.'
        : 'Close the mindset module emphasizing trust over Hollywood VFX.',
    },
  },
];
