'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { CapabilityTier, CurrencyCode, formatCurrency } from '@/data/services';
import { renderFeatureIcon } from './FeatureIconRenderer';
import { Locale } from '@/types';

interface DrawerTierCardProps {
  tier: CapabilityTier;
  currency: CurrencyCode;
  isSelected: boolean;
  onSelect: () => void;
  lang: Locale;
}

export default function DrawerTierCard({
  tier,
  currency,
  isSelected,
  onSelect,
  lang,
}: DrawerTierCardProps) {
  const isEs = lang === 'es';
  const isRec = tier.isRecommended;
  const rawPrice = tier.price[currency];
  const hasPrice = rawPrice !== null && rawPrice !== undefined;
  const priceFormatted = formatCurrency(rawPrice, currency);
  const depositFormatted = hasPrice ? formatCurrency(Math.round((rawPrice as number) * 0.5), currency) : null;

  return (
    <div
      onClick={onSelect}
      className={`
        p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer relative flex flex-col justify-between space-y-3
        ${isSelected
          ? 'border-[#FE385B] dark:border-[#FE385B] bg-[#FE385B]/[0.04] dark:bg-[#FE385B]/[0.08] shadow-md ring-1 ring-[#FE385B]/60'
          : 'border-black/[0.08] dark:border-white/[0.08] bg-[#F7F7F5]/50 dark:bg-[#0D0D0E]/50 hover:border-black/[0.2] dark:hover:border-white/[0.2]'
        }
      `}
    >
      {/* Tier Header with Badges */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-display font-bold text-base text-[#111111] dark:text-white">
              {tier.name}
            </h4>
            {isRec && (
              <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#FE385B]/15 text-[#FE385B] border border-[#FE385B]/30 uppercase flex items-center gap-1">
                <Sparkles size={9} />
                {isEs ? 'Recomendado' : 'Popular'}
              </span>
            )}
            {isSelected && (
              <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#111111] dark:bg-white text-white dark:text-black uppercase shadow-2xs">
                ✓ {isEs ? 'Seleccionado' : 'Selected'}
              </span>
            )}
          </div>

          {tier.description && (
            <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans">
              {tier.description}
            </p>
          )}
          {hasPrice ? (
            <span className="font-mono text-[11px] text-[#0284C7] dark:text-[#00F0FF] font-semibold block pt-0.5">
              {isEs ? `Abono inicial (50%): ${depositFormatted}` : `Deposit (50%): ${depositFormatted}`}
            </span>
          ) : (
            <span className="font-mono text-[11px] text-[#8E8E93] block pt-0.5">
              {isEs ? 'Presupuesto flexible y cotización a medida' : 'Flexible budget based on scope'}
            </span>
          )}
        </div>

        <div className="font-display font-extrabold text-lg sm:text-xl text-[#111111] dark:text-white tracking-tight flex-shrink-0">
          {priceFormatted}
        </div>
      </div>

      {/* Technical Features List */}
      <ul className="space-y-2 pt-2.5 border-t border-black/[0.04] dark:border-white/[0.06]">
        {tier.features.map((feat, fIdx) => {
          const isObj = typeof feat === 'object';
          const featText = isObj ? feat.text : feat;
          const featIcon = isObj ? feat.icon : undefined;

          return (
            <li key={fIdx} className="flex items-center gap-2.5 text-xs font-sans text-[#333333] dark:text-[#D4D4D8]">
              {renderFeatureIcon(featIcon)}
              <span>{featText}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
