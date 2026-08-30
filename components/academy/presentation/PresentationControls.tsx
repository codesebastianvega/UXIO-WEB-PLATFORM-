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
        isDark
          ? 'bg-[#121214]/85 border-white/[0.1] text-white shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
          : 'bg-white/90 border-black/[0.08] text-[#111111] shadow-[0_15px_40px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* Navigation Arrows & Counter */}
      <div className="flex items-center gap-1">
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
          <ChevronLeft size={15} />
        </button>

        <span className="px-2 font-bold min-w-[50px] text-center font-mono">
          {currentIndex + 1} / {totalSlides}
        </span>

        <button
          type="button"
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          aria-label="Siguiente diapositiva"
          className="p-2 rounded-xl bg-[#FE385B] text-white hover:bg-[#FE385B]/90 disabled:opacity-30 transition-all shadow-sm active:scale-95"
        >
          <ChevronRight size={15} />
        </button>
      </div>

      {/* Action Toolbar */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Multi-Screen Popout Teleprompter Button */}
        {onOpenPopoutPresenter && (
          <button
            type="button"
            onClick={onOpenPopoutPresenter}
            title="Abrir Teleprompter en Ventana Aparte para tu 2da Pantalla / Tablet"
            aria-label="Abrir Teleprompter en 2da Pantalla"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border font-mono text-[11px] font-bold transition-all active:scale-95 ${
              isDark
                ? 'bg-white/[0.06] hover:bg-[#FE385B] text-[#FE385B] hover:text-white border-white/[0.08]'
                : 'bg-black/[0.04] hover:bg-[#FE385B] text-[#FE385B] hover:text-white border-black/[0.06]'
            }`}
          >
            <ExternalLink size={13} />
            <span className="hidden sm:inline">2da Pantalla</span>
          </button>
        )}

        {/* Teleprompter In-Card Toggle */}
        {onToggleTeleprompter && (
          <button
            type="button"
            onClick={onToggleTeleprompter}
            title="Guion del Docente / Teleprompter [G]"
            aria-label="Alternar guion del docente"
            className={`p-2 rounded-xl border transition-all active:scale-95 ${
              isTeleprompterOpen
                ? 'bg-[#FE385B] text-white border-[#FE385B]'
                : isDark
                ? 'bg-white/[0.06] hover:bg-white/[0.12] border-white/[0.08] text-[#8E8E93]'
                : 'bg-black/[0.04] hover:bg-black/[0.08] border-black/[0.06] text-[#666666]'
            }`}
          >
            <Mic size={14} />
          </button>
        )}

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
          {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
        </button>

        {/* Direct 16:9 PDF Exporter Button */}
        <button
          type="button"
          onClick={onPrint}
          disabled={isExporting}
          title="Descargar PDF 16:9 Oficial con Marca UXIO (P)"
          aria-label="Descargar PDF 16:9"
          className={`p-2 rounded-xl border transition-all active:scale-95 disabled:opacity-50 ${
            isDark
              ? 'bg-white/[0.06] hover:bg-white/[0.12] border-white/[0.08] text-[#FFCC48]'
              : 'bg-black/[0.04] hover:bg-black/[0.08] border-black/[0.06] text-[#D97706]'
          }`}
        >
          {isExporting ? (
            <Loader2 size={14} className="animate-spin text-[#FE385B]" />
          ) : (
            <FileDown size={14} />
          )}
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
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </button>

        {exitHref && (
          <Link
            href={exitHref}
            title="Salir de la presentación (Esc)"
            aria-label="Salir"
            className="p-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 transition-all active:scale-95"
          >
            <X size={14} />
          </Link>
        )}
      </div>
    </div>
  );
}
