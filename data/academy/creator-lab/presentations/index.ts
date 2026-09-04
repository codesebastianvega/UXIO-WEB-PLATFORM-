import { PresentationContent } from './types';
import { Locale } from '@/types';
import { getPresentationM0001 } from './m00-01-welcome';
import { getPresentationM000101 } from './m00-01-01-manifesto';
import { getPresentationM000102 } from './m00-01-02-golden-rule';
import { getPresentationM0002 } from './m00-02-creator-kit';
import { getPresentationM0003 } from './m00-03-live-lab';

import { getPresentationM0101 } from './m01-01-commercial-content';
import { getPresentationM010101 } from './m01-01-01-commercial-vs-organic';
import { getPresentationM010102 } from './m01-01-02-ugc-power';

import { getPresentationM0102 } from './m01-02-hidden-content';
import { getPresentationM010201 } from './m01-02-01-backstage-goldmine';
import { getPresentationM010202 } from './m01-02-02-objections-to-hooks';

import { getPresentationM0103 } from './m01-03-content-pillars';
import { getPresentationM010301 } from './m01-03-01-five-pillars';
import { getPresentationM010302 } from './m01-03-02-challenge-matrix';

import { getPresentationM0104 } from './m01-04-live-lab';

// Semana 2: Grabación con Smartphone
import { getPresentationM020101 } from './m02-01-01-sensor-settings';
import { getPresentationM020102 } from './m02-01-02-af-ae-lock';
import { getPresentationM020103 } from './m02-01-03-framing-composition';

import { getPresentationM020201 } from './m02-02-01-window-light-audio';
import { getPresentationM020202 } from './m02-02-02-broll-bank-30-clips';

import { getPresentationM0203 } from './m02-03-live-lab';

import { getPresentationM020401 } from './m02-04-01-sentence-by-sentence';
import { getPresentationM020402 } from './m02-04-02-spoken-video-script';

// Semana 3: Creación & Formatos Nativos
import { getPresentationM030101 } from './m03-01-01-hook-psychology';
import { getPresentationM030102 } from './m03-01-02-visual-verbal-hooks';

import { getPresentationM030201 } from './m03-02-01-script-frameworks';
import { getPresentationM030202 } from './m03-02-02-storytelling-founder';

import { getPresentationM0303 } from './m03-03-live-lab';

import { getPresentationM030401 } from './m03-04-01-carousels-mastery';
import { getPresentationM030402 } from './m03-04-02-sales-stories-funnel';

// Semana 4: Edición & IA
import { getPresentationM040101 } from './m04-01-01-capcut-cuts-pacing';
import { getPresentationM040102 } from './m04-01-02-animated-captions';

import { getPresentationM040201 } from './m04-02-01-sound-design-mixing';
import { getPresentationM040202 } from './m04-02-02-cohesive-cover-design';

import { getPresentationM0403 } from './m04-03-live-lab';

import { getPresentationM040401 } from './m04-04-01-ai-prompting-creators';
import { getPresentationM040402 } from './m04-04-02-repurposing-engine';

export * from './types';
export * from './m00-01-welcome';
export * from './m00-01-01-manifesto';
export * from './m00-01-02-golden-rule';
export * from './m00-02-creator-kit';
export * from './m00-03-live-lab';

export * from './m01-01-commercial-content';
export * from './m01-01-01-commercial-vs-organic';
export * from './m01-01-02-ugc-power';

export * from './m01-02-hidden-content';
export * from './m01-02-01-backstage-goldmine';
export * from './m01-02-02-objections-to-hooks';

export * from './m01-03-content-pillars';
export * from './m01-03-01-five-pillars';
export * from './m01-03-02-challenge-matrix';

export * from './m01-04-live-lab';

export * from './m02-01-01-sensor-settings';
export * from './m02-01-02-af-ae-lock';
export * from './m02-01-03-framing-composition';

export * from './m02-02-01-window-light-audio';
export * from './m02-02-02-broll-bank-30-clips';

export * from './m02-03-live-lab';

export * from './m02-04-01-sentence-by-sentence';
export * from './m02-04-02-spoken-video-script';

export * from './m03-01-01-hook-psychology';
export * from './m03-01-02-visual-verbal-hooks';

export * from './m03-02-01-script-frameworks';
export * from './m03-02-02-storytelling-founder';

export * from './m03-03-live-lab';

export * from './m03-04-01-carousels-mastery';
export * from './m03-04-02-sales-stories-funnel';

export * from './m04-01-01-capcut-cuts-pacing';
export * from './m04-01-02-animated-captions';

export * from './m04-02-01-sound-design-mixing';
export * from './m04-02-02-cohesive-cover-design';

export * from './m04-03-live-lab';

export * from './m04-04-01-ai-prompting-creators';
export * from './m04-04-02-repurposing-engine';

export function getAllPresentations(lang: Locale = 'es'): PresentationContent[] {
  return [
    // Semana 0: Inducción & Setup
    getPresentationM0001(lang),
    getPresentationM000101(lang),
    getPresentationM000102(lang),
    getPresentationM0002(lang),
    getPresentationM0003(lang),
    // Semana 1: Estrategia (De Negocio a Contenido)
    getPresentationM0101(lang),
    getPresentationM010101(lang),
    getPresentationM010102(lang),
    getPresentationM0102(lang),
    getPresentationM010201(lang),
    getPresentationM010202(lang),
    getPresentationM0103(lang),
    getPresentationM010301(lang),
    getPresentationM010302(lang),
    getPresentationM0104(lang),
    // Semana 2: Grabación con Smartphone
    getPresentationM020101(lang),
    getPresentationM020102(lang),
    getPresentationM020103(lang),
    getPresentationM020201(lang),
    getPresentationM020202(lang),
    getPresentationM0203(lang),
    getPresentationM020401(lang),
    getPresentationM020402(lang),
    // Semana 3: Creación & Formatos Nativos
    getPresentationM030101(lang),
    getPresentationM030102(lang),
    getPresentationM030201(lang),
    getPresentationM030202(lang),
    getPresentationM0303(lang),
    getPresentationM030401(lang),
    getPresentationM030402(lang),
    // Semana 4: Edición & IA
    getPresentationM040101(lang),
    getPresentationM040102(lang),
    getPresentationM040201(lang),
    getPresentationM040202(lang),
    getPresentationM0403(lang),
    getPresentationM040401(lang),
    getPresentationM040402(lang),
  ];
}

export function getPresentationBySlug(
  slug: string,
  lang: Locale = 'es'
): PresentationContent | undefined {
  const normalized = slug.toLowerCase();
  return getAllPresentations(lang).find(
    p => p.slug.toLowerCase() === normalized || p.id.toLowerCase() === normalized
  );
}

export function getPresentationByLessonId(
  lessonId: string,
  lang: Locale = 'es'
): PresentationContent | undefined {
  const normalized = lessonId.toLowerCase();
  return getAllPresentations(lang).find(p => p.lessonId?.toLowerCase() === normalized);
}
