import { Locale } from '@/types';
import { CurrencyCode, ServiceItem, SubService } from './types';
import { technologyService } from './technology';
import { experienceService } from './experience';
import { brandService } from './brand';
import { growthService } from './growth';
import { contentService } from './content';
import { solutionsService } from './solutions';

export const ALL_SERVICES_ES: ServiceItem[] = [
  technologyService,
  experienceService,
  brandService,
  growthService,
  contentService,
  solutionsService,
];

export const getServicesData = (lang: Locale = 'es'): ServiceItem[] => {
  const isEs = lang === 'es';

  if (isEs) {
    return ALL_SERVICES_ES;
  }

  // English Localization
  return ALL_SERVICES_ES.map(service => ({
    ...service,
    subServices: (service.subServices || []).map(sub => ({
      ...sub,
      pricingTiers: (sub.pricingTiers || []).map(tier => ({
        ...tier,
        deposit: tier.deposit ? tier.deposit.replace('50%', '50% deposit') : ''
      }))
    }))
  }));
};

export const getServiceBySlug = (slug: string, lang: Locale = 'es'): ServiceItem | undefined => {
  const services = getServicesData(lang);
  return services.find(s => s.slug === slug);
};

export const getSubServiceBySlug = (parentSlug: string, subSlug: string, lang: Locale = 'es'): SubService | undefined => {
  const service = getServiceBySlug(parentSlug, lang);
  if (!service) return undefined;
  return service.subServices.find(s => s.slug === subSlug);
};

export const formatCurrency = (amount: number | null | undefined, currency: CurrencyCode): string => {
  if (amount === null || amount === undefined) {
    return 'Cotizar según alcance';
  }
  if (currency === 'USD') {
    return `$ ${amount.toLocaleString('en-US')} USD`;
  }
  return `$ ${amount.toLocaleString('es-CO')} COP`;
};
