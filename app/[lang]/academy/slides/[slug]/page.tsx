import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Locale } from '@/types';
import { getPresentationBySlug, getAllPresentations } from '@/data/academy';
import PresentationEngine from '@/components/academy/presentation/PresentationEngine';

export async function generateStaticParams() {
  const presentations = getAllPresentations('es');
  const params: Array<{ lang: string; slug: string }> = [];

  ['es', 'en'].forEach(lang => {
    presentations.forEach(p => {
      params.push({ lang, slug: p.slug });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const isEs = rawLang !== 'en';
  const presentation = getPresentationBySlug(slug, isEs ? 'es' : 'en');

  return {
    title: presentation ? `${presentation.title} — Presentación UXIO` : 'Presentación — UXIO Academy',
    description: presentation ? presentation.moduleTag : 'UXIO Academy Presentation Deck.',
  };
}

export default async function PublicSlideDeckPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';

  const presentation = getPresentationBySlug(slug, lang);

  if (!presentation) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-[#080808] flex items-center justify-center p-4 sm:p-8">
      <PresentationEngine
        presentation={presentation}
        lang={lang}
        exitHref={`/${lang}/academy`}
      />
    </div>
  );
}
