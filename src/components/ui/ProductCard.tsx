import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  onExplore: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  imageSrc,
  onExplore
}) => {
  return (
    <motion.div
      className="card overflow-hidden h-full"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-primary-500 rounded-lg mr-3">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <motion.button
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onExplore}
        >
          Explore
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
