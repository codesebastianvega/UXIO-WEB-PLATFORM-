'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { PresentationContent } from '@/data/academy/creator-lab/presentations/types';
import { Locale } from '@/types';
import SlideRenderer from './SlideRenderer';
import PresentationHeader from './PresentationHeader';
import PresentationControls from './PresentationControls';
import SlideDetailModal, { CardDetailData } from './SlideDetailModal';
import InstructorTeleprompterSidebar from './InstructorTeleprompterSidebar';
import { usePresentationKeyboard } from './hooks/usePresentationKeyboard';
import { usePresentationScaler } from './hooks/usePresentationScaler';
import { usePresentationSteps } from './hooks/usePresentationSteps';
import { usePresentationSync } from '@/lib/academy/presentation-channel';
import { useTelestrator } from './telestrator/useTelestrator';
import TelestratorCanvas from './telestrator/TelestratorCanvas';
import FluidSpotlightGlow from './components/FluidSpotlightGlow';
import PresentationFooterShortcuts from './components/PresentationFooterShortcuts';
import PresentationCoverBackground from './components/PresentationCoverBackground';
import PresentationAuroraBackground from './components/PresentationAuroraBackground';
import PresentationExportStage from './components/PresentationExportStage';
import { exportPresentationToPdf } from '@/lib/academy/export-presentation-pdf';
import { Loader2 } from 'lucide-react';
import './slide-transitions.css';

interface PresentationEngineProps {
  presentation: PresentationContent;
  lang: Locale;
  exitHref?: string;
}

