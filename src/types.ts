interface EducationEntry {
  institution: string;
  area: string;
  degree: string;
  date?: string | null;
  location?: string;
  summary?: string | null;
  highlights?: string[];
}

interface ExperienceEntry {
  company: string;
  position: string;
  date?: string | null;
  location?: string;
  summary?: string;
  highlights?: string[];
}

interface ProjectEntry {
  name: string;
  location?: string | null;
  summary?: string;
  highlights?: string[];
  date?: string | null;
}

interface SkillEntry {
  label: string;
  details: string;
}

// professional_summary es un array de strings (parrafos), no de objetos
type ProfessionalSummaryEntry = string;

export interface CVSections {
  professional_summary?: ProfessionalSummaryEntry[];
  education?: EducationEntry[];
  experience?: ExperienceEntry[];
  projects?: ProjectEntry[];
  skills?: SkillEntry[];
  // rendercv permite secciones custom con cualquier nombre,
  // asi que dejamo una via de escape tipada
  [key: string]: unknown;
}

interface SocialNetwork {
  network: string;
  username: string;
}

export interface CVData {
  name: string;
  headline?: string;
  location?: string;
  email?: string;
  photo?: string | null;
  phone?: string | null;
  website?: string | null;
  social_networks?: SocialNetwork[];
  custom_connections?: unknown[];
  sections: CVSections;
}
