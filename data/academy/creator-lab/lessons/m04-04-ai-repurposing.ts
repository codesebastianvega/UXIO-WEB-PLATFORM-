import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0404 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm04-04',
    slug: 'inteligencia-artificial-para-creadores',
    moduleSlug: 'semana-4-edicion-ia',
    title: isEs ? 'Inteligencia Artificial & Repurposing Masivo' : 'AI for Solo Creators & Multi-Format Repurposing',
    type: 'microclass',
    duration: '15 min',
    objective: isEs
      ? 'Acelerar la investigación de dolores y multiplicar 1 video vertical en 5 activos de contenido comercial utilizando modelos de IA (Claude / ChatGPT).'
      : 'Accelerate friction research and repurpose 1 vertical video into 5 commercial assets using AI (Claude / ChatGPT).',
    topics: isEs
      ? [
          'Mega-prompts de 4 elementos para extraer 20 ganchos de dolor en segundos',
          'El motor de repurposing 1 a 5: De 1 video a 3 Reels, 1 carrusel y 1 difusión de WhatsApp',
          'Sistemas de producción sostenible para crear 1 mes en 4 horas',
        ]
      : [
          '4-element mega-prompts to extract 20 pain-driven hooks in seconds',
          '1-to-5 repurposing engine: 1 video into 3 Reels, 1 carousel, and 1 WhatsApp blast',
          'Sustainable batch-production systems to create 1 month in 4 hours',
        ],
    presentationSlug: 'm04-04-01-ai-prompting-creators',
    microclasses: [
      {
        id: 'mc-04-04-01',
        title: isEs ? '1. Ingeniería de Prompts de IA para Creadores' : '1. AI Prompt Engineering for Creators',
        duration: '5:00 min',
        description: isEs
          ? 'Cómo estructurar mega-prompts con rol, dolor y restricciones de salida para obtener ganchos y guiones listos para grabar.'
          : 'Structuring mega-prompts with expert role, audience pain, and strict constraints for production-ready outputs.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm04-04-01-ai-prompting-creators',
      },
      {
        id: 'mc-04-04-02',
        title: isEs ? '2. El Motor de Repurposing 1 a 5' : '2. The 1-to-5 Repurposing Engine',
        duration: '5:00 min',
        description: isEs
          ? 'Cómo alimentar a la IA con tu guion final para generar carruseles, secuencias de Stories y mensajes de venta sin esfuerzo.'
          : 'Feeding your final script into AI to generate carousels, 5-story sequences, and sales copy effortlessly.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm04-04-02-repurposing-engine',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint: IA & Repurposing' : 'Checkpoint: AI & Repurposing',
      description: isEs
        ? 'Valida tus conceptos de ingeniería de prompts y repurposing antes de entregar el Reto 4.'
        : 'Validate your prompt engineering and repurposing frameworks before submitting Challenge 4.',
      questions: [
        {
          id: 'q1',
          question: isEs
            ? '¿Cuál es el error más común al pedirle ideas de contenido a ChatGPT o Claude?'
            : 'What is the most common mistake when asking ChatGPT or Claude for content ideas?',
          options: isEs
            ? [
                'Escribir un prompt vago ("dame 5 ideas de reels") sin darle el rol de experto, dolor del cliente ni restricciones de formato',
                'Escribir el prompt en mayúsculas',
                'Hacer preguntas demasiado cortas',
                'Usar la palabra "negocio"',
              ]
            : [
                'Using vague generic prompts ("give me 5 reel ideas") without defining expert role, buyer friction, and strict output constraints',
                'Typing in all caps',
                'Asking short questions',
                'Using the word "business"',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'La calidad del resultado de la IA depende 100% de la especificidad y restricciones que le proporciones en el prompt.'
            : 'AI output quality strictly mirrors the depth of context, constraints, and buyer persona provided in the prompt.',
        },
        {
          id: 'q2',
          question: isEs
            ? '¿En qué consiste el sistema de "Repurposing 1 a 5"?'
            : 'What is the core principle of the "1-to-5 Repurposing Engine"?',
          options: isEs
            ? [
                'Transformar 1 video vertical bien producido en 5 activos multicanal (clips, carrusel, stories, mensaje de WhatsApp)',
                'Subir el mismo video 5 veces a la misma cuenta en el mismo día',
                'Crear 5 cuentas diferentes en Instagram',
                'Copiar los videos de 5 competidores',
              ]
            : [
                'Multiplying 1 validated pillar video into 5 native multi-channel assets (clips, carousel, 5 stories, WhatsApp blast)',
                'Uploading the exact same video 5 times to the same profile',
                'Creating 5 separate accounts',
                'Copying 5 competitors',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'El repurposing multiplica el alcance y rentabilidad de 1 sola sesión de grabación sin provocar agotamiento.'
            : 'Repurposing maximizes the ROI and reach of a single shooting session without causing creator burnout.',
        },
        {
          id: 'q3',
          question: isEs
            ? '¿Qué formato de exportación garantiza que Instagram no destruya la nitidez de tu video?'
            : 'What export preset ensures Instagram does not ruin your video sharpness?',
          options: isEs
            ? [
                '1080p (Full HD) a 30 FPS con Bitrate Alto (High Bitrate)',
                '4K a 120 FPS con bitrate bajo',
                '720p en formato cuadrado',
                'GIF animado sin audio',
              ]
            : [
                '1080p (Full HD) at 30 FPS with High Bitrate',
                '4K at 120 FPS with low bitrate',
                '720p square format',
                'Animated GIF with no sound',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? '1080p a 30 FPS es la resolución nativa óptima para los servidores de Reels y TikTok, evitando la compresión agresiva.'
            : '1080p at 30 FPS is the optimal native ingestion resolution for Reels and TikTok servers, bypassing aggressive transcoding.',
        },
      ],
    },
    resources: [
      {
        id: 'res-m04-04-01',
        title: isEs ? 'Mega-Pack de Prompts de IA para Creadores' : 'AI Creator Mega-Prompt Pack',
        description: isEs
          ? 'Bóveda descargable de mega-prompts probados para extraer ganchos, objeciones y copys comerciales.'
          : 'Downloadable prompt vault with tested formulas for pain discovery, hooks, and repurposing copy.',
        type: 'template',
        url: '#ai-creator-prompt-pack',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 4 Oficial: Tu Primer Video Editado Profesional' : 'Official Challenge 4: Your First Pro-Edited Video',
      whatToDo: isEs
        ? 'Edita 1 video vertical completo de tu negocio (45-60s) en CapCut aplicando las 4 pasadas: Cortes sin aire + Tomas de B-roll + Subtítulos dinámicos con resaltados + Sound Design en 3 capas + Portada 1:1.'
        : 'Edit 1 complete commercial vertical video (45-60s) in CapCut applying all 4 passes: Tight cuts + B-roll overlays + Dynamic captions + 3-layer sound design + 1:1 Cover.',
      whatToDeliver: isEs
        ? 'Pega el enlace público de tu video (Google Drive, Notion, Reel publicado o TikTok no listado) antes del domingo a las 11:59 PM.'
        : 'Submit public share link to your video (Google Drive, Notion, published Reel, or unlisted TikTok) before Sunday at 11:59 PM.',
      whereToSubmit: isEs ? 'Formulario de Entrega Oficial del Reto 4' : 'Official Challenge 4 Submission Box',
      evaluationCriteria: isEs
        ? [
            '1 Video vertical de 45-60s sin silencios mayores a 0.2s.',
            'Subtítulos automáticos dinámicos con palabras clave resaltadas.',
            'Mezcla de 3 capas (Voz principal al frente, música a -20 dB, SFX).',
            'Al menos 2 tomas de B-roll en superposición.',
            'Portada minimalista 1:1 diseñada.',
            'Entrega puntual antes del domingo a las 11:59 PM.',
          ]
        : [
            '1 45-60s vertical video without pauses over 0.2s.',
            'Dynamic captions with highlighted keyword triggers.',
            '3-layer audio mix (Voice -3 dB, music -20 dB, SFX).',
            'At least 2 B-roll overlay cutaways.',
            'Minimalist 1:1 cover with clear title.',
            'Punctual submission before Sunday 11:59 PM.',
          ],
    },
  };
};
