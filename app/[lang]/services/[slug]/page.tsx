import React from 'react';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/data/services';
import ServiceDetailView from '@/components/ServiceDetailView';
import { Locale } from '@/types';

export async function generateStaticParams() {
  const slugs = ['technology', 'experience', 'brand', 'growth', 'content', 'solutions'];
  const params: Array<{ lang: Locale; slug: string }> = [];
  for (const lang of ['es', 'en'] as Locale[]) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export default async function ServiceSubpage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const service = getServiceBySlug(slug, lang);

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetailView
      service={service}
      lang={lang}
    />
  );
}
