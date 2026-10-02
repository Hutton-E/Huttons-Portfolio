export const pageRoutes = [
  { slug: 'about-me', title: 'About Me' },
  { slug: 'personal-projects', title: 'Personal Projects' },
  { slug: 'relevant-documents', title: 'Resume and other Documents'}
] as const;

export const aboutSections = [
  { id: 'school-history', title: 'School History' },
  { id: 'skills', title: 'Skills' },
  { id: 'coursework', title: 'Coursework' },
  { id: 'athletics', title: 'Athletics' },
] as const;