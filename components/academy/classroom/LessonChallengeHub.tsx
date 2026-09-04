'use client';

import React, { useState, useTransition, useEffect } from 'react';
import { Award, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { LessonChallenge as LessonChallengeType } from '@/data/academy/types';
import { Locale } from '@/types';
import { LessonSubmission } from '@/lib/supabase/academy-submissions';
import { getStoredLiveLinks } from '@/lib/academy/live-links-store';
import { getStoredSubmissions, saveLocalSubmission } from '@/lib/academy/submissions-store';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';
import ChallengeSubmissionBlock from './ChallengeSubmissionBlock';
import ChallengeCriteriaCards from './ChallengeCriteriaCards';
import BrandDiagnosisCard from './resources/BrandDiagnosisCard';
import BrandDiagnosisModal from './resources/BrandDiagnosisModal';
import CommercialVsNativeCard from './resources/CommercialVsNativeCard';
import CommercialVsNativeModal from './resources/CommercialVsNativeModal';
import ObjectionMiningCard from './resources/ObjectionMiningCard';
import ObjectionMiningModal from './resources/ObjectionMiningModal';
import ContentMatrixCard from './resources/ContentMatrixCard';
import ContentMatrixModal from './resources/ContentMatrixModal';

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
  const [isCommercialModalOpen, setIsCommercialModalOpen] = useState(false);
  const [isObjectionModalOpen, setIsObjectionModalOpen] = useState(false);
  const [isMatrixModalOpen, setIsMatrixModalOpen] = useState(false);

  const isDiagnosisLesson = lessonId === 'm00-01';
  const isCommercialLesson = lessonId === 'm01-01';
  const isObjectionLesson = lessonId === 'm01-02';
  const isMatrixLesson = lessonId === 'm01-03';
  const hasInteractiveForm =
    isDiagnosisLesson || isCommercialLesson || isObjectionLesson || isMatrixLesson;

  const refreshSubmission = () => {
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
  };

  useEffect(() => {
    const liveLinks = getStoredLiveLinks();
    if (liveLinks.whatsappGroupUrl) {
      setWhatsappUrl(liveLinks.whatsappGroupUrl);
    }
    refreshSubmission();

    const handleUpdate = () => refreshSubmission();
    window.addEventListener('uxio-submissions-updated', handleUpdate);
    return () => window.removeEventListener('uxio-submissions-updated', handleUpdate);
  }, [courseSlug, lessonId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanText = urlInput.trim();
    if (!cleanText) {
      setErrorMsg(isEs ? 'Ingresa el contenido de tu entrega o enlace válido.' : 'Enter your submission text or URL.');
      return;
    }

    setErrorMsg(null);
    const saved = saveLocalSubmission({
      userId: 'current_user',
      studentName: 'Estudiante UXIO',
      studentEmail: 'alumno@uxio.agency',
      courseSlug,
      lessonId,
      lessonTitle: challenge.title,
      moduleWeekTag: lessonId.startsWith('m01') ? 'SEMANA 1' : 'SEMANA 0',
      challengePrompt: challenge.whatToDo,
      challengeDeliverable: challenge.whatToDeliver,
      challengeCriteria: challenge.evaluationCriteria || [],
      submissionUrl: cleanText,
      submissionType: cleanText.startsWith('http') ? 'link' : 'text',
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
  };

  const status = submission?.status;
  const isApproved = status === 'approved';
  const isNeedsRevision = status === 'needs_revision';
  const isSubmitted = status === 'submitted' || status === 'pending_review';

  const approvedCriteria = submission?.approvedCriteria || [];
  const criteriaCount = challenge.evaluationCriteria?.length || 0;
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
    <div className="space-y-4">
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

          {/* Row 2: Interactive In-App Forms */}
          {isDiagnosisLesson && (
            <BrandDiagnosisCard
              submission={submission}
              score5={score5}
              courseSlug={courseSlug}
              lang={lang}
              onOpenModal={() => setIsDiagnosisModalOpen(true)}
            />
          )}

          {isCommercialLesson && (
            <CommercialVsNativeCard
              submission={submission}
              score5={score5}
              courseSlug={courseSlug}
              lang={lang}
              onOpenModal={() => setIsCommercialModalOpen(true)}
            />
          )}

          {isObjectionLesson && (
            <ObjectionMiningCard
              submission={submission}
              score5={score5}
              courseSlug={courseSlug}
              lang={lang}
              onOpenModal={() => setIsObjectionModalOpen(true)}
            />
          )}

          {isMatrixLesson && (
            <ContentMatrixCard
              submission={submission}
              score5={score5}
              courseSlug={courseSlug}
              lang={lang}
              onOpenModal={() => setIsMatrixModalOpen(true)}
            />
          )}

          {/* Row 3: Link/Text Submission Block (For non-form lessons or optional links) */}
          {!hasInteractiveForm && (
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
          )}
        </div>
      </AuroraSpotlightCard>

      {/* Modales Interactivos de Entrega de Retos */}
      {isDiagnosisLesson && (
        <BrandDiagnosisModal
          isOpen={isDiagnosisModalOpen}
          onClose={() => setIsDiagnosisModalOpen(false)}
          courseSlug={courseSlug}
          lessonId={lessonId}
          lang={lang}
          onSubmitted={refreshSubmission}
        />
      )}

      {isCommercialLesson && (
        <CommercialVsNativeModal
          isOpen={isCommercialModalOpen}
          onClose={() => setIsCommercialModalOpen(false)}
          courseSlug={courseSlug}
          lessonId={lessonId}
          lang={lang}
          onSubmitted={refreshSubmission}
        />
      )}

      {isObjectionLesson && (
        <ObjectionMiningModal
          isOpen={isObjectionModalOpen}
          onClose={() => setIsObjectionModalOpen(false)}
          courseSlug={courseSlug}
          lessonId={lessonId}
          lang={lang}
          onSubmitted={refreshSubmission}
        />
      )}

      {isMatrixLesson && (
        <ContentMatrixModal
          isOpen={isMatrixModalOpen}
          onClose={() => setIsMatrixModalOpen(false)}
          courseSlug={courseSlug}
          lessonId={lessonId}
          lang={lang}
          onSubmitted={refreshSubmission}
        />
      )}
    </div>
  );
}
