export interface EcosystemWorkItem {
  id: string;
  discipline: string;
  title: string;
  href: string;
  description?: string;
}

export interface EcosystemPieceDetail {
  id: string;
  slug: string;
  ecosystemSlug: string;
  discipline: string;
  title: string;
  subtitle: string;
  overview: string;
  theChallenge: string;
  theSolution: string;
  deliverables: string[];
  stack: string[];
  architectureOrEntities?: string[];
  keyFeatures?: Array<{ title: string; desc: string }>;
  accent?: string;
}

export interface ConceptualArchitectureBranch {
  title: string;
  badge: string;
  accent: string;
  subBranches: Array<{
    title: string;
    items: string[];
  }>;
}

export interface ConceptualArchitecture {
  title?: string;
  subtitle?: string;
  branchLeft: ConceptualArchitectureBranch;
  branchRight: ConceptualArchitectureBranch;
  foundation: {
    title: string;
    stackSummary: string;
  };
}

export interface EcosystemLayer {
  id: string;
  title: string;
  category: string;
  description: string;
  items: string[];
}

export interface EcosystemProductTier {
  name: string;
  badge?: string;
  description: string;
  highlights?: string[];
}

export interface EcosystemJourneyStep {
  step: string;
  label: string;
  question: string;
}

export interface EcosystemResilience {
  title: string;
  summary: string;
  pillars: Array<{ name: string; desc: string }>;
  learnings?: string;
}

export interface EcosystemSchema {
  id: string;
  slug: string;
  accent?: string;
  mainConcept?: string;
  pitch?: string;
  identity: {
    name: string;
    type: string;
    industry: string[];
    year: number;
    status: string;
    uxioRole: string[];
  };
  overview: {
    whatIsIt: string;
    challenge: string;
    roleDescription: string;
  };
  transformation?: {
    from: string;
    to: string;
    stages: string[];
    tagline: string;
  };
  framework?: {
    think: string;
    design: string;
    build: string;
    operate: string;
    scale: string;
  };
  conceptualArchitecture?: ConceptualArchitecture;
  layers?: EcosystemLayer[];
  productTiers?: EcosystemProductTier[];
  userJourney?: EcosystemJourneyStep[];
  resilience?: EcosystemResilience;
  flow?: string[];
  capabilities: string[];
  technology: {
    stack: string[];
    supporting: string[];
    architectureSummary: string;
    designTokens?: string[];
    backendEntities?: string[];
  };
  works: EcosystemWorkItem[];
  links?: {
    liveUrl?: string;
    githubUrl?: string;
    githubAccess?: string;
    ctaText?: string;
  };
  futureRoadmap?: string[];
  uxioRolesDetailed?: Array<{
    area: string;
    description: string;
  }>;
  relations?: {
    labs?: string[];
    relatedEcosystems?: string[];
  };
}
