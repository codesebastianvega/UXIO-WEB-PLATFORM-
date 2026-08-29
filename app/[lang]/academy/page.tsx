import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  Smartphone,
  Users,
  Layers,
  GraduationCap,
  FileSpreadsheet,
  Terminal,
  Award,
} from 'lucide-react';
import { Locale } from '@/types';
import { getAcademyCourses, getCohortStatusInfo } from '@/data/academy';
import AcademyHero from '@/components/academy/AcademyHero';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const isEs = rawLang !== 'en';

  return {
    title: isEs
      ? 'UXIO Academy — Ecosistema de Formación & Creadores'
      : 'UXIO Academy — Creator Training & Talent Ecosystem',
    description: isEs
      ? 'Aprende a convertir lo que haces en contenido que vende. Programas prácticos para negocios, marcas y creadores.'
      : 'Turn what you do into high-converting content. Hands-on cohort labs for brands and solo creators.',
    openGraph: {
      title: isEs
        ? 'UXIO Academy — Ecosistema de Formación & Creadores'
        : 'UXIO Academy — Creator Training & Talent Ecosystem',
      description: isEs
        ? 'Aprende a convertir lo que haces en contenido que vende.'
        : 'Turn what you do into high-converting content.',
      type: 'website',
    },
  };
}

