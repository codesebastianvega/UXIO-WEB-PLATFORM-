import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM0101 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Contenido Comercial vs. Orgánico' : 'Commercial vs. Organic Content',
      subtitle: isEs
        ? 'Módulo 1 · Aprende a crear piezas nativas que eduquen, retengan y vendan sin parecer publicidad.'
        : 'Module 1 · Learn to craft native assets that educate, retain and convert without looking like ads.',
      highlight: isEs ? 'Semana 1 · Estrategia de Negocio a Contenido' : 'Week 1 · Strategy: Business to Content',
      imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&auto=format&fit=crop&q=80',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Clase 1.1! Hoy descubriremos por qué los anuncios tradicionales están muriendo y cómo el contenido nativo se convirtió en la máquina de ventas más potente para cualquier negocio.'
          : 'Welcome to Lesson 1.1! Today we discover why traditional ads are dying and how native content became the highest-converting sales engine.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 00:00 - 10:00 MIN',
      title: isEs
        ? '¿Por qué la gente salta los anuncios pero pasa horas viendo videos de desconocidos?'
        : 'Why do people skip ads but spend hours watching unknown creators?',
      subtitle: isEs
        ? 'La ceguera publicitaria es real: tu cliente no quiere que le vendas, quiere que le resuelvas una fricción real.'
        : 'Banner blindness is real: buyers do not want hard pitches; they want real problems solved.',
      highlight: isEs ? 'Cero Fricción · Autoridad Instantánea' : 'Zero Friction · Instant Authority',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '1:00 - 3:00 min',
        script: isEs
          ? 'La clave está en la psicología del espectador. Cuando ven un logo corporativo, su cerebro activa el escudo defensivo. Cuando ven a una persona real resolviendo un truco, bajan la guardia y escuchan con atención.'
          : 'It is audience psychology. A corporate logo triggers defensive filters. A real person sharing a practical workflow earns deep attention.',
      },
    },
    {
      id: 's03',
      type: 'comparison',
      tag: isEs ? 'COMPARATIVA ESTRATÉGICA' : 'STRATEGIC COMPARISON',
      title: isEs ? 'Anuncio Tradicional vs. Contenido Nativo' : 'Traditional Ad vs. Native Content',
      comparison: isEs
        ? {
            beforeLabel: 'Anuncio Tradicional / Publicidad Antigua',
            before: [
              'Habla de la empresa: "Somos líderes en el mercado".',
              'Locutor neutro, música de ascensor y planos artificiales.',
              'Obliga a dar clic en una landing page pesada de 10 campos.',
              'Costo de adquisición alto y tasa de rebote del 80%.',
            ],
            afterLabel: 'Contenido Comercial Nativo UXIO',
            after: [
              'Habla del dolor del cliente en los primeros 3 segundos.',
              'Voz del fundador, luz natural y demostración real en pantalla.',
              'Llamado directo a comentar una palabra para abrir WhatsApp.',
              'Cero costo de pauta obligatoria y tasa de apertura del 98%.',
            ],
          }
        : {
            beforeLabel: 'Traditional Broadcast Ad',
            before: [
              'Focuses on the company: "We are industry leaders".',
              'Generic voiceover, elevator music, and staged footage.',
              'Forces users to slow 10-field web landing pages.',
              'High cost per acquisition and 80% bounce rates.',
            ],
            afterLabel: 'UXIO Native Commercial Content',
            after: [
              'Attacks buyer pain points in the first 3 seconds.',
              'Founder presence, natural light, and real workflow proof.',
              'Direct keyword CTA triggering immediate WhatsApp chats.',
              'Zero forced ad spend and 98% message open rates.',
            ],
          },
      instructorNotes: {
        duration: '3:00 - 6:00 min',
        script: isEs
          ? 'Miren esta comparativa en pantalla. El contenido nativo elimina todas las capas de fricción. Pasamos de una landing page aburrida a una conversación humana en WhatsApp.'
          : 'Look at this comparison. Native content eliminates friction layers, transitioning from cold landing pages to 1-on-1 human conversations.',
      },
    },
    {
      id: 's04',
      type: 'concept',
      tag: isEs ? 'LOS 3 PILARES' : 'THE 3 PILLARS',
      title: isEs ? 'La Fuerza del Creador Interno & UGC' : 'The Power of In-House Creators & UGC',
      subtitle: isEs
        ? 'Por qué los fundadores y especialistas convierten 4x más que un influencer contratado.'
        : 'Why business owners and specialists convert 4x better than external influencers.',
      points: isEs
        ? [
            {
              label: 'Autoridad Técnica',
              text: 'Nadie responde preguntas complejas y objeciones de clientes mejor que quien fabrica o presta el servicio.',
              detailData: {
                tag: 'PILAR 01 // AUTORIDAD',
                title: 'Dominio Técnico sin Guion Falso',
                description: 'Cuando hablas desde la experiencia diaria, tu tono transmite certeza absoluta, lo que disuelve el miedo de compra del cliente.',
                imageCaption: 'Autoridad Real · Confianza Inmediata',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Cero intermediarios que no entienden el producto', 'Respuestas precisas en menos de 45 segundos'],
                actionTip: 'Menciona datos y tiempos reales de tu proceso en cada video.',
              },
            },
            {
              label: 'Cero Filtro Corporativo',
              text: 'La imperfección controlada genera afinidad: el cliente siente que habla con un colega experto.',
              detailData: {
                tag: 'PILAR 02 // HUMANIZACIÓN',
                title: 'La Conexión Humana que Vende',
                description: 'Mostrar tu espacio de trabajo real y hablar en primera persona crea una relación de cercanía que ningún logo puede igualar.',
                imageCaption: 'Afinidad Orgánica · Conversación 1 a 1',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80',
                highlights: ['La gente le compra a personas en quienes confía', 'Mayor retención en los primeros 10 segundos'],
                actionTip: 'Saluda al lente como si estuvieras llamando por FaceTime a tu mejor cliente.',
              },
            },
            {
              label: 'Activo Evergreen',
              text: 'Un video bien estructurado sigue atrayendo prospectos a WhatsApp durante 6 a 12 meses continuos.',
              detailData: {
                tag: 'PILAR 03 // RENTABILIDAD',
                title: 'Biblioteca de Contenido Comercial',
                description: 'A diferencia de una pauta que se apaga cuando dejas de pagar, tus videos en TikTok e Instagram siguen indexados y resolviendo dudas.',
                imageCaption: 'Activo Acumulativo · Retorno Perpetuo',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Tráfico orgánico residual mes tras mes', 'Herramienta para que tu equipo comercial envíe a prospectos'],
                actionTip: 'Guarda tus mejores 5 videos para enviarlos como respuesta rápida por WhatsApp.',
              },
            },
          ]
        : [
            {
              label: 'Technical Mastery',
              text: 'Nobody addresses complex objections better than the specialist who actually delivers the product.',
            },
            {
              label: 'Unpolished Authenticity',
              text: 'Controlled imperfection builds trust: buyers feel they are speaking with a trusted peer.',
            },
            {
              label: 'Evergreen Asset',
              text: 'A well-crafted clip keeps driving qualified buyers to WhatsApp for 6 to 12 months continuously.',
            },
          ],
      instructorNotes: {
        duration: '6:00 - 9:00 min',
        script: isEs
          ? 'Expliquen a sus alumnos que no necesitan ser actores profesionales. Su conocimiento técnico y su honestidad son exactamente lo que el cliente quiere escuchar.'
          : 'Emphasize that students do not need acting backgrounds. Real domain expertise and clear speaking are what buyers value most.',
      },
    },
    {
      id: 's05',
      type: 'challenge',
      tag: isEs ? 'CHECKPOINT DE ACCIÓN' : 'ACTION CHECKPOINT',
      title: isEs ? 'Misión 1.1: Auditoría de tu Mensaje' : 'Mission 1.1: Message Audit',
      challengeData: isEs
        ? {
            whatToDo: 'Toma la frase clásica con la que describes tu producto y transfórmala en un gancho de dolor en primera persona.',
            whatToDeliver: '1 Gancho de apertura de 3 segundos + 1 llamada a la acción hacia WhatsApp.',
            whereToSubmit: 'Subir al canal de Discord de la cohorte o tu libreta de trabajo.',
            criteria: [
              'Cero saludos lentos ("Hola a todos")',
              'Mencionar un dolor o beneficio concreto en menos de 10 palabras',
              'Palabra clave de CTA clara ("Comenta GUIA para WhatsApp")',
            ],
          }
        : {
            whatToDo: 'Take your standard product pitch and rewrite it as a first-person problem-solving hook.',
            whatToDeliver: '1 3-second opening hook + 1 direct WhatsApp CTA.',
            whereToSubmit: 'Submit in cohort Discord or personal worksheet.',
            criteria: [
              'No slow intros ("Hello everyone")',
              'Direct pain point in under 10 words',
              'Clear keyword CTA ("Comment GUIDE for WhatsApp")',
            ],
          },
      instructorNotes: {
        duration: '9:00 - 12:00 min',
        script: isEs
          ? 'Cierren la clase invitando a los alumnos a completar este checkpoint antes de avanzar a la Lección 1.2 sobre Contenido Escondido.'
          : 'Close the class encouraging students to complete this checkpoint before moving to Lesson 1.2 on Hidden Content.',
      },
    },
  ];

  return {
    id: 'm01-01-commercial-content',
    slug: 'm01-01-commercial-content',
    lessonId: 'm01-01',
    title: isEs ? 'Clase 1.1 — Contenido Comercial vs. Orgánico' : 'Lesson 1.1 — Commercial vs. Organic Content',
    moduleTag: isEs ? 'SEMANA 1 · ESTRATEGIA' : 'WEEK 1 · STRATEGY',
    estimatedMinutes: 12,
    slides,
  };
};
