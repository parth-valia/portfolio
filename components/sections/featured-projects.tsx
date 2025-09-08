'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TechPill } from '@/components/ui/tech-pill';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';
import { projects } from '@/content/projects';

const featuredProjects = projects.slice(0, 3);

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of apps I've built that have made a real impact for users and businesses
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="h-full overflow-hidden group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="mb-2">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </Badge>
                      {project.impact.rating && (
                        <div className="flex items-center space-x-1 text-white text-sm">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{project.impact.rating}</span>
                          {project.impact.installs && (
                            <>
                              <span className="mx-2">•</span>
                              <Download className="h-4 w-4" />
                              <span>{project.impact.installs}</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {project.highlights[0]}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech) => (
                          <TechPill key={tech} tech={tech} variant="outlined" />
                        ))}
                        {project.stack.length > 3 && (
                          <span className="text-xs text-muted-foreground self-center">
                            +{project.stack.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-2">
                          {project.links.playStore && (
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={project.links.playStore} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                          {project.links.appStore && (
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={project.links.appStore} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                        </div>
                        
                        <Button variant="ghost" size="sm" asChild className="group/btn">
                          <Link href={`/projects/${project.slug}`}>
                            Case Study
                            <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}