'use client';

import React from 'react';
import { Clock, PlayCircle, Radio, Target } from 'lucide-react';
import { Lesson, Module, Microclass } from '@/data/academy/types';
import { Locale } from '@/types';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';

interface LessonHeaderProps {
  lesson: Lesson;
  moduleItem: Module;
  microclasses?: Microclass[];
  selectedMicroclassIndex?: number;
  onSelectMicroclass?: (index: number) => void;
  lang: Locale;
}

export default function LessonHeader({
  lesson,
  moduleItem,
  microclasses = [],
  selectedMicroclassIndex = 0,
  onSelectMicroclass,
  lang,
}: LessonHeaderProps) {
  const isEs = lang === 'es';

  const handleCardClick = (idx: number) => {
    if (onSelectMicroclass) {
      onSelectMicroclass(idx);
    }
    const videoElement = document.getElementById('video-stage');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <AuroraSpotlightCard
      primaryColor="#FE385B"
      spotlightRadius={280}
      spotlightOpacity={0.09}
      className="rounded-3xl shadow-soft"
    >
      <div className="space-y-6">
        {/* Top Tag Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#FE385B] font-semibold bg-[#FE385B]/10 px-2.5 py-1 rounded-md border border-[#FE385B]/20">
              {moduleItem.weekTag}
            </span>
            <span className="font-mono text-xs text-[#8E8E93] bg-black/[0.04] dark:bg-white/[0.04] px-2.5 py-1 rounded-md border border-black/[0.06] dark:border-white/[0.06]">
              {lesson.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[#8E8E93]">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#0369A1] dark:text-[#00F0FF]" />
              <span>{lesson.duration}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[#FE385B] font-semibold">
              {lesson.type === 'live_lab' ? <Radio size={13} /> : <PlayCircle size={13} />}
              <span>{lesson.type === 'live_lab' ? (isEs ? 'Sesión en Vivo' : 'Live Lab') : (isEs ? 'Microclases' : 'Microclasses')}</span>
            </span>
          </div>
        </div>

        {/* Title */}
        <div>
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white leading-tight">
            {lesson.title}
          </h1>

          {/* Objective with High Contrast */}
          {lesson.objective && (
            <div className="mt-3.5 p-4 rounded-2xl bg-[#0284C7]/5 dark:bg-[#00F0FF]/5 border border-[#0284C7]/20 dark:border-[#00F0FF]/20 flex items-start gap-3 text-xs font-sans leading-relaxed">
              <div className="w-6 h-6 rounded-lg bg-[#0284C7]/15 dark:bg-[#00F0FF]/15 flex items-center justify-center text-[#0369A1] dark:text-[#00F0FF] shrink-0 mt-0.5">
                <Target size={14} />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#0369A1] dark:text-[#00F0FF] uppercase tracking-wider block font-bold">
                  {isEs ? 'OBJETIVO DE LA LECCIÓN' : 'LESSON OBJECTIVE'}
                </span>
                <p className="mt-0.5 text-[#222222] dark:text-[#E5E5E7] font-medium leading-relaxed">
                  {lesson.objective}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Unified Microclasses Grid Selector (Minimalist, No Copy) */}
        {microclasses.length > 0 && (
          <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PlayCircle size={15} className="text-[#FE385B]" />
                <h3 className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-white">
                  {isEs ? 'Microclases de la Lección' : 'Lesson Microclasses'}
                </h3>
              </div>
              <span className="font-mono text-[11px] text-[#8E8E93]">
                {isEs ? 'Cápsula' : 'Part'} {selectedMicroclassIndex + 1} / {microclasses.length}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {microclasses.map((mc, idx) => {
                const isSelected = idx === selectedMicroclassIndex;
                const numberTag = String(idx + 1).padStart(2, '0');

                return (
                  <button
                    key={mc.id}
                    type="button"
                    onClick={() => handleCardClick(idx)}
                    className={`text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-2.5 group ${
                      isSelected
                        ? 'bg-[#FE385B]/10 dark:bg-[#FE385B]/15 border-[#FE385B] text-[#FE385B] shadow-2xs font-semibold'
                        : 'bg-black/[0.02] dark:bg-white/[0.03] border-black/[0.05] dark:border-white/[0.06] hover:border-black/[0.15] dark:hover:border-white/[0.15] text-[#111111] dark:text-white hover:bg-black/[0.03]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <span
                        className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border shrink-0 ${
                          isSelected
                            ? 'bg-[#FE385B] text-white border-[#FE385B]'
                            : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#8E8E93] border-black/[0.06]'
                        }`}
                      >
                        #{numberTag}
                      </span>
                      <span className="font-display text-xs truncate">
                        {mc.title}
                      </span>
                    </div>

                    <span
                      className={`font-mono text-[10px] shrink-0 ${
                        isSelected ? 'text-[#FE385B] font-bold' : 'text-[#8E8E93]'
                      }`}
                    >
                      {mc.duration}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </AuroraSpotlightCard>
  );
}
