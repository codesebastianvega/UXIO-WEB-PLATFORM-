import { EcosystemPieceDetail } from '@/types/ecosystem';
import { arcaPiecesCore } from './arca-pieces-core';
import { arcaPiecesOps } from './arca-pieces-ops';

export const arcaPieces: EcosystemPieceDetail[] = [
  ...arcaPiecesCore,
  ...arcaPiecesOps,
];

export const getArcaPiece = (slug: string): EcosystemPieceDetail | undefined => {
  const cleanSlug = slug.toLowerCase().trim();
  return arcaPieces.find((p) => p.slug === cleanSlug || p.id === cleanSlug);
};

export {
  arcaPiecesCore,
  arcaPiecesOps,
};
