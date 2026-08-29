import React from 'react';

interface PresentationHeaderProps {
  title: string;
  moduleTag: string;
  currentIndex: number;
  totalSlides: number;
}

export default function PresentationHeader({
  title,
  moduleTag,
  currentIndex,
  totalSlides,
}: PresentationHeaderProps) {
  return (
    <header className="w-full flex items-center justify-between p-4 sm:p-6 border-b border-white/[0.06] text-xs font-mono text-[#8E8E93] select-none">
      <div className="flex items-center gap-2 truncate">
        <span className="text-[#FE385B] font-bold">UXIO ACADEMY</span>
        <span className="text-white/20">/</span>
        <span className="text-white font-medium truncate">{title}</span>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <span className="hidden sm:inline-block text-[#8E8E93]">{moduleTag}</span>
        <span className="text-white/20 hidden sm:inline-block">/</span>
        <span className="font-bold text-white bg-white/[0.06] px-2.5 py-0.5 rounded-md">
          {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
      </div>
    </header>
  );
}
