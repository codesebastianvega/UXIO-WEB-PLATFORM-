import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM050202 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's1',
      type: 'title',
      tag: isEs ? 'MICROCLASE 5.2.2' : 'MICROCLASS 5.2.2',
      title: isEs ? 'Protocolo de Cierre en 4 Pasos por WhatsApp' : '4-Step WhatsApp Closing Protocol',
      subtitle: isEs
        ? 'Cómo transformar prospectos interesados en clientes que pagan usando respuestas rápidas y audios cálidos de 20s.'
        : 'How to convert warm leads into paying clients using saved quick-replies and 20s human voice notes.',
      highlight: isEs ? 'Guiones de Conversión en Chat ➔' : 'Chat Conversion Playbook ➔',
      bgColor: '#635BFF',
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? 'En esta microclase aprenderán el guion exacto de 4 pasos para atender chats de WhatsApp sin parecer un robot ni quemar la venta.'
          : 'In this microclass you will discover the 4-step framework to handle WhatsApp conversations warmly and effectively.',
      },
    },
    {
      id: 's2',
      type: 'steps',
      tag: isEs ? 'EL PROTOCOLO UXIO' : 'THE UXIO PROTOCOL',
      title: isEs ? 'Los 4 Pasos de Cierre en WhatsApp Business' : 'The 4 WhatsApp Business Closing Steps',
      subtitle: isEs
        ? 'Una estructura conversacional fluida que genera confianza inmediata y conduce al pago.'
        : 'A fluid conversational structure that builds instant trust and leads directly to payment.',
      steps: isEs
        ? [
            {
              number: '01',
              title: 'Saludo Personalizado',
              desc: '"¡Hola [Nombre]! Qué gusto saludarte. Vi que comentaste el video de [tema]". Conecta de inmediato.',
              tag: 'Paso 1',
            },
            {
              number: '02',
              title: 'Pregunta de Diagnóstico',
              desc: '"Antes de pasarte opciones, cuéntame: ¿es para ti o para regalar?". Quien responde, se involucra.',
              tag: 'Paso 2',
            },
            {
              number: '03',
              title: 'Audio Cálido de 20 Segundos',
              desc: 'Explica la recomendación específica con voz humana. Multiplica por 3 la tasa de cierre frente al texto frío.',
              tag: 'Paso 3',
            },
            {
              number: '04',
              title: 'Llamado al Pago Inmediato',
              desc: 'Envía el enlace de pasarela o cuenta bancaria con instrucción clara: "Al confirmar, te aparto tu cupo".',
              tag: 'Paso 4',
            },
          ]
        : [
            {
              number: '01',
              title: 'Personalized Greeting',
              desc: '"Hello [Name]! Great to connect. Saw you liked our video on [topic]". Instant rapport.',
              tag: 'Step 1',
            },
            {
              number: '02',
              title: 'Diagnostic Micro-Question',
              desc: '"Before sharing pricing, tell me: is this for yourself or your team?". Engages buyers.',
              tag: 'Step 2',
            },
            {
              number: '03',
              title: '20-Second Warm Voice Note',
              desc: 'Share custom advice in 20s voice clip. Triples closing conversion compared to cold text walls.',
              tag: 'Step 3',
            },
            {
              number: '04',
              title: 'Frictionless Payment Link',
              desc: 'Send checkout link with clear next step: "Once payment completes, your slot is locked in".',
              tag: 'Step 4',
            },
          ],
      instructorNotes: {
        duration: '1:00 - 3:00 min',
        script: isEs
          ? 'Expliquen por qué los audios de 20s rompen la barrera de desconfianza digital en Latinoamérica y el mundo.'
          : 'Explain why 20-second voice notes dismantle internet skepticism and create genuine connection.',
      },
    },
    {
      id: 's3',
      type: 'concept',
      tag: isEs ? 'HERRAMIENTAS DE AGILIDAD' : 'AGILITY TOOLS',
      title: isEs ? 'Configuración de WhatsApp Business para Ahorrar Horas' : 'WhatsApp Business Agility Setup',
      subtitle: isEs
        ? 'Las 3 funciones gratuitas que te permitirán atender 50 clientes en 15 minutos.'
        : 'The 3 free tools to service 50 prospects in 15 minutes.',
      points: isEs
        ? [
            {
              label: 'Respuestas Rápidas (/precio, /envios)',
              text: 'Guarda tus textos frecuentes para escribirlos en 1 segundo usando una barra inclinada.',
              tag: 'Atajos',
            },
            {
              label: 'Etiquetas de Clientes por Colores',
              text: 'Amarillo: Nuevo lead ➔ Naranja: Cotizado ➔ Verde: Pagado ➔ Azul: Entregado.',
              tag: 'Pipeline',
            },
            {
              label: 'Mensaje de Bienvenida Automático',
              text: 'Si te escriben fuera de horario comercial, el bot saluda y pide el nombre para retomar al día siguiente.',
              tag: 'Retención',
            },
          ]
        : [
            {
              label: 'Quick Replies (/pricing, /shipping)',
              text: 'Store frequently typed answers to deploy them instantly with a single slash shortcut.',
              tag: 'Shortcuts',
            },
            {
              label: 'Color-Coded Client Labels',
              text: 'Yellow: Inbound lead ➔ Orange: Quoted ➔ Green: Paid ➔ Blue: Fulfilled.',
              tag: 'Pipeline',
            },
            {
              label: 'Automated Away Greeting',
              text: 'Outside business hours, auto-reply acknowledges message and requests name for prompt follow-up.',
              tag: 'Retention',
            },
          ],
      instructorNotes: {
        duration: '3:00 - 4:00 min',
        script: isEs
          ? 'Muestren en vivo cómo abrir el menú de respuestas rápidas con la barra "/" en WhatsApp Business.'
          : 'Demonstrate how typing "/" opens the quick-reply modal in WhatsApp Business.',
      },
    },
    {
      id: 's4',
      type: 'challenge',
      tag: isEs ? 'MISIÓN PRÁCTICA' : 'PRACTICAL MISSION',
      title: isEs ? 'Misión 5.2.2: Configurar tus 3 Respuestas Rápidas' : 'Mission 5.2.2: Setup 3 Quick Replies',
      subtitle: isEs
        ? 'Deja programadas las 3 respuestas que más tiempo te ahorran en WhatsApp Business.'
        : 'Store the 3 time-saving quick replies in your WhatsApp Business app.',
      points: isEs
        ? [
            {
              label: 'Atajo 1: /precio',
              text: 'Descripción de la oferta + qué incluye + pregunta de diagnóstico.',
            },
            {
              label: 'Atajo 2: /pago',
              text: 'Enlace directo de pago (PSE, tarjeta, transferencia) + instrucción de comprobante.',
            },
            {
              label: 'Atajo 3: /seguimiento',
              text: 'Texto amable para reactivar a quien dejó en visto: "¿Pudiste ver el enlace que te mandé?".',
            },
          ]
        : [
            {
              label: 'Shortcut 1: /pricing',
              text: 'Offer breakdown + what is included + diagnostic question.',
            },
            {
              label: 'Shortcut 2: /pay',
              text: 'Direct checkout URL + instructions to confirm receipt.',
            },
            {
              label: 'Shortcut 3: /followup',
              text: 'Gentle re-engagement note: "Hey! Were you able to check the link I sent over?".',
            },
          ],
      instructorNotes: {
        duration: '4:00 - 5:00 min',
        script: isEs
          ? 'Motiven a los alumnos a probar enviarse los atajos a sí mismos para verificar el formato.'
          : 'Encourage students to test their shortcuts on themselves to verify formatting.',
      },
    },
  ];

  return {
    id: 'm05-02-02-closing-conversations-scripts',
    slug: 'm05-02-02-closing-conversations-scripts',
    lessonId: 'm05-02',
    title: isEs ? 'Protocolo de Cierre en 4 Pasos por WhatsApp' : '4-Step WhatsApp Closing Protocol',
    moduleTag: isEs ? 'SEMANA 5 · LECCIÓN 5.2' : 'WEEK 5 · LESSON 5.2',
    estimatedMinutes: 5,
    slides,
  };
};
