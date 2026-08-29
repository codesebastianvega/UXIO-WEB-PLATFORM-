'use client';

import React from 'react';
import { Pipette, Check } from 'lucide-react';
import HoverLinkPreview from '@/components/ui/HoverLinkPreview';
import { Locale } from '@/types';

interface LinkPreviewPlaygroundProps {
  lang: Locale;
  title: string;
  setTitle: (val: string) => void;
  desc: string;
  setDesc: (val: string) => void;
  badge: string;
  setBadge: (val: string) => void;
  color: string;
  setColor: (val: string) => void;
  placement: 'top' | 'bottom';
  setPlacement: (val: 'top' | 'bottom') => void;
  cardWidth: number;
  setCardWidth: (val: number) => void;
  showImage: boolean;
  setShowImage: (val: boolean) => void;
  presetColors: Array<{ name: string; hex: string }>;
}

export function LinkPreviewStage({
  lang,
  title,
  desc,
  badge,
  color,
  placement,
  cardWidth,
  showImage,
}: {
  lang: Locale;
  title: string;
  desc: string;
  badge: string;
  color: string;
  placement: 'top' | 'bottom';
  cardWidth: number;
  showImage: boolean;
}) {
  const isEs = lang === 'es';
  return (
    <div className="text-center space-y-4 py-8">
      <p className="text-xs text-[#8E8E93] font-mono">
        {isEs ? 'Pasa el cursor sobre el enlace interactivo:' : 'Hover over the interactive link:'}
      </p>
      <div className="inline-block p-6 rounded-2xl bg-white dark:bg-[#141416] border border-black/[0.08] dark:border-white/[0.1] shadow-md">
        <HoverLinkPreview
          href={`/${lang}/resources/components/hover-link-preview`}
          title={title}
          description={desc}
          badge={badge}
          tag="// ANALYTICS CORE"
          accentColor={color}
          placement={placement}
          cardWidth={cardWidth}
          showImage={showImage}
          ctaText={isEs ? 'Explorar Demo ➔' : 'Explore Demo ➔'}
        >
          <span className="font-display font-bold text-lg text-[#111111] dark:text-white hover:text-[#FE385B] transition-colors">
            {title}
          </span>
        </HoverLinkPreview>
      </div>
      <p className="font-mono text-[10.5px] text-[#8E8E93]">
        {isEs ? '💡 Puedes mover el mouse directamente dentro de la tarjeta y hacer clic sin que se cierre.' : '💡 Move your cursor into the floating card to interact without it closing.'}
      </p>
    </div>
  );
}

export function LinkPreviewControls({
  lang,
  title,
  setTitle,
  desc,
  setDesc,
  badge,
  setBadge,
  color,
  setColor,
  placement,
  setPlacement,
  cardWidth,
  setCardWidth,
  showImage,
  setShowImage,
  presetColors,
}: LinkPreviewPlaygroundProps) {
  const isEs = lang === 'es';

  return (
    <div className="space-y-4">
      {/* Color Selector */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
            {isEs ? 'Color de Acento & Badge:' : 'Accent & Badge Color:'}
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

      {/* Text Inputs */}
      <div className="space-y-1">
        <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
          {isEs ? 'Título del Link:' : 'Link Title:'}
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-1.5 rounded-xl bg-white dark:bg-[#1A1A1D] border border-black/10 dark:border-white/10 text-xs font-sans"
        />
      </div>

      <div className="space-y-1">
        <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
          {isEs ? 'Texto del Badge:' : 'Badge Text:'}
        </label>
        <input
          type="text"
          value={badge}
          onChange={(e) => setBadge(e.target.value)}
          className="w-full px-3 py-1.5 rounded-xl bg-white dark:bg-[#1A1A1D] border border-black/10 dark:border-white/10 text-xs font-sans"
        />
      </div>

      <div className="space-y-1">
        <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
          {isEs ? 'Descripción Flotante:' : 'Floating Description:'}
        </label>
        <textarea
          rows={2}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full px-3 py-1.5 rounded-xl bg-white dark:bg-[#1A1A1D] border border-black/10 dark:border-white/10 text-xs font-sans resize-none"
        />
      </div>

      {/* Placement & Options */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        <div className="space-y-1">
          <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
            {isEs ? 'Posición:' : 'Placement:'}
          </label>
          <div className="flex rounded-xl bg-black/[0.04] dark:bg-white/[0.06] p-1 border border-black/[0.06] dark:border-white/[0.08] font-mono text-[10.5px]">
            <button
              type="button"
              onClick={() => setPlacement('top')}
              className={`flex-1 py-1 rounded-lg font-semibold transition-all ${
                placement === 'top' ? 'bg-white dark:bg-[#111] text-black dark:text-white shadow-2xs' : 'text-[#8E8E93]'
              }`}
            >
              Top
            </button>
            <button
              type="button"
              onClick={() => setPlacement('bottom')}
              className={`flex-1 py-1 rounded-lg font-semibold transition-all ${
                placement === 'bottom' ? 'bg-white dark:bg-[#111] text-black dark:text-white shadow-2xs' : 'text-[#8E8E93]'
              }`}
            >
              Bottom
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
            {isEs ? 'Mockup Imagen:' : 'Mockup Image:'}
          </label>
          <button
            type="button"
            onClick={() => setShowImage(!showImage)}
            className={`w-full py-1.5 px-2 rounded-xl border text-[10.5px] font-mono font-semibold transition-all ${
              showImage
                ? 'bg-[#00F0FF]/15 border-[#00F0FF]/30 text-[#008CA3] dark:text-[#00F0FF]'
                : 'bg-black/[0.04] dark:bg-white/[0.06] border-black/[0.06] dark:border-white/[0.08] text-[#8E8E93]'
            }`}
          >
            {showImage ? 'Activado' : 'Desactivado'}
          </button>
        </div>
      </div>

      {/* Card Width Slider */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-[#8E8E93]">{isEs ? 'Ancho de la Tarjeta:' : 'Card Width:'}</span>
          <span className="font-bold text-[#111111] dark:text-white">{cardWidth}px</span>
        </div>
        <input
          type="range"
          min="240"
          max="360"
          step="10"
          value={cardWidth}
          onChange={(e) => setCardWidth(parseInt(e.target.value))}
          className="w-full h-1.5 bg-black/[0.1] dark:bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#00F0FF]"
        />
      </div>
    </div>
  );
}
