import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { BookOpen } from 'lucide-react';

export default function SlideSummary({ slide }: { slide: SlideData }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16 select-none space-y-6 overflow-hidden">
      <div className="space-y-2">
        {slide.tag && (
          <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest font-bold bg-[#00F0FF]/10 px-3 py-1 rounded-md border border-[#00F0FF]/20 inline-block">
            {slide.tag}
          </span>
        )}
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
          {slide.title}
        </h2>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] my-auto space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-[#00F0FF]">
          <BookOpen size={18} />
          <span className="font-mono text-xs uppercase font-bold tracking-wider">
            Resumen Clave
          </span>
        </div>
        {slide.content && (
          <div className="space-y-2 text-xs sm:text-base font-sans text-white leading-relaxed">
            {slide.content.map((c, i) => (
              <p key={i}>{c}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
