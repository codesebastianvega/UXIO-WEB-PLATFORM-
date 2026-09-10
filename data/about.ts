import { Locale } from '@/types';

export interface AboutPillar {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  href: string;
  stats: string;
  statsLabel: string;
  features: string[];
}

export interface AboutManifestoPoint {
  number: string;
  title: string;
  body: string;
  tag: string;
  accent: string;
}

export function getAboutData(lang: Locale = 'es') {
  const isEs = lang === 'es';

  const manifestoPoints: AboutManifestoPoint[] = [
    {
      number: '01',
      title: isEs ? 'Atención con Intención' : 'Attention with Intent',
      tag: isEs ? 'FILOSOFÍA COMERCIAL' : 'COMMERCIAL PHILOSOPHY',
      accent: '#FE385B',
      body: isEs
        ? 'Rechazamos las métricas de vanidad y el diseño decorativo. Cada interfaz, animación y pieza de contenido debe construir autoridad, resolver fricción y generar ingresos reales.'
        : 'We reject vanity metrics and superficial eye-candy. Every interface, motion curve, and content asset must establish authority, remove friction, and drive business growth.'
    },
    {
      number: '02',
      title: isEs ? 'Cero Regresiones & 120 FPS' : 'Zero Regressions & 120 FPS',
      tag: isEs ? 'RIGOR DE INGENIERÍA' : 'ENGINEERING RIGOR',
      accent: '#00F0FF',
      body: isEs
        ? 'El software debe sentirse vivo y responder al instante. Diseñamos con físicas no newtonianas, renderizado en el Edge y una arquitectura que nunca sacrifica funcionalidad previa.'
        : 'Software must feel alive and react instantly. We craft with non-Newtonian physics, Edge-rendered speed, and code architectures that never compromise prior integrity.'
    },
    {
      number: '03',
      title: isEs ? 'El Ecosistema Tridimensional' : 'The 3-Tier Ecosystem',
      tag: isEs ? 'MODELO DE NEGOCIO' : 'BUSINESS MODEL',
      accent: '#FF7F07',
      body: isEs
        ? 'No somos una agencia convencional: operamos como un Studio de software de clase mundial, un Lab de productos propietarios y una Academy que democratiza el oficio.'
        : 'Not an ordinary agency: we operate as a world-class software Studio, an incubator of in-house Labs, and an Academy democratizing digital mastery.'
    }
  ];

  const pillars: AboutPillar[] = [
    {
      id: 'studio',
      tag: '// 01 · CLIENT VENTURES',
      title: 'UXIO Studio',
      subtitle: isEs ? 'Diseño y Software de Alto Calibre' : 'High-End Product Design & Engineering',
      description: isEs
        ? 'Diseñamos y desarrollamos plataformas web, aplicaciones móviles y ecosistemas de marca para startups y empresas que buscan liderar sus industrias.'
        : 'We design and engineer bespoke web platforms, mobile applications, and brand systems for ambitious startups and market leaders.',
      accent: '#FE385B',
      href: `/${lang}/services`,
      stats: '100%',
      statsLabel: isEs ? 'Código a Medida' : 'Custom Code',
      features: isEs
        ? ['Web Apps & Next.js 16', 'Sistemas de Diseño React', 'Arquitectura Cloud & Edge']
        : ['Web Apps & Next.js 16', 'React Design Systems', 'Cloud & Edge Architecture']
    },
    {
      id: 'labs',
      tag: '// 02 · R&D & STARTUPS',
      title: 'UXIO Labs',
      subtitle: isEs ? 'Productos Propios e Incubación' : 'Internal Products & Venture Incubation',
      description: isEs
        ? 'Probamos nuestras propias hipótesis construyendo herramientas e innovaciones digitales reales en casa, desde SaaS hasta apps de consumo.'
        : 'We battle-test our hypotheses by building real tools and digital products in-house, ranging from SaaS platforms to consumer applications.',
      accent: '#FF7F07',
      href: `/${lang}/labs`,
      stats: '04+',
      statsLabel: isEs ? 'Labs Activos' : 'Active Labs',
      features: isEs
        ? ['Aluna Brand Engine', 'Boku Bento Catalog', 'Arca Commerce System']
        : ['Aluna Brand Engine', 'Boku Bento Catalog', 'Arca Commerce System']
    },
    {
      id: 'academy',
      tag: '// 03 · EDUCATION & TALENT',
      title: 'UXIO Academy',
      subtitle: isEs ? 'Formación Técnica para Creadores' : 'Masterclass for Modern Creators',
      description: isEs
        ? 'Enseñamos lo que construimos diariamente. Creator Lab transforma smartphones e inteligencia artificial en activos de captación y venta masiva.'
        : 'We teach exactly what we build. Creator Lab turns smartphones and AI workflows into scalable client-acquisition sales engines.',
      accent: '#00F0FF',
      href: `/${lang}/academy`,
      stats: '06',
      statsLabel: isEs ? 'Semanas Intensivas' : 'Weeks Cohort',
      features: isEs
        ? ['Creator Lab Masterclass', 'Presentaciones en Vivo', 'Certificación Oficial']
        : ['Creator Lab Masterclass', 'Live Presentation Engine', 'Official Certification']
    }
  ];

  return { manifestoPoints, pillars };
}
