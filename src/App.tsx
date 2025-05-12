import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import Products from './components/sections/Products';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Careers from './components/sections/Careers';
import Contact from './components/sections/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Update page title
    document.title = 'Basel Dynamics Tech Solutions';
  }, []);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main>
        <Home />
        <Products />
        <About />
        <Services />
        <Careers />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;