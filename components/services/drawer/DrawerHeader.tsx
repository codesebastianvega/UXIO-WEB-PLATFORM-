'use client';

import React from 'react';
import { X, Clock } from 'lucide-react';
import { CurrencyCode } from '@/data/services';
import { Locale } from '@/types';

interface DrawerHeaderProps {
  title: string;
  isMicroCart: boolean;
  timeline?: string;
  accentColor: string;
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  onClose: () => void;
  lang: Locale;
}

export default function DrawerHeader({
  title,
  isMicroCart,
  timeline,
  accentColor,
  currency,
  setCurrency,
  onClose,
  lang,
}: DrawerHeaderProps) {
  const isEs = lang === 'es';

  return (
    <div className="p-5 sm:p-6 md:p-7 border-b border-black/[0.08] dark:border-white/[0.08] flex items-start justify-between gap-4 sticky top-0 bg-white/95 dark:bg-[#171719]/95 backdrop-blur-md z-20">
      <div className="space-y-1.5 flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
            style={{
              backgroundColor: `${accentColor}15`,
              color: accentColor === '#00F0FF' ? '#008CA3' : accentColor,
              border: `1px solid ${accentColor}35`,
            }}
          >
            {isMicroCart ? '// MINI-CART · QUICK WINS' : '// SPRINT DEPLOYMENT'}
          </span>
          {timeline && !isMicroCart && (
            <span className="font-mono text-[11px] text-[#8E8E93] flex items-center gap-1">
              <Clock size={11} /> {timeline}
            </span>
          )}
        </div>

        <h2 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#111111] dark:text-white truncate">
          {isMicroCart ? (isEs ? 'Micro-Servicios & Setup' : 'Micro-Services Setup') : title}
        </h2>
      </div>

      <div className="flex items-center gap-2.5 flex-shrink-0">
        {/* Currency Switcher */}
        <div className="inline-flex items-center p-0.5 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] border border-black/[0.06] dark:border-white/[0.08] font-mono text-xs">
          <button
            type="button"
            onClick={() => setCurrency('COP')}
            className={`px-2.5 py-1 rounded-md transition-all font-semibold cursor-pointer ${
              currency === 'COP'
                ? 'bg-white dark:bg-[#111111] text-[#111111] dark:text-white shadow-2xs'
                : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
            }`}
          >
            COP
          </button>
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            className={`px-2.5 py-1 rounded-md transition-all font-semibold cursor-pointer ${
              currency === 'USD'
                ? 'bg-white dark:bg-[#111111] text-[#111111] dark:text-white shadow-2xs'
                : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
            }`}
          >
            USD
          </button>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar panel"
          className="p-2 rounded-xl bg-[#F7F7F5] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] text-[#666666] dark:text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors cursor-pointer"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
