export interface Project {
  name: string;
  description: string;
  id: string;
  imgUrl: string;
  url: string;
  repoUrl?: string;
}

export interface ProjectsData {
  projects: Project[];
}

export interface SkillIcon {
  name: string;
  path: string;
  alt: string;
}
