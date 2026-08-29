'use client';

import React, { useState, useTransition } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Loader2,
  X,
  Sparkles,
  TrendingUp,
  RotateCcw,
} from 'lucide-react';
import { Locale } from '@/types';
import { InstructorQueueItem } from '@/lib/supabase/instructor';
import { reviewSubmissionAction } from '@/app/[lang]/academy/actions/instructor';
import { reviewLocalSubmission } from '@/lib/academy/submissions-store';

interface SubmissionReviewProps {
  item: InstructorQueueItem;
  onClose: () => void;
  onReviewed: (updated: InstructorQueueItem) => void;
  lang: Locale;
}

export default function SubmissionReview({
  item,
  onClose,
  onReviewed,
  lang,
}: SubmissionReviewProps) {
  const isEs = lang === 'es';
  const [feedback, setFeedback] = useState(item.feedbackText || '');
  
  // Initialize checked criteria from saved approvedCriteria
  const [checkedCriteria, setCheckedCriteria] = useState<Record<number, boolean>>(() => {
    const initialMap: Record<number, boolean> = {};
    if (item.approvedCriteria && item.approvedCriteria.length > 0) {
      item.challengeCriteria.forEach((crit, idx) => {
        if (item.approvedCriteria?.includes(crit)) {
          initialMap[idx] = true;
        }
      });
    }
    return initialMap;
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const toggleCriterion = (idx: number) => {
    setCheckedCriteria(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const totalCriteria = item.challengeCriteria.length;
  const checkedCount = Object.values(checkedCriteria).filter(Boolean).length;
  const percentage = totalCriteria > 0 ? Math.round((checkedCount / totalCriteria) * 100) : 100;
  const calculatedGrade = totalCriteria > 0 ? ((checkedCount / totalCriteria) * 5.0).toFixed(1) : '5.0';

  const handleReview = (status: 'approved' | 'needs_revision') => {
    if (status === 'needs_revision' && !feedback.trim()) {
      setErrorMsg(
        isEs
          ? 'Por favor escribe una retroalimentación explicando qué criterios debe corregir el estudiante.'
          : 'Please provide feedback explaining which criteria the student must fix.'
      );
      return;
    }

    setErrorMsg(null);

    const approvedList = item.challengeCriteria.filter((_, idx) => Boolean(checkedCriteria[idx]));

    // Update local store immediately with score, criteria checklist and feedback
    reviewLocalSubmission(item.id, status, feedback, approvedList, percentage);

    const updatedItem: InstructorQueueItem = {
      ...item,
      status,
      feedbackText: feedback.trim() || null,
      approvedCriteria: approvedList,
      reviewedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    onReviewed(updatedItem);

    startTransition(async () => {
      await reviewSubmissionAction({
        submissionId: item.id,
        status,
        feedbackText: feedback,
        lang,
      });
    });
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-lg space-y-6">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
        <div className="space-y-1">
          <span className="font-mono text-[10px] text-[#FE385B] uppercase tracking-wider font-bold bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
            // REVISIÓN Y EVALUACIÓN DOCENTE
          </span>
          <h3 className="font-display font-extrabold text-xl text-[#111111] dark:text-white">
            {item.studentName}
          </h3>
          <p className="text-xs font-mono text-[#8E8E93]">
            {item.courseTitle} · {item.moduleWeekTag} · {item.lessonTitle}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* Deliverable Info */}
      <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded uppercase font-bold border border-[#10B981]/25">
              {item.submissionType}
            </span>
            <span className="font-mono text-xs text-[#8E8E93]">
              {new Date(item.submittedAt).toLocaleDateString()}
            </span>
          </div>

          <a
            href={item.submissionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#10B981]/15 text-[#10B981] hover:bg-[#10B981] hover:text-white font-mono text-xs border border-[#10B981]/30 transition-all shadow-sm"
          >
            <span>{isEs ? 'Abrir Entregable' : 'Open Deliverable'}</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {item.challengePrompt && (
          <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans border-t border-black/[0.04] dark:border-white/[0.04] pt-2">
            <strong>{isEs ? 'Consigna del reto: ' : 'Challenge prompt: '}</strong>
            {item.challengePrompt}
          </p>
        )}

        {item.challengeDeliverable && (
          <p className="text-xs text-[#8E8E93] italic">
            <strong>{isEs ? 'Entregable esperado: ' : 'Expected deliverable: '}</strong>
            {item.challengeDeliverable}
          </p>
        )}
      </div>

      {/* Evaluation Criteria Rubric (Interactive Checkboxes + Live Calculated Score) */}
      {totalCriteria > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#8E8E93] font-bold">
              // {isEs ? 'RÚBRICA DE EVALUACIÓN' : 'RUBRIC EVALUATION'}
            </span>
            <span className="text-[#10B981] font-bold">
              {checkedCount} / {totalCriteria} {isEs ? 'criterios cumplidos' : 'criteria met'}
            </span>
          </div>

          {/* Dynamic Score Calculator Card */}
          <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono text-[#8E8E93] uppercase block">
                {isEs ? 'Nota Calculada según Criterios:' : 'Rubric Calculated Score:'}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-lg sm:text-xl text-[#111111] dark:text-white">
                  {calculatedGrade} / 5.0
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                  percentage === 100
                    ? 'bg-[#10B981]/15 text-[#10B981]'
                    : percentage >= 65
                    ? 'bg-[#FF7F07]/15 text-[#FF7F07]'
                    : 'bg-[#FE385B]/15 text-[#FE385B]'
                }`}>
                  {percentage}% {isEs ? (percentage === 100 ? 'Excelente' : percentage >= 65 ? 'Aceptable' : 'Insuficiente') : ''}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] font-sans text-[#8E8E93] block">
                {percentage === 100
                  ? (isEs ? '✓ Listo para Aprobar' : 'Ready to Approve')
                  : percentage >= 65
                  ? (isEs ? '✓ Aprobado con observaciones' : 'Passed with notes')
                  : (isEs ? '⚠️ Requiere corrección' : 'Needs adjustments')}
              </span>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-1.5">
            {item.challengeCriteria.map((crit, idx) => {
              const isChecked = Boolean(checkedCriteria[idx]);
              return (
                <div
                  key={idx}
                  onClick={() => toggleCriterion(idx)}
                  className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer select-none text-xs font-sans transition-all duration-150 ${
                    isChecked
                      ? 'bg-[#10B981]/[0.08] border-[#10B981]/40 text-[#111111] dark:text-white shadow-sm'
                      : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.06] text-[#666666] dark:text-[#8E8E93] hover:border-black/[0.15]'
                  }`}
                >
                  <div className="mt-0.5">
                    <CheckCircle2
                      size={15}
                      className={isChecked ? 'text-[#10B981]' : 'text-[#8E8E93]/40'}
                    />
                  </div>
                  <span className={isChecked ? 'font-semibold text-[#111111] dark:text-white' : ''}>
                    {crit}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Feedback Textarea */}
      <div className="space-y-1.5">
        <label className="font-mono text-xs text-[#8E8E93] flex items-center justify-between">
          <span>{isEs ? 'Comentarios / Feedback Personalizado:' : 'Student Feedback:'}</span>
          <span className="text-[10px]">{feedback.length} carácteres</span>
        </label>
        <textarea
          rows={3}
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          placeholder={
            isEs
              ? 'Ej: Excelente estructura del guion. Recuerda cuidar la limpieza del lente en la toma frontal para próximas entregas.'
              : 'E.g., Great video structure. Make sure your camera lens is clean for upcoming shots.'
          }
          className="w-full p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white placeholder-[#8E8E93] focus:outline-none focus:border-[#FE385B]"
        />
      </div>

      {errorMsg && (
        <div className="p-3 rounded-xl bg-[#FE385B]/10 border border-[#FE385B]/20 flex items-center gap-2 text-xs text-[#FE385B]">
          <AlertCircle size={14} className="shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Review Actions (Approve / Request Revision - NO Certificate issuance on single lesson) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          disabled={isPending}
          className="w-full sm:w-auto py-2.5 px-3 rounded-xl text-xs font-mono text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
        >
          {isEs ? 'Cerrar' : 'Close'}
        </button>

        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => handleReview('needs_revision')}
            disabled={isPending}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#FF7F07]/15 text-[#FF7F07] hover:bg-[#FF7F07] hover:text-white font-display font-bold text-xs border border-[#FF7F07]/30 transition-all duration-150 active:scale-[0.97] disabled:opacity-50"
          >
            {isPending ? <Loader2 size={12} className="animate-spin" /> : <RotateCcw size={12} />}
            <span>{isEs ? '↻ Solicitar Ajustes' : 'Request Revision'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleReview('approved')}
            disabled={isPending}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-xl bg-[#10B981] text-white hover:bg-[#10B981]/90 font-display font-bold text-xs shadow-md shadow-[#10B981]/20 transition-all duration-150 active:scale-[0.97] disabled:opacity-50"
          >
            {isPending && <Loader2 size={12} className="animate-spin" />}
            <span>{isEs ? `✓ Aprobar Reto (${calculatedGrade})` : `Approve (${calculatedGrade})`}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
