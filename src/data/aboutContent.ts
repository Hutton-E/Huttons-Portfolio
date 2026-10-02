import type { aboutSections } from './routes';

type AboutSectionId = (typeof aboutSections)[number]['id'];

export type ContentBlock = {
  heading: string;
  size: 'small' | 'large';
  paragraphs: string[];
  link?: { label: string; href: string };
};

export const aboutContent: Record<AboutSectionId, ContentBlock[]> = {
  'school-history': [
    { heading: 'High School', size: 'small', paragraphs: ['Attended New Waverly High School from 2019-2023. Graduated 5th in the class with a GPA of 4.98/5.0 highschool scale and 4.0/4.0 college scale.'], link: { label: 'View high school transcript (PDF)', href: '/documents/highschool-transcript.pdf' } },
    { heading: 'College', size: 'large', paragraphs: ['Currently in last year at Wartburg College with plans to graduate May 2027. Majoring in Computer Science with a minor in Business. '], link: { label: 'View college transcript (PDF)', href: '/documents/college-transcript.pdf' } },
  ],
  'skills': [{ heading: 'Skills', size: 'large', paragraphs: ['Skills go here.'] }],
  'coursework': [{ heading: 'Coursework', size: 'large', paragraphs: ['Coursework goes here.'] }],
  'athletics': [{ heading: 'Athletics', size: 'large', paragraphs: ['Athletics go here.'] }],
};
