import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import { Locale } from '@/types';
import { getUserEnrollments } from '@/lib/supabase/academy';
import { getCourseBySlug, getModuleBySlug, getLessonBySlug, getPresentationBySlug } from '@/data/academy';
import PresentationEngine from '@/components/academy/presentation/PresentationEngine';

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
    title: lesson ? `${lesson.title} — Diapositivas` : 'Presentación — UXIO Academy',
    description: lesson ? lesson.objective : 'Presentation view.',
  };
}

export default async function ClassroomLessonSlidesPage({
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
      `/${lang}/academy/login?redirectTo=/${lang}/academy/classroom/${courseSlug}/${moduleSlug}/${lessonSlug}/slides`
    );
  }

  // Verify enrollment
  const isEnrolled = enrollments.some(e => e.courseSlug === courseSlug);
  if (!isEnrolled && enrollments.length > 0) {
    redirect(`/${lang}/academy/classroom`);
  }

  const course = getCourseBySlug(courseSlug, lang);
  const moduleItem = getModuleBySlug(courseSlug, moduleSlug, lang);
  const lesson = getLessonBySlug(courseSlug, moduleSlug, lessonSlug, lang);

  if (!course || !moduleItem || !lesson || !lesson.presentationSlug) {
    redirect(`/${lang}/academy/classroom/${courseSlug}/${moduleSlug}/${lessonSlug}`);
  }

  const presentation = getPresentationBySlug(lesson.presentationSlug, lang);

  if (!presentation) {
    notFound();
  }

  const exitHref = `/${lang}/academy/classroom/${courseSlug}/${moduleSlug}/${lessonSlug}`;

  return (
    <div className="w-full min-h-screen bg-[#F0F2F5] dark:bg-[#080808] flex items-center justify-center p-3 sm:p-6 lg:p-8 transition-colors">
      <PresentationEngine
        presentation={presentation}
        lang={lang}
        exitHref={exitHref}
      />
    </div>
  );
}
