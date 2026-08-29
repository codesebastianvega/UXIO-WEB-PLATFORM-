'use client';

import React from 'react';
import Link from 'next/link';
import { Copy, Check, ArrowRight } from 'lucide-react';
import ResourceCardLivePreview from './ResourceCardLivePreview';
import { ResourceItem } from '@/data/resources';
import { Locale } from '@/types';

interface ResourceCardProps {
  item: ResourceItem;
  lang: Locale;
  copiedId: string | null;
  onCopyInstall: (id: string, cmd: string, e: React.MouseEvent) => void;
}

export default function ResourceCard({
  item,
  lang,
  copiedId,
  onCopyInstall,
}: ResourceCardProps) {
  const isEs = lang === 'es';
  const installCmd = item.installCommand || `npx @uxio/ui add ${item.slug}`;

  return (
    <div className="group rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#FE385B] dark:hover:border-[#FE385B] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-soft-sm hover:shadow-soft-md">
      {/* Live Visual Stage Container */}
      <div className="relative w-full h-52 bg-black/[0.02] dark:bg-black/40 border-b border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center overflow-hidden">
        <ResourceCardLivePreview item={item} lang={lang} />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-20">
          <span className="font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-black/70 dark:bg-white/10 text-white backdrop-blur-md uppercase tracking-wider">
            {item.previewDetails?.tag || '// COMPONENT'}
          </span>
          <span className={`font-mono text-[9.5px] px-2.5 py-0.5 rounded-full font-bold uppercase ${
            item.isOpenSource
              ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30'
              : 'bg-[#FE385B]/15 text-[#FE385B] border border-[#FE385B]/30'
          }`}>
            {item.priceText}
          </span>
        </div>
      </div>

      {/* Card Info & Actions */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between bg-white dark:bg-[#171719]">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-display font-bold text-base text-[#111111] dark:text-white group-hover:text-[#FE385B] transition-colors">
              <Link href={`/${lang}/resources/components/${item.slug}`}>
                {item.name}
              </Link>
            </h3>
            <div className="flex items-center gap-1">
              <span className="font-mono text-[10px] text-[#8E8E93] bg-black/[0.03] dark:bg-white/[0.05] px-1.5 py-0.5 rounded">
                {item.tech[0]}
              </span>
            </div>
          </div>

          <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* CLI Quick Copy + Detail Link */}
        <div className="pt-3.5 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={(e) => onCopyInstall(item.id, installCmd, e)}
            className="flex-1 px-3 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.06] dark:hover:bg-white/[0.09] text-[11px] font-mono text-[#666666] dark:text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors flex items-center justify-between truncate cursor-pointer"
            title="Copiar comando de instalación"
          >
            <span className="truncate">{installCmd}</span>
            {copiedId === item.id ? (
              <Check size={12} className="text-[#10B981] flex-shrink-0 ml-1.5" />
            ) : (
              <Copy size={12} className="flex-shrink-0 ml-1.5" />
            )}
          </button>

          <Link
            href={`/${lang}/resources/components/${item.slug}`}
            className="p-2.5 rounded-xl bg-[#FE385B]/10 hover:bg-[#FE385B] text-[#FE385B] hover:text-white transition-colors flex-shrink-0"
            title="Ver documentación y playground"
          >
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
