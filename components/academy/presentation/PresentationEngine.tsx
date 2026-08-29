'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PresentationContent } from '@/data/academy/creator-lab/presentations/types';
import { Locale } from '@/types';
import SlideRenderer from './SlideRenderer';
import PresentationHeader from './PresentationHeader';
import PresentationControls from './PresentationControls';
import SlideDetailModal, { CardDetailData } from './SlideDetailModal';
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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [modalDetail, setModalDetail] = useState<CardDetailData | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const stageContainerRef = useRef<HTMLDivElement>(null);

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

  const handleToggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // Responsive 16:9 Viewport Stage Scaler (Gamma/Keynote standard)
  const updateScale = useCallback(() => {
    if (!stageContainerRef.current) return;
    const rect = stageContainerRef.current.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const baseWidth = 1280;
    const baseHeight = 720;

    const availableWidth = rect.width - 24;
    const availableHeight = rect.height - 16;

    const scaleX = availableWidth / baseWidth;
    const scaleY = availableHeight / baseHeight;
    const calculatedScale = Math.min(scaleX, scaleY);

    setScale(Math.max(0.45, Math.min(2.5, calculatedScale)));
  }, []);

  useEffect(() => {
    updateScale();
    const stageEl = stageContainerRef.current;
    if (!stageEl) return;

    const observer = new ResizeObserver(updateScale);
    observer.observe(stageEl);
    window.addEventListener('resize', updateScale);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, [updateScale, isFullscreen]);

  // Mouse spotlight tracker
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (modalDetail && (e.code === 'Escape' || e.code === 'Space')) {
        setModalDetail(null);
        return;
      }

      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyH':
        case 'KeyA':
          e.preventDefault();
          handlePrev();
          break;
        case 'ArrowRight':
        case 'Space':
        case 'KeyL':
        case 'KeyD':
          e.preventDefault();
          handleNext();
          break;
        case 'KeyF':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'KeyT':
          e.preventDefault();
          handleToggleTheme();
          break;
        case 'KeyP':
          e.preventDefault();
          handlePrint();
          break;
        case 'Escape':
          if (modalDetail) setModalDetail(null);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, handleToggleFullscreen, handleToggleTheme, handlePrint, modalDetail]);

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
  const isDark = theme === 'dark';

  return (
    <>
      {/* 1. Screen Interactive Presentation Deck */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={`presentation-screen-only relative w-full flex flex-col justify-between items-center transition-colors duration-300 overflow-hidden ${
          isDark
            ? 'bg-[#09090B] text-white border-white/[0.1]'
            : 'bg-gradient-to-br from-[#FAFAFA] via-[#F4F4F6] to-[#EFF6FF] text-[#09090B] border-black/[0.08]'
        } ${
          isFullscreen
            ? 'fixed inset-0 z-50 h-screen w-screen p-0 rounded-none'
            : 'max-w-[1360px] mx-auto rounded-3xl border shadow-2xl min-h-[640px] aspect-[16/9]'
        }`}
      >
        {/* Full-Deck Cover Background Image for Title Slide */}
        {currentSlide.type === 'title' && currentSlide.imageUrl && (
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <img
              src={currentSlide.imageUrl}
              alt="Deck Cover"
              className={`w-full h-full object-cover transition-all duration-700 ${
                isDark ? 'opacity-[0.22] scale-105' : 'opacity-[0.16] scale-105'
              }`}
            />
            <div
              className={`absolute inset-0 ${
                isDark
                  ? 'bg-gradient-to-r from-[#09090B] via-[#09090B]/85 to-[#09090B]/30'
                  : 'bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/90 to-[#FAFAFA]/30'
              }`}
            />
          </div>
        )}

        {/* Interactive Mouse Ambient Spotlight Glow */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
          style={{
            background: isDark
              ? `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(254, 56, 91, 0.08), rgba(16, 185, 129, 0.03), transparent 70%)`
              : `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(254, 56, 91, 0.06), rgba(16, 185, 129, 0.04), transparent 70%)`,
          }}
        />

        {/* Top Header */}
        <PresentationHeader
          title={presentation.title}
          moduleTag={presentation.moduleTag}
          currentIndex={currentIndex}
          totalSlides={totalSlides}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          exitHref={exitHref}
        />

        {/* Central 16:9 Slide Stage with Aspect-Ratio Preserving Dynamic Scaler */}
        <main
          ref={stageContainerRef}
          className="w-full flex-1 min-h-0 flex items-center justify-center p-2 sm:p-4 overflow-hidden relative z-10"
        >
          <div
            style={{
              width: 1280,
              height: 720,
              transform: `scale(${scale})`,
              transformOrigin: 'center center',
              flexShrink: 0,
            }}
            className="flex items-center justify-center transition-transform duration-100 ease-out select-none"
          >
            <SlideRenderer
              slide={currentSlide}
              theme={theme}
              onOpenDetail={data => setModalDetail(data)}
            />
          </div>
        </main>

        {/* Bottom Floating Island Controls Bar */}
        <div className="w-full px-6 pb-5 flex justify-between items-center z-20">
          <div
            className={`hidden sm:flex items-center gap-2 text-[11px] font-mono ${
              isDark ? 'text-[#8E8E93]' : 'text-[#71717A]'
            }`}
          >
            <span>[← / → / Espacio: Navegar]</span>
            <span>·</span>
            <span>[F: Pantalla Completa]</span>
            <span>·</span>
            <span>[T: Tema]</span>
            <span>·</span>
            <span>[P: PDF]</span>
          </div>

          <PresentationControls
            currentIndex={currentIndex}
            totalSlides={totalSlides}
            isFullscreen={isFullscreen}
            theme={theme}
            onPrev={handlePrev}
            onNext={handleNext}
            onToggleFullscreen={handleToggleFullscreen}
            onToggleTheme={handleToggleTheme}
            onPrint={handlePrint}
            exitHref={exitHref}
          />
        </div>

        {/* Bottom Coral Progress Bar */}
        <div
          className={`presentation-progress absolute bottom-0 left-0 right-0 h-1.5 ${
            isDark ? 'bg-white/[0.06]' : 'bg-black/[0.04]'
          }`}
        >
          <div
            className="h-full bg-[#FE385B] shadow-[0_0_10px_rgba(254,56,91,0.6)] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Interactive Card Detail Modal (Mounted inside fullscreen container for perfect overlay) */}
        {modalDetail && (
          <SlideDetailModal
            data={modalDetail}
            onClose={() => setModalDetail(null)}
            lang={lang}
            theme={theme}
          />
        )}
      </div>

      {/* 2. Static Clean 16:9 Print Container (Activated strictly during window.print()) */}
      <div className="presentation-print-all">
        {slides.map(slide => (
          <div key={slide.id} className="presentation-print-slide">
            <SlideRenderer slide={slide} theme="light" />
          </div>
        ))}
      </div>
    </>
  );
}
