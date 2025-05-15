import React from 'react';
import { Link } from 'react-scroll';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-darkSecondary pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-300 mt-4">
              Delivering innovative technology solutions that transform businesses and drive digital excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61576002102301&mibextid=rS40aB7S9Ucbxw6v" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/Basel_DTSPL?t=pjOFFTOWzUuomDTHyNWeEw&s=09" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/baseldynamictechsolutions/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B2ASt3pqTQ7OYRXKYXrWObw%3D%3D" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/basel_dynamic_tech_solutions?igsh=anUzM2x5NTQzbHBv" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'About Us', 'Services', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase().replace(' ', '-')}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                    className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Software Development',
                'Web Applications',
                'Mobile Apps',
                'Cloud Services',
                'IT Consulting',
                'DevOps Solutions',
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mt-1 mr-3" />
                <span className="text-gray-300">
                  6th Floor,Suit.No:10, Gamma Block Sigma Soft Tech Park, Ramagondanahalli, Whitefield<br />
                   Bengaluru, Karnataka 560066

                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-3" />
                <span className="text-gray-300">+91 (80) 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-3" />
                <span className="text-gray-300">info@baseldynamics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-darkTertiary my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {year} Basel Dynamics Tech Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;