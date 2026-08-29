import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, ShieldCheck, Lock, CheckCircle2, Smartphone } from 'lucide-react';
import { Locale } from '@/types';
import { getCourseBySlug } from '@/data/academy';
import AcademyEnrollmentForm from '@/components/academy/AcademyEnrollmentForm';

export async function generateStaticParams() {
  return [
    { lang: 'es', slug: 'creator-lab' },
    { lang: 'en', slug: 'creator-lab' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const course = getCourseBySlug(slug, lang);

  if (!course) {
    return { title: 'Enrollment | UXIO Academy' };
  }

  const isEs = lang === 'es';
  const title = isEs
    ? `Inscripción: ${course.title} (${course.cohortName}) — $${course.priceCOP.toLocaleString()} COP`
    : `Enrollment: ${course.title} (${course.cohortName}) — UXIO Academy`;

  return {
    title,
    description: isEs
      ? `Asegura tu cupo en la ${course.cohortName}. Inversión de lanzamiento única de $${course.priceCOP.toLocaleString()} COP. Inicio: 1 de octubre de 2026.`
      : `Secure your spot in ${course.cohortName}. Launch price $${course.priceCOP.toLocaleString()} COP. Starts October 1, 2026.`,
    openGraph: {
      title,
      description: isEs
        ? `Inscríbete en ${course.title} — ${course.commercialName} ($${course.priceCOP.toLocaleString()} COP).`
        : `Enroll in ${course.title} — ${course.commercialName}.`,
      type: 'website',
      url: `https://uxio.co/${lang}/academy/${slug}/enroll`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: course.subtitle,
    },
  };
}

export default async function CourseEnrollPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const course = getCourseBySlug(slug, lang);

  if (!course) {
    notFound();
  }

  const isEs = lang === 'es';

  return (
    <main className="flex-1 min-w-0 max-w-[860px] w-full mx-auto p-4 sm:p-6 md:p-10 flex flex-col justify-between transition-colors space-y-8">
      {/* Top Back Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href={`/${lang}/academy/${slug}`}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>{isEs ? 'Volver al temario del programa' : 'Back to program curriculum'}</span>
        </Link>

        <span className="font-mono text-[10px] text-[#FE385B] font-bold bg-[#FE385B]/10 px-2 py-0.5 rounded">
          {course.cohortName.toUpperCase()}
        </span>
      </div>

      {/* Order Summary Header Card */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.04] dark:border-white/[0.04] pb-4">
          <div>
            <span className="font-mono text-[10px] text-[#8E8E93] uppercase tracking-wider block">
              {isEs ? 'PROGRAMA SELECCIONADO' : 'SELECTED LAB'}
            </span>
            <h1 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
              {course.title} — {course.commercialName}
            </h1>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] text-[#FE385B] font-bold block">
              {isEs ? 'INVERSIÓN LANZAMIENTO' : 'LAUNCH INVESTMENT'}
            </span>
            <span className="font-display font-extrabold text-2xl text-[#111111] dark:text-white">
              ${course.priceCOP.toLocaleString()} <span className="font-mono text-xs text-[#8E8E93]">COP</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans text-[#666666] dark:text-[#8E8E93]">
          <div className="flex items-center gap-2">
            <Smartphone size={14} className="text-[#FE385B]" />
            <span>{course.commercialDuration} · 100% Celular</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-[#10B981]" />
            <span>{isEs ? 'Inicio: 1 de octubre' : 'Starts Oct 1'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock size={14} className="text-[#00F0FF]" />
            <span>{isEs ? 'Registro directo y seguro' : 'Secure direct intake'}</span>
          </div>
        </div>
      </div>

      {/* Direct Enrollment Form */}
      <AcademyEnrollmentForm course={course} lang={lang} />

      {/* Trust & Guarantee Badges */}
      <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] flex flex-wrap items-center justify-around gap-4 text-center text-[11px] font-sans text-[#8E8E93]">
        <div className="flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-[#10B981]" />
          <span>{isEs ? 'Cupos limitados por cohorte' : 'Limited seats per cohort'}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 size={14} className="text-[#00F0FF]" />
          <span>{isEs ? 'Acompañamiento personalizado' : 'Personalized mentor feedback'}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Lock size={14} className="text-[#FE385B]" />
          <span>{isEs ? 'Soporte vía WhatsApp Concierge' : 'WhatsApp Concierge Support'}</span>
        </div>
      </div>
    </main>
  );
}
