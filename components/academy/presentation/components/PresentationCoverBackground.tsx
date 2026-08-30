'use client';

import React from 'react';

interface PresentationCoverBackgroundProps {
  imageUrl?: string;
  isDark: boolean;
}

export default function PresentationCoverBackground({
  imageUrl,
  isDark,
}: PresentationCoverBackgroundProps) {
  if (!imageUrl) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
      <img
        src={imageUrl}
        alt="Deck Cover"
        className={`w-full h-full object-cover transition-all duration-700 ${
          isDark ? 'opacity-[0.22] scale-105' : 'opacity-[0.16] scale-105'
        }`}
      />
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-r from-[#09090B] via-[#09090B]/85 to-[#09090B]/30'
            : 'bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/90 to-[#FAFAFA]/30'
        }`}
      />
    </div>
  );
}
