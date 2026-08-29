'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, MapPin, Clock, X } from 'lucide-react';
import { Project, Locale } from '@/types';
import ProjectCard from '@/components/ProjectCard';
import ServicesShowcase from '@/components/ServicesShowcase';

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
  const dict = dictionary?.canvas || {};
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Curated items for the narrative landing page
  const featuredWorks = projects.slice(0, 2); // 2 Selected works (Aluna & SIE Travel)
  const labProject = projects.find(p => p.id === 'boku-bento') || projects[2];

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors">
      <div className="space-y-14 md:space-y-16">
        
        {/* ========================================================= */}
        {/* 01 · HERO SECTION (Narrative Anchor)                      */}
        {/* ========================================================= */}
        <section className="pt-2">
          {/* Editorial Dispatch Header with Live Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-medium text-[#FE385B] tracking-tight">
                {dict.hero_prefix || '// 01 · HOME CANVAS'}
              </span>
              <span className="h-px w-6 bg-[#FE385B]/40"></span>
              <span className="font-mono text-xs text-[#8E8E93]">{dict.hero_tag || 'DIGITAL PRODUCT STUDIO'}</span>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.08] text-[#666666] dark:text-[#8E8E93] font-mono text-[11px] shadow-2xs">
                <MapPin size={11} className="text-[#8E8E93]" />
                <span>{dict.location || 'CDMX / 24°C'}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.08] text-[#666666] dark:text-[#8E8E93] font-mono text-[11px] shadow-2xs">
                <Clock size={11} className="text-[#8E8E93]" />
                <span>{dict.latency || 'LATENCY: 14MS'}</span>
              </div>
            </div>
          </div>

          {/* Hero Headline - Balanced */}
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight text-[#111111] dark:text-[#EDEDEE] max-w-3xl">
            {dict.hero_title || (lang === 'es' ? 'Diseñamos, construimos y escalamos experiencias digitales.' : 'We design, build and grow digital experiences.')}
          </h1>

          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-3xl">
            <p className="text-sm sm:text-base text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-xl">
              {dict.hero_description_1 || 'UXIO es una casa de producto digital y experiencias. Fusionamos'}{' '}
              <strong className="font-medium text-[#111111] dark:text-white">
                {dict.hero_description_highlight || 'geometría suave'}
              </strong>
              {', '}{dict.hero_description_2 || 'ingeniería de alta velocidad y curiosidad humana para lanzar productos memorables para empresas de alto impacto.'}
            </p>
            
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <div className="flex -space-x-1.5">
                <span className="inline-block w-5 h-5 rounded-full bg-[#FFCC48] border-2 border-white dark:border-[#171719] shadow-xs"></span>
                <span className="inline-block w-5 h-5 rounded-full bg-[#FF7F07] border-2 border-white dark:border-[#171719] shadow-xs"></span>
                <span className="inline-block w-5 h-5 rounded-full bg-[#FE385B] border-2 border-white dark:border-[#171719] shadow-xs"></span>
                <span className="inline-block w-5 h-5 rounded-full bg-[#00F0FF] border-2 border-white dark:border-[#171719] shadow-xs"></span>
              </div>
              <span className="font-mono text-xs text-[#666666] dark:text-[#8E8E93]">{dict.brand_accents_label || 'Acentos'}</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center gap-3">
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FE385B] hover:bg-[#e02d4e] text-white font-display font-semibold text-xs transition-all duration-200 shadow-accent-glow hover:shadow-md active:scale-95"
            >
              <span>{dict.cta_start_project || (lang === 'es' ? 'Iniciar un Proyecto' : 'Start a Project')}</span>
              <ArrowRight size={14} />
            </Link>

            <Link
              href="#disciplines"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-[#171719] hover:bg-black/[0.04] dark:hover:bg-white/[0.08] text-[#111111] dark:text-[#EDEDEE] border border-black/[0.08] dark:border-white/[0.08] font-sans font-medium text-xs transition-all shadow-soft-sm"
            >
              <span>{dict.cta_explore_disciplines || (lang === 'es' ? 'Explorar Disciplinas' : 'Explore Disciplines')}</span>
              <ChevronRight size={14} className="text-[#8E8E93]" />
            </Link>
          </div>
        </section>


        {/* ========================================================= */}
        {/* 02 · DISCIPLINES SECTION (Interactive Feature Tabs)       */}
        {/* ========================================================= */}
        <div id="disciplines">
          <ServicesShowcase lang={lang} dictionary={dictionary} />
        </div>


        {/* ========================================================= */}
        {/* 03 · FEATURED WORKS (Curated 2 Selected Works)            */}
        {/* ========================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 border-b border-black/[0.08] dark:border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-medium text-[#FE385B] tracking-tight">
                  {dict.works_prefix || '// 03 · PROYECTOS DESTACADOS'}
                </span>
                <span className="h-px w-6 bg-[#FE385B]/40"></span>
              </div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[#111111] dark:text-white tracking-tight">
                {dict.works_title || 'Selected Works'}
              </h2>
            </div>

            <p className="text-xs text-[#666666] dark:text-[#8E8E93] max-w-md font-sans">
              {dict.works_desc || (lang === 'es' ? 'Una muestra curada de productos digitales e infraestructuras de diseño lanzadas recientemente.' : 'A curated dispatch of digital products and design systems engineered for ventures.')}
            </p>
          </div>

          {/* 2-Card Featured Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredWorks.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                lang={lang}
              />
            ))}
          </div>

          {/* View All Projects Global Button */}
          <div className="pt-2 text-center">
            <Link
              href={`/${lang}/works`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] dark:bg-white text-white dark:text-black font-display font-semibold text-xs tracking-wide hover:bg-black/80 dark:hover:bg-white/90 transition-all shadow-sm active:scale-95"
            >
              <span>{dict.works_cta_all || (lang === 'es' ? 'Ver todos los proyectos' : 'View all projects')}</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </section>


        {/* ========================================================= */}
        {/* 04 · THE LAB (In-House Products & Spotlight)              */}
        {/* ========================================================= */}
        <section className="rounded-2xl p-6 sm:p-8 bg-white/80 dark:bg-[#171719]/90 border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-[#FF7F07]/15 blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-medium text-[#FF7F07] tracking-tight">
                  {dict.lab_prefix || '// 04 · THE LAB / I+D PROPIO'}
                </span>
                <span className="h-px w-6 bg-[#FF7F07]/40"></span>
              </div>

              <h2 className="font-display font-bold text-xl sm:text-2xl text-[#111111] dark:text-white tracking-tight leading-snug">
                {dict.lab_title || (lang === 'es' ? 'Construimos e incubamos nuestras propias ideas.' : 'We engineer and incubate our own products.')}
              </h2>

              <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
                {dict.lab_desc || (lang === 'es' ? 'En UXIO no solo diseñamos para clientes: concebimos, financiamos y construimos productos de software experimental y hardware para explorar el futuro de la interacción.' : 'At UXIO, we don\'t just build for clients: we invent, fund, and ship experimental software and hardware.')}
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.04] dark:border-white/[0.06]">
                  <div className="font-mono text-[9px] text-[#8E8E93]">{dict.lab_metric_label || 'INNOVACIÓN CONTINUA'}</div>
                  <div className="font-mono text-xs font-bold text-[#FF7F07] mt-0.5">{dict.lab_metric_value || '100% IN-HOUSE LAB'}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.04] dark:border-white/[0.06]">
                  <div className="font-mono text-[9px] text-[#8E8E93]">ESTADO ACTIVO</div>
                  <div className="font-mono text-xs font-bold text-[#00F0FF] mt-0.5">3 HUB EXPERIMENTS</div>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  href={`/${lang}/labs`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF7F07] hover:bg-[#e06f06] text-white font-display font-semibold text-xs tracking-wide transition-all shadow-sm active:scale-95"
                >
                  <span>{dict.lab_cta || (lang === 'es' ? 'Explorar nuestros Labs' : 'Explore our Labs')}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Right Card Spotlight (Boku Bento) */}
            <div className="lg:col-span-6">
              {labProject && (
                <ProjectCard
                  project={labProject}
                  lang={lang}
                />
              )}
            </div>
          </div>
        </section>

      </div>

      {/* ========================================================= */}
      {/* BOTTOM METRICS STRIP                                      */}
      {/* ========================================================= */}
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

      {/* ========================================================= */}
      {/* CASE STUDY PREVIEW MODAL                                  */}
      {/* ========================================================= */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-[#171719] rounded-2xl max-w-lg w-full p-6 border border-black/[0.1] dark:border-white/[0.1] shadow-2xl relative text-[#111111] dark:text-[#EDEDEE]">
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-[#F7F7F5] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.15] text-[#111111] dark:text-white transition-colors"
            >
              <X size={15} />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span 
                className="w-2.5 h-2.5 rounded-full"
                style={{ 
                  backgroundColor: activeProjectModal.accentColor,
                  boxShadow: `0 0 6px ${activeProjectModal.accentColor}` 
                }}
              ></span>
              <span className="font-mono text-xs text-[#8E8E93]">{activeProjectModal.category}</span>
              <span className="font-mono text-xs text-[#8E8E93]">· {activeProjectModal.year}</span>
            </div>

            <h2 className="font-display font-bold text-xl text-[#111111] dark:text-white mb-1">
              {activeProjectModal.title}
            </h2>
            <p className="font-mono text-xs text-[#8E8E93] mb-3">
              {activeProjectModal.tagline}
            </p>

            <div className="p-3.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.06] dark:border-white/[0.08] mb-4 space-y-1.5">
              <div className="font-mono text-[10px] text-[#8E8E93]">
                {lang === 'es' ? 'RESUMEN DEL CASO DE ESTUDIO' : 'STUDIO CASE STUDY OVERVIEW'}
              </div>
              <p className="text-xs text-[#111111] dark:text-[#EDEDEE] leading-relaxed font-sans">
                {activeProjectModal.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-black/[0.08] dark:border-white/[0.08]">
              <Link
                href={`/${lang}/works/project/${activeProjectModal.id}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FE385B] text-white font-display text-xs font-semibold hover:bg-[#e02d4e] transition-colors"
              >
                <span>{lang === 'es' ? 'Ver Caso de Estudio Completo' : 'View Full Case Study'}</span>
                <ArrowRight size={12} />
              </Link>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-3 py-1.5 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] text-[#666666] dark:text-[#8E8E93] font-display text-xs font-semibold hover:text-[#111111] dark:hover:text-white transition-colors"
              >
                {lang === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
