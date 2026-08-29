'use client';

import React from 'react';
import { EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Globe, GitBranch, Sparkles, ArrowRight } from 'lucide-react';

interface EcosystemHeroProps {
  ecosystem: EcosystemSchema;
  lang: Locale;
}

export default function EcosystemHero({ ecosystem, lang }: EcosystemHeroProps) {
  const isEs = lang === 'es';
  const { identity, overview, links } = ecosystem;

  // Extract clean domain for display
  const liveDisplay = links?.liveUrl ? links.liveUrl.replace(/^https?:\/\/(www\.)?/, '') : null;

  return (
    <header className="space-y-10 pt-4 pb-8">
      {/* Top Floating Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href={`/${lang}/works`}
          className="group inline-flex items-center gap-2 font-mono text-xs text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
        >
          <span className="w-6 h-6 rounded-full bg-black/[0.04] dark:bg-white/[0.06] group-hover:bg-[#FE385B] group-hover:text-white flex items-center justify-center transition-all">
            <ArrowLeft size={12} />
          </span>
          <span className="tracking-wider uppercase">{isEs ? 'Explorar Ecosistemas' : 'All Ecosystems'}</span>
        </Link>

        {/* Pill Editorial Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.1] shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FE385B] animate-pulse" />
          <span className="font-mono text-[11px] text-[#555555] dark:text-[#A1A1AA] tracking-wider uppercase font-medium">
            {identity.type} &nbsp;—&nbsp; {identity.year}
          </span>
        </div>
      </div>

      {/* Massive Editorial Cover Title */}
      <div className="space-y-10 pt-4">
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#111111] dark:text-white tracking-tighter uppercase leading-[0.92] select-none">
          {identity.name}
        </h1>

        {/* Asymmetric Section: Actions on Left, Synopsis on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
          {/* Left Column: Synopsis Title + 3 Action Cards/Pills (Hybrid 1 & 2) */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#8E8E93] flex items-center gap-2">
              <Sparkles size={13} className="text-[#FE385B]" />
              <span>{isEs ? '// SINOPSIS DEL ECOSISTEMA' : '// ECOSYSTEM SYNOPSIS'}</span>
            </div>

            {/* 3 Key Action Pills / Cards */}
            <div className="flex flex-col gap-2.5 pt-2">
              {/* 1. Live Web Public Platform */}
              {links?.liveUrl && (
                <a
                  href={links.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 px-3.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] hover:border-[#FE385B]/60 hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-all shadow-2xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-6 h-6 rounded-full bg-black/[0.04] dark:bg-white/[0.06] group-hover:bg-[#FE385B] group-hover:text-white flex items-center justify-center text-[#8E8E93] transition-colors flex-shrink-0">
                      <Globe size={12} />
                    </div>
                    <div className="flex items-baseline gap-1.5 min-w-0">
                      <span className="font-mono text-[10px] text-[#8E8E93] uppercase tracking-wider">LIVE:</span>
                      <span className="font-sans font-semibold text-xs text-[#111111] dark:text-white truncate">
                        {liveDisplay}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={13} className="text-[#8E8E93] group-hover:text-[#FE385B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
                </a>
              )}

              {/* 2. GitHub Repository / Source Code */}
              {links?.githubUrl && (
                <a
                  href={links.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 px-3.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] hover:border-[#00F0FF]/60 hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-all shadow-2xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-6 h-6 rounded-full bg-black/[0.04] dark:bg-white/[0.06] group-hover:bg-[#00F0FF] group-hover:text-black flex items-center justify-center text-[#8E8E93] transition-colors flex-shrink-0">
                      <GitBranch size={12} />
                    </div>
                    <div className="flex items-baseline gap-1.5 min-w-0">
                      <span className="font-mono text-[10px] text-[#8E8E93] uppercase tracking-wider">CODE:</span>
                      <span className="font-sans font-semibold text-xs text-[#111111] dark:text-white truncate">
                        GitHub
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] text-[#8E8E93] group-hover:text-[#00F0FF] bg-black/[0.04] dark:bg-white/[0.06] px-2 py-0.5 rounded-full border border-black/[0.06] dark:border-white/[0.08] transition-colors flex-shrink-0 ml-2">
                    {links.githubAccess || 'Private'}
                  </span>
                </a>
              )}

              {/* 3. UXIO High-End Action CTA */}
              <Link
                href={`/${lang}/contact?ecosystem=${ecosystem.slug}`}
                className="group flex items-center justify-between p-2.5 px-4 rounded-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#FE385B] dark:hover:bg-[#FE385B] dark:hover:text-white transition-all shadow-md hover:shadow-lg font-sans font-semibold text-xs mt-1"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={13} className="text-[#FE385B] group-hover:text-white dark:text-[#FE385B] dark:group-hover:text-white transition-colors" />
                  <span>{links?.ctaText || (isEs ? 'Cotizar Ecosistema Similar' : 'Build Similar Ecosystem')}</span>
                </div>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-End Editorial Synopsis */}
          <div className="md:col-span-7 md:pl-4">
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#333333] dark:text-[#D4D4D8] leading-relaxed font-sans">
              {overview.whatIsIt}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
