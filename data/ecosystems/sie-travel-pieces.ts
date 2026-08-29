import { EcosystemPieceDetail } from '@/types/ecosystem';
import { sieTravelPiecesCore } from './sie-travel-pieces-core';
import { sieTravelPiecesOps } from './sie-travel-pieces-ops';

export const sieTravelPieces: EcosystemPieceDetail[] = [
  ...sieTravelPiecesCore,
  ...sieTravelPiecesOps,
];

export const getSieTravelPiece = (slug: string): EcosystemPieceDetail | undefined => {
  const cleanSlug = slug.toLowerCase().trim();
  return sieTravelPieces.find((p) => p.slug === cleanSlug || p.id === cleanSlug);
};

export {
  sieTravelPiecesCore,
  sieTravelPiecesOps,
};
