'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Layers, Smartphone, Users, Briefcase } from 'lucide-react';
import { Locale } from '@/types';

export default function AcademyHero({ lang }: { lang: Locale }) {
  const isEs = lang === 'es';

  const pipeline = [
    { name: 'UXIO Academy', status: isEs ? 'ACTIVO' : 'ACTIVE', color: '#FE385B', active: true },
    { name: 'Creator Network', status: isEs ? 'PRÓXIMAMENTE' : 'COMING SOON', color: '#00F0FF', active: false },
    { name: 'Talent Management', status: isEs ? 'EN DISCOVERY' : 'IN DISCOVERY', color: '#FF7F07', active: false },
    { name: 'UGC Marketplace', status: isEs ? 'FUTURO' : 'FUTURE', color: '#FFCC48', active: false },
  ];

  return (
    <section className="relative pt-6 pb-12 md:pt-10 md:pb-16 border-b border-black/[0.06] dark:border-white/[0.08]">
      {/* Top Dispatch Tag */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="font-mono text-xs text-[#FE385B] tracking-tight bg-[#FE385B]/10 px-2.5 py-1 rounded-md border border-[#FE385B]/20">
          // 05 · UXIO ACADEMY
        </span>
        <span className="font-mono text-xs text-[#8E8E93] tracking-tight">
          {isEs ? 'ECOSISTEMA DE FORMACIÓN & TALENTO DE CONTENIDO' : 'CREATOR TRAINING & TALENT ECOSYSTEM'}
        </span>
      </div>

      {/* Main Title */}
      <div className="max-w-3xl space-y-4">
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] dark:text-white tracking-tight leading-[1.15]">
          {isEs ? (
            <>
              Aprende a convertir lo que haces en <span className="text-[#FE385B]">contenido que vende.</span>
            </>
          ) : (
            <>
              Turn what you do into <span className="text-[#FE385B]">high-converting content.</span>
            </>
          )}
        </h1>
        <p className="text-sm sm:text-base text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-2xl">
          {isEs
            ? 'Programas intensivos orientados a la práctica para negocios, marcas y creadores que buscan construir presencia comercial real utilizando las herramientas que ya tienen en sus manos.'
            : 'Hands-on intensive programs for businesses, brands, and creators looking to build real commercial momentum using the tools already in their hands.'}
        </p>
      </div>

      {/* Long Term Vision Roadmap Pills */}
      <div className="mt-8 pt-6 border-t border-black/[0.04] dark:border-white/[0.04]">
        <div className="text-[11px] font-mono text-[#8E8E93] uppercase tracking-wider mb-3">
          {isEs ? 'VISIÓN DE ECOSISTEMA UXIO' : 'UXIO CREATOR ECOSYSTEM ROADMAP'}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {pipeline.map((item, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border transition-all ${
                item.active
                  ? 'bg-white dark:bg-[#171719] border-[#FE385B]/30 shadow-soft-sm'
                  : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.06] opacity-60'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-mono text-[10px] text-[#8E8E93]">0{idx + 1}</span>
                <span
                  className="font-mono text-[9px] px-1.5 py-0.5 rounded"
                  style={{
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  {item.status}
                </span>
              </div>
              <div className="font-display font-bold text-xs text-[#111111] dark:text-white">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
