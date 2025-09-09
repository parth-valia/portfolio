import { Skill } from '@/lib/types';

export const skills: Skill[] = [
  // Core Languages
  { name: 'JavaScript (ES6+)', level: 95, category: 'Core Languages' },
  { name: 'TypeScript', level: 90, category: 'Core Languages' },
  { name: 'HTML', level: 90, category: 'Core Languages' },
  { name: 'CSS', level: 90, category: 'Core Languages' },
  { name: 'C/C++', level: 75, category: 'Core Languages' },

  // Mobile Development
  { name: 'React Native', level: 95, category: 'Mobile Development' },
  { name: 'Expo', level: 90, category: 'Mobile Development' },
  { name: 'Redux', level: 85, category: 'Mobile Development' },
  { name: 'Zustand', level: 80, category: 'Mobile Development' },
  { name: 'SDK Integrations', level: 85, category: 'Mobile Development' },
  { name: 'Payment Integrations', level: 80, category: 'Mobile Development' },

  // Web Development
  { name: 'React.js', level: 90, category: 'Web Development' },
  { name: 'Next.js', level: 85, category: 'Web Development' },
  { name: 'Material UI', level: 80, category: 'Web Development' },
  { name: 'Styled Components', level: 75, category: 'Web Development' },
  { name: 'Tailwind CSS', level: 85, category: 'Web Development' },

  // Backend & APIs
  { name: 'REST APIs', level: 90, category: 'Backend & APIs' },
  { name: 'Firebase', level: 85, category: 'Backend & APIs' },
  { name: 'AWS CLI', level: 75, category: 'Backend & APIs' },
  { name: 'Google Maps', level: 80, category: 'Backend & APIs' },
  { name: 'Web Sockets', level: 75, category: 'Backend & APIs' },
  { name: 'CI/CD pipelines', level: 70, category: 'Backend & APIs' },

  // Tools & Platforms
  { name: 'Git', level: 90, category: 'Tools & Platforms' },
  { name: 'GitHub', level: 90, category: 'Tools & Platforms' },
  { name: 'VS Code', level: 95, category: 'Tools & Platforms' },
  { name: 'Postman', level: 85, category: 'Tools & Platforms' },
  { name: 'Notion', level: 80, category: 'Tools & Platforms' },
  { name: 'JIRA', level: 75, category: 'Tools & Platforms' },
  { name: 'Slack', level: 85, category: 'Tools & Platforms' },
  { name: 'Sentry', level: 80, category: 'Tools & Platforms' },
];

export const skillCategories = [
  'Core Languages',
  'Mobile Development', 
  'Web Development',
  'Backend & APIs',
  'Database & Storage',
  'Tools & Platforms'
];