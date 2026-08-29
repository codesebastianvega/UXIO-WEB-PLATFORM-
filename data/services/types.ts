import { Locale } from '@/types';

export type CurrencyCode = 'USD' | 'COP';

export interface PriceMap {
  USD: number | null;
  COP: number | null;
}

export interface FeatureItem {
  text: string;
  icon?: string;
}

export interface CapabilityTier {
  name: string;
  price: PriceMap;
  isRecommended?: boolean;
  description?: string;
  features: Array<string | FeatureItem>;
}

export interface PlatformGroup {
  id: string; // 'omnicanal' | 'meta' | 'tiktok' | 'google' | 'wordpress' | etc.
  name: string;
  badge?: string;
  tagline?: string;
  description: string;
  startingPrice?: PriceMap;
  tiers: CapabilityTier[];
  microServices?: MicroService[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  deposit: string;
  priceCOP?: string;
  priceUSD?: string;
  depositCOP?: string;
  depositUSD?: string;
  timeline: string;
  popular?: boolean;
  isRecommended?: boolean;
  description: string;
  features: string[];
  platformId?: string;
}

export interface SubService {
  slug: string;
  parentSlug: string;
  title: string;
  tagline: string;
  description: string;
  approach: string;
  startingPrice: string;
  startingPriceCOP?: string;
  startingPriceUSD?: string;
  estimatedTimeline: string;
  deliverables: string[];
  pricingTiers: PricingTier[];
  platforms?: PlatformGroup[];
  technologies?: string[];
  faqs: Array<{ question: string; answer: string }>;
  accent: string;
}

export interface Capability {
  id?: string;
  slug?: string;
  title: string;
  description: string;
  startingPrice?: string | PriceMap;
  timeline?: string;
  tiers?: CapabilityTier[];
  platforms?: PlatformGroup[];
}

export interface MicroService {
  id?: string;
  slug?: string;
  title: string;
  description?: string;
  deliverables?: string[];
  stack?: string[];
  accent?: string;
  price?: PriceMap;
  startingPrice?: string;
  timeline?: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  subtitle: string;
  approach: string;
  accent: string;
  capabilities: Capability[];
  platforms?: PlatformGroup[];
  microServices?: MicroService[];
  subServices: SubService[];
  relatedProjectIds?: string[];
}
