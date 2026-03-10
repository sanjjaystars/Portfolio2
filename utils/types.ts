export type NavItem = { label: string; href: string };

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
  featured?: boolean;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};
