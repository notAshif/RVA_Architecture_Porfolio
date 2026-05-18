import { motion } from 'framer-motion';
import { MapPin, Maximize2, Bed, Bath } from 'lucide-react';
import { Link } from 'react-router-dom';
import bungalowImg from '../assets/picture_2/architecture/Bungalow, Location_ Jaunpur/View 4.jpg';
import miraroadImg from '../assets/picture_1/4BHK Miraroad/IMG_20220523_132817.jpg';
import santacruzImg from '../assets/picture_2/interior/Residential, Location_ Santacruz/IMG_20240213_125531.jpg';

const properties = [
  {
    title: "The Grand Bungalow",
    location: "Jaunpur, UP",
    price: "Architectural Marvel",
    sqft: "6,500",
    beds: 6,
    baths: 5,
    image: bungalowImg,
  },
  {
    title: "Miraroad Residence",
    location: "Miraroad, Mumbai",
    price: "Modern Interior",
    sqft: "1,800",
    beds: 4,
    baths: 4,
    image: miraroadImg,
  },
  {
    title: "Santacruz Apartment",
    location: "Santacruz, Mumbai",
    price: "Premium Living",
    sqft: "2,200",
    beds: 3,
    baths: 3,
    image: santacruzImg,
  }
];

const RealEstateSection = () => {
  return (
    <section id="real-estate" className="py-24 md:py-48 px-6 md:px-12 bg-white text-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-accent text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-4 md:mb-6 block">Exclusive Projects</span>
            <h2 className="text-4xl md:text-8xl font-display tracking-tighter leading-[0.95] md:leading-[0.9]">Residential <br /> <span className="text-accent italic font-light">Showcase.</span></h2>
          </div>
          <div className="mt-4 md:mt-0">
             <Link to="/portfolio" className="group flex items-center space-x-4">
                <span className="uppercase tracking-widest text-xs font-bold border-b-2 border-background pb-1 group-hover:text-accent group-hover:border-accent transition-all">
                  Browse all properties
                </span>
              </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8">
                <img 
                  src={property.image} 
                  alt={property.title}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute top-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    {property.price}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-accent text-xs uppercase tracking-widest font-bold">
                  <MapPin size={14} className="mr-2" />
                  {property.location}
                </div>
                <h3 className="text-3xl font-display tracking-tight group-hover:text-accent transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex items-center justify-between pt-6 border-t border-background/5 text-background/40">
                  <div className="flex items-center space-x-2">
                    <Bed size={16} />
                    <span className="text-xs font-bold">{property.beds} BEDS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath size={16} />
                    <span className="text-xs font-bold">{property.baths} BATHS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Maximize2 size={16} />
                    <span className="text-xs font-bold">{property.sqft} SQFT</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;
