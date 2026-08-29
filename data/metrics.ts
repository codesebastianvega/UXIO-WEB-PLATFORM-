import { Locale } from '@/types';

export interface StudioMetric {
  label: string;
  value: string;
  badge?: boolean;
}

export const getStudioMetrics = (lang: Locale = 'es'): StudioMetric[] => {
  const isEs = lang === 'es';
  return [
    {
      label: isEs ? 'ESTADO DEL SISTEMA' : 'SYSTEM STATE',
      value: 'NOMINAL · v1.0',
      badge: true,
    },
    {
      label: isEs ? 'SPRINTS ACTIVOS' : 'ACTIVE SPRINTS',
      value: isEs ? '04 SITIOS' : '04 SITES',
    },
    {
      label: isEs ? 'UBICACIÓN' : 'LOCATION',
      value: isEs ? 'CDMX · TOKIO · NYC' : 'CDMX · TOKYO · NYC',
    },
    {
      label: isEs ? 'DISPONIBILIDAD' : 'AVAILABILITY',
      value: 'Q3/Q4 2026',
    },
  ];
};
