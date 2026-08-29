'use client';

import React from 'react';
import { EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import { Compass, Crown, ShieldAlert } from 'lucide-react';

interface EcosystemJourneyAndTiersProps {
  ecosystem: EcosystemSchema;
  lang: Locale;
}

export default function EcosystemJourneyAndTiers({
  ecosystem,
  lang,
}: EcosystemJourneyAndTiersProps) {
  const isEs = lang === 'es';
  const { userJourney = [], productTiers = [] } = ecosystem;

  return (
    <section className="space-y-16 py-10 border-t border-black/[0.06] dark:border-white/[0.08]">
      {/* 1. User Journey Section */}
      {userJourney.length > 0 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#FE385B] uppercase tracking-widest block font-semibold flex items-center gap-2">
              <Compass size={13} />
              <span>{isEs ? '// USER JOURNEY & ARQUITECTURA DE EXPERIENCIA' : '// USER JOURNEY ARCHITECTURE'}</span>
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
              {isEs ? `${userJourney.length} etapas diseñadas para la mejor experiencia del usuario.` : `${userJourney.length} stages crafted for optimal user experience.`}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {userJourney.map((step) => (
              <div
                key={step.step}
                className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] space-y-2 hover:border-[#00F0FF] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#FE385B]">{step.step}</span>
                  <span className="font-display font-bold text-xs uppercase tracking-wider text-[#111111] dark:text-white">
                    {step.label}
                  </span>
                </div>
                <p className="font-sans text-xs text-[#555555] dark:text-[#A1A1AA] leading-relaxed font-light italic">
                  &ldquo;{step.question}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Product Tiers */}
      {productTiers.length > 0 && (
        <div className="space-y-6 pt-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#FF7F07] uppercase tracking-widest block font-semibold flex items-center gap-2">
              <Crown size={13} />
              <span>{isEs ? '// MODELO DE PRODUCTO & TIERS' : '// PRODUCT TIERS ARCHITECTURE'}</span>
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
              {isEs ? `Estructura escalable de producto: ${productTiers.map(t => t.name).join(' · ')}.` : `Scalable product tiers: ${productTiers.map(t => t.name).join(' · ')}.`}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productTiers.map((tier, tIdx) => {
              const isElite = tier.name === 'ELITE';
              const isSignature = tier.name === 'SIGNATURE';

              return (
                <div
                  key={tier.name || tIdx}
                  className={`p-6 rounded-3xl border transition-all space-y-4 ${
                    isElite
                      ? 'bg-gradient-to-b from-[#FE385B]/10 to-transparent border-[#FE385B]/30'
                      : isSignature
                      ? 'bg-gradient-to-b from-[#00F0FF]/10 to-transparent border-[#00F0FF]/30'
                      : 'bg-white dark:bg-[#151518] border-black/[0.06] dark:border-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-extrabold text-2xl tracking-tight text-[#111111] dark:text-white">
                      {tier.name}
                    </span>
                    {tier.badge && (
                      <span className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-[#8E8E93]">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#555555] dark:text-[#A1A1AA] leading-relaxed">
                    {tier.description}
                  </p>

                  {tier.highlights && (
                    <ul className="space-y-1.5 pt-2 border-t border-black/[0.04] dark:border-white/[0.06] text-xs font-mono text-[#333333] dark:text-[#CCCCCC]">
                      {tier.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-[#FE385B] font-bold">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
