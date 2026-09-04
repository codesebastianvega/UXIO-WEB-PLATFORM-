import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import { Locale } from '@/types';
import { getUserEnrollments } from '@/lib/supabase/academy';
import { getCourseProgress } from '@/lib/supabase/academy-progress';
import { getLessonSubmission } from '@/lib/supabase/academy-submissions';
import {
  getCourseBySlug,
  getModuleBySlug,
  getLessonBySlug,
  getAdjacentLessons,
} from '@/data/academy';
import ClassroomBreadcrumbs from '@/components/academy/classroom/ClassroomBreadcrumbs';
import ClassroomSidebar from '@/components/academy/classroom/ClassroomSidebar';
import LessonViewer from '@/components/academy/classroom/LessonViewer';

export async function generateStaticParams() {
  return [
    {
      lang: 'es',
      courseSlug: 'creator-lab',
      moduleSlug: 'semana-0-induccion',
      lessonSlug: 'bienvenida-a-creator-lab',
    },
    {
      lang: 'en',
      courseSlug: 'creator-lab',
      moduleSlug: 'semana-0-induccion',
      lessonSlug: 'bienvenida-a-creator-lab',
    },
    {
      lang: 'es',
      courseSlug: 'creator-lab',
      moduleSlug: 'semana-0-induccion',
      lessonSlug: 'tu-kit-de-creacion-accesible',
    },
    {
      lang: 'en',
      courseSlug: 'creator-lab',
      moduleSlug: 'semana-0-induccion',
      lessonSlug: 'tu-kit-de-creacion-accesible',
    },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    lang: string;
    courseSlug: string;
    moduleSlug: string;
    lessonSlug: string;
  }>;
}): Promise<Metadata> {
  const { lang: rawLang, courseSlug, moduleSlug, lessonSlug } = await params;
  const isEs = rawLang !== 'en';
  const lesson = getLessonBySlug(courseSlug, moduleSlug, lessonSlug, isEs ? 'es' : 'en');

  return {
    title: lesson ? `${lesson.title} — UXIO Academy` : 'Lección — UXIO Academy',
    description: lesson ? lesson.objective : 'Lesson view.',
  };
}

export default async function LessonClassroomPage({
  params,
}: {
  params: Promise<{
    lang: string;
    courseSlug: string;
    moduleSlug: string;
    lessonSlug: string;
  }>;
}) {
  const { lang: rawLang, courseSlug, moduleSlug, lessonSlug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';

  const { user, enrollments } = await getUserEnrollments();

  if (!user) {
    redirect(
      `/${lang}/academy/login?redirectTo=/${lang}/academy/classroom/${courseSlug}/${moduleSlug}/${lessonSlug}`
    );
  }

  // Check enrollment
  const isEnrolled = enrollments.some(e => e.courseSlug === courseSlug);
  if (!isEnrolled && enrollments.length > 0) {
    redirect(`/${lang}/academy/classroom`);
  }

  const course = getCourseBySlug(courseSlug, lang);
  const moduleItem = getModuleBySlug(courseSlug, moduleSlug, lang);
  const lesson = getLessonBySlug(courseSlug, moduleSlug, lessonSlug, lang);

  if (!course || !moduleItem || !lesson) {
    notFound();
  }

  const { prevLesson, nextLesson } = getAdjacentLessons(
    courseSlug,
    moduleSlug,
    lessonSlug,
    lang
  );

  // Fetch progress and challenge submission for this lesson
  const [progressInfo, initialSubmission] = await Promise.all([
    getCourseProgress(courseSlug, lang),
    getLessonSubmission(courseSlug, lesson.id),
  ]);

  const isLessonCompleted = progressInfo.completedLessonIds.includes(lesson.id);
  // DEV MODE: All lessons freely accessible for evaluation
  const isUnlocked = true;

  return (
    <main className="flex-1 min-w-0 max-w-[1440px] w-full mx-auto p-6 md:p-10 space-y-6 transition-colors min-h-[85vh]">
      {/* Breadcrumbs */}
      <ClassroomBreadcrumbs
        items={[
          { label: course.title, href: `/${lang}/academy/classroom/${course.slug}` },
          { label: moduleItem.weekTag, href: `/${lang}/academy/classroom/${course.slug}` },
          { label: lesson.title },
        ]}
        lang={lang}
      />

      {/* Main Classroom Shell: Sidebar on Left, Lesson Viewer on Right */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <ClassroomSidebar
          course={course}
          activeModuleSlug={moduleItem.slug}
          activeLessonSlug={lesson.slug}
          completedLessonIds={progressInfo.completedLessonIds}
          lang={lang}
        />

        <div className="flex-1 min-w-0 w-full">
          <LessonViewer
            lesson={lesson}
            moduleItem={moduleItem}
            courseSlug={course.slug}
            lang={lang}
            isLessonCompleted={isLessonCompleted}
            isUnlocked={isUnlocked}
            initialSubmission={initialSubmission}
            prevLesson={prevLesson}
            nextLesson={nextLesson}
          />
        </div>
      </div>
    </main>
  );
}
