import { SlideData } from './types';

export const getLiveLab2SlidesBlock4 = (isEs: boolean): SlideData[] => [
  {
    id: 's14',
    type: 'checklist',
    tag: isEs ? 'RÚBRICA DE EVALUACIÓN' : 'EVALUATION RUBRIC',
    title: isEs ? 'Checklist del Reto 2: Criterios para Nota 5.0 ★' : 'Challenge 2 Checklist: Criteria for 5.0 ★ Grade',
    subtitle: isEs
      ? 'Los 5 requisitos obligatorios que revisará la mesa docente antes de aprobar tu video de 45 segundos.'
      : 'The 5 mandatory requirements reviewed by instructors before approving your 45-second commercial video.',
    content: isEs
      ? [
          'Resolución 4K o 1080p a 30 FPS con lente limpio y sin halo blanco.',
          'Luz natural de ventana a 45° con sombras suaves en el rostro.',
          'Enfoque y exposición bloqueados (AF/AE Lock) sin parpadeo de brillo.',
          'Audio nítido grabado a 30 cm sin eco hueco de habitación.',
          'Estructura de 4 bloques (Gancho 0-3s, Dolor, B-roll intercalado y CTA WhatsApp).',
        ]
      : [
          '4K or 1080p resolution at 30 FPS with clean wiped lens.',
          'Soft natural 45° window light with gentle face falloff.',
          'Locked AF/AE exposure with zero automatic brightness hunting.',
          'Crisp vocal audio captured at 30cm without room echo.',
          '4-act structure (0-3s Hook, Friction, B-roll layers and WhatsApp CTA).',
        ],
    instructorNotes: {
      duration: '84:00 - 87:00 min',
      script: isEs
        ? 'Repasen cada uno de los 5 puntos. Cumplir los 5 garantiza nota 5.0 ★ e insignia de producción.'
        : 'Walk through each criteria point for a guaranteed 5.0 ★ pass.',
    },
  },
  {
    id: 's15',
    type: 'comparison',
    tag: isEs ? 'ESTÁNDAR DE CALIDAD' : 'QUALITY STANDARD',
    title: isEs ? 'Video Aprobado (5.0 ★) vs. Video con Ajustes' : 'Approved Video (5.0 ★) vs. Needs Revision',
    comparison: isEs
      ? {
          beforeLabel: '❌ Video que Requiere Ajustes',
          before: [
            'Luz trasera que deja la cara en sombra oscura.',
            'Cámara parpadeando en brillo durante todo el clip.',
            'Voz lejana con eco molesto y ruido de fondo.',
            'Cámara fija sin ningún B-roll ni cambio de plano.',
          ],
          afterLabel: '✓ Video Aprobado con 5.0 ★',
          after: [
            'Luz suave de ventana a 45° iluminando el rostro.',
            'AF/AE Lock activo con exposición estable.',
            'Voz nítida, cálida y presente a 30 cm.',
            'Intercala al menos 2 tomas macro de B-roll en el cuerpo.',
          ],
        }
      : {
          beforeLabel: '❌ Needs Revision Video',
          before: [
            'Backlit window causing dark silhouette.',
            'Auto exposure hunting flickering continuously.',
            'Distant echoing voice with AC hum.',
            'Static talking head with zero B-roll cuts.',
          ],
          afterLabel: '✓ Approved 5.0 ★ Video',
          after: [
            'Soft 45° natural window light illuminating face.',
            'Locked AF/AE with rock-solid exposure.',
            'Crisp, warm vocal presence at 30 cm.',
            'Layers at least 2 macro B-roll shots during proof.',
          ],
        },
    instructorNotes: {
      duration: '87:00 - 90:00 min',
      script: isEs
        ? 'Muestren el contraste final. La diferencia está en la ejecución de los 3 hábitos básicos.'
        : 'Show the final contrast. The difference lies in the execution of the 3 basic habits.',
    },
  },
  {
    id: 's16',
    type: 'steps',
    tag: isEs ? 'PLAN DE EJECUCIÓN' : 'EXECUTION PLAN',
    title: isEs ? 'Tu Plan de Grabación para el Fin de Semana' : 'Your Weekend Filming Action Plan',
    steps: isEs
      ? [
          {
            number: 'VIERNES',
            title: '1. Calibra tu Set & Prueba de Luz',
            desc: 'Ubica tu ventana a 45°, limpia el lente y graba un clip de prueba de 10s.',
          },
          {
            number: 'SÁBADO',
            title: '2. Rueda B-Roll & Video Hablado',
            desc: 'Graba tus 30 clips de apoyo y tu video de 45s con el método frase por frase.',
          },
          {
            number: 'DOMINGO',
            title: '3. Sube tu Enlace al Portal (23:59)',
            desc: 'Pega tu enlace público (YouTube no listado, TikTok, Reel o Drive) en el Aula Virtual.',
          },
        ]
      : [
          { number: 'FRIDAY', title: '1. Calibrate Set & Light', desc: 'Find 45° window, clean lens and record a 10s test clip.' },
          { number: 'SATURDAY', title: '2. Film B-Roll & Talking Head', desc: 'Shoot 30 B-roll clips and 45s video using sentence method.' },
          { number: 'SUNDAY', title: '3. Submit Link to Portal (23:59)', desc: 'Submit unlisted YouTube, TikTok, Reel or Drive URL in Classroom.' },
        ],
    instructorNotes: {
      duration: '90:00 - 93:00 min',
      script: isEs
        ? 'Recuerden a los alumnos que el domingo a las 23:59 cierra el plazo de revisión docente.'
        : 'Remind students of the Sunday 23:59 strict submission deadline.',
    },
  },
  {
    id: 's17',
    type: 'challenge',
    tag: isEs ? 'ENTREGABLE OFICIAL' : 'OFFICIAL DELIVERABLE',
    title: isEs ? 'Reto 2 Oficial: Tu Primer Video Comercial (45-60s)' : 'Official Challenge 2: Your First Commercial Video (45-60s)',
    challengeData: isEs
      ? {
          whatToDo: 'Graba un video comercial de 45 a 60 segundos aplicando la técnica frase por frase, luz a 45°, AF/AE Lock y 2 tomas de B-roll.',
          whatToDeliver: 'Enlace público (YouTube no listado, Instagram Reel, TikTok o carpeta de Google Drive) pegado en el formulario del Aula Virtual.',
          whereToSubmit: 'Sección "Reto Práctico" de la Lección 2.3 en el Aula Virtual.',
          criteria: [
            'Lente limpio y resolución 4K / 1080p a 30 FPS.',
            'Luz de ventana a 45° y AF/AE Lock activo sin parpadeo.',
            'Audio limpio a 30 cm sin eco hueco.',
            'Estructura de 4 bloques con gancho y llamado a WhatsApp.',
          ],
        }
      : {
          whatToDo: 'Record a 45-60s commercial video using sentence method, 45° window light, AF/AE lock and 2 B-roll cuts.',
          whatToDeliver: 'Public share link (unlisted YouTube, Instagram Reel, TikTok or Google Drive folder) submitted in Classroom.',
          whereToSubmit: 'Lesson 2.3 Practical Challenge Submission Box.',
          criteria: [
            'Clean lens and 4K / 1080p at 30 FPS.',
            '45° window light and active AF/AE lock.',
            'Crisp 30cm audio without room echo.',
            '4-act structure with hook and WhatsApp CTA.',
          ],
        },
    instructorNotes: {
      duration: '93:00 - 96:00 min',
      script: isEs
        ? 'El Reto 2 es la materia prima que usaremos la próxima semana para montar el video final en CapCut.'
        : 'Challenge 2 is the raw footage we will edit into our final polished piece in Week 3.',
    },
  },
  {
    id: 's18',
    type: 'closing',
    tag: isEs ? 'PRÓXIMA FASE' : 'NEXT PHASE',
    title: isEs ? '¡Semana 2 Completada! Nos Vemos en la Semana 3' : 'Week 2 Complete! See You in Week 3',
    subtitle: isEs
      ? 'La próxima semana entramos al cuarto de edición: Edición Rápida con CapCut en Móvil, Ritmo Visual, Subtítulos Dinámicos y Efectos de Sonido.'
      : 'Next week we enter the editing suite: Rapid Mobile CapCut Editing, Visual Pacing, Dynamic Subtitles and Sound Design.',
    highlight: isEs ? 'Semana 3: Edición Rápida & CapCut ➔' : 'Week 3: Rapid Mobile Editing ➔',
    bgColor: '#10B981',
    instructorNotes: {
      duration: '96:00 - 100:00 min',
      script: isEs
        ? '¡Felicitaciones por dominar la cámara! Tengan sus tomas listas en el álbum de fotos porque en la Semana 3 abrimos CapCut.'
        : 'Congratulations on mastering your camera! Have your clips organized because Week 3 is pure CapCut.',
    },
  },
];
