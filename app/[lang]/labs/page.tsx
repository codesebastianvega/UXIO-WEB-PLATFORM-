import React from 'react';
import { getProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { Locale } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function LabsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const projects = getProjects(lang);
  const isEs = lang === 'es';
  const labProjects = projects.filter(p => p.id === 'boku-bento' || p.id === 'aluna');

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors">
      <div className="space-y-10 md:space-y-12">
        
        {/* Header */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-medium text-[#FF7F07] tracking-tight">
              // 01 · UXIO LABS & I+D
            </span>
            <span className="h-px w-6 bg-[#FF7F07]/40"></span>
            <span className="font-mono text-[11px] text-[#8E8E93]">IN-HOUSE EXPERIMENTAL PRODUCTS</span>
          </div>

          <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-tight tracking-tight text-[#111111] dark:text-white max-w-3xl">
            {isEs 
              ? 'Exploramos el futuro del software y hardware experimental.' 
              : 'Exploring the future of experimental software and hardware.'
            }
          </h1>

          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-2xl">
            {isEs
              ? 'Proyectos incubados y construidos 100% in-house para probar nuevas tecnologías, interfaces hápticas y modelos de negocio autónomos.'
              : 'Products conceived, funded, and engineered 100% in-house to validate new interaction paradigms, haptic interfaces, and autonomous business models.'
            }
          </p>
        </section>

        {/* Labs Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {labProjects.map((project) => (
            <ProjectCard key={project.id} project={project} lang={lang} />
          ))}
        </section>

      </div>
    </main>
  );
}
