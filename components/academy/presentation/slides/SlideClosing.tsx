import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { MessageSquare } from 'lucide-react';

interface SlideClosingProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
}

export default function SlideClosing({ slide, theme = 'light' }: SlideClosingProps) {
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full flex flex-col justify-between items-center text-center p-6 sm:p-12 lg:p-16 select-none space-y-6">
      <div>
        {slide.tag && (
          <span className="font-mono text-[11px] sm:text-xs text-[#FE385B] uppercase tracking-widest font-bold bg-[#FE385B]/10 px-4 py-1.5 rounded-xl border border-[#FE385B]/20 inline-block shadow-2xs">
            {slide.tag}
          </span>
        )}
      </div>

      <div className="space-y-4 max-w-3xl my-auto">
        <h2
          className={`font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-[#09090B]'
          }`}
        >
          {slide.title}
        </h2>

        {slide.subtitle && (
          <p
            className={`font-sans text-base sm:text-xl max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-[#A1A1AA]' : 'text-[#52525B]'
            }`}
          >
            {slide.subtitle}
          </p>
        )}
      </div>

      <div>
        {slide.highlight && (
          <div
            className={`inline-flex items-center gap-2 font-mono text-xs sm:text-sm px-5 py-2.5 rounded-2xl border shadow-xs ${
              isDark
                ? 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/25'
                : 'text-[#059669] bg-[#10B981]/10 border-[#10B981]/30'
            }`}
          >
            <MessageSquare size={14} className="text-[#10B981]" />
            <span className="font-bold">{slide.highlight}</span>
          </div>
        )}
      </div>
    </div>
  );
}
