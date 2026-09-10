import { Locale } from '@/types';

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'engineering' | 'design' | 'academy' | 'strategy';
  categoryLabel: string;
  readTime: string;
  publishedAt: string;
  accent: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  featured?: boolean;
  imageUrl?: string;
}

export function getInsightsData(lang: Locale = 'es') {
  const isEs = lang === 'es';

  const categories = [
    { id: 'all', label: isEs ? 'Todos los Insights' : 'All Insights' },
    { id: 'engineering', label: isEs ? 'Ingeniería & Código' : 'Engineering & Code' },
    { id: 'design', label: isEs ? 'Diseño & Motion' : 'Design & Motion' },
    { id: 'academy', label: isEs ? 'Creator Lab & Video' : 'Creator Lab & Video' },
    { id: 'strategy', label: isEs ? 'Estrategia de Producto' : 'Product Strategy' },
  ];

  const articles: InsightArticle[] = [
    {
      id: '01',
      slug: '120fps-micro-interactions-nextjs',
      title: isEs
        ? 'Por qué el software debe sentirse a 120 FPS: Micro-interacciones y físicas no newtonianas'
        : 'Why Software Must Feel 120 FPS: Non-Newtonian Physics and Dynamic Micro-Interactions',
      excerpt: isEs
        ? 'Una inmersión técnica en cómo eliminamos la sensación de latencia web combinando resortes LERP en Framer Motion, Server Components de Next.js y tokens de color calibrados.'
        : 'A deep-dive into banishing web sluggishness using LERP spring curves, Next.js Server Components, and precision design tokens.',
      category: 'engineering',
      categoryLabel: isEs ? 'INGENIERÍA' : 'ENGINEERING',
      readTime: '6 min read',
      publishedAt: 'Sep 2026',
      accent: '#00F0FF',
      author: {
        name: 'Juan Sebastián Vega',
        role: 'Principal Architect',
      },
      tags: ['Next.js 16', 'Framer Motion', 'Web Performance', 'LERP Physics'],
      imageUrl: '/services/cards/web-apps-platform.jpg',
      featured: true,
    },
    {
      id: '02',
      slug: 'el-mito-del-contenido-viral-para-negocios',
      title: isEs
        ? 'El mito del contenido viral: Por qué 100K vistas vacías valen menos que 500 espectadores cualificados'
        : 'The Viral Content Myth: Why 100K Vanity Views Are Worth Less Than 500 Qualified Prospects',
      excerpt: isEs
        ? 'La tesis central de UXIO Creator Lab: deconstruimos la arquitectura de un gancho comercial y el puente de conversión directo a WhatsApp sin depender del algoritmo.'
        : 'The core thesis behind UXIO Creator Lab: reverse-engineering commercial video hooks and direct conversion bridges without praying to algorithms.',
      category: 'academy',
      categoryLabel: 'CREATOR LAB',
      readTime: '5 min read',
      publishedAt: 'Ago 2026',
      accent: '#FE385B',
      author: {
        name: 'Juan Sebastián Vega',
        role: 'Lead Mentor',
      },
      tags: ['UGC Mobile', 'Ventas Directas', 'Psicología Visual', 'Creator Economy'],
      imageUrl: '/academy/creator-lab/hero-creator-setup.jpg',
      featured: false,
    },
    {
      id: '03',
      slug: 'sistemas-de-diseno-resilientes-bento',
      title: isEs
        ? 'Sistemas de diseño Bento: Organizando la complejidad visual sin aburrir al usuario'
        : 'Bento Design Systems: Structuring Dense Information Without Boring Users',
      excerpt: isEs
        ? 'Cómo transformar paneles saturados de datos en interfaces modulares, jerárquicas y magnéticas utilizando el patrón Bento Grid adaptado al ecosistema UXIO.'
        : 'How to turn cluttered dashboard layouts into modular, hierarchical, and magnetic interfaces using the Bento Grid paradigm tailored for UXIO.',
      category: 'design',
      categoryLabel: isEs ? 'DISEÑO' : 'DESIGN',
      readTime: '7 min read',
      publishedAt: 'Jul 2026',
      accent: '#FF7F07',
      author: {
        name: 'Studio Creative Lab',
        role: 'Design System',
      },
      tags: ['Bento Grid', 'Design Tokens', 'Dark Aesthetics', 'Figma to Code'],
      imageUrl: '/services/cards/experience-ui-ux.jpg',
      featured: false,
    },
    {
      id: '04',
      slug: 'supabase-ssr-nextjs-sesiones-persistentes',
      title: isEs
        ? 'Autenticación con Supabase SSR en Next.js App Router: Cero parpadeos y cookies blindadas'
        : 'Supabase SSR in Next.js App Router: Zero-Flicker Sessions and Bulletproof Cookies',
      excerpt: isEs
        ? 'Patrones de middleware y server actions para mantener sesiones seguras en Next.js 16 evitando bucles de redirección de idioma y fallos de prefetch en producción.'
        : 'Production middleware and server action patterns for bulletproof session handling in Next.js 16, avoiding locale-redirect traps and prefetch deadlocks.',
      category: 'engineering',
      categoryLabel: isEs ? 'ARQUITECTURA' : 'ARCHITECTURE',
      readTime: '8 min read',
      publishedAt: 'Sep 2026',
      accent: '#10B981',
      author: {
        name: 'Juan Sebastián Vega',
        role: 'Principal Architect',
      },
      tags: ['Supabase SSR', 'Next.js 16', 'App Router', 'Edge Cookies'],
      imageUrl: '/services/cards/digital-solutions.jpg',
      featured: false,
    },
    {
      id: '05',
      slug: 'del-laboratorio-al-negocio-creando-labs',
      title: isEs
        ? 'De la idea al mercado en 4 semanas: La metodología de prototipado de UXIO Labs'
        : 'From Idea to Market in 4 Weeks: The Rapid Prototyping Methodology of UXIO Labs',
      excerpt: isEs
        ? 'Cómo validamos herramientas internas como Aluna o Boku Bento construyendo directamente sobre código de producción sin etapas intermedias de especulación.'
        : 'How we validate internal ventures like Aluna or Boku Bento by building directly in production code, eliminating speculative mockups.',
      category: 'strategy',
      categoryLabel: isEs ? 'ESTRATEGIA' : 'STRATEGY',
      readTime: '6 min read',
      publishedAt: 'Jul 2026',
      accent: '#7928CA',
      author: {
        name: 'Juan Sebastián Vega',
        role: 'Founder',
      },
      tags: ['Venture Building', 'Lean Prototyping', 'Product Market Fit', 'Labs'],
      imageUrl: '/services/cards/brand-identity.jpg',
      featured: false,
    },
  ];

  return { categories, articles };
}
