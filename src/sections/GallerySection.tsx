import { motion } from 'framer-motion';
import project5 from '../assets/DJI_20250125_120321_916.jpg';
import project6 from '../assets/DJI_20250125_121457_869.JPG';
import project7 from '../assets/DJI_20250125_121739_432.JPG';
import abakkus1 from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (20).jpg';
import abakkus2 from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (33).jpg';
import abakkus3 from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (7).jpg';
import bungalow2 from '../assets/picture_2/architecture/Bungalow, Location_ Jaunpur/View 2.jpg';
import bungalow3 from '../assets/picture_2/architecture/Bungalow, Location_ Jaunpur/View 3.jpg';
import miraroad2 from '../assets/picture_1/4BHK Miraroad/IMG_20220523_130332.jpg';
import miraroad3 from '../assets/picture_1/4BHK Miraroad/IMG_20220523_131015.jpg';
import lukzer1 from '../assets/picture_2/interior/Lukzer, Loacation_ Vasai/lakzer (1).jpg';
import lukzer2 from '../assets/picture_2/interior/Lukzer, Loacation_ Vasai/lakzer (25).jpg';
import lukzer3 from '../assets/picture_2/interior/Lukzer, Loacation_ Vasai/lakzer (12).jpg';
import jangid1 from '../assets/picture_2/interior/1BHK - Jangid Complex-Miraroad/IMG_20231122_132327.jpg';
import jangid2 from '../assets/picture_2/interior/1BHK - Jangid Complex-Miraroad/IMG_20231211_142259.jpg';
import visual1 from '../assets/picture_2/interior/Visualisations/WhatsApp Image 2021-03-11 at 07.33.36 (1).jpeg';
import visual2 from '../assets/picture_2/interior/Visualisations/WhatsApp Image 2021-03-11 at 07.33.37 (1).jpeg';

const images = [
  project5, 
  abakkus1, 
  lukzer1,
  bungalow2, 
  project6, 
  miraroad2, 
  jangid1,
  bungalow3, 
  lukzer2,
  visual1,
  project7, 
  abakkus2,
  miraroad3,
  lukzer3,
  jangid2,
  abakkus3,
  visual2
];

const GallerySection = () => {
  return (
    <section className="py-24 md:py-48 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium mb-4 block">Our Work Gallery</span>
          <h2 className="text-3xl md:text-5xl font-display tracking-tight">A curated collection of our designs.</h2>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="relative overflow-hidden group rounded-lg"
            >
              <img
                src={img}
                alt={`Architectural project detail ${index + 1}`}
                loading="lazy"
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
