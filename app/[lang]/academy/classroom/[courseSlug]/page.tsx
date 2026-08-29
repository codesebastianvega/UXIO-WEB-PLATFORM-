import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { PlayCircle, Radio, Clock, ChevronRight, Layers } from 'lucide-react';
import { Locale } from '@/types';
import { getUserEnrollments } from '@/lib/supabase/academy';
import { getCourseProgress } from '@/lib/supabase/academy-progress';
import { getCourseBySlug } from '@/data/academy';
import CourseHeader from '@/components/academy/classroom/CourseHeader';
import ClassroomBreadcrumbs from '@/components/academy/classroom/ClassroomBreadcrumbs';

export async function generateStaticParams() {
  return [
    { lang: 'es', courseSlug: 'creator-lab' },
    { lang: 'en', courseSlug: 'creator-lab' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; courseSlug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, courseSlug } = await params;
  const isEs = rawLang !== 'en';
  const course = getCourseBySlug(courseSlug, isEs ? 'es' : 'en');

  return {
    title: course ? `${course.title} — Aula Virtual` : 'Aula Virtual — UXIO Academy',
    description: course ? course.subtitle : 'Classroom syllabus view.',
  };
}

export default async function CourseClassroomPage({
  params,
}: {
  params: Promise<{ lang: string; courseSlug: string }>;
}) {
  const { lang: rawLang, courseSlug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const isEs = lang === 'es';

  const { user, enrollments } = await getUserEnrollments();

  if (!user) {
    redirect(`/${lang}/academy/login?redirectTo=/${lang}/academy/classroom/${courseSlug}`);
  }

  // Check enrollment
  const enrollment = enrollments.find(e => e.courseSlug === courseSlug);
  if (!enrollment && enrollments.length > 0) {
    redirect(`/${lang}/academy/classroom`);
  }

  const course = getCourseBySlug(courseSlug, lang);
  if (!course) {
    notFound();
  }

  // Fetch progress for this course
  const progressInfo = await getCourseProgress(courseSlug, lang);

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-10 space-y-8 transition-colors min-h-[80vh]">
      {/* Breadcrumbs */}
      <ClassroomBreadcrumbs
        items={[{ label: course.title }]}
        lang={lang}
      />

      {/* Course Header with Progress Bar */}
      <CourseHeader
        course={course}
        lang={lang}
        cohortName={enrollment?.cohortName}
        progressInfo={progressInfo}
      />

      {/* Syllabus Modules Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers size={18} className="text-[#FE385B]" />
            <h2 className="font-display font-bold text-lg sm:text-xl text-[#111111] dark:text-white">
              {isEs ? 'Módulos y Semanas de Aprendizaje' : 'Modules & Weekly Lessons'}
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8E8E93]">
            {course.modules.length} {isEs ? 'Semanas' : 'Weeks'}
          </span>
        </div>

        <div className="space-y-4">
          {course.modules.map(moduleItem => (
            <div
              key={moduleItem.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-6"
            >
              {/* Module Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
                <div>
                  <span className="font-mono text-xs text-[#FE385B] font-semibold">
                    {moduleItem.weekTag}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#111111] dark:text-white mt-0.5">
                    {moduleItem.title}
                  </h3>
                  <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans mt-1">
                    {moduleItem.objective}
                  </p>
                </div>

                <div className="text-xs font-mono text-[#8E8E93] shrink-0">
                  {moduleItem.lessons.length} {isEs ? 'lección(es)' : 'lesson(s)'}
                </div>
              </div>

              {/* Lessons List in Module */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {moduleItem.lessons.map(lesson => {
                  const isCompleted = progressInfo.completedLessonIds.includes(lesson.id);

                  return (
                    <Link
                      key={lesson.id}
                      href={`/${lang}/academy/classroom/${course.slug}/${moduleItem.slug}/${lesson.slug}`}
                      className="group p-4 rounded-2xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#FE385B]/40 transition-all flex items-center justify-between gap-3"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="mt-0.5 shrink-0">
                          {isCompleted ? (
                            <span className="w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center text-[10px] font-bold">
                              ✓
                            </span>
                          ) : lesson.type === 'live_lab' ? (
                            <Radio size={16} className="text-[#FE385B]" />
                          ) : (
                            <PlayCircle size={16} className="text-[#00F0FF]" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-[#8E8E93] block">
                              {lesson.id.toUpperCase()} · {lesson.duration}
                            </span>
                            {isCompleted && (
                              <span className="font-mono text-[9px] text-[#10B981]">
                                {isEs ? 'Completada' : 'Done'}
                              </span>
                            )}
                          </div>
                          <h4 className="font-display font-bold text-xs text-[#111111] dark:text-white group-hover:text-[#FE385B] transition-colors truncate">
                            {lesson.title}
                          </h4>
                        </div>
                      </div>

                      <ChevronRight size={14} className="text-[#8E8E93] group-hover:text-[#FE385B] shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
