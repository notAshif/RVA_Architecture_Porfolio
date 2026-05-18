import { motion } from 'framer-motion';
import { cn } from '../styles/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

const SectionTitle = ({ title, subtitle, className, align = 'left' }: SectionTitleProps) => {
  return (
    <div className={cn(
      'mb-16 md:mb-24',
      align === 'center' ? 'text-center' : 'text-left',
      className
    )}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-4 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl md:text-7xl leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
