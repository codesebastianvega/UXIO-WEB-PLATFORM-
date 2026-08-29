import React from 'react';
import { redirect } from 'next/navigation';
import { Locale } from '@/types';

export default async function ClassroomLessonPresentationRedirectPage({
  params,
}: {
  params: Promise<{
    lang: string;
    courseSlug: string;
    moduleSlug: string;
    lessonSlug: string;
  }>;
}) {
  const { lang: rawLang, courseSlug, moduleSlug, lessonSlug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';

  redirect(`/${lang}/academy/classroom/${courseSlug}/${moduleSlug}/${lessonSlug}/slides`);
}
