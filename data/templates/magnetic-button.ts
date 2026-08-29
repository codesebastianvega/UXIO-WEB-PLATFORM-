export const MAGNETIC_BUTTON_CODE = `'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';

export interface MagneticPillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  strength?: number;
  triggerRadius?: number;
  accentColor?: string;
  variant?: 'obsidian' | 'glow' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  activeGlow?: boolean;
  className?: string;
}

/**
 * MagneticPillButton - Physics-driven CTA button with proximity magnetism and 3D parallax.
 * Open Source UI Component by UXIO Studio & Labs.
 */
export default function MagneticPillButton({
  children = 'Lanzar Proyecto',
  strength = 0.35,
  triggerRadius = 120,
  accentColor = '#10B981',
  variant = 'obsidian',
  size = 'md',
  activeGlow = true,
  className = '',
  ...props
}: MagneticPillButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isNear, setIsNear] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.hypot(distX, distY);

    if (distance < triggerRadius) {
      setIsNear(true);
      const pullFactor = Math.pow(1 - distance / triggerRadius, 1.2);
      const pullX = distX * strength * pullFactor;
      const pullY = distY * strength * pullFactor;
      setPosition({ x: pullX, y: pullY });
    } else {
      setIsNear(false);
      setPosition({ x: 0, y: 0 });
    }
  }, [strength, triggerRadius]);

  const handleMouseLeaveGlobal = useCallback(() => {
    setIsNear(false);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeaveGlobal);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeaveGlobal);
    };
  }, [handleMouseMove, handleMouseLeaveGlobal]);

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  }[size];

  const variantStyles = {
    obsidian: 'bg-[#111111] dark:bg-white text-white dark:text-black border border-white/10 dark:border-black/10',
    glow: 'bg-white dark:bg-[#141416] text-[#111111] dark:text-white border border-black/10 dark:border-white/15',
    glass: 'bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl text-[#111111] dark:text-white border border-black/15 dark:border-white/20',
  }[variant];

  return (
    <div ref={containerRef} className="inline-flex items-center justify-center p-8 -m-8 relative">
      <button
        ref={buttonRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: \`translate3d(\${position.x}px, \${position.y}px, 0)\`,
          transition: isNear ? 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.65s cubic-bezier(0.25, 1.4, 0.5, 1)',
        }}
        className={\`relative inline-flex items-center justify-center rounded-full font-sans font-bold tracking-tight cursor-pointer select-none active:scale-95 shadow-md hover:shadow-xl transform-gpu \${sizeClasses} \${variantStyles} \${className}\`}
        {...props}
      >
        {activeGlow && (
          <span
            className="absolute inset-0 rounded-full blur-md -z-10 transition-opacity duration-300 pointer-events-none"
            style={{
              backgroundColor: accentColor,
              opacity: isHovered ? 0.35 : isNear ? 0.18 : 0,
            }}
          />
        )}

        <span
          className="inline-flex items-center gap-2 transform-gpu"
          style={{
            transform: \`translate3d(\${position.x * 0.22}px, \${position.y * 0.22}px, 0)\`,
            transition: isNear ? 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.65s cubic-bezier(0.25, 1.4, 0.5, 1)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse transition-transform"
            style={{
              backgroundColor: accentColor,
              boxShadow: isHovered ? \`0 0 10px \${accentColor}\` : undefined,
            }}
          />
          <span>{children}</span>
        </span>
      </button>
    </div>
  );
}`;
