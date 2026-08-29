'use client';

import React from 'react';
import Link from 'next/link';
import {
  Award,
  ArrowLeft,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  ExternalLink,
  Printer,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { Locale } from '@/types';
import { StudentProfileData } from '@/lib/supabase/profile';
import { CertificateEligibility } from '@/lib/supabase/certificates';
import QRCodeSVG from '@/components/ui/QRCodeSVG';

interface CertificateClientViewProps {
  profile: StudentProfileData;
  eligibility: CertificateEligibility;
  lang: Locale;
}

export default function CertificateClientView({
  profile,
  eligibility,
  lang,
}: CertificateClientViewProps) {
  const isEs = lang === 'es';
  const certNumber = eligibility.certificateNumber || 'UXIO-2026-PENDING';
  const verifyUrl = `https://uxio.io/${lang}/academy/verify/${certNumber}`;
  const isIssued = eligibility.status === 'issued';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Top Bar (Hidden on print) */}
      <div className="no-print flex items-center justify-between">
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

      {/* Main Certificate Stage Card (Printable Frame) */}
      <div className="certificate-print-container">
        <div className="certificate-frame p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#171719] border-2 border-black/[0.1] dark:border-white/[0.1] shadow-soft-lg space-y-8 relative overflow-hidden">
          {/* Certificate Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.08] dark:border-white/[0.08] pb-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center border border-[#10B981]/30 shrink-0">
                <Award size={28} />
              </div>
              <div>
                <span className="font-mono text-xs text-[#FE385B] uppercase font-bold tracking-widest block">
                  UXIO STUDIO · SIE ACADEMY
                </span>
                <h1 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
                  {isEs ? 'Certificación en Creación Comercial & Filmmaking Móvil' : 'Mobile Creator & Commercial Strategy Certificate'}
                </h1>
              </div>
            </div>

            <span
              className={`font-mono text-xs font-bold px-3.5 py-1.5 rounded-full border shrink-0 text-center ${
                isIssued
                  ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30'
                  : eligibility.isEligible
                  ? 'bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/30'
                  : 'bg-[#FFCC48]/15 text-[#FFCC48] border-[#FFCC48]/30'
              }`}
            >
              {isIssued
                ? isEs ? '✓ CERTIFICADO EMITIDO' : '✓ ISSUED'
                : eligibility.isEligible
                ? isEs ? '🎉 ELEGIBLE PARA EMISIÓN' : '🎉 ELIGIBLE'
                : isEs ? '⏳ EN PROGRESO' : '⏳ IN PROGRESS'}
            </span>
          </div>

          {/* Recipient Information */}
          <div className="space-y-4 text-center sm:text-left">
            <span className="font-mono text-xs text-[#8E8E93] uppercase tracking-wider block">
              {isEs ? 'SE OTORGA LA PRESENTE DISTINCIÓN A:' : 'THIS CREDENTIAL IS PROUDLY AWARDED TO:'}
            </span>
            <div className="font-display font-black text-3xl sm:text-4xl text-[#111111] dark:text-white">
              {profile.fullName}
            </div>
            <p className="text-xs sm:text-sm font-sans text-[#666666] dark:text-[#8E8E93] max-w-2xl leading-relaxed">
              {isEs
                ? 'Por haber completado satisfactoriamente el programa intensivo Creator Lab, demostrando dominio en la creación de contenido comercial de alto impacto, técnica de filmación móvil, guiones persuasivos y aceleración con Inteligencia Artificial.'
                : 'For successfully completing the Creator Lab intensive cohort, demonstrating mastery in high-converting mobile filmmaking, persuasive storytelling, and AI-accelerated creative workflows.'}
            </p>
          </div>

          {/* QR & Verification Footprint */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="font-mono text-xs text-[#10B981] font-bold block">
                {isEs ? 'Verificación Oficial & Autenticidad' : 'Official Verification & Authenticity'}
              </span>
              <p className="text-xs font-mono text-[#8E8E93]">
                {isEs ? 'Registro No:' : 'ID:'} <strong className="text-[#111111] dark:text-white">{certNumber}</strong>
                {eligibility.issuedAt && ` · ${new Date(eligibility.issuedAt).toLocaleDateString()}`}
              </p>
              <p className="text-[11px] text-[#8E8E93] font-sans">
                {isEs ? 'Expedido por UXIO Studio · Bogotá, Colombia' : 'Issued by UXIO Studio · Bogotá, Colombia'}
              </p>
            </div>

            <div className="p-2 rounded-xl bg-white border border-black/[0.08] shadow-sm shrink-0">
              <QRCodeSVG value={verifyUrl} size={88} fgColor="#111111" bgColor="#ffffff" />
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Matrix (Hidden on print) */}
      <div className="no-print p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
        <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white">
          {isEs ? 'Requisitos para Obtención de Certificado' : 'Academic Certification Requirements'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
            {eligibility.lessonsProgressPercentage >= 100 ? (
              <CheckCircle2 size={16} className="text-[#10B981] shrink-0" />
            ) : (
              <Clock size={16} className="text-[#FFCC48] shrink-0" />
            )}
            <div>
              <span className="font-bold text-[#111111] dark:text-white block">{isEs ? '100% Lecciones Completadas' : '100% Lessons Completed'}</span>
              <span className="text-[#8E8E93] font-mono text-[11px]">{eligibility.completedLessonsCount} / {eligibility.totalLessonsCount} ({eligibility.lessonsProgressPercentage}%)</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
            {eligibility.approvedChallengesCount >= eligibility.requiredChallengesCount ? (
              <CheckCircle2 size={16} className="text-[#10B981] shrink-0" />
            ) : (
              <AlertCircle size={16} className="text-[#FF7F07] shrink-0" />
            )}
            <div>
              <span className="font-bold text-[#111111] dark:text-white block">{isEs ? 'Retos Prácticos Aprobados' : 'Approved Challenges'}</span>
              <span className="text-[#8E8E93] font-mono text-[11px]">{eligibility.approvedChallengesCount} / {eligibility.requiredChallengesCount} {isEs ? 'aprobados por docente' : 'instructor approved'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons: PDF Print & Public Verification (Hidden on print) */}
      <div className="no-print flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft">
        <div className="flex items-center gap-2 text-xs font-mono text-[#8E8E93]">
          <ShieldCheck size={14} className="text-[#10B981]" />
          <span>{isEs ? 'Credencial digital con exportación PDF en alta definición' : 'High-definition PDF landscape credential'}</span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={handlePrint}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-[#FE385B] text-white hover:bg-[#FE385B]/90 font-display font-bold text-xs shadow-md shadow-[#FE385B]/20 transition-all"
          >
            <Printer size={14} />
            <span>{isEs ? 'Descargar Diploma PDF' : 'Download PDF Certificate'}</span>
          </button>

          {isIssued && (
            <Link
              href={`/${lang}/academy/verify/${certNumber}`}
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono text-[#111111] dark:text-white border border-black/[0.06] dark:border-white/[0.06] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-colors"
            >
              <ExternalLink size={13} />
              <span>{isEs ? 'Verificación Pública' : 'Public Link'}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
