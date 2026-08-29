'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { TECH_LOGOS_MAP } from '@/components/services/drawer/TechLogos';
import { Locale } from '@/types';

interface TechStackMarqueeProps {
  lang: Locale;
}

const FEATURED_STACK_KEYS = [
  'Next.js',
  'React',
  'React Native',
  'Flutter',
  'Vue.js',
  'TypeScript',
  'Tailwind',
  'Google Gemini',
  'OpenAI',
  'Claude',
  'Python',
  'FastAPI',
  'Node.js',
  'Supabase',
  'Stripe',
  'Wompi',
  'Bold',
  'MercadoPago',
  'n8n',
  'Make',
  'WordPress',
  'Shopify',
  'WooCommerce',
  'Figma',
  'Canva',
  'Vercel',
  'GitHub',
  'Vite'
];

export default function TechStackMarquee({ lang }: TechStackMarqueeProps) {
  const isEs = lang === 'es';

  // Get items from TECH_LOGOS_MAP
  const items = FEATURED_STACK_KEYS.map(key => TECH_LOGOS_MAP[key]).filter(Boolean);

  // Duplicate items for seamless infinite marquee loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="space-y-3 pt-2 pb-1 overflow-hidden">
      {/* Label Header */}
      <div className="flex items-center gap-2">
        <Sparkles size={12} className="text-[#00F0FF] dark:text-[#00F0FF]" />
        <span className="font-mono text-[10.5px] font-semibold text-[#8E8E93] uppercase tracking-wider">
          {isEs ? '// ARSENAL TÉCNICO & HERRAMIENTAS QUE DOMINAMOS:' : '// TECH STACK & TOOLS WE MASTER:'}
        </span>
      </div>

      {/* Infinite Scrolling Marquee Track with Gradient Fades */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex items-center gap-2.5 w-max animate-marquee hover:[animation-play-state:paused] py-1">
          {duplicatedItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-[#151517] border border-black/[0.07] dark:border-white/[0.07] shadow-2xs font-display font-medium text-xs text-[#111111] dark:text-[#E4E4E7] transition-all hover:scale-[1.04] hover:border-black/[0.2] dark:hover:border-white/[0.2] cursor-default shrink-0 select-none"
            >
              <div className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
                {tech.icon}
              </div>
              <span className="whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
