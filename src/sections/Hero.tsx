import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

import heroImage from '../assets/DJI_20250125_131223_996.JPG';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end px-6 pb-12 md:px-12 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
          className="w-full h-full bg-cover bg-center brightness-[0.5]"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="text-accent text-xs md:text-base uppercase tracking-[0.3em] font-medium mb-6 block">
            Architecture & Design Studio
          </span>
          <h1 className="text-5xl md:text-[10vw] leading-[0.95] md:leading-[0.9] mb-12 max-w-[95%] md:max-w-[90%]">
            REDEFINING <br />
            <span className="text-accent italic font-light">SPACES</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-between items-end"
        >
          <div className="max-w-md hidden md:block">
            <p className="text-lg text-white/60 leading-relaxed">
              We create architectural experiences that bridge the gap between 
              functionality and artistic expression.
            </p>
          </div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center space-x-4 cursor-pointer group"
          >
            <span className="uppercase tracking-widest text-xs font-semibold">Scroll to explore</span>
            <div className="p-3 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-500">
              <ArrowDownRight size={20} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
