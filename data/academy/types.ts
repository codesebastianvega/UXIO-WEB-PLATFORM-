import { Locale } from '@/types';

export type CohortStatus = 'open' | 'filling_fast' | 'last_spots' | 'closed';
export type VideoProvider = 'youtube' | 'vimeo' | 'custom';
export type LessonType = 'microclass' | 'live_lab';
export type ResourceType = 'template' | 'pdf' | 'link' | 'prompt_pack' | 'guide';

export interface CohortCapacity {
  capacity: number;
  enrolled: number;
  enrollmentOpen: boolean;
  enrollmentDeadline: string;
  status?: CohortStatus;
}

export interface Microclass {
  id: string;
  title: string;
  duration: string;
  description: string;
  videoUrl?: string;
  videoProvider?: VideoProvider;
  presentationSlug?: string;
}

export interface LessonResource {
  id: string;
  title: string;
  type: ResourceType;
  url: string;
  description?: string;
}

export interface LessonChallenge {
  title: string;
  whatToDo: string;
  whatToDeliver: string;
  whereToSubmit: string;
  evaluationCriteria: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface LessonQuiz {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface Lesson {
  id: string;
  slug: string;
  moduleSlug: string;
  title: string;
  type: LessonType;
  duration: string;
  objective: string;
  topics: string[];
  microclasses: Microclass[];
  presentationSlug?: string;
  resources: LessonResource[];
  quiz?: LessonQuiz;
  challenge?: LessonChallenge;
}

export interface ProjectDeliverable {
  title: string;
  description: string;
  items: string[];
}

export interface Module {
  id: string;
  slug: string;
  weekNumber: number;
  weekTag: string;
  dates: string;
  title: string;
  subtitle: string;
  objective: string;
  lessons: Lesson[];
  projectDeliverable: ProjectDeliverable;
}

// Alias for backward compatibility with existing commercial syllabus components
export type CourseModule = Module;
export type LessonItem = {
  title: string;
  topics: string[];
};

export interface ScheduleEvent {
  dates: string;
  weekLabel: string;
  title: string;
  isLive?: boolean;
  milestone?: string;
  description?: string;
}

export interface TargetAudienceGroup {
  name: string;
  description: string;
  icon?: string;
  tags: string[];
}

export interface TransformationItem {
  before: string;
  after: string;
}

export interface FeatureIncluded {
  title: string;
  desc: string;
  icon: string;
}

export interface CertificateInfo {
  title: string;
  description: string;
  disclaimer: string;
  badge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  commercialName: string;
  subtitle: string;
  tagline: string;
  cohortName: string;
  cohortCapacity: CohortCapacity;
  priceCOP: number;
  priceUSD: number;
  regularPriceCOP?: number;
  commercialDuration: string;
  datesOverview: string;
  inductionNotice: string;
  modality: string;
  lead: string;
  problems: string[];
  transformations: TransformationItem[];
  whatIncludes: FeatureIncluded[];
  modules: Module[];
  schedule: ScheduleEvent[];
  targetAudiences: TargetAudienceGroup[];
  certificateInfo: CertificateInfo;
  faqs: FaqItem[];
}

// Alias for backward compatibility
export type CourseProgram = Course;
