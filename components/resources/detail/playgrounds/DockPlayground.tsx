'use client';

import React from 'react';
import { Sliders, Sparkles, Sun, Moon, Maximize2, Layers } from 'lucide-react';
import ObsidianDockNav from '@/components/ui/ObsidianDockNav';
import { Locale } from '@/types';

export const DOCK_PRESET_COLORS = [
  { name: 'Cian Neón', hex: '#00F0FF' },
  { name: 'Coral UXIO', hex: '#FE385B' },
  { name: 'Verde Matrix', hex: '#10B981' },
  { name: 'Púrpura IA', hex: '#7928CA' },
  { name: 'Ámbar Cálido', hex: '#FFCC48' },
  { name: 'Rosa Velvet', hex: '#EC4899' },
];

interface DockPlaygroundProps {
  lang: Locale;
  variant: 'obsidian' | 'glass' | 'frosted';
  setVariant: (val: 'obsidian' | 'glass' | 'frosted') => void;
  accentColor: string;
  setAccentColor: (val: string) => void;
  baseSize: number;
  setBaseSize: (val: number) => void;
  maxScale: number;
  setMaxScale: (val: number) => void;
  distance: number;
  setDistance: (val: number) => void;
  gap: number;
  setGap: (val: number) => void;
  showTooltips: boolean;
  setShowTooltips: (val: boolean) => void;
  showIndicators: boolean;
  setShowIndicators: (val: boolean) => void;
  darkStage: boolean;
  setDarkStage: (val: boolean) => void;
}

export function DockStage({
  variant,
  accentColor,
  baseSize,
  maxScale,
  distance,
  gap,
  showTooltips,
  showIndicators,
  darkStage,
}: {
  variant: 'obsidian' | 'glass' | 'frosted';
  accentColor: string;
  baseSize: number;
  maxScale: number;
  distance: number;
  gap: number;
  showTooltips: boolean;
  showIndicators: boolean;
  darkStage: boolean;
}) {
  return (
    <div
      className={`w-full h-[360px] sm:h-[390px] rounded-2xl border transition-all flex flex-col justify-between p-6 relative overflow-hidden ${
        darkStage
          ? 'bg-[#0D0D0E] border-white/10 text-white'
          : 'bg-[#EDEDEB] dark:bg-[#0D0D0E] border-black/10 dark:border-white/10 text-[#111111] dark:text-white'
      }`}
    >
      {/* Top Window Bar (macOS Dots + Telemetry) */}
      <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.06] font-mono text-[10px] text-[#8E8E93] relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <span className="ml-2 font-bold uppercase tracking-wider text-[#111111] dark:text-white">
            macOS Magnification Dock
          </span>
        </div>
        <span>Scale: {maxScale}x · Gap: {gap}px</span>
      </div>

      {/* Center Interactive Hint */}
      <div className="my-auto text-center pointer-events-none relative z-10">
        <span className="font-mono text-xs text-[#8E8E93] bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10">
          Pasa el cursor sobre los iconos para activar la magnificación fluida
        </span>
      </div>

      {/* Bottom Anchored Dock Container */}
      <div className="w-full flex items-center justify-center relative z-20 pb-1">
        <ObsidianDockNav
          variant={variant}
          accentColor={accentColor}
          baseSize={baseSize}
          maxScale={maxScale}
          distance={distance}
          gap={gap}
          showTooltips={showTooltips}
          showIndicators={showIndicators}
        />
      </div>
    </div>
  );
}

