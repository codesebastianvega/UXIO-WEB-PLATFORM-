import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM010101 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'La Muerte del Anuncio Tradicional' : 'The Death of Traditional Ads',
      subtitle: isEs
        ? 'Microclase 1.1.1 · Por qué el consumidor moderno ignora los anuncios y cómo el contenido nativo abre ventas.'
        : 'Microclass 1.1.1 · Why modern consumers ignore corporate ads and how native content drives sales.',
      highlight: isEs ? 'Semana 1 · De Negocio a Contenido' : 'Week 1 · Business to Content',
      imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 1.1.1' : '// KEY CONCEPTS 1.1.1',
        badge: isEs ? 'MICROCLASE' : 'LESSON',
        items: [
          { title: isEs ? 'Ceguera Publicitaria' : 'Banner Blindness', desc: isEs ? 'El rechazo al anuncio corporativo' : 'Why users swipe away from ads', color: '#FE385B' },
          { title: isEs ? 'Contenido Nativo' : 'Native Content', desc: isEs ? 'Videos que parecen orgánicos' : 'Videos disguised as organic feed', color: '#FF7F07' },
          { title: isEs ? 'Gancho de 3 Segundos' : '3-Second Hook', desc: isEs ? 'Atacar la fricción sin rodeos' : 'Target friction immediately', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Hola a todos! En esta microclase vamos a entender por qué los anuncios corporativos tradicionales ya no funcionan y cómo el contenido nativo detiene el scroll en 3 segundos.'
          : 'Welcome! In this microclass, we analyze why broadcast ads no longer work and how native content stops the scroll.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 00:00 - 04:00 MIN',
      title: isEs
        ? 'La ceguera publicitaria es el mayor asesino de ventas en redes sociales.'
        : 'Banner blindness is the biggest killer of social feed sales.',
      subtitle: isEs
        ? 'Cuando el usuario ve un logo gigante y música de ascensor, desliza el dedo. Cuando ve a alguien resolviendo un problema real, se queda a escuchar.'
        : 'When users see a big corporate logo, they swipe. When they see a real person solving a friction, they stay and listen.',
      highlight: isEs ? 'Atención Genuina > Publicidad Forzada' : 'Genuine Attention > Forced Ads',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'El cerebro humano se volvió experto en ignorar publicidad. Para vender en 2026, tu contenido debe parecer una recomendación de un amigo.'
          : 'Human brains filter out ads automatically. To sell today, your content must feel like a trusted recommendation.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'PSICOLOGÍA DEL COMPRADOR' : 'BUYER PSYCHOLOGY',
      title: isEs ? 'Los 3 Filtros Anti-Publicidad' : '3 Anti-Advertising Filters',
      subtitle: isEs
        ? 'Las barreras mentales automáticas que tu contenido debe sortear en 3 segundos.'
        : 'The automatic mental barriers your content must overcome in 3 seconds.',
      points: isEs
        ? [
            {
              label: '1. Filtro Visual',
              text: 'Si parece un comercial de televisión (logos 3D, tipografía de folleto), el usuario asume que le van a cobrar y desliza.',
              detailData: {
                tag: 'FILTRO 01 // VISUAL',
                title: 'La Trampa de la Producción de Estudio',
                description: 'Los videos demasiado perfectos generan desconfianza inmediata. La luz natural y el encuadre casual superan el filtro visual.',
                imageCaption: 'Naturalidad Visual · Retención Inmediata',
                image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Cero cortinillas con logo al inicio', 'Encuadre a los ojos del creador'],
                actionTip: 'Empieza el video hablando en el segundo 0:00 sin pantallas de presentación.',
              },
            },
            {
              label: '2. Filtro de Lenguaje',
              text: 'Frases como "somos líderes en soluciones integrales" suenan a corporativo aburrido; usa lenguaje de la calle.',
              detailData: {
                tag: 'FILTRO 02 // LENGUAJE',
                title: 'Habla como Humano, no como Folleto',
                description: 'Traduce tus conceptos técnicos al vocabulario exacto que tu cliente usa cuando se queja con su pareja o socio.',
                imageCaption: 'Vocabulario Cotidiano · Cero Jerga',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80',
                highlights: ['"Ahorra 2 horas al día" en vez de "optimiza procesos"', 'Ejemplos tangibles de la vida real'],
                actionTip: 'Graba notas de voz explicando tu servicio como si le hablaras a tu mamá.',
              },
            },
            {
              label: '3. Filtro de Intención',
              text: 'Si solo pides dinero sin entregar valor previo, te bloquean; si enseñas primero, te piden el precio con ganas.',
              detailData: {
                tag: 'FILTRO 03 // INTENCIÓN',
                title: 'La Ley de la Reciprocidad Comercial',
                description: 'Cuando resuelves un micro-problema gratis en 45 segundos, el cliente siente una deuda psicológica y busca tu oferta completa.',
                imageCaption: 'Valor Primero · Venta Agradecida',
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80',
                highlights: ['80% de educación práctica', '20% llamado a la acción comercial'],
                actionTip: 'Nunca publiques un video sin antes preguntarte: "¿Qué aprendió el espectador hoy?".',
              },
            },
          ]
        : [
            { label: '1. Visual Filter', text: 'Staged corporate visuals trigger instant swipe.' },
            { label: '2. Language Filter', text: 'Corporate jargon kills engagement; use natural vocabulary.' },
            { label: '3. Intent Filter', text: 'Give upfront value before pitching your offer.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:00 min',
        script: isEs
          ? 'Expliquen los 3 filtros. La clave para romperlos es la honestidad radical y la ausencia de maquillaje corporativo.'
          : 'Break down the 3 filters. Radical honesty and zero corporate fluff are the key.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'COMPARATIVA EN VIVO' : 'LIVE COMPARISON',
      title: isEs ? 'Anuncio Tradicional vs. Contenido Nativo' : 'Traditional Ad vs. Native Content',
      comparison: isEs
        ? {
            beforeLabel: 'Publicidad Tradicional (Invasiva)',
            before: [
              'Habla de la empresa: "Somos los #1 en calidad".',
              'Locutor neutro y planos de banco de imágenes.',
              'Envía a una web pesada con 10 campos obligatorios.',
              'Costo por lead altísimo y 80% de rebote.',
            ],
            afterLabel: 'Contenido Comercial Nativo (UXIO)',
            after: [
              'Ataca el dolor del cliente en los primeros 3 segundos.',
              'Voz del fundador, luz natural y proceso real en pantalla.',
              'Llamado directo a comentar una palabra para abrir WhatsApp.',
              'Cero costo de pauta y 98% de tasa de apertura.',
            ],
          }
        : {
            beforeLabel: 'Traditional Invasive Ad',
            before: [
              'Focuses on company: "We are #1 in quality".',
              'Generic voiceover and stock video clips.',
              'Directs to slow web forms with 10 fields.',
              'High cost per lead and 80% bounce rates.',
            ],
            afterLabel: 'UXIO Native Commercial Asset',
            after: [
              'Attacks customer pain in the first 3 seconds.',
              'Founder presence, natural light, and real workflow.',
              'Direct keyword CTA triggering WhatsApp chats.',
              'Zero ad spend and 98% message open rates.',
            ],
          },
      instructorNotes: {
        duration: '3:00 - 3:45 min',
        script: isEs
          ? 'Miren la gran diferencia: el contenido nativo educa y genera confianza antes de pedir la venta.'
          : 'Notice the core difference: native content educates and earns trust before asking for the purchase.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'FÓRMULA DE EJECUCIÓN' : 'EXECUTION FORMULA',
      title: isEs ? 'La Estructura Gancho ➔ Demostración ➔ CTA' : 'The Hook ➔ Proof ➔ CTA Sequence',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Gancho de Dolor (0-3s)',
              desc: 'Enuncia el problema exacto sin decir tu nombre ni saludar.',
              detailData: {
                tag: 'PASO 01 // HOOK',
                title: 'Detener el Dedo en Seco',
                description: 'La primera frase debe hacer que tu cliente ideal piense: "Esto es exactamente para mí".',
                imageCaption: 'Gancho Directo · 0 a 3s',
                highlights: ['"Si estás perdiendo ventas por..."', '"El error que te cuesta dinero en..."'],
                actionTip: 'Habla con volumen y energía desde la primera sílaba.',
              },
            },
            {
              number: '02',
              title: 'Demostración Práctica (3-35s)',
              desc: 'Muestra la solución en tus manos o en pantalla paso a paso.',
              detailData: {
                tag: 'PASO 02 // PROOF',
                title: 'Resolución Tangible',
                description: 'No te limites a hablar: muestra la herramienta, el documento o el producto en acción.',
                imageCaption: 'Prueba en Vivo · Maestría Técnica',
                highlights: ['Cortes de B-roll cada 4 segundos', 'Texturas y sonidos reales'],
                actionTip: 'Alterna entre tu rostro y la toma de detalle.',
              },
            },
            {
              number: '03',
              title: 'Llamado a WhatsApp (35-45s)',
              desc: 'Ofrece una plantilla o catálogo invitando a comentar una palabra.',
              detailData: {
                tag: 'PASO 03 // CONVERSIÓN',
                title: 'Puente Comercial',
                description: 'Invita a una acción sencilla de 1 palabra para que tu equipo comercial continúe por WhatsApp.',
                imageCaption: 'Cierre Orgánico · Canal 1 a 1',
                highlights: ['"Comenta GUIA para enviártelo"', '"Link directo en mi perfil"'],
                actionTip: 'Usa una palabra clave corta y fácil de escribir en celular.',
              },
            },
          ]
        : [
            { number: '01', title: 'Pain Hook (0-3s)', desc: 'State the exact friction with no slow intro.' },
            { number: '02', title: 'Live Proof (3-35s)', desc: 'Show the solution in your hands or on screen.' },
            { number: '03', title: 'WhatsApp CTA (35-45s)', desc: 'Invite viewers to comment a keyword for 1-on-1 chat.' },
          ],
      instructorNotes: {
        duration: '3:45 - 4:15 min',
        script: isEs
          ? 'Este circuito de 3 pasos es la estructura estándar de todos los videos de alta conversión que grabaremos.'
          : 'This 3-step sequence is our standard high-converting video structure.',
      },
    },
    {
      id: 's06',
      type: 'challenge',
      tag: isEs ? 'CHECKPOINT PRÁCTICO' : 'PRACTICAL CHECKPOINT',
      title: isEs ? 'Tu Primer Gancho Nativo' : 'Your First Native Hook',
      challengeData: isEs
        ? {
            whatToDo: 'Toma el titular de tu página web o folleto y reescríbelo como un gancho de 3 segundos que ataque una fricción.',
            whatToDeliver: '1 Gancho de apertura en primera persona + 1 CTA de palabra clave.',
            whereToSubmit: 'Escríbelo en tu libreta o en el canal de Discord de la cohorte.',
            criteria: [
              'Menos de 10 palabras en el gancho',
              'Cero saludos lentos ("Hola a todos")',
              'Mencionar el dolor específico del comprador',
            ],
          }
        : {
            whatToDo: 'Take your website headline and rewrite it as a 3-second problem-solving hook.',
            whatToDeliver: '1 First-person opening hook + 1 keyword CTA.',
            whereToSubmit: 'Write it in your notebook or cohort Discord.',
            criteria: [
              'Under 10 words in hook',
              'No slow intros ("Hello everyone")',
              'Direct mention of buyer friction',
            ],
          },
      instructorNotes: {
        duration: '4:15 - 5:00 min',
        script: isEs
          ? 'En la siguiente microclase veremos por qué tu propio rostro como fundador convierte 4 veces más que cualquier influencer externo.'
          : 'In the next microclass, we explore why your voice as founder converts 4x better than external influencers.',
      },
    },
  ];

  return {
    id: 'm01-01-01-commercial-vs-organic',
    slug: 'm01-01-01-commercial-vs-organic',
    lessonId: 'm01-01',
    title: isEs ? '1.1.1 La Muerte del Anuncio Tradicional' : '1.1.1 Death of Traditional Ads',
    moduleTag: isEs ? 'SEMANA 1 · CLASE 1.1' : 'WEEK 1 · LESSON 1.1',
    estimatedMinutes: 5,
    slides,
  };
};
