import React from 'react';
import { Link } from 'react-scroll';
import BDTS from '../../assets/bdts.png';


const Logo: React.FC = () => {
  return (
    <Link
      to="home"
      spy={true}
      smooth={true}
      offset={-70}
      duration={700}
      className="flex items-center cursor-pointer"
    >
      <div className="relative h-12 w-12 mr-3">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-md shadow-md"></div> */}
        <div className="absolute inset-1 bg-dark rounded-md flex items-center justify-center overflow-hidden">
          <img
            src={BDTS}
            alt="BDTS Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white leading-tight">Basel Dynamics</span>
        <span className="text-xs text-primary-400 leading-tight">IT Built to Perfection</span>
      </div>
    </Link>
  );
};

export default Logo;
