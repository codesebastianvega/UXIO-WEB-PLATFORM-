import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Locale } from '@/types';
import { getPresentationBySlug, getAllPresentations } from '@/data/academy';
import PresentationEngine from '@/components/academy/presentation/PresentationEngine';

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
}: {
  params: Promise<{
    lang: string;
    courseSlug: string;
    presentationSlug: string;
  }>;
}): Promise<Metadata> {
  const { lang: rawLang, presentationSlug } = await params;
  const isEs = rawLang !== 'en';
  const presentation = getPresentationBySlug(presentationSlug, isEs ? 'es' : 'en');

  return {
    title: presentation ? `${presentation.title} — UXIO Academy` : 'Presentación — UXIO Academy',
    description: presentation ? presentation.moduleTag : 'UXIO Academy Presentation Deck.',
  };
}

export default async function ClassroomPresentationPage({
  params,
}: {
  params: Promise<{
    lang: string;
    courseSlug: string;
    presentationSlug: string;
  }>;
}) {
  const { lang: rawLang, courseSlug, presentationSlug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';

  const presentation = getPresentationBySlug(presentationSlug, lang);

  if (!presentation) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-[#F0F2F5] dark:bg-[#080808] flex items-center justify-center p-4 sm:p-6 lg:p-8 transition-colors">
      <PresentationEngine
        presentation={presentation}
        lang={lang}
        exitHref={`/${lang}/academy/classroom/${courseSlug}`}
      />
    </div>
  );
}
