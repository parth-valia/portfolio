'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProfessionalHoverProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  lift?: number;
  shadowIntensity?: 'subtle' | 'medium' | 'strong';
  borderGlow?: boolean;
  disabled?: boolean;
}

export function ProfessionalHover({
  children,
  className = '',
  scale = 1.02,
  lift = -2,
  shadowIntensity = 'medium',
  borderGlow = false,
  disabled = false
}: ProfessionalHoverProps) {
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  const shadowVariants = {
    subtle: 'hover:shadow-md',
    medium: 'hover:shadow-lg',
    strong: 'hover:shadow-xl'
  };

  return (
    <motion.div
      className={`${className} transition-all duration-300 ease-out ${shadowVariants[shadowIntensity]} ${
        borderGlow ? 'hover:border-primary/30' : ''
      }`}
      whileHover={{
        scale,
        y: lift,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 25
        }
      }}
      whileTap={{ scale: scale * 0.98 }}
    >
      {children}
    </motion.div>
  );
}

interface ButtonHoverProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  className?: string;
  disabled?: boolean;
}

export function ButtonHover({
  children,
  variant = 'primary',
  className = '',
  disabled = false
}: ButtonHoverProps) {
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    primary: {
      hover: { scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' },
      tap: { scale: 0.98 }
    },
    secondary: {
      hover: { scale: 1.03, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)' },
      tap: { scale: 0.98 }
    },
    ghost: {
      hover: { scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.1)' },
      tap: { scale: 0.98 }
    },
    outline: {
      hover: { scale: 1.02, borderColor: 'rgb(59, 130, 246)', boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.3)' },
      tap: { scale: 0.98 }
    }
  };

  return (
    <motion.div
      className={`${className} cursor-pointer`}
      whileHover={variants[variant].hover}
      whileTap={variants[variant].tap}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25
      }}
    >
      {children}
    </motion.div>
  );
}

interface CardHoverProps {
  children: ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
  tilt?: boolean;
  disabled?: boolean;
}

export function CardHover({
  children,
  className = '',
  intensity = 'medium',
  tilt = false,
  disabled = false
}: CardHoverProps) {
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  const intensityConfig = {
    subtle: { scale: 1.01, y: -1, shadow: '0 4px 12px rgba(0, 0, 0, 0.1)' },
    medium: { scale: 1.02, y: -4, shadow: '0 8px 25px rgba(0, 0, 0, 0.15)' },
    strong: { scale: 1.03, y: -8, shadow: '0 12px 35px rgba(0, 0, 0, 0.2)' }
  };

  const config = intensityConfig[intensity];

  return (
    <motion.div
      className={`${className} transition-all duration-300 ease-out`}
      whileHover={{
        scale: config.scale,
        y: config.y,
        rotateY: tilt ? 2 : 0,
        boxShadow: config.shadow,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20
        }
      }}
      whileTap={{ scale: config.scale * 0.98 }}
    >
      {children}
    </motion.div>
  );
}

interface IconHoverProps {
  children: ReactNode;
  className?: string;
  color?: string;
  disabled?: boolean;
}

export function IconHover({
  children,
  className = '',
  color = 'rgb(59, 130, 246)',
  disabled = false
}: IconHoverProps) {
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`${className} cursor-pointer`}
      whileHover={{
        scale: 1.1,
        color,
        filter: 'brightness(1.2)',
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 25
        }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}
