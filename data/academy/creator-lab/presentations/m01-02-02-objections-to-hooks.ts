import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM010202 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Objeciones como Ganchos de Venta' : 'Objections as Sales Hooks',
      subtitle: isEs
        ? 'Microclase 1.2.2 · Cómo convertir las 5 preguntas más repetitivas de WhatsApp en guiones de alta retención.'
        : 'Microclass 1.2.2 · How to turn recurring WhatsApp FAQs into high-retention commercial scripts.',
      highlight: isEs ? 'Semana 1 · De Objeción a Venta' : 'Week 1 · From Objection to Sale',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 1.2.2' : '// KEY CONCEPTS 1.2.2',
        badge: isEs ? 'MINERÍA CHAT' : 'CHAT MINING',
        items: [
          { title: isEs ? 'Minería de Chats' : 'Chat Mining', desc: isEs ? 'Caza las 5 dudas recurrentes' : 'Identify 5 recurring buyer FAQs', color: '#FE385B' },
          { title: isEs ? 'Gancho Incómodo' : 'Uncomfortable Hook', desc: isEs ? '"Un cliente me dijo que cobramos caro"' : 'Directly cite the friction', color: '#FF7F07' },
          { title: isEs ? 'Respuesta Maestra' : 'Master Answer', desc: isEs ? 'Desarmar objeción en 30s con técnica' : 'Resolve friction with authority', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 1.2.2! Hoy desarmamos objeciones en público para que los clientes lleguen a tu WhatsApp listos para comprar.'
          : 'Welcome to Microclass 1.2.2! Today we defuse objections in public so prospects reach WhatsApp ready to buy.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'Tu bandeja de mensajes de WhatsApp es tu calendario de contenido más rentable.'
        : 'Your WhatsApp inbox is your highest-ROI content calendar.',
      subtitle: isEs
        ? 'Cada vez que un cliente te hace una pregunta antes de pagar, te está dando el guion exacto de tu próximo video viral.'
        : 'Every time a prospect asks a question before buying, they hand you the exact script for your next viral clip.',
      highlight: isEs ? 'Dudas de Clientes = Ganchos de Oro' : 'Buyer Questions = Golden Hooks',
      bgColor: '#FF7F07',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'No busquen ideas en internet; busquen en sus chats de ventas. Las dudas de sus clientes son las mismas que tienen miles de personas en redes.'
          : 'Do not search generic web ideas; look at sales chats. Customer doubts mirror what thousands wonder online.',
      },
    },
    {
      id: 's03',
      type: 'steps',
      tag: isEs ? 'ESTRUCTURA DE 4 PASOS' : '4-STEP FRAMEWORK',
      title: isEs ? 'El Circuito: Duda ➔ Venta en WhatsApp' : 'The FAQ to WhatsApp Sales Circuit',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Caza la Duda',
              desc: 'Identifica una objeción de precio, tiempo o garantía en tus chats de ventas.',
              detailData: {
                tag: 'PASO 01 // MINERÍA',
                title: 'Identifica la Fricción Real',
                description: 'Busca las 3 razones más comunes por las que un cliente duda antes de transferirte el dinero.',
                imageCaption: 'Dudas Reales · Ganchos Reales',
                highlights: ['"¿Por qué cobran más?"', '"¿Cuánto tarda el envío?"'],
                actionTip: 'Crea una nota en tu celular para apuntar cada duda que te hagan esta semana.',
              },
            },
            {
              number: '02',
              title: 'Gancho Incómodo',
              desc: 'Comienza citando al cliente: "Un cliente me preguntó por qué cobramos el doble..."',
              detailData: {
                tag: 'PASO 02 // HOOK',
                title: 'La Pregunta Incómoda como Imán',
                description: 'Citar una objeción real genera intriga instantánea y demuestra que no tienes miedo a hablar de temas difíciles.',
                imageCaption: 'Gancho Directo · 0 a 3s',
                highlights: ['Cero rodeos', 'Tono seguro y empático'],
                actionTip: 'Graba el gancho mirando fijamente al lente con energía.',
              },
            },
            {
              number: '03',
              title: 'Respuesta Maestra',
              desc: 'Explica en 30 segundos los materiales, técnica y respaldo de tu solución.',
              detailData: {
                tag: 'PASO 03 // AUTORIDAD',
                title: 'La Demostración de Calidad',
                description: 'Explica con calma y precisión por qué tu solución vale cada peso, mostrando el producto en tus manos.',
                imageCaption: 'Valor Técnico · Certeza Total',
                highlights: ['Muestra el material o entregable', 'Habla de durabilidad y respaldo'],
                actionTip: 'Usa una analogía sencilla para explicar conceptos técnicos.',
              },
            },
            {
              number: '04',
              title: 'Puente a WhatsApp',
              desc: 'Cierra con palabra clave: "Comenta INFO y te paso la asesoría por WhatsApp".',
              detailData: {
                tag: 'PASO 04 // CTA',
                title: 'Llamado a la Acción de Baja Fricción',
                description: 'Invita al espectador a comentar una palabra clave sencilla para recibir atención 1 a 1 por WhatsApp.',
                imageCaption: 'Conversión Directa · Cero Fricción',
                highlights: ['Palabras cortas: GUIA, INFO, PRECIO', 'Automatización de respuesta directa'],
                actionTip: 'Responde los primeros 10 comentarios en menos de 15 minutos.',
              },
            },
          ]
        : [
            { number: '01', title: 'Mine the FAQ', desc: 'Identify a pricing, timeline, or warranty objection.' },
            { number: '02', title: 'Uncomfortable Hook', desc: 'Start: "A buyer asked why we charge more than others..."' },
            { number: '03', title: 'Master Answer', desc: 'Explain materials, technique, and warranty in 30s.' },
            { number: '04', title: 'WhatsApp Bridge', desc: 'Close with keyword: "Comment INFO for direct WhatsApp access".' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Repasen la estructura de 4 pasos. Explicar las razones del precio en público elimina la fricción y justifica tarifas altas.'
          : 'Review the 4-step framework. Explaining pricing rationales in public removes friction and justifies premium rates.',
      },
    },
    {
      id: 's04',
      type: 'concept',
      tag: isEs ? 'LAS 3 OBJECIONES REINAS' : 'TOP 3 OBJECTIONS',
      title: isEs ? 'Cómo Desarmar las 3 Dudas Clásicas' : 'How to Defuse the 3 Classic Objections',
      subtitle: isEs
        ? 'Estrategias probadas para precio, tiempo y desconfianza técnica.'
        : 'Tested strategies for price, turnaround, and technical skepticism.',
      points: isEs
        ? [
            {
              label: '1. "Es muy caro"',
              text: 'Desarma mostrando la comparativa de durabilidad o el costo oculto de comprar opciones baratas.',
              detailData: {
                tag: 'OBJECIÓN 01 // PRECIO',
                title: 'El Costo de lo Barato',
                description: 'Muestra qué pasa cuando un cliente compra la opción económica y tiene que rehacer todo 3 meses después.',
                imageCaption: 'Durabilidad Real · Ahorro a Largo Plazo',
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80',
                highlights: ['"Lo barato sale caro"', 'Garantía extendida'],
                actionTip: 'Muestra un ejemplo de un producto barato roto vs el tuyo intacto.',
              },
            },
            {
              label: '2. "¿Cuánto tardan?"',
              text: 'Explica los 4 controles de calidad que aplicas y por qué la prisa compromete el resultado.',
              detailData: {
                tag: 'OBJECIÓN 02 // TIEMPOS',
                title: 'Tiempo como Indicador de Calidad',
                description: 'Transforma el tiempo de espera en una virtud: demuestra que cada pieza se somete a calibración rigurosa.',
                imageCaption: 'Control de Calidad · Precisión',
                image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Protocolos de verificación', 'Cero entregas defectuosas'],
                actionTip: 'Muestra tu lista de chequeo de 5 puntos antes del empaque.',
              },
            },
            {
              label: '3. "¿Esto me servirá a mí?"',
              text: 'Muestra 2 casos de clientes idénticos al espectador que tenían la misma duda inicial.',
              detailData: {
                tag: 'OBJECIÓN 03 // AFINIDAD',
                title: 'Prueba de Espejo',
                description: 'Cuando el cliente ve a alguien en su misma situación logrando el resultado, su duda desaparece de inmediato.',
                imageCaption: 'Casos Reales · Identificación',
                image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Capturas de chats de agradecimiento', 'Resultados en 30 días'],
                actionTip: 'Cita la ciudad o profesión de tu cliente en el video.',
              },
            },
          ]
        : [
            { label: '1. "Too expensive"', text: 'Show the hidden costs of cheap alternatives.' },
            { label: '2. "Turnaround time"', text: 'Explain why quality control checks require precision.' },
            { label: '3. "Will it work for me?"', text: 'Show mirror case studies of similar clients.' },
          ],
      instructorNotes: {
        duration: '3:30 - 4:15 min',
        script: isEs
          ? 'Estas 3 objeciones representan el 90% de las ventas perdidas en WhatsApp. Al responderlas en video, el prospecto llega educado y convencido.'
          : 'These 3 objections account for 90% of lost sales. Answering them on video pre-qualifies buyers completely.',
      },
    },
    {
      id: 's05',
      type: 'comparison',
      tag: isEs ? 'ESTILO DE RESPUESTA' : 'RESPONSE STYLE',
      title: isEs ? 'Respuesta Defensiva vs. Respuesta de Autoridad' : 'Defensive vs. Authoritative Reply',
      comparison: isEs
        ? {
            beforeLabel: 'Respuesta Defensiva / Insegura',
            before: [
              'Se ofende por la pregunta del precio.',
              'Ofrece descuentos inmediatos para no perder al cliente.',
              'Da explicaciones técnicas largas que aburren.',
              'Demuestra necesidad y baja el valor de su marca.',
            ],
            afterLabel: 'Respuesta con Autoridad UXIO',
            after: [
              'Agradece la pregunta con una sonrisa segura.',
              'Explica con orgullo los materiales y la garantía.',
              'Filtra con amabilidad: "Si buscas lo más barato, no somos para ti".',
              'Eleva la percepción y atrae a clientes con presupuesto.',
            ],
          }
        : {
            beforeLabel: 'Defensive / Insecure Reply',
            before: [
              'Gets defensive over pricing questions.',
              'Offers immediate discounts out of desperation.',
              'Gives long boring lectures that lose attention.',
              'Lowers brand value and authority.',
            ],
            afterLabel: 'UXIO Authoritative Response',
            after: [
              'Welcomes the question with calm confidence.',
              'Explains materials and warranty with pride.',
              'Filters politely: "If you want the cheapest, we are not for you".',
              'Elevates perceived value and attracts high-budget buyers.',
            ],
          },
      instructorNotes: {
        duration: '4:15 - 4:45 min',
        script: isEs
          ? 'La seguridad con la que hablas de tus precios es el 50% de la venta. Nunca te disculpes por cobrar lo que vale tu trabajo.'
          : 'Confidence when discussing prices is half the close. Never apologize for professional rates.',
      },
    },
    {
      id: 's06',
      type: 'challenge',
      tag: isEs ? 'CHECKPOINT DE ACCIÓN' : 'ACTION CHECKPOINT',
      title: isEs ? 'Tus 3 Dudas de Oro' : 'Your 3 Golden FAQs',
      challengeData: isEs
        ? {
            whatToDo: 'Abre tu WhatsApp y selecciona 3 preguntas que te hayan hecho esta semana. Redacta el gancho incómodo para cada una.',
            whatToDeliver: '3 Ganchos listos para tu Matriz de 30 Ideas.',
            whereToSubmit: 'Subir al canal de Discord de la cohorte.',
            criteria: [
              'Al menos 1 duda sobre precio',
              'Al menos 1 duda sobre proceso o tiempos',
              'Llamado con palabra clave hacia WhatsApp',
            ],
          }
        : {
            whatToDo: 'Select 3 questions asked this week in WhatsApp. Draft an opening hook for each.',
            whatToDeliver: '3 Hooks ready for your 30-Day Matrix.',
            whereToSubmit: 'Submit in cohort Discord.',
            criteria: [
              'At least 1 pricing FAQ',
              'At least 1 process / turnaround FAQ',
              'Keyword CTA to WhatsApp',
            ],
          },
      instructorNotes: {
        duration: '4:45 - 5:15 min',
        script: isEs
          ? 'Cierren motivando a los alumnos para la Clase 1.3 donde armaremos la Matriz de 30 Ideas completa.'
          : 'Motivate students for Lesson 1.3 where we build the full 30-Day Content Matrix.',
      },
    },
  ];

  return {
    id: 'm01-02-02-objections-to-hooks',
    slug: 'm01-02-02-objections-to-hooks',
    lessonId: 'm01-02',
    title: isEs ? '1.2.2 Objeciones como Ganchos de Venta' : '1.2.2 Objections as Sales Hooks',
    moduleTag: isEs ? 'SEMANA 1 · CLASE 1.2' : 'WEEK 1 · LESSON 1.2',
    estimatedMinutes: 5,
    slides,
  };
};
