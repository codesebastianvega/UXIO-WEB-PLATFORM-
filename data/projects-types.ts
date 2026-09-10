import { Project, Locale } from '@/types';

export interface ProjectDetail extends Project {
  client: string;
  timeline: string;
  role: string;
  liveUrl?: string;
  lead: string;
  challenge: string;
  solution: string;
  disciplinesUsed: string[];
  deliverables: string[];
  stack: string[];
  stats: Array<{ label: string; value: string }>;
  categories: string[];
}
