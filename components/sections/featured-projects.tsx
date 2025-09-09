'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Star, Download, Code2, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TechPill } from '@/components/ui/tech-pill';
import { TerminalWindow } from '@/components/ui/terminal-window';
import { projects } from '@/content/projects';

const featuredProjects = projects.slice(0, 3);

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Code2 className="h-6 w-6 text-matrix-green" />
            <span className="text-matrix-green font-mono text-sm uppercase tracking-wider">
              FEATURED_PROJECTS.EXE
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            Code That{' '}
            <span className="text-cyber-blue font-mono">Impacts</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
            {'>'} Showcasing mobile applications that deliver real value and exceptional user experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <TerminalWindow title={`${project.title.toLowerCase().replace(/\s+/g, '_')}.app`}>
                <div className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-matrix-green animate-pulse"></div>
                      <span className="text-matrix-green font-mono text-xs">ACTIVE</span>
                    </div>
                    <Badge className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30 font-mono text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Project Image */}
                  <div className="relative aspect-video rounded border border-matrix-green-dark overflow-hidden group-hover:border-matrix-green transition-colors">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-matrix-black/60 group-hover:bg-matrix-black/40 transition-colors" />
                    
                    {/* Overlay Info */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-center space-y-2">
                        <div className="text-matrix-green font-mono text-sm">
                          {project.impact.rating && (
                            <div className="flex items-center justify-center space-x-1">
                              <Star className="h-4 w-4 fill-matrix-green text-matrix-green" />
                              <span>{project.impact.rating}</span>
                            </div>
                          )}
                        </div>
                        {project.impact.installs && (
                          <div className="flex items-center justify-center space-x-1 text-cyber-blue font-mono text-xs">
                            <Download className="h-3 w-3" />
                            <span>{project.impact.installs}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white font-display group-hover:text-matrix-green transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-mono mt-1">
                        {'>'} {project.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                      {project.highlights[0]}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-matrix-gray-dark border border-matrix-green-dark text-matrix-green font-mono text-xs rounded hover:border-matrix-green transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-2 py-1 text-gray-500 font-mono text-xs">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-2 border-t border-matrix-gray-dark">
                      <div className="flex space-x-2">
                        {project.links.playStore && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            asChild
                            className="text-gray-400 hover:text-matrix-green font-mono p-1 h-auto"
                          >
                            <Link href={project.links.playStore} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {project.links.appStore && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            asChild
                            className="text-gray-400 hover:text-cyber-blue font-mono p-1 h-auto"
                          >
                            <Link href={project.links.appStore} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        asChild
                        className="text-cyber-blue hover:text-matrix-green font-mono group/btn text-xs"
                      >
                        <Link href={`/projects/${project.slug}`}>
                          VIEW_DETAILS
                          <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-transparent border-2 border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-black font-mono group shadow-neon-green"
          >
            <Link href="/projects">
              <Code2 className="mr-2 h-4 w-4" />
              EXPLORE_ALL_PROJECTS
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}