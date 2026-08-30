'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [modalDetail, setModalDetail] = useState<CardDetailData | null>(null);

  const slides = presentation.slides;
  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex] || slides[0];
  const nextSlide = slides[currentIndex + 1] || null;

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
    onSlideChange: idx => setCurrentIndex(idx),
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
      setCurrentIndex(nextIdx);
      broadcastSlideChange(nextIdx);
    },
    [totalSlides, broadcastSlideChange]
  );

  const handlePrev = useCallback(() => {
    handleSlideSelect(currentIndex - 1);
  }, [currentIndex, handleSlideSelect]);

  const handleNext = useCallback(() => {
    handleSlideSelect(currentIndex + 1);
  }, [currentIndex, handleSlideSelect]);

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
        />

        {/* Right Column: Live Mini-Stage with Telestrator, Clickable Cards & Navigation */}
        <PresenterPreviewColumn
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          currentIndex={currentIndex}
          totalSlides={totalSlides}
          theme={theme}
          activeTool={telestrator.activeTool}
          currentSlideStrokes={telestrator.currentSlideStrokes}
          currentStroke={telestrator.currentStroke}
          onSelectTool={telestrator.setActiveTool}
          onClearDrawings={() => telestrator.clearSlideDrawings(currentSlide.id)}
          onStartDrawing={telestrator.startDrawing}
          onUpdateDrawing={telestrator.updateDrawing}
          onEndDrawing={telestrator.endDrawing}
          onOpenDetail={handleOpenDetail}
          onCursorMove={pt => broadcastCursorMove(pt)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </main>

      {/* Interactive Modal Mirror in Presenter View */}
      {modalDetail && (
        <SlideDetailModal
          data={modalDetail}
          onClose={handleCloseDetail}
          lang={lang}
          theme={theme}
        />
      )}
    </div>
  );
}
