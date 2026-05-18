import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Building2, Paintbrush, Briefcase, FileText } from 'lucide-react';

import archDesignImg from '../assets/picture_2/architecture/Visualisation of proposed projects/pic3.webp';
import interiorArchImg from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (23).webp';
import sustainableImg from '../assets/picture_2/architecture/Visualisation of proposed projects/WhatsApp Image 2021-03-11 at 07.33.37.webp';
import projectMgmtImg from '../assets/picture_2/interior/Lukzer, Loacation_ Vasai/lakzer (14).webp';

const services = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Architecture",
    description: "High-end residential and commercial design that redefines modern lifestyle living.",
    image: archDesignImg
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "Interiors",
    description: "Bespoke interior design solutions tailored to reflect your unique personality and lifestyle.",
    image: interiorArchImg
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Project Consultancy",
    description: "End-to-end project management (PMC) services, seamless execution from blueprint to completion.",
    image: projectMgmtImg
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Liaisoning",
    description: "Handling complex regulatory approvals, government documentation for a hassle-free process.",
    image: sustainableImg
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-48 px-6 md:px-12 bg-white text-background">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          subtitle="What we do" 
          title="Elevating the standard of modern architecture." 
          className="max-w-3xl text-background"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden mb-8 rounded-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-transparent" />
                <div className="absolute top-6 left-6 text-white bg-accent p-3 rounded-full scale-75 group-hover:scale-100 transition-transform duration-500">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-display mb-4 uppercase tracking-wider">{service.title}</h3>
              <p className="text-background/60 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
