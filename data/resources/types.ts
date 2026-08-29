export type ResourceType = 'component' | 'library' | 'tool' | 'template';
export type ResourceCategory = 'all' | 'cards' | 'hover' | 'buttons' | 'navigation' | 'text' | 'backgrounds' | 'carousels';
export type ResourceTier = 'all' | 'free' | 'pro';

export interface ResourceItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  type: ResourceType;
  category: ResourceCategory;
  tier: 'free' | 'pro';
  priceText: string;
  badge?: string;
  tech: string[];
  version?: string;
  isOpenSource: boolean;
  accentColor: string;
  previewType: 'spotlight-card' | 'hover-preview' | 'magnetic-button' | 'shimmer-text' | 'noise-mesh' | 'dock-nav' | 'bento-grid' | 'interactive-code' | 'kinetic-slider';
  previewDetails?: {
    tag?: string;
    subtitle?: string;
  };
  installCommand?: string;
  componentCode?: string;
}
