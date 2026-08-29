'use client';

import React from 'react';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';
import HoverLinkPreview from '@/components/ui/HoverLinkPreview';
import MagneticPillButton from '@/components/ui/MagneticPillButton';
import ShimmerGradientText from '@/components/ui/ShimmerGradientText';
import ObsidianDockNav from '@/components/ui/ObsidianDockNav';
import BentoCraftGrid from '@/components/ui/BentoCraftGrid';
import NoiseMeshCanvas from '@/components/ui/NoiseMeshCanvas';
import KineticSnapSlider from '@/components/ui/KineticSnapSlider';
import { ResourceItem } from '@/data/resources';
import { Locale } from '@/types';

interface ResourceCardLivePreviewProps {
  item: ResourceItem;
  lang: Locale;
}

export default function ResourceCardLivePreview({ item, lang }: ResourceCardLivePreviewProps) {
  const isEs = lang === 'es';

  switch (item.slug) {
    case 'spotlight-card':
      return (
        <div className="w-full h-full p-4 flex items-center justify-center">
          <AuroraSpotlightCard
            color="#FE385B"
            spotlightRadius={160}
            className="w-full h-full min-h-[140px] flex flex-col justify-between p-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] text-[#8E8E93]">[ FLUID CORE ]</span>
              <span className="w-2 h-2 rounded-full bg-[#FE385B] animate-pulse" />
            </div>
            <p className="text-xs font-bold text-[#111111] dark:text-white">Fluid Spotlight</p>
          </AuroraSpotlightCard>
        </div>
      );

    case 'hover-link-preview':
      return (
        <div className="w-full h-full flex flex-col items-center justify-start pt-7 px-3">
          <HoverLinkPreview
            href={`/${lang}/resources/components/${item.slug}`}
            title="SaaS Analytics"
            description="Métricas en vivo a 120 FPS."
            badge="Live Popover"
            tag="// POPUP BRIDGE"
            accentColor="#00F0FF"
            placement="bottom"
            cardWidth={210}
            showImage={false}
          >
            <span className="font-display font-bold text-xs text-[#111111] dark:text-white underline decoration-[#FE385B] underline-offset-4">
              {isEs ? 'Pasa el cursor aquí ↗' : 'Hover over here ↗'}
            </span>
          </HoverLinkPreview>
        </div>
      );

    case 'magnetic-button':
      return (
        <div className="w-full h-full flex items-center justify-center p-4">
          <MagneticPillButton
            strength={0.35}
            triggerRadius={90}
            accentColor="#10B981"
            size="sm"
          >
            {isEs ? 'Atracción Magnética' : 'Magnetic Attraction'}
          </MagneticPillButton>
        </div>
      );

    case 'shimmer-text':
      return (
        <div className="w-full h-full flex items-center justify-center p-4">
          <ShimmerGradientText
            text="Luminescent Typography"
            className="text-base font-extrabold text-center"
          />
        </div>
      );

    case 'noise-mesh-bg':
    case 'noise-mesh':
      return (
        <div className="w-full h-full relative overflow-hidden">
          <NoiseMeshCanvas
            colors={['#7928CA', '#00F0FF', '#FE385B']}
            speed={0.8}
            noiseOpacity={0.15}
            blurIntensity={50}
            className="w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-mono text-[10px] text-white/90 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10 font-bold">
              Noise Mesh FX
            </span>
          </div>
        </div>
      );

    case 'dock-navigator':
    case 'obsidian-dock':
      return (
        <div className="w-full h-full flex items-center justify-center p-2">
          <ObsidianDockNav
            baseSize={32}
            maxScale={1.35}
            distance={60}
            gap={6}
            showTooltips={false}
          />
        </div>
      );

    case 'craft-bento-grid':
    case 'bento-grid':
      return (
        <div className="w-full h-full p-2.5 flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-[280px] pointer-events-none scale-90">
            <BentoCraftGrid borderRadius={14} gap={8} />
          </div>
        </div>
      );

    case 'kinetic-slider':
    case 'kinetic-snap-slider':
      return (
        <div className="w-full h-full flex items-center justify-center overflow-hidden pointer-events-none scale-75">
          <KineticSnapSlider gap={12} activeScale={1.04} />
        </div>
      );

    default:
      return (
        <div className="w-full h-full flex items-center justify-center text-xs font-mono text-[#8E8E93]">
          Interactive Component
        </div>
      );
  }
}
