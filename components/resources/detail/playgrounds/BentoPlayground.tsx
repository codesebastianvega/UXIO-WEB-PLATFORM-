'use client';

import React from 'react';
import { Sliders, LayoutGrid, Sparkles, Sun, Moon } from 'lucide-react';
import BentoCraftGrid from '@/components/ui/BentoCraftGrid';
import { Locale } from '@/types';

export const BENTO_PRESET_COLORS = [
  { name: 'Coral UXIO', hex: '#FE385B' },
  { name: 'Cian Neón', hex: '#00F0FF' },
  { name: 'Verde Matrix', hex: '#10B981' },
  { name: 'Púrpura IA', hex: '#7928CA' },
  { name: 'Ámbar Cálido', hex: '#FFCC48' },
  { name: 'Rosa Velvet', hex: '#EC4899' },
];

interface BentoPlaygroundProps {
  lang: Locale;
  variant: 'saas' | 'studio' | 'analytics';
  setVariant: (val: 'saas' | 'studio' | 'analytics') => void;
  accentColor: string;
  setAccentColor: (val: string) => void;
  borderRadius: number;
  setBorderRadius: (val: number) => void;
  gap: number;
  setGap: (val: number) => void;
  hoverGlow: boolean;
  setHoverGlow: (val: boolean) => void;
  darkStage: boolean;
  setDarkStage: (val: boolean) => void;
}

export function BentoStage({
  variant,
  accentColor,
  borderRadius,
  gap,
  hoverGlow,
  darkStage,
}: {
  variant: 'saas' | 'studio' | 'analytics';
  accentColor: string;
  borderRadius: number;
  gap: number;
  hoverGlow: boolean;
  darkStage: boolean;
}) {
  return (
    <div
      className={`w-full p-4 sm:p-6 rounded-2xl border transition-all flex flex-col justify-between ${
        darkStage
          ? 'bg-[#0D0D0E] border-white/10 text-white'
          : 'bg-[#F2F2F0] dark:bg-[#0D0D0E] border-black/10 dark:border-white/10 text-[#111111] dark:text-white'
      }`}
    >
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06] dark:border-white/[0.06] font-mono text-[10px] text-[#8E8E93]">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: accentColor }}
          />
          <span className="font-bold uppercase tracking-wider text-[#111111] dark:text-white">
            Bento Grid // {variant.toUpperCase()} PRESET
          </span>
        </div>
        <span>Radius: {borderRadius}px · Gap: {gap}px</span>
      </div>

      {/* Live Bento Grid Container */}
      <div className="w-full">
        <BentoCraftGrid
          variant={variant}
          accentColor={accentColor}
          borderRadius={borderRadius}
          gap={gap}
          hoverGlow={hoverGlow}
        />
      </div>
    </div>
  );
}

export function BentoControls({
  lang,
  variant,
  setVariant,
  accentColor,
  setAccentColor,
  borderRadius,
  setBorderRadius,
  gap,
  setGap,
  hoverGlow,
  setHoverGlow,
  darkStage,
  setDarkStage,
}: BentoPlaygroundProps) {
  const isEs = lang === 'es';

  return (
    <div className="space-y-4">
      {/* 1. Layout Preset Selection */}
      <div className="space-y-1.5">
        <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
          {isEs ? 'Variante de Grilla / Contenido:' : 'Grid Variant / Content:'}
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {(
            [
              { id: 'saas', label: 'SaaS Feature' },
              { id: 'studio', label: 'Studio Tech' },
              { id: 'analytics', label: 'Analytics' },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setVariant(t.id)}
              className={`py-1.5 px-2 rounded-xl border text-[11px] font-sans text-center transition-all cursor-pointer ${
                variant === t.id
                  ? 'border-[#FE385B] bg-[#FE385B]/10 font-bold text-[#111111] dark:text-white shadow-2xs'
                  : 'border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Color Swatches & Pipette */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="font-mono text-[10px] text-[#8E8E93] uppercase">
            {isEs ? 'Color de Acento & Glow:' : 'Accent Color & Glow:'}
          </label>
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#8E8E93]">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: accentColor }}
            />
            <code>{accentColor}</code>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {BENTO_PRESET_COLORS.map((swatch) => (
            <button
              key={swatch.name}
              type="button"
              onClick={() => setAccentColor(swatch.hex)}
              className={`w-7 h-7 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-center ${
                accentColor.toLowerCase() === swatch.hex.toLowerCase()
                  ? 'border-white dark:border-white scale-110 shadow-md'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
              style={{ backgroundColor: swatch.hex }}
              title={swatch.name}
            />
          ))}

          {/* Color Pipette */}
          <div className="relative flex items-center">
            <input
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="w-7 h-7 rounded-xl border-0 cursor-pointer bg-transparent"
              title="Selector Libre"
            />
          </div>
        </div>
      </div>

      {/* 3. Border Radius Slider */}
      <div className="space-y-1">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Radio de Bordes (Border Radius):' : 'Corner Radius:'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{borderRadius}px</span>
        </div>
        <input
          type="range"
          min="10"
          max="32"
          step="2"
          value={borderRadius}
          onChange={(e) => setBorderRadius?.(parseInt(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
        />
        <div className="flex justify-between font-mono text-[9px] text-[#8E8E93]">
          <span>Recto (10px)</span>
          <span>Equilibrado (20px)</span>
          <span>Apple Curve (32px)</span>
        </div>
      </div>

      {/* 4. Gap / Espaciado Slider */}
      <div className="space-y-1">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Espaciado entre Celdas (Gap):' : 'Cell Spacing (Gap):'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{gap}px</span>
        </div>
        <input
          type="range"
          min="8"
          max="24"
          step="2"
          value={gap}
          onChange={(e) => setGap?.(parseInt(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
        />
      </div>

      {/* 5. Toggles: Hover Glow & Stage Theme */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <button
          type="button"
          onClick={() => setHoverGlow(!hoverGlow)}
          className={`p-2 rounded-xl border text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            hoverGlow
              ? 'bg-[#FE385B]/10 border-[#FE385B] text-[#FE385B] font-bold'
              : 'bg-white/50 dark:bg-white/[0.03] border-black/5 dark:border-white/10 text-[#8E8E93]'
          }`}
        >
          <Sparkles size={13} />
          <span>{hoverGlow ? 'Glow Activo' : 'Sin Glow'}</span>
        </button>

        <button
          type="button"
          onClick={() => setDarkStage(!darkStage)}
          className={`p-2 rounded-xl border text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            darkStage
              ? 'bg-black border-white/20 text-white font-bold'
              : 'bg-white border-black/10 text-[#111111]'
          }`}
        >
          {darkStage ? <Moon size={13} className="text-[#00F0FF]" /> : <Sun size={13} className="text-[#FF7F07]" />}
          <span>{darkStage ? 'Obsidian' : 'Light Stage'}</span>
        </button>
      </div>
    </div>
  );
}
