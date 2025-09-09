'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Phone, Code2, Sparkles, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { ParallaxScroll, ScrollReveal, ScrollScale } from '@/components/ui/parallax-scroll';
import { siteConfig } from '@/site.config';
import Link from 'next/link';

const roles = [
  'React Native Developer',
  'Mobile App Developer', 
  'Full Stack Developer',
  'Software Engineer'
];

const stats = [
  { label: 'Years Experience', value: '5+', icon: Award },
  { label: 'Projects Completed', value: '50+', icon: Code2 },
  { label: 'Happy Clients', value: '30+', icon: Sparkles },
];

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden py-20">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(15_23_42_/_0.15)_1px,_transparent_0)] [background-size:24px_24px]" />
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-primary/3 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs with parallax */}
        <ParallaxScroll speed={0.3} className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        </ParallaxScroll>
        <ParallaxScroll speed={0.5} direction="down" className="absolute inset-0">
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </ParallaxScroll>
        
        {/* Floating particles with parallax */}
        <ParallaxScroll speed={0.2} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        </ParallaxScroll>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <ScrollReveal direction="left" delay={0.1}>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/20 text-primary">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available for new opportunities
                </div>
              </Badge>
            </ScrollReveal>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl text-muted-foreground font-medium">
                <TypingAnimation 
                  text={roles}
                  speed={100}
                  deleteSpeed={50}
                  delayBetweenWords={2000}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              I specialize in building exceptional mobile applications with React Native, 
              creating seamless cross-platform experiences that users love. Let's bring your ideas to life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Let's Work Together
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <span className="text-sm text-muted-foreground font-medium">Connect with me:</span>
              <div className="flex space-x-3">
                <Link 
                  href={siteConfig.social.github} 
                  target="_blank"
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </Link>
                
                <Link 
                  href={siteConfig.social.linkedin} 
                  target="_blank"
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                
                <Link 
                  href={`mailto:${siteConfig.email}`}
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Info */}
          <div className="space-y-6">
            {/* Professional Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="text-center border-0 shadow-sm bg-card/50 backdrop-blur-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-center mb-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-foreground flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Quick Contact</span>
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{siteConfig.email}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{siteConfig.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{siteConfig.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 cursor-pointer group"
        >
          <div className="text-muted-foreground text-xs font-medium group-hover:text-foreground transition-colors">
            Scroll to explore
          </div>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center group-hover:border-muted-foreground/60 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}