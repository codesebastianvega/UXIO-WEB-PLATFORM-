'use client';

import React from 'react';
import { EcosystemPieceDetail } from '@/types/ecosystem';
import { Locale } from '@/types';
import { CheckCircle2, Cpu, Database, Package } from 'lucide-react';

interface EcosystemPieceDeliverablesProps {
  piece: EcosystemPieceDetail;
  lang: Locale;
}

export default function EcosystemPieceDeliverables({
  piece,
  lang,
}: EcosystemPieceDeliverablesProps) {
  const isEs = lang === 'es';

  return (
    <section className="space-y-8 py-8 border-t border-black/[0.06] dark:border-white/[0.08]">
      <div className="space-y-2">
        <span className="font-mono text-xs text-[#FE385B] uppercase tracking-widest block font-semibold flex items-center gap-2">
          <Package size={13} />
          <span>{isEs ? '// ENTREGABLES & INGENIERÍA' : '// DELIVERABLES & ENGINEERING'}</span>
        </span>
        <h3 className="font-display font-bold text-2xl text-[#111111] dark:text-white tracking-tight">
          {isEs ? 'Qué construyó UXIO para esta pieza' : 'What UXIO Built for this Module'}
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Deliverables List */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-white dark:bg-[#151518] border border-black/[0.06] dark:border-white/[0.08] space-y-4">
          <span className="font-mono text-xs text-[#8E8E93] uppercase tracking-wider block font-semibold">
            {isEs ? 'Entregables Tangibles' : 'Tangible Deliverables'}
          </span>
          <ul className="space-y-3 font-sans text-sm text-[#333333] dark:text-[#D4D4D8]">
            {piece.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Stack & Data Entities */}
        <div className="lg:col-span-5 space-y-6">
          {/* Tech Stack */}
          <div className="p-5 rounded-3xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] space-y-3">
            <span className="font-mono text-xs text-[#8E8E93] uppercase tracking-wider block font-semibold flex items-center gap-2">
              <Cpu size={13} className="text-[#00F0FF]" />
              <span>Tech Stack</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {piece.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white dark:bg-[#18181B] border border-black/[0.06] dark:border-white/[0.08] font-mono text-xs text-[#111111] dark:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Entities */}
          {piece.architectureOrEntities && piece.architectureOrEntities.length > 0 && (
            <div className="p-5 rounded-3xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] space-y-3">
              <span className="font-mono text-xs text-[#8E8E93] uppercase tracking-wider block font-semibold flex items-center gap-2">
                <Database size={13} className="text-[#FE385B]" />
                <span>{isEs ? 'Entidades / Datos' : 'Data Entities'}</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {piece.architectureOrEntities.map((ent, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-white dark:bg-[#18181B] border border-black/[0.06] dark:border-white/[0.08] font-mono text-[11px] text-[#555555] dark:text-[#A1A1AA]"
                  >
                    {ent}
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
