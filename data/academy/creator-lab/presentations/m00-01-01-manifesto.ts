import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';
import { getWelcomeInstructorNotes } from './m00-01-notes';

export const getPresentationM000101 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';
  const notes = getWelcomeInstructorNotes(isEs);

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'El Manifiesto Creator Lab' : 'The Creator Lab Manifesto',
      subtitle: isEs
        ? 'Microclase 1 · Tu celular es el canal de ventas más rentable de tu negocio.'
        : 'Microclass 1 · Your smartphone is your most profitable sales channel.',
      highlight: isEs ? 'Semana 0 · Inducción' : 'Week 0 · Induction',
      imageUrl:
        'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&auto=format&fit=crop&q=80',
      instructorNotes: notes.s01,
    },
    {
      id: 's02',
      type: 'concept',
      tag: isEs ? 'EL PRINCIPIO' : 'THE PRINCIPLE',
      title: isEs ? 'La Atención Vertical es el Nuevo Activo' : 'Vertical Attention is the New Asset',
      subtitle: isEs
        ? 'Tu negocio no necesita cámaras de cine; necesita claridad y conversión.'
        : 'Your business does not need cinema cameras; it needs clarity and conversion.',
      points: isEs
        ? [
            {
              label: '1. Producción de Bolsillo',
              text: 'Graba en el momento en que surge la idea, sin fricción técnica ni preparaciones eternas.',
              tag: 'Cero Fricción',
              icon: 'Smartphone',
            },
            {
              label: '2. Historias sobre Anuncios',
              text: 'La gente salta los anuncios tradicionales, pero conecta con personas reales resolviendo problemas.',
              tag: 'Autenticidad',
              icon: 'Sparkles',
            },
            {
              label: '3. Foco en Conversión',
              text: 'Cada pieza tiene un llamado a la acción claro hacia WhatsApp o tu canal comercial.',
              tag: 'Ventas Reales',
              icon: 'TrendingUp',
            },
          ]
        : [
            {
              label: '1. Lean Mobile Production',
              text: 'Shoot when the idea is fresh with zero technical friction.',
              tag: 'Zero Friction',
              icon: 'Smartphone',
            },
            {
              label: '2. Stories Over Ads',
              text: 'Audiences skip traditional ads but connect with real humans solving problems.',
              tag: 'Authenticity',
              icon: 'Sparkles',
            },
            {
              label: '3. Conversion Focus',
              text: 'Every video has a direct CTA to WhatsApp or your product catalog.',
              tag: 'Real Revenue',
              icon: 'TrendingUp',
            },
          ],
      instructorNotes: notes.s02,
    },
    {
      id: 's03',
      type: 'comparison',
      tag: isEs ? 'CAMBIO DE PARADIGMA' : 'PARADIGM SHIFT',
      title: isEs ? 'Creador Amateur vs. Sistema UXIO' : 'Amateur Creator vs. UXIO System',
      subtitle: isEs
        ? 'Por qué el 90% de los creadores se frustran y cómo construimos predictibilidad.'
        : 'Why 90% of creators burn out and how we build predictable growth.',
      comparison: {
        beforeLabel: isEs ? 'CREADOR AMATEUR / SIN SISTEMA' : 'AMATEUR CREATOR',
        before: isEs
          ? [
              'Publica cuando "le llega la inspiración".',
              'Graba tomas improvisadas con mal encuadre.',
              'Depende de likes y métricas vanidosas.',
              'Cero llamados a la acción claros.',
            ]
          : [
              'Posts only when inspiration randomly strikes.',
              'Improvised shaky shots with poor lighting.',
              'Chases vanity likes and views.',
              'Zero direct calls to action.',
            ],
        afterLabel: isEs ? 'CREATOR LAB / SISTEMA UXIO' : 'UXIO CREATOR SYSTEM',
        after: isEs
          ? [
              'Matriz de 30 ideas y 5 pilares comerciales.',
              'Planos limpios, luz de ventana y audio nítido.',
              'Mide conversaciones generadas y ventas.',
              'Embudos directos a WhatsApp Business.',
            ]
          : [
              '30-day matrix with 5 commercial pillars.',
              'Clean framing, window light, and crisp sound.',
              'Tracks qualified conversations and sales.',
              'Direct funnel routes to WhatsApp.',
            ],
      },
      instructorNotes: notes.s03,
    },
  ];

  return {
    id: 'pres-m00-01-01',
    slug: 'm00-01-01-manifesto',
    lessonId: 'm00-01',
    title: isEs ? 'Microclase 1: El Manifiesto Creator Lab' : 'Microclass 1: Creator Lab Manifesto',
    moduleTag: isEs ? 'SEMANA 0 · MICROCLASE 1' : 'WEEK 0 · MICROCLASS 1',
    estimatedMinutes: 4,
    slides,
  };
};