export default async function AcademyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const isEs = lang === 'es';
  const courses = getAcademyCourses(lang);
  const creatorLab = courses[0];
  const statusInfo = getCohortStatusInfo(creatorLab.cohortCapacity, lang);

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors space-y-16">
      {/* 1. Dispatch & Hero */}
      <AcademyHero lang={lang} />

      {/* 2. Choose Your Program / Active Programs */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#FE385B] uppercase tracking-wider font-semibold">
              // {isEs ? 'PROGRAMAS ACTIVOS' : 'ACTIVE PROGRAMS'}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white">
              {isEs ? 'Elige tu programa de formación' : 'Choose your training program'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/${lang}/academy/classroom`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#FE385B]/10 text-xs font-mono text-[#111111] dark:text-white hover:text-[#FE385B] transition-colors border border-black/[0.06] dark:border-white/[0.06]"
            >
              <GraduationCap size={14} />
              <span>{isEs ? 'Acceso a mi Aula Virtual' : 'Student Classroom Login'}</span>
            </Link>
          </div>
        </div>

        {/* Featured Course Card */}
        <AuroraSpotlightCard color="#FE385B" className="p-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#FE385B] bg-[#FE385B]/10 px-2.5 py-1 rounded-md border border-[#FE385B]/20">
                  {creatorLab.title.toUpperCase()} · {creatorLab.cohortName.toUpperCase()}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-mono border ${statusInfo.bg}`}>
                  {statusInfo.label}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white">
                  {creatorLab.commercialName}
                </h3>
                <p className="text-sm text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed max-w-2xl">
                  {creatorLab.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-sans text-[#111111] dark:text-[#E5E5E7]">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
                  <Calendar size={14} className="text-[#00F0FF] shrink-0" />
                  <span>{creatorLab.commercialDuration}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
                  <Smartphone size={14} className="text-[#FE385B] shrink-0" />
                  <span>{isEs ? '100% Desde tu Celular' : '100% Smartphone only'}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
                  <Users size={14} className="text-[#10B981] shrink-0" />
                  <span>{isEs ? 'En vivo + Comunidad' : 'Live + Community'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-[#121214] border border-black/[0.06] dark:border-white/[0.06] flex flex-col justify-between space-y-4 shadow-soft">
              <div>
                <span className="font-mono text-[10px] text-[#FE385B] uppercase tracking-wider font-semibold block mb-0.5">
                  {isEs ? 'INVERSIÓN POR COHORTE' : 'ENROLLMENT FEE'}
                </span>
                <div className="font-display font-extrabold text-3xl text-[#111111] dark:text-white">
                  ${creatorLab.priceCOP.toLocaleString()} <span className="font-mono text-xs text-[#8E8E93]">COP</span>
                </div>
                <p className="text-xs text-[#8E8E93] font-sans mt-1">
                  {creatorLab.datesOverview}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  href={`/${lang}/academy/creator-lab`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs transition-all shadow-md shadow-[#FE385B]/20"
                >
                  <span>{isEs ? 'Ver Programa Completo' : 'View Full Syllabus'}</span>
                  <ArrowRight size={14} />
                </Link>

                <Link
                  href={`/${lang}/academy/creator-lab/enroll`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-[#111111] dark:text-white font-mono text-xs transition-colors border border-black/[0.06] dark:border-white/[0.06]"
                >
                  <span>{isEs ? 'Postularme Directamente' : 'Apply for Cohort'}</span>
                </Link>
              </div>
            </div>
          </div>
        </AuroraSpotlightCard>
      </section>

      {/* 3. The 4 Learning Pillars */}
      <section className="space-y-6">
        <div className="max-w-2xl space-y-1">
          <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-wider font-semibold">
            // {isEs ? 'EXPERIENCIA DE ESTUDIO' : 'LEARNING ARCHITECTURE'}
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
            {isEs ? 'Un sistema pedagógico diseñado para creadores activos' : 'A pedagogical system engineered for active creators'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#FE385B]/10 text-[#FE385B] flex items-center justify-center border border-[#FE385B]/20">
              <Smartphone size={18} />
            </div>
            <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white">
              {isEs ? 'Microclases de 5-10 min' : '5-10 Min Microclasses'}
            </h3>
            <p className="text-xs text-[#8E8E93] font-sans leading-relaxed">
              {isEs
                ? 'Videos directos al grano que puedes consumir en cualquier momento sin perder horas en teoría.'
                : 'Bite-sized, high-yield lessons you can consume on your schedule without wasted theory.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center border border-[#00F0FF]/20">
              <Layers size={18} />
            </div>
            <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white">
              {isEs ? 'Diapositivas 16:9 & PDF' : '16:9 Slides & PDF'}
            </h3>
            <p className="text-xs text-[#8E8E93] font-sans leading-relaxed">
              {isEs
                ? 'Motor interactivo para repasar marcos y descargar presentaciones limpias en un solo clic.'
                : 'Interactive deck engine to review formulas and export clean PDF slides instantly.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFCC48]/10 text-[#FFCC48] flex items-center justify-center border border-[#FFCC48]/20">
              <FileSpreadsheet size={18} />
            </div>
            <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white">
              {isEs ? 'Plantillas & Prompts IA' : 'Templates & AI Prompts'}
            </h3>
            <p className="text-xs text-[#8E8E93] font-sans leading-relaxed">
              {isEs
                ? 'Matrices de Notion listas para duplicar y paquetes de prompts para acelerar tu producción.'
                : 'Duplicate Notion templates and pre-tested prompt packs to 10x your workflow.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center border border-[#10B981]/20">
              <Award size={18} />
            </div>
            <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white">
              {isEs ? 'Retos con Criterios' : 'Practical Challenges'}
            </h3>
            <p className="text-xs text-[#8E8E93] font-sans leading-relaxed">
              {isEs
                ? 'Ejercicios prácticos semanales con rúbricas claras de calidad para asegurar resultados reales.'
                : 'Weekly execution assignments with transparent quality rubrics for tangible growth.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Methodology Roadmap */}
      <section className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] space-y-6">
        <div className="max-w-xl space-y-1">
          <span className="font-mono text-xs text-[#FE385B] uppercase tracking-wider font-semibold">
            // {isEs ? 'RUTA DE TRANSFORMACIÓN' : 'TRANSFORMATION JOURNEY'}
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
            {isEs ? 'Las 5 etapas para dominar la creación comercial' : 'The 5 stages to master high-converting content'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            { num: '01', title: isEs ? 'Estrategia' : 'Strategy', desc: isEs ? 'De negocio a matriz de 30 ideas' : 'From business to 30 ideas' },
            { num: '02', title: isEs ? 'Grabación' : 'Filming', desc: isEs ? 'Técnica móvil, luz y B-roll' : 'Mobile camera, light & b-roll' },
            { num: '03', title: isEs ? 'Creación' : 'Creation', desc: isEs ? 'Hooks, guiones y storytelling' : 'Hooks, scripts & storytelling' },
            { num: '04', title: isEs ? 'Edición + IA' : 'Edit + AI', desc: isEs ? 'CapCut, Canva y aceleración IA' : 'CapCut, Canva & AI workflow' },
            { num: '05', title: isEs ? 'Ventas' : 'Sales', desc: isEs ? 'Cierre WhatsApp y sistema final' : 'WhatsApp closing & system' },
          ].map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.06] space-y-1.5"
            >
              <span className="font-mono text-[11px] text-[#FE385B] font-bold">{step.num}</span>
              <h3 className="font-display font-bold text-xs text-[#111111] dark:text-white">{step.title}</h3>
              <p className="font-sans text-[11px] text-[#8E8E93] leading-snug">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
