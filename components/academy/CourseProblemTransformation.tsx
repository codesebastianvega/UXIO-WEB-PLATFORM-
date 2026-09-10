'use client';

import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { CourseProgram } from '@/data/academy/types';
import { Locale } from '@/types';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';

interface Props {
  course: CourseProgram;
  lang: Locale;
}

export default function CourseProblemTransformation({ course, lang }: Props) {
  const isEs = lang === 'es';

  const problemTags = isEs
    ? [
        '01 · Estrategia & Ideas',
        '02 · Grabación & Tomas',
        '03 · Confianza & Guion',
        '04 · Edición Ágil',
        '05 · Conversión & Ventas',
        '06 · Autoridad de Marca',
      ]
    : [
        '01 · Strategy & Ideas',
        '02 · Filming & Angles',
        '03 · Camera Confidence',
        '04 · Fast Editing',
        '05 · Sales Conversion',
        '06 · Brand Authority',
      ];

  return (
    <section className="py-12 md:py-16 border-b border-black/[0.06] dark:border-white/[0.08] space-y-12">
      {/* Visual Feature Showcase Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#121214] via-[#1A1A1E] to-[#0D0D0E] border border-black/[0.1] dark:border-white/[0.12] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft-xl">
        <div className="space-y-3 max-w-xl z-10">
          <span className="font-mono text-[10px] sm:text-xs uppercase px-2.5 py-1 rounded-full bg-[#FE385B]/20 text-[#FE385B] border border-[#FE385B]/30 font-bold inline-block">
            {isEs ? 'Producción Profesional con tu Celular' : 'Pro Production with your Phone'}
          </span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            {isEs ? 'El fin de los videos que pasan desapercibidos.' : 'The end of videos that get ignored.'}
          </h3>
          <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-sans">
            {isEs 
              ? 'No necesitas cámaras de cine ni equipos costosos. El 90% del impacto comercial radica en la luz adecuada, audio nítido, el gancho en los primeros 2 segundos y una llamada a la acción clara.' 
              : 'You do not need cinema cameras or expensive rigs. 90% of commercial impact comes from clean light, sharp audio, a magnetic 2-second hook, and a clear call to action.'}
          </p>
        </div>
        <div className="w-full md:w-80 aspect-[16/10] rounded-2xl overflow-hidden relative shrink-0 border border-white/15 shadow-md group">
          <img
            src="/academy/creator-lab/hero-creator-setup.jpg"
            alt="Creator Lab Setup"
            className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <span className="absolute bottom-2.5 right-2.5 font-mono text-[9px] uppercase px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white/90 border border-white/15">
            Setup Móvil UXIO
          </span>
        </div>
      </div>

      {/* 1. The Real Problems Grid */}
      <div className="space-y-6">
        <div className="max-w-xl space-y-2">
          <span className="font-mono text-xs text-[#FE385B] tracking-tight uppercase font-semibold">
            {isEs ? '¿Te pasa esto al intentar vender por redes?' : 'Do you struggle with any of these when selling online?'}
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
            {isEs ? 'Situaciones reales a las que se enfrenta tu negocio' : 'Real roadblocks your business faces today'}
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] font-sans">
            {isEs
              ? 'La mayoría de negocios no tienen un problema de producto, tienen un problema de traducción audiovisual.'
              : 'Most businesses don’t have a product problem—they have an audiovisual translation problem.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {course.problems.map((problem, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] flex flex-col justify-between space-y-3 group hover:border-[#FE385B]/40 hover:shadow-soft-md transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-[#FE385B]/10 text-[#FE385B] border border-[#FE385B]/20">
                  {problemTags[idx] || `0${idx + 1}`}
                </span>
                <AlertCircle size={14} className="text-[#FE385B]/60 group-hover:text-[#FE385B] transition-colors" />
              </div>
              <p className="font-sans text-xs sm:text-[13px] font-medium text-[#111111] dark:text-[#E5E5E7] leading-relaxed italic">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Before / After Transformation Matrix */}
      <div className="space-y-6">
        <div className="max-w-xl space-y-2">
          <span className="font-mono text-xs text-[#10B981] tracking-tight uppercase">
            // {isEs ? 'TRANSFORMACIÓN PRÁCTICA' : 'PRACTICAL SHIFT'}
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
            {isEs ? 'El cambio que construirás durante las 5 semanas' : 'The shift you will build in 5 weeks'}
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] font-sans">
            {isEs
              ? 'No enseñamos teoría abstracta. Entras con dudas y sales con un sistema de contenido activo.'
              : 'Zero fluff theory. You enter with doubts and leave with an operating content machine.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {course.transformations.map((item, idx) => (
            <AuroraSpotlightCard
              key={idx}
              color="#10B981"
              className="min-h-[190px]"
            >
              <div className="space-y-4">
                {/* Before state */}
                <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8E8E93] block mb-1">
                    {isEs ? 'ANTES' : 'BEFORE'}
                  </span>
                  <p className="font-sans text-xs text-[#666666] dark:text-[#8E8E93] line-through decoration-[#FE385B]/60">
                    {item.before}
                  </p>
                </div>

                <div className="flex justify-center -my-1 text-[#10B981]">
                  <ArrowRight size={14} className="rotate-90 md:rotate-0" />
                </div>

                {/* After state */}
                <div className="p-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20">
                  <div className="flex items-center gap-1.5 mb-1">
                    <CheckCircle2 size={12} className="text-[#10B981]" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#10B981] font-bold">
                      {isEs ? 'DESPUÉS (CREATOR LAB)' : 'AFTER (CREATOR LAB)'}
                    </span>
                  </div>
                  <p className="font-sans text-xs font-semibold text-[#111111] dark:text-white leading-relaxed">
                    {item.after}
                  </p>
                </div>
              </div>
            </AuroraSpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
