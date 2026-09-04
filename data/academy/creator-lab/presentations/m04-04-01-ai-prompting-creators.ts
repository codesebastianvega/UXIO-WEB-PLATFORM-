import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM040401 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's1',
      type: 'title',
      tag: isEs ? 'MICROCLASE 4.4.1' : 'MICROCLASS 4.4.1',
      title: isEs ? 'Ingeniería de Prompts de IA para Creadores' : 'AI Prompt Engineering for Solo Creators',
      subtitle: isEs
        ? 'Cómo usar Claude y ChatGPT como tus directores creativos para investigar dolores, redactar ganchos y refinar guiones.'
        : 'Using Claude and ChatGPT as your creative directors to research pain points, write hooks, and polish scripts.',
      highlight: isEs ? 'IA como Copiloto Creativo ➔' : 'AI as Creative Co-Pilot ➔',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? 'La IA no reemplaza tu experiencia como fundador; multiplica por 10 tu velocidad de ideación.'
          : 'AI doesn’t replace your founder expertise; it 10x’s your ideation speed.',
      },
    },
    {
      id: 's2',
      type: 'concept',
      tag: isEs ? 'ESTRUCTURA DE PROMPT' : 'PROMPT ANATOMY',
      title: isEs ? 'La Fórmula del Mega-Prompt de 4 Elementos' : 'The 4-Element Mega-Prompt Architecture',
      subtitle: isEs
        ? 'Un prompt genérico genera respuestas aburridas; un prompt estructurado genera contenido listo para grabar.'
        : 'Generic prompts yield generic fluff; structured prompts produce production-ready scripts.',
      points: isEs
        ? [
            {
              label: '1. Rol de Experto Específico',
              text: '"Actúa como un estratega de contenido vertical especializado en [tu industria o servicio]."',
              tag: 'Paso 1',
            },
            {
              label: '2. Contexto & Cliente Ideal',
              text: '"Mi cliente ideal es [perfil detallado] y su mayor dolor actual es [problema concreto]."',
              tag: 'Paso 2',
            },
            {
              label: '3. Formato de Salida Restringido',
              text: '"Genera una tabla con 3 columnas: Tipo de Gancho, Frase Spoken (máx 12 palabras) y Texto en Pantalla."',
              tag: 'Paso 3',
            },
          ]
        : [
            {
              label: '1. Specific Expert Role',
              text: '"Act as a short-form vertical video strategist specialized in [your industry/niche]."',
              tag: 'Step 1',
            },
            {
              label: '2. Target Audience Context',
              text: '"My ideal customer is [buyer persona] struggling with [specific daily friction]."',
              tag: 'Step 2',
            },
            {
              label: '3. Constrained Output Format',
              text: '"Output a clean 3-column table: Hook Type, Spoken Line (max 12 words), and On-Screen Headline."',
              tag: 'Step 3',
            },
          ],
      instructorNotes: {
        duration: '1:00 - 2:30 min',
        script: isEs
          ? 'Enseñen la anatomía del prompt para evitar respuestas genéricas de la IA.'
          : 'Break down the 4 prompt components for superior output quality.',
      },
    },
    {
      id: 's3',
      type: 'comparison',
      tag: isEs ? 'RESULTADOS' : 'OUTPUT BENCHMARK',
      title: isEs ? 'Prompt Vago vs. Mega-Prompt Estructurado UXIO' : 'Lazy Prompt vs. Calibrated UXIO Mega-Prompt',
      comparison: isEs
        ? {
            beforeLabel: '❌ Prompt Vago ("Dame ideas de reels")',
            before: [
              'Respuestas genéricas tipo "Muestra el detrás de cámaras".',
              'Textos largos que nadie dice en cámara.',
              'Cero ganchos psicológicos o disparadores de dolor.',
              'Pierdes más tiempo editando el texto que usándolo.',
            ],
            afterLabel: '✓ Mega-Prompt Estructurado UXIO',
            after: [
              '20 ganchos de fricción listos con su titular seguro.',
              'Guiones calibrados exactamente a 45 segundos (80 palabras).',
              'Llamados a la acción con palabras clave para WhatsApp.',
              'Listo para leer en teleprompter y grabar de inmediato.',
            ],
          }
        : {
            beforeLabel: '❌ Lazy Prompt ("Give me reel ideas")',
            before: [
              'Cliche ideas like "Show your behind the scenes".',
              'Textbook essays no human speaks on camera.',
              'Zero friction hooks or curiosity gaps.',
              'Wasting hours rewriting low-grade outputs.',
            ],
            afterLabel: '✓ Calibrated UXIO Mega-Prompt',
            after: [
              '20 friction hooks with safe-zone title ready to film.',
              'PAS scripts constrained strictly to 45s (80 words).',
              'Direct keyword trigger CTAs for WhatsApp closing.',
              'Ready for immediate teleprompter recording.',
            ],
          },
      instructorNotes: {
        duration: '2:30 - 3:45 min',
        script: isEs
          ? 'Comparen el tiempo ahorrado al usar un mega-prompt con restricciones claras.'
          : 'Show the time-saving power of strict prompt constraints.',
      },
    },
    {
      id: 's4',
      type: 'steps',
      tag: isEs ? 'CASO DE USO' : 'USE CASE',
      title: isEs ? 'Cómo Extraer 30 Ganchos en Menos de 2 Minutos' : 'How to Extract 30 Hooks in Under 2 Minutes',
      steps: isEs
        ? [
            {
              number: '1',
              title: 'Copia el Mega-Prompt de la Bóveda',
              desc: 'Abre el recurso #ai-creator-prompt-pack del aula y copia la plantilla de ganchos.',
            },
            {
              number: '2',
              title: 'Rellena tu Nicho y tu Mayor Objeción',
              desc: 'Inserta el dolor principal que descubriste en la Semana 1 en los corchetes.',
            },
            {
              number: '3',
              title: 'Filtra los 5 Más Potentes',
              desc: 'Selecciona los 5 ganchos que despiertan una emoción visceral y úsalos en tus guiones.',
            },
          ]
        : [
            { number: '1', title: 'Copy Prompt from Vault', desc: 'Open #ai-creator-prompt-pack from classroom and copy hook template.' },
            { number: '2', title: 'Fill Niche & Top Objection', desc: 'Insert your core customer friction from Week 1 into the brackets.' },
            { number: '3', title: 'Filter Top 5 Punchiest', desc: 'Select the 5 most visceral hooks to feed into your production pipeline.' },
          ],
      instructorNotes: {
        duration: '3:45 - 4:30 min',
        script: isEs
          ? 'Muestren cómo usar el modal de prompts del aula virtual.'
          : 'Demonstrate using the classroom prompt pack modal.',
      },
    },
    {
      id: 's5',
      type: 'closing',
      tag: isEs ? 'SIGUIENTE MICROCLASE' : 'NEXT MICROCLASS',
      title: isEs ? '¡Prompts Dominados! Pasemos al Repurposing 1 a 5' : 'Prompts Mastered! Now Multiply with Repurposing',
      subtitle: isEs
        ? 'En la Microclase 4.4.2 aprenderás el sistema para transformar 1 solo video en 5 piezas de contenido multicanal.'
        : 'In Microclass 4.4.2 you will learn the engine to repurpose 1 video into 5 multi-channel assets.',
      highlight: isEs ? 'Microclase 4.4.2: Repurposing ➔' : 'Microclass 4.4.2: Repurposing ➔',
      bgColor: '#FF7F07',
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Ahora que tenemos ideas ilimitadas con IA, vamos a multiplicarlas con Repurposing.'
          : 'Now let’s leverage AI to multiply our single video across all channels.',
      },
    },
  ];

  return {
    id: 'm04-04-01-ai-prompting-creators',
    slug: 'm04-04-01-ai-prompting-creators',
    lessonId: 'm04-04',
    title: isEs ? 'Ingeniería de Prompts de IA para Creadores' : 'AI Prompt Engineering for Solo Creators',
    moduleTag: isEs ? 'SEMANA 4 · EDICIÓN & IA' : 'WEEK 4 · EDITING & AI',
    estimatedMinutes: 5,
    slides,
  };
};
