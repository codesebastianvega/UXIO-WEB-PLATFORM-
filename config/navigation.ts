import { Locale } from '@/types';
import { getSitemap, getSecondaryLinks } from '@/data/sitemap';

export interface NavigationItem {
  label: string;
  href: string;
  badge?: string;
  status?: string;
  statusColor?: string;
}

export interface NavigationSubGroup {
  title: string;
  items: NavigationItem[];
}

export interface NavigationGroup {
  id: string;
  groupNumber: string;
  title: string;
  items?: NavigationItem[];
  subGroups?: NavigationSubGroup[];
}

export const getNavigationConfig = (lang: Locale = 'es'): NavigationGroup[] => {
  const sitemap = getSitemap(lang);
  return sitemap.map((section) => ({
    id: section.id,
    groupNumber: section.groupNumber || '01',
    title: section.label,
    items: section.subroutes.map((sub) => ({
      label: sub.name,
      href: sub.path,
      badge: sub.badge,
      status: sub.status,
      statusColor: sub.statusColor,
    })),
    subGroups: section.subGroups?.map((group) => ({
      title: group.title,
      items: group.items.map((sub) => ({
        label: sub.name,
        href: sub.path,
        badge: sub.badge,
      })),
    })),
  }));
};

export const getBottomNavigation = (lang: Locale = 'es') => {
  return getSecondaryLinks(lang).map((link) => ({
    label: link.label,
    href: link.path,
    count: link.count ? Number(link.count) : undefined,
    isButton: Boolean(link.highlight),
  }));
};

export const navigationConfig = getNavigationConfig('es');
export const bottomNavigation = getBottomNavigation('es');
