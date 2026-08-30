'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FluidSpotlightGlowProps {
  x: number;
  y: number;
  theme: 'light' | 'dark';
}

export default function FluidSpotlightGlow({ x, y, theme }: FluidSpotlightGlowProps) {
  const isDark = theme === 'dark';

  // Physical state for gelatinous fluid LERP simulation
  const [pos, setPos] = useState({ x: x || 200, y: y || 200 });
  const [trailPos, setTrailPos] = useState({ x: x || 200, y: y || 200 });
  const [deformation, setDeformation] = useState({ scaleX: 1, scaleY: 1, angle: 0 });

  const targetRef = useRef({ x, y });
  targetRef.current = { x, y };

  const currentPosRef = useRef({ x: x || 200, y: y || 200 });
  const trailPosRef = useRef({ x: x || 200, y: y || 200 });
  const velocityRef = useRef({ vx: 0, vy: 0 });

  useEffect(() => {
    let animFrame: number;

    const updatePhysics = () => {
      const target = targetRef.current;
      const cur = currentPosRef.current;
      const trail = trailPosRef.current;

      // 1. Non-Newtonian Viscosity LERP with Elastic Spring
      const dx = target.x - cur.x;
      const dy = target.y - cur.y;

      const vx = dx * 0.12;
      const vy = dy * 0.12;
      velocityRef.current = { vx, vy };

      cur.x += vx;
      cur.y += vy;

      // 2. Trailing Jelly Droplet (higher viscosity / lag)
      const tdx = cur.x - trail.x;
      const tdy = cur.y - trail.y;
      trail.x += tdx * 0.07;
      trail.y += tdy * 0.07;

      // 3. Elastic Deformation (Gelatin stretch in motion direction)
      const speed = Math.sqrt(vx * vx + vy * vy);
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);
      const stretch = Math.min(1.35, 1 + speed * 0.015);
      const squash = Math.max(0.75, 1 - speed * 0.01);

      setPos({ x: cur.x, y: cur.y });
      setTrailPos({ x: trail.x, y: trail.y });
      setDeformation({ scaleX: stretch, scaleY: squash, angle });

      animFrame = requestAnimationFrame(updatePhysics);
    };

    animFrame = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0 overflow-hidden select-none">
      {/* 1. Ambient Background Viscous Field (Pure UXIO Coral & Sunset Warmth) */}
      <div
        className="absolute inset-0 transition-all duration-100 ease-out"
        style={{
          background: isDark
            ? `radial-gradient(320px circle at ${pos.x}px ${pos.y}px, rgba(254, 56, 91, 0.2) 0%, rgba(255, 127, 7, 0.12) 40%, rgba(255, 204, 72, 0.04) 70%, transparent 85%)`
            : `radial-gradient(320px circle at ${pos.x}px ${pos.y}px, rgba(254, 56, 91, 0.16) 0%, rgba(255, 127, 7, 0.1) 40%, rgba(255, 204, 72, 0.04) 70%, transparent 85%)`,
        }}
      />

      {/* 2. Trailing Jelly Droplet (Lagging Warm Amber Bubble) */}
      <div
        className="absolute w-28 h-28 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 127, 7, 0.38) 0%, rgba(255, 204, 72, 0.2) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 127, 7, 0.26) 0%, rgba(255, 204, 72, 0.14) 50%, transparent 100%)',
          filter: 'blur(22px)',
          opacity: 0.8,
        }}
      />

      {/* 3. Main Concentrated Gelatin Core (Pure UXIO Coral #FE385B Stretches with Motion) */}
      <div
        className="absolute w-36 h-36 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) rotate(${deformation.angle}deg) scale(${deformation.scaleX}, ${deformation.scaleY})`,
          background: isDark
            ? 'radial-gradient(circle, rgba(254, 56, 91, 0.5) 0%, rgba(255, 127, 7, 0.32) 45%, rgba(255, 204, 72, 0.15) 75%, transparent 100%)'
            : 'radial-gradient(circle, rgba(254, 56, 91, 0.38) 0%, rgba(255, 127, 7, 0.24) 45%, rgba(255, 204, 72, 0.1) 75%, transparent 100%)',
          filter: 'blur(20px)',
          mixBlendMode: isDark ? 'screen' : 'normal',
        }}
      />

      {/* 4. Magnetic Center Density Pulse (Coral Spotlight) */}
      <div
        className="absolute w-14 h-14 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          background: isDark
            ? 'radial-gradient(circle, rgba(254, 56, 91, 0.7) 0%, rgba(255, 127, 7, 0.4) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(254, 56, 91, 0.55) 0%, rgba(255, 127, 7, 0.3) 60%, transparent 100%)',
          filter: 'blur(10px)',
        }}
      />
    </div>
  );
}
