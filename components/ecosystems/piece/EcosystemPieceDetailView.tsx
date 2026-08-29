'use client';

import React from 'react';
import { EcosystemPieceDetail, EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import EcosystemPieceHero from './EcosystemPieceHero';
import EcosystemPieceChallengeSolution from './EcosystemPieceChallengeSolution';
import EcosystemPieceDeliverables from './EcosystemPieceDeliverables';
import EcosystemPieceNavigation from './EcosystemPieceNavigation';

interface EcosystemPieceDetailViewProps {
  ecosystem: EcosystemSchema;
  piece: EcosystemPieceDetail;
  allPieces: EcosystemPieceDetail[];
  lang: Locale;
}

export default function EcosystemPieceDetailView({
  ecosystem,
  piece,
  allPieces,
  lang,
}: EcosystemPieceDetailViewProps) {
  return (
    <article className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12 animate-fadeIn">
      {/* 1. Hero with Breadcrumb & Discipline Tag */}
      <EcosystemPieceHero ecosystem={ecosystem} piece={piece} lang={lang} />

      {/* 2. Challenge vs UXIO Solution with Drop-Cap */}
      <EcosystemPieceChallengeSolution piece={piece} lang={lang} />

      {/* 3. Deliverables, Tech Stack & Architecture Entities */}
      <EcosystemPieceDeliverables piece={piece} lang={lang} />

      {/* 4. Sequential Piece Navigation */}
      <EcosystemPieceNavigation
        ecosystem={ecosystem}
        currentPiece={piece}
        allPieces={allPieces}
        lang={lang}
      />
    </article>
  );
}
