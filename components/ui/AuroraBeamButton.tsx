'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface AuroraBeamButtonProps {
  href: string;
  label: string;
  accent?: string;
  className?: string;
  glowAlwaysActive?: boolean;
}

export default function AuroraBeamButton({
  href,
  label,
  accent = '#FE385B',
  className = '',
  glowAlwaysActive = true,
}: AuroraBeamButtonProps) {
  return (
    <Link
      href={href}
      className={`group relative block w-full select-none cursor-pointer transition-transform duration-300 hover:scale-[1.015] active:scale-[0.985] ${className}`}
    >
      {/* 1. Diffused Ambient Aura (Always Active, Soft Atmospheric Blur like Google / Gemini AI) */}
      <div
        className={`absolute -inset-1 rounded-2xl overflow-hidden pointer-events-none transition-all duration-500 blur-[8px] ${
          glowAlwaysActive
            ? 'opacity-65 group-hover:opacity-100 group-hover:blur-[12px]'
            : 'opacity-0 group-hover:opacity-100 group-hover:blur-[10px]'
        }`}
      >
        <div
          className="absolute -inset-[200%] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_2.5s_linear_infinite]"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 240deg, #FE385B 275deg, #FF7F07 305deg, #00F0FF 330deg, #FFFFFF 348deg, ${accent} 358deg, transparent 360deg)`,
          }}
        />
      </div>

      {/* 2. Perimeter Beam Conduit (1.5px Outer Frame with Electric Welding Spark) */}
      <div className="relative p-[1.5px] rounded-xl overflow-hidden w-full h-full">
        <div
          className="absolute -inset-[200%] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_2.5s_linear_infinite] pointer-events-none opacity-90 group-hover:opacity-100"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 250deg, #FE385B 280deg, #FF7F07 305deg, #00F0FF 330deg, #FFFFFF 348deg, ${accent} 358deg, transparent 360deg)`,
          }}
        />

        {/* 3. Obsidian Button Body -> Smoothly Transitions to UXIO Coral on Hover */}
        <div className="relative z-10 w-full py-2.5 px-3.5 rounded-[10.5px] bg-[#0E0E12] dark:bg-[#0A0A0E] group-hover:bg-[#FE385B] text-white font-display font-semibold text-xs flex items-center justify-center gap-1.5 transition-all duration-400 ease-out shadow-inner">
          <span className="tracking-tight">{label}</span>
          <ArrowRight
            size={13}
            className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
          />
        </div>
      </div>
    </Link>
  );
}
