export type Locale = 'es' | 'en';

export interface TagItem {
  label: string;
  isAccent?: boolean;
  dotColor?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  metric?: string;
  description: string;
  accentColor: string;
  accentName: string;
  tags: TagItem[];
  canvasType?: 'biometrics' | 'transit' | 'bento' | 'preview';
  previewUrl?: string;
  liveUrl?: string;
  customPath?: string;
  client?: string;
  stack?: string[];
}

export interface Subroute {
  name: string;
  path: string;
  badge?: string;
  status?: string;
  statusColor?: string;
  isVisible?: boolean;
}

export interface NavSubGroup {
  title: string;
  items: Subroute[];
}

export interface NavSection {
  id: string;
  groupNumber?: string;
  label: string;
  count: string;
  subroutes: Subroute[];
  subGroups?: NavSubGroup[];
}
