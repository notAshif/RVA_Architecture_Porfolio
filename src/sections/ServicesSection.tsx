import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Layout, Shield, Wind, Zap } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Architectural Design",
    description: "Creating innovative and functional designs tailored to your unique vision and needs."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Interior Architecture",
    description: "Optimizing internal spaces to enhance human experience and aesthetic value."
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Sustainable Planning",
    description: "Integrating eco-friendly practices and materials for a greener future."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Project Management",
    description: "Ensuring seamless execution from concept to completion with rigorous quality control."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          subtitle="What we do" 
          title="Elevating the standard of modern architecture." 
          className="max-w-3xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border border-white/10 hover:border-accent/50 transition-colors duration-500 group"
            >
              <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                {service.icon}
              </div>
              <h3 className="text-xl font-display mb-4 uppercase tracking-wider">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">
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
