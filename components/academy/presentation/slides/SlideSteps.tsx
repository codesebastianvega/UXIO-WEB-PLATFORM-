import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Maximize2, Award } from 'lucide-react';
import { CardDetailData } from '../SlideDetailModal';
import { useElementReveal } from '../hooks/useElementReveal';
import MagicDustHeading from '@/components/ui/MagicDustHeading';

interface SlideStepsProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
  onOpenDetail?: (data: CardDetailData) => void;
  revealedStep?: number;
}

export default function SlideSteps({
  slide,
  theme = 'light',
  onOpenDetail,
  revealedStep,
}: SlideStepsProps) {
  const isDark = theme === 'dark';
  const steps = slide.steps || [];

  const { getElementStyle } = useElementReveal({
    slideId: slide.id,
    totalElements: steps.length,
    initialRevealed: 1,
    autoRevealMs: slide.autoRevealMs || 6500,
    externalRevealedCount: revealedStep,
  });

  return (
    <div className="w-full h-full flex flex-col justify-center p-8 sm:p-12 lg:p-14 select-none space-y-6 overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between animate-element-in">
        <div className="space-y-2 max-w-3xl">
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
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-3.5 py-2 rounded-2xl border border-[#10B981]/20">
          <Award size={15} />
          <span>Certificación al Finalizar</span>
        </div>
      </div>

      {/* Steps 5-Column Grid */}
      {steps.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((st, idx) => (
            <div
              key={idx}
              style={getElementStyle(idx)}
              onClick={() =>
                onOpenDetail?.(
                  st.detailData || {
                    tag: `PASO ${st.number || `0${idx + 1}`} // ${st.title.toUpperCase()}`,
                    title: st.title,
                    subtitle: `Fase ${idx + 1} del proceso`,
                    description: st.desc,
                    imageCaption: `Módulo Práctico · Paso 0${idx + 1}`,
                    highlights: [st.desc],
                    actionTip: `Completa este paso para avanzar con la ejecución.`,
                  }
                )
              }
              className={`group p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-3 min-h-[220px] ${
                isDark
                  ? 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] hover:border-[#FE385B]/40 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 hover:shadow-2xl'
                  : 'bg-white hover:bg-white/95 border-black/[0.08] hover:border-[#FE385B]/40 text-[#111111] shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-2xl'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#FE385B] bg-[#FE385B]/10 px-2.5 py-0.5 rounded-lg">
                  {st.number || `0${idx + 1}`}
                </span>
                <Maximize2 size={12} className="text-[#8E8E93] opacity-50 group-hover:opacity-100 group-hover:text-[#FE385B]" />
              </div>

              <div className="space-y-1.5">
                <h3
                  className={`font-display font-bold text-sm sm:text-base ${
                    isDark ? 'text-white' : 'text-[#09090B]'
                  }`}
                >
                  {st.title}
                </h3>
                <p
                  className={`font-sans text-xs leading-relaxed line-clamp-3 ${
                    isDark ? 'text-[#A1A1AA]' : 'text-[#666666]'
                  }`}
                >
                  {st.desc}
                </p>
              </div>

              <div className="text-[10px] font-mono text-[#FE385B] opacity-0 group-hover:opacity-100 transition-opacity border-t border-black/[0.04] dark:border-white/[0.04] pt-1">
                <span>Ver módulo & foto ↗</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
