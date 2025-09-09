'use client';

import { useEffect } from 'react';

export function SmoothScroll() {
  useEffect(() => {
    // Enhanced smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          // Use custom easing for smoother scroll
          const startPosition = window.pageYOffset;
          const distance = offsetPosition - startPosition;
          const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1 second
          let start: number | null = null;

          const easeInOutCubic = (t: number): number => {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          };

          const animateScroll = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const ease = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (progress < 1) {
              requestAnimationFrame(animateScroll);
            }
          };

          requestAnimationFrame(animateScroll);
        }
      }
    };

    // Optimize scroll performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add any scroll-based optimizations here
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
