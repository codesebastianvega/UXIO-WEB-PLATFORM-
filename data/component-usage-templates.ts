export function getComponentUsageCode(slug: string, params: Record<string, any> = {}): string {
  switch (slug) {
    case 'spotlight-card':
      return `import FluidSpotlightCard from '@/components/ui/FluidSpotlightCard';

export default function MyPage() {
  return (
    <FluidSpotlightCard
      color="${params.spotlightColor || '#FE385B'}"
      spotlightRadius={${params.spotlightRadius || 220}}
      viscosity={${params.viscosity || 0.075}}
      blurIntensity={${params.blurIntensity || 30}}
      spotlightOpacity={${params.spotlightOpacity || 0.12}}
    >
      <h3>Física Fluida No Newtoniana</h3>
    </FluidSpotlightCard>
  );
}`;

    case 'hover-link-preview':
      return `import HoverLinkPreview from '@/components/ui/HoverLinkPreview';

export default function MyPage() {
  return (
    <div className="p-8">
      <p className="text-sm text-gray-400">
        Descubre nuestra suite de{' '}
        <HoverLinkPreview
          href="/dashboard"
          title="${params.previewTitle || 'SaaS Dashboard Pro'}"
          description="${params.previewDesc || 'Panel de analítica en tiempo real.'}"
          badge="${params.previewBadge || 'Live Preview'}"
          accentColor="${params.previewColor || '#00F0FF'}"
          placement="${params.previewPlacement || 'top'}"
          cardWidth={${params.previewCardWidth || 280}}
          showImage={${params.previewShowImage !== false}}
        >
          ${params.previewTitle || 'SaaS Dashboard Pro'}
        </HoverLinkPreview>{' '}
        con analíticas en tiempo real.
      </p>
    </div>
  );
}`;

    case 'magnetic-button':
      return `import MagneticPillButton from '@/components/ui/MagneticPillButton';

export default function MyPage() {
  return (
    <div className="flex items-center justify-center p-12">
      <MagneticPillButton
        strength={${params.magneticStrength || 0.35}}
        triggerRadius={${params.magneticRadius || 120}}
        accentColor="${params.magneticColor || '#10B981'}"
        variant="${params.magneticVariant || 'obsidian'}"
        size="${params.magneticSize || 'md'}"
        activeGlow={${params.magneticGlow !== false}}
      >
        ${params.magneticText || 'Lanzar Proyecto'}
      </MagneticPillButton>
    </div>
  );
}`;

    case 'shimmer-text':
      return `import ShimmerGradientText from '@/components/ui/ShimmerGradientText';

export default function MyPage() {
  return (
    <ShimmerGradientText
      text="${params.shimmerTextVal || 'Experiencias de Alto Rendimiento'}"
      fromColor="${params.shimmerColor1 || '#7928CA'}"
      viaColor="${params.shimmerColor2 || '#00F0FF'}"
      toColor="${params.shimmerColor3 || '#FE385B'}"
      duration={${params.shimmerDuration || 3.5}}
      fontSize={${params.shimmerFontSize || 34}}
      fontWeight="${params.shimmerFontWeight || '800'}"
      glow={${params.shimmerGlow || false}}
    />
  );
}`;

    case 'noise-mesh-bg':
    case 'noise-mesh':
      return `import NoiseMeshCanvas from '@/components/ui/NoiseMeshCanvas';

export default function MyHeroSection() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl">
      <NoiseMeshCanvas
        colors={${JSON.stringify(params.noiseMeshColors || ['#7928CA', '#00F0FF', '#FE385B'])}}
        speed={${params.noiseMeshSpeed || 1.0}}
        noiseOpacity={${params.noiseMeshOpacity || 0.12}}
        blurIntensity={${params.noiseMeshBlur || 70}}
        mouseInfluence={${params.noiseMeshMouse || 0.4}}
        className="w-full h-full"
      />
      <div className="relative z-10 p-12 text-white">
        <h1 className="text-4xl font-bold">Fondo Procedural en Tiempo Real</h1>
      </div>
    </div>
  );
}`;

    case 'craft-bento-grid':
    case 'bento-grid':
      return `import BentoCraftGrid from '@/components/ui/BentoCraftGrid';

export default function FeaturesSection() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <BentoCraftGrid
        variant="${params.bentoVariant || 'saas'}"
        accentColor="${params.bentoColor || '#FE385B'}"
        borderRadius={${params.bentoRadius || 20}}
        gap={${params.bentoGap || 12}}
        hoverGlow={${params.bentoGlow !== false}}
      />
    </section>
  );
}`;

    case 'dock-navigator':
    case 'obsidian-dock':
      return `import ObsidianDockNav from '@/components/ui/ObsidianDockNav';

export default function MyFloatingNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <ObsidianDockNav
        variant="${params.dockVariant || 'obsidian'}"
        accentColor="${params.dockColor || '#00F0FF'}"
        baseSize={${params.dockBaseSize || 44}}
        maxScale={${params.dockMaxScale || 1.8}}
        distance={${params.dockDistance || 110}}
        gap={${params.dockGap || 10}}
        showTooltips={${params.dockTooltips !== false}}
        showIndicators={${params.dockIndicators !== false}}
      />
    </div>
  );
}`;

    case 'kinetic-slider':
    case 'kinetic-snap-slider':
      return `import KineticSnapSlider from '@/components/ui/KineticSnapSlider';

export default function ShowcaseSection() {
  return (
    <section className="py-16 max-w-6xl mx-auto">
      <KineticSnapSlider
        accentColor="${params.kineticColor || '#FE385B'}"
        activeScale={${params.kineticScale || 1.08}}
        gap={${params.kineticGap || 20}}
        autoplay={${params.kineticAutoplay || false}}
      />
    </section>
  );
}`;

    default:
      return `import Component from '@/components/ui/Component';

export default function MyPage() {
  return <Component />;
}`;
  }
}
