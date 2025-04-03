
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-darkGreen text-white py-8 px-4 md:px-12 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Training ROI Calculator</h3>
            <p className="text-sm text-white/80">
              Make informed decisions about your training investments with our
              comprehensive ROI analysis tools.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#calculator" className="hover:text-gold transition-colors">Calculator</a></li>
              <li><a href="#how-it-works" className="hover:text-gold transition-colors">How It Works</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-sm text-white/80">
              Have questions about our ROI Calculator? <br />
              Contact our team for assistance.
            </p>
            <a href="mailto:info@trainingroicalculator.com" className="text-gold hover:underline mt-2 inline-block">
              info@trainingroicalculator.com
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/70">
          <p>© {currentYear} Training ROI Calculator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
