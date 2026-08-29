'use client';

import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';
import { Locale } from '@/types';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface LessonQuiz {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

interface LessonCheckpointQuizProps {
  quiz: LessonQuiz;
  lang: Locale;
  onQuizPassed?: () => void;
}

export default function LessonCheckpointQuiz({
  quiz,
  lang,
  onQuizPassed,
}: LessonCheckpointQuizProps) {
  const isEs = lang === 'es';
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (isSubmitted && hasPassed) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex,
    }));
    setIsSubmitted(false);
  };

  const handleCheckAnswers = () => {
    let allCorrect = true;
    for (const q of quiz.questions) {
      if (selectedAnswers[q.id] !== q.correctOptionIndex) {
        allCorrect = false;
        break;
      }
    }
    setIsSubmitted(true);
    setHasPassed(allCorrect);
    if (allCorrect && onQuizPassed) {
      onQuizPassed();
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setHasPassed(false);
  };

  const isAllAnswered = quiz.questions.every(q => selectedAnswers[q.id] !== undefined);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
        <div className="flex items-center gap-2.5">
          <HelpCircle size={18} className="text-[#00F0FF]" />
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
              {quiz.title || (isEs ? 'Mini-Evaluación de la Lección' : 'Lesson Checkpoint Quiz')}
            </h3>
            <p className="text-xs text-[#8E8E93] font-sans">
              {quiz.description ||
                (isEs
                  ? 'Responde estas preguntas rápidas para afianzar los conceptos clave y validar tu aprendizaje.'
                  : 'Answer these quick questions to reinforce key takeaways and validate your progress.')}
            </p>
          </div>
        </div>

        {hasPassed && (
          <span className="font-mono text-xs font-bold text-[#10B981] bg-[#10B981]/15 px-3 py-1 rounded-full border border-[#10B981]/30 shrink-0 flex items-center gap-1.5 animate-fadeIn">
            <CheckCircle2 size={13} />
            <span>{isEs ? 'Aprobado 100%' : '100% Passed'}</span>
          </span>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {quiz.questions.map((q, qIndex) => {
          const selected = selectedAnswers[q.id];
          const isCorrect = isSubmitted && selected === q.correctOptionIndex;
          const isIncorrect = isSubmitted && selected !== undefined && selected !== q.correctOptionIndex;

          return (
            <div key={q.id} className="space-y-3 p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs text-[#FE385B] font-bold mt-0.5">
                  0{qIndex + 1}.
                </span>
                <p className="font-display font-semibold text-sm text-[#111111] dark:text-white">
                  {q.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2 pl-5">
                {q.options.map((opt, optIndex) => {
                  const isSelected = selected === optIndex;
                  let optionStyle = 'bg-white dark:bg-[#111111] border-black/[0.08] dark:border-white/[0.08] text-[#666666] dark:text-[#8E8E93] hover:border-[#00F0FF]/40';

                  if (isSubmitted) {
                    if (optIndex === q.correctOptionIndex) {
                      optionStyle = 'bg-[#10B981]/10 border-[#10B981]/40 text-[#10B981] font-semibold';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'bg-[#FE385B]/10 border-[#FE385B]/40 text-[#FE385B] line-through';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-[#00F0FF]/10 border-[#00F0FF]/60 text-[#00F0FF] font-semibold shadow-2xs';
                  }

                  return (
                    <button
                      key={optIndex}
                      type="button"
                      onClick={() => handleSelectOption(q.id, optIndex)}
                      className={`w-full text-left p-3 rounded-xl border text-xs font-sans transition-all flex items-center justify-between ${optionStyle}`}
                    >
                      <span>{opt}</span>
                      {isSubmitted && optIndex === q.correctOptionIndex && (
                        <CheckCircle2 size={14} className="text-[#10B981] shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation note when submitted */}
              {isSubmitted && q.explanation && (
                <div className={`mt-2 p-3 rounded-xl text-[11px] font-sans ${isCorrect ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#FE385B]/10 text-[#FE385B]'}`}>
                  <span className="font-bold mr-1">{isCorrect ? '✓ Correcto:' : '✗ Explicación:'}</span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="text-xs text-[#8E8E93] font-mono">
          {!isAllAnswered && (
            <span>{isEs ? 'Selecciona una respuesta para cada pregunta.' : 'Select an option for each question.'}</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {isSubmitted && !hasPassed && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-xs font-mono text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
            >
              <RefreshCw size={13} />
              <span>{isEs ? 'Reintentar' : 'Retry'}</span>
            </button>
          )}

          {!hasPassed && (
            <button
              type="button"
              disabled={!isAllAnswered}
              onClick={handleCheckAnswers}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00F0FF] hover:bg-[#00F0FF]/90 text-black font-display font-bold text-xs transition-all shadow-md shadow-[#00F0FF]/20 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>{isEs ? 'Comprobar Respuestas' : 'Check Answers'}</span>
              <ArrowRight size={13} />
            </button>
          )}

          {hasPassed && (
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#10B981] font-semibold bg-[#10B981]/10 px-4 py-2 rounded-xl border border-[#10B981]/25">
              <Sparkles size={14} />
              <span>{isEs ? '¡Evaluación completada con éxito!' : 'Quiz completed successfully!'}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
