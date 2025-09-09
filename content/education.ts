export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
  coursework?: string[];
  description?: string;
}

export const education: Education[] = [
  {
    id: 'mtech-computer-science',
    institution: 'Indian Institute of Technology (IIT)',
    degree: 'Master of Technology',
    field: 'Computer Science & Engineering',
    location: 'Delhi, India',
    startDate: '2020',
    endDate: '2022',
    gpa: '8.7/10',
    achievements: [
      'Dean\'s List for Academic Excellence',
      'Research Paper Published in IEEE Conference',
      'Graduate Teaching Assistant for Mobile Computing'
    ],
    coursework: [
      'Advanced Mobile Computing',
      'Distributed Systems',
      'Machine Learning',
      'Software Engineering',
      'Database Systems'
    ],
    description: 'Specialized in mobile application development and distributed systems with focus on React Native and cloud technologies.'
  },
  {
    id: 'btech-computer-science',
    institution: 'National Institute of Technology (NIT)',
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    location: 'Warangal, India',
    startDate: '2016',
    endDate: '2020',
    gpa: '8.2/10',
    achievements: [
      'Graduated with Honors',
      'Winner - Inter-College Hackathon 2019',
      'President - Computer Science Society',
      'Technical Lead - College App Development Team'
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Computer Networks',
      'Operating Systems',
      'Web Technologies'
    ],
    description: 'Strong foundation in computer science fundamentals with active participation in coding competitions and technical societies.'
  }
];

export type EducationList = typeof education;
