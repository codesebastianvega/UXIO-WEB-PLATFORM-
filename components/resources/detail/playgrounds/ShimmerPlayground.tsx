'use client';

import React from 'react';
import { Pipette, Sparkles, Moon, Sun, Sliders } from 'lucide-react';
import ShimmerGradientText from '@/components/ui/ShimmerGradientText';
import { Locale } from '@/types';

export const SHIMMER_PRESETS = [
  {
    name: 'Aurora UXIO',
    colors: ['#7928CA', '#00F0FF', '#FE385B'],
  },
  {
    name: 'Cyber Sunset',
    colors: ['#FE385B', '#FF7F07', '#FFCC48'],
  },
  {
    name: 'Neon Matrix',
    colors: ['#00F0FF', '#10B981', '#00F0FF'],
  },
  {
    name: 'Electric Gold',
    colors: ['#FF7F07', '#FFCC48', '#FFFFFF'],
  },
  {
    name: 'Deep Space',
    colors: ['#4338CA', '#7928CA', '#EC4899'],
  },
];

interface ShimmerPlaygroundProps {
  lang: Locale;
  text: string;
  setText: (val: string) => void;
  color1: string;
  setColor1: (val: string) => void;
  color2: string;
  setColor2: (val: string) => void;
  color3: string;
  setColor3: (val: string) => void;
  duration: number;
  setDuration: (val: number) => void;
  fontSize: number;
  setFontSize: (val: number) => void;
  fontWeight: '600' | '700' | '800' | '900';
  setFontWeight: (val: '600' | '700' | '800' | '900') => void;
  glow: boolean;
  setGlow: (val: boolean) => void;
  darkStage: boolean;
  setDarkStage: (val: boolean) => void;
}

