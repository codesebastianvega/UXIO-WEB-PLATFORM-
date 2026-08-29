'use client';

import React from 'react';
import { EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import { CheckCircle2, Globe2, Calendar, Sparkles } from 'lucide-react';

interface EcosystemMetadataProps {
  ecosystem: EcosystemSchema;
  lang: Locale;
}

export default function EcosystemMetadata({ ecosystem, lang }: EcosystemMetadataProps) {
  const isEs = lang === 'es';
  const { identity } = ecosystem;

  return (
    <section className="py-8 sm:py-10 border-y border-black/[0.06] dark:border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* 1. Industria & Mercado (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#8E8E93] uppercase tracking-widest font-semibold">
            <Globe2 size={13} className="text-[#FE385B]" />
            <span>01 &nbsp;/&nbsp; {isEs ? 'INDUSTRIA & MERCADO' : 'INDUSTRY & VERTICAL'}</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-0.5">
            {identity.industry.map((ind, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.1] font-sans text-xs text-[#222222] dark:text-[#E4E4E7] font-medium transition-colors hover:border-[#FE385B]"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Estado, Año & Tipo (3 cols) */}
        <div className="lg:col-span-3 space-y-3 lg:border-x lg:border-black/[0.06] lg:dark:border-white/[0.08] lg:px-6">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#8E8E93] uppercase tracking-widest font-semibold">
            <Calendar size={13} className="text-[#10B981]" />
            <span>02 &nbsp;/&nbsp; {isEs ? 'ESTADO & AÑO' : 'STATUS & YEAR'}</span>
          </div>

          <div className="space-y-2.5 pt-0.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 font-sans text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{identity.status}</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-[#666666] dark:text-[#A1A1AA]">
              <span>{isEs ? 'Año de Lanzamiento:' : 'Launch Year:'}</span>
              <span className="font-bold text-[#111111] dark:text-white">{identity.year}</span>
            </div>
          </div>
        </div>

        {/* 3. Rol Integral UXIO (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#8E8E93] uppercase tracking-widest font-semibold">
            <Sparkles size={13} className="text-[#00F0FF]" />
            <span>03 &nbsp;/&nbsp; {isEs ? 'ROL DEL ESTUDIO UXIO' : 'UXIO SCOPE & ROLE'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
            {identity.uxioRole.map((role, rIdx) => (
              <div
                key={rIdx}
                className="flex items-center gap-2 p-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] font-sans text-xs text-[#444444] dark:text-[#CCCCCC]"
              >
                <CheckCircle2 size={12} className="text-[#00F0FF] flex-shrink-0" />
                <span className="truncate">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
