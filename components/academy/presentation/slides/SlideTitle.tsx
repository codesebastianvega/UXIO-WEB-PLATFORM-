import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Sparkles, Video, Users, TrendingUp } from 'lucide-react';

import MagicDustHeading from '@/components/ui/MagicDustHeading';

interface SlideTitleProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
  lang?: string;
}

export default function SlideTitle({ slide, theme = 'light', lang = 'es' }: SlideTitleProps) {
  const isDark = theme === 'dark';
  const isEs = lang === 'es';

  return (
    <div className="w-full h-full flex items-center justify-between p-8 sm:p-12 lg:p-16 select-none relative gap-8">
      {/* Left Column: Hero Narrative */}
      <div className="flex-1 max-w-2xl space-y-6 relative z-10 animate-element-in">
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
          <MagicDustHeading
            text={slide.title}
            as="h1"
            keyTrigger={slide.id}
            staggerMs={14}
            initialDelayMs={80}
            glowColor={isDark ? 'rgba(254, 56, 91, 0.9)' : 'rgba(254, 56, 91, 0.5)'}
            className={`font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] ${
              isDark ? 'text-white' : 'text-[#09090B]'
            }`}
          />

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

      {/* Right Column: Hero Visual Glass Card (Dynamic) */}
      <div
        className="hidden md:flex flex-col gap-3.5 w-80 shrink-0 relative z-10 animate-element-in"
        style={{ animationDelay: '140ms' }}
      >
        <div
          className={`p-5 rounded-3xl border space-y-3.5 shadow-xl backdrop-blur-2xl ${
            isDark
              ? 'bg-[#121214]/80 border-white/[0.1] text-white shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
              : 'bg-white/90 border-black/[0.08] text-[#111111] shadow-[0_15px_40px_rgba(0,0,0,0.06)]'
          }`}
        >
          <div className="flex items-center justify-between border-b pb-2.5 border-black/[0.06] dark:border-white/[0.06]">
            <span className="font-mono text-[10px] uppercase font-bold text-[#8E8E93]">
              {slide.titleCard?.tag || (isEs ? '// TEMAS CLAVE' : '// KEY TAKEAWAYS')}
            </span>
            <span className="font-mono text-[10px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full border border-[#10B981]/20">
              {slide.titleCard?.badge || (isEs ? 'MICROCLASE' : 'LESSON')}
            </span>
          </div>

          <div className="space-y-2.5">
            {(slide.titleCard?.items || [
              { title: isEs ? '100% Práctico' : '100% Actionable', desc: isEs ? 'Metodología aplicada a tu negocio' : 'Applied to your real business', color: '#FE385B' },
              { title: isEs ? 'Fórmulas & Ganchos' : 'Formulas & Hooks', desc: isEs ? 'Estructuras listas para grabar' : 'Ready to film frameworks', color: '#FF7F07' },
              { title: isEs ? 'Conversión a Ventas' : 'Sales Conversion', desc: isEs ? 'Cierre directo hacia WhatsApp' : 'Direct WhatsApp acquisition', color: '#10B981' },
            ]).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${item.color || '#FE385B'}15`,
                    borderColor: `${item.color || '#FE385B'}30`,
                    color: item.color || '#FE385B',
                  }}
                >
                  <Sparkles size={14} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-xs truncate">{item.title}</h4>
                  {item.desc && <p className="text-[10px] text-[#8E8E93] truncate">{item.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
