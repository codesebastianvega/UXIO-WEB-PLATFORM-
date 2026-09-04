import { Lesson } from '../../types';
import { Locale } from '@/types';
import { getLessonM0001 } from './m00-01-welcome';
import { getLessonM0002 } from './m00-02-creator-kit';
import { getLessonM0003 } from './m00-03-live-lab';
import { getLessonM0101 } from './m01-01-commercial-content';
import { getLessonM0102 } from './m01-02-hidden-content';
import { getLessonM0103 } from './m01-03-content-pillars';
import { getLessonM0104 } from './m01-04-live-lab';

// Semana 2: Grabación con Smartphone
import { getLessonM0201 } from './m02-01-mobile-camera';
import { getLessonM0202 } from './m02-02-light-audio-broll';
import { getLessonM0203 } from './m02-03-live-lab';
import { getLessonM0204 } from './m02-04-speaking-camera';

// Semana 3: Creación & Formatos Nativos
import { getLessonM0301 } from './m03-01-hook-science';
import { getLessonM0302 } from './m03-02-script-storytelling';
import { getLessonM0303 } from './m03-03-live-lab';
import { getLessonM0304 } from './m03-04-native-formats';

// Semana 4: Edición & IA
import { getLessonM0401 } from './m04-01-capcut-editing';
import { getLessonM0402 } from './m04-02-sound-design-covers';
import { getLessonM0403 } from './m04-03-live-lab';
import { getLessonM0404 } from './m04-04-ai-repurposing';

export * from './m00-01-welcome';
export * from './m00-02-creator-kit';
export * from './m00-03-live-lab';
export * from './m01-01-commercial-content';
export * from './m01-02-hidden-content';
export * from './m01-03-content-pillars';
export * from './m01-04-live-lab';

export * from './m02-01-mobile-camera';
export * from './m02-02-light-audio-broll';
export * from './m02-03-live-lab';
export * from './m02-04-speaking-camera';

export * from './m03-01-hook-science';
export * from './m03-02-script-storytelling';
export * from './m03-03-live-lab';
export * from './m03-04-native-formats';

export * from './m04-01-capcut-editing';
export * from './m04-02-sound-design-covers';
export * from './m04-03-live-lab';
export * from './m04-04-ai-repurposing';

export function getAllLessons(lang: Locale = 'es'): Lesson[] {
  return [
    // Semana 0: Inducción & Kit
    getLessonM0001(lang),
    getLessonM0002(lang),
    getLessonM0003(lang),
    // Semana 1: Estrategia (De Negocio a Contenido)
    getLessonM0101(lang),
    getLessonM0102(lang),
    getLessonM0103(lang),
    getLessonM0104(lang),
    // Semana 2: Grabación con Smartphone
    getLessonM0201(lang),
    getLessonM0202(lang),
    getLessonM0203(lang),
    getLessonM0204(lang),
    // Semana 3: Creación & Formatos Nativos
    getLessonM0301(lang),
    getLessonM0302(lang),
    getLessonM0303(lang),
    getLessonM0304(lang),
    // Semana 4: Edición & IA
    getLessonM0401(lang),
    getLessonM0402(lang),
    getLessonM0403(lang),
    getLessonM0404(lang),
  ];
}

export function getLessonsByModuleSlug(moduleSlug: string, lang: Locale = 'es'): Lesson[] {
  return getAllLessons(lang).filter(lesson => lesson.moduleSlug === moduleSlug);
}

export function getLessonBySlug(lessonSlug: string, lang: Locale = 'es'): Lesson | undefined {
  const normalized = lessonSlug.toLowerCase();
  return getAllLessons(lang).find(
    l => l.slug.toLowerCase() === normalized || l.id.toLowerCase() === normalized
  );
}
