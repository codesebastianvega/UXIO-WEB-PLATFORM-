import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';

export default function SlideTitle({ slide }: { slide: SlideData }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none">
      <div className="space-y-4">
        {slide.tag && (
          <span className="font-mono text-xs sm:text-sm text-[#FE385B] uppercase tracking-widest font-bold bg-[#FE385B]/10 px-3.5 py-1.5 rounded-lg border border-[#FE385B]/20 inline-block">
            {slide.tag}
          </span>
        )}
      </div>

      <div className="space-y-4 sm:space-y-6 max-w-4xl">
        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
          {slide.title}
        </h1>

        {slide.subtitle && (
          <p className="font-sans text-base sm:text-xl lg:text-2xl text-[#8E8E93] leading-relaxed max-w-3xl">
            {slide.subtitle}
          </p>
        )}
      </div>

      <div>
        {slide.highlight && (
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#00F0FF] bg-[#00F0FF]/10 px-4 py-2 rounded-xl border border-[#00F0FF]/20">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            <span>{slide.highlight}</span>
          </div>
        )}
      </div>
    </div>
  );
}
