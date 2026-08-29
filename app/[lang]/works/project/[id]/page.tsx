import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  Briefcase
} from 'lucide-react';
import { getProjectsData, getProjectById } from '@/data/projects';
import { Locale } from '@/types';

export async function generateStaticParams() {
  const projects = getProjectsData('es');
  const params: Array<{ lang: Locale; id: string }> = [];
  for (const lang of ['es', 'en'] as Locale[]) {
    for (const p of projects) {
      params.push({ lang, id: p.id });
    }
  }
  return params;
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang: rawLang, id } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const isEs = lang === 'es';
  const project = getProjectById(id, lang);

  if (!project) {
    notFound();
  }

  const allProjects = getProjectsData(lang);
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors">
      <div className="space-y-12 md:space-y-14">
        
        {/* ========================================================= */}
        {/* 01 · HERO & CASE STUDY HEADER                             */}
        {/* ========================================================= */}
        <section className="space-y-4">
          <Link
            href={`/${lang}/works`}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors group"
          >
            <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1" />
            <span>{isEs ? 'Volver a Todos los Proyectos' : 'Back to All Works'}</span>
          </Link>

          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span 
                className="font-mono text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${project.accentColor}15`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}35`
                }}
              >
                {project.category.toUpperCase()} · {project.year}
              </span>
              <span className="font-mono text-xs text-[#8E8E93]">{project.client}</span>
            </div>

            <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-tight tracking-tight text-[#111111] dark:text-white max-w-4xl">
              {project.title}
            </h1>

            <p className="font-mono text-xs sm:text-sm text-[#8E8E93] max-w-3xl">
              {project.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-3xl pt-1">
              {project.lead}
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 02 · METADATA STRIP (Overview Técnico)                    */}
        {/* ========================================================= */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm">
          <div className="space-y-1">
            <div className="font-mono text-[10px] text-[#8E8E93] uppercase tracking-wider">{isEs ? 'CLIENTE' : 'CLIENT'}</div>
            <div className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-white">{project.client}</div>
          </div>

          <div className="space-y-1">
            <div className="font-mono text-[10px] text-[#8E8E93] uppercase tracking-wider">{isEs ? 'DURACIÓN' : 'TIMELINE'}</div>
            <div className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-white">{project.timeline}</div>
          </div>

          <div className="space-y-1">
            <div className="font-mono text-[10px] text-[#8E8E93] uppercase tracking-wider">{isEs ? 'DISCIPLINAS' : 'DISCIPLINES'}</div>
            <div className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-white truncate">
              {project.disciplinesUsed.join(' · ')}
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-mono text-[10px] text-[#8E8E93] uppercase tracking-wider">{isEs ? 'ESTADO' : 'STATUS'}</div>
            <div className="flex items-center gap-1.5 font-mono text-xs font-semibold" style={{ color: project.accentColor }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: project.accentColor }}></span>
              <span>IN PRODUCTION</span>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 03 · RETO VS SOLUCIÓN (Split 2 Columnas Editorial)        */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* El Reto */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-medium text-[#FE385B] tracking-tight">
                // 01 · EL RETO DEL PRODUCTO
              </span>
              <span className="h-px w-6 bg-[#FE385B]/40"></span>
            </div>

            <h2 className="font-display font-bold text-lg sm:text-xl text-[#111111] dark:text-white tracking-tight">
              {isEs ? 'Identificando la fricción.' : 'Pinpointing the friction.'}
            </h2>

            <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
              {project.challenge}
            </p>
          </div>

          {/* La Solución UXIO */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-medium text-[#00F0FF] tracking-tight">
                // 02 · LA SOLUCIÓN UXIO
              </span>
              <span className="h-px w-6 bg-[#00F0FF]/40"></span>
            </div>

            <h2 className="font-display font-bold text-lg sm:text-xl text-[#111111] dark:text-white tracking-tight">
              {isEs ? 'Ingeniería con geometría suave.' : 'Soft geometry engineering.'}
            </h2>

            <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 04 · IMPACTO Y MÉTRICAS DE NEGOCIO                        */}
        {/* ========================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accentColor }}></span>
              <h2 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white tracking-tight">
                {isEs ? 'Impacto & Resultados Reales' : 'Impact & Real-World Results'}
              </h2>
            </div>
            <span className="font-mono text-[11px] text-[#8E8E93]">[VERIFIED METRICS]</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {project.stats.map((st, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-mono text-[10px] text-[#8E8E93] uppercase tracking-wider">{st.label}</div>
                <div className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white tracking-tight">
                  {st.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 05 · ENTREGABLES Y STACK TÉCNICO                          */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Entregables */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="font-display font-bold text-base text-[#111111] dark:text-white">
              {isEs ? 'Entregables del Sprint' : 'Sprint Deliverables'}
            </h3>
            <div className="space-y-2">
              {project.deliverables.map((del, dIdx) => (
                <div 
                  key={dIdx}
                  className="p-3 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.04] dark:border-white/[0.06] flex items-center gap-2.5 text-xs font-sans text-[#111111] dark:text-[#EDEDEE]"
                >
                  <CheckCircle2 size={14} style={{ color: project.accentColor }} className="flex-shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack Técnico */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="font-display font-bold text-base text-[#111111] dark:text-white">
              {isEs ? 'Arquitectura & Stack' : 'Architecture & Tech Stack'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] font-mono text-xs text-[#111111] dark:text-white shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 06 · NAVEGACIÓN ENTRE CASOS DE ESTUDIO                    */}
        {/* ========================================================= */}
        <section className="pt-6 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={`/${lang}/works/project/${prevProject.id}`}
            className="w-full sm:w-auto p-3.5 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] flex items-center gap-3 hover:border-black/[0.18] dark:hover:border-white/[0.2] transition-colors group"
          >
            <ArrowLeft size={14} className="text-[#8E8E93] group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="font-mono text-[9px] text-[#8E8E93]">{isEs ? 'PROYECTO ANTERIOR' : 'PREVIOUS'}</div>
              <div className="font-display font-bold text-xs text-[#111111] dark:text-white">{prevProject.title}</div>
            </div>
          </Link>

          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FE385B] hover:bg-[#e02d4e] text-white font-display font-semibold text-xs transition-all shadow-accent-glow active:scale-95"
          >
            <span>{isEs ? 'Iniciar un Proyecto Similar' : 'Start a Similar Project'}</span>
            <ArrowRight size={13} />
          </Link>

          <Link
            href={`/${lang}/works/project/${nextProject.id}`}
            className="w-full sm:w-auto p-3.5 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between sm:justify-start gap-3 hover:border-black/[0.18] dark:hover:border-white/[0.2] transition-colors group text-right"
          >
            <div>
              <div className="font-mono text-[9px] text-[#8E8E93]">{isEs ? 'SIGUIENTE PROYECTO' : 'NEXT'}</div>
              <div className="font-display font-bold text-xs text-[#111111] dark:text-white">{nextProject.title}</div>
            </div>
            <ArrowRight size={14} className="text-[#8E8E93] group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

      </div>
    </main>
  );
}
