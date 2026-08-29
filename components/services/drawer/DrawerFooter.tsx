'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CurrencyCode, formatCurrency, MicroService, PlatformGroup } from '@/data/services';
import { Locale } from '@/types';

interface DrawerFooterProps {
  isMicroCart: boolean;
  isCustomScoping: boolean;
  itemTitle: string;
  selectedMicros: MicroService[];
  microTotal: number;
  currency: CurrencyCode;
  selectedTierName: string | null;
  currentPlatform: PlatformGroup | null;
  onClose: () => void;
  lang: Locale;
}

export default function DrawerFooter({
  isMicroCart,
  isCustomScoping,
  itemTitle,
  selectedMicros,
  microTotal,
  currency,
  selectedTierName,
  currentPlatform,
  onClose,
  lang,
}: DrawerFooterProps) {
  const isEs = lang === 'es';

  return (
    <div className="p-5 sm:p-6 md:p-7 border-t border-black/[0.08] dark:border-white/[0.08] bg-white/95 dark:bg-[#171719]/95 backdrop-blur-md sticky bottom-0 space-y-2 z-20">
      {isMicroCart ? (
        <Link
          href={`/${lang}/contact?service=MicroServices&items=${encodeURIComponent(selectedMicros.map(m => m.title).join(', '))}&total=${encodeURIComponent(formatCurrency(microTotal, currency))}`}
          onClick={onClose}
          className="w-full py-3 px-4 rounded-xl bg-[#FE385B] hover:bg-[#e02d4e] text-white font-display font-semibold text-xs flex items-center justify-center gap-2 shadow-accent-glow active:scale-95 transition-all"
        >
          <span>{isEs ? `Comenzar Setup (${formatCurrency(microTotal, currency)})` : `Start Setup (${formatCurrency(microTotal, currency)})`}</span>
          <ArrowRight size={13} />
        </Link>
      ) : isCustomScoping ? (
        <Link
          href={`/${lang}/contact?service=${encodeURIComponent(itemTitle)}&currency=${currency}`}
          onClick={onClose}
          className="w-full py-3 px-4 rounded-xl bg-[#FE385B] hover:bg-[#e02d4e] text-white font-display font-semibold text-xs flex items-center justify-center gap-2 shadow-accent-glow active:scale-95 transition-all"
        >
          <span>{isEs ? 'Solicitar Cotización Técnica' : 'Request Technical Scoping'}</span>
          <ArrowRight size={13} />
        </Link>
      ) : (
        <Link
          href={`/${lang}/contact?service=${encodeURIComponent(itemTitle)}${currentPlatform ? `&platform=${encodeURIComponent(currentPlatform.name)}` : ''}&plan=${encodeURIComponent(selectedTierName || '')}&currency=${currency}`}
          onClick={onClose}
          className="w-full py-3 px-4 rounded-xl bg-[#FE385B] hover:bg-[#e02d4e] text-white font-display font-semibold text-xs flex items-center justify-center gap-2 shadow-accent-glow active:scale-95 transition-all"
        >
          <span>{isEs ? `Seleccionar Plan: ${selectedTierName || ''}` : `Select Plan: ${selectedTierName || ''}`}</span>
          <ArrowRight size={13} />
        </Link>
      )}

      <p className="font-mono text-[9.5px] text-center text-[#8E8E93]">
        {isEs
          ? '✓ No hay cargos automáticos hoy · Recibirás propuesta formal, arquitectura y NDA.'
          : '✓ No automatic charge today · You will receive a formal NDA and architecture scope.'
        }
      </p>
    </div>
  );
}
