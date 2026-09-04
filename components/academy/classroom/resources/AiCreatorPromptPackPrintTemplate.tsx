import React from 'react';
import { Bot, Sparkles, Terminal, Copy, ArrowRight } from 'lucide-react';

export const AiCreatorPromptPackPrintTemplate: React.FC = () => {
  const promptList = [
    {
      category: '1. GENERADOR DE 20 GANCHOS DE FRICCIÓN',
      tag: 'CLAUDE / CHATGPT',
      color: '#FE385B',
      prompt: `Actúa como un estratega de contenido comercial para Reels y TikTok. Mi negocio es [Describe tu negocio] y mi cliente ideal es [Describe tu cliente]. Genera 20 ganchos de 1 frase atacando los errores más costosos y frustraciones que sufre mi cliente. Usa la estructura: 'El error al [Acción] que te cuesta [Dolor]'.`,
    },
    {
      category: '2. REFACTORIZADOR DE GUIONES EN FÓRMULA PAS',
      tag: 'ESTRUCTURA DE 45 SEGUNDOS',
      color: '#FF7F07',
      prompt: `Tengo esta idea en crudo: '[Pega tu idea o borrador]'. Conviértela en un guion de 45 segundos dividido en 4 actos: Acto 1 (Hook 0-3s), Acto 2 (Problema 3-15s), Acto 3 (Solución y tomas de B-roll 15-35s) y Acto 4 (CTA directo a WhatsApp con palabra clave 35-45s).`,
    },
    {
      category: '3. MOTOR DE REPURPOSING 1 A 5',
      tag: 'MULTIPLICADOR MULTICANALES',
      color: '#10B981',
      prompt: `A partir de este guion de video de 45s: '[Pega tu guion final]'. Genera: 1) Un carrusel de 7 diapositivas con portada y tabla resumen, 2) Una secuencia de 5 Stories con encuesta, y 3) Un mensaje de difusión para lista de WhatsApp.`,
    },
  ];

  return (
    <div className="bg-white text-black p-8 font-sans max-w-[800px] mx-auto space-y-6">
      {/* Header */}
      <div className="border-b-2 border-black pb-4 flex justify-between items-start">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#10B981] uppercase block">
            UXIO ACADEMY · CREATOR LAB · AI PROMPTS
          </span>
          <h1 className="text-2xl font-black tracking-tight text-black mt-1">
            Mega-Pack de Prompts de IA para Creadores
          </h1>
          <p className="text-xs text-[#555555] mt-0.5">
            Fórmulas de ingeniería de prompts probadas para investigación de audiencia, guionización y repurposing.
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center border border-[#10B981]/20 shrink-0">
          <Bot size={20} />
        </div>
      </div>

      {/* Prompts */}
      <div className="space-y-4">
        {promptList.map((p, idx) => (
          <div key={idx} className="border border-black/15 rounded-xl p-4 space-y-2 bg-black/[0.01]">
            <div className="flex items-center justify-between border-b border-black/10 pb-1.5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-black">
                {p.category}
              </h3>
              <span className="font-mono text-[10px] font-semibold text-[#10B981]">{p.tag}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-black/10 text-[11px] font-mono text-[#333333] leading-relaxed whitespace-pre-wrap">
              {p.prompt}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-black/15 pt-3 flex justify-between items-center text-[10px] font-mono text-[#666666]">
        <span>// CREATOR LAB M04 · AI REPURPOSING</span>
        <span>Reemplaza las variables entre corchetes con los datos específicos de tu marca</span>
      </div>
    </div>
  );
};
