'use client';

import React from 'react';
import { EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import { ArrowRight } from 'lucide-react';

interface EcosystemFlowAndOverviewProps {
  ecosystem: EcosystemSchema;
  lang: Locale;
}

export default function EcosystemFlowAndOverview({
  ecosystem,
  lang,
}: EcosystemFlowAndOverviewProps) {
  const isEs = lang === 'es';
  const { overview, flow = [] } = ecosystem;

  // Split first letter for drop-cap editorial effect
  const challengeFirstLetter = overview.challenge.charAt(0);
  const challengeRest = overview.challenge.slice(1);

  return (
    <section className="space-y-20 py-8">
      {/* Asymmetric Magazine Narrative: Challenge on Left, Execution Offset on Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: The Challenge */}
        <div className="md:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#FE385B] uppercase tracking-widest block font-semibold">
              // {isEs ? '01 · EL DESAFÍO ESTRATÉGICO' : '01 · THE STRATEGIC CHALLENGE'}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#111111] dark:text-white tracking-tight">
              {isEs ? 'Redefinir los límites de la industria.' : 'Redefining industry boundaries.'}
            </h2>
          </div>

          <div className="text-base sm:text-lg text-[#444444] dark:text-[#CCCCCC] leading-relaxed font-sans">
            <span className="float-left text-5xl sm:text-6xl font-display font-black mr-3.5 leading-none text-[#FE385B]">
              {challengeFirstLetter}
            </span>
            <span>{challengeRest}</span>
          </div>
        </div>

        {/* Right Column: The UXIO Role (Offset downwards) */}
        <div className="md:col-span-6 md:mt-16 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest block font-semibold">
              // {isEs ? '02 · LA SOLUCIÓN & ROL UXIO' : '02 · THE UXIO SOLUTION'}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#111111] dark:text-white tracking-tight">
              {isEs ? 'Arquitectura viva y diseño de precisión.' : 'Living architecture & precision design.'}
            </h2>
          </div>

          {/* Blockquote with Thick Accent Line */}
          <div className="pl-6 border-l-4 border-[#00F0FF] py-2">
            <p className="text-base sm:text-lg text-[#444444] dark:text-[#CCCCCC] leading-relaxed font-sans font-light italic">
              &ldquo;{overview.roleDescription}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Operational Flow as Soft Floating Sequence */}
      {flow.length > 0 && (
        <div className="pt-10 border-t border-black/[0.06] dark:border-white/[0.08] space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8E8E93] font-medium">
              {isEs ? 'ARQUITECTURA DEL FLUJO OPERATIVO' : 'OPERATIONAL ECOSYSTEM PIPELINE'}
            </span>
            <span className="font-mono text-[10px] text-[#8E8E93]">{flow.length} STAGES</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {flow.map((step, sIdx) => {
              const isLast = sIdx === flow.length - 1;
              return (
                <React.Fragment key={sIdx}>
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] shadow-2xs hover:border-[#FE385B] transition-colors">
                    <span className="font-mono text-[10.5px] text-[#FE385B] font-bold">0{sIdx + 1}</span>
                    <span className="font-display font-semibold text-xs sm:text-sm text-[#111111] dark:text-white tracking-tight">
                      {step}
                    </span>
                  </div>

                  {!isLast && (
                    <span className="text-[#8E8E93]/40 flex items-center">
                      <ArrowRight size={14} />
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
