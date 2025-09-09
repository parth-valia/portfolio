'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';
import { blogPosts as postsData } from '@/content/blog';
import { HoverTilt } from '@/components/ui/hover-tilt';

const blogPosts = postsData;

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and deep dives into React Native development, 
              performance optimization, and mobile app best practices.
            </p>
          </div>
        </RevealOnScroll>

        {/* Search */}
        <RevealOnScroll delay={0.1}>
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </RevealOnScroll>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <RevealOnScroll key={post.slug} delay={index * 0.1}>
              <motion.div whileHover={{ y: -4 }} className="h-full">
                <HoverTilt className="h-full">
                  <Card className="h-full overflow-hidden group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readingTime}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-3">
                            {post.summary}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-sm font-medium text-primary group-hover:underline">
                            Read More
                          </span>
                          <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                  </Card>
                </HoverTilt>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <RevealOnScroll>
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No articles found matching your search criteria.
              </p>
            </div>
          </RevealOnScroll>
        )}

        {/* Coming Soon */}
        <RevealOnScroll delay={0.3}>
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">More Articles Coming Soon</h3>
            <p className="text-muted-foreground">
              I'm constantly writing new content about React Native development, 
              performance optimization, and mobile app best practices. Stay tuned!
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}