import React from 'react';
import Link from 'next/link';
import { User, Sparkles, BookOpen, GraduationCap, AlertCircle } from 'lucide-react';
import { Course } from '@/data/academy/types';
import { Locale } from '@/types';
import LogoutButton from '@/components/academy/LogoutButton';
import CourseCard from './CourseCard';

interface StudentDashboardProps {
  user: { email?: string; user_metadata?: Record<string, any> };
  enrolledCourses: Course[];
  cohortMap?: Record<string, string>;
  lang: Locale;
}

export default function StudentDashboard({
  user,
  enrolledCourses,
  cohortMap = {},
  lang,
}: StudentDashboardProps) {
  const isEs = lang === 'es';
  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Alumno';

  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FE385B]/15 text-[#FE385B] flex items-center justify-center font-display font-extrabold text-lg border border-[#FE385B]/20">
            {displayName.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-[#FE385B] uppercase tracking-wider font-semibold">
                // UXIO ACADEMY · DASHBOARD
              </span>
            </div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white">
              {isEs ? `Hola, ${displayName}` : `Welcome, ${displayName}`}
            </h1>
            <p className="text-xs text-[#8E8E93] font-mono mt-0.5">
              {user.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/${lang}/academy`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors border border-black/[0.06] dark:border-white/[0.06]"
          >
            <BookOpen size={13} />
            <span>{isEs ? 'Catálogo Público' : 'Catalog'}</span>
          </Link>
          <LogoutButton lang={lang} />
        </div>
      </div>

      {/* Enrolled Courses Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-[#FE385B]" />
            <h2 className="font-display font-bold text-lg sm:text-xl text-[#111111] dark:text-white">
              {isEs ? 'Tus Programas Activos' : 'Your Active Programs'}
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8E8E93]">
            {enrolledCourses.length} {isEs ? 'Curso(s)' : 'Course(s)'}
          </span>
        </div>

        {enrolledCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                lang={lang}
                cohortName={cohortMap[course.slug]}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-center space-y-4">
            <AlertCircle size={28} className="text-[#8E8E93] mx-auto" />
            <div>
              <h3 className="font-display font-bold text-base text-[#111111] dark:text-white">
                {isEs ? 'No tienes matrículas activas todavía' : 'No active enrollments yet'}
              </h3>
              <p className="text-xs text-[#8E8E93] font-sans max-w-sm mx-auto mt-1">
                {isEs
                  ? 'Explora el catálogo de formación de UXIO Academy para inscribirte a tu primera cohorte.'
                  : 'Explore the UXIO Academy catalog to register for your first cohort.'}
              </p>
            </div>
            <Link
              href={`/${lang}/academy/creator-lab`}
              className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-[#FE385B] text-white font-display font-bold text-xs shadow-md shadow-[#FE385B]/20"
            >
              <span>{isEs ? 'Ver Creator Lab · Cohorte 01' : 'View Creator Lab · Cohort 01'}</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
