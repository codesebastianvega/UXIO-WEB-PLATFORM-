import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM020103 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Composición & Encuadre Vertical 9:16' : 'Composition & Vertical 9:16 Framing',
      subtitle: isEs
        ? 'Microclase 2.1.3 · La regla de tercios para móvil, zonas seguras de TikTok/Instagram y los 3 planos maestros.'
        : 'Microclass 2.1.3 · Mobile rule of thirds, safe zones and the 3 master camera framings.',
      highlight: isEs ? 'Semana 2 · Encuadres que Retienen' : 'Week 2 · High-Retention Framing',
      imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 2.1.3' : '// KEY CONCEPTS 2.1.3',
        badge: isEs ? 'ENCUADRE 9:16' : '9:16 FRAMING',
        items: [
          { title: isEs ? 'Línea de Ojos (Tercio Superior)' : 'Eye-Level (Top Third)', desc: isEs ? 'Contacto visual directo con el espectador' : 'Direct connection with viewer eyes', color: '#FE385B' },
          { title: isEs ? 'Zonas Seguras (Safe Zones)' : 'Safe Zones UI Space', desc: isEs ? 'Evita botones laterales y descripción' : 'Keep text clear from TikTok buttons', color: '#FF7F07' },
          { title: isEs ? 'Los 3 Planos Clave' : '3 Master Framings', desc: isEs ? 'Medio, detalle macro y hombro POV' : 'Medium, macro detail, shoulder POV', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 2.1.3! Hoy aprenderemos a componer verticalmente para que tu video se sienta cinematográfico y ninguna interfaz de TikTok tape tu mensaje.'
          : 'Welcome to Microclass 2.1.3! Today we master 9:16 composition and safe zones.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'Si tus ojos están en el centro de la pantalla, tu video se siente aficionado y pierde un 40% de conexión visual.'
        : 'Placing your eyes dead-center in vertical video creates dead headroom and drops 40% connection.',
      subtitle: isEs
        ? 'Tus ojos siempre deben estar sobre la línea horizontal superior de la cuadrícula de tercios. Deja solo 2 a 3 dedos de aire sobre tu cabeza (Headroom).'
        : 'Your eyes must rest on the upper third horizontal gridline. Leave just 2-3 fingers of headroom above your hair.',
      highlight: isEs ? 'Ojos en Tercio Superior · Conexión Directa' : 'Eyes on Upper Third · Direct Connection',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Muestren en pantalla el error común de dejar mucho espacio vacío sobre la cabeza (Headroom excesivo).'
          : 'Point out the common rookie mistake of leaving excessive empty headroom.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'LOS 3 PLANOS MAESTROS' : 'THE 3 MASTER SHOTS',
      title: isEs ? 'La Trinidad de Planos de un Video Dinámico' : 'The 3-Shot Dynamic Video Trinity',
      subtitle: isEs
        ? 'Alternar entre estos 3 planos en tu edición evita que el espectador se aburra.'
        : 'Alternating between these 3 framings in editing keeps viewer attention sharp.',
      points: isEs
        ? [
            {
              label: '1. Plano Medio Corto (Pecho hacia arriba)',
              text: 'Tu plano principal para hablar a cámara, explicar ideas y mirar directamente al lente a la altura de tus ojos.',
              detailData: {
                tag: 'PLANO 01 // PLANO MEDIO',
                title: 'El Plano de Confianza y Autoridad',
                description: 'Corta desde el pecho hacia arriba dejando ver hombros y manos al gesticular.',
                imageCaption: 'Plano Medio · Altura de Ojos',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Celular a la altura de los ojos (no desde abajo)', 'Muestra expresiones y gestos naturales'],
                actionTip: 'Nunca grabes desde abajo apuntando a la barbilla.',
              },
            },
            {
              label: '2. Plano Detalle Macro (10 a 20 cm)',
              text: 'Tomas cerradas de tus manos manipulando el producto, herramientas, texturas o pantalla de trabajo.',
              detailData: {
                tag: 'PLANO 02 // MACRO DETALLE',
                title: 'El Plano de Demostración y Artesanía',
                description: 'Enfoca a corta distancia para transmitir calidad de materiales y precisión.',
                imageCaption: 'Plano Detalle · Manos en Acción',
                image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Enfoca texturas, hilos, botones o teclas', 'Audio ambiental ASMR real'],
                actionTip: 'Usa luz lateral para resaltar relieve.',
              },
            },
            {
              label: '3. Plano en Primera Persona (POV / Sobre el Hombro)',
              text: 'La cámara colocada a la altura de tu barbilla o sobre tu hombro, viendo exactamente lo que tú ves.',
              detailData: {
                tag: 'PLANO 03 // POV HOMBRO',
                title: 'La Inmersión del Espectador',
                description: 'Hace que el espectador sienta que está sentado en tu mesa trabajando contigo.',
                imageCaption: 'Plano POV · Perspectiva en Primera Persona',
                image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Muestra el proceso desde tus propios ojos', 'Ideal para desempaques y tutoriales'],
                actionTip: 'Apoya el teléfono en el borde de una repisa o monitor.',
              },
            },
          ]
        : [
            { label: '1. Medium Close-Up (Chest Up)', text: 'Main talking shot with camera level to your eyes.' },
            { label: '2. Macro Detail (10-20 cm)', text: 'Close-up on hands, textures, tools and craft.' },
            { label: '3. First-Person POV / Over Shoulder', text: 'Immersive view putting the viewer in your shoes.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Expliquen que alternar estos 3 planos cada 4 segundos es el secreto de la retención visual.'
          : 'Explain that cutting between these 3 angles every 4 seconds keeps retention high.',
      },
    },
    {
      id: 's04',
      type: 'concept',
      tag: isEs ? 'ZONAS SEGURAS (SAFE ZONES)' : 'SAFE ZONES UI',
      title: isEs ? 'El Mapa de Zonas Seguras de TikTok & Reels' : 'TikTok & Reels Safe Zones Map',
      subtitle: isEs
        ? 'Dónde colocar textos y elementos importantes para que no queden tapados por los botones de la app.'
        : 'Where to place captions and graphics so native app UI buttons never cover them.',
      points: isEs
        ? [
            {
              label: 'Arriba: Deja 15% Libre',
              text: 'El encabezado superior de la app tapa con la barra de búsqueda y pestañas "Para Ti".',
            },
            {
              label: 'Derecha: Deja 20% Libre',
              text: 'La columna derecha contiene los botones de Like, Comentarios, Guardar y Compartir.',
            },
            {
              label: 'Abajo: Deja 25% Libre',
              text: 'La parte inferior contiene el nombre de usuario, descripción del video y la pista de audio.',
            },
          ]
        : [
            { label: 'Top: Leave 15% Clear', text: 'Covered by search bar and native tabs.' },
            { label: 'Right: Leave 20% Clear', text: 'Covered by Like, Comment, Save and Share buttons.' },
            { label: 'Bottom: Leave 25% Clear', text: 'Covered by username, captions and audio ticker.' },
          ],
      instructorNotes: {
        duration: '3:30 - 4:30 min',
        script: isEs
          ? 'Recuerden que todos los subtítulos y ganchos deben vivir en el 40% central de la pantalla.'
          : 'Remind students that all captions and key visuals must live in the center 40% safe area.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'MISIÓN 2.1.3' : 'MISSION 2.1.3',
      title: isEs ? 'Prueba Práctica de los 3 Planos' : '3-Shot Practice Drill',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Toma 1: Plano Medio (5s)',
              desc: 'Ponte a la altura de tus ojos, di "Hola, esta es una prueba" mirando al lente.',
            },
            {
              number: '02',
              title: 'Toma 2: Plano Detalle (5s)',
              desc: 'Acércate a 15 cm de tus manos manipulando un objeto o escribiendo.',
            },
            {
              number: '03',
              title: 'Toma 3: Plano POV (5s)',
              desc: 'Graba desde la altura de tu barbilla mostrando tu mesa de trabajo.',
            },
          ]
        : [
            { number: '01', title: 'Shot 1: Medium (5s)', desc: 'Frame eye level and speak 5s looking directly at lens.' },
            { number: '02', title: 'Shot 2: Macro (5s)', desc: 'Get 15cm close to hands interacting with an object.' },
            { number: '03', title: 'Shot 3: POV (5s)', desc: 'Film from chin height looking down at your desk.' },
          ],
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Con estos 3 clips de 5 segundos el alumno tiene lista su entrega para el Reto 2.1.'
          : 'With these three 5s clips, students have their deliverable ready for Challenge 2.1.',
      },
    },
  ];

  return {
    id: 'm02-01-03-framing-composition',
    slug: 'm02-01-03-framing-composition',
    lessonId: 'm02-01',
    title: isEs
      ? 'Composición & Encuadre Vertical 9:16'
      : 'Composition & Vertical 9:16 Framing',
    moduleTag: isEs ? 'SEMANA 2 · MICROCLASE 2.1.3' : 'WEEK 2 · MICROCLASS 2.1.3',
    estimatedMinutes: 5,
    slides,
  };
};
