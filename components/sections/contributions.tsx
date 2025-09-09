'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { Github, Activity, Code, TrendingUp, Calendar, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MagneticHover } from '@/components/ui/magnetic-hover';
import Link from 'next/link';

export function ContributionsSection() {
  const currentYear = new Date().getFullYear();
  const username = 'parth-valia';
  
  return (
    <section id="github" className="py-24 relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
      
      {/* Subtle animated overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 40%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-6 mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50">
            <Activity className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-muted-foreground">Development Activity</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Coding{' '}
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Consistency
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A visual representation of my daily commitment to code, showcasing consistent 
            contributions and continuous learning across various projects.
          </p>
        </motion.div>

        {/* GitHub Calendar Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <Card className="bg-muted/30 backdrop-blur-xl border border-border/50 p-8">
            <div className="space-y-8">
              {/* Calendar Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">GitHub Activity</h3>
                    <p className="text-sm text-muted-foreground">Contributions over the past year</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
              </div>

              {/* GitHub Calendar */}
              <div className="relative overflow-x-auto">
                <div className="min-w-[800px]">
                  <GitHubCalendar
                    username={username}
                    colorScheme="dark"
                    theme={{
                      light: ['#f0f0f0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
                      dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    }}
                    style={{
                      color: 'hsl(var(--muted-foreground))',
                      fontSize: '12px',
                    }}
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-border/50">
                <motion.div 
                  className="text-center space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 flex items-center justify-center mx-auto">
                    <Code className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                    1000+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Commits This Year</div>
                </motion.div>

                <motion.div 
                  className="text-center space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 flex items-center justify-center mx-auto">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    365+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Day Streak</div>
                </motion.div>

                <motion.div 
                  className="text-center space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 flex items-center justify-center mx-auto">
                    <Github className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Repositories</div>
                </motion.div>

                <motion.div 
                  className="text-center space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 flex items-center justify-center mx-auto">
                    <Star className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                    100+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Stars Earned</div>
                </motion.div>
              </div>

              {/* Activity Summary */}
              <div className="flex items-center justify-between pt-6 border-t border-border/50">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Last updated: {new Date().toLocaleDateString('en-US', { 
                    month: '2-digit', 
                    day: '2-digit', 
                    year: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-green-600 font-medium">Actively Contributing</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <MagneticHover strength={0.3}>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View GitHub Profile
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </Link>
            </Button>
          </MagneticHover>
        </motion.div>
      </div>
    </section>
  );
}


