import { Skill } from '@/lib/types';

export const skills: Skill[] = [
  // Core
  { name: 'JavaScript (ES6+)', level: 95, category: 'Core' },
  { name: 'TypeScript', level: 90, category: 'Core' },
  
  // Mobile
  { name: 'React Native', level: 95, category: 'Mobile' },
  { name: 'Expo', level: 85, category: 'Mobile' },
  { name: 'Redux', level: 90, category: 'Mobile' },
  { name: 'Zustand', level: 80, category: 'Mobile' },
  { name: 'Native Modules', level: 75, category: 'Mobile' },
  { name: 'Hermes', level: 70, category: 'Mobile' },
  
  // Web
  { name: 'React.js', level: 90, category: 'Web' },
  { name: 'Next.js', level: 85, category: 'Web' },
  { name: 'Material UI', level: 80, category: 'Web' },
  { name: 'Styled Components', level: 75, category: 'Web' },
  { name: 'Tailwind CSS', level: 85, category: 'Web' },
  
  // Backend/Infra
  { name: 'REST APIs', level: 90, category: 'Backend/Infra' },
  { name: 'Firebase', level: 85, category: 'Backend/Infra' },
  { name: 'AWS CLI', level: 70, category: 'Backend/Infra' },
  
  // Platform
  { name: 'Google Maps API', level: 80, category: 'Platform' },
  { name: 'Payment Integrations', level: 75, category: 'Platform' },
  { name: 'WebSockets', level: 70, category: 'Platform' },
  
  // Tooling
  { name: 'Git', level: 95, category: 'Tooling' },
  { name: 'GitHub', level: 90, category: 'Tooling' },
  { name: 'VS Code', level: 95, category: 'Tooling' },
  { name: 'Postman', level: 85, category: 'Tooling' },
  { name: 'Sentry', level: 75, category: 'Tooling' },
];

export const skillCategories = [
  'Core',
  'Mobile', 
  'Web',
  'Backend/Infra',
  'Platform',
  'Tooling'
];