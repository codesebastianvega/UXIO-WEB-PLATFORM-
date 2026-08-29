import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { HelpCircle } from 'lucide-react';

export default function SlideFallback({ slide }: { slide: SlideData }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-8 sm:p-14 lg:p-20 select-none space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-white/[0.05] text-[#8E8E93] flex items-center justify-center">
        <HelpCircle size={24} />
      </div>
      <h2 className="font-display font-bold text-xl text-white">
        {slide.title}
      </h2>
      <p className="font-mono text-xs text-[#8E8E93]">
        Slide Type: {slide.type}
      </p>
    </div>
  );
}
