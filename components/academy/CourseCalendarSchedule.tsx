'use client';

import React from 'react';
import { Calendar, Radio, Award, CheckCircle } from 'lucide-react';
import { CourseProgram } from '@/data/academy/types';
import { Locale } from '@/types';

interface Props {
  course: CourseProgram;
  lang: Locale;
}

export default function CourseCalendarSchedule({ course, lang }: Props) {
  const isEs = lang === 'es';

  return (
    <section className="py-12 md:py-16 border-b border-black/[0.06] dark:border-white/[0.08] space-y-8">
      <div className="max-w-xl space-y-2">
        <span className="font-mono text-xs text-[#00F0FF] tracking-tight uppercase">
          // {isEs ? 'CRONOGRAMA DE LA COHORTE' : 'COHORT TIMELINE'}
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
          {isEs ? 'Calendario y entregables clave' : 'Schedule & key milestones'}
        </h2>
        <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] font-sans">
          <strong className="text-[#111111] dark:text-white">{course.commercialDuration} · {course.datesOverview}</strong>
          <span className="block text-[#8E8E93] mt-0.5">{course.inductionNotice}</span>
        </p>
      </div>

      <div className="relative border-l-2 border-black/[0.08] dark:border-white/[0.08] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-6">
        {course.schedule.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-white dark:bg-[#0D0D0E] transition-all ${
                item.isLive
                  ? 'border-[#FE385B] group-hover:scale-125'
                  : 'border-black/30 dark:border-white/30'
              }`}
            />

            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm hover:border-black/[0.15] dark:hover:border-white/[0.15] transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded">
                    {item.dates}
                  </span>
                  <span className="font-mono text-xs text-[#8E8E93]">
                    {item.weekLabel}
                  </span>
                </div>

                {item.isLive ? (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#FE385B] font-semibold bg-[#FE385B]/10 px-2 py-0.5 rounded-full">
                    <Radio size={10} className="animate-pulse" />
                    <span>{isEs ? 'SESIÓN EN VIVO' : 'LIVE SESSION'}</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded-full">
                    <CheckCircle size={10} />
                    <span>{isEs ? 'APERTURA' : 'LAUNCH'}</span>
                  </span>
                )}
              </div>

              <h3 className="font-display font-bold text-sm sm:text-base text-[#111111] dark:text-white">
                {item.title}
              </h3>

              {item.milestone && (
                <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans mt-1.5 flex items-center gap-1.5">
                  <Award size={13} className="text-[#FFCC48] shrink-0" />
                  <span>{item.milestone}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
