'use client';

import React from 'react';
import { Locale } from '@/types';
import LessonCompleteButton from './LessonCompleteButton';

interface LessonCompletionCardProps {
  courseSlug: string;
  lessonId: string;
  isLessonCompleted: boolean;
  totalMicroclasses: number;
  watchedCount: number;
  hasQuiz: boolean;
  isQuizPassed: boolean;
  hasChallenge: boolean;
  hasSubmission: boolean;
  lang: Locale;
}

export default function LessonCompletionCard({
  courseSlug,
  lessonId,
  isLessonCompleted,
  totalMicroclasses,
  watchedCount,
  hasQuiz,
  isQuizPassed,
  hasChallenge,
  hasSubmission,
  lang,
}: LessonCompletionCardProps) {
  const isEs = lang === 'es';
  const allVideosWatched = totalMicroclasses === 0 || watchedCount >= totalMicroclasses;
  const quizPassed = !hasQuiz || isQuizPassed;
  const challengePassed = !hasChallenge || hasSubmission;
  const canComplete = allVideosWatched && quizPassed && challengePassed;
  const isEffectivelyCompleted = isLessonCompleted && canComplete;

  const missingList: string[] = [];
  if (!allVideosWatched) {
    missingList.push(isEs ? `ver todas las microclases (${watchedCount}/${totalMicroclasses})` : `watch all microclasses (${watchedCount}/${totalMicroclasses})`);
  }
  if (!quizPassed) {
    missingList.push(isEs ? 'aprobar la mini-evaluación al 100%' : 'pass the quiz at 100%');
  }
  if (!challengePassed) {
    missingList.push(isEs ? 'enviar el reto práctico' : 'submit the challenge link');
  }

  const lockReason = isEs
    ? `Debes ${missingList.join(', ')} para poder completar la lección.`
    : `You must ${missingList.join(', ')} to complete this lesson.`;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#121214]/80 border border-black/[0.08] dark:border-white/[0.08] backdrop-blur-2xl shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-150">
      <div className="text-left space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-display font-bold text-sm sm:text-base text-[#111111] dark:text-white">
            {isEs ? 'Progreso de la Lección' : 'Lesson Progress'}
          </h4>

          {totalMicroclasses > 0 && (
            <span
              className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-lg border backdrop-blur-md transition-all duration-150 ${
                allVideosWatched
                  ? 'bg-[#10B981]/20 text-[#047857] dark:text-[#10B981] border-[#10B981]/30'
                  : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#8E8E93] border-black/[0.06]'
              }`}
            >
              {allVideosWatched
                ? isEs
                  ? `Videos Vistos (${watchedCount}/${totalMicroclasses}) ✓`
                  : `Videos Watched (${watchedCount}/${totalMicroclasses}) ✓`
                : isEs
                  ? `Videos (${watchedCount}/${totalMicroclasses})`
                  : `Videos (${watchedCount}/${totalMicroclasses})`}
            </span>
          )}

          {hasQuiz && (
            <span
              className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-lg border backdrop-blur-md transition-all duration-150 ${
                isQuizPassed
                  ? 'bg-[#10B981]/20 text-[#047857] dark:text-[#10B981] border-[#10B981]/30'
                  : 'bg-[#FF7F07]/15 text-[#C2410C] dark:text-[#FFA048] border-[#FF7F07]/30'
              }`}
            >
              {isQuizPassed
                ? isEs
                  ? 'Mini-Test Aprobado ✓'
                  : 'Quiz Passed ✓'
                : isEs
                  ? 'Mini-Test Pendiente'
                  : 'Quiz Pending'}
            </span>
          )}

          {hasChallenge && (
            <span
              className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-lg border backdrop-blur-md transition-all duration-150 ${
                hasSubmission
                  ? 'bg-[#10B981]/20 text-[#047857] dark:text-[#10B981] border-[#10B981]/30'
                  : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#8E8E93] border-black/[0.06]'
              }`}
            >
              {hasSubmission
                ? isEs
                  ? 'Reto Enviado ✓'
                  : 'Challenge Submitted ✓'
                : isEs
                  ? 'Reto Pendiente'
                  : 'Challenge Pending'}
            </span>
          )}
        </div>
        <p className="text-xs text-[#666666] dark:text-[#A1A1AA] font-sans">
          {isEs
            ? 'Completa todos los requisitos para validar tus horas académicas y avanzar.'
            : 'Complete all requirements to validate your study hours and proceed.'}
        </p>
      </div>

      <div>
        <LessonCompleteButton
          courseSlug={courseSlug}
          lessonId={lessonId}
          initialCompleted={isEffectivelyCompleted}
          isLocked={!canComplete}
          lockReason={lockReason}
          lang={lang}
        />
      </div>
    </div>
  );
}
