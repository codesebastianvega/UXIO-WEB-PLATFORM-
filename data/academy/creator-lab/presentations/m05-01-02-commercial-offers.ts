import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM050102 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's1',
      type: 'title',
      tag: isEs ? 'MICROCLASE 5.1.2' : 'MICROCLASS 5.1.2',
      title: isEs ? 'Ofertas Irresistibles en Video Vertical' : 'Irresistible Offers in Vertical Video',
      subtitle: isEs
        ? 'Los 3 formatos comerciales que venden sin parecer publicidad barata ni cansar a tu audiencia.'
        : 'The 3 commercial frameworks that sell without feeling like cheap ads or burning your audience.',
      highlight: isEs ? 'Formatos de Venta Directa ➔' : 'Direct Response Frameworks ➔',
      bgColor: '#FF7F07',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? 'En esta microclase aprenderán los 3 formatos para vender productos o servicios en videos de menos de 45 segundos.'
          : 'In this microclass you will discover the 3 proven video frameworks to sell offers under 45 seconds.',
      },
    },
    {
      id: 's2',
      type: 'steps',
      tag: isEs ? 'LOS 3 FORMATOS DE VENTA' : 'THE 3 SALES FORMATS',
      title: isEs ? 'Estructuras Comprobadas de 45 Segundos' : 'Proven 45-Second Frameworks',
      subtitle: isEs
        ? 'Elige el formato ideal según vendas un producto físico, un servicio o una asesoría.'
        : 'Choose the ideal setup based on whether you sell products, services, or consulting.',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'La Demostración Rápida',
              desc: '0-3s Muestra el resultado final ➔ 3-25s El proceso acelerado ➔ 25-35s La oferta exclusiva ➔ 35-45s CTA.',
              tag: 'Ideal Productos',
            },
            {
              number: '02',
              title: 'Antes vs. Después',
              desc: '0-5s El problema o caos del cliente ➔ 5-25s Cómo lo transforma tu solución ➔ 25-45s La propuesta de valor.',
              tag: 'Ideal Servicios',
            },
            {
              number: '03',
              title: 'Testimonio Espontáneo Spoken Word',
              desc: 'Tu cliente cuenta en 30s cómo era su vida antes de tu producto y cómo es ahora, sin guion actuado.',
              tag: 'Prueba Social',
            },
          ]
        : [
            {
              number: '01',
              title: 'The Rapid Demonstration',
              desc: '0-3s Finished result showcase ➔ 3-25s Fast-paced process ➔ 25-35s Specific offer ➔ 35-45s Keyword CTA.',
              tag: 'Great for Products',
            },
            {
              number: '02',
              title: 'Before vs. After Contrast',
              desc: '0-5s Customer pain/chaos ➔ 5-25s Transformation through your solution ➔ 25-45s Offer details.',
              tag: 'Great for Services',
            },
            {
              number: '03',
              title: 'Spontaneous Spoken Word',
              desc: 'Real client explains the before & after transformation in 30 seconds with natural conversation.',
              tag: 'Social Proof',
            },
          ],
      instructorNotes: {
        duration: '1:00 - 3:00 min',
        script: isEs
          ? 'Muestren por qué empezar con el resultado final en los primeros 3 segundos atrapa al comprador inmediato.'
          : 'Show why opening with the finished payoff in seconds 0-3 hooks motivated buyers.',
      },
    },
    {
      id: 's3',
      type: 'concept',
      tag: isEs ? 'URGENCIA Y ESCASEZ' : 'URGENCY & SCARCITY',
      title: isEs ? 'Cómo Crear Urgencia Real sin Engañar' : 'Crafting Authentic Urgency Without Gimmicks',
      subtitle: isEs
        ? 'La gente pospone la compra si no tiene una razón clara para actuar hoy mismo.'
        : 'People delay purchases unless they have a clear reason to take action today.',
      points: isEs
        ? [
            {
              label: 'Capacidad Limitada Real',
              text: '"Solo tomamos 5 proyectos este mes para garantizar calidad". Esto es creíble y eleva tu estatus.',
              tag: 'Servicios',
            },
            {
              label: 'Lote o Inventario Inicial',
              text: '"Fabricamos solo 30 piezas de esta edición especial". La escasez física impulsa el pedido veloz.',
              tag: 'Productos',
            },
            {
              label: 'Bonus por Tiempo Limitado',
              text: '"A los primeros 10 que escriban por WhatsApp les regalamos la auditoría técnica de regalo".',
              tag: 'Incentivo',
            },
          ]
        : [
            {
              label: 'Real Capacity Limit',
              text: '"We only onboard 5 clients this month to maintain craft quality". Honest, credible, high-status.',
              tag: 'Services',
            },
            {
              label: 'Limited Batch Run',
              text: '"Only 30 pieces produced in this run". Physical scarcity sparks immediate orders.',
              tag: 'Products',
            },
            {
              label: 'Fast-Action Bonus',
              text: '"First 10 people to message on WhatsApp get free technical onboarding audit".',
              tag: 'Incentive',
            },
          ],
      instructorNotes: {
        duration: '3:00 - 4:00 min',
        script: isEs
          ? 'Insistan en que la escasez debe ser real; la falsa escasez destruye la confianza de la marca a largo plazo.'
          : 'Emphasize that scarcity must be real; fabricated scarcity destroys trust.',
      },
    },
    {
      id: 's4',
      type: 'checklist',
      tag: isEs ? 'CHECKLIST COMERCIAL' : 'COMMERCIAL CHECKLIST',
      title: isEs ? 'Checklist de tu Video de Oferta' : 'Commercial Video Checklist',
      subtitle: isEs
        ? 'Verifica estos 4 puntos antes de exportar tu video de venta en CapCut.'
        : 'Verify these 4 points before exporting your sales video in CapCut.',
      points: isEs
        ? [
            { label: 'Hook de Beneficio (0-3s)', text: '¿Se ve el resultado o la solución en los primeros 3 segundos?' },
            { label: 'Dolor Específico (3-15s)', text: '¿Mencionas la frustración exacta que vive tu cliente ideal?' },
            { label: 'Demostración Clara (15-35s)', text: '¿Se entiende qué incluye tu producto o servicio sin confusión?' },
            { label: 'CTA de 1 Palabra (35-45s)', text: '¿Pides una palabra clave clara para mandar a WhatsApp?' },
          ]
        : [
            { label: 'Payoff Hook (0-3s)', text: 'Is the outcome or solution visible in the first 3 seconds?' },
            { label: 'Specific Pain (3-15s)', text: 'Do you articulate the exact customer struggle?' },
            { label: 'Clear Demo (15-35s)', text: 'Can anyone grasp what is included without ambiguity?' },
            { label: '1-Word Trigger (35-45s)', text: 'Do you prompt a single trigger word for WhatsApp?' },
          ],
      instructorNotes: {
        duration: '4:00 - 5:00 min',
        script: isEs
          ? 'Inviten a revisar el guion de su video comercial con este checklist antes de grabar.'
          : 'Have students audit their commercial script with this checklist before filming.',
      },
    },
  ];

  return {
    id: 'm05-01-02-commercial-offers',
    slug: 'm05-01-02-commercial-offers',
    lessonId: 'm05-01',
    title: isEs ? 'Ofertas Irresistibles en Video Vertical' : 'Irresistible Offers in Vertical Video',
    moduleTag: isEs ? 'SEMANA 5 · LECCIÓN 5.1' : 'WEEK 5 · LESSON 5.1',
    estimatedMinutes: 5,
    slides,
  };
};
