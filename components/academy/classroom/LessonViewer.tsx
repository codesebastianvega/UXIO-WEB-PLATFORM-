'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Layers, Lock, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { Lesson, Module } from '@/data/academy/types';
import { Locale } from '@/types';
import { LessonSubmission } from '@/lib/supabase/academy-submissions';
import LessonHeader from './LessonHeader';
import VideoPlayer from './VideoPlayer';
import MicroclassList from './MicroclassList';
import LessonResources from './LessonResources';
import LessonChallenge from './LessonChallenge';
import ChallengeSubmission from './ChallengeSubmission';
import LessonCompleteButton from './LessonCompleteButton';
import LessonCheckpointQuiz from './LessonCheckpointQuiz';
import LessonDiscussion from './LessonDiscussion';

interface AdjacentLessonInfo {
  moduleSlug: string;
  lesson: Lesson;
}

interface LessonViewerProps {
  lesson: Lesson;
  moduleItem: Module;
  courseSlug: string;
  lang: Locale;
  isLessonCompleted?: boolean;
  isUnlocked?: boolean;
  initialSubmission?: LessonSubmission | null;
  prevLesson?: AdjacentLessonInfo;
  nextLesson?: AdjacentLessonInfo;
}

export default function LessonViewer({
  lesson,
  moduleItem,
  courseSlug,
  lang,
  isLessonCompleted = false,
  isUnlocked = true,
  initialSubmission = null,
  prevLesson,
  nextLesson,
}: LessonViewerProps) {
  const isEs = lang === 'es';
  const [selectedMicroclassIndex, setSelectedMicroclassIndex] = useState(0);
  const [isQuizPassed, setIsQuizPassed] = useState(isLessonCompleted);

  const activeMicroclass = lesson.microclasses[selectedMicroclassIndex] || null;
  const currentVideoUrl = activeMicroclass?.videoUrl;
  const currentVideoTitle = activeMicroclass?.title || lesson.title;
  const currentVideoDuration = activeMicroclass?.duration || lesson.duration;
  const currentVideoProvider = activeMicroclass?.videoProvider || 'youtube';

  const totalMicroclasses = lesson.microclasses.length;
  const hasMultipleMicroclasses = totalMicroclasses > 1;

  const handlePrevMicroclass = () => {
    if (selectedMicroclassIndex > 0) {
      setSelectedMicroclassIndex(prev => prev - 1);
    }
  };

  const handleNextMicroclass = () => {
    if (selectedMicroclassIndex < totalMicroclasses - 1) {
      setSelectedMicroclassIndex(prev => prev + 1);
    }
  };

  // If lesson is locked due to sequential progression
  if (!isUnlocked) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-center space-y-4 shadow-soft">
        <div className="w-14 h-14 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] text-[#FF7F07] flex items-center justify-center mx-auto border border-black/[0.06] dark:border-white/[0.06]">
          <Lock size={28} />
        </div>
        <div className="max-w-md mx-auto space-y-1">
          <h3 className="font-display font-bold text-lg sm:text-xl text-[#111111] dark:text-white">
            {isEs ? 'Esta lección se encuentra bloqueada' : 'This lesson is locked'}
          </h3>
          <p className="text-xs sm:text-sm text-[#8E8E93] font-sans leading-relaxed">
            {isEs
              ? 'Para acceder a esta cápsula y sus materiales, primero debes completar la lección anterior del temario.'
              : 'To access this lesson and materials, please complete the previous lesson in the syllabus first.'}
          </p>
        </div>
        {prevLesson && (
          <div className="pt-2">
            <Link
              href={`/${lang}/academy/classroom/${courseSlug}/${prevLesson.moduleSlug}/${prevLesson.lesson.slug}`}
              className="inline-flex items-center gap-2 py-3.5 px-6 rounded-2xl bg-[#FE385B] text-white hover:bg-[#FE385B]/90 font-display font-bold text-xs transition-all shadow-md shadow-[#FE385B]/20 active:scale-[0.98]"
            >
              <ArrowLeft size={14} />
              <span>{isEs ? `Ir a: ${prevLesson.lesson.title}` : `Go to: ${prevLesson.lesson.title}`}</span>
            </Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* 1. Lesson Header */}
      <LessonHeader
        lesson={lesson}
        moduleItem={moduleItem}
        lang={lang}
      />

      {/* 2. Microclass Switcher Grid (ABOVE the video) */}
      {lesson.microclasses.length > 0 && (
        <MicroclassList
          microclasses={lesson.microclasses}
          selectedIndex={selectedMicroclassIndex}
          onSelect={setSelectedMicroclassIndex}
          lang={lang}
        />
      )}

      {/* 3. Video Player Stage with Controller Bar */}
      <div id="video-stage" className="space-y-3 scroll-mt-24">
        <VideoPlayer
          provider={currentVideoProvider}
          videoUrl={currentVideoUrl}
          title={currentVideoTitle}
          duration={currentVideoDuration}
        />

        {/* Active Microclass Description + Inline Chevrons */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
                #{String(selectedMicroclassIndex + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display font-bold text-sm sm:text-base text-[#111111] dark:text-white truncate">
                {activeMicroclass?.title || lesson.title}
              </h3>
            </div>
            {activeMicroclass?.description && (
              <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">
                {activeMicroclass.description}
              </p>
            )}
          </div>

          {/* Chevrons Navigation */}
          {hasMultipleMicroclasses && (
            <div className="flex items-center gap-2 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-black/[0.06] dark:border-white/[0.06]">
              <button
                type="button"
                onClick={handlePrevMicroclass}
                disabled={selectedMicroclassIndex === 0}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] disabled:opacity-30 disabled:cursor-not-allowed text-xs font-mono text-[#111111] dark:text-white transition-colors"
                title={isEs ? 'Microclase anterior' : 'Previous microclass'}
              >
                <ChevronLeft size={14} />
                <span>{isEs ? 'Anterior' : 'Prev'}</span>
              </button>

              <span className="font-mono text-xs text-[#8E8E93] px-1">
                {selectedMicroclassIndex + 1}/{totalMicroclasses}
              </span>

              <button
                type="button"
                onClick={handleNextMicroclass}
                disabled={selectedMicroclassIndex === totalMicroclasses - 1}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-mono font-bold text-white transition-colors shadow-sm"
                title={isEs ? 'Siguiente microclase' : 'Next microclass'}
              >
                <span>{isEs ? 'Siguiente' : 'Next'}</span>
                <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 4. Presentation Deck Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Layers size={18} className="text-[#FE385B]" />
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
                {isEs ? 'Diapositivas y Material Visual 16:9' : '16:9 Slide Deck & Visual Materials'}
              </h3>
              <p className="text-xs text-[#8E8E93] font-sans">
                {isEs
                  ? 'Presentación interactiva para repasar conceptos, fórmulas y comparativas.'
                  : 'Interactive presentation deck to review concepts, formulas, and frameworks.'}
              </p>
            </div>
          </div>

          <span className="font-mono text-[10px] text-[#FE385B] bg-[#FE385B]/10 px-2.5 py-1 rounded-md border border-[#FE385B]/20 shrink-0">
            {lesson.presentationSlug ? (isEs ? 'Diapositivas Listas' : 'Slides Ready') : (isEs ? 'En Preparación' : 'Pending')}
          </span>
        </div>

        <div>
          {lesson.presentationSlug ? (
            <Link
              href={`/${lang}/academy/classroom/${courseSlug}/${moduleItem.slug}/${lesson.slug}/slides`}
              className="inline-flex items-center gap-2 py-3 px-5 rounded-2xl bg-[#FE385B] text-white hover:bg-[#FE385B]/90 text-xs font-mono font-bold transition-all shadow-md shadow-[#FE385B]/20"
            >
              <Layers size={14} />
              <span>{isEs ? 'Abrir Presentación Interactiva (16:9)' : 'Open Interactive Deck (16:9)'}</span>
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 py-3 px-5 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] text-xs font-mono text-[#8E8E93] border border-black/[0.06] dark:border-white/[0.06] opacity-50"
            >
              <Layers size={14} />
              <span>{isEs ? 'Sin Diapositivas Asignadas' : 'No Slides Assigned'}</span>
            </button>
          )}
        </div>
      </div>

      {/* 5. Checkpoint Quiz (Mini-Evaluación) */}
      {lesson.quiz && (
        <LessonCheckpointQuiz
          quiz={lesson.quiz}
          lang={lang}
          onQuizPassed={() => setIsQuizPassed(true)}
        />
      )}

      {/* 6. Resources, Templates & Downloads with Lock */}
      {lesson.resources && lesson.resources.length > 0 && (
        <LessonResources
          resources={lesson.resources}
          lang={lang}
          isUnlocked={isLessonCompleted || isQuizPassed}
        />
      )}

      {/* 7. Practical Challenge */}
      {lesson.challenge && (
        <LessonChallenge
          challenge={lesson.challenge}
          lang={lang}
        />
      )}

      {/* 8. Challenge Submission Form & Status */}
      {lesson.challenge && (
        <ChallengeSubmission
          courseSlug={courseSlug}
          lessonId={lesson.id}
          initialSubmission={initialSubmission}
          lang={lang}
        />
      )}

      {/* 9. Lesson Completion Action Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h4 className="font-display font-bold text-sm sm:text-base text-[#111111] dark:text-white">
            {isEs ? '¿Terminaste de estudiar esta lección?' : 'Finished studying this lesson?'}
          </h4>
          <p className="text-xs text-[#8E8E93] font-sans mt-0.5">
            {isEs
              ? 'Guarda tu progreso para actualizar tu porcentaje del curso y desbloquear la siguiente lección.'
              : 'Save your progress to update your completion status and unlock the next lesson.'}
          </p>
        </div>

        <LessonCompleteButton
          courseSlug={courseSlug}
          lessonId={lesson.id}
          initialCompleted={isLessonCompleted}
          lang={lang}
        />
      </div>

      {/* 10. Q&A and Lesson Discussion */}
      <LessonDiscussion
        lessonTitle={lesson.title}
        lang={lang}
      />

      {/* 11. Prev / Next Lesson Navigation Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/[0.06] dark:border-white/[0.06]">
        {prevLesson ? (
          <Link
            href={`/${lang}/academy/classroom/${courseSlug}/${prevLesson.moduleSlug}/${prevLesson.lesson.slug}`}
            className="w-full sm:w-auto inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#FE385B]/40 text-xs font-sans text-[#111111] dark:text-white transition-all shadow-soft group"
          >
            <ArrowLeft size={14} className="text-[#8E8E93] group-hover:text-[#FE385B] group-hover:-translate-x-0.5 transition-transform" />
            <div className="text-left">
              <span className="font-mono text-[10px] text-[#8E8E93] block">{isEs ? 'Lección anterior' : 'Previous lesson'}</span>
              <span className="font-bold truncate max-w-[200px] block">{prevLesson.lesson.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <Link
            href={`/${lang}/academy/classroom/${courseSlug}/${nextLesson.moduleSlug}/${nextLesson.lesson.slug}`}
            className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-end gap-2 px-5 py-3 rounded-2xl bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#FE385B] dark:hover:bg-[#FE385B] dark:hover:text-white text-xs font-sans transition-all shadow-md group"
          >
            <div className="text-left sm:text-right">
              <span className="font-mono text-[10px] text-white/70 dark:text-black/70 group-hover:text-white/80 block">{isEs ? 'Siguiente lección' : 'Next lesson'}</span>
              <span className="font-bold truncate max-w-[200px] block">{nextLesson.lesson.title}</span>
            </div>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ) : (
          <Link
            href={`/${lang}/academy/classroom/${courseSlug}`}
            className="w-full sm:w-auto inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#FE385B] text-white text-xs font-sans font-bold transition-all shadow-md"
          >
            <span>{isEs ? 'Volver al Temario del Curso' : 'Back to Syllabus'}</span>
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </div>
  );
}
