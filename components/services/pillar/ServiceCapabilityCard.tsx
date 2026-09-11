'use client';

import React from 'react';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';
import AuroraBeamButton from '@/components/ui/AuroraBeamButton';
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
      <div>
        {/* 1. Card Top Image / Cover Preview */}
        {cap.imageUrl ? (
          <Link href={basePath} className="block relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] group/img shadow-2xs">
            <img
              src={cap.imageUrl}
              alt={cap.title}
              className="w-full h-full object-cover object-center select-none transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
            
            {/* Badges on image */}
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
              <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white/90 border border-white/10 font-bold">
                [ 0{idx + 1} ]
              </span>
              {cap.badge && (
                <span
                  className="font-mono text-[9px] uppercase px-2.5 py-0.5 rounded-full text-white font-bold shadow-sm"
                  style={{ backgroundColor: singleColor }}
                >
                  {cap.badge}
                </span>
              )}
            </div>

            {cap.timeline && (
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 font-mono text-[10px] text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
                <Clock size={10} className="text-white/80" /> {cap.timeline}
              </div>
            )}
          </Link>
        ) : (
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-mono text-[10px] text-[#8E8E93] block">
              [ 0{idx + 1} ]
            </span>
            {cap.timeline && (
              <span className="font-mono text-[10px] text-[#8E8E93] flex items-center gap-1">
                <Clock size={10} /> {cap.timeline}
              </span>
            )}
          </div>
        )}

        <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white tracking-tight">
          <Link href={basePath} className="hover:text-[#FE385B] transition-colors">
            {cap.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-[13px] text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans line-clamp-3 mt-1.5">
          {cap.description}
        </p>
      </div>

      {/* Card Bottom: Fully Dynamic Pills + CTA Action */}
      <div className="pt-3.5 border-t border-black/[0.06] dark:border-white/[0.08] space-y-2.5 mt-4">
        {hasDynamicPills && (
          <div className="space-y-1.5">
            <div className="font-mono text-[9px] text-[#8E8E93] uppercase tracking-wider font-semibold">
              {platformsList.length > 0 
                ? (isEs ? 'Plataformas disponibles:' : 'Available platforms:')
                : (isEs ? 'Planes disponibles:' : 'Available packages:')}
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

        <AuroraBeamButton
          href={basePath}
          label={isEs ? 'Ver opciones y qué incluye' : 'View packages & what’s included'}
          accent={singleColor}
        />
      </div>
    </AuroraSpotlightCard>
  );
}
