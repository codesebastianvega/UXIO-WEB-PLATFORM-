'use client';

import React, { useState } from 'react';
import { 
  ServiceItem, 
  Capability, 
  MicroService, 
  CapabilityTier, 
  PlatformGroup, 
  CurrencyCode 
} from '@/data/services';
import { Locale } from '@/types';
import ServiceDrawer, { DrawerServiceItem } from '@/components/ServiceDrawer';

// Modular Sub-Components
import ServicePillarHero from './services/pillar/ServicePillarHero';
import ServiceCapabilityCard from './services/pillar/ServiceCapabilityCard';
import ServiceSubservicesList from './services/pillar/ServiceSubservicesList';
import ServicePlatformsView from './services/pillar/ServicePlatformsView';
import TechStackMarquee from './services/pillar/TechStackMarquee';

interface ServiceDetailViewProps {
  service: ServiceItem;
  lang: Locale;
}

export default function ServiceDetailView({
  service,
  lang,
}: ServiceDetailViewProps) {
  const isEs = lang === 'es';
  const [selectedDrawerItem, setSelectedDrawerItem] = useState<DrawerServiceItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenMicroService = (micro: MicroService) => {
    setSelectedDrawerItem({
      id: micro.id,
      title: micro.title,
      description: micro.description || '',
      type: 'micro',
      startingPrice: micro.price,
      timeline: micro.timeline,
      accent: service.accent,
    });
    setIsDrawerOpen(true);
  };

  const handleSelectPlatformTier = (
    tier: CapabilityTier,
    platform: PlatformGroup,
    currency: CurrencyCode
  ) => {
    setSelectedDrawerItem({
      id: `${platform.id}-${tier.name.toLowerCase().replace(/\s+/g, '-')}`,
      title: `${platform.name} · ${tier.name}`,
      description: tier.description || '',
      type: 'core',
      startingPrice: tier.price,
      timeline: '1 a 2 Semanas',
      accent: service.accent,
    });
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedDrawerItem(null);
  };

  const hasPlatforms = Boolean(service.platforms && service.platforms.length > 0);

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors">
      <div className="space-y-10 md:space-y-12">
        {/* 1. Hero & Overview */}
        <ServicePillarHero service={service} lang={lang} />

        {/* 2. Infinite Tech Stack Marquee (Technology Discipline) */}
        {service.slug === 'technology' && (
          <TechStackMarquee lang={lang} />
        )}

        {/* 3. Render either Platform Tabs View (Content) or Standard Capability Grid */}
        {hasPlatforms && service.platforms ? (
          <ServicePlatformsView
            platforms={service.platforms}
            accent={service.accent}
            onSelectTier={handleSelectPlatformTier}
            onOpenMicroDrawer={handleOpenMicroService}
            lang={lang}
          />
        ) : (
          <>
            {/* Standard Core Capabilities Cards */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-black/[0.08] dark:border-white/[0.08]">
                <span className="font-mono text-[11px] font-medium text-[#8E8E93] tracking-tight block">
                  // SERVICIOS CORE & CAPABILITIES
                </span>
                <span className="font-mono text-[10px] text-[#8E8E93]">
                  {service.capabilities.length} {isEs ? 'especialidades' : 'capabilities'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                {service.capabilities.map((cap, idx) => (
                  <ServiceCapabilityCard
                    key={cap.id || idx}
                    cap={cap}
                    idx={idx}
                    parentSlug={service.slug}
                    lang={lang}
                  />
                ))}
              </div>
            </section>

            {/* Standard Micro-Services List */}
            <ServiceSubservicesList
              microServices={service.microServices}
              onOpenMicroDrawer={handleOpenMicroService}
              lang={lang}
            />
          </>
        )}
      </div>

      {/* 4. Quick Micro-Service Slide-Over Drawer */}
      <ServiceDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        item={selectedDrawerItem}
        allMicroServices={service.microServices}
        lang={lang}
      />
    </main>
  );
}
