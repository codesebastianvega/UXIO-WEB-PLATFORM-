import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Sparkles, Video, Users, TrendingUp } from 'lucide-react';

interface SlideTitleProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
}

export default function SlideTitle({ slide, theme = 'light' }: SlideTitleProps) {
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full flex items-center justify-between p-8 sm:p-12 lg:p-16 select-none relative gap-8">
      {/* Left Column: Hero Narrative */}
      <div className="flex-1 max-w-2xl space-y-6 relative z-10">
        <div className="flex items-center gap-2.5">
          {slide.tag && (
            <span className="font-mono text-xs text-[#FE385B] uppercase tracking-widest font-bold bg-[#FE385B]/10 px-3.5 py-1.5 rounded-xl border border-[#FE385B]/20 inline-block shadow-2xs">
              {slide.tag}
            </span>
          )}
          <span className="font-mono text-xs text-[#10B981] uppercase tracking-wider font-bold bg-[#10B981]/10 px-3 py-1.5 rounded-xl border border-[#10B981]/20">
            En Vivo & 120 FPS
          </span>
        </div>

        <div className="space-y-3">
          <h1
            className={`font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] ${
              isDark ? 'text-white' : 'text-[#09090B]'
            }`}
          >
            {slide.title}
          </h1>

          {slide.subtitle && (
            <p
              className={`font-sans text-base sm:text-lg lg:text-xl leading-relaxed font-medium ${
                isDark ? 'text-[#A1A1AA]' : 'text-[#52525B]'
              }`}
            >
              {slide.subtitle}
            </p>
          )}
        </div>

        {slide.highlight && (
          <div
            className={`inline-flex items-center gap-2.5 font-mono text-xs px-4 py-2 rounded-2xl border shadow-xs transition-all ${
              isDark
                ? 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/25'
                : 'text-[#059669] bg-[#10B981]/10 border-[#10B981]/30'
            }`}
          >
            <Sparkles size={14} className="text-[#10B981]" />
            <span className="font-bold">{slide.highlight}</span>
          </div>
        )}
      </div>

      {/* Right Column: Hero Visual Glass Card */}
      <div className="hidden md:flex flex-col gap-3.5 w-80 shrink-0 relative z-10">
        <div
          className={`p-6 rounded-3xl border space-y-4 shadow-xl backdrop-blur-2xl ${
            isDark
              ? 'bg-[#121214]/80 border-white/[0.1] text-white shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
              : 'bg-white/90 border-black/[0.08] text-[#111111] shadow-[0_15px_40px_rgba(0,0,0,0.06)]'
          }`}
        >
          <div className="flex items-center justify-between border-b pb-3 border-black/[0.06] dark:border-white/[0.06]">
            <span className="font-mono text-[10px] uppercase font-bold text-[#8E8E93]">
              // PROGRAMA EJECUTIVO
            </span>
            <span className="font-mono text-[10px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full border border-[#10B981]/20">
              COHORTE 01
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FE385B]/10 text-[#FE385B] flex items-center justify-center border border-[#FE385B]/20">
                <Video size={16} />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs">Banco de 30 Clips</h4>
                <p className="text-[11px] text-[#8E8E93]">B-roll grabado con celular</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FF7F07]/10 text-[#FF7F07] flex items-center justify-center border border-[#FF7F07]/20">
                <Users size={16} />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs">5 Semanas de Acompañamiento</h4>
                <p className="text-[11px] text-[#8E8E93]">Sesiones en vivo y feedback</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center border border-[#10B981]/20">
                <TrendingUp size={16} />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs">Conversión Directa</h4>
                <p className="text-[11px] text-[#8E8E93]">Embudos hacia WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
