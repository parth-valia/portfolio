'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Star, Download, Code2, Zap, Users, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MagneticHover } from '@/components/ui/magnetic-hover';
import { projects } from '@/content/projects';

const featuredProjects = projects.slice(0, 6);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};

export function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
            <Code2 className="h-4 w-4" />
            <span className="text-sm font-medium">Featured Projects</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Recent Work
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mobile applications that deliver real impact through performance optimization and user-centered design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <MagneticHover strength={0.3}>
                <Card className="h-full border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden bg-card/50 backdrop-blur-sm group-hover:bg-card/80">
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
                    
                    {/* Floating overlay with glassmorphism */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-foreground border border-border/50 group-hover:border-primary/30 transition-colors">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Links */}
                    <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {project.links.github && (
                        <Button size="sm" variant="secondary" asChild className="bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          <Link href={project.links.github} target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {project.links.playStore && (
                        <Button size="sm" variant="secondary" asChild className="bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          <Link href={project.links.playStore} target="_blank">
                            <Play className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                    </div>
                  </div>

                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {project.highlights[0]}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          className="px-2 py-1 bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary text-xs rounded-md font-medium transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action */}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      asChild
                      className="w-full justify-between group/btn mt-4 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                    >
                      <Link href={`/projects/${project.slug}`}>
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </MagneticHover>
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
          <MagneticHover strength={0.4}>
            <Button 
              onClick={() => document.getElementById('github')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Code2 className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
              <span className="relative z-10">View More Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:text-primary transition-all duration-300" />
            </Button>
          </MagneticHover>
        </motion.div>
      </div>
    </section>
  );
}