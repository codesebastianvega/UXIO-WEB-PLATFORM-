'use client';

import React, { useState, useTransition } from 'react';
import {
  UploadCloud,
  CheckCircle2,
  ExternalLink,
  Loader2,
  AlertCircle,
  Clock,
  Edit3,
  Link as LinkIcon,
} from 'lucide-react';
import { Locale } from '@/types';
import { LessonSubmission } from '@/lib/supabase/academy-submissions';
import { upsertLessonSubmissionAction } from '@/app/[lang]/academy/actions/submissions';

interface ChallengeSubmissionProps {
  courseSlug: string;
  lessonId: string;
  initialSubmission?: LessonSubmission | null;
  lang: Locale;
}

export default function ChallengeSubmission({
  courseSlug,
  lessonId,
  initialSubmission = null,
  lang,
}: ChallengeSubmissionProps) {
  const isEs = lang === 'es';
  const [submission, setSubmission] = useState<LessonSubmission | null>(initialSubmission);
  const [isEditing, setIsEditing] = useState(false);
  const [urlInput, setUrlInput] = useState(initialSubmission?.submissionUrl || '');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleOpenForm = () => {
    setUrlInput(submission?.submissionUrl || '');
    setErrorMsg(null);
    setIsEditing(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = urlInput.trim();
    if (!cleanUrl || (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://'))) {
      setErrorMsg(isEs ? 'Ingresa una URL válida que empiece con https://' : 'Enter a valid URL starting with https://');
      return;
    }
    setErrorMsg(null);
    startTransition(async () => {
      const res = await upsertLessonSubmissionAction({
        courseSlug,
        lessonId,
        submissionUrl: cleanUrl,
        submissionType: 'link',
        lang,
      });
      if (res.success && res.submission) {
        setSubmission(res.submission);
        setIsEditing(false);
      } else {
        setErrorMsg(res.error || (isEs ? 'Error al guardar.' : 'Failed to save.'));
      }
    });
  };

  const statusMeta = {
    approved: {
      label: isEs ? 'Reto Aprobado ✓' : 'Approved ✓',
      bg: 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30',
      icon: CheckCircle2,
    },
    needs_revision: {
      label: isEs ? 'Requiere Ajustes' : 'Needs Revision',
      bg: 'bg-[#FF7F07]/15 text-[#FF7F07] border-[#FF7F07]/30',
      icon: AlertCircle,
    },
    pending_review: {
      label: isEs ? 'En Revisión' : 'Under Review',
      bg: 'bg-[#0284C7]/15 dark:bg-[#00F0FF]/15 text-[#0369A1] dark:text-[#00F0FF] border-[#0284C7]/30 dark:border-[#00F0FF]/30',
      icon: Clock,
    },
    submitted: {
      label: isEs ? 'Entrega Enviada' : 'Submitted',
      bg: 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30',
      icon: CheckCircle2,
    },
  }[submission?.status || 'submitted'];

  const StatusIcon = statusMeta.icon;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
        <div className="flex items-center gap-2.5">
          <UploadCloud size={18} className="text-[#FE385B]" />
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
              {isEs ? 'Entrega de Reto Práctico' : 'Challenge Submission'}
            </h3>
            <p className="text-xs text-[#8E8E93] font-sans">
              {isEs
                ? 'Sube el enlace público de tu tarea (Google Drive, Notion, Instagram o TikTok) para recibir feedback.'
                : 'Submit your public work link (Google Drive, Notion, Instagram, or TikTok) to receive feedback.'}
            </p>
          </div>
        </div>

        {submission && !isEditing && (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border font-semibold ${statusMeta.bg}`}>
            <StatusIcon size={13} />
            <span>{statusMeta.label}</span>
          </span>
        )}
      </div>

      {/* Form or Submitted State */}
      {!submission || isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block font-mono text-[11px] text-[#8E8E93]">
              {isEs ? 'ENLACE PÚBLICO DE TU TAREA (DRIVE, NOTION, REEL, TIKTOK) *' : 'PUBLIC WORK LINK (DRIVE, NOTION, REEL, TIKTOK) *'}
            </label>

            <div className="relative">
              <input
                type="url"
                required
                value={urlInput}
                onChange={e => setUrlInput(e.target.value)}
                placeholder="https://drive.google.com/... o https://notion.so/... o https://instagram.com/reel/..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B] transition-colors"
              />
              <LinkIcon size={15} className="absolute left-3.5 top-3.5 text-[#8E8E93]" />
            </div>

            <p className="text-[11px] text-[#8E8E93] font-sans">
              {isEs
                ? '💡 Consejo: Si es Google Drive, asegúrate de que el archivo esté configurado como "Cualquier persona con el enlace puede ver".'
                : '💡 Tip: If using Google Drive, make sure the link access is set to "Anyone with the link can view".'}
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-[#FE385B]/10 border border-[#FE385B]/20 text-xs font-sans text-[#FE385B] flex items-center gap-2">
              <AlertCircle size={15} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            {isEditing && (
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-mono text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
              >
                {isEs ? 'Cancelar' : 'Cancel'}
              </button>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 disabled:opacity-50 text-white font-display font-bold text-xs transition-all shadow-md shadow-[#FE385B]/20 active:scale-[0.98]"
            >
              {isPending ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>{isEs ? 'Guardando entrega...' : 'Submitting...'}</span>
                </>
              ) : (
                <span>{isEditing ? (isEs ? 'Actualizar Entrega' : 'Update Submission') : (isEs ? 'Confirmar Entrega' : 'Confirm Submission')}</span>
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-mono text-[11px] text-[#8E8E93] uppercase font-bold">
                {isEs ? 'ENLACE ENTREGADO' : 'SUBMITTED LINK'}
              </span>
              <span className="font-mono text-[10px] text-[#8E8E93]">
                {isEs ? 'Enviado el' : 'Submitted on'} {new Date(submission.submittedAt).toLocaleDateString()}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <a
                href={submission.submissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#0284C7] dark:text-[#00F0FF] hover:underline flex items-center gap-1.5 truncate max-w-lg"
              >
                <ExternalLink size={13} className="shrink-0" />
                <span className="truncate">{submission.submissionUrl}</span>
              </a>

              <button
                type="button"
                onClick={handleOpenForm}
                className="inline-flex items-center gap-1 text-xs font-mono text-[#8E8E93] hover:text-[#FE385B] transition-colors shrink-0"
              >
                <Edit3 size={13} />
                <span>{isEs ? 'Editar' : 'Edit'}</span>
              </button>
            </div>
          </div>

          {/* Feedback Display */}
          {submission.feedbackText && (
            <div className="p-5 rounded-2xl bg-[#0284C7]/5 dark:bg-[#00F0FF]/5 border border-[#0284C7]/20 dark:border-[#00F0FF]/20 space-y-1.5">
              <div className="font-mono text-[10px] text-[#0369A1] dark:text-[#00F0FF] uppercase font-bold tracking-wider">
                // {isEs ? 'RETROALIMENTACIÓN DOCENTE' : 'INSTRUCTOR FEEDBACK'}
              </div>
              <p className="text-xs sm:text-sm text-[#111111] dark:text-[#E5E5E7] font-sans leading-relaxed">
                "{submission.feedbackText}"
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
