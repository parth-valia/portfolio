'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Github, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedText } from '@/components/ui/animated-text';
import { Metric } from '@/components/ui/metric';
import { siteConfig } from '@/site.config';

const metrics = [
  { label: 'Years Experience', value: '2.8+', change: '+22% MAU Impact' },
  { label: 'Apps Shipped', value: '8+', change: '50K+ Downloads' },
  { label: 'Crash Reduction', value: '30%', change: 'Performance Focus' },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_500px_300px_at_50%_-30%,rgba(120,119,198,0.1),transparent)] dark:bg-[radial-gradient(ellipse_500px_300px_at_50%_-30%,rgba(120,119,198,0.05),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center space-x-2 text-muted-foreground"
          >
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{siteConfig.location}</span>
          </motion.div>

          {/* Main heading */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-medium text-muted-foreground"
            >
              Hi, I'm
            </motion.div>
            
            <AnimatedText
              text={siteConfig.name}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
              delay={0.3}
            />
            
            <AnimatedText
              text={siteConfig.title}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground"
              delay={0.5}
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Mobile Developer with 2.8+ years building cross-platform apps in React Native. 
            Cut crash rates by 30%, boosted engagement, and improved app performance through 
            TypeScript, Redux/Zustand, REST APIs, AWS CLI, and push notifications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
            
            <Button variant="ghost" size="lg" asChild>
              <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t"
          >
            {metrics.map((metric, index) => (
              <Metric
                key={metric.label}
                label={metric.label}
                value={metric.value}
                change={metric.change}
                changeType="positive"
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}