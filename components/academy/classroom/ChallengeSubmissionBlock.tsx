'use client';

import React from 'react';
import {
  Link as LinkIcon,
  ExternalLink,
  Edit3,
  Send,
  Loader2,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Clock,
} from 'lucide-react';
import { Locale } from '@/types';
import { LessonSubmission } from '@/lib/supabase/academy-submissions';

interface ChallengeSubmissionBlockProps {
  submission: LessonSubmission | null;
  evaluationCriteria?: string[];
  isEditing: boolean;
  setIsEditing: (v: boolean) => void;
  urlInput: string;
  setUrlInput: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
  errorMsg: string | null;
  whatsappUrl: string;
  lang: Locale;
}

export default function ChallengeSubmissionBlock({
  submission,
  evaluationCriteria = [],
  isEditing,
  setIsEditing,
  urlInput,
  setUrlInput,
  onSubmit,
  isPending,
  errorMsg,
  whatsappUrl,
  lang,
}: ChallengeSubmissionBlockProps) {
  const isEs = lang === 'es';

  const status = submission?.status;
  const approvedCriteria = submission?.approvedCriteria || [];
  const criteriaCount = evaluationCriteria.length;
  const approvedCount = approvedCriteria.length;

  const score5 =
    status === 'approved'
      ? approvedCount > 0
        ? ((approvedCount / (criteriaCount || 1)) * 5.0).toFixed(1)
        : '5.0'
      : status === 'needs_revision'
      ? ((approvedCount / (criteriaCount || 1)) * 5.0).toFixed(1)
      : null;

  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-[#FE385B] uppercase font-bold tracking-wider">
            // {isEs ? 'TU ENTREGA (ENLACE PÚBLICO)' : 'YOUR SUBMISSION LINK'}
          </span>
          {score5 !== null && (
            <span
              className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${
                status === 'approved'
                  ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/25'
                  : 'bg-[#FF7F07]/15 text-[#FF7F07] border border-[#FF7F07]/25'
              }`}
            >
              {isEs ? `Nota: ${score5} / 5.0` : `Grade: ${score5} / 5.0`}
            </span>
          )}
        </div>

        {submission && !isEditing && (
          <button
            type="button"
            onClick={() => {
              setUrlInput(submission.submissionUrl);
              setIsEditing(true);
            }}
            className="inline-flex items-center gap-1 text-[11px] font-mono text-[#8E8E93] hover:text-[#FE385B] transition-colors"
          >
            <Edit3 size={11} />
            <span>{isEs ? 'Cambiar enlace' : 'Change link'}</span>
          </button>
        )}
      </div>

      {submission && !isEditing ? (
        <div className="space-y-3.5">
          {/* Link Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.06] shadow-2xs">
            <div className="flex items-center gap-2 min-w-0">
              <LinkIcon size={14} className="text-[#10B981] shrink-0" />
              <a
                href={submission.submissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#111111] dark:text-white hover:text-[#10B981] underline truncate"
              >
                {submission.submissionUrl}
              </a>
            </div>

            <a
              href={submission.submissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#10B981] text-xs font-mono font-bold text-[#111111] dark:text-white hover:text-white transition-all duration-150 shrink-0 self-start sm:self-auto"
            >
              <span>{isEs ? 'Abrir Tarea' : 'Open Work'}</span>
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Minimalist Rubric Chips */}
          {criteriaCount > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#8E8E93]">
                <span>// {isEs ? 'CRITERIOS EVALUADOS' : 'EVALUATED CRITERIA'}</span>
                <span>
                  {status === 'approved' && approvedCount === 0 ? criteriaCount : approvedCount} / {criteriaCount} {isEs ? 'superados' : 'passed'}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {evaluationCriteria.map((crit, idx) => {
                  const isPassed = status === 'approved' || approvedCriteria.includes(crit);
                  const isRevision = status === 'needs_revision' && !isPassed;

                  return (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-1.5 text-[11px] font-sans px-3 py-1 rounded-xl border transition-all ${
                        isPassed
                          ? 'bg-[#10B981]/10 text-[#059669] dark:text-[#10B981] border-[#10B981]/25 font-medium'
                          : isRevision
                          ? 'bg-[#FF7F07]/10 text-[#C2410C] dark:text-[#FF7F07] border-[#FF7F07]/25 font-medium'
                          : 'bg-black/[0.02] dark:bg-white/[0.04] text-[#8E8E93] border-black/[0.04] dark:border-white/[0.06]'
                      }`}
                    >
                      {isPassed ? (
                        <CheckCircle2 size={12} className="text-[#10B981] shrink-0" />
                      ) : isRevision ? (
                        <AlertCircle size={12} className="text-[#FF7F07] shrink-0" />
                      ) : (
                        <Clock size={12} className="text-[#8E8E93] shrink-0" />
                      )}
                      <span>{crit}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Instructor Feedback */}
          {submission.feedbackText && (
            <div className="p-3.5 rounded-2xl bg-[#10B981]/[0.06] border border-[#10B981]/20 space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#059669] dark:text-[#10B981] font-bold">
                <span>// {isEs ? 'FEEDBACK DEL DOCENTE' : 'INSTRUCTOR FEEDBACK'}</span>
                {submission.reviewedAt && (
                  <span className="text-[#8E8E93]">
                    {new Date(submission.reviewedAt).toLocaleDateString(isEs ? 'es-CO' : 'en-US')}
                  </span>
                )}
              </div>
              <p className="text-xs text-[#222222] dark:text-[#E5E5E7] font-sans leading-relaxed">
                "{submission.feedbackText}"
              </p>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1">
              <input
                type="url"
                value={urlInput}
                onChange={e => setUrlInput(e.target.value)}
                placeholder="https://drive.google.com/... o https://notion.so/... o https://tiktok.com/..."
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-[#111111] dark:text-white focus:outline-none focus:border-[#10B981] transition-all"
              />
              <LinkIcon size={14} className="absolute left-3 top-3 text-[#8E8E93]" />
            </div>

            <div className="flex items-center gap-2">
              {isEditing && (
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-3.5 py-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-xs font-mono text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-all"
                >
                  {isEs ? 'Cancelar' : 'Cancel'}
                </button>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#10B981]/90 text-white font-display font-bold text-xs transition-all shadow-sm active:scale-[0.98] disabled:opacity-50"
              >
                {isPending ? (
                  <Loader2 size={13} className="animate-spin" />
                ) : (
                  <Send size={13} />
                )}
                <span>{isPending ? (isEs ? 'Guardando...' : 'Saving...') : (isEs ? 'Enviar Reto ➔' : 'Submit ➔')}</span>
              </button>
            </div>
          </div>

          {errorMsg && (
            <p className="text-[11px] font-mono text-[#FE385B]">{errorMsg}</p>
          )}
        </form>
      )}

      {/* WhatsApp Support Dedicated Button Row */}
      <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-black/[0.06] dark:border-white/[0.06]">
        <span className="text-xs text-[#8E8E93] font-sans">
          {isEs ? '¿Tienes dudas sobre cómo estructurar tu entrega o los formatos?' : 'Questions regarding your deliverable or formats?'}
        </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#10B981]/15 hover:bg-[#10B981] text-[#059669] hover:text-white dark:text-[#10B981] border border-[#10B981]/30 hover:border-[#10B981] text-xs font-display font-bold transition-all duration-150 shadow-sm backdrop-blur-md shrink-0 active:scale-[0.98] hover:scale-[1.02]"
        >
          <MessageCircle size={14} className="transition-transform duration-150 group-hover:rotate-12" />
          <span>{isEs ? 'Unirme al Grupo de WhatsApp ↗' : 'Join WhatsApp Group ↗'}</span>
        </a>
      </div>
    </div>
  );
}
