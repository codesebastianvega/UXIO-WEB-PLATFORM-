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
  Rocket
} from 'lucide-react';
import { Locale } from '@/types';

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

  const servicesData = [
    {
      id: "technology",
      label: isEs ? "Tecnología" : "Technology",
      badge: "Dev & Core",
      accent: "#00F0FF",
      auroraColor: "rgba(0, 240, 255, 0.15)",
      headline: isEs 
        ? "Arquitectura full-stack moderna y reactiva de alto rendimiento."
        : "High-throughput reactive modern full-stack architectures.",
      description: isEs
        ? "Construimos aplicaciones web de escala global con Next.js 14, TypeScript estricto, microservicios serverless y canalizaciones de IA en el edge."
        : "We build globally scaled web applications with Next.js 14, strict TypeScript, serverless microservices, and edge AI pipelines.",
      metricHighlight: "99.98% SLA // EDGE RUNTIME",
      path: "/services/technology",
      capabilities: [
        { name: "Next.js 14 & React 18", desc: isEs ? "App Router & SSR Estático" : "App Router & Static SSR", icon: <Code2 size={15} /> },
        { name: "TypeScript Core", desc: isEs ? "Tipado estricto end-to-end" : "End-to-end strict typing", icon: <Cpu size={15} /> },
        { name: "APIs & Microservicios", desc: isEs ? "GraphQL / REST Reactivas" : "Reactive GraphQL & REST", icon: <Database size={15} /> },
        { name: "Edge & Cloud Deploy", desc: isEs ? "Latencia ultra-baja global" : "Global ultra-low latency", icon: <Globe size={15} /> },
        { name: "AI Core Integrations", desc: isEs ? "Modelos LLMs en tiempo real" : "Real-time LLM pipelines", icon: <Sparkles size={15} /> },
      ]
    },
    {
      id: "experience",
      label: isEs ? "Experiencia" : "Experience",
      badge: "Design Systems",
      accent: "#FE385B",
      auroraColor: "rgba(254, 56, 91, 0.15)",
      headline: isEs
        ? "Geometría suave, micro-interacciones inmersivas y tokens escalables."
        : "Soft geometry, immersive micro-interactions, and scalable design tokens.",
      description: isEs
        ? "Interfaces que enamoran al primer instante. Diseñamos sistemas de diseño vivos con consistencia milimétrica entre Figma y código en producción."
        : "Interfaces that captivate at first glance. We build living design systems with pixel-perfect consistency between Figma and production code.",
      metricHighlight: "LIVING TOKENS // ZERO DRIFT",
      path: "/services/experience",
      capabilities: [
        { name: "Soft Geometry UI", desc: isEs ? "Radios y tensión visual moderna" : "Modern radius & visual rhythm", icon: <Layout size={15} /> },
        { name: "Componentes React", desc: isEs ? "Librería modular y reusable" : "Modular reusable component kit", icon: <Component size={15} /> },
        { name: "Micro-Interacciones", desc: isEs ? "CSS & gestos fluidos" : "CSS & fluid gestures", icon: <Sliders size={15} /> },
        { name: "Design Tokens", desc: isEs ? "Variables semánticas unificadas" : "Unified semantic token variables", icon: <Layers size={15} /> },
        { name: "Mobile UX First", desc: isEs ? "Adaptabilidad responsive fluida" : "Fluid responsive adaptability", icon: <Sparkles size={15} /> },
      ]
    },
    {
      id: "brand",
      label: isEs ? "Identidad & Marca" : "Brand & Identity",
      badge: "Editorial Design",
      accent: "#FFCC48",
      auroraColor: "rgba(255, 204, 72, 0.15)",
      headline: isEs
        ? "Dirección de arte contemporánea e identidades visuales vivas."
        : "Contemporary art direction and living visual brand systems.",
      description: isEs
        ? "Creamos universos de marca digitales que proyectan autoridad y sofisticación técnica a través de tipografía bespoke, paletas curadas y 3D."
        : "We craft digital brand universes projecting authority and technical sophistication through bespoke typography, curated palettes, and 3D assets.",
      metricHighlight: "BESPOKE BRANDING // VECTOR ART",
      path: "/services/brand",
      capabilities: [
        { name: "Sistemas de Identidad", desc: isEs ? "Logotipos y lenguajes vivos" : "Living logos & brand systems", icon: <Palette size={15} /> },
        { name: "Tipografía Editorial", desc: isEs ? "Jerarquía y fuentes a medida" : "Bespoke font & hierarchy", icon: <PenTool size={15} /> },
        { name: "Activos 3D & Canvas", desc: isEs ? "Visuales interactivos WebGL" : "Interactive WebGL visuals", icon: <Box size={15} /> },
        { name: "Guías de Marca", desc: isEs ? "Documentación digital clara" : "Clear digital brand guidelines", icon: <Layers size={15} /> },
        { name: "Dirección de Arte", desc: isEs ? "Estilo editorial contemporáneo" : "Contemporary editorial styling", icon: <Sparkles size={15} /> },
      ]
    },
    {
      id: "growth",
      label: isEs ? "Growth & Estrategia" : "Growth & Strategy",
      badge: "Escala Global",
      accent: "#FF7F07",
      auroraColor: "rgba(255, 127, 7, 0.15)",
      headline: isEs
        ? "Optimización de conversión e ingeniería de producto orientada a datos."
        : "Conversion engineering and data-driven product validation sprints.",
      description: isEs
        ? "Aceleramos la adopción de producto mediante experimentación rápida, optimización continua de funnels y pipelines de métricas en tiempo real."
        : "We accelerate product adoption through rapid hypothesis testing, continuous funnel optimization, and real-time telemetry pipelines.",
      metricHighlight: "CONVERSION VELOCITY // CRO CORE",
      path: "/services/growth",
      capabilities: [
        { name: "Optimización CRO", desc: isEs ? "Aumento de conversión activa" : "Active conversion increase", icon: <Target size={15} /> },
        { name: "Product Sprints", desc: isEs ? "Validación semanal de hipótesis" : "Weekly hypothesis validation", icon: <Rocket size={15} /> },
        { name: "Telemetría & Métricas", desc: isEs ? "Analítica de usuario avanzada" : "Advanced user event telemetry", icon: <BarChart3 size={15} /> },
        { name: "Funnels de Retención", desc: isEs ? "Disminución de churn rate" : "Churn rate reduction loops", icon: <TrendingUp size={15} /> },
        { name: "A/B Testing Continuo", desc: isEs ? "Decisiones basadas en datos" : "Data-backed design decisions", icon: <Sparkles size={15} /> },
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const currentService = servicesData.find(s => s.id === activeTab) || servicesData[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'technology':
        return <Cpu size={17} />;
      case 'experience':
        return <Layers size={17} />;
      case 'brand':
        return <Palette size={17} />;
      case 'growth':
        return <TrendingUp size={17} />;
      default:
        return <Cpu size={17} />;
    }
  };

  return (
    <section id="disciplines" className="scroll-mt-20 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-medium text-[#00F0FF] tracking-tight">
              {dict.disciplines_prefix || '// 02 · DISCIPLINAS PRINCIPALES'}
            </span>
            <span className="h-px w-8 bg-[#00F0FF]/40"></span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#111111] dark:text-white tracking-tight">
            {dict.disciplines_title || (isEs ? 'Arquitectura de producto de extremo a extremo.' : 'End-to-end digital product architecture.')}
          </h2>
        </div>

        <p className="text-sm text-[#666666] dark:text-[#8E8E93] max-w-md font-sans">
          {dict.disciplines_desc || (isEs ? 'Cuatro disciplinas interconectadas para conceptualizar, construir y acelerar activos digitales.' : 'Four interconnected disciplines to craft and scale global venture assets.')}
        </p>
      </div>

      {/* Split Interactive Showcase (Tabs 30% / Canvas 70%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Column: Vertical Feature Tabs (30%) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-2.5">
          <div className="space-y-2">
            {servicesData.map((service) => {
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`
                    w-full text-left p-4 rounded-2xl transition-all duration-200 relative flex items-center justify-between border cursor-pointer
                    ${isActive
                      ? 'bg-white dark:bg-[#171719] border-black/[0.1] dark:border-white/[0.12] shadow-soft-sm text-[#111111] dark:text-white scale-[1.01]'
                      : 'bg-white/40 dark:bg-white/[0.02] border-transparent hover:bg-white/70 dark:hover:bg-white/[0.05] text-[#666666] dark:text-[#8E8E93] hover:text-[#111111] dark:hover:text-[#EDEDEE]'
                    }
                  `}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Icon container */}
                    <div 
                      className={`
                        w-9 h-9 rounded-xl flex items-center justify-center transition-colors
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
                      <div className="font-display font-bold text-sm sm:text-base">
                        {service.label}
                      </div>
                      <div className="font-mono text-[10px] text-[#8E8E93] tracking-wide">
                        {service.badge}
                      </div>
                    </div>
                  </div>

                  {/* Active Accent Dot */}
                  {isActive && (
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full transition-all duration-300 animate-pulse"
                        style={{ 
                          backgroundColor: service.accent,
                          boxShadow: `0 0 10px ${service.accent}` 
                        }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Services Link below tabs */}
          <div className="pt-2 hidden lg:block">
            <Link
              href={`/${lang}/services`}
              className="inline-flex items-center gap-2 font-mono text-xs text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors group"
            >
              <span>{isEs ? 'Ver catálogo de servicios' : 'View full services index'}</span>
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: Dynamic Content Canvas (70%) */}
        <div className="lg:col-span-8 min-h-[460px] rounded-3xl p-7 sm:p-9 bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-md relative overflow-hidden flex flex-col justify-between">
          
          {/* Ambient Aurora Glow Mesh */}
          <div 
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-500 opacity-40"
            style={{ backgroundColor: currentService.auroraColor }}
          />

          <div
            key={currentService.id}
            className="relative z-10 space-y-6 animate-fadeIn"
          >
            {/* Canvas Header */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
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

              <h3 className="font-display font-extrabold text-xl sm:text-2xl lg:text-[26px] leading-snug text-[#111111] dark:text-white max-w-2xl">
                {currentService.headline}
              </h3>

              <p className="text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans mt-2 max-w-2xl">
                {currentService.description}
              </p>
            </div>

            {/* Capabilities Mini-Cards Grid (Chips Aurora) */}
            <div className="space-y-2.5 pt-2">
              <div className="font-mono text-[10px] uppercase text-[#8E8E93] tracking-wider">
                {isEs ? 'CAPACIDADES CLAVE & STACK TÉCNICO' : 'KEY CAPABILITIES & STACK'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {currentService.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#F7F7F5]/90 dark:bg-[#0D0D0E]/80 border border-black/[0.05] dark:border-white/[0.06] hover:border-black/[0.18] dark:hover:border-white/[0.18] transition-all hover:scale-[1.02] shadow-2xs group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-1.5 rounded-lg bg-white dark:bg-white/[0.06] text-[#111111] dark:text-white shadow-2xs">
                        {cap.icon}
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

          {/* Canvas Bottom: Micro-CTA */}
          <div className="relative z-10 pt-6 mt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#8E8E93]">
              {isEs ? 'SPRINT DISPATCH DISPONIBLE' : 'SPRINT DISPATCH READY'}
            </span>

            <Link
              href={`/${lang}${currentService.path}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#111111] dark:text-white hover:text-[#FE385B] dark:hover:text-[#FE385B] transition-colors group"
            >
              <span>{isEs ? 'Ver stack completo' : 'Explore full stack'}</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
