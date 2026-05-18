import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import aboutImage from '../assets/DJI_20250125_122907_366.JPG';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-48 px-6 md:px-12 bg-white text-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTitle 
            subtitle="Our Philosophy" 
            title="We build more than structures. We build legacies." 
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 text-lg text-background/70 leading-relaxed"
          >
            <p>
              Founded on the principles of architectural minimalism and environmental 
              integration, RVA Studio has been at the forefront of modern design for 
              over a decade.
            </p>
            <p>
              We believe that every space has a story to tell. Our mission is to 
              translate those stories into physical forms that inspire, endure, and 
              harmonize with their surroundings.
            </p>
            <div className="pt-8">
              <Link to="/about" className="group flex items-center space-x-4">
                <span className="uppercase tracking-widest text-xs font-bold border-b-2 border-background pb-1 group-hover:text-accent group-hover:border-accent transition-all">
                  Read our story
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <img 
            src={aboutImage} 
            alt="Interior of a modern architectural project by RVA Studio"
            loading="lazy"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
