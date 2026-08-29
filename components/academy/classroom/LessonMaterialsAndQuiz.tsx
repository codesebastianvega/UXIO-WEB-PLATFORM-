'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, HelpCircle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { LessonQuiz } from '@/data/academy/types';
import { Locale } from '@/types';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';
import LessonQuizModal from './LessonQuizModal';

interface LessonMaterialsAndQuizProps {
  presentationSlug?: string;
  quiz?: LessonQuiz;
  isQuizPassed: boolean;
  onQuizPassed: () => void;
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
  lang: Locale;
}

export default function LessonMaterialsAndQuiz({
  presentationSlug,
  quiz,
  isQuizPassed,
  onQuizPassed,
  courseSlug,
  moduleSlug,
  lessonSlug,
  lang,
}: LessonMaterialsAndQuizProps) {
  const isEs = lang === 'es';
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1. Diapositivas 16:9 Card */}
        <AuroraSpotlightCard
          primaryColor="#FE385B"
          spotlightRadius={220}
          spotlightOpacity={0.08}
          className="rounded-3xl shadow-soft"
        >
          <div className="p-6 sm:p-7 flex flex-col justify-between h-full space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-2xl bg-[#FE385B]/10 flex items-center justify-center text-[#FE385B]">
                  <Layers size={18} />
                </div>
                <span className="font-mono text-[10px] text-[#FE385B] bg-[#FE385B]/10 px-2.5 py-1 rounded-md border border-[#FE385B]/20 font-semibold">
                  {presentationSlug ? (isEs ? 'Diapositivas Listas' : 'Slides Ready') : (isEs ? 'En Preparación' : 'Pending')}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
                  {isEs ? 'Diapositivas y Material Visual' : '16:9 Presentation Deck'}
                </h3>
                <p className="text-xs text-[#8E8E93] font-sans mt-1 leading-relaxed">
                  {isEs
                    ? 'Presentación interactiva para repasar conceptos, fórmulas y comparativas de la lección.'
                    : 'Interactive presentation deck to review key formulas and frameworks.'}
                </p>
              </div>
            </div>

            <div>
              {presentationSlug ? (
                <Link
                  href={`/${lang}/academy/classroom/${courseSlug}/${moduleSlug}/${lessonSlug}/slides`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white text-xs font-mono font-bold transition-all shadow-md shadow-[#FE385B]/20 active:scale-[0.98]"
                >
                  <Layers size={14} />
                  <span>{isEs ? 'Abrir Presentación (16:9)' : 'Open Deck (16:9)'}</span>
                </Link>
              ) : (
                <button
                  type="button"
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono text-[#8E8E93] border border-black/[0.06] dark:border-white/[0.06] opacity-50 cursor-not-allowed"
                >
                  <Layers size={14} />
                  <span>{isEs ? 'Sin Diapositivas Asignadas' : 'No Slides Assigned'}</span>
                </button>
              )}
            </div>
          </div>
        </AuroraSpotlightCard>

        {/* 2. Mini-Evaluación & Checkpoint Quiz Card */}
        {quiz ? (
          <AuroraSpotlightCard
            primaryColor="#10B981"
            spotlightRadius={220}
            spotlightOpacity={0.08}
            className="rounded-3xl shadow-soft"
          >
            <div className="p-6 sm:p-7 flex flex-col justify-between h-full space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-2xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                    <HelpCircle size={18} />
                  </div>
                  <span
                    className={`font-mono text-[10px] px-2.5 py-1 rounded-md border font-semibold flex items-center gap-1 ${
                      isQuizPassed
                        ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30'
                        : 'bg-[#FF7F07]/10 text-[#FF7F07] border-[#FF7F07]/25'
                    }`}
                  >
                    {isQuizPassed ? <CheckCircle2 size={11} /> : null}
                    <span>{isQuizPassed ? (isEs ? 'Aprobado 100% ✓' : '100% Passed ✓') : (isEs ? `${quiz.questions.length} preguntas` : `${quiz.questions.length} questions`)}</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
                    {quiz.title || (isEs ? 'Mini-Evaluación de Aprendizaje' : 'Checkpoint Quiz')}
                  </h3>
                  <p className="text-xs text-[#8E8E93] font-sans mt-1 leading-relaxed">
                    {quiz.description ||
                      (isEs
                        ? 'Responde el test interactivo rápido para afianzar conceptos y desbloquear tus plantillas.'
                        : 'Take the quick interactive quiz to reinforce takeaways and unlock resources.')}
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-display font-bold text-xs transition-all shadow-md active:scale-[0.98] ${
                    isQuizPassed
                      ? 'bg-[#10B981] hover:bg-[#10B981]/90 text-white shadow-[#10B981]/20'
                      : 'bg-[#111111] dark:bg-white text-white dark:text-black hover:bg-[#FE385B] dark:hover:bg-[#FE385B] dark:hover:text-white'
                  }`}
                >
                  <Sparkles size={14} />
                  <span>{isQuizPassed ? (isEs ? 'Repetir Evaluación' : 'Retake Quiz') : (isEs ? 'Iniciar Mini-Evaluación →' : 'Start Checkpoint →')}</span>
                </button>
              </div>
            </div>
          </AuroraSpotlightCard>
        ) : null}
      </div>

      {/* Typeform-style Interactive Quiz Modal */}
      {quiz && (
        <LessonQuizModal
          quiz={quiz}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onQuizPassed={onQuizPassed}
          lang={lang}
        />
      )}
    </>
  );
}
