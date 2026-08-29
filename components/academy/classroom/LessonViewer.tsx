'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Layers, FileText, Award, Sparkles, ExternalLink } from 'lucide-react';
import { Lesson, Module } from '@/data/academy/types';
import { Locale } from '@/types';
import LessonHeader from './LessonHeader';
import VideoPlayer from './VideoPlayer';
import MicroclassList from './MicroclassList';
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

      {/* 4. Structural Blocks: Presentation, Resources & Challenge */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Presentation Block */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers size={16} className="text-[#FE385B]" />
              <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                {isEs ? 'Presentación 16:9' : '16:9 Presentation'}
              </h3>
            </div>
            <span className="font-mono text-[10px] text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded-md">
              {lesson.presentationSlug ? 'Diapositivas Listas' : 'En Preparación'}
            </span>
          </div>

          <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">
            {isEs
              ? 'Material visual y diapositivas de la clase para repasar o proyectar.'
              : 'Visual slide deck for reviewing and classroom projection.'}
          </p>

          <div>
            <button
              type="button"
              disabled={!lesson.presentationSlug}
              className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#FE385B]/10 text-xs font-mono text-[#111111] dark:text-white hover:text-[#FE385B] transition-colors border border-black/[0.06] dark:border-white/[0.06] disabled:opacity-50"
            >
              <Layers size={13} />
              <span>{isEs ? 'Ver Presentación 16:9 (Sprint 2F)' : 'View Slides 16:9 (Sprint 2F)'}</span>
            </button>
          </div>
        </div>

        {/* Resources Block */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-[#FFCC48]" />
              <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                {isEs ? 'Recursos & Plantillas' : 'Resources & Templates'}
              </h3>
            </div>
            <span className="font-mono text-[10px] text-[#8E8E93]">
              {lesson.resources.length} {isEs ? 'disponible(s)' : 'item(s)'}
            </span>
          </div>

          {lesson.resources.length > 0 ? (
            <div className="space-y-2">
              {lesson.resources.map(res => (
                <div
                  key={res.id}
                  className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] text-xs font-sans flex items-center justify-between gap-2"
                >
                  <span className="font-medium text-[#111111] dark:text-white truncate">{res.title}</span>
                  <span className="font-mono text-[10px] text-[#FFCC48] uppercase shrink-0">{res.type}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-[#8E8E93] font-sans">
              {isEs ? 'Esta lección no requiere archivos descargables adicionales.' : 'No downloadable files required for this lesson.'}
            </p>
          )}
        </div>

        {/* Challenge Block */}
        {lesson.challenge && (
          <div className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-[#10B981]/20 shadow-soft space-y-4 md:col-span-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-[#10B981]" />
                <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                  {lesson.challenge.title}
                </h3>
              </div>
              <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-md">
                {isEs ? 'RETO SEMANAL' : 'WEEKLY CHALLENGE'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-[#666666] dark:text-[#8E8E93]">
              <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02]">
                <span className="font-mono text-[10px] text-[#10B981] uppercase block font-semibold mb-1">
                  {isEs ? '¿QUÉ DEBES HACER?' : 'WHAT TO DO?'}
                </span>
                <p className="leading-relaxed">{lesson.challenge.whatToDo}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02]">
                <span className="font-mono text-[10px] text-[#10B981] uppercase block font-semibold mb-1">
                  {isEs ? '¿QUÉ DEBES ENTREGAR?' : 'WHAT TO DELIVER?'}
                </span>
                <p className="leading-relaxed">{lesson.challenge.whatToDeliver}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5. Completion Action Box */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white">
            {isEs ? '¿Terminaste de estudiar esta lección?' : 'Finished studying this lesson?'}
          </h4>
          <p className="text-xs text-[#8E8E93] font-sans mt-0.5">
            {isEs
              ? 'Guarda tu progreso para actualizar tu porcentaje del curso.'
              : 'Save your progress to update your completion percentage.'}
          </p>
        </div>

        <LessonCompleteButton
          courseSlug={courseSlug}
          lessonId={lesson.id}
          initialCompleted={isLessonCompleted}
          lang={lang}
        />
      </div>

      {/* 6. Prev / Next Lesson Navigation Bar */}
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
