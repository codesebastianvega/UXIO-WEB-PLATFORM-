import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';
import { getWelcomeInstructorNotes } from './m00-01-notes';

export const getPresentationM000102 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';
  const notes = getWelcomeInstructorNotes(isEs);

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'La Regla de Oro: Progreso sobre Perfección' : 'The Golden Rule: Progress Over Perfection',
      subtitle: isEs
        ? 'Microclase 2 · Por qué 1 video publicado vale más que 10 guardados en borradores.'
        : 'Microclass 2 · Why 1 published video beats 10 saved in your drafts folder.',
      highlight: isEs ? 'Semana 0 · Inducción' : 'Week 0 · Induction',
      imageUrl:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&q=80',
      instructorNotes: notes.s01,
    },
    {
      id: 's02',
      type: 'steps',
      tag: 'ROADMAP',
      title: isEs ? 'Las 5 Semanas de Formación' : '5-Week Learning Roadmap',
      subtitle: isEs
        ? 'El camino paso a paso para construir tu motor de contenidos.'
        : 'The step-by-step path to build your content acquisition engine.',
      steps: isEs
        ? [
            { number: 'S1', title: 'Estrategia', desc: 'Encontrar el valor que ya existe en tu marca y crear 30 ideas.' },
            { number: 'S2', title: 'Grabación', desc: 'Dominar la cámara del celular, planos B-roll y hablar sin miedo.' },
            { number: 'S3', title: 'Creación', desc: 'Estructurar hooks en 3 segundos y formatos que retienen.' },
            { number: 'S4', title: 'Edición & IA', desc: 'Edición rápida de 15 minutos en CapCut y prompts de apoyo.' },
            { number: 'S5', title: 'Ventas', desc: 'Convertir visualizaciones en clientes reales por WhatsApp.' },
          ]
        : [
            { number: 'W1', title: 'Strategy', desc: 'Uncover brand assets and build a 30-day content matrix.' },
            { number: 'W2', title: 'Filming', desc: 'Master smartphone optics, B-roll shots, and lens confidence.' },
            { number: 'W3', title: 'Creation', desc: 'Structure 3-second hooks and high-retention vertical formats.' },
            { number: 'W4', title: 'Editing & AI', desc: '15-minute fast editing in CapCut and AI multiplication.' },
            { number: 'W5', title: 'Sales', desc: 'Turn views into qualified WhatsApp conversations and revenue.' },
          ],
      instructorNotes: notes.s04,
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'ACCIÓN INMEDIATA' : 'IMMEDIATE ACTION',
      title: isEs ? 'La Regla del 80/20 en Creación' : 'The 80/20 Creation Rule',
      subtitle: isEs
        ? 'El perfeccionismo es la forma más cara de procrastinar en redes.'
        : 'Perfectionism is the most expensive way to procrastinate on social media.',
      points: isEs
        ? [
            {
              label: '1. El 80% de Calidad es Suficiente',
              text: 'Tu cliente busca soluciones a sus problemas, no una película de Hollywood.',
              tag: 'Claridad',
              icon: 'CheckCircle2',
            },
            {
              label: '2. Publicar da Datos Reales',
              text: 'Solo el mercado te dirá qué temas conectan y qué videos generan preguntas de compra.',
              tag: 'Feedback',
              icon: 'BarChart3',
            },
            {
              label: '3. La Maestría Requiere Volumen',
              text: 'Tus primeros 5 videos te darán la soltura que ninguna teoría te puede enseñar.',
              tag: 'Práctica',
              icon: 'Zap',
            },
          ]
        : [
            {
              label: '1. 80% Quality is Plenty',
              text: 'Your clients want answers to their pain points, not a Hollywood blockbuster.',
              tag: 'Clarity',
              icon: 'CheckCircle2',
            },
            {
              label: '2. Publishing Delivers Data',
              text: 'Only real audience reactions reveal which hooks convert into sales questions.',
              tag: 'Feedback',
              icon: 'BarChart3',
            },
            {
              label: '3. Mastery Requires Volume',
              text: 'Your first 5 clips teach you more confidence than reading 10 theory books.',
              tag: 'Practice',
              icon: 'Zap',
            },
          ],
      instructorNotes: notes.s05,
    },
    {
      id: 's04',
      type: 'glossary',
      tag: isEs ? 'VOCABULARIO CLAVE' : 'KEY GLOSSARY',
      title: isEs ? 'Términos Clave del Programa' : 'Core Program Terms',
      subtitle: isEs
        ? 'Conceptos que escucharás a lo largo de las próximas semanas.'
        : 'Concepts you will hear throughout the upcoming weeks.',
      glossaryTerms: isEs
        ? [
            {
              term: 'B-Roll',
              definition: 'Tomas secundarias de apoyo (producto en uso, detalles o procesos) que dinamizan el ritmo.',
              example: 'Mostrar tus manos empacando un producto mientras hablas de tu servicio.',
              category: 'Grabación',
            },
            {
              term: 'Hook (Gancho)',
              definition: 'Los primeros 3 segundos de un video diseñados para frenar el scroll y captar la atención.',
              example: '"Si vendes servicios, este error te está costando 10 clientes al mes..."',
              category: 'Guion',
            },
            {
              term: 'Call to Action (CTA)',
              definition: 'Llamado explícito al espectador para dar el siguiente paso comercial.',
              example: '"Escribe la palabra GUIA en los comentarios para enviártela por DM."',
              category: 'Conversión',
            },
            {
              term: 'Lead Comercial',
              definition: 'Persona interesada que hace una pregunta concreta sobre tu precio o disponibilidad.',
              example: 'Un mensaje directo en WhatsApp: "Hola, vi tu video, ¿cuánto cuesta tu asesoría?"',
              category: 'Negocio',
            },
          ]
        : [
            {
              term: 'B-Roll',
              definition: 'Secondary cutaway footage (product in action, details, process) that adds rhythm.',
              example: 'Showing hands packaging an order while voiceover explains shipping.',
              category: 'Filming',
            },
            {
              term: '3-Second Hook',
              definition: 'The first 3 seconds crafted to stop vertical scrolling and capture attention.',
              example: '"If you sell services, this mistake costs you 10 clients monthly..."',
              category: 'Scripting',
            },
            {
              term: 'Call to Action (CTA)',
              definition: 'Explicit direction prompting the viewer to take the next business action.',
              example: '"Comment GUIDE below and I will send it to your DMs."',
              category: 'Conversion',
            },
            {
              term: 'Commercial Lead',
              definition: 'A prospect asking specific questions about pricing, booking, or availability.',
              example: 'A WhatsApp message asking: "Hello, saw your video, how do we book?"',
              category: 'Business',
            },
          ],
      instructorNotes: notes.s06,
    },
    {
      id: 's05',
      type: 'challenge',
      tag: isEs ? 'ENTREGABLE' : 'MILESTONE',
      title: isEs ? 'Reto 0: Ficha de Diagnóstico de Marca' : 'Challenge 0: Brand Diagnosis Sheet',
      subtitle: isEs
        ? 'Define tu objetivo comercial antes de empezar a grabar en la Semana 1.'
        : 'Declare your revenue target before filming begins in Week 1.',
      challengeData: {
        whatToDo: isEs
          ? 'Descarga la Ficha de Diagnóstico y responde las 3 preguntas sobre tu cliente ideal y meta de ventas.'
          : 'Download the Diagnosis Worksheet and answer the 3 questions on your customer and sales target.',
        whatToDeliver: isEs
          ? 'Enlace a tu documento público o texto pegado en el formulario de entregas del aula.'
          : 'Public worksheet link or text pasted into the classroom submission box.',
        whereToSubmit: isEs ? 'Aula Virtual UXIO' : 'UXIO Classroom',
        criteria: isEs
          ? [
              'Cliente ideal claramente definido.',
              'Meta comercial cuantificable.',
              'Identificación de 3 dolores del cliente.',
            ]
          : [
              'Clear ideal customer profile.',
              'Quantifiable commercial target.',
              'Identification of 3 customer pain points.',
            ],
      },
      instructorNotes: notes.s07,
    },
  ];

  return {
    id: 'pres-m00-01-02',
    slug: 'm00-01-02-golden-rule',
    lessonId: 'm00-01',
    title: isEs ? 'Microclase 2: La Regla de Oro' : 'Microclass 2: The Golden Rule',
    moduleTag: isEs ? 'SEMANA 0 · MICROCLASE 2' : 'WEEK 0 · MICROCLASS 2',
    estimatedMinutes: 5,
    slides,
  };
};
