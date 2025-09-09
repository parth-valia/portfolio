'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform-gpu z-50"
        style={{ scaleX, transformOrigin: '0%' }}
      />
      
      {/* Circular scroll progress indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full border-2 border-slate-200/20 dark:border-slate-700/20 backdrop-blur-sm bg-white/10 dark:bg-slate-900/10 flex items-center justify-center z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="stroke-slate-200/30 dark:stroke-slate-700/30"
            strokeWidth="3"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <motion.path
            className="stroke-blue-500"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            style={{
              pathLength: scrollYProgress,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-2 h-2 bg-blue-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
