import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { CheckSquare } from 'lucide-react';

export default function SlideChecklist({ slide }: { slide: SlideData }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16 select-none space-y-6 overflow-hidden">
      <div className="space-y-2">
        {slide.tag && (
          <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest font-bold bg-[#10B981]/10 px-3 py-1 rounded-md border border-[#10B981]/20 inline-block">
            {slide.tag}
          </span>
        )}
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
          {slide.title}
        </h2>
      </div>

      {slide.content && (
        <div className="space-y-3 my-auto max-w-2xl">
          {slide.content.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm font-sans text-white"
            >
              <CheckSquare size={16} className="text-[#10B981] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
