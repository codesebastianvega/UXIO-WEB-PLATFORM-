'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cpu, Layers, Palette, TrendingUp, Film, Puzzle, Sparkles } from 'lucide-react';
import { ServiceItem } from '@/data/services';
import { Locale } from '@/types';

interface ServicePillarHeroProps {
  service: ServiceItem;
  lang: Locale;
}

export function getDisciplineIcon(slug: string) {
  switch (slug) {
    case 'technology':
      return <Cpu size={18} className="text-[#0284C7] dark:text-[#00F0FF]" />;
    case 'experience':
      return <Layers size={18} className="text-[#FFCC48]" />;
    case 'brand':
      return <Palette size={18} className="text-[#FE385B]" />;
    case 'growth':
      return <TrendingUp size={18} className="text-[#FF7F07]" />;
    case 'content':
      return <Film size={18} className="text-[#F06C83]" />;
    case 'solutions':
      return <Puzzle size={18} className="text-[#0284C7] dark:text-[#00F0FF]" />;
    default:
      return <Sparkles size={18} className="text-[#0284C7] dark:text-[#00F0FF]" />;
  }
}

export default function ServicePillarHero({ service, lang }: ServicePillarHeroProps) {
  const isEs = lang === 'es';

  return (
    <section className="space-y-4">
      <Link
        href={`/${lang}/services`}
        className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors group"
      >
        <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1" />
        <span>{isEs ? 'Volver a Servicios' : 'Back to Services'}</span>
      </Link>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1.5"
            style={{
              backgroundColor: `${service.accent}15`,
              color: service.accent === '#00F0FF' ? '#008CA3' : service.accent,
              border: `1px solid ${service.accent}35`,
            }}
          >
            {getDisciplineIcon(service.slug)}
            <span>// DISCIPLINA · {service.slug.toUpperCase()}</span>
          </span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-tight text-[#111111] dark:text-white max-w-4xl">
          {service.title}
        </h1>

        <p className="font-mono text-sm sm:text-base text-[#8E8E93] max-w-3xl">
          {service.subtitle}
        </p>

        <p className="text-sm sm:text-base text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-3xl pt-1">
          {service.approach}
        </p>
      </div>
    </section>
  );
}
