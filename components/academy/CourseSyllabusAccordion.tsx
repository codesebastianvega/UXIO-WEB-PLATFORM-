'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FolderKanban, Check, Sparkles } from 'lucide-react';
import { CourseProgram } from '@/data/academy/types';
import { Locale } from '@/types';

interface Props {
  course: CourseProgram;
  lang: Locale;
}

export default function CourseSyllabusAccordion({ course, lang }: Props) {
  const isEs = lang === 'es';
  // Week 0 and Week 1 open by default
  const [openWeeks, setOpenWeeks] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggleWeek = (weekNum: number) => {
    setOpenWeeks(prev => ({ ...prev, [weekNum]: !prev[weekNum] }));
  };

  return (
    <section className="py-12 md:py-16 border-b border-black/[0.06] dark:border-white/[0.08] space-y-8">
      <div className="max-w-xl space-y-2">
        <span className="font-mono text-xs text-[#FF7F07] tracking-tight uppercase">
          // {isEs ? 'PROGRAMA COMPLETO' : 'FULL SYLLABUS'}
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
          {isEs ? 'Estructura semana a semana' : 'Week-by-week curriculum'}
        </h2>
        <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] font-sans">
          {isEs
            ? '5 semanas de progresión táctica: desde la idea base hasta la producción y venta efectiva.'
            : '5 weeks of tactical progression: from core idea to mobile production and revenue generation.'}
        </p>
      </div>

      <div className="space-y-4">
        {course.modules.map(mod => {
          const isOpen = openWeeks[mod.weekNumber];

          return (
            <div
              key={mod.weekNumber}
              className="rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] overflow-hidden transition-all shadow-soft-sm"
            >
              {/* Module Header Toggle */}
              <button
                type="button"
                onClick={() => toggleWeek(mod.weekNumber)}
                className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
              >
                <div className="space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-black/[0.05] dark:bg-white/[0.06] text-[#FE385B]">
                      {mod.weekTag}
                    </span>
                    <span className="font-mono text-[11px] text-[#8E8E93]">
                      // {mod.subtitle}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
                    {mod.title}
                  </h3>
                </div>

                <div className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-[#8E8E93] shrink-0 mt-1 sm:mt-0">
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 space-y-5 border-t border-black/[0.04] dark:border-white/[0.04] pt-5">
                  {/* Objective */}
                  <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] text-xs font-sans">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF7F07] font-semibold block mb-1">
                      {isEs ? 'OBJETIVO DE LA SEMANA' : 'WEEK OBJECTIVE'}
                    </span>
                    <p className="text-[#111111] dark:text-[#E5E5E7] leading-relaxed">
                      {mod.objective}
                    </p>
                  </div>

                  {/* Lessons Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mod.lessons.map((lesson, lIdx) => (
                      <div
                        key={lIdx}
                        className="p-4 rounded-xl bg-white dark:bg-[#121214] border border-black/[0.06] dark:border-white/[0.06] space-y-2.5"
                      >
                        <h4 className="font-display font-semibold text-xs text-[#111111] dark:text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FE385B]" />
                          <span>{lesson.title}</span>
                        </h4>
                        <ul className="space-y-1 pl-3.5 text-xs text-[#666666] dark:text-[#8E8E93] font-sans">
                          {lesson.topics.map((topic, tIdx) => (
                            <li key={tIdx} className="list-disc list-outside">
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Weekly Project Deliverable Box */}
                  <div className="p-4 rounded-xl bg-[#FE385B]/5 border border-[#FE385B]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#FE385B]">
                        <FolderKanban size={14} />
                        <span>{mod.projectDeliverable.title.toUpperCase()}</span>
                      </div>
                      <p className="text-xs text-[#111111] dark:text-[#E5E5E7] font-sans">
                        {mod.projectDeliverable.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 shrink-0">
                      {mod.projectDeliverable.items.map((it, itIdx) => (
                        <span
                          key={itIdx}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-[#111111] dark:text-white flex items-center gap-1.5"
                        >
                          <Check size={10} className="text-[#10B981]" />
                          <span>{it}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
