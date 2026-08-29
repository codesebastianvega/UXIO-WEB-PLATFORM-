'use client';

import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { SubService } from '@/data/services';
import { Locale } from '@/types';

interface SubServiceDeliverablesProps {
  subService: SubService;
  lang: Locale;
}

export default function SubServiceDeliverables({ subService, lang }: SubServiceDeliverablesProps) {
  const isEs = lang === 'es';

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm">
      <div className="lg:col-span-7 space-y-4">
        <span className="font-mono text-xs text-[#8E8E93] uppercase tracking-wider block">
          {isEs ? '// ENTREGABLES CONCRETOS DEL SPRINT' : '// TANGIBLE SPRINT DELIVERABLES'}
        </span>
        <h3 className="font-display font-bold text-lg sm:text-xl text-[#111111] dark:text-white">
          {isEs ? 'Lo que recibes exactamente al finalizar:' : 'Exact deliverables upon completion:'}
        </h3>
        <ul className="space-y-3 pt-2">
          {subService.deliverables.map((deliv, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[#333333] dark:text-[#CCCCCC]">
              <CheckCircle2 size={16} className="text-[#10B981] flex-shrink-0 mt-0.5" />
              <span>{deliv}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-5 p-6 rounded-2xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.06] dark:border-white/[0.08] flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-[#FE385B]" />
            <span className="font-mono text-xs font-bold text-[#111111] dark:text-white uppercase tracking-tight">
              {isEs ? 'NUESTRO ENFOQUE' : 'OUR APPROACH'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
            {subService.approach}
          </p>
        </div>

        <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#8E8E93]">
            {isEs ? 'Inicio estimado:' : 'Starting timeline:'}
          </span>
          <span className="font-mono text-xs font-bold text-[#111111] dark:text-white">
            {subService.estimatedTimeline}
          </span>
        </div>
      </div>
    </section>
  );
}
