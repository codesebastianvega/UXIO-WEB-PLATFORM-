import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM040102 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's1',
      type: 'title',
      tag: isEs ? 'MICROCLASE 4.1.2' : 'MICROCLASS 4.1.2',
      title: isEs ? 'Subtítulos Dinámicos & Resaltado de Color' : 'Dynamic Captions & Color Highlights',
      subtitle: isEs
        ? 'Cómo retener a la audiencia silenciosa mediante subtítulos palabra por palabra, animaciones sutiles y códigos de color.'
        : 'Retaining muted viewers with word-by-word animated captions, subtle pop physics, and color highlighting.',
      highlight: isEs ? 'Retención en Silencio ➔' : 'Silent Feed Retention ➔',
      bgColor: '#FF7F07',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? 'Más del 65% de los usuarios navegan en silencio. Los subtítulos dinámicos son obligatorios para convertir.'
          : 'Over 65% of feed users browse on mute. Dynamic captions are essential for retention.',
      },
    },
    {
      id: 's2',
      type: 'concept',
      tag: isEs ? 'REGLAS DE LEGIBILIDAD' : 'READABILITY RULES',
      title: isEs ? 'Las 3 Leyes de los Subtítulos Cinemáticos' : '3 Laws of High-Impact Social Captions',
      subtitle: isEs
        ? 'Un mal subtítulo distrae; un buen subtítulo guía el ojo y acelera la lectura.'
        : 'Bad captions distract; great captions guide the eye and increase reading speed.',
      points: isEs
        ? [
            {
              label: 'Máximo 2 a 3 Palabras por Línea',
              text: 'Evita párrafos completos que parecen bloques de texto. El cerebro procesa fragmentos cortos con mayor velocidad.',
              tag: 'Ley 1',
            },
            {
              label: 'Resaltado Estratégico de Color',
              text: 'Pinta las palabras de dolor en Rojo (#FE385B) o Naranja (#FF7F07) y las palabras de ganancia en Amarillo (#FFCC48) o Verde (#10B981).',
              tag: 'Ley 2',
            },
            {
              label: 'Zona Segura Vertical (Safe Zone)',
              text: 'Posiciona el texto en el tercio inferior medio (sobre el nombre de usuario y debajo de la boca del hablante).',
              tag: 'Ley 3',
            },
          ]
        : [
            {
              label: 'Max 2 to 3 Words Per Frame',
              text: 'Avoid heavy paragraphs. The brain processes rapid 2-word bursts much faster.',
              tag: 'Law 1',
            },
            {
              label: 'Strategic Color Accents',
              text: 'Highlight pain words in Red/Orange and benefit words in Yellow (#FFCC48) or Emerald (#10B981).',
              tag: 'Law 2',
            },
            {
              label: 'Vertical Safe Zone Positioning',
              text: 'Place text in lower-middle third, safely above platform UI handles and below speaker chin.',
              tag: 'Law 3',
            },
          ],
      instructorNotes: {
        duration: '1:00 - 2:30 min',
        script: isEs
          ? 'Expliquen la importancia de no saturar de texto la pantalla y usar colores con intención.'
          : 'Teach the 3 laws of readable social typography.',
      },
    },
    {
      id: 's3',
      type: 'comparison',
      tag: isEs ? 'ESTILOS TIPOGRÁFICOS' : 'TYPOGRAPHY STYLES',
      title: isEs ? 'Subtítulo Automático Feo vs. Subtítulo Calibrado UXIO' : 'Default Generic Captions vs. Calibrated UXIO Style',
      comparison: isEs
        ? {
            beforeLabel: '❌ Subtítulos por Defecto',
            before: [
              'Texto blanco diminuto sin contorno ni sombra.',
              'Párrafos de 6 líneas que tapan todo el pecho.',
              'Ubicado en la parte inferior tapado por el botón de Like.',
              'Cero animación o cambios de color.',
            ],
            afterLabel: '✓ Subtítulos Calibrados UXIO',
            after: [
              'Fuente Bold (The Bold Font o Montserrat) en 42pt.',
              '1 a 2 palabras en pantalla con animación Pop suave.',
              'Ubicado en zona segura sin interferir con la interfaz.',
              'Resaltado de palabras clave con el color de tu marca.',
            ],
          }
        : {
            beforeLabel: '❌ Default Generic Captions',
            before: [
              'Tiny white text without stroke or shadow.',
              '6-line blocks covering speaker torso.',
              'Positioned at bottom edge covered by UI buttons.',
              'Zero animations or accent colors.',
            ],
            afterLabel: '✓ Calibrated UXIO Captions',
            after: [
              'Bold font (The Bold Font or Montserrat) at 42pt.',
              '1 to 2 words on screen with smooth pop physics.',
              'Positioned in clear safe zone.',
              'Key trigger words highlighted with brand accent color.',
            ],
          },
      instructorNotes: {
        duration: '2:30 - 3:45 min',
        script: isEs
          ? 'Comparen visualmente el impacto de un subtítulo profesional en la retención.'
          : 'Show the difference between amateur default text and brand-aligned captions.',
      },
    },
    {
      id: 's4',
      type: 'steps',
      tag: isEs ? 'TUTORIAL CAPCUT' : 'CAPCUT SETUP',
      title: isEs ? 'Configura tus Subtítulos Automáticos en 3 Clics' : 'Configure Auto Captions in 3 Clicks',
      steps: isEs
        ? [
            {
              number: '1',
              title: 'Genera Subtítulos Automáticos',
              desc: 'Ve a Texto ➔ Subtítulos Automáticos ➔ Selecciona el idioma Español y pulsa Generar.',
            },
            {
              number: '2',
              title: 'Elige la Plantilla de 1 Palabra',
              desc: 'En Estilo, elige la plantilla con animación activa y fuente The Bold Font.',
            },
            {
              number: '3',
              title: 'Corrige Errores y Pinta Palabras Clave',
              desc: 'Revisa nombres de marcas y selecciona palabras clave para cambiar su color a amarillo o verde.',
            },
          ]
        : [
            { number: '1', title: 'Generate Auto Captions', desc: 'Go to Text ➔ Auto Captions ➔ Select language and tap Generate.' },
            { number: '2', title: 'Select 1-Word Template', desc: 'Under Style, select the active word pop animation with bold typography.' },
            { number: '3', title: 'Proofread & Highlight Colors', desc: 'Fix brand names and paint key trigger words with yellow or emerald accents.' },
          ],
      instructorNotes: {
        duration: '3:45 - 4:30 min',
        script: isEs
          ? 'Muestren cómo corregir errores tipográficos en CapCut.'
          : 'Walk through caption proofreading in CapCut.',
      },
    },
    {
      id: 's5',
      type: 'closing',
      tag: isEs ? 'SIGUIENTE LECCIÓN' : 'NEXT LESSON',
      title: isEs ? '¡Imagen y Texto Listos! Ahora Calibremos el Audio' : 'Visuals Done! Now Let’s Master Audio',
      subtitle: isEs
        ? 'En la Lección 4.2 aprenderás a mezclar la voz principal, la música de fondo y los efectos de sonido (SFX).'
        : 'In Lesson 4.2 you will learn to mix voice, background tracks, and whoosh SFX.',
      highlight: isEs ? 'Lección 4.2: Sound Design ➔' : 'Lesson 4.2: Sound Design ➔',
      bgColor: '#10B981',
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? '¡Excelente! Ahora pasemos a la Lección 4.2 para dominar el Sound Design y las portadas.'
          : 'Great job! Moving into Lesson 4.2 for sound design and covers.',
      },
    },
  ];

  return {
    id: 'm04-01-02-animated-captions',
    slug: 'm04-01-02-animated-captions',
    lessonId: 'm04-01',
    title: isEs ? 'Subtítulos Dinámicos & Resaltado de Color' : 'Dynamic Captions & Color Highlights',
    moduleTag: isEs ? 'SEMANA 4 · EDICIÓN & IA' : 'WEEK 4 · EDITING & AI',
    estimatedMinutes: 5,
    slides,
  };
};
