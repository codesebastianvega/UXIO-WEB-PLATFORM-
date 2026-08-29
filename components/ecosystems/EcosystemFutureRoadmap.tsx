'use client';

import React from 'react';
import { EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import { Rocket, CheckCircle2, Award } from 'lucide-react';

interface EcosystemFutureRoadmapProps {
  ecosystem: EcosystemSchema;
  lang: Locale;
}

export default function EcosystemFutureRoadmap({
  ecosystem,
  lang,
}: EcosystemFutureRoadmapProps) {
  const isEs = lang === 'es';
  const { futureRoadmap = [], uxioRolesDetailed = [] } = ecosystem;

  return (
    <section className="space-y-16 py-10 border-t border-black/[0.06] dark:border-white/[0.08]">
      {/* 1. Future Roadmap */}
      {futureRoadmap.length > 0 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#7928CA] uppercase tracking-widest block font-semibold flex items-center gap-2">
              <Rocket size={13} />
              <span>// {isEs ? 'ECOSISTEMA FUTURO & EXPANSIÓN' : 'FUTURE ROADMAP & SCALING'}</span>
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
              {isEs ? 'Un ecosistema en continua evolución, no un proyecto cerrado.' : 'A living ecosystem in continuous evolution.'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureRoadmap.map((item, iIdx) => (
              <div
                key={iIdx}
                className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] flex items-start gap-3 hover:border-[#7928CA] transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#7928CA]/15 text-[#7928CA] flex items-center justify-center flex-shrink-0 mt-0.5 font-mono text-[10px] font-bold">
                  {iIdx + 1}
                </div>
                <span className="font-sans text-xs sm:text-sm text-[#222222] dark:text-[#E4E4E7] font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Detailed UXIO Partner Roles */}
      {uxioRolesDetailed.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#FE385B] uppercase tracking-widest block font-semibold flex items-center gap-2">
              <Award size={13} />
              <span>// {isEs ? 'ROL INTEGRAL DE UXIO COMO DIGITAL PRODUCT PARTNER' : 'UXIO FULL SCOPE'}</span>
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
              {isEs ? 'Pensar, diseñar, construir, operar y escalar.' : 'Think, design, build, operate, scale.'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {uxioRolesDetailed.map((role, rIdx) => (
              <div
                key={rIdx}
                className="p-4 rounded-2xl bg-white dark:bg-[#151518] border border-black/[0.06] dark:border-white/[0.08] space-y-1.5"
              >
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#FE385B] uppercase">
                  <CheckCircle2 size={13} />
                  <span>{role.area}</span>
                </div>
                <p className="font-sans text-xs text-[#555555] dark:text-[#A1A1AA] leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
