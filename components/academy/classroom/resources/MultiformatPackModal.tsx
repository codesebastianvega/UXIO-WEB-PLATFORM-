import React from 'react';
import { X, Layers, Printer, Video, FileImage, MessageSquare } from 'lucide-react';
import { MultiformatPackPrintTemplate } from './MultiformatPackPrintTemplate';

interface MultiformatPackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MultiformatPackModal: React.FC<MultiformatPackModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const formats = [
    {
      title: '1. Video Corto (Reel / TikTok)',
      icon: Video,
      color: '#FE385B',
      desc: 'Formato de captura masiva. 45-60s con gancho al dolor, cortes rápidos y llamada a WhatsApp.',
    },
    {
      title: '2. Carrusel Educativo (6-8 Slides)',
      icon: FileImage,
      color: '#FF7F07',
      desc: 'Formato de autoridad y guardados. 1 concepto por lámina con diseño limpio y portada irresistible.',
    },
    {
      title: '3. Secuencia de 5 Stories (24h)',
      icon: MessageSquare,
      color: '#10B981',
      desc: 'Formato de venta directa. Conversación sin filtros + encuesta interactiva + enlace directo.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Printable Area (visible only on print) */}
      <div className="hidden print:block fixed inset-0 bg-white z-[9999]">
        <MultiformatPackPrintTemplate />
      </div>

      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md print:hidden" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0C0D0E] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] print:hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center border border-[#10B981]/20">
              <Layers size={20} />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-[#10B981] tracking-wider block">
                EMPAQUETADO NATIVO // MULTIFORMAT PACK
              </span>
              <h2 className="font-display font-bold text-xl text-white">
                Kit Multiformato: 1 Idea en 3 Formatos Nativos
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono text-[#E5E5E7] transition-all cursor-pointer"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Imprimir PDF A4</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-[#8E8E93] hover:text-white transition-all cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-xs text-[#8E8E93] leading-relaxed">
            No tienes que crear 3 ideas diferentes cada semana. Toma 1 sola idea de tu Matriz de la Semana 1 y distribúyela en estos 3 formatos nativos para dominar el feed:
          </p>

          <div className="space-y-3">
            {formats.map((fmt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all flex items-start gap-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{ backgroundColor: `${fmt.color}15`, borderColor: `${fmt.color}30`, color: fmt.color }}
                >
                  <fmt.icon size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm text-white">{fmt.title}</h4>
                  <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">{fmt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#8E8E93]">
            💡 Tip: Publica el Reel el lunes, el carrusel el miércoles y las stories el viernes.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white text-black font-mono text-xs font-bold hover:bg-white/90 transition-all cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
