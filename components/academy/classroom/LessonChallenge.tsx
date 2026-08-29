'use client';

import React from 'react';
import { Award, CheckCircle2, MessageSquare, Target, ExternalLink, MessageCircle } from 'lucide-react';
import { LessonChallenge as LessonChallengeType } from '@/data/academy/types';
import { Locale } from '@/types';

interface LessonChallengeProps {
  challenge: LessonChallengeType;
  lang: Locale;
}

export default function LessonChallenge({ challenge, lang }: LessonChallengeProps) {
  const isEs = lang === 'es';

  const whatsappCommunityUrl = 'https://chat.whatsapp.com/sample-cohort-group';

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-[#10B981]/30 dark:border-[#10B981]/20 shadow-soft space-y-6">
      {/* Challenge Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center border border-[#10B981]/25 shrink-0">
            <Award size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-[#10B981] uppercase tracking-wider font-bold bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                {isEs ? 'RETO PRÁCTICO' : 'PRACTICAL CHALLENGE'}
              </span>
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white mt-0.5">
              {challenge.title}
            </h3>
          </div>
        </div>

        <div className="text-xs font-mono text-[#8E8E93] shrink-0">
          <span className="inline-flex items-center gap-1.5 bg-black/[0.03] dark:bg-white/[0.04] px-3 py-1.5 rounded-xl border border-black/[0.06] dark:border-white/[0.06]">
            <Target size={13} className="text-[#10B981]" />
            <span>{isEs ? 'Listo para ejecutar' : 'Ready to execute'}</span>
          </span>
        </div>
      </div>

      {/* 2-Column Instructions: What to do vs What to deliver */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs font-sans">
        {/* 1. What to do */}
        <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-2.5">
          <span className="font-mono text-[11px] text-[#059669] dark:text-[#10B981] uppercase font-bold tracking-wider block">
            {isEs ? '1. ¿Qué debes hacer?' : '1. What to do?'}
          </span>
          <p className="text-[#333333] dark:text-[#CCCCCC] leading-relaxed text-xs sm:text-sm">
            {challenge.whatToDo}
          </p>
        </div>

        {/* 2. What to deliver */}
        <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-2.5">
          <span className="font-mono text-[11px] text-[#0284C7] dark:text-[#00F0FF] uppercase font-bold tracking-wider block">
            {isEs ? '2. ¿Qué debes entregar?' : '2. What to deliver?'}
          </span>
          <p className="text-[#333333] dark:text-[#CCCCCC] leading-relaxed text-xs sm:text-sm">
            {challenge.whatToDeliver}
          </p>
        </div>
      </div>

      {/* Submission Channel & WhatsApp Group Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#0284C7]/5 dark:bg-[#00F0FF]/5 border border-[#0284C7]/20 dark:border-[#00F0FF]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#0284C7]/15 dark:bg-[#00F0FF]/15 flex items-center justify-center text-[#0284C7] dark:text-[#00F0FF] shrink-0">
            <MessageSquare size={16} />
          </div>
          <div>
            <span className="font-mono text-[10px] text-[#0369A1] dark:text-[#00F0FF] uppercase font-bold block">
              {isEs ? 'Canal de Entrega y Dudas' : 'Submission Channel'}
            </span>
            <p className="text-[#111111] dark:text-white font-semibold mt-0.5">
              {challenge.whereToSubmit}
            </p>
          </div>
        </div>

        <a
          href={whatsappCommunityUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#10B981]/90 text-white font-display font-bold text-xs transition-all shadow-sm shrink-0 active:scale-[0.98]"
        >
          <MessageCircle size={14} />
          <span>{isEs ? 'Unirme al Grupo de WhatsApp' : 'Join WhatsApp Group'}</span>
        </a>
      </div>

      {/* Evaluation Criteria without truncation */}
      {challenge.evaluationCriteria && challenge.evaluationCriteria.length > 0 && (
        <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
          <span className="font-mono text-xs text-[#059669] dark:text-[#10B981] uppercase font-bold tracking-wider block">
            {isEs ? 'Criterios de Evaluación y Calidad' : 'Evaluation & Quality Criteria'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {challenge.evaluationCriteria.map((crit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-[#111111] border border-black/[0.06] dark:border-white/[0.06] text-xs font-sans text-[#111111] dark:text-white shadow-2xs"
              >
                <CheckCircle2 size={15} className="text-[#10B981] shrink-0 mt-0.5" />
                <span className="leading-snug">{crit}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