export default function PresentationEngine({
  presentation,
  lang,
  exitHref,
}: PresentationEngineProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isTeleprompterOpen, setIsTeleprompterOpen] = useState(false);
  const [modalDetail, setModalDetail] = useState<CardDetailData | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isExporting, setIsExporting] = useState(false);
  const [exportMessage, setExportMessage] = useState<string | null>(null);

  const exportStageRef = useRef<HTMLDivElement>(null);
  const { scale, containerRef, stageContainerRef } = usePresentationScaler(isFullscreen, isTeleprompterOpen);
  const slides = presentation.slides;

  // Stable broadcast dispatcher refs
  const broadcastSlideRef = useRef<((index: number) => void) | null>(null);
  const broadcastStepRef = useRef<((step: number, total: number) => void) | null>(null);

  // Step-based reveal and presentation progression controller
  const stepsManager = usePresentationSteps({
    slides,
    onSlideChanged: idx => broadcastSlideRef.current?.(idx),
    onStepChanged: (st, tot) => broadcastStepRef.current?.(st, tot),
  });

  const { currentIndex, revealedStep, totalSlides, currentSlide, activeBlockColor, handlePrev, handleNext, goToSlide, goToStep } = stepsManager;

  // Telestrator state & broadcast sync
  const broadcastStrokeStartRef = useRef<any>(null);
  const broadcastStrokeUpdateRef = useRef<any>(null);
  const broadcastStrokeEndRef = useRef<any>(null);
  const broadcastClearRef = useRef<any>(null);

  const telestrator = useTelestrator({
    slideId: currentSlide.id,
    onBroadcastStrokeStart: stroke => broadcastStrokeStartRef.current?.(stroke),
    onBroadcastStrokeUpdate: (sId, pt, endPt) => broadcastStrokeUpdateRef.current?.(sId, pt, endPt),
    onBroadcastStrokeEnd: stroke => broadcastStrokeEndRef.current?.(stroke),
    onBroadcastClear: sId => broadcastClearRef.current?.(sId),
  });

  // Real-time broadcast sync with 2nd screen presenter console
  const sync = usePresentationSync({
    channelId: presentation.id,
    currentIndex,
    theme,
    currentStep: revealedStep,
    onSlideChange: idx => goToSlide(idx),
    onStepChange: st => goToStep(st),
    onThemeChange: th => setTheme(th),
    onRemoteStrokeStart: stroke => telestrator.handleRemoteStrokeStart(stroke),
    onRemoteStrokeUpdate: (sId, pt, endPt) => telestrator.handleRemoteStrokeUpdate(sId, pt, endPt),
    onRemoteStrokeEnd: stroke => telestrator.handleRemoteStrokeEnd(stroke),
    onRemoteClearDrawings: sId => telestrator.handleRemoteClear(sId),
    onRemoteOpenModal: detail => setModalDetail(detail),
    onRemoteCloseModal: () => setModalDetail(null),
    onRemoteCursorMove: pt => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ x: pt.x * rect.width, y: pt.y * rect.height });
      }
    },
  });

  broadcastSlideRef.current = sync.broadcastSlideChange;
  broadcastStepRef.current = sync.broadcastStepChange;
  broadcastStrokeStartRef.current = sync.broadcastStrokeStart;
  broadcastStrokeUpdateRef.current = sync.broadcastStrokeUpdate;
  broadcastStrokeEndRef.current = sync.broadcastStrokeEnd;
  broadcastClearRef.current = sync.broadcastClearDrawings;

  const handleToggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, [containerRef]);

  const handleToggleTheme = useCallback(() => {
    setTheme(prev => {
      const nextTheme = prev === 'light' ? 'dark' : 'light';
      sync.broadcastThemeChange(nextTheme);
      return nextTheme;
    });
  }, [sync]);

  const handleOpenDetail = useCallback((data: CardDetailData) => {
    setModalDetail(data);
    sync.broadcastOpenModal(data);
  }, [sync]);

  const handleCloseDetail = useCallback(() => {
    setModalDetail(null);
    sync.broadcastCloseModal();
  }, [sync]);

  const handleOpenPopoutPresenter = useCallback(() => {
    if (typeof window === 'undefined') return;
    const pathname = window.location.pathname.replace(/\/$/, '');
    const url = pathname.endsWith('/presenter') ? pathname : `${pathname}/presenter`;
    const features = 'width=1180,height=800,menubar=no,toolbar=no,location=no,status=no,resizable=yes';
    window.open(url, 'uxio_presenter_console', features);
    setIsTeleprompterOpen(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, [containerRef]);

  // Direct 16:9 Vector PDF Exporter
  const handleDownloadPdf = useCallback(async () => {
    if (!exportStageRef.current || isExporting) return;
    try {
      setIsExporting(true);
      setExportMessage('Iniciando exportación 16:9...');
      await exportPresentationToPdf(exportStageRef.current, presentation.title, (_c, _t, msg) => setExportMessage(msg));
    } catch (error) {
      console.error('Error exportando PDF:', error);
    } finally {
      setIsExporting(false);
      setExportMessage(null);
    }
  }, [exportStageRef, isExporting, presentation.title]);

  usePresentationKeyboard({
    onPrev: handlePrev,
    onNext: handleNext,
    onToggleFullscreen: handleToggleFullscreen,
    onToggleTheme: handleToggleTheme,
    onToggleTeleprompter: () => setIsTeleprompterOpen(prev => !prev),
    onPrint: handleDownloadPdf,
    modalDetail,
    onCloseModal: handleCloseDetail,
  });

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const isStatement = currentSlide.type === 'statement';
  const progressPercent = Math.round(((currentIndex + 1) / totalSlides) * 100);
  const isDark = theme === 'dark';

  return (
    <>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={`relative w-full flex flex-col justify-between items-center transition-colors duration-500 overflow-hidden ${
          isStatement
            ? 'text-white border-white/20 shadow-2xl'
            : isDark
            ? 'bg-[#09090B] text-white border-white/[0.1]'
            : 'bg-gradient-to-br from-[#FAFAFA] via-[#F4F4F6] to-[#EFF6FF] text-[#09090B] border-black/[0.08]'
        } ${isFullscreen ? 'fixed inset-0 z-50 h-screen w-screen p-0 rounded-none' : 'max-w-[1360px] mx-auto rounded-3xl border shadow-2xl min-h-[640px] aspect-[16/9]'}`}
      >
        {currentSlide.type === 'title' && (
          <PresentationCoverBackground imageUrl={currentSlide.imageUrl} isDark={isDark} />
        )}

        {isStatement && (
          <PresentationAuroraBackground
            bgColor={currentSlide.bgColor}
            auroraColors={currentSlide.auroraColors}
          />
        )}

        {!isStatement && (
          <FluidSpotlightGlow x={mousePos.x} y={mousePos.y} theme={theme} accentColor={activeBlockColor} />
        )}

        <div className="w-full flex-1 min-h-0 flex flex-row relative z-10 overflow-hidden">
          {isTeleprompterOpen && (
            <InstructorTeleprompterSidebar
              slide={currentSlide}
              slideIndex={currentIndex}
              totalSlides={totalSlides}
              onClose={() => setIsTeleprompterOpen(false)}
            />
          )}

          <div className="flex-1 min-w-0 flex flex-col justify-between items-center h-full relative">
            <PresentationHeader
              title={presentation.title}
              moduleTag={presentation.moduleTag}
              currentIndex={currentIndex}
              totalSlides={totalSlides}
              theme={theme}
              onToggleTheme={handleToggleTheme}
              exitHref={exitHref}
              isStatement={isStatement}
            />

            <main ref={stageContainerRef} className="w-full flex-1 min-h-0 flex items-center justify-center p-0 overflow-hidden relative">
              <div
                style={{ width: 1280, height: 720, transform: `scale(${scale})`, transformOrigin: 'center center', flexShrink: 0 }}
                className="flex items-center justify-center transition-transform duration-100 ease-out select-none relative"
              >
                <div key={currentSlide.id} className="slide-stage-enter w-full h-full flex items-center justify-center">
                  <SlideRenderer slide={currentSlide} theme={theme} onOpenDetail={handleOpenDetail} revealedStep={revealedStep} />
                </div>
                <TelestratorCanvas strokes={telestrator.currentSlideStrokes} currentStroke={telestrator.currentStroke} />
              </div>
            </main>

            <div className="w-full px-6 pb-5 flex justify-between items-center z-20">
              <PresentationFooterShortcuts isDark={isStatement || isDark} />
              <PresentationControls
                currentIndex={currentIndex}
                totalSlides={totalSlides}
                isFullscreen={isFullscreen}
                theme={theme}
                isTeleprompterOpen={isTeleprompterOpen}
                isExporting={isExporting}
                isStatement={isStatement}
                onPrev={handlePrev}
                onNext={handleNext}
                onToggleFullscreen={handleToggleFullscreen}
                onToggleTheme={handleToggleTheme}
                onToggleTeleprompter={() => setIsTeleprompterOpen(prev => !prev)}
                onOpenPopoutPresenter={handleOpenPopoutPresenter}
                onPrint={handleDownloadPdf}
                exitHref={exitHref}
              />
            </div>
          </div>
        </div>

        <div className={`presentation-progress absolute bottom-0 left-0 right-0 h-1.5 ${isStatement ? 'bg-white/20' : isDark ? 'bg-white/[0.06]' : 'bg-black/[0.04]'}`}>
          <div className="h-full bg-[#FE385B] shadow-[0_0_10px_rgba(254,56,91,0.6)] transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>

        {modalDetail && <SlideDetailModal data={modalDetail} onClose={handleCloseDetail} lang={lang} theme={theme} />}
      </div>

      {isExporting && exportMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#09090B]/95 text-white border border-[#FE385B]/40 px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-xl font-mono text-xs">
          <Loader2 size={16} className="animate-spin text-[#FE385B]" />
          <span>{exportMessage}</span>
        </div>
      )}

      <PresentationExportStage ref={exportStageRef} presentation={presentation} />
    </>
  );
}
