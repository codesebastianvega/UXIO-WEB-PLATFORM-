import React from 'react';
import { Metadata } from 'next';
import { Locale } from '@/types';
import { getInsightsData } from '@/data/insights';
import InsightsCatalog from '@/components/insights/InsightsCatalog';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const isEs = rawLang !== 'en';
  return {
    title: isEs
      ? 'Insights — Arquitectura, Diseño & Estrategia'
      : 'Insights — Architecture, Design & Strategy',
    description: isEs
      ? 'Ensayos, deconstrucciones técnicas y bitácora de productos de UXIO Studio y Academy.'
      : 'Technical essays, architecture breakdowns, and product notes from UXIO Studio and Academy.',
  };
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const isEs = lang === 'es';
  const { categories, articles } = getInsightsData(lang);

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors">
      <div className="space-y-10 md:space-y-12">
        {/* Header */}
        <section className="space-y-3 pt-2">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] font-semibold text-[#FF7F07] tracking-tight">
              // {isEs ? 'INSIGHTS & ENSAYOS' : 'INSIGHTS & ESSAYS'}
            </span>
            <span className="h-px w-8 bg-[#FF7F07]/40" />
            <span className="font-mono text-[10px] text-[#8E8E93] uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F07] animate-pulse" />
              {isEs ? 'BITÁCORA TÉCNICA & COMERCIAL' : 'TECHNICAL & COMMERCIAL LOG'}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] tracking-tight text-[#111111] dark:text-white max-w-4xl">
            {isEs ? (
              <>
                Documentamos cómo pensamos, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F07] via-[#FE385B] to-[#00F0FF]">diseñamos y construimos</span>.
              </>
            ) : (
              <>
                Documenting how we think, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F07] via-[#FE385B] to-[#00F0FF]">design, and build</span>.
              </>
            )}
          </h1>

          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-2xl">
            {isEs
              ? 'Ensayos profundos sobre ingeniería a 120 FPS, optimizaciones de bases de datos, sistemas de diseño y lecciones de captación comercial de Creator Lab.'
              : 'In-depth essays on 120 FPS frontend engineering, database architectures, design systems, and commercial acquisition strategies from Creator Lab.'
            }
          </p>
        </section>

        {/* Catalog */}
        <InsightsCatalog
          categories={categories}
          articles={articles}
          lang={lang}
        />
      </div>
    </main>
  );
}
