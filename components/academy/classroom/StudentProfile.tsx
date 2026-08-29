'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Locale } from '@/types';
import { StudentProfileData, StudentOutcomesData } from '@/lib/supabase/profile';
import StudentProfileCard from './StudentProfileCard';
import StudentOutcomesCard from './StudentOutcomesCard';

interface StudentProfileProps {
  initialProfile: StudentProfileData;
  outcomes: StudentOutcomesData | null;
  lang: Locale;
}

export default function StudentProfile({
  initialProfile,
  outcomes,
  lang,
}: StudentProfileProps) {
  const isEs = lang === 'es';
  const [profile, setProfile] = useState<StudentProfileData>(initialProfile);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* 1. Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href={`/${lang}/academy/classroom`}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#8E8E93] hover:text-[#FE385B] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>{isEs ? 'Volver a Mi Aula' : 'Back to Dashboard'}</span>
        </Link>
        <span className="font-mono text-xs text-[#00F0FF] bg-[#00F0FF]/10 px-2.5 py-1 rounded-md border border-[#00F0FF]/20">
          // CREATOR ID
        </span>
      </div>

      {/* 2. Profile Card */}
      <StudentProfileCard
        initialProfile={profile}
        onProfileUpdated={setProfile}
        lang={lang}
      />

      {/* 3. Outcomes & Certificate Preview */}
      {outcomes && (
        <StudentOutcomesCard
          outcomes={outcomes}
          lang={lang}
        />
      )}
    </div>
  );
}
