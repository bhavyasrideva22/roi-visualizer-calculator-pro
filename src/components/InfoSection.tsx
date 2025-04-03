
import React from 'react';
import { Card } from '@/components/ui/card';

const InfoSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-darkGreen mb-6">Understanding Training ROI for L&D Teams</h2>
        
        <div className="prose max-w-none text-charcoal">
          <h3 className="text-2xl font-semibold text-darkGreen mt-8 mb-4">What is Training ROI?</h3>
          <p className="mb-4 leading-relaxed">
            Training Return on Investment (ROI) is a crucial metric for Learning and Development (L&D) professionals to measure 
            the financial impact and effectiveness of training programs. By calculating training ROI, organizations can determine 
            whether their learning initiatives are delivering value relative to their costs, helping to justify L&D budgets and 
            improve future training decisions.
          </p>
          
          <h3 className="text-2xl font-semibold text-darkGreen mt-8 mb-4">Why Calculate Training ROI?</h3>
          <p className="mb-4 leading-relaxed">
            In today's data-driven business environment, L&D teams must demonstrate the tangible value of their programs. 
            Calculating ROI helps:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Justify training expenditures to executives and stakeholders</li>
            <li>Identify which training programs deliver the highest returns</li>
            <li>Make data-informed decisions about future L&D investments</li>
            <li>Optimize the allocation of limited training resources</li>
            <li>Align training initiatives with broader business objectives</li>
          </ul>
          
          <h3 className="text-2xl font-semibold text-darkGreen mt-8 mb-4">Key Components of Training ROI</h3>
          
          <h4 className="text-xl font-medium text-darkGreen mt-6 mb-3">Training Costs</h4>
          <p className="mb-4 leading-relaxed">
            Comprehensive ROI calculations must account for both direct and indirect training costs:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Direct costs:</strong> Development costs, facilitator fees, materials, technology platforms, venue expenses</li>
            <li><strong>Indirect costs:</strong> Participant time away from work, administrative overhead, travel expenses</li>
            <li><strong>Opportunity costs:</strong> Lost productivity during training hours</li>
          </ul>
          
          <h4 className="text-xl font-medium text-darkGreen mt-6 mb-3">Training Benefits</h4>
          <p className="mb-4 leading-relaxed">
            Benefits of training can be categorized as tangible or intangible:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Tangible benefits:</strong> Increased productivity, reduced errors, faster onboarding, decreased turnover</li>
            <li><strong>Intangible benefits:</strong> Improved morale, enhanced company culture, increased innovation, better teamwork</li>
          </ul>
          
          <h3 className="text-2xl font-semibold text-darkGreen mt-8 mb-4">How Our Calculator Works</h3>
          <p className="mb-4 leading-relaxed">
            Our Training ROI Calculator employs a comprehensive approach to accurately measure the financial impact of your L&D initiatives:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>
              <strong>Input Training Parameters:</strong> Enter details about your training program, including costs, 
              number of participants, and duration.
            </li>
            <li>
              <strong>Define Expected Improvements:</strong> Use the sliders to indicate anticipated improvements in 
              productivity and employee retention.
            </li>
            <li>
              <strong>Review Detailed Analysis:</strong> The calculator provides a breakdown of costs, benefits, 
              net gain, ROI percentage, and payback period.
            </li>
            <li>
              <strong>Visualize Results:</strong> Interactive charts help you understand cost breakdowns, 
              benefit distributions, and the timeline to positive returns.
            </li>
          </ol>
          
          <h3 className="text-2xl font-semibold text-darkGreen mt-8 mb-4">Interpreting Your Results</h3>
          <p className="mb-4 leading-relaxed">
            When analyzing your training ROI results:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Positive ROI:</strong> If your ROI is above 0%, your training program is generating more value than it costs. 
              The higher the percentage, the greater the financial return.
            </li>
            <li>
              <strong>Payback Period:</strong> This indicates how many months it will take to recoup your training investment. 
              Shorter periods mean faster returns.
            </li>
            <li>
              <strong>Net Benefit:</strong> The absolute financial gain after subtracting all training costs from the benefits. 
              This shows the actual monetary value created.
            </li>
          </ul>
          
          <h3 className="text-2xl font-semibold text-darkGreen mt-8 mb-4">Best Practices for L&D ROI Analysis</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Establish baseline metrics before training begins</li>
            <li>Consider both short-term impacts and long-term benefits</li>
            <li>Include all relevant costs in your calculations</li>
            <li>Be conservative in estimating improvements</li>
            <li>Re-evaluate ROI periodically to track actual outcomes</li>
            <li>Use ROI data to continuously improve training design and delivery</li>
          </ul>
          
          <h3 className="text-2xl font-semibold text-darkGreen mt-8 mb-4">Getting Started</h3>
          <p className="mb-4 leading-relaxed">
            To begin calculating the ROI of your training programs, simply enter your training parameters in the calculator 
            above. For the most accurate results, gather comprehensive data about your program costs and establish clear 
            metrics for measuring post-training performance improvements.
          </p>
          <p className="mb-4 leading-relaxed">
            By making ROI analysis a standard practice in your L&D strategy, you'll gain valuable insights that help optimize 
            your training investments and demonstrate their tangible value to your organization.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default InfoSection;
