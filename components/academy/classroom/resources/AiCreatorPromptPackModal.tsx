import React, { useState } from 'react';
import { X, Bot, Printer, Copy, Check, Sparkles } from 'lucide-react';
import { AiCreatorPromptPackPrintTemplate } from './AiCreatorPromptPackPrintTemplate';

interface AiCreatorPromptPackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiCreatorPromptPackModal: React.FC<AiCreatorPromptPackModalProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const prompts = [
    {
      id: 'p1',
      title: 'Generador de 20 Ganchos de Fricción',
      tag: 'Ganchos',
      color: '#FE385B',
      content: `Actúa como un estratega de contenido comercial para Reels y TikTok. Mi negocio es [Describe tu negocio] y mi cliente ideal es [Describe tu cliente]. Genera 20 ganchos de 1 frase atacando los errores más costosos y frustraciones que sufre mi cliente. Usa la estructura: 'El error al [Acción] que te cuesta [Dolor]'.`,
    },
    {
      id: 'p2',
      title: 'Transformador de Guiones PAS (45s)',
      tag: 'Guiones',
      color: '#FF7F07',
      content: `Tengo esta idea en crudo: '[Pega tu idea o borrador]'. Conviértela en un guion de 45 segundos dividido en 4 actos: Acto 1 (Hook 0-3s), Acto 2 (Problema 3-15s), Acto 3 (Solución y tomas de B-roll 15-35s) y Acto 4 (CTA directo a WhatsApp con palabra clave 35-45s).`,
    },
    {
      id: 'p3',
      title: 'Motor de Repurposing 1 a 5 Formatos',
      tag: 'Repurposing',
      color: '#10B981',
      content: `A partir de este guion de video de 45s: '[Pega tu guion final]'. Genera: 1) Un carrusel de 7 diapositivas con portada y tabla resumen, 2) Una secuencia de 5 Stories con encuesta, y 3) Un mensaje de difusión para lista de WhatsApp.`,
    },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Printable Area (visible only on print) */}
      <div className="hidden print:block fixed inset-0 bg-white z-[9999]">
        <AiCreatorPromptPackPrintTemplate />
      </div>

      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md print:hidden" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0C0D0E] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] print:hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center border border-[#10B981]/20">
              <Bot size={20} />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-[#10B981] tracking-wider block">
                INGENIERÍA DE PROMPTS // AI CREATOR
              </span>
              <h2 className="font-display font-bold text-xl text-white">
                Mega-Pack de Prompts de IA para Creadores
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
            Copia estos prompts directamente en ChatGPT, Claude o tu modelo favorito para acelerar tu proceso creativo:
          </p>

          <div className="space-y-3">
            {prompts.map(p => (
              <div
                key={p.id}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: `${p.color}15`, color: p.color }}
                    >
                      {p.tag}
                    </span>
                    <h4 className="font-display font-bold text-sm text-white">{p.title}</h4>
                  </div>
                  <button
                    onClick={() => handleCopy(p.content, p.id)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-[#E5E5E7] transition-colors cursor-pointer"
                  >
                    {copiedId === p.id ? <Check size={12} className="text-[#10B981]" /> : <Copy size={12} />}
                    <span>{copiedId === p.id ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-black/50 border border-white/[0.04] text-[11px] font-mono text-[#CCCCCC] whitespace-pre-wrap leading-relaxed">
                  {p.content}
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#8E8E93]">
            💡 Tip: Da contexto específico de tu nicho para respuestas 10x más precisas.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white text-black font-mono text-xs font-bold hover:bg-white/90 transition-all cursor-pointer"
          >
            Usar Prompts
          </button>
        </div>
      </div>
    </div>
  );
};
