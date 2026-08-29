import React from 'react';
import { redirect, notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Locale } from '@/types';
import { getUserEnrollments } from '@/lib/supabase/academy';
import { getStudentProfileData } from '@/lib/supabase/profile';
import { checkStudentEligibility } from '@/lib/supabase/certificates';
import CertificateClientView from '@/components/academy/classroom/CertificateClientView';

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
      ? 'Mi Certificado — UXIO Academy'
      : 'My Certificate — UXIO Academy',
    description: isEs
      ? 'Credencial y certificación académica verificable de Creator Lab.'
      : 'Verifiable academic certification and credential for Creator Lab.',
  };
}

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';

  // 1. Authenticate user
  const { user } = await getUserEnrollments();

  if (!user) {
    redirect(`/${lang}/academy/login?redirectTo=/${lang}/academy/classroom/certificate`);
  }

  // 2. Fetch Profile & Eligibility
  const [profile, eligibility] = await Promise.all([
    getStudentProfileData(),
    checkStudentEligibility('creator-lab', lang),
  ]);

  if (!profile) {
    notFound();
  }

  return (
    <main className="flex-1 min-w-0 max-w-[1000px] w-full mx-auto p-6 md:p-10 space-y-8 transition-colors min-h-[85vh]">
      <CertificateClientView
        profile={profile}
        eligibility={eligibility}
        lang={lang}
      />
    </main>
  );
}
