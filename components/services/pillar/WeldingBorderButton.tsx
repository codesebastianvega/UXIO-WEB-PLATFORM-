'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface WeldingBorderButtonProps {
  href: string;
  label: string;
  accent?: string;
  className?: string;
}

export default function WeldingBorderButton({
  href,
  label,
  accent = '#FE385B',
  className = '',
}: WeldingBorderButtonProps) {
  return (
    <Link
      href={href}
      className={`relative p-[1.5px] rounded-xl overflow-hidden block w-full group/weld transition-all duration-300 hover:scale-[1.015] active:scale-[0.98] shadow-sm ${className}`}
    >
      {/* Infinite Rotating Welding Beam (Soldadura UXIO Eléctrica) */}
      <span
        className="absolute -inset-[250%] animate-[spin_4s_linear_infinite] group-hover/weld:animate-[spin_2s_linear_infinite] pointer-events-none opacity-90 group-hover/weld:opacity-100 transition-opacity"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, ${accent} 295deg, #FF7F07 315deg, #00F0FF 335deg, #FFFFFF 348deg, ${accent} 356deg, transparent 360deg)`,
        }}
      />

      {/* Inner Obsidian Button Body */}
      <span className="relative z-10 w-full py-2.5 px-3.5 rounded-[10.5px] bg-[#0E0E10] hover:bg-[#151518] text-white font-display font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors duration-200 shadow-inner">
        <span>{label}</span>
        <ArrowRight
          size={13}
          className="transition-transform duration-300 group-hover/weld:translate-x-1"
        />
      </span>

      {/* Subtle Electric Aura on Hover */}
      <span
        className="absolute inset-0 rounded-xl opacity-0 group-hover/weld:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 24px -2px ${accent}50`,
        }}
      />
    </Link>
  );
}
