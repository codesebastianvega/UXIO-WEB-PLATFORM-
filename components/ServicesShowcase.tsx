'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Cpu,
  Layers,
  Palette,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Code2,
  Database,
  Globe,
  Layout,
  Component,
  Sliders,
  PenTool,
  Box,
  Target,
  BarChart3,
  Rocket,
  Video,
  Workflow
} from 'lucide-react';
import { Locale } from '@/types';
import { getServicesShowcaseData } from '@/data/services-showcase';

interface ServicesShowcaseProps {
  lang: Locale;
  dictionary?: any;
}

export default function ServicesShowcase({
  lang,
  dictionary
}: ServicesShowcaseProps) {
  const isEs = lang === 'es';
  const dict = dictionary?.home || {};
  const servicesData = getServicesShowcaseData(lang);

  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const currentService = servicesData.find(s => s.id === activeTab) || servicesData[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'technology': return <Cpu size={17} />;
      case 'experience': return <Layers size={17} />;
      case 'brand': return <Palette size={17} />;
      case 'growth': return <TrendingUp size={17} />;
      case 'content': return <Video size={17} />;
      case 'solutions': return <Workflow size={17} />;
      default: return <Sparkles size={17} />;
    }
  };

  const getCapabilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <Code2 size={15} />;
      case 'cpu': return <Cpu size={15} />;
      case 'database': return <Database size={15} />;
      case 'globe': return <Globe size={15} />;
      case 'layout': return <Layout size={15} />;
      case 'component': return <Component size={15} />;
      case 'sliders': return <Sliders size={15} />;
      case 'layers': return <Layers size={15} />;
      case 'palette': return <Palette size={15} />;
      case 'pen': return <PenTool size={15} />;
      case 'box': return <Box size={15} />;
      case 'target': return <Target size={15} />;
      case 'rocket': return <Rocket size={15} />;
      case 'chart': return <BarChart3 size={15} />;
      case 'trending': return <TrendingUp size={15} />;
      case 'video': return <Video size={15} />;
      case 'workflow': return <Workflow size={15} />;
      default: return <Sparkles size={15} />;
    }
  };

  return (
    <section id="disciplines" className="scroll-mt-20 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-medium text-[#00F0FF] tracking-tight">
              {dict.disciplines_prefix || (isEs ? '// 01 · SERVICIOS' : '// 01 · SERVICES')}
            </span>
            <span className="h-px w-8 bg-[#00F0FF]/40"></span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#111111] dark:text-white tracking-tight">
            {dict.disciplines_title || (isEs ? 'Lo que hacemos' : 'What we do')}
          </h2>
        </div>

        <p className="text-sm text-[#666666] dark:text-[#8E8E93] max-w-md font-sans">
          {dict.disciplines_desc || (isEs
            ? 'Creamos, diseñamos y construimos las herramientas digitales que una marca necesita para avanzar.'
            : 'We create, design, and build the digital tools a brand needs to move forward.'
          )}
        </p>
      </div>

      {/* Split Interactive Showcase (Tabs / Canvas) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Column: Vertical Feature Tabs */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-2">
          <div className="space-y-1.5">
            {servicesData.map((service) => {
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`
                    w-full text-left p-3.5 rounded-2xl transition-all duration-200 relative flex items-center justify-between border cursor-pointer
                    ${isActive
                      ? 'bg-white dark:bg-[#171719] border-black/[0.1] dark:border-white/[0.12] shadow-soft-sm text-[#111111] dark:text-white scale-[1.01]'
                      : 'bg-white/40 dark:bg-white/[0.02] border-transparent hover:bg-white/70 dark:hover:bg-white/[0.05] text-[#666666] dark:text-[#8E8E93] hover:text-[#111111] dark:hover:text-[#EDEDEE]'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className={`
                        w-8 h-8 rounded-xl flex items-center justify-center transition-colors
                        ${isActive 
                          ? 'bg-black/[0.06] dark:bg-white/[0.08]' 
                          : 'bg-black/[0.03] dark:bg-white/[0.03]'
                        }
                      `}
                      style={{ color: isActive ? service.accent : undefined }}
                    >
                      {getTabIcon(service.id)}
                    </div>

                    <div>
                      <div className="font-display font-bold text-sm sm:text-base leading-tight">
                        {service.label}
                      </div>
                      <div className="font-mono text-[10px] text-[#8E8E93] tracking-wide">
                        {service.badge}
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <span
                      className="w-2 h-2 rounded-full transition-all duration-300 animate-pulse"
                      style={{ 
                        backgroundColor: service.accent,
                        boxShadow: `0 0 8px ${service.accent}` 
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 hidden lg:block">
            <Link
              href={`/${lang}/services`}
              className="inline-flex items-center gap-2 font-mono text-xs text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors group"
            >
              <span>{isEs ? 'Ver todos los servicios' : 'View all services'}</span>
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: Dynamic Content Canvas */}
        <div className="lg:col-span-8 min-h-[440px] rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-md relative overflow-hidden flex flex-col justify-between">
          <div 
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-500 opacity-40"
            style={{ backgroundColor: currentService.auroraColor }}
          />

          <div
            key={currentService.id}
            className="relative z-10 space-y-5 animate-fadeIn"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2">
                  <span 
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ 
                      backgroundColor: currentService.accent,
                      boxShadow: `0 0 8px ${currentService.accent}` 
                    }}
                  />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: currentService.accent }}>
                    {currentService.badge}
                  </span>
                </div>

                <span className="font-mono text-[10px] text-[#8E8E93] bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.04] dark:border-white/[0.06] px-2.5 py-1 rounded-full">
                  {currentService.metricHighlight}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-xl sm:text-2xl lg:text-[25px] leading-snug text-[#111111] dark:text-white max-w-2xl">
                {currentService.headline}
              </h3>

              <p className="text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans mt-2 max-w-2xl">
                {currentService.description}
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="space-y-2 pt-1">
              <div className="font-mono text-[10px] uppercase text-[#8E8E93] tracking-wider">
                {isEs ? 'LO QUE OBTIENE TU NEGOCIO' : 'WHAT YOUR BUSINESS GETS'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {currentService.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-[#F7F7F5]/90 dark:bg-[#0D0D0E]/80 border border-black/[0.05] dark:border-white/[0.06] hover:border-black/[0.18] dark:hover:border-white/[0.18] transition-all hover:scale-[1.01] shadow-2xs group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="p-1 rounded-lg bg-white dark:bg-white/[0.06] text-[#111111] dark:text-white shadow-2xs">
                        {getCapabilityIcon(cap.iconName)}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentService.accent }}></span>
                    </div>

                    <div>
                      <div className="font-mono text-xs font-semibold text-[#111111] dark:text-[#EDEDEE]">
                        {cap.name}
                      </div>
                      <div className="text-[11px] text-[#8E8E93] font-sans mt-0.5">
                        {cap.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Canvas Bottom */}
          <div className="relative z-10 pt-5 mt-5 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#8E8E93]">
              {isEs ? 'DISPONIBLE PARA TU NEGOCIO' : 'AVAILABLE FOR YOUR PROJECT'}
            </span>

            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#FE385B] hover:text-[#e02d4e] transition-colors group"
            >
              <span>{isEs ? 'Hablar sobre un proyecto' : 'Talk about a project'}</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
