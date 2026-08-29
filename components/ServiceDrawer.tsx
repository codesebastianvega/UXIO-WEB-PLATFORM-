'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  CreditCard,
  ShieldCheck,
} from 'lucide-react';
import { 
  CapabilityTier, 
  PlatformGroup,
  MicroService, 
  PriceMap, 
  CurrencyCode, 
  formatCurrency, 
  technologyServiceBase
} from '@/data/services';
import { Locale } from '@/types';

// Modular Sub-Components
import DrawerHeader from './services/drawer/DrawerHeader';
import DrawerTechShowcase from './services/drawer/DrawerTechShowcase';
import DrawerPlatformTabs from './services/drawer/DrawerPlatformTabs';
import DrawerTierCard from './services/drawer/DrawerTierCard';
import DrawerMicroservices from './services/drawer/DrawerMicroservices';
import DrawerFooter from './services/drawer/DrawerFooter';

export interface DrawerServiceItem {
  id?: string;
  title: string;
  description: string;
  type: 'core' | 'micro';
  slug?: string;
  startingPrice?: string | PriceMap;
  timeline?: string;
  tiers?: CapabilityTier[];
  platforms?: PlatformGroup[];
  initialTierName?: string;
  initialPlatformId?: string;
  accent?: string;
}

interface ServiceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  item: DrawerServiceItem | null;
  allMicroServices?: MicroService[];
  lang: Locale;
}

