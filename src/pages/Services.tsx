import { motion } from 'framer-motion';
import ServicesSection from '../sections/ServicesSection';
import StatsSection from '../sections/StatsSection';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-24"
    >
      <div className="bg-accent text-background py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-display tracking-tighter">SERVICES</h1>
          <p className="text-xl font-medium mt-8 max-w-2xl">
            Delivering high-end design, bespoke interiors, and end-to-end project excellence across India.
          </p>
        </div>
      </div>
      <ServicesSection />
      <StatsSection />
    </motion.div>
  );
};

export default Services;
