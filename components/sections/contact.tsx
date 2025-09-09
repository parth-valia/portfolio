'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MagneticHover } from '@/components/ui/magnetic-hover';
import { siteConfig } from '@/site.config';
import Link from 'next/link';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Drop me a line',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    gradient: 'from-green-500 to-emerald-500',
    description: 'Let\'s talk',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: siteConfig.location,
    href: '#',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Based in',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: siteConfig.social.github,
    gradient: 'from-gray-600 to-gray-800',
    description: 'View my code',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: siteConfig.social.linkedin,
    gradient: 'from-blue-600 to-blue-800',
    description: 'Connect professionally',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: siteConfig.social.twitter,
    gradient: 'from-sky-500 to-sky-700',
    description: 'Follow my journey',
  },
];

export function ContactSection() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Let's Work Together
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next mobile project? Let's discuss how we can create exceptional applications together.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 bg-card text-center">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.gradient} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{method.label}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <Link 
                      href={method.href}
                      className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {method.value}
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h3 className="text-xl font-semibold text-foreground">Connect With Me</h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button variant="outline" size="sm" asChild>
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4 mr-2" />
                      {social.label}
                    </Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="border border-border/50 bg-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your mobile app requirements and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href={`mailto:${siteConfig.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={`tel:${siteConfig.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
