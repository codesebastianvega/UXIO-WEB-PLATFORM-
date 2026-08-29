'use client';

import React from 'react';
import { ShieldCheck, Info, Check, Sparkles } from 'lucide-react';
import { CourseProgram } from '@/data/academy/types';
import { Locale } from '@/types';
import { renderFeatureIcon } from '@/components/services/drawer/FeatureIconRenderer';

interface Props {
  course: CourseProgram;
  lang: Locale;
}

export default function CourseAudienceAndCertificate({ course, lang }: Props) {
  const isEs = lang === 'es';

  return (
    <section className="py-12 md:py-16 border-b border-black/[0.06] dark:border-white/[0.08] space-y-14">
      {/* 1. Target Audience Grid */}
      <div className="space-y-6">
        <div className="max-w-xl space-y-2">
          <span className="font-mono text-xs text-[#FE385B] tracking-tight uppercase">
            // {isEs ? 'PERFILES OBJETIVO' : 'TARGET PROFILES'}
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
            {isEs ? '¿Para quién fue diseñado este programa?' : 'Who is this lab designed for?'}
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] font-sans">
            {isEs
              ? 'Enfoque transversal aplicable tanto a negocios físicos como digitales y futuros talentos de contenido.'
              : 'Cross-industry framework for physical and digital businesses as well as future content creators.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {course.targetAudiences.map((aud, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center">
                  {renderFeatureIcon(aud.icon)}
                </div>
                <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                  {aud.name}
                </h3>
              </div>

              <p className="font-sans text-xs text-[#666666] dark:text-[#8E8E93] leading-relaxed">
                {aud.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {aud.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Certificate and Proof of Completion */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-white to-black/[0.02] dark:from-[#171719] dark:via-[#171719] dark:to-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-lg space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] font-bold">
            <ShieldCheck size={16} />
            <span>{course.certificateInfo.badge}</span>
          </div>
          <span className="font-mono text-[10px] text-[#8E8E93] uppercase">
            // UXIO VERIFICATION CODE
          </span>
        </div>

        <div className="space-y-2 max-w-2xl">
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
            {course.certificateInfo.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed">
            {course.certificateInfo.description}
          </p>
        </div>

        {/* Explicit Transparent Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex items-start gap-3">
          <Info size={16} className="text-[#8E8E93] shrink-0 mt-0.5" />
          <p className="font-sans text-[11px] sm:text-xs text-[#8E8E93] leading-relaxed">
            {course.certificateInfo.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
