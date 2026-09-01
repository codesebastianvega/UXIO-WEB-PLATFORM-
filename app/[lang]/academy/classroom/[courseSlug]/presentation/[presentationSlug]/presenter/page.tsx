import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Locale } from '@/types';
import { getPresentationBySlug, getAllPresentations } from '@/data/academy';
import InstructorPresenterConsole from '@/components/academy/presentation/InstructorPresenterConsole';

interface PresentationPresenterPageProps {
  params: Promise<{
    lang: string;
    courseSlug: string;
    presentationSlug: string;
  }>;
}

export async function generateStaticParams() {
  const presentations = getAllPresentations('es');
  const locales: Locale[] = ['es', 'en'];

  const params: { lang: string; courseSlug: string; presentationSlug: string }[] = [];

  locales.forEach(lang => {
    presentations.forEach(p => {
      params.push({
        lang,
        courseSlug: 'creator-lab',
        presentationSlug: p.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: PresentationPresenterPageProps): Promise<Metadata> {
  const { lang: rawLang, presentationSlug } = await params;
  const isEs = rawLang !== 'en';
  const presentation = getPresentationBySlug(presentationSlug, isEs ? 'es' : 'en');

  return {
    title: presentation
      ? `Presenter Console: ${presentation.title} — UXIO Academy`
      : 'Consola del Presentador — UXIO Academy',
    description: 'Control remoto y teleprompter para el instructor.',
  };
}

export default async function PresentationPresenterPage({
  params,
}: PresentationPresenterPageProps) {
  const { lang: rawLang, presentationSlug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';

  const presentation = getPresentationBySlug(presentationSlug, lang);

  if (!presentation) {
    notFound();
  }

  return <InstructorPresenterConsole presentation={presentation} lang={lang} />;
}
