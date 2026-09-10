import React from 'react';
import { Metadata } from 'next';
import { Locale } from '@/types';
import { getPeopleData } from '@/data/people';
import PeopleHero from '@/components/people/PeopleHero';
import PeopleGrid from '@/components/people/PeopleGrid';
import PeopleCultureBento from '@/components/people/PeopleCultureBento';

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
      ? 'Equipo — Las Mentes y Manos de UXIO'
      : 'People — The Minds & Craft of UXIO',
    description: isEs
      ? 'Conoce a los fundadores, ingenieros, diseñadores y mentores detrás de los productos de UXIO Studio y Academy.'
      : 'Meet the founders, engineers, designers, and mentors building UXIO Studio and Academy products.',
  };
}

export default async function PeoplePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const { members, culturePoints } = getPeopleData(lang);

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors">
      <div className="space-y-12 md:space-y-16">
        <PeopleHero lang={lang} />
        <PeopleGrid members={members} lang={lang} />
        <PeopleCultureBento culturePoints={culturePoints} lang={lang} />
      </div>
    </main>
  );
}
