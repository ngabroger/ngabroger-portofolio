'use client';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashLogo({ show, onFinish }: { show: boolean; onFinish: () => void }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center "
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          onAnimationComplete={onFinish}
        >
          <img src="/logo.svg" alt="Logo" className="w-40 h-40 md:w-56 md:h-56" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
