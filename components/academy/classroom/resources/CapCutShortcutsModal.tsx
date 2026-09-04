import React from 'react';
import { X, Scissors, Printer, Sparkles, Smartphone, Sliders } from 'lucide-react';
import { CapCutShortcutsPrintTemplate } from './CapCutShortcutsPrintTemplate';

interface CapCutShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CapCutShortcutsModal: React.FC<CapCutShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const steps = [
    {
      title: '1. Cortes sin Aire (Jump Cuts)',
      icon: Scissors,
      color: '#FE385B',
      desc: 'Haz zoom en la línea de tiempo. Corta justo antes de que inicie la primera onda de sonido y corta justo al terminar la última consonante.',
    },
    {
      title: '2. Subtítulos Dinámicos de 2 Palabras',
      icon: Sparkles,
      color: '#FF7F07',
      desc: 'Ve a Texto ➔ Subtítulos Automáticos. Elige animación "Pop" y resalta la palabra de dolor en amarillo (#FFCC48) o verde (#10B981).',
    },
    {
      title: '3. Parámetros de Exportación Pro',
      icon: Sliders,
      color: '#10B981',
      desc: 'Configura 1080p, 30 FPS, Bitrate Más Alto (High Bitrate) y HDR desactivado para evitar que Instagram queme los blancos.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Printable Area (visible only on print) */}
      <div className="hidden print:block fixed inset-0 bg-white z-[9999]">
        <CapCutShortcutsPrintTemplate />
      </div>

      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md print:hidden" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0C0D0E] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] print:hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FE385B]/10 text-[#FE385B] flex items-center justify-center border border-[#FE385B]/20">
              <Scissors size={20} />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-[#FE385B] tracking-wider block">
                HERRAMIENTA // CAPCUT SHORTCUTS
              </span>
              <h2 className="font-display font-bold text-xl text-white">
                Cheat Sheet: Edición Dinámica en CapCut Móvil
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
            Sigue estos 3 pasos en CapCut Móvil para lograr una edición ágil de menos de 15 minutos por video:
          </p>

          <div className="space-y-3">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all flex items-start gap-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{ backgroundColor: `${st.color}15`, borderColor: `${st.color}30`, color: st.color }}
                >
                  <st.icon size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm text-white">{st.title}</h4>
                  <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#8E8E93]">
            💡 Tip: Aplica un zoom digital del 10% en tomas alternadas para crear dinamismo de doble cámara.
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
