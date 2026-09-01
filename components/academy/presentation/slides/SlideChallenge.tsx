import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Award, CheckCircle, Maximize2, FileText, Send } from 'lucide-react';
import { CardDetailData } from '../SlideDetailModal';
import { useElementReveal } from '../hooks/useElementReveal';
import MagicDustHeading from '@/components/ui/MagicDustHeading';

interface SlideChallengeProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
  onOpenDetail?: (data: CardDetailData) => void;
  revealedStep?: number;
}

export default function SlideChallenge({
  slide,
  theme = 'light',
  onOpenDetail,
  revealedStep,
}: SlideChallengeProps) {
  const challenge = slide.challengeData;
  const isDark = theme === 'dark';

  const { getElementStyle } = useElementReveal({
    slideId: slide.id,
    totalElements: challenge ? (challenge.criteria?.length ? 3 : 2) : 0,
    initialRevealed: 1,
    autoRevealMs: slide.autoRevealMs || 5000,
    externalRevealedCount: revealedStep,
  });

  return (
    <div className="w-full h-full flex flex-col justify-center p-8 sm:p-12 lg:p-14 select-none space-y-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between animate-element-in">
        <div className="space-y-2 max-w-3xl">
          {slide.tag && (
            <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest font-bold bg-[#10B981]/10 px-3.5 py-1.5 rounded-xl border border-[#10B981]/25 inline-block shadow-2xs">
              {slide.tag}
            </span>
          )}
          <MagicDustHeading
            text={slide.title}
            as="h2"
            keyTrigger={slide.id}
            staggerMs={12}
            initialDelayMs={60}
            glowColor={isDark ? 'rgba(16, 185, 129, 0.9)' : 'rgba(16, 185, 129, 0.4)'}
            className={`font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-[#09090B]'
            }`}
          />
        </div>
        <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center border border-[#10B981]/25 shadow-xs">
          <Award size={24} />
        </div>
      </div>

      {/* Challenge Data Grid */}
      {challenge && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            style={getElementStyle(0)}
            onClick={() =>
              onOpenDetail?.({
                tag: 'PASO 1 // INSTRUCCIÓN',
                title: '¿Qué debes hacer?',
                description: challenge.whatToDo,
                actionTip: 'Dedica 20-30 minutos a ejecutar esta pauta sin buscar perfección en la primera toma.',
              })
            }
            className={`group p-6 rounded-3xl border transition-all duration-300 cursor-pointer space-y-3 min-h-[160px] flex flex-col justify-between ${
              isDark
                ? 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] hover:border-[#10B981]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1'
                : 'bg-white hover:bg-white/95 border-black/[0.08] hover:border-[#10B981]/40 shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#10B981]">
                  <FileText size={16} />
                  <span className="font-mono text-xs uppercase font-bold tracking-wider">
                    ¿Qué debes hacer?
                  </span>
                </div>
                <Maximize2 size={12} className="text-[#8E8E93] group-hover:text-[#10B981]" />
              </div>
              <p
                className={`font-sans text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-white' : 'text-[#222222]'
                }`}
              >
                {challenge.whatToDo}
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity">
              Ver detalles ↗
            </span>
          </div>

          <div
            style={getElementStyle(1)}
            onClick={() =>
              onOpenDetail?.({
                tag: 'PASO 2 // ENTREGABLE',
                title: '¿Qué debes entregar?',
                description: challenge.whatToDeliver,
                actionTip: 'Recuerda que la entrega se realiza pegando el enlace público en la plataforma del aula.',
              })
            }
            className={`group p-6 rounded-3xl border transition-all duration-300 cursor-pointer space-y-3 min-h-[160px] flex flex-col justify-between ${
              isDark
                ? 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] hover:border-[#FF7F07]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1'
                : 'bg-white hover:bg-white/95 border-black/[0.08] hover:border-[#FF7F07]/40 shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#FF7F07]">
                  <Send size={16} />
                  <span className="font-mono text-xs uppercase font-bold tracking-wider">
                    ¿Qué debes entregar?
                  </span>
                </div>
                <Maximize2 size={12} className="text-[#8E8E93] group-hover:text-[#FF7F07]" />
              </div>
              <p
                className={`font-sans text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-white' : 'text-[#222222]'
                }`}
              >
                {challenge.whatToDeliver}
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#FF7F07] opacity-0 group-hover:opacity-100 transition-opacity">
              Ver formatos de enlace ↗
            </span>
          </div>

          {challenge.criteria && challenge.criteria.length > 0 && (
            <div
              style={getElementStyle(2)}
              className={`sm:col-span-2 p-5 rounded-3xl border space-y-2.5 ${
                isDark
                  ? 'bg-[#10B981]/[0.05] border-[#10B981]/25'
                  : 'bg-[#10B981]/[0.06] border-[#10B981]/30 shadow-2xs'
              }`}
            >
              <span className="font-mono text-xs text-[#059669] dark:text-[#10B981] uppercase font-bold tracking-wider block">
                // Rúbrica Oficial de Evaluación
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {challenge.criteria.map((cr, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 text-xs font-sans p-2.5 rounded-xl border ${
                      isDark
                        ? 'bg-black/40 border-white/[0.08] text-white'
                        : 'bg-white/90 border-black/[0.06] text-[#111111]'
                    }`}
                  >
                    <CheckCircle size={14} className="text-[#10B981] shrink-0" />
                    <span className="truncate font-medium">{cr}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
