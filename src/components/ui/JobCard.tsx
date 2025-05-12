import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ChevronRight } from 'lucide-react';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, location, type, description }) => {
  return (
    <motion.div 
      className="card p-6"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center text-gray-300">
          <MapPin className="h-4 w-4 text-primary-400 mr-1" />
          {location}
        </div>
        <div className="flex items-center text-gray-300">
          <Clock className="h-4 w-4 text-primary-400 mr-1" />
          {type}
        </div>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <motion.button
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now
          <ChevronRight className="ml-2 h-5 w-5" />
        </motion.button>
        <button className="text-primary-400 hover:text-primary-300 font-medium">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default JobCard;