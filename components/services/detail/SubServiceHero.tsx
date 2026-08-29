'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Sparkles } from 'lucide-react';
import { SubService } from '@/data/services';
import { getTechInfo } from '@/components/services/drawer/TechLogos';
import { Locale } from '@/types';

interface SubServiceHeroProps {
  subService: SubService;
  parentSlug: string;
  lang: Locale;
}

export default function SubServiceHero({ subService, parentSlug, lang }: SubServiceHeroProps) {
  const isEs = lang === 'es';

  return (
    <section className="space-y-5 pb-2">
      {/* Navigation & Sprint Tag */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Link
          href={`/${lang}/services/${parentSlug}`}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors group"
        >
          <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
          <span>{isEs ? 'Volver a la Disciplina' : 'Back to Discipline'}</span>
        </Link>

        <div className="flex items-center gap-2">
          <span 
            className="font-mono text-[10.5px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${subService.accent}15`,
              color: subService.accent,
              border: `1px solid ${subService.accent}35`
            }}
          >
            // SPRINT DE INGENIERÍA · {subService.slug.toUpperCase()}
          </span>
          <span className="font-mono text-[11px] text-[#8E8E93] flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.05] px-2.5 py-1 rounded-full border border-black/[0.05] dark:border-white/[0.06]">
            <Clock size={11} /> {subService.estimatedTimeline}
          </span>
        </div>
      </div>

      {/* Main Titles & Description */}
      <div className="space-y-3 max-w-4xl">
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-tight text-[#111111] dark:text-white">
          {subService.title}
        </h1>

        <p className="font-mono text-xs sm:text-sm text-[#8E8E93]">
          {subService.tagline}
        </p>

        <p className="text-sm sm:text-base text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans pt-1 max-w-3xl">
          {subService.description}
        </p>
      </div>

      {/* Branded Tech Stack Badges with Official Logos */}
      {subService.technologies && subService.technologies.length > 0 && (
        <div className="pt-2 space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles size={12} className="text-[#FE385B]" />
            <span className="font-mono text-[10.5px] text-[#8E8E93] uppercase tracking-wider font-semibold">
              {isEs ? '// TECNOLOGÍAS & HERRAMIENTAS QUE DOMINAMOS:' : '// TECH STACK & TOOLS:'}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap pt-0.5">
            {subService.technologies.map((techName, tIdx) => {
              const techInfo = getTechInfo(techName);
              return (
                <div
                  key={tIdx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-2xs font-display font-medium text-xs text-[#111111] dark:text-[#E4E4E7] transition-all hover:scale-[1.03] hover:border-black/[0.2] dark:hover:border-white/[0.2]"
                >
                  {techInfo.icon}
                  <span>{techInfo.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
