import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM020202 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'El Banco de 30 Clips de B-Roll' : 'The 30-Clip B-Roll Library',
      subtitle: isEs
        ? 'Microclase 2.2.2 · Cómo rodar en 30 minutos todo el material visual de apoyo que alimentarás en tus videos del mes.'
        : 'Microclass 2.2.2 · How to shoot all your monthly visual support clips in 30 minutes.',
      highlight: isEs ? 'Semana 2 · Tu Bóveda de Recursos' : 'Week 2 · Visual Asset Vault',
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 2.2.2' : '// KEY CONCEPTS 2.2.2',
        badge: isEs ? 'BANCO B-ROLL' : 'B-ROLL VAULT',
        items: [
          { title: isEs ? 'Tomas de 5 Segundos' : '5-Second Takes', desc: isEs ? 'Cero clips largos pesados; clips cortos de acción' : 'Short action clips for snappy editing', color: '#FE385B' },
          { title: isEs ? '3 Categorías de B-Roll' : '3 B-Roll Categories', desc: isEs ? 'Manos, herramientas y pantalla/empaque' : 'Hands, tools and desk/packaging', color: '#FF7F07' },
          { title: isEs ? 'Carpeta en Google Drive' : 'Drive Album Vault', desc: isEs ? 'Listo para arrastrar a CapCut en segundos' : 'Ready to drop into CapCut anytime', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 2.2.2! Tener un banco de 30 clips de B-roll en tu celular te permite crear videos en 5 minutos sin tener que preparar el set cada día.'
          : 'Welcome to Microclass 2.2.2! Building a 30-clip B-roll vault saves dozens of production hours.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'El secreto de los creadores que publican todos los días no es grabar a diario: es tener una bóveda de B-Roll lista en el teléfono.'
        : 'The secret of daily creators is not filming every day: it is having a pre-shot B-roll vault on their phone.',
      subtitle: isEs
        ? 'Graba 30 clips de 5 segundos en una sola sesión de 30 minutos. Luego solo grabas tu voz y montas los clips encima como capas de apoyo.'
        : 'Shoot 30 five-second clips in 30 minutes. Later, just record voiceover and drop B-roll layers on top.',
      highlight: isEs ? 'Batching de Grabación = Máxima Eficiencia' : 'Batch Production = Ultimate Speed',
      bgColor: '#10B981',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Expliquen el concepto de "Batching": separar el día de grabar B-roll del día de grabar la voz.'
          : 'Explain batching: decoupling B-roll filming days from voiceover recording.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'LAS 3 CATEGORÍAS DE B-ROLL' : '3 B-ROLL CATEGORIES',
      title: isEs ? 'El Menú de 30 Clips Obligatorios' : 'The 30 Mandatory B-Roll Clips Menu',
      subtitle: isEs
        ? 'La distribución recomendada para cubrir cualquier tipo de negocio (servicios o productos).'
        : 'Recommended breakdown covering both service and product businesses.',
      points: isEs
        ? [
            {
              label: '1. Categoría 1: Manos en Acción (10 Clips)',
              text: 'Tomas macro de tus manos tecleando, dibujando, cosiendo, empacando, cortando o sosteniendo herramientas.',
              detailData: {
                tag: 'B-ROLL // MANOS EN ACCIÓN',
                title: 'El Valor del Trabajo Manual',
                description: 'Ver las manos de un profesional transmite maestría y confianza subconsciente.',
                imageCaption: '10 Clips · Manos Trabajando',
                image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80',
                highlights: ['5 tomas estáticas a 15 cm', '5 tomas con movimiento suave lateral o de acercamiento'],
                actionTip: 'Mantén la velocidad de movimiento constante y pausada.',
              },
            },
            {
              label: '2. Categoría 2: Espacio & Herramientas (10 Clips)',
              text: 'Tomas de tu taller, escritorio, estantes, laptop, libreta de notas, café humeante y luz entrando por la ventana.',
              detailData: {
                tag: 'B-ROLL // ESPACIO Y AMBIENTE',
                title: 'El Contexto Profesional',
                description: 'Muestra dónde ocurre la magia sin poses artificiales: tu espacio real de trabajo.',
                imageCaption: '10 Clips · Espacio y Rutina',
                image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Time-lapse de 10s de tu espacio', 'Plano cenital (desde arriba) de la mesa'],
                actionTip: 'Usa una taza de café o libreta para dar calidez humana.',
              },
            },
            {
              label: '3. Categoría 3: Resultados & Detalle Final (10 Clips)',
              text: 'El producto terminado, el cliente sonriendo, la pantalla de métricas o el paquete sellado listo para envío.',
              detailData: {
                tag: 'B-ROLL // RESULTADO FINAL',
                title: 'La Prueba del Resultado',
                description: 'La toma que respalda tu promesa y demuestra que el trabajo queda impecable.',
                imageCaption: '10 Clips · Resultado Impecable',
                image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Giro de 360° alrededor del producto', 'Desempaque en primera persona'],
                actionTip: 'Graba tomas con luz natural para colores vibrantes.',
              },
            },
          ]
        : [
            { label: '1. Hands in Action (10 Clips)', text: 'Macro shots of hands typing, crafting, packing or sketching.' },
            { label: '2. Workspace & Tools (10 Clips)', text: 'Desk environment, laptop, notebooks and ambient window light.' },
            { label: '3. Finished Results (10 Clips)', text: 'Completed product, dashboard analytics and packaged orders.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Expliquen la regla de los 5 segundos: cada clip debe durar exactamente entre 5 y 8 segundos.'
          : 'Enforce the 5-second rule: each B-roll clip must be 5-8 seconds long.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'ORGANIZACIÓN DIGITAL' : 'FILE MANAGEMENT',
      title: isEs ? 'Galería Caótica vs. Álbum "B-Roll UXIO"' : 'Camera Roll Chaos vs. "UXIO B-Roll" Album',
      comparison: isEs
        ? {
            beforeLabel: '❌ Galería Desorganizada (Pérdida de Tiempo)',
            before: [
              'Clips de trabajo mezclados con fotos familiares y memes.',
              'Tener que buscar 15 minutos para encontrar una toma de manos.',
              'Clips de 2 minutos sin cortar que pesan gigas de memoria.',
              'Frustración al editar en el celular.',
            ],
            afterLabel: '✓ Álbum Dedicado "B-ROLL CREATOR LAB"',
            after: [
              'Álbum creado en Fotos / Galería con 30 clips numerados.',
              'Acceso instantáneo desde CapCut en 1 segundo.',
              'Clips limpios de 5 segundos listos para soltar en la línea de tiempo.',
              'Copia de seguridad en Google Drive.',
            ],
          }
        : {
            beforeLabel: '❌ Cluttered Camera Roll (Lost Time)',
            before: [
              'Work clips buried beneath personal memes and family photos.',
              'Wasting 15 minutes scrolling to find a hands shot.',
              'Bloated 2-minute unedited clips eating storage.',
              'Frustration during mobile video editing.',
            ],
            afterLabel: '✓ Dedicated "UXIO B-ROLL" Album',
            after: [
              'Tagged album with 30 curated 5s clips ready to use.',
              '1-second instant import into CapCut timeline.',
              'Lightweight clips saving smartphone storage.',
              'Cloud backup link on Google Drive.',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:30 min',
        script: isEs
          ? 'Hagan que los alumnos creen el álbum en su galería ahora mismo.'
          : 'Guide students to create a dedicated B-Roll album in their phone photo app now.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'MISIÓN 2.2.2' : 'MISSION 2.2.2',
      title: isEs ? 'Tu Plan de Rodaje de B-Roll en 30 Minutos' : 'Your 30-Minute B-Roll Shooting Plan',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Prepara tu Set (5 min)',
              desc: 'Limpia tu mesa, abre la cortina y coloca tus herramientas principales.',
            },
            {
              number: '02',
              title: 'Graba 30 Clips de 5s (20 min)',
              desc: '10 de manos, 10 de tu espacio y 10 de resultados finales siguiendo el checklist.',
            },
            {
              number: '03',
              title: 'Crea el Álbum & Sube el Link (5 min)',
              desc: 'Selecciona los 30 clips, agrégalos al álbum "B-Roll" y súbelos a Drive para tu entrega.',
            },
          ]
        : [
            { number: '01', title: 'Prep Workspace (5 min)', desc: 'Clear desk, open curtains and arrange key tools.' },
            { number: '02', title: 'Film 30 Clips of 5s (20 min)', desc: '10 hands, 10 workspace, 10 results from checklist.' },
            { number: '03', title: 'Create Album & Share Link (5 min)', desc: 'Bundle 30 clips into "B-Roll" folder and upload to Drive.' },
          ],
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Con esta misión el alumno completa el Reto 2.2 y tiene todo su material listo para la Semana 3.'
          : 'With this mission, students finish Challenge 2.2 and have all assets prepped for Week 3.',
      },
    },
  ];

  return {
    id: 'm02-02-02-broll-bank-30-clips',
    slug: 'm02-02-02-broll-bank-30-clips',
    lessonId: 'm02-02',
    title: isEs
      ? 'El Banco de 30 Clips de B-Roll'
      : 'The 30-Clip B-Roll Library',
    moduleTag: isEs ? 'SEMANA 2 · MICROCLASE 2.2.2' : 'WEEK 2 · MICROCLASS 2.2.2',
    estimatedMinutes: 5,
    slides,
  };
};
