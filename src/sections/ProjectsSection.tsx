import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../styles/utils';
import { MapPin } from 'lucide-react';
import { projects } from '../data/projects';
import { useMediaQuery } from '../hooks/useMediaQuery';
import ProgressiveImage from '../components/ProgressiveImage';

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  image: string;
  className?: string;
}

const ProjectCard = ({ title, category, location, image, className }: ProjectCardProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      className={cn('group relative overflow-hidden bg-muted cursor-pointer rounded-lg transform-gpu', className)}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <ProgressiveImage
          src={image}
          alt={title}
          className="object-center transition-all duration-700 md:group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-10">
        <div className="flex items-center text-accent text-xs uppercase tracking-widest mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <MapPin size={12} className="mr-1" />
          {location}
        </div>
        <span className="text-white/60 text-[10px] uppercase tracking-widest mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {category}
        </span>
        <h3 className="text-2xl md:text-3xl font-display tracking-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};


const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);

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
          {featuredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
