import React from 'react';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { ShieldCheck, UserCheck } from 'lucide-react';
import { Locale } from '@/types';
import { createClient } from '@/lib/supabase/server';
import LogoutButton from '@/components/academy/LogoutButton';

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

export default async function ClassroomPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const isEs = lang === 'es';

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // If unauthenticated (fallback if middleware is bypassed in direct server render)
  if (!user && process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder-project')) {
    redirect(`/${lang}/academy/login?redirectTo=/${lang}/academy/classroom`);
  }

  const userEmail = user?.email || 'alumno@uxio.co';

  return (
    <main className="flex-1 min-w-0 max-w-[840px] w-full mx-auto p-6 md:p-10 flex flex-col justify-between transition-colors min-h-[75vh]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#FE385B] bg-[#FE385B]/10 px-2.5 py-1 rounded-md border border-[#FE385B]/20 font-semibold">
            // UXIO ACADEMY · CLASSROOM
          </span>
          <span className="font-mono text-xs text-[#8E8E93]">
            SPRINT 1 · AUTH FOUNDATION
          </span>
        </div>

        <LogoutButton lang={lang} />
      </div>

      {/* Main Classroom Placeholder Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-lg text-center space-y-6 my-auto">
        <div className="w-14 h-14 rounded-2xl bg-[#00F0FF]/15 text-[#00F0FF] flex items-center justify-center mx-auto">
          <ShieldCheck size={28} />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
            <UserCheck size={12} />
            <span>{isEs ? 'SESIÓN AUTENTICADA' : 'AUTHENTICATED SESSION'}</span>
          </div>

          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white">
            {isEs ? 'Bienvenido a tu Aula UXIO' : 'Welcome to your UXIO Classroom'}
          </h1>

          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">
            {isEs
              ? `Has ingresado con la cuenta: ${userEmail}. La fundación de autenticación está activa.`
              : `Signed in as: ${userEmail}. Auth foundation is operational.`}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] max-w-sm mx-auto text-xs font-mono text-[#8E8E93]">
          {isEs ? 'El entorno de clases de Creator Lab · Cohorte 01 se activará en el Sprint 2.' : 'Creator Lab · Cohort 01 modules will unlock in Sprint 2.'}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-[11px] font-mono text-[#8E8E93]">
        UXIO ACADEMY · SPRINT 1 COMPLETE
      </div>
    </main>
  );
}
