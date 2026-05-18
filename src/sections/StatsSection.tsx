import { motion } from 'framer-motion';

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "25", label: "Design Awards" },
  { value: "08", label: "Global Offices" }
];

const StatsSection = () => {
  return (
    <section className="py-24 md:py-48 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-5xl md:text-8xl font-display font-light mb-4 text-accent">
              {stat.value}
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] font-medium text-white/40">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
