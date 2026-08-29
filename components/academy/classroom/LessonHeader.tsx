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
            <Clock size={13} className="text-[#00F0FF]" />
            {lesson.duration}
          </span>
          <span className="inline-flex items-center gap-1 text-[#FE385B]">
            {lesson.type === 'live_lab' ? <Radio size={13} /> : <PlayCircle size={13} />}
            {lesson.type === 'live_lab' ? (isEs ? 'Sesión en Vivo' : 'Live Lab') : (isEs ? 'Microclase' : 'Microclass')}
          </span>
        </div>
      </div>

      {/* Title */}
      <div>
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white leading-tight">
          {lesson.title}
        </h1>

        {/* Objective */}
        {lesson.objective && (
          <div className="mt-3 p-3.5 rounded-2xl bg-[#00F0FF]/[0.05] border border-[#00F0FF]/20 flex items-start gap-2.5 text-xs text-[#111111] dark:text-white font-sans leading-relaxed">
            <Target size={15} className="text-[#00F0FF] shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-[10px] text-[#00F0FF] uppercase tracking-wider block font-semibold">
                {isEs ? 'OBJETIVO DE LA LECCIÓN' : 'LESSON OBJECTIVE'}
              </span>
              <p className="mt-0.5">{lesson.objective}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
