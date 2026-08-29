'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';
import { Capability } from '@/data/services';
import { Locale } from '@/types';

interface ServiceCapabilityCardProps {
  cap: Capability;
  idx: number;
  parentSlug?: string;
  lang: Locale;
}

export default function ServiceCapabilityCard({
  cap,
  idx,
  parentSlug = 'technology',
  lang,
}: ServiceCapabilityCardProps) {
  const isEs = lang === 'es';

  // Dynamic Discipline Accent Color
  const disciplineColors: Record<string, string[]> = {
    experience: ['#FFCC48', '#FF7F07', '#FE385B'],
    technology: ['#FE385B', '#0284C7', '#7928CA'],
    brand: ['#FE385B', '#F06C83', '#7928CA'],
    growth: ['#FF7F07', '#10B981', '#FFCC48'],
    content: ['#F06C83', '#FE385B', '#7928CA'],
    solutions: ['#0284C7', '#10B981', '#FF7F07'],
  };

  const palette = disciplineColors[parentSlug] || ['#FE385B', '#0284C7', '#7928CA'];
  const singleColor = palette[idx % palette.length];

  const targetSlug = cap.slug || cap.id || `cap-${idx}`;
  const basePath = `/${lang}/services/${parentSlug}/${targetSlug}`;

  // Helper to format starting price / tier price cleanly
  const formatPriceDisplay = (priceObj: any) => {
    if (!priceObj) return isEs ? 'Cotizar' : 'Quote';
    if (typeof priceObj === 'string') return priceObj;
    if (priceObj.COP) {
      const millions = priceObj.COP / 1000000;
      return millions >= 1 ? `$${millions.toFixed(1).replace('.0', '')}M` : `$${(priceObj.COP / 1000).toFixed(0)}k`;
    }
    if (priceObj.USD) return `$${priceObj.USD}`;
    return isEs ? 'Cotizar' : 'Quote';
  };

  // Determine items to display in the pills section
  const tiersList = cap.tiers || [];
  const platformsList = cap.platforms || [];
  const hasDynamicPills = tiersList.length > 0 || platformsList.length > 0;

  return (
    <AuroraSpotlightCard
      color={singleColor}
      className="h-full flex flex-col justify-between"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] text-[#8E8E93] block">
            [ 0{idx + 1} ]
          </span>
          {cap.timeline && (
            <span className="font-mono text-[10px] text-[#8E8E93] flex items-center gap-1">
              <Clock size={10} /> {cap.timeline}
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-base text-[#111111] dark:text-white tracking-tight">
          <Link href={basePath} className="hover:text-[#FE385B] transition-colors">
            {cap.title}
          </Link>
        </h3>

        <p className="text-xs text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans line-clamp-3">
          {cap.description}
        </p>
      </div>

      {/* Card Bottom: Fully Dynamic Pills + CTA Action */}
      <div className="pt-3.5 border-t border-black/[0.06] dark:border-white/[0.08] space-y-2.5 mt-4">
        {hasDynamicPills && (
          <div className="space-y-1.5">
            <div className="font-mono text-[9px] text-[#8E8E93] uppercase tracking-wider font-semibold">
              {platformsList.length > 0 
                ? (isEs ? '// PLATAFORMAS DISPONIBLES:' : '// AVAILABLE PLATFORMS:')
                : (isEs ? '// PLANES & ALCANCE:' : '// TIERS & SCOPE:')}
            </div>

            <div className={`grid gap-1.5 w-full ${
              (tiersList.length === 2 || platformsList.length === 2)
                ? 'grid-cols-2'
                : (tiersList.length === 3 || platformsList.length === 3)
                ? 'grid-cols-3'
                : 'grid-cols-2 sm:grid-cols-3'
            }`}>
              {/* If platforms are defined */}
              {platformsList.length > 0 && platformsList.map((platform, pIdx) => {
                const priceFormatted = formatPriceDisplay(platform.startingPrice);
                return (
                  <Link
                    key={platform.id || pIdx}
                    href={`${basePath}?platform=${platform.id}`}
                    className="py-1.5 px-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] border border-black/[0.06] dark:border-white/[0.08] text-[#111111] dark:text-white font-display font-semibold text-[11px] flex items-center justify-between gap-1 transition-all active:scale-95 shadow-2xs group/btn"
                  >
                    <span className="truncate">{platform.name}</span>
                    {priceFormatted && (
                      <span className="font-mono text-[9px] text-[#8E8E93] group-hover/btn:text-inherit font-normal">
                        {priceFormatted}
                      </span>
                    )}
                  </Link>
                );
              })}

              {/* If tiers are defined */}
              {platformsList.length === 0 && tiersList.map((tier, tIdx) => {
                const priceFormatted = formatPriceDisplay(tier.price);
                const tierParam = tier.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                return (
                  <Link
                    key={tIdx}
                    href={`${basePath}?tier=${tierParam}`}
                    className="py-1.5 px-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] border border-black/[0.06] dark:border-white/[0.08] text-[#111111] dark:text-white font-display font-semibold text-[11px] flex items-center justify-between gap-1 transition-all active:scale-95 shadow-2xs group/btn"
                  >
                    <span className="truncate">{tier.name}</span>
                    {priceFormatted && (
                      <span className="font-mono text-[9px] text-[#8E8E93] group-hover/btn:text-inherit font-normal">
                        {priceFormatted}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <Link
          href={basePath}
          className="w-full py-2.5 px-3 rounded-xl bg-[#111111] dark:bg-white text-white dark:text-black font-display font-semibold text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-[1.01] active:scale-95 shadow-sm"
        >
          <span>{isEs ? 'Ver Tiers & Configurar Cotización' : 'View Tiers & Configure Quote'}</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </AuroraSpotlightCard>
  );
}
