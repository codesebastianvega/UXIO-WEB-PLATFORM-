'use client';

import React from 'react';
import { Sliders, Copy } from 'lucide-react';
import { ResourceItem } from '@/data/resources';
import { Locale } from '@/types';

import { SpotlightControls } from '../playgrounds/SpotlightPlayground';
import { LinkPreviewControls } from '../playgrounds/LinkPreviewPlayground';
import { MagneticControls } from '../playgrounds/MagneticPlayground';
import { ShimmerControls } from '../playgrounds/ShimmerPlayground';
import { NoiseMeshControls } from '../playgrounds/NoiseMeshPlayground';
import { BentoControls } from '../playgrounds/BentoPlayground';
import { DockControls } from '../playgrounds/DockPlayground';
import { KineticControls } from '../playgrounds/KineticPlayground';

interface ComponentControlsRendererProps {
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

export default function ComponentControlsRenderer(props: ComponentControlsRendererProps) {
  const { item, lang, presetColors } = props;
  const isEs = lang === 'es';

  return (
    <div className="lg:col-span-5 space-y-5 p-5 rounded-2xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.06] dark:border-white/[0.08]">
      <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#111111] dark:text-white uppercase pb-2 border-b border-black/[0.06] dark:border-white/[0.06]">
        <Sliders size={13} className="text-[#00F0FF]" />
        <span>{isEs ? 'Panel de Ajustes en Vivo' : 'Live Config Sliders'}</span>
      </div>

      {item.slug === 'spotlight-card' && (
        <SpotlightControls
          lang={lang}
          color={props.spotlightColor}
          setColor={props.setSpotlightColor}
          radius={props.spotlightRadius}
          setRadius={props.setSpotlightRadius}
          viscosity={props.viscosity}
          setViscosity={props.setViscosity}
          blur={props.blurIntensity}
          setBlur={props.setBlurIntensity}
          opacity={props.spotlightOpacity}
          setOpacity={props.setOpacity}
          presetColors={presetColors}
        />
      )}
      {item.slug === 'hover-link-preview' && (
        <LinkPreviewControls
          lang={lang}
          title={props.previewTitle}
          setTitle={props.setPreviewTitle}
          desc={props.previewDesc}
          setDesc={props.setPreviewDesc}
          badge={props.previewBadge}
          setBadge={props.setPreviewBadge}
          color={props.previewColor}
          setColor={props.setPreviewColor}
          placement={props.previewPlacement}
          setPlacement={props.setPreviewPlacement}
          cardWidth={props.previewCardWidth}
          setCardWidth={props.setPreviewCardWidth}
          showImage={props.previewShowImage}
          setShowImage={props.setShowImage}
          presetColors={presetColors}
        />
      )}
      {item.slug === 'magnetic-button' && (
        <MagneticControls
          lang={lang}
          text={props.magneticText}
          setText={props.setText}
          strength={props.magneticStrength}
          setStrength={props.setStrength}
          radius={props.magneticRadius}
          setRadius={props.setRadius}
          color={props.magneticColor}
          setColor={props.setMagneticColor}
          variant={props.magneticVariant}
          setVariant={props.setMagneticVariant}
          size={props.magneticSize}
          setSize={props.setMagneticSize}
          activeGlow={props.magneticGlow}
          setActiveGlow={props.setActiveGlow}
          presetColors={presetColors}
        />
      )}
      {item.slug === 'shimmer-text' && (
        <ShimmerControls
          lang={lang}
          text={props.shimmerTextVal}
          setText={props.setShimmerTextVal}
          color1={props.shimmerColor1}
          setColor1={props.setColor1}
          color2={props.shimmerColor2}
          setColor2={props.setColor2}
          color3={props.shimmerColor3}
          setColor3={props.setColor3}
          duration={props.shimmerDuration}
          setDuration={props.setDuration}
          fontSize={props.shimmerFontSize}
          setFontSize={props.setFontSize}
          fontWeight={props.shimmerFontWeight}
          setFontWeight={props.setFontWeight}
          glow={props.shimmerGlow}
          setGlow={props.setGlow}
          darkStage={props.shimmerDarkStage}
          setDarkStage={props.setDarkStage}
        />
      )}
      {(item.slug === 'noise-mesh-bg' || item.slug === 'noise-mesh') && (
        <NoiseMeshControls
          lang={lang}
          colors={props.noiseMeshColors}
          setColors={props.setNoiseMeshColors}
          speed={props.noiseMeshSpeed}
          setSpeed={props.setNoiseMeshSpeed}
          noiseOpacity={props.noiseMeshOpacity}
          setNoiseOpacity={props.setNoiseMeshOpacity}
          blur={props.noiseMeshBlur}
          setBlur={props.setNoiseMeshBlur}
          mouseInfluence={props.noiseMeshMouse}
          setMouseInfluence={props.setNoiseMeshMouse}
        />
      )}
      {(item.slug === 'craft-bento-grid' || item.slug === 'bento-grid') && (
        <BentoControls
          lang={lang}
          variant={props.bentoVariant}
          setVariant={props.setBentoVariant}
          accentColor={props.bentoColor}
          setAccentColor={props.setBentoColor}
          borderRadius={props.bentoRadius}
          setBorderRadius={props.setBentoRadius}
          gap={props.bentoGap}
          setGap={props.setBentoGap}
          hoverGlow={props.bentoGlow}
          setHoverGlow={props.setBentoGlow}
          darkStage={props.bentoDarkStage}
          setDarkStage={props.setDarkStage}
        />
      )}
      {item.slug === 'dock-navigator' && (
        <DockControls
          lang={lang}
          variant={props.dockVariant}
          setVariant={props.setDockVariant}
          accentColor={props.dockColor}
          setAccentColor={props.setDockColor}
          baseSize={props.dockBaseSize}
          setBaseSize={props.setDockBaseSize}
          maxScale={props.dockMaxScale}
          setMaxScale={props.setDockMaxScale}
          distance={props.dockDistance}
          setDistance={props.setDockDistance}
          gap={props.dockGap}
          setGap={props.setDockGap}
          showTooltips={props.dockTooltips}
          setShowTooltips={props.setDockTooltips}
          showIndicators={props.dockIndicators}
          setShowIndicators={props.setDockIndicators}
          darkStage={props.dockDarkStage}
          setDarkStage={props.setDockDarkStage}
        />
      )}
      {(item.slug === 'kinetic-slider' || item.slug === 'kinetic-snap-slider') && (
        <KineticControls
          lang={lang}
          accentColor={props.kineticColor}
          setAccentColor={props.setKineticColor}
          activeScale={props.kineticScale}
          setActiveScale={props.setKineticScale}
          gap={props.kineticGap}
          setGap={props.setKineticGap}
          autoplay={props.kineticAutoplay}
          setAutoplay={props.setKineticAutoplay}
          darkStage={props.kineticDarkStage}
          setDarkStage={props.setKineticDarkStage}
        />
      )}

      {/* Quick Install Command */}
      <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] space-y-1.5">
        <span className="font-mono text-[10px] text-[#8E8E93] uppercase block">Instalación CLI:</span>
        <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-[#00F0FF] font-mono text-xs flex items-center justify-between">
          <code className="truncate">{item.installCommand || `npx @uxio/ui add ${item.slug}`}</code>
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(item.installCommand || `npx @uxio/ui add ${item.slug}`)}
            className="p-1 text-[#8E8E93] hover:text-white cursor-pointer"
          >
            <Copy size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
