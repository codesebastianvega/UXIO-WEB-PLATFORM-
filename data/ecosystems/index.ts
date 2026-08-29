import { EcosystemSchema, EcosystemPieceDetail } from '@/types/ecosystem';
import { sieTravelEcosystem } from './sie-travel';
import { bySaraluEcosystem } from './by-saralu';
import { altoAndinoEcosystem } from './alto-andino';
import { alunaEcosystem } from './aluna';
import { arcaEcosystem } from './arca';
import { sieTravelPieces, getSieTravelPiece } from './sie-travel-pieces';
import { arcaPieces, getArcaPiece } from './arca-pieces';
import { alunaPieces, getAlunaPiece } from './aluna-pieces';

export const allEcosystems: EcosystemSchema[] = [
  sieTravelEcosystem,
  bySaraluEcosystem,
  altoAndinoEcosystem,
  alunaEcosystem,
  arcaEcosystem,
];

export const getEcosystemBySlug = (slug: string): EcosystemSchema | undefined => {
  const cleanSlug = slug.toLowerCase().trim();
  return allEcosystems.find((eco) => eco.slug === cleanSlug || eco.id === cleanSlug);
};

export const getEcosystemPieces = (ecosystemSlug: string): EcosystemPieceDetail[] => {
  const clean = ecosystemSlug.toLowerCase().trim();
  if (clean === 'sie-travel') return sieTravelPieces;
  if (clean === 'arca') return arcaPieces;
  if (clean === 'aluna') return alunaPieces;
  return [];
};

export const getEcosystemPiece = (
  ecosystemSlug: string,
  pieceSlug: string
): EcosystemPieceDetail | undefined => {
  const cleanEco = ecosystemSlug.toLowerCase().trim();
  if (cleanEco === 'sie-travel') {
    return getSieTravelPiece(pieceSlug);
  }
  if (cleanEco === 'arca') {
    return getArcaPiece(pieceSlug);
  }
  if (cleanEco === 'aluna') {
    return getAlunaPiece(pieceSlug);
  }
  return undefined;
};

export {
  sieTravelEcosystem,
  bySaraluEcosystem,
  altoAndinoEcosystem,
  alunaEcosystem,
  arcaEcosystem,
  sieTravelPieces,
  getSieTravelPiece,
  arcaPieces,
  getArcaPiece,
  alunaPieces,
  getAlunaPiece,
};
