'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Calendar, Clock, CheckCircle2, Smartphone } from 'lucide-react';
import { CourseProgram } from '@/data/academy/types';
import { getCohortStatusInfo } from '@/data/academy';
import { Locale } from '@/types';

interface CourseHeroProps {
  course: CourseProgram;
  lang: Locale;
}

export default function CourseHero({ course, lang }: CourseHeroProps) {
  const isEs = lang === 'es';
  const statusInfo = getCohortStatusInfo(course.cohortCapacity, lang);

  const whatsappMessage = encodeURIComponent(
    isEs
      ? `Hola UXIO Studio, quiero información e inscribirme en ${course.title} (${course.cohortName}) — ${course.commercialName}.`
      : `Hi UXIO Studio, I would like more info and to enroll in ${course.title} (${course.cohortName}) — ${course.commercialName}.`
  );

  return (
    <section className="relative pt-6 pb-10 md:pt-10 md:pb-14 border-b border-black/[0.06] dark:border-white/[0.08]">
      {/* Top Header Tags */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-semibold text-[#FE385B] bg-[#FE385B]/10 px-2.5 py-1 rounded-md border border-[#FE385B]/20">
            {course.title.toUpperCase()} · {course.cohortName.toUpperCase()}
          </span>
          <span className="font-mono text-xs text-[#8E8E93] hidden sm:inline">
            // {isEs ? 'PROGRAMA PRÁCTICO' : 'HANDS-ON LAB'}
          </span>
        </div>

        {/* Dynamic Configurable Cohort Status Badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border ${statusInfo.bg}`}>
          <span className={`w-2 h-2 rounded-full ${statusInfo.dotColor}`} />
          <span className="font-medium">{statusInfo.label}</span>
        </div>
      </div>

      {/* Main Commercial Offer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Commercial Pitch */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] dark:text-white tracking-tight leading-[1.1]">
              {course.commercialName}
            </h1>
            <p className="text-base sm:text-lg text-[#111111] dark:text-[#E5E5E7] font-medium leading-relaxed">
              {course.subtitle}
            </p>
            <p className="text-sm text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">
              {course.lead}
            </p>
          </div>

          {/* Quick Pillars Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {[
              isEs ? 'Solo necesitas tu celular' : 'Smartphone only',
              isEs ? '5 semanas de formación y feedback' : '5 weeks of training & feedback',
              isEs ? 'Sesiones en vivo + comunidad' : 'Live sessions + private community',
              isEs ? 'Proyecto real de 30 días de contenido' : '30-day real content capstone',
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-sans text-[#111111] dark:text-[#E5E5E7]">
                <CheckCircle2 size={14} className="text-[#10B981] shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
            <a
              href="#inscripcion"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-sm transition-all shadow-lg shadow-[#FE385B]/20 active:scale-[0.98]"
            >
              <span>{isEs ? 'Quiero Inscribirme' : 'Enroll Now'}</span>
              <ArrowRight size={16} />
            </a>

            <a
              href={`https://wa.me/573000000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-[#171719] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-[#111111] dark:text-white border border-black/[0.08] dark:border-white/[0.08] font-display font-semibold text-sm transition-all active:scale-[0.98]"
            >
              <MessageCircle size={16} className="text-[#10B981]" />
              <span>{isEs ? 'Consultas por WhatsApp' : 'WhatsApp Concierge'}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Pricing & Timeline Summary Card */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-lg space-y-6">
            {/* Price Badge */}
            <div className="border-b border-black/[0.06] dark:border-white/[0.06] pb-5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#FE385B] uppercase tracking-wider font-semibold">
                  {isEs ? 'PRECIO DE LANZAMIENTO' : 'LAUNCH PRICE'}
                </span>
                {course.regularPriceCOP && (
                  <span className="font-mono text-xs text-[#8E8E93] line-through">
                    ${course.regularPriceCOP.toLocaleString()} COP
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] dark:text-white">
                  ${course.priceCOP.toLocaleString()}
                </span>
                <span className="font-mono text-xs text-[#8E8E93]">COP (~${course.priceUSD} USD)</span>
              </div>
              <p className="text-[11px] text-[#8E8E93] font-sans">
                {isEs ? 'Pago único · Acceso completo a la cohorte y grabaciones' : 'One-time payment · Full access to live cohort and recordings'}
              </p>
            </div>

            {/* Date Breakdown */}
            <div className="space-y-3.5 text-xs font-sans">
              <div className="flex items-start gap-3">
                <Calendar size={16} className="text-[#00F0FF] mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-[#111111] dark:text-white">
                    {course.commercialDuration} · {course.datesOverview}
                  </div>
                  <div className="text-[#8E8E93] text-[11px] mt-0.5">
                    {course.inductionNotice}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[#FF7F07] mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-[#111111] dark:text-white">
                    {isEs ? 'Modalidad Flexible' : 'Flexible Format'}
                  </div>
                  <div className="text-[#8E8E93] text-[11px]">
                    {course.modality}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Smartphone size={16} className="text-[#FE385B] mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-[#111111] dark:text-white">
                    {isEs ? 'Equipo Requerido' : 'Required Gear'}
                  </div>
                  <div className="text-[#8E8E93] text-[11px]">
                    {isEs ? 'Únicamente tu smartphone (iOS o Android) con cámara funcional.' : 'Only your smartphone (iOS or Android) with working camera.'}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Enroll Button */}
            <div className="pt-2">
              <Link
                href={`/${lang}/academy/creator-lab/enroll`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-display font-semibold text-xs transition-all active:scale-[0.98]"
              >
                <span>{isEs ? 'Ir a Página de Inscripción Directa' : 'Go to Direct Enrollment Page'}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
