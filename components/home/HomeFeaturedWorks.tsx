'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Project, Locale } from '@/types';
import ProjectCard from '@/components/ProjectCard';

interface HomeFeaturedWorksProps {
  lang: Locale;
  dict: any;
  featuredWorks: Project[];
}

export default function HomeFeaturedWorks({ lang, dict, featuredWorks }: HomeFeaturedWorksProps) {
  const isEs = lang === 'es';

  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 border-b border-black/[0.08] dark:border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs font-medium text-[#FE385B] tracking-tight">
              {dict.works_prefix || (isEs ? '// 02 · PROYECTOS' : '// 02 · PROJECTS')}
            </span>
            <span className="h-px w-6 bg-[#FE385B]/40"></span>
          </div>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-[#111111] dark:text-white tracking-tight">
            {dict.works_title || (isEs ? 'Proyectos destacados' : 'Featured projects')}
          </h2>
        </div>

        <p className="text-xs text-[#666666] dark:text-[#8E8E93] max-w-md font-sans">
          {dict.works_desc || (isEs
            ? 'Una selección de proyectos que hemos diseñado, construido o impulsado junto a nuestros clientes.'
            : 'A selection of projects we have designed, built, or boosted alongside our clients.'
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {featuredWorks.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            lang={lang}
          />
        ))}
      </div>

      <div className="pt-2 text-center">
        <Link
          href={`/${lang}/works`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] dark:bg-white text-white dark:text-black font-display font-semibold text-xs tracking-wide hover:bg-black/80 dark:hover:bg-white/90 transition-all shadow-sm active:scale-95"
        >
          <span>{dict.works_cta_all || (isEs ? 'Ver todos los proyectos' : 'View all projects')}</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}
