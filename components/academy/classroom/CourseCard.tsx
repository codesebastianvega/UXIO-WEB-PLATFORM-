import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, BookOpen, Layers, TrendingUp } from 'lucide-react';
import { Course } from '@/data/academy/types';
import { Locale } from '@/types';
import { CourseProgressInfo } from '@/lib/supabase/academy-progress';

interface CourseCardProps {
  course: Course;
  lang: Locale;
  cohortName?: string;
  progressInfo?: CourseProgressInfo;
}

export default function CourseCard({
  course,
  lang,
  cohortName,
  progressInfo,
}: CourseCardProps) {
  const isEs = lang === 'es';
  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const percentage = progressInfo?.percentage ?? 0;
  const completedCount = progressInfo?.completedCount ?? 0;

  return (
    <div className="group p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#FE385B]/40 transition-all duration-300 shadow-soft-lg flex flex-col justify-between space-y-6">
      {/* Top Metadata */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[11px] text-[#FE385B] font-semibold bg-[#FE385B]/10 px-2.5 py-1 rounded-md border border-[#FE385B]/20">
            {cohortName || course.cohortName}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-md border border-[#10B981]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            {isEs ? 'ACCESO ACTIVO' : 'ACTIVE ENROLLMENT'}
          </span>
        </div>

        <div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white group-hover:text-[#FE385B] transition-colors">
            {course.title}
          </h2>
          <p className="text-sm font-sans font-medium text-[#FE385B] mt-0.5">
            {course.commercialName}
          </p>
          <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans mt-2 line-clamp-2 leading-relaxed">
            {course.subtitle}
          </p>
        </div>
      </div>

      {/* Progress Bar (if available) */}
      <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] space-y-1.5">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#8E8E93] flex items-center gap-1">
            <TrendingUp size={12} className="text-[#10B981]" />
            <span>{isEs ? 'Progreso' : 'Progress'}</span>
          </span>
          <span className="font-bold text-[#111111] dark:text-white">
            {completedCount} / {totalLessons} · {percentage}%
          </span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-black/[0.06] dark:bg-white/[0.06] overflow-hidden">
          <div
            className="h-full bg-[#10B981] rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Course Stats Grid */}
      <div className="grid grid-cols-2 gap-3 py-3 border-y border-black/[0.06] dark:border-white/[0.06] text-xs font-mono text-[#8E8E93]">
        <div className="flex items-center gap-2">
          <Layers size={14} className="text-[#00F0FF] shrink-0" />
          <span>{course.modules.length} {isEs ? 'Módulos' : 'Modules'}</span>
        </div>
        <div className="flex items-center gap-2">
          <BookOpen size={14} className="text-[#FFCC48] shrink-0" />
          <span>{totalLessons} {isEs ? 'Lecciones' : 'Lessons'}</span>
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <Calendar size={14} className="text-[#FE385B] shrink-0" />
          <span className="truncate">{course.datesOverview}</span>
        </div>
      </div>

      {/* CTA Button */}
      <div>
        <Link
          href={`/${lang}/academy/classroom/${course.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#FE385B] dark:hover:bg-[#FE385B] dark:hover:text-white font-display font-bold text-xs transition-all shadow-md active:scale-[0.98]"
        >
          <span>{isEs ? 'Continuar al Aula' : 'Enter Classroom'}</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
