import React from 'react';
import { X, Volume2, Printer, Music, Zap, Mic } from 'lucide-react';
import { SoundDesignVaultPrintTemplate } from './SoundDesignVaultPrintTemplate';

interface SoundDesignVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SoundDesignVaultModal: React.FC<SoundDesignVaultModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const layers = [
    {
      title: 'Capa 1: Voz Principal (Voz en Off o Hablado)',
      icon: Mic,
      color: '#FE385B',
      level: '-3 dB a -1 dB',
      desc: 'Sube el volumen al 120-150% en CapCut y activa "Reducción de Ruido". La voz debe ser el elemento más potente de la mezcla.',
    },
    {
      title: 'Capa 2: Efectos de Sonido (SFX)',
      icon: Zap,
      color: '#FF7F07',
      level: '-6 dB a -10 dB (Volumen 25-35%)',
      desc: 'Whoosh en cada corte, Pop al salir palabras clave y Clicks al mostrar pantallas. Cada estímulo visual debe tener su anclaje auditivo.',
    },
    {
      title: 'Capa 3: Música de Fondo (Background)',
      icon: Music,
      color: '#10B981',
      level: '-18 dB a -24 dB (Volumen 8-15%)',
      desc: 'Elige ritmos Lo-Fi o Phonk instrumental sin voces que distraigan. Reduce el volumen en los momentos donde hablas con mayor seriedad.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Printable Area (visible only on print) */}
      <div className="hidden print:block fixed inset-0 bg-white z-[9999]">
        <SoundDesignVaultPrintTemplate />
      </div>

      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md print:hidden" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0C0D0E] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] print:hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FF7F07]/10 text-[#FF7F07] flex items-center justify-center border border-[#FF7F07]/20">
              <Volume2 size={20} />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-[#FF7F07] tracking-wider block">
                MEZCLA DE AUDIO // SOUND DESIGN
              </span>
              <h2 className="font-display font-bold text-xl text-white">
                Bóveda de Sound Design & Mezcla en 3 Capas
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
            El 50% de la experiencia audiovisual es el audio. Calibra tus 3 capas en CapCut con estos niveles exactos:
          </p>

          <div className="space-y-3">
            {layers.map((l, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <l.icon size={16} style={{ color: l.color }} />
                    <h4 className="font-display font-bold text-sm text-white">{l.title}</h4>
                  </div>
                  <span
                    className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md"
                    style={{ backgroundColor: `${l.color}15`, color: l.color }}
                  >
                    {l.level}
                  </span>
                </div>
                <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#8E8E93]">
            💡 Tip: Escucha tu video con audífonos y luego por el altavoz del teléfono antes de exportar.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white text-black font-mono text-xs font-bold hover:bg-white/90 transition-all cursor-pointer"
          >
            Calibrar Audio
          </button>
        </div>
      </div>
    </div>
  );
};
