import { EcosystemPieceDetail } from '@/types/ecosystem';
import { alunaPiecesCore } from './aluna-pieces-core';
import { alunaPiecesOps } from './aluna-pieces-ops';

export const alunaPieces: EcosystemPieceDetail[] = [
  ...alunaPiecesCore,
  ...alunaPiecesOps,
];

export const getAlunaPiece = (slug: string): EcosystemPieceDetail | undefined => {
  const cleanSlug = slug.toLowerCase().trim();
  return alunaPieces.find((p) => p.slug === cleanSlug || p.id === cleanSlug);
};

export {
  alunaPiecesCore,
  alunaPiecesOps,
};
