import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { BookOpen } from 'lucide-react';

interface SlideSummaryProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
}

export default function SlideSummary({ slide, theme = 'light' }: SlideSummaryProps) {
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-14 select-none space-y-6 overflow-hidden">
      <div className="space-y-2">
        {slide.tag && (
          <span className="font-mono text-[11px] sm:text-xs text-[#FE385B] uppercase tracking-widest font-bold bg-[#FE385B]/10 px-3.5 py-1.5 rounded-xl border border-[#FE385B]/20 inline-block shadow-2xs">
            {slide.tag}
          </span>
        )}
        <h2
          className={`font-display font-extrabold text-2xl sm:text-4xl tracking-tight ${
            isDark ? 'text-white' : 'text-[#09090B]'
          }`}
        >
          {slide.title}
        </h2>
      </div>

      <div
        className={`p-6 sm:p-8 rounded-3xl border my-auto space-y-4 max-w-3xl ${
          isDark
            ? 'bg-white/[0.03] border-white/[0.08] text-white'
            : 'bg-white border-black/[0.08] text-[#111111] shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
        }`}
      >
        <div className="flex items-center gap-2 text-[#FE385B]">
          <BookOpen size={18} />
          <span className="font-mono text-xs uppercase font-bold tracking-wider">
            Resumen Clave
          </span>
        </div>
        {slide.content && (
          <div
            className={`space-y-2 text-xs sm:text-base font-sans leading-relaxed ${
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
