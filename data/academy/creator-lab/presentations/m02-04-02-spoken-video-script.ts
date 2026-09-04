import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM020402 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'El Guion de Hablar a Cámara (45s)' : 'The 45s Spoken Video Script',
      subtitle: isEs
        ? 'Microclase 2.4.2 · Los 4 bloques estructurales para estructurar un video comercial de alta retención.'
        : 'Microclass 2.4.2 · The 4 structural blocks for high-retention commercial video.',
      highlight: isEs ? 'Semana 2 · Del Gancho a WhatsApp' : 'Week 2 · Hook to WhatsApp',
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 2.4.2' : '// KEY CONCEPTS 2.4.2',
        badge: isEs ? 'GUION 45s' : '45s SCRIPT',
        items: [
          { title: isEs ? 'Gancho de 3s (Hook)' : '3s Hook', desc: isEs ? 'Atacar el dolor sin saludos' : 'Zero intro friction entry', color: '#FE385B' },
          { title: isEs ? 'Cuerpo con B-Roll' : 'Body with B-Roll', desc: isEs ? 'Intercalar planos cada 4 segundos' : 'Layer B-roll every 4 seconds', color: '#FF7F07' },
          { title: isEs ? 'CTA WhatsApp' : 'WhatsApp CTA', desc: isEs ? 'Palabra clave de cierre' : 'Direct keyword closing trigger', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 2.4.2! Hoy juntamos todo lo aprendido: guionizamos tu primer video de 45 segundos listo para grabar.'
          : 'Welcome to Microclass 2.4.2! Today we assemble your complete 45-second video script.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'Un video de 45 segundos tiene 4 actos exactos: Gancho, Problema, Demostración y Puente a WhatsApp.'
        : 'A 45-second commercial video has 4 exact acts: Hook, Friction, Demonstration and WhatsApp Bridge.',
      subtitle: isEs
        ? 'No necesitas inventar la rueda en cada video: cuando sigues esta estructura de 4 bloques, cada pieza que publicas tiene intención comercial clara.'
        : 'Follow this 4-block formula so every single clip drives qualified inbound leads.',
      highlight: isEs ? 'Estructura Probada = Ventas Predecibles' : 'Tested Framework = Predictable Leads',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Presenten los 4 bloques con claridad. Es la plantilla del Reto 2 Oficial.'
          : 'Walk through the 4 acts. This is the official framework for Challenge 2.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'LOS 4 BLOQUES TEMPORALES' : 'THE 4 TIMING BLOCKS',
      title: isEs ? 'La Anatomía de los 45 Segundos' : 'The 45-Second Anatomy',
      subtitle: isEs
        ? 'La distribución de tiempo ideal para máxima retención en TikTok e Instagram Reels.'
        : 'Optimal time allocation for maximum retention on vertical feeds.',
      points: isEs
        ? [
            {
              label: 'Acto 1: Gancho de Fricción (0 a 3s)',
              text: 'Plano Medio a cámara mirando al lente: "Si tu negocio pierde clientes por no responder rápido en WhatsApp..."',
              detailData: {
                tag: 'ACTO 01 // 0-3 SEGUNDOS',
                title: 'Detener el Dedo',
                description: 'Cita la frustración o deseo exacto en la primera frase sin rodeos.',
                imageCaption: '0-3s · Gancho de Fricción',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Cero saludos o logotipos', 'Contacto visual penetrante'],
                actionTip: 'Haz una pregunta o enuncia un error común.',
              },
            },
            {
              label: 'Acto 2: El Problema / Dolor (3 a 15s)',
              text: 'Plano Medio con corte o B-roll de manos: "El problema es que responder tarde hace que el 60% de tus ventas se vayan a la competencia."',
              detailData: {
                tag: 'ACTO 02 // 3-15 SEGUNDOS',
                title: 'Dimensionar la Consecuencia',
                description: 'Explica cuánto cuesta no resolver este problema hoy.',
                imageCaption: '3-15s · Dimensión del Dolor',
                image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Usa cifras o situaciones cotidianas', 'Intercala toma macro de apoyo'],
                actionTip: 'Habla del síntoma visible que el cliente reconoce.',
              },
            },
            {
              label: 'Acto 3: La Solución & Prueba (15 a 35s)',
              text: 'Toma POV de pantalla o manos: "Esta es la plantilla de automatización que usamos para responder en menos de 90 segundos."',
              detailData: {
                tag: 'ACTO 03 // 15-35 SEGUNDOS',
                title: 'Demostración en Manos',
                description: 'Muestra la herramienta o proceso en acción con audio ambiental real.',
                imageCaption: '15-35s · Demostración en Manos',
                image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Muestra el resultado concreto', 'Resalta la facilidad de uso'],
                actionTip: 'No des toda la teoría; muestra el resultado visual.',
              },
            },
            {
              label: 'Acto 4: Puente a WhatsApp (35 a 45s)',
              text: 'Plano Medio sonriendo: "Comenta BOTAS o escribe al enlace de WhatsApp y te envío el catálogo con envío gratis hoy."',
              detailData: {
                tag: 'ACTO 04 // 35-45 SEGUNDOS',
                title: 'Cierre con Palabra Clave',
                description: 'Un llamado claro con palabra clave que activa una conversación privada de venta.',
                imageCaption: '35-45s · Llamado Directo',
                image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Palabra clave corta de 1 palabra', 'Incentivo de respuesta rápida'],
                actionTip: 'Señala hacia abajo o indica el enlace del perfil.',
              },
            },
          ]
        : [
            { label: 'Act 1: Hook (0-3s)', text: 'Direct friction opener looking at the lens.' },
            { label: 'Act 2: The Pain (3-15s)', text: 'Quantify the cost of leaving the friction unsolved.' },
            { label: 'Act 3: The Proof (15-35s)', text: 'Showcase tool/process hands-on with B-roll.' },
            { label: 'Act 4: WhatsApp CTA (35-45s)', text: 'Keyword trigger directing to sales conversation.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Muestren cómo los 4 actos encajan en un video de menos de 1 minuto.'
          : 'Demonstrate how the 4 acts produce a compact 45-second commercial asset.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'RÚBRICA DE GRABACIÓN' : 'RECORDING RUBRIC',
      title: isEs ? 'Video Improvisado vs. Video con Guion de 4 Bloques' : 'Improvised Video vs. 4-Block Scripted Video',
      comparison: isEs
        ? {
            beforeLabel: '❌ Video Improvisado (Sin Estructura)',
            before: [
              'Comienza con "Hola amigos, espero que estén bien...".',
              'Da vueltas durante 2 minutos sin llegar al punto.',
              'Habla a cámara fija sin intercalar ninguna toma B-roll.',
              'Termina con "denle like y síganme".',
            ],
            afterLabel: '✓ Video Estructurado UXIO (45s)',
            after: [
              'Entrada directa al dolor en el segundo 0.',
              'Mensaje contundente y condensado en 45 segundos.',
              'Intercala 2 tomas macro de B-roll en el cuerpo.',
              'Cierra con palabra clave para abrir chat en WhatsApp.',
            ],
          }
        : {
            beforeLabel: '❌ Unstructured Improv Video',
            before: [
              'Opens with "Hey everyone hope you are well...".',
              'Rambles for 2 minutes without solving anything.',
              'Static talking head with zero B-roll layers.',
              'Closes with weak "like and subscribe".',
            ],
            afterLabel: '✓ UXIO 4-Block Script (45s)',
            after: [
              'Direct friction attack on second 0.',
              'Punchy tight messaging under 45 seconds.',
              'Layers 2 macro B-roll shots during proof act.',
              'Closes with keyword trigger for WhatsApp lead.',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:30 min',
        script: isEs
          ? 'Expliquen que el Reto 2 Oficial evalúa estos 4 actos.'
          : 'Emphasize that Official Challenge 2 grades these exact 4 acts.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'RETO 2 OFICIAL' : 'OFFICIAL CHALLENGE 2',
      title: isEs ? 'Tu Misión para el Reto 2 Oficial' : 'Official Challenge 2 Mission',
      steps: isEs
        ? [
            {
              number: '01',
              title: '1. Elige una Idea de tu Matriz',
              desc: 'Toma una de tus 30 ideas de la Semana 1 (de preferencia del Pilar 1 o Pilar 2).',
            },
            {
              number: '02',
              title: '2. Graba tus 4 Bloques Frase por Frase',
              desc: 'Graba el gancho validado en el Live Lab, el dolor, la demostración con B-roll y el llamado a WhatsApp.',
            },
            {
              number: '03',
              title: '3. Sube el Enlace al Portal (Domingo 23:59)',
              desc: 'Sube tu enlace (YouTube no listado, TikTok, Reel o Drive) en la sección Reto Práctico.',
            },
          ]
        : [
            { number: '01', title: '1. Pick 1 Idea from Matrix', desc: 'Select 1 idea from your Week 1 roadmap.' },
            { number: '02', title: '2. Shoot 4 Acts Sentence by Sentence', desc: 'Record validated hook, pain, B-roll demo and WhatsApp CTA.' },
            { number: '03', title: '3. Submit Link to Portal (Sun 23:59)', desc: 'Submit unlisted YouTube, TikTok, Reel or Drive link.' },
          ],
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Este es el entregable cumbre de la Semana 2: su primer video comercial grabado y listo para editar.'
          : 'This is the Week 2 peak deliverable: your first filmed commercial video ready for CapCut.',
      },
    },
  ];

  return {
    id: 'm02-04-02-spoken-video-script',
    slug: 'm02-04-02-spoken-video-script',
    lessonId: 'm02-04',
    title: isEs
      ? 'El Guion de Hablar a Cámara (45s)'
      : 'The 45s Spoken Video Script',
    moduleTag: isEs ? 'SEMANA 2 · MICROCLASE 2.4.2' : 'WEEK 2 · MICROCLASS 2.4.2',
    estimatedMinutes: 5,
    slides,
  };
};
