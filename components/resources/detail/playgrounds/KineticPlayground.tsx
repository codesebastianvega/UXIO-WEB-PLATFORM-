'use client';

import React from 'react';
import { Sliders, Sparkles, Sun, Moon, Play, Pause, MoveHorizontal } from 'lucide-react';
import KineticSnapSlider from '@/components/ui/KineticSnapSlider';
import { Locale } from '@/types';

export const KINETIC_PRESET_COLORS = [
  { name: 'Coral UXIO', hex: '#FE385B' },
  { name: 'Cian Neón', hex: '#00F0FF' },
  { name: 'Verde Matrix', hex: '#10B981' },
  { name: 'Púrpura IA', hex: '#7928CA' },
  { name: 'Ámbar Cálido', hex: '#FFCC48' },
  { name: 'Rosa Velvet', hex: '#EC4899' },
];

interface KineticPlaygroundProps {
  lang: Locale;
  accentColor: string;
  setAccentColor: (val: string) => void;
  activeScale: number;
  setActiveScale: (val: number) => void;
  gap: number;
  setGap: (val: number) => void;
  autoplay: boolean;
  setAutoplay: (val: boolean) => void;
  darkStage: boolean;
  setDarkStage: (val: boolean) => void;
}

export function KineticStage({
  accentColor,
  activeScale,
  gap,
  autoplay,
  darkStage,
}: {
  accentColor: string;
  activeScale: number;
  gap: number;
  autoplay: boolean;
  darkStage: boolean;
}) {
  return (
    <div
      className={`w-full h-[370px] sm:h-[400px] rounded-2xl border transition-all flex flex-col justify-between p-4 sm:p-6 relative overflow-hidden ${
        darkStage
          ? 'bg-[#0D0D0E] border-white/10 text-white'
          : 'bg-[#EDEDEB] dark:bg-[#0D0D0E] border-black/10 dark:border-white/10 text-[#111111] dark:text-white'
      }`}
    >
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between pb-2 border-b border-black/[0.06] dark:border-white/[0.06] font-mono text-[10px] text-[#8E8E93] relative z-10">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: accentColor }}
          />
          <span className="font-bold uppercase tracking-wider text-[#111111] dark:text-white">
            POINTER DRAG · INERTIAL SNAPPING
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MoveHorizontal size={12} className="text-[#00F0FF]" />
          <span>Scale: {activeScale}x · Gap: {gap}px</span>
        </div>
      </div>

      {/* Live Draggable Slider */}
      <div className="my-auto w-full flex items-center justify-center relative z-20">
        <KineticSnapSlider
          accentColor={accentColor}
          activeScale={activeScale}
          gap={gap}
          autoplay={autoplay}
        />
      </div>

      {/* Bottom Telemetry Note */}
      <div className="flex items-center justify-between font-mono text-[9.5px] text-[#8E8E93] pt-2 border-t border-black/[0.04] dark:border-white/[0.04] relative z-10">
        <span>Arrastra con el mouse o touch para probar el momentum</span>
        <span>Autoplay: {autoplay ? 'ON' : 'OFF'}</span>
      </div>
    </div>
  );
}

export function KineticControls({
  lang,
  accentColor,
  setAccentColor,
  activeScale,
  setActiveScale,
  gap,
  setGap,
  autoplay,
  setAutoplay,
  darkStage,
  setDarkStage,
}: KineticPlaygroundProps) {
  const isEs = lang === 'es';

  return (
    <div className="space-y-4">
      {/* 1. Accent Color & Swatches */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="font-mono text-[10px] text-[#8E8E93] uppercase">
            {isEs ? 'Color de Acento & Progreso:' : 'Accent & Progress Color:'}
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
          {KINETIC_PRESET_COLORS.map((swatch) => (
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

      {/* 2. Active Card Scale Zoom Slider */}
      <div className="space-y-1">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Escala de Tarjeta Central (Zoom):' : 'Active Card Scale:'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{activeScale}x</span>
        </div>
        <input
          type="range"
          min="1.0"
          max="1.15"
          step="0.01"
          value={activeScale}
          onChange={(e) => setActiveScale(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
        />
        <div className="flex justify-between font-mono text-[9px] text-[#8E8E93]">
          <span>Plano (1.0x)</span>
          <span>Equilibrado (1.08x)</span>
          <span>Profundo (1.15x)</span>
        </div>
      </div>

      {/* 3. Slide Gap Slider */}
      <div className="space-y-1">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Espaciado entre Slides (Gap):' : 'Slide Spacing (Gap):'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{gap}px</span>
        </div>
        <input
          type="range"
          min="12"
          max="32"
          step="2"
          value={gap}
          onChange={(e) => setGap(parseInt(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
        />
      </div>

      {/* 4. Toggles: Autoplay & Stage Theme */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <button
          type="button"
          onClick={() => setAutoplay(!autoplay)}
          className={`p-2.5 rounded-xl border text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            autoplay
              ? 'bg-[#FE385B]/10 border-[#FE385B] text-[#FE385B] font-bold'
              : 'bg-white/50 dark:bg-white/[0.03] border-black/5 dark:border-white/10 text-[#8E8E93]'
          }`}
        >
          {autoplay ? <Pause size={13} /> : <Play size={13} />}
          <span>{autoplay ? 'Autoplay ON' : 'Autoplay OFF'}</span>
        </button>

        <button
          type="button"
          onClick={() => setDarkStage(!darkStage)}
          className={`p-2.5 rounded-xl border text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            darkStage
              ? 'bg-black border-white/20 text-white font-bold'
              : 'bg-white border-black/10 text-[#111111]'
          }`}
        >
          {darkStage ? <Moon size={13} className="text-[#00F0FF]" /> : <Sun size={13} className="text-[#FF7F07]" />}
          <span>{darkStage ? 'Obsidian' : 'Light'}</span>
        </button>
      </div>
    </div>
  );
}
