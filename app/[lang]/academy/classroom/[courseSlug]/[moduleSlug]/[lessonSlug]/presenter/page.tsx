import React from 'react';
import { notFound } from 'next/navigation';
import { Locale } from '@/types';
import { getLessonBySlug, getPresentationBySlug } from '@/data/academy';
import InstructorPresenterConsole from '@/components/academy/presentation/InstructorPresenterConsole';

interface PresenterPageProps {
  params: Promise<{
    lang: string;
    courseSlug: string;
    moduleSlug: string;
    lessonSlug: string;
  }>;
  searchParams?: Promise<{ deck?: string }>;
}

export default async function PresenterPage({ params, searchParams }: PresenterPageProps) {
  const { lang, courseSlug, moduleSlug, lessonSlug } = await params;
  const { deck: deckSlug } = (await searchParams) || {};
  const validLang = (lang === 'en' ? 'en' : 'es') as Locale;

  const lesson = getLessonBySlug(courseSlug, moduleSlug, lessonSlug, validLang);
  const targetSlug = deckSlug || lesson?.presentationSlug || 'm00-01-welcome';
  const presentation = getPresentationBySlug(targetSlug, validLang);

  if (!presentation) {
    notFound();
  }

  return <InstructorPresenterConsole presentation={presentation} lang={validLang} />;
}
