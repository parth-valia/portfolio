export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  description: string;
  logo?: string;
}

export const certifications: Certification[] = [
  {
    id: 'aws-solutions-architect',
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    issueDate: '2023',
    expiryDate: '2026',
    credentialId: 'AWS-ASA-2023-001',
    credentialUrl: 'https://aws.amazon.com/certification/',
    skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'Lambda', 'RDS'],
    description: 'Demonstrated expertise in designing distributed systems on AWS platform with focus on scalability, security, and cost optimization.',
    logo: '/images/certifications/aws.png'
  },
  {
    id: 'react-native-certified',
    name: 'React Native Certified Developer',
    issuer: 'Meta (Facebook)',
    issueDate: '2022',
    credentialId: 'META-RN-2022-045',
    credentialUrl: 'https://developers.facebook.com/certification/',
    skills: ['React Native', 'JavaScript', 'TypeScript', 'Mobile Development', 'Redux'],
    description: 'Advanced certification covering React Native architecture, performance optimization, and cross-platform mobile development best practices.',
    logo: '/images/certifications/meta.png'
  },
  {
    id: 'google-cloud-professional',
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    issueDate: '2023',
    expiryDate: '2025',
    credentialId: 'GCP-PD-2023-078',
    credentialUrl: 'https://cloud.google.com/certification/',
    skills: ['Google Cloud Platform', 'Kubernetes', 'Docker', 'CI/CD', 'Firebase'],
    description: 'Expertise in developing scalable applications on Google Cloud Platform with focus on containerization and serverless architectures.',
    logo: '/images/certifications/gcp.png'
  },
  {
    id: 'mongodb-developer',
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB Inc.',
    issueDate: '2022',
    credentialId: 'MDB-DEV-2022-156',
    credentialUrl: 'https://university.mongodb.com/certification',
    skills: ['MongoDB', 'NoSQL', 'Database Design', 'Aggregation', 'Indexing'],
    description: 'Comprehensive understanding of MongoDB database design, query optimization, and application development patterns.',
    logo: '/images/certifications/mongodb.png'
  },
  {
    id: 'scrum-master',
    name: 'Certified ScrumMaster (CSM)',
    issuer: 'Scrum Alliance',
    issueDate: '2021',
    expiryDate: '2024',
    credentialId: 'SA-CSM-2021-892',
    credentialUrl: 'https://www.scrumalliance.org/certifications',
    skills: ['Scrum', 'Agile Methodology', 'Team Leadership', 'Project Management'],
    description: 'Certified in Scrum framework and agile project management methodologies with focus on team collaboration and delivery excellence.',
    logo: '/images/certifications/scrum-alliance.png'
  }
];

export type CertificationList = typeof certifications;
