'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, TrendingUp, Award, Terminal, Code2, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TerminalWindow } from '@/components/ui/terminal-window';

const experiences = [
  {
    title: 'Senior React Native Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    location: 'Mumbai, India',
    type: 'Full-time',
    description: 'Led development of cross-platform mobile applications serving 100K+ users. Reduced crash rates by 30% and improved app performance significantly.',
    achievements: [
      'Reduced app crash rate from 2.1% to 1.4%',
      'Improved app load time by 40%',
      'Led team of 4 developers',
      'Implemented CI/CD pipeline'
    ],
    technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'AWS', 'Firebase'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20',
  },
  {
    title: 'React Native Developer',
    company: 'Mobile First Agency',
    period: '2021 - 2022',
    location: 'Remote',
    type: 'Contract',
    description: 'Developed and maintained multiple client applications with focus on performance optimization and user experience.',
    achievements: [
      'Delivered 5+ mobile applications',
      'Achieved 4.8+ app store ratings',
      'Implemented offline-first architecture',
      'Mentored junior developers'
    ],
    technologies: ['React Native', 'JavaScript', 'Zustand', 'REST APIs', 'Push Notifications'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20',
  },
  {
    title: 'Junior Mobile Developer',
    company: 'StartupXYZ',
    period: '2020 - 2021',
    location: 'Mumbai, India',
    type: 'Full-time',
    description: 'Started career in mobile development, working on React Native applications and learning industry best practices.',
    achievements: [
      'Built first production mobile app',
      'Learned React Native ecosystem',
      'Collaborated with design team',
      'Implemented responsive designs'
    ],
    technologies: ['React Native', 'JavaScript', 'Redux', 'AsyncStorage', 'Native Modules'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20',
  },
];

const skills = [
  { name: 'React Native', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'Redux Toolkit', level: 85, category: 'State Management' },
  { name: 'AWS Services', level: 80, category: 'Cloud' },
  { name: 'Firebase', level: 85, category: 'Backend' },
  { name: 'REST APIs', level: 90, category: 'Integration' },
  { name: 'Push Notifications', level: 85, category: 'Features' },
  { name: 'Performance Optimization', level: 88, category: 'Optimization' },
];

export function ExperienceSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Terminal className="h-6 w-6 text-matrix-green" />
            <span className="text-matrix-green font-mono text-sm uppercase tracking-wider">
              CAREER_PATH.EXE
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            Professional{' '}
            <span className="text-cyber-blue font-mono">Timeline</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
            {'>'} 2.8+ years of building exceptional mobile experiences with cutting-edge tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <TerminalWindow title="work_history.log">
                <div className="flex items-center space-x-3">
                  <Briefcase className="h-5 w-5 text-matrix-green" />
                  <span className="text-matrix-green font-mono text-lg">PROFESSIONAL EXPERIENCE</span>
                </div>
              </TerminalWindow>
            </motion.div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <TerminalWindow title={`${exp.company.toLowerCase().replace(/\s+/g, '_')}_${exp.period.split(' - ')[0]}.job`}>
                    <div className="space-y-4">
                      {/* Job Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-matrix-green animate-pulse"></div>
                          <span className="text-matrix-green font-mono text-xs">
                            {exp.type.toUpperCase()}
                          </span>
                        </div>
                        <Badge className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30 font-mono text-xs">
                          {exp.period}
                        </Badge>
                      </div>

                      {/* Job Details */}
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-xl font-semibold text-white font-display group-hover:text-matrix-green transition-colors">
                            {exp.title}
                          </h4>
                          <p className="text-cyber-blue font-mono text-sm mt-1">
                            @ {exp.company} • {exp.location}
                          </p>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div>
                          <h5 className="text-matrix-green font-mono text-sm mb-2 flex items-center">
                            <Zap className="mr-2 h-4 w-4" />
                            KEY_ACHIEVEMENTS:
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {exp.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start space-x-2 text-xs">
                                <span className="text-matrix-green font-mono mt-1">{'>'}</span>
                                <span className="text-gray-300">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h5 className="text-cyber-blue font-mono text-sm mb-2 flex items-center">
                            <Code2 className="mr-2 h-4 w-4" />
                            TECH_STACK:
                          </h5>
                          <div className="flex flex-wrap gap-1">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-matrix-gray-dark border border-matrix-green-dark text-matrix-green font-mono text-xs rounded hover:border-matrix-green transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TerminalWindow>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <TerminalWindow title="skill_matrix.sys">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-cyber-blue" />
                  <span className="text-cyber-blue font-mono text-lg">TECHNICAL PROFICIENCY</span>
                </div>
              </TerminalWindow>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="sticky top-24"
            >
              <TerminalWindow title="skills.json">
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-mono text-sm">{skill.name}</span>
                          <Badge className="bg-matrix-green/20 text-matrix-green border-matrix-green/30 font-mono text-xs">
                            {skill.category}
                          </Badge>
                        </div>
                        <span className="text-cyber-blue font-mono text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-matrix-gray-dark rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-matrix-green via-cyber-blue to-cyber-purple relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 1 + index * 0.1, duration: 1, ease: "easeOut" }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: [-100, 200] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                        </motion.div>
                      </div>
                      
                      <div className="text-xs text-gray-500 font-mono mt-1">
                        {skill.level >= 90 ? 'EXPERT' : skill.level >= 80 ? 'ADVANCED' : skill.level >= 70 ? 'INTERMEDIATE' : 'BEGINNER'}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Terminal Footer */}
                  <div className="pt-4 border-t border-matrix-gray-dark text-xs font-mono text-gray-500">
                    <div className="flex justify-between">
                      <span>Skills evaluated: {skills.length}</span>
                      <span>Avg proficiency: {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%</span>
                    </div>
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
