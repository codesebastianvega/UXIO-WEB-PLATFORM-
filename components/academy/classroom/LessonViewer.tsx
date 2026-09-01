'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Lesson, Module } from '@/data/academy/types';
import { Locale } from '@/types';
import { LessonSubmission } from '@/lib/supabase/academy-submissions';
import LessonHeader from './LessonHeader';
import VideoPlayer from './VideoPlayer';
import LessonToolkitHub from './LessonToolkitHub';
import LessonChallengeHub from './LessonChallengeHub';
import LessonCompletionCard from './LessonCompletionCard';
import LessonDiscussion from './LessonDiscussion';
import LiveSessionHub from './LiveSessionHub';

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
  const [isQuizPassed, setIsQuizPassed] = useState(false);
  const [watchedMicroclasses, setWatchedMicroclasses] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const quizStatus = localStorage.getItem(`uxio_quiz_${courseSlug}_${lesson.id}`);
      if (quizStatus === 'passed') {
        setIsQuizPassed(true);
      }
      const savedWatched = localStorage.getItem(`uxio_watched_${courseSlug}_${lesson.id}`);
      if (savedWatched) {
        try {
          setWatchedMicroclasses(JSON.parse(savedWatched));
        } catch {
          // ignore
        }
      }
    }
  }, [courseSlug, lesson.id]);

  const handleVideoWatched = (microclassId: string) => {
    setWatchedMicroclasses(prev => {
      if (prev.includes(microclassId)) return prev;
      const next = [...prev, microclassId];
      if (typeof window !== 'undefined') {
        localStorage.setItem(`uxio_watched_${courseSlug}_${lesson.id}`, JSON.stringify(next));
      }
      return next;
    });
  };

  const handleQuizPassed = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`uxio_quiz_${courseSlug}_${lesson.id}`, 'passed');
    }
    setIsQuizPassed(true);
  };

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
      {lesson.type === 'live_lab' ? (
        <LiveSessionHub
          lesson={lesson}
          moduleItem={moduleItem}
          courseSlug={courseSlug}
          lang={lang}
          onOpenPresentation={() => {
            if (lesson.presentationSlug && typeof window !== 'undefined') {
              window.location.href = `/${lang}/academy/classroom/${courseSlug}/presentation/${lesson.presentationSlug}`;
            }
          }}
        />
      ) : (
        <>
          {/* 1. Header & Microclasses Grid */}
          <LessonHeader
            lesson={lesson}
            moduleItem={moduleItem}
            microclasses={lesson.microclasses}
            selectedMicroclassIndex={selectedMicroclassIndex}
            onSelectMicroclass={index => {
              setSelectedMicroclassIndex(index);
              const mc = lesson.microclasses[index];
              if (mc) handleVideoWatched(mc.id);
            }}
            lang={lang}
          />

          {/* 2. Video Player Stage */}
          <div id="video-stage" className="space-y-3 scroll-mt-24">
            <VideoPlayer
              provider={currentVideoProvider}
              videoUrl={currentVideoUrl}
              title={currentVideoTitle}
              duration={currentVideoDuration}
              onPlay={() => activeMicroclass && handleVideoWatched(activeMicroclass.id)}
            />

            {/* Active Microclass Description + Navigation */}
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

              {hasMultipleMicroclasses && (
                <div className="flex items-center gap-2 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-black/[0.06] dark:border-white/[0.06]">
                  <button
                    type="button"
                    onClick={handlePrevMicroclass}
                    disabled={selectedMicroclassIndex === 0}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] disabled:opacity-30 disabled:cursor-not-allowed text-xs font-mono text-[#111111] dark:text-white transition-colors"
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
                  >
                    <span>{isEs ? 'Siguiente' : 'Next'}</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 3. Toolkit & Materials Hub */}
          <LessonToolkitHub
            presentationSlug={lesson.presentationSlug}
            microclasses={lesson.microclasses}
            quiz={lesson.quiz}
            resources={lesson.resources}
            isQuizPassed={isQuizPassed}
            isLessonCompleted={isLessonCompleted}
            onQuizPassed={handleQuizPassed}
            courseSlug={courseSlug}
            moduleSlug={moduleItem.slug}
            lessonSlug={lesson.slug}
            lang={lang}
          />
        </>
      )}

      {/* 4. Practical Challenge Hub (if lesson has challenge) */}
      {lesson.challenge && (
        <LessonChallengeHub
          challenge={lesson.challenge}
          courseSlug={courseSlug}
          lessonId={lesson.id}
          initialSubmission={initialSubmission}
          lang={lang}
        />
      )}

      {/* 5. Completion & Progress Card (Only for microclasses with criteria) */}
      {lesson.type !== 'live_lab' && (
        <LessonCompletionCard
          courseSlug={courseSlug}
          lessonId={lesson.id}
          isLessonCompleted={isLessonCompleted}
          totalMicroclasses={totalMicroclasses}
          watchedCount={watchedMicroclasses.length}
          hasQuiz={Boolean(lesson.quiz)}
          isQuizPassed={isQuizPassed}
          hasChallenge={Boolean(lesson.challenge)}
          hasSubmission={Boolean(initialSubmission)}
          lang={lang}
        />
      )}

      {/* 6. Discussion Forum */}
      <LessonDiscussion
        courseSlug={courseSlug}
        lessonId={lesson.id}
        lessonTitle={lesson.title}
        lang={lang}
      />
    </div>
  );
}
