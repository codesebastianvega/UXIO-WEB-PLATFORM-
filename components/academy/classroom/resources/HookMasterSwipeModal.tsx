import React, { useState } from 'react';
import { X, Sparkles, Printer, Copy, Check, Flame, HelpCircle, Anchor } from 'lucide-react';
import { HookMasterSwipePrintTemplate } from './HookMasterSwipePrintTemplate';

interface HookMasterSwipeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HookMasterSwipeModal: React.FC<HookMasterSwipeModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const formulas = [
    { type: 'Fricción', icon: Flame, color: '#FE385B', text: 'El error al [Acción] que te cuesta [Pérdida]:', sample: 'El error al elegir telas que te cuesta el 40% de devoluciones.' },
    { type: 'Fricción', icon: Flame, color: '#FE385B', text: 'Si estás usando [Método viejo] para [Meta], para ya:', sample: 'Si estás respondiendo mensajes a mano a las 11 PM, para ya.' },
    { type: 'Curiosidad', icon: HelpCircle, color: '#FF7F07', text: 'Nadie habla de esto, pero [Verdad incómoda]:', sample: 'Nadie habla de esto, pero los cursos de $500 omiten este paso.' },
    { type: 'Curiosidad', icon: HelpCircle, color: '#FF7F07', text: 'Hice [Acción inusual] por 30 días y pasó esto:', sample: 'Grabé videos con luz rebotada por 30 días y dupliqué clientes.' },
    { type: 'Promesa', icon: Anchor, color: '#10B981', text: 'Cómo lograr [Resultado] en [Tiempo] sin [Dolor]:', sample: 'Cómo estructurar tu video de 45s en 10 min sin memorizar.' },
    { type: 'Promesa', icon: Anchor, color: '#10B981', text: 'La regla de 3 pasos para [Objetivo comercial]:', sample: 'La regla de 3 pasos para cerrar prospectos fríos en WhatsApp.' },
  ];

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Printable Area (visible only on print) */}
      <div className="hidden print:block fixed inset-0 bg-white z-[9999]">
        <HookMasterSwipePrintTemplate />
      </div>

      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md print:hidden" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0C0D0E] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] print:hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FE385B]/10 text-[#FE385B] flex items-center justify-center border border-[#FE385B]/20">
              <Sparkles size={20} />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-[#FE385B] tracking-wider block">
                BÓVEDA DE RECURSOS // SWIPE FILE
              </span>
              <h2 className="font-display font-bold text-xl text-white">
                Bóveda de Ganchos: Fórmulas de Alta Retención
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
            Copia cualquiera de estas fórmulas probadas y reemplaza las variables entre corchetes con el dolor, solución o promesa de tu nicho.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {formulas.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      {item.type}
                    </span>
                    <button
                      onClick={() => handleCopy(item.text, idx)}
                      className="text-[#8E8E93] hover:text-white transition-colors cursor-pointer p-1"
                      title="Copiar fórmula"
                    >
                      {copiedIndex === idx ? <Check size={14} className="text-[#10B981]" /> : <Copy size={14} />}
                    </button>
                  </div>
                  <h4 className="font-mono text-xs font-bold text-white leading-snug">
                    &quot;{item.text}&quot;
                  </h4>
                  <p className="font-sans text-[11px] text-[#A1A1AA] italic">
                    Ejemplo: &quot;{item.sample}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#8E8E93]">
            💡 Tip: Di la primera palabra con energía alta en el segundo 0.
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
