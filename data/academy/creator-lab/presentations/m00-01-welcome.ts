import { PresentationContent } from './types';
import { Locale } from '@/types';

export const getPresentationM0001 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  return {
    id: 'pres-m00-01',
    slug: 'm00-01-welcome',
    lessonId: 'm00-01',
    title: isEs ? 'Bienvenida a UXIO Creator Lab' : 'Welcome to UXIO Creator Lab',
    moduleTag: isEs ? 'SEMANA 0 · INDUCCIÓN' : 'WEEK 0 · INDUCTION',
    estimatedMinutes: 8,
    slides: [
      {
        id: 's01',
        type: 'title',
        tag: 'UXIO ACADEMY · CREATOR LAB',
        title: isEs ? 'Bienvenido a Creator Lab' : 'Welcome to Creator Lab',
        subtitle: isEs
          ? 'Cohorte 01 · Aprende a convertir lo que haces en contenido que vende.'
          : 'Cohort 01 · Turn what you do into high-converting content.',
        highlight: isEs ? 'Semana 0 · Inducción y Setup' : 'Week 0 · Induction & Setup',
      },
      {
        id: 's02',
        type: 'concept',
        tag: isEs ? 'EL PRINCIPIO' : 'THE PRINCIPLE',
        title: isEs ? 'La Atención es el Nuevo Activo' : 'Attention is the New Asset',
        subtitle: isEs
          ? 'Tu negocio no necesita cámaras de cine; necesita claridad y ritmo.'
          : 'Your business does not need cinema cameras; it needs clarity and pace.',
        points: isEs
          ? [
              { label: 'El Celular Basta', text: 'Tienes en el bolsillo más poder de producción que una cadena de televisión hace 20 años.' },
              { label: 'Contenido vs Publicidad', text: 'La gente salta los anuncios tradicionales pero consume historias reales con curiosidad.' },
              { label: 'Conversión Directa', text: 'Cada pieza debe tener una ruta clara de monetización hacia tu WhatsApp o web.' },
            ]
          : [
              { label: 'Your Phone is Enough', text: 'You carry more production power in your pocket than a TV station 20 years ago.' },
              { label: 'Content vs Ads', text: 'Audiences skip traditional ads but engage with genuine stories and problem-solving.' },
              { label: 'Direct Conversion', text: 'Every piece of content must have a clear path to sales via WhatsApp or checkout.' },
            ],
      },
      {
        id: 's03',
        type: 'comparison',
        tag: isEs ? 'TRANSFORMACIÓN' : 'TRANSFORMATION',
        title: isEs ? 'El Cambio de Paradigma' : 'The Paradigm Shift',
        comparison: isEs
          ? {
              beforeLabel: 'Creador Amateur / Sin Sistema',
              before: [
                'Publica cuando "le llega la inspiración".',
                'Graba tomas improvisadas con mal encuadre.',
                'Depende de likes y métricas vanidosas.',
                'Cero llamadas a la acción claras.',
              ],
              afterLabel: 'Creator Lab / Sistema UXIO',
              after: [
                'Matriz de 30 ideas y 5 pilares comerciales.',
                'Planos limpios, luz de ventana y audio nítido.',
                'Mide conversaciones generadas y ventas.',
                'Embudos directos a WhatsApp Business.',
              ],
            }
          : {
              beforeLabel: 'Amateur / No System',
              before: [
                'Posts only when "inspiration strikes".',
                'Improvised clips with poor lighting.',
                'Obsesses over vanity metrics and likes.',
                'Zero clear call-to-actions.',
              ],
              afterLabel: 'Creator Lab / UXIO System',
              after: [
                'Structured 30-day matrix with 5 core pillars.',
                'Crisp framing, natural lighting, and audio.',
                'Measures WhatsApp leads and conversion.',
                'Direct funnel to closed sales.',
              ],
            },
      },
      {
        id: 's04',
        type: 'steps',
        tag: isEs ? 'ROADMAP' : 'ROADMAP',
        title: isEs ? 'Las 5 Semanas de Formación' : 'The 5-Week Journey',
        steps: isEs
          ? [
              { number: '01', title: 'Estrategia', desc: 'Descubrir el contenido oculto en tu marca y armar tu matriz.' },
              { number: '02', title: 'Grabación', desc: 'Perder el miedo a la cámara y crear tu banco de 30 clips B-roll.' },
              { number: '03', title: 'Creación', desc: 'Dominar hooks de 3 segundos, guiones probados y multiformato.' },
              { number: '04', title: 'Edición & IA', desc: 'Editar con ritmo en CapCut y multiplicar ideas con IA.' },
              { number: '05', title: 'Ventas & Cierre', desc: 'Convertir la atención en dinero con cierre por WhatsApp.' },
            ]
          : [
              { number: '01', title: 'Strategy', desc: 'Uncover hidden brand assets and build a 30-day matrix.' },
              { number: '02', title: 'Filming', desc: 'Conquer camera anxiety and film 30 B-roll clips.' },
              { number: '03', title: 'Creation', desc: 'Master 3-second hooks, proven scripts, and multi-formats.' },
              { number: '04', title: 'Editing & AI', desc: 'Fast-paced CapCut editing and AI content multiplication.' },
              { number: '05', title: 'Sales & Close', desc: 'Turn attention into revenue with WhatsApp closing flows.' },
            ],
      },
      {
        id: 's05',
        type: 'challenge',
        tag: isEs ? 'ENTREGABLE SEMANAL' : 'WEEKLY DELIVERABLE',
        title: isEs ? 'Reto 0: Diagnóstico de Marca' : 'Challenge 0: Brand Diagnosis',
        challengeData: {
          whatToDo: isEs
            ? 'Completa la ficha de diagnóstico con el perfil de tu cliente ideal y tu meta para las 5 semanas.'
            : 'Fill out the brand diagnosis template with your ideal buyer persona and 5-week target.',
          whatToDeliver: isEs
            ? '1 documento o captura de tu ficha en el canal de la comunidad.'
            : '1 document or screenshot in the community channel.',
          whereToSubmit: 'Comunidad Privada / Canal #semana-0-induccion',
          criteria: isEs
            ? [
                'Cliente ideal claramente definido',
                'Meta de ventas o prospectos cuantificable',
                'Identificación de 3 dolores del cliente',
              ]
            : [
                'Clearly defined target customer',
                'Quantifiable sales or lead goal',
                'Identification of 3 real pain points',
              ],
        },
      },
      {
        id: 's06',
        type: 'closing',
        tag: 'UXIO ACADEMY',
        title: isEs ? 'Progreso sobre Perfección' : 'Progress Over Perfection',
        subtitle: isEs
          ? 'No esperes a tener el video perfecto. Graba hoy tu primera toma.'
          : 'Do not wait for the perfect video. Shoot your first take today.',
        highlight: isEs ? '¡Nos vemos en el canal de la comunidad!' : 'See you in the private community channel!',
      },
    ],
  };
};
