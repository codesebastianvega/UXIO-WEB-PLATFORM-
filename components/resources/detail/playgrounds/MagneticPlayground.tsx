'use client';

import React from 'react';
import { Pipette, Check } from 'lucide-react';
import MagneticPillButton from '@/components/ui/MagneticPillButton';
import { Locale } from '@/types';

interface MagneticPlaygroundProps {
  lang: Locale;
  text: string;
  setText: (val: string) => void;
  strength: number;
  setStrength: (val: number) => void;
  radius: number;
  setRadius: (val: number) => void;
  color: string;
  setColor: (val: string) => void;
  variant: 'obsidian' | 'glow' | 'glass';
  setVariant: (val: 'obsidian' | 'glow' | 'glass') => void;
  size: 'sm' | 'md' | 'lg';
  setSize: (val: 'sm' | 'md' | 'lg') => void;
  activeGlow: boolean;
  setActiveGlow: (val: boolean) => void;
  presetColors: Array<{ name: string; hex: string }>;
}

export function MagneticStage({
  lang,
  text,
  strength,
  radius,
  color,
  variant,
  size,
  activeGlow,
}: {
  lang: Locale;
  text: string;
  strength: number;
  radius: number;
  color: string;
  variant: 'obsidian' | 'glow' | 'glass';
  size: 'sm' | 'md' | 'lg';
  activeGlow: boolean;
}) {
  const isEs = lang === 'es';

  return (
    <div className="text-center space-y-4 py-8 relative w-full flex flex-col items-center">
      <p className="text-xs text-[#8E8E93] font-mono">
        {isEs ? 'Mueve el cursor cerca del botón para sentir el campo magnético:' : 'Move your cursor near the button to feel the magnetic field:'}
      </p>

      <div className="relative inline-flex items-center justify-center p-14 rounded-3xl border border-dashed border-black/10 dark:border-white/10 overflow-hidden w-full max-w-[420px] min-h-[220px]">
        {/* Visual Magnetic Field Proximity Ring */}
        <div
          className="absolute rounded-full border border-dashed pointer-events-none transition-all duration-300 opacity-30"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            borderColor: color,
          }}
        />

        <MagneticPillButton
          strength={strength}
          triggerRadius={radius}
          accentColor={color}
          variant={variant}
          size={size}
          activeGlow={activeGlow}
        >
          {text}
        </MagneticPillButton>
      </div>

      <p className="font-mono text-[10.5px] text-[#8E8E93]">
        {isEs ? `🧲 Campo activo en radio de ${radius}px · Atracción: ${strength}` : `🧲 Active magnetic field within ${radius}px radius · Strength: ${strength}`}
      </p>
    </div>
  );
}

export function MagneticControls({
  lang,
  text,
  setText,
  strength,
  setStrength,
  radius,
  setRadius,
  color,
  setColor,
  variant,
  setVariant,
  size,
  setSize,
  activeGlow,
  setActiveGlow,
  presetColors,
}: MagneticPlaygroundProps) {
  const isEs = lang === 'es';

  return (
    <div className="space-y-4">
      {/* Color Selector */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
            {isEs ? 'Color de Acento & Pulso:' : 'Accent & Pulse Color:'}
          </label>
          <span className="font-mono text-[10.5px] font-bold text-[#111111] dark:text-white uppercase">
            {color}
          </span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {presetColors.map((c) => (
            <button
              key={c.hex}
              type="button"
              onClick={() => setColor(c.hex)}
              className={`w-7 h-7 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                color.toLowerCase() === c.hex.toLowerCase()
                  ? 'ring-2 ring-black dark:ring-white scale-110 shadow-sm'
                  : 'opacity-80 hover:opacity-100 hover:scale-105'
              }`}
              style={{ backgroundColor: c.hex }}
            >
              {color.toLowerCase() === c.hex.toLowerCase() && (
                <Check size={12} className="text-white drop-shadow-sm" />
              )}
            </button>
          ))}
          <label
            title={isEs ? 'Seleccionar cualquier color' : 'Pick custom color'}
            className="relative w-7 h-7 rounded-xl border border-black/15 dark:border-white/20 flex items-center justify-center cursor-pointer overflow-hidden bg-gradient-to-tr from-rose-500 via-emerald-500 to-indigo-500 hover:scale-105 transition-transform"
          >
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
            />
            <Pipette size={12} className="text-white drop-shadow-md pointer-events-none" />
          </label>
        </div>
      </div>

      {/* Text Input */}
      <div className="space-y-1">
        <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
          {isEs ? 'Texto del Botón:' : 'Button Text:'}
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-1.5 rounded-xl bg-white dark:bg-[#1A1A1D] border border-black/10 dark:border-white/10 text-xs font-sans"
        />
      </div>

      {/* Strength Slider */}
      <div className="space-y-1.5">
        <div className="flex justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Fuerza de Atracción (Gravity):' : 'Magnet Strength:'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{strength}</span>
        </div>
        <input
          type="range"
          min="0.1"
          max="0.8"
          step="0.05"
          value={strength}
          onChange={(e) => setStrength(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
        />
        <div className="flex justify-between font-mono text-[9px] text-[#8E8E93] pt-0.5">
          <span>Suave (0.15)</span>
          <span>Equilibrado (0.35)</span>
          <span>Fuerte (0.70)</span>
        </div>
      </div>

      {/* Trigger Radius Slider */}
      <div className="space-y-1.5">
        <div className="flex justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Radio de Proximidad:' : 'Trigger Distance:'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{radius}px</span>
        </div>
        <input
          type="range"
          min="60"
          max="200"
          step="10"
          value={radius}
          onChange={(e) => setRadius(parseInt(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
        />
      </div>

      {/* Variant & Size */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        <div className="space-y-1">
          <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
            {isEs ? 'Variante:' : 'Variant:'}
          </label>
          <div className="flex rounded-xl bg-black/[0.04] dark:bg-white/[0.06] p-1 border border-black/[0.06] dark:border-white/[0.08] font-mono text-[10px]">
            {(['obsidian', 'glow', 'glass'] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVariant(v)}
                className={`flex-1 py-1 rounded-lg font-semibold capitalize transition-all ${
                  variant === v ? 'bg-white dark:bg-[#111] text-black dark:text-white shadow-2xs' : 'text-[#8E8E93]'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
            {isEs ? 'Tamaño:' : 'Size:'}
          </label>
          <div className="flex rounded-xl bg-black/[0.04] dark:bg-white/[0.06] p-1 border border-black/[0.06] dark:border-white/[0.08] font-mono text-[10px]">
            {(['sm', 'md', 'lg'] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`flex-1 py-1 rounded-lg font-bold uppercase transition-all ${
                  size === s ? 'bg-white dark:bg-[#111] text-black dark:text-white shadow-2xs' : 'text-[#8E8E93]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Glow Toggle */}
      <div className="space-y-1 pt-1">
        <div className="flex items-center justify-between">
          <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
            {isEs ? 'Resplandor / Glow de Fondo:' : 'Background Glow:'}
          </label>
          <button
            type="button"
            onClick={() => setActiveGlow(!activeGlow)}
            className={`py-1 px-3 rounded-lg border text-[10.5px] font-mono font-semibold transition-all ${
              activeGlow
                ? 'bg-[#10B981]/15 border-[#10B981]/30 text-[#10B981]'
                : 'bg-black/[0.04] dark:bg-white/[0.06] border-black/[0.06] dark:border-white/[0.08] text-[#8E8E93]'
            }`}
          >
            {activeGlow ? 'Activado' : 'Desactivado'}
          </button>
        </div>
      </div>
    </div>
  );
}
