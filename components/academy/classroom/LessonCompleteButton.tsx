'use client';

import React, { useState, useTransition } from 'react';
import { CheckCircle2, Circle, Loader2, AlertCircle } from 'lucide-react';
import { Locale } from '@/types';
import { toggleLessonProgressAction } from '@/app/[lang]/academy/actions/progress';

interface LessonCompleteButtonProps {
  courseSlug: string;
  lessonId: string;
  initialCompleted?: boolean;
  lang: Locale;
  onToggle?: (completed: boolean) => void;
}

export default function LessonCompleteButton({
  courseSlug,
  lessonId,
  initialCompleted = false,
  lang,
  onToggle,
}: LessonCompleteButtonProps) {
  const isEs = lang === 'es';
  const [isPending, startTransition] = useTransition();
  const [completed, setCompleted] = useState(initialCompleted);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleToggle = () => {
    if (isPending) return;

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
        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl font-display font-bold text-xs transition-all shadow-md active:scale-[0.98] ${
          completed
            ? 'bg-[#10B981] text-white shadow-[#10B981]/25 hover:bg-[#0EA572]'
            : 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#FE385B] dark:hover:bg-[#FE385B] dark:hover:text-white'
        }`}
      >
        {isPending ? (
          <Loader2 size={16} className="animate-spin text-current" />
        ) : completed ? (
          <CheckCircle2 size={16} className="text-white" />
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
