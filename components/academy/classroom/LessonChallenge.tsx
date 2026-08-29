import React from 'react';
import { Award, CheckCircle2, MessageSquare, Target, UploadCloud } from 'lucide-react';
import { LessonChallenge as LessonChallengeType } from '@/data/academy/types';
import { Locale } from '@/types';

interface LessonChallengeProps {
  challenge: LessonChallengeType;
  lang: Locale;
}

export default function LessonChallenge({ challenge, lang }: LessonChallengeProps) {
  const isEs = lang === 'es';

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-[#10B981]/25 dark:border-[#10B981]/20 shadow-soft space-y-6">
      {/* Challenge Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center border border-[#10B981]/20 shrink-0">
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
          <span className="inline-flex items-center gap-1.5 bg-black/[0.02] dark:bg-white/[0.04] px-3 py-1.5 rounded-xl border border-black/[0.06] dark:border-white/[0.06]">
            <Target size={13} className="text-[#10B981]" />
            <span>{isEs ? 'Listo para ejecutar' : 'Ready to execute'}</span>
          </span>
        </div>
      </div>

      {/* 2-Column Instructions: What to do vs What to deliver */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs font-sans">
        {/* What to do */}
        <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] space-y-2">
          <span className="font-mono text-[11px] text-[#10B981] uppercase font-bold tracking-wider block">
            {isEs ? '1. ¿Qué debes hacer?' : '1. What to do?'}
          </span>
          <p className="text-[#666666] dark:text-[#CCCCCC] leading-relaxed">
            {challenge.whatToDo}
          </p>
        </div>

        {/* What to deliver */}
        <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] space-y-2">
          <span className="font-mono text-[11px] text-[#00F0FF] uppercase font-bold tracking-wider block">
            {isEs ? '2. ¿Qué debes entregar?' : '2. What to deliver?'}
          </span>
          <p className="text-[#666666] dark:text-[#CCCCCC] leading-relaxed">
            {challenge.whatToDeliver}
          </p>
        </div>
      </div>

      {/* Submission Channel Notice */}
      <div className="p-4 rounded-2xl bg-[#00F0FF]/[0.04] border border-[#00F0FF]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans">
        <div className="flex items-center gap-2.5">
          <MessageSquare size={16} className="text-[#00F0FF] shrink-0" />
          <div>
            <span className="font-mono text-[10px] text-[#00F0FF] uppercase font-bold block">
              {isEs ? 'Canal de Entrega y Revisión' : 'Submission & Review Channel'}
            </span>
            <p className="text-[#111111] dark:text-white font-medium mt-0.5">
              {challenge.whereToSubmit}
            </p>
          </div>
        </div>

        <span className="font-mono text-[10px] text-[#8E8E93] shrink-0">
          // {isEs ? 'Feedback entre pares y docentes' : 'Peer & instructor review'}
        </span>
      </div>

      {/* Evaluation Criteria */}
      {challenge.evaluationCriteria && challenge.evaluationCriteria.length > 0 && (
        <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] space-y-3">
          <span className="font-mono text-xs text-[#10B981] uppercase font-bold tracking-wider block">
            {isEs ? 'Criterios de Evaluación y Calidad' : 'Evaluation & Quality Criteria'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {challenge.evaluationCriteria.map((crit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-[#111111] border border-black/[0.04] dark:border-white/[0.04] text-xs font-sans text-[#111111] dark:text-white"
              >
                <CheckCircle2 size={13} className="text-[#10B981] shrink-0" />
                <span className="truncate">{crit}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
