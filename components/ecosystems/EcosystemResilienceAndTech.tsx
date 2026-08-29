'use client';

import React from 'react';
import { EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import { ShieldCheck, Cpu, Database, Palette, Terminal } from 'lucide-react';

interface EcosystemResilienceAndTechProps {
  ecosystem: EcosystemSchema;
  lang: Locale;
}

export default function EcosystemResilienceAndTech({
  ecosystem,
  lang,
}: EcosystemResilienceAndTechProps) {
  const isEs = lang === 'es';
  const { resilience, technology } = ecosystem;

  return (
    <section className="space-y-16 py-10 border-t border-black/[0.06] dark:border-white/[0.08]">
      {/* 1. Resilience & Hybrid Architecture */}
      {resilience && (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest block font-semibold flex items-center gap-2">
              <ShieldCheck size={13} />
              <span>// {isEs ? 'RESILIENCIA & ARQUITECTURA HÍBRIDA' : 'RESILIENCE & HYBRID ARCHITECTURE'}</span>
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
              {resilience.title}
            </h3>
            <p className="text-sm sm:text-base font-light text-[#555555] dark:text-[#A1A1AA] leading-relaxed max-w-4xl font-sans">
              {resilience.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resilience.pillars.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] space-y-2"
              >
                <span className="font-mono text-xs font-bold text-[#10B981] block">
                  0{pIdx + 1} · {pillar.name}
                </span>
                <p className="font-sans text-xs text-[#555555] dark:text-[#A1A1AA] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {resilience.learnings && (
            <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs font-mono text-[#854D0E] dark:text-[#FDE68A] leading-relaxed">
              <span className="font-bold text-amber-600 dark:text-amber-400 mr-2">
                [ APRENDIZAJES & EVOLUCIÓN EN PRODUCCIÓN ]:
              </span>
              {resilience.learnings}
            </div>
          )}
        </div>
      )}

      {/* 2. Confirmed Tech Stack & Backend Entities */}
      <div className="p-8 rounded-[2rem] bg-white dark:bg-[#151518] border border-black/[0.06] dark:border-white/[0.08] space-y-8">
        <div className="space-y-2 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
          <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest block font-semibold flex items-center gap-2">
            <Cpu size={13} />
            <span>// {isEs ? 'STACK CONFIRMADO & ENTIDADES' : 'CONFIRMED STACK & BACKEND'}</span>
          </span>
          <div className="font-display font-bold text-xl text-[#111111] dark:text-white">
            {technology.architectureSummary}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Engineering Stack */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] text-[#8E8E93] uppercase tracking-wider block font-semibold flex items-center gap-1.5">
              <Terminal size={12} className="text-[#FE385B]" />
              <span>Core Stack</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {technology.stack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] font-mono text-xs text-[#111111] dark:text-white font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Design Tokens & Philosophy */}
          {technology.designTokens && (
            <div className="space-y-3">
              <span className="font-mono text-[11px] text-[#8E8E93] uppercase tracking-wider block font-semibold flex items-center gap-1.5">
                <Palette size={12} className="text-[#FF7F07]" />
                <span>Sistema Visual UXIO</span>
              </span>
              <ul className="space-y-1.5 text-xs font-mono text-[#555555] dark:text-[#A1A1AA]">
                {technology.designTokens.map((token, tkIdx) => (
                  <li key={tkIdx} className="flex items-center gap-1.5">
                    <span className="text-[#FF7F07]">›</span>
                    <span>{token}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Backend Entities */}
          {technology.backendEntities && (
            <div className="space-y-3">
              <span className="font-mono text-[11px] text-[#8E8E93] uppercase tracking-wider block font-semibold flex items-center gap-1.5">
                <Database size={12} className="text-[#00F0FF]" />
                <span>Entidades Supabase / RLS</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {technology.backendEntities.map((entity, eIdx) => (
                  <span
                    key={eIdx}
                    className="px-2 py-0.5 rounded-md bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06] font-mono text-[10.5px] text-[#666666] dark:text-[#A1A1AA]"
                  >
                    {entity}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
