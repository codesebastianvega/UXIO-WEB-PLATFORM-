'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';
import { Lesson, Module } from '@/data/academy/types';
import { Locale } from '@/types';
import LessonHeader from './LessonHeader';
import VideoPlayer from './VideoPlayer';
import MicroclassList from './MicroclassList';
import LessonResources from './LessonResources';
import LessonChallenge from './LessonChallenge';
import LessonCompleteButton from './LessonCompleteButton';

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
  prevLesson?: AdjacentLessonInfo;
  nextLesson?: AdjacentLessonInfo;
}

export default function LessonViewer({
  lesson,
  moduleItem,
  courseSlug,
  lang,
  isLessonCompleted = false,
  prevLesson,
  nextLesson,
}: LessonViewerProps) {
  const isEs = lang === 'es';
  const [selectedMicroclassIndex, setSelectedMicroclassIndex] = useState(0);

  const activeMicroclass = lesson.microclasses[selectedMicroclassIndex] || null;
  const currentVideoUrl = activeMicroclass?.videoUrl;
  const currentVideoTitle = activeMicroclass?.title || lesson.title;
  const currentVideoDuration = activeMicroclass?.duration || lesson.duration;
  const currentVideoProvider = activeMicroclass?.videoProvider || 'youtube';

  return (
    <div className="space-y-8">
      {/* 1. Lesson Header */}
      <LessonHeader
        lesson={lesson}
        moduleItem={moduleItem}
        lang={lang}
      />

      {/* 2. Video Player Stage */}
      <div className="space-y-4">
        <VideoPlayer
          provider={currentVideoProvider}
          videoUrl={currentVideoUrl}
          title={currentVideoTitle}
          duration={currentVideoDuration}
        />

        {/* Active Microclass Description */}
        {activeMicroclass?.description && (
          <div className="p-4 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">
            <span className="font-bold text-[#111111] dark:text-white mr-1.5">
              {activeMicroclass.title}:
            </span>
            {activeMicroclass.description}
          </div>
        )}
      </div>

      {/* 3. Microclass Switcher List (if multiple) */}
      {lesson.microclasses.length > 0 && (
        <MicroclassList
          microclasses={lesson.microclasses}
          selectedIndex={selectedMicroclassIndex}
          onSelect={setSelectedMicroclassIndex}
          lang={lang}
        />
      )}

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

      {/* 5. Resources, Templates & Downloads */}
      {lesson.resources && lesson.resources.length > 0 && (
        <LessonResources
          resources={lesson.resources}
          lang={lang}
        />
      )}

      {/* 6. Practical Challenge */}
      {lesson.challenge && (
        <LessonChallenge
          challenge={lesson.challenge}
          lang={lang}
        />
      )}

      {/* 7. Lesson Completion Action Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h4 className="font-display font-bold text-sm sm:text-base text-[#111111] dark:text-white">
            {isEs ? '¿Terminaste de estudiar esta lección?' : 'Finished studying this lesson?'}
          </h4>
          <p className="text-xs text-[#8E8E93] font-sans mt-0.5">
            {isEs
              ? 'Guarda tu progreso para actualizar tu porcentaje del curso y avanzar a la siguiente lección.'
              : 'Save your progress to update your course completion status and unlock the next lesson.'}
          </p>
        </div>

        <LessonCompleteButton
          courseSlug={courseSlug}
          lessonId={lesson.id}
          initialCompleted={isLessonCompleted}
          lang={lang}
        />
      </div>

      {/* 8. Prev / Next Lesson Navigation Bar */}
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
