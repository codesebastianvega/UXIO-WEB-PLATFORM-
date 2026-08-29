import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Sparkles } from 'lucide-react';

export default function SlideConcept({ slide }: { slide: SlideData }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16 select-none space-y-6 overflow-hidden">
      {/* Top Header */}
      <div className="space-y-2">
        {slide.tag && (
          <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest font-bold bg-[#00F0FF]/10 px-3 py-1 rounded-md border border-[#00F0FF]/20 inline-block">
            {slide.tag}
          </span>
        )}
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="font-sans text-xs sm:text-base text-[#8E8E93] max-w-2xl">
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Points Grid */}
      {slide.points && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-auto">
          {slide.points.map((pt, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#00F0FF]/30 transition-colors flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#00F0FF] font-bold">
                  0{idx + 1}
                </span>
                <Sparkles size={14} className="text-[#00F0FF]/60" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-sm sm:text-base text-white">
                  {pt.label}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                  {pt.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Note */}
      {slide.footerNote && (
        <p className="font-mono text-[11px] text-[#8E8E93] border-t border-white/[0.06] pt-3">
          // {slide.footerNote}
        </p>
      )}
    </div>
  );
}
