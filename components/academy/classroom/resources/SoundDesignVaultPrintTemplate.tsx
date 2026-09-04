import React from 'react';
import { Volume2, Music, Mic, Zap, ArrowRight } from 'lucide-react';

export const SoundDesignVaultPrintTemplate: React.FC = () => {
  const sfxList = [
    {
      category: '1. EFECTOS DE TRANSICIÓN & CORTE (WHOOSH & SWOOSH)',
      color: '#FE385B',
      level: '-6 dB a -8 dB',
      items: [
        { name: 'Fast Whoosh:', use: 'Acompaña cada corte a B-roll o zoom digital de plano.' },
        { name: 'Deep Bass Drop (Impact):', use: 'Subraya el gancho inicial o un dato alarmante en el segundo 0.' },
      ],
    },
    {
      category: '2. EFECTOS DE TEXTO & GRÁFICOS (POPS & CLICKS)',
      color: '#FF7F07',
      level: '-10 dB a -12 dB',
      items: [
        { name: 'Mechanical Keyboard Click:', use: 'Suena cuando aparecen títulos en pantalla o citas textuales.' },
        { name: 'Bubble Pop / Bell Ding:', use: 'Subraya la aparición de cifras de precio, porcentajes o checks.' },
      ],
    },
    {
      category: '3. MEZCLA DE AUDIO & NIVELES EN DECIBELES (dB)',
      color: '#10B981',
      level: 'Calibración Maestra',
      items: [
        { name: 'Voz Principal (Voz del Creador):', use: '-3 dB a -1 dB (La reina de la mezcla, siempre clara y al frente).' },
        { name: 'Música de Fondo (Background Music):', use: '-18 dB a -24 dB (Bajo la voz, nunca compite con las vocales).' },
        { name: 'Efectos de Sonido (SFX):', use: '-6 dB a -10 dB (Puntuales y en sincronía exacta con la animación).' },
      ],
    },
  ];

  return (
    <div className="bg-white text-black p-8 font-sans max-w-[800px] mx-auto space-y-6">
      {/* Header */}
      <div className="border-b-2 border-black pb-4 flex justify-between items-start">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF7F07] uppercase block">
            UXIO ACADEMY · CREATOR LAB · GUÍA DE AUDIO
          </span>
          <h1 className="text-2xl font-black tracking-tight text-black mt-1">
            Bóveda de Sound Design & Mezcla de 3 Capas
          </h1>
          <p className="text-xs text-[#555555] mt-0.5">
            Calibración de decibeles y catálogo de efectos de sonido libres de derechos para video vertical.
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#FF7F07]/10 text-[#FF7F07] flex items-center justify-center border border-[#FF7F07]/20 shrink-0">
          <Volume2 size={20} />
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {sfxList.map((cat, idx) => (
          <div key={idx} className="border border-black/15 rounded-xl p-4 space-y-2.5 bg-black/[0.01]">
            <div className="flex items-center justify-between border-b border-black/10 pb-1.5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-black">
                {cat.category}
              </h3>
              <span className="font-mono text-[10px] font-semibold text-[#FF7F07]">{cat.level}</span>
            </div>

            <div className="space-y-2">
              {cat.items.map((it, iIdx) => (
                <div key={iIdx} className="p-2 rounded-lg bg-white border border-black/10 space-y-0.5">
                  <span className="font-mono text-[11px] font-bold text-black flex items-center gap-1">
                    <ArrowRight size={10} style={{ color: cat.color }} />
                    {it.name}
                  </span>
                  <p className="text-[11px] text-[#444444] pl-3 leading-snug">{it.use}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-black/15 pt-3 flex justify-between items-center text-[10px] font-mono text-[#666666]">
        <span>// CREATOR LAB M04 · SOUND DESIGN MASTER</span>
        <span>Aplica la regla de oro: Si el espectador nota la música, está demasiado alta</span>
      </div>
    </div>
  );
};
