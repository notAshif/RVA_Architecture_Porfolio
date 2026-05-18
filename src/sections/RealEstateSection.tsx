import { motion } from 'framer-motion';
import { MapPin, Maximize2, Bed, Bath } from 'lucide-react';
import project7 from '../assets/DJI_20250125_121739_432.JPG';
import project8 from '../assets/DJI_20250125_121805_381.JPG';
import project9 from '../assets/DJI_20250125_121829_289.JPG';

const properties = [
  {
    title: "Vantage Point Villa",
    location: "Richmond Hills, VA",
    price: "$2,450,000",
    sqft: "4,500",
    beds: 4,
    baths: 4.5,
    image: project7,
  },
  {
    title: "The Obsidian House",
    location: "Downtown District",
    price: "$1,890,000",
    sqft: "3,200",
    beds: 3,
    baths: 3,
    image: project8,
  },
  {
    title: "Skyline Terrace",
    location: "West End Plaza",
    price: "$3,120,000",
    sqft: "5,100",
    beds: 5,
    baths: 6,
    image: project9,
  }
];

const RealEstateSection = () => {
  return (
    <section id="real-estate" className="py-24 md:py-48 px-6 md:px-12 bg-white text-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end">
          <div className="max-w-2xl">
            <span className="text-accent text-sm uppercase tracking-[0.3em] font-bold mb-4 block">Exclusive Listings</span>
            <h2 className="text-5xl md:text-8xl font-display tracking-tighter">Real Estate <br /> <span className="text-accent italic font-light">Portfolio.</span></h2>
          </div>
          <div className="mt-8 md:mt-0">
             <button className="group flex items-center space-x-4">
                <span className="uppercase tracking-widest text-xs font-bold border-b-2 border-background pb-1 group-hover:text-accent group-hover:border-accent transition-all">
                  Browse all properties
                </span>
              </button>
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
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
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
