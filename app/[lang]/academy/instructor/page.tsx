import React from 'react';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { Locale } from '@/types';
import { getInstructorAuth, getInstructorReviewQueue } from '@/lib/supabase/instructor';
import InstructorDashboard from '@/components/academy/instructor/InstructorDashboard';

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
      ? 'Panel de Revisión Docente — UXIO Academy'
      : 'Instructor Review Panel — UXIO Academy',
    description: isEs
      ? 'Mesa de calificación y feedback para retos de estudiantes.'
      : 'Grading queue and student challenge review desk.',
  };
}

export default async function InstructorPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';

  // 1. Authorize Instructor
  const { isInstructor, user } = await getInstructorAuth();

  if (!user) {
    redirect(`/${lang}/academy/login?redirectTo=/${lang}/academy/instructor`);
  }

  if (!isInstructor) {
    // Standard students cannot enter the instructor panel
    redirect(`/${lang}/academy/classroom`);
  }

  // 2. Fetch Review Queue & Metrics
  const { items, metrics } = await getInstructorReviewQueue(lang);

  return (
    <main className="flex-1 min-w-0 max-w-[1440px] w-full mx-auto p-6 md:p-10 space-y-8 transition-colors min-h-[85vh]">
      <InstructorDashboard
        instructorUser={user}
        initialItems={items}
        initialMetrics={metrics}
        lang={lang}
      />
    </main>
  );
}
