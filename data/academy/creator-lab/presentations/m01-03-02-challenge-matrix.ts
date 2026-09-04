import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM010302 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Reto 1: Tu Matriz de 30 Ideas' : 'Challenge 1: Your 30-Idea Matrix',
      subtitle: isEs
        ? 'Microclase 1.3.2 · Estructura tus 30 ganchos de video en la plantilla oficial y completa tu entrega dominical.'
        : 'Microclass 1.3.2 · Structure your 30 video hooks in the official worksheet and submit by Sunday.',
      highlight: isEs ? 'Semana 1 · Entregable Oficial' : 'Week 1 · Official Deliverable',
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// ENTREGABLE OFICIAL' : '// OFFICIAL DELIVERABLE',
        badge: isEs ? 'RETO 1' : 'CHALLENGE 1',
        items: [
          { title: isEs ? 'Matriz de 30 Ideas' : '30-Idea Matrix', desc: isEs ? 'Notion o Plantilla PDF A4' : 'Notion or PDF A4 worksheet', color: '#FE385B' },
          { title: isEs ? 'Distribución 5 Pilares' : '5-Pillar Distribution', desc: isEs ? '40% Edu, 20% Proc, 20% Prueba, 10% Mito, 10% Venta' : 'Balanced pillar ratio', color: '#FF7F07' },
          { title: isEs ? 'Revisión & Feedback' : 'Teacher Review', desc: isEs ? 'Calificación sobre 5.0 ★ en vivo' : 'Grading on 5.0 ★ scale', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 1.3.2! Hoy explicamos paso a paso el Reto 1: cómo llenar la matriz de 30 ideas y cómo subirla al aula virtual.'
          : 'Welcome to Microclass 1.3.2! Today we walk through Challenge 1: filling the 30-day matrix and submitting it to the portal.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'El guion es el 70% del éxito de un video; la cámara es solo el 30% restante.'
        : 'The script is 70% of a video success; camera setup is only the remaining 30%.',
      subtitle: isEs
        ? 'Cuando tienes claro el dolor del cliente, la frase de apertura y el llamado a la acción antes de encender la cámara, grabar toma solo 15 minutos.'
        : 'When you have the pain point, opening hook, and CTA mapped before recording, filming takes only 15 minutes.',
      highlight: isEs ? 'Estructura Primero · Grabación Rápida' : 'Structure First · Rapid Filming',
      bgColor: '#10B981',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Recuerden a sus alumnos que no se improvisa frente a la cámara; tener la matriz lista elimina la ansiedad de grabar.'
          : 'Remind students that filming without a script causes stuttering and anxiety; the matrix provides crystal clarity.',
      },
    },
    {
      id: 's03',
      type: 'steps',
      tag: isEs ? 'LAS 5 COLUMNAS DE LA MATRIZ' : 'THE 5 MATRIX COLUMNS',
      title: isEs ? 'Anatomía de la Fila de Contenido' : 'Anatomy of a Content Row',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Pilar Asignado',
              desc: 'Educar (40%), Conectar (20%), Demostrar (20%), Desmentir (10%) o Venta (10%).',
            },
            {
              number: '02',
              title: 'Gancho (Hook 0-3s)',
              desc: 'La primera frase en primera persona que enuncia el problema exacto del comprador.',
            },
            {
              number: '03',
              title: 'Duda Resuelta',
              desc: 'La pregunta específica de WhatsApp o fricción que el video responde en 30 segundos.',
            },
            {
              number: '04',
              title: 'Toma B-Roll Sugerida',
              desc: 'Encuadre visual: manos trabajando, captura de pantalla, producto en detalle o plano medio.',
            },
            {
              number: '05',
              title: 'CTA hacia WhatsApp',
              desc: 'La palabra clave concreta que invitas a comentar para iniciar la conversación 1 a 1.',
            },
          ]
        : [
            { number: '01', title: 'Pillar', desc: 'Educate (40%), Connect (20%), Prove (20%), Debunk (10%) or Sell (10%).' },
            { number: '02', title: 'Hook (0-3s)', desc: 'First-person opening sentence targeting the exact buyer friction.' },
            { number: '03', title: 'Problem Solved', desc: 'Specific customer inquiry answered in 30 seconds.' },
            { number: '04', title: 'B-Roll Shot', desc: 'Visual framing: hands working, screen capture, detail or medium.' },
            { number: '05', title: 'WhatsApp CTA', desc: 'Keyword trigger inviting viewers to private chat.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:15 min',
        script: isEs
          ? 'Revisen columna por columna. No necesitan escribir párrafos largos; cada casilla debe ser una frase directa y accionable.'
          : 'Review column by column. Keep each field short, punchy and actionable.',
      },
    },
    {
      id: 's04',
      type: 'concept',
      tag: isEs ? '3 ERRORES COMUNES' : '3 COMMON MISTAKES',
      title: isEs ? 'Qué Evitar al Llenar tu Matriz' : 'What to Avoid When Drafting Your Matrix',
      subtitle: isEs
        ? 'Los 3 fallos que restan puntos en la revisión docente.'
        : 'The 3 mistakes that lower scores during instructor review.',
      points: isEs
        ? [
            {
              label: '1. Ganchos Genéricos',
              text: 'Evita frases vagas como "consejos de negocios"; usa "el error que te hace perder $200 USD al mes".',
              detailData: {
                tag: 'ERROR 01 // VAGUEDAD',
                title: 'Especificidad Extrema',
                description: 'Los ganchos específicos generan 5 veces más clics que las frases generales.',
                imageCaption: 'Gancho Específico · Impacto Directo',
                highlights: ['Cita números concretos', 'Nombra el dolor exacto'],
                actionTip: 'Reemplaza "mejora tus ventas" por "consigue 3 clientes este fin de semana".',
              },
            },
            {
              label: '2. Desbalance de Pilares',
              text: 'No pongas 20 videos de venta directa; mantén la proporción de 80% valor y 20% oferta.',
              detailData: {
                tag: 'ERROR 02 // SATURACIÓN',
                title: 'Respeta la Proporción 80/20',
                description: 'La confianza se construye con educación; la venta se cosecha naturalmente.',
                imageCaption: 'Dieta Balanceada · Fidelización',
                highlights: ['12 videos de Educar', '6 de Conectar', '6 de Demostrar', '3 de Desmentir', '3 de Vender'],
                actionTip: 'Cuenta cuántos videos tienes de cada pilar antes de entregar.',
              },
            },
            {
              label: '3. Falta de CTA a WhatsApp',
              text: 'Si el video termina en el aire sin decir qué hacer, el cliente se va a otro canal; da una orden clara.',
              detailData: {
                tag: 'ERROR 03 // SIN CIERRE',
                title: 'El Puente Comercial Ineludible',
                description: 'Todo video debe terminar con una invitación clara a comentar una palabra o ir al link del perfil.',
                imageCaption: 'Llamado Claro · Canal 1 a 1',
                highlights: ['Palabras clave de 1 palabra', 'Llamados directos y seguros'],
                actionTip: 'Usa palabras cortas y fáciles de escribir en celular.',
              },
            },
          ]
        : [
            { label: '1. Vague Hooks', text: 'Avoid general statements; use concrete numbers and pains.' },
            { label: '2. Imbalanced Pillars', text: 'Do not put 20 sales videos; maintain the 80/20 value diet.' },
            { label: '3. Missing CTA', text: 'Every video must have a clear keyword directing to WhatsApp.' },
          ],
      instructorNotes: {
        duration: '3:15 - 4:00 min',
        script: isEs
          ? 'Estos 3 errores son los más frecuentes en la primera entrega. Si los corrigen antes del domingo, su calificación será sobresaliente.'
          : 'These 3 mistakes are common on first submissions. Correcting them guarantees a top score.',
      },
    },
    {
      id: 's05',
      type: 'comparison',
      tag: isEs ? 'FORMATOS DE ENTREGA' : 'SUBMISSION FORMATS',
      title: isEs ? 'Plantilla Notion vs. Documento PDF A4' : 'Notion Workspace vs. A4 PDF',
      comparison: isEs
        ? {
            beforeLabel: 'Opción 1: Plantilla en Notion',
            before: [
              'Duplicable en 1 clic en tu cuenta de Notion.',
              'Permite vista de tabla, tablero Kanban y calendario.',
              'Ideal para equipos y creadores que usan Notion diario.',
              'Pega el enlace público en la sección de entrega.',
            ],
            afterLabel: 'Opción 2: PDF Interactivo / Imprimible',
            after: [
              'Descargable directamente desde el modal del aula.',
              'Formato A4 vectorial de alta fidelidad para imprimir o rellenar.',
              'Ideal para quienes prefieren trabajar en papel o iPad.',
              'Sube el archivo completado en el formulario del aula.',
            ],
          }
        : {
            beforeLabel: 'Option 1: Notion Workspace',
            before: [
              'Duplicate to your Notion account in 1 click.',
              'Table, Kanban board, and calendar views.',
              'Ideal for teams managing content digitally.',
              'Submit your public Notion share link.',
            ],
            afterLabel: 'Option 2: Interactive A4 PDF',
            after: [
              'Download directly from the classroom modal.',
              'High-fidelity vector A4 for printing or tablet notes.',
              'Ideal for analog writing and desk reference.',
              'Upload completed file in the classroom submission box.',
            ],
          },
      instructorNotes: {
        duration: '4:00 - 4:45 min',
        script: isEs
          ? 'Ambas opciones son 100% válidas. Elige la que mejor se adapte a tu forma de trabajar.'
          : 'Both formats are equally valid. Choose the workflow that best suits your daily routine.',
      },
    },
    {
      id: 's06',
      type: 'challenge',
      tag: isEs ? 'RÚBRICA DE EVALUACIÓN' : 'EVALUATION RUBRIC',
      title: isEs ? 'Criterios de Calificación del Reto 1' : 'Challenge 1 Grading Criteria',
      challengeData: isEs
        ? {
            whatToDo: 'Descarga la plantilla en Notion o PDF interactivo, completa las 30 filas y súbela al aula virtual antes del domingo a las 11:59 PM.',
            whatToDeliver: 'Enlace de Notion o archivo PDF con la Matriz de 30 Ideas.',
            whereToSubmit: 'Sección Entregable de la Semana 1 en el Aula Virtual.',
            criteria: [
              '30 ideas distribuidas en los 5 pilares (30%)',
              'Ganchos directos sin saludos lentos (30%)',
              'Llamados a WhatsApp definidos (20%)',
              'Entrega antes del domingo 11:59 PM (20%)',
            ],
          }
        : {
            whatToDo: 'Download the Notion or interactive PDF worksheet, complete 30 rows, and submit to portal before Sunday 11:59 PM.',
            whatToDeliver: 'Notion link or completed PDF file.',
            whereToSubmit: 'Week 1 Deliverable section in the Classroom.',
            criteria: [
              '30 ideas across all 5 pillars (30%)',
              'Direct hooks without slow intros (30%)',
              'WhatsApp keyword CTAs (20%)',
              'Submission before Sunday 11:59 PM (20%)',
            ],
          },
      instructorNotes: {
        duration: '4:45 - 5:30 min',
        script: isEs
          ? 'Cierren deseando éxitos a la cohorte con su entrega del Reto 1 y anuncien la sesión en vivo de auditoría.'
          : 'Wish the cohort success on Challenge 1 and announce the live hot-seat audit session.',
      },
    },
  ];

  return {
    id: 'm01-03-02-challenge-matrix',
    slug: 'm01-03-02-challenge-matrix',
    lessonId: 'm01-03',
    title: isEs ? '1.3.2 Reto 1: Matriz de 30 Ideas' : '1.3.2 Challenge 1: 30-Idea Matrix',
    moduleTag: isEs ? 'SEMANA 1 · CLASE 1.3' : 'WEEK 1 · LESSON 1.3',
    estimatedMinutes: 5,
    slides,
  };
};
