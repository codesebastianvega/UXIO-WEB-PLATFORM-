import React from 'react';
import { Locale } from '@/types';
import ResourcesCatalogView from '@/components/ResourcesCatalogView';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-10 lg:p-12 flex flex-col justify-between transition-colors">
      <ResourcesCatalogView lang={lang} />
    </main>
  );
}
