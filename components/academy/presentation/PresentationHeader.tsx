'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import Link from 'next/link';

interface PresentationHeaderProps {
  title: string;
  moduleTag: string;
  currentIndex: number;
  totalSlides: number;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  exitHref?: string;
}

export default function PresentationHeader({
  title,
  moduleTag,
  currentIndex,
  totalSlides,
  theme,
  onToggleTheme,
  exitHref,
}: PresentationHeaderProps) {
  const isDark = theme === 'dark';

  return (
    <header
      className={`w-full flex items-center justify-between px-6 py-4 border-b transition-colors select-none z-20 ${
        isDark
          ? 'bg-[#0E0E10]/80 border-white/[0.08] text-[#8E8E93]'
          : 'bg-white/80 border-black/[0.06] text-[#666666]'
      } backdrop-blur-xl`}
    >
      {/* Left: UXIO Brand Logo & Breadcrumb */}
      <div className="flex items-center gap-3 min-w-0">
        <Link
          href={exitHref || '#'}
          className="flex items-center gap-2 group shrink-0"
          title="UXIO Creator Lab"
        >
          <span className="font-display font-black text-base tracking-tighter text-[#111111] dark:text-white group-hover:text-[#FE385B] transition-colors">
            uxio<span className="text-[#FE385B]">.</span>
          </span>
          <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FE385B]/10 text-[#FE385B] border border-[#FE385B]/20">
            CREATOR LAB
          </span>
        </Link>

        <span className="text-black/20 dark:text-white/20 hidden sm:inline">/</span>

        <span className="font-mono text-xs text-[#8E8E93] hidden md:inline truncate">
          {moduleTag}
        </span>

        <span className="text-black/20 dark:text-white/20 hidden md:inline">/</span>

        <span
          className={`font-sans text-xs font-semibold truncate ${
            isDark ? 'text-white' : 'text-[#111111]'
          }`}
        >
          {title}
        </span>
      </div>

      {/* Right: Theme Switcher & Slide Counter Badge */}
      <div className="flex items-center gap-2.5 shrink-0">
        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={onToggleTheme}
          title={isDark ? 'Cambiar a modo Claro (T)' : 'Cambiar a modo Oscuro (T)'}
          aria-label="Cambiar tema"
          className={`p-2 rounded-xl border transition-all active:scale-95 ${
            isDark
              ? 'bg-white/[0.06] hover:bg-white/[0.12] border-white/[0.1] text-[#FFCC48]'
              : 'bg-black/[0.04] hover:bg-black/[0.08] border-black/[0.06] text-[#555555]'
          }`}
        >
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </button>

        {/* Slide Counter Pill */}
        <div
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-mono text-xs font-bold ${
            isDark
              ? 'bg-white/[0.06] border-white/[0.1] text-white'
              : 'bg-black/[0.04] border-black/[0.08] text-[#111111]'
          }`}
        >
          <span className="text-[#FE385B]">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="opacity-40">/</span>
          <span>{String(totalSlides).padStart(2, '0')}</span>
        </div>
      </div>
    </header>
  );
}
