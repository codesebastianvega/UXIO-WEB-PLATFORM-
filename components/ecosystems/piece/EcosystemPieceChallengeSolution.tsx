'use client';

import React from 'react';
import { EcosystemPieceDetail } from '@/types/ecosystem';
import { Locale } from '@/types';
import { Target, CheckCircle2 } from 'lucide-react';

interface EcosystemPieceChallengeSolutionProps {
  piece: EcosystemPieceDetail;
  lang: Locale;
}

export default function EcosystemPieceChallengeSolution({
  piece,
  lang,
}: EcosystemPieceChallengeSolutionProps) {
  const isEs = lang === 'es';
  const firstLetter = piece.theChallenge.charAt(0);
  const restOfChallenge = piece.theChallenge.slice(1);

  return (
    <section className="space-y-12 py-8 border-t border-black/[0.06] dark:border-white/[0.08]">
      {/* Editorial Overview Paragraph */}
      <div className="p-8 rounded-[2rem] bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]">
        <p className="text-xl sm:text-2xl font-light text-[#222222] dark:text-[#E4E4E7] leading-relaxed font-sans">
          {piece.overview}
        </p>
      </div>

      {/* Challenge vs Solution Asymmetric Spread */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left: The Challenge */}
        <div className="space-y-4">
          <div className="font-mono text-xs text-[#FE385B] uppercase tracking-widest flex items-center gap-2 font-semibold">
            <Target size={13} />
            <span>{isEs ? '// EL DESAFÍO ESPECÍFICO' : '// THE SPECIFIC CHALLENGE'}</span>
          </div>

          <div className="text-base sm:text-lg text-[#444444] dark:text-[#CCCCCC] leading-relaxed font-sans">
            <span
              className="float-left text-5xl sm:text-6xl font-display font-extrabold pr-3 leading-none select-none"
              style={{ color: piece.accent || '#FE385B' }}
            >
              {firstLetter}
            </span>
            <span>{restOfChallenge}</span>
          </div>
        </div>

        {/* Right: The Solution */}
        <div className="space-y-4 md:mt-6">
          <div className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest flex items-center gap-2 font-semibold">
            <CheckCircle2 size={13} />
            <span>{isEs ? '// LA SOLUCIÓN UXIO' : '// THE UXIO SOLUTION'}</span>
          </div>

          <blockquote className="p-6 rounded-2xl bg-white dark:bg-[#151518] border-l-4 border-[#00F0FF] border-y border-r border-black/[0.06] dark:border-white/[0.08] text-base sm:text-lg font-light text-[#222222] dark:text-white leading-relaxed">
            &ldquo;{piece.theSolution}&rdquo;
          </blockquote>
        </div>
      </div>

      {/* Key Features Bento */}
      {piece.keyFeatures && piece.keyFeatures.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {piece.keyFeatures.map((feat, fIdx) => (
            <div
              key={fIdx}
              className="p-5 rounded-2xl bg-white dark:bg-[#151518] border border-black/[0.06] dark:border-white/[0.08] space-y-1.5"
            >
              <div className="font-display font-bold text-sm sm:text-base text-[#111111] dark:text-white">
                {feat.title}
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#555555] dark:text-[#A1A1AA] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
