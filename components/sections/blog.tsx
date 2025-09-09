'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MagneticHover } from '@/components/ui/magnetic-hover';
import { blogPosts } from '@/content/blog';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};

export function BlogSection() {
  // Get the latest 3 blog posts
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-indigo-400/5 to-purple-400/5 rounded-full blur-2xl animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <span className="text-purple-600 font-medium text-sm uppercase tracking-wider">
              Latest Insights
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-purple-800 to-blue-800 dark:from-white dark:via-purple-200 dark:to-blue-200 bg-clip-text text-transparent">
            Blog & Articles
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Deep dives into React Native development, performance optimization, and mobile app best practices.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              variants={itemVariants}
            >
              <MagneticHover>
                <Card className="group h-full overflow-hidden backdrop-blur-sm bg-white/70 dark:bg-slate-900/70 border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Trending Badge */}
                      {index === 0 && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6 space-y-4">
                      {/* Meta Information */}
                      <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
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
                      
                      {/* Title and Summary */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed">
                          {post.summary}
                        </p>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary" 
                            className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Read More */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                          Read Article
                        </span>
                        <ArrowRight className="h-4 w-4 text-purple-600 dark:text-purple-400 group-hover:translate-x-1 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-all" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </MagneticHover>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <MagneticHover>
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>View All Articles</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticHover>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <Card className="p-8 text-center backdrop-blur-sm bg-gradient-to-br from-purple-50/80 to-blue-50/80 dark:from-purple-950/30 dark:to-blue-950/30 border-purple-200/50 dark:border-purple-800/50 shadow-xl">
            <CardContent className="p-0 space-y-4">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                More Articles Coming Soon
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                I'm constantly writing new content about React Native development, 
                performance optimization, and mobile app best practices. Stay tuned!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
