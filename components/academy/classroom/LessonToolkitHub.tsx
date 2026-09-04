'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, HelpCircle, FolderDown, Unlock, Sparkles } from 'lucide-react';
import { LessonQuiz, LessonResource, Microclass } from '@/data/academy/types';
import { Locale } from '@/types';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';
import LessonQuizModal from './LessonQuizModal';
import QuickstartGuideModal from './resources/QuickstartGuideModal';
import SetupChecklistModal from './resources/SetupChecklistModal';
import GearGuideModal from './resources/GearGuideModal';
import CommercialVsNativeModal from './resources/CommercialVsNativeModal';
import ObjectionMiningModal from './resources/ObjectionMiningModal';
import ContentMatrixModal from './resources/ContentMatrixModal';
import HookSwipeFileModal from './resources/HookSwipeFileModal';
import BrollAnglesGuideModal from './resources/BrollAnglesGuideModal';
import CameraCalibrationModal from './resources/CameraCalibrationModal';
import Broll30ChecklistModal from './resources/Broll30ChecklistModal';
import ScriptFastDraftModal from './resources/ScriptFastDraftModal';
import { HookMasterSwipeModal } from './resources/HookMasterSwipeModal';
import { ScriptFrameworksModal } from './resources/ScriptFrameworksModal';
import { MultiformatPackModal } from './resources/MultiformatPackModal';
import { CapCutShortcutsModal } from './resources/CapCutShortcutsModal';
import { SoundDesignVaultModal } from './resources/SoundDesignVaultModal';
import { AiCreatorPromptPackModal } from './resources/AiCreatorPromptPackModal';
import LessonResourceCard from './LessonResourceCard';

