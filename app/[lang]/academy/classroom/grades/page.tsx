import React from 'react';
import { redirect, notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Locale } from '@/types';
import { getUserEnrollments } from '@/lib/supabase/academy';
import { getAllUserSubmissions } from '@/lib/supabase/academy-submissions';
import { getCourseBySlug } from '@/data/academy';
import StudentGradesTable from '@/components/academy/classroom/StudentGradesTable';

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
    title: isEs
      ? 'Mis Calificaciones & Feedback — UXIO Academy'
      : 'My Grades & Feedback — UXIO Academy',
    description: isEs
      ? 'Boletín de calificaciones, notas y retroalimentación docente en Creator Lab.'
      : 'Grades, outcomes, and instructor feedback in Creator Lab.',
  };
}

export default async function StudentGradesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const isEs = lang === 'es';

  // 1. Authenticate student
  const { user, enrollments } = await getUserEnrollments();

  if (!user) {
    redirect(`/${lang}/academy/login?redirectTo=/${lang}/academy/classroom/grades`);
  }

  // 2. Fetch primary enrolled course and submissions
  const primaryEnrollment = enrollments[0];
  const courseSlug = primaryEnrollment?.courseSlug || 'creator-lab';
  const course = getCourseBySlug(courseSlug, lang);

  if (!course) {
    notFound();
  }

  const submissions = await getAllUserSubmissions(courseSlug);

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-10 space-y-6 transition-colors min-h-[85vh]">
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href={`/${lang}/academy/classroom`}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#8E8E93] hover:text-[#FE385B] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>{isEs ? 'Volver a Mi Aula' : 'Back to Dashboard'}</span>
        </Link>
        <span className="font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-md border border-[#10B981]/20">
          // {isEs ? 'BOLETÍN DE CALIFICACIONES' : 'GRADE REPORT'}
        </span>
      </div>

      {/* Main Grades & Outcomes Table */}
      <StudentGradesTable
        course={course}
        submissions={submissions}
        lang={lang}
      />
    </main>
  );
}
