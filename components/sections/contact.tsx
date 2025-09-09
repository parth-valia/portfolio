'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Terminal, Wifi } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TerminalWindow } from '@/components/ui/terminal-window';
import { siteConfig } from '@/site.config';
import Link from 'next/link';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20',
    borderColor: 'border-blue-200/50 dark:border-blue-800/50',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20',
    borderColor: 'border-green-200/50 dark:border-green-800/50',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: siteConfig.location,
    href: '#',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20',
    borderColor: 'border-purple-200/50 dark:border-purple-800/50',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: siteConfig.social.github,
    color: 'hover:text-gray-900 dark:hover:text-gray-100',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: siteConfig.social.linkedin,
    color: 'hover:text-blue-600',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: siteConfig.social.twitter,
    color: 'hover:text-sky-500',
  },
];

export function ContactSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Wifi className="h-6 w-6 text-matrix-green" />
            <span className="text-matrix-green font-mono text-sm uppercase tracking-wider">
              ESTABLISH_CONNECTION.EXE
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            Network{' '}
            <span className="text-cyber-blue font-mono">Interface</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
            {'>'} Ready to collaborate? Initialize secure communication channel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TerminalWindow title="contact_info.sys">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Terminal className="h-5 w-5 text-matrix-green" />
                  <span className="text-matrix-green font-mono text-lg">COMMUNICATION PROTOCOLS</span>
                </div>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <motion.div
                        key={method.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="group"
                      >
                        <Link 
                          href={method.href}
                          className="flex items-center space-x-4 p-4 rounded border border-matrix-green-dark hover:border-matrix-green transition-colors bg-matrix-gray-dark/30"
                        >
                          <div className="p-2 rounded bg-matrix-green/20 group-hover:bg-matrix-green/30 transition-colors">
                            <Icon className="h-5 w-5 text-matrix-green" />
                          </div>
                          <div>
                            <div className="font-mono text-white text-sm">{method.label.toUpperCase()}</div>
                            <div className="text-gray-400 font-mono text-xs group-hover:text-matrix-green transition-colors">
                              {method.value}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-matrix-gray-dark">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-cyber-blue font-mono text-sm">SOCIAL_NETWORKS:</span>
                  </div>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.div
                          key={social.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 rounded border border-matrix-green-dark hover:border-matrix-green bg-matrix-gray-dark/50 hover:bg-matrix-green/20 transition-all group"
                          >
                            <Icon className="h-5 w-5 text-gray-400 group-hover:text-matrix-green transition-colors" />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <TerminalWindow title="message_composer.app">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Send className="h-5 w-5 text-cyber-blue" />
                  <span className="text-cyber-blue font-mono text-lg">SECURE MESSAGE PROTOCOL</span>
                </div>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <label className="block text-matrix-green font-mono text-xs mb-2">FIRST_NAME:</label>
                      <Input 
                        placeholder="john_doe" 
                        className="bg-matrix-gray-dark border-matrix-green-dark text-white font-mono placeholder:text-gray-500 focus:border-matrix-green" 
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      <label className="block text-matrix-green font-mono text-xs mb-2">LAST_NAME:</label>
                      <Input 
                        placeholder="developer" 
                        className="bg-matrix-gray-dark border-matrix-green-dark text-white font-mono placeholder:text-gray-500 focus:border-matrix-green" 
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-matrix-green font-mono text-xs mb-2">EMAIL_ADDRESS:</label>
                    <Input 
                      type="email" 
                      placeholder="user@domain.com" 
                      className="bg-matrix-gray-dark border-matrix-green-dark text-white font-mono placeholder:text-gray-500 focus:border-matrix-green" 
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  >
                    <label className="block text-matrix-green font-mono text-xs mb-2">SUBJECT_LINE:</label>
                    <Input 
                      placeholder="project_collaboration" 
                      className="bg-matrix-gray-dark border-matrix-green-dark text-white font-mono placeholder:text-gray-500 focus:border-matrix-green" 
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                  >
                    <label className="block text-matrix-green font-mono text-xs mb-2">MESSAGE_BODY:</label>
                    <Textarea 
                      placeholder="Enter your message here..." 
                      rows={5}
                      className="bg-matrix-gray-dark border-matrix-green-dark text-white font-mono placeholder:text-gray-500 focus:border-matrix-green resize-none"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                  >
                    <Button className="w-full bg-transparent border-2 border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-black font-mono group shadow-neon-green">
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      TRANSMIT_MESSAGE
                    </Button>
                  </motion.div>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center justify-between text-xs font-mono text-gray-500 pt-4 border-t border-matrix-gray-dark">
                    <span>Status: Ready for transmission</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-matrix-green animate-pulse"></div>
                      <span>Secure connection established</span>
                    </div>
                  </div>
                </form>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
