'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTheme } from './theme-provider';
import { MagneticHover } from './magnetic-hover';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      default:
        return 'System';
    }
  };

  return (
    <MagneticHover strength={0.3}>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="relative group h-9 px-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
      >
        <div className="flex items-center gap-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              {getIcon()}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.span
              key={theme}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="text-xs font-medium hidden sm:inline-block"
            >
              {getLabel()}
            </motion.span>
          </AnimatePresence>
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </Button>
    </MagneticHover>
  );
}