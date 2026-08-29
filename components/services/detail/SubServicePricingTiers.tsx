'use client';

import React, { useState } from 'react';
import { CreditCard, Sparkles, ArrowRight, Layers, Check } from 'lucide-react';
import { PricingTier, PlatformGroup, CurrencyCode } from '@/data/services';
import { Locale } from '@/types';

interface SubServicePricingTiersProps {
  pricingTiers: PricingTier[];
  platforms?: PlatformGroup[];
  onSelectTier: (tier: PricingTier) => void;
  lang: Locale;
}

export default function SubServicePricingTiers({
  pricingTiers,
  platforms,
  onSelectTier,
  lang,
}: SubServicePricingTiersProps) {
  const isEs = lang === 'es';
  const [currency, setCurrency] = useState<CurrencyCode>('COP');
  const [activePlatformId, setActivePlatformId] = useState<string>(
    platforms && platforms.length > 0 ? platforms[0].id : 'wordpress'
  );

  // Determine which tiers to show based on platforms or direct pricingTiers
  const activeTiers: PricingTier[] = React.useMemo(() => {
    if (platforms && platforms.length > 0) {
      const matchedPlatform = platforms.find((p) => p.id === activePlatformId) || platforms[0];
      return matchedPlatform.tiers.map((t, idx) => ({
        id: `${matchedPlatform.id}-${idx}`,
        name: t.name,
        price: currency === 'COP' ? (t.price.COP ? `$${t.price.COP.toLocaleString('es-CO')} COP` : 'Cotizar a Medida') : (t.price.USD ? `$${t.price.USD.toLocaleString('en-US')} USD` : 'Custom Quote'),
        priceCOP: t.price.COP ? `$${t.price.COP.toLocaleString('es-CO')} COP` : 'Cotizar a Medida',
        priceUSD: t.price.USD ? `$${t.price.USD.toLocaleString('en-US')} USD` : 'Custom Quote',
        deposit: currency === 'COP' ? (t.price.COP ? `$${Math.round(t.price.COP * 0.5).toLocaleString('es-CO')} COP (50%)` : 'Según alcance') : (t.price.USD ? `$${Math.round(t.price.USD * 0.5).toLocaleString('en-US')} USD (50%)` : 'Milestone 50%'),
        depositCOP: t.price.COP ? `$${Math.round(t.price.COP * 0.5).toLocaleString('es-CO')} COP` : 'Según alcance',
        depositUSD: t.price.USD ? `$${Math.round(t.price.USD * 0.5).toLocaleString('en-US')} USD` : 'Milestone 50%',
        timeline: '1 a 2 Semanas',
        popular: t.isRecommended,
        isRecommended: t.isRecommended,
        description: t.description || '',
        features: t.features.map((f) => (typeof f === 'string' ? f : f.text)),
        platformId: matchedPlatform.id,
      }));
    }
    return pricingTiers;
  }, [platforms, activePlatformId, currency, pricingTiers]);

  return (
    <section className="space-y-6">
      {/* Header & Currency Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div>
          <span className="font-mono text-xs text-[#8E8E93] uppercase tracking-wider block">
            {isEs ? '// TIERS DE PRECIOS & ALCANCE CERRADO' : '// FIXED-SCOPE SPRINT TIERS'}
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
            {isEs ? 'Selecciona el nivel que mejor se adapta a tu etapa' : 'Select the tier that fits your stage'}
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

      {/* Platform Selector Tabs (if applicable) */}
      {platforms && platforms.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap pb-2">
          <span className="font-mono text-xs text-[#8E8E93] mr-1 uppercase">
            {isEs ? 'Plataforma:' : 'Platform:'}
          </span>
          {platforms.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActivePlatformId(p.id)}
              className={`py-2 px-4 rounded-xl border text-xs font-display font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activePlatformId === p.id
                  ? 'border-[#FE385B] bg-[#FE385B]/10 text-[#FE385B] font-bold shadow-xs'
                  : 'border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#171719] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
              }`}
            >
              <Layers size={13} />
              <span>{p.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Pricing Tier Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {activeTiers.map((tier) => {
          const isRecommended = tier.popular || tier.isRecommended;
          const displayPrice = currency === 'USD' && tier.priceUSD ? tier.priceUSD : tier.priceCOP || tier.price;
          const displayDeposit = currency === 'USD' && tier.depositUSD ? tier.depositUSD : tier.depositCOP || tier.deposit;

          return (
            <div
              key={tier.id}
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
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onSelectTier(tier)}
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
  );
}
