'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { PresentationContent } from '@/data/academy/creator-lab/presentations/types';
import { Locale } from '@/types';
import { usePresentationSync } from '@/lib/academy/presentation-channel';
import { useTelestrator } from './telestrator/useTelestrator';
import SlideDetailModal, { CardDetailData } from './SlideDetailModal';
import PresenterHeader from './presenter/PresenterHeader';
import PresenterScriptColumn from './presenter/PresenterScriptColumn';
import PresenterPreviewColumn from './presenter/PresenterPreviewColumn';

interface InstructorPresenterConsoleProps {
  presentation: PresentationContent;
  lang: Locale;
}

export default function InstructorPresenterConsole({
  presentation,
  lang,
}: InstructorPresenterConsoleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [modalDetail, setModalDetail] = useState<CardDetailData | null>(null);

  const slides = presentation.slides;
  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex] || slides[0];
  const nextSlide = slides[currentIndex + 1] || null;

  const currentSlideSteps = useMemo(() => {
    if (currentSlide.points?.length) return currentSlide.points.length;
    if (currentSlide.steps?.length) return currentSlide.steps.length;
    if (currentSlide.type === 'comparison') return 2;
    if (currentSlide.stats?.length) return currentSlide.stats.length;
    return 1;
  }, [currentSlide]);

  // Telestrator state & broadcast bridge
  const telestrator = useTelestrator({
    slideId: currentSlide.id,
    onBroadcastStrokeStart: stroke => broadcastStrokeStart(stroke),
    onBroadcastStrokeUpdate: (sId, pt, endPt) => broadcastStrokeUpdate(sId, pt, endPt),
    onBroadcastStrokeEnd: stroke => broadcastStrokeEnd(stroke),
    onBroadcastClear: sId => broadcastClearDrawings(sId),
  });

  // Real-time broadcast sync with the main OBS/Zoom presentation window
  const {
    broadcastSlideChange,
    broadcastThemeChange,
    broadcastStepChange,
    broadcastStrokeStart,
    broadcastStrokeUpdate,
    broadcastStrokeEnd,
    broadcastClearDrawings,
    broadcastOpenModal,
    broadcastCloseModal,
    broadcastCursorMove,
  } = usePresentationSync({
    channelId: presentation.id,
    currentIndex,
    theme,
    currentStep,
    onSlideChange: idx => {
      setCurrentIndex(idx);
      setCurrentStep(1);
    },
    onStepChange: st => {
      setCurrentStep(st);
    },
    onThemeChange: th => setTheme(th),
    onRemoteStrokeStart: stroke => telestrator.handleRemoteStrokeStart(stroke),
    onRemoteStrokeUpdate: (sId, pt, endPt) => telestrator.handleRemoteStrokeUpdate(sId, pt, endPt),
    onRemoteStrokeEnd: stroke => telestrator.handleRemoteStrokeEnd(stroke),
    onRemoteClearDrawings: sId => telestrator.handleRemoteClear(sId),
    onRemoteOpenModal: detail => setModalDetail(detail),
    onRemoteCloseModal: () => setModalDetail(null),
  });

  const handleSlideSelect = useCallback(
    (index: number) => {
      const nextIdx = Math.max(0, Math.min(totalSlides - 1, index));
      const targetSlide = slides[nextIdx];
      const targetSteps = targetSlide?.points?.length || targetSlide?.steps?.length || (targetSlide?.type === 'comparison' ? 2 : 1);
      setCurrentIndex(nextIdx);
      setCurrentStep(1);
      broadcastSlideChange(nextIdx);
      broadcastStepChange(1, targetSteps);
    },
    [totalSlides, slides, broadcastSlideChange, broadcastStepChange]
  );

  const handlePrev = useCallback(() => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      broadcastStepChange(prevStep, currentSlideSteps);
      return;
    }
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      const prevSlide = slides[prevIdx];
      const prevSteps = prevSlide?.points?.length || prevSlide?.steps?.length || (prevSlide?.type === 'comparison' ? 2 : 1);
      setCurrentIndex(prevIdx);
      setCurrentStep(1);
      broadcastSlideChange(prevIdx);
      broadcastStepChange(1, prevSteps);
    }
  }, [currentStep, currentSlideSteps, currentIndex, slides, broadcastStepChange, broadcastSlideChange]);

  const handleNext = useCallback(() => {
    if (currentStep < currentSlideSteps) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      broadcastStepChange(nextStep, currentSlideSteps);
      return;
    }
    if (currentIndex < totalSlides - 1) {
      const nextIdx = currentIndex + 1;
      const nextSlide = slides[nextIdx];
      const nextSteps = nextSlide?.points?.length || nextSlide?.steps?.length || (nextSlide?.type === 'comparison' ? 2 : 1);
      setCurrentIndex(nextIdx);
      setCurrentStep(1);
      broadcastSlideChange(nextIdx);
      broadcastStepChange(1, nextSteps);
    }
  }, [currentStep, currentSlideSteps, currentIndex, totalSlides, slides, broadcastStepChange, broadcastSlideChange]);

  const handleToggleTheme = useCallback(() => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    broadcastThemeChange(nextTheme);
  }, [theme, broadcastThemeChange]);

  const handleOpenDetail = useCallback(
    (data: CardDetailData) => {
      setModalDetail(data);
      broadcastOpenModal(data);
    },
    [broadcastOpenModal]
  );

  const handleCloseDetail = useCallback(() => {
    setModalDetail(null);
    broadcastCloseModal();
  }, [broadcastCloseModal]);

  // Stopwatch effect
  useEffect(() => {
    if (!isTimerRunning) return;
    const interval = setInterval(() => {
      setTimerSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isOverTime = timerSeconds > 300;

  // Keyboard navigation for remote presenter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalDetail) {
        if (e.key === 'Escape') handleCloseDetail();
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, modalDetail, handleCloseDetail]);

  return (
    <div className="w-full h-screen bg-[#070709] text-white flex flex-col justify-between select-none overflow-hidden font-sans p-3 sm:p-4 gap-2.5">
      {/* Top Header Bar */}
      <PresenterHeader
        title={presentation.title}
        timerSeconds={timerSeconds}
        isTimerRunning={isTimerRunning}
        isOverTime={isOverTime}
        fontSize={fontSize}
        theme={theme}
        formatTime={formatTime}
        onToggleTimer={() => setIsTimerRunning(prev => !prev)}
        onResetTimer={() => setTimerSeconds(0)}
        onSetFontSize={setFontSize}
        onToggleTheme={handleToggleTheme}
        onClose={() => window.close()}
      />

      {/* Main Split Layout: 7 Cols Script (Left) / 5 Cols Stage & Tools (Right) */}
      <main className="w-full flex-1 min-h-0 grid grid-cols-12 gap-3 overflow-hidden">
        {/* Left Column: Script, Q&A Cheat Sheet & Stage Direction */}
        <PresenterScriptColumn
          currentIndex={currentIndex}
          totalSlides={totalSlides}
          notes={currentSlide.instructorNotes}
          fontSize={fontSize}
          currentStep={currentStep}
          totalSteps={currentSlideSteps}
          autoRevealMs={currentSlide.autoRevealMs}
        />

        {/* Right Column: Stage Preview, Telestrator Controls & Next Slide */}
        <PresenterPreviewColumn
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          theme={theme}
          revealedStep={currentStep}
          activeTool={telestrator.activeTool}
          currentSlideStrokes={telestrator.currentSlideStrokes}
          currentStroke={telestrator.currentStroke}
          onSelectTool={telestrator.setActiveTool}
          onClearDrawings={() => telestrator.clearSlideDrawings(currentSlide.id)}
          onStartDrawing={telestrator.startDrawing}
          onUpdateDrawing={telestrator.updateDrawing}
          onEndDrawing={telestrator.endDrawing}
          onOpenDetail={handleOpenDetail}
          onCursorMove={broadcastCursorMove}
          onPrev={handlePrev}
          onNext={handleNext}
          currentIndex={currentIndex}
          totalSlides={totalSlides}
        />
      </main>

      {modalDetail && (
        <SlideDetailModal data={modalDetail} onClose={handleCloseDetail} lang={lang} theme={theme} />
      )}
    </div>
  );
}
