'use client';

import React from 'react';

export interface ShimmerGradientTextProps {
  text?: string;
  className?: string;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
  duration?: number;
  glow?: boolean;
  fontSize?: number;
  fontWeight?: '600' | '700' | '800' | '900';
}

/**
 * ShimmerGradientText - A modern text component with an animated
 * luminescent gradient shimmer mask and optional ambient glow.
 * 
 * Open Source UI Component by UXIO Studio & Labs.
 * License: MIT
 */
export default function ShimmerGradientText({
  text = 'Shimmer Typography',
  className = '',
  fromColor = '#7928CA',
  viaColor = '#00F0FF',
  toColor = '#FE385B',
  duration = 3.5,
  glow = false,
  fontSize,
  fontWeight = '800',
}: ShimmerGradientTextProps) {
  const weightClass = 
    fontWeight === '600' ? 'font-semibold' :
    fontWeight === '700' ? 'font-bold' :
    fontWeight === '900' ? 'font-black' : 'font-extrabold';

  return (
    <span
      className={`relative inline-block font-display tracking-tight bg-clip-text text-transparent transition-all ${weightClass} ${className}`}
      style={{
        backgroundImage: `linear-gradient(
          110deg,
          ${fromColor} 0%,
          ${fromColor} 20%,
          ${viaColor} 40%,
          #FFFFFF 50%,
          ${viaColor} 60%,
          ${toColor} 80%,
          ${fromColor} 100%
        )`,
        backgroundSize: '200% 100%',
        animation: `shimmerPass ${duration}s linear infinite`,
        fontSize: fontSize ? `${fontSize}px` : undefined,
        filter: glow ? `drop-shadow(0 0 16px ${viaColor}80) drop-shadow(0 0 32px ${toColor}50)` : undefined,
      }}
    >
      {text}
    </span>
  );
}
