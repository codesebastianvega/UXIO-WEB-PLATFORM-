'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react';

export interface KineticSlideItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  metric: string;
  gradient?: string;
}

export interface KineticSnapSliderProps {
  slides?: KineticSlideItem[];
  activeScale?: number;
  gap?: number;
  accentColor?: string;
  autoplay?: boolean;
  className?: string;
}

const DEFAULT_SLIDES: KineticSlideItem[] = [
  {
    id: '01',
    tag: 'ARCHITECTURE // 01',
    title: 'Neural Mesh Engine',
    subtitle: 'Física no newtoniana con aceleración GPU a 120 FPS.',
    metric: '99.9% Fluidity',
  },
  {
    id: '02',
    tag: 'PERFORMANCE // 02',
    title: 'Hyper Sonic Ingest',
    subtitle: 'Pipeline de streaming desacoplado con latencia sub-milisegundo.',
    metric: '0.4ms Latency',
  },
  {
    id: '03',
    tag: 'DESIGN SYSTEM // 03',
    title: 'Obsidian Liquid Core',
    subtitle: 'Superficies oscuras con refracción de cristal y luz especular.',
    metric: '100% Zero-Deps',
  },
  {
    id: '04',
    tag: 'SECURITY // 04',
    title: 'Quantum Edge Gateway',
    subtitle: 'Distribución multirregión con balanceo dinámico de carga.',
    metric: 'Global CDN',
  },
  {
    id: '05',
    tag: 'AUTOMATION // 05',
    title: 'Autonomous Lab Agent',
    subtitle: 'Orquestación de microservicios con sincronización de estado.',
    metric: 'Real-Time Sync',
  },
];

/**
 * KineticSnapSlider - Inertial momentum touch & pointer drag slider
 * with perfect viewport-center snapping and dynamic color customization.
 * 
 * Open Source UI Primitive by UXIO Studio & Labs.
 * License: MIT
 */
export default function KineticSnapSlider({
  slides = DEFAULT_SLIDES,
  activeScale = 1.08,
  gap = 20,
  accentColor = '#FE385B',
  autoplay = false,
  className = '',
}: KineticSnapSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(500);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const cardWidth = 260;
  const slideStride = cardWidth + gap;

  // Measure container width accurately on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Compute exact translate to dead-center the active slide
  const getCenterTranslate = useCallback((index: number) => {
    const viewportCenter = containerWidth / 2;
    const cardCenter = index * slideStride + cardWidth / 2;
    return viewportCenter - cardCenter;
  }, [containerWidth, slideStride, cardWidth]);

  // Autoplay timer
  useEffect(() => {
    if (!autoplay || isDragging) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [autoplay, isDragging, slides.length]);

  // Pointer Drag Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setOffsetX(0);
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setOffsetX(diff);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }

    const threshold = slideStride * 0.25;
    if (offsetX < -threshold && activeIndex < slides.length - 1) {
      setActiveIndex((prev) => Math.min(slides.length - 1, prev + 1));
    } else if (offsetX > threshold && activeIndex > 0) {
      setActiveIndex((prev) => Math.max(0, prev - 1));
    }
    setOffsetX(0);
  };

  const targetTranslate = getCenterTranslate(activeIndex);
  const currentTranslate = targetTranslate + offsetX;

  return (
    <div className={`w-full flex flex-col items-center select-none ${className}`}>
      {/* Draggable Viewport Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="w-full overflow-hidden py-6 relative cursor-grab active:cursor-grabbing touch-pan-y"
      >
        <div
          style={{
            transform: `translateX(${currentTranslate}px)`,
            gap: `${gap}px`,
            transition: isDragging ? 'none' : 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="flex items-center"
        >
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={slide.id}
                onClick={() => setActiveIndex(idx)}
                style={{
                  width: `${cardWidth}px`,
                  transform: isActive ? `scale(${activeScale})` : 'scale(0.9)',
                  opacity: isActive ? 1 : 0.45,
                  transition: 'transform 350ms ease-out, opacity 350ms ease-out, border-color 350ms ease-out, box-shadow 350ms ease-out',
                  borderColor: isActive ? accentColor : undefined,
                  boxShadow: isActive ? `0 16px 36px -8px ${accentColor}35` : undefined,
                }}
                className={`flex-shrink-0 h-[240px] rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden bg-white dark:bg-[#141416] border transition-all cursor-pointer ${
                  isActive
                    ? 'border-2 z-20'
                    : 'border-black/[0.08] dark:border-white/[0.08] z-10'
                }`}
              >
                {/* Dynamic Accent Ambient Glow */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: isActive
                      ? `radial-gradient(circle at 50% 20%, ${accentColor}25 0%, ${accentColor}08 60%, transparent 100%)`
                      : 'none',
                  }}
                />

                {/* Top Card Bar */}
                <div className="flex items-center justify-between relative z-10">
                  <span
                    className="font-mono text-[9px] font-bold uppercase transition-colors"
                    style={{ color: isActive ? accentColor : '#8E8E93' }}
                  >
                    {slide.tag}
                  </span>
                  <div
                    className="p-1.5 rounded-xl bg-black/5 dark:bg-white/10 text-[#111111] dark:text-white transition-colors"
                    style={{ color: isActive ? accentColor : undefined }}
                  >
                    <ArrowUpRight size={13} />
                  </div>
                </div>

                {/* Main Card Content */}
                <div className="space-y-1 relative z-10">
                  <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                    {slide.title}
                  </h4>
                  <p className="font-sans text-[11px] text-[#8E8E93] line-clamp-2 leading-relaxed">
                    {slide.subtitle}
                  </p>
                </div>

                {/* Bottom Metric Pill */}
                <div className="flex items-center justify-between pt-2 border-t border-black/[0.06] dark:border-white/[0.06] relative z-10">
                  <span
                    className="font-mono text-[10px] font-bold transition-colors"
                    style={{ color: isActive ? accentColor : '#10B981' }}
                  >
                    {slide.metric}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? accentColor : '#8E8E93',
                      boxShadow: isActive ? `0 0 8px ${accentColor}` : undefined,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls Bar */}
      <div className="flex items-center gap-4 pt-1">
        <button
          type="button"
          onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
          disabled={activeIndex === 0}
          className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 disabled:opacity-30 text-[#111111] dark:text-white transition-all cursor-pointer"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Progress Indicator Dots */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              style={{
                backgroundColor: idx === activeIndex ? accentColor : undefined,
                width: idx === activeIndex ? '20px' : '6px',
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex ? '' : 'bg-black/20 dark:bg-white/20'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActiveIndex((prev) => Math.min(slides.length - 1, prev + 1))}
          disabled={activeIndex === slides.length - 1}
          className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 disabled:opacity-30 text-[#111111] dark:text-white transition-all cursor-pointer"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
