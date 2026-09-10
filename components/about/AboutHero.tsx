import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Locale } from '@/types';

interface AboutHeroProps {
  lang: Locale;
}

export default function AboutHero({ lang }: AboutHeroProps) {
  const isEs = lang === 'es';

  return (
    <section className="space-y-6 pt-2">
      {/* Micro Status Badge */}
      <div className="flex items-center gap-2.5">
        <span className="font-mono text-[11px] font-semibold text-[#FE385B] tracking-tight">
          // {isEs ? 'SOBRE UXIO' : 'ABOUT UXIO'}
        </span>
        <span className="h-px w-8 bg-[#FE385B]/40" />
        <span className="font-mono text-[10px] text-[#8E8E93] uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          {isEs ? 'ESTUDIO DE SOFTWARE, LABS & ACADEMY' : 'SOFTWARE STUDIO, LABS & ACADEMY'}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] tracking-tight text-[#111111] dark:text-white max-w-4xl">
        {isEs ? (
          <>
            Diseñamos y construimos tecnología con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE385B] via-[#FF7F07] to-[#FFCC48]">alma visual</span> y precisión de ingeniería.
          </>
        ) : (
          <>
            We engineer and design digital products with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE385B] via-[#FF7F07] to-[#FFCC48]">visual soul</span> and rigorous precision.
          </>
        )}
      </h1>

      {/* Narrative Lead */}
      <p className="text-xs sm:text-sm md:text-base text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-3xl">
        {isEs
          ? 'UXIO nació para erradicar las interfaces lentas, genéricas y sin intención de negocio. Operamos en la intersección exacta entre la dirección de arte contemporánea, arquitecturas web de alto rendimiento a 120 FPS y sistemas de captación comercial masiva.'
          : 'UXIO was founded to eliminate slow, soulless, and commercially ineffective digital interfaces. We live at the exact crossroads of cutting-edge art direction, 120 FPS web architectures, and scalable business acquisition engines.'
        }
      </p>

      {/* Quick Action CTAs */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Link
          href={`/${lang}/contact`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs shadow-md shadow-[#FE385B]/20 transition-all active:scale-[0.98]"
        >
          <span>{isEs ? 'Iniciar un Proyecto' : 'Start a Project'}</span>
          <ArrowRight size={14} />
        </Link>
        <Link
          href={`/${lang}/academy`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] border border-black/[0.08] dark:border-white/[0.1] text-xs font-display font-semibold text-[#111111] dark:text-white transition-all active:scale-[0.98]"
        >
          <Sparkles size={14} className="text-[#00F0FF]" />
          <span>{isEs ? 'Explorar Academy' : 'Explore Academy'}</span>
        </Link>
      </div>
    </section>
  );
}
