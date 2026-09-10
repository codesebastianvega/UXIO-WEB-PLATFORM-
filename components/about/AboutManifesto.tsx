import React from 'react';
import { AboutManifestoPoint } from '@/data/about';
import { Locale } from '@/types';

interface AboutManifestoProps {
  manifestoPoints: AboutManifestoPoint[];
  lang: Locale;
}

export default function AboutManifesto({ manifestoPoints, lang }: AboutManifestoProps) {
  const isEs = lang === 'es';

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-3">
        <div className="space-y-0.5">
          <span className="font-mono text-[10px] text-[#FE385B] uppercase tracking-wider font-semibold">
            // {isEs ? 'CONSIGNAS DE DESARROLLO' : 'CORE TENETS'}
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
            {isEs ? 'El Manifiesto UXIO' : 'The UXIO Manifesto'}
          </h2>
        </div>
        <span className="font-mono text-[11px] text-[#8E8E93]">
          [03 PILARES]
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {manifestoPoints.map((item) => (
          <div
            key={item.number}
            className="group relative p-6 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.15] dark:hover:border-white/[0.2] transition-all flex flex-col justify-between space-y-4 hover:shadow-soft-lg"
          >
            {/* Top Accent Stripe */}
            <div
              className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: item.accent }}
            />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-2xl font-extrabold tracking-tighter"
                  style={{ color: item.accent }}
                >
                  {item.number}
                </span>
                <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-[#8E8E93]">
                  {item.tag}
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-[#111111] dark:text-white pt-1">
                {item.title}
              </h3>
            </div>

            <p className="text-xs text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
