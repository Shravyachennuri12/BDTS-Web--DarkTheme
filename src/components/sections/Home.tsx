import React from 'react';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Home: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with a slight overlay */}
      <div className="absolute inset-0 bg-gradient-tech overflow-hidden">
        <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-white">IT Built to</span> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500"> Perfection</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            Basel Dynamics delivers cutting-edge technology solutions that transform businesses 
            and drive digital innovation. We're your partner in navigating the digital landscape.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Solutions
            </motion.button>
            <motion.button
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Parallax Floating Elements */}
      <motion.div
        className="absolute bottom-10 right-10 md:right-20 lg:right-32 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-20 h-20 bg-accent-500/30 rounded-full blur-xl"
        animate={{ 
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};

export default Home;