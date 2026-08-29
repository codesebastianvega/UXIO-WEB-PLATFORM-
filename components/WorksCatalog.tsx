'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Project, Locale } from '@/types';
import ProjectCard from '@/components/ProjectCard';
import { X, ArrowRight, Terminal } from 'lucide-react';

interface WorksCatalogProps {
  lang: Locale;
  projects: Project[];
  dictionary?: any;
}

export default function WorksCatalog({
  lang,
  projects,
  dictionary
}: WorksCatalogProps) {
  const isEs = lang === 'es';
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    { id: 'All', label: isEs ? 'Todos' : 'All' },
    { id: 'Websites', label: isEs ? 'Sitios Web' : 'Websites' },
    { id: 'Apps', label: 'Apps' },
    { id: 'Branding', label: 'Branding' },
    { id: 'UX/UI', label: 'UX/UI' },
    { id: 'Content', label: isEs ? 'Contenido' : 'Content' },
  ];

  // Filtering logic matching category name or tags
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    
    // Check main category
    if (project.category.toLowerCase() === activeCategory.toLowerCase()) return true;

    // Check tags array
    const hasTag = project.tags.some(
      (t) => t.label.toLowerCase() === activeCategory.toLowerCase() ||
             (activeCategory === 'Websites' && (t.label.toLowerCase().includes('web') || t.label.toLowerCase().includes('plataforma'))) ||
             (activeCategory === 'Apps' && (t.label.toLowerCase().includes('app') || t.label.toLowerCase().includes('móvil'))) ||
             (activeCategory === 'Content' && (t.label.toLowerCase().includes('content') || t.label.toLowerCase().includes('video') || t.label.toLowerCase().includes('contenido')))
    );

    return hasTag;
  });

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors">
      <div className="space-y-8 md:space-y-10">
        
        {/* ========================================================= */}
        {/* 01 · ENCABEZADO EDITORIAL                                 */}
        {/* ========================================================= */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-medium text-[#FE385B] tracking-tight">
              // 02 · {isEs ? 'PROYECTOS' : 'WORKS'}
            </span>
            <span className="h-px w-6 bg-[#FE385B]/40"></span>
            <span className="font-mono text-[11px] text-[#8E8E93]">{isEs ? 'PORTAFOLIO' : 'PORTFOLIO'}</span>
          </div>

          <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-tight tracking-tight text-[#111111] dark:text-white max-w-4xl">
            {isEs ? 'Proyectos Destacados.' : 'Selected Works.'}
          </h1>

          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-2xl">
            {isEs
              ? 'Diseñamos y construimos productos digitales, sitios web, apps y marcas que ayudan a las empresas a crecer y destacar.'
              : 'We design and build digital products, websites, apps, and brands that help businesses grow and stand out.'
            }
          </p>
        </section>

        {/* ========================================================= */}
        {/* 02 · BARRA DE FILTROS (Chips Interactivos)                */}
        {/* ========================================================= */}
        <section className="pb-4 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              
              // Count matching items
              const matchCount = projects.filter((p) => {
                if (cat.id === 'All') return true;
                if (p.category.toLowerCase() === cat.id.toLowerCase()) return true;
                return p.tags.some((t) => t.label.toLowerCase() === cat.id.toLowerCase() ||
                  (cat.id === 'Websites' && (t.label.toLowerCase().includes('web') || t.label.toLowerCase().includes('plataforma'))) ||
                  (cat.id === 'Apps' && (t.label.toLowerCase().includes('app') || t.label.toLowerCase().includes('móvil'))) ||
                  (cat.id === 'Content' && (t.label.toLowerCase().includes('content') || t.label.toLowerCase().includes('video') || t.label.toLowerCase().includes('contenido')))
                );
              }).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs transition-all duration-200 cursor-pointer flex-shrink-0
                    ${isActive
                      ? 'bg-[#111111] text-white dark:bg-white dark:text-black font-semibold shadow-xs scale-105'
                      : 'bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-[#666666] dark:text-[#8E8E93] hover:text-[#111111] dark:hover:text-white hover:border-black/[0.2] dark:hover:border-white/[0.2]'
                    }
                  `}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 dark:bg-black/10' : 'bg-black/[0.05] dark:bg-white/[0.08]'}`}>
                    {String(matchCount).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 03 · GRID DE PROYECTOS O ESTADO VACÍO (Empty State)       */}
        {/* ========================================================= */}
        {filteredProjects.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fadeIn">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                lang={lang}
              />
            ))}
          </section>
        ) : (
          /* Empty State Técnico */
          <section className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm text-center space-y-3 animate-fadeIn">
            <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center mx-auto text-[#8E8E93]">
              <Terminal size={18} className="animate-pulse text-[#00F0FF]" />
            </div>

            <div className="space-y-1 font-mono">
              <div className="text-xs text-[#00F0FF] font-semibold tracking-wider">
                [ STATUS: COMPILING DATA... // ARCHIVO EN PREPARACIÓN ]
              </div>
              <p className="text-xs text-[#8E8E93] max-w-sm mx-auto font-sans">
                {isEs 
                  ? 'Actualmente estamos preparando nuevos casos de estudio y métricas para esta categoría.'
                  : 'Currently compiling new venture case studies and production metrics for this category.'
                }
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveCategory('All')}
                className="px-4 py-2 rounded-xl bg-[#111111] dark:bg-white text-white dark:text-black font-mono text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                {isEs ? 'Restablecer Filtros' : 'Reset Filters'}
              </button>
            </div>
          </section>
        )}

      </div>

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
                {isEs ? 'RESUMEN DEL CASO DE ESTUDIO' : 'STUDIO CASE STUDY OVERVIEW'}
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
                <span>{isEs ? 'Ver Caso de Estudio Completo' : 'View Full Case Study'}</span>
                <ArrowRight size={12} />
              </Link>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-3 py-1.5 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] text-[#666666] dark:text-[#8E8E93] font-display text-xs font-semibold hover:text-[#111111] dark:hover:text-white transition-colors"
              >
                {isEs ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
