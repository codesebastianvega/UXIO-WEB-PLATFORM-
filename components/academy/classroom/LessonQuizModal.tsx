'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RefreshCw,
  HelpCircle,
  Trophy,
} from 'lucide-react';
import { LessonQuiz } from '@/data/academy/types';
import { Locale } from '@/types';

interface LessonQuizModalProps {
  quiz: LessonQuiz;
  isOpen: boolean;
  onClose: () => void;
  onQuizPassed: () => void;
  lang: Locale;
}

export default function LessonQuizModal({
  quiz,
  isOpen,
  onClose,
  onQuizPassed,
  lang,
}: LessonQuizModalProps) {
  const isEs = lang === 'es';
  const questions = quiz.questions;
  const totalQuestions = questions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setIsCorrect(false);
      setIsQuizCompleted(false);
    }
  }, [isOpen]);

  if (!isOpen || totalQuestions === 0) return null;

  const currentQ = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + (isQuizCompleted ? 1 : 0)) / totalQuestions) * 100);

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(idx);
  };

  const handleVerifyAnswer = () => {
    if (selectedOption === null) return;
    const correct = selectedOption === currentQ.correctOptionIndex;
    setIsCorrect(correct);
    setIsAnswerChecked(true);
  };

  const handleRetryQuestion = () => {
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setIsCorrect(false);
  };

  const handleNextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setIsCorrect(false);
    } else {
      setIsQuizCompleted(true);
      onQuizPassed();
    }
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#FE385B]/10 flex items-center justify-center text-[#FE385B]">
              <HelpCircle size={17} />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm sm:text-base text-[#111111] dark:text-white">
                {quiz.title}
              </h3>
              <p className="text-[11px] font-mono text-[#8E8E93]">
                {isQuizCompleted
                  ? (isEs ? '¡Evaluación completada!' : 'Quiz completed!')
                  : (isEs ? `Pregunta ${currentIndex + 1} de ${totalQuestions}` : `Question ${currentIndex + 1} of ${totalQuestions}`)}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/[0.04] hover:bg-black/[0.08] dark:hover:bg-white/[0.08] flex items-center justify-center text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Top Progress Bar */}
        <div className="w-full bg-black/[0.04] dark:bg-white/[0.04] h-1.5">
          <div
            className="bg-[#FE385B] h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Modal Body: Typeform Style */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {!isQuizCompleted ? (
            <div className="space-y-6">
              {/* Question Text */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#FE385B]">
                  0{currentIndex + 1} / 0{totalQuestions}
                </span>
                <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#111111] dark:text-white leading-snug">
                  {currentQ.question}
                </h4>
              </div>

              {/* Options (Typeform Cards) */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  let cardStyle =
                    'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.06] hover:border-black/[0.2] dark:hover:border-white/[0.2] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-[#111111] dark:text-[#E5E5E7]';

                  if (isAnswerChecked) {
                    if (optIdx === currentQ.correctOptionIndex) {
                      cardStyle = 'bg-[#10B981]/15 border-[#10B981] text-[#10B981] font-semibold';
                    } else if (isSelected && !isCorrect) {
                      cardStyle = 'bg-[#FE385B]/15 border-[#FE385B] text-[#FE385B] line-through';
                    } else {
                      cardStyle = 'opacity-40 border-black/[0.04] dark:border-white/[0.04]';
                    }
                  } else if (isSelected) {
                    cardStyle = 'bg-[#FE385B]/10 border-[#FE385B] text-[#FE385B] ring-1 ring-[#FE385B]/40 font-semibold';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 text-xs sm:text-sm font-sans ${cardStyle}`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-6 h-6 rounded-lg bg-black/[0.06] dark:bg-white/[0.08] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          {optionLetters[optIdx]}
                        </span>
                        <span className="leading-snug">{opt}</span>
                      </div>

                      {isAnswerChecked && optIdx === currentQ.correctOptionIndex && (
                        <CheckCircle2 size={16} className="text-[#10B981] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback & Explanation Box */}
              {isAnswerChecked && (
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm font-sans space-y-1 ${
                    isCorrect
                      ? 'bg-[#10B981]/10 text-[#059669] dark:text-[#10B981] border border-[#10B981]/25'
                      : 'bg-[#FE385B]/10 text-[#FE385B] border border-[#FE385B]/25'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1.5">
                    {isCorrect ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
                    <span>{isCorrect ? (isEs ? '¡Respuesta Correcta!' : 'Correct Answer!') : (isEs ? '¡Casi! Repasemos este punto:' : 'Almost! Review this takeaway:')}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-[#222222] dark:text-[#E5E5E7] pl-5">
                    {currentQ.explanation}
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Celebration Screen */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto border border-[#10B981]/30">
                <Trophy size={32} />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
                  {isEs ? '¡Checkpoint Aprobado al 100%!' : 'Checkpoint 100% Passed!'}
                </h4>
                <p className="text-xs sm:text-sm text-[#8E8E93] font-sans max-w-md mx-auto">
                  {isEs
                    ? 'Has validado todos los conceptos clave de esta lección. Tus plantillas y recursos descargables ya están desbloqueados.'
                    : 'You validated all key takeaways. Your downloadable templates and resources are now unlocked.'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-5 sm:p-6 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
          <span className="font-mono text-xs text-[#8E8E93]">
            {!isQuizCompleted && !isAnswerChecked && (isEs ? 'Elige una opción para continuar' : 'Select an option')}
          </span>

          <div className="flex items-center gap-3">
            {!isQuizCompleted && !isAnswerChecked && (
              <button
                type="button"
                disabled={selectedOption === null}
                onClick={handleVerifyAnswer}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#FE385B] hover:bg-[#FE385B]/90 disabled:opacity-40 text-white font-display font-bold text-xs transition-all shadow-md shadow-[#FE385B]/20 active:scale-[0.98]"
              >
                <span>{isEs ? 'Comprobar Respuesta' : 'Verify Answer'}</span>
                <ArrowRight size={14} />
              </button>
            )}

            {!isQuizCompleted && isAnswerChecked && !isCorrect && (
              <button
                type="button"
                onClick={handleRetryQuestion}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-black/[0.05] dark:bg-white/[0.08] text-[#111111] dark:text-white hover:bg-black/[0.1] font-display font-bold text-xs transition-all"
              >
                <RefreshCw size={14} />
                <span>{isEs ? 'Reintentar Pregunta' : 'Retry Question'}</span>
              </button>
            )}

            {!isQuizCompleted && isAnswerChecked && isCorrect && (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#10B981] hover:bg-[#10B981]/90 text-white font-display font-bold text-xs transition-all shadow-md shadow-[#10B981]/20 active:scale-[0.98]"
              >
                <span>{currentIndex < totalQuestions - 1 ? (isEs ? 'Siguiente Pregunta' : 'Next Question') : (isEs ? 'Finalizar Checkpoint' : 'Finish Checkpoint')}</span>
                <ArrowRight size={14} />
              </button>
            )}

            {isQuizCompleted && (
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs transition-all shadow-md shadow-[#FE385B]/20 active:scale-[0.98]"
              >
                <span>{isEs ? 'Continuar con la Clase' : 'Continue Lesson'}</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
