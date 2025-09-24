'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, Github, Phone, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/ui/magnetic';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { siteConfig } from '@/site.config';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Determine which section should be highlighted based on current page
  const getActiveSection = () => {
    if (pathname === '/blog') return 'blog';
    if (pathname === '/projects') return 'projects';
    if (pathname === '/contact') return 'contact';
    if (pathname === '/about') return 'about';
    if (pathname.startsWith('/blog/')) return 'blog';
    if (pathname.startsWith('/projects/')) return 'projects';
    return activeSection;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Detect active section
      if (pathname === '/') {
        const sections = ['home', 'projects', 'experience', 'education', 'blog', 'github', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = isMobile ? 80 : 40;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-md border-b border-matrix-green/20 shadow-lg')}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Matrix-themed Scroll Progress Indicator */}
      {!isOpen && <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-matrix-green via-cyber-blue to-matrix-green shadow-neon-green"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-mono bg-gradient-to-r from-matrix-green to-cyber-blue bg-clip-text text-transparent text-matrix-glow"
            >
              {`${siteConfig.brandName}.`}
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {siteConfig.nav.map((item) => {
              const sectionId = item.href.replace('#', '');
              const currentActiveSection = getActiveSection();
              const isActive = currentActiveSection === sectionId;

              return (
                <button
                  key={item.href}
                  onClick={() => {
                    if (item.href.startsWith('#')) {
                      // Smart navigation logic
                      if (pathname === '/') {
                        // On home page, scroll to section
                        smoothScrollTo(sectionId);
                      } else if (pathname === `/${sectionId}`) {
                        // Already on the dedicated page, stay here
                        return;
                      } else {
                        // Navigate to home page and scroll to section
                        window.location.href = `/#${sectionId}`;
                      }
                    } else {
                      window.location.href = item.href;
                    }
                  }}
                  className={cn(
                    'text-sm font-medium font-mono transition-all duration-300 hover:text-matrix-green relative group hover-matrix',
                    isActive ? 'text-matrix-green' : 'text-muted-foreground'
                  )}
                >
                  {item.name}
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-matrix-green via-cyber-blue to-matrix-green transition-all duration-500 group-hover:w-full rounded-full shadow-neon-green" />
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-matrix-green shadow-neon-green"
                      layoutId="underline"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <Magnetic>
              <Button variant="ghost" size="sm" asChild className="hover-matrix hover:text-matrix-green">
                <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="ghost" size="sm" asChild className="hover-matrix hover:text-cyber-blue">
                <Link href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </Magnetic>
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-matrix-green/20 mt-4 pt-4 bg-background/95 backdrop-blur-sm"
          >
            <div className="flex flex-col space-y-4">
              {siteConfig.nav.map((item) => {
                const sectionId = item.href.replace('#', '');
                const currentActiveSection = getActiveSection();
                const isActive = currentActiveSection === sectionId;

                return (
                  <button
                    key={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      if (item.href.startsWith('#')) {
                        // Smart navigation logic
                        if (pathname === '/') {
                          // On home page, scroll to section
                          smoothScrollTo(sectionId);
                        } else if (pathname === `/${sectionId}`) {
                          // Already on the dedicated page, stay here
                          return;
                        } else {
                          // Navigate to home page and scroll to section
                          window.location.href = `/#${sectionId}`;
                        }
                      } else {
                        window.location.href = item.href;
                      }
                    }}
                    className={cn(
                      'text-sm font-medium font-mono transition-colors hover:text-matrix-green px-2 py-1 hover-matrix text-left',
                      isActive ? 'text-matrix-green' : 'text-muted-foreground'
                    )}
                  >
                    {item.name}
                  </button>
                );
              })}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`tel:${siteConfig.phone}`}>
                    <Phone className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`mailto:${siteConfig.email}`}>
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}