interface LessonToolkitHubProps {
  presentationSlug?: string;
  microclasses?: Microclass[];
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

export default function LessonToolkitHub({
  presentationSlug,
  microclasses = [],
  quiz,
  resources = [],
  isQuizPassed,
  onQuizPassed,
  courseSlug,
  lang,
}: LessonToolkitHubProps) {
  const isEs = lang === 'es';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuickstartOpen, setIsQuickstartOpen] = useState(false);
  const [isSetupChecklistOpen, setIsSetupChecklistOpen] = useState(false);
  const [isGearGuideOpen, setIsGearGuideOpen] = useState(false);
  const [isCommercialOpen, setIsCommercialOpen] = useState(false);
  const [isObjectionOpen, setIsObjectionOpen] = useState(false);
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);
  const [isHookSwipeOpen, setIsHookSwipeOpen] = useState(false);
  const [isBrollAnglesOpen, setIsBrollAnglesOpen] = useState(false);
  const [isCameraCalibrationOpen, setIsCameraCalibrationOpen] = useState(false);
  const [isBroll30Open, setIsBroll30Open] = useState(false);
  const [isScriptDraftOpen, setIsScriptDraftOpen] = useState(false);
  const [isHookMasterOpen, setIsHookMasterOpen] = useState(false);
  const [isScriptFrameworksOpen, setIsScriptFrameworksOpen] = useState(false);
  const [isMultiformatPackOpen, setIsMultiformatPackOpen] = useState(false);
  const [isCapCutOpen, setIsCapCutOpen] = useState(false);
  const [isSoundDesignOpen, setIsSoundDesignOpen] = useState(false);
  const [isAiPromptOpen, setIsAiPromptOpen] = useState(false);

  // DEV MODE: Unlocked for development review
  const isUnlocked = true;
  const hasMicroclassDecks = microclasses.length > 0;

  const handleResourceClick = (url: string) => {
    if (url === '#quickstart-guide') return setIsQuickstartOpen(true);
    if (url === '#setup-checklist') return setIsSetupChecklistOpen(true);
    if (url === '#gear-guide') return setIsGearGuideOpen(true);
    if (url === '#commercial-vs-native') return setIsCommercialOpen(true);
    if (url === '#objection-mining') return setIsObjectionOpen(true);
    if (url === '#content-matrix') return setIsMatrixOpen(true);
    if (url === '#hook-formulas') return setIsHookSwipeOpen(true);
    if (url === '#broll-angles-guide') return setIsBrollAnglesOpen(true);
    if (url === '#camera-calibration') return setIsCameraCalibrationOpen(true);
    if (url === '#broll-30-checklist') return setIsBroll30Open(true);
    if (url === '#script-4-blocks') return setIsScriptDraftOpen(true);
    if (url === '#hook-master-swipefile') return setIsHookMasterOpen(true);
    if (url === '#script-frameworks-vault') return setIsScriptFrameworksOpen(true);
    if (url === '#multiformat-pack-template') return setIsMultiformatPackOpen(true);
    if (url === '#capcut-shortcuts-cheat-sheet') return setIsCapCutOpen(true);
    if (url === '#sound-design-vault') return setIsSoundDesignOpen(true);
    if (url === '#ai-creator-prompt-pack') return setIsAiPromptOpen(true);

    if (url.startsWith('#')) {
      const el = document.getElementById(url.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AuroraSpotlightCard
        primaryColor="#10B981"
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
                    ? 'Diapositivas interactivas, evaluación formativa y guías descargables.'
                    : 'Interactive slides, quiz checkpoint, and downloadable guides.'}
                </p>
              </div>
            </div>

            <span className="font-mono text-[10px] font-bold px-3 py-1.5 rounded-xl border flex items-center gap-1.5 shrink-0 self-start sm:self-auto backdrop-blur-md bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Unlock size={11} />
              <span>{isEs ? 'Desbloqueados ✓' : 'Unlocked ✓'}</span>
            </span>
          </div>

          {/* 1. Evaluation Card */}
          {quiz && (
            <div
              className={`p-5 sm:p-6 rounded-2xl border transition-all duration-150 flex flex-col sm:flex-row sm:items-center justify-between gap-4 backdrop-blur-xl ${
                isQuizPassed
                  ? 'bg-[#10B981]/[0.06] dark:bg-[#10B981]/[0.08] border-[#10B981]/30 shadow-[0_4px_20px_-5px_rgba(16,185,129,0.15)]'
                  : 'bg-[#FF7F07]/[0.05] dark:bg-[#FF7F07]/[0.08] border-[#FF7F07]/30 shadow-sm'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-lg border backdrop-blur-md ${
                      isQuizPassed
                        ? 'bg-[#10B981]/20 text-[#047857] dark:text-[#10B981] border-[#10B981]/30'
                        : 'bg-[#FF7F07]/20 text-[#FF7F07] border-[#FF7F07]/30'
                    }`}
                  >
                    {isQuizPassed
                      ? (isEs ? 'Evaluación Aprobada ✓' : 'Quiz Passed ✓')
                      : (isEs ? `Mini-Evaluación (${quiz.questions.length} Preguntas)` : `Mini-Quiz (${quiz.questions.length} Questions)`)}
                  </span>
                  <HelpCircle
                    size={14}
                    className={isQuizPassed ? 'text-[#059669] dark:text-[#10B981]' : 'text-[#FF7F07]'}
                  />
                </div>
                <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                  {quiz.title}
                </h4>
                <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans">
                  {isEs
                    ? 'Valida tus conceptos aprendidos para desbloquear las guías y plantillas descargables.'
                    : 'Validate your takeaways to unlock the downloadable guides and templates.'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-xs transition-all duration-150 shrink-0 backdrop-blur-xl active:scale-[0.97] hover:scale-[1.02] ${
                  isQuizPassed
                    ? 'bg-[#10B981]/20 hover:bg-[#10B981] text-[#047857] dark:text-[#10B981] hover:text-white border border-[#10B981]/40 hover:border-[#10B981] shadow-[0_4px_15px_rgba(16,185,129,0.15)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.3)]'
                    : 'bg-[#FE385B] hover:bg-[#FE385B]/90 text-white shadow-[0_4px_15px_rgba(254,56,91,0.3)] hover:shadow-[0_6px_20px_rgba(254,56,91,0.45)]'
                }`}
              >
                <Sparkles size={13} className="transition-transform duration-150 group-hover:rotate-12" />
                <span>
                  {isQuizPassed
                    ? isEs ? 'Repetir Evaluación' : 'Retake Quiz'
                    : isEs ? 'Hacer Evaluación ➔' : 'Take Quiz ➔'}
                </span>
              </button>
            </div>
          )}

          {/* 2. Grid de Cards: Diapositivas + Plantillas */}
          <div className="space-y-3 pt-2">
            <span className="font-mono text-xs text-[#8E8E93] block">
              // {isEs ? 'DIAPOSITIVAS & PLANTILLAS DESCARGABLES' : 'SLIDE DECKS & DOWNLOADABLE TEMPLATES'}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* Individual Microclass Slide Decks */}
              {presentationSlug && hasMicroclassDecks && microclasses.map((mc, idx) => {
                const targetSlug = mc.presentationSlug || (idx === 0 ? presentationSlug : `${presentationSlug}-02`);
                return (
                  <div
                    key={mc.id}
                    className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
                          {isEs ? `Parte ${idx + 1}` : `Part ${idx + 1}`}
                        </span>
                        <Layers size={14} className="text-[#FE385B]" />
                      </div>
                      <h5 className="font-display font-bold text-xs text-[#111111] dark:text-white leading-snug line-clamp-2 pt-0.5">
                        {mc.title}
                      </h5>
                      <p className="text-[11px] text-[#8E8E93] font-sans line-clamp-2">
                        {isEs ? 'Diapositivas y conceptos clave.' : 'Key formulas and visuals.'}
                      </p>
                    </div>

                    <Link
                      href={`/${lang}/academy/classroom/${courseSlug}/presentation/${targetSlug}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs transition-all shadow-md shadow-[#FE385B]/20 active:scale-95 hover:scale-[1.02]"
                    >
                      <Sparkles size={12} />
                      <span>{isEs ? 'Ver Presentación ➔' : 'View Presentation ➔'}</span>
                    </Link>
                  </div>
                );
              })}

              {/* Single Deck (Live Sessions) */}
              {presentationSlug && !hasMicroclassDecks && (
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
                        {isEs ? 'Diapositivas' : 'Slides'}
                      </span>
                      <Layers size={14} className="text-[#FE385B]" />
                    </div>
                    <h5 className="font-display font-bold text-xs text-[#111111] dark:text-white leading-snug pt-0.5">
                      {isEs ? 'Presentación de la Lección' : 'Lesson Slide Deck'}
                    </h5>
                    <p className="text-[11px] text-[#8E8E93] font-sans">
                      {isEs ? 'Diapositivas y conceptos clave.' : 'Key concepts and visual slides.'}
                    </p>
                  </div>

                  <Link
                    href={`/${lang}/academy/classroom/${courseSlug}/presentation/${presentationSlug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs transition-all shadow-md shadow-[#FE385B]/20 active:scale-95 hover:scale-[1.02]"
                  >
                    <Layers size={13} />
                    <span>{isEs ? 'Ver Presentación ➔' : 'View Presentation ➔'}</span>
                  </Link>
                </div>
              )}

              {/* Resource Cards */}
              {resources.map((res, i) => (
                <LessonResourceCard
                  key={res.id || i}
                  resource={res}
                  isUnlocked={isUnlocked}
                  isEs={isEs}
                  onActionClick={handleResourceClick}
                />
              ))}
            </div>
          </div>
        </div>
      </AuroraSpotlightCard>

      {/* Modales Formativos y de Recursos */}
      {quiz && (
        <LessonQuizModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          quiz={quiz}
          onQuizPassed={onQuizPassed}
          lang={lang}
        />
      )}

      {/* Week 0 Modals */}
      <QuickstartGuideModal isOpen={isQuickstartOpen} onClose={() => setIsQuickstartOpen(false)} lang={lang} />
      <SetupChecklistModal isOpen={isSetupChecklistOpen} onClose={() => setIsSetupChecklistOpen(false)} lang={lang} />
      <GearGuideModal isOpen={isGearGuideOpen} onClose={() => setIsGearGuideOpen(false)} lang={lang} />

      {/* Week 1 Modals */}
      <CommercialVsNativeModal isOpen={isCommercialOpen} onClose={() => setIsCommercialOpen(false)} lang={lang} />
      <ObjectionMiningModal isOpen={isObjectionOpen} onClose={() => setIsObjectionOpen(false)} lang={lang} />
      <ContentMatrixModal isOpen={isMatrixOpen} onClose={() => setIsMatrixOpen(false)} lang={lang} />
      <HookSwipeFileModal isOpen={isHookSwipeOpen} onClose={() => setIsHookSwipeOpen(false)} lang={lang} />
      <BrollAnglesGuideModal isOpen={isBrollAnglesOpen} onClose={() => setIsBrollAnglesOpen(false)} lang={lang} />

      {/* Week 2 Modals */}
      <CameraCalibrationModal isOpen={isCameraCalibrationOpen} onClose={() => setIsCameraCalibrationOpen(false)} lang={lang} />
      <Broll30ChecklistModal isOpen={isBroll30Open} onClose={() => setIsBroll30Open(false)} lang={lang} />
      <ScriptFastDraftModal isOpen={isScriptDraftOpen} onClose={() => setIsScriptDraftOpen(false)} lang={lang} />

      {/* Week 3 Modals */}
      <HookMasterSwipeModal isOpen={isHookMasterOpen} onClose={() => setIsHookMasterOpen(false)} />
      <ScriptFrameworksModal isOpen={isScriptFrameworksOpen} onClose={() => setIsScriptFrameworksOpen(false)} />
      <MultiformatPackModal isOpen={isMultiformatPackOpen} onClose={() => setIsMultiformatPackOpen(false)} />

      {/* Week 4 Modals */}
      <CapCutShortcutsModal isOpen={isCapCutOpen} onClose={() => setIsCapCutOpen(false)} />
      <SoundDesignVaultModal isOpen={isSoundDesignOpen} onClose={() => setIsSoundDesignOpen(false)} />
      <AiCreatorPromptPackModal isOpen={isAiPromptOpen} onClose={() => setIsAiPromptOpen(false)} />
    </>
  );
}
