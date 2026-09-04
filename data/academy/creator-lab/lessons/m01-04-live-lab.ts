import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0104 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm01-04',
    slug: 'sesion-en-vivo-estrategia',
    moduleSlug: 'semana-1-estrategia',
    title: isEs ? 'Clase 1.4 — Sesión en Vivo: Estrategia & Auditoría de Ganchos' : 'Lesson 1.4 — Live Session: Strategy & Hook Audit',
    type: 'live_lab',
    duration: '60 min',
    objective: isEs
      ? 'Auditar en tiempo real las matrices de 30 ideas de la cohorte, calibrar los ganchos de 3 segundos para volverlos irresistibles y resolver dudas estratégicas para la entrega del Reto 1.'
      : 'Live audit student 30-day matrices, calibrate 3-second opening hooks, and answer strategic questions for Challenge 1 submission.',
    topics: isEs
      ? [
          'Análisis de los 5 ganchos más potentes enviados por la cohorte',
          'Auditoría en caliente: Subir a 3 alumnos al escenario para reescribir sus ganchos',
          'Cómo balancear servicios B2B de ticket alto vs productos físicos B2C',
          'Ronda abierta de preguntas y respuestas (Q&A en vivo de la Semana 1)',
        ]
      : [
          'Top 5 high-converting hooks analysis from cohort submissions',
          'Live hot seat audit: Bring 3 students on stage to rewrite opening hooks',
          'Balancing high-ticket B2B consulting vs physical B2C e-commerce products',
          'Open live Q&A session for Week 1',
        ],
    presentationSlug: 'm01-04-live-lab',
    microclasses: [],
    resources: [
      {
        id: 'res-01-04-01',
        title: isEs ? 'Bóveda de Ganchos Comerciales (Swipe File)' : 'Commercial Hooks Vault (Swipe File)',
        type: 'guide',
        url: '#hook-formulas',
        description: isEs
          ? 'Consulta los 15 ganchos de alta conversión clasificados por dolor, curiosidad y promesa.'
          : 'Access 15 proven high-converting hook formulas.',
      },
      {
        id: 'res-01-04-02',
        title: isEs ? 'Plantilla Oficial: Matriz de 30 Ideas de Contenido' : 'Official Template: 30-Idea Content Matrix',
        type: 'template',
        url: '#content-matrix',
        description: isEs
          ? 'Documento oficial interactivo para completar y enviar tu entrega del Reto 1.'
          : 'Official interactive template to complete and submit Challenge 1.',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 1 Oficial: Matriz de 30 Ideas de Contenido' : 'Official Challenge 1: 30-Day Content Matrix',
      whatToDo: isEs
        ? 'Aplica los ajustes aprendidos en la sesión en vivo a tu Matriz de 30 Ideas y envíala antes del domingo a las 11:59 PM para la calificación de la mesa docente.'
        : 'Apply live audit learnings to your 30-Day Content Matrix and submit before Sunday 11:59 PM for faculty grading.',
      whatToDeliver: isEs
        ? 'Enlace público de Notion (o Google Drive / Sheets) con la matriz completada.'
        : 'Public Notion share URL (or Google Drive/Sheets) with completed matrix.',
      whereToSubmit: isEs ? 'Formulario de Entrega Oficial' : 'Official Submission Form',
      evaluationCriteria: isEs
        ? [
            '30 filas completas distribuidas en los 5 pilares.',
            'Ganchos en primera persona de 0 a 3 segundos.',
            'Llamados a WhatsApp definidos con palabras clave.',
            'Entrega puntual antes del domingo 11:59 PM.',
          ]
        : [
            '30 complete rows distributed across 5 pillars.',
            '0-3s first-person opening hooks.',
            'Defined keyword CTAs to WhatsApp.',
            'Punctual submission before Sunday 11:59 PM.',
          ],
    },
  };
};
