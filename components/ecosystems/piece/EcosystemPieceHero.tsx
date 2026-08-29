'use client';

import React from 'react';
import { EcosystemPieceDetail, EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import Link from 'next/link';
import { ArrowLeft, Sparkles, ArrowRight } from 'lucide-react';

interface EcosystemPieceHeroProps {
  ecosystem: EcosystemSchema;
  piece: EcosystemPieceDetail;
  lang: Locale;
}

export default function EcosystemPieceHero({
  ecosystem,
  piece,
  lang,
}: EcosystemPieceHeroProps) {
  const isEs = lang === 'es';

  return (
    <header className="space-y-8 pt-4 pb-4">
      {/* Breadcrumbs Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href={`/${lang}/works/ecosystems/${ecosystem.slug}`}
          className="group inline-flex items-center gap-2 font-mono text-xs text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
        >
          <span className="w-6 h-6 rounded-full bg-black/[0.04] dark:bg-white/[0.06] group-hover:bg-[#FE385B] group-hover:text-white flex items-center justify-center transition-all">
            <ArrowLeft size={12} />
          </span>
          <span className="tracking-wider uppercase">
            {ecosystem.identity.name} &nbsp;—&nbsp; {isEs ? 'Volver al Ecosistema' : 'Back to Ecosystem'}
          </span>
        </Link>

        {/* Discipline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.1]">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: piece.accent || '#FE385B' }}
          />
          <span className="font-mono text-[11px] text-[#555555] dark:text-[#A1A1AA] uppercase tracking-wider font-semibold">
            {piece.discipline}
          </span>
        </div>
      </div>

      {/* Massive Title & Subtitle */}
      <div className="space-y-4 pt-2">
        <div className="font-mono text-xs text-[#8E8E93] uppercase tracking-widest flex items-center gap-2">
          <Sparkles size={13} style={{ color: piece.accent || '#FE385B' }} />
          <span>// {isEs ? 'PIEZA DE ECOSISTEMA' : 'ECOSYSTEM DELIVERABLE'}</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#111111] dark:text-white tracking-tight leading-[1.02]">
          {piece.title}
        </h1>

        <p className="text-lg sm:text-2xl font-light text-[#555555] dark:text-[#A1A1AA] font-sans max-w-3xl leading-relaxed">
          {piece.subtitle}
        </p>
      </div>

      {/* CTA Bar */}
      <div className="pt-2 flex flex-wrap items-center gap-3">
        <Link
          href={`/${lang}/contact?ecosystem=${ecosystem.slug}&piece=${piece.slug}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#FE385B] dark:hover:bg-[#FE385B] dark:hover:text-white font-sans font-semibold text-xs shadow-md transition-all group"
        >
          <span>{isEs ? 'Cotizar Módulo Similar' : 'Inquire for this Module'}</span>
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link
          href={`/${lang}/works/ecosystems/${ecosystem.slug}`}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.1] font-mono text-xs text-[#555555] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white transition-colors"
        >
          <span>{isEs ? 'Explorar las 16 Piezas' : 'Explore All 16 Modules'}</span>
        </Link>
      </div>
    </header>
  );
}
