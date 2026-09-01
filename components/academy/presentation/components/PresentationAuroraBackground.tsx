'use client';

import React, { useMemo } from 'react';

interface PresentationAuroraBackgroundProps {
  bgColor?: string;
  auroraColors?: string[];
}

export default function PresentationAuroraBackground({
  bgColor = '#FE385B',
  auroraColors: propColors,
}: PresentationAuroraBackgroundProps) {
  const colors = useMemo(() => {
    if (propColors && propColors.length >= 2) return propColors;
    if (bgColor === '#FF7F07') return ['#FF7F07', '#FFAA44', '#E06600'];
    if (bgColor === '#09090B') return ['#09090B', '#1A1A2E', '#16213E'];
    if (bgColor === '#10B981') return ['#10B981', '#34D399', '#059669'];
    if (bgColor === '#7928CA') return ['#7928CA', '#A855F7', '#6D28D9'];
    return ['#FE385B', '#FF6B8A', '#E02050'];
  }, [propColors, bgColor]);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 transition-colors duration-500"
      style={{ backgroundColor: colors[0] }}
    >
      {/* 1. Large Atmospheric Aurora Orbs */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[110%] h-[110%] max-w-[900px] max-h-[900px] rounded-full blur-3xl opacity-80 animate-aurora-pulse"
        style={{
          background: `radial-gradient(circle, ${colors[1]} 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[110%] h-[110%] max-w-[950px] max-h-[950px] rounded-full blur-3xl opacity-70 animate-aurora-float"
        style={{
          background: `radial-gradient(circle, ${colors[2] || colors[0]} 0%, transparent 75%)`,
        }}
      />
      {/* 2. Seamless Full-Bleed Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
    </div>
  );
}
