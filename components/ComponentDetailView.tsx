'use client';

import React, { useState } from 'react';
import { RESOURCES_DATA, ResourceItem } from '@/data/resources';
import { Locale } from '@/types';

// Modular Sub-Components
import ComponentHeader from './resources/detail/ComponentHeader';
import ComponentNavFooter from './resources/detail/ComponentNavFooter';
import ComponentPropsTable from './resources/detail/ComponentPropsTable';
import ComponentCodeAndAiTabs from './resources/detail/ComponentCodeAndAiTabs';
import ComponentPlaygroundCoordinator from './resources/detail/ComponentPlaygroundCoordinator';

// Data & Prompt Registries
import { getComponentSourceCode } from '@/data/component-code-templates';
import { getComponentUsageCode } from '@/data/component-usage-templates';
import { getComponentAiPrompt } from '@/data/component-ai-prompts';

interface ComponentDetailViewProps {
  slug: string;
  lang: Locale;
}

const PRESET_COLORS = [
  { name: 'Cian Eléctrico', hex: '#00F0FF' },
  { name: 'Coral UXIO', hex: '#FE385B' },
  { name: 'Verde Neón', hex: '#10B981' },
  { name: 'Púrpura IA', hex: '#7928CA' },
  { name: 'Ámbar Cálido', hex: '#FFCC48' },
  { name: 'Rosa Fucsia', hex: '#EC4899' },
];

