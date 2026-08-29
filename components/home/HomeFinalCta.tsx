'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Locale } from '@/types';

interface HomeFinalCtaProps {
  lang: Locale;
  dict: any;
}

export default function HomeFinalCta({ lang, dict }: HomeFinalCtaProps) {
  const isEs = lang === 'es';

  return (
    <section className="rounded-2xl p-8 sm:p-10 bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-center space-y-4 relative overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-3">
        <span className="font-mono text-xs font-semibold text-[#FE385B]">
          {dict.contact_prefix || (isEs ? '// 05 · CONTACTO' : '// 05 · CONTACT')}
        </span>

        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#111111] dark:text-white tracking-tight">
          {dict.contact_title || (isEs ? '¿Tienes algo que quieres construir?' : 'Have something you want to build?')}
        </h2>

        <p className="text-sm sm:text-base text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-xl mx-auto">
          {dict.contact_desc || (isEs
            ? 'Cuéntanos qué necesitas. Te ayudamos a convertir la idea en una solución real.'
            : 'Tell us what you need. We help you turn the idea into a real solution.'
          )}
        </p>

        <div className="pt-3">
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FE385B] hover:bg-[#e02d4e] text-white font-display font-bold text-xs tracking-wide transition-all shadow-accent-glow hover:shadow-lg active:scale-95"
          >
            <span>{dict.contact_cta || (isEs ? 'Cuéntanos tu proyecto' : 'Tell us about your project')}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
