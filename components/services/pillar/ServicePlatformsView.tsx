'use client';

import React, { useState } from 'react';
import { CreditCard, Sparkles, ArrowRight } from 'lucide-react';
import { PlatformGroup, CapabilityTier, MicroService, CurrencyCode } from '@/data/services';
import { Locale } from '@/types';
import ServiceSubservicesList from './ServiceSubservicesList';
import PlatformCardsGrid2x2 from './PlatformCardsGrid2x2';

interface ServicePlatformsViewProps {
  platforms: PlatformGroup[];
  accent?: string;
  onSelectTier: (tier: CapabilityTier, platform: PlatformGroup, currency: CurrencyCode) => void;
  onOpenMicroDrawer: (micro: MicroService) => void;
  lang: Locale;
}

export default function ServicePlatformsView({
  platforms,
  onSelectTier,
  onOpenMicroDrawer,
  lang,
}: ServicePlatformsViewProps) {
  const isEs = lang === 'es';
  const [currency, setCurrency] = useState<CurrencyCode>('COP');
  const [activePlatformId, setActivePlatformId] = useState<string>(
    platforms && platforms.length > 0 ? platforms[0].id : 'omnicanal'
  );

  const activePlatform = React.useMemo(() => {
    return platforms.find((p) => p.id === activePlatformId) || platforms[0];
  }, [platforms, activePlatformId]);

  if (!platforms || platforms.length === 0) return null;

  return (
    <div className="space-y-10">
      {/* 1. Header, Platform Tabs & Currency Switcher */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
            <span className="font-mono text-xs text-[#8E8E93] uppercase tracking-wider block">
              {isEs ? '// CATEGORÍAS & PLATAFORMAS' : '// CATEGORIES & PLATFORMS'}
            </span>
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
              {isEs ? 'Selecciona el ecosistema que deseas dominar' : 'Select the ecosystem you want to dominate'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Currency Switcher */}
            <div className="inline-flex items-center p-1 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08]">
              <button
                type="button"
                onClick={() => setCurrency('COP')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  currency === 'COP'
                    ? 'bg-white dark:bg-[#1A1A1D] text-[#111111] dark:text-white shadow-xs'
                    : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
                }`}
              >
                COP
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-white dark:bg-[#1A1A1D] text-[#111111] dark:text-white shadow-xs'
                    : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
                }`}
              >
                USD
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-[#0284C7] dark:text-[#00F0FF]">
              <CreditCard size={13} className="text-[#FE385B]" />
              <span>{isEs ? '50% abono · 50% al entregar' : '50% deposit · 50% on approval'}</span>
            </div>
          </div>
        </div>

        {/* Brand-Themed Platform Selector 2x2 Grid with Background Images */}
        <PlatformCardsGrid2x2
          platforms={platforms}
          activePlatformId={activePlatformId}
          onSelectPlatform={setActivePlatformId}
          currency={currency}
          isEs={isEs}
        />

        {/* Active Platform Info Banner */}
        {activePlatform && (
          <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-mono text-xs text-[#FE385B] font-semibold block">
                // {activePlatform.tagline || activePlatform.name}
              </span>
              <p className="text-xs text-[#666666] dark:text-[#A1A1AA] font-sans mt-0.5 leading-relaxed">
                {activePlatform.description}
              </p>
            </div>
            <span className="font-mono text-[10.5px] text-[#8E8E93] whitespace-nowrap">
              3 planes · {activePlatform.microServices?.length || 0} micro-servicios
            </span>
          </div>
        )}

        {/* 2. Pricing Tier Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {activePlatform.tiers.map((tier, idx) => {
            const isRecommended = tier.isRecommended;
            const priceVal = currency === 'COP' ? tier.price.COP : tier.price.USD;
            const displayPrice = currency === 'COP'
              ? (tier.price.COP ? `$${tier.price.COP.toLocaleString('es-CO')} COP` : 'Cotizar a Medida')
              : (tier.price.USD ? `$${tier.price.USD.toLocaleString('en-US')} USD` : 'Custom Quote');
            
            const depositVal = priceVal ? Math.round(priceVal * 0.5) : null;
            const displayDeposit = currency === 'COP'
              ? (depositVal ? `$${depositVal.toLocaleString('es-CO')} COP` : 'Según alcance')
              : (depositVal ? `$${depositVal.toLocaleString('en-US')} USD` : 'Milestone 50%');

            return (
              <div
                key={tier.name || idx}
                className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between space-y-6 transition-all duration-300 relative ${
                  isRecommended
                    ? 'bg-white dark:bg-[#1A1A1D] border-[#FE385B] shadow-soft-md ring-2 ring-[#FE385B]/50'
                    : 'bg-white dark:bg-[#171719] border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.2] dark:hover:border-white/[0.2] shadow-soft-sm'
                }`}
              >
                {isRecommended && (
                  <span className="absolute -top-3 right-6 font-mono text-[9.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FE385B] text-white shadow-md">
                    {isEs ? 'Sprint Más Solicitado' : 'Most Popular'}
                  </span>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#111111] dark:text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans mt-1.5 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white">
                      {displayPrice}
                    </div>
                    <div className="font-mono text-[11px] text-[#0284C7] dark:text-[#00F0FF] mt-1">
                      {isEs ? `Abono de inicio (50%): ${displayDeposit}` : `Booking Deposit: ${displayDeposit}`}
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs font-sans text-[#444444] dark:text-[#CCCCCC]">
                        <Sparkles size={12} className="text-[#FE385B] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{typeof feat === 'string' ? feat : feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectTier(tier, activePlatform, currency)}
                  className={`w-full py-3.5 px-4 rounded-xl font-display font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isRecommended
                      ? 'bg-[#FE385B] hover:bg-[#e02d4e] text-white shadow-accent-glow hover:scale-[1.02] active:scale-95'
                      : 'bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] text-[#111111] dark:text-white hover:scale-[1.01] active:scale-95'
                  }`}
                >
                  <span>{isEs ? 'Seleccionar Plan & Reservar Sprint' : 'Select Plan & Lock Sprint'}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Exclusive Micro-Services for Active Platform */}
      {activePlatform.microServices && activePlatform.microServices.length > 0 && (
        <ServiceSubservicesList
          microServices={activePlatform.microServices}
          onOpenMicroDrawer={onOpenMicroDrawer}
          title={isEs ? `// MICRO-SERVICIOS EXCLUSIVOS · ${activePlatform.name.toUpperCase()}` : `// EXCLUSIVE MICRO-SERVICES · ${activePlatform.name.toUpperCase()}`}
          lang={lang}
        />
      )}
    </div>
  );
}
