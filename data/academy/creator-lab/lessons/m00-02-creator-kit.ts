import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0002 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm00-02',
    slug: 'tu-kit-de-creacion-accesible',
    moduleSlug: 'semana-0-induccion',
    title: isEs ? 'Clase 0.1 — Tu kit de creación accesible' : 'Lesson 0.1 — Your accessible creator kit',
    type: 'microclass',
    duration: '10 min',
    objective: isEs
      ? 'Aprender a utilizar tu celular actual, luz de ventana y aplicaciones gratuitas sin invertir en equipos caros.'
      : 'Learn to use your current phone, window lighting, and free apps without expensive gear.',
    topics: isEs
      ? [
          'Tu celular como equipo principal',
          'Trípode y micrófono opcional',
          'Aprovechar la luz natural sin gastar',
          'Apps gratuitas imprescindibles (CapCut, Canva, IA)',
        ]
      : [
          'Smartphone as your primary camera',
          'Tripods and optional mics',
          'Natural window light setups',
          'Free essentials (CapCut, Canva, AI)',
        ],
    presentationSlug: 'm00-02-creator-kit',
    microclasses: [
      {
        id: 'mc-00-02-01',
        title: isEs ? '1. Ajustes Esenciales de Cámara en tu Smartphone' : '1. Essential Smartphone Camera Settings',
        duration: '5 min',
        description: isEs
          ? 'Configuración de 4K vs 1080p, 30fps/60fps, cuadrícula y limpieza de lente.'
          : 'Setting 4K vs 1080p, 30fps/60fps, grid, and lens cleaning habit.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
      },
      {
        id: 'mc-00-02-02',
        title: isEs ? '2. Setup de Luz Natural y Audio Casero' : '2. Natural Window Light & Clean Audio Setup',
        duration: '5 min',
        description: isEs
          ? 'Cómo colocarte frente a una ventana y obtener audio nítido sin micrófono externo.'
          : 'Positioning for natural light and capturing clean audio without external mics.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
      },
    ],
    resources: [
      {
        id: 'res-00-02-01',
        title: isEs ? 'Checklist de Apps Gratuitas Imprescindibles' : 'Free Essential Creator Apps Checklist',
        type: 'template',
        url: 'https://notion.so/uxio/apps-checklist',
        description: isEs ? 'Enlaces directos de descarga para iOS y Android.' : 'Direct download links for iOS and Android.',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 0.1: Foto de tu Espacio de Grabación' : 'Challenge 0.1: Your Shooting Setup Photo',
      whatToDo: isEs
        ? 'Prepara tu rincón de grabación cerca de una ventana y toma una foto de prueba con la cuadrícula de tu celular activada.'
        : 'Set up your recording spot near a window and snap a test photo with your camera grid on.',
      whatToDeliver: isEs ? '1 fotografía de tu espacio de grabación.' : '1 photo of your shooting space.',
      whereToSubmit: 'Comunidad Privada de Alumnos / Canal #semana-0-induccion',
      evaluationCriteria: [
        isEs ? 'Luz natural orientada de frente' : 'Frontal natural light setup',
        isEs ? 'Lente de cámara limpio y cuadrícula visible' : 'Clean lens and grid enabled',
      ],
    },
  };
};
