import { InstructorNotes } from './types';

export const getCreatorKitInstructorNotes = (isEs: boolean): Record<string, InstructorNotes> => {
  if (!isEs) {
    return {
      s01: {
        duration: '0:00 - 0:45 min',
        script: `Welcome to Lesson 0.2 of Creator Lab!\n\nToday we eliminate the myth of the expensive studio. In the next 3 minutes, you will learn to calibrate your smartphone as a professional camera.`,
        keyActions: ['Medium shot. Confident smile. Hold phone at chest level without covering face.'],
        studentQA: [{ question: 'Do I need the latest iPhone?', answer: 'No. Any smartphone from the last 4 years is more than enough.' }],
      },
      s02: {
        duration: '0:45 - 1:45 min',
        script: `3 non-negotiable settings: 1. Clean the lens with a microfiber cloth. 2. Enable the 3x3 grid. 3. Shoot in 4K or 1080p at 30 FPS.`,
        keyActions: ['Open card modals to illustrate clean lens vs smudged sensor.'],
      },
      s03: {
        duration: '1:45 - 2:30 min',
        script: `Follow this 60-second checklist: Airplane Mode, AE/AF Lock on screen, Eye-level framing, and 5-second audio test.`,
        keyActions: ['Count steps on fingers. Emphasize AE/AF lock.'],
      },
      s04: {
        duration: '2:30 - 3:15 min',
        script: `Window light at 45 degrees gives flattering soft volume. Avoid standing with your back to the window to prevent harsh silhouettes.`,
        keyActions: ['Show 45-degree angle with hands.'],
      },
      s05: {
        duration: '3:15 - 4:00 min',
        script: `Viewers forgive modest video, but drop bad audio in 2 seconds. A $15 USD lavalier mic isolates your voice with high authority.`,
        keyActions: ['Touch lavalier microphone as live proof.'],
      },
      s06: {
        duration: '4:00 - 4:30 min',
        script: `Review the 4 core terms: Reverberation, AE/AF Lock, Headroom, and Lavalier mic.`,
      },
      s07: {
        duration: '4:30 - 5:00 min',
        script: `Your challenge: photo of your recording spot and 10-second audio clip. Submit in the classroom to approve your setup!`,
        keyActions: ['Encourage completing the challenge before Module 1.'],
      },
    };
  }

  return {
    s01: {
      duration: '0:00 - 0:45 min',
      script: `¡Bienvenidos a la Lección 0.2 de Creator Lab!\n\nHoy derribamos el mito del estudio costoso. En 3 minutos aprenderás a calibrar tu celular con herramientas que ya tienes en casa para verte y sonar como un referente.`,
      keyActions: ['Plano medio. Sonrisa enérgica y confiada. Sostén el smartphone a la altura del pecho.'],
      studentQA: [
        {
          question: '¿Necesito el último modelo de iPhone para este curso?',
          answer: 'No. Cualquier celular gama media o alta de los últimos 4 años tiene sensor de sobra.',
        },
      ],
    },
    s02: {
      duration: '0:45 - 1:45 min',
      script: `Tres ajustes innegociables antes de grabar: 1. Limpieza de lente con paño de microfibra. 2. Activa la cuadrícula 3x3. 3. Graba en 4K o 1080p a 30 FPS. Nunca a 60 FPS.`,
      keyActions: ['Abre las tarjetas de concepto para mostrar los modales de detalle.'],
    },
    s03: {
      duration: '1:45 - 2:30 min',
      script: `Protocolo de 60 segundos antes de dar "Rec": Modo Avión, Bloqueo AE/AF en pantalla, Lente a nivel de los ojos y Prueba de audio de 5 segundos.`,
      keyActions: ['Enumera los 4 pasos con los dedos. Enfatiza el Bloqueo AE/AF.'],
    },
    s04: {
      duration: '2:30 - 3:15 min',
      script: `Iluminación natural: la ventana a 45 grados es tu mejor softbox. Evita pararte de espaldas a la ventana para no quedar en contraluz oscuro.`,
      keyActions: ['Señala la dirección diagonal de la luz con las manos.'],
    },
    s05: {
      duration: '3:15 - 4:00 min',
      script: `El espectador perdona una imagen modesta, pero abandona un video con audio malo en 2 segundos. Un micrófono de solapa de $60.000 COP o audífonos aíslan tu voz.`,
      keyActions: ['Toca sutilmente tu micrófono solapero como prueba de calidad.'],
    },
    s06: {
      duration: '4:00 - 4:30 min',
      script: `Repasa los términos del glosario: Reverberación, Bloqueo AE/AF, Headroom y Micrófono Solapero.`,
    },
    s07: {
      duration: '4:30 - 5:00 min',
      script: `Tu reto: toma una foto de tu espacio de grabación y graba un video de 10 segundos diciendo tu nombre y negocio. ¡Súbelo al aula para aprobar tu setup!`,
      keyActions: ['Cierre con entusiasmo y llamado a subir el reto en el aula.'],
    },
  };
};
