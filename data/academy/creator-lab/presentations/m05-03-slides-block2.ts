import { SlideData } from './types';

export const getLiveLab5Block2 = (isEs: boolean): SlideData[] => [
  {
    id: 's5',
    type: 'section',
    tag: isEs ? 'BLOQUE 2: TEARDOWN FORENSE' : 'BLOCK 2: FORENSIC TEARDOWN',
    title: isEs ? 'Conversaciones que Matan Ventas vs. Conversaciones que Facturan' : 'Chat Scripts That Kill Sales vs. Conversations That Convert',
    subtitle: isEs
      ? 'Análisis en pantalla de capturas reales de WhatsApp para aprender qué decir y qué callar.'
      : 'On-screen analysis of real WhatsApp screenshots to see what closes and what alienates prospects.',
    highlight: isEs ? 'Auditoría en Pantalla Compartida ➔' : 'Shared Screen Audit ➔',
    bgColor: '#FF7F07',
    instructorNotes: {
      duration: '20:00 - 25:00 min',
      script: isEs
        ? 'Vamos a proyectar capturas reales de emprendedores para ver los errores comunes que todos cometemos sin darnos cuenta.'
        : 'Let us project real chat captures from business owners to dissect common unseen mistakes.',
    },
  },
  {
    id: 's6',
    type: 'comparison',
    tag: isEs ? 'CASO REAL AUDITADO' : 'AUDITED REAL CASE',
    title: isEs ? 'El Monólogo Copypaste vs. El Diálogo Guiado' : 'The Copy-Paste Text Wall vs. Guided Dialogue',
    comparison: isEs
      ? {
          beforeLabel: 'ERROR: EL TEXT WALL ROBÓTICO',
          before: [
            'Cliente: "¿Cuánto cuesta el servicio?"',
            'Vendedor: [Pega 8 párrafos de texto y 4 fotos]',
            'Sin saludar por el nombre',
            'Resultado: El cliente lo deja en visto y nunca más responde',
          ],
          afterLabel: 'MÉTODO UXIO: DIÁLOGO DE CONEXIÓN',
          after: [
            'Cliente: "¿Cuánto cuesta el servicio?"',
            'Vendedor: "¡Hola Camila! Con gusto te cuento. Para darte el valor exacto: ¿tu negocio es físico o vendes online?"',
            'Resultado: El cliente responde en 2 minutos y se abre el diálogo comercial',
          ],
        }
      : {
          beforeLabel: 'MISTAKE: THE ROBOTIC TEXT DUMP',
          before: [
            'Buyer: "How much is this service?"',
            'Seller: [Pastes 8 massive paragraphs and 4 PDFs]',
            'Zero personal name greeting',
            'Result: Prospect leaves on read and vanishes forever',
          ],
          afterLabel: 'UXIO PROTOCOL: GUIDED DIALOGUE',
          after: [
            'Buyer: "How much is this service?"',
            'Seller: "Hey Camila! Happy to share. To give you the exact tier: is your business local or digital?"',
            'Result: Buyer replies in 2 minutes, dialogue unlocks naturally',
          ],
        },
    instructorNotes: {
      duration: '25:00 - 35:00 min',
      script: isEs
        ? 'Enfatizar que quien hace las preguntas tiene el control de la conversación y no quien escribe párrafos gigantes.'
        : 'Emphasize that the person asking questions commands the conversation, not the one typing endless paragraphs.',
    },
  },
  {
    id: 's7',
    type: 'concept',
    tag: isEs ? 'EL PODER DEL AUDIO' : 'THE POWER OF VOICE',
    title: isEs ? 'La Regla de Oro del Audio de 20 Segundos' : 'The Golden Rule of the 20-Second Voice Note',
    subtitle: isEs
      ? 'Por qué un audio corto y cálido destruye las objeciones de precio más rápido que cualquier texto.'
      : 'Why a concise, warm voice note overcomes pricing objections faster than any text message.',
    points: isEs
      ? [
          {
            label: 'Humaniza la Marca',
            text: 'El cliente escucha una voz real, sonriente y segura detrás de la pantalla, disolviendo el miedo a la estafa.',
            tag: 'Confianza',
          },
          {
            label: 'Máximo 20 a 25 Segundos',
            text: 'Audios de más de 1 minuto causan pereza y no se escuchan. Menos de 25s se reproduce de inmediato.',
            tag: 'Duración',
          },
          {
            label: 'Estructura en 3 Frases',
            text: '1. Nombre y empatía ➔ 2. La solución específica a su dolor ➔ 3. La pregunta de cierre.',
            tag: 'Guion',
          },
        ]
      : [
          {
            label: 'Humanizes the Brand',
            text: 'The buyer hears a confident, warm human voice behind the screen, wiping away fear of internet fraud.',
            tag: 'Trust',
          },
          {
            label: '20 to 25 Seconds Max',
            text: 'Voice notes over 1 minute feel like a chore and get ignored. 25s gets listened to instantly.',
            tag: 'Pacing',
          },
          {
            label: '3-Sentence Framework',
            text: '1. Name & rapport ➔ 2. Tailored solution to their struggle ➔ 3. Closing question.',
            tag: 'Script',
          },
        ],
    instructorNotes: {
      duration: '35:00 - 42:00 min',
      script: isEs
        ? 'Hagan una demostración en vivo grabando un audio de 20 segundos para que la cohorte escuche el tono y ritmo.'
        : 'Record a live 20-second sample voice note on speaker so students hear the friendly, confident pacing.',
    },
  },
  {
    id: 's8',
    type: 'concept',
    tag: isEs ? 'REACTIVACIÓN SIN ROQUE' : 'SEAMLESS FOLLOW-UP',
    title: isEs ? 'Cómo Revivir Clientes que Dejaron en Visto' : 'How to Re-engage Ghosted Leads Without Desperation',
    subtitle: isEs
      ? 'El 60% de las ventas ocurren en el seguimiento a las 24 o 48 horas.'
      : '60% of social sales close during follow-ups 24 to 48 hours later.',
    points: isEs
      ? [
          {
            label: 'El Mensaje de Ayuda Genuina (24h)',
            text: '"¡Hola [Nombre]! Te escribo para saber si pudiste revisar el link de pago o si te quedó alguna duda técnica".',
            tag: 'Paso 1',
          },
          {
            label: 'El Recurso de Valor Inesperado (48h)',
            text: '"¡Hola! Justo grabé este mini video sobre [su dolor] y me acordé de lo que me contaste. Te lo comparto por aquí".',
            tag: 'Paso 2',
          },
          {
            label: 'El Cierre de Retiro Amable (72h)',
            text: '"Veo que estás ocupado. Dejo tu cupo liberado por si en el futuro decides arrancar. ¡Un abrazo grande!".',
            tag: 'Paso 3',
          },
        ]
      : [
          {
            label: 'Helpful Follow-Up (24h)',
            text: '"Hey [Name]! Checking in to see if the checkout link worked or if any technical questions came up".',
            tag: 'Step 1',
          },
          {
            label: 'Unexpected Value Gift (48h)',
            text: '"Hey! Just shot this quick clip on [their problem] and immediately thought of you. Hope it helps!".',
            tag: 'Step 2',
          },
          {
            label: 'Graceful Pullaway (72h)',
            text: '"Seems like you have your hands full right now. Releasing your slot so you can jump in later. All the best!".',
            tag: 'Step 3',
          },
        ],
    instructorNotes: {
      duration: '42:00 - 45:00 min',
      script: isEs
        ? 'Expliquen la psicología del cierre de retiro: cuando le quitas la oferta al cliente sin enojo, muchos reaccionan y pagan de inmediato.'
        : 'Explain the takeaway close: removing the offer gently triggers loss aversion and drives same-day payment.',
    },
  },
];
