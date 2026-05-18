import { motion } from 'framer-motion';
import ProjectsSection from '../sections/ProjectsSection';
import GallerySection from '../sections/GallerySection';

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-24"
    >
      <div className="bg-muted py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-display tracking-tighter">OUR PORTFOLIO</h1>
          <p className="text-xl text-white/50 mt-8 max-w-2xl">
            A comprehensive collection of our architectural achievements and visionary designs.
          </p>
        </div>
      </div>
      <ProjectsSection />
      <GallerySection />
    </motion.div>
  );
};

export default Portfolio;
