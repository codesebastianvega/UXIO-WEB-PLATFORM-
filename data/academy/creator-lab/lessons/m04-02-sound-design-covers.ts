import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0402 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm04-02',
    slug: 'sound-design-musica-y-portadas',
    moduleSlug: 'semana-4-edicion-ia',
    title: isEs ? 'Sound Design, Música y Estética Visual' : 'Sound Design, Music & Visual Aesthetics',
    type: 'microclass',
    duration: '16 min',
    objective: isEs
      ? 'Dominar la mezcla de audio en 3 capas (voz principal, música ambiental y efectos SFX) y diseñar portadas minimalistas 1:1 de alta conversión.'
      : 'Master 3-layer audio mixing (vocal dialogue, background music, SFX) and design high-converting 1:1 profile covers.',
    topics: isEs
      ? [
          'La mezcla de 3 capas: Voz (-3 dB), SFX Whoosh/Pop (-6 dB) y Música (-20 dB)',
          'Reducción de ruido y ecualización de calidez vocal en CapCut',
          'Diseño de portadas editoriales 1:1 que transmiten autoridad',
        ]
      : [
          '3-layer mix: Dialogue (-3 dB), SFX Whoosh/Pop (-6 dB), Music (-20 dB)',
          'Noise reduction and vocal warmth EQ in CapCut',
          'Editorial 1:1 cover design building authority without clutter',
        ],
    presentationSlug: 'm04-02-01-sound-design-mixing',
    microclasses: [
      {
        id: 'mc-04-02-01',
        title: isEs ? '1. Sound Design & Mezcla en 3 Capas' : '1. Sound Design & 3-Layer Audio Mixing',
        duration: '5:00 min',
        description: isEs
          ? 'Cómo ecualizar la voz principal, balancear la música de fondo a -20 dB e insertar efectos Whoosh sincronizados.'
          : 'Equalizing lead vocal, balancing background tracks to -20 dB, and syncing tactile whoosh SFX.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm04-02-01-sound-design-mixing',
      },
      {
        id: 'mc-04-02-02',
        title: isEs ? '2. Portadas Cohesivas & Grid 1:1' : '2. Cohesive Covers & 1:1 Profile Grid',
        duration: '5:00 min',
        description: isEs
          ? 'Diseño de portadas editoriales con foto del fundador o producto real y titular directo en zona segura.'
          : 'Designing clean editorial covers with real founder stills and direct punch headlines.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        presentationSlug: 'm04-02-02-cohesive-cover-design',
      },
    ],
    quiz: {
      title: isEs ? 'Checkpoint: Audio & Portadas' : 'Checkpoint: Audio & Cover Design',
      description: isEs
        ? 'Verifica tus conocimientos sobre balance de decibeles y estética de portadas antes de renderizar.'
        : 'Validate your understanding of audio balance and cover layout before rendering.',
      questions: [
        {
          id: 'q1',
          question: isEs
            ? '¿A qué nivel de volumen aproximado debe calibrarse la música de fondo en un video vertical comercial?'
            : 'At what approximate level should background music be ducked in a commercial vertical video?',
          options: isEs
            ? [
                'Entre -18 dB y -24 dB (volumen 10% a 15% en CapCut) para que nunca compita con la voz',
                'Al 100% de volumen para que suene fuerte en el teléfono',
                'Al 50% de volumen',
                'La música siempre debe sonar más fuerte que la persona que habla',
              ]
            : [
                'Between -18 dB and -24 dB (10% to 15% in CapCut) so it never masks dialogue',
                'At 100% full volume to sound loud on mobile speakers',
                'At 50% volume',
                'Music should always overpower the speaker',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'La música es solo una textura de acompañamiento; la voz humana debe ser la protagonista indiscutible.'
            : 'Music is merely ambient texture; vocal dialogue must remain the clear centerpiece.',
        },
        {
          id: 'q2',
          question: isEs
            ? '¿Por qué los efectos de sonido (SFX Whoosh) deben sincronizarse exactamente con el fotograma de cambio de plano?'
            : 'Why must whoosh SFX be aligned to the exact transition frame?',
          options: isEs
            ? [
                'Porque si el sonido suena antes o después, el cerebro detecta desfase y el video se percibe como amateur',
                'Porque la aplicación borra el sonido si no está alineado',
                'Porque aumenta el peso del archivo',
                'No importa cuándo suene el efecto',
              ]
            : [
                'If audio leads or lags by even a few frames, the brain detects an uncanny delay breaking visual immersion',
                'The app deletes unaligned audio',
                'It inflates file size',
                'Timing does not matter',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'La sincronía audiovisual milimétrica genera una experiencia táctil y profesional.'
            : 'Millisecond audiovisual alignment creates a seamless, high-production tactile feel.',
        },
        {
          id: 'q3',
          question: isEs
            ? '¿Qué regla fundamental debe respetarse al diseñar la portada de un Reel para Instagram y TikTok?'
            : 'What crucial rule must be followed when designing a Reel cover for profile grids?',
          options: isEs
            ? [
                'Mantener el titular y el elemento principal dentro de la zona cuadrada 1:1 central',
                'Poner 10 frases largas con todos los detalles del producto',
                'Usar 6 tipos de fuentes tipográficas diferentes',
                'Tapar toda la pantalla con stickers de ofertas',
              ]
            : [
                'Keep the main title and core focal visual within the central 1:1 square safe zone',
                'Write 10 dense sentences detailing the offer',
                'Use 6 conflicting font families',
                'Cover screen with discount stickers',
              ],
          correctOptionIndex: 0,
          explanation: isEs
            ? 'En la cuadrícula del perfil (feed), las plataformas recortan el video vertical 9:16 a un cuadrado 1:1.'
            : 'Profile grids crop 9:16 vertical thumbnails to a center 1:1 square.',
        },
      ],
    },
    resources: [
      {
        id: 'res-m04-02-01',
        title: isEs ? 'Bóveda de Sound Design & Mezcla en 3 Capas' : 'Sound Design Vault & 3-Layer Audio Mix',
        description: isEs
          ? 'Catálogo descargable de niveles en decibeles y efectos de sonido esenciales libres de derechos.'
          : 'Downloadable guide to decibel levels and royalty-free essential transition SFX.',
        type: 'guide',
        url: '#sound-design-vault',
      },
    ],
    challenge: {
      title: isEs ? 'Reto 4.2: Integra Sound Design y Diseña tu Portada 1:1' : 'Challenge 4.2: Layer Sound Design & Design 1:1 Cover',
      whatToDo: isEs
        ? 'Añade 1 pista de música instrumental a -20 dB, inserta al menos 2 efectos Whoosh en transiciones de B-roll y diseña la portada 1:1 de tu video.'
        : 'Layer 1 instrumental music track at -20 dB, insert 2 whoosh SFX on B-roll cuts, and create your 1:1 cover.',
      whatToDeliver: isEs
        ? 'Tu video con audio calibrado y portada listo para auditar en el Live Lab de la Lección 4.3.'
        : 'Your video with calibrated mix and cover ready for audit in Lesson 4.3 Live Lab.',
      whereToSubmit: isEs ? 'Libreta de Proyectos del Aula Virtual' : 'Classroom Project Workspace',
      evaluationCriteria: isEs
        ? [
            'Música bajada a -20 dB sin opacar la voz principal.',
            'Efectos Whoosh alineados al corte exacto.',
            'Portada con titular en zona cuadrada 1:1.',
          ]
        : [
            'Music ducked to -20 dB without masking lead dialogue.',
            'Whoosh SFX frame-aligned with cutaways.',
            'Cover title inside 1:1 square safe zone.',
          ],
    },
  };
};
