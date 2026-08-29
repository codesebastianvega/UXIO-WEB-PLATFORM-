'use client';

import React from 'react';
import { ResourceItem } from '@/data/resources';
import { Locale } from '@/types';

import { SpotlightStage } from '../playgrounds/SpotlightPlayground';
import { LinkPreviewStage } from '../playgrounds/LinkPreviewPlayground';
import { MagneticStage } from '../playgrounds/MagneticPlayground';
import { ShimmerStage } from '../playgrounds/ShimmerPlayground';
import { NoiseMeshStage } from '../playgrounds/NoiseMeshPlayground';
import { BentoStage } from '../playgrounds/BentoPlayground';
import { DockStage } from '../playgrounds/DockPlayground';
import { KineticStage } from '../playgrounds/KineticPlayground';

interface ComponentStageRendererProps {
  item: ResourceItem;
  lang: Locale;
  // 1. Spotlight
  spotlightColor: string;
  spotlightRadius: number;
  viscosity: number;
  blurIntensity: number;
  spotlightOpacity: number;
  // 2. Link Preview
  previewTitle: string;
  previewDesc: string;
  previewBadge: string;
  previewColor: string;
  previewPlacement: 'top' | 'bottom';
  previewCardWidth: number;
  previewShowImage: boolean;
  // 3. Magnetic
  magneticText: string;
  magneticStrength: number;
  magneticRadius: number;
  magneticColor: string;
  magneticVariant: 'obsidian' | 'glow' | 'glass';
  magneticSize: 'sm' | 'md' | 'lg';
  magneticGlow: boolean;
  // 4. Shimmer
  shimmerTextVal: string;
  shimmerColor1: string;
  shimmerColor2: string;
  shimmerColor3: string;
  shimmerDuration: number;
  shimmerFontSize: number;
  shimmerFontWeight: '600' | '700' | '800' | '900';
  shimmerGlow: boolean;
  shimmerDarkStage: boolean;
  // 5. Noise Mesh
  noiseMeshColors: string[];
  noiseMeshSpeed: number;
  noiseMeshOpacity: number;
  noiseMeshBlur: number;
  noiseMeshMouse: number;
  // 6. Bento
  bentoVariant: 'saas' | 'studio' | 'analytics';
  bentoColor: string;
  bentoRadius: number;
  bentoGap: number;
  bentoGlow: boolean;
  bentoDarkStage: boolean;
  // 7. Dock
  dockVariant: 'obsidian' | 'glass' | 'frosted';
  dockColor: string;
  dockBaseSize: number;
  dockMaxScale: number;
  dockDistance: number;
  dockGap: number;
  dockTooltips: boolean;
  dockIndicators: boolean;
  dockDarkStage: boolean;
  // 8. Kinetic
  kineticColor: string;
  kineticScale: number;
  kineticGap: number;
  kineticAutoplay: boolean;
  kineticDarkStage: boolean;
}

export default function ComponentStageRenderer(props: ComponentStageRendererProps) {
  const { item, lang } = props;

  return (
    <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-8 bg-[#F7F7F5]/60 dark:bg-[#0D0D0E]/60 rounded-2xl border border-black/[0.04] dark:border-white/[0.06] min-h-[340px] relative">
      {item.slug === 'spotlight-card' && (
        <SpotlightStage
          lang={lang}
          color={props.spotlightColor}
          radius={props.spotlightRadius}
          viscosity={props.viscosity}
          blur={props.blurIntensity}
          opacity={props.spotlightOpacity}
        />
      )}
      {item.slug === 'hover-link-preview' && (
        <LinkPreviewStage
          lang={lang}
          title={props.previewTitle}
          desc={props.previewDesc}
          badge={props.previewBadge}
          color={props.previewColor}
          placement={props.previewPlacement}
          cardWidth={props.previewCardWidth}
          showImage={props.previewShowImage}
        />
      )}
      {item.slug === 'magnetic-button' && (
        <MagneticStage
          lang={lang}
          text={props.magneticText}
          strength={props.magneticStrength}
          radius={props.magneticRadius}
          color={props.magneticColor}
          variant={props.magneticVariant}
          size={props.magneticSize}
          activeGlow={props.magneticGlow}
        />
      )}
      {item.slug === 'shimmer-text' && (
        <ShimmerStage
          text={props.shimmerTextVal}
          color1={props.shimmerColor1}
          color2={props.shimmerColor2}
          color3={props.shimmerColor3}
          duration={props.shimmerDuration}
          fontSize={props.shimmerFontSize}
          fontWeight={props.shimmerFontWeight}
          glow={props.shimmerGlow}
          darkStage={props.shimmerDarkStage}
        />
      )}
      {(item.slug === 'noise-mesh-bg' || item.slug === 'noise-mesh') && (
        <NoiseMeshStage
          lang={lang}
          colors={props.noiseMeshColors}
          speed={props.noiseMeshSpeed}
          noiseOpacity={props.noiseMeshOpacity}
          blur={props.noiseMeshBlur}
          mouseInfluence={props.noiseMeshMouse}
        />
      )}
      {(item.slug === 'craft-bento-grid' || item.slug === 'bento-grid') && (
        <BentoStage
          variant={props.bentoVariant}
          accentColor={props.bentoColor}
          borderRadius={props.bentoRadius}
          gap={props.bentoGap}
          hoverGlow={props.bentoGlow}
          darkStage={props.bentoDarkStage}
        />
      )}
      {item.slug === 'dock-navigator' && (
        <DockStage
          variant={props.dockVariant}
          accentColor={props.dockColor}
          baseSize={props.dockBaseSize}
          maxScale={props.dockMaxScale}
          distance={props.dockDistance}
          gap={props.dockGap}
          showTooltips={props.dockTooltips}
          showIndicators={props.dockIndicators}
          darkStage={props.dockDarkStage}
        />
      )}
      {(item.slug === 'kinetic-slider' || item.slug === 'kinetic-snap-slider') && (
        <KineticStage
          accentColor={props.kineticColor}
          activeScale={props.kineticScale}
          gap={props.kineticGap}
          autoplay={props.kineticAutoplay}
          darkStage={props.kineticDarkStage}
        />
      )}
    </div>
  );
}
