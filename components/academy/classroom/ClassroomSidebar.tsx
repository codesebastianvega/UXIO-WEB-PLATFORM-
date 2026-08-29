'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, PlayCircle, Radio, Menu, X, BookOpen } from 'lucide-react';
import { Course } from '@/data/academy/types';
import { Locale } from '@/types';

interface ClassroomSidebarProps {
  course: Course;
  activeModuleSlug?: string;
  activeLessonSlug?: string;
  lang: Locale;
}

export default function ClassroomSidebar({
  course,
  activeModuleSlug,
  activeLessonSlug,
  lang,
}: ClassroomSidebarProps) {
  const isEs = lang === 'es';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openModules, setOpenModules] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    course.modules.forEach(m => {
      // Keep active module or first module open by default
      initial[m.slug] = activeModuleSlug ? m.slug === activeModuleSlug : true;
    });
    return initial;
  });

  const toggleModule = (slug: string) => {
    setOpenModules(prev => ({ ...prev, [slug]: !prev[slug] }));
  };

  const sidebarContent = (
    <div className="space-y-4">
      {/* Course Title Header */}
      <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06]">
        <span className="font-mono text-[10px] text-[#FE385B] uppercase tracking-wider font-semibold">
          // TEMARIO DEL CURSO
        </span>
        <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white mt-0.5 truncate">
          {course.title}
        </h3>
        <p className="text-[11px] font-mono text-[#8E8E93]">
          {course.cohortName} · {course.modules.length} {isEs ? 'Semanas' : 'Weeks'}
        </p>
      </div>

      {/* Modules & Lessons Accordion List */}
      <div className="space-y-2">
        {course.modules.map(moduleItem => {
          const isOpen = openModules[moduleItem.slug] ?? false;
          const isModuleActive = moduleItem.slug === activeModuleSlug;

          return (
            <div
              key={moduleItem.id}
              className={`rounded-2xl border transition-all ${
                isModuleActive
                  ? 'border-[#FE385B]/30 bg-[#FE385B]/[0.02]'
                  : 'border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#171719]'
              }`}
            >
              {/* Module Header Button */}
              <button
                type="button"
                onClick={() => toggleModule(moduleItem.slug)}
                className="w-full p-3.5 flex items-center justify-between text-left gap-2 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] rounded-2xl transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[10px] text-[#8E8E93] block truncate">
                    {moduleItem.weekTag}
                  </span>
                  <span className="font-display font-bold text-xs text-[#111111] dark:text-white block truncate">
                    {moduleItem.title}
                  </span>
                </div>
                <div className="text-[#8E8E93] shrink-0">
                  {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </div>
              </button>

              {/* Lessons Sub-list */}
              {isOpen && (
                <div className="px-2 pb-3 space-y-1 border-t border-black/[0.04] dark:border-white/[0.04] pt-2">
                  {moduleItem.lessons.map(lesson => {
                    const isLessonActive =
                      lesson.slug === activeLessonSlug || lesson.id === activeLessonSlug;

                    return (
                      <Link
                        key={lesson.id}
                        href={`/${lang}/academy/classroom/${course.slug}/${moduleItem.slug}/${lesson.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-start gap-2.5 p-2.5 rounded-xl text-xs font-sans transition-all ${
                          isLessonActive
                            ? 'bg-[#FE385B] text-white font-medium shadow-sm'
                            : 'text-[#666666] dark:text-[#8E8E93] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:text-[#111111] dark:hover:text-white'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {lesson.type === 'live_lab' ? (
                            <Radio size={13} className={isLessonActive ? 'text-white' : 'text-[#FE385B]'} />
                          ) : (
                            <PlayCircle size={13} className={isLessonActive ? 'text-white' : 'text-[#00F0FF]'} />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="leading-snug line-clamp-2">{lesson.title}</p>
                          <span
                            className={`font-mono text-[10px] ${
                              isLessonActive ? 'text-white/80' : 'text-[#8E8E93]'
                            }`}
                          >
                            {lesson.duration}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-[#111111] dark:text-white shadow-soft"
        >
          <div className="flex items-center gap-2">
            <BookOpen size={14} className="text-[#FE385B]" />
            <span>{isEs ? 'Ver Índice de Lecciones' : 'View Syllabus Index'}</span>
          </div>
          {mobileOpen ? <X size={15} /> : <Menu size={15} />}
        </button>

        {mobileOpen && (
          <div className="mt-2 p-4 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-lg">
            {sidebarContent}
          </div>
        )}
      </div>

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-80 shrink-0 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
        {sidebarContent}
      </aside>
    </>
  );
}
