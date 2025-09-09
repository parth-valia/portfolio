import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Star, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/content/projects';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-6">
          <Link href="/#projects" className="inline-flex items-center text-sm text-primary hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{project.subtitle}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Role</h3>
                <p className="text-muted-foreground">{project.role}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Timeline</h3>
                <p className="text-muted-foreground">{project.timeframe}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Category</h3>
                <Badge variant="outline" className="capitalize">{project.category}</Badge>
              </div>
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-3">
              {project.links?.playStore && (
                <Button asChild>
                  <Link href={project.links.playStore} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Play Store
                  </Link>
                </Button>
              )}
              {project.links?.appStore && (
                <Button asChild>
                  <Link href={project.links.appStore} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    App Store
                  </Link>
                </Button>
              )}
              {project.links?.github && (
                <Button variant="outline" asChild>
                  <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              )}
              {project.links?.web && (
                <Button variant="outline" asChild>
                  <Link href={project.links.web} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div>
            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <Image 
                  src={project.coverImage} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </Card>
          </div>
        </div>

        {/* Project Description */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">About This Project</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.subtitle}
              </p>
              <div className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    • {highlight}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Project Impact */}
        {project.impact && (
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Project Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.impact.rating && (
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="text-2xl font-bold ml-1">{project.impact.rating}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">User Rating</p>
                  </div>
                )}
                {project.impact.installs && (
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">{project.impact.installs}</div>
                    <p className="text-sm text-muted-foreground">Downloads</p>
                  </div>
                )}
                {project.impact.engagement && (
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">{(project.impact.engagement * 100).toFixed(0)}%</div>
                    <p className="text-sm text-muted-foreground">Engagement</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image 
                        src={image} 
                        alt={`${project.title} screenshot ${index + 1}`} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
