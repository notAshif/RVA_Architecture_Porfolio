import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-background z-[10000] flex flex-col justify-center items-center px-6"
        >
          <div className="overflow-hidden mb-12 w-full text-center px-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              style={{ fontSize: "clamp(1.5rem, 10vw, 8rem)" }}
              className="font-display tracking-tighter leading-none"
            >
              RVA ARCHITECTS
            </motion.h1>
          </div>
          
          <div className="w-full max-w-[200px] sm:max-w-[300px] h-[1px] bg-white/5 relative overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 2.5, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-accent"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-[10px] uppercase tracking-[0.5em] font-bold text-white/30"
          >
            Loading Architectural Excellence
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
