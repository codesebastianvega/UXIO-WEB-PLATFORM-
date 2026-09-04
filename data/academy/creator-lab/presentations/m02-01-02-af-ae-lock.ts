import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM020102 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Bloqueo de Enfoque & Exposición (AF/AE Lock)' : 'Exposure & Focus Lock (AF/AE Lock)',
      subtitle: isEs
        ? 'Microclase 2.1.2 · Cómo evitar que el celular parpadee cambiando de brillo y lograr un look cinematográfico consistente.'
        : 'Microclass 2.1.2 · Prevent exposure hunting and flickering to achieve a consistent cinema look.',
      highlight: isEs ? 'Semana 2 · Control Manual de Luz' : 'Week 2 · Manual Light Control',
      imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 2.1.2' : '// KEY CONCEPTS 2.1.2',
        badge: isEs ? 'AF/AE LOCK' : 'AF/AE LOCK',
        items: [
          { title: isEs ? 'Bloqueo AF/AE' : 'AF/AE Lock', desc: isEs ? 'Mantén presionado sobre tu rostro' : 'Hold screen to lock focus and exposure', color: '#FE385B' },
          { title: isEs ? 'Subexponer -0.3 EV' : 'Underexpose -0.3 EV', desc: isEs ? 'Baja el sol ligeramente para saturar color' : 'Lower sun icon for richer skin tones', color: '#FF7F07' },
          { title: isEs ? 'Cero Parpadeo' : 'Zero Flickering', desc: isEs ? 'Iluminación estable sin saltos de luz' : 'Consistent brightness throughout shot', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 2.1.2! Hoy dominamos el botón más poderoso de tu cámara: el bloqueo de enfoque y exposición (AF/AE Lock).'
          : 'Welcome to Microclass 2.1.2! Today we master AF/AE Lock to prevent phone exposure hunting.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'El "parpadeo" de luz automática es la marca indiscutible de un video aficionado.'
        : 'Automatic exposure hunting is the dead giveaway of amateur video.',
      subtitle: isEs
        ? 'Cuando te mueves, el celular intenta compensar el brillo aclarando y oscureciendo la imagen. Al bloquear AF/AE, la luz se mantiene fija como en el cine.'
        : 'When you move, auto mode hunts brightness. Locking AF/AE stabilizes light exactly like a cinema camera.',
      highlight: isEs ? 'Luz Fija = Imagen Profesional' : 'Locked Light = Pro Image',
      bgColor: '#FF7F07',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Expliquen qué pasa cuando el celular cambia de brillo automáticamente mientras uno habla.'
          : 'Show how auto exposure ruins face lighting during motion.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'EL TRUCO DEL SOL' : 'THE SUN SLIDER TRICK',
      title: isEs ? 'La Técnica de Subexposición Sutil (-0.3 a -0.5 EV)' : 'Subtle Underexposure (-0.3 to -0.5 EV)',
      subtitle: isEs
        ? 'Por qué bajar ligeramente el brillo le da a tu piel tonos más ricos y evita quemar las luces.'
        : 'Why slightly dimming exposure enriches skin tones and saves highlight details.',
      points: isEs
        ? [
            {
              label: '1. Mantén Presionado sobre tu Rostro (2s)',
              text: 'Toca la pantalla sobre tus ojos o producto hasta que aparezca el recuadro amarillo "BLOQUEO AF/AE".',
              detailData: {
                tag: 'PASO 01 // BLOQUEO NATIVO',
                title: 'Fijar el Punto Focal',
                description: 'Esto le indica al procesador que la distancia y la luz de referencia están en tu rostro.',
                imageCaption: 'Bloqueo Amarillo AF/AE Activo',
                image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Presiona 2 segundos continuos', 'Aparece candado o texto amarillo'],
                actionTip: 'No toques de nuevo o se desbloqueará.',
              },
            },
            {
              label: '2. Desliza el Icono del Sol Hacia Abajo',
              text: 'Baja el sol apenas 1 o 2 milímetros hacia abajo para recuperar las texturas de la piel y el fondo.',
              detailData: {
                tag: 'PASO 02 // AJUSTE DE BRILLO',
                title: 'Evitar la Piel Lavada / Quemada',
                description: 'Los celulares tienden a sobre-iluminar por defecto. Bajar el sol da más contraste y aspecto orgánico.',
                imageCaption: 'Deslizar Sol -0.3 EV · Contraste Rico',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Tonos de piel más naturales y cálidos', 'El fondo no queda en blanco quemado'],
                actionTip: 'Un deslizamiento milimétrico basta.',
              },
            },
            {
              label: '3. Muévete sin Miedo a Cambios de Luz',
              text: 'Ahora puedes gesticular o acercar un producto sin que la cámara cambie de brillo bruscamente.',
              detailData: {
                tag: 'PASO 03 // CONSISTENCIA TOTAL',
                title: 'Grabación Estable sin Saltos',
                description: 'La toma se mantiene sólida de principio a fin, haciendo que la edición sea 10 veces más fácil.',
                imageCaption: 'Toma Estable · Facilidad en Edición',
                image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Cero saltos de exposición al cortar', 'Coherencia de color en todo el video'],
                actionTip: 'Aplica esto en el 100% de tus videos.',
              },
            },
          ]
        : [
            { label: '1. Hold Screen on Face (2s)', text: 'Tap and hold until yellow AF/AE LOCK appears.' },
            { label: '2. Drag Sun Icon Down Slightly', text: 'Lower exposure slightly to enrich skin contrast.' },
            { label: '3. Film with Zero Flickering', text: 'Camera stays rock-solid without brightness shifts.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Hagan la demostración en vivo de mantener presionado y bajar el sol.'
          : 'Demonstrate live how holding screen and sliding sun icon locks exposure.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'ANÁLISIS COMPARATIVO' : 'SIDE-BY-SIDE ANALYSIS',
      title: isEs ? 'Exposición Automática vs. AF/AE Bloqueado' : 'Auto Exposure vs. Locked AF/AE',
      comparison: isEs
        ? {
            beforeLabel: '❌ Exposición Automática (Sin Bloqueo)',
            before: [
              'La cara se oscurece cuando entra luz por detrás.',
              'El celular parpadea cada vez que mueves las manos.',
              'Piel lavada con brillo blanco reflectante.',
              'Imposible de emparejar colores en CapCut.',
            ],
            afterLabel: '✓ AF/AE Bloqueado (-0.3 EV)',
            after: [
              'Iluminación constante sin importar si te mueves.',
              'Tonos de piel cálidos y saturación natural.',
              'Contraste cinematográfico profundo.',
              'Cortes limpios y fáciles de editar.',
            ],
          }
        : {
            beforeLabel: '❌ Auto Exposure (No Lock)',
            before: [
              'Face dims whenever background lighting changes.',
              'Phone flickers each time hands enter frame.',
              'Washed out over-bright skin.',
              'Hard to color match cuts in CapCut.',
            ],
            afterLabel: '✓ Locked AF/AE (-0.3 EV)',
            after: [
              'Stable brightness regardless of hand gestures.',
              'Warm natural skin tones and deep contrast.',
              'Cinematic color richness.',
              'Effortless seamless cuts in editing.',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:30 min',
        script: isEs
          ? 'Muestren cómo este único truco eleva el valor percibido del video de inmediato.'
          : 'Emphasize that this single trick multiplies perceived video quality instantly.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'MISIÓN 2.1.2' : 'MISSION 2.1.2',
      title: isEs ? 'Práctica de Bloqueo en 30 Segundos' : '30-Second Lock Practice Drill',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Apunta a tu Mano',
              desc: 'Coloca tu mano a 20 cm de la cámara frente a una ventana.',
            },
            {
              number: '02',
              title: 'Bloquea AF/AE',
              desc: 'Mantén presionado sobre la palma hasta ver "BLOQUEO AF/AE".',
            },
            {
              number: '03',
              title: 'Baja el Sol 1mm',
              desc: 'Desliza hacia abajo apenas un toque y graba un clip de 5 segundos.',
            },
          ]
        : [
            { number: '01', title: 'Aim at Hand', desc: 'Hold hand 20cm from camera near a window.' },
            { number: '02', title: 'Lock AF/AE', desc: 'Hold screen on palm until AF/AE LOCK appears.' },
            { number: '03', title: 'Drag Sun 1mm Down', desc: 'Slightly reduce brightness and record 5 seconds.' },
          ],
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Pidan que hagan la prueba de 5 segundos ahora mismo.'
          : 'Have students test the 5-second lock drill immediately.',
      },
    },
  ];

  return {
    id: 'm02-01-02-af-ae-lock',
    slug: 'm02-01-02-af-ae-lock',
    lessonId: 'm02-01',
    title: isEs
      ? 'Bloqueo de Enfoque & Exposición (AF/AE Lock)'
      : 'Exposure & Focus Lock (AF/AE Lock)',
    moduleTag: isEs ? 'SEMANA 2 · MICROCLASE 2.1.2' : 'WEEK 2 · MICROCLASS 2.1.2',
    estimatedMinutes: 5,
    slides,
  };
};
