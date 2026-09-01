'use client';

import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Sparkles } from 'lucide-react';
import MagicDustHeading from '@/components/ui/MagicDustHeading';

interface SlideStatementProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
}

export default function SlideStatement({ slide }: SlideStatementProps) {
  const titleLength = slide.title.length;
  const subtitleDelay = Math.min(1200, 100 + titleLength * 14 + 100);
  const highlightDelay = subtitleDelay + 220;

  return (
    <div className="w-full h-full relative flex flex-col justify-center items-center text-center p-8 sm:p-14 lg:p-20 select-none bg-transparent">
      {/* Content Group in Cinematic Video-like Cascade */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center space-y-6">
        {/* Cascade Step 1: Block Tag & Timeline */}
        {slide.tag && (
          <div className="animate-cascade-in" style={{ animationDelay: '0ms' }}>
            <span className="font-mono text-xs text-white/95 uppercase tracking-widest font-bold bg-white/15 px-4 py-1.5 rounded-xl border border-white/25 shadow-lg backdrop-blur-md inline-block">
              {slide.tag}
            </span>
          </div>
        )}

        {/* Cascade Step 2: Statement H1 with Particle Assembly */}
        <MagicDustHeading
          text={slide.title}
          as="h1"
          keyTrigger={slide.id}
          staggerMs={14}
          initialDelayMs={100}
          glowColor="rgba(255, 255, 255, 0.95)"
          className="font-display font-black text-3xl sm:text-4xl lg:text-[46px] leading-[1.18] tracking-tight text-white max-w-3xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        />

        {/* Cascade Step 3: Subtitle / Narrative Hook */}
        {slide.subtitle && (
          <p
            className="animate-cascade-in font-sans text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed font-medium drop-shadow-sm"
            style={{ animationDelay: `${subtitleDelay}ms` }}
          >
            {slide.subtitle}
          </p>
        )}

        {/* Cascade Step 4: Highlight Badge */}
        {slide.highlight && (
          <div
            className="animate-cascade-in inline-flex items-center gap-2 font-mono text-xs text-white/95 bg-black/25 border border-white/25 px-4 py-2 rounded-2xl backdrop-blur-md shadow-lg"
            style={{ animationDelay: `${highlightDelay}ms` }}
          >
            <Sparkles size={14} className="text-white" />
            <span className="font-bold">{slide.highlight}</span>
          </div>
        )}
      </div>
    </div>
  );
}
