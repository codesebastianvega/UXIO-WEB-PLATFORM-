'use client';

import React from 'react';
import { EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import { ArrowRight, Compass, Cpu, Layers, ShieldCheck, TrendingUp } from 'lucide-react';

interface EcosystemTransformationProps {
  ecosystem: EcosystemSchema;
  lang: Locale;
}

export default function EcosystemTransformation({
  ecosystem,
  lang,
}: EcosystemTransformationProps) {
  const isEs = lang === 'es';
  const { transformation, framework, mainConcept, pitch } = ecosystem;

  const frameworkSteps = [
    { key: 'think', label: 'THINK', icon: <Compass size={14} className="text-[#FE385B]" />, desc: framework?.think },
    { key: 'design', label: 'DESIGN', icon: <Layers size={14} className="text-[#FF7F07]" />, desc: framework?.design },
    { key: 'build', label: 'BUILD', icon: <Cpu size={14} className="text-[#00F0FF]" />, desc: framework?.build },
    { key: 'operate', label: 'OPERATE', icon: <ShieldCheck size={14} className="text-[#10B981]" />, desc: framework?.operate },
    { key: 'scale', label: 'SCALE', icon: <TrendingUp size={14} className="text-[#7928CA]" />, desc: framework?.scale },
  ];

  return (
    <section className="space-y-12 py-10 border-t border-black/[0.06] dark:border-white/[0.08]">
      {/* Main Concept Callout */}
      {mainConcept && (
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#FE385B] uppercase tracking-widest block font-semibold">
            // {isEs ? 'CONCEPTO PRINCIPAL' : 'CORE THESIS'}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#111111] dark:text-white tracking-tight">
            {mainConcept}
          </h2>
          {pitch && (
            <p className="text-lg sm:text-xl font-light text-[#555555] dark:text-[#A1A1AA] leading-relaxed max-w-4xl font-sans pt-2">
              &ldquo;{pitch}&rdquo;
            </p>
          )}
        </div>
      )}

      {/* 4-Stage Evolution Ladder */}
      {transformation && (
        <div className="p-8 rounded-[2rem] bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[#8E8E93] uppercase tracking-widest">
              {isEs ? 'LA TRANSFORMACIÓN DEL NEGOCIO' : 'THE BUSINESS TRANSFORMATION'}
            </span>
            <span className="font-mono text-[10px] text-[#FE385B] font-bold">4 STAGES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {transformation.stages.map((stage, sIdx) => {
              const isLast = sIdx === transformation.stages.length - 1;
              return (
                <div
                  key={sIdx}
                  className={`p-4 rounded-2xl border transition-all ${
                    isLast
                      ? 'bg-gradient-to-b from-[#FE385B]/10 to-transparent border-[#FE385B]/30 text-white'
                      : 'bg-white dark:bg-[#18181B] border-black/[0.06] dark:border-white/[0.08]'
                  }`}
                >
                  <span className="font-mono text-[10px] text-[#8E8E93] block font-semibold mb-1">
                    STAGE 0{sIdx + 1}
                  </span>
                  <div className="font-display font-bold text-sm sm:text-base text-[#111111] dark:text-white tracking-tight">
                    {stage}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="font-mono text-xs text-[#555555] dark:text-[#A1A1AA] pt-2">
            → {transformation.tagline}
          </p>
        </div>
      )}

      {/* UXIO End-to-End Capabilities Framework */}
      {framework && (
        <div className="space-y-6 pt-4">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#8E8E93] uppercase tracking-widest font-medium">
              {isEs ? 'CAPACIDAD INTEGRAL DEMOSTRADA' : 'END-TO-END CAPABILITY FRAMEWORK'}
            </span>
            <h3 className="font-display font-bold text-2xl text-[#111111] dark:text-white tracking-tight">
              Think ➔ Design ➔ Build ➔ Operate ➔ Scale
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {frameworkSteps.map((step) => (
              <div
                key={step.key}
                className="p-5 rounded-2xl bg-white dark:bg-[#151518] border border-black/[0.06] dark:border-white/[0.08] space-y-2 hover:border-[#00F0FF] transition-colors"
              >
                <div className="flex items-center gap-2">
                  {step.icon}
                  <span className="font-mono font-bold text-xs text-[#111111] dark:text-white">
                    {step.label}
                  </span>
                </div>
                <p className="font-sans text-xs text-[#555555] dark:text-[#A1A1AA] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
