import { SPOTLIGHT_CARD_CODE } from './templates/spotlight-card';
import { HOVER_LINK_PREVIEW_CODE } from './templates/hover-link-preview';
import { MAGNETIC_BUTTON_CODE } from './templates/magnetic-button';
import { SHIMMER_TEXT_CODE } from './templates/shimmer-text';
import { NOISE_MESH_CODE } from './templates/noise-mesh';
import { BENTO_GRID_CODE } from './templates/bento-grid';
import { DOCK_NAV_CODE } from './templates/dock-nav';
import { KINETIC_SLIDER_CODE } from './templates/kinetic-slider';

/**
 * Component Source Code Registry
 * Cleanly separated into data/templates/ for modular maintainability.
 */
export function getComponentSourceCode(slug: string): string {
  switch (slug) {
    case 'spotlight-card':
      return SPOTLIGHT_CARD_CODE;
    case 'hover-link-preview':
      return HOVER_LINK_PREVIEW_CODE;
    case 'magnetic-button':
      return MAGNETIC_BUTTON_CODE;
    case 'shimmer-text':
      return SHIMMER_TEXT_CODE;
    case 'noise-mesh-bg':
    case 'noise-mesh':
      return NOISE_MESH_CODE;
    case 'craft-bento-grid':
    case 'bento-grid':
      return BENTO_GRID_CODE;
    case 'dock-navigator':
    case 'obsidian-dock':
      return DOCK_NAV_CODE;
    case 'kinetic-slider':
    case 'kinetic-snap-slider':
      return KINETIC_SLIDER_CODE;
    default:
      return `'use client';
import React from 'react';

export default function GenericComponent() {
  return <div className="p-4">UXIO Component</div>;
}`;
  }
}
