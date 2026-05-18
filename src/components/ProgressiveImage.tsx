import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../styles/utils';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

const ProgressiveImage = ({ src, alt, className, containerClassName }: ProgressiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-white/5 w-full h-full", containerClassName)}>
      {/* Loading Skeleton */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10"
          >
            <div className="w-full h-full bg-muted animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.05 
        }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        onLoad={() => setIsLoaded(true)}
        className={cn("w-full h-full object-cover", className)}
      />
    </div>
  );
};

export default ProgressiveImage;
