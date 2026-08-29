import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Printer,
  X,
} from 'lucide-react';
import Link from 'next/link';

interface PresentationControlsProps {
  currentIndex: number;
  totalSlides: number;
  isFullscreen: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
  onPrint: () => void;
  exitHref?: string;
}

export default function PresentationControls({
  currentIndex,
  totalSlides,
  isFullscreen,
  onPrev,
  onNext,
  onToggleFullscreen,
  onPrint,
  exitHref,
}: PresentationControlsProps) {
  return (
    <div className="presentation-controls flex items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/[0.1] text-xs font-mono text-white shadow-2xl select-none">
      {/* Navigation Arrows */}
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={onPrev}
          disabled={currentIndex === 0}
          aria-label="Diapositiva anterior"
          className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.15] disabled:opacity-30 disabled:hover:bg-white/[0.06] transition-colors"
        >
          <ChevronLeft size={16} />
        </button>

        <span className="px-2 font-bold min-w-[50px] text-center">
          {currentIndex + 1} / {totalSlides}
        </span>

        <button
          type="button"
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          aria-label="Siguiente diapositiva"
          className="p-2 rounded-xl bg-[#FE385B] text-white hover:bg-[#FE385B]/90 disabled:opacity-30 disabled:hover:bg-[#FE385B] transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Action Buttons: Fullscreen, Print, Exit */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onToggleFullscreen}
          title="Pantalla Completa (F)"
          aria-label="Pantalla Completa"
          className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.15] text-[#00F0FF] transition-colors"
        >
          {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
        </button>

        <button
          type="button"
          onClick={onPrint}
          title="Imprimir / Exportar a PDF (P)"
          aria-label="Exportar PDF"
          className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.15] text-[#FFCC48] transition-colors"
        >
          <Printer size={15} />
        </button>

        {exitHref && (
          <Link
            href={exitHref}
            title="Salir de la presentación"
            aria-label="Salir de la presentación"
            className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.15] text-[#FE385B] transition-colors"
          >
            <X size={15} />
          </Link>
        )}
      </div>
    </div>
  );
}
