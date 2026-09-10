import React from 'react';
import { Metadata } from 'next';
import { Locale } from '@/types';
import { getAboutData } from '@/data/about';
import AboutHero from '@/components/about/AboutHero';
import AboutManifesto from '@/components/about/AboutManifesto';
import AboutEcosystemBento from '@/components/about/AboutEcosystemBento';

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
      ? 'Sobre UXIO — Manifiesto, Studio & Ecosistema'
      : 'About UXIO — Manifesto, Studio & Ecosystem',
    description: isEs
      ? 'Conoce la visión, manifiesto y arquitectura de negocio detrás de UXIO: Studio, Labs y Academy.'
      : 'Learn about the vision, manifesto, and venture architecture behind UXIO: Studio, Labs, and Academy.',
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const { manifestoPoints, pillars } = getAboutData(lang);

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors">
      <div className="space-y-12 md:space-y-16">
        <AboutHero lang={lang} />
        <AboutManifesto manifestoPoints={manifestoPoints} lang={lang} />
        <AboutEcosystemBento pillars={pillars} lang={lang} />
      </div>
    </main>
  );
}
