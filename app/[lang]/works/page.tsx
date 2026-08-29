import React from 'react';
import { getProjects } from '@/data/projects';
import { getDictionary } from '@/lib/dictionary';
import WorksCatalog from '@/components/WorksCatalog';
import { Locale } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function WorksPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const dictionary = await getDictionary(lang);
  const projects = getProjects(lang);

  return (
    <WorksCatalog
      lang={lang}
      projects={projects}
      dictionary={dictionary}
    />
  );
}