export default function ServiceDrawer({
  isOpen,
  onClose,
  item,
  allMicroServices = technologyServiceBase.microServices || [],
  lang,
}: ServiceDrawerProps) {
  const isEs = lang === 'es';
  const [currency, setCurrency] = useState<CurrencyCode>('COP');
  const [selectedMicroIds, setSelectedMicroIds] = useState<string[]>([]);
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>('wordpress');
  const [selectedTierName, setSelectedTierName] = useState<string | null>(null);

  // Initialize selections when drawer opens
  useEffect(() => {
    if (item?.type === 'micro') {
      const match = allMicroServices.find(m => m.id === item.id || m.title === item.title);
      if (match && match.id) {
        setSelectedMicroIds([match.id]);
      } else if (allMicroServices.length > 0 && allMicroServices[0].id) {
        setSelectedMicroIds([allMicroServices[0].id]);
      }
    } else if (item?.type === 'core') {
      if (item.platforms && item.platforms.length > 0) {
        const platId = item.initialPlatformId || item.platforms[0].id;
        setSelectedPlatformId(platId);
        const currentPlat = item.platforms.find(p => p.id === platId) || item.platforms[0];
        const rec = currentPlat.tiers.find(t => t.isRecommended);
        setSelectedTierName(rec ? rec.name : currentPlat.tiers[0]?.name);
      } else if (item.tiers && item.tiers.length > 0) {
        if (item.initialTierName) {
          setSelectedTierName(item.initialTierName);
        } else {
          const rec = item.tiers.find(t => t.isRecommended);
          setSelectedTierName(rec ? rec.name : item.tiers[0].name);
        }
      }
    }
  }, [item, allMicroServices]);

  // Handle ESC key to close drawer & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const accentColor = item.accent || '#00F0FF';
  const isMicroCart = item.type === 'micro';
  const isCms = item.id === 'cms-web' || item.slug === 'core-architecture';
  const isAi = item.id === 'api-ai' || item.slug === 'automation-ai';

  const hasPlatforms = Boolean(item.platforms && item.platforms.length > 0);
  const currentPlatform = hasPlatforms 
    ? (item.platforms?.find(p => p.id === selectedPlatformId) || item.platforms?.[0]) || null
    : null;
  const activeTiers = currentPlatform ? currentPlatform.tiers : (item.tiers || []);
  const hasTiers = activeTiers && activeTiers.length > 0;
  const isCustomScoping = item.type === 'core' && !hasTiers && !hasPlatforms;

  const toggleMicroService = (id: string) => {
    setSelectedMicroIds(prev => 
      prev.includes(id) 
        ? (prev.length > 1 ? prev.filter(item => item !== id) : prev)
        : [...prev, id]
    );
  };

  const selectedMicros = allMicroServices.filter(m => m.id && selectedMicroIds.includes(m.id));
  const microTotal = selectedMicros.reduce((acc, m) => {
    if (m.price && m.price[currency] !== null) {
      return acc + (m.price[currency] as number);
    }
    return acc;
  }, 0);
  const microDeposit = Math.round(microTotal * 0.5);

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Slide-over Panel */}
      <div className="relative w-full sm:w-[560px] md:w-[620px] lg:w-[700px] bg-white dark:bg-[#171719] h-full shadow-2xl border-l border-black/[0.08] dark:border-white/[0.08] flex flex-col justify-between overflow-y-auto no-scrollbar z-10 text-[#111111] dark:text-[#EDEDEE] animate-slideInRight">
        
        {/* Sticky Header */}
        <DrawerHeader
          title={item.title}
          isMicroCart={isMicroCart}
          timeline={item.timeline}
          accentColor={accentColor}
          currency={currency}
          setCurrency={setCurrency}
          onClose={onClose}
          lang={lang}
        />

        {/* Drawer Body Content */}
        <div className="p-5 sm:p-6 md:p-7 space-y-6 flex-1">
          {/* Tech Showcase (Only for tech discipline items) */}
          {!isMicroCart && (isCms || isAi || item.id === 'custom-software' || item.slug === 'apps') && (
            <DrawerTechShowcase
              isCms={isCms}
              isAi={isAi}
              lang={lang}
            />
          )}

          {/* Platform Selector */}
          {hasPlatforms && item.platforms && (
            <DrawerPlatformTabs
              platforms={item.platforms}
              selectedPlatformId={selectedPlatformId}
              onSelectPlatform={(platId) => {
                setSelectedPlatformId(platId);
                const plat = item.platforms?.find(p => p.id === platId);
                const rec = plat?.tiers.find(t => t.isRecommended);
                setSelectedTierName(rec ? rec.name : plat?.tiers[0]?.name || null);
              }}
              lang={lang}
            />
          )}
          
          {/* Tiers List */}
          {hasTiers && (
            <div className="space-y-5">
              {!hasPlatforms && (
                <div className="space-y-1.5">
                  <p className="text-xs text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-[#0284C7] dark:text-[#00F0FF] font-semibold">
                    <CreditCard size={12} className="text-[#FE385B]" />
                    <span>{isEs ? '50% de abono para iniciar · 50% contra entrega aprobada' : '50% deposit to lock sprint slot · 50% on launch'}</span>
                  </div>
                </div>
              )}

              <div className="space-y-3.5">
                <div className="font-mono text-[10px] uppercase text-[#8E8E93] tracking-wider">
                  {hasPlatforms
                    ? (isEs ? `// NIVELES DE ${currentPlatform?.name.toUpperCase() || 'PLANES'}:` : `// TIERS FOR ${currentPlatform?.name.toUpperCase() || 'PLANS'}:`)
                    : (isEs ? '// PLANES & TIERS DISPONIBLES:' : '// AVAILABLE SPRINT TIERS:')
                  }
                </div>

                {activeTiers.map((tier, tIdx) => (
                  <DrawerTierCard
                    key={tIdx}
                    tier={tier}
                    currency={currency}
                    isSelected={selectedTierName === tier.name}
                    onSelect={() => setSelectedTierName(tier.name)}
                    lang={lang}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Custom Scoping */}
          {isCustomScoping && (
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-[#111111] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#444444] dark:text-[#CCCCCC] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {item.startingPrice && (
                <div className="p-4 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#8E8E93] uppercase tracking-wider">
                    {isEs ? 'PRECIO BASE DESDE' : 'BASE PRICING FROM'}
                  </span>
                  <span className="font-display font-extrabold text-lg sm:text-xl text-[#0284C7] dark:text-[#00F0FF]">
                    {typeof item.startingPrice === 'object' ? formatCurrency(item.startingPrice[currency], currency) : item.startingPrice}
                  </span>
                </div>
              )}

              <div className="p-5 rounded-2xl border border-dashed border-black/[0.12] dark:border-white/[0.12] bg-black/[0.02] dark:bg-white/[0.02] space-y-2.5">
                <div className="flex items-center gap-2">
                  <Sparkles size={15} className="text-[#FE385B]" />
                  <span className="font-mono text-xs font-bold text-[#111111] dark:text-white uppercase tracking-tight">
                    {isEs ? 'Arquitectura Personalizada' : 'Custom Tailored Architecture'}
                  </span>
                </div>
                <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">
                  {isEs
                    ? 'La integración de APIs y agentes de IA depende directamente de la complejidad de tus sistemas. Realizamos una sesión de discovery técnico para definir el alcance.'
                    : 'API integrations and AI agents depend strictly on your tech stack. We conduct a fast discovery session.'
                  }
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.04] dark:border-white/[0.06]">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 font-display font-bold text-xs text-[#111111] dark:text-white">
                    <CreditCard size={13} className="text-[#FE385B]" />
                    <span>50% Abono Inicial</span>
                  </div>
                  <p className="text-[10.5px] text-[#8E8E93] font-sans">
                    {isEs ? 'Saldo tras entrega aprobada.' : 'Balance upon verified launch.'}
                  </p>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 font-display font-bold text-xs text-[#111111] dark:text-white">
                    <ShieldCheck size={13} className="text-[#0284C7] dark:text-[#00F0FF]" />
                    <span>100% Código Tuyo</span>
                  </div>
                  <p className="text-[10.5px] text-[#8E8E93] font-sans">
                    {isEs ? 'Propiedad total del repositorio.' : 'Full repo & token ownership.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Micro-services Cart */}
          {isMicroCart && (
            <DrawerMicroservices
              allMicroServices={allMicroServices}
              selectedMicroIds={selectedMicroIds}
              toggleMicroService={toggleMicroService}
              currency={currency}
              microTotal={microTotal}
              microDeposit={microDeposit}
              selectedMicros={selectedMicros}
              lang={lang}
            />
          )}
        </div>

        {/* Sticky Footer */}
        <DrawerFooter
          isMicroCart={isMicroCart}
          isCustomScoping={isCustomScoping}
          itemTitle={item.title}
          selectedMicros={selectedMicros}
          microTotal={microTotal}
          currency={currency}
          selectedTierName={selectedTierName}
          currentPlatform={currentPlatform}
          onClose={onClose}
          lang={lang}
        />
      </div>
    </div>
  );
}
