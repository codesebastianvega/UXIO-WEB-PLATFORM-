import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Lightbulb } from 'lucide-react';

export default function SlideExample({ slide }: { slide: SlideData }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16 select-none space-y-6 overflow-hidden">
      <div className="space-y-2">
        {slide.tag && (
          <span className="font-mono text-xs text-[#FF7F07] uppercase tracking-widest font-bold bg-[#FF7F07]/10 px-3 py-1 rounded-md border border-[#FF7F07]/20 inline-block">
            {slide.tag}
          </span>
        )}
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
          {slide.title}
        </h2>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] my-auto space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-[#FF7F07]">
          <Lightbulb size={18} />
          <span className="font-mono text-xs uppercase font-bold tracking-wider">
            Caso de Estudio
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
