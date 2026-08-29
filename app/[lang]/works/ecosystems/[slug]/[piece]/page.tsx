import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale } from '@/types';
import {
  allEcosystems,
  getEcosystemBySlug,
  getEcosystemPiece,
  getEcosystemPieces,
} from '@/data/ecosystems';
import EcosystemPieceDetailView from '@/components/ecosystems/piece/EcosystemPieceDetailView';

interface PageProps {
  params: Promise<{
    lang: string;
    slug: string;
    piece: string;
  }>;
}

export async function generateStaticParams() {
  const languages: Locale[] = ['es', 'en'];
  const params: Array<{ lang: Locale; slug: string; piece: string }> = [];

  for (const lang of languages) {
    for (const eco of allEcosystems) {
      const pieces = getEcosystemPieces(eco.slug);
      for (const p of pieces) {
        params.push({
          lang,
          slug: eco.slug,
          piece: p.slug,
        });
      }
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, piece: pieceSlug } = await params;
  const ecosystem = getEcosystemBySlug(slug);
  const piece = getEcosystemPiece(slug, pieceSlug);

  if (!ecosystem || !piece) {
    return {
      title: 'Deliverable Not Found | UXIO',
    };
  }

  return {
    title: `${piece.title} — ${ecosystem.identity.name} | UXIO`,
    description: piece.subtitle || piece.overview,
  };
}

export default async function EcosystemPiecePage({ params }: PageProps) {
  const { lang: rawLang, slug, piece: pieceSlug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const ecosystem = getEcosystemBySlug(slug);
  const piece = getEcosystemPiece(slug, pieceSlug);
  const allPieces = getEcosystemPieces(slug);

  if (!ecosystem || !piece) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FBFBFB] dark:bg-[#0A0A0B] text-[#111111] dark:text-[#EDEDED] transition-colors">
      <EcosystemPieceDetailView
        ecosystem={ecosystem}
        piece={piece}
        allPieces={allPieces}
        lang={lang}
      />
    </main>
  );
}
