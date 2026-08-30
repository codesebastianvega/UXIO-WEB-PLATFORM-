'use client';

import React from 'react';

interface PresentationFooterShortcutsProps {
  isDark: boolean;
}

export default function PresentationFooterShortcuts({ isDark }: PresentationFooterShortcutsProps) {
  return (
    <div
      className={`hidden sm:flex items-center gap-2 text-[11px] font-mono ${
        isDark ? 'text-[#8E8E93]' : 'text-[#71717A]'
      }`}
    >
      <span>[←/→: Navegar]</span>
      <span>·</span>
      <span>[G: Guion]</span>
      <span>·</span>
      <span>[F: Pantalla Completa]</span>
      <span>·</span>
      <span>[T: Tema]</span>
    </div>
  );
}
