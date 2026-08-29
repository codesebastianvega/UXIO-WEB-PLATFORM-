'use client';

import React, { useState, useTransition } from 'react';
import { CheckCircle2, Circle, Loader2, AlertCircle, Lock } from 'lucide-react';
import { Locale } from '@/types';
import { toggleLessonProgressAction } from '@/app/[lang]/academy/actions/progress';

interface LessonCompleteButtonProps {
  courseSlug: string;
  lessonId: string;
  initialCompleted?: boolean;
  isLocked?: boolean;
  lockReason?: string;
  lang: Locale;
  onToggle?: (completed: boolean) => void;
}

export default function LessonCompleteButton({
  courseSlug,
  lessonId,
  initialCompleted = false,
  isLocked = false,
  lockReason,
  lang,
  onToggle,
}: LessonCompleteButtonProps) {
  const isEs = lang === 'es';
  const [isPending, startTransition] = useTransition();
  const [completed, setCompleted] = useState(initialCompleted);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  React.useEffect(() => {
    setCompleted(initialCompleted);
  }, [initialCompleted]);

  const handleToggle = () => {
    if (isPending) return;

    if (!completed && isLocked) {
      setErrorMessage(
        lockReason ||
          (isEs
            ? 'Debes ver los videos y aprobar la mini-evaluación antes de completar la lección.'
            : 'You must watch the videos and pass the quiz before completing the lesson.')
      );
      return;
    }

    const nextState = !completed;
    // Optimistic update
    setCompleted(nextState);
    setErrorMessage(null);
    onToggle?.(nextState);

    startTransition(async () => {
      const res = await toggleLessonProgressAction({
        courseSlug,
        lessonId,
        completed: nextState,
        lang,
      });

      if (!res.success) {
        // Rollback on failure
        setCompleted(!nextState);
        onToggle?.(!nextState);
        setErrorMessage(
          res.error ||
            (isEs
              ? 'No se pudo guardar el progreso. Intenta nuevamente.'
              : 'Failed to update progress. Please try again.')
        );
      }
    });
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleToggle}
        disabled={isPending}
        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl font-display font-bold text-xs transition-all duration-150 shadow-md active:scale-[0.98] ${
          completed
            ? 'bg-[#10B981] text-white shadow-[#10B981]/25 hover:bg-[#0EA572]'
            : isLocked
            ? 'bg-black/[0.05] dark:bg-white/[0.05] text-[#8E8E93] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#FF7F07]/40 cursor-pointer'
            : 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#FE385B] dark:hover:bg-[#FE385B] dark:hover:text-white'
        }`}
      >
        {isPending ? (
          <Loader2 size={16} className="animate-spin text-current" />
        ) : completed ? (
          <CheckCircle2 size={16} className="text-white" />
        ) : isLocked ? (
          <Lock size={15} className="text-[#FF7F07]" />
        ) : (
          <Circle size={16} className="text-current opacity-60" />
        )}

        <span>
          {isPending
            ? isEs
              ? 'Guardando...'
              : 'Saving...'
            : completed
            ? isEs
              ? 'Lección Completada'
              : 'Lesson Completed'
            : isLocked
            ? isEs
              ? 'Requisitos Pendientes'
              : 'Requirements Pending'
            : isEs
            ? 'Marcar como Completada'
            : 'Mark as Completed'}
        </span>
      </button>

      {errorMessage && (
        <div className="flex items-center gap-2 text-xs font-mono text-[#FE385B] bg-[#FE385B]/10 p-2.5 rounded-xl border border-[#FE385B]/20">
          <AlertCircle size={13} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
