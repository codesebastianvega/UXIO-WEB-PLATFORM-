import React from 'react';
import { Layers, ArrowRight, Video, FileImage, MessageSquare } from 'lucide-react';

export const MultiformatPackPrintTemplate: React.FC = () => {
  const formats = [
    {
      type: '1. VIDEO VERTICAL (REEL / TIKTOK / SHORTS)',
      icon: Video,
      color: '#FE385B',
      structure: [
        '0-3s: Gancho al dolor o curiosidad con movimiento físico o corte a B-roll.',
        '3-15s: Dimensión de la frustración que sufre el cliente.',
        '15-35s: Prueba tangible con tomas macro y sonido ambiente real.',
        '35-45s: Llamado con palabra clave para activar chat privado en WhatsApp.',
      ],
    },
    {
      type: '2. CARRUSEL EDUCATIVO (6-8 DIAPOSITIVAS)',
      icon: FileImage,
      color: '#FF7F07',
      structure: [
        'Slide 1: Portada con título gancho de alto contraste y número impar (ej. "5 Errores...").',
        'Slides 2-5: 1 concepto o error por diapositiva con texto grande y tipografía limpia.',
        'Slide 6: Resumen en tabla o diagrama comparativo.',
        'Slide 7: Llamado a Guardar para consultar luego y comentar.',
      ],
    },
    {
      type: '3. SECUENCIA DE 5 STORIES DE VENTA (24 HORAS)',
      icon: MessageSquare,
      color: '#10B981',
      structure: [
        'Story 1: Contexto cotidiano sin filtros ("Estaba pensando en esto...").',
        'Story 2: El problema común que frena a los clientes.',
        'Story 3: Sticker de encuesta interactiva (Sí / No o Quiz).',
        'Story 4: Captura de pantalla de cliente agradecido o resultado real.',
        'Story 5: Sticker de enlace directo a WhatsApp con oferta por tiempo limitado.',
      ],
    },
  ];

  return (
    <div className="bg-white text-black p-8 font-sans max-w-[800px] mx-auto space-y-6">
      {/* Header */}
      <div className="border-b-2 border-black pb-4 flex justify-between items-start">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#10B981] uppercase block">
            UXIO ACADEMY · CREATOR LAB · HERRAMIENTA OFICIAL
          </span>
          <h1 className="text-2xl font-black tracking-tight text-black mt-1">
            Kit Multiformato: 1 Idea Multiplicada por 3
          </h1>
          <p className="text-xs text-[#555555] mt-0.5">
            Estructura de producción para convertir 1 sola idea en 1 Reel, 1 Carrusel y 1 Secuencia de 5 Stories.
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center border border-[#10B981]/20 shrink-0">
          <Layers size={20} />
        </div>
      </div>

      {/* Formats Grid */}
      <div className="space-y-4">
        {formats.map((fmt, idx) => (
          <div key={idx} className="border border-black/15 rounded-xl p-4 space-y-2.5 bg-black/[0.01]">
            <div className="flex items-center gap-2 border-b border-black/10 pb-1.5">
              <fmt.icon size={16} style={{ color: fmt.color }} />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-black">
                {fmt.type}
              </h3>
            </div>

            <div className="space-y-1.5">
              {fmt.structure.map((st, sIdx) => (
                <div key={sIdx} className="flex items-start gap-2 text-xs text-[#333333]">
                  <ArrowRight size={12} style={{ color: fmt.color }} className="shrink-0 mt-0.5" />
                  <span>{st}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-black/15 pt-3 flex justify-between items-center text-[10px] font-mono text-[#666666]">
        <span>// CREATOR LAB M03 · EMPAQUETADO MULTIFORMATO</span>
        <span>Requisito Oficial para la entrega del Reto 3</span>
      </div>
    </div>
  );
};
