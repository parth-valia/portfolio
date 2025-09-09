'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxScrollProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down';
}

export function ParallaxScroll({ children, speed = 0.5, className, direction = 'up' }: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100 * multiplier]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: smoothY }}>
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxText({ children, speed = 0.3, className }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: smoothY, opacity }}>
        {children}
      </motion.div>
    </div>
  );
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function ScrollReveal({ children, className, delay = 0, direction = 'up' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"]
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 50, x: 0 };
      case 'down': return { y: -50, x: 0 };
      case 'left': return { y: 0, x: 50 };
      case 'right': return { y: 0, x: -50 };
      default: return { y: 50, x: 0 };
    }
  };

  const initial = getInitialPosition();
  const y = useTransform(scrollYProgress, [0, 1], [initial.y, 0]);
  const x = useTransform(scrollYProgress, [0, 1], [initial.x, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={className}>
      <motion.div 
        style={{ 
          y: smoothY, 
          x: smoothX, 
          opacity: smoothOpacity, 
          scale: smoothScale 
        }}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface ScrollScaleProps {
  children: ReactNode;
  className?: string;
  scaleRange?: [number, number];
}

export function ScrollScale({ children, className, scaleRange = [0.8, 1.2] }: ScrollScaleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], 1, scaleRange[1]]);
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale: smoothScale }}>
        {children}
      </motion.div>
    </div>
  );
}
