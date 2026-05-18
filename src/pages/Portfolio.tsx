import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

// Import all major images to populate a full grid
import abakkus1 from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (1).jpg';
import abakkus2 from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (20).jpg';
import abakkus3 from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (33).jpg';
import abakkus4 from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (7).jpg';
import bungalow1 from '../assets/picture_2/architecture/Bungalow, Location_ Jaunpur/View 1.jpg';
import bungalow2 from '../assets/picture_2/architecture/Bungalow, Location_ Jaunpur/View 2.jpg';
import bungalow3 from '../assets/picture_2/architecture/Bungalow, Location_ Jaunpur/View 3.jpg';
import bungalow4 from '../assets/picture_2/architecture/Bungalow, Location_ Jaunpur/View 4.jpg';
import miraroad1 from '../assets/picture_1/4BHK Miraroad/IMG_20220523_124921.jpg';
import miraroad2 from '../assets/picture_1/4BHK Miraroad/IMG_20220523_130332.jpg';
import miraroad3 from '../assets/picture_1/4BHK Miraroad/IMG_20220523_131015.jpg';
import lukzer1 from '../assets/picture_2/interior/Lukzer, Loacation_ Vasai/lakzer (1).jpg';
import lukzer2 from '../assets/picture_2/interior/Lukzer, Loacation_ Vasai/lakzer (25).jpg';
import lukzer3 from '../assets/picture_2/interior/Lukzer, Loacation_ Vasai/lakzer (12).jpg';
import jangid1 from '../assets/picture_2/interior/1BHK - Jangid Complex-Miraroad/IMG_20231122_131912.jpg';
import jangid2 from '../assets/picture_2/interior/1BHK - Jangid Complex-Miraroad/IMG_20231211_142259.jpg';
import tradebulls from '../assets/picture_2/architecture/Tradebulls, Location_ ahmedabad/Tradebulls ahmedabad.jpg';
import visual1 from '../assets/picture_2/architecture/Visualisation of proposed projects/pic3.jpg';
import visual2 from '../assets/picture_2/architecture/Visualisation of proposed projects/WhatsApp Image 2021-03-11 at 07.33.37.jpeg';

const allProjects = [
  { img: abakkus1, title: "Abakkus LLP", loc: "Santacruz", cat: "Commercial" },
  { img: bungalow1, title: "Luxury Bungalow", loc: "Jaunpur", cat: "Residential" },
  { img: lukzer1, title: "Lukzer Showroom", loc: "Vasai", cat: "Retail" },
  { img: miraroad1, title: "Modern 4BHK", loc: "Miraroad", cat: "Interior" },
  { img: abakkus2, title: "Abakkus Workspace", loc: "Santacruz", cat: "Commercial" },
  { img: bungalow2, title: "Bungalow View", loc: "Jaunpur", cat: "Residential" },
  { img: jangid1, title: "Jangid Residence", loc: "Miraroad", cat: "Interior" },
  { img: tradebulls, title: "Tradebulls Office", loc: "Ahmedabad", cat: "Commercial" },
  { img: visual1, title: "Proposed Mall", loc: "Visualisation", cat: "Commercial" },
  { img: bungalow3, title: "Grand Facade", loc: "Jaunpur", cat: "Residential" },
  { img: miraroad2, title: "Dining Detail", loc: "Miraroad", cat: "Interior" },
  { img: lukzer2, title: "Retail Lighting", loc: "Vasai", cat: "Retail" },
  { img: visual2, title: "Future Living", loc: "Visualisation", cat: "Residential" },
  { img: abakkus3, title: "Executive Cabin", loc: "Santacruz", cat: "Commercial" },
  { img: bungalow4, title: "Aerial View", loc: "Jaunpur", cat: "Residential" },
  { img: jangid2, title: "Bedroom Design", loc: "Miraroad", cat: "Interior" },
  { img: abakkus4, title: "Lobby Area", loc: "Santacruz", cat: "Commercial" },
  { img: miraroad3, title: "Kitchen Concept", loc: "Miraroad", cat: "Interior" },
  { img: lukzer3, title: "Product Display", loc: "Vasai", cat: "Retail" }
];

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-24 bg-background min-h-screen"
    >
      <div className="bg-muted py-24 md:py-36 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-6 block"
          >
            Full Archive
          </motion.span>
          <h1 className="text-6xl md:text-[10vw] font-display tracking-tighter leading-[0.8] mb-12">
            ALL <br /> PROJECTS
          </h1>
          <p className="text-xl text-white/50 mt-8 max-w-2xl leading-relaxed">
            Exploring the full spectrum of our architectural and interior design achievements across India.
          </p>
        </div>
      </div>

      <div className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted mb-6">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="flex items-center text-accent text-[10px] uppercase tracking-widest mb-2">
                      <MapPin size={10} className="mr-1" />
                      {project.loc}
                    </div>
                    <h3 className="text-xl font-display tracking-tight text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{project.cat}</span>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold">View Project</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
