import { motion } from 'framer-motion';
import { cn } from '../styles/utils';

import project1 from '../assets/DJI_20250125_115148_445.JPG';
import project2 from '../assets/DJI_20250125_120226_669.jpg';
import project3 from '../assets/DJI_20250125_120328_260.jpg';
import project4 from '../assets/DJI_20250125_121148_373.jpg';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  className?: string;
}

const ProjectCard = ({ title, category, image, className }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={cn('group relative overflow-hidden bg-muted cursor-pointer', className)}
    >
      <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <span className="text-accent text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {category}
        </span>
        <h3 className="text-2xl md:text-3xl font-display tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "The Glass Pavilion",
      category: "Residential",
      image: project1
    },
    {
      title: "Nordic Museum",
      category: "Cultural",
      image: project2
    },
    {
      title: "Urban Sanctuary",
      category: "Landscape",
      image: project3
    },
    {
      title: "Slate & Shadow",
      category: "Commercial",
      image: project4
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
            <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs font-bold">
              View all projects
            </button>
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
