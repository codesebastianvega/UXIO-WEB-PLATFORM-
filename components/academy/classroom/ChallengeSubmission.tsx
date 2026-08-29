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
  FileText,
  Image as ImageIcon,
  Video,
  MessageSquare,
} from 'lucide-react';
import { Locale } from '@/types';
import {
  LessonSubmission,
  SubmissionType,
  SubmissionStatus,
} from '@/lib/supabase/academy-submissions';
import { upsertLessonSubmissionAction } from '@/app/[lang]/academy/actions/submissions';

interface ChallengeSubmissionProps {
  courseSlug: string;
  lessonId: string;
  initialSubmission?: LessonSubmission | null;
  lang: Locale;
}

const FORMAT_OPTIONS = [
  { type: 'link' as const, labelEs: 'Enlace / Notion', labelEn: 'Link / Notion', icon: LinkIcon },
  { type: 'document' as const, labelEs: 'Doc / Drive', labelEn: 'Doc / Drive', icon: FileText },
  { type: 'image' as const, labelEs: 'Imagen / Foto', labelEn: 'Image / Photo', icon: ImageIcon },
  { type: 'video' as const, labelEs: 'Video / Reel', labelEn: 'Video / Reel', icon: Video },
];

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
  const [typeInput, setTypeInput] = useState<SubmissionType>(initialSubmission?.submissionType || 'link');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleOpenForm = () => {
    setUrlInput(submission?.submissionUrl || '');
    setTypeInput(submission?.submissionType || 'link');
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
        submissionType: typeInput,
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
    approved: { label: isEs ? 'Reto Aprobado ✓' : 'Approved ✓', bg: 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30' },
    needs_revision: { label: isEs ? 'Requiere Ajustes' : 'Needs Revision', bg: 'bg-[#FF7F07]/15 text-[#FF7F07] border-[#FF7F07]/30' },
    pending_review: { label: isEs ? 'En Revisión' : 'Under Review', bg: 'bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/30' },
    submitted: { label: isEs ? 'Entrega Enviada' : 'Submitted', bg: 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30' },
  }[submission?.status || 'submitted'];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
        <div className="flex items-center gap-2.5">
          <UploadCloud size={18} className="text-[#00F0FF]" />
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
              {isEs ? 'Entrega de Reto Práctico' : 'Challenge Submission'}
            </h3>
            <p className="text-xs text-[#8E8E93] font-sans">
              {isEs ? 'Sube tu enlace de Notion, Drive, Figma o video para recibir feedback.' : 'Submit your link to receive review.'}
            </p>
          </div>
        </div>
        {submission && !isEditing && (
          <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full border ${statusMeta.bg}`}>
            {statusMeta.label}
          </span>
        )}
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {FORMAT_OPTIONS.map(item => {
              const isSelected = typeInput === item.type;
              const IconComp = item.icon;
              return (
                <button
                  key={item.type}
                  type="button"
                  onClick={() => setTypeInput(item.type)}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-mono border transition-all ${
                    isSelected ? 'bg-[#00F0FF]/15 border-[#00F0FF]/40 text-[#00F0FF] font-bold' : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.06] text-[#8E8E93]'
                  }`}
                >
                  <IconComp size={13} />
                  <span>{isEs ? item.labelEs : item.labelEn}</span>
                </button>
              );
            })}
          </div>

          <div className="relative">
            <input
              type="url"
              required
              value={urlInput}
              onChange={e => setUrlInput(e.target.value)}
              placeholder="https://notion.so/... o https://drive.google.com/..."
              className="w-full py-3 pl-4 pr-10 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-[#111111] dark:text-white placeholder-[#8E8E93]/60 focus:outline-none focus:border-[#00F0FF]/50"
            />
            <LinkIcon size={14} className="absolute right-3.5 top-3.5 text-[#8E8E93]" />
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-[#FE385B]/10 border border-[#FE385B]/20 flex items-center gap-2 text-xs text-[#FE385B]">
              <AlertCircle size={14} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            <button type="button" onClick={() => setIsEditing(false)} disabled={isPending} className="py-2.5 px-4 rounded-xl text-xs font-mono text-[#8E8E93]">
              {isEs ? 'Cancelar' : 'Cancel'}
            </button>
            <button type="submit" disabled={isPending} className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-[#00F0FF] text-black font-display font-bold text-xs hover:bg-[#00F0FF]/90">
              {isPending && <Loader2 size={13} className="animate-spin" />}
              <span>{isPending ? (isEs ? 'Guardando...' : 'Saving...') : (isEs ? 'Confirmar Entrega' : 'Submit Challenge')}</span>
            </button>
          </div>
        </form>
      ) : submission ? (
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#8E8E93]">
              <div className="flex items-center gap-2">
                <Clock size={13} />
                <span>{isEs ? 'Enviado el:' : 'Submitted:'} {new Date(submission.submittedAt).toLocaleDateString(isEs ? 'es-CO' : 'en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <span className="text-[10px] text-[#00F0FF] uppercase bg-[#00F0FF]/10 px-2 py-0.5 rounded border border-[#00F0FF]/20">{submission.submissionType}</span>
            </div>
            <div className="flex items-center justify-between gap-3 pt-1">
              <a href={submission.submissionUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-[#00F0FF] hover:underline truncate max-w-lg">
                <ExternalLink size={13} className="shrink-0" />
                <span className="truncate">{submission.submissionUrl}</span>
              </a>
              <button type="button" onClick={handleOpenForm} className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono text-[#111111] dark:text-white border border-black/[0.06] dark:border-white/[0.06] shrink-0">
                <Edit3 size={12} />
                <span>{isEs ? 'Editar Entrega' : 'Edit Submission'}</span>
              </button>
            </div>
          </div>
          {submission.feedbackText && (
            <div className="p-4 rounded-2xl bg-[#10B981]/[0.05] border border-[#10B981]/25 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#10B981]">
                <MessageSquare size={13} />
                <span>{isEs ? 'Feedback del Docente:' : 'Instructor Feedback:'}</span>
              </div>
              <p className="text-xs font-sans text-white leading-relaxed">{submission.feedbackText}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
          <div>
            <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white">{isEs ? '¿Terminaste tu entregable?' : 'Finished your deliverable?'}</h4>
            <p className="text-xs text-[#8E8E93] font-sans">{isEs ? 'Envía tu enlace para registrar tu entrega y recibir feedback.' : 'Submit your link to receive review.'}</p>
          </div>
          <button type="button" onClick={handleOpenForm} className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-[#00F0FF] text-black font-display font-bold text-xs hover:bg-[#00F0FF]/90 shadow-md shadow-[#00F0FF]/20 shrink-0">
            <UploadCloud size={14} />
            <span>{isEs ? 'Entregar Reto' : 'Submit Challenge'}</span>
          </button>
        </div>
      )}
    </div>
  );
}
