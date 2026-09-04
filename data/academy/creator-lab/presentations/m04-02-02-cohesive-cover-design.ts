import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM040202 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's1',
      type: 'title',
      tag: isEs ? 'MICROCLASE 4.2.2' : 'MICROCLASS 4.2.2',
      title: isEs ? 'Diseño de Portadas Cohesivas & Grid 1:1' : 'Cohesive Cover Design & 1:1 Profile Grid',
      subtitle: isEs
        ? 'Cómo diseñar portadas elegantes en Canva o móvil que convierten visitantes de perfil en seguidores sin parecer folletos baratos.'
        : 'Designing clean covers in Canva or mobile that convert profile visitors into followers.',
      highlight: isEs ? 'Estética Editorial ➔' : 'Editorial Aesthetics ➔',
      bgColor: '#FF7F07',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? 'La portada es la vitrina de tu perfil. Un grid desordenado o con portadas de folleto destruye la autoridad.'
          : 'Your cover is your digital storefront. An overcrowded flyer look destroys brand authority.',
      },
    },
    {
      id: 's2',
      type: 'concept',
      tag: isEs ? 'ANATOMÍA DE LA PORTADA' : 'COVER ANATOMY',
      title: isEs ? 'Los 3 Elementos de una Portada que Convierte' : '3 Elements of a High-Converting Cover',
      subtitle: isEs
        ? 'El usuario decide en 2 segundos si entrar a un video de tu perfil basándose únicamente en el título y la foto.'
        : 'Viewers decide in 2 seconds whether to click a video on your grid based on headline and photo.',
      points: isEs
        ? [
            {
              label: 'Foto Real del Creador o Producto',
              text: 'Usa un fotograma nítido de tu video o una foto vertical de alta calidad. Evita stock genérico artificial.',
              tag: 'Elemento 1',
            },
            {
              label: 'Titular en 3 a 4 Palabras Máximo',
              text: 'Usa tipografía bold en color blanco con caja de contraste negra o de tu color de marca.',
              tag: 'Elemento 2',
            },
            {
              label: 'Encuadre Centrado en Cuadrícula 1:1',
              text: 'Mantén todo el texto e imagen principal dentro del cuadrado central (1080x1080) para que no se corte en el feed.',
              tag: 'Elemento 3',
            },
          ]
        : [
            {
              label: 'Real Creator or Product Still',
              text: 'Use a crisp high-res frame from your video. Avoid cheesy AI stock photos.',
              tag: 'Element 1',
            },
            {
              label: '3 to 4 Word Impact Headline',
              text: 'Use bold typography in white with clean contrast backdrop pills.',
              tag: 'Element 2',
            },
            {
              label: '1:1 Square Safe Zone Framing',
              text: 'Keep key text and visuals within the central 1080x1080 square so nothing gets cropped on profile grid.',
              tag: 'Element 3',
            },
          ],
      instructorNotes: {
        duration: '1:00 - 2:30 min',
        script: isEs
          ? 'Expliquen el encuadre 1:1 central para que el texto no quede mochado en el perfil.'
          : 'Teach the 1:1 center safe box rule for Instagram and TikTok profiles.',
      },
    },
    {
      id: 's3',
      type: 'comparison',
      tag: isEs ? 'ESTILO VISUAL' : 'VISUAL STYLE',
      title: isEs ? 'Folleto Publicitario Barato vs. Portada Editorial UXIO' : 'Cheap Ad Flyer vs. Editorial UXIO Cover',
      comparison: isEs
        ? {
            beforeLabel: '❌ Portada Tipo Folleto',
            before: [
              '8 colores diferentes y 4 fuentes tipográficas.',
              'Texto diminuto con párrafos explicativos.',
              'Logotipos gigantescos y stickers de "Descuento".',
              'Parece publicidad spam de supermercado.',
            ],
            afterLabel: '✓ Portada Editorial UXIO',
            after: [
              '1 sola familia tipográfica (sans-serif bold).',
              'Titular directo atacando 1 dolor o promesa.',
              'Fondo limpio con foto del fundador o proceso real.',
              'Transmite sofisticación, autoridad y orden.',
            ],
          }
        : {
            beforeLabel: '❌ Cheap Flyer Look',
            before: [
              '8 colors and 4 conflicting font styles.',
              'Tiny explanatory paragraphs on cover.',
              'Giant logos and cheap discount stickers.',
              'Looks like spam advertisement.',
            ],
            afterLabel: '✓ Editorial UXIO Cover',
            after: [
              'Single typography family (clean bold sans-serif).',
              'Direct 3-word title attacking 1 specific pain.',
              'Clean background with real founder or process still.',
              'Exudes authority, sophistication, and premium value.',
            ],
          },
      instructorNotes: {
        duration: '2:30 - 3:45 min',
        script: isEs
          ? 'Muestren por qué el minimalismo editorial genera 3 veces más confianza.'
          : 'Highlight why clean editorial minimalism builds 3x more buyer trust.',
      },
    },
    {
      id: 's4',
      type: 'steps',
      tag: isEs ? 'FLUJO RÁPIDO' : 'FAST WORKFLOW',
      title: isEs ? 'Crea tus Portadas en 5 Minutos con Plantilla Móvil' : 'Create Your Covers in 5 Min on Mobile',
      steps: isEs
        ? [
            {
              number: '1',
              title: 'Elige un Fotograma en CapCut',
              desc: 'Pulsa "Portada" en la línea de tiempo y selecciona el fotograma donde tu expresión sea más natural y nítida.',
            },
            {
              number: '2',
              title: 'Añade el Titular en la Zona Central',
              desc: 'Escribe tu gancho de 3 palabras y verifica que quede exactamente en el centro 1:1.',
            },
            {
              number: '3',
              title: 'Guarda como Plantilla de Marca',
              desc: 'Mantén la misma fuente y color en todos tus videos para lograr una cuadrícula uniforme y profesional.',
            },
          ]
        : [
            { number: '1', title: 'Pick Video Still in CapCut', desc: 'Tap Cover button and select the sharpest natural expression frame.' },
            { number: '2', title: 'Add 3-Word Title in Center', desc: 'Type your short punchy title and ensure it sits within 1:1 safe box.' },
            { number: '3', title: 'Save as Brand Template', desc: 'Maintain identical font and accent pill across all future posts.' },
          ],
      instructorNotes: {
        duration: '3:45 - 4:30 min',
        script: isEs
          ? 'Enseñen la función de edición de portada nativa de CapCut.'
          : 'Demonstrate CapCut’s native cover selector tool.',
      },
    },
    {
      id: 's5',
      type: 'closing',
      tag: isEs ? 'SESIÓN EN VIVO' : 'LIVE MASTERCLASS',
      title: isEs ? '¡Llegó la Sesión en Vivo: Clínica de Edición!' : 'Live Masterclass: Editing Clinic!',
      subtitle: isEs
        ? 'En la Lección 4.3 entraremos a la Sesión en Vivo de 90 minutos para auditar timelines y ver edición en caliente en directo.'
        : 'In Lesson 4.3 we enter the 90-minute Live Masterclass to audit student timelines in real time.',
      highlight: isEs ? 'Lección 4.3: Live Lab ➔' : 'Lesson 4.3: Live Lab ➔',
      bgColor: '#10B981',
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? '¡Todo listo para la sesión en vivo! Tengan sus clips listos para el Hot Seat de edición.'
          : 'Get ready for the live lab! Bring your raw clips for the live editing hot seat.',
      },
    },
  ];

  return {
    id: 'm04-02-02-cohesive-cover-design',
    slug: 'm04-02-02-cohesive-cover-design',
    lessonId: 'm04-02',
    title: isEs ? 'Diseño de Portadas Cohesivas & Grid 1:1' : 'Cohesive Cover Design & 1:1 Profile Grid',
    moduleTag: isEs ? 'SEMANA 4 · EDICIÓN & IA' : 'WEEK 4 · EDITING & AI',
    estimatedMinutes: 5,
    slides,
  };
};