export function ShimmerStage({
  text,
  color1,
  color2,
  color3,
  duration,
  fontSize,
  fontWeight,
  glow,
  darkStage,
}: {
  text: string;
  color1: string;
  color2: string;
  color3: string;
  duration: number;
  fontSize: number;
  fontWeight: '600' | '700' | '800' | '900';
  glow: boolean;
  darkStage: boolean;
}) {
  return (
    <div className={`w-full h-full min-h-[300px] flex flex-col justify-between p-6 sm:p-8 rounded-2xl transition-colors duration-300 relative overflow-hidden ${
      darkStage ? 'bg-[#0D0D0E] text-white border border-white/10' : 'bg-[#F7F7F5] text-black border border-black/5'
    }`}>
      {/* Top Stage Badges */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[#8E8E93] z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color2 }} />
          <span>GPU SHIMMER RUNNING</span>
        </span>
        <span>{duration}s · {fontSize}px</span>
      </div>

      {/* Centerpiece Text Rendering */}
      <div className="my-auto py-6 text-center flex items-center justify-center min-h-[140px]">
        <ShimmerGradientText
          text={text || 'Shimmer Typography'}
          fromColor={color1}
          viaColor={color2}
          toColor={color3}
          duration={duration}
          fontSize={fontSize}
          fontWeight={fontWeight}
          glow={glow}
          className="max-w-xl leading-tight select-none"
        />
      </div>

      {/* Bottom Telemetry Info */}
      <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[10.5px] font-mono text-[#8E8E93] z-10">
        <span>Stops: [{color1}, {color2}, {color3}]</span>
        <span>Glow: {glow ? 'Active' : 'Off'}</span>
      </div>
    </div>
  );
}

export function ShimmerControls({
  lang,
  text,
  setText,
  color1,
  setColor1,
  color2,
  setColor2,
  color3,
  setColor3,
  duration,
  setDuration,
  fontSize,
  setFontSize,
  fontWeight,
  setFontWeight,
  glow,
  setGlow,
  darkStage,
  setDarkStage,
}: ShimmerPlaygroundProps) {
  const isEs = lang === 'es';

  const applyPreset = (presetColors: string[]) => {
    setColor1(presetColors[0]);
    setColor2(presetColors[1]);
    setColor3(presetColors[2]);
  };

  const isCurrentPreset = (presetColors: string[]) => {
    return (
      color1.toLowerCase() === presetColors[0].toLowerCase() &&
      color2.toLowerCase() === presetColors[1].toLowerCase() &&
      color3.toLowerCase() === presetColors[2].toLowerCase()
    );
  };

  return (
    <div className="space-y-4">
      {/* 1. Text Input */}
      <div className="space-y-1">
        <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
          {isEs ? 'Texto en Pantalla:' : 'Display Text:'}
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe tu texto..."
          className="w-full px-3 py-1.5 rounded-xl bg-white dark:bg-[#1A1A1D] border border-black/10 dark:border-white/10 text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
        />
      </div>

      {/* 2. Gradient Presets */}
      <div className="space-y-1.5">
        <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
          {isEs ? 'Presets de Gradiente UXIO:' : 'UXIO Gradient Presets:'}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
          {SHIMMER_PRESETS.map((preset) => {
            const active = isCurrentPreset(preset.colors);
            return (
              <button
                key={preset.name}
                type="button"
                onClick={() => applyPreset(preset.colors)}
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

      {/* 3. Three Individual Color Stops with Pipette */}
      <div className="space-y-1.5">
        <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
          {isEs ? 'Paradas Cromáticas (Inicio · Medio · Fin):' : 'Color Stops (Start · Mid · End):'}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {/* Stop 1 */}
          <div className="p-2 rounded-xl bg-white dark:bg-[#1A1A1D] border border-black/10 dark:border-white/10 flex items-center justify-between">
            <span className="font-mono text-[9px] text-[#8E8E93]">01</span>
            <input
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="w-6 h-6 rounded-lg cursor-pointer border-0 bg-transparent"
              title="Color 1 (Inicio)"
            />
          </div>
          {/* Stop 2 */}
          <div className="p-2 rounded-xl bg-white dark:bg-[#1A1A1D] border border-black/10 dark:border-white/10 flex items-center justify-between">
            <span className="font-mono text-[9px] text-[#8E8E93]">02</span>
            <input
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              className="w-6 h-6 rounded-lg cursor-pointer border-0 bg-transparent"
              title="Color 2 (Medio)"
            />
          </div>
          {/* Stop 3 */}
          <div className="p-2 rounded-xl bg-white dark:bg-[#1A1A1D] border border-black/10 dark:border-white/10 flex items-center justify-between">
            <span className="font-mono text-[9px] text-[#8E8E93]">03</span>
            <input
              type="color"
              value={color3}
              onChange={(e) => setColor3(e.target.value)}
              className="w-6 h-6 rounded-lg cursor-pointer border-0 bg-transparent"
              title="Color 3 (Fin)"
            />
          </div>
        </div>
      </div>

      {/* 4. Speed / Duration Slider */}
      <div className="space-y-1">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Velocidad de Animación:' : 'Animation Duration:'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{duration}s</span>
        </div>
        <input
          type="range"
          min="1.5"
          max="7.0"
          step="0.5"
          value={duration}
          onChange={(e) => setDuration(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
        />
        <div className="flex justify-between font-mono text-[9px] text-[#8E8E93]">
          <span>Rápido (1.5s)</span>
          <span>Equilibrado (3.5s)</span>
          <span>Suave (7.0s)</span>
        </div>
      </div>

      {/* 5. Typography Scale Slider & Weight Selector */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        {/* Font Size */}
        <div className="space-y-1">
          <div className="flex items-center justify-between font-mono text-[10px]">
            <span className="text-[#8E8E93]">{isEs ? 'Tamaño:' : 'Font Size:'}</span>
            <span className="font-bold">{fontSize}px</span>
          </div>
          <input
            type="range"
            min="20"
            max="52"
            step="2"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
            className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
          />
        </div>

        {/* Font Weight */}
        <div className="space-y-1">
          <span className="font-mono text-[10px] text-[#8E8E93] block">{isEs ? 'Grosor:' : 'Weight:'}</span>
          <div className="grid grid-cols-3 gap-1">
            {(['600', '800', '900'] as const).map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => setFontWeight(w)}
                className={`py-1 rounded-lg font-mono text-[10px] transition-all cursor-pointer ${
                  fontWeight === w
                    ? 'bg-[#FE385B] text-white font-bold shadow-2xs'
                    : 'bg-white dark:bg-[#1A1A1D] border border-black/10 dark:border-white/10 text-[#8E8E93]'
                }`}
              >
                {w === '600' ? 'Semi' : w === '800' ? 'Extra' : 'Black'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Ambient Glow & Dark Stage Toggles */}
      <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-3">
        {/* Glow Toggle */}
        <button
          type="button"
          onClick={() => setGlow(!glow)}
          className={`flex-1 py-1.5 px-3 rounded-xl border text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            glow
              ? 'bg-[#00F0FF]/15 border-[#00F0FF]/40 text-[#008CA3] dark:text-[#00F0FF] font-bold'
              : 'bg-white dark:bg-[#1A1A1D] border-black/10 dark:border-white/10 text-[#8E8E93]'
          }`}
        >
          <Sparkles size={13} />
          <span>Glow: {glow ? 'ON' : 'OFF'}</span>
        </button>

        {/* Stage Theme Toggle */}
        <button
          type="button"
          onClick={() => setDarkStage(!darkStage)}
          className="p-2 rounded-xl bg-white dark:bg-[#1A1A1D] border border-black/10 dark:border-white/10 text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors cursor-pointer"
          title={isEs ? 'Alternar fondo de prueba claro / oscuro' : 'Toggle light/dark test background'}
        >
          {darkStage ? <Sun size={14} className="text-[#FFCC48]" /> : <Moon size={14} />}
        </button>
      </div>
    </div>
  );
}
