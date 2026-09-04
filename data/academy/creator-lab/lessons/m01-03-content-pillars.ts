import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0103 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm01-03',
    slug: 'pilares-y-audiencia-objetivo',
    moduleSlug: 'semana-1-estrategia',
    title: isEs ? 'Clase 1.3 — Pilares de Contenido & Matriz de 30 Ideas' : 'Lesson 1.3 — Content Pillars & 30-Idea Matrix',
    type: 'microclass',
    duration: '15 min',
    objective: isEs
      ? 'Aprender a estructurar los 5 pilares maestros de contenido (Educar, Conectar, Demostrar, Desmentir y Vender) y construir tu matriz de 30 ideas listas para grabar durante un mes completo. Descubrirás cómo balancear la entrega de valor con la captación comercial, cómo programar tu calendario semanal tipo Bento y cómo completar el Reto 1 para recibir retroalimentación de la mesa docente.'
      : 'Learn how to structure the 5 master content pillars (Educate, Connect, Prove, Debunk, and Sell) and construct your 30-day ready-to-film content matrix. Discover how to balance value delivery with direct sales, organize your weekly Bento calendar, and submit Challenge 1 for instructor review.',
    topics: isEs
      ? [
          'La dieta balanceada de contenido: La proporción 40/20/20/10/10 para no cansar a tu audiencia',
          'Los 5 pilares maestros: Educar, Conectar, Demostrar, Desmentir y Venta Directa',
          'El calendario semanal tipo Bento: Cómo distribuir 4 publicaciones estratégicas por semana',
          'Explicación y rúbrica del Reto 1: Construcción de la Matriz de 30 Ideas de Contenido',
        ]
      : [
          'The balanced content diet: The 40/20/20/10/10 ratio to prevent audience fatigue',
          '5 master pillars: Educate, Connect, Prove, Debunk, and Direct Sale',
          'The weekly Bento calendar: Structuring 4 high-impact weekly posts',
          'Challenge 1 rubric & submission: Building your complete 30-Day Content Matrix',
        ],
    presentationSlug: 'm01-03-content-pillars',
    microclasses: [
      {
        id: 'mc-01-03-01',
        title: isEs ? '1. Los 5 Pilares de Contenido UXIO' : '1. The 5 UXIO Content Pillars',
        duration: '5:00 min',
        description: isEs
          ? 'En esta cápsula detallamos los 5 pilares que todo negocio comercial debe alternar en sus redes. Aprenderás a formular ganchos para cada categoría, cómo evitar caer en la trampa de solo publicar promociones con descuento y cómo mantener a tu audiencia expectante semana tras semana.'
          : 'In this capsule, we break down the 5 pillars every business must rotate on social channels. Learn how to write hooks for each category, avoid the discount promo trap, and maintain audience anticipation week after week.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm01-03-01-five-pillars',
      },
      {
        id: 'mc-01-03-02',
        title: isEs ? '2. El Reto 1: Matriz de 30 Ideas para un Mes Completo' : '2. Challenge 1: 30-Idea Content Matrix',
        duration: '4:30 min',
        description: isEs
          ? 'En esta cápsula te guiamos paso a paso por la plantilla descargable de la Matriz de 30 Ideas. Te explicamos cómo redactar las 5 columnas (Pilar, Gancho, Problema, B-Roll y CTA), los criterios de evaluación pedagógica y las fechas límites para subir tu entrega al aula virtual.'
          : 'In this capsule, we guide you step-by-step through the 30-Idea Content Matrix template. Learn how to fill the 5 columns (Pillar, Hook, Problem, B-Roll, CTA), understand the grading rubric, and meet the submission deadline.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm01-03-02-challenge-matrix',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint Quiz: Pilares & Estrategia Mensual' : 'Checkpoint Quiz: Content Pillars & Monthly Strategy',
      description: isEs
        ? 'Valida la distribución de tus pilares antes de descargar la matriz de 30 ideas.'
        : 'Validate your content pillar distribution before downloading the 30-idea matrix.',
      questions: [
        {
          id: 'q-01-03-01',
          question: isEs
            ? '¿Cuál es el porcentaje recomendado de contenido puramente educativo en la metodología UXIO?'
            : 'What is the recommended percentage of purely educational content in the UXIO methodology?',
          options: isEs
            ? [
                'Alrededor del 40%, para construir confianza y autoridad antes de pedir la venta',
                'El 100%, nunca se debe pedir la venta',
                'El 0%, solo se debe hacer publicidad directa con ofertas',
              ]
            : [
                'Around 40%, building trust and authority before asking for the purchase',
                '100%, you should never ask for a purchase',
                '0%, you should only publish hard discount ads',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'El pilar de educación (40%) demuestra tu conocimiento y califica a los prospectos resolviendo sus micro-problemas.'
            : 'The education pillar (40%) demonstrates domain expertise and qualifies prospects by solving micro-problems.',
        },
        {
          id: 'q-01-03-02',
          question: isEs
            ? '¿Qué elementos componen cada fila de la Matriz de 30 Ideas de Contenido?'
            : 'What elements compose each row in the 30-Idea Content Matrix?',
          options: isEs
            ? [
                'Pilar, Gancho (Hook en 3s), Problema/Duda, Tipo de B-Roll sugerido y Llamado a la Acción (CTA)',
                'Solo el título del video sin detalles de producción',
                'El presupuesto de pauta pagada en dólares',
              ]
            : [
                'Pillar, Hook (3-sec opener), Problem/FAQ, Suggested B-roll shot, and Call to Action (CTA)',
                'Only a broad video title without production details',
                'Paid ad dollar budget only',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'Tener los 5 componentes definidos permite grabar y editar rápidamente sin bloqueos creativos.'
            : 'Defining all 5 components ensures seamless filming and editing without creative friction.',
        },
      ],
    },
    resources: [
      {
        id: 'res-01-03-01',
        title: isEs ? 'Plantilla Oficial: Matriz de 30 Ideas de Contenido' : 'Official Template: 30-Idea Content Matrix',
        description: isEs
          ? 'Plantilla interactiva y formato descargable para estructurar tu mes completo de contenido antes de grabar.'
          : 'Interactive worksheet and downloadable template to structure your full month of content before filming.',
        type: 'template',
        url: '#content-matrix',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 1: Matriz de 30 Ideas de Contenido Comercial' : 'Challenge 1: 30-Day Commercial Content Matrix',
      whatToDo: isEs
        ? 'Completa tu matriz de 30 ideas categorizadas en los 5 pilares (12 Educar, 6 Conectar, 6 Demostrar, 3 Desmentir y 3 Vender), definiendo para cada fila: gancho de apertura (0-3s), problema que resuelve, toma B-roll y llamado a la acción hacia WhatsApp.'
        : 'Complete your 30-day content matrix across the 5 pillars (12 Educate, 6 Connect, 6 Prove, 3 Debunk, 3 Sell), defining: 0-3s hook, friction solved, B-roll framing, and WhatsApp CTA.',
      whatToDeliver: isEs
        ? 'Pega el enlace público de tu espacio de Notion (o Google Drive / Sheets) con las 30 ideas completadas antes del domingo a las 11:59 PM.'
        : 'Submit the public link to your Notion workspace (or Google Drive/Sheets) with all 30 completed ideas before Sunday at 11:59 PM.',
      whereToSubmit: isEs ? 'Formulario de Entrega Oficial del Reto 1' : 'Official Challenge 1 Submission Box',
      evaluationCriteria: isEs
        ? [
            '30 ideas completas distribuidas en la proporción balanceada (40/20/20/10/10).',
            'Ganchos en primera persona de 0 a 3 segundos atacando dolores reales sin rodeos.',
            'Llamados a la acción con palabras clave cortas dirigidas a iniciar chat en WhatsApp.',
            'Entrega antes del domingo a las 11:59 PM para revisión y feedback de la mesa docente.',
          ]
        : [
            '30 complete ideas distributed across balanced pillars (40/20/20/10/10).',
            '0-3s first-person opening hooks targeting real friction without fluff.',
            'Short keyword CTAs designed to trigger direct WhatsApp conversations.',
            'Submission before Sunday 11:59 PM for faculty review and personalized grading.',
          ],
    },
  };
};
