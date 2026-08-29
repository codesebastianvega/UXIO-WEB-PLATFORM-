'use client';

import React from 'react';
import { EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import { User, Briefcase, Database, Cpu } from 'lucide-react';

interface EcosystemArchitectureDiagramProps {
  ecosystem: EcosystemSchema;
  lang: Locale;
}

export default function EcosystemArchitectureDiagram({
  ecosystem,
  lang,
}: EcosystemArchitectureDiagramProps) {
  const isEs = lang === 'es';
  const arch = ecosystem.conceptualArchitecture;

  if (!arch) return null;

  return (
    <section className="space-y-8 py-10 border-t border-black/[0.06] dark:border-white/[0.08]">
      <div className="space-y-2">
        <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest block font-semibold">
          // {arch.title || (isEs ? 'ARQUITECTURA CONCEPTUAL' : 'CONCEPTUAL ARCHITECTURE')}
        </span>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
          {arch.subtitle || (isEs ? 'La interfaz pública es solo la superficie del producto.' : 'The public web is only the surface of the product.')}
        </h3>
      </div>

      {/* Dual Dimension Architecture Board */}
      <div className="p-8 rounded-[2rem] bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Branch 1: Left Dimension */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#151518] border border-black/[0.06] dark:border-white/[0.08] space-y-5">
            <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
              <span
                className="font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                style={{ color: arch.branchLeft.accent }}
              >
                <User size={14} />
                <span>{arch.branchLeft.title}</span>
              </span>
              <span className="font-mono text-[10px] text-[#8E8E93]">
                {arch.branchLeft.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {arch.branchLeft.subBranches.map((sub, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] space-y-2"
                >
                  <span className="font-mono text-[10.5px] font-bold text-[#111111] dark:text-white uppercase flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: arch.branchLeft.accent }}
                    />
                    <span>{sub.title}</span>
                  </span>
                  <ul className="text-[11px] text-[#555555] dark:text-[#A1A1AA] space-y-1 font-mono">
                    {sub.items.map((item, iIdx) => (
                      <li key={iIdx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Branch 2: Right Dimension */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#151518] border border-black/[0.06] dark:border-white/[0.08] space-y-5">
            <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
              <span
                className="font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                style={{ color: arch.branchRight.accent }}
              >
                <Briefcase size={14} />
                <span>{arch.branchRight.title}</span>
              </span>
              <span className="font-mono text-[10px] text-[#8E8E93]">
                {arch.branchRight.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {arch.branchRight.subBranches.map((sub, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] space-y-2"
                >
                  <span className="font-mono text-[10.5px] font-bold text-[#111111] dark:text-white uppercase flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: arch.branchRight.accent }}
                    />
                    <span>{sub.title}</span>
                  </span>
                  <ul className="text-[11px] text-[#555555] dark:text-[#A1A1AA] space-y-1 font-mono">
                    {sub.items.map((item, iIdx) => (
                      <li key={iIdx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Foundation Base (Dynamically adapts to ecosystem) */}
        <div className="p-5 rounded-2xl bg-[#111111] text-white space-y-2 text-center shadow-lg">
          <div className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            <Database size={13} />
            <span>{arch.foundation.title}</span>
          </div>
          <div className="font-display font-bold text-sm sm:text-base tracking-tight">
            {arch.foundation.stackSummary}
          </div>
        </div>
      </div>
    </section>
  );
}
