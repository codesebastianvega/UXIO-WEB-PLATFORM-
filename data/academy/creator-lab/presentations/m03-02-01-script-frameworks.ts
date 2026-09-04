import { PresentationContent, SlideData } from './types';
import { Locale } from '@/types';

export const getPresentationM030201 = (lang: Locale = 'es'): PresentationContent => {
  const isEs = lang === 'es';

  const slides: SlideData[] = [
    {
      id: 's01',
      type: 'title',
      tag: 'UXIO ACADEMY · CREATOR LAB',
      title: isEs ? 'Estructuras de Guion: PAS, BAB & AIDA' : 'Script Frameworks: PAS, BAB & AIDA',
      subtitle: isEs
        ? 'Microclase 3.2.1 · Los 3 modelos comprobados de redacción persuasiva para estructurar videos comerciales de alta conversión.'
        : 'Microclass 3.2.1 · The 3 proven copywriting models to structure high-converting commercial video scripts.',
      highlight: isEs ? 'Semana 3 · Guionización en 10 Minutos' : 'Week 3 · 10-Minute Scripting',
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&auto=format&fit=crop&q=80',
      titleCard: {
        tag: isEs ? '// CONCEPTOS CLAVE 3.2.1' : '// KEY CONCEPTS 3.2.1',
        badge: isEs ? 'FRAMEWORKS' : 'FRAMEWORKS',
        items: [
          { title: isEs ? 'Fórmula PAS' : 'PAS Formula', desc: isEs ? 'Problema → Agitación → Solución' : 'Problem → Agitation → Solution', color: '#FE385B' },
          { title: isEs ? 'Fórmula BAB' : 'BAB Formula', desc: isEs ? 'Antes → Puente → Después' : 'Before → Bridge → After', color: '#FF7F07' },
          { title: isEs ? 'Fórmula AIDA' : 'AIDA Formula', desc: isEs ? 'Atención → Interés → Deseo → Acción' : 'Attention → Interest → Desire → Action', color: '#10B981' },
        ],
      },
      instructorNotes: {
        duration: '0:00 - 1:00 min',
        script: isEs
          ? '¡Bienvenidos a la Microclase 3.2.1! Escribir un guion no requiere inspiración artística: requiere aplicar una fórmula de persuasión probada.'
          : 'Welcome to Microclass 3.2.1! Video scripting does not require poetic muse: it requires tested persuasion models.',
      },
    },
    {
      id: 's02',
      type: 'statement',
      tag: 'BLOQUE 01 · 01:00 - 02:00 MIN',
      title: isEs
        ? 'El mejor producto del mundo pierde frente a un producto promedio que tiene una mejor estructura de guion.'
        : 'The world’s finest product loses against an average product with a superior video script structure.',
      subtitle: isEs
        ? 'Si no guionizas con intención, tu video se convertirá en un monólogo aburrido que nadie terminará de ver.'
        : 'Unstructured filming results in wandering monologues that viewers abandon within seconds.',
      highlight: isEs ? 'Estructura Probada = Ventas Predecibles' : 'Structured Scripts = Predictable Sales',
      bgColor: '#FE385B',
      instructorNotes: {
        duration: '1:00 - 2:00 min',
        script: isEs
          ? 'Enfaticen que los 3 frameworks reducen el tiempo de redacción de 2 horas a 10 minutos.'
          : 'Emphasize that copywriting frameworks slash script creation from 2 hours to 10 minutes.',
      },
    },
    {
      id: 's03',
      type: 'concept',
      tag: isEs ? 'LOS 3 MODELOS MAESTROS' : 'THE 3 MASTER MODELS',
      title: isEs ? 'Los 3 Frameworks de Guionización Persuasiva' : 'The 3 Master Persuasion Frameworks',
      subtitle: isEs
        ? 'Cuándo usar cada modelo según el objetivo de tu video.'
        : 'When to deploy each framework based on your campaign goal.',
      points: isEs
        ? [
            {
              label: '1. Modelo PAS (El Arma de Conversión Directa)',
              text: 'Hook con el Problema (0-3s) ➔ Agitación del Costo (3-15s) ➔ Solución y Demostración (15-35s) ➔ CTA WhatsApp (35-45s).',
              detailData: {
                tag: 'MODELO 01 // PAS',
                title: 'Problema · Agitación · Solución',
                description: 'El framework #1 para videos de venta directa, anuncios pagos y reels comerciales.',
                imageCaption: 'Estructura PAS en 45 Segundos',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Ataca el dolor desde el segundo 0', 'Genera alivio con la solución demostrada'],
                actionTip: 'Usa B-roll en la fase de Solución para validar la promesa.',
              },
            },
            {
              label: '2. Modelo BAB (La Transformación Visible)',
              text: 'Antes: La situación frustrante ➔ Puente: El método o producto aplicado ➔ Después: La vida o métrica transformada.',
              detailData: {
                tag: 'MODELO 02 // BAB',
                title: 'Before · Bridge · After',
                description: 'Ideal para mostrar casos de éxito, transformaciones de clientes y rediseños de procesos.',
                imageCaption: 'Transformación Antes vs Después',
                image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Contraste visual contundente', 'Demuestra resultados verificables'],
                actionTip: 'Muestra fotos reales del antes.',
              },
            },
            {
              label: '3. Modelo AIDA (Educación de Alto Valor)',
              text: 'Atención (Gancho) ➔ Interés (Dato sorprendente) ➔ Deseo (Beneficio exclusivo) ➔ Acción (Palabra clave en comentarios).',
              detailData: {
                tag: 'MODELO 03 // AIDA',
                title: 'Atención · Interés · Deseo · Acción',
                description: 'El estándar de oro para carruseles educativos y videos formativos de posicionamiento.',
                imageCaption: 'AIDA en Formatos Educativos',
                image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&auto=format&fit=crop&q=80',
                highlights: ['Genera autoridad y confianza técnica', 'Excelente para capturar comentarios de lead magnet'],
                actionTip: 'Ofrece una guía o recurso como incentivo.',
              },
            },
          ]
        : [
            { label: '1. PAS (Problem-Agitation-Solution)', text: 'The #1 direct response sales video engine.' },
            { label: '2. BAB (Before-Bridge-After)', text: 'The ideal model for transformation case studies.' },
            { label: '3. AIDA (Attention-Interest-Desire-Action)', text: 'The gold standard for educational carousels and authority.' },
          ],
      instructorNotes: {
        duration: '2:00 - 3:30 min',
        script: isEs
          ? 'Expliquen que para el Reto 3 usarán la estructura PAS para su video y AIDA para su carrusel.'
          : 'Instruct students to use PAS for video scripts and AIDA for educational carousels.',
      },
    },
    {
      id: 's04',
      type: 'comparison',
      tag: isEs ? 'ANÁLISIS ESTRUCTURAL' : 'STRUCTURAL AUDIT',
      title: isEs ? 'Guion Desorganizado vs. Guion Estructurado PAS' : 'Unstructured Script vs. PAS Script Framework',
      comparison: isEs
        ? {
            beforeLabel: '❌ Guion Desorganizado',
            before: [
              'Habla de la empresa durante 20 segundos.',
              'Menciona características técnicas sin conectar con dolores.',
              'No muestra prueba visual con B-roll.',
              'Cierra diciendo "contáctanos".',
            ],
            afterLabel: '✓ Guion Estructurado PAS',
            after: [
              'Ataca el problema del cliente en el segundo 0.',
              'Demuestra la solución en 20s con tomas de manos.',
              'Destruye la objeción de precio con prueba tangible.',
              'Cierra con palabra clave específica hacia WhatsApp.',
            ],
          }
        : {
            beforeLabel: '❌ Unstructured Script',
            before: [
              '20 seconds rambling about company history.',
              'Dry technical specs without addressing client pain.',
              'Zero visual proof or B-roll cuts.',
              'Vague "contact us" closing.',
            ],
            afterLabel: '✓ PAS Structured Script',
            after: [
              'Attacks customer friction on second 0.',
              'Demonstrates solution in 20s with hands-on B-roll.',
              'Destroys price objections with tangible proof.',
              'Direct keyword trigger bridging to WhatsApp.',
            ],
          },
      instructorNotes: {
        duration: '3:30 - 4:30 min',
        script: isEs
          ? 'Muestren cómo la claridad estructural genera confianza de compra inmediata.'
          : 'Highlight how structured clarity creates immediate buyer trust.',
      },
    },
    {
      id: 's05',
      type: 'steps',
      tag: isEs ? 'MISIÓN 3.2.1' : 'MISSION 3.2.1',
      title: isEs ? 'Guioniza tu Video en 3 Pasos' : '3-Step Scripting Sprint',
      steps: isEs
        ? [
            {
              number: '01',
              title: '1. Abre la Plantilla PAS',
              desc: 'Usa el recurso de la Bóveda de Frameworks (#script-frameworks-vault).',
            },
            {
              number: '02',
              title: '2. Escribe 1 Frase por Bloque',
              desc: 'Problema (1 frase), Agitación (1 frase), Solución (2 frases), CTA (1 frase).',
            },
            {
              number: '03',
              title: '3. Lee en Voz Alta con Cronómetro',
              desc: 'Verifica que la lectura tome entre 40 y 50 segundos.',
            },
          ]
        : [
            { number: '01', title: '1. Open PAS Template', desc: 'Use the Framework Vault tool (#script-frameworks-vault).' },
            { number: '02', title: '2. Write 1 Line per Act', desc: 'Problem (1 line), Agitation (1 line), Solution (2 lines), CTA (1 line).' },
            { number: '03', title: '3. Read Aloud with Timer', desc: 'Ensure read-through clocks between 40 and 50 seconds.' },
          ],
      instructorNotes: {
        duration: '4:30 - 5:00 min',
        script: isEs
          ? 'Con este guion en mano, el rodaje será rápido y fluido.'
          : 'With this script drafted, filming will be effortless and fast.',
      },
    },
  ];

  return {
    id: 'm03-02-01-script-frameworks',
    slug: 'm03-02-01-script-frameworks',
    lessonId: 'm03-02',
    title: isEs
      ? 'Estructuras de Guion: PAS, BAB & AIDA'
      : 'Script Frameworks: PAS, BAB & AIDA',
    moduleTag: isEs ? 'SEMANA 3 · MICROCLASE 3.2.1' : 'WEEK 3 · MICROCLASS 3.2.1',
    estimatedMinutes: 5,
    slides,
  };
};
