'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Layers,
  HelpCircle,
  FolderDown,
  ExternalLink,
  Lock,
  Unlock,
  Sparkles,
  FileSpreadsheet,
  FileText,
  Terminal,
} from 'lucide-react';
import { LessonQuiz, LessonResource, ResourceType } from '@/data/academy/types';
import { Locale } from '@/types';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';
import LessonQuizModal from './LessonQuizModal';

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
        badge: isEs ? 'Plantilla Editable' : 'Editable Template',
        cta: isEs ? 'Abrir Plantilla' : 'Open Template',
      };
    case 'pdf':
      return {
        icon: FileText,
        badge: 'PDF',
        cta: isEs ? 'Descargar / Ver PDF' : 'Download / View PDF',
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
        badge: isEs ? 'Enlace Web' : 'Web Link',
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

  const isUnlocked = quiz ? isQuizPassed : true;

  return (
    <>
      <AuroraSpotlightCard
        primaryColor={isUnlocked ? '#10B981' : '#FE385B'}
        spotlightRadius={300}
        spotlightOpacity={0.08}
        className="rounded-3xl shadow-soft backdrop-blur-2xl bg-white/80 dark:bg-[#121214]/80 border border-black/[0.08] dark:border-white/[0.08]"
      >
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
            <div className="flex items-center gap-2.5">
              <FolderDown size={18} className="text-[#FE385B]" />
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
                  {isEs ? 'Materiales & Recursos de la Lección' : 'Lesson Materials & Resources'}
                </h3>
                <p className="text-xs text-[#8E8E93] font-sans">
                  {isEs
                    ? 'Diapositivas interactivas, evaluación formativa y plantillas editables.'
                    : 'Interactive slides, quiz checkpoint, and workbooks.'}
                </p>
              </div>
            </div>

            <span
              className={`font-mono text-[10px] font-bold px-3 py-1.5 rounded-xl border flex items-center gap-1.5 shrink-0 self-start sm:self-auto backdrop-blur-md transition-all duration-150 ${
                isUnlocked
                  ? 'bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                  : 'bg-black/[0.03] dark:bg-white/[0.04] border-black/[0.08] dark:border-white/[0.08] text-[#8E8E93]'
              }`}
            >
              {isUnlocked ? <Unlock size={12} /> : <Lock size={12} />}
              <span>
                {isUnlocked
                  ? isEs
                    ? 'Plantillas Desbloqueadas ✓'
                    : 'Templates Unlocked ✓'
                  : isEs
                    ? 'Completa el test para desbloquear'
                    : 'Complete quiz to unlock'}
              </span>
            </span>
          </div>

          {/* 1. Mini-Evaluación Formativa (Glassmorphism Puro Ultraligero 120fps) */}
          {quiz && (
            <div
              className={`p-5 sm:p-6 rounded-2xl border transition-all duration-150 flex flex-col sm:flex-row sm:items-center justify-between gap-4 backdrop-blur-xl ${
                isQuizPassed
                  ? 'bg-[#10B981]/[0.06] dark:bg-[#10B981]/[0.08] border-[#10B981]/30 shadow-[0_4px_20px_-5px_rgba(16,185,129,0.15)]'
                  : 'bg-[#FF7F07]/[0.04] dark:bg-[#FF7F07]/[0.06] border-[#FF7F07]/25 dark:border-[#FF7F07]/30 shadow-sm'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-lg border backdrop-blur-md ${
                      isQuizPassed
                        ? 'bg-[#10B981]/20 text-[#047857] dark:text-[#10B981] border-[#10B981]/30'
                        : 'bg-[#FF7F07]/15 text-[#C2410C] dark:text-[#FFA048] border-[#FF7F07]/30'
                    }`}
                  >
                    {isQuizPassed
                      ? isEs
                        ? 'Checkpoint Aprobado 100% ✓'
                        : 'Checkpoint Passed 100% ✓'
                      : `${quiz.questions.length} ${isEs ? 'preguntas rápidas' : 'quick questions'}`}
                  </span>
                  <HelpCircle
                    size={14}
                    className={
                      isQuizPassed
                        ? 'text-[#059669] dark:text-[#10B981]'
                        : 'text-[#FF7F07]'
                    }
                  />
                </div>
                <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                  {isEs ? 'Mini-Evaluación de la Lección' : 'Lesson Quiz Checkpoint'}
                </h4>
                <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans">
                  {isEs
                    ? 'Valida tu comprensión de la clase para desbloquear las plantillas editables.'
                    : 'Verify your understanding of this capsule to unlock editable workbooks.'}
                </p>
              </div>

              {/* Botón 1: Glassmorphism Verde con Hover Ultra-Fluido 120fps */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs transition-all duration-150 shrink-0 backdrop-blur-xl active:scale-[0.97] hover:scale-[1.02] ${
                  isQuizPassed
                    ? 'bg-[#10B981]/20 hover:bg-[#10B981] text-[#047857] dark:text-[#10B981] hover:text-white border border-[#10B981]/40 hover:border-[#10B981] shadow-[0_4px_15px_rgba(16,185,129,0.15)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.3)]'
                    : 'bg-[#FF7F07] hover:bg-[#FF7F07]/90 text-white shadow-[0_4px_15px_rgba(255,127,7,0.3)] hover:shadow-[0_6px_20px_rgba(255,127,7,0.45)]'
                }`}
              >
                <Sparkles size={13} className="transition-transform duration-150 group-hover:rotate-12" />
                <span>
                  {isQuizPassed
                    ? isEs
                      ? 'Repetir Evaluación'
                      : 'Retake Quiz'
                    : isEs
                      ? 'Presentar Test ➔'
                      : 'Take Quiz ➔'}
                </span>
              </button>
            </div>
          )}

          {/* 2. Diapositivas y Plantillas de Trabajo */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#8E8E93] block">
              // {isEs ? 'DIAPOSITIVAS & PLANTILLAS DE TRABAJO' : 'SLIDES & WORKBOOKS'}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* Card 1: Diapositivas */}
              {presentationSlug && (
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col justify-between space-y-3 hover:border-black/[0.12] dark:hover:border-white/[0.12] transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded uppercase font-bold">
                        {isEs ? 'Diapositivas 16:9' : 'Slides 16:9'}
                      </span>
                      <Layers size={13} className="text-[#FE385B]" />
                    </div>
                    <h5 className="font-display font-bold text-xs text-[#111111] dark:text-white pt-1">
                      {isEs ? 'Diapositivas y Material Visual' : 'Interactive Slides'}
                    </h5>
                    <p className="text-[11px] text-[#8E8E93] font-sans">
                      {isEs
                        ? 'Acceso libre a conceptos y fórmulas clave.'
                        : 'Key formulas and step-by-step visuals.'}
                    </p>
                  </div>

                  {/* Botón: Glassmorphism Coral con Hover Ultra-Fluido 120fps */}
                  <Link
                    href={`/${lang}/academy/classroom/${courseSlug}/${moduleSlug}/${lessonSlug}/slides`}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#FE385B]/15 hover:bg-[#FE385B] text-[#FE385B] hover:text-white border border-[#FE385B]/30 hover:border-[#FE385B] font-display font-bold text-xs transition-all duration-150 shadow-sm backdrop-blur-md active:scale-[0.98] hover:scale-[1.02]"
                  >
                    <span>{isEs ? 'Abrir Diapositivas (16:9)' : 'Open Slides'}</span>
                    <ExternalLink size={11} />
                  </Link>
                </div>
              )}

              {/* Cards de Recursos / Plantillas */}
              {resources.map((res, i) => {
                const meta = getResourceMeta(res.type, isEs);
                const IconComponent = meta.icon;

                return (
                  <div
                    key={res.id || i}
                    className={`p-4 rounded-2xl border flex flex-col justify-between space-y-3 transition-colors ${
                      isUnlocked
                        ? 'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.06] hover:border-black/[0.12] dark:hover:border-white/[0.12]'
                        : 'bg-black/[0.01] dark:bg-white/[0.01] border-black/[0.04] dark:border-white/[0.04] opacity-50 select-none'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#8E8E93] bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded uppercase font-bold">
                          {meta.badge}
                        </span>
                        <IconComponent size={13} className="text-[#8E8E93]" />
                      </div>
                      <h5 className="font-display font-bold text-xs text-[#111111] dark:text-white pt-1 truncate">
                        {res.title}
                      </h5>
                      {res.description && (
                        <p className="text-[11px] text-[#8E8E93] font-sans line-clamp-2">
                          {res.description}
                        </p>
                      )}
                    </div>

                    {isUnlocked ? (
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] text-xs font-mono text-[#111111] dark:text-white transition-colors border border-black/[0.06] dark:border-white/[0.06]"
                      >
                        <span>{meta.cta}</span>
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] text-xs font-mono text-[#8E8E93] cursor-not-allowed">
                        <Lock size={11} />
                        <span>{isEs ? 'Bloqueada (Aprueba Test)' : 'Locked'}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </AuroraSpotlightCard>

      {/* Quiz Modal */}
      {quiz && (
        <LessonQuizModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          quiz={quiz}
          onQuizPassed={() => {
            onQuizPassed();
            setIsModalOpen(false);
          }}
          lang={lang}
        />
      )}
    </>
  );
}
