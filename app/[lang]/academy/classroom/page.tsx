import React from 'react';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { Locale } from '@/types';
import { getUserEnrollments } from '@/lib/supabase/academy';
import { getCourseProgress, CourseProgressInfo } from '@/lib/supabase/academy-progress';
import { getCourseBySlug } from '@/data/academy';
import StudentDashboard from '@/components/academy/classroom/StudentDashboard';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const isEs = rawLang !== 'en';
  return {
    title: isEs ? 'Mi Aula — UXIO Academy' : 'My Classroom — UXIO Academy',
    description: isEs ? 'Panel del estudiante en UXIO Academy.' : 'Student classroom dashboard.',
  };
}

export default async function ClassroomDashboardPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';

  const { user, enrollments } = await getUserEnrollments();

  if (!user) {
    redirect(`/${lang}/academy/login?redirectTo=/${lang}/academy/classroom`);
  }

  // Resolve matching static courses from domain layer
  const cohortMap: Record<string, string> = {};
  const enrolledCourses = enrollments
    .map(e => {
      cohortMap[e.courseSlug] = e.cohortName;
      return getCourseBySlug(e.courseSlug, lang);
    })
    .filter(Boolean);

  // Fetch real course progress in parallel
  const progressMap: Record<string, CourseProgressInfo> = {};
  await Promise.all(
    enrollments.map(async e => {
      progressMap[e.courseSlug] = await getCourseProgress(e.courseSlug, lang);
    })
  );

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-10 transition-colors min-h-[80vh]">
      <StudentDashboard
        user={user}
        enrolledCourses={enrolledCourses as any}
        cohortMap={cohortMap}
        progressMap={progressMap}
        lang={lang}
      />
    </main>
  );
}
