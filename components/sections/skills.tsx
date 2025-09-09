'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, Cloud, Zap, Layers, Globe, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ProfessionalHover, CardHover } from '@/components/ui/professional-hover';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/smooth-transitions';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'from-blue-600 to-blue-700',
    skills: [
      { name: 'React Native', level: 95, description: 'Cross-platform mobile apps' },
      { name: 'TypeScript', level: 90, description: 'Type-safe development' },
      { name: 'Expo', level: 85, description: 'Rapid prototyping & deployment' },
      { name: 'React Navigation', level: 90, description: 'Navigation solutions' }
    ]
  },
  {
    title: 'Frontend Technologies',
    icon: Code2,
    color: 'from-purple-600 to-purple-700',
    skills: [
      { name: 'React.js', level: 92, description: 'Modern web applications' },
      { name: 'Next.js', level: 88, description: 'Full-stack React framework' },
      { name: 'Tailwind CSS', level: 90, description: 'Utility-first styling' },
      { name: 'Framer Motion', level: 85, description: 'Smooth animations' }
    ]
  },
  {
    title: 'State Management',
    icon: Layers,
    color: 'from-green-600 to-green-700',
    skills: [
      { name: 'Redux Toolkit', level: 88, description: 'Predictable state container' },
      { name: 'Zustand', level: 85, description: 'Lightweight state management' },
      { name: 'React Query', level: 82, description: 'Server state management' },
      { name: 'Context API', level: 90, description: 'React state sharing' }
    ]
  },
  {
    title: 'Backend & APIs',
    icon: Database,
    color: 'from-orange-600 to-orange-700',
    skills: [
      { name: 'REST APIs', level: 90, description: 'RESTful web services' },
      { name: 'GraphQL', level: 75, description: 'Query language for APIs' },
      { name: 'Node.js', level: 80, description: 'Server-side JavaScript' },
      { name: 'Firebase', level: 85, description: 'Backend-as-a-Service' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-cyan-600 to-cyan-700',
    skills: [
      { name: 'AWS CLI', level: 78, description: 'Amazon Web Services' },
      { name: 'Git & GitHub', level: 92, description: 'Version control' },
      { name: 'CI/CD', level: 75, description: 'Continuous integration' },
      { name: 'Docker', level: 70, description: 'Containerization' }
    ]
  },
  {
    title: 'Performance & Testing',
    icon: Zap,
    color: 'from-pink-600 to-pink-700',
    skills: [
      { name: 'Performance Optimization', level: 88, description: 'App speed & efficiency' },
      { name: 'FlatList Optimization', level: 90, description: 'Large data rendering' },
      { name: 'Jest Testing', level: 80, description: 'Unit & integration tests' },
      { name: 'Flipper Debugging', level: 85, description: 'Mobile app debugging' }
    ]
  }
];

const certifications = [
  {
    title: 'React Native Certified Developer',
    issuer: 'Meta',
    year: '2023',
    icon: Shield,
    color: 'from-blue-600 to-blue-700'
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2023',
    icon: Cloud,
    color: 'from-orange-600 to-orange-700'
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    year: '2022',
    icon: Code2,
    color: 'from-green-600 to-green-700'
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center space-y-6 mb-20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Code2 className="h-8 w-8 text-purple-600" />
              <span className="text-purple-600 font-semibold text-lg uppercase tracking-wider">
                Technical Expertise
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Skills &{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              2.8+ years of hands-on experience with modern mobile and web technologies, 
              delivering high-performance applications with exceptional user experiences.
            </p>
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <StaggerItem key={category.title}>
                <CardHover intensity="medium" className="h-full">
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/30 group">
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Category Header */}
                      <div className="flex items-center space-x-4 mb-8">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg group-hover:shadow-xl transition-shadow`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-purple-600 transition-colors">
                            {category.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {category.skills.length} technologies
                          </p>
                        </div>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-6 flex-1">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                            className="space-y-3"
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-semibold text-foreground">{skill.name}</h4>
                                <p className="text-xs text-muted-foreground">{skill.description}</p>
                              </div>
                              <Badge variant="secondary" className="text-xs font-medium">
                                {skill.level}%
                              </Badge>
                            </div>
                            <div className="relative">
                              <Progress 
                                value={skill.level} 
                                className="h-2 bg-muted/50" 
                              />
                              <motion.div
                                className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ 
                                  delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                                  duration: 1,
                                  ease: 'easeOut'
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CardHover>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Certifications Section */}
        <FadeIn delay={0.3}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Certifications & Achievements</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development in cutting-edge technologies.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <StaggerItem key={cert.title}>
                <ProfessionalHover scale={1.05}>
                  <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/30 group">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs">
                        {cert.year}
                      </Badge>
                    </CardContent>
                  </Card>
                </ProfessionalHover>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
