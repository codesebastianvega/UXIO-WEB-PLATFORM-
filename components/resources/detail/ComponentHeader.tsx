'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, Zap, Boxes, ShieldCheck } from 'lucide-react';
import { ResourceItem } from '@/data/resources';
import { Locale } from '@/types';

interface ComponentHeaderProps {
  item: ResourceItem;
  lang: Locale;
  componentList?: ResourceItem[];
  currentIndex?: number;
  totalCount?: number;
}

export default function ComponentHeader({ item, lang, componentList = [], currentIndex = 0, totalCount }: ComponentHeaderProps) {
  const isEs = lang === 'es';
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const prevComponent = componentList.length > 0 ? (safeIndex > 0 ? componentList[safeIndex - 1] : componentList[componentList.length - 1]) : item;
  const nextComponent = componentList.length > 0 ? (safeIndex < componentList.length - 1 ? componentList[safeIndex + 1] : componentList[0]) : item;
  const countDisplay = totalCount || componentList.length || 8;

  return (
    <div className="space-y-4">
      {/* Top Bar: Breadcrumb + Chevron Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Link
            href={`/${lang}/resources/components`}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            <span>{isEs ? 'Volver a Componentes' : 'Back to Components'}</span>
          </Link>
          <span className="text-[#8E8E93]">/</span>
          <span className="font-mono text-xs text-[#FE385B] font-semibold uppercase">
            // {item.previewDetails?.tag || '// COMPONENT'}
          </span>
        </div>

        {/* Top Chevron Navigator */}
        <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] font-mono text-xs self-start sm:self-auto">
          <Link
            href={`/${lang}/resources/components/${prevComponent.slug}`}
            className="px-2 py-1 rounded-lg text-[#8E8E93] hover:text-[#111111] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.08] transition-colors flex items-center gap-1"
            title={`Anterior: ${prevComponent.name}`}
          >
            <ChevronLeft size={13} />
            <span className="hidden md:inline text-[10.5px] font-semibold">{isEs ? 'Anterior' : 'Prev'}</span>
          </Link>

          <span className="px-2 py-0.5 text-[10px] text-[#8E8E93] font-bold border-x border-black/[0.06] dark:border-white/[0.08]">
            0{safeIndex + 1} / 0{componentList.length}
          </span>

          <Link
            href={`/${lang}/resources/components/${nextComponent.slug}`}
            className="px-2 py-1 rounded-lg text-[#8E8E93] hover:text-[#111111] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.08] transition-colors flex items-center gap-1"
            title={`Siguiente: ${nextComponent.name}`}
          >
            <span className="hidden md:inline text-[10.5px] font-semibold">{isEs ? 'Siguiente' : 'Next'}</span>
            <ChevronRight size={13} />
          </Link>
        </div>
      </div>

      {/* Main Title & Badges */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[52px] tracking-tight text-[#111111] dark:text-white">
              {item.name}
            </h1>
            <span className={`font-mono text-xs px-2.5 py-1 rounded-full font-bold uppercase ${
              item.isOpenSource 
                ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30' 
                : 'bg-[#FE385B]/15 text-[#FE385B] border border-[#FE385B]/30'
            }`}>
              {item.priceText}
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#666666] dark:text-[#8E8E93] font-sans max-w-2xl leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 font-mono text-[10.5px] px-2.5 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.08] text-[#111111] dark:text-[#EDEDEE] border border-black/[0.06] dark:border-white/[0.08] font-semibold">
            <Zap size={12} className="text-[#FE385B]" /> {item.tech[0]}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[10.5px] px-2.5 py-1 rounded-lg bg-[#00F0FF]/10 text-[#008CA3] dark:text-[#00F0FF] border border-[#00F0FF]/20 font-semibold">
            <Boxes size={12} /> {item.tech[1] || 'Next.js'}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[10.5px] px-2.5 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.08] text-[#111111] dark:text-[#EDEDEE] border border-black/[0.06] dark:border-white/[0.08] font-semibold">
            <ShieldCheck size={12} className={item.isOpenSource ? "text-[#10B981]" : "text-[#FE385B]"} /> 
            {item.isOpenSource ? 'MIT License' : 'Commercial Pro'}
          </span>
        </div>
      </div>
    </div>
  );
}
