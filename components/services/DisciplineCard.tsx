import React from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu, Layers, Palette, TrendingUp, Sparkles } from 'lucide-react';

export interface DisciplineItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  path: string;
  image?: string;
  accent: string;
  auroraGradient: string;
  chips?: string[];
}

interface DisciplineCardProps {
  discipline: DisciplineItem;
  isEs: boolean;
}

export function getDisciplineIcon(id: string) {
  switch (id) {
    case 'technology':
      return <Cpu size={18} className="text-[#00F0FF]" />;
    case 'experience':
      return <Layers size={18} className="text-[#FE385B]" />;
    case 'brand':
      return <Palette size={18} className="text-[#FFCC48]" />;
    case 'growth':
      return <TrendingUp size={18} className="text-[#FF7F07]" />;
    case 'content':
      return <Sparkles size={18} className="text-[#10B981]" />;
    case 'solutions':
      return <Cpu size={18} className="text-[#7928CA]" />;
    default:
      return <Sparkles size={18} className="text-[#00F0FF]" />;
  }
}

export function DisciplineCard({ discipline, isEs }: DisciplineCardProps) {
  return (
    <div className="group relative rounded-2xl p-5 sm:p-6 bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.18] dark:hover:border-white/[0.2] shadow-soft-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden">
      <div 
        className={`absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-15 dark:opacity-25 blur-3xl transition-all duration-300 group-hover:opacity-35 group-hover:scale-125 pointer-events-none bg-gradient-to-br ${discipline.auroraGradient}`}
      />

      {/* Visual Card Cover Header */}
      {discipline.image && (
        <Link
          href={discipline.path}
          className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] shadow-2xs group/img block"
        >
          <img
            src={discipline.image}
            alt={discipline.title}
            className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <span
            className="absolute top-2.5 right-2.5 font-mono text-[9px] uppercase px-2.5 py-0.5 rounded-full text-white font-bold shadow-sm"
            style={{ backgroundColor: discipline.accent }}
          >
            {discipline.badge}
          </span>
        </Link>
      )}

      <div className="relative z-10 space-y-3.5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.04] dark:border-white/[0.06] shadow-2xs">
              {getDisciplineIcon(discipline.id)}
            </div>
            <h2 className="font-display font-bold text-lg text-[#111111] dark:text-white tracking-tight">
              {discipline.title}
            </h2>
          </div>

          {!discipline.image && (
            <span 
              className="font-mono text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold shadow-2xs"
              style={{
                backgroundColor: `${discipline.accent}15`,
                color: discipline.accent,
                border: `1px solid ${discipline.accent}35`
              }}
            >
              {discipline.badge}
            </span>
          )}
        </div>

        <p className="text-xs text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
          {discipline.description}
        </p>

        <div className="space-y-1.5 pt-1">
          <div className="font-mono text-[9px] uppercase text-[#8E8E93] tracking-wider">
            {isEs ? 'Capacidades & Tecnologías' : 'Core Capabilities'}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {discipline.chips?.map((chip: string, cIdx: number) => (
              <span
                key={cIdx}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.04] dark:border-white/[0.06] text-[#111111] dark:text-[#EDEDEE]"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: discipline.accent }}></span>
                <span>{chip}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-4 mt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
        <Link
          href={discipline.path}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#111111] dark:text-white group-hover:text-[#FE385B] transition-colors"
        >
          <span>{isEs ? 'Explorar servicios y soluciones' : 'Explore services & solutions'}</span>
          <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </Link>

        <div 
          className="w-2 h-2 rounded-full"
          style={{ 
            backgroundColor: discipline.accent,
            boxShadow: `0 0 6px ${discipline.accent}` 
          }}
        />
      </div>
    </div>
  );
}
