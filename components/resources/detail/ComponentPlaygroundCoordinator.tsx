'use client';

import React from 'react';
import { Eye } from 'lucide-react';
import { ResourceItem } from '@/data/resources';
import { Locale } from '@/types';
import ComponentStageRenderer from './coordinator/ComponentStageRenderer';
import ComponentControlsRenderer from './coordinator/ComponentControlsRenderer';

interface ComponentPlaygroundCoordinatorProps {
  item: ResourceItem;
  lang: Locale;
  presetColors: Array<{ name: string; hex: string }>;
  // 1. Spotlight
  spotlightColor: string;
  setSpotlightColor: (v: string) => void;
  spotlightRadius: number;
  setSpotlightRadius: (v: number) => void;
  viscosity: number;
  setViscosity: (v: number) => void;
  blurIntensity: number;
  setBlurIntensity: (v: number) => void;
  spotlightOpacity: number;
  setOpacity: (v: number) => void;
  // 2. Link Preview
  previewTitle: string;
  setPreviewTitle: (v: string) => void;
  previewDesc: string;
  setPreviewDesc: (v: string) => void;
  previewBadge: string;
  setPreviewBadge: (v: string) => void;
  previewColor: string;
  setPreviewColor: (v: string) => void;
  previewPlacement: 'top' | 'bottom';
  setPreviewPlacement: (v: 'top' | 'bottom') => void;
  previewCardWidth: number;
  setPreviewCardWidth: (v: number) => void;
  previewShowImage: boolean;
  setShowImage: (v: boolean) => void;
  // 3. Magnetic
  magneticText: string;
  setText: (v: string) => void;
  magneticStrength: number;
  setStrength: (v: number) => void;
  magneticRadius: number;
  setRadius: (v: number) => void;
  magneticColor: string;
  setMagneticColor: (v: string) => void;
  magneticVariant: 'obsidian' | 'glow' | 'glass';
  setMagneticVariant: (v: 'obsidian' | 'glow' | 'glass') => void;
  magneticSize: 'sm' | 'md' | 'lg';
  setMagneticSize: (v: 'sm' | 'md' | 'lg') => void;
  magneticGlow: boolean;
  setActiveGlow: (v: boolean) => void;
  // 4. Shimmer
  shimmerTextVal: string;
  setShimmerTextVal: (v: string) => void;
  shimmerColor1: string;
  setColor1: (v: string) => void;
  shimmerColor2: string;
  setColor2: (v: string) => void;
  shimmerColor3: string;
  setColor3: (v: string) => void;
  shimmerDuration: number;
  setDuration: (v: number) => void;
  shimmerFontSize: number;
  setFontSize: (v: number) => void;
  shimmerFontWeight: '600' | '700' | '800' | '900';
  setFontWeight: (v: '600' | '700' | '800' | '900') => void;
  shimmerGlow: boolean;
  setGlow: (v: boolean) => void;
  shimmerDarkStage: boolean;
  setDarkStage: (v: boolean) => void;
  // 5. Noise Mesh
  noiseMeshColors: string[];
  setNoiseMeshColors: (v: string[]) => void;
  noiseMeshSpeed: number;
  setNoiseMeshSpeed: (v: number) => void;
  noiseMeshOpacity: number;
  setNoiseMeshOpacity: (v: number) => void;
  noiseMeshBlur: number;
  setNoiseMeshBlur: (v: number) => void;
  noiseMeshMouse: number;
  setNoiseMeshMouse: (v: number) => void;
  // 6. Bento
  bentoVariant: 'saas' | 'studio' | 'analytics';
  setBentoVariant: (v: 'saas' | 'studio' | 'analytics') => void;
  bentoColor: string;
  setBentoColor: (v: string) => void;
  bentoRadius: number;
  setBentoRadius: (v: number) => void;
  bentoGap: number;
  setBentoGap: (v: number) => void;
  bentoGlow: boolean;
  setBentoGlow: (v: boolean) => void;
  bentoDarkStage: boolean;
  setBentoDarkStage: (v: boolean) => void;
  // 7. Dock
  dockVariant: 'obsidian' | 'glass' | 'frosted';
  setDockVariant: (v: 'obsidian' | 'glass' | 'frosted') => void;
  dockColor: string;
  setDockColor: (v: string) => void;
  dockBaseSize: number;
  setDockBaseSize: (v: number) => void;
  dockMaxScale: number;
  setDockMaxScale: (v: number) => void;
  dockDistance: number;
  setDockDistance: (v: number) => void;
  dockGap: number;
  setDockGap: (v: number) => void;
  dockTooltips: boolean;
  setDockTooltips: (v: boolean) => void;
  dockIndicators: boolean;
  setDockIndicators: (v: boolean) => void;
  dockDarkStage: boolean;
  setDockDarkStage: (v: boolean) => void;
  // 8. Kinetic
  kineticColor: string;
  setKineticColor: (v: string) => void;
  kineticScale: number;
  setKineticScale: (v: number) => void;
  kineticGap: number;
  setKineticGap: (v: number) => void;
  kineticAutoplay: boolean;
  setKineticAutoplay: (v: boolean) => void;
  kineticDarkStage: boolean;
  setKineticDarkStage: (v: boolean) => void;
}

export default function ComponentPlaygroundCoordinator(props: ComponentPlaygroundCoordinatorProps) {
  const isEs = props.lang === 'es';

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm space-y-6">
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Eye size={16} className="text-[#FE385B]" />
          <span className="font-display font-bold text-sm text-[#111111] dark:text-white uppercase tracking-tight">
            {isEs ? 'Playground Interactivo en Vivo' : 'Live Interactive Playground'}
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#8E8E93]">
          {isEs ? 'Interactúa en tiempo real' : 'Interact in real time'}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <ComponentStageRenderer {...props} />
        <ComponentControlsRenderer {...props} />
      </div>
    </div>
  );
}
