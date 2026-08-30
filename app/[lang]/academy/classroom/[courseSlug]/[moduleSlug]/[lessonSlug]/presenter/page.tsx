import React from 'react';
import { notFound } from 'next/navigation';
import { Locale } from '@/types';
import { getPresentationM0001 } from '@/data/academy/creator-lab/presentations/m00-01-welcome';
import InstructorPresenterConsole from '@/components/academy/presentation/InstructorPresenterConsole';

interface PresenterPageProps {
  params: Promise<{
    lang: string;
    courseSlug: string;
    moduleSlug: string;
    lessonSlug: string;
  }>;
}

export default async function PresenterPage({ params }: PresenterPageProps) {
  const { lang, courseSlug, moduleSlug, lessonSlug } = await params;
  const validLang = (lang === 'en' ? 'en' : 'es') as Locale;

  // Currently mapping lesson presentations (e.g., m00-01)
  let presentation = getPresentationM0001(validLang);

  if (lessonSlug.includes('bienvenida') || lessonSlug === 'm00-01-welcome') {
    presentation = getPresentationM0001(validLang);
  }

  if (!presentation) {
    notFound();
  }

  return <InstructorPresenterConsole presentation={presentation} lang={validLang} />;
}
