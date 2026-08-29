'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Layers,
  HelpCircle,
  FolderDown,
  ExternalLink,
  CheckCircle2,
  Lock,
  Unlock,
  Sparkles,
  FileSpreadsheet,
  FileText,
  Terminal,
  Video,
  Radio,
} from 'lucide-react';
import { LessonQuiz, LessonResource, ResourceType } from '@/data/academy/types';
import { Locale } from '@/types';
import {
  AcademyLiveLinks,
  getStoredLiveLinks,
  DEFAULT_ACADEMY_LIVE_LINKS,
} from '@/lib/academy/live-links-store';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';
import LessonQuizModal from './LessonQuizModal';
import LessonLiveSessionRow from './LessonLiveSessionRow';

interface LessonToolkitHubProps {
  presentationSlug?: string;
  quiz?: LessonQuiz;
  resources?: LessonResource[];
  isQuizPassed: boolean;
  isLessonCompleted: boolean;
  onQuizPassed: () => void;
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
  lang: Locale;
}

function getResourceMeta(type: ResourceType, isEs: boolean) {
  switch (type) {
    case 'template':
      return {
        icon: FileSpreadsheet,
        badge: isEs ? 'Plantilla' : 'Template',
        cta: isEs ? 'Abrir Plantilla' : 'Open Template',
      };
    case 'pdf':
      return {
        icon: FileText,
        badge: 'PDF',
        cta: isEs ? 'Descargar PDF' : 'Download PDF',
      };
    case 'prompt_pack':
      return {
        icon: Terminal,
        badge: isEs ? 'Prompts IA' : 'AI Prompts',
        cta: isEs ? 'Ver Prompts' : 'View Prompts',
      };
    case 'link':
    default:
      return {
        icon: ExternalLink,
        badge: isEs ? 'Enlace' : 'Link',
        cta: isEs ? 'Abrir Enlace' : 'Open Link',
      };
  }
}

