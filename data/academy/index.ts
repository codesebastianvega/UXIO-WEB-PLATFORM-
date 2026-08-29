import { Locale } from '@/types';
import { CourseProgram, CohortCapacity } from './types';
import { getCreatorLabData } from './creator-lab';

export * from './types';
export { getCreatorLabData };

export function getAcademyCourses(lang: Locale = 'es'): CourseProgram[] {
  return [getCreatorLabData(lang)];
}

export function getCourseBySlug(slug: string, lang: Locale = 'es'): CourseProgram | undefined {
  const normalized = slug.toLowerCase();
  if (normalized === 'creator-lab' || normalized === 'contenido-que-vende') {
    return getCreatorLabData(lang);
  }
  return undefined;
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
