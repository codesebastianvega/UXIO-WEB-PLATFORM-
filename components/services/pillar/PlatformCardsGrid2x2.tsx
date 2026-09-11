'use client';

import React from 'react';
import { Check, Layers } from 'lucide-react';
import { PlatformGroup, CurrencyCode } from '@/data/services';

interface PlatformCardsGrid2x2Props {
  platforms: PlatformGroup[];
  activePlatformId: string;
  onSelectPlatform: (id: string) => void;
  currency: CurrencyCode;
  isEs: boolean;
}

interface BrandStyle {
  accent: string;
  activeRing: string;
  iconColor: string;
}

const getBrandStyle = (id: string): BrandStyle => {
  switch (id) {
    case 'meta':
      return {
        accent: '#E1306C',
        activeRing: 'ring-2 ring-[#E1306C] shadow-[0_0_24px_-4px_rgba(225,48,108,0.45)] border-[#E1306C]/70',
        iconColor: 'text-[#E1306C]',
      };
    case 'tiktok':
      return {
        accent: '#00F2FE',
        activeRing: 'ring-2 ring-[#00F2FE] shadow-[0_0_24px_-4px_rgba(0,242,254,0.4)] border-[#00F2FE]/70',
        iconColor: 'text-[#00F2FE]',
      };
    case 'google-youtube':
      return {
        accent: '#4285F4',
        activeRing: 'ring-2 ring-[#4285F4] shadow-[0_0_24px_-4px_rgba(66,133,244,0.45)] border-[#4285F4]/70',
        iconColor: 'text-[#4285F4]',
      };
    case 'omnicanal':
    default:
      return {
        accent: '#FE385B',
        activeRing: 'ring-2 ring-[#FE385B] shadow-[0_0_24px_-4px_rgba(254,56,91,0.45)] border-[#FE385B]/70',
        iconColor: 'text-[#FE385B]',
      };
  }
};

const renderIcon = (id: string, iconColor: string) => {
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
  return <Layers size={14} className={iconColor} />;
};

export default function PlatformCardsGrid2x2({
  platforms,
  activePlatformId,
  onSelectPlatform,
  currency,
  isEs,
}: PlatformCardsGrid2x2Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      {platforms.map((p, idx) => {
        const isActive = activePlatformId === p.id;
        const brand = getBrandStyle(p.id);

        const priceVal = currency === 'COP' ? p.startingPrice?.COP : p.startingPrice?.USD;
        const priceLabel = currency === 'COP'
          ? (priceVal ? `Desde $${priceVal.toLocaleString('es-CO')} COP` : (isEs ? 'Cotizar a Medida' : 'Custom Quote'))
          : (priceVal ? `From $${priceVal.toLocaleString('en-US')} USD` : (isEs ? 'Cotizar a Medida' : 'Custom Quote'));

        return (
          <button
            key={p.id}
            type="button"
            onClick={() => onSelectPlatform(p.id)}
            className={`relative group text-left w-full rounded-xl overflow-hidden min-h-[115px] sm:min-h-[125px] p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
              isActive
                ? brand.activeRing
                : 'border-black/10 dark:border-white/10 hover:border-white/30 hover:scale-[1.01] shadow-xs'
            }`}
          >
            {/* Background Image with Slow Zoom on Hover */}
            <img
              src={p.imageUrl || '/services/cards/content-omnicanal-v2.jpg'}
              alt={p.name}
              className="absolute inset-0 w-full h-full object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Scrim Gradient for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/45 pointer-events-none" />

            {/* Subtle Brand Accent Radial Glow */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                isActive ? 'opacity-30' : 'opacity-0 group-hover:opacity-15'
              }`}
              style={{
                background: `radial-gradient(circle at top right, ${brand.accent}, transparent 70%)`,
              }}
            />

            {/* Top Row: Index, Clean Monochromatic Badge with Color Dot, & Radio Check */}
            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9.5px] text-white/70 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  [ 0{idx + 1} ]
                </span>

                {/* Elegant Unified Glass Badge without garish rainbow fills */}
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/55 backdrop-blur-md border border-white/15 text-white shadow-2xs">
                  {renderIcon(p.id, brand.iconColor)}
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: brand.accent }}
                  />
                  {p.badge && (
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-white/90 font-medium">
                      {p.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Selection Check Circle */}
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                  isActive
                    ? 'bg-white text-black scale-105 ring-2 ring-white/20'
                    : 'border border-white/40 bg-black/40 backdrop-blur-sm group-hover:border-white/70'
                }`}
              >
                {isActive && <Check size={11} strokeWidth={3.5} />}
              </div>
            </div>

            {/* Bottom Row: Name, Tagline & Price */}
            <div className="relative z-10 mt-2.5">
              <div>
                <h3 className="font-display font-bold text-sm sm:text-[15px] text-white leading-tight drop-shadow-sm">
                  {p.name}
                </h3>
                {p.tagline && (
                  <p className="text-[11px] text-white/80 font-sans mt-0.5 line-clamp-1 leading-snug drop-shadow-2xs">
                    {p.tagline}
                  </p>
                )}
              </div>

              <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[10px] font-semibold text-white/95 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded border border-white/15">
                  {priceLabel}
                </span>

                <span className="font-mono text-[9.5px] text-white/65 uppercase tracking-wide">
                  {isEs ? '3 Planes' : '3 Tiers'}
                </span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
