import React from 'react';
import { Clock, PlayCircle, Radio, Target } from 'lucide-react';
import { Lesson, Module } from '@/data/academy/types';
import { Locale } from '@/types';

interface LessonHeaderProps {
  lesson: Lesson;
  moduleItem: Module;
  lang: Locale;
}

export default function LessonHeader({ lesson, moduleItem, lang }: LessonHeaderProps) {
  const isEs = lang === 'es';

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
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
    </div>
  );
}
