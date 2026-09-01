import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Sparkles, Maximize2, Smartphone, Radio, ArrowUpRight } from 'lucide-react';
import { CardDetailData } from '../SlideDetailModal';
import { useElementReveal } from '../hooks/useElementReveal';
import MagicDustHeading from '@/components/ui/MagicDustHeading';

interface SlideConceptProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
  onOpenDetail?: (data: CardDetailData) => void;
  revealedStep?: number;
}

export default function SlideConcept({
  slide,
  theme = 'light',
  onOpenDetail,
  revealedStep,
}: SlideConceptProps) {
  const isDark = theme === 'dark';
  const totalPoints = slide.points?.length || 0;

  const { getElementStyle } = useElementReveal({
    slideId: slide.id,
    totalElements: totalPoints,
    initialRevealed: 1,
    autoRevealMs: slide.autoRevealMs || 6500,
    externalRevealedCount: revealedStep,
  });


  const icons = [
    <Smartphone key="1" size={18} className="text-[#FE385B]" />,
    <Radio key="2" size={18} className="text-[#FF7F07]" />,
    <ArrowUpRight key="3" size={18} className="text-[#10B981]" />,
  ];

  const tints = [
    'hover:border-[#FE385B]/40',
    'hover:border-[#FF7F07]/40',
    'hover:border-[#10B981]/40',
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center p-8 sm:p-12 lg:p-14 select-none space-y-6 overflow-hidden">
      {/* Top Header Group */}
      <div className="space-y-2 max-w-3xl animate-element-in">
        {slide.tag && (
          <span className="font-mono text-xs text-[#FE385B] uppercase tracking-widest font-bold bg-[#FE385B]/10 px-3.5 py-1.5 rounded-xl border border-[#FE385B]/20 inline-block shadow-2xs">
            {slide.tag}
          </span>
        )}
        <MagicDustHeading
          text={slide.title}
          as="h2"
          keyTrigger={slide.id}
          staggerMs={12}
          initialDelayMs={60}
          glowColor={isDark ? 'rgba(254, 56, 91, 0.9)' : 'rgba(254, 56, 91, 0.4)'}
          className={`font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-[#09090B]'
          }`}
        />
        {slide.subtitle && (
          <p
            className={`font-sans text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-[#A1A1AA]' : 'text-[#52525B]'
            }`}
          >
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Points Grid with Reveal */}
      {slide.points && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {slide.points.map((pt, idx) => (
            <div
              key={idx}
              style={getElementStyle(idx)}
              onClick={() =>
                onOpenDetail?.(
                  pt.detailData || {
                    tag: `0${idx + 1} // ${slide.tag || 'CONCEPTO'}`,
                    title: pt.label,
                    description: pt.text,
                    imageCaption: `Principio Clave · 0${idx + 1}`,
                    highlights: [pt.text],
                    actionTip: `Aplica ${pt.label} en tu contenido de inmediato.`,
                  }
                )
              }
              className={`group relative p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 min-h-[220px] ${
                isDark
                  ? 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 hover:shadow-2xl'
                  : 'bg-white hover:bg-white/95 border-black/[0.08] text-[#111111] shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-2xl'
              } ${tints[idx % tints.length]}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.06] flex items-center justify-center">
                    {icons[idx % icons.length]}
                  </div>
                  <span className="font-mono text-xs text-[#8E8E93] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <Maximize2 size={13} className="text-[#8E8E93] opacity-50 group-hover:opacity-100 group-hover:text-[#FE385B] transition-all" />
              </div>

              <div className="space-y-1.5">
                <h3
                  className={`font-display font-bold text-base sm:text-lg ${
                    isDark ? 'text-white' : 'text-[#09090B]'
                  }`}
                >
                  {pt.label}
                </h3>
                <p
                  className={`font-sans text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-[#A1A1AA]' : 'text-[#666666]'
                  }`}
                >
                  {pt.text}
                </p>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-black/[0.04] dark:border-white/[0.04] text-[11px] font-mono text-[#FE385B]">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver con imagen & tips ↗
                </span>
                <Sparkles size={12} className="opacity-40 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
