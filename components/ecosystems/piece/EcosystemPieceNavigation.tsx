'use client';

import React from 'react';
import { EcosystemPieceDetail, EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react';

interface EcosystemPieceNavigationProps {
  ecosystem: EcosystemSchema;
  currentPiece: EcosystemPieceDetail;
  allPieces: EcosystemPieceDetail[];
  lang: Locale;
}

export default function EcosystemPieceNavigation({
  ecosystem,
  currentPiece,
  allPieces,
  lang,
}: EcosystemPieceNavigationProps) {
  const isEs = lang === 'es';
  const currentIndex = allPieces.findIndex((p) => p.slug === currentPiece.slug);
  const prevPiece = currentIndex > 0 ? allPieces[currentIndex - 1] : allPieces[allPieces.length - 1];
  const nextPiece = currentIndex < allPieces.length - 1 ? allPieces[currentIndex + 1] : allPieces[0];

  return (
    <nav className="pt-12 pb-6 border-t border-black/[0.06] dark:border-white/[0.08]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        {/* Previous Piece */}
        {prevPiece && (
          <Link
            href={`/${lang}/works/ecosystems/${ecosystem.slug}/${prevPiece.slug}`}
            className="group p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#FE385B] transition-all flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-white dark:bg-[#18181B] border border-black/[0.06] dark:border-white/[0.08] group-hover:bg-[#FE385B] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
              <ArrowLeft size={13} />
            </div>
            <div className="min-w-0">
              <span className="font-mono text-[9px] text-[#8E8E93] uppercase tracking-wider block">
                {isEs ? '← ANTERIOR PIEZA' : '← PREVIOUS'}
              </span>
              <span className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-white truncate block">
                {prevPiece.title}
              </span>
            </div>
          </Link>
        )}

        {/* Center: Ecosystem Hub */}
        <div className="text-center">
          <Link
            href={`/${lang}/works/ecosystems/${ecosystem.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.1] font-mono text-xs text-[#555555] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white transition-colors"
          >
            <Grid size={12} />
            <span>{isEs ? 'Ver Ecosistema Completo' : 'All Ecosystem'}</span>
          </Link>
        </div>

        {/* Next Piece */}
        {nextPiece && (
          <Link
            href={`/${lang}/works/ecosystems/${ecosystem.slug}/${nextPiece.slug}`}
            className="group p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#00F0FF] transition-all flex items-center justify-between gap-3 text-right"
          >
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[9px] text-[#8E8E93] uppercase tracking-wider block">
                {isEs ? 'SIGUIENTE PIEZA →' : 'NEXT →'}
              </span>
              <span className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-white truncate block">
                {nextPiece.title}
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white dark:bg-[#18181B] border border-black/[0.06] dark:border-white/[0.08] group-hover:bg-[#00F0FF] group-hover:text-black flex items-center justify-center transition-colors flex-shrink-0">
              <ArrowRight size={13} />
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}
