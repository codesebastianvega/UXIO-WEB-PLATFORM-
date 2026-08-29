'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, MapPin, Clock } from 'lucide-react';
import { Locale } from '@/types';

interface HomeHeroProps {
  lang: Locale;
  dict: any;
}

export default function HomeHero({ lang, dict }: HomeHeroProps) {
  const isEs = lang === 'es';

  return (
    <section className="pt-2">
      {/* Header Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-medium text-[#FE385B] tracking-tight">
            {dict.hero_prefix || (isEs ? '// 01 · ESTUDIO DIGITAL' : '// 01 · DIGITAL STUDIO')}
          </span>
          <span className="h-px w-6 bg-[#FE385B]/40"></span>
          <span className="font-mono text-xs text-[#8E8E93]">
            {dict.hero_tag || (isEs ? 'DISEÑO, DESARROLLO & CRECIMIENTO' : 'DESIGN, DEVELOPMENT & GROWTH')}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.08] text-[#666666] dark:text-[#8E8E93] font-mono text-[11px] shadow-2xs">
            <MapPin size={11} className="text-[#8E8E93]" />
            <span>{dict.location || 'CDMX / 24°C'}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.08] text-[#666666] dark:text-[#8E8E93] font-mono text-[11px] shadow-2xs">
            <Clock size={11} className="text-[#8E8E93]" />
            <span>{dict.latency || 'LATENCIA: 14MS'}</span>
          </div>
        </div>
      </div>

      {/* Hero Headline */}
      <h1 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight text-[#111111] dark:text-[#EDEDEE] max-w-3xl">
        {dict.hero_title || (isEs ? 'Diseñamos y construimos lo digital que tu negocio necesita para crecer.' : 'We design and build the digital solutions your business needs to grow.')}
      </h1>

      <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-3xl">
        <p className="text-sm sm:text-base text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-xl">
          {dict.hero_description_1 || (isEs ? 'Websites, tiendas online, aplicaciones, marcas y contenido.' : 'Websites, online stores, apps, brands, and content.')}{' '}
          <strong className="font-medium text-[#111111] dark:text-white">
            {dict.hero_description_highlight || (isEs ? 'Desde la idea hasta el lanzamiento.' : 'From concept to launch.')}
          </strong>
        </p>
        
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <div className="flex -space-x-1.5">
            <span className="inline-block w-5 h-5 rounded-full bg-[#FFCC48] border-2 border-white dark:border-[#171719] shadow-xs"></span>
            <span className="inline-block w-5 h-5 rounded-full bg-[#FF7F07] border-2 border-white dark:border-[#171719] shadow-xs"></span>
            <span className="inline-block w-5 h-5 rounded-full bg-[#FE385B] border-2 border-white dark:border-[#171719] shadow-xs"></span>
            <span className="inline-block w-5 h-5 rounded-full bg-[#00F0FF] border-2 border-white dark:border-[#171719] shadow-xs"></span>
          </div>
          <span className="font-mono text-xs text-[#666666] dark:text-[#8E8E93]">{dict.brand_accents_label || (isEs ? 'Acentos' : 'Accents')}</span>
        </div>
      </div>

      {/* Action CTAs */}
      <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center gap-3">
        <Link
          href={`/${lang}/contact`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FE385B] hover:bg-[#e02d4e] text-white font-display font-semibold text-xs transition-all duration-200 shadow-accent-glow hover:shadow-md active:scale-95"
        >
          <span>{dict.cta_start_project || (isEs ? 'Cuéntanos tu proyecto' : 'Tell us about your project')}</span>
          <ArrowRight size={14} />
        </Link>

        <Link
          href={`/${lang}/works`}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-[#171719] hover:bg-black/[0.04] dark:hover:bg-white/[0.08] text-[#111111] dark:text-[#EDEDEE] border border-black/[0.08] dark:border-white/[0.08] font-sans font-medium text-xs transition-all shadow-soft-sm"
        >
          <span>{dict.cta_explore_disciplines || (isEs ? 'Ver proyectos' : 'View projects')}</span>
          <ChevronRight size={14} className="text-[#8E8E93]" />
        </Link>
      </div>
    </section>
  );
}
