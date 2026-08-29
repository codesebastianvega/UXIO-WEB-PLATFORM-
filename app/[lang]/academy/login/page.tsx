import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Locale } from '@/types';
import LoginForm from '@/components/academy/LoginForm';

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
      ? 'Acceso Alumno — UXIO Academy'
      : 'Student Login — UXIO Academy',
    description: isEs
      ? 'Inicia sesión para acceder a tu aula y materiales de Creator Lab.'
      : 'Sign in to access your Creator Lab classroom and course materials.',
  };
}

export default async function LoginPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<{ redirectTo?: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const redirectTo = resolvedSearchParams?.redirectTo;
  const isEs = lang === 'es';

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-10 flex flex-col justify-between transition-colors min-h-[75vh]">
      {/* Top Navigation */}
      <div>
        <Link
          href={`/${lang}/academy`}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>{isEs ? 'Volver a UXIO Academy' : 'Back to UXIO Academy'}</span>
        </Link>
      </div>

      {/* Centered Login Card */}
      <div className="py-8">
        <LoginForm lang={lang} redirectTo={redirectTo} />
      </div>

      {/* Footer System Disclaimer */}
      <div className="text-center">
        <span className="font-mono text-[10px] text-[#8E8E93] uppercase tracking-wider">
          // UXIO ACADEMY AUTH SYSTEM v1.0 · SUPABASE SSR PROTECTED
        </span>
      </div>
    </main>
  );
}
