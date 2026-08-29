import React from 'react';
import { Award, TrendingUp, BookOpen, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { Locale } from '@/types';
import { StudentOutcomesData } from '@/lib/supabase/profile';

interface StudentOutcomesCardProps {
  outcomes: StudentOutcomesData;
  lang: Locale;
}

export default function StudentOutcomesCard({
  outcomes,
  lang,
}: StudentOutcomesCardProps) {
  const isEs = lang === 'es';

  return (
    <div className="space-y-8">
      {/* 1. Outcomes & Progress Matrix */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-6">
        <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
          <div className="flex items-center gap-2.5">
            <TrendingUp size={18} className="text-[#10B981]" />
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
                {isEs ? 'Mi Progreso & Resultados' : 'My Progress & Outcomes'}
              </h3>
              <p className="text-xs text-[#8E8E93] font-mono">
                {outcomes.courseTitle} · {outcomes.cohortName}
              </p>
            </div>
          </div>
          <span className="font-mono text-sm font-bold text-[#10B981]">
            {outcomes.progressPercentage}%
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] space-y-1">
            <span className="font-mono text-[10px] text-[#8E8E93] block">{isEs ? 'LECCIONES' : 'LESSONS'}</span>
            <div className="font-display font-bold text-xl text-[#111111] dark:text-white">
              {outcomes.completedLessonsCount} / {outcomes.totalLessonsCount}
            </div>
            <p className="text-[10px] text-[#10B981] font-mono">✓ {isEs ? 'Completadas' : 'Done'}</p>
          </div>

          <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] space-y-1">
            <span className="font-mono text-[10px] text-[#8E8E93] block">{isEs ? 'RETOS ENVIADOS' : 'SUBMISSIONS'}</span>
            <div className="font-display font-bold text-xl text-[#00F0FF]">
              {outcomes.submittedChallengesCount}
            </div>
            <p className="text-[10px] text-[#8E8E93] font-mono">{isEs ? 'Entregables' : 'Deliverables'}</p>
          </div>

          <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] space-y-1">
            <span className="font-mono text-[10px] text-[#8E8E93] block">{isEs ? 'APROBADOS' : 'APPROVED'}</span>
            <div className="font-display font-bold text-xl text-[#10B981]">
              {outcomes.approvedChallengesCount}
            </div>
            <p className="text-[10px] text-[#10B981] font-mono">★ {isEs ? 'Validados' : 'Validated'}</p>
          </div>

          <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] space-y-1">
            <span className="font-mono text-[10px] text-[#8E8E93] block">{isEs ? 'AJUSTES' : 'REVISIONS'}</span>
            <div className="font-display font-bold text-xl text-[#FF7F07]">
              {outcomes.needsRevisionCount}
            </div>
            <p className="text-[10px] text-[#FF7F07] font-mono">↻ {isEs ? 'Pendientes' : 'Pending'}</p>
          </div>
        </div>
      </div>

      {/* 2. Achievement & Credential Preview */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-black/[0.02] to-black/[0.05] dark:from-[#171719] dark:to-[#121214] border border-[#10B981]/25 shadow-soft space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center border border-[#10B981]/30 shrink-0">
              <Award size={24} />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#10B981] uppercase font-bold tracking-wider block">
                // {isEs ? 'CREDENCIAL PROFESIONAL' : 'PROFESSIONAL CREDENTIAL'}
              </span>
              <h4 className="font-display font-bold text-base text-[#111111] dark:text-white">
                {isEs ? 'Certificado en Creación & Estrategia Móvil' : 'Mobile Creator & Strategy Certificate'}
              </h4>
              <p className="text-xs text-[#8E8E93] font-sans">
                {isEs ? 'Expedido por UXIO Studio & SIE Academy' : 'Issued by UXIO Studio & SIE Academy'}
              </p>
            </div>
          </div>

          <span
            className={`font-mono text-xs font-bold px-3 py-1 rounded-full border shrink-0 ${
              outcomes.isReadyForCertificate
                ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30'
                : 'bg-[#FFCC48]/15 text-[#FFCC48] border-[#FFCC48]/30'
            }`}
          >
            {outcomes.isReadyForCertificate
              ? isEs
                ? 'Listo para Certificación ✓'
                : 'Ready for Certification ✓'
              : isEs
              ? 'En Progreso'
              : 'In Progress'}
          </span>
        </div>

        <p className="text-xs text-[#8E8E93] font-sans leading-relaxed pt-2 border-t border-black/[0.04] dark:border-white/[0.04]">
          {isEs
            ? 'Tu certificado digital verificable se emitirá automáticamente una vez completes el 100% de las clases teóricas y todos tus entregables prácticos sean aprobados por el equipo docente.'
            : 'Your verifiable digital certificate will be automatically issued once you complete 100% of the lessons and all practical deliverables are approved by the teaching team.'}
        </p>
      </div>
    </div>
  );
}
