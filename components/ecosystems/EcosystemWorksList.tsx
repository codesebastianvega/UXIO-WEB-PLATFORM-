'use client';

import React from 'react';
import Link from 'next/link';
import { EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import { ArrowUpRight } from 'lucide-react';

interface EcosystemWorksListProps {
  ecosystem: EcosystemSchema;
  lang: Locale;
}

export default function EcosystemWorksList({
  ecosystem,
  lang,
}: EcosystemWorksListProps) {
  const isEs = lang === 'es';
  const { works } = ecosystem;

  return (
    <section className="py-12 border-t border-black/[0.06] dark:border-white/[0.08] space-y-10">
      <div className="flex items-end justify-between">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8E8E93] font-medium">
            {isEs ? 'ÍNDICE DE ENTREGABLES' : 'DELIVERABLES & WORKS INDEX'}
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#111111] dark:text-white tracking-tight">
            {isEs ? 'Piezas individuales del ecosistema.' : 'Individual ecosystem pieces.'}
          </h3>
        </div>
        <span className="font-mono text-xs text-[#8E8E93] bg-black/[0.03] dark:bg-white/[0.05] px-3 py-1 rounded-full border border-black/[0.06] dark:border-white/[0.08]">
          [{works.length} {isEs ? 'PIEZAS' : 'WORKS'}]
        </span>
      </div>

      <div className="divide-y divide-black/[0.06] dark:divide-white/[0.08] border-y border-black/[0.06] dark:border-white/[0.08]">
        {works.map((work, wIdx) => {
          const targetHref = work.href.startsWith('/') ? `/${lang}${work.href.replace(/^\/(es|en)/, '')}` : work.href;

          return (
            <Link
              key={work.id || wIdx}
              href={targetHref}
              className="group flex items-center justify-between py-6 sm:py-8 px-2 hover:px-4 rounded-2xl hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6 sm:gap-10 min-w-0">
                <span className="font-display font-extrabold text-2xl sm:text-4xl text-[#8E8E93]/40 group-hover:text-[#FE385B] transition-colors font-mono select-none">
                  0{wIdx + 1}
                </span>

                <div className="space-y-1 min-w-0">
                  <h4 className="font-display font-bold text-lg sm:text-2xl text-[#111111] dark:text-white group-hover:text-[#FE385B] transition-colors tracking-tight truncate">
                    {work.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-[#8E8E93] uppercase tracking-wider">
                      {work.discipline}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pl-4 flex-shrink-0">
                <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider text-[#8E8E93] group-hover:text-[#111111] dark:group-hover:text-white transition-colors">
                  {isEs ? 'Ver Detalle' : 'View Spec'}
                </span>
                <div className="w-10 h-10 rounded-full bg-black/[0.04] dark:bg-white/[0.06] group-hover:bg-[#FE385B] group-hover:text-white flex items-center justify-center text-[#8E8E93] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
