import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM050402 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's1',
      type: 'title',
      tag: isEs ? 'MICROCLASE 5.4.2' : 'MICROCLASS 5.4.2',
      title: isEs ? 'El Sistema Continuo: Producir 1 Mes en 4 Horas' : 'The Sustainable Engine: Batch 1 Month in 4 Hours',
      subtitle: isEs
        ? 'Cómo organizar 1 sola sesión de grabación al mes para tener 12 videos comerciales sin interrumpir tu operación diaria.'
        : 'How to structure a single monthly shoot session to bank 12 commercial videos without derailing daily operations.',
      highlight: isEs ? 'Sistema de Batching Mensual ➔' : 'Monthly Batching System ➔',
      bgColor: '#10B981',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? 'En esta última microclase aprenderán a proteger su energía y tiempo construyendo un sistema de producción por lotes.'
          : 'In this final microclass you will master monthly batch production so you never burn out creating content.',
      },
    },
    {
      id: 's2',
      type: 'steps',
      tag: isEs ? 'EL PROTOCOLO DE 4 HORAS' : 'THE 4-HOUR PROTOCOL',
      title: isEs ? 'El Cronograma del "Batching Sunday"' : 'The "Batching Sunday" Schedule',
      subtitle: isEs
        ? 'Divide tu sesión mensual en 4 bloques cronometrados de 60 minutos.'
        : 'Organize your monthly session into 4 disciplined 60-minute blocks.',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Hora 1: Selección de Guiones',
              desc: 'Escoge 12 ganchos de tu matriz de contenido y déjalos en notas grandes en tu iPad o teleprompter.',
              tag: 'Planificación',
            },
            {
              number: '02',
              title: 'Horas 2 y 3: Grabación en Bloque',
              desc: 'Monta luz y trípode una sola vez. Haz 3 cambios de camisa/chaqueta y graba las 12 tomas habladas.',
              tag: 'Captura',
            },
            {
              number: '03',
              title: 'Hora 4: B-Roll & Poda Inicial',
              desc: 'Captura 20 clips de apoyo de tu producto o espacio. Importa a CapCut y corta silencios rápidamente.',
              tag: 'Montaje',
            },
          ]
        : [
            {
              number: '01',
              title: 'Hour 1: Script Selection',
              desc: 'Pick 12 validated hooks from your matrix. Format into readable teleprompter cues.',
              tag: 'Planning',
            },
            {
              number: '02',
              title: 'Hours 2 & 3: Batch Filming',
              desc: 'Set up lights and tripod once. Switch outfits 3 times and record all 12 spoken takes.',
              tag: 'Production',
            },
            {
              number: '03',
              title: 'Hour 4: B-Roll & Assembly',
              desc: 'Film 20 tactile cutaway clips. Import into CapCut and perform initial dead-air trimming.',
              tag: 'Post-Production',
            },
          ],
      instructorNotes: {
        duration: '1:00 - 3:00 min',
        script: isEs
          ? 'Expliquen que el 80% de la pereza de grabar es montar el trípode y la luz; al hacerlo 1 sola vez al mes, se elimina la resistencia mental.'
          : 'Explain that 80% of resistance is setting up gear; doing it once a month completely eliminates creative friction.',
      },
    },
    {
      id: 's3',
      type: 'concept',
      tag: isEs ? 'DELEGACIÓN Y ESCALA' : 'DELEGATION & SCALE',
      title: isEs ? 'Cómo Delegar la Edición sin Perder Calidad' : 'How to Delegate Editing Without Sacrificing Craft',
      subtitle: isEs
        ? 'Una vez dominas el proceso, puedes entregar el montaje a un asistente o editor júnior.'
        : 'Once you master the workflow, you can hand off the timeline to an assistant editor.',
      points: isEs
        ? [
            {
              label: 'Plantilla de Proyecto Compartida',
              text: 'Guarda en CapCut o Google Drive tu paleta de colores, tipografías y efectos de sonido aprobados.',
              tag: 'Brand Kit',
            },
            {
              label: 'Entrega de Carpetas Organizadas',
              text: 'Carpeta A: Spoken Word podado ➔ Carpeta B: Clips de B-roll ➔ Carpeta C: Guion de texto.',
              tag: 'Asset Hand-off',
            },
            {
              label: 'Revisión en 5 Minutos',
              text: 'Tu única tarea como dueño del negocio es grabar las tomas habladas y aprobar el video final.',
              tag: 'Dirección',
            },
          ]
        : [
            {
              label: 'Shared Project Templates',
              text: 'Store approved brand color codes, fonts, and sound effects library in shared cloud folder.',
              tag: 'Brand Kit',
            },
            {
              label: 'Clean Asset Organization',
              text: 'Folder A: Trimmed Spoken Takes ➔ Folder B: Cutaway B-roll ➔ Folder C: Script & Text Notes.',
              tag: 'Asset Hand-off',
            },
            {
              label: '5-Minute Review Cycle',
              text: 'Your only role as founder is to speak on camera and provide final thumbs-up on finished cuts.',
              tag: 'Executive Direction',
            },
          ],
      instructorNotes: {
        duration: '3:00 - 4:00 min',
        script: isEs
          ? 'Muestren cómo este sistema permite a un dueño de negocio convertirse en la cara visible de su marca sin descuidar sus operaciones.'
          : 'Show how this framework lets founders remain the magnetic face of the brand without neglecting operations.',
      },
    },
    {
      id: 's4',
      type: 'closing',
      tag: isEs ? 'GRADUACIÓN OFICIAL' : 'OFFICIAL GRADUATION',
      title: isEs ? '¡Felicitaciones! Has Completado UXIO Creator Lab' : 'Congratulations! You Have Completed Creator Lab',
      subtitle: isEs
        ? 'Sube tu proyecto final al aula virtual para recibir tu constancia oficial y comenzar a facturar con tu contenido.'
        : 'Submit your capstone operating system to unlock your official certificate and start converting attention into revenue.',
      highlight: isEs ? 'Entrega tu Proyecto Final ➔' : 'Submit Final Capstone ➔',
      instructorNotes: {
        duration: '4:00 - 5:00 min',
        script: isEs
          ? 'Felicítenlos por su compromiso y anímenlos a subir su proyecto final hoy mismo.'
          : 'Congratulate their commitment and encourage prompt capstone submission.',
      },
    },
  ];

  return {
    id: 'm05-04-02-four-hour-batching-system',
    slug: 'm05-04-02-four-hour-batching-system',
    lessonId: 'm05-04',
    title: isEs ? 'El Sistema Continuo: Producir 1 Mes en 4 Horas' : 'The Sustainable Engine: Batch 1 Month in 4 Hours',
    moduleTag: isEs ? 'SEMANA 5 · LECCIÓN 5.4' : 'WEEK 5 · LESSON 5.4',
    estimatedMinutes: 5,
    slides,
  };
};
