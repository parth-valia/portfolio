'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Github, MapPin, Terminal, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MatrixBackground } from '@/components/ui/matrix-background';
import { TypewriterText } from '@/components/ui/typewriter-text';
import { TerminalWindow } from '@/components/ui/terminal-window';
import { siteConfig } from '@/site.config';

const roles = [
  'React Native Developer',
  'Mobile App Architect', 
  'Cross-Platform Engineer',
  'Performance Optimizer',
  'Code Craftsman'
];

const terminalCommands = [
  '$ whoami',
  '> parth-valia',
  '$ cat skills.txt',
  '> React Native | TypeScript | Redux',
  '> AWS | Firebase | Performance Tuning',
  '$ ls achievements/',
  '> 30% crash reduction achieved ✓',
  '> 8+ apps shipped to production ✓',
  '> 50K+ downloads generated ✓',
  '$ status',
  '> Ready for next challenge...'
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
      
      {/* Subtle Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-matrix-green animate-pulse"></div>
                <span className="text-matrix-green font-mono text-sm">ONLINE</span>
              </div>
              <div className="h-4 w-px bg-matrix-green-dark"></div>
              <div className="flex items-center space-x-2 text-matrix-green-dark">
                <MapPin className="h-4 w-4" />
                <span className="font-mono text-sm">{siteConfig.location}</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-mono text-matrix-green text-lg"
              >
                {'>'} Hello World! I'm
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white font-display"
              >
                {siteConfig.name}
                <motion.span 
                  className="inline-block w-1 h-16 bg-matrix-green ml-2"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.h1>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-mono">
                <TypewriterText 
                  texts={roles}
                  className="text-cyber-blue"
                />
              </div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Crafting exceptional mobile experiences with{' '}
                <span className="text-matrix-green font-mono">React Native</span>. 
                Specialized in performance optimization, crash reduction, and scalable architecture.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['React Native', 'TypeScript', 'Performance', 'AWS'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    className="px-3 py-1 bg-matrix-gray-dark border border-matrix-green-dark rounded text-matrix-green font-mono text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-matrix-green hover:bg-matrix-green-dark text-black font-mono group border-0 shadow-neon-green"
              >
                <Link href="#projects">
                  <Code className="mr-2 h-5 w-5" />
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black font-mono group"
              >
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                asChild
                className="text-gray-400 hover:text-matrix-green font-mono group"
              >
                <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-matrix-gray-dark"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-matrix-green font-mono">2.8+</div>
                <div className="text-sm text-gray-400 font-mono">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-blue font-mono">8+</div>
                <div className="text-sm text-gray-400 font-mono">Apps Shipped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-purple font-mono">30%</div>
                <div className="text-sm text-gray-400 font-mono">Crash Reduction</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="hidden lg:block"
          >
            <TerminalWindow title="portfolio.exe">
              <div className="space-y-2">
                {terminalCommands.map((command, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 + index * 0.3 }}
                    className={`font-mono text-sm ${
                      command.startsWith('$') 
                        ? 'text-cyber-blue' 
                        : command.startsWith('>') 
                        ? 'text-matrix-green' 
                        : 'text-gray-400'
                    }`}
                  >
                    {command}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5.5 }}
                  className="flex items-center space-x-2 mt-4"
                >
                  <span className="text-cyber-blue font-mono">$</span>
                  <motion.div
                    className="w-2 h-4 bg-matrix-green"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <div className="text-matrix-green font-mono text-xs">SCROLL</div>
          <div className="w-6 h-10 border-2 border-matrix-green rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-matrix-green rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}