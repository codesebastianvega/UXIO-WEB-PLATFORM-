import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM030401 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Anatomía del Carrusel Imán (6-8 Slides)' : 'Magnet Carousel Anatomy (6-8 Slides)',
      subtitle: isEs
        ? 'Microclase 3.4.1 · Cómo diseñar carruseles educativos que generan cientos de guardados, compartidos y autoridad de marca.'
        : 'Microclass 3.4.1 · Designing educational slide decks driving hundreds of saves, shares, and brand authority.',
      highlight: isEs ? 'Semana 3 · El Formato de Máxima Retención' : 'Week 3 · Peak Retention Format',
      imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 3.4.1' : '// KEY CONCEPTS 3.4.1',
        badge: isEs ? 'CARRUSELES' : 'CAROUSELS',
        items: [
          { title: isEs ? 'Portada Disparadora' : 'Click-Trigger Cover', desc: isEs ? 'Título de alto contraste + número impar' : 'High contrast title + odd number', color: '#FE385B' },
          { title: isEs ? 'Láminas Fluidas' : 'Seamless Slide Flow', desc: isEs ? '1 solo concepto por lámina sin bloques' : '1 concept per slide with high legibility', color: '#FF7F07' },
          { title: isEs ? 'Lámina de Guardado' : 'Save-Trigger Ending', desc: isEs ? 'Resumen + recordatorio de guardar' : 'Cheat sheet summary + save prompt', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 3.4.1! Los carruseles son el formato con mayor tasa de guardados en Instagram y LinkedIn.'
          : 'Welcome to Microclass 3.4.1! Carousels drive the highest save and reference rate across feeds.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'Un carrusel no es un documento de texto copiado en imágenes: es una experiencia visual de lectura rápida diapositiva a diapositiva.'
        : 'A carousel is not a PDF text dump pasted on images: it is a high-speed visual reading experience.',
      subtitle: isEs
        ? 'Si una diapositiva tiene más de 30 palabras, el usuario deja de leer. El diseño debe respirar con espacios en blanco y tipografía grande.'
        : 'If a slide exceeds 30 words, readers drop. Design must breathe with generous whitespace and bold typography.',
      highlight: isEs ? 'Menos Texto = Más Guardados y Lecturas' : 'Less Text = More Reads & Saves',
      bgColor: '#FF7F07',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Enfaticen la regla de 1 concepto por diapositiva.'
          : 'Stress the rule of one clear concept per slide.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'ESTRUCTURA DE 7 DIAPOSITIVAS' : '7-SLIDE BLUEPRINT',
      title: isEs ? 'La Arquitectura de un Carrusel Ganador' : 'Architecture of a Winning Carousel',
      subtitle: isEs
        ? 'La secuencia óptima de 7 láminas para máxima interacción.'
        : 'The optimal 7-slide sequence for viral save velocity.',
      points: isEs
        ? [
            {
              label: 'Slide 1: La Portada "Click-Trigger"',
              text: 'Titular en letras grandes + número impar + subtítulo de beneficio: "5 Errores al [Tema] que arruinan tu [Meta]".',
              detailData: {
                tag: 'SLIDE 01 // PORTADA',
                title: 'La Portada que Detiene el Dedo',
                description: 'Debe contrastar fuertemente con el fondo blanco o negro de la aplicación.',
                imageCaption: 'Portada de Alto Impacto',
                image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Tipografía en 48-60pt', 'Uso de un color acento contrastante'],
                actionTip: 'No uses imágenes de fondo que tapen el texto.',
              },
            },
            {
              label: 'Slides 2 a 5: El Cuerpo de Valor (1 Tip por Slide)',
              text: 'Título del punto en negrita + 2 líneas de explicación clara + icono o gráfico visual de apoyo.',
              detailData: {
                tag: 'SLIDES 02-05 // CUERPO',
                title: 'Lectura sin Fricción',
                description: 'Diseño ultra limpio que se lee en 3 segundos por lámina.',
                imageCaption: 'Láminas de Valor Conciso',
                image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Párrafos de máximo 2 líneas', 'Flecha sutil que invita a deslizar'],
                actionTip: 'Usa negritas en las 2 palabras clave.',
              },
            },
            {
              label: 'Slide 6: La Tabla / Resumen Rápido',
              text: 'Una matriz o tabla comparativa que resume todo el carrusel en un solo golpe de vista.',
              detailData: {
                tag: 'SLIDE 06 // RESUMEN',
                title: 'El Disparador de Guardados',
                description: 'Los usuarios guardan carruseles que contienen resúmenes útiles para consultar luego.',
                imageCaption: 'Tabla Resumen en una Lámina',
                image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Formato cheat sheet', 'Valor de referencia permanente'],
                actionTip: 'Escribe: "Guarda esta tabla para tu próxima compra".',
              },
            },
            {
              label: 'Slide 7: Llamado a la Acción (CTA)',
              text: 'Iconos claros de Guardar, Compartir y Comentar con pregunta abierta de cierre.',
              detailData: {
                tag: 'SLIDE 07 // CIERRE',
                title: 'El Llamado a la Conversión',
                description: 'Pide una acción específica: guardar el post o comentar una palabra clave.',
                imageCaption: 'Lámina Final de Conversión',
                image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Indica explícitamente el botón de guardar', 'Enlace en bio o palabra a WhatsApp'],
                actionTip: 'Pon tu foto y nombre de usuario en el pie de página.',
              },
            },
          ]
        : [
            { label: 'Slide 1: Click-Trigger Cover', text: 'Bold title + odd number + clear benefit promise.' },
            { label: 'Slides 2-5: Core Value', text: '1 actionable insight per slide with clean generous spacing.' },
            { label: 'Slide 6: Cheat Sheet Summary', text: 'Quick comparison table driving massive bookmarks/saves.' },
            { label: 'Slide 7: Clear Conversion CTA', text: 'Explicit bookmark prompt + WhatsApp keyword trigger.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Muestren cómo la Slide 6 de resumen es el factor #1 que multiplica los guardados por 5.'
          : 'Demonstrate how the summary cheat sheet on slide 6 multiplies bookmarks by 5x.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'DISEÑO DE CARRUSELES' : 'CAROUSEL DESIGN AUDIT',
      title: isEs ? 'Carrusel Muro de Texto vs. Carrusel Visual UXIO' : 'Text-Wall Carousel vs. Clean UXIO Visual Carousel',
      comparison: isEs
        ? {
            beforeLabel: '❌ Carrusel Muro de Texto',
            before: [
              'Párrafos densos de 100 palabras por diapositiva.',
              'Fondo recargado que dificulta la lectura del texto.',
              'Sin portada llamativa ni jerarquía tipográfica.',
              'Cero guardados y abandono en la diapositiva 2.',
            ],
            afterLabel: '✓ Carrusel Visual UXIO',
            after: [
              'Máximo 25 palabras por diapositiva con texto grande.',
              'Fondo limpio con contraste perfecto y diseño minimalista.',
              'Portada con número impar y gancho de curiosidad.',
              'Cientos de guardados y alto alcance orgánico.',
            ],
          }
        : {
            beforeLabel: '❌ Wall of Text Carousel',
            before: [
              '100-word dense paragraphs per slide.',
              'Busy image background making text unreadable.',
              'Generic cover with no typographic hierarchy.',
              'Zero saves and abandonment on slide 2.',
            ],
            afterLabel: '✓ Clean UXIO Visual Carousel',
            after: [
              'Max 25 words per slide with bold clean text.',
              'High contrast minimalist layout with breathing room.',
              'Odd-number click-trigger cover.',
              'Hundreds of bookmarks and strong organic reach.',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:30 min',
        script: isEs
          ? 'La legibilidad y el espacio en blanco son las reglas de oro del carrusel.'
          : 'Whitespace and instant legibility are the golden rules of carousel design.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'MISIÓN 3.4.1' : 'MISSION 3.4.1',
      title: isEs ? 'Crea tu Primer Carrusel en 3 Pasos' : '3-Step Carousel Creation Sprint',
      steps: isEs
        ? [
            {
              number: '01',
              title: '1. Elige 1 Tema de tu Matriz',
              desc: 'Toma una idea educativa del Pilar 3 o Pilar 4 de la Semana 1.',
            },
            {
              number: '02',
              title: '2. Escribe 5 Puntos Clave',
              desc: 'Resume cada punto en 2 oraciones cortas y directas.',
            },
            {
              number: '03',
              title: '3. Diseña las 7 Diapositivas',
              desc: 'Portada + 4 Puntos + Tabla Resumen + CTA de Guardado.',
            },
          ]
        : [
            { number: '01', title: '1. Select 1 Matrix Idea', desc: 'Pick an educational concept from Week 1 Pillar 3 or 4.' },
            { number: '02', title: '2. Draft 5 Key Takeaways', desc: 'Condense each tip into 2 short punchy sentences.' },
            { number: '03', title: '3. Assemble 7 Slides', desc: 'Cover + 4 Tips + Summary Cheat Sheet + Save CTA.' },
          ],
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Este carrusel formará parte de su entrega oficial del Reto 3.'
          : 'This carousel will be submitted as part of the Official Challenge 3 pack.',
      },
    },
  ];

  return {
    id: 'm03-04-01-carousels-mastery',
    slug: 'm03-04-01-carousels-mastery',
    lessonId: 'm03-04',
    title: isEs
      ? 'Anatomía del Carrusel Imán (6-8 Slides)'
      : 'Magnet Carousel Anatomy (6-8 Slides)',
    moduleTag: isEs ? 'SEMANA 3 · MICROCLASE 3.4.1' : 'WEEK 3 · MICROCLASS 3.4.1',
    estimatedMinutes: 5,
    slides,
  };
};
