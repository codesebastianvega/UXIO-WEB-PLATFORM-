import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM010201 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'La Mina de Oro del Backstage' : 'The Backstage Goldmine',
      subtitle: isEs
        ? 'Microclase 1.2.1 · Cómo documentar tus procesos cotidianos y convertirlos en contenido magnético sin inventar nada.'
        : 'Microclass 1.2.1 · How to document daily workflows and turn them into magnetic assets without fiction.',
      highlight: isEs ? 'Semana 1 · Procesos Reales' : 'Week 1 · Real Workflows',
      imageUrl: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 1.2.1' : '// KEY CONCEPTS 1.2.1',
        badge: isEs ? 'BACKSTAGE' : 'BACKSTAGE',
        items: [
          { title: isEs ? 'Documentar vs Crear' : 'Document vs Create', desc: isEs ? 'Aprovecha lo que ya haces cada día' : 'Leverage existing daily routine', color: '#FE385B' },
          { title: isEs ? '4 Categorías de Proceso' : '4 Workflow Categories', desc: isEs ? 'Herramientas, empaque, clientes' : 'Tools, packaging, clients', color: '#FF7F07' },
          { title: isEs ? 'Valor Percibido' : 'Perceived Value', desc: isEs ? 'Justifica precios altos con maestría' : 'Justify pricing with craft', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 1.2.1! Hoy aprenderemos el arte de documentar tu trabajo diario: lo que para ti es rutinario, para tu cliente es contenido premium.'
          : 'Welcome to Microclass 1.2.1! Today we learn to document daily workflows to create high-perceived-value content.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'No inventes contenido ficticio: documenta lo que ya haces todos los días.'
        : 'Do not invent scripted fiction: document what you already do every single day.',
      subtitle: isEs
        ? 'El cliente no necesita una película de acción; necesita ver la dedicación, las horas de trabajo y el cuidado artesanal detrás de su compra.'
        : 'Buyers do not need action movies; they need to witness craftsmanship, care, and precision.',
      highlight: isEs ? 'Documentar > Inventar' : 'Document > Invent',
      bgColor: '#10B981',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Este es el principio de cero fricción: si documentas mientras trabajas, crear contenido toma cero horas extras a la semana.'
          : 'This is the zero friction rule: filming while you work takes zero extra hours from your calendar.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'LAS 3 TOMAS CLAVE' : 'THE 3 KEY SHOTS',
      title: isEs ? 'Las 3 Tomas de Backstage que Venden' : '3 Backstage Shots That Convert',
      subtitle: isEs
        ? 'Planos rápidos que puedes grabar en 10 minutos sin interrumpir tu jornada.'
        : 'Quick camera setups you can film in 10 minutes without stopping work.',
      points: isEs
        ? [
            {
              label: '1. El Antes y Después',
              text: 'Muestra la materia prima o el caos inicial antes de convertirse en el entregable impecable.',
              detailData: {
                tag: 'TOMA 01 // CONTRASTE',
                title: 'La Transformación en Pantalla',
                description: 'El cerebro humano busca resolución de problemas. Mostrar el contraste detiene el scroll y genera satisfacción visual.',
                imageCaption: 'Antes vs Después · Impacto Instantáneo',
                image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?w=1200&auto=format&fit=crop&q=80',
                highlights: ['5 segundos de estado inicial', 'Corte directo al resultado terminado'],
                actionTip: 'Graba siempre el inicio antes de ordenar tu mesa de trabajo.',
              },
            },
            {
              label: '2. El Macro Shot (Detalle)',
              text: 'Graba a 10 cm de distancia tus manos tecleando, mezclando o ajustando herramientas.',
              detailData: {
                tag: 'TOMA 02 // MAESTRÍA',
                title: 'El Detalle Artesanal',
                description: 'Los planos cerrados transmiten precisión, higiene y técnica, justificando de inmediato tarifas profesionales y precios altos.',
                imageCaption: 'Plano Detalle · Percepción Premium',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Texturas y reflejos en primer plano', 'Audio ambiental de trabajo (ASMR táctico)'],
                actionTip: 'Limpia el lente y acércate a 15 cm con buena iluminación lateral.',
              },
            },
            {
              label: '3. El Error Corregido',
              text: 'Muestra cuando algo sale mal y explica cómo lo solucionas con honestidad radical.',
              detailData: {
                tag: 'TOMA 03 // TRANSPARENCIA',
                title: 'Honestidad que Fideliza',
                description: 'Los negocios que admiten y muestran cómo resuelven imprevistos generan 3 veces más lealtad que las marcas que fingen ser perfectas.',
                imageCaption: 'Solución Real · Confianza Total',
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Demuestra protocolo de garantía', 'Humaniza la marca ante imprevistos'],
                actionTip: 'Explica qué aprendiste del error y qué cambio hiciste para evitarlo.',
              },
            },
          ]
        : [
            { label: '1. Before & After', text: 'Show raw materials before transforming into the finished product.' },
            { label: '2. Macro Shot', text: 'Film 10 cm from your hands typing, mixing, or assembling.' },
            { label: '3. Corrected Mistake', text: 'Show when something goes wrong and explain your solution with transparency.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:15 min',
        script: isEs
          ? 'Insistan en que no necesitan equipos complejos; un celular recostado en un vaso de café en plano medio graba un backstage perfecto.'
          : 'Emphasize that complex gear is not required; a phone propped on a desk captures great backstage footage.',
      },
    },
    {
      id: 's04',
      type: 'steps',
      tag: isEs ? 'METODOLOGÍA DE CAPTURA' : 'CAPTURE METHODOLOGY',
      title: isEs ? 'Protocolo de Grabación en Silencio' : 'Silent Recording Protocol',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Cámara en Trípode (0 min)',
              desc: 'Coloca el teléfono a 45 grados de tu espacio de trabajo antes de empezar a laborar.',
            },
            {
              number: '02',
              title: 'Trabajo Continuo (15 min)',
              desc: 'Realiza tu labor habitual sin mirar a la cámara ni actuar de forma forzada.',
            },
            {
              number: '03',
              title: 'Tomas Macro (5 min)',
              desc: 'Toma el celular con las dos manos y graba 3 planos cerrados de 5 segundos de tus manos o pantalla.',
            },
            {
              number: '04',
              title: 'Voz en Off Rápida (5 min)',
              desc: 'Graba un audio de 30 segundos explicando qué estabas haciendo y qué aprendiste.',
            },
          ]
        : [
            { number: '01', title: 'Tripod Placement (0 min)', desc: 'Set phone at 45 degrees before starting daily tasks.' },
            { number: '02', title: 'Normal Work (15 min)', desc: 'Execute your real tasks with zero forced acting.' },
            { number: '03', title: 'Macro Shots (5 min)', desc: 'Hold phone close and film 3 5-second texture closeups.' },
            { number: '04', title: 'Voiceover (5 min)', desc: 'Record a 30s voiceover explaining the workflow.' },
          ],
      instructorNotes: {
        duration: '3:15 - 4:00 min',
        script: isEs
          ? 'Con este protocolo de 25 minutos tienes material suficiente para 3 videos verticales completos.'
          : 'With this 25-minute routine, you have enough footage for 3 complete vertical assets.',
      },
    },
    {
      id: 's05',
      type: 'comparison',
      tag: isEs ? 'PERCEPCIÓN DE VALOR' : 'VALUE PERCEPTION',
      title: isEs ? 'Foto de Producto vs. Video de Backstage' : 'Product Photo vs. Backstage Video',
      comparison: isEs
        ? {
            beforeLabel: 'Foto Estática con Fondo Blanco',
            before: [
              'Parece sacada de catálogo genérico de importación.',
              'No transmite la escala ni los materiales reales.',
              'Genera preguntas de desconfianza ("¿será de buena calidad?").',
              'Compite únicamente por precio bajo.',
            ],
            afterLabel: 'Video de Proceso y Detalle (UXIO)',
            after: [
              'Demuestra autenticidad y mano de obra real en el taller/oficina.',
              'Muestra el tacto, reflejos y sonido ambiental auténtico.',
              'Crea certeza de compra inmediata sin objeciones.',
              'Justifica tarifas profesionales y precios premium.',
            ],
          }
        : {
            beforeLabel: 'Static Stock Photo',
            before: [
              'Looks like generic marketplace imagery.',
              'Fails to convey real scale and texture.',
              'Invites skepticism about true build quality.',
              'Forces you to compete on low price alone.',
            ],
            afterLabel: 'Backstage Process Video (UXIO)',
            after: [
              'Proves craftsmanship and in-house execution.',
              'Captures realistic textures and ambient sound.',
              'Builds instant buyer confidence.',
              'Justifies premium pricing and high tickets.',
            ],
          },
      instructorNotes: {
        duration: '4:00 - 4:45 min',
        script: isEs
          ? 'El video de proceso es la herramienta más efectiva para dejar de competir por precio y empezar a competir por valor.'
          : 'Process video is the single most effective way to stop competing on price and start competing on value.',
      },
    },
    {
      id: 's06',
      type: 'challenge',
      tag: isEs ? 'CHECKPOINT PRÁCTICO' : 'PRACTICAL CHECKPOINT',
      title: isEs ? 'Misión 1.2.1: Tu Primer Banco de Backstage' : 'Mission 1.2.1: Your Backstage Vault',
      challengeData: isEs
        ? {
            whatToDo: 'Graba 1 plano general de 10 segundos de tu set de trabajo y 2 planos macro de 5 segundos de tus manos o pantalla.',
            whatToDeliver: '3 Clips en tu galería listos para la Semana 2.',
            whereToSubmit: 'Guardar en carpeta "B-Roll Semana 1" en el celular.',
            criteria: [
              'Lente limpio sin grasa',
              'Buena iluminación natural o de lámpara',
              'Planos estables sin movimientos bruscos',
            ],
          }
        : {
            whatToDo: 'Record 1 10s wide shot of your workspace and 2 5s macro texture shots of your hands/screen.',
            whatToDeliver: '3 Clips in your phone gallery ready for Week 2.',
            whereToSubmit: 'Save in "B-Roll Week 1" mobile folder.',
            criteria: [
              'Clean lens free of smudges',
              'Good natural or lamp lighting',
              'Stable shots with zero jitter',
            ],
          },
      instructorNotes: {
        duration: '4:45 - 5:15 min',
        script: isEs
          ? 'En la siguiente microclase aprenderemos a transformar las dudas de WhatsApp en guiones estructurados.'
          : 'In the next microclass, we learn to turn customer FAQs into high-converting scripts.',
      },
    },
  ];

  return {
    id: 'm01-02-01-backstage-goldmine',
    slug: 'm01-02-01-backstage-goldmine',
    lessonId: 'm01-02',
    title: isEs ? '1.2.1 La Mina de Oro del Backstage' : '1.2.1 The Backstage Goldmine',
    moduleTag: isEs ? 'SEMANA 1 · CLASE 1.2' : 'WEEK 1 · LESSON 1.2',
    estimatedMinutes: 5,
    slides,
  };
};
