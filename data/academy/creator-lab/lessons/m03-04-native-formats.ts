import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0304 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm03-04',
    slug: 'formatos-nativos-reels-carruseles-stories',
    moduleSlug: 'semana-3-creacion',
    title: isEs ? 'Formatos Nativos: Reels, Carruseles y Stories' : 'Native Formats: Reels, Carousels, Stories',
    type: 'microclass',
    duration: '15 min',
    objective: isEs
      ? 'Dominar el empaquetado específico para Reels, Carruseles y Stories, produciendo el Kit Multiformato oficial de tu negocio.'
      : 'Master platform-native packaging for Reels, Carousels, and Stories, producing your brand’s official Multiformat Pack.',
    topics: isEs
      ? [
          'Anatomía del Carrusel Imán: Portada click-trigger y tabla resumen',
          'La secuencia de 5 Stories para vender en 24 horas sin pauta',
          'Sinergia multicanal: Multiplicar 1 idea en 3 experiencias de consumo',
        ]
      : [
          'Magnet Carousel Anatomy: Click-trigger covers and cheat sheet tables',
          'The 5-Story sales sequence to drive conversions in 24h with zero ad spend',
          'Multi-channel synergy: Multiplying 1 core idea into 3 platform assets',
        ],
    presentationSlug: 'm03-04-01-carousels-mastery',
    microclasses: [
      {
        id: 'mc-03-04-01',
        title: isEs ? '1. Anatomía del Carrusel Imán (6-8 Slides)' : '1. Magnet Carousel Anatomy (6-8 Slides)',
        duration: '5:00 min',
        description: isEs
          ? 'Cómo estructurar carruseles educativos con diseño minimalista que generan cientos de guardados y compartidos.'
          : 'Structuring educational carousels with clean typography driving viral bookmark velocity.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm03-04-01-carousels-mastery',
      },
      {
        id: 'mc-03-04-02',
        title: isEs ? '2. La Secuencia de 5 Stories para Vender en 24h' : '2. The 5-Story 24h Sales Funnel',
        duration: '5:00 min',
        description: isEs
          ? 'El embudo conversacional de 5 láminas: Contexto ➔ Dolor ➔ Encuesta ➔ Prueba social ➔ Enlace a WhatsApp.'
          : 'The 5-slide conversational funnel: Context ➔ Pain ➔ Poll ➔ Social proof ➔ WhatsApp link.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm03-04-02-sales-stories-funnel',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint: Formatos Nativos & Empaquetado' : 'Checkpoint: Native Packaging',
      description: isEs
        ? 'Verifica tus conocimientos antes de ensamblar tu entrega oficial del Reto 3.'
        : 'Validate your comprehension before producing your official Challenge 3 deliverables.',
      questions: [
        {
          id: 'q1',
          question: isEs
            ? '¿Cuál es el factor principal que hace que un usuario guarde un carrusel en Instagram o LinkedIn?'
            : 'What is the primary factor driving users to bookmark an educational carousel?',
          options: isEs
            ? [
                'La inclusión de una tabla o lámina de resumen que sirve de guía de consulta futura',
                'Que tenga 20 diapositivas llenas de texto',
                'Que use fotos con fondos saturados',
                'Que no tenga llamado a la acción',
              ]
            : [
                'A summary table or cheat sheet slide that serves as high-utility future reference',
                'Having 20 dense text-heavy slides',
                'Busy image backgrounds',
                'Zero calls to action',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'Los usuarios guardan contenido que tiene utilidad de referencia rápida para no perderlo.'
            : 'Users save content that provides concise cheat sheets they know they will need later.',
        },
        {
          id: 'q2',
          question: isEs
            ? '¿Por qué la Story #3 de una secuencia de venta debe incluir un sticker de encuesta interactiva?'
            : 'Why must Story #3 in a sales sequence include an interactive poll sticker?',
          options: isEs
            ? [
                'Porque el micro-compromiso de un toque activa el algoritmo de distribución y califica a los prospectos',
                'Porque es obligatorio por ley',
                'Porque oculta el precio del producto',
                'Porque hace que la historia dure 24 horas más',
              ]
            : [
                'The 1-tap micro-engagement triggers platform distribution and qualifies high-intent buyers',
                'It is legally required',
                'It hides product pricing',
                'It extends story duration',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'La interacción en la Story 3 dispara el alcance de la Story 4 y Story 5 donde se encuentra el enlace de venta.'
            : 'Interactions on slide 3 boost algorithmic reach for the proof and link slides on stories 4 and 5.',
        },
        {
          id: 'q3',
          question: isEs
            ? '¿Qué rol cumple cada formato dentro del ecosistema de contenido?'
            : 'What role does each native format play in your brand content ecosystem?',
          options: isEs
            ? [
                'Reels atraen audiencia nueva, Carruseles educan y construyen autoridad, Stories cierran ventas en WhatsApp',
                'Todos los formatos hacen exactamente lo mismo',
                'Los carruseles solo sirven para memes',
                'Las stories solo sirven para fotos de comida',
              ]
            : [
                'Reels capture new audience reach, Carousels build authority, Stories close conversions on WhatsApp',
                'All formats serve identical roles',
                'Carousels are only for memes',
                'Stories are only for food photos',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'Comprender la sinergia multiformato te permite diseñar embudos de contenido altamente rentables.'
            : 'Understanding multi-format synergy enables you to engineer profitable organic client funnels.',
        },
      ],
    },
    resources: [
      {
        id: 'res-m03-04-01',
        title: isEs ? 'Plantilla de Producción Multiformato (1x3)' : 'Multiformat Production Pack (1x3)',
        description: isEs
          ? 'Guía estructurada para convertir 1 idea de tu negocio en 1 Reel, 1 Carrusel y 1 Secuencia de 5 Stories.'
          : 'Step-by-step blueprint to turn 1 idea into 1 Reel, 1 Carousel, and 1 5-Story sequence.',
        type: 'template',
        url: '#multiformat-pack-template',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 3 Oficial: El Kit Multiformato de tu Marca' : 'Official Challenge 3: Your Brand Multiformat Pack',
      whatToDo: isEs
        ? 'Produce las 3 piezas de tu Kit Multiformato basadas en 1 idea de tu negocio: 1 Reel comercial (45-60s) + 1 Carrusel educativo (6-8 slides en PDF o imágenes) + 1 Secuencia de 5 Stories conversacionales.'
        : 'Produce all 3 assets of your Multiformat Pack based on 1 core idea: 1 commercial Reel (45-60s) + 1 educational Carousel (6-8 slides) + 1 5-story sales sequence.',
      whatToDeliver: isEs
        ? 'Pega el enlace público de tu carpeta de Google Drive, página de Notion o enlaces directos a las publicaciones antes del domingo a las 11:59 PM.'
        : 'Submit public share link to your Google Drive folder, Notion workspace, or live post URLs before Sunday at 11:59 PM.',
      whereToSubmit: isEs ? 'Formulario de Entrega Oficial del Reto 3' : 'Official Challenge 3 Submission Box',
      evaluationCriteria: isEs
        ? [
            '1 Reel/TikTok con gancho triple y estructura PAS.',
            '1 Carrusel educativo con portada magnética y tabla de resumen.',
            '1 Secuencia de 5 Stories con contexto, encuesta y enlace a WhatsApp.',
            'Todas las piezas derivadas de 1 sola idea de tu Matriz.',
            'Entrega puntual antes del domingo a las 11:59 PM.',
          ]
        : [
            '1 Reel/TikTok with triple hook and PAS framework.',
            '1 Educational carousel with click-trigger cover and summary table.',
            '1 5-story sales sequence with context, poll, and WhatsApp link.',
            'All assets anchored on 1 single idea from your matrix.',
            'Punctual submission before Sunday 11:59 PM.',
          ],
    },
  };
};
