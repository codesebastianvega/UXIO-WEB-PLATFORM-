import React from 'react';
import { redirect, notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Award,
  ArrowLeft,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Lock,
} from 'lucide-react';
import { Locale } from '@/types';
import { getUserEnrollments } from '@/lib/supabase/academy';
import { getStudentProfileData } from '@/lib/supabase/profile';
import { checkStudentEligibility } from '@/lib/supabase/certificates';

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
  const isEs = lang === 'es';

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

  const getStatusDisplay = () => {
    switch (eligibility.status) {
      case 'issued':
        return {
          title: isEs ? 'Certificado Oficial Emitido' : 'Official Certificate Issued',
          badge: isEs ? '✓ EMITIDO' : '✓ ISSUED',
          bg: 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30',
        };
      case 'eligible':
        return {
          title: isEs ? '¡Cumples todos los requisitos!' : 'You meet all requirements!',
          badge: isEs ? '🎉 ELEGIBLE' : '🎉 ELIGIBLE',
          bg: 'bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/30',
        };
      case 'revoked':
        return {
          title: isEs ? 'Certificado Revocado' : 'Certificate Revoked',
          badge: isEs ? '⚠️ REVOCADO' : '⚠️ REVOKED',
          bg: 'bg-[#FE385B]/15 text-[#FE385B] border-[#FE385B]/30',
        };
      case 'not_eligible':
      default:
        return {
          title: isEs ? 'Formación en Progreso' : 'Training in Progress',
          badge: isEs ? '⏳ EN PROGRESO' : '⏳ IN PROGRESS',
          bg: 'bg-[#FFCC48]/15 text-[#FFCC48] border-[#FFCC48]/30',
        };
    }
  };

  const statusInfo = getStatusDisplay();

  return (
    <main className="flex-1 min-w-0 max-w-[1000px] w-full mx-auto p-6 md:p-10 space-y-8 transition-colors min-h-[85vh]">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <Link
          href={`/${lang}/academy/classroom`}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#8E8E93] hover:text-[#FE385B] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>{isEs ? 'Volver a Mi Aula' : 'Back to Dashboard'}</span>
        </Link>

        <span className="font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-md border border-[#10B981]/20">
          // ACADEMIC CREDENTIAL
        </span>
      </div>

      {/* Main Certificate Stage Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-lg space-y-8 relative overflow-hidden">
        {/* Certificate Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.06] pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center border border-[#10B981]/30 shrink-0">
              <Award size={24} />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#FE385B] uppercase font-bold tracking-wider block">
                UXIO STUDIO · SIE ACADEMY
              </span>
              <h1 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
                {isEs ? 'Certificación en Creación & Estrategia Móvil' : 'Mobile Creator & Strategy Certificate'}
              </h1>
            </div>
          </div>

          <span className={`font-mono text-xs font-bold px-3.5 py-1.5 rounded-full border shrink-0 ${statusInfo.bg}`}>
            {statusInfo.badge}
          </span>
        </div>

        {/* Certificate Recipient & Meta */}
        <div className="space-y-4 text-center sm:text-left">
          <span className="font-mono text-xs text-[#8E8E93] uppercase tracking-wider block">
            {isEs ? 'OTORGADO A:' : 'AWARDED TO:'}
          </span>
          <div className="font-display font-black text-3xl sm:text-4xl text-[#111111] dark:text-white">
            {profile.fullName}
          </div>
          <p className="text-sm font-sans text-[#666666] dark:text-[#8E8E93] max-w-2xl leading-relaxed">
            {isEs
              ? 'Por haber cursado satisfactoriamente el programa Creator Lab, dominando la producción de contenido comercial, guiones de alto impacto, técnicas de filmación móvil y aceleración con Inteligencia Artificial.'
              : 'For successfully completing Creator Lab, demonstrating mastery in commercial content creation, high-converting scripts, mobile filmmaking, and AI-accelerated workflows.'}
          </p>

          {eligibility.certificateNumber && (
            <div className="pt-2 text-xs font-mono text-[#8E8E93] flex flex-wrap items-center gap-4">
              <span>{isEs ? 'No. de Certificado:' : 'Certificate ID:'} <strong className="text-[#111111] dark:text-white">{eligibility.certificateNumber}</strong></span>
              {eligibility.issuedAt && (
                <span>{isEs ? 'Fecha de Emisión:' : 'Issued on:'} <strong className="text-[#111111] dark:text-white">{new Date(eligibility.issuedAt).toLocaleDateString()}</strong></span>
              )}
            </div>
          )}
        </div>

        {/* Requirements Checklist */}
        <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-4">
          <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white">
            {isEs ? 'Estado de Requisitos Académicos' : 'Academic Requirements Status'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-[#111111] border border-black/[0.04] dark:border-white/[0.04]">
              {eligibility.lessonsProgressPercentage >= 100 ? (
                <CheckCircle2 size={16} className="text-[#10B981] shrink-0" />
              ) : (
                <Clock size={16} className="text-[#FFCC48] shrink-0" />
              )}
              <div>
                <span className="font-bold text-[#111111] dark:text-white block">
                  {isEs ? '100% Lecciones del Curso' : '100% Course Lessons'}
                </span>
                <span className="text-[#8E8E93] font-mono text-[11px]">
                  {eligibility.completedLessonsCount} / {eligibility.totalLessonsCount} ({eligibility.lessonsProgressPercentage}%)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-[#111111] border border-black/[0.04] dark:border-white/[0.04]">
              {eligibility.approvedChallengesCount >= eligibility.requiredChallengesCount ? (
                <CheckCircle2 size={16} className="text-[#10B981] shrink-0" />
              ) : (
                <AlertCircle size={16} className="text-[#FF7F07] shrink-0" />
              )}
              <div>
                <span className="font-bold text-[#111111] dark:text-white block">
                  {isEs ? 'Retos Prácticos Aprobados' : 'Approved Challenges'}
                </span>
                <span className="text-[#8E8E93] font-mono text-[11px]">
                  {eligibility.approvedChallengesCount} / {eligibility.requiredChallengesCount} {isEs ? 'aprobados por docente' : 'instructor approved'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Future Export CTAs (Sprint 3E Roadmap) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8E8E93]">
            <Lock size={13} className="text-[#FE385B]" />
            <span>{isEs ? 'Descarga de PDF y Verificación QR: Próximamente (Sprint 3E)' : 'PDF Export & QR Verification: Coming Soon (Sprint 3E)'}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              disabled
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono text-[#8E8E93] border border-black/[0.06] dark:border-white/[0.06] opacity-60 cursor-not-allowed"
            >
              <FileText size={14} />
              <span>{isEs ? 'Descargar Diploma PDF' : 'Download PDF'}</span>
            </button>
            <button
              type="button"
              disabled
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono text-[#8E8E93] border border-black/[0.06] dark:border-white/[0.06] opacity-60 cursor-not-allowed"
            >
              <ExternalLink size={14} />
              <span>{isEs ? 'Validar Credencial' : 'Verify'}</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
