'use client';

import React from 'react';
import { PlatformGroup } from '@/data/services';
import { Locale } from '@/types';

interface DrawerPlatformTabsProps {
  platforms: PlatformGroup[];
  selectedPlatformId: string;
  onSelectPlatform: (id: string) => void;
  lang: Locale;
}

export default function DrawerPlatformTabs({
  platforms,
  selectedPlatformId,
  onSelectPlatform,
  lang,
}: DrawerPlatformTabsProps) {
  const isEs = lang === 'es';
  const currentPlatform = platforms.find((p) => p.id === selectedPlatformId) || platforms[0];

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase text-[#8E8E93] tracking-wider">
        <span>{isEs ? '// SELECCIONA TU PLATAFORMA / SOLUCIÓN:' : '// SELECT YOUR PLATFORM / SOLUTION:'}</span>
        <span className="text-[#0284C7] dark:text-[#00F0FF] font-semibold">
          {platforms.length} {isEs ? 'Opciones' : 'Options'}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08]">
        {platforms.map((plat) => {
          const isPlatActive = selectedPlatformId === plat.id;
          return (
            <button
              key={plat.id}
              type="button"
              onClick={() => onSelectPlatform(plat.id)}
              className={`
                py-2.5 px-1.5 rounded-xl font-display text-[11.5px] font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer text-center
                ${isPlatActive
                  ? 'bg-white dark:bg-[#1A1A1D] text-[#111111] dark:text-white shadow-soft-sm ring-1 ring-black/[0.1] dark:ring-white/[0.15]'
                  : 'text-[#666666] dark:text-[#8E8E93] hover:text-[#111111] dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                }
              `}
            >
              <span className="truncate w-full">{plat.name}</span>
              <span className={`font-mono text-[9px] px-1.5 py-0.2 rounded-full font-normal ${isPlatActive ? 'bg-[#FE385B]/10 text-[#FE385B] font-semibold' : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#8E8E93]'}`}>
                {plat.badge || `${plat.tiers.length} Niveles`}
              </span>
            </button>
          );
        })}
      </div>

      {currentPlatform?.description && (
        <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed pt-1">
          {currentPlatform.description}
        </p>
      )}
    </div>
  );
}
