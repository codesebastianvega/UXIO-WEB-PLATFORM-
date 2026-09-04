import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM020401 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'La Técnica Frase por Frase' : 'Sentence-by-Sentence Shooting Technique',
      subtitle: isEs
        ? 'Microclase 2.4.1 · Cómo hablar a cámara con naturalidad sin memorizar discursos largos y sin miedo a trabarte.'
        : 'Microclass 2.4.1 · Speak on camera naturally without memorizing long speeches or camera anxiety.',
      highlight: isEs ? 'Semana 2 · Cero Memorizar' : 'Week 2 · Zero Memorization',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 2.4.1' : '// KEY CONCEPTS 2.4.1',
        badge: isEs ? 'MÉTODO FRASE' : 'SENTENCE METHOD',
        items: [
          { title: isEs ? 'Tomas de 1 Frase' : '1-Sentence Takes', desc: isEs ? 'Lee, mira al lente, di la frase y corta' : 'Read line, look at lens, speak, cut', color: '#FE385B' },
          { title: isEs ? 'Eliminación del Teleprompter' : 'Kill Teleprompter', desc: isEs ? 'Evita los ojos de robot leyendo texto' : 'Prevent robot reading eyes', color: '#FF7F07' },
          { title: isEs ? 'Cortes con Zoom en Edición' : 'Jump Cuts in Edit', desc: isEs ? 'Los cortes dinamizan el ritmo del video' : 'Jump cuts accelerate video pace', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 2.4.1! Hoy desarmamos el mito de que necesitas memorizar un guion de 1 minuto para hablar a cámara.'
          : 'Welcome to Microclass 2.4.1! Today we eliminate the myth that you need to memorize a 1-minute speech.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'Los mejores creadores del mundo nunca graban 60 segundos seguidos: graban 8 tomas de una sola frase.'
        : 'The world’s best creators never record 60 continuous seconds: they record 8 single-sentence takes.',
      subtitle: isEs
        ? 'Intentar decir todo de corrido genera ansiedad, bloqueos y miradas de memoria. Grabar frase por frase te da energía fresca en cada línea.'
        : 'Attempting full-length takes breeds anxiety and monotone memory stares. Sentence-by-sentence gives fresh energy on every line.',
      highlight: isEs ? '1 Frase = 1 Toma Perfecta' : '1 Sentence = 1 Perfect Take',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Muestren a la cámara cómo hacer una pausa, leer la siguiente línea y decirla con energía.'
          : 'Demonstrate the glance-down, look-at-lens, speak-one-line rhythm.',
      },
    },
    {
      id: 's03',
      type: 'steps',
      tag: isEs ? 'EL PROTOCOLO EN 4 TIEMPOS' : 'THE 4-STEP PROTOCOL',
      title: isEs ? 'El Ritmo de Grabación "Mira, Conecta, Habla y Corta"' : 'The "Read, Connect, Speak, Cut" Protocol',
      steps: isEs
        ? [
            {
              number: '01',
              title: '1. Lee la Frase en tu Libreta',
              desc: 'Mira tu guion en la mesa o notas del teléfono y memoriza solo una sola frase corta.',
            },
            {
              number: '02',
              title: '2. Clava los Ojos en el Lente (1s)',
              desc: 'Levanta la mirada, sonríe ligeramente y mira el orificio del lente (no tu cara en la pantalla).',
            },
            {
              number: '03',
              title: '3. Di la Frase con Energía y Pausa',
              desc: 'Di la frase en voz alta proyectando como si le hablaras a un amigo al otro lado de la mesa.',
            },
            {
              number: '04',
              title: '4. Mantén la Mirada 1s y Corta',
              desc: 'No mires abajo de inmediato: sostén la mirada 1 segundo para dejar aire limpio de corte.',
            },
          ]
        : [
            { number: '01', title: '1. Glance at Notes', desc: 'Read a single short sentence from your script.' },
            { number: '02', title: '2. Lock Eyes on Lens (1s)', desc: 'Look at the camera hole (not your preview face).' },
            { number: '03', title: '3. Speak with Warm Energy', desc: 'Deliver the line with natural projection.' },
            { number: '04', title: '4. Hold 1s & Cut', desc: 'Hold eye contact 1s before cutting to leave editing trim room.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Expliquen el error de mirar la pantalla en lugar de mirar el orificio del lente.'
          : 'Stress the rule of looking at the camera lens hole rather than looking at own screen face.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'ANÁLISIS DE RENDIMIENTO' : 'PERFORMANCE CONTRAST',
      title: isEs ? 'Grabación de Corrido vs. Método Frase por Frase' : 'Single Take vs. Sentence-by-Sentence',
      comparison: isEs
        ? {
            beforeLabel: '❌ Grabación Continua (60s de Corrido)',
            before: [
              'Ojos en blanco buscando la memoria en el techo.',
              'Trabas en el segundo 45 que obligan a repetir todo.',
              'Tono monótono y cansado a medida que avanza el video.',
              'Frustración y 2 horas perdidas para un solo Reel.',
            ],
            afterLabel: '✓ Método Frase por Frase UXIO',
            after: [
              'Contacto visual magnético 100% del tiempo.',
              'Si te equivocas, solo repites los últimos 5 segundos.',
              'Máxima energía y sonrisa en cada oración.',
              'Video completo grabado en menos de 10 minutos.',
            ],
          }
        : {
            beforeLabel: '❌ Continuous Single Take (60s)',
            before: [
              'Eyes drifting to ceiling trying to recall lines.',
              'Stumbling at second 45 forcing full retakes.',
              'Monotone energy dropping deeper into video.',
              '2 hours wasted filming a single 60s Reel.',
            ],
            afterLabel: '✓ UXIO Sentence-by-Sentence',
            after: [
              '100% magnetic direct eye contact.',
              'Mistakes only require repeating the last 5s sentence.',
              'Peak energy and fresh smiles on every take.',
              'Full video shot in under 10 minutes.',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:30 min',
        script: isEs
          ? 'Este método desbloquea a cualquier persona tímida en su primer intento.'
          : 'This framework unlocks even the most camera-shy beginner on take one.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'MISIÓN 2.4.1' : 'MISSION 2.4.1',
      title: isEs ? 'Prueba del Método en 3 Frases' : '3-Sentence Practice Drill',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Frase 1 (Gancho)',
              desc: '"El error que te hace gastar dinero de más en tu negocio:" (Corta)',
            },
            {
              number: '02',
              title: 'Frase 2 (Solución)',
              desc: '"En lugar de comprar opciones baratas, revisa esta costura interna." (Corta)',
            },
            {
              number: '03',
              title: 'Frase 3 (CTA)',
              desc: '"Comenta GUIA para enviarte el catálogo a WhatsApp." (Corta)',
            },
          ]
        : [
            { number: '01', title: 'Line 1 (Hook)', desc: '"The #1 mistake wasting your money in business:" (Cut)' },
            { number: '02', title: 'Line 2 (Solution)', desc: '"Instead of cheap options, inspect this internal stitching." (Cut)' },
            { number: '03', title: 'Line 3 (CTA)', desc: '"Comment GUIDE for direct WhatsApp catalog." (Cut)' },
          ],
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Tienen 3 clips independientes que se unirán en CapCut en la Semana 3.'
          : 'Now students have 3 clean clips ready to snap together in CapCut in Week 3.',
      },
    },
  ];

  return {
    id: 'm02-04-01-sentence-by-sentence',
    slug: 'm02-04-01-sentence-by-sentence',
    lessonId: 'm02-04',
    title: isEs
      ? 'La Técnica Frase por Frase'
      : 'Sentence-by-Sentence Shooting Technique',
    moduleTag: isEs ? 'SEMANA 2 · MICROCLASE 2.4.1' : 'WEEK 2 · MICROCLASS 2.4.1',
    estimatedMinutes: 5,
    slides,
  };
};
