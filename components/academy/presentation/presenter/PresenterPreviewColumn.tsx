'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import {
  TelestratorStroke,
  TelestratorTool,
  TelestratorPoint,
} from '@/lib/academy/presentation-channel';
import { CardDetailData } from '../SlideDetailModal';
import SlideRenderer from '../SlideRenderer';
import TelestratorCanvas from '../telestrator/TelestratorCanvas';
import TelestratorToolbar from '../telestrator/TelestratorToolbar';
import PresentationAuroraBackground from '../components/PresentationAuroraBackground';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface PresenterPreviewColumnProps {
  currentSlide: SlideData;
  nextSlide: SlideData | null;
  currentIndex: number;
  totalSlides: number;
  theme: 'light' | 'dark';
  revealedStep?: number;
  activeTool: TelestratorTool;
  currentSlideStrokes: TelestratorStroke[];
  currentStroke: TelestratorStroke | null;
  onSelectTool: (tool: TelestratorTool) => void;
  onClearDrawings: () => void;
  onStartDrawing: (pt: TelestratorPoint) => void;
  onUpdateDrawing: (pt: TelestratorPoint) => void;
  onEndDrawing: () => void;
  onOpenDetail: (data: CardDetailData) => void;
  onCursorMove?: (pt: TelestratorPoint) => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function PresenterPreviewColumn({
  currentSlide,
  nextSlide,
  currentIndex,
  totalSlides,
  theme,
  revealedStep = 1,
  activeTool,
  currentSlideStrokes,
  currentStroke,
  onSelectTool,
  onClearDrawings,
  onStartDrawing,
  onUpdateDrawing,
  onEndDrawing,
  onOpenDetail,
  onCursorMove,
  onPrev,
  onNext,
}: PresenterPreviewColumnProps) {
  const [previewScale, setPreviewScale] = useState(0.28);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const slideStageRef = useRef<HTMLDivElement>(null);

  const updatePreviewScale = useCallback(() => {
    if (!previewContainerRef.current) return;
    const rect = previewContainerRef.current.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;
    const scaleX = rect.width / 1280;
    const scaleY = rect.height / 720;
    setPreviewScale(Math.min(scaleX, scaleY));
  }, []);

  useEffect(() => {
    updatePreviewScale();
    const el = previewContainerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(updatePreviewScale);
    observer.observe(el);
    window.addEventListener('resize', updatePreviewScale);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updatePreviewScale);
    };
  }, [updatePreviewScale]);

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeTool !== 'none' || !slideStageRef.current) return;
    const rect = slideStageRef.current.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const rawX = (e.clientX - rect.left) / rect.width;
    const rawY = (e.clientY - rect.top) / rect.height;

    if (rawX >= 0 && rawX <= 1 && rawY >= 0 && rawY <= 1) {
      onCursorMove?.({ x: rawX, y: rawY });
    }
  };

  const isStatement = currentSlide.type === 'statement';

  return (
    <section className="col-span-12 lg:col-span-5 flex flex-col justify-between h-full min-h-0 gap-2.5 overflow-hidden">
      {/* 1. Current Slide Live Preview & Telestrator Overlay */}
      <div className="flex-1 min-h-0 bg-[#0D0D11] rounded-2xl border border-white/[0.08] p-3 flex flex-col justify-between gap-1.5 shadow-xl overflow-hidden relative">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#8E8E93] shrink-0">
          <span className="flex items-center gap-1.5 text-white font-bold">
            <Eye size={12} className="text-[#FE385B]" />
            En Pantalla Principal (Xiaomi 27")
          </span>

          <div className="flex items-center gap-2">
            <TelestratorToolbar
              activeTool={activeTool}
              onSelectTool={onSelectTool}
              onClear={onClearDrawings}
              hasStrokes={currentSlideStrokes.length > 0}
            />
            <span className="font-bold text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded-md">
              {currentIndex + 1} / {totalSlides}
            </span>
          </div>
        </div>

        {/* Dynamic Canvas with Statement Full-Bleed Support */}
        <div
          ref={previewContainerRef}
          className={`w-full flex-1 min-h-0 rounded-xl overflow-hidden border relative flex items-center justify-center shadow-inner transition-colors duration-300 ${
            isStatement
              ? 'border-white/20'
              : theme === 'dark'
              ? 'bg-[#09090B] border-white/[0.08]'
              : 'bg-gradient-to-br from-[#FAFAFA] via-[#F4F4F6] to-[#EFF6FF] border-black/[0.08]'
          }`}
        >
          {isStatement && (
            <PresentationAuroraBackground
              bgColor={currentSlide.bgColor}
              auroraColors={currentSlide.auroraColors}
            />
          )}

          <div
            ref={slideStageRef}
            onMouseMove={handleStageMouseMove}
            style={{
              width: 1280,
              height: 720,
              transform: `scale(${previewScale})`,
              transformOrigin: 'center center',
            }}
            className="select-none flex items-center justify-center shrink-0 relative pointer-events-auto z-10"
          >
            <SlideRenderer
              slide={currentSlide}
              theme={theme}
              onOpenDetail={data => onOpenDetail(data)}
              revealedStep={revealedStep}
            />

            {/* Telestrator Drawing Layer */}
            <TelestratorCanvas
              strokes={currentSlideStrokes}
              currentStroke={currentStroke}
              isInteractive={activeTool !== 'none'}
              onPointerDown={onStartDrawing}
              onPointerMove={onUpdateDrawing}
              onPointerUp={onEndDrawing}
            />
          </div>
        </div>
      </div>

      {/* 2. Next Slide Preview Card */}
      <div className="p-2.5 rounded-xl bg-[#0D0D11] border border-white/[0.08] space-y-0.5 shadow-md shrink-0">
        <span className="font-mono text-[9px] uppercase font-bold text-[#8E8E93] block">
          // SIGUIENTE DIAPOSITIVA (NEXT PREVIEW)
        </span>
        {nextSlide ? (
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-white truncate">{nextSlide.title}</h4>
              <p className="text-[10px] text-[#8E8E93] font-mono truncate">{nextSlide.tag || 'Slide Siguiente'}</p>
            </div>
            <span className="font-mono text-xs text-[#FE385B] font-bold shrink-0">0{currentIndex + 2}</span>
          </div>
        ) : (
          <p className="text-xs font-mono text-[#10B981]">🎉 Última diapositiva de la lección</p>
        )}
      </div>

      {/* 3. Remote Navigation Buttons */}
      <div className="grid grid-cols-2 gap-2 shrink-0">
        <button
          type="button"
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="py-2.5 sm:py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] disabled:opacity-30 border border-white/[0.08] flex items-center justify-center gap-1.5 font-display font-bold text-xs transition-all active:scale-98"
        >
          <ChevronLeft size={15} />
          <span>Anterior [←]</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          className="py-2.5 sm:py-3 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 disabled:opacity-30 text-white flex items-center justify-center gap-1.5 font-display font-bold text-xs shadow-md transition-all active:scale-98"
        >
          <span>Siguiente [→]</span>
          <ChevronRight size={15} />
        </button>
      </div>
    </section>
  );
}
