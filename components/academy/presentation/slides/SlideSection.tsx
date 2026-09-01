import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import MagicDustHeading from '@/components/ui/MagicDustHeading';

interface SlideSectionProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
}

export default function SlideSection({ slide, theme = 'light' }: SlideSectionProps) {
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-6 sm:p-12 lg:p-16 select-none space-y-6">
      {slide.tag && (
        <div className="animate-element-in">
          <span className="font-mono text-xs sm:text-sm text-[#FF7F07] uppercase tracking-widest font-bold bg-[#FF7F07]/10 px-4 py-1.5 rounded-xl border border-[#FF7F07]/25 shadow-2xs">
            {slide.tag}
          </span>
        </div>
      )}

      <MagicDustHeading
        text={slide.title}
        as="h2"
        keyTrigger={slide.id}
        staggerMs={12}
        initialDelayMs={80}
        glowColor={isDark ? 'rgba(255, 127, 7, 0.9)' : 'rgba(255, 127, 7, 0.4)'}
        className={`font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight max-w-4xl leading-tight ${
          isDark ? 'text-white' : 'text-[#09090B]'
        }`}
      />

      {slide.subtitle && (
        <p
          className={`animate-element-in font-sans text-base sm:text-xl max-w-2xl leading-relaxed ${
            isDark ? 'text-[#A1A1AA]' : 'text-[#52525B]'
          }`}
          style={{ animationDelay: '160ms' }}
        >
          {slide.subtitle}
        </p>
      )}
    </div>
  );
}
