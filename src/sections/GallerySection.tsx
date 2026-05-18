import { motion } from 'framer-motion';
import project5 from '../assets/DJI_20250125_120321_916.jpg';
import project6 from '../assets/DJI_20250125_121457_869.JPG';
import project7 from '../assets/DJI_20250125_121739_432.JPG';
import project8 from '../assets/DJI_20250125_121805_381.JPG';
import project9 from '../assets/DJI_20250125_121829_289.JPG';
import project10 from '../assets/DJI_20250125_121855_915.JPG';

const images = [project5, project6, project7, project8, project9, project10];

const GallerySection = () => {
  return (
    <section className="py-24 md:py-48 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative overflow-hidden group rounded-lg"
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
