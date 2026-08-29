'use client';

import React from 'react';
import { PlayCircle, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { Microclass } from '@/data/academy/types';
import { Locale } from '@/types';

interface MicroclassListProps {
  microclasses: Microclass[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  lang: Locale;
}

export default function MicroclassList({
  microclasses,
  selectedIndex,
  onSelect,
  lang,
}: MicroclassListProps) {
  const isEs = lang === 'es';

  if (microclasses.length === 0) {
    return null;
  }

  const handleCardClick = (idx: number) => {
    onSelect(idx);
    // Smooth scroll to video stage
    const videoElement = document.getElementById('video-stage');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
        <div className="flex items-center gap-2">
          <PlayCircle size={16} className="text-[#FE385B]" />
          <h3 className="font-display font-bold text-sm sm:text-base text-[#111111] dark:text-white">
            {isEs ? 'Microclases de la Lección' : 'Lesson Microclasses'}
          </h3>
        </div>
        <span className="font-mono text-xs text-[#8E8E93]">
          {isEs ? 'Cápsula' : 'Part'} {selectedIndex + 1} / {microclasses.length}
        </span>
      </div>

      {/* Responsive Grid Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {microclasses.map((mc, idx) => {
          const isSelected = idx === selectedIndex;
          const numberTag = String(idx + 1).padStart(2, '0');

          return (
            <button
              key={mc.id}
              type="button"
              onClick={() => handleCardClick(idx)}
              className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 group ${
                isSelected
                  ? 'bg-[#FE385B]/[0.06] dark:bg-[#FE385B]/[0.08] border-[#FE385B] ring-1 ring-[#FE385B]/50 shadow-sm'
                  : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.06] hover:border-black/[0.15] dark:hover:border-white/[0.15] hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
              }`}
            >
              {/* Card Top Row: Number & Duration */}
              <div className="flex items-center justify-between w-full">
                <span
                  className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                    isSelected
                      ? 'bg-[#FE385B] text-white border-[#FE385B]'
                      : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#8E8E93] border-black/[0.06] dark:border-white/[0.08]'
                  }`}
                >
                  #{numberTag}
                </span>

                <div className="flex items-center gap-1 text-[11px] font-mono text-[#8E8E93]">
                  <Clock size={11} className={isSelected ? 'text-[#FE385B]' : 'text-[#8E8E93]'} />
                  <span className={isSelected ? 'text-[#FE385B] font-semibold' : ''}>{mc.duration}</span>
                </div>
              </div>

              {/* Title & Preview */}
              <div className="space-y-1">
                <h4
                  className={`font-display text-xs sm:text-sm leading-snug line-clamp-2 ${
                    isSelected
                      ? 'font-bold text-[#FE385B]'
                      : 'font-semibold text-[#111111] dark:text-white group-hover:text-[#FE385B] transition-colors'
                  }`}
                >
                  {mc.title}
                </h4>
                {mc.description && (
                  <p className="text-[11px] text-[#666666] dark:text-[#8E8E93] font-sans line-clamp-2 leading-relaxed">
                    {mc.description}
                  </p>
                )}
              </div>

              {/* Status footer inside card */}
              <div className="pt-1 flex items-center gap-1.5 text-[10px] font-mono">
                {isSelected ? (
                  <span className="text-[#FE385B] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FE385B] animate-pulse" />
                    <span>{isEs ? 'Reproduciendo ahora' : 'Now playing'}</span>
                  </span>
                ) : (
                  <span className="text-[#8E8E93] group-hover:text-[#111111] dark:group-hover:text-white transition-colors">
                    {isEs ? 'Ver cápsula →' : 'Watch video →'}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
