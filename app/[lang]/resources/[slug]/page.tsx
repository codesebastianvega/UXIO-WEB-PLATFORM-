import React from 'react';
import { Locale } from '@/types';
import ResourcesCatalogView from '@/components/ResourcesCatalogView';
import OpenSourceComponentView from '@/components/OpenSourceComponentView';

export async function generateStaticParams() {
  const slugs = ['components', 'libraries', 'tools', 'templates', 'open-source', 'spotlight-card'];
  const params: Array<{ lang: Locale; slug: string }> = [];
  for (const lang of ['es', 'en'] as Locale[]) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export default async function ResourcesSubpage({
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

  const validSections = ['components', 'libraries', 'tools', 'templates', 'open-source'];
  const section = validSections.includes(slug) 
    ? (slug as 'components' | 'libraries' | 'tools' | 'templates' | 'open-source')
    : 'all';

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-10 lg:p-12 flex flex-col justify-between transition-colors">
      <ResourcesCatalogView 
        lang={lang}
        section={section}
      />
    </main>
  );
}
