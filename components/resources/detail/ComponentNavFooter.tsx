'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ResourceItem } from '@/data/resources';
import { Locale } from '@/types';

interface ComponentNavFooterProps {
  lang: Locale;
  componentList: ResourceItem[];
  currentIndex: number;
}

export default function ComponentNavFooter({ lang, componentList, currentIndex }: ComponentNavFooterProps) {
  const isEs = lang === 'es';
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const prevComponent = safeIndex > 0 ? componentList[safeIndex - 1] : componentList[componentList.length - 1];
  const nextComponent = safeIndex < componentList.length - 1 ? componentList[safeIndex + 1] : componentList[0];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
      <Link
        href={`/${lang}/resources/components/${prevComponent.slug}`}
        className="group p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#FE385B] dark:hover:border-[#FE385B] transition-all flex items-center gap-4 shadow-soft-sm"
      >
        <div className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] group-hover:bg-[#FE385B] group-hover:text-white transition-colors">
          <ChevronLeft size={18} />
        </div>
        <div>
          <span className="font-mono text-[10px] text-[#8E8E93] uppercase block">
            {isEs ? 'Componente Anterior' : 'Previous Component'}
          </span>
          <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white group-hover:text-[#FE385B] transition-colors">
            {prevComponent.name}
          </h4>
        </div>
      </Link>

      <Link
        href={`/${lang}/resources/components/${nextComponent.slug}`}
        className="group p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#FE385B] dark:hover:border-[#FE385B] transition-all flex items-center justify-between text-right shadow-soft-sm"
      >
        <div>
          <span className="font-mono text-[10px] text-[#8E8E93] uppercase block">
            {isEs ? 'Siguiente Componente' : 'Next Component'}
          </span>
          <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white group-hover:text-[#FE385B] transition-colors">
            {nextComponent.name}
          </h4>
        </div>
        <div className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] group-hover:bg-[#FE385B] group-hover:text-white transition-colors">
          <ChevronRight size={18} />
        </div>
      </Link>
    </div>
  );
}
