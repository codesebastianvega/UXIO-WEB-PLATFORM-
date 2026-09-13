import { Lesson } from '../../types';
import { Locale } from '@/types';

export const getLessonM0503 = (lang: Locale = 'es'): Lesson => {
  const isEs = lang === 'es';

  return {
    id: 'm05-03',
    slug: 'live-lab-clinica-de-cierre-y-graduacion',
    moduleSlug: 'semana-5-contenido-que-vende',
    title: isEs
      ? 'Live Lab: Clínica de Cierre, Embudo a WhatsApp & Graduación'
      : 'Live Lab: Sales Closing Clinic & Capstone Graduation',
    type: 'live_lab',
    duration: '90 min',
    objective: isEs
      ? 'Sesión maestra en vivo de 90 minutos para auditar los flujos de venta de la cohorte, eliminar baches de fricción y revisar la rúbrica del proyecto final para graduación.'
      : '90-minute live masterclass to audit cohort sales funnels, eliminate friction gaps, and review capstone graduation requirements.',
    topics: isEs
      ? [
          'Auditoría forense de embudos: Dónde se pierden las ventas entre el video y el chat',
          'Teardown en pantalla: Conversaciones reales de chat que matan ventas vs las que facturan',
          'Hot Seat en Vivo: Auditoría y optimización de guiones de WhatsApp para 2 alumnos',
          'Rúbrica oficial de graduación y entrega del proyecto final del Creator Lab',
        ]
      : [
          'Forensic funnel audit: Where revenue leaks between video views and private chats',
          'On-screen teardown: Real WhatsApp conversations that kill sales vs those that close',
          'Live Hot Seat: Auditing and refactoring WhatsApp scripts for 2 student businesses',
          'Official graduation rubric and final capstone operating system submission',
        ],
    presentationSlug: 'm05-03-live-lab',
    microclasses: [],
    resources: [
      {
        id: 'res-m05-03-01',
        title: isEs ? 'Rúbrica Oficial de Graduación Creator Lab' : 'Official Creator Lab Graduation Rubric',
        description: isEs
          ? 'Checklist de los 3 entregables requeridos para solicitar tu constancia certificada de finalización.'
          : 'Checklist of the 3 required capstone assets to request your certified graduation badge.',
        type: 'guide',
        url: '#graduation-rubric-creator-lab',
      },
      {
        id: 'res-m05-03-02',
        title: isEs ? 'Bóveda de Guiones de Objeciones en WhatsApp' : 'WhatsApp Objection Handling Script Vault',
        description: isEs
          ? 'Respuestas probadas para "Está muy caro", "Déjame pensarlo" y "¿Qué garantía tiene?".'
          : 'Battle-tested replies for "It is too expensive", "Let me think about it", and "What guarantee do I have?".',
        type: 'template',
        url: '#whatsapp-objections-script-vault',
      },
    ],
    challenge: {
      title: isEs ? 'Misión Final de Graduación: Tu Flujo Comercial' : 'Final Graduation Mission: Your Commercial Pipeline',
      whatToDo: isEs
        ? 'Publica tu video comercial con el CTA de palabra clave, verifica que ManyChat entregue el link a WhatsApp y atiende tus primeros chats con el protocolo de 4 pasos.'
        : 'Publish your commercial video with the keyword CTA, verify ManyChat delivers your WhatsApp link, and service your first chats using the 4-step protocol.',
      whatToDeliver: isEs
        ? 'El enlace de tu video publicado + captura de pantalla de tus 3 respuestas rápidas configuradas en WhatsApp Business.'
        : 'Your published video link + screenshot of your 3 live quick replies inside WhatsApp Business.',
      whereToSubmit: isEs ? 'Buzón Oficial de Proyectos Finales del Aula Virtual' : 'Virtual Classroom Official Capstone Portal',
      evaluationCriteria: isEs
        ? [
            'Video vertical con gancho claro y CTA de 1 palabra en los últimos 4 segundos.',
            'Enlace inteligente de WhatsApp con mensaje precargado verificado.',
            'Respuestas rápidas configuradas con tono cálido y pregunta de diagnóstico.',
            'Calendario de 30 días estructurado con los 5 pilares de contenido.',
          ]
        : [
            'Vertical video with clear hook and 1-word keyword CTA in the closing 4 seconds.',
            'Verified smart WhatsApp link with pre-filled context text.',
            'Quick replies set up with warm human tone and diagnostic questions.',
            '30-day content calendar structured around 5 brand pillars.',
          ],
    },
  };
};
