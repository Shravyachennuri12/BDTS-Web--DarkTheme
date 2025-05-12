import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-100px 0px',
  });

  const getVariants = () => {
    const baseVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.6,
          delay,
          ease: 'easeOut',
        },
      },
    };

    // Add direction-specific transforms
    switch (direction) {
      case 'up':
        baseVariants.hidden.y = 50;
        baseVariants.visible.y = 0;
        break;
      case 'down':
        baseVariants.hidden.y = -50;
        baseVariants.visible.y = 0;
        break;
      case 'left':
        baseVariants.hidden.x = 50;
        baseVariants.visible.x = 0;
        break;
      case 'right':
        baseVariants.hidden.x = -50;
        baseVariants.visible.x = 0;
        break;
      case 'none':
      default:
        // No transform, just opacity
        break;
    }

    return baseVariants;
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;