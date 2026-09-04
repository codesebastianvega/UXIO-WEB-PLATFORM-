import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM020201 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Luz de Ventana & Audio Nítido sin Gastar' : 'Window Light & Crisp Budget Audio',
      subtitle: isEs
        ? 'Microclase 2.2.1 · Cómo iluminar tu rostro a 45° con luz natural suave y capturar voz clara sin micrófonos de $300 USD.'
        : 'Microclass 2.2.1 · 45° soft natural window lighting and clean vocal capture on a budget.',
      highlight: isEs ? 'Semana 2 · Luz & Acústica' : 'Week 2 · Light & Acoustics',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 2.2.1' : '// KEY CONCEPTS 2.2.1',
        badge: isEs ? 'LUZ & AUDIO' : 'LIGHT & AUDIO',
        items: [
          { title: isEs ? 'Posición 45° a la Ventana' : '45° Window Angle', desc: isEs ? 'Crea volumen suave y sombra sutil' : 'Soft dimension with natural falloff', color: '#FE385B' },
          { title: isEs ? 'Regla de la Cuartilla (20cm)' : 'Hand-Span Rule (20cm)', desc: isEs ? 'Distancia óptima del micrófono móvil' : 'Optimal microphone distance', color: '#FF7F07' },
          { title: isEs ? 'Eliminación de Eco Casero' : 'Room Echo Damping', desc: isEs ? 'Cortinas, cojines y alfombras' : 'Curtains, pillows and rugs for clean sound', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 2.2.1! La iluminación y el audio representan el 70% de la percepción de calidad. Hoy aprenderemos a usar tu ventana como un softbox de cine.'
          : 'Welcome to Microclass 2.2.1! Today we turn any simple window into a high-end cinema softbox.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'La gente tolera un video con calidad visual modesta, pero desliza el dedo en 1 segundo si el audio tiene eco o ruido molesto.'
        : 'Viewers will tolerate modest visual quality, but swipe away in 1 second if audio has annoying echo or room noise.',
      subtitle: isEs
        ? 'El audio es el 50% de la experiencia de video. Grabar cerca de la boca y en un espacio con telas o cojines transforma por completo tu voz.'
        : 'Audio is 50% of video. Recording close to your mouth in a cushioned room transforms vocal presence.',
      highlight: isEs ? 'Audio Limpio = Retención Prolongada' : 'Clean Audio = High Retention',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Enfaticen que un buen micrófono mal ubicado suena peor que el micrófono del celular a 20 centímetros de la boca.'
          : 'Remind that a $300 mic placed 2 meters away sounds worse than a phone at 20cm.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'GEOMETRÍA DE LA LUZ' : 'LIGHT GEOMETRY',
      title: isEs ? 'La Regla de los 45 Grados frente a la Ventana' : 'The 45-Degree Window Rule',
      subtitle: isEs
        ? 'Cómo posicionarte respecto a la luz natural para lograr volumen tridimensional en tu rostro.'
        : 'How to position yourself relative to natural light for 3D depth and cinematic shadows.',
      points: isEs
        ? [
            {
              label: '1. Ventana a 45° a tu Derecha o Izquierda',
              text: 'No te pares mirando de frente a la ventana (luz plana) ni de espaldas (contraluz oscuro). Pon la ventana en diagonal.',
              detailData: {
                tag: 'ÁNGULO // LUZ EN DIAGONAL',
                title: 'La Luz Rembrandt Natural',
                description: 'Ilumina un lado de tu rostro con suavidad y deja una sombra sutil en el otro lado, dando dimensión y elegancia.',
                imageCaption: 'Luz a 45° · Volumen y Textura',
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Evita la luz de mediodía directa (usa cortina translúcida)', 'La ventana actúa como panel difusor gigante'],
                actionTip: 'La mejor hora es entre 8:00 AM y 11:00 AM o entre 3:00 PM y 5:30 PM.',
              },
            },
            {
              label: '2. Apaga Focos de Techo Cenitales',
              text: 'Las bombillas amarillas del techo crean sombras feas bajo tus ojos y nariz (efecto mapache). Apágalas.',
              detailData: {
                tag: 'LUCES // APAGAR FOCO TECHO',
                title: 'Eliminar Sombras Cenitales Duras',
                description: 'La luz artificial mezclada con luz de ventana arruina el balance de blancos. Deja que la ventana sea la única fuente.',
                imageCaption: 'Solo Luz de Ventana · Color Puro',
                image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Cero contaminación de bombillas amarillas', 'Ojos con brillo natural de ventana (Catchlight)'],
                actionTip: 'Si te falta luz del lado oscuro, usa una pared blanca o cartón como rebotador.',
              },
            },
            {
              label: '3. Distancia de Micrófono: 20 a 30 cm',
              text: 'Sostén el celular o trípode a un brazo de distancia. Si estás lejos, el micrófono captará el eco de la habitación.',
              detailData: {
                tag: 'ACÚSTICA // DISTANCIA DE CAPTURA',
                title: 'Voz Cálida y Presencial',
                description: 'Al hablar a 30 cm del micrófono inferior del celular, la voz suena rica en frecuencias graves y sin eco.',
                imageCaption: '30cm de Distancia · Voz Cálida',
                image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Habla con proyección y energía', 'Coloca un cojín detrás del celular para absorber rebotes'],
                actionTip: 'Un par de audífonos de cable con micrófono pegado al pecho funciona excelente.',
              },
            },
          ]
        : [
            { label: '1. Window at 45° Angle', text: 'Diagonal light creates gentle 3D depth and cinematic shadows.' },
            { label: '2. Turn Off Ceiling Lights', text: 'Avoid overhead yellowish lights causing raccoon eye shadows.' },
            { label: '3. Mic Distance: 20-30 cm', text: 'Keep phone within arm reach to eliminate room echo.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Muestren en vivo la diferencia entre tener la ventana de frente vs a 45 grados.'
          : 'Demonstrate the difference between flat front light vs 45-degree angled window light.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'COMPARATIVA EN VIVO' : 'SIDE-BY-SIDE',
      title: isEs ? 'Iluminación Casera Amateur vs. Setup UXIO 45°' : 'Amateur Lighting vs. UXIO 45° Setup',
      comparison: isEs
        ? {
            beforeLabel: '❌ Errores Clásicos de Iluminación & Audio',
            before: [
              'Ventana detrás del creador (cara completamente oscura).',
              'Foco de techo encendido con sombras duras bajo ojos.',
              'Hablando a 2 metros del teléfono con eco de baño.',
              'Ruido de ventilador o aire acondicionado de fondo.',
            ],
            afterLabel: '✓ Setup Calibrado UXIO',
            after: [
              'Ventana a 45° con cortina difusora suave.',
              'Focos de techo apagados; luz pura y natural.',
              'Teléfono a 30 cm con voz nítida y presente.',
              'Habitación amortiguada con cojines o alfombra.',
            ],
          }
        : {
            beforeLabel: '❌ Typical Light & Audio Mistakes',
            before: [
              'Window behind subject causing silhouette.',
              'Overhead ceiling light casting harsh downward shadows.',
              'Standing 2 meters from phone with echoing audio.',
              'Loud background fan or AC hum.',
            ],
            afterLabel: '✓ UXIO Calibrated Setup',
            after: [
              '45° window angle with soft diffused light.',
              'Ceiling lights off for clean natural color balance.',
              'Phone 30 cm away for intimate vocal presence.',
              'Damped room with soft fabrics and cushions.',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:30 min',
        script: isEs
          ? 'Este setup no cuesta ni un solo dólar y se ve mejor que luces baratas de aro LED.'
          : 'Emphasize this setup costs zero dollars and beats cheap ring lights.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'MISIÓN 2.2.1' : 'MISSION 2.2.1',
      title: isEs ? 'Tu Prueba de Luz & Audio en 3 Minutos' : '3-Minute Light & Audio Test Drill',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Ubica tu Ventana',
              desc: 'Párate a 1 metro de la ventana colocando el marco en diagonal a 45° de tu cara.',
            },
            {
              number: '02',
              title: 'Apaga Luces Artificiales',
              desc: 'Apaga bombillas de techo y ventiladores para eliminar ruido constante.',
            },
            {
              number: '03',
              title: 'Graba 10 Segundos de Voz',
              desc: 'Sostén el celular a 30 cm y di tu gancho con voz proyectada para verificar nitidez.',
            },
          ]
        : [
            { number: '01', title: 'Find Window', desc: 'Stand 1m away with window 45° diagonal to your face.' },
            { number: '02', title: 'Kill Ceiling Lights', desc: 'Turn off artificial lamps and fans.' },
            { number: '03', title: 'Record 10s Vocal Test', desc: 'Hold phone 30cm away and test your voice clarity.' },
          ],
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Con esta prueba el alumno valida su rincón oficial de grabación para todo el curso.'
          : 'With this test, students establish their permanent filming corner for the course.',
      },
    },
  ];

  return {
    id: 'm02-02-01-window-light-audio',
    slug: 'm02-02-01-window-light-audio',
    lessonId: 'm02-02',
    title: isEs
      ? 'Luz de Ventana & Audio Nítido sin Gastar'
      : 'Window Light & Crisp Budget Audio',
    moduleTag: isEs ? 'SEMANA 2 · MICROCLASE 2.2.1' : 'WEEK 2 · MICROCLASS 2.2.1',
    estimatedMinutes: 5,
    slides,
  };
};
