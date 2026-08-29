'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Globe, Sparkles, ExternalLink } from 'lucide-react';
import { Project, Locale } from '@/types';

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
  lang?: Locale;
}

export default function ProjectCard({
  project,
  onSelect,
  lang = 'es',
}: ProjectCardProps) {
  const isEs = lang === 'es';
  
  // If viewing in disciplines, route directly to the specific discipline piece (e.g. /website)
  const targetPath = project.id === 'sie-travel'
    ? `/${lang}/works/ecosystems/sie-travel/website`
    : project.customPath
    ? `/${lang}${project.customPath.replace(/^\/(es|en)/, '')}`
    : `/${lang}/works/project/${project.id}`;

  const cleanDomain = project.liveUrl ? project.liveUrl.replace(/^https?:\/\/(www\.)?/, '') : null;

  return (
    <article
      className="group relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between border transition-all duration-300 bg-white dark:bg-[#151518] border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.2] dark:hover:border-white/[0.2] shadow-2xs hover:shadow-xl space-y-5"
    >
      {/* 1. Real Website Window Preview Mockup */}
      <div className="w-full rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-[#0E0E10] transition-colors">
        {/* Browser Frame */}
        <div className="px-3.5 py-2.5 bg-black/[0.03] dark:bg-white/[0.04] border-b border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FE385B]/70" />
            <span className="w-2 h-2 rounded-full bg-[#FFCC48]/70" />
            <span className="w-2 h-2 rounded-full bg-[#10B981]/70" />
          </div>

          {cleanDomain && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10.5px] text-[#555555] dark:text-[#A1A1AA] hover:text-[#FE385B] flex items-center gap-1 bg-white/80 dark:bg-black/50 px-2.5 py-0.5 rounded-full border border-black/[0.06] dark:border-white/[0.08] transition-colors truncate max-w-[180px]"
            >
              <Globe size={10} className="text-[#8E8E93] flex-shrink-0" />
              <span className="truncate">{cleanDomain}</span>
              <ExternalLink size={9} className="opacity-60 flex-shrink-0 ml-0.5" />
            </a>
          )}

          <span className="font-mono text-[10px] text-[#8E8E93]">
            {project.year}
          </span>
        </div>

        {/* Realistic Web UI Canvas (Without Duplicate Title) */}
        <div className="h-36 sm:h-40 p-4 sm:p-5 relative overflow-hidden flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500 bg-gradient-to-br from-black/[0.01] to-black/[0.04] dark:from-white/[0.02] dark:to-white/[0.04]">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-20 blur-2xl transition-all group-hover:opacity-40 pointer-events-none"
            style={{ backgroundColor: project.accentColor }}
          />

          {/* Web UI Mockup Elements */}
          <div className="relative z-10 space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] border border-black/[0.06] dark:border-white/[0.08] font-mono text-[9.5px] text-[#666666] dark:text-[#A1A1AA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>LIVE WEB PLATFORM</span>
            </div>
            <p className="font-display font-semibold text-sm sm:text-base text-[#222222] dark:text-[#EEEEEE] tracking-tight leading-snug line-clamp-2">
              {project.tagline}
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-2">
            <div className="flex items-center gap-1 font-mono text-[10px] text-[#8E8E93]">
              <span>Next.js 16</span>
              <span>·</span>
              <span>120 FPS</span>
            </div>

            {project.liveUrl && (
              <span className="font-mono text-[10px] text-[#FE385B] font-semibold flex items-center gap-1">
                <span>{isEs ? 'Ver Web' : 'Open'}</span>
                <ArrowUpRight size={11} />
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 2. Project Info: Title, Description & Stack */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#111111] dark:text-white tracking-tight group-hover:text-[#FE385B] transition-colors">
              {project.title}
            </h3>
            <span className="font-mono text-[11px] text-[#8E8E93]">
              {project.client}
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#666666] dark:text-[#A1A1AA] leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Chips */}
        {project.stack && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.slice(0, 3).map((stk, sIdx) => (
              <span
                key={sIdx}
                className="px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.04] dark:border-white/[0.06] font-mono text-[10.5px] text-[#555555] dark:text-[#A1A1AA]"
              >
                {stk}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 3. Action Footer */}
      <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between">
        <Link
          href={targetPath}
          className="inline-flex items-center gap-1.5 font-display font-bold text-xs text-[#111111] dark:text-white group-hover:text-[#FE385B] transition-colors"
        >
          <span>{isEs ? 'Ver Resumen de la Web' : 'View Web Summary'}</span>
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.05] hover:bg-[#FE385B] hover:text-white text-[#555555] dark:text-[#A1A1AA] font-mono text-[10.5px] transition-all"
            title={isEs ? 'Abrir sitio web oficial en vivo' : 'Open live website'}
          >
            <Globe size={11} />
            <span>{cleanDomain}</span>
          </a>
        )}
      </div>
    </article>
  );
}
