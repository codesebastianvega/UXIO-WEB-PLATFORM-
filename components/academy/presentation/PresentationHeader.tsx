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
  isStatement?: boolean;
}

export default function PresentationHeader({
  title,
  moduleTag,
  currentIndex,
  totalSlides,
  theme,
  onToggleTheme,
  exitHref,
  isStatement = false,
}: PresentationHeaderProps) {
  const isDark = theme === 'dark';

  return (
    <header
      className={`w-full flex items-center justify-between px-6 py-4 border-b transition-colors select-none z-20 backdrop-blur-xl ${
        isStatement
          ? 'bg-black/15 border-white/15 text-white/90'
          : isDark
          ? 'bg-[#0E0E10]/80 border-white/[0.08] text-[#8E8E93]'
          : 'bg-white/80 border-black/[0.06] text-[#666666]'
      }`}
    >
      {/* Left: UXIO Brand Logo & Breadcrumb */}
      <div className="flex items-center gap-3 min-w-0">
        <Link
          href={exitHref || '#'}
          className="flex items-center gap-2 group shrink-0"
          title="UXIO Creator Lab"
        >
          <span
            className={`font-display font-black text-base tracking-tighter group-hover:text-[#FE385B] transition-colors ${
              isStatement ? 'text-white' : isDark ? 'text-white' : 'text-[#111111]'
            }`}
          >
            uxio<span className={isStatement ? 'text-white' : 'text-[#FE385B]'}>.</span>
          </span>
          <span
            className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border ${
              isStatement
                ? 'bg-white/20 text-white border-white/30'
                : 'bg-[#FE385B]/10 text-[#FE385B] border-[#FE385B]/20'
            }`}
          >
            CREATOR LAB
          </span>
        </Link>

        <span className={isStatement ? 'text-white/30' : 'text-black/20 dark:text-white/20 hidden sm:inline'}>/</span>

        <span className={`font-mono text-xs hidden md:inline truncate ${isStatement ? 'text-white/80' : 'text-[#8E8E93]'}`}>
          {moduleTag}
        </span>

        <span className={isStatement ? 'text-white/30' : 'text-black/20 dark:text-white/20 hidden md:inline'}>/</span>

        <span
          className={`font-sans text-xs font-semibold truncate ${
            isStatement ? 'text-white' : isDark ? 'text-white' : 'text-[#111111]'
          }`}
        >
          {title}
        </span>
      </div>

      {/* Right: Quick Tools */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onToggleTheme}
          title="Alternar tema (T)"
          className={`p-2 rounded-xl border transition-all ${
            isStatement
              ? 'text-white bg-white/10 hover:bg-white/20 border-white/20'
              : isDark
              ? 'bg-white/[0.06] hover:bg-white/[0.1] text-white border-white/[0.08]'
              : 'bg-black/[0.04] hover:bg-black/[0.08] text-[#111111] border-black/[0.06]'
          }`}
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        <span
          className={`font-mono text-xs font-bold px-3 py-1.5 rounded-xl border ${
            isStatement
              ? 'bg-white/15 text-white border-white/25 shadow-sm'
              : isDark
              ? 'bg-white/[0.04] text-[#FE385B] border-white/[0.08]'
              : 'bg-black/[0.03] text-[#FE385B] border-black/[0.06]'
          }`}
        >
          {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
      </div>
    </header>
  );
}
