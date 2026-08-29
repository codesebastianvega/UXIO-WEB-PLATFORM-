'use client';

import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { CourseProgram } from '@/data/academy/types';
import { Locale } from '@/types';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';

interface Props {
  course: CourseProgram;
  lang: Locale;
}

export default function CourseProblemTransformation({ course, lang }: Props) {
  const isEs = lang === 'es';

  return (
    <section className="py-12 md:py-16 border-b border-black/[0.06] dark:border-white/[0.08] space-y-14">
      {/* 1. The Real Problems Grid */}
      <div className="space-y-6">
        <div className="max-w-xl space-y-2">
          <span className="font-mono text-xs text-[#FE385B] tracking-tight uppercase">
            // {isEs ? 'PUNTOS DE FRICCIÓN' : 'PAIN POINTS'}
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
            {isEs ? '¿Te identificas con alguna de estas situaciones?' : 'Do any of these sound familiar?'}
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] font-sans">
            {isEs
              ? 'La mayoría de negocios no tienen un problema de producto, tienen un problema de traducción audiovisual.'
              : 'Most businesses don’t have a product problem—they have an audiovisual translation problem.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {course.problems.map((problem, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] flex items-start gap-3.5 group hover:border-[#FE385B]/30 transition-all"
            >
              <div className="w-7 h-7 rounded-lg bg-[#FE385B]/10 text-[#FE385B] flex items-center justify-center shrink-0 mt-0.5">
                <AlertCircle size={15} />
              </div>
              <p className="font-sans text-xs sm:text-sm font-medium text-[#111111] dark:text-[#E5E5E7] leading-snug">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Before / After Transformation Matrix */}
      <div className="space-y-6">
        <div className="max-w-xl space-y-2">
          <span className="font-mono text-xs text-[#10B981] tracking-tight uppercase">
            // {isEs ? 'TRANSFORMACIÓN PRÁCTICA' : 'PRACTICAL SHIFT'}
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
            {isEs ? 'El cambio que construirás durante las 5 semanas' : 'The shift you will build in 5 weeks'}
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] font-sans">
            {isEs
              ? 'No enseñamos teoría abstracta. Entras con dudas y sales con un sistema de contenido activo.'
              : 'Zero fluff theory. You enter with doubts and leave with an operating content machine.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {course.transformations.map((item, idx) => (
            <AuroraSpotlightCard
              key={idx}
              color="#10B981"
              className="min-h-[190px]"
            >
              <div className="space-y-4">
                {/* Before state */}
                <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8E8E93] block mb-1">
                    {isEs ? 'ANTES' : 'BEFORE'}
                  </span>
                  <p className="font-sans text-xs text-[#666666] dark:text-[#8E8E93] line-through decoration-[#FE385B]/60">
                    {item.before}
                  </p>
                </div>

                <div className="flex justify-center -my-1 text-[#10B981]">
                  <ArrowRight size={14} className="rotate-90 md:rotate-0" />
                </div>

                {/* After state */}
                <div className="p-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20">
                  <div className="flex items-center gap-1.5 mb-1">
                    <CheckCircle2 size={12} className="text-[#10B981]" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#10B981] font-bold">
                      {isEs ? 'DESPUÉS (CREATOR LAB)' : 'AFTER (CREATOR LAB)'}
                    </span>
                  </div>
                  <p className="font-sans text-xs font-semibold text-[#111111] dark:text-white leading-relaxed">
                    {item.after}
                  </p>
                </div>
              </div>
            </AuroraSpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
