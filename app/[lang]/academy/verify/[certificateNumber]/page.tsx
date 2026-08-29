import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Award,
  Calendar,
  ExternalLink,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { Locale } from '@/types';
import { getPublicCertificateByNumber } from '@/lib/supabase/certificates';
import QRCodeSVG from '@/components/ui/QRCodeSVG';

export async function generateStaticParams() {
  return [
    { lang: 'es', certificateNumber: 'UXIO-2026-0001' },
    { lang: 'en', certificateNumber: 'UXIO-2026-0001' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; certificateNumber: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, certificateNumber } = await params;
  const isEs = rawLang !== 'en';
  const cert = await getPublicCertificateByNumber(certificateNumber, isEs ? 'es' : 'en');

  return {
    title: cert.isValid
      ? `Validación de Certificado: ${cert.certificateNumber} — UXIO Academy`
      : 'Verificación de Certificado — UXIO Academy',
    description: cert.isValid
      ? `Credencial académica verificada otorgada a ${cert.studentName} para ${cert.courseTitle}.`
      : 'Sistema público de verificación y validación de diplomas de UXIO Academy.',
  };
}

export default async function PublicVerifyPage({
  params,
}: {
  params: Promise<{ lang: string; certificateNumber: string }>;
}) {
  const { lang: rawLang, certificateNumber } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const isEs = lang === 'es';

  const cert = await getPublicCertificateByNumber(certificateNumber, lang);
  const verifyUrl = `https://uxio.io/${lang}/academy/verify/${certificateNumber}`;

  return (
    <main className="flex-1 min-w-0 max-w-[900px] w-full mx-auto p-6 md:p-10 space-y-8 transition-colors min-h-[85vh]">
      {/* Top Tag */}
      <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-[#10B981]" />
          <span className="font-mono text-xs text-[#10B981] uppercase tracking-wider font-bold">
            // {isEs ? 'SISTEMA PÚBLICO DE VERIFICACIÓN' : 'PUBLIC VERIFICATION SYSTEM'}
          </span>
        </div>

        <Link
          href={`/${lang}/academy`}
          className="text-xs font-mono text-[#8E8E93] hover:text-[#FE385B] transition-colors"
        >
          {isEs ? 'Ir a SIE Academy →' : 'Go to SIE Academy →'}
        </Link>
      </div>

      {/* Main Verification Card */}
      {cert.status === 'issued' ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#171719] border border-[#10B981]/30 shadow-soft-lg space-y-8 animate-fadeIn">
          {/* Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/25">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#10B981]/20">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#10B981] uppercase font-bold tracking-wider block">
                  {isEs ? 'AUTENTICIDAD VERIFICADA' : 'AUTHENTICITY VERIFIED'}
                </span>
                <h1 className="font-display font-extrabold text-lg sm:text-xl text-[#111111] dark:text-white">
                  {isEs ? 'Certificado Oficial Válido & Activo' : 'Official Certificate Valid & Active'}
                </h1>
              </div>
            </div>

            <span className="font-mono text-xs text-[#10B981] bg-white dark:bg-[#111111] px-3.5 py-1.5 rounded-xl border border-[#10B981]/30 font-bold shrink-0 text-center">
              {cert.certificateNumber}
            </span>
          </div>

          {/* Student & Course Details */}
          <div className="space-y-6">
            <div>
              <span className="font-mono text-xs text-[#8E8E93] uppercase block mb-1">
                {isEs ? 'ESTUDIANTE CERTIFICADO:' : 'CERTIFIED STUDENT:'}
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#111111] dark:text-white">
                {cert.studentName}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-1">
                <span className="font-mono text-[10px] text-[#8E8E93] block">{isEs ? 'PROGRAMA FORMATIVO' : 'TRAINING PROGRAM'}</span>
                <p className="font-display font-bold text-sm text-[#111111] dark:text-white">{cert.courseTitle}</p>
                <p className="font-sans text-xs text-[#8E8E93]">Creator Lab · Cohorte Intensiva</p>
              </div>

              <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-1">
                <span className="font-mono text-[10px] text-[#8E8E93] block">{isEs ? 'FECHA DE EMISIÓN' : 'ISSUE DATE'}</span>
                <p className="font-display font-bold text-sm text-[#111111] dark:text-white">
                  {cert.issuedAt ? new Date(cert.issuedAt).toLocaleDateString(isEs ? 'es-CO' : 'en-US', { day: '2-digit', month: 'long', year: 'numeric' }) : '2026'}
                </p>
                <p className="font-sans text-xs text-[#10B981]">UXIO Studio & SIE Academy</p>
              </div>
            </div>
          </div>

          {/* QR & Verification Footnote */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-mono text-xs text-[#10B981] font-bold block">
                {isEs ? 'Sello Digital Inmutable' : 'Immutable Digital Seal'}
              </span>
              <p className="text-xs text-[#8E8E93] font-sans max-w-md">
                {isEs
                  ? 'Este registro confirma que el estudiante completó el 100% del currículo y aprobó los retos prácticos evaluados por el equipo docente.'
                  : 'This record confirms the student completed 100% of the curriculum and passed all instructor-graded practical challenges.'}
              </p>
            </div>

            <div className="p-2.5 rounded-2xl bg-white dark:bg-white border border-black/[0.08] shadow-soft shrink-0">
              <QRCodeSVG value={verifyUrl} size={96} fgColor="#111111" bgColor="#ffffff" />
            </div>
          </div>
        </div>
      ) : cert.status === 'revoked' ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#171719] border border-[#FE385B]/30 shadow-soft-lg space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#FE385B]/15 text-[#FE385B] flex items-center justify-center mx-auto">
            <AlertTriangle size={32} />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <span className="font-mono text-xs text-[#FE385B] uppercase font-bold">
              // {isEs ? 'CREDENCIAL ANULADA' : 'CREDENTIAL REVOKED'}
            </span>
            <h1 className="font-display font-extrabold text-2xl text-[#111111] dark:text-white">
              {isEs ? 'Certificado Revocado' : 'Certificate Revoked'}
            </h1>
            <p className="text-xs text-[#8E8E93] font-sans leading-relaxed">
              {isEs
                ? `El certificado número ${certificateNumber} ha sido revocado por la dirección académica de UXIO Academy.`
                : `Certificate ${certificateNumber} has been revoked by UXIO Academy academic board.`}
            </p>
          </div>
        </div>
      ) : (
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93] flex items-center justify-center mx-auto">
            <XCircle size={32} />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <span className="font-mono text-xs text-[#8E8E93] uppercase font-bold">
              // {isEs ? 'REGISTRO NO ENCONTRADO' : 'RECORD NOT FOUND'}
            </span>
            <h1 className="font-display font-extrabold text-2xl text-[#111111] dark:text-white">
              {isEs ? 'Certificado No Válido' : 'Invalid Certificate'}
            </h1>
            <p className="text-xs text-[#8E8E93] font-sans leading-relaxed">
              {isEs
                ? `No encontramos ningún certificado emitido con el número de registro "${certificateNumber}". Verifique el enlace o código QR.`
                : `No certificate found with registration number "${certificateNumber}". Please verify the link or QR code.`}
            </p>
          </div>
        </div>
      )}

      {/* Footer Explore CTA */}
      <div className="text-center pt-4">
        <Link
          href={`/${lang}/academy/creator-lab`}
          className="inline-flex items-center gap-2 py-3 px-6 rounded-2xl bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#FE385B] dark:hover:bg-[#FE385B] dark:hover:text-white font-display font-bold text-xs transition-colors shadow-md"
        >
          <span>{isEs ? 'Conocer el Programa Creator Lab' : 'Discover Creator Lab Program'}</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </main>
  );
}
