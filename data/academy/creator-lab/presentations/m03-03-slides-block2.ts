import { SlideData } from './types';

export const getLiveLab3SlidesBlock2 = (isEs: boolean): SlideData[] => [
  {
    id: 's05',
    type: 'comparison',
    tag: isEs ? 'TEARDOWN DE CARRUSELES' : 'CAROUSEL TEARDOWN',
    title: isEs ? 'Carrusel Ignorado (0 Guardados) vs. Carrusel Viral (1.2K Guardados)' : 'Ignored Carousel (0 Saves) vs. Viral Carousel (1.2K Saves)',
    comparison: isEs
      ? {
          beforeLabel: '❌ Carrusel Ignorado (Cero Lecturas)',
          before: [
            'Portada genérica: "Servicios de nuestra consultora en 2026".',
            'Bloques de texto densos de 80 palabras con letra pequeña.',
            'Fondo recargado que cansa la vista.',
            'Termina con un flyer de contacto y número de teléfono.',
          ],
          afterLabel: '✓ Carrusel Viral UXIO (1.200 Guardados)',
          after: [
            'Portada: "5 Errores en tu Contabilidad que la DIAN no perdona" (Texto gigante).',
            '1 solo error por lámina con 2 líneas explicativas y diseño limpio.',
            'Slide 6: Matriz comparativa de deducciones legales (Cheat Sheet).',
            'Slide 7: "Guarda esta guía para no perder dinero en tu declaración".',
          ],
        }
      : {
          beforeLabel: '❌ Ignored Carousel (Zero Reads)',
          before: [
            'Generic cover: "Consulting services overview 2026".',
            '80-word dense paragraphs in tiny illegible font.',
            'Busy image background straining reader eyes.',
            'Closes with static flyer listing contact numbers.',
          ],
          afterLabel: '✓ Viral UXIO Carousel (1.2K Saves)',
          after: [
            'Cover: "5 Tax Mistakes Costing You Thousands" (Huge bold font).',
            '1 actionable error per slide with 2 punchy sentences.',
            'Slide 6: Quick comparison cheat sheet table.',
            'Slide 7: "Bookmark this guide before your next tax filing".',
          ],
        },
    instructorNotes: {
      duration: '28:00 - 38:00 min',
      script: isEs
        ? 'Analicen por qué la lámina de resumen en tabla es el mayor multiplicador de guardados.'
        : 'Analyze why the cheat sheet table on slide 6 drives 80% of total bookmarks.',
    },
  },
  {
    id: 's06',
    type: 'concept',
    tag: isEs ? 'PSICOLOGÍA DEL GUARDADO' : 'SAVE TRIGGER PSYCHOLOGY',
    title: isEs ? 'Los 3 Disparadores que Multiplican los Guardados por 5' : '3 Triggers that 5x Carousel Bookmarks',
    subtitle: isEs
      ? 'Por qué los guardados son la métrica que más valora el algoritmo de Instagram y LinkedIn.'
      : 'Why bookmarks/saves are the highest-weighted signal on Instagram and LinkedIn.',
    points: isEs
      ? [
          {
            label: '1. El Efecto "Bóveda de Consulta" (Cheat Sheet)',
            text: 'La gente guarda contenido que sabe que necesitará más adelante (tablas, checklists, pasos ordenados).',
            detailData: {
              tag: 'DISPARADOR 01 // BÓVEDA',
              title: 'El Valor de Referencia Futura',
              description: 'Nadie guarda opiniones genéricas; guardan herramientas, plantillas y listas paso a paso.',
              imageCaption: 'Tablas de Consulta Rápida',
              image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Formato tabla o checklist', 'Fácil de consultar en 5 segundos'],
              actionTip: 'Estructura la penúltima diapositiva como una tabla.',
            },
          },
          {
            label: '2. La Portada con Número Impar y Alto Contraste',
            text: 'Los estudios de neurodiseño demuestran que los números impares (3, 5, 7) tienen un 28% más clics que los pares.',
            detailData: {
              tag: 'DISPARADOR 02 // NÚMEROS IMPARES',
              title: 'La Asimetría que Atrae el Ojo',
              description: 'El cerebro percibe los números impares como más auténticos y menos corporativos.',
              imageCaption: 'Portadas con Números Impares',
              image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
              highlights: ['3 Formas...', '5 Errores...', '7 Ajustes...'],
              actionTip: 'Usa amarillo o blanco sobre fondo oscuro.',
            },
          },
          {
            label: '3. El Recordatorio Visual Explícito de Guardar',
            text: 'Mostrar el icono exacto del botón de guardar en la última lámina aumenta los guardados un 35%.',
            detailData: {
              tag: 'DISPARADOR 03 // CTA VISUAL',
              title: 'La Señalética Visual Directa',
              description: 'La mayoría olvida guardar si no se lo recuerdas con una flecha o animación visual.',
              imageCaption: 'Llamado Visual Explícito',
              image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
              highlights: ['Icono de banderín de guardado', 'Frase: "Guarda para no olvidar"'],
              actionTip: 'Ubica el icono en la esquina inferior derecha.',
            },
          },
        ]
      : [
          { label: '1. The "Cheat Sheet Vault" Effect', text: 'Users save reference tools, checklists, and tables for later consultation.' },
          { label: '2. Odd Numbers & High Contrast', text: 'Odd numbers (3, 5, 7) achieve 28% higher CTR than even numbers.' },
          { label: '3. Explicit Bookmark Prompt', text: 'Showing the bookmark icon on the final slide lifts save rates by 35%.' },
        ],
    instructorNotes: {
      duration: '38:00 - 48:00 min',
      script: isEs
        ? 'Expliquen que 1 guardado equivale a 5 likes en el algoritmo actual.'
        : 'Highlight that 1 bookmark carries 5x the algorithmic weight of a casual like.',
    },
  },
  {
    id: 's07',
    type: 'steps',
    tag: isEs ? 'TÉCNICA DE DISEÑO' : 'DESIGN TECHNIQUE',
    title: isEs ? 'La Técnica de la Portada Dividida (Split Cover)' : 'The Split Cover High-CTR Technique',
    steps: isEs
      ? [
          {
            number: '01',
            title: 'Mitad Superior: El Dolor en Grande',
            desc: 'Fondo negro con texto en amarillo/blanco: "Si compras [Producto] sin revisar esto:"',
          },
          {
            number: '02',
            title: 'Mitad Inferior: Imagen Macro de Alta Calidad',
            desc: 'Foto limpia de la herramienta o detalle del producto en primer plano.',
          },
          {
            number: '03',
            title: 'Flecha de Deslizamiento (Swipe Cue)',
            desc: 'Indicador visual en el borde derecho que incita a pasar a la lámina 2.',
          },
        ]
      : [
          { number: '01', title: 'Top Half: Bold Pain Title', desc: 'Dark background with yellow/white typography: "If you buy [Product] without checking this:"' },
          { number: '02', title: 'Bottom Half: Clean Macro Photo', desc: 'Crisp close-up photo of tools or product craftsmanship.' },
          { number: '03', title: 'Swipe Indicator Cue', desc: 'Subtle arrow on right edge prompting slide 2 transition.' },
        ],
    instructorNotes: {
      duration: '48:00 - 54:00 min',
      script: isEs
        ? 'Muestren cómo la portada dividida funciona tanto en modo oscuro como en modo claro de Instagram.'
        : 'Demonstrate how split covers stand out in both dark and light Instagram themes.',
    },
  },
  {
    id: 's08',
    type: 'statement',
    tag: 'BLOQUE 02 · 54:00 - 60:00 MIN',
    title: isEs
      ? 'Los formatos no compiten: forman un embudo donde el Reel atrae desconocidos, el Carrusel crea autoridad y las Stories cierran la venta.'
      : 'Formats do not compete: they form a funnel where Reels attract strangers, Carousels build authority, and Stories close sales.',
    subtitle: isEs
      ? 'Dominar el Kit Multiformato te permite multiplicar el impacto de 1 sola idea en 3 experiencias de consumo diferentes.'
      : 'Mastering the Multiformat Pack lets you multiply 1 single core insight into 3 native platform experiences.',
    highlight: isEs ? 'Sinergia Multiformato = Máxima Conversión' : 'Multiformat Synergy = Peak Conversions',
    bgColor: '#10B981',
    instructorNotes: {
      duration: '54:00 - 60:00 min',
      script: isEs
        ? 'Cierren el bloque conceptual y den paso al laboratorio de Hot Seats en vivo.'
        : 'Wrap up theory and transition into live student hot seat reviews.',
    },
  },
];
