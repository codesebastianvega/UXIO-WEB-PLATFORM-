import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Award, CheckCircle, Maximize2, FileText, Send, Sparkles } from 'lucide-react';
import { CardDetailData } from '../SlideDetailModal';
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
}: SlideChallengeProps) {
  const challenge = slide.challengeData;
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full flex flex-col justify-center p-6 sm:p-10 lg:p-14 select-none space-y-5 overflow-hidden">
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
            className={`font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-[#09090B]'
            }`}
          />
        </div>
        <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center border border-[#10B981]/25 shadow-xs shrink-0">
          <Award size={24} />
        </div>
      </div>

      {/* Challenge Data Grid */}
      {challenge && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
          {/* Card 1: ¿Qué debes hacer? */}
          <div
            onClick={() =>
              onOpenDetail?.({
                tag: 'PASO 1 // INSTRUCCIÓN',
                title: '¿Qué debes hacer?',
                description: challenge.whatToDo,
                actionTip: 'Dedica 20-30 minutos a ejecutar esta pauta sin buscar perfección en la primera toma.',
              })
            }
            className={`group p-5 sm:p-6 rounded-3xl border transition-all duration-300 cursor-pointer space-y-3 flex flex-col justify-between ${
              isDark
                ? 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] hover:border-[#10B981]/40 shadow-2xs hover:-translate-y-1'
                : 'bg-white hover:bg-white/95 border-black/[0.08] hover:border-[#10B981]/40 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:-translate-y-1'
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
                <Maximize2 size={13} className="text-[#8E8E93] group-hover:text-[#10B981] transition-colors" />
              </div>
              <p
                className={`font-sans text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-[#E5E5E7]' : 'text-[#1F2937]'
                }`}
              >
                {challenge.whatToDo}
              </p>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-black/[0.04] dark:border-white/[0.04]">
              <span className="text-[11px] font-mono text-[#10B981] font-semibold">
                Ver detalle ampliado ↗
              </span>
              <span className="font-mono text-[10px] text-[#8E8E93]">Paso 01</span>
            </div>
          </div>

          {/* Card 2: ¿Qué debes entregar? */}
          <div
            onClick={() =>
              onOpenDetail?.({
                tag: 'PASO 2 // ENTREGABLE',
                title: '¿Qué debes entregar?',
                description: challenge.whatToDeliver,
                actionTip: 'Recuerda que la entrega se realiza pegando el enlace público en la plataforma del aula.',
              })
            }
            className={`group p-5 sm:p-6 rounded-3xl border transition-all duration-300 cursor-pointer space-y-3 flex flex-col justify-between ${
              isDark
                ? 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] hover:border-[#FF7F07]/40 shadow-2xs hover:-translate-y-1'
                : 'bg-white hover:bg-white/95 border-black/[0.08] hover:border-[#FF7F07]/40 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:-translate-y-1'
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
                <Maximize2 size={13} className="text-[#8E8E93] group-hover:text-[#FF7F07] transition-colors" />
              </div>
              <p
                className={`font-sans text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-[#E5E5E7]' : 'text-[#1F2937]'
                }`}
              >
                {challenge.whatToDeliver}
              </p>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-black/[0.04] dark:border-white/[0.04]">
              <span className="text-[11px] font-mono text-[#FF7F07] font-semibold">
                Ver formatos admitidos ↗
              </span>
              <span className="font-mono text-[10px] text-[#8E8E93]">Paso 02</span>
            </div>
          </div>

          {/* Card 3: Rúbrica de Criterios */}
          {challenge.criteria && challenge.criteria.length > 0 && (
            <div
              className={`sm:col-span-2 p-4 sm:p-5 rounded-3xl border space-y-3 ${
                isDark
                  ? 'bg-[#10B981]/[0.05] border-[#10B981]/25'
                  : 'bg-[#10B981]/[0.06] border-[#10B981]/30 shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#10B981]" />
                  <span className="font-mono text-xs text-[#059669] dark:text-[#10B981] uppercase font-bold tracking-wider">
                    Criterios Obligatorios para Calificación 5.0 ★
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded-md font-bold">
                  {challenge.criteria.length} REQUISITOS
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {challenge.criteria.map((cr, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2 text-xs font-sans p-3 rounded-2xl border ${
                      isDark
                        ? 'bg-black/50 border-white/[0.08] text-[#F3F4F6]'
                        : 'bg-white border-black/[0.06] text-[#111111] shadow-2xs'
                    }`}
                  >
                    <CheckCircle size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">{cr}</span>
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
