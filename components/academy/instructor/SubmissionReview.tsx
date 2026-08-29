'use client';

import React, { useState, useTransition } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Loader2,
  X,
  MessageSquare,
  Sparkles,
  ClipboardList,
  Link as LinkIcon,
  Clock,
} from 'lucide-react';
import { Locale } from '@/types';
import { InstructorQueueItem } from '@/lib/supabase/instructor';
import { reviewSubmissionAction } from '@/app/[lang]/academy/actions/instructor';

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
  const [checkedCriteria, setCheckedCriteria] = useState<Record<number, boolean>>({});
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const toggleCriterion = (idx: number) => {
    setCheckedCriteria(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleReview = (status: 'approved' | 'needs_revision') => {
    if (status === 'needs_revision' && !feedback.trim()) {
      setErrorMsg(
        isEs
          ? 'Por favor escribe un feedback para que el alumno sepa qué ajustar.'
          : 'Please provide feedback so the student knows what to adjust.'
      );
      return;
    }

    setErrorMsg(null);

    startTransition(async () => {
      const res = await reviewSubmissionAction({
        submissionId: item.id,
        status,
        feedbackText: feedback,
        lang,
      });

      if (res.success) {
        onReviewed({
          ...item,
          status,
          feedbackText: feedback.trim() || null,
          reviewedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      } else {
        setErrorMsg(
          res.error || (isEs ? 'Error al guardar la revisión.' : 'Failed to save review.')
        );
      }
    });
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-lg space-y-6">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
        <div className="space-y-1">
          <span className="font-mono text-[10px] text-[#00F0FF] uppercase tracking-wider font-bold">
            // REVISIÓN DOCENTE
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

      {/* 1. Student Deliverable Link Card */}
      <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-[#8E8E93]">
          <span className="flex items-center gap-1.5">
            <LinkIcon size={13} className="text-[#00F0FF]" />
            {isEs ? 'Entregable del Alumno:' : 'Student Deliverable:'}
          </span>
          <span className="uppercase text-[10px] text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded">
            {item.submissionType}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <a
            href={item.submissionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#00F0FF] hover:underline truncate max-w-md"
          >
            <ExternalLink size={14} className="shrink-0" />
            <span className="truncate">{item.submissionUrl}</span>
          </a>

          <a
            href={item.submissionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00F0FF] text-black font-display font-bold text-xs hover:bg-[#00F0FF]/90 transition-all shadow-md shadow-[#00F0FF]/20 shrink-0"
          >
            <span>{isEs ? 'Abrir en pestaña nueva' : 'Open in new tab'}</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* 2. Challenge Instructions Briefing */}
      {item.challengePrompt && (
        <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] space-y-2 text-xs font-sans">
          <span className="font-mono text-[10px] text-[#FE385B] uppercase font-bold block">
            {isEs ? 'Consigna del Reto:' : 'Challenge Brief:'}
          </span>
          <p className="text-[#111111] dark:text-[#E5E5E7] leading-relaxed">
            {item.challengePrompt}
          </p>
          {item.challengeDeliverable && (
            <p className="text-[#8E8E93] italic">
              <strong>{isEs ? 'Entregable esperado: ' : 'Expected deliverable: '}</strong>
              {item.challengeDeliverable}
            </p>
          )}
        </div>
      )}

      {/* 3. Evaluation Criteria Rubric */}
      {item.challengeCriteria.length > 0 && (
        <div className="space-y-2">
          <span className="font-mono text-xs text-[#8E8E93] block">
            {isEs ? 'Criterios de Evaluación (Rúbrica):' : 'Evaluation Criteria (Rubric):'}
          </span>
          <div className="space-y-1.5">
            {item.challengeCriteria.map((crit, idx) => (
              <label
                key={idx}
                onClick={() => toggleCriterion(idx)}
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] cursor-pointer hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-xs font-sans transition-colors"
              >
                <input
                  type="checkbox"
                  checked={checkedCriteria[idx] || false}
                  onChange={() => {}}
                  className="mt-0.5 accent-[#10B981] rounded"
                />
                <span className={checkedCriteria[idx] ? 'text-[#10B981] font-medium' : 'text-[#666666] dark:text-[#8E8E93]'}>
                  {crit}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* 4. Feedback Textarea */}
      <div className="space-y-1.5">
        <label className="font-mono text-xs text-[#8E8E93] flex items-center justify-between">
          <span>{isEs ? 'Comentarios / Feedback para el Alumno:' : 'Feedback for Student:'}</span>
          <span className="text-[10px]">{feedback.length} carácteres</span>
        </label>
        <textarea
          rows={4}
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          placeholder={
            isEs
              ? 'Ej: ¡Excelente gancho inicial! Te recomiendo mejorar la iluminación en el segundo plano para mayor nitidez.'
              : 'E.g., Great hook! Suggest improving the lighting in the b-roll for higher sharpness.'
          }
          className="w-full p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white placeholder-[#8E8E93] focus:outline-none focus:border-[#00F0FF]/50"
        />
      </div>

      {/* Error Message */}
      {errorMsg && (
        <div className="p-3 rounded-xl bg-[#FE385B]/10 border border-[#FE385B]/20 flex items-center gap-2 text-xs text-[#FE385B]">
          <AlertCircle size={14} className="shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* 5. Review Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          disabled={isPending}
          className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-mono text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
        >
          {isEs ? 'Cerrar sin guardar' : 'Close'}
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => handleReview('needs_revision')}
            disabled={isPending}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#FF7F07]/15 text-[#FF7F07] hover:bg-[#FF7F07]/25 font-display font-bold text-xs border border-[#FF7F07]/30 transition-all disabled:opacity-50"
          >
            {isPending && <Loader2 size={13} className="animate-spin" />}
            <span>{isEs ? '↻ Solicitar Ajustes' : 'Request Revision'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleReview('approved')}
            disabled={isPending}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-[#10B981] text-white hover:bg-[#10B981]/90 font-display font-bold text-xs shadow-md shadow-[#10B981]/20 transition-all disabled:opacity-50"
          >
            {isPending && <Loader2 size={13} className="animate-spin" />}
            <span>{isEs ? '✓ Aprobar Reto' : 'Approve Challenge'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
