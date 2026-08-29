'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ClipboardCheck,
  CheckCircle2,
  Clock,
  AlertCircle,
  ExternalLink,
  ArrowRight,
  Eye,
  SlidersHorizontal,
} from 'lucide-react';
import { Locale } from '@/types';
import { Course, Lesson, Module } from '@/data/academy/types';
import { LessonSubmission } from '@/lib/supabase/academy-submissions';
import { getStoredSubmissions } from '@/lib/academy/submissions-store';
import GradeDetailModal from './GradeDetailModal';

interface StudentGradesTableProps {
  course: Course;
  submissions: LessonSubmission[];
  lang: Locale;
}

export default function StudentGradesTable({
  course,
  submissions: initialSubmissions,
  lang,
}: StudentGradesTableProps) {
  const isEs = lang === 'es';
  const [submissions, setSubmissions] = useState<LessonSubmission[]>(initialSubmissions);
  const [selectedItem, setSelectedItem] = useState<{
    lesson: Lesson;
    moduleItem: Module;
    submission: LessonSubmission | null;
  } | null>(null);

  // Sync with local submissions store
  useEffect(() => {
    const sync = () => {
      const stored = getStoredSubmissions();
      if (stored.length > 0) {
        const merged = initialSubmissions.map(s => {
          const match = stored.find(l => l.courseSlug === s.courseId && l.lessonId === s.lessonId);
          return match
            ? {
                ...s,
                status: match.status,
                feedbackText: match.feedbackText,
                approvedCriteria: match.approvedCriteria,
                reviewedAt: match.reviewedAt,
              }
            : s;
        });

        // Also add any new submissions stored locally
        stored.forEach(l => {
          if (!merged.some(m => m.lessonId === l.lessonId)) {
            merged.push({
              id: l.id,
              userId: l.userId,
              courseId: l.courseSlug,
              lessonId: l.lessonId,
              submissionUrl: l.submissionUrl,
              submissionType: l.submissionType,
              status: l.status,
              feedbackText: l.feedbackText,
              approvedCriteria: l.approvedCriteria,
              reviewedAt: l.reviewedAt,
              submittedAt: l.submittedAt,
              updatedAt: l.updatedAt,
            });
          }
        });

        setSubmissions(merged);
      }
    };

    sync();
    window.addEventListener('uxio-submissions-updated', sync);
    return () => window.removeEventListener('uxio-submissions-updated', sync);
  }, [initialSubmissions]);

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
          <div className="font-display font-bold text-sm text-[#111111] dark:text-white mt-1">
            {approvedCount === challengeLessons.length && challengeLessons.length > 0
              ? (isEs ? '✓ Todos los Retos Aprobados' : '✓ All Challenges Passed')
              : (isEs ? `${challengeLessons.length - approvedCount} pendiente(s)` : `${challengeLessons.length - approvedCount} pending`)}
          </div>
          <p className="text-[10px] text-[#8E8E93] font-sans">
            {isEs ? 'El certificado se emite al completar el 100% de los retos.' : 'Certificate unlocks after completing 100% of challenges.'}
          </p>
        </div>
      </div>

      {/* Clean High-Density Table Card */}
      <div className="rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft overflow-hidden">
        <div className="p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ClipboardCheck size={20} className="text-[#FE385B]" />
            <div>
              <h2 className="font-display font-bold text-lg text-[#111111] dark:text-white">
                {isEs ? 'Boletín de Calificaciones & Feedback' : 'Grades & Feedback Table'}
              </h2>
              <p className="text-xs text-[#8E8E93] font-sans">
                {isEs
                  ? 'Haz clic en cualquier reto o en "Ver Detalle" para abrir la rúbrica completa.'
                  : 'Click on any challenge or "View Detail" to view full rubric and notes.'}
              </p>
            </div>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] text-[10px] font-mono uppercase text-[#8E8E93] tracking-wider">
                <th className="py-3.5 px-5 font-bold">{isEs ? 'Módulo & Reto' : 'Module & Challenge'}</th>
                <th className="py-3.5 px-4 font-bold">{isEs ? 'Estado' : 'Status'}</th>
                <th className="py-3.5 px-4 font-bold">{isEs ? 'Nota' : 'Grade'}</th>
                <th className="py-3.5 px-4 font-bold">{isEs ? 'Rúbrica' : 'Rubric'}</th>
                <th className="py-3.5 px-4 font-bold hidden md:table-cell">{isEs ? 'Feedback Docente' : 'Feedback'}</th>
                <th className="py-3.5 px-5 font-bold text-right">{isEs ? 'Acciones' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.04] text-xs">
              {challengeLessons.map((item, index) => {
                const { lesson, moduleItem, submission } = item;
                const status = submission?.status || 'not_submitted';
                const criteriaList = lesson.challenge?.evaluationCriteria || [];
                const approvedCriteria = submission?.approvedCriteria || [];
                const criteriaCount = criteriaList.length;
                const approvedCriteriaCount = approvedCriteria.length;

                const score5 = status === 'approved'
                  ? (approvedCriteriaCount > 0 ? ((approvedCriteriaCount / criteriaCount) * 5.0).toFixed(1) : '5.0')
                  : status === 'needs_revision'
                  ? ((approvedCriteriaCount / (criteriaCount || 1)) * 5.0).toFixed(1)
                  : null;

                let statusBadge = {
                  label: isEs ? 'Pendiente' : 'Pending',
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
                    label: isEs ? 'Ajustes' : 'Revision',
                    bg: 'bg-[#FF7F07]/15 text-[#FF7F07] border-[#FF7F07]/30',
                    icon: AlertCircle,
                  };
                } else if (status === 'submitted' || status === 'pending_review') {
                  statusBadge = {
                    label: isEs ? 'En Revisión' : 'In Review',
                    bg: 'bg-[#FE385B]/10 text-[#FE385B] border-[#FE385B]/25',
                    icon: Clock,
                  };
                }

                const StatusIcon = statusBadge.icon;

                return (
                  <tr
                    key={lesson.id}
                    onClick={() => setSelectedItem(item)}
                    className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors cursor-pointer group"
                  >
                    {/* Reto & Lección */}
                    <td className="py-4 px-5">
                      <div className="space-y-0.5 min-w-[200px] max-w-[280px]">
                        <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#FE385B]">
                          <span className="font-bold">{moduleItem.weekTag}</span>
                          <span>· Reto {index + 1}</span>
                        </div>
                        <p className="font-display font-bold text-xs text-[#111111] dark:text-white group-hover:text-[#FE385B] transition-colors truncate">
                          {lesson.challenge?.title || lesson.title}
                        </p>
                        <p className="text-[11px] text-[#8E8E93] truncate font-sans">
                          {lesson.title}
                        </p>
                      </div>
                    </td>

                    {/* Estado */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border font-semibold ${statusBadge.bg}`}>
                        <StatusIcon size={12} />
                        <span>{statusBadge.label}</span>
                      </span>
                    </td>

                    {/* Nota */}
                    <td className="py-4 px-4 whitespace-nowrap font-mono font-bold">
                      {score5 !== null ? (
                        <span className={status === 'approved' ? 'text-[#10B981]' : 'text-[#FF7F07]'}>
                          {score5} / 5.0
                        </span>
                      ) : (
                        <span className="text-[#8E8E93]">—</span>
                      )}
                    </td>

                    {/* Rúbrica */}
                    <td className="py-4 px-4 whitespace-nowrap font-mono text-xs text-[#8E8E93]">
                      {submission ? (
                        <span className={status === 'approved' ? 'text-[#10B981] font-bold' : 'text-[#111111] dark:text-white'}>
                          {status === 'approved' && approvedCriteriaCount === 0 ? criteriaCount : approvedCriteriaCount} / {criteriaCount}
                        </span>
                      ) : (
                        <span>0 / {criteriaCount}</span>
                      )}
                    </td>

                    {/* Feedback Docente */}
                    <td className="py-4 px-4 hidden md:table-cell max-w-[220px]">
                      {submission?.feedbackText ? (
                        <p className="text-xs text-[#666666] dark:text-[#8E8E93] italic truncate font-sans">
                          "{submission.feedbackText}"
                        </p>
                      ) : (
                        <span className="text-[11px] text-[#8E8E93]/60 font-mono">—</span>
                      )}
                    </td>

                    {/* Acciones */}
                    <td className="py-4 px-5 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2" onClick={e => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => setSelectedItem(item)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#FE385B] hover:text-white text-[11px] font-mono text-[#111111] dark:text-white transition-colors border border-black/[0.06] dark:border-white/[0.06]"
                        >
                          <Eye size={12} />
                          <span>{isEs ? 'Detalle' : 'Detail'}</span>
                        </button>

                        <Link
                          href={`/${lang}/academy/classroom/${course.slug}/${moduleItem.slug}/${lesson.slug}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#FE385B]/10 hover:bg-[#FE385B] text-[#FE385B] hover:text-white text-[11px] font-mono font-bold transition-colors"
                        >
                          <span>{isEs ? 'Clase' : 'Lesson'}</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grade Detail Modal */}
      <GradeDetailModal
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
        courseSlug={course.slug}
        lang={lang}
      />
    </div>
  );
}
