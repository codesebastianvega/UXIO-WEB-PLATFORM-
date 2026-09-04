import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM030202 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Storytelling de Fundador: El Poder de la Vulnerabilidad' : 'Founder Storytelling: The Power of Vulnerability',
      subtitle: isEs
        ? 'Microclase 3.2.2 · Cómo contar anécdotas reales de tu negocio que construyen autoridad inquebrantable y conexión humana.'
        : 'Microclass 3.2.2 · Sharing authentic business stories that build unshakable authority and human connection.',
      highlight: isEs ? 'Semana 3 · El Relato del Fundador' : 'Week 3 · The Founder Story',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 3.2.2' : '// KEY CONCEPTS 3.2.2',
        badge: isEs ? 'STORYTELLING' : 'STORYTELLING',
        items: [
          { title: isEs ? 'El Momento del Quiebre' : 'The Turning Point', desc: isEs ? 'El error o crisis que cambió tu estándar' : 'The crisis that raised your quality standard', color: '#FE385B' },
          { title: isEs ? 'Vulnerabilidad Estratégica' : 'Strategic Vulnerability', desc: isEs ? 'Mostrar el error sin victimismo' : 'Showing the stumble with a lesson', color: '#FF7F07' },
          { title: isEs ? 'El Valor Innegociable' : 'Non-Negotiable Value', desc: isEs ? 'La promesa por la que tus clientes te eligen' : 'The core standard why clients buy from you', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 3.2.2! Hoy aprendemos cómo una simple anécdota real del negocio genera más lealtad que 50 promociones de descuento.'
          : 'Welcome to Microclass 3.2.2! Learn how one genuine founder story builds more brand loyalty than 50 discount sales.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'Las personas no se enamoran de logotipos corporativos: se enamoran de las batallas y valores de los humanos detrás de la marca.'
        : 'People do not fall in love with corporate logos: they fall in love with the values and struggles of real people.',
      subtitle: isEs
        ? 'Contar cómo superaste un problema difícil o por qué rechazaste a un mal cliente demuestra integridad comercial instantánea.'
        : 'Sharing how you solved a hard crisis or fired a toxic client demonstrates raw commercial integrity.',
      highlight: isEs ? 'Humanidad = Máxima Lealtad de Marca' : 'Authentic Humanity = Peak Brand Loyalty',
      bgColor: '#10B981',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Enfaticen que la vulnerabilidad con lección es el mayor diferenciador frente a marcas frías.'
          : 'Emphasize that vulnerability backed by lessons is the ultimate differentiator against sterile competitors.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'LA ESTRUCTURA DEL RELATO' : 'THE FOUNDER STORY STRUCTURE',
      title: isEs ? 'La Estructura en 3 Actos del Relato de Fundador' : 'The 3-Act Founder Storytelling Framework',
      subtitle: isEs
        ? 'Cómo estructurar una historia personal en 45 segundos sin aburrir a la audiencia.'
        : 'Pacing a personal founder story in 45 seconds for maximum impact.',
      points: isEs
        ? [
            {
              label: 'Acto 1: El Detonante / Crisis (0 a 10s)',
              text: '"El día que casi perdemos $5.000 USD por culpa de un material defectuoso..."',
              detailData: {
                tag: 'ACTO 01 // EL DETONANTE',
                title: 'La Tensión Inicial',
                description: 'Arranca en el momento de mayor tensión o peligro para atrapar el interés de inmediato.',
                imageCaption: 'Tensión Inicial en Primer Plano',
                image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Cero introducciones biográficas largas', 'Entrada directa a la tormenta'],
                actionTip: 'Usa cifras o fechas exactas.',
              },
            },
            {
              label: 'Acto 2: La Decisión Difícil (10 a 30s)',
              text: '"Pudimos haber callado y entregado el producto, pero decidimos asumir el costo y rehacer todo desde cero."',
              detailData: {
                tag: 'ACTO 02 // LA DECISIÓN',
                title: 'La Demostración de Valores',
                description: 'Muestra el sacrificio o costo que asumiste para proteger al cliente.',
                imageCaption: 'Decisión y Compromiso',
                image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Prueba de carácter moral', 'Posiciona tu estándar de calidad'],
                actionTip: 'Muestra fotos o clips de aquel momento si los tienes.',
              },
            },
            {
              label: 'Acto 3: La Norma Actual & Conexión (30 a 45s)',
              text: '"Por eso hoy cada pedido pasa por 3 filtros manuales. ¿Tú qué habrías hecho? Te leo en comentarios."',
              detailData: {
                tag: 'ACTO 03 // LA NORMA',
                title: 'El Estándar Innegociable',
                description: 'Explica cómo esa crisis se convirtió en la razón por la que tus clientes actuales confían en ti.',
                imageCaption: 'El Estándar Actual de la Marca',
                image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Conexión con el servicio actual', 'Pregunta abierta que dispara comentarios'],
                actionTip: 'Invita a la audiencia a compartir sus experiencias.',
              },
            },
          ]
        : [
            { label: 'Act 1: The Crisis (0-10s)', text: '"The day we almost lost $5,000 to bad materials..."' },
            { label: 'Act 2: The Hard Choice (10-30s)', text: '"We chose to absorb the loss and rebuild everything from scratch."' },
            { label: 'Act 3: The New Standard (30-45s)', text: '"That is why every order undergoes 3 manual quality checks today."' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Expliquen que este tipo de historias genera la mayor tasa de comentarios compartidos.'
          : 'Explain that founder storytelling drives the highest comment and share velocity.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'CONTRASTE DE STORYTELLING' : 'STORYTELLING CONTRAST',
      title: isEs ? 'Autobombo Arrogante vs. Vulnerabilidad Inspiradora' : 'Arrogant Bragging vs. Inspiring Vulnerability',
      comparison: isEs
        ? {
            beforeLabel: '❌ Autobombo Arrogante',
            before: [
              '"Somos los líderes del mercado con más de 10 años de experiencia..."',
              '"Nadie lo hace mejor que nosotros, somos los número uno..."',
              'Presume logros sin mostrar los errores ni el aprendizaje.',
              'Genera rechazo y desconfianza en la audiencia.',
            ],
            afterLabel: '✓ Vulnerabilidad Inspiradora UXIO',
            after: [
              '"Cometimos este error grave y esto fue lo que aprendimos:"',
              '"Nos costó sangre y lágrimas aprender a hacer esto bien."',
              'Muestra el proceso humano detrás del resultado.',
              'Genera empatía, respeto y clientes leales.',
            ],
          }
        : {
            beforeLabel: '❌ Arrogant Bragging',
            before: [
              '"We are industry leaders with 10+ years of unmatched greatness..."',
              '"Nobody does it better, we are undisputed #1..."',
              'Boasts achievements without sharing lessons or stumbles.',
              'Triggers skepticism and viewer detachment.',
            ],
            afterLabel: '✓ Inspiring UXIO Vulnerability',
            after: [
              '"We made this painful mistake and this is what we learned:"',
              '"It took grit, mistakes and late nights to master this craft."',
              'Showcases the human struggle behind pro quality.',
              'Inspires empathy, respect and customer loyalty.',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:30 min',
        script: isEs
          ? 'La humildad con maestría es la fórmula de autoridad más poderosa en redes sociales.'
          : 'Humility combined with craft mastery is the ultimate authority formula on social feeds.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'MISIÓN 3.2.2' : 'MISSION 3.2.2',
      title: isEs ? 'Tu Historia de Fundador en 3 Pasos' : '3-Step Founder Story Sprint',
      steps: isEs
        ? [
            {
              number: '01',
              title: '1. Recuerda una Crisis o Error Real',
              desc: '¿Qué momento difícil te obligó a mejorar tu servicio o producto?',
            },
            {
              number: '02',
              title: '2. Escribe los 3 Actos (45s)',
              desc: 'Usa la estructura Crisis ➔ Decisión ➔ Estándar Actual.',
            },
            {
              number: '03',
              title: '3. Grábalo con la Técnica Frase por Frase',
              desc: 'Habla con el tono con el que le contarías la historia a un amigo en un café.',
            },
          ]
        : [
            { number: '01', title: '1. Recall a Real Crisis', desc: 'What hard obstacle forced you to raise your standards?' },
            { number: '02', title: '2. Draft the 3 Acts (45s)', desc: 'Use Crisis ➔ Decision ➔ New Standard framework.' },
            { number: '03', title: '3. Shoot Sentence by Sentence', desc: 'Speak as if sharing the story with a friend over coffee.' },
          ],
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Esta historia será una de las piezas más valiosas de su catálogo de contenidos.'
          : 'This story will become one of the highest-converting assets in their content library.',
      },
    },
  ];

  return {
    id: 'm03-02-02-storytelling-founder',
    slug: 'm03-02-02-storytelling-founder',
    lessonId: 'm03-02',
    title: isEs
      ? 'Storytelling de Fundador: El Poder de la Vulnerabilidad'
      : 'Founder Storytelling: The Power of Vulnerability',
    moduleTag: isEs ? 'SEMANA 3 · MICROCLASE 3.2.2' : 'WEEK 3 · MICROCLASS 3.2.2',
    estimatedMinutes: 5,
    slides,
  };
};
