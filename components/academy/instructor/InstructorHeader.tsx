import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Clock,
  AlertCircle,
  CheckCircle2,
  Users,
  Layers,
  GraduationCap,
  BookOpen,
} from 'lucide-react';
import { Locale } from '@/types';
import { InstructorMetrics } from '@/lib/supabase/instructor';
import LogoutButton from '@/components/academy/LogoutButton';

interface InstructorHeaderProps {
  instructorName: string;
  instructorEmail?: string;
  metrics: InstructorMetrics;
  lang: Locale;
}

export default function InstructorHeader({
  instructorName,
  instructorEmail,
  metrics,
  lang,
}: InstructorHeaderProps) {
  const isEs = lang === 'es';

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FE385B] to-[#FF7F07] text-white flex items-center justify-center font-display font-black text-xl shadow-md shadow-[#FE385B]/20 shrink-0">
            {instructorName.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-[#FE385B] uppercase tracking-widest font-bold bg-[#FE385B]/10 px-2.5 py-0.5 rounded border border-[#FE385B]/20">
                // INSTRUCTOR PANEL · UXIO ACADEMY
              </span>
            </div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white mt-0.5">
              {isEs ? `Panel Docente · ${instructorName}` : `Instructor Panel · ${instructorName}`}
            </h1>
            <p className="text-xs text-[#8E8E93] font-mono mt-0.5">
              {instructorEmail}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/${lang}/academy/classroom`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors border border-black/[0.06] dark:border-white/[0.06]"
          >
            <GraduationCap size={14} />
            <span>{isEs ? 'Ver como Alumno' : 'Student View'}</span>
          </Link>
          <LogoutButton lang={lang} />
        </div>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-[#FE385B]/25 shadow-soft space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#FE385B]">
            <span>{isEs ? 'PENDIENTES HOY' : 'PENDING REVIEW'}</span>
            <Clock size={16} />
          </div>
          <div className="font-display font-extrabold text-3xl text-[#111111] dark:text-white">
            {metrics.pendingCount}
          </div>
          <p className="text-[11px] text-[#8E8E93] font-sans">
            {isEs ? 'Entregas por revisar' : 'Submissions to grade'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-[#FF7F07]/30 shadow-soft space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#FF7F07]">
            <span>{isEs ? 'REQUIEREN AJUSTES' : 'NEEDS REVISION'}</span>
            <AlertCircle size={16} />
          </div>
          <div className="font-display font-extrabold text-3xl text-[#111111] dark:text-white">
            {metrics.needsRevisionCount}
          </div>
          <p className="text-[11px] text-[#8E8E93] font-sans">
            {isEs ? 'Esperando re-entrega' : 'Awaiting re-submission'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-[#10B981]/30 shadow-soft space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#10B981]">
            <span>{isEs ? 'APROBADAS' : 'APPROVED'}</span>
            <CheckCircle2 size={16} />
          </div>
          <div className="font-display font-extrabold text-3xl text-[#111111] dark:text-white">
            {metrics.approvedCount}
          </div>
          <p className="text-[11px] text-[#8E8E93] font-sans">
            {isEs ? 'Retos superados con éxito' : 'Challenges completed'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.06] shadow-soft space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#8E8E93]">
            <span>{isEs ? 'ALUMNOS ACTIVOS' : 'ACTIVE STUDENTS'}</span>
            <Users size={16} />
          </div>
          <div className="font-display font-extrabold text-3xl text-[#111111] dark:text-white">
            {metrics.studentsCount}
          </div>
          <p className="text-[11px] text-[#8E8E93] font-sans">
            {isEs ? 'En 1 cohorte activa' : 'In 1 active cohort'}
          </p>
        </div>
      </div>
    </div>
  );
}
