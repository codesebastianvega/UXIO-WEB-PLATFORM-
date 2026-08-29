import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Sparkles, MessageSquare } from 'lucide-react';

export default function SlideClosing({ slide }: { slide: SlideData }) {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center text-center p-8 sm:p-14 lg:p-20 select-none space-y-6">
      <div>
        {slide.tag && (
          <span className="font-mono text-xs sm:text-sm text-[#FE385B] uppercase tracking-widest font-bold bg-[#FE385B]/10 px-4 py-1.5 rounded-lg border border-[#FE385B]/20 inline-block">
            {slide.tag}
          </span>
        )}
      </div>

      <div className="space-y-4 max-w-3xl my-auto">
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          {slide.title}
        </h2>

        {slide.subtitle && (
          <p className="font-sans text-base sm:text-xl text-[#8E8E93] max-w-2xl mx-auto leading-relaxed">
            {slide.subtitle}
          </p>
        )}
      </div>

      <div>
        {slide.highlight && (
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#10B981] bg-[#10B981]/10 px-5 py-2.5 rounded-2xl border border-[#10B981]/25">
            <MessageSquare size={14} className="text-[#10B981]" />
            <span>{slide.highlight}</span>
          </div>
        )}
      </div>
    </div>
  );
}
