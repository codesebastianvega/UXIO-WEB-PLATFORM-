import { Locale } from '@/types';
import { Course, CourseProgram, CohortCapacity, Module, Lesson } from './types';
import { getCreatorLabCourse } from './creator-lab/course';
import { getCreatorLabModules } from './creator-lab/modules';
import {
  getAllLessons,
  getLessonBySlug as getLessonBySlugRaw,
  getLessonsByModuleSlug,
} from './creator-lab/lessons';
import {
  getAllPresentations,
  getPresentationBySlug,
  getPresentationByLessonId,
} from './creator-lab/presentations';

// Export all types and sub-domain modules
export * from './types';
export * from './creator-lab/course';
export * from './creator-lab/modules';
export * from './creator-lab/lessons';
export * from './creator-lab/presentations';

// Backward compatibility alias for legacy data file
export const getCreatorLabData = (lang: Locale = 'es'): CourseProgram => {
  return getCreatorLabCourse(lang);
};

// Pure Content Domain Getters
export function getAllCourses(lang: Locale = 'es'): Course[] {
  return [getCreatorLabCourse(lang)];
}

export function getAcademyCourses(lang: Locale = 'es'): CourseProgram[] {
  return getAllCourses(lang);
}

export function getCourseBySlug(slug?: string, lang: Locale = 'es'): Course | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase();
  if (normalized === 'creator-lab' || normalized === 'contenido-que-vende') {
    return getCreatorLabCourse(lang);
  }
  return undefined;
}

export function getModuleBySlug(
  courseSlug?: string,
  moduleSlug?: string,
  lang: Locale = 'es'
): Module | undefined {
  if (!courseSlug || !moduleSlug) return undefined;
  const course = getCourseBySlug(courseSlug, lang);
  if (!course) return undefined;
  const normalized = moduleSlug.toLowerCase();
  return course.modules.find(
    m => m.slug.toLowerCase() === normalized || m.id.toLowerCase() === normalized
  );
}

export function getLessonBySlug(
  courseSlug?: string,
  moduleSlug?: string,
  lessonSlug?: string,
  lang: Locale = 'es'
): Lesson | undefined {
  if (!courseSlug || !moduleSlug || !lessonSlug) return undefined;
  const moduleItem = getModuleBySlug(courseSlug, moduleSlug, lang);
  if (!moduleItem) return undefined;
  const normalized = lessonSlug.toLowerCase();
  return moduleItem.lessons.find(
    l => l.slug.toLowerCase() === normalized || l.id.toLowerCase() === normalized
  );
}

export function getLessonsByModule(
  courseSlug?: string,
  moduleSlug?: string,
  lang: Locale = 'es'
): Lesson[] {
  if (!courseSlug || !moduleSlug) return [];
  const moduleItem = getModuleBySlug(courseSlug, moduleSlug, lang);
  return moduleItem ? moduleItem.lessons : [];
}

export function getAdjacentLessons(
  courseSlug?: string,
  moduleSlug?: string,
  lessonSlug?: string,
  lang: Locale = 'es'
): {
  prevLesson?: { moduleSlug: string; lesson: Lesson };
  nextLesson?: { moduleSlug: string; lesson: Lesson };
} {
  if (!courseSlug || !moduleSlug || !lessonSlug) return {};
  const course = getCourseBySlug(courseSlug, lang);
  if (!course) return {};

  const flatLessons: Array<{ moduleSlug: string; lesson: Lesson }> = [];
  course.modules.forEach(m => {
    if (Array.isArray(m.lessons)) {
      m.lessons.forEach(l => {
        flatLessons.push({ moduleSlug: m.slug, lesson: l });
      });
    }
  });

  const currentIndex = flatLessons.findIndex(
    item =>
      item.moduleSlug.toLowerCase() === moduleSlug.toLowerCase() &&
      (item.lesson.slug.toLowerCase() === lessonSlug.toLowerCase() ||
        item.lesson.id.toLowerCase() === lessonSlug.toLowerCase())
  );

  if (currentIndex === -1) return {};

  return {
    prevLesson: currentIndex > 0 ? flatLessons[currentIndex - 1] : undefined,
    nextLesson: currentIndex < flatLessons.length - 1 ? flatLessons[currentIndex + 1] : undefined,
  };
}

export function getCohortStatusInfo(capacity: CohortCapacity, lang: Locale = 'es') {
  const isEs = lang === 'es';
  const remaining = Math.max(0, capacity.capacity - capacity.enrolled);

  if (!capacity.enrollmentOpen || remaining === 0) {
    return {
      status: 'closed' as const,
      label: isEs ? 'Inscripciones cerradas' : 'Enrollment Closed',
      color: '#8E8E93',
      bg: 'bg-zinc-500/10 border-zinc-500/20 text-zinc-400',
      dotColor: 'bg-zinc-400',
      remaining,
    };
  }

  if (remaining <= 5) {
    return {
      status: 'last_spots' as const,
      label: isEs ? `¡Últimos ${remaining} cupos!` : `Only ${remaining} spots left!`,
      color: '#FE385B',
      bg: 'bg-[#FE385B]/10 border-[#FE385B]/30 text-[#FE385B]',
      dotColor: 'bg-[#FE385B] animate-pulse',
      remaining,
    };
  }

  if (capacity.enrolled > 0) {
    return {
      status: 'filling_fast' as const,
      label: isEs ? `Cupos disponibles (${remaining} de ${capacity.capacity})` : `Spots Available (${remaining} of ${capacity.capacity})`,
      color: '#00F0FF',
      bg: 'bg-[#00F0FF]/10 border-[#00F0FF]/30 text-[#00F0FF]',
      dotColor: 'bg-[#00F0FF]',
      remaining,
    };
  }

  return {
    status: 'open' as const,
    label: isEs ? 'Inscripciones abiertas' : 'Enrollment Open',
    color: '#10B981',
    bg: 'bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981]',
    dotColor: 'bg-[#10B981]',
    remaining,
  };
}
