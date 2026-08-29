import React from 'react';
import { Locale } from '@/types';
import OpenSourceComponentView from '@/components/OpenSourceComponentView';
import ComponentDetailView from '@/components/ComponentDetailView';
import { RESOURCES_DATA } from '@/data/resources';

export async function generateStaticParams() {
  const slugs = RESOURCES_DATA.map(r => r.slug);
  const params: Array<{ lang: Locale; slug: string }> = [];
  for (const lang of ['es', 'en'] as Locale[]) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  if (slug === 'spotlight-card') {
    return (
      <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-10 lg:p-12 flex flex-col justify-between transition-colors">
        <OpenSourceComponentView lang={lang} />
      </main>
    );
  }

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-10 lg:p-12 flex flex-col justify-between transition-colors">
      <ComponentDetailView slug={slug} lang={lang} />
    </main>
  );
}
