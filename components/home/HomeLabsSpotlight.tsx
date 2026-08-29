'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Project, Locale } from '@/types';
import ProjectCard from '@/components/ProjectCard';

interface HomeLabsSpotlightProps {
  lang: Locale;
  dict: any;
  labProject?: Project;
}

export default function HomeLabsSpotlight({ lang, dict, labProject }: HomeLabsSpotlightProps) {
  const isEs = lang === 'es';

  return (
    <section className="rounded-2xl p-6 sm:p-8 bg-white/80 dark:bg-[#171719]/90 border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm relative overflow-hidden">
      <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-[#FF7F07]/15 blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-medium text-[#FF7F07] tracking-tight">
              {dict.lab_prefix || (isEs ? '// 03 · LABS' : '// 03 · LABS')}
            </span>
            <span className="h-px w-6 bg-[#FF7F07]/40"></span>
          </div>

          <h2 className="font-display font-bold text-xl sm:text-2xl text-[#111111] dark:text-white tracking-tight leading-snug">
            {dict.lab_title || (isEs ? 'También construimos nuestras propias ideas.' : 'We also build our own ideas.')}
          </h2>

          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
            {dict.lab_desc || (isEs
              ? 'Probamos nuevas ideas creando productos reales. Algunos empiezan como experimentos; otros terminan convirtiéndose en negocios.'
              : 'We test new ideas by creating real products. Some start as experiments; others turn into businesses.'
            )}
          </p>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.04] dark:border-white/[0.06]">
              <div className="font-mono text-[9px] text-[#8E8E93]">{dict.lab_metric_label || (isEs ? 'PRODUCTOS PROPIOS' : 'IN-HOUSE PRODUCTS')}</div>
              <div className="font-mono text-xs font-bold text-[#FF7F07] mt-0.5">{dict.lab_metric_value || (isEs ? '100% HECHO EN CASA' : '100% IN-HOUSE')}</div>
            </div>
            <div className="p-3 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.04] dark:border-white/[0.06]">
              <div className="font-mono text-[9px] text-[#8E8E93]">{isEs ? 'ESTADO' : 'STATUS'}</div>
              <div className="font-mono text-xs font-bold text-[#00F0FF] mt-0.5">{isEs ? 'EXPERIMENTOS ACTIVOS' : 'ACTIVE EXPERIMENTS'}</div>
            </div>
          </div>

          <div className="pt-1">
            <Link
              href={`/${lang}/labs`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF7F07] hover:bg-[#e06f06] text-white font-display font-semibold text-xs tracking-wide transition-all shadow-sm active:scale-95"
            >
              <span>{dict.lab_cta || (isEs ? 'Ver nuestros Labs' : 'View our Labs')}</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          {labProject && (
            <ProjectCard
              project={labProject}
              lang={lang}
            />
          )}
        </div>
      </div>
    </section>
  );
}
