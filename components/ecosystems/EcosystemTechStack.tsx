'use client';

import React from 'react';
import { EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import { Layers, Server } from 'lucide-react';

interface EcosystemTechStackProps {
  ecosystem: EcosystemSchema;
  lang: Locale;
}

export default function EcosystemTechStack({
  ecosystem,
  lang,
}: EcosystemTechStackProps) {
  const isEs = lang === 'es';
  const { technology } = ecosystem;

  return (
    <section className="py-12 border-t border-black/[0.06] dark:border-white/[0.08] space-y-10">
      <div className="space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8E8E93] font-medium">
          {isEs ? 'INFRAESTRUCTURA & STACK' : 'ENGINEERING & INFRASTRUCTURE'}
        </span>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
          {isEs ? 'Tecnología sin fricción ni deuda técnica.' : 'Frictionless engineering stack.'}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
        {/* Core Stack */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#111111] dark:text-white uppercase tracking-wider">
            <Layers size={13} className="text-[#FE385B]" />
            <span>Core Engineering Stack</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {technology.stack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-4 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.1] font-mono text-xs text-[#111111] dark:text-white font-medium hover:border-[#FE385B] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Supporting Services */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#111111] dark:text-white uppercase tracking-wider">
            <Server size={13} className="text-[#10B981]" />
            <span>Supporting & Edge Infrastructure</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {technology.supporting.map((supp, sIdx) => (
              <span
                key={sIdx}
                className="px-4 py-2 rounded-full bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] font-mono text-xs text-[#555555] dark:text-[#A1A1AA]"
              >
                {supp}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture Prose */}
      {technology.architectureSummary && (
        <div className="pt-6 border-t border-black/[0.04] dark:border-white/[0.06]">
          <p className="font-sans text-sm sm:text-base text-[#555555] dark:text-[#A1A1AA] leading-relaxed font-light">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8E8E93] mr-2 font-semibold">
              // ARCHITECTURE_NOTE:
            </span>
            {technology.architectureSummary}
          </p>
        </div>
      )}
    </section>
  );
}
