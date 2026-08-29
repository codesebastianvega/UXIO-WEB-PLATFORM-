'use client';

import React, { useState } from 'react';
import { CreditCard, Sparkles, ArrowRight, Layers } from 'lucide-react';
import { PlatformGroup, CapabilityTier, MicroService, CurrencyCode } from '@/data/services';
import { Locale } from '@/types';
import ServiceSubservicesList from './ServiceSubservicesList';

interface ServicePlatformsViewProps {
  platforms: PlatformGroup[];
  accent?: string;
  onSelectTier: (tier: CapabilityTier, platform: PlatformGroup, currency: CurrencyCode) => void;
  onOpenMicroDrawer: (micro: MicroService) => void;
  lang: Locale;
}

const getPlatformStyles = (id: string, isActive: boolean) => {
  switch (id) {
    case 'meta':
      return {
        wrapper: isActive
          ? 'p-[1.5px] rounded-xl bg-gradient-to-r from-[#405DE6] via-[#833AB4] via-[#FD1D1D] to-[#FCAF45] shadow-[0_0_20px_-3px_rgba(225,48,108,0.4)]'
          : 'p-[1.5px] rounded-xl bg-transparent hover:bg-gradient-to-r hover:from-[#405DE6]/40 hover:via-[#833AB4]/40 hover:to-[#FD1D1D]/40 transition-all',
        inner: isActive
          ? 'bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#FCAF45]/10 bg-white dark:bg-[#18181B] text-[#E1306C] dark:text-[#F77737] font-bold'
          : 'bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white',
        badge: isActive
          ? 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-xs font-bold'
          : 'bg-black/[0.05] dark:bg-white/[0.08] text-[#8E8E93]',
        iconColor: isActive ? 'text-[#E1306C]' : 'text-[#8E8E93]',
      };
    case 'tiktok':
      return {
        wrapper: isActive
          ? 'p-[1.5px] rounded-xl bg-gradient-to-r from-[#00F2FE] via-[#111111] to-[#FE2C55] shadow-[0_0_20px_-3px_rgba(0,242,254,0.35),0_0_20px_-3px_rgba(254,44,85,0.35)]'
          : 'p-[1.5px] rounded-xl bg-transparent hover:bg-gradient-to-r hover:from-[#00F2FE]/40 hover:to-[#FE2C55]/40 transition-all',
        inner: isActive
          ? 'bg-[#111113] text-white font-bold'
          : 'bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white',
        badge: isActive
          ? 'bg-gradient-to-r from-[#00F2FE] to-[#FE2C55] text-black font-extrabold shadow-xs'
          : 'bg-black/[0.05] dark:bg-white/[0.08] text-[#8E8E93]',
        iconColor: isActive ? 'text-[#00F2FE]' : 'text-[#8E8E93]',
      };
    case 'google-youtube':
      return {
        wrapper: isActive
          ? 'p-[1.5px] rounded-xl bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] shadow-[0_0_20px_-3px_rgba(66,133,244,0.4)]'
          : 'p-[1.5px] rounded-xl bg-transparent hover:bg-gradient-to-r hover:from-[#4285F4]/40 hover:via-[#FBBC05]/40 hover:to-[#34A853]/40 transition-all',
        inner: isActive
          ? 'bg-gradient-to-r from-[#4285F4]/10 via-[#FBBC05]/10 to-[#34A853]/10 bg-white dark:bg-[#18181B] text-[#4285F4] dark:text-[#38BDF8] font-bold'
          : 'bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white',
        badge: isActive
          ? 'bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] text-white shadow-xs font-bold'
          : 'bg-black/[0.05] dark:bg-white/[0.08] text-[#8E8E93]',
        iconColor: isActive ? 'text-[#4285F4]' : 'text-[#8E8E93]',
      };
    case 'omnicanal':
    default:
      return {
        wrapper: isActive
          ? 'p-[1.5px] rounded-xl bg-gradient-to-r from-[#FE385B] via-[#FF7F07] to-[#7928CA] shadow-[0_0_20px_-3px_rgba(254,56,91,0.35)]'
          : 'p-[1.5px] rounded-xl bg-transparent hover:bg-gradient-to-r hover:from-[#FE385B]/40 hover:to-[#7928CA]/40 transition-all',
        inner: isActive
          ? 'bg-gradient-to-r from-[#FE385B]/10 to-[#7928CA]/10 bg-white dark:bg-[#18181B] text-[#FE385B] font-bold'
          : 'bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white',
        badge: isActive
          ? 'bg-gradient-to-r from-[#FE385B] to-[#7928CA] text-white shadow-xs font-bold'
          : 'bg-black/[0.05] dark:bg-white/[0.08] text-[#8E8E93]',
        iconColor: isActive ? 'text-[#FE385B]' : 'text-[#8E8E93]',
      };
  }
};

const renderPlatformIcon = (id: string, iconColor: string) => {
  if (id === 'meta') {
    return (
      <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    );
  }
  if (id === 'tiktok') {
    return (
      <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    );
  }
  if (id === 'google-youtube') {
    return (
      <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
      </svg>
    );
  }
  return <Layers size={13} className={iconColor} />;
};

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

        {/* Brand-Themed Platform Selector Tabs */}
        <div className="flex items-center gap-2.5 flex-wrap">
          {platforms.map((p) => {
            const isActive = activePlatformId === p.id;
            const styles = getPlatformStyles(p.id, isActive);

            return (
              <div key={p.id} className={styles.wrapper}>
                <button
                  type="button"
                  onClick={() => setActivePlatformId(p.id)}
                  className={`py-2 px-3.5 rounded-[10px] text-xs font-display font-semibold transition-all cursor-pointer flex items-center gap-2 ${styles.inner}`}
                >
                  {renderPlatformIcon(p.id, styles.iconColor)}
                  <span>{p.name}</span>
                  {p.badge && (
                    <span className={`text-[9.5px] font-mono px-1.5 py-0.2 rounded-full uppercase tracking-wider ${styles.badge}`}>
                      {p.badge}
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>

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
