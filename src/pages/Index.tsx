
import React from 'react';
import Header from '@/components/Header';
import ROICalculator from '@/components/ROICalculator';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-creamWhite">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-darkGreen to-mintGreen py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Training ROI Calculator for L&D Teams
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Make data-driven decisions about your training investments with our comprehensive ROI analysis tool.
          </p>
          <a href="#calculator" className="bg-gold hover:bg-gold/90 text-charcoal font-bold py-3 px-8 rounded-lg transition-colors">
            Calculate Your ROI Now
          </a>
        </div>
      </div>
      
      {/* Key Benefits Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-darkGreen mb-12">
          Why Calculate Your Training ROI?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-darkGreen">
            <h3 className="text-xl font-bold text-darkGreen mb-4">Justify L&D Budgets</h3>
            <p className="text-charcoal">
              Demonstrate the financial impact of your training programs to secure budget approval and executive support.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-mintGreen">
            <h3 className="text-xl font-bold text-darkGreen mb-4">Optimize Programs</h3>
            <p className="text-charcoal">
              Identify which training initiatives deliver the highest returns to focus resources on maximum impact.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-gold">
            <h3 className="text-xl font-bold text-darkGreen mb-4">Data-Driven Decisions</h3>
            <p className="text-charcoal">
              Make informed L&D decisions based on concrete financial metrics rather than assumptions.
            </p>
          </div>
        </div>
      </div>
      
      {/* Calculator Section */}
      <ROICalculator />
      
      {/* How It Works Section */}
      <div className="container mx-auto py-16 px-4" id="how-it-works">
        <h2 className="text-3xl font-bold text-center text-darkGreen mb-12">
          How Our ROI Calculator Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-darkGreen rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-darkGreen mb-2">Enter Data</h3>
            <p className="text-charcoal">
              Input your training program details, costs, and participant information.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-darkGreen rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-darkGreen mb-2">Set Expectations</h3>
            <p className="text-charcoal">
              Define expected improvements in productivity and employee retention.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-darkGreen rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-darkGreen mb-2">Get Results</h3>
            <p className="text-charcoal">
              Receive a comprehensive analysis of costs, benefits, and ROI metrics.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-darkGreen rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-bold text-darkGreen mb-2">Share Insights</h3>
            <p className="text-charcoal">
              Download or email your results to share with stakeholders and inform decisions.
            </p>
          </div>
        </div>
      </div>
      
      {/* Detailed Information Section */}
      <InfoSection />
      
      {/* CTA Section */}
      <div className="bg-darkGreen py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Calculate Your Training ROI?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Make informed decisions about your L&D investments with our comprehensive calculator.
          </p>
          <a href="#calculator" className="bg-gold hover:bg-gold/90 text-charcoal font-bold py-3 px-8 rounded-lg transition-colors">
            Start Calculating Now
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
