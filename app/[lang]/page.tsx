import { getDictionary } from '@/lib/dictionary';
import { getProjects, getStudioMetrics } from '@/data/projects';
import HomeCanvas from '@/components/HomeCanvas';
import { Locale } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const dictionary = await getDictionary(lang);
  const projects = getProjects(lang);
  const metrics = getStudioMetrics(lang);

  return (
    <HomeCanvas
      lang={lang}
      dictionary={dictionary}
      projects={projects}
      metrics={metrics}
    />
  );
}
