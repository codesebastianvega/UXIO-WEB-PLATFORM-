import React from 'react';
import { Locale } from '@/types';

interface PeopleHeroProps {
  lang: Locale;
}

export default function PeopleHero({ lang }: PeopleHeroProps) {
  const isEs = lang === 'es';

  return (
    <section className="space-y-4 pt-2">
      {/* Micro Status Badge */}
      <div className="flex items-center gap-2.5">
        <span className="font-mono text-[11px] font-semibold text-[#00F0FF] tracking-tight">
          // {isEs ? 'EQUIPO & CREADORES' : 'TEAM & CREATORS'}
        </span>
        <span className="h-px w-8 bg-[#00F0FF]/40" />
        <span className="font-mono text-[10px] text-[#8E8E93] uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          {isEs ? 'TALENTO DISTRIBUIDO · LATAM' : 'DISTRIBUTED TALENT · LATAM'}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] tracking-tight text-[#111111] dark:text-white max-w-4xl">
        {isEs ? (
          <>
            Las mentes, ojos y manos que dan vida a cada <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#FE385B] to-[#FF7F07]">píxel y línea de código</span>.
          </>
        ) : (
          <>
            The minds, eyes, and craft powering every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#FE385B] to-[#FF7F07]">pixel and line of code</span>.
          </>
        )}
      </h1>

      {/* Narrative Lead */}
      <p className="text-xs sm:text-sm md:text-base text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-3xl">
        {isEs
          ? 'Creemos en equipos compactos de altísima densidad de talento. Ingenieros que diseñan con sensibilidad tipográfica y diseñadores que entienden arquitecturas de datos. Aquí no hay intermediarios: solo creadores operando al más alto nivel.'
          : 'We believe in compact, high-density talent teams. Engineers with deep typographic sensibility and designers who understand data architecture. Zero middle management: purely elite builders.'
        }
      </p>
    </section>
  );
}
