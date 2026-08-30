import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { XCircle, CheckCircle2, Maximize2, Sparkles } from 'lucide-react';
import { CardDetailData } from '../SlideDetailModal';

interface SlideComparisonProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
  onOpenDetail?: (data: CardDetailData) => void;
}

export default function SlideComparison({
  slide,
  theme = 'light',
  onOpenDetail,
}: SlideComparisonProps) {
  const comp = slide.comparison;
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full flex flex-col justify-center p-8 sm:p-12 lg:p-14 select-none space-y-6 overflow-hidden">
      {/* Top Header */}
      <div className="space-y-2 max-w-3xl">
        {slide.tag && (
          <span className="font-mono text-xs text-[#FE385B] uppercase tracking-widest font-bold bg-[#FE385B]/10 px-3.5 py-1.5 rounded-xl border border-[#FE385B]/20 inline-block shadow-2xs">
            {slide.tag}
          </span>
        )}
        <h2
          className={`font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-[#09090B]'
          }`}
        >
          {slide.title}
        </h2>
      </div>

      {/* Comparison Grid */}
      {comp && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Before Card */}
          <div
            onClick={() =>
              onOpenDetail?.({
                tag: 'PATRÓN A EVITAR',
                title: comp.beforeLabel || 'Creador Amateur / Sin Sistema',
                description:
                  'Los errores comunes que reducen el alcance, confunden al espectador y limitan las conversiones.',
                highlights: comp.before,
                actionTip: 'Elimina estas fricciones de tu proceso para avanzar como un creador profesional.',
              })
            }
            className={`group p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 min-h-[260px] flex flex-col justify-between ${
              isDark
                ? 'bg-[#FE385B]/[0.03] hover:bg-[#FE385B]/[0.06] border-[#FE385B]/20 hover:border-[#FE385B]/40 shadow-[0_10px_30px_rgba(254,56,91,0.06)] hover:-translate-y-1.5 hover:shadow-xl'
                : 'bg-white hover:bg-white/95 border-[#FE385B]/25 hover:border-[#FE385B]/50 shadow-[0_12px_35px_rgba(254,56,91,0.04)] hover:-translate-y-1.5 hover:shadow-xl'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b pb-3 border-[#FE385B]/15">
                <div className="flex items-center gap-2 text-[#FE385B]">
                  <XCircle size={18} />
                  <h3 className="font-display font-bold text-sm sm:text-base uppercase tracking-wider">
                    {comp.beforeLabel || 'Antes / Sin Sistema'}
                  </h3>
                </div>
                <Maximize2 size={12} className="text-[#8E8E93] group-hover:text-[#FE385B]" />
              </div>

              <ul className="space-y-2 text-xs sm:text-sm font-sans">
                {comp.before.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#FE385B] font-mono mt-0.5">•</span>
                    <span className={isDark ? 'text-[#D4D4D8]' : 'text-[#52525B]'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#FE385B] pt-2 border-t border-[#FE385B]/10">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">Ver errores comunes ↗</span>
              <span>0% predictibilidad</span>
            </div>
          </div>

          {/* After Card */}
          <div
            onClick={() =>
              onOpenDetail?.({
                tag: 'ESTÁNDAR UXIO',
                title: comp.afterLabel || 'Creator Lab / Sistema UXIO',
                description:
                  'La metodología estructurada que garantiza consistencia, retención y monetización directa.',
                highlights: comp.after,
                actionTip: 'Aplica estos 4 principios desde tu primera sesión de grabación.',
              })
            }
            className={`group p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 min-h-[260px] flex flex-col justify-between ${
              isDark
                ? 'bg-[#10B981]/[0.03] hover:bg-[#10B981]/[0.06] border-[#10B981]/25 hover:border-[#10B981]/50 shadow-[0_10px_30px_rgba(16,185,129,0.06)] hover:-translate-y-1.5 hover:shadow-xl'
                : 'bg-white hover:bg-white/95 border-[#10B981]/30 hover:border-[#10B981]/60 shadow-[0_12px_35px_rgba(16,185,129,0.06)] hover:-translate-y-1.5 hover:shadow-xl'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b pb-3 border-[#10B981]/20">
                <div className="flex items-center gap-2 text-[#059669] dark:text-[#10B981]">
                  <CheckCircle2 size={18} />
                  <h3 className="font-display font-bold text-sm sm:text-base uppercase tracking-wider">
                    {comp.afterLabel || 'Creator Lab / Sistema UXIO'}
                  </h3>
                </div>
                <div className="flex items-center gap-1">
                  <Sparkles size={13} className="text-[#10B981]" />
                  <Maximize2 size={12} className="text-[#8E8E93] group-hover:text-[#10B981]" />
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm font-sans">
                {comp.after.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#10B981] font-mono mt-0.5">✓</span>
                    <span className={isDark ? 'text-white' : 'text-[#18181B]'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#059669] dark:text-[#10B981] pt-2 border-t border-[#10B981]/15">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">Ver metodología ↗</span>
              <span className="font-bold">Embudos y ventas</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