export default function ComponentDetailView({ slug, lang }: ComponentDetailViewProps) {
  const isEs = lang === 'es';
  const item: ResourceItem = RESOURCES_DATA.find((r) => r.slug === slug || (slug === 'noise-mesh' && r.slug === 'noise-mesh-bg')) || RESOURCES_DATA[0];

  // Tab State
  const [activeCodeTab, setActiveCodeTab] = useState<'component' | 'usage' | 'cli' | 'ai-prompt'>('component');

  // 1. FluidSpotlightCard State
  const [spotlightColor, setSpotlightColor] = useState(item.accentColor || '#FE385B');
  const [spotlightRadius, setSpotlightRadius] = useState(220);
  const [viscosity, setViscosity] = useState(0.075);
  const [blurIntensity, setBlurIntensity] = useState(30);
  const [spotlightOpacity, setSpotlightOpacity] = useState(0.12);

  // 2. HoverLinkPreview State
  const [previewTitle, setPreviewTitle] = useState('SaaS Dashboard Pro');
  const [previewDesc, setPreviewDesc] = useState('Panel de analítica en tiempo real con 12 widgets interactivos y métricas en vivo.');
  const [previewBadge, setPreviewBadge] = useState('Live Preview');
  const [previewColor, setPreviewColor] = useState('#00F0FF');
  const [previewPlacement, setPreviewPlacement] = useState<'top' | 'bottom'>('top');
  const [previewCardWidth, setPreviewCardWidth] = useState(280);
  const [previewShowImage, setPreviewShowImage] = useState(true);

  // 3. MagneticPillButton State
  const [magneticText, setMagneticText] = useState('Lanzar Proyecto');
  const [magneticStrength, setMagneticStrength] = useState(0.35);
  const [magneticRadius, setMagneticRadius] = useState(120);
  const [magneticColor, setMagneticColor] = useState('#10B981');
  const [magneticVariant, setMagneticVariant] = useState<'obsidian' | 'glow' | 'glass'>('obsidian');
  const [magneticSize, setMagneticSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [magneticGlow, setMagneticGlow] = useState(true);

  // 4. ShimmerGradientText State
  const [shimmerTextVal, setShimmerTextVal] = useState('Experiencias de Alto Rendimiento');
  const [shimmerColor1, setShimmerColor1] = useState('#7928CA');
  const [shimmerColor2, setShimmerColor2] = useState('#00F0FF');
  const [shimmerColor3, setShimmerColor3] = useState('#FE385B');
  const [shimmerDuration, setShimmerDuration] = useState(3.5);
  const [shimmerFontSize, setShimmerFontSize] = useState(34);
  const [shimmerFontWeight, setShimmerFontWeight] = useState<'600' | '700' | '800' | '900'>('800');
  const [shimmerGlow, setShimmerGlow] = useState(false);
  const [shimmerDarkStage, setShimmerDarkStage] = useState(false);

  // 5. NoiseMeshCanvas State
  const [noiseMeshColors, setNoiseMeshColors] = useState<string[]>(['#7928CA', '#00F0FF', '#FE385B']);
  const [noiseMeshSpeed, setNoiseMeshSpeed] = useState(1.0);
  const [noiseMeshOpacity, setNoiseMeshOpacity] = useState(0.12);
  const [noiseMeshBlur, setNoiseMeshBlur] = useState(70);
  const [noiseMeshMouse, setNoiseMeshMouse] = useState(0.4);

  // 6. BentoCraftGrid State
  const [bentoVariant, setBentoVariant] = useState<'saas' | 'studio' | 'analytics'>('saas');
  const [bentoColor, setBentoColor] = useState(item.accentColor || '#FE385B');
  const [bentoRadius, setBentoRadius] = useState(20);
  const [bentoGap, setBentoGap] = useState(12);
  const [bentoGlow, setBentoGlow] = useState(true);
  const [bentoDarkStage, setBentoDarkStage] = useState(false);

  // 7. ObsidianDockNav State
  const [dockVariant, setDockVariant] = useState<'obsidian' | 'glass' | 'frosted'>('obsidian');
  const [dockColor, setDockColor] = useState(item.accentColor || '#00F0FF');
  const [dockBaseSize, setDockBaseSize] = useState(44);
  const [dockMaxScale, setDockMaxScale] = useState(1.8);
  const [dockDistance, setDockDistance] = useState(110);
  const [dockGap, setDockGap] = useState(10);
  const [dockTooltips, setDockTooltips] = useState(true);
  const [dockIndicators, setDockIndicators] = useState(true);
  const [dockDarkStage, setDockDarkStage] = useState(false);

  // 8. KineticSnapSlider State
  const [kineticColor, setKineticColor] = useState(item.accentColor || '#FE385B');
  const [kineticScale, setKineticScale] = useState(1.08);
  const [kineticGap, setKineticGap] = useState(20);
  const [kineticAutoplay, setKineticAutoplay] = useState(false);
  const [kineticDarkStage, setKineticDarkStage] = useState(false);

  // Param dictionary for dynamic usage code & AI prompt
  const playgroundParams = {
    spotlightColor, spotlightRadius, viscosity, blurIntensity, spotlightOpacity,
    previewTitle, previewDesc, previewBadge, previewColor, previewPlacement, previewCardWidth, previewShowImage,
    magneticText, magneticStrength, magneticRadius, magneticColor, magneticVariant, magneticSize, magneticGlow,
    shimmerTextVal, shimmerColor1, shimmerColor2, shimmerColor3, shimmerDuration, shimmerFontSize, shimmerFontWeight, shimmerGlow,
    noiseMeshColors, noiseMeshSpeed, noiseMeshOpacity, noiseMeshBlur, noiseMeshMouse,
    bentoVariant, bentoColor, bentoRadius, bentoGap, bentoGlow, bentoDarkStage,
    dockVariant, dockColor, dockBaseSize, dockMaxScale, dockDistance, dockGap, dockTooltips, dockIndicators, dockDarkStage,
    kineticColor, kineticScale, kineticGap, kineticAutoplay, kineticDarkStage,
  };

  const usageCode = getComponentUsageCode(item.slug, playgroundParams);
  const sourceCode = getComponentSourceCode(item.slug);
  const aiPrompt = getComponentAiPrompt(item.slug, usageCode, playgroundParams);

  const componentList = RESOURCES_DATA.filter((r) => r.type === 'component');
  const currentIndex = componentList.findIndex((r) => r.slug === slug || (slug === 'noise-mesh' && r.slug === 'noise-mesh-bg'));

  return (
    <div className="space-y-12">
      {/* 1. Header & Badges */}
      <ComponentHeader
        item={item}
        lang={lang}
        componentList={componentList}
        currentIndex={currentIndex}
        totalCount={componentList.length}
      />

      {/* 2. Interactive Playground (Modular Coordinator) */}
      <ComponentPlaygroundCoordinator
        item={item}
        lang={lang}
        presetColors={PRESET_COLORS}
        // 1. Spotlight
        spotlightColor={spotlightColor}
        setSpotlightColor={setSpotlightColor}
        spotlightRadius={spotlightRadius}
        setSpotlightRadius={setSpotlightRadius}
        viscosity={viscosity}
        setViscosity={setViscosity}
        blurIntensity={blurIntensity}
        setBlurIntensity={setBlurIntensity}
        spotlightOpacity={spotlightOpacity}
        setOpacity={setSpotlightOpacity}
        // 2. Link Preview
        previewTitle={previewTitle}
        setPreviewTitle={setPreviewTitle}
        previewDesc={previewDesc}
        setPreviewDesc={setPreviewDesc}
        previewBadge={previewBadge}
        setPreviewBadge={setPreviewBadge}
        previewColor={previewColor}
        setPreviewColor={setPreviewColor}
        previewPlacement={previewPlacement}
        setPreviewPlacement={setPreviewPlacement}
        previewCardWidth={previewCardWidth}
        setPreviewCardWidth={setPreviewCardWidth}
        previewShowImage={previewShowImage}
        setShowImage={setPreviewShowImage}
        // 3. Magnetic
        magneticText={magneticText}
        setText={setMagneticText}
        magneticStrength={magneticStrength}
        setStrength={setMagneticStrength}
        magneticRadius={magneticRadius}
        setRadius={setMagneticRadius}
        magneticColor={magneticColor}
        setMagneticColor={setMagneticColor}
        magneticVariant={magneticVariant}
        setMagneticVariant={setMagneticVariant}
        magneticSize={magneticSize}
        setMagneticSize={setMagneticSize}
        magneticGlow={magneticGlow}
        setActiveGlow={setMagneticGlow}
        // 4. Shimmer
        shimmerTextVal={shimmerTextVal}
        setShimmerTextVal={setShimmerTextVal}
        shimmerColor1={shimmerColor1}
        setColor1={setShimmerColor1}
        shimmerColor2={shimmerColor2}
        setColor2={setShimmerColor2}
        shimmerColor3={shimmerColor3}
        setColor3={setShimmerColor3}
        shimmerDuration={shimmerDuration}
        setDuration={setShimmerDuration}
        shimmerFontSize={shimmerFontSize}
        setFontSize={setShimmerFontSize}
        shimmerFontWeight={shimmerFontWeight}
        setFontWeight={setShimmerFontWeight}
        shimmerGlow={shimmerGlow}
        setGlow={setShimmerGlow}
        shimmerDarkStage={shimmerDarkStage}
        setDarkStage={setShimmerDarkStage}
        // 5. Noise Mesh
        noiseMeshColors={noiseMeshColors}
        setNoiseMeshColors={setNoiseMeshColors}
        noiseMeshSpeed={noiseMeshSpeed}
        setNoiseMeshSpeed={setNoiseMeshSpeed}
        noiseMeshOpacity={noiseMeshOpacity}
        setNoiseMeshOpacity={setNoiseMeshOpacity}
        noiseMeshBlur={noiseMeshBlur}
        setNoiseMeshBlur={setNoiseMeshBlur}
        noiseMeshMouse={noiseMeshMouse}
        setNoiseMeshMouse={setNoiseMeshMouse}
        // 6. Bento
        bentoVariant={bentoVariant}
        setBentoVariant={setBentoVariant}
        bentoColor={bentoColor}
        setBentoColor={setBentoColor}
        bentoRadius={bentoRadius}
        setBentoRadius={setBentoRadius}
        bentoGap={bentoGap}
        setBentoGap={setBentoGap}
        bentoGlow={bentoGlow}
        setBentoGlow={setBentoGlow}
        bentoDarkStage={bentoDarkStage}
        setBentoDarkStage={setBentoDarkStage}
        // 7. Dock
        dockVariant={dockVariant}
        setDockVariant={setDockVariant}
        dockColor={dockColor}
        setDockColor={setDockColor}
        dockBaseSize={dockBaseSize}
        setDockBaseSize={setDockBaseSize}
        dockMaxScale={dockMaxScale}
        setDockMaxScale={setDockMaxScale}
        dockDistance={dockDistance}
        setDockDistance={setDockDistance}
        dockGap={dockGap}
        setDockGap={setDockGap}
        dockTooltips={dockTooltips}
        setDockTooltips={setDockTooltips}
        dockIndicators={dockIndicators}
        setDockIndicators={setDockIndicators}
        dockDarkStage={dockDarkStage}
        setDockDarkStage={setDockDarkStage}
        // 8. Kinetic
        kineticColor={kineticColor}
        setKineticColor={setKineticColor}
        kineticScale={kineticScale}
        setKineticScale={setKineticScale}
        kineticGap={kineticGap}
        setKineticGap={setKineticGap}
        kineticAutoplay={kineticAutoplay}
        setKineticAutoplay={setKineticAutoplay}
        kineticDarkStage={kineticDarkStage}
        setKineticDarkStage={setKineticDarkStage}
      />

      {/* 3. One-Click Source Code & AI Prompt */}
      <ComponentCodeAndAiTabs
        item={item}
        sourceCode={sourceCode}
        usageCode={usageCode}
        aiPrompt={aiPrompt}
        activeCodeTab={activeCodeTab}
        setActiveCodeTab={setActiveCodeTab}
        lang={lang}
      />

      {/* 4. Modular Props Specification Table */}
      <ComponentPropsTable slug={item.slug} lang={lang} />

      {/* 5. Modular Bottom Navigation Footer */}
      <ComponentNavFooter
        lang={lang}
        componentList={componentList}
        currentIndex={currentIndex}
      />
    </div>
  );
}
