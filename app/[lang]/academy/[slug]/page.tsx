import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Locale } from '@/types';
import { getCourseBySlug, getAcademyCourses } from '@/data/academy';
import CourseHero from '@/components/academy/CourseHero';
import CourseProblemTransformation from '@/components/academy/CourseProblemTransformation';
import CourseIncludedGrid from '@/components/academy/CourseIncludedGrid';
import CourseSyllabusAccordion from '@/components/academy/CourseSyllabusAccordion';
import CourseCalendarSchedule from '@/components/academy/CourseCalendarSchedule';
import CourseAudienceAndCertificate from '@/components/academy/CourseAudienceAndCertificate';
import CourseFaqAndPricing from '@/components/academy/CourseFaqAndPricing';
import AcademyEnrollmentForm from '@/components/academy/AcademyEnrollmentForm';

export async function generateStaticParams() {
  return [
    { lang: 'es', slug: 'creator-lab' },
    { lang: 'en', slug: 'creator-lab' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const course = getCourseBySlug(slug, lang);

  if (!course) {
    return {
      title: 'Course Not Found | UXIO Academy',
    };
  }

  const isEs = lang === 'es';
  const title = isEs
    ? `${course.title} (${course.cohortName}) — ${course.commercialName} | $${course.priceCOP.toLocaleString()} COP`
    : `${course.title} (${course.cohortName}) — ${course.commercialName} | UXIO Academy`;

  return {
    title,
    description: course.subtitle,
    openGraph: {
      title,
      description: course.tagline,
      type: 'website',
      url: `https://uxio.co/${lang}/academy/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: course.subtitle,
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const course = getCourseBySlug(slug, lang);

  if (!course) {
    notFound();
  }

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors space-y-4">
      {/* 1. Commercial Hero Header */}
      <CourseHero course={course} lang={lang} />

      {/* 2. Real Problems & Transformation Matrix */}
      <CourseProblemTransformation course={course} lang={lang} />

      {/* 3. What Includes Grid */}
      <CourseIncludedGrid course={course} lang={lang} />

      {/* 4. Full Week-by-Week Syllabus */}
      <CourseSyllabusAccordion course={course} lang={lang} />

      {/* 5. Calendar and Live Milestones */}
      <CourseCalendarSchedule course={course} lang={lang} />

      {/* 6. Target Audiences & Certificate Disclaimer */}
      <CourseAudienceAndCertificate course={course} lang={lang} />

      {/* 7. FAQs and Commercial Closer */}
      <CourseFaqAndPricing course={course} lang={lang} />

      {/* 8. Integrated Enrollment / Pre-registration Form */}
      <AcademyEnrollmentForm course={course} lang={lang} />
    </main>
  );
}
