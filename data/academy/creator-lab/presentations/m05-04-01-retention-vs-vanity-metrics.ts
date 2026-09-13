import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM050401 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's1',
      type: 'title',
      tag: isEs ? 'MICROCLASE 5.4.1' : 'MICROCLASS 5.4.1',
      title: isEs ? 'Métricas de Negocio vs. Métricas de Vanidad' : 'Business Metrics vs. Vanity Metrics',
      subtitle: isEs
        ? 'Aprende a medir lo que realmente llena tu cuenta bancaria y a ignorar los números que solo alimentan el ego.'
        : 'Learn to track what genuinely funds your bank account while ignoring vanity numbers that only feed the ego.',
      highlight: isEs ? 'Analítica Comercial ➔' : 'Commercial Analytics ➔',
      bgColor: '#2563EB',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? 'En esta microclase aprenderán qué métricas importan para un negocio y por qué 10,000 views con 0 ventas es un fracaso.'
          : 'In this microclass you will discover which analytics genuinely impact your business and why empty views mean nothing.',
      },
    },
    {
      id: 's2',
      type: 'concept',
      tag: isEs ? 'EL TABLERO DE CONTROL' : 'THE CONTROL BOARD',
      title: isEs ? 'Las 3 Métricas Sagradas del Creador de Negocios' : 'The 3 Holy Metrics of Business Creators',
      subtitle: isEs
        ? 'Solo necesitas monitorear 3 indicadores para saber si tu contenido está funcionando comercialmente.'
        : 'You only need to track 3 metrics to evaluate your content commercial performance.',
      points: isEs
        ? [
            {
              label: '1. Tasa de Retención a los 3 Segundos',
              text: 'Si más del 65% de las personas siguen viendo tu video en el segundo 3, tu gancho inicial fue un éxito.',
              tag: 'Hook',
            },
            {
              label: '2. Tasa de Comentarios / DMs',
              text: 'Número de comentarios con la palabra clave dividido entre el alcance. Mide el interés comercial real.',
              tag: 'Interés',
            },
            {
              label: '3. Tasa de Cierre en WhatsApp',
              text: 'De cada 10 personas que te escriben al WhatsApp, cuántas pagan. Tu meta debe ser cerrar entre 2 y 4 de cada 10.',
              tag: 'Ventas',
            },
          ]
        : [
            {
              label: '1. 3-Second Retention Rate',
              text: 'If over 65% of viewers remain engaged at second 3, your opening hook succeeded.',
              tag: 'Hook',
            },
            {
              label: '2. Comment / DM Conversion Rate',
              text: 'Number of keyword comments divided by reach. Measures genuine commercial buying intent.',
              tag: 'Interest',
            },
            {
              label: '3. WhatsApp Closing Rate',
              text: 'Out of 10 qualified chats on WhatsApp, how many complete payment. Goal should be 20% to 40%.',
              tag: 'Sales',
            },
          ],
      instructorNotes: {
        duration: '1:00 - 3:00 min',
        script: isEs
          ? 'Expliquen que los likes no pagan el arriendo ni los sueldos; las conversaciones calificadas en WhatsApp sí.'
          : 'Remind creators that likes do not pay rent or salaries; qualified WhatsApp conversations do.',
      },
    },
    {
      id: 's3',
      type: 'comparison',
      tag: isEs ? 'VANIDAD VS FACTURACIÓN' : 'VANITY VS REVENUE',
      title: isEs ? 'El Creador de Entretenimiento vs. El Creador Comercial' : 'Entertainment Creator vs. Commercial Creator',
      comparison: isEs
        ? {
            beforeLabel: 'EL CREADOR DE VANIDAD',
            before: [
              'Obsesionado con llegar a 100,000 views',
              'Sube bailes y memes no relacionados al negocio',
              'Recibe miles de likes pero nadie pregunta por su servicio',
              'Se agota rápidamente porque no genera ingresos',
            ],
            afterLabel: 'EL CREADOR UXIO COMERCIAL',
            after: [
              'Le basta con 800 views bien segmentadas',
              'Habla de problemas específicos de clientes reales',
              'Recibe 25 comentarios pidiendo información',
              'Cierra 4 ventas cada semana de forma predecible',
            ],
          }
        : {
            beforeLabel: 'THE VANITY CREATOR',
            before: [
              'Obsessed with hitting 100k views',
              'Chases generic dance memes unrelated to product',
              'Racks up likes but zero buyers message for info',
              'Burns out quickly because zero income is generated',
            ],
            afterLabel: 'THE UXIO COMMERCIAL CREATOR',
            after: [
              'Thrives with 800 tightly targeted views',
              'Addresses specific pains of real buyers',
              'Gets 25 qualified inquiries in DMs per video',
              'Closes 4 sales every week like clockwork',
            ],
          },
      instructorNotes: {
        duration: '3:00 - 4:00 min',
        script: isEs
          ? 'Hagan ver que tener una audiencia pequeña pero compradora es el secreto de los negocios más rentables.'
          : 'Show that a small, highly qualified buyer audience is the foundation of high-margin businesses.',
      },
    },
    {
      id: 's4',
      type: 'challenge',
      tag: isEs ? 'MISIÓN PRÁCTICA' : 'PRACTICAL MISSION',
      title: isEs ? 'Misión 5.4.1: Tu Primer Tablero de Control' : 'Mission 5.4.1: Your First Control Board',
      subtitle: isEs
        ? 'Abre la plantilla de Notion o Google Sheets y anota las métricas de tus últimos 3 videos.'
        : 'Open the Notion/Sheets template and log metrics for your latest 3 videos.',
      points: isEs
        ? [
            { label: 'Paso 1: Retención a 3s', text: 'Entra a las estadísticas del video en Instagram/TikTok y copia el % de retención inicial.' },
            { label: 'Paso 2: Conversaciones', text: 'Cuenta cuántos comentarios con la palabra clave recibiste y cuántos DMs se abrieron.' },
            { label: 'Paso 3: Ventas Cerradas', text: 'Registra el monto total de dinero facturado atribuible a cada pieza de contenido.' },
          ]
        : [
            { label: 'Step 1: 3s Retention', text: 'Open video insights in Instagram/TikTok and copy initial retention percentage.' },
            { label: 'Step 2: Conversations', text: 'Count how many keyword comments were generated and DMs initiated.' },
            { label: 'Step 3: Closed Sales', text: 'Log total revenue generated and tied to each specific piece of content.' },
          ],
      instructorNotes: {
        duration: '4:00 - 5:00 min',
        script: isEs
          ? 'Recuerden que lo que se mide se puede mejorar; sin métricas, están navegando a ciegas.'
          : 'Remind them that what gets measured gets improved; without tracking, they are flying blind.',
      },
    },
  ];

  return {
    id: 'm05-04-01-retention-vs-vanity-metrics',
    slug: 'm05-04-01-retention-vs-vanity-metrics',
    lessonId: 'm05-04',
    title: isEs ? 'Métricas de Negocio vs. Métricas de Vanidad' : 'Business Metrics vs. Vanity Metrics',
    moduleTag: isEs ? 'SEMANA 5 · LECCIÓN 5.4' : 'WEEK 5 · LESSON 5.4',
    estimatedMinutes: 5,
    slides,
  };
};
