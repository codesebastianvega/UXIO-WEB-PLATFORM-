import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';

interface SlideSectionProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
}

export default function SlideSection({ slide, theme = 'light' }: SlideSectionProps) {
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-6 sm:p-12 lg:p-16 select-none space-y-6">
      {slide.tag && (
        <span className="font-mono text-xs sm:text-sm text-[#FF7F07] uppercase tracking-widest font-bold bg-[#FF7F07]/10 px-4 py-1.5 rounded-xl border border-[#FF7F07]/25 shadow-2xs">
          {slide.tag}
        </span>
      )}

      <h2
        className={`font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight max-w-4xl leading-tight ${
          isDark ? 'text-white' : 'text-[#09090B]'
        }`}
      >
        {slide.title}
      </h2>

      {slide.subtitle && (
        <p
          className={`font-sans text-base sm:text-xl max-w-2xl leading-relaxed ${
            isDark ? 'text-[#A1A1AA]' : 'text-[#52525B]'
          }`}
        >
          {slide.subtitle}
        </p>
      )}
    </div>
  );
}
