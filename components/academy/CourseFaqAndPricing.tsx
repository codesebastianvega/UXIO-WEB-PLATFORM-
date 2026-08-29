'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import { CourseProgram } from '@/data/academy/types';
import { getCohortStatusInfo } from '@/data/academy';
import { Locale } from '@/types';

interface Props {
  course: CourseProgram;
  lang: Locale;
}

export default function CourseFaqAndPricing({ course, lang }: Props) {
  const isEs = lang === 'es';
  const statusInfo = getCohortStatusInfo(course.cohortCapacity, lang);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => (prev === idx ? null : idx));
  };

  const whatsappMessage = encodeURIComponent(
    isEs
      ? `Hola UXIO Studio, quiero inscribirme en ${course.title} (${course.cohortName}) con el precio de lanzamiento de $${course.priceCOP.toLocaleString()} COP.`
      : `Hi UXIO Studio, I want to enroll in ${course.title} (${course.cohortName}) at the launch price of $${course.priceCOP.toLocaleString()} COP.`
  );

  return (
    <section className="py-12 md:py-16 space-y-14">
      {/* 1. FAQs Accordion */}
      <div className="space-y-6">
        <div className="max-w-xl space-y-2">
          <span className="font-mono text-xs text-[#00F0FF] tracking-tight uppercase">
            // {isEs ? 'PREGUNTAS FRECUENTES' : 'FREQUENTLY ASKED QUESTIONS'}
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
            {isEs ? 'Todo lo que necesitas saber' : 'Everything you need to know'}
          </h2>
        </div>

        <div className="space-y-3">
          {course.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] overflow-hidden transition-all shadow-soft-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-display font-semibold text-xs sm:text-sm text-[#111111] dark:text-white">
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-[#8E8E93] shrink-0">
                    {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 border-t border-black/[0.04] dark:border-white/[0.04] pt-4">
                    <p className="font-sans text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Final Commercial Closing Card */}
      <div
        id="inscripcion-cierre"
        className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-white to-black/[0.02] dark:from-[#171719] dark:to-[#0D0D0E] border border-[#FE385B]/30 shadow-soft-lg space-y-6 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border mx-auto bg-[#FE385B]/10 border-[#FE385B]/20 text-[#FE385B]">
          <span className="w-2 h-2 rounded-full bg-[#FE385B] animate-pulse" />
          <span>{statusInfo.label}</span>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] dark:text-white tracking-tight">
            {isEs ? 'Comienza a vender con tu contenido' : 'Start turning content into revenue'}
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] font-sans">
            {isEs
              ? `Únete a la ${course.cohortName}. Inversión de lanzamiento única de $${course.priceCOP.toLocaleString()} COP.`
              : `Join ${course.cohortName}. Special launch investment of $${course.priceCOP.toLocaleString()} COP.`}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#inscripcion"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-sm transition-all shadow-lg shadow-[#FE385B]/20 active:scale-[0.98]"
          >
            <span>{isEs ? 'Inscribirme Ahora' : 'Enroll Right Now'}</span>
            <ArrowRight size={16} />
          </a>

          <a
            href={`https://wa.me/573000000000?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white dark:bg-[#171719] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-[#111111] dark:text-white border border-black/[0.08] dark:border-white/[0.08] font-display font-semibold text-sm transition-all active:scale-[0.98]"
          >
            <MessageCircle size={16} className="text-[#10B981]" />
            <span>{isEs ? 'Asesoría por WhatsApp' : 'Chat via WhatsApp'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
