import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Sparkles, CheckCircle2, Calendar, Smartphone, Users } from 'lucide-react';
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
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors space-y-12">
      {/* 1. Dispatch & Hero */}
      <AcademyHero lang={lang} />

      {/* 2. Active Programs Catalog */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#FE385B] uppercase tracking-wider font-semibold">
              // {isEs ? 'PROGRAMAS ACTIVOS' : 'ACTIVE COHORTS'}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white">
              {isEs ? 'Cohortes con inscripción abierta' : 'Cohorts with open enrollment'}
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8E8E93]">
            {isEs ? '01 PROGRAMA DISPONIBLE' : '01 PROGRAM ACTIVE'}
          </span>
        </div>

        {/* Featured Course Card */}
        <AuroraSpotlightCard color="#FE385B" className="p-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-2 sm:p-4 items-center">
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
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#00F0FF]" />
                  <span>{creatorLab.commercialDuration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone size={14} className="text-[#FE385B]" />
                  <span>{isEs ? '100% Celular' : 'Smartphone only'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-[#10B981]" />
                  <span>{isEs ? 'En vivo + Comunidad' : 'Live + Community'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-white dark:bg-[#121214] border border-black/[0.06] dark:border-white/[0.06] flex flex-col justify-between space-y-4">
              <div>
                <span className="font-mono text-[10px] text-[#FE385B] uppercase tracking-wider font-semibold block mb-0.5">
                  {isEs ? 'PRECIO DE LANZAMIENTO' : 'LAUNCH PRICE'}
                </span>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white">
                  ${creatorLab.priceCOP.toLocaleString()} <span className="font-mono text-xs text-[#8E8E93]">COP</span>
                </div>
                <p className="text-[11px] text-[#8E8E93] font-sans mt-1">
                  {creatorLab.datesOverview}
                </p>
              </div>

              <Link
                href={`/${lang}/academy/creator-lab`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs transition-all shadow-md shadow-[#FE385B]/20"
              >
                <span>{isEs ? 'Ver Programa Completo' : 'View Full Syllabus'}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </AuroraSpotlightCard>
      </section>

      {/* 3. Methodology Overview */}
      <section className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] space-y-6">
        <div className="max-w-xl space-y-1">
          <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-wider font-semibold">
            // {isEs ? 'METODOLOGÍA DE FORMACIÓN' : 'LAB METHODOLOGY'}
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
            {isEs ? 'Construido para generar tracción, no para acumular teoría' : 'Built for commercial traction, not passive theory'}
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
