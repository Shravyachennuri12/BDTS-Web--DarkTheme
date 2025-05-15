import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  moreInfo?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, moreInfo }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      className="card p-6 h-full flex flex-col"
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px rgba(0, 0, 0, 0.3)',
        backgroundColor: 'rgba(46, 46, 46, 1)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 p-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full w-16 h-16 flex items-center justify-center">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 flex-grow">{description}</p>

      <AnimatePresence>
        {showMore && moreInfo && (
          <motion.div
            className="text-gray-400 mt-3 text-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {moreInfo}
          </motion.div>
        )}
      </AnimatePresence>

      {moreInfo && (
        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 text-primary-400 hover:text-primary-300 font-medium flex items-center"
          whileHover={{ x: 5 }}
        >
          {showMore ? 'Show Less' : 'Learn More'}
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      )}
    </motion.div>
  );
};

export default ServiceCard;
