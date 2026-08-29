'use client';

import React from 'react';
import { Check, Pipette } from 'lucide-react';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';
import { Locale } from '@/types';

interface SpotlightPlaygroundProps {
  lang: Locale;
  color: string;
  setColor: (val: string) => void;
  radius: number;
  setRadius: (val: number) => void;
  viscosity: number;
  setViscosity: (val: number) => void;
  blur: number;
  setBlur: (val: number) => void;
  opacity: number;
  setOpacity: (val: number) => void;
  presetColors: Array<{ name: string; hex: string }>;
}

export function SpotlightStage({
  lang,
  color,
  radius,
  viscosity,
  blur,
  opacity,
}: {
  lang: Locale;
  color: string;
  radius: number;
  viscosity: number;
  blur: number;
  opacity: number;
}) {
  const isEs = lang === 'es';

  return (
    <AuroraSpotlightCard
      color={color}
      spotlightRadius={radius}
      blurIntensity={blur}
      spotlightOpacity={opacity}
      viscosity={viscosity}
      className="w-full max-w-[380px] shadow-lg"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10.5px] text-[#8E8E93] font-bold">
            [ PREVIEW LIVE ]
          </span>
          <span 
            className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: color }}
          />
        </div>

        <div>
          <h3 className="font-display font-bold text-lg text-[#111111] dark:text-white">
            {isEs ? 'Física Fluida No Newtoniana' : 'Non-Newtonian Fluid Dynamics'}
          </h3>
          <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed mt-1">
            {isEs
              ? 'El halo luminoso amortigua su velocidad según la viscosidad seleccionada, generando resistencia líquida orgánica.'
              : 'The glowing spotlight damps its velocity based on the selected viscosity, producing organic liquid resistance.'
            }
          </p>
        </div>

        <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#8E8E93]">Viscosity: {viscosity}</span>
          <span className="font-bold text-[#111111] dark:text-white">Radius: {radius}px</span>
        </div>
      </div>
    </AuroraSpotlightCard>
  );
}

export function SpotlightControls({
  lang,
  color,
  setColor,
  radius,
  setRadius,
  viscosity,
  setViscosity,
  blur,
  setBlur,
  opacity,
  setOpacity,
  presetColors,
}: SpotlightPlaygroundProps) {
  const isEs = lang === 'es';

  return (
    <div className="space-y-4">
      {/* Color Presets & Full Spectrum Picker */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
            {isEs ? 'Color del Halo & Borde:' : 'Spotlight & Border Color:'}
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
              title={c.name}
            >
              {color.toLowerCase() === c.hex.toLowerCase() && (
                <Check size={12} className="text-white drop-shadow-sm" />
              )}
            </button>
          ))}

          {/* Full Color Spectrum Custom Picker */}
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

      {/* Viscosity Slider */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Viscosidad (Inercia LERP):' : 'Viscosity (LERP Damping):'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{viscosity}</span>
        </div>
        <input
          type="range"
          min="0.03"
          max="0.2"
          step="0.005"
          value={viscosity}
          onChange={(e) => setViscosity(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
        />
        <div className="flex justify-between font-mono text-[9px] text-[#8E8E93]">
          <span>Miel (0.03)</span>
          <span>Equilibrado (0.075)</span>
          <span>Rápido (0.2)</span>
        </div>
      </div>

      {/* Radius Slider */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Radio del Halo:' : 'Spotlight Radius:'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{radius}px</span>
        </div>
        <input
          type="range"
          min="140"
          max="340"
          step="10"
          value={radius}
          onChange={(e) => setRadius(parseInt(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
        />
      </div>

      {/* Intensity / Opacity Slider */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Intensidad / Opacidad del Halo:' : 'Spotlight Intensity:'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{Math.round(opacity * 100)}%</span>
        </div>
        <input
          type="range"
          min="0.03"
          max="0.35"
          step="0.01"
          value={opacity}
          onChange={(e) => setOpacity(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
        />
        <div className="flex justify-between font-mono text-[9px] text-[#8E8E93]">
          <span>Sutil (3%)</span>
          <span>Equilibrado (12%)</span>
          <span>Brillante (35%)</span>
        </div>
      </div>

      {/* Blur Intensity Slider */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Desenfoque Gaussiano (Blur):' : 'Gaussian Blur:'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{blur}px</span>
        </div>
        <input
          type="range"
          min="15"
          max="60"
          step="5"
          value={blur}
          onChange={(e) => setBlur(parseInt(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#FE385B]"
        />
      </div>
    </div>
  );
}
