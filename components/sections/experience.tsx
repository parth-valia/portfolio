'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, TrendingUp, Award, MapPin, Code2, Zap, Building, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MagneticHover } from '@/components/ui/magnetic-hover';

const experiences = [
  {
    title: 'React Native Developer',
    company: 'Corenet Tech',
    period: 'Apr 2025 - Present',
    location: 'Mumbai, India',
    type: 'Full-time',
    description: 'Launched 3 production-grade React Native applications, boosting monthly active users by 22%. Accelerated app responsiveness by 35% through load time reduction and optimized rendering logic.',
    achievements: [
      'Launched 3 production-grade React Native applications',
      'Boosted monthly active users by 22%',
      'Accelerated app responsiveness by 35%',
      'Reduced churn by 18% through UX workflow improvements'
    ],
    technologies: ['JavaScript', 'TypeScript', 'React Native', 'Redux', 'Expo', 'REST APIs', 'Firebase', 'AWS CLI'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20',
  },
  {
    title: 'React Native Developer',
    company: 'Shri Hari Info Solutions',
    period: 'Nov 2022 - Mar 2025',
    location: 'Ahmedabad, India',
    type: 'Full-time',
    description: 'Developed and scaled applications across retail, agri-tech, and spiritual sectors, driving a 40% increase in total installs. Reduced app instability by resolving memory leaks and optimizing resource usage.',
    achievements: [
      'Drove 40% increase in total installs',
      'Reduced app instability through memory leak resolution',
      'Improved responsiveness and reliability',
      'Implemented push notifications via FCM'
    ],
    technologies: ['JavaScript', 'TypeScript', 'React Native', 'React.js', 'Next.js', 'Redux', 'Firebase', 'Blockchain'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20',
  },
];

const skills = [
  { name: 'React Native', level: 95, category: 'Frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 90, category: 'Language', icon: '🔷' },
  { name: 'Redux Toolkit', level: 85, category: 'State Management', icon: '🔄' },
  { name: 'AWS Services', level: 80, category: 'Cloud', icon: '☁️' },
  { name: 'Firebase', level: 85, category: 'Backend', icon: '🔥' },
  { name: 'REST APIs', level: 90, category: 'Integration', icon: '🔗' },
  { name: 'Push Notifications', level: 85, category: 'Features', icon: '📱' },
  { name: 'Performance Optimization', level: 88, category: 'Optimization', icon: '⚡' },
];

export function ExperienceSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm font-medium">Experience</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Professional Journey
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            2.8+ years of building high-performance mobile applications and delivering measurable business impact.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-6 lg:space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <MagneticHover strength={0.2}>
                <Card className={`relative overflow-hidden border-0 bg-gradient-to-br ${exp.bgColor} backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group-hover:scale-[1.02]`}>
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
                      {/* Company Info */}
                      <div className="flex-shrink-0">
                        <motion.div 
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <Building className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </motion.div>
                        <div className="space-y-2">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                          <p className="text-base sm:text-lg font-semibold text-muted-foreground">{exp.company}</p>
                          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            {exp.location}
                          </div>
                          <Badge variant="secondary" className="w-fit text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>

                      {/* Experience Details */}
                      <div className="flex-1 space-y-4">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                            <Award className="mr-2 h-4 w-4 text-yellow-600" />
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-start gap-2 text-sm"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                            <Code2 className="mr-2 h-4 w-4 text-blue-600" />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: techIndex * 0.05 }}
                                className="px-2 py-1 bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary text-xs rounded-md font-medium transition-all duration-300 cursor-default"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </MagneticHover>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground">Technical Skills</h3>
          <p className="text-muted-foreground">Core technologies and proficiency levels</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 bg-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <h4 className="font-semibold text-foreground mb-1">{skill.name}</h4>
                  <Badge variant="outline" className="text-xs mb-3">
                    {skill.category}
                  </Badge>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    />
                  </div>
                  <div className="text-sm font-semibold text-blue-600">
                    {skill.level}%
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
