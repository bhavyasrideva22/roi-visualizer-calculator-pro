
import React from 'react';
import { BadgeIndianRupee } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-darkGreen to-mintGreen text-white py-6 px-4 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3">
            <BadgeIndianRupee size={32} className="text-gold" />
            <h1 className="text-2xl md:text-3xl font-bold">Training ROI Calculator</h1>
          </div>
          <p className="mt-2 md:mt-0 text-sm md:text-base opacity-90">
            Make data-driven L&D decisions with precision
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