export function DockControls({
  lang,
  variant,
  setVariant,
  accentColor,
  setAccentColor,
  baseSize,
  setBaseSize,
  maxScale,
  setMaxScale,
  distance,
  setDistance,
  gap,
  setGap,
  showTooltips,
  setShowTooltips,
  showIndicators,
  setShowIndicators,
  darkStage,
  setDarkStage,
}: DockPlaygroundProps) {
  const isEs = lang === 'es';

  return (
    <div className="space-y-4">
      {/* 1. Surface Style Variant */}
      <div className="space-y-1.5">
        <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
          {isEs ? 'Estilo de Superficie / Acabado:' : 'Surface Style / Finish:'}
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {(
            [
              { id: 'obsidian', label: 'Obsidian' },
              { id: 'glass', label: 'Liquid Glass' },
              { id: 'frosted', label: 'Frosted Light' },
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
            {isEs ? 'Color de Acento & LED:' : 'Accent Color & LED:'}
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
          {DOCK_PRESET_COLORS.map((swatch) => (
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

      {/* 3. Max Magnification Slider */}
      <div className="space-y-1">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Magnificación Máxima (Escala):' : 'Max Magnification:'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{maxScale}x</span>
        </div>
        <input
          type="range"
          min="1.2"
          max="2.2"
          step="0.1"
          value={maxScale}
          onChange={(e) => setMaxScale(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
        />
        <div className="flex justify-between font-mono text-[9px] text-[#8E8E93]">
          <span>Sutil (1.3x)</span>
          <span>Equilibrado (1.8x)</span>
          <span>Pro macOS (2.2x)</span>
        </div>
      </div>

      {/* 4. Base Size & Gap in 2 Columns */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        {/* Base Size */}
        <div className="space-y-1">
          <div className="flex items-center justify-between font-mono text-[10px]">
            <span className="text-[#8E8E93]">{isEs ? 'Tamaño Base:' : 'Base Size:'}</span>
            <span className="font-bold">{baseSize}px</span>
          </div>
          <input
            type="range"
            min="36"
            max="54"
            step="2"
            value={baseSize}
            onChange={(e) => setBaseSize(parseInt(e.target.value))}
            className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
          />
        </div>

        {/* Gap */}
        <div className="space-y-1">
          <div className="flex items-center justify-between font-mono text-[10px]">
            <span className="text-[#8E8E93]">{isEs ? 'Espaciado (Gap):' : 'Icon Gap:'}</span>
            <span className="font-bold">{gap}px</span>
          </div>
          <input
            type="range"
            min="6"
            max="18"
            step="2"
            value={gap}
            onChange={(e) => setGap(parseInt(e.target.value))}
            className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
          />
        </div>
      </div>

      {/* 5. Toggles: Tooltips, Indicators & Stage Theme */}
      <div className="grid grid-cols-3 gap-1.5 pt-1">
        <button
          type="button"
          onClick={() => setShowTooltips(!showTooltips)}
          className={`p-2 rounded-xl border text-[10.5px] font-mono transition-all flex items-center justify-center gap-1 cursor-pointer ${
            showTooltips
              ? 'bg-[#FE385B]/10 border-[#FE385B] text-[#FE385B] font-bold'
              : 'bg-white/50 dark:bg-white/[0.03] border-black/5 dark:border-white/10 text-[#8E8E93]'
          }`}
        >
          <span>Tooltips</span>
        </button>

        <button
          type="button"
          onClick={() => setShowIndicators(!showIndicators)}
          className={`p-2 rounded-xl border text-[10.5px] font-mono transition-all flex items-center justify-center gap-1 cursor-pointer ${
            showIndicators
              ? 'bg-[#00F0FF]/10 border-[#00F0FF] text-[#00F0FF] font-bold'
              : 'bg-white/50 dark:bg-white/[0.03] border-black/5 dark:border-white/10 text-[#8E8E93]'
          }`}
        >
          <span>LED Apps</span>
        </button>

        <button
          type="button"
          onClick={() => setDarkStage(!darkStage)}
          className={`p-2 rounded-xl border text-[10.5px] font-mono transition-all flex items-center justify-center gap-1 cursor-pointer ${
            darkStage
              ? 'bg-black border-white/20 text-white font-bold'
              : 'bg-white border-black/10 text-[#111111]'
          }`}
        >
          {darkStage ? <Moon size={11} className="text-[#00F0FF]" /> : <Sun size={11} className="text-[#FF7F07]" />}
          <span>{darkStage ? 'Obsidian' : 'Light'}</span>
        </button>
      </div>
    </div>
  );
}
