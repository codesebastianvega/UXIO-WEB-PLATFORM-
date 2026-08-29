import React from 'react';
import { notFound } from 'next/navigation';
import { getServicesData, getSubServiceBySlug } from '@/data/services';
import SubServiceDetailView from '@/components/SubServiceDetailView';
import { Locale } from '@/types';

export async function generateStaticParams() {
  const services = getServicesData('es');
  const params: Array<{ lang: Locale; slug: string; subservice: string }> = [];

  for (const lang of ['es', 'en'] as Locale[]) {
    for (const service of services) {
      for (const sub of (service.subServices || [])) {
        params.push({
          lang,
          slug: service.slug,
          subservice: sub.slug,
        });
      }
    }
  }

  return params;
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string; subservice: string }>;
}) {
  const { lang: rawLang, slug, subservice } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const subService = getSubServiceBySlug(slug, subservice, lang);

  if (!subService) {
    notFound();
  }

  return (
    <SubServiceDetailView
      subService={subService}
      parentSlug={slug}
      lang={lang}
    />
  );
}
