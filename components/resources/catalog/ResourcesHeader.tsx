'use client';

import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';
import { Locale } from '@/types';

interface ResourcesHeaderProps {
  meta: {
    badge: string;
    titleEs: string;
    titleEn: string;
    descriptionEs: string;
    descriptionEn: string;
  };
  lang: Locale;
}

export default function ResourcesHeader({ meta, lang }: ResourcesHeaderProps) {
  const isEs = lang === 'es';

  return (
    <div className="space-y-4 pb-6 pt-2 border-b border-black/[0.06] dark:border-white/[0.08]">
      <div className="flex items-center gap-2 font-mono text-xs text-[#FE385B] font-bold uppercase tracking-wider">
        <Sparkles size={13} />
        <span>{meta.badge}</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[50px] tracking-tight text-[#111111] dark:text-white leading-[1.15] pt-1">
            {isEs ? meta.titleEs : meta.titleEn}
          </h1>
          <p className="text-sm sm:text-base text-[#666666] dark:text-[#8E8E93] font-sans max-w-2xl leading-relaxed mt-2.5">
            {isEs ? meta.descriptionEs : meta.descriptionEn}
          </p>
        </div>

        {/* Global CLI quick badge */}
        <div className="p-3 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] font-mono text-xs text-[#0284C7] dark:text-[#00F0FF] flex items-center gap-2 self-start lg:self-auto flex-shrink-0">
          <Terminal size={14} />
          <code>npx @uxio/ui add [component-name]</code>
        </div>
      </div>
    </div>
  );
}
