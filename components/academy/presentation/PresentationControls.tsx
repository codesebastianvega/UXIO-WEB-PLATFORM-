'use client';

import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileDown,
  Loader2,
  X,
  Sun,
  Moon,
  Mic,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

interface PresentationControlsProps {
  currentIndex: number;
  totalSlides: number;
  isFullscreen: boolean;
  theme: 'light' | 'dark';
  isTeleprompterOpen?: boolean;
  isExporting?: boolean;
  isStatement?: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
  onToggleTheme: () => void;
  onToggleTeleprompter?: () => void;
  onOpenPopoutPresenter?: () => void;
  onPrint: () => void;
  exitHref?: string;
}

export default function PresentationControls({
  currentIndex,
  totalSlides,
  isFullscreen,
  theme,
  isTeleprompterOpen = false,
  isExporting = false,
  isStatement = false,
  onPrev,
  onNext,
  onToggleFullscreen,
  onToggleTheme,
  onToggleTeleprompter,
  onOpenPopoutPresenter,
  onPrint,
  exitHref,
}: PresentationControlsProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={`presentation-controls flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-2xl border shadow-xl backdrop-blur-2xl text-xs font-mono select-none transition-all ${
        isStatement
          ? 'bg-black/25 border-white/20 text-white shadow-[0_15px_40px_rgba(0,0,0,0.4)]'
          : isDark
          ? 'bg-[#121214]/85 border-white/[0.1] text-white shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
          : 'bg-white/90 border-black/[0.08] text-[#111111] shadow-[0_15px_40px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* 1. Slide Navigation Arrow Buttons */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          title="Anterior [←]"
          className={`p-2 rounded-xl border transition-all ${
            currentIndex === 0
              ? 'opacity-30 cursor-not-allowed border-transparent'
              : isStatement
              ? 'hover:bg-white/15 border-white/15 active:scale-95 text-white'
              : isDark
              ? 'hover:bg-white/10 border-white/[0.08] active:scale-95 text-white'
              : 'hover:bg-black/5 border-black/[0.06] active:scale-95 text-[#111111]'
          }`}
        >
          <ChevronLeft size={16} />
        </button>

        <span
          className={`font-mono text-xs px-2.5 py-1 rounded-lg border font-bold min-w-[58px] text-center ${
            isStatement
              ? 'bg-white/15 text-white border-white/20'
              : isDark
              ? 'bg-white/[0.04] text-white/90 border-white/[0.08]'
              : 'bg-black/[0.03] text-[#111111] border-black/[0.06]'
          }`}
        >
          {currentIndex + 1} / {totalSlides}
        </span>

        <button
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          title="Siguiente [→ / Espacio]"
          className={`p-2 rounded-xl transition-all shadow-sm ${
            currentIndex === totalSlides - 1
              ? 'opacity-30 cursor-not-allowed border-transparent bg-transparent'
              : 'bg-[#FE385B] text-white hover:bg-[#FE385B]/90 hover:shadow-[0_0_15px_rgba(254,56,91,0.5)] active:scale-95 cursor-pointer font-bold'
          }`}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className={`h-4 w-[1px] ${isStatement ? 'bg-white/20' : isDark ? 'bg-white/[0.1]' : 'bg-black/[0.1]'}`} />

      {/* 2. Extra Presenter Console Popout Button */}
      {onOpenPopoutPresenter && (
        <button
          onClick={onOpenPopoutPresenter}
          title="Abrir Consola de Presentador en 2da Pantalla"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#FE385B]/30 bg-[#FE385B]/10 hover:bg-[#FE385B]/20 text-[#FE385B] dark:text-[#FE385B] font-bold text-xs transition-all active:scale-95 shadow-xs"
        >
          <ExternalLink size={14} />
          <span className="hidden sm:inline">2da Pantalla</span>
        </button>
      )}

      {/* 3. In-Deck Teleprompter Sidebar Toggle */}
      {onToggleTeleprompter && (
        <button
          onClick={onToggleTeleprompter}
          title="Guion / Teleprompter [G]"
          className={`p-2 rounded-xl border transition-all ${
            isTeleprompterOpen
              ? 'bg-[#FE385B] text-white border-[#FE385B] shadow-sm'
              : isStatement
              ? 'hover:bg-white/15 border-white/15 text-white'
              : isDark
              ? 'hover:bg-white/10 border-white/[0.08] text-white/80'
              : 'hover:bg-black/5 border-black/[0.06] text-[#666666]'
          }`}
        >
          <Mic size={15} />
        </button>
      )}

      {/* 4. Fullscreen Button */}
      <button
        onClick={onToggleFullscreen}
        title="Pantalla Completa [F]"
        className={`p-2 rounded-xl border transition-all ${
          isStatement
            ? 'hover:bg-white/15 border-white/15 text-white'
            : isDark
            ? 'hover:bg-white/10 border-white/[0.08] text-white/80'
            : 'hover:bg-black/5 border-black/[0.06] text-[#666666]'
        }`}
      >
        {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
      </button>

      {/* 5. PDF Export Button */}
      <button
        onClick={onPrint}
        disabled={isExporting}
        title="Exportar PDF Vectorial 16:9 [P]"
        className={`p-2 rounded-xl border transition-all ${
          isExporting
            ? 'opacity-50 cursor-wait bg-[#FE385B]/10 border-[#FE385B]/20 text-[#FE385B]'
            : isStatement
            ? 'hover:bg-white/15 border-white/15 text-white'
            : isDark
            ? 'hover:bg-white/10 border-white/[0.08] text-white/80'
            : 'hover:bg-black/5 border-black/[0.06] text-[#666666]'
        }`}
      >
        {isExporting ? <Loader2 size={15} className="animate-spin" /> : <FileDown size={15} />}
      </button>

      {/* 6. Theme Toggle Button */}
      <button
        onClick={onToggleTheme}
        title="Alternar Tema Claro/Oscuro [T]"
        className={`p-2 rounded-xl border transition-all ${
          isStatement
            ? 'hover:bg-white/15 border-white/15 text-white'
            : isDark
            ? 'hover:bg-white/10 border-white/[0.08] text-white/80'
            : 'hover:bg-black/5 border-black/[0.06] text-[#666666]'
        }`}
      >
        {isDark ? <Sun size={15} /> : <Moon size={15} />}
      </button>

      {/* 7. Exit Button */}
      {exitHref && (
        <Link
          href={exitHref}
          title="Salir al Aula Virtual"
          className="p-2 rounded-xl border border-red-500/20 bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-all active:scale-95"
        >
          <X size={15} />
        </Link>
      )}
    </div>
  );
}
