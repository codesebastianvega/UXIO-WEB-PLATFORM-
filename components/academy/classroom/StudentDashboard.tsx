import React from 'react';
import Link from 'next/link';
import {
  User,
  Sparkles,
  BookOpen,
  GraduationCap,
  AlertCircle,
  PlayCircle,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { Course } from '@/data/academy/types';
import { Locale } from '@/types';
import { CourseProgressInfo } from '@/lib/supabase/academy-progress';
import LogoutButton from '@/components/academy/LogoutButton';
import CourseCard from './CourseCard';

interface StudentDashboardProps {
  user: { email?: string; user_metadata?: Record<string, any> };
  enrolledCourses: Course[];
  cohortMap?: Record<string, string>;
  progressMap?: Record<string, CourseProgressInfo>;
  lang: Locale;
}

export default function StudentDashboard({
  user,
  enrolledCourses,
  cohortMap = {},
  progressMap = {},
  lang,
}: StudentDashboardProps) {
  const isEs = lang === 'es';
  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || (isEs ? 'Alumno' : 'Student');

  // Primary active course for the "Continue Learning" banner
  const primaryCourse = enrolledCourses[0] || null;
  const primaryProgress = primaryCourse ? progressMap[primaryCourse.slug] : null;
  const primaryPercentage = primaryProgress ? primaryProgress.percentage : 0;
  const primaryCompletedCount = primaryProgress ? primaryProgress.completedCount : 0;
  const primaryTotalLessons = primaryProgress ? primaryProgress.totalLessons : primaryCourse?.modules.reduce((acc, m) => acc + m.lessons.length, 0) || 0;

  // Find first uncompleted lesson for the primary course
  const firstModule = primaryCourse?.modules[0];
  const firstLesson = firstModule?.lessons[0];
  const continueHref = primaryCourse && firstModule && firstLesson
    ? `/${lang}/academy/classroom/${primaryCourse.slug}/${firstModule.slug}/${firstLesson.slug}`
    : primaryCourse
    ? `/${lang}/academy/classroom/${primaryCourse.slug}`
    : `/${lang}/academy`;

  return (
    <div className="space-y-8">
      {/* 1. Welcome & Profile Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FE385B] to-[#FF7F07] text-white flex items-center justify-center font-display font-black text-xl shadow-md shadow-[#FE385B]/20 shrink-0">
            {displayName.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-[#FE385B] uppercase tracking-widest font-bold bg-[#FE385B]/10 px-2.5 py-0.5 rounded border border-[#FE385B]/20">
                // UXIO ACADEMY · DASHBOARD
              </span>
            </div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white mt-0.5">
              {isEs ? `Hola, ${displayName}` : `Welcome, ${displayName}`}
            </h1>
            <p className="text-xs text-[#8E8E93] font-mono mt-0.5">
              {user.email}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href={`/${lang}/academy/classroom/profile`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono text-[#00F0FF] hover:bg-[#00F0FF]/10 transition-colors border border-[#00F0FF]/25"
          >
            <User size={14} />
            <span>{isEs ? 'Mi Perfil & Logros' : 'My Profile & Outcomes'}</span>
          </Link>
          <Link
            href={`/${lang}/academy`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors border border-black/[0.06] dark:border-white/[0.06]"
          >
            <BookOpen size={14} />
            <span>{isEs ? 'Catálogo' : 'Catalog'}</span>
          </Link>
          <LogoutButton lang={lang} />
        </div>
      </div>

      {/* 2. Primary "Continue Learning" Hero Card */}
      {primaryCourse && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-black/[0.02] to-black/[0.05] dark:from-[#171719] dark:to-[#121214] border border-[#FE385B]/25 dark:border-[#FE385B]/20 shadow-soft relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-[#10B981] uppercase tracking-wider font-bold bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                  {isEs ? 'CONTINUAR APRENDIENDO' : 'CONTINUE LEARNING'}
                </span>
                <span className="font-mono text-xs text-[#8E8E93]">
                  {cohortMap[primaryCourse.slug] || primaryCourse.cohortName}
                </span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white leading-tight">
                {primaryCourse.commercialName}
              </h2>

              <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">
                {primaryCourse.subtitle}
              </p>

              {/* Progress Metric Bar */}
              <div className="space-y-1.5 pt-2 max-w-md">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8E8E93]">
                    {isEs ? 'Progreso general' : 'Overall progress'}
                  </span>
                  <span className="font-bold text-[#10B981]">
                    {primaryCompletedCount} / {primaryTotalLessons} {isEs ? 'lecciones' : 'lessons'} ({primaryPercentage}%)
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-black/[0.06] dark:bg-white/[0.08] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#10B981] to-[#00F0FF] rounded-full transition-all duration-500"
                    style={{ width: `${primaryPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                href={continueHref}
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-[#FE385B] text-white hover:bg-[#FE385B]/90 font-display font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#FE385B]/20"
              >
                <PlayCircle size={16} />
                <span>{isEs ? 'Continuar Lección Actual' : 'Resume Lesson'}</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href={`/${lang}/academy/classroom/${primaryCourse.slug}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-white dark:bg-[#111111] text-[#111111] dark:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] font-mono text-xs transition-colors border border-black/[0.08] dark:border-white/[0.08]"
              >
                <BookOpen size={14} className="text-[#8E8E93]" />
                <span>{isEs ? 'Ver Temario y Semanas' : 'View Syllabus'}</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 3. Enrolled Courses Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-[#FE385B]" />
            <h2 className="font-display font-bold text-lg sm:text-xl text-[#111111] dark:text-white">
              {isEs ? 'Tus Programas Matriculados' : 'Your Enrolled Programs'}
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
                progressInfo={progressMap[course.slug]}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-center space-y-4 shadow-soft">
            <div className="w-14 h-14 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] text-[#FE385B] flex items-center justify-center mx-auto border border-black/[0.06] dark:border-white/[0.06]">
              <Sparkles size={28} />
            </div>
            <div className="max-w-md mx-auto space-y-1">
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#111111] dark:text-white">
                {isEs ? 'Aún no tienes cursos activos' : 'No active courses yet'}
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E93] font-sans leading-relaxed">
                {isEs
                  ? 'Matricúlate en Creator Lab para acceder a las 4 semanas de formación, microclases de 5 min y sesiones en vivo.'
                  : 'Enroll in Creator Lab to access the 4 weeks of training, 5-min micro-lessons, and live sessions.'}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href={`/${lang}/academy/creator-lab`}
                className="inline-flex items-center gap-2 py-3.5 px-6 rounded-2xl bg-[#FE385B] text-white hover:bg-[#FE385B]/90 font-display font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#FE385B]/20"
              >
                <span>{isEs ? 'Ver Creator Lab ($99.000 COP)' : 'View Creator Lab ($99.000 COP)'}</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href={`/${lang}/academy`}
                className="inline-flex items-center gap-2 py-3.5 px-5 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] text-[#111111] dark:text-white hover:bg-black/[0.08] dark:hover:bg-white/[0.1] font-display font-semibold text-xs transition-colors border border-black/[0.06] dark:border-white/[0.08]"
              >
                <span>{isEs ? 'Ver Catálogo Completo' : 'View Full Catalog'}</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
