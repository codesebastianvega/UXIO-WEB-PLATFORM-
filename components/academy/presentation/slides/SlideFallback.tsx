import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { HelpCircle } from 'lucide-react';

interface SlideFallbackProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
}

export default function SlideFallback({ slide, theme = 'light' }: SlideFallbackProps) {
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-8 sm:p-14 lg:p-20 select-none space-y-4">
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
          isDark ? 'bg-white/[0.05] text-[#8E8E93]' : 'bg-black/[0.05] text-[#555555]'
        }`}
      >
        <HelpCircle size={24} />
      </div>
      <h2
        className={`font-display font-bold text-xl ${
          isDark ? 'text-white' : 'text-[#09090B]'
        }`}
      >
        {slide.title}
      </h2>
      <p className="font-mono text-xs text-[#8E8E93]">
        Slide Type: {slide.type}
      </p>
    </div>
  );
}
