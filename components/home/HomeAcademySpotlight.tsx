'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Locale } from '@/types';

interface HomeAcademySpotlightProps {
  lang: Locale;
  dict: any;
}

export default function HomeAcademySpotlight({ lang, dict }: HomeAcademySpotlightProps) {
  const isEs = lang === 'es';

  return (
    <section className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#FE385B]/10 via-transparent to-[#FF7F07]/5 border border-[#FE385B]/20 shadow-soft-sm relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#FE385B] tracking-tight">
              {dict.academy_prefix || (isEs ? '// 04 · ACADEMY' : '// 04 · ACADEMY')}
            </span>
            <span className="h-px w-6 bg-[#FE385B]/40"></span>
            <span className="font-mono text-xs text-[#8E8E93]">{isEs ? 'FORMACIÓN PRÁCTICA' : 'HANDS-ON LAB'}</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
            {dict.academy_title || (isEs ? 'UXIO también enseña.' : 'UXIO also teaches.')}
          </h2>

          <p className="text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
            {dict.academy_desc || (isEs
              ? 'Aprende a crear contenido profesional con tu smartphone e IA.'
              : 'Learn to create professional content with your smartphone and AI.'
            )}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span className="font-mono text-xs font-semibold text-[#FE385B] bg-[#FE385B]/10 px-3 py-1 rounded-full border border-[#FE385B]/20">
              {dict.academy_program || (isEs ? 'Creator Lab — 4 semanas' : 'Creator Lab — 4 weeks')}
            </span>
            <span className="font-mono text-xs font-bold text-[#111111] dark:text-white bg-black/[0.04] dark:bg-white/[0.06] px-3 py-1 rounded-full border border-black/[0.06] dark:border-white/[0.08]">
              {dict.academy_price || '$99.000 COP'}
            </span>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Link
            href={`/${lang}/academy/creator-lab`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs tracking-wide transition-all shadow-lg shadow-[#FE385B]/20 active:scale-95"
          >
            <GraduationCap size={15} />
            <span>{dict.academy_cta || (isEs ? 'Ver Creator Lab' : 'View Creator Lab')}</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
