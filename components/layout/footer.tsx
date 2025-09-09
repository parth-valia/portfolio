'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Mail, Phone, MapPin, Heart, Linkedin, ArrowUp, Code2, Home, User, Briefcase, BookOpen } from 'lucide-react';
import { IconXLogo } from '@/components/ui/icons';
import { ProfessionalHover, IconHover } from '@/components/ui/professional-hover';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/smooth-transitions';
import { siteConfig } from '@/site.config';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: Code2 },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background border-t border-border/50">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <StaggerContainer className="space-y-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Enhanced Brand & Description */}
            <StaggerItem>
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-6">
                  <ProfessionalHover scale={1.02}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">
                          {siteConfig.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {siteConfig.name}
                        </h3>
                        <p className="text-muted-foreground font-medium">{siteConfig.title}</p>
                      </div>
                    </div>
                  </ProfessionalHover>
                  <p className="text-muted-foreground max-w-lg leading-relaxed text-lg">
                    Crafting exceptional mobile experiences with React Native. Let's build something amazing together.
                  </p>
                </div>

                {/* Enhanced Quick Contact */}
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-foreground flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>Get In Touch</span>
                  </h4>
                  <div className="space-y-4">
                    <ProfessionalHover scale={1.02}>
                      <Link 
                        href={`mailto:${siteConfig.email}`} 
                        className="group flex items-center space-x-4 p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-all duration-300 border border-border/50 hover:border-blue-500/50"
                      >
                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 group-hover:shadow-lg transition-shadow">
                          <Mail className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{siteConfig.email}</p>
                          <p className="text-sm text-muted-foreground">Drop me a line</p>
                        </div>
                      </Link>
                    </ProfessionalHover>
                    <ProfessionalHover scale={1.02}>
                      <Link 
                        href={`tel:${siteConfig.phone}`} 
                        className="group flex items-center space-x-4 p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-all duration-300 border border-border/50 hover:border-green-500/50"
                      >
                        <div className="p-2 rounded-lg bg-gradient-to-r from-green-600 to-green-700 group-hover:shadow-lg transition-shadow">
                          <Phone className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{siteConfig.phone}</p>
                          <p className="text-sm text-muted-foreground">Call me directly</p>
                        </div>
                      </Link>
                    </ProfessionalHover>
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-muted/30 border border-border/30">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{siteConfig.location}</p>
                        <p className="text-sm text-muted-foreground">Based in India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Enhanced Navigation */}
            <StaggerItem>
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-foreground flex items-center space-x-2">
                  <Code2 className="h-5 w-5 text-purple-600" />
                  <span>Quick Links</span>
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <ProfessionalHover key={item.href} scale={1.02}>
                        <Link
                          href={item.href}
                          className="group flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/60 transition-all duration-300 border border-border/30 hover:border-purple-500/50"
                        >
                          <Icon className="h-4 w-4 text-purple-600 group-hover:scale-110 transition-transform" />
                          <span className="font-medium text-foreground group-hover:text-purple-600 transition-colors">{item.name}</span>
                          <ArrowUp className="h-3 w-3 text-muted-foreground rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-auto" />
                        </Link>
                      </ProfessionalHover>
                    );
                  })}
                </div>
              </div>
            </StaggerItem>

            {/* Enhanced Social Links */}
            <StaggerItem>
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-foreground flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-pink-600" />
                  <span>Let's Connect</span>
                </h4>
                <div className="space-y-4">
                  <ProfessionalHover scale={1.05}>
                    <Link
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300 border border-border/50 hover:border-gray-400 hover:shadow-lg"
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 group-hover:shadow-xl transition-shadow">
                        <Github className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">GitHub</p>
                        <p className="text-sm text-muted-foreground">Check out my code</p>
                      </div>
                    </Link>
                  </ProfessionalHover>
                  <ProfessionalHover scale={1.05}>
                    <Link
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900/40 dark:hover:to-blue-800/40 transition-all duration-300 border border-border/50 hover:border-blue-400 hover:shadow-lg"
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 group-hover:shadow-xl transition-shadow">
                        <Linkedin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">Professional network</p>
                      </div>
                    </Link>
                  </ProfessionalHover>
                  <ProfessionalHover scale={1.05}>
                    <Link
                      href={siteConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-sky-50 to-sky-100 dark:from-sky-950/30 dark:to-sky-900/30 hover:from-sky-100 hover:to-sky-200 dark:hover:from-sky-900/40 dark:hover:to-sky-800/40 transition-all duration-300 border border-border/50 hover:border-sky-400 hover:shadow-lg"
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-700 group-hover:shadow-xl transition-shadow">
                        <IconXLogo className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Twitter</p>
                        <p className="text-sm text-muted-foreground">Latest updates</p>
                      </div>
                    </Link>
                  </ProfessionalHover>
                </div>
              </div>
            </StaggerItem>
          </div>

          {/* Enhanced Bottom Section */}
          <StaggerItem>
            <div className="pt-12 border-t border-border/50">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                  <p className="text-muted-foreground flex items-center space-x-2">
                    <Code2 className="h-4 w-4 text-blue-600" />
                    <span>© 2024 {siteConfig.name}. All rights reserved.</span>
                  </p>
                  <p className="text-muted-foreground flex items-center space-x-2">
                    <span>Crafted with</span>
                    <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
                    <span>and lots of ☕</span>
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-muted-foreground hidden sm:block">
                    Ready to collaborate?
                  </p>
                  <ProfessionalHover scale={1.1}>
                    <button
                      onClick={scrollToTop}
                      className="group p-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                      aria-label="Scroll to top"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <ArrowUp className="h-5 w-5 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300 relative z-10" />
                    </button>
                  </ProfessionalHover>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </footer>
  );
}