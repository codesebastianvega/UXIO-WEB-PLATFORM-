'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  PlayCircle,
  Radio,
  Clock,
  ChevronRight,
  CheckCircle2,
  Lock,
  Layers,
  Video,
  ExternalLink,
} from 'lucide-react';
import { Module, Lesson, Course } from '@/data/academy/types';
import { Locale } from '@/types';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';
import { getStoredLiveLinks, AcademyLiveLinks, DEFAULT_ACADEMY_LIVE_LINKS } from '@/lib/academy/live-links-store';

interface CourseModuleCardProps {
  moduleItem: Module;
  course: Course;
  completedLessonIds: string[];
  allLessons: Lesson[];
  lang: Locale;
}

export default function CourseModuleCard({
  moduleItem,
  course,
  completedLessonIds = [],
  allLessons = [],
  lang,
}: CourseModuleCardProps) {
  const isEs = lang === 'es';
  const [liveLinks, setLiveLinks] = useState<AcademyLiveLinks>(DEFAULT_ACADEMY_LIVE_LINKS);

  useEffect(() => {
    setLiveLinks(getStoredLiveLinks());
  }, []);

  const moduleLessons = moduleItem.lessons;
  const allLessonsList = allLessons;

  const moduleCompletedCount = moduleLessons.filter(l =>
    completedLessonIds.includes(l.id)
  ).length;
  const moduleTotalCount = moduleLessons.length;
  const modulePercent = Math.round(
    (moduleCompletedCount / (moduleTotalCount || 1)) * 100
  );
  const isModuleComplete = moduleTotalCount > 0 && moduleCompletedCount === moduleTotalCount;

  return (
    <AuroraSpotlightCard
      primaryColor={isModuleComplete ? '#10B981' : '#FE385B'}
      spotlightRadius={260}
      spotlightOpacity={0.07}
      className="rounded-3xl shadow-soft"
    >
      <div className="p-6 sm:p-8 space-y-6">
        {/* Module Header with Progress Bar */}
        <div className="space-y-4 border-b border-black/[0.06] dark:border-white/[0.06] pb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#FE385B] font-semibold bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
                  {moduleItem.weekTag}
                </span>
                {isModuleComplete && (
                  <span className="font-mono text-[10px] text-[#10B981] font-bold bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/25 flex items-center gap-1">
                    <CheckCircle2 size={11} />
                    <span>{isEs ? 'MÓDULO COMPLETO' : 'MODULE COMPLETED'}</span>
                  </span>
                )}
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#111111] dark:text-white mt-1">
                {moduleItem.title}
              </h3>
              <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans mt-1">
                {moduleItem.objective}
              </p>
            </div>

            <div className="text-right sm:text-right shrink-0">
              <span className="font-mono text-xs font-bold text-[#111111] dark:text-white">
                {moduleCompletedCount} / {moduleTotalCount} {isEs ? 'cápsulas' : 'lessons'}
              </span>
              <span className="block font-mono text-[11px] text-[#8E8E93]">
                {modulePercent}% {isEs ? 'completado' : 'done'}
              </span>
            </div>
          </div>

          {/* Module Progress Bar */}
          <div className="w-full bg-black/[0.04] dark:bg-white/[0.06] h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                isModuleComplete ? 'bg-[#10B981]' : 'bg-[#FE385B]'
              }`}
              style={{ width: `${modulePercent}%` }}
            />
          </div>
        </div>

        {/* Video & Live Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {moduleLessons.map(lesson => {
            const isCompleted = completedLessonIds.includes(lesson.id);
            // DEV MODE: All lessons unlocked for smooth testing
            const isUnlocked = true;

            return (
              <Link
                key={lesson.id}
                href={`/${lang}/academy/classroom/${course.slug}/${moduleItem.slug}/${lesson.slug}`}
                className={`group p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-2.5 ${
                  isCompleted
                    ? 'bg-[#10B981]/[0.03] border-[#10B981]/25 hover:border-[#10B981]/50'
                    : 'bg-[#F7F7F5] dark:bg-[#0D0D0E] border-black/[0.06] dark:border-white/[0.06] hover:border-[#FE385B]/50'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5 min-w-0">
                    <div className="mt-0.5 shrink-0">
                      {isCompleted ? (
                        <CheckCircle2 size={16} className="text-[#10B981]" />
                      ) : lesson.type === 'live_lab' ? (
                        <Radio size={16} className="text-[#FE385B] animate-pulse" />
                      ) : (
                        <PlayCircle size={16} className="text-[#FE385B]" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-[#8E8E93] block">
                          {lesson.id.toUpperCase()} · {lesson.duration}
                        </span>
                        {lesson.type === 'live_lab' && (
                          <span className="font-mono text-[9px] text-[#FE385B] bg-[#FE385B]/10 px-1.5 py-0.2 rounded border border-[#FE385B]/20 font-bold">
                            LIVE LAB
                          </span>
                        )}
                        {isCompleted && (
                          <span className="font-mono text-[9px] text-[#10B981] font-bold">
                            ✓ {isEs ? 'Completada' : 'Completed'}
                          </span>
                        )}
                      </div>
                      <h4 className="font-display font-bold text-xs text-[#111111] dark:text-white group-hover:text-[#FE385B] transition-colors truncate">
                        {lesson.title}
                      </h4>
                    </div>
                  </div>

                  <ChevronRight
                    size={14}
                    className="text-[#8E8E93] group-hover:text-[#FE385B] shrink-0 transition-transform group-hover:translate-x-0.5 mt-1"
                  />
                </div>

                {/* Individual Lesson Progress Indicator Bar */}
                <div className="w-full bg-black/[0.04] dark:bg-white/[0.06] h-1 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 rounded-full ${
                      isCompleted ? 'w-full bg-[#10B981]' : 'w-0 bg-[#FE385B]'
                    }`}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Dedicated Live Session & Recording Row for the Week */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FE385B] animate-pulse" />
              <span className="font-mono text-[10px] text-[#FE385B] uppercase font-bold tracking-wider">
                {isEs ? 'SESIÓN EN VIVO SEMANAL & FEEDBACK' : 'WEEKLY LIVE FEEDBACK & WORKSHOP'}
              </span>
            </div>
            <p className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-white">
              {liveLinks.liveSessionDate || (isEs ? 'Cada Jueves · 7:00 PM (Hora Colombia)' : 'Every Thursday · 7:00 PM (GMT-5)')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={liveLinks.liveSessionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs shadow-sm transition-all active:scale-[0.98]"
            >
              <Video size={13} />
              <span>{isEs ? 'Unirme a la Sala Virtual ↗' : 'Join Live Class ↗'}</span>
            </a>

            {liveLinks.recordingUrl && (
              <a
                href={liveLinks.recordingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] text-[#111111] dark:text-white font-display font-bold text-xs border border-black/[0.06] dark:border-white/[0.06] transition-all"
              >
                <Radio size={13} className="text-[#FE385B]" />
                <span>{isEs ? 'Ver Grabación ↗' : 'Watch Recording ↗'}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </AuroraSpotlightCard>
  );
}
