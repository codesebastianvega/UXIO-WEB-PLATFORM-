export type SlideType =
  | 'title'
  | 'section'
  | 'statement'
  | 'concept'
  | 'comparison'
  | 'steps'
  | 'example'
  | 'checklist'
  | 'challenge'
  | 'glossary'
  | 'summary'
  | 'closing';

export interface GlossaryTerm {
  term: string;
  category?: string;
  phonetic?: string;
  definition: string;
  example: string;
  avoidTip?: string;
  image?: string;
}

export interface InstructorNotes {
  script: string;
  duration?: string;
  keyActions?: string[];
  studentQA?: Array<{
    question: string;
    answer: string;
  }>;
}

export interface CardDetailData {
  tag?: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  actionTip?: string;
  image?: string;
  imageCaption?: string;
  iconType?: 'sparkles' | 'check' | 'step';
}

export interface SlidePoint {
  label: string;
  text: string;
  icon?: string;
  tag?: string;
  detailData?: CardDetailData;
}

export interface SlideStep {
  number: string;
  title: string;
  desc: string;
  tag?: string;
  detailData?: CardDetailData;
}

export interface SlideComparisonData {
  beforeLabel?: string;
  before: string[];
  afterLabel?: string;
  after: string[];
  detailData?: CardDetailData;
}

export interface SlideChallengeData {
  whatToDo: string;
  whatToDeliver: string;
  whereToSubmit: string;
  criteria: string[];
  detailData?: CardDetailData;
}

export interface SlideData {
  id: string;
  type: SlideType;
  tag?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
  content?: string[];
  points?: SlidePoint[];
  comparison?: SlideComparisonData;
  steps?: SlideStep[];
  challengeData?: SlideChallengeData;
  glossaryTerms?: GlossaryTerm[];
  stats?: Array<{ value: string; label: string; sub?: string }>;
  instructorNotes?: InstructorNotes;
  footerNote?: string;
  quote?: string;
  author?: string;
  imageUrl?: string;
  bgColor?: string;
  blockColor?: string;
  auroraColors?: string[];
  autoRevealMs?: number;
}

export interface PresentationContent {
  id: string;
  slug: string;
  lessonId: string;
  title: string;
  moduleTag: string;
  estimatedMinutes: number;
  slides: SlideData[];
}

