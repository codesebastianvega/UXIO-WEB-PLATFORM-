import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { AboutPillar } from '@/data/about';
import { Locale } from '@/types';

interface AboutEcosystemBentoProps {
  pillars: AboutPillar[];
  lang: Locale;
}

export default function AboutEcosystemBento({ pillars, lang }: AboutEcosystemBentoProps) {
  const isEs = lang === 'es';

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-3">
        <div className="space-y-0.5">
          <span className="font-mono text-[10px] text-[#00F0FF] uppercase tracking-wider font-semibold">
            // {isEs ? 'ARQUITECTURA DE NEGOCIO' : 'VENTURE ARCHITECTURE'}
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
            {isEs ? 'El Ecosistema UXIO' : 'The UXIO Ecosystem'}
          </h2>
        </div>
        <span className="font-mono text-[11px] text-[#8E8E93]">
          {isEs ? 'STUDIO · LABS · ACADEMY' : 'STUDIO · LABS · ACADEMY'}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="group relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.16] dark:hover:border-white/[0.22] transition-all flex flex-col justify-between space-y-6 hover:shadow-soft-xl"
          >
            {/* Top Tag & Metric */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-[#8E8E93] tracking-wider">
                  {pillar.tag}
                </span>
                <div className="text-right">
                  <span
                    className="font-mono text-lg font-extrabold block leading-none"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.stats}
                  </span>
                  <span className="font-mono text-[9px] text-[#8E8E93] uppercase">
                    {pillar.statsLabel}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl text-[#111111] dark:text-white group-hover:translate-x-0.5 transition-transform">
                  {pillar.title}
                </h3>
                <p className="font-mono text-[11px] text-[#8E8E93] mt-0.5">
                  {pillar.subtitle}
                </p>
              </div>

              <p className="text-xs text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
                {pillar.description}
              </p>

              {/* Feature Pills */}
              <div className="space-y-2 pt-1">
                {pillar.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#444444] dark:text-[#CCCCCC]">
                    <CheckCircle2 size={13} className="shrink-0" style={{ color: pillar.accent }} />
                    <span className="font-sans text-[11px]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Link Action */}
            <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
              <Link
                href={pillar.href}
                className="inline-flex items-center justify-between w-full text-xs font-display font-bold text-[#111111] dark:text-white group-hover:text-[#FE385B] dark:group-hover:text-[#00F0FF] transition-colors"
              >
                <span>{isEs ? 'Explorar división' : 'Explore division'}</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
