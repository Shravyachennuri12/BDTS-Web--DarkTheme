import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Update header background based on scroll position
      setIsScrolled(window.scrollY > 50);
      
      // Find active section based on scroll position
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.findIndex(section => {
        if (!section) return false;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
      });
      
      if (currentSection !== -1) {
        setActiveSection(NAV_ITEMS[currentSection].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-darkSecondary bg-opacity-95 shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className={`text-base font-medium cursor-pointer transition-colors duration-300 hover:text-primary-400 ${
                activeSection === item.id ? 'nav-active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-darkSecondary">
          <div className="container py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
                className={`block py-2 text-lg font-medium cursor-pointer hover:text-primary-400 ${
                  activeSection === item.id ? 'text-primary-500' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;