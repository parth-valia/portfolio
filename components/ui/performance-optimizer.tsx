'use client';

import { useEffect } from 'react';

export function PerformanceOptimizer() {
  useEffect(() => {
    // Optimize animations for better performance
    const optimizeAnimations = () => {
      // Enable hardware acceleration for key elements
      const animatedElements = document.querySelectorAll('[class*="animate-"], [class*="transition-"]');
      animatedElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.willChange = 'transform, opacity';
        htmlElement.style.transform = 'translateZ(0)'; // Force hardware acceleration
      });

      // Optimize scroll performance
      const scrollElements = document.querySelectorAll('[class*="overflow-"], .scroll-smooth');
      scrollElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.scrollBehavior = 'smooth';
      });
    };

    // Run optimization after DOM is loaded
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          optimizeAnimations();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial optimization
    optimizeAnimations();

    // Cleanup on unmount
    return () => {
      observer.disconnect();
      
      // Reset will-change to auto to free up resources
      const animatedElements = document.querySelectorAll('[style*="will-change"]');
      animatedElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.willChange = 'auto';
      });
    };
  }, []);

  // Preload critical resources
  useEffect(() => {
    // Preload fonts
    const fontPreloads = [
      'Inter',
      'JetBrains Mono',
    ];

    fontPreloads.forEach((font) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Optimize images with intersection observer
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    // Observe all images with data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => imageObserver.observe(img));

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return null;
}
