export type ProjectCategory = 'ai-ml' | 'research' | 'systems';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  subtitle: string;
  description: string;
  problem: string;
  approach: string;
  technologies: string[];
  keyResult?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  publicationRef?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  citation: string;
  pages?: string;
  abstract: string;
  technologies: string[];
  projectTitle?: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex: string;
}

export interface ExperienceRole {
  id: string;
  organization: string;
  role: string;
  period: string;
  type: string; // 'Full-time' | 'Internship' | 'Hybrid' | 'Remote'
  location: string;
  domain: string;
  overview: string;
  softwareEngineeringWork?: {
    summary: string;
    points: string[];
    technologies: string[];
  };
  aiMlWork?: {
    summary: string;
    points: string[];
    technologies: string[];
  };
  generalPoints?: string[];
  technologies: string[];
}

export interface ResearchTheme {
  id: string;
  title: string;
  shortDescription: string;
  explanation: string;
  connectedProjects: string[];
  connectedPublications?: string[];
  tags: string[];
  coreQuestions: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Competition & Hackathon' | 'Program & Fellowship' | 'Leadership' | 'Academic Impact';
  organization: string;
  date: string;
  description: string;
  highlight?: boolean;
  metric?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export type ReadingRoomCategory =
  | 'currently-reading'
  | 'research-notes'
  | 'recurring-ideas'
  | 'paper-shelf'
  | 'learning-log';

export interface ReadingRoomItem {
  id: string;
  category: ReadingRoomCategory;
  categoryLabel: string;
  title: string;
  authorOrSource: string;
  dateOrYear: string;
  summary: string;
  content: string;
  tags: string[];
  link?: string;
  status?: 'In Progress' | 'Read' | 'Active Exploration';
  takeaways?: string[];
}

export interface TechnicalSkillCategory {
  category: string;
  skills: string[];
}
