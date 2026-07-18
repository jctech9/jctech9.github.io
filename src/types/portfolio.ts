export interface NavigationLink {
  id: string
  label: string
}

export interface ExternalLink {
  label: string
  href: string
}

export interface Project {
  name: string
  description: string
  category: string
  technologies: string[]
  result: string
  repositoryUrl: string
  demoUrl?: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Experience {
  organization: string
  role: string
  period: string
  activities: string[]
}

export interface Education {
  institution: string
  course: string
  period: string
}

export interface Language {
  name: string
  level: string
}
