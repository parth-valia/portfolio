'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProfessionalHover, CardHover } from '@/components/ui/professional-hover';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/smooth-transitions';

import { education } from '@/content/education';

const educationData = education.map(edu => ({
  degree: edu.degree,
  field: edu.field,
  institution: edu.institution,
  location: edu.location,
  duration: `${edu.startDate} - ${edu.endDate}`,
  grade: edu.gpa ? `GPA: ${edu.gpa}` : '',
  description: edu.description || '',
  highlights: edu.achievements || [],
  coursework: edu.coursework || [],
  color: 'from-blue-600 to-blue-700',
  icon: GraduationCap
}));

const achievements = [
  {
    title: 'Academic Excellence Award',
    description: 'Recognized for outstanding performance in Computer Science coursework',
    year: '2022',
    icon: Trophy,
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'Best Final Year Project',
    description: 'React Native E-commerce application with advanced features',
    year: '2022',
    icon: Award,
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Hackathon Winner',
    description: 'First place in university-level mobile app development competition',
    year: '2021',
    icon: Users,
    color: 'from-green-500 to-green-600'
  }
];

const relevantCoursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Software Engineering',
  'Mobile Application Development',
  'Web Technologies',
  'Computer Networks',
  'Operating Systems',
  'Machine Learning Fundamentals',
  'Human-Computer Interaction'
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center space-y-6 mb-20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-blue-600 font-semibold text-lg uppercase tracking-wider">
                Academic Background
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              Education &{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Learning
              </span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strong foundation in computer science principles with hands-on experience 
              in modern software development practices and technologies.
            </p>
          </div>
        </FadeIn>

        {/* Education Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {/* Main Education Card */}
          <div className="lg:col-span-2">
            <StaggerContainer>
              {educationData.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <StaggerItem key={edu.degree}>
                    <CardHover intensity="medium">
                      <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/30 group">
                        <CardContent className="p-8">
                          {/* Header */}
                          <div className="flex items-start space-x-6 mb-8">
                            <div className={`p-4 rounded-2xl bg-gradient-to-r ${edu.color} shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0`}>
                              <Icon className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors mb-2">
                                {edu.degree}
                              </h3>
                              <p className="text-lg font-semibold text-muted-foreground mb-1">
                                {edu.field}
                              </p>
                              <p className="text-md font-medium text-muted-foreground mb-2">
                                {edu.institution}
                              </p>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                                <div className="flex items-center space-x-2">
                                  <Calendar className="h-4 w-4" />
                                  <span>{edu.duration}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <MapPin className="h-4 w-4" />
                                  <span>{edu.location}</span>
                                </div>
                                {edu.grade && (
                                  <Badge variant="secondary" className="font-medium">
                                    {edu.grade}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-muted-foreground leading-relaxed mb-6">
                                {edu.description}
                              </p>
                            </div>
                          </div>

                          {/* Highlights */}
                          {edu.highlights.length > 0 && (
                            <div>
                              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                                <Award className="h-5 w-5 text-blue-600" />
                                <span>Key Highlights</span>
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {edu.highlights.map((highlight: string, highlightIndex: number) => (
                                  <motion.div
                                    key={highlight}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: highlightIndex * 0.1 }}
                                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0" />
                                    <span className="text-sm text-foreground">{highlight}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </CardHover>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Achievements Sidebar */}
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
                <Trophy className="h-6 w-6 text-yellow-600" />
                <span>Achievements</span>
              </h3>
            </FadeIn>
            
            <StaggerContainer className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <StaggerItem key={achievement.title}>
                    <ProfessionalHover scale={1.02}>
                      <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-muted/20 group">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0`}>
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground group-hover:text-purple-600 transition-colors mb-1">
                                {achievement.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                {achievement.description}
                              </p>
                              <Badge variant="outline" className="text-xs">
                                {achievement.year}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ProfessionalHover>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>

        {/* Relevant Coursework */}
        <FadeIn delay={0.4}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center space-x-3">
              <BookOpen className="h-7 w-7 text-purple-600" />
              <span>Relevant Coursework</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core subjects that built the foundation for my software development career.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {relevantCoursework.map((course, index) => (
            <StaggerItem key={course}>
              <ProfessionalHover scale={1.05}>
                <Card className="text-center border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-background to-muted/20 group">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-foreground group-hover:text-blue-600 transition-colors">
                      {course}
                    </p>
                  </CardContent>
                </Card>
              </ProfessionalHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
