import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Locale } from '@/types';

interface PeopleCultureBentoProps {
  culturePoints: {
    title: string;
    desc: string;
    accent: string;
  }[];
  lang: Locale;
}

export default function PeopleCultureBento({ culturePoints, lang }: PeopleCultureBentoProps) {
  const isEs = lang === 'es';

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-3">
        <div className="space-y-0.5">
          <span className="font-mono text-[10px] text-[#10B981] uppercase tracking-wider font-semibold">
            // {isEs ? 'ADN DE TRABAJO' : 'OPERATING CULTURE'}
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
            {isEs ? 'Nuestra Cultura de Construcción' : 'How We Build & Collaborate'}
          </h2>
        </div>
        <span className="font-mono text-[11px] text-[#8E8E93]">
          {isEs ? 'VALORES FUNDAMENTALES' : 'CORE VALUES'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {culturePoints.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span
                className="w-2 h-2 rounded-full block"
                style={{ backgroundColor: item.accent }}
              />
              <h3 className="font-display font-bold text-base text-[#111111] dark:text-white">
                {item.title}
              </h3>
            </div>
            <p className="text-xs text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Join the Studio Banner */}
      <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-black/[0.03] to-black/[0.08] dark:from-[#171719] dark:to-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-xl">
          <div className="flex items-center gap-2">
            <Sparkles size={15} className="text-[#FF7F07]" />
            <span className="font-mono text-[10px] text-[#FF7F07] uppercase tracking-wider font-semibold">
              // {isEs ? 'CONVOCATORIA ABIERTA' : 'OPEN COLLABORATION'}
            </span>
          </div>
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
            {isEs ? '¿Quieres construir el futuro con UXIO?' : 'Want to build the future with UXIO?'}
          </h3>
          <p className="text-xs text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
            {isEs
              ? 'Siempre buscamos ingenieros de frontend obsesionados con la fluidez, diseñadores de producto con criterio y creadores de contenido de alto impacto.'
              : 'We are constantly looking for frontend engineers obsessed with frame-rates, visionary product designers, and elite commercial creators.'
            }
          </p>
        </div>

        <Link
          href={`/${lang}/contact`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111111] dark:bg-white text-white dark:text-black font-display font-bold text-xs shadow-md transition-all active:scale-[0.98] shrink-0"
        >
          <span>{isEs ? 'Postularse o Colaborar' : 'Apply or Partner'}</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
