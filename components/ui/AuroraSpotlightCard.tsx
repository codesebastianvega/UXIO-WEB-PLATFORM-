'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';

export interface AuroraSpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Single spotlight radial color (e.g. '#FE385B') */
  color?: string;
  /** Primary color fallback if passed */
  primaryColor?: string;
  /** Size of the spotlight radius in px (default 220) */
  spotlightRadius?: number;
  /** Blur intensity in px (default 30) */
  blurIntensity?: number;
  /** Inner halo opacity factor between 0.03 (subtle) and 0.40 (vivid), default 0.11 */
  spotlightOpacity?: number;
  /** Fluid viscosity damping factor between 0.03 (thick syrup) and 0.2 (water) */
  viscosity?: number;
  className?: string;
}

/**
 * AuroraSpotlightCard - A high-performance, GPU-accelerated interactive spotlight card
 * with a single clean radial color, non-Newtonian fluid physical inertia, and border illumination.
 * 
 * Open Source UI Component by UXIO Studio & Labs.
 */
export default function AuroraSpotlightCard({
  children,
  color,
  primaryColor = '#FE385B',
  spotlightRadius = 220,
  blurIntensity = 30,
  spotlightOpacity = 0.11,
  viscosity = 0.075,
  className = '',
  ...props
}: AuroraSpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const activeColor = color || primaryColor;

  // Physical coordinates for viscous fluid motion (LERP damping)
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  // Viscous fluid physics loop (Inercia de fluido no newtoniano / viscous drag)
  const animate = useCallback(() => {
    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * viscosity;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * viscosity;

    if (cardRef.current) {
      cardRef.current.style.setProperty('--mouse-x', `${currentPos.current.x.toFixed(2)}px`);
      cardRef.current.style.setProperty('--mouse-y', `${currentPos.current.y.toFixed(2)}px`);
    }

    const dx = targetPos.current.x - currentPos.current.x;
    const dy = targetPos.current.y - currentPos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 0.1) {
      rafId.current = requestAnimationFrame(animate);
    } else {
      rafId.current = null;
    }
  }, [viscosity]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    targetPos.current.x = e.clientX - rect.left;
    targetPos.current.y = e.clientY - rect.top;

    if (!rafId.current) {
      rafId.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      targetPos.current = { x, y };
      currentPos.current = { x, y };
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group/aurora relative rounded-2xl p-[1px] transition-all duration-300 ${className}`}
      style={{
        ['--spotlight-color' as string]: activeColor,
      }}
      {...props}
    >
      {/* ========================================================= */}
      {/* 1. SPOTLIGHT BORDER GLOW (Un Solo Color Puro)             */}
      {/* ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500 will-change-transform"
        style={{
          opacity: isHovered ? 0.9 : 0,
          background: `radial-gradient(
            ${spotlightRadius * 0.85}px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
            var(--spotlight-color) 0%,
            transparent 75%
          )`,
        }}
        aria-hidden="true"
      />

      {/* Static Default Border */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] group-hover/aurora:border-transparent transition-colors duration-300" 
        aria-hidden="true" 
      />

      {/* ========================================================= */}
      {/* 2. INNER CARD CONTAINER (Fondo Limpio y Nítido)            */}
      {/* ========================================================= */}
      <div className="relative h-full w-full rounded-[15px] bg-[#F7F7F5] dark:bg-[#0D0D0E] transition-all duration-300 overflow-hidden flex flex-col justify-between">
        
        {/* ========================================================= */}
        {/* 3. UN SOLO COLOR RADIAL TENUE (11% Opacity Equilibrada)   */}
        {/* ========================================================= */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 will-change-transform"
          style={{
            opacity: isHovered ? spotlightOpacity : 0,
            filter: `blur(${blurIntensity}px)`,
            background: `
              radial-gradient(
                ${spotlightRadius}px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
                var(--spotlight-color) 0%,
                transparent 70%
              )
            `,
          }}
          aria-hidden="true"
        />

        {/* Card Content (100% High Contrast Crisp Typography) */}
        <div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-6 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
