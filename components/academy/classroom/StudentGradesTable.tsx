'use client';

import React from 'react';
import Link from 'next/link';
import {
  ClipboardCheck,
  CheckCircle2,
  Clock,
  AlertCircle,
  ExternalLink,
  Award,
  ArrowRight,
} from 'lucide-react';
import { Locale } from '@/types';
import { Course, Module } from '@/data/academy/types';
import { LessonSubmission } from '@/lib/supabase/academy-submissions';

interface StudentGradesTableProps {
  course: Course;
  submissions: LessonSubmission[];
  lang: Locale;
}

export default function StudentGradesTable({
  course,
  submissions,
  lang,
}: StudentGradesTableProps) {
  const isEs = lang === 'es';

  // Extract all lessons with challenges across the course modules
  const challengeLessons = course.modules.flatMap(moduleItem =>
    moduleItem.lessons
      .filter(l => Boolean(l.challenge))
      .map(l => ({
        lesson: l,
        moduleItem,
        submission: submissions.find(s => s.lessonId === l.id) || null,
      }))
  );

  const approvedCount = challengeLessons.filter(
    item => item.submission?.status === 'approved'
  ).length;

  return (
    <div className="space-y-6">
      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-1">
          <span className="font-mono text-[10px] text-[#8E8E93] uppercase font-bold">
            {isEs ? 'TOTAL RETOS EVALUADOS' : 'TOTAL CHALLENGES'}
          </span>
          <div className="font-display font-extrabold text-2xl text-[#111111] dark:text-white">
            {challengeLessons.length}
          </div>
          <p className="text-[11px] text-[#8E8E93] font-sans">
            {isEs ? 'Entregables requeridos' : 'Required deliverables'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-[#10B981]/25 shadow-soft space-y-1">
          <span className="font-mono text-[10px] text-[#10B981] uppercase font-bold">
            {isEs ? 'RETOS APROBADOS' : 'APPROVED CHALLENGES'}
          </span>
          <div className="font-display font-extrabold text-2xl text-[#10B981]">
            {approvedCount} / {challengeLessons.length}
          </div>
          <p className="text-[11px] text-[#10B981] font-mono">
            {Math.round((approvedCount / (challengeLessons.length || 1)) * 100)}% {isEs ? 'completado' : 'completed'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-1">
          <span className="font-mono text-[10px] text-[#FE385B] uppercase font-bold">
            {isEs ? 'ESTADO CERTIFICACIÓN' : 'CERTIFICATE STATUS'}
          </span>
          <div className="font-display font-bold text-base text-[#111111] dark:text-white mt-1">
            {approvedCount === challengeLessons.length && challengeLessons.length > 0
              ? (isEs ? '✓ Elegible para Certificado' : '✓ Eligible for Certificate')
              : (isEs ? `${challengeLessons.length - approvedCount} pendiente(s)` : `${challengeLessons.length - approvedCount} pending`)}
          </div>
          <Link
            href={`/${lang}/academy/classroom/certificate`}
            className="inline-flex items-center gap-1 text-[11px] font-mono text-[#FE385B] hover:underline pt-0.5"
          >
            <span>{isEs ? 'Ver Certificado' : 'View Certificate'}</span>
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      {/* Challenges & Grades Table */}
      <div className="rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft overflow-hidden">
        <div className="p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ClipboardCheck size={20} className="text-[#FE385B]" />
            <div>
              <h2 className="font-display font-bold text-lg text-[#111111] dark:text-white">
                {isEs ? 'Boletín de Calificaciones & Feedback Docente' : 'Grades & Instructor Feedback'}
              </h2>
              <p className="text-xs text-[#8E8E93] font-sans">
                {isEs
                  ? 'Revisa el estatus de tus entregables y la retroalimentación de cada reto práctico.'
                  : 'Check the status of your submissions and individual instructor feedback.'}
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
          {challengeLessons.map(({ lesson, moduleItem, submission }, index) => {
            const status = submission?.status || 'not_submitted';

            let statusBadge = {
              label: isEs ? 'No Entregado' : 'Not Submitted',
              bg: 'bg-black/[0.04] dark:bg-white/[0.06] text-[#8E8E93] border-black/[0.06] dark:border-white/[0.08]',
              icon: Clock,
            };

            if (status === 'approved') {
              statusBadge = {
                label: isEs ? 'Aprobado ✓' : 'Approved ✓',
                bg: 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30',
                icon: CheckCircle2,
              };
            } else if (status === 'needs_revision') {
              statusBadge = {
                label: isEs ? 'Requiere Ajustes' : 'Needs Revision',
                bg: 'bg-[#FF7F07]/15 text-[#FF7F07] border-[#FF7F07]/30',
                icon: AlertCircle,
              };
            } else if (status === 'submitted' || status === 'pending_review') {
              statusBadge = {
                label: isEs ? 'En Revisión' : 'In Review',
                bg: 'bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/30',
                icon: Clock,
              };
            }

            const StatusIcon = statusBadge.icon;

            return (
              <div key={lesson.id} className="p-6 hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#FE385B] uppercase font-bold bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
                        {moduleItem.weekTag} · Reto {index + 1}
                      </span>
                      <span className="font-mono text-xs text-[#8E8E93]">
                        {lesson.title}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-[#111111] dark:text-white">
                      {lesson.challenge?.title || lesson.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border font-semibold ${statusBadge.bg}`}>
                      <StatusIcon size={13} />
                      <span>{statusBadge.label}</span>
                    </span>

                    <Link
                      href={`/${lang}/academy/classroom/${course.slug}/${moduleItem.slug}/${lesson.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#FE385B] hover:underline"
                    >
                      <span>{submission ? (isEs ? 'Ver Entrega' : 'View') : (isEs ? 'Ir a Entregar' : 'Submit')}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Submission Link Details */}
                {submission?.submissionUrl && (
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8E8E93] bg-black/[0.02] dark:bg-white/[0.02] p-2.5 rounded-xl border border-black/[0.04] dark:border-white/[0.04]">
                    <span className="font-semibold text-[#111111] dark:text-white">{isEs ? 'Enlace entregado:' : 'Submitted link:'}</span>
                    <a
                      href={submission.submissionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00F0FF] hover:underline truncate max-w-md flex items-center gap-1"
                    >
                      <span>{submission.submissionUrl}</span>
                      <ExternalLink size={11} className="shrink-0" />
                    </a>
                  </div>
                )}

                {/* Instructor Feedback Box */}
                {submission?.feedbackText && (
                  <div className="p-4 rounded-2xl bg-[#00F0FF]/5 border border-[#00F0FF]/20 space-y-1">
                    <div className="font-mono text-[10px] text-[#00F0FF] font-bold uppercase tracking-wider">
                      // {isEs ? 'RETROALIMENTACIÓN DEL INSTRUCTOR' : 'INSTRUCTOR FEEDBACK'}
                    </div>
                    <p className="text-xs sm:text-sm text-[#111111] dark:text-[#E5E5E7] font-sans leading-relaxed">
                      "{submission.feedbackText}"
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
