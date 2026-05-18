import { motion } from 'framer-motion';
import AboutSection from '../sections/AboutSection';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-24"
    >
      <div className="bg-background py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-display tracking-tighter">ABOUT US</h1>
          <p className="text-xl text-white/50 mt-8 max-w-2xl">
            Meet the visionaries behind RVA Studio and our commitment to architectural excellence.
          </p>
        </div>
      </div>
      <AboutSection />
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl mb-12">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-white/60">
          <p>
            For over 10 years, RVA Studio has been redefining the architectural landscape. 
            What started as a small design boutique has grown into a 
            firm known for its uncompromising commitment to quality and innovation.
          </p>
          <p>
            We believe that great architecture is the result of a collaborative process. 
            We work closely with our clients to understand their needs and aspirations, 
            translating them into physical forms that inspire and endure.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
