import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { projects } from '../data/projects';
import ProgressiveImage from '../components/ProgressiveImage';

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
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="group relative transform-gpu"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted mb-6">
                  <ProgressiveImage
                    src={project.image}
                    alt={project.title}
                    className="object-top transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-10">
                    <div className="flex items-center text-accent text-[10px] uppercase tracking-widest mb-2">
                      <MapPin size={10} className="mr-1" />
                      {project.location}
                    </div>
                    <h3 className="text-xl font-display tracking-tight text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{project.category}</span>
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
