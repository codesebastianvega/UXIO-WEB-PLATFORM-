'use client';

import React, { useState, useTransition, useEffect } from 'react';
import {
  Award,
  CheckCircle2,
  AlertCircle,
  Clock,
} from 'lucide-react';
import { LessonChallenge as LessonChallengeType } from '@/data/academy/types';
import { Locale } from '@/types';
import { LessonSubmission } from '@/lib/supabase/academy-submissions';
import { upsertLessonSubmissionAction } from '@/app/[lang]/academy/actions/submissions';
import { getStoredLiveLinks } from '@/lib/academy/live-links-store';
import { getStoredSubmissions, saveLocalSubmission } from '@/lib/academy/submissions-store';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';
import ChallengeSubmissionBlock from './ChallengeSubmissionBlock';
import ChallengeCriteriaCards from './ChallengeCriteriaCards';
import BrandDiagnosisCard from './resources/BrandDiagnosisCard';
import BrandDiagnosisModal from './resources/BrandDiagnosisModal';

interface LessonChallengeHubProps {
  challenge: LessonChallengeType;
  courseSlug: string;
  lessonId: string;
  initialSubmission?: LessonSubmission | null;
  lang: Locale;
}

export default function LessonChallengeHub({
  challenge,
  courseSlug,
  lessonId,
  initialSubmission = null,
  lang,
}: LessonChallengeHubProps) {
  const isEs = lang === 'es';
  const [submission, setSubmission] = useState<LessonSubmission | null>(initialSubmission);
  const [isEditing, setIsEditing] = useState(false);
  const [urlInput, setUrlInput] = useState(initialSubmission?.submissionUrl || '');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [whatsappUrl, setWhatsappUrl] = useState('https://chat.whatsapp.com/CreatorLabCohorte01');
  const [isDiagnosisModalOpen, setIsDiagnosisModalOpen] = useState(false);

  const isDiagnosisLesson = lessonId === 'm00-01';

  useEffect(() => {
    const liveLinks = getStoredLiveLinks();
    if (liveLinks.whatsappGroupUrl) {
      setWhatsappUrl(liveLinks.whatsappGroupUrl);
    }

    const stored = getStoredSubmissions();
    const match = stored.find(s => s.courseSlug === courseSlug && s.lessonId === lessonId);
    if (match) {
      setSubmission({
        id: match.id,
        userId: match.userId,
        courseId: courseSlug,
        lessonId: match.lessonId,
        submissionUrl: match.submissionUrl,
        submissionType: match.submissionType,
        status: match.status,
        feedbackText: match.feedbackText,
        approvedCriteria: match.approvedCriteria,
        reviewedAt: match.reviewedAt,
        submittedAt: match.submittedAt,
        updatedAt: match.updatedAt,
      });
      setUrlInput(match.submissionUrl);
    }

    const handleUpdate = () => {
      const updatedList = getStoredSubmissions();
      const updatedMatch = updatedList.find(s => s.courseSlug === courseSlug && s.lessonId === lessonId);
      if (updatedMatch) {
        setSubmission({
          id: updatedMatch.id,
          userId: updatedMatch.userId,
          courseId: courseSlug,
          lessonId: updatedMatch.lessonId,
          submissionUrl: updatedMatch.submissionUrl,
          submissionType: updatedMatch.submissionType,
          status: updatedMatch.status,
          feedbackText: updatedMatch.feedbackText,
          approvedCriteria: updatedMatch.approvedCriteria,
          reviewedAt: updatedMatch.reviewedAt,
          submittedAt: updatedMatch.submittedAt,
          updatedAt: updatedMatch.updatedAt,
        });
      }
    };

    window.addEventListener('uxio-submissions-updated', handleUpdate);
    return () => window.removeEventListener('uxio-submissions-updated', handleUpdate);
  }, [courseSlug, lessonId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = urlInput.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length === 0 || lines.some(l => !l.startsWith('http://') && !l.startsWith('https://'))) {
      setErrorMsg(isEs ? 'Ingresa URLs válidas que empiecen con https://' : 'Enter valid URLs starting with https://');
      return;
    }

    const cleanUrl = lines.join('\n');
    setErrorMsg(null);

    const saved = saveLocalSubmission({
      userId: 'current_user',
      studentName: 'Estudiante UXIO',
      studentEmail: 'alumno@uxio.agency',
      courseSlug,
      lessonId,
      lessonTitle: challenge.title,
      moduleWeekTag: 'SEMANA 0',
      challengePrompt: challenge.whatToDo,
      challengeDeliverable: challenge.whatToDeliver,
      challengeCriteria: challenge.evaluationCriteria || [],
      submissionUrl: cleanUrl,
      submissionType: 'link',
      status: 'submitted',
      feedbackText: null,
    });

    setSubmission({
      id: saved.id,
      userId: saved.userId,
      courseId: courseSlug,
      lessonId: saved.lessonId,
      submissionUrl: saved.submissionUrl,
      submissionType: saved.submissionType,
      status: saved.status,
      feedbackText: null,
      approvedCriteria: [],
      submittedAt: saved.submittedAt,
      updatedAt: saved.updatedAt,
    });
    setIsEditing(false);

    startTransition(async () => {
      const res = await upsertLessonSubmissionAction({
        courseSlug,
        lessonId,
        submissionUrl: cleanUrl,
        submissionType: 'link',
        lang,
      });

      if (!res.success) {
        setErrorMsg(res.error || 'Error al guardar entrega');
      }
    });
  };

  const status = submission?.status;
  const isApproved = status === 'approved';
  const isNeedsRevision = status === 'needs_revision';
  const isSubmitted = status === 'submitted' || status === 'pending_review';

  const approvedCriteria = submission?.approvedCriteria || [];
  const criteriaCount = challenge.evaluationCriteria?.length || 1;
  const approvedCount = approvedCriteria.length;
  const score5 =
    status === 'approved'
      ? approvedCount > 0
        ? ((approvedCount / (criteriaCount || 1)) * 5.0).toFixed(1)
        : '5.0'
      : status === 'needs_revision'
      ? ((approvedCount / (criteriaCount || 1)) * 5.0).toFixed(1)
      : null;

  return (
    <div id="challenge-stage" className="scroll-mt-24">
      <AuroraSpotlightCard
        primaryColor={isApproved ? '#10B981' : isNeedsRevision ? '#FF7F07' : '#FE385B'}
        spotlightRadius={300}
        spotlightOpacity={0.08}
        className="rounded-3xl shadow-soft backdrop-blur-2xl bg-white/80 dark:bg-[#121214]/80 border border-black/[0.08] dark:border-white/[0.08]"
      >
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
            <div className="flex items-center gap-2.5">
              <Award size={20} className="text-[#FE385B]" />
              <div>
                <span className="font-mono text-[10px] text-[#FE385B] uppercase tracking-wider font-bold">
                  // {isEs ? 'RETO PRÁCTICO & EVALUACIÓN' : 'PRACTICAL CHALLENGE'}
                </span>
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#111111] dark:text-white">
                  {challenge.title}
                </h3>
              </div>
            </div>

            {submission && (
              <div className="flex items-center gap-1.5 self-start sm:self-auto">
                {isApproved && (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 font-mono text-xs font-bold">
                    <CheckCircle2 size={13} />
                    <span>{isEs ? 'Reto Aprobado ✓' : 'Challenge Passed ✓'}</span>
                  </span>
                )}
                {isNeedsRevision && (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF7F07]/15 text-[#FF7F07] border border-[#FF7F07]/30 font-mono text-xs font-bold">
                    <AlertCircle size={13} />
                    <span>{isEs ? 'Requiere Ajustes' : 'Needs Revision'}</span>
                  </span>
                )}
                {isSubmitted && (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FE385B]/10 text-[#FE385B] border border-[#FE385B]/25 font-mono text-xs font-bold">
                    <Clock size={13} />
                    <span>{isEs ? 'En Revisión Docente' : 'In Teacher Review'}</span>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Row 1: What to do & Deliverables */}
          <ChallengeCriteriaCards challenge={challenge} isEs={isEs} />

          {/* Row 2: Card para Ficha de Diagnóstico (Si es clase 0.1) */}
          {isDiagnosisLesson && (
            <BrandDiagnosisCard
              submission={submission}
              score5={score5}
              courseSlug={courseSlug}
              lang={lang}
              onOpenModal={() => setIsDiagnosisModalOpen(true)}
            />
          )}

          {/* Row 3: Entrega de Enlaces / Archivos del Reto */}
          <ChallengeSubmissionBlock
            submission={submission}
            evaluationCriteria={challenge.evaluationCriteria}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            urlInput={urlInput}
            setUrlInput={setUrlInput}
            onSubmit={handleSubmit}
            isPending={isPending}
            errorMsg={errorMsg}
            whatsappUrl={whatsappUrl}
            lang={lang}
          />
        </div>
      </AuroraSpotlightCard>

      {isDiagnosisLesson && (
        <BrandDiagnosisModal
          isOpen={isDiagnosisModalOpen}
          onClose={() => setIsDiagnosisModalOpen(false)}
          courseSlug={courseSlug}
          lessonId={lessonId}
          lang={lang}
          onSubmitted={() => {
            const stored = getStoredSubmissions();
            const match = stored.find(s => s.courseSlug === courseSlug && s.lessonId === lessonId);
            if (match) {
              setSubmission({
                id: match.id,
                userId: match.userId,
                courseId: courseSlug,
                lessonId: match.lessonId,
                submissionUrl: match.submissionUrl,
                submissionType: match.submissionType,
                status: match.status,
                feedbackText: match.feedbackText,
                approvedCriteria: match.approvedCriteria,
                reviewedAt: match.reviewedAt,
                submittedAt: match.submittedAt,
                updatedAt: match.updatedAt,
              });
            }
          }}
        />
      )}
    </div>
  );
}
