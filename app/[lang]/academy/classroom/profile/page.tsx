import React from 'react';
import { redirect, notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Locale } from '@/types';
import { getUserEnrollments } from '@/lib/supabase/academy';
import { getStudentProfileData, getStudentOutcomesData } from '@/lib/supabase/profile';
import StudentProfile from '@/components/academy/classroom/StudentProfile';

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
      ? 'Mi Perfil de Creador — UXIO Academy'
      : 'My Creator Profile — UXIO Academy',
    description: isEs
      ? 'Perfil profesional, redes sociales y métricas de avance en SIE Academy.'
      : 'Professional creator profile and progress metrics in SIE Academy.',
  };
}

export default async function StudentProfilePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';

  // 1. Authenticate user
  const { user } = await getUserEnrollments();

  if (!user) {
    redirect(`/${lang}/academy/login?redirectTo=/${lang}/academy/classroom/profile`);
  }

  // 2. Fetch Profile & Outcomes
  const [profileData, outcomesData] = await Promise.all([
    getStudentProfileData(),
    getStudentOutcomesData(lang),
  ]);

  if (!profileData) {
    notFound();
  }

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-10 space-y-8 transition-colors min-h-[85vh]">
      <StudentProfile
        initialProfile={profileData}
        outcomes={outcomesData}
        lang={lang}
      />
    </main>
  );
}
