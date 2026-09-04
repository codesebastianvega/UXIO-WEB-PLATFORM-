import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { CheckSquare, ShieldCheck } from 'lucide-react';
import MagicDustHeading from '@/components/ui/MagicDustHeading';

interface SlideChecklistProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
}

export default function SlideChecklist({ slide, theme = 'light' }: SlideChecklistProps) {
  const isDark = theme === 'dark';
  const items = slide.content || [];

  return (
    <div className="w-full h-full flex flex-col justify-center p-6 sm:p-10 lg:p-14 select-none space-y-6 overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between animate-element-in">
        <div className="space-y-2 max-w-3xl">
          {slide.tag && (
            <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest font-bold bg-[#10B981]/10 px-3.5 py-1.5 rounded-xl border border-[#10B981]/20 inline-block shadow-2xs">
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
          {slide.subtitle && (
            <p
              className={`font-sans text-xs sm:text-sm lg:text-base leading-relaxed ${
                isDark ? 'text-[#A1A1AA]' : 'text-[#52525B]'
              }`}
            >
              {slide.subtitle}
            </p>
          )}
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-3.5 py-2 rounded-2xl border border-[#10B981]/20">
          <ShieldCheck size={16} />
          <span>Criterios Oficiales</span>
        </div>
      </div>

      {/* Checklist Items */}
      {items.length > 0 && (
        <div className="space-y-2.5 max-w-3xl my-auto animate-element-in" style={{ animationDelay: '100ms' }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start sm:items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 group ${
                isDark
                  ? 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06] hover:border-[#10B981]/40 shadow-2xs'
                  : 'bg-white border-black/[0.08] hover:border-[#10B981]/40 shadow-[0_4px_16px_rgba(0,0,0,0.03)]'
              }`}
            >
              <div className="p-1.5 rounded-lg bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 shrink-0 mt-0.5 sm:mt-0 group-hover:scale-110 transition-transform">
                <CheckSquare size={16} />
              </div>
              <span
                className={`font-sans font-medium text-xs sm:text-sm lg:text-[15px] leading-relaxed flex-1 ${
                  isDark ? 'text-[#F3F4F6]' : 'text-[#1F2937]'
                }`}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
