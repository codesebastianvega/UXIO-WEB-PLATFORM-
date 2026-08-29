import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Layers, ShieldCheck } from 'lucide-react';
import { Course } from '@/data/academy/types';
import { Locale } from '@/types';
import LogoutButton from '@/components/academy/LogoutButton';

interface CourseHeaderProps {
  course: Course;
  lang: Locale;
  cohortName?: string;
}

export default function CourseHeader({ course, lang, cohortName }: CourseHeaderProps) {
  const isEs = lang === 'es';

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-6">
      {/* Top Bar with Back Link and Logout */}
      <div className="flex items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
        <Link
          href={`/${lang}/academy/classroom`}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#8E8E93] hover:text-[#FE385B] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>{isEs ? 'Volver a Mi Aula' : 'Back to Dashboard'}</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-md border border-[#10B981]/20">
            <ShieldCheck size={12} />
            <span>{isEs ? 'MATRICULADO' : 'ENROLLED'}</span>
          </span>
          <LogoutButton lang={lang} />
        </div>
      </div>

      {/* Course Title & Info */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-[#FE385B] font-semibold bg-[#FE385B]/10 px-2.5 py-1 rounded-md border border-[#FE385B]/20">
            {cohortName || course.cohortName}
          </span>
          <span className="font-mono text-xs text-[#8E8E93] flex items-center gap-1.5">
            <Calendar size={13} className="text-[#FE385B]" />
            {course.datesOverview}
          </span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-[#111111] dark:text-white">
          {course.title}
        </h1>

        <p className="text-sm font-sans text-[#666666] dark:text-[#8E8E93] max-w-2xl leading-relaxed">
          {course.subtitle}
        </p>
      </div>
    </div>
  );
}