export default function LessonToolkitHub({
  presentationSlug,
  quiz,
  resources = [],
  isQuizPassed,
  isLessonCompleted,
  onQuizPassed,
  courseSlug,
  moduleSlug,
  lessonSlug,
  lang,
}: LessonToolkitHubProps) {
  const isEs = lang === 'es';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liveLinks, setLiveLinks] = useState<AcademyLiveLinks>(DEFAULT_ACADEMY_LIVE_LINKS);

  React.useEffect(() => {
    setLiveLinks(getStoredLiveLinks());

    const handleUpdate = () => setLiveLinks(getStoredLiveLinks());
    window.addEventListener('uxio-live-links-updated', handleUpdate);
    return () => window.removeEventListener('uxio-live-links-updated', handleUpdate);
  }, []);

  const isUnlocked = isLessonCompleted || isQuizPassed;

  return (
    <>
      <AuroraSpotlightCard
        primaryColor="#FE385B"
        spotlightRadius={280}
        spotlightOpacity={0.08}
        className="rounded-3xl shadow-soft"
      >
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
            <div className="flex items-center gap-2.5">
              <FolderDown size={18} className="text-[#FE385B]" />
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
                  {isEs ? 'Materiales & Recursos' : 'Materials & Resources'}
                </h3>
                <p className="text-xs text-[#8E8E93] font-sans">
                  {isEs
                    ? 'Diapositivas, evaluación rápida y plantillas de la lección.'
                    : 'Slides, quick checkpoint, and lesson templates.'}
                </p>
              </div>
            </div>

            <span
              className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-md border flex items-center gap-1.5 shrink-0 self-start sm:self-auto ${
                isUnlocked
                  ? 'bg-[#10B981]/10 border-[#10B981]/25 text-[#10B981]'
                  : 'bg-[#FF7F07]/10 border-[#FF7F07]/25 text-[#FF7F07]'
              }`}
            >
              {isUnlocked ? <Unlock size={11} /> : <Lock size={11} />}
              <span>{isUnlocked ? (isEs ? 'Desbloqueados ✓' : 'Unlocked ✓') : (isEs ? 'Completa el test para desbloquear' : 'Complete quiz to unlock')}</span>
            </span>
          </div>

          {/* Row 1: Diapositivas & Evaluación Rápida */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Diapositivas */}
            <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
                    {presentationSlug ? (isEs ? 'Diapositivas' : 'Slides') : (isEs ? 'En Preparación' : 'Pending')}
                  </span>
                  <Layers size={15} className="text-[#FE385B]" />
                </div>
                <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                  {isEs ? 'Diapositivas 16:9' : '16:9 Slide Deck'}
                </h4>
                <p className="text-[11px] text-[#8E8E93] font-sans">
                  {isEs ? 'Repasa los conceptos clave y fórmulas en pantalla.' : 'Review key concepts on screen.'}
                </p>
              </div>

              {presentationSlug ? (
                <Link
                  href={`/${lang}/academy/classroom/${courseSlug}/${moduleSlug}/${lessonSlug}/slides`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white text-xs font-mono font-bold transition-all shadow-sm"
                >
                  <Layers size={13} />
                  <span>{isEs ? 'Abrir Diapositivas' : 'Open Slides'}</span>
                </Link>
              ) : (
                <div className="py-2.5 px-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] text-xs font-mono text-[#8E8E93] text-center opacity-50">
                  {isEs ? 'Sin Diapositivas' : 'No Slides'}
                </div>
              )}
            </div>

            {/* Evaluación Rápida */}
            {quiz && (
              <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${
                        isQuizPassed
                          ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30'
                          : 'bg-[#FF7F07]/10 text-[#FF7F07] border-[#FF7F07]/20'
                      }`}
                    >
                      {isQuizPassed ? (isEs ? 'Aprobado ✓' : 'Passed ✓') : `${quiz.questions.length} ${isEs ? 'preguntas' : 'questions'}`}
                    </span>
                    <HelpCircle size={15} className={isQuizPassed ? 'text-[#10B981]' : 'text-[#FF7F07]'} />
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                    {isEs ? 'Evaluación Rápida' : 'Quick Checkpoint'}
                  </h4>
                  <p className="text-[11px] text-[#8E8E93] font-sans">
                    {isEs ? 'Valida tu aprendizaje y desbloquea los archivos.' : 'Validate your takeaways to unlock files.'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-mono font-bold transition-all shadow-sm ${
                    isQuizPassed
                      ? 'bg-[#10B981] hover:bg-[#10B981]/90 text-white'
                      : 'bg-[#111111] dark:bg-white text-white dark:text-black hover:bg-[#FE385B] dark:hover:bg-[#FE385B] dark:hover:text-white'
                  }`}
                >
                  <Sparkles size={13} />
                  <span>{isQuizPassed ? (isEs ? 'Repetir Evaluación' : 'Retake Quiz') : (isEs ? 'Hacer Evaluación' : 'Take Quiz')}</span>
                </button>
              </div>
            )}
          </div>

          {/* Row 2: Sesión Semanal & Grabación en Vivo */}
          <LessonLiveSessionRow liveLinks={liveLinks} lang={lang} />

          {/* Row 3: Descargables y Plantillas */}
          {resources.length > 0 && (
            <div className="pt-2 space-y-3">
              <span className="font-mono text-xs text-[#8E8E93] block">
                // {isEs ? 'PLANTILLAS Y DESCARGABLES' : 'TEMPLATES & DOWNLOADS'} ({resources.length})
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {resources.map(res => {
                  const meta = getResourceMeta(res.type, isEs);
                  const IconComp = meta.icon;

                  return (
                    <div
                      key={res.id}
                      className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
                        isUnlocked
                          ? 'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.06]'
                          : 'bg-black/[0.01] dark:bg-white/[0.01] border-black/[0.04] dark:border-white/[0.04] opacity-70'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold text-[#8E8E93] bg-black/[0.04] dark:bg-white/[0.06] px-2 py-0.5 rounded border border-black/[0.06] dark:border-white/[0.08]">
                            {meta.badge}
                          </span>
                          <IconComp size={14} className="text-[#8E8E93]" />
                        </div>
                        <h5 className="font-display font-semibold text-xs text-[#111111] dark:text-white leading-snug line-clamp-2">
                          {res.title}
                        </h5>
                      </div>

                      <div>
                        {isUnlocked ? (
                          <a
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white dark:bg-black/[0.4] border border-black/[0.08] dark:border-white/[0.08] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-xs font-mono text-[#111111] dark:text-white transition-colors"
                          >
                            <span>{meta.cta}</span>
                            <ExternalLink size={11} className="text-[#8E8E93]" />
                          </a>
                        ) : (
                          <div className="w-full inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] text-xs font-mono text-[#8E8E93] cursor-not-allowed">
                            <Lock size={11} className="text-[#FF7F07]" />
                            <span>{isEs ? 'Bloqueado' : 'Locked'}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </AuroraSpotlightCard>

      {/* Interactive Modal */}
      {quiz && (
        <LessonQuizModal
          quiz={quiz}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onQuizPassed={onQuizPassed}
          lang={lang}
        />
      )}
    </>
  );
}
