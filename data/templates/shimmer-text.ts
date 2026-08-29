export const SHIMMER_TEXT_CODE = `'use client';

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
 * ShimmerGradientText - Animated typography with luminescent sweep mask.
 * Open Source UI Component by UXIO Studio & Labs.
 * License: MIT
 */
export default function ShimmerGradientText({
  text = 'Experiencias de Alto Rendimiento',
  fromColor = '#7928CA',
  viaColor = '#00F0FF',
  toColor = '#FE385B',
  duration = 3.5,
  glow = false,
  fontSize,
  fontWeight = '800',
  className = '',
}: ShimmerGradientTextProps) {
  const weightClass = 
    fontWeight === '600' ? 'font-semibold' :
    fontWeight === '700' ? 'font-bold' :
    fontWeight === '900' ? 'font-black' : 'font-extrabold';

  return (
    <span
      className={\`relative inline-block font-display tracking-tight bg-clip-text text-transparent bg-[length:250%_100%] transition-all \${weightClass} \${className}\`}
      style={{
        backgroundImage: \`linear-gradient(90deg, \${fromColor} 0%, \${viaColor} 50%, \${toColor} 100%)\`,
        animation: \`shimmer \${duration}s infinite linear\`,
        fontSize: fontSize ? \`\${fontSize}px\` : undefined,
        filter: glow ? \`drop-shadow(0 0 16px \${viaColor}55) drop-shadow(0 0 32px \${toColor}35)\` : undefined,
      }}
    >
      {text}
    </span>
  );
}`;
