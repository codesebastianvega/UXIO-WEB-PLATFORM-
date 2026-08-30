export type SlideType =
  | 'title'
  | 'section'
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

export interface SlideData {
  id: string;
  type: SlideType;
  tag?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
  content?: string[];
  points?: Array<{ label: string; text: string; icon?: string; tag?: string }>;
  comparison?: {
    beforeLabel?: string;
    before: string[];
    afterLabel?: string;
    after: string[];
  };
  steps?: Array<{ number: string; title: string; desc: string; tag?: string }>;
  challengeData?: {
    whatToDo: string;
    whatToDeliver: string;
    whereToSubmit: string;
    criteria: string[];
  };
  glossaryTerms?: GlossaryTerm[];
  stats?: Array<{ value: string; label: string; sub?: string }>;
  instructorNotes?: InstructorNotes;
  footerNote?: string;
  quote?: string;
  author?: string;
  imageUrl?: string;
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
