import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Star, Download, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TechPill } from '@/components/ui/tech-pill';
import { Metric } from '@/components/ui/metric';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';
import { projects } from '@/content/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.subtitle,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <RevealOnScroll>
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </RevealOnScroll>

        {/* Project Header */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  {project.subtitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {project.role} • {project.timeframe}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Key Highlights</h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <TechPill key={tech} tech={tech} />
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {project.links.playStore && (
                  <Button asChild>
                    <Link href={project.links.playStore} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Play Store
                    </Link>
                  </Button>
                )}
                {project.links.appStore && (
                  <Button variant="outline" asChild>
                    <Link href={project.links.appStore} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      App Store
                    </Link>
                  </Button>
                )}
                {project.links.web && (
                  <Button variant="outline" asChild>
                    <Link href={project.links.web} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                {project.links.github && (
                  <Button variant="ghost" asChild>
                    <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Impact Metrics */}
              {(project.impact.rating || project.impact.installs || project.impact.mauDelta) && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Impact & Results</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {project.impact.rating && (
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1 text-2xl font-bold text-yellow-500 mb-1">
                            <Star className="h-6 w-6 fill-current" />
                            <span>{project.impact.rating}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">App Rating</p>
                        </div>
                      )}
                      {project.impact.installs && (
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1 text-2xl font-bold text-green-600 mb-1">
                            <Download className="h-6 w-6" />
                            <span>{project.impact.installs}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Downloads</p>
                        </div>
                      )}
                      {project.impact.mauDelta && (
                        <div className="text-center col-span-2">
                          <div className="flex items-center justify-center space-x-1 text-2xl font-bold text-blue-600 mb-1">
                            <TrendingUp className="h-6 w-6" />
                            <span>+{Math.round(project.impact.mauDelta * 100)}%</span>
                          </div>
                          <p className="text-sm text-muted-foreground">MAU Growth</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </RevealOnScroll>

        {/* Features */}
        <RevealOnScroll>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <RevealOnScroll>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="aspect-[9/16] relative overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        )}

        {/* Next Project */}
        <RevealOnScroll>
          <div className="border-t pt-12">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">More Projects</h3>
              <Button variant="outline" asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}