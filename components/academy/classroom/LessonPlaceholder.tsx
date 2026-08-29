import React from 'react';
import Link from 'next/link';
import { PlayCircle, Radio, Clock, Target, Layers, FileText, Sparkles, Award } from 'lucide-react';
import { Lesson, Module } from '@/data/academy/types';
import { Locale } from '@/types';

interface LessonPlaceholderProps {
  lesson: Lesson;
  moduleItem: Module;
  courseSlug: string;
  lang: Locale;
}

export default function LessonPlaceholder({
  lesson,
  moduleItem,
  courseSlug,
  lang,
}: LessonPlaceholderProps) {
  const isEs = lang === 'es';

  return (
    <div className="space-y-8">
      {/* Lesson Meta Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#FE385B] font-semibold bg-[#FE385B]/10 px-2.5 py-1 rounded-md border border-[#FE385B]/20">
              {moduleItem.weekTag}
            </span>
            <span className="font-mono text-xs text-[#8E8E93] bg-black/[0.04] dark:bg-white/[0.04] px-2.5 py-1 rounded-md border border-black/[0.06] dark:border-white/[0.06]">
              {lesson.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[#8E8E93]">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#00F0FF]" />
              {lesson.duration}
            </span>
            <span className="inline-flex items-center gap-1 text-[#FE385B]">
              {lesson.type === 'live_lab' ? <Radio size={13} /> : <PlayCircle size={13} />}
              {lesson.type === 'live_lab' ? (isEs ? 'Sesión en Vivo' : 'Live Lab') : (isEs ? 'Microclase' : 'Microclass')}
            </span>
          </div>
        </div>

        <div>
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white leading-tight">
            {lesson.title}
          </h1>

          {lesson.objective && (
            <div className="mt-3 p-3.5 rounded-2xl bg-[#00F0FF]/[0.05] border border-[#00F0FF]/20 flex items-start gap-2.5 text-xs text-[#111111] dark:text-white font-sans leading-relaxed">
              <Target size={15} className="text-[#00F0FF] shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[10px] text-[#00F0FF] uppercase tracking-wider block font-semibold">
                  {isEs ? 'OBJETIVO DE LA LECCIÓN' : 'LESSON OBJECTIVE'}
                </span>
                <p className="mt-0.5">{lesson.objective}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Structural Pillars Grid (Sprint 2D / 2F / 2G integration placeholders) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Microclasses Stage Preview */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PlayCircle size={16} className="text-[#00F0FF]" />
              <h2 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                {isEs ? 'Microclases en Video' : 'Video Microclasses'}
              </h2>
            </div>
            <span className="font-mono text-[11px] text-[#8E8E93]">
              {lesson.microclasses.length > 0 ? `${lesson.microclasses.length} video(s)` : (isEs ? 'Sprint 2D' : 'Upcoming')}
            </span>
          </div>

          {lesson.microclasses.length > 0 ? (
            <div className="space-y-2">
              {lesson.microclasses.map(mc => (
                <div key={mc.id} className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] text-xs font-sans flex items-center justify-between">
                  <span className="font-medium text-[#111111] dark:text-white truncate max-w-[220px]">{mc.title}</span>
                  <span className="font-mono text-[10px] text-[#8E8E93] shrink-0">{mc.duration}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] text-xs font-mono text-[#8E8E93] text-center">
              {isEs ? 'Reproductor de video VideoPlayer se activará en Sprint 2D.' : 'VideoPlayer will be connected in Sprint 2D.'}
            </div>
          )}
        </div>

        {/* 2. Presentation Deck Stage Preview */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers size={16} className="text-[#FE385B]" />
              <h2 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                {isEs ? 'Presentación 16:9' : '16:9 Presentation'}
              </h2>
            </div>
            <span className="font-mono text-[11px] text-[#FE385B]">
              {lesson.presentationSlug ? 'm00-01-welcome' : (isEs ? 'Sprint 2F' : 'Upcoming')}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] text-xs font-sans text-[#8E8E93] space-y-2">
            <p>{isEs ? 'El Presentation Engine interactivo 16:9 con atajos de teclado y exportación a PDF se integrará en Sprint 2F.' : 'The interactive 16:9 presentation engine will render here in Sprint 2F.'}</p>
          </div>
        </div>

        {/* 3. Resources Preview */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-[#FFCC48]" />
              <h2 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                {isEs ? 'Recursos & Plantillas' : 'Resources & Downloads'}
              </h2>
            </div>
            <span className="font-mono text-[11px] text-[#8E8E93]">
              {lesson.resources.length} {isEs ? 'recurso(s)' : 'item(s)'}
            </span>
          </div>

          {lesson.resources.length > 0 ? (
            <div className="space-y-2">
              {lesson.resources.map(res => (
                <div key={res.id} className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] text-xs font-sans flex items-center justify-between">
                  <span className="font-medium text-[#111111] dark:text-white">{res.title}</span>
                  <span className="font-mono text-[10px] text-[#FFCC48] uppercase">{res.type}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] text-xs font-mono text-[#8E8E93] text-center">
              {isEs ? 'Recursos descargables se activarán en Sprint 2G.' : 'Downloads will activate in Sprint 2G.'}
            </div>
          )}
        </div>

        {/* 4. Challenge Preview */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-[#10B981]" />
              <h2 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                {isEs ? 'Reto Semanal' : 'Weekly Challenge'}
              </h2>
            </div>
            <span className="font-mono text-[11px] text-[#10B981]">
              {lesson.challenge ? 'Activo' : (isEs ? 'Sprint 2G' : 'Upcoming')}
            </span>
          </div>

          {lesson.challenge ? (
            <div className="p-3.5 rounded-xl bg-[#10B981]/[0.04] border border-[#10B981]/20 text-xs font-sans space-y-1.5">
              <span className="font-display font-bold text-[#111111] dark:text-white">{lesson.challenge.title}</span>
              <p className="text-[#666666] dark:text-[#8E8E93] line-clamp-2 leading-relaxed">{lesson.challenge.whatToDo}</p>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] text-xs font-mono text-[#8E8E93] text-center">
              {isEs ? 'Reto y entregable se activarán en Sprint 2G.' : 'Challenge submission in Sprint 2G.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
