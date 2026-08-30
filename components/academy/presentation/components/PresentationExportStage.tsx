'use client';

import React, { forwardRef } from 'react';
import { PresentationContent } from '@/data/academy/creator-lab/presentations/types';
import SlideRenderer from '../SlideRenderer';

interface PresentationExportStageProps {
  presentation: PresentationContent;
}

const PresentationExportStage = forwardRef<HTMLDivElement, PresentationExportStageProps>(
  ({ presentation }, ref) => {
    const slides = presentation.slides;
    const totalSlides = slides.length;

    return (
      <div
        ref={ref}
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: '-99999px',
          top: 0,
          opacity: 1,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      >
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className="pdf-export-slide"
            style={{
              width: 1280,
              height: 720,
              backgroundColor: '#FFFFFF',
              color: '#09090B',
              boxSizing: 'border-box',
              padding: '24px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              fontFamily: 'inherit',
            }}
          >
            {/* 1. Header Branding */}
            <header className="flex items-center justify-between pb-3 border-b border-black/[0.08] shrink-0">
              <div className="flex items-center gap-3">
                <span className="font-display font-black text-xl tracking-tight text-[#09090B]">
                  uxio<span className="text-[#FE385B]">.</span>
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#FE385B] bg-[#FE385B]/10 px-2.5 py-1 rounded-lg font-bold border border-[#FE385B]/20">
                  {presentation.moduleTag || 'CREATOR LAB'}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-[#71717A]">
                <span className="font-semibold">{presentation.title}</span>
                <span className="font-bold text-[#FE385B] bg-black/[0.04] px-2.5 py-1 rounded-lg">
                  0{idx + 1} / 0{totalSlides}
                </span>
              </div>
            </header>

            {/* 2. Main Slide Canvas */}
            <div className="flex-1 min-h-0 flex flex-col justify-center py-2 overflow-hidden">
              <SlideRenderer slide={slide} theme="light" />
            </div>

            {/* 3. Footer Watermark */}
            <footer className="flex items-center justify-between pt-3 border-t border-black/[0.08] text-[11px] font-mono text-[#8E8E93] shrink-0">
              <span>
                © {new Date().getFullYear()} UXIO Academy Platform · Todos los derechos reservados. Material confidencial para estudiantes.
              </span>
              <span className="font-bold text-[#FE385B] tracking-wider">
                uxio.agency/academy
              </span>
            </footer>
          </div>
        ))}
      </div>
    );
  }
);

PresentationExportStage.displayName = 'PresentationExportStage';

export default PresentationExportStage;
