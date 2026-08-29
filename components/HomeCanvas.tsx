'use client';

import React, { useState } from 'react';
import { Project, Locale } from '@/types';
import ServicesShowcase from '@/components/ServicesShowcase';
import HomeHero from '@/components/home/HomeHero';
import HomeFeaturedWorks from '@/components/home/HomeFeaturedWorks';
import HomeLabsSpotlight from '@/components/home/HomeLabsSpotlight';
import HomeAcademySpotlight from '@/components/home/HomeAcademySpotlight';
import HomeFinalCta from '@/components/home/HomeFinalCta';
import HomeCaseModal from '@/components/home/HomeCaseModal';

interface HomeCanvasProps {
  lang: Locale;
  dictionary: any;
  projects: Project[];
  metrics: any[];
}

export default function HomeCanvas({
  lang,
  dictionary,
  projects,
  metrics,
}: HomeCanvasProps) {
  const dict = dictionary?.home || {};
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Curated items for the landing page
  const featuredWorks = projects.slice(0, 2);
  const labProject = projects.find(p => p.id === 'boku-bento') || projects[2];

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors">
      <div className="space-y-14 md:space-y-16">
        
        {/* 01 · Hero Section */}
        <HomeHero lang={lang} dict={dict} />

        {/* 01 · Servicios Showcase */}
        <div id="services">
          <ServicesShowcase lang={lang} dictionary={dictionary} />
        </div>

        {/* 02 · Proyectos Destacados */}
        <HomeFeaturedWorks lang={lang} dict={dict} featuredWorks={featuredWorks} />

        {/* 03 · Labs Spotlight */}
        <HomeLabsSpotlight lang={lang} dict={dict} labProject={labProject} />

        {/* 04 · Academy Spotlight */}
        <HomeAcademySpotlight lang={lang} dict={dict} />

        {/* 05 · Final CTA */}
        <HomeFinalCta lang={lang} dict={dict} />

      </div>

      {/* Bottom Metrics Strip */}
      <footer className="mt-14 pt-6 border-t border-black/[0.08] dark:border-white/[0.08]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3.5 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.08] shadow-soft-sm">
          {metrics.map((metric, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="font-mono text-[9px] text-[#8E8E93] tracking-tight">{metric.label}</div>
              <div className="flex items-center gap-1.5">
                {metric.badge && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FE385B] shadow-[0_0_6px_#FE385B]"></span>
                )}
                <span className="font-mono text-xs font-semibold text-[#111111] dark:text-[#EDEDEE]">{metric.value}</span>
              </div>
            </div>
          ))}
        </div>
      </footer>

      {/* Case Study Modal */}
      <HomeCaseModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        lang={lang}
      />
    </main>
  );
}
