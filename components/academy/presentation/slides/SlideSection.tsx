import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';

export default function SlideSection({ slide }: { slide: SlideData }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-8 sm:p-14 lg:p-20 select-none space-y-6">
      {slide.tag && (
        <span className="font-mono text-xs sm:text-sm text-[#FFCC48] uppercase tracking-widest font-bold bg-[#FFCC48]/10 px-4 py-1.5 rounded-lg border border-[#FFCC48]/20">
          {slide.tag}
        </span>
      )}

      <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-4xl leading-tight">
        {slide.title}
      </h2>

      {slide.subtitle && (
        <p className="font-sans text-base sm:text-xl text-[#8E8E93] max-w-2xl leading-relaxed">
          {slide.subtitle}
        </p>
      )}
    </div>
  );
}
