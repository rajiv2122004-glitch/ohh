export interface Project {
  id: string;
  title: string;
  category: 'distributed' | 'web' | 'spatial' | 'cloud' | 'all';
  tagline: string;
  summary: string;
  architectureDetails: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Production' | 'Open Source' | 'Enterprise Active';
  featured: boolean;
  year: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    context: string;
  }[];
}

export interface CareerMilestone {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface ArchitecturalPrinciple {
  number: string;
  title: string;
  summary: string;
  manifesto: string;
  implementationExample: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarText: string;
}

export type WalkMode = 'walking' | 'interactive' | 'static';
export type WalkSpeed = 'gentle' | 'brisk' | 'paused';
