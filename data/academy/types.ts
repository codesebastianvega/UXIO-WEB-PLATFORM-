import { Locale } from '@/types';

export type CohortStatus = 'open' | 'filling_fast' | 'last_spots' | 'closed';

export interface CohortCapacity {
  capacity: number;
  enrolled: number;
  enrollmentOpen: boolean;
  enrollmentDeadline: string;
  status?: CohortStatus;
}

export interface LessonItem {
  title: string;
  topics: string[];
}

export interface CourseModule {
  weekNumber: number;
  weekTag: string;
  dates: string;
  title: string;
  subtitle: string;
  objective: string;
  lessons: LessonItem[];
  projectDeliverable: {
    title: string;
    description: string;
    items: string[];
  };
}

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

export interface CourseProgram {
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
  modules: CourseModule[];
  schedule: ScheduleEvent[];
  targetAudiences: TargetAudienceGroup[];
  certificateInfo: {
    title: string;
    description: string;
    disclaimer: string;
    badge: string;
  };
  faqs: Array<{ question: string; answer: string }>;
}
