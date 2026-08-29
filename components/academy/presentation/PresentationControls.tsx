'use client';

import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Printer,
  X,
  Sun,
  Moon,
} from 'lucide-react';
import Link from 'next/link';

interface PresentationControlsProps {
  currentIndex: number;
  totalSlides: number;
  isFullscreen: boolean;
  theme: 'light' | 'dark';
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
  onToggleTheme: () => void;
  onPrint: () => void;
  exitHref?: string;
}

export default function PresentationControls({
  currentIndex,
  totalSlides,
  isFullscreen,
  theme,
  onPrev,
  onNext,
  onToggleFullscreen,
  onToggleTheme,
  onPrint,
  exitHref,
}: PresentationControlsProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={`presentation-controls flex items-center justify-between gap-3 p-2.5 sm:p-3.5 rounded-2xl border shadow-xl backdrop-blur-2xl text-xs font-mono select-none transition-all ${
        isDark
          ? 'bg-[#121214]/80 border-white/[0.1] text-white shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
          : 'bg-white/85 border-black/[0.08] text-[#111111] shadow-[0_15px_40px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* Navigation Arrows & Counter */}
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={onPrev}
          disabled={currentIndex === 0}
          aria-label="Diapositiva anterior"
          className={`p-2 rounded-xl border transition-all active:scale-95 disabled:opacity-30 ${
            isDark
              ? 'bg-white/[0.06] hover:bg-white/[0.12] border-white/[0.08] text-white'
              : 'bg-black/[0.04] hover:bg-black/[0.08] border-black/[0.06] text-[#111111]'
          }`}
        >
          <ChevronLeft size={16} />
        </button>

        <span className="px-2.5 font-bold min-w-[55px] text-center font-mono">
          {currentIndex + 1} / {totalSlides}
        </span>

        <button
          type="button"
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          aria-label="Siguiente diapositiva"
          className="p-2 rounded-xl bg-[#FE385B] text-white hover:bg-[#FE385B]/90 disabled:opacity-30 transition-all shadow-sm active:scale-95"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Action Toolbar */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          type="button"
          onClick={onToggleFullscreen}
          title="Pantalla Completa (F)"
          aria-label="Pantalla Completa"
          className={`p-2 rounded-xl border transition-all active:scale-95 ${
            isDark
              ? 'bg-white/[0.06] hover:bg-white/[0.12] border-white/[0.08] text-[#10B981]'
              : 'bg-black/[0.04] hover:bg-black/[0.08] border-black/[0.06] text-[#059669]'
          }`}
        >
          {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
        </button>

        <button
          type="button"
          onClick={onPrint}
          title="Descargar / Imprimir PDF Estático (P)"
          aria-label="Descargar PDF"
          className={`p-2 rounded-xl border transition-all active:scale-95 ${
            isDark
              ? 'bg-white/[0.06] hover:bg-white/[0.12] border-white/[0.08] text-[#FFCC48]'
              : 'bg-black/[0.04] hover:bg-black/[0.08] border-black/[0.06] text-[#D97706]'
          }`}
        >
          <Printer size={15} />
        </button>

        <button
          type="button"
          onClick={onToggleTheme}
          title={isDark ? 'Modo Claro (T)' : 'Modo Oscuro (T)'}
          aria-label="Alternar tema"
          className={`p-2 rounded-xl border transition-all active:scale-95 ${
            isDark
              ? 'bg-white/[0.06] hover:bg-white/[0.12] border-white/[0.08] text-[#FFCC48]'
              : 'bg-black/[0.04] hover:bg-black/[0.08] border-black/[0.06] text-[#555555]'
          }`}
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        {exitHref && (
          <Link
            href={exitHref}
            title="Salir de la presentación (Esc)"
            aria-label="Salir de la presentación"
            className="p-2 rounded-xl bg-[#FE385B]/10 hover:bg-[#FE385B] text-[#FE385B] hover:text-white border border-[#FE385B]/25 transition-all active:scale-95"
          >
            <X size={15} />
          </Link>
        )}
      </div>
    </div>
  );
}
