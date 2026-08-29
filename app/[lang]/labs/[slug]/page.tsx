import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { Locale } from '@/types';

export async function generateStaticParams() {
  const slugs = ['aluna', 'boku-bento', 'arca', 'experiments'];
  const params: Array<{ lang: Locale; slug: string }> = [];
  for (const lang of ['es', 'en'] as Locale[]) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export default async function LabSubpage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const isEs = lang === 'es';
  const projects = getProjects(lang);
  const matchedProject = projects.find(p => p.id === slug) || projects[2];

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-10 lg:p-12 flex flex-col justify-between transition-colors">
      <div className="space-y-16">
        <div>
          <Link
            href={`/${lang}/labs`}
            className="inline-flex items-center gap-2 font-mono text-xs text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={13} />
            <span>{isEs ? 'Volver a Labs' : 'Back to Labs'}</span>
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs font-medium text-[#FF7F07] tracking-tight">
              // LAB EXPERIMENT · IN-HOUSE R&D
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-[#111111] dark:text-white tracking-tight">
            {matchedProject.title}
          </h1>
          <p className="font-mono text-sm text-[#8E8E93] mt-2">
            {matchedProject.tagline}
          </p>
        </div>

        <div className="max-w-2xl">
          <ProjectCard project={matchedProject} />
        </div>
      </div>
    </main>
  );
}
