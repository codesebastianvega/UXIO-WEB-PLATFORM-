import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Layers } from 'lucide-react';
import { Locale } from '@/types';
import { getUserEnrollments } from '@/lib/supabase/academy';
import { getCourseProgress } from '@/lib/supabase/academy-progress';
import { getCourseBySlug } from '@/data/academy';
import CourseHeader from '@/components/academy/classroom/CourseHeader';
import ClassroomBreadcrumbs from '@/components/academy/classroom/ClassroomBreadcrumbs';
import CourseModuleCard from '@/components/academy/classroom/CourseModuleCard';

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

  const allLessons = course.modules.flatMap(m => m.lessons);

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
            <CourseModuleCard
              key={moduleItem.id}
              moduleItem={moduleItem}
              course={course}
              completedLessonIds={progressInfo.completedLessonIds}
              allLessons={allLessons}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
