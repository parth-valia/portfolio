'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, ExternalLink, Star, Download, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TechPill } from '@/components/ui/tech-pill';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';
import { projects } from '@/content/projects';

const categories = ['all', 'mobile', 'web', 'blockchain'];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive showcase of mobile and web applications I've built, 
              from hyperlocal discovery to blockchain wallets.
            </p>
          </div>
        </RevealOnScroll>

        {/* Filters */}
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                        <p className="text-xs text-muted-foreground mt-1">
                          {project.timeframe}
                        </p>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.highlights[0]}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 4).map((tech) => (
                          <TechPill key={tech} tech={tech} variant="outlined" />
                        ))}
                        {project.stack.length > 4 && (
                          <span className="text-xs text-muted-foreground self-center">
                            +{project.stack.length - 4}
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
                          {project.links.web && (
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={project.links.web} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                          {project.links.github && (
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                        </div>
                        
                        <Button variant="ghost" size="sm" asChild className="group/btn">
                          <Link href={`/projects/${project.slug}`}>
                            Details
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

        {filteredProjects.length === 0 && (
          <RevealOnScroll>
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found matching your criteria. Try adjusting your search or filters.
              </p>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </div>
  );
}