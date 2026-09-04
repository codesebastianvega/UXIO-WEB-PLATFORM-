import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Lightbulb } from 'lucide-react';
import MagicDustHeading from '@/components/ui/MagicDustHeading';

interface SlideExampleProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
}

export default function SlideExample({ slide, theme = 'light' }: SlideExampleProps) {
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-14 select-none space-y-6 overflow-hidden">
      <div className="space-y-2 max-w-3xl">
        {slide.tag && (
          <span className="font-mono text-xs text-[#FF7F07] uppercase tracking-widest font-bold bg-[#FF7F07]/10 px-3.5 py-1.5 rounded-xl border border-[#FF7F07]/20 inline-block shadow-2xs">
            {slide.tag}
          </span>
        )}
        <MagicDustHeading
          text={slide.title}
          as="h2"
          keyTrigger={slide.id}
          staggerMs={12}
          initialDelayMs={60}
          glowColor={isDark ? 'rgba(255, 127, 7, 0.9)' : 'rgba(255, 127, 7, 0.4)'}
          className={`font-display font-extrabold text-2xl sm:text-4xl tracking-tight ${
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

      <div
        className={`p-6 sm:p-8 rounded-3xl border my-auto space-y-4 max-w-3xl ${
          isDark
            ? 'bg-white/[0.03] border-white/[0.08] text-white shadow-2xs'
            : 'bg-white border-black/[0.08] text-[#111111] shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
        }`}
      >
        <div className="flex items-center gap-2 text-[#FF7F07]">
          <Lightbulb size={18} />
          <span className="font-mono text-xs uppercase font-bold tracking-wider">
            Caso de Estudio
          </span>
        </div>
        {slide.content && (
          <div
            className={`space-y-2.5 text-xs sm:text-base font-sans leading-relaxed ${
              isDark ? 'text-[#E5E5E7]' : 'text-[#333333]'
            }`}
          >
            {slide.content.map((c, i) => (
              <p key={i}>{c}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
