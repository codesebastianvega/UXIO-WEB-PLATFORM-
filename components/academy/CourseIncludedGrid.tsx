'use client';

import React from 'react';
import { CourseProgram } from '@/data/academy/types';
import { Locale } from '@/types';
import { renderFeatureIcon } from '@/components/services/drawer/FeatureIconRenderer';

interface Props {
  course: CourseProgram;
  lang: Locale;
}

export default function CourseIncludedGrid({ course, lang }: Props) {
  const isEs = lang === 'es';

  return (
    <section className="py-12 md:py-16 border-b border-black/[0.06] dark:border-white/[0.08] space-y-8">
      <div className="max-w-xl space-y-2">
        <span className="font-mono text-xs text-[#00F0FF] tracking-tight uppercase">
          // {isEs ? 'QUÉ INCLUYE EL PROGRAMA' : 'WHAT IS INCLUDED'}
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
          {isEs ? 'Todo lo que necesitas para ejecutar sin distracciones' : 'Everything you need to execute without friction'}
        </h2>
        <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] font-sans">
          {isEs
            ? 'Acceso integral a metodología, plantillas, acompañamiento y comunidad exclusiva.'
            : 'Complete access to methodology, templates, mentorship, and private community.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {course.whatIncludes.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm hover:border-[#00F0FF]/30 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center">
                {renderFeatureIcon(item.icon)}
              </div>
              <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-[#666666] dark:text-[#8E8E93] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
