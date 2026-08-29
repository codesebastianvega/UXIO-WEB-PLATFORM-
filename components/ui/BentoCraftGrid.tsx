'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Layers, 
  BarChart3, 
  Globe2 
} from 'lucide-react';

export interface BentoCraftGridProps {
  variant?: 'saas' | 'studio' | 'analytics';
  accentColor?: string;
  borderRadius?: number;
  gap?: number;
  hoverGlow?: boolean;
  className?: string;
}

/**
 * BentoCraftGrid - Premium Asymmetric Modular Bento Grid Layout.
 * Features reactive hover glow states, telemetry badges and responsive geometry.
 * 
 * Pro UI Primitive by UXIO Studio & Labs.
 * License: Commercial Pro
 */
export default function BentoCraftGrid({
  variant = 'saas',
  accentColor = '#FE385B',
  borderRadius = 20,
  gap = 12,
  hoverGlow = true,
  className = '',
}: BentoCraftGridProps) {
  const [activeChip, setActiveChip] = useState('Next.js 15');

  const cardStyle = {
    borderRadius: `${borderRadius}px`,
  };

  const getGlowClasses = (isHovered = false) => {
    if (!hoverGlow) return 'border border-black/[0.08] dark:border-white/[0.08]';
    return `border border-black/[0.08] dark:border-white/[0.08] transition-all duration-300 hover:border-[${accentColor}]/50 hover:shadow-lg`;
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 w-full h-full ${className}`}
      style={{ gap: `${gap}px` }}
    >
      {/* 1. Large Hero Feature Card (2 Columns) */}
      <div
        style={cardStyle}
        className={`md:col-span-2 p-5 sm:p-6 bg-white dark:bg-[#141416] flex flex-col justify-between relative overflow-hidden group shadow-soft-sm ${getGlowClasses()}`}
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute -right-12 -top-12 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
          style={{ backgroundColor: accentColor }}
        />

        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{ backgroundColor: accentColor }}
            />
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#8E8E93]">
              {variant === 'analytics' ? 'TELEMETRY PIPELINE' : 'CORE ENGINE // 01'}
            </span>
          </div>
          <div className="p-1.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-[#8E8E93] group-hover:text-[#111111] dark:group-hover:text-white transition-colors">
            <ArrowUpRight size={14} />
          </div>
        </div>

        <div className="space-y-1.5 my-4 relative z-10">
          <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white leading-tight">
            {variant === 'saas' && 'Procesamiento Reactivo en Tiempo Real'}
            {variant === 'studio' && 'Dirección de Arte & Arquitectura Líquida'}
            {variant === 'analytics' && 'Streaming Ingest & Anomaly Detection'}
          </h3>
          <p className="font-sans text-xs text-[#8E8E93] leading-relaxed line-clamp-2">
            {variant === 'saas' && 'Pipeline desacoplado con latencia sub-milisegundo y soporte para 120 FPS continuos.'}
            {variant === 'studio' && 'Diseño centrado en micro-interacciones no newtonianas y tipografía de precisión.'}
            {variant === 'analytics' && '99.99% de disponibilidad garantizada con balanceo dinámico de carga.'}
          </p>
        </div>

        {/* Interactive Chips Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 relative z-10">
          {['Next.js 15', 'React 19', 'Tailwind', 'Zero-Deps'].map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setActiveChip(chip)}
              className={`px-2.5 py-1 rounded-lg font-mono text-[9px] transition-all cursor-pointer ${
                activeChip === chip
                  ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-bold shadow-xs'
                  : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Speed / Performance Card (1 Column) */}
      <div
        style={cardStyle}
        className={`md:col-span-1 p-5 bg-white dark:bg-[#141416] flex flex-col justify-between shadow-soft-sm ${getGlowClasses()}`}
      >
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-[#111111] dark:text-white">
            <Zap size={14} style={{ color: accentColor }} />
          </div>
          <span className="font-mono text-[9px] text-[#10B981] font-bold bg-[#10B981]/10 px-2 py-0.5 rounded-md">
            99.9%
          </span>
        </div>

        <div className="space-y-1 my-2">
          <div className="font-display font-extrabold text-2xl text-[#111111] dark:text-white">
            120 <span className="text-xs font-mono text-[#8E8E93] font-normal">FPS</span>
          </div>
          <p className="font-mono text-[10px] text-[#8E8E93]">Hardware Accelerated</p>
        </div>

        {/* Mini Audio-like Frequency Meter */}
        <div className="flex items-end gap-1 h-6 pt-1">
          {[40, 75, 55, 90, 65, 100, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-full transition-all duration-500"
              style={{
                height: `${h}%`,
                backgroundColor: i === 5 ? accentColor : '#8E8E9340',
              }}
            />
          ))}
        </div>
      </div>

      {/* 3. Security / Global Edge Card (1 Column) */}
      <div
        style={cardStyle}
        className={`md:col-span-1 p-5 bg-white dark:bg-[#141416] flex flex-col justify-between shadow-soft-sm ${getGlowClasses()}`}
      >
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06]">
            <Globe2 size={14} className="text-[#00F0FF]" />
          </div>
          <span className="font-mono text-[9px] text-[#8E8E93]">Global Edge</span>
        </div>

        <div className="my-2 space-y-1">
          <div className="font-display font-bold text-sm text-[#111111] dark:text-white">
            32ms Latencia
          </div>
          <p className="font-sans text-[11px] text-[#8E8E93]">CDN Inteligente Multirregión</p>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#10B981]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          <span>Distribución Activa</span>
        </div>
      </div>

      {/* 4. Modular Stack / Ecosystem Card (2 Columns) */}
      <div
        style={cardStyle}
        className={`md:col-span-2 p-5 bg-white dark:bg-[#141416] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-soft-sm ${getGlowClasses()}`}
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Layers size={14} style={{ color: accentColor }} />
            <span className="font-display font-bold text-sm text-[#111111] dark:text-white">
              Arquitectura Modular Desacoplada
            </span>
          </div>
          <p className="font-sans text-xs text-[#8E8E93]">
            Componentes autónomos sin lock-in y con integración directa en Next.js.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0 font-mono text-[10px] text-[#8E8E93]">
          <span className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] font-bold text-[#111111] dark:text-white">
            0 Deps
          </span>
          <span className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08]">
            TypeScript
          </span>
        </div>
      </div>
    </div>
  );
}
