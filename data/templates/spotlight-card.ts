export const SPOTLIGHT_CARD_CODE = `'use client';

import React, { useRef, useState, useCallback } from 'react';

export interface AuroraSpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color?: string;
  spotlightRadius?: number;
  blurIntensity?: number;
  viscosity?: number;
  spotlightOpacity?: number;
  className?: string;
}

/**
 * FluidSpotlightCard - Dynamic mouse spotlight card with non-Newtonian fluid dynamics (LERP).
 * Open Source UI Component by UXIO Studio & Labs.
 */
export default function AuroraSpotlightCard({
  children,
  color = '#FE385B',
  spotlightRadius = 220,
  blurIntensity = 30,
  viscosity = 0.075,
  spotlightOpacity = 0.11,
  className = '',
  ...props
}: AuroraSpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  const animate = useCallback(() => {
    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * viscosity;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * viscosity;

    if (cardRef.current) {
      cardRef.current.style.setProperty('--mouse-x', \`\${currentPos.current.x.toFixed(2)}px\`);
      cardRef.current.style.setProperty('--mouse-y', \`\${currentPos.current.y.toFixed(2)}px\`);
    }

    const dx = targetPos.current.x - currentPos.current.x;
    const dy = targetPos.current.y - currentPos.current.y;
    if (Math.sqrt(dx * dx + dy * dy) > 0.1) {
      rafId.current = requestAnimationFrame(animate);
    } else {
      rafId.current = null;
    }
  }, [viscosity]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    targetPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (!rafId.current) rafId.current = requestAnimationFrame(animate);
  }, [animate]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={\`group/spotlight relative overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] p-6 transition-all duration-300 \${className}\`}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: \`radial-gradient(\${spotlightRadius}px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), \${color}\${Math.round(spotlightOpacity * 255).toString(16).padStart(2, '0')}, transparent 80%)\`,
          filter: blurIntensity > 0 ? \`blur(\${blurIntensity}px)\` : undefined,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}`;
