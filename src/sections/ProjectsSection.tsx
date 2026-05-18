import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../styles/utils';
import { MapPin } from 'lucide-react';

import project1 from '../assets/DJI_20250125_115148_445.JPG';
import abakkusImg from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (1).jpg';
import bungalowImg from '../assets/picture_2/architecture/Bungalow, Location_ Jaunpur/View 1.jpg';
import miraroadImg from '../assets/picture_1/4BHK Miraroad/IMG_20220523_124921.jpg';
import tradebullsImg from '../assets/picture_2/architecture/Tradebulls, Location_ ahmedabad/Tradebulls ahmedabad.jpg';
import lukzerImg from '../assets/picture_2/interior/Lukzer, Loacation_ Vasai/lukzer0.jpg';
import jangidImg from '../assets/picture_2/interior/1BHK - Jangid Complex-Miraroad/IMG_20231122_131912.jpg';
import visualImg from '../assets/picture_2/architecture/Visualisation of proposed projects/WhatsApp Image 2021-03-11 at 07.33.37.jpeg';

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  image: string;
  className?: string;
}

const ProjectCard = ({ title, category, location, image, className }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={cn('group relative overflow-hidden bg-muted cursor-pointer rounded-lg', className)}
    >
      <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <div className="flex items-center text-accent text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          <MapPin size={12} className="mr-1" />
          {location}
        </div>
        <span className="text-white/60 text-[10px] uppercase tracking-widest mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {category}
        </span>
        <h3 className="text-2xl md:text-3xl font-display tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Abakkus LLP",
      category: "Commercial Office",
      location: "Santacruz, Mumbai",
      image: abakkusImg
    },
    {
      title: "Lukzer Showroom",
      category: "Retail Interior",
      location: "Vasai, Palghar",
      image: lukzerImg
    },
    {
      title: "Luxury Bungalow",
      category: "Residential Architecture",
      location: "Jaunpur, Uttar Pradesh",
      image: bungalowImg
    },
    {
      title: "Jangid Complex",
      category: "Residential Interior",
      location: "Miraroad, Mumbai",
      image: jangidImg
    },
    {
      title: "Modern 4BHK",
      category: "Interior Design",
      location: "Miraroad, Mumbai",
      image: miraroadImg
    },
    {
      title: "Tradebulls Office",
      category: "Commercial",
      location: "Ahmedabad, Gujarat",
      image: tradebullsImg
    },
    {
      title: "Future Visions",
      category: "Proposed Projects",
      location: "Multiple Locations",
      image: visualImg
    },
    {
      title: "The Glass Pavilion",
      category: "Residential",
      location: "Conceptual",
      image: project1
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-7xl leading-tight">
              Selected projects that define our vision.
            </h2>
          </div>
          <div className="mt-8 md:mt-0">
            <Link to="/portfolio" className="inline-block px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs font-bold">
              View all projects
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              className={index % 2 === 1 ? 'md:mt-24' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
