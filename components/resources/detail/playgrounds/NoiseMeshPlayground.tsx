'use client';

import React from 'react';
import { Sliders, Sparkles, Eye, Activity } from 'lucide-react';
import NoiseMeshCanvas from '@/components/ui/NoiseMeshCanvas';
import { Locale } from '@/types';

export const NOISE_MESH_PRESETS = [
  {
    name: 'Obsidian Aurora',
    colors: ['#7928CA', '#00F0FF', '#FE385B'],
  },
  {
    name: 'Warm Sunset',
    colors: ['#FFCC48', '#FF7F07', '#FE385B'],
  },
  {
    name: 'Emerald Tech',
    colors: ['#10B981', '#00F0FF', '#059669'],
  },
  {
    name: 'Cyber Velvet',
    colors: ['#4338CA', '#EC4899', '#7928CA'],
  },
  {
    name: 'Neon Electric',
    colors: ['#00F0FF', '#FE385B', '#FFCC48'],
  },
];

interface NoiseMeshPlaygroundProps {
  lang: Locale;
  colors: string[];
  setColors: (val: string[]) => void;
  speed: number;
  setSpeed: (val: number) => void;
  noiseOpacity: number;
  setNoiseOpacity: (val: number) => void;
  blur: number;
  setBlur: (val: number) => void;
  mouseInfluence: number;
  setMouseInfluence: (val: number) => void;
}

export function NoiseMeshStage({
  lang,
  colors,
  speed,
  noiseOpacity,
  blur,
  mouseInfluence,
}: {
  lang: Locale;
  colors: string[];
  speed: number;
  noiseOpacity: number;
  blur: number;
  mouseInfluence: number;
}) {
  const isEs = lang === 'es';

  return (
    <div className="relative w-full h-[360px] sm:h-[400px] rounded-2xl overflow-hidden bg-[#0D0D0E] border border-white/10 shadow-2xl flex flex-col justify-between p-6">
      {/* Background Interactive Mesh Canvas */}
      <div className="absolute inset-0 z-0">
        <NoiseMeshCanvas
          colors={colors}
          speed={speed}
          noiseOpacity={noiseOpacity}
          blurIntensity={blur}
          mouseInfluence={mouseInfluence}
          className="w-full h-full"
        />
      </div>

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-white/80 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="font-bold">CANVAS 2D · PROCEDURAL MESH</span>
        </div>
        <span>60 FPS GPU · {colors.length} ORBS</span>
      </div>

      {/* Center Interactive Hint */}
      <div className="relative z-10 text-center my-auto pointer-events-none">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/50 backdrop-blur-lg border border-white/15 text-white shadow-xl">
          <Activity size={14} className="text-[#00F0FF] animate-pulse" />
          <span className="font-display font-semibold text-xs tracking-wide">
            {isEs ? 'Mueve el cursor para deformar la malla de luz' : 'Move cursor to deform light mesh'}
          </span>
        </div>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-white/70 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
        <span>Noise: {Math.round(noiseOpacity * 100)}% · Blur: {blur}px</span>
        <span>Speed: {speed}x · Reactivity: {Math.round(mouseInfluence * 100)}%</span>
      </div>
    </div>
  );
}

export function NoiseMeshControls({
  lang,
  colors,
  setColors,
  speed,
  setSpeed,
  noiseOpacity,
  setNoiseOpacity,
  blur,
  setBlur,
  mouseInfluence,
  setMouseInfluence,
}: NoiseMeshPlaygroundProps) {
  const isEs = lang === 'es';

  const updateColorAt = (idx: number, newHex: string) => {
    const updated = [...colors];
    updated[idx] = newHex;
    setColors(updated);
  };

  const isCurrentPreset = (presetColors: string[]) => {
    if (colors.length !== presetColors.length) return false;
    return colors.every((c, i) => c.toLowerCase() === presetColors[i].toLowerCase());
  };

  return (
    <div className="space-y-4">
      {/* 1. Theme Presets */}
      <div className="space-y-1.5">
        <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
          {isEs ? 'Presets de Malla UXIO:' : 'UXIO Mesh Presets:'}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
          {NOISE_MESH_PRESETS.map((preset) => {
            const active = isCurrentPreset(preset.colors);
            return (
              <button
                key={preset.name}
                type="button"
                onClick={() => setColors([...preset.colors])}
                className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-sans text-left transition-all flex items-center gap-2 cursor-pointer ${
                  active
                    ? 'border-[#FE385B] bg-[#FE385B]/10 font-bold text-[#111111] dark:text-white shadow-2xs'
                    : 'border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white hover:border-black/15 dark:hover:border-white/20'
                }`}
              >
                <div
                  className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${preset.colors[0]}, ${preset.colors[1]}, ${preset.colors[2]})`,
                  }}
                />
                <span className="truncate">{preset.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Custom Color Stops */}
      <div className="space-y-1.5">
        <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
          {isEs ? 'Colores de los Orbes (Malla):' : 'Orb Mesh Colors:'}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {colors.map((c, idx) => (
            <div
              key={idx}
              className="p-2 rounded-xl bg-white dark:bg-[#1A1A1D] border border-black/10 dark:border-white/10 flex items-center justify-between"
            >
              <span className="font-mono text-[9px] text-[#8E8E93]">0{idx + 1}</span>
              <input
                type="color"
                value={c}
                onChange={(e) => updateColorAt(idx, e.target.value)}
                className="w-6 h-6 rounded-lg cursor-pointer border-0 bg-transparent"
                title={`Color Orbe ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 3. Noise Opacity Slider */}
      <div className="space-y-1">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Grano / Ruido Procedural:' : 'Noise Density:'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{Math.round(noiseOpacity * 100)}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="0.30"
          step="0.02"
          value={noiseOpacity}
          onChange={(e) => setNoiseOpacity(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
        />
        <div className="flex justify-between font-mono text-[9px] text-[#8E8E93]">
          <span>Limpio (0%)</span>
          <span>Sutil (12%)</span>
          <span>Analógico (30%)</span>
        </div>
      </div>

      {/* 4. Blur Intensity Slider */}
      <div className="space-y-1">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Difuminado de Malla (Blur):' : 'Mesh Blur Intensity:'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{blur}px</span>
        </div>
        <input
          type="range"
          min="30"
          max="100"
          step="5"
          value={blur}
          onChange={(e) => setBlur(parseInt(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
        />
      </div>

      {/* 5. Speed & Mouse Reactivity */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        {/* Speed */}
        <div className="space-y-1">
          <div className="flex items-center justify-between font-mono text-[10px]">
            <span className="text-[#8E8E93]">{isEs ? 'Velocidad:' : 'Speed:'}</span>
            <span className="font-bold">{speed}x</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="2.5"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
          />
        </div>

        {/* Mouse Reactivity */}
        <div className="space-y-1">
          <div className="flex items-center justify-between font-mono text-[10px]">
            <span className="text-[#8E8E93]">{isEs ? 'Atracción Mouse:' : 'Mouse Drag:'}</span>
            <span className="font-bold">{Math.round(mouseInfluence * 100)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="1.0"
            step="0.05"
            value={mouseInfluence}
            onChange={(e) => setMouseInfluence(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
          />
        </div>
      </div>
    </div>
  );
}
