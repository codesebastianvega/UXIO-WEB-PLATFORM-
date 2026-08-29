'use client';

import React from 'react';
import Link from 'next/link';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Clock,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Award,
} from 'lucide-react';
import { Locale } from '@/types';
import { Lesson, Module } from '@/data/academy/types';
import { LessonSubmission } from '@/lib/supabase/academy-submissions';

interface GradeDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    lesson: Lesson;
    moduleItem: Module;
    submission: LessonSubmission | null;
  } | null;
  courseSlug: string;
  lang: Locale;
}

export default function GradeDetailModal({
  isOpen,
  onClose,
  item,
  courseSlug,
  lang,
}: GradeDetailModalProps) {
  if (!isOpen || !item) return null;

  const isEs = lang === 'es';
  const { lesson, moduleItem, submission } = item;
  const status = submission?.status || 'not_submitted';
  const criteriaList = lesson.challenge?.evaluationCriteria || [];
  const approvedCriteria = submission?.approvedCriteria || [];
  const criteriaCount = criteriaList.length;
  const approvedCriteriaCount = approvedCriteria.length;

  const score5 =
    status === 'approved'
      ? approvedCriteriaCount > 0
        ? ((approvedCriteriaCount / criteriaCount) * 5.0).toFixed(1)
        : '5.0'
      : status === 'needs_revision'
      ? ((approvedCriteriaCount / (criteriaCount || 1)) * 5.0).toFixed(1)
      : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-[#FE385B] uppercase font-bold bg-[#FE385B]/10 px-2.5 py-0.5 rounded border border-[#FE385B]/20">
                {moduleItem.weekTag}
              </span>
              <span className="font-mono text-xs text-[#8E8E93]">
                {lesson.title}
              </span>
            </div>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
              {lesson.challenge?.title || lesson.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Score and Status Banner */}
        <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono text-[#8E8E93] uppercase block">
              {isEs ? 'Calificación Cuantitativa' : 'Quantitative Score'}
            </span>
            <div className="flex items-center gap-2.5">
              <span className="font-display font-black text-2xl text-[#111111] dark:text-white">
                {score5 !== null ? `${score5} / 5.0` : (isEs ? 'Sin calificar' : 'Ungraded')}
              </span>
              {status === 'approved' && (
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/25">
                  ✓ {isEs ? 'Aprobado' : 'Approved'}
                </span>
              )}
              {status === 'needs_revision' && (
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FF7F07]/15 text-[#FF7F07] border border-[#FF7F07]/25">
                  ⚠️ {isEs ? 'Requiere Ajustes' : 'Needs Revision'}
                </span>
              )}
            </div>
          </div>

          {submission?.submissionUrl && (
            <a
              href={submission.submissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#10B981]/15 hover:bg-[#10B981] text-xs font-mono font-bold text-[#059669] hover:text-white dark:text-[#10B981] border border-[#10B981]/30 transition-all shadow-sm shrink-0 self-start sm:self-auto"
            >
              <span>{isEs ? 'Abrir Enlace Entregado' : 'Open Submitted Link'}</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>

        {/* Rubric Criteria Checklist */}
        {criteriaList.length > 0 && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#8E8E93] font-bold">
                // {isEs ? 'RÚBRICA DE EVALUACIÓN DETALLADA' : 'DETAILED EVALUATION RUBRIC'}
              </span>
              <span className="text-[#10B981] font-bold">
                {status === 'approved' && approvedCriteriaCount === 0
                  ? criteriaCount
                  : approvedCriteriaCount}{' '}
                / {criteriaCount} {isEs ? 'criterios superados' : 'criteria passed'}
              </span>
            </div>

            <div className="space-y-2">
              {criteriaList.map((crit, idx) => {
                const isPassed = status === 'approved' || approvedCriteria.includes(crit);
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border text-xs font-sans transition-colors ${
                      isPassed
                        ? 'bg-[#10B981]/[0.06] border-[#10B981]/30 text-[#111111] dark:text-white'
                        : 'bg-[#FF7F07]/[0.05] border-[#FF7F07]/25 text-[#8E8E93]'
                    }`}
                  >
                    <CheckCircle2
                      size={16}
                      className={`shrink-0 mt-0.5 ${
                        isPassed ? 'text-[#10B981]' : 'text-[#FF7F07]'
                      }`}
                    />
                    <div className="min-w-0">
                      <span className={isPassed ? 'font-semibold text-[#111111] dark:text-white' : ''}>
                        {crit}
                      </span>
                      {!isPassed && (
                        <p className="text-[11px] font-mono text-[#FF7F07] mt-0.5">
                          {isEs ? '⚠️ Criterio pendiente por mejorar en tu re-entrega' : '⚠️ Criterion needs improvement'}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Feedback from Instructor */}
        {submission?.feedbackText && (
          <div className="p-4 rounded-2xl bg-[#FE385B]/[0.05] border border-[#FE385B]/25 space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#FE385B] font-bold uppercase tracking-wider">
              <span>// {isEs ? 'RETROALIMENTACIÓN OFICIAL DEL DOCENTE' : 'INSTRUCTOR FEEDBACK'}</span>
              {submission.reviewedAt && (
                <span className="text-[#8E8E93]">
                  {new Date(submission.reviewedAt).toLocaleDateString(isEs ? 'es-CO' : 'en-US')}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-[#111111] dark:text-[#E5E5E7] font-sans leading-relaxed">
              "{submission.feedbackText}"
            </p>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-black/[0.06] dark:border-white/[0.06] pt-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-xs font-mono text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
          >
            {isEs ? 'Cerrar' : 'Close'}
          </button>

          <Link
            href={`/${lang}/academy/classroom/${courseSlug}/${moduleItem.slug}/${lesson.slug}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FE385B] text-white font-display font-bold text-xs hover:bg-[#FE385B]/90 shadow-md transition-all active:scale-[0.98]"
          >
            <span>{isEs ? 'Ir a la Clase y Entregar Reto ➔' : 'Go to Lesson & Submit ➔'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
