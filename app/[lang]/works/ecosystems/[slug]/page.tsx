import React from 'react';
import { notFound } from 'next/navigation';
import { Locale } from '@/types';
import { allEcosystems, getEcosystemBySlug } from '@/data/ecosystems';
import EcosystemDetailView from '@/components/ecosystems/EcosystemDetailView';

export async function generateStaticParams() {
  const params: Array<{ lang: Locale; slug: string }> = [];
  for (const lang of ['es', 'en'] as Locale[]) {
    for (const eco of allEcosystems) {
      params.push({ lang, slug: eco.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { slug } = await params;
  const eco = getEcosystemBySlug(slug);
  if (!eco) return { title: 'Ecosystem | UXIO Studio' };

  return {
    title: `${eco.identity.name} — Ecosystem Architecture | UXIO`,
    description: eco.overview.whatIsIt,
  };
}

export default async function EcosystemPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const ecosystem = getEcosystemBySlug(slug);

  if (!ecosystem) {
    notFound();
  }

  return <EcosystemDetailView ecosystem={ecosystem} lang={lang} />;
}
