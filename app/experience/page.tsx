'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TechPill } from '@/components/ui/tech-pill';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';
import { experience } from '@/content/experience';

export default function ExperiencePage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey as a React Native developer, building impactful mobile applications 
              and leading technical initiatives across different organizations.
            </p>
          </div>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}>
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10"
                    whileHover={{ scale: 1.2 }}
                  />

                  {/* Content */}
                  <motion.div 
                    className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {/* Company & Role */}
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Building className="h-4 w-4 text-primary" />
                              <h3 className="text-xl font-bold text-primary">
                                {exp.company}
                              </h3>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">{exp.role}</h4>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-muted-foreground space-y-1 sm:space-y-0">
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Highlights */}
                          <div className="space-y-3">
                            <h5 className="font-medium text-sm">Key Achievements:</h5>
                            <ul className="space-y-2">
                              {exp.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start space-x-3">
                                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="space-y-3">
                            <h5 className="font-medium text-sm">Technologies Used:</h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <TechPill key={tech} tech={tech} variant="outlined" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <RevealOnScroll delay={0.3}>
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Building className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-bold">
                        Veer Narmad South Gujarat University (VNSGU)
                      </h3>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="font-medium">Bachelor of Technology - Information Technology</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-muted-foreground space-y-1 sm:space-y-0">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>Aug 2021 – July 2025</span>
                        </div>
                        <Badge variant="secondary">
                          8.5 CGPA
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}