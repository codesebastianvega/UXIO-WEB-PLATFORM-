import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { X, Check } from 'lucide-react';

export default function SlideComparison({ slide }: { slide: SlideData }) {
  const comparison = slide.comparison;

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16 select-none space-y-6 overflow-hidden">
      {/* Header */}
      <div className="space-y-2">
        {slide.tag && (
          <span className="font-mono text-xs text-[#FE385B] uppercase tracking-widest font-bold bg-[#FE385B]/10 px-3 py-1 rounded-md border border-[#FE385B]/20 inline-block">
            {slide.tag}
          </span>
        )}
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
          {slide.title}
        </h2>
      </div>

      {/* Comparison Split Columns */}
      {comparison && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 my-auto">
          {/* Before / Problem */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06]">
              <div className="w-5 h-5 rounded-full bg-[#FE385B]/15 text-[#FE385B] flex items-center justify-center">
                <X size={13} />
              </div>
              <span className="font-display font-bold text-xs sm:text-sm text-[#FE385B] uppercase tracking-wider">
                {comparison.beforeLabel || 'Antes'}
              </span>
            </div>
            <ul className="space-y-2.5">
              {comparison.before.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-[#8E8E93] leading-relaxed">
                  <span className="text-[#FE385B] mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After / Solution */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#10B981]/[0.04] border border-[#10B981]/25 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#10B981]/20">
              <div className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center">
                <Check size={13} />
              </div>
              <span className="font-display font-bold text-xs sm:text-sm text-[#10B981] uppercase tracking-wider">
                {comparison.afterLabel || 'Después (UXIO)'}
              </span>
            </div>
            <ul className="space-y-2.5">
              {comparison.after.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-white leading-relaxed font-medium">
                  <span className="text-[#10B981] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
