import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/content/blog';
import { Markdown } from '@/components/ui/markdown';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogDetailPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-6">
          <Link href="/blog" className="inline-flex items-center text-sm text-primary hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
          </Link>
        </div>

        <div className="space-y-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>
        </div>

        <Card className="border-0 shadow-md overflow-hidden mb-8">
          <div className="relative aspect-video">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
          </div>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <Markdown content={post.content} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


