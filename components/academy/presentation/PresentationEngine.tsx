'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PresentationContent } from '@/data/academy/creator-lab/presentations/types';
import { Locale } from '@/types';
import SlideRenderer from './SlideRenderer';
import PresentationHeader from './PresentationHeader';
import PresentationControls from './PresentationControls';
import '@/styles/presentation-print.css';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const slides = presentation.slides;
  const totalSlides = slides.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(totalSlides - 1, prev + 1));
  }, [totalSlides]);

  const handleToggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events when user is typing in form inputs
      if (
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(
          (e.target as HTMLElement)?.tagName
        )
      ) {
        return;
      }

      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyH':
          e.preventDefault();
          handlePrev();
          break;
        case 'ArrowRight':
        case 'Space':
        case 'KeyL':
          e.preventDefault();
          handleNext();
          break;
        case 'KeyF':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'KeyP':
          e.preventDefault();
          handlePrint();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, handleToggleFullscreen, handlePrint]);

  // Sync fullscreen change event
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const currentSlide = slides[currentIndex] || slides[0];
  const progressPercent = Math.round(((currentIndex + 1) / totalSlides) * 100);

  return (
    <>
      {/* 1. Screen Interactive Presentation Deck */}
      <div
        ref={containerRef}
        className={`presentation-screen-only relative w-full flex flex-col justify-between items-center bg-[#080808] transition-all overflow-hidden ${
          isFullscreen
            ? 'fixed inset-0 z-50 h-screen p-0'
            : 'max-w-[1300px] mx-auto rounded-3xl border border-white/[0.1] shadow-2xl min-h-[600px] aspect-[16/9]'
        }`}
      >
        {/* Top Header */}
        <PresentationHeader
          title={presentation.title}
          moduleTag={presentation.moduleTag}
          currentIndex={currentIndex}
          totalSlides={totalSlides}
        />

        {/* Central 16:9 Slide Stage */}
        <main className="w-full flex-1 min-h-0 flex items-center justify-center p-4 sm:p-8">
          <SlideRenderer slide={currentSlide} />
        </main>

        {/* Bottom Floating Controls Bar */}
        <div className="w-full px-6 pb-6 flex justify-between items-center z-10">
          <div className="hidden sm:block text-[11px] font-mono text-[#8E8E93]">
            [← / → / Space: Navegar] · [F: Pantalla Completa] · [P: Imprimir]
          </div>

          <PresentationControls
            currentIndex={currentIndex}
            totalSlides={totalSlides}
            isFullscreen={isFullscreen}
            onPrev={handlePrev}
            onNext={handleNext}
            onToggleFullscreen={handleToggleFullscreen}
            onPrint={handlePrint}
            exitHref={exitHref}
          />
        </div>

        {/* Bottom Progress Bar */}
        <div className="presentation-progress absolute bottom-0 left-0 right-0 h-1 bg-white/[0.06]">
          <div
            className="h-full bg-gradient-to-r from-[#FE385B] to-[#00F0FF] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* 2. Print All Slides Container (Activated strictly during window.print()) */}
      <div className="presentation-print-all">
        {slides.map(slide => (
          <div key={slide.id} className="presentation-print-slide">
            <SlideRenderer slide={slide} />
          </div>
        ))}
      </div>
    </>
  );
}
