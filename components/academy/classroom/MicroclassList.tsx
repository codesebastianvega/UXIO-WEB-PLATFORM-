'use client';

import React from 'react';
import { PlayCircle, Clock, CheckCircle2 } from 'lucide-react';
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

  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
      <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
        <div className="flex items-center gap-2">
          <PlayCircle size={16} className="text-[#00F0FF]" />
          <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white">
            {isEs ? 'Microclases de esta Lección' : 'Lesson Microclasses'}
          </h3>
        </div>
        <span className="font-mono text-xs text-[#8E8E93]">
          {selectedIndex + 1} / {microclasses.length}
        </span>
      </div>

      <div className="space-y-2">
        {microclasses.map((mc, idx) => {
          const isSelected = idx === selectedIndex;

          return (
            <button
              key={mc.id}
              type="button"
              onClick={() => onSelect(idx)}
              className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                isSelected
                  ? 'bg-[#FE385B]/10 border-[#FE385B]/30 text-[#111111] dark:text-white shadow-sm'
                  : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.04] dark:border-white/[0.04] text-[#666666] dark:text-[#8E8E93] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:text-[#111111] dark:hover:text-white'
              }`}
            >
              <div className="flex items-start gap-3 min-w-0">
                <div className="mt-0.5 shrink-0">
                  <PlayCircle
                    size={15}
                    className={isSelected ? 'text-[#FE385B]' : 'text-[#8E8E93]'}
                  />
                </div>
                <div className="min-w-0">
                  <p className={`text-xs font-sans leading-snug line-clamp-2 ${isSelected ? 'font-bold' : 'font-normal'}`}>
                    {mc.title}
                  </p>
                  {mc.description && (
                    <p className="text-[11px] font-sans text-[#8E8E93] mt-0.5 line-clamp-1">
                      {mc.description}
                    </p>
                  )}
                </div>
              </div>

              <span className={`font-mono text-[10px] shrink-0 ${isSelected ? 'text-[#FE385B] font-semibold' : 'text-[#8E8E93]'}`}>
                {mc.duration}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
