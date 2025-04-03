
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Mail, Calendar, AArrowUp, AArrowDown } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useToast } from '@/hooks/use-toast';

// Helper functions
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-IN', { 
    style: 'currency', 
    currency: 'INR',
    maximumFractionDigits: 0 
  }).format(value);
};

const calculateROI = (benefits: number, costs: number): number => {
  if (costs === 0) return 0;
  return ((benefits - costs) / costs) * 100;
};

interface ROIData {
  trainingCost: number;
  participantsCount: number;
  employeeHourlyRate: number;
  trainingDuration: number;
  productivityIncrease: number;
  employeeRetention: number;
  annualRevenue: number;
}

interface ROIResults {
  totalCosts: number;
  totalBenefits: number;
  netBenefit: number;
  roi: number;
  paybackPeriod: number;
}

const ROICalculator = () => {
  const { toast } = useToast();
  
  const [roiData, setRoiData] = useState<ROIData>({
    trainingCost: 350000,
    participantsCount: 50,
    employeeHourlyRate: 1000,
    trainingDuration: 16,
    productivityIncrease: 15,
    employeeRetention: 10,
    annualRevenue: 10000000
  });
  
  const [results, setResults] = useState<ROIResults | null>(null);
  
  const handleInputChange = (field: keyof ROIData, value: number) => {
    setRoiData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const calculateResults = () => {
    // Calculate total costs
    const directTrainingCosts = roiData.trainingCost;
    const opportunityCosts = roiData.participantsCount * roiData.employeeHourlyRate * roiData.trainingDuration;
    const totalCosts = directTrainingCosts + opportunityCosts;
    
    // Calculate benefits
    const productivityBenefit = (roiData.annualRevenue * (roiData.productivityIncrease / 100));
    const retentionBenefit = (roiData.annualRevenue * 0.15) * (roiData.employeeRetention / 100);
    const totalBenefits = productivityBenefit + retentionBenefit;
    
    // Calculate ROI and payback period
    const netBenefit = totalBenefits - totalCosts;
    const roi = calculateROI(totalBenefits, totalCosts);
    const paybackPeriod = totalCosts > 0 ? totalCosts / (totalBenefits / 12) : 0;
    
    setResults({
      totalCosts,
      totalBenefits,
      netBenefit,
      roi,
      paybackPeriod
    });
    
    // Scroll to results
    document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const generatePieData = () => {
    if (!results) return [];
    
    return [
      { name: 'Training Costs', value: roiData.trainingCost },
      { name: 'Opportunity Costs', value: roiData.participantsCount * roiData.employeeHourlyRate * roiData.trainingDuration }
    ];
  };
  
  const generateBarData = () => {
    if (!results) return [];
    
    const productivityBenefit = (roiData.annualRevenue * (roiData.productivityIncrease / 100));
    const retentionBenefit = (roiData.annualRevenue * 0.15) * (roiData.employeeRetention / 100);
    
    return [
      { name: 'Productivity', value: productivityBenefit },
      { name: 'Retention', value: retentionBenefit }
    ];
  };
  
  const generateLineData = () => {
    if (!results) return [];
    
    const monthlyBenefit = results.totalBenefits / 12;
    
    return Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      costs: results.totalCosts,
      benefits: monthlyBenefit * (i + 1)
    }));
  };
  
  const handleDownload = () => {
    if (!results) {
      toast({
        title: "No results to download",
        description: "Please calculate ROI first",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Downloading PDF",
      description: "Your ROI report is being prepared"
    });
    
    // In a real app, this would generate a PDF using a library like jsPDF
    // For now, we'll just simulate the download
    setTimeout(() => {
      toast({
        title: "Download complete",
        description: "ROI report has been downloaded"
      });
    }, 1500);
  };
  
  const handleEmail = () => {
    if (!results) {
      toast({
        title: "No results to email",
        description: "Please calculate ROI first",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Email feature",
      description: "Please enter your email to receive the ROI report"
    });
    
    // In a real app, this would open a modal to collect email
  };
  
  const COLORS = ['#245e4f', '#7ac9a7', '#e9c46a', '#4a8fe7'];
  
  return (
    <div className="container mx-auto py-8 px-4" id="calculator">
      <Card className="calculator-card animate-fade-in">
        <div className="p-6">
          <h2 className="section-title flex items-center">
            <Calendar className="mr-2 text-darkGreen" size={24} />
            Training ROI Calculator
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h3 className="sub-section-title">Input Parameters</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="trainingCost">Total Training Cost (₹)</Label>
                  <div className="flex items-center mt-1">
                    <Input 
                      id="trainingCost"
                      type="number" 
                      value={roiData.trainingCost}
                      onChange={(e) => handleInputChange('trainingCost', Number(e.target.value))}
                      className="input-field"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="participantsCount">Number of Participants</Label>
                  <div className="flex items-center mt-1">
                    <Input 
                      id="participantsCount"
                      type="number" 
                      value={roiData.participantsCount}
                      onChange={(e) => handleInputChange('participantsCount', Number(e.target.value))}
                      className="input-field"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="employeeHourlyRate">Average Hourly Rate (₹)</Label>
                  <div className="flex items-center mt-1">
                    <Input 
                      id="employeeHourlyRate"
                      type="number" 
                      value={roiData.employeeHourlyRate}
                      onChange={(e) => handleInputChange('employeeHourlyRate', Number(e.target.value))}
                      className="input-field"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="trainingDuration">Training Duration (hours)</Label>
                  <div className="flex items-center mt-1">
                    <Input 
                      id="trainingDuration"
                      type="number" 
                      value={roiData.trainingDuration}
                      onChange={(e) => handleInputChange('trainingDuration', Number(e.target.value))}
                      className="input-field"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="annualRevenue">Annual Revenue Per Employee (₹)</Label>
                  <div className="flex items-center mt-1">
                    <Input 
                      id="annualRevenue"
                      type="number" 
                      value={roiData.annualRevenue}
                      onChange={(e) => handleInputChange('annualRevenue', Number(e.target.value))}
                      className="input-field"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sliders Section */}
            <div className="space-y-6">
              <h3 className="sub-section-title">Expected Improvements</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between">
                    <Label htmlFor="productivitySlider">Productivity Increase (%)</Label>
                    <span className="text-darkGreen font-semibold">{roiData.productivityIncrease}%</span>
                  </div>
                  <div className="mt-2">
                    <Slider
                      id="productivitySlider"
                      min={0}
                      max={50}
                      step={1}
                      value={[roiData.productivityIncrease]}
                      onValueChange={(value) => handleInputChange('productivityIncrease', value[0])}
                      className="mt-2"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <Label htmlFor="retentionSlider">Employee Retention Improvement (%)</Label>
                    <span className="text-darkGreen font-semibold">{roiData.employeeRetention}%</span>
                  </div>
                  <div className="mt-2">
                    <Slider
                      id="retentionSlider"
                      min={0}
                      max={30}
                      step={1}
                      value={[roiData.employeeRetention]}
                      onValueChange={(value) => handleInputChange('employeeRetention', value[0])}
                      className="mt-2"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0%</span>
                    <span>15%</span>
                    <span>30%</span>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Button 
                    onClick={calculateResults}
                    className="w-full bg-gold hover:bg-gold/90 text-charcoal font-semibold py-6"
                  >
                    Calculate ROI
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {results && (
        <Card className="calculator-card mt-8 animate-slide-in" id="results-section">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="section-title">ROI Analysis Results</h2>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={handleDownload} className="flex items-center space-x-1">
                  <Download size={16} />
                  <span>Download PDF</span>
                </Button>
                <Button variant="outline" onClick={handleEmail} className="flex items-center space-x-1">
                  <Mail size={16} />
                  <span>Email Results</span>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-muted">
                    <p className="text-sm text-muted-foreground">Total Costs</p>
                    <p className="text-2xl font-semibold text-darkGreen">{formatCurrency(results.totalCosts)}</p>
                  </Card>
                  <Card className="p-4 bg-muted">
                    <p className="text-sm text-muted-foreground">Total Benefits</p>
                    <p className="text-2xl font-semibold text-darkGreen">{formatCurrency(results.totalBenefits)}</p>
                  </Card>
                  <Card className="p-4 bg-muted">
                    <p className="text-sm text-muted-foreground">Net Benefit</p>
                    <div className="flex items-center">
                      <p className="text-2xl font-semibold text-darkGreen">{formatCurrency(results.netBenefit)}</p>
                      {results.netBenefit > 0 ? (
                        <AArrowUp className="ml-2 text-green-500" size={20} />
                      ) : (
                        <AArrowDown className="ml-2 text-red-500" size={20} />
                      )}
                    </div>
                  </Card>
                  <Card className="p-4 bg-muted">
                    <p className="text-sm text-muted-foreground">ROI</p>
                    <div className="flex items-center">
                      <p className="text-2xl font-semibold text-darkGreen">{results.roi.toFixed(2)}%</p>
                      {results.roi > 0 ? (
                        <AArrowUp className="ml-2 text-green-500" size={20} />
                      ) : (
                        <AArrowDown className="ml-2 text-red-500" size={20} />
                      )}
                    </div>
                  </Card>
                </div>
                
                <Card className="p-4 mt-4 bg-muted">
                  <p className="text-sm text-muted-foreground">Payback Period</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-semibold text-darkGreen">
                      {results.paybackPeriod.toFixed(1)} months
                    </p>
                  </div>
                </Card>
              </div>
              
              <div>
                <Tabs defaultValue="pie">
                  <TabsList className="w-full mb-4">
                    <TabsTrigger value="pie" className="flex-1">Cost Breakdown</TabsTrigger>
                    <TabsTrigger value="bar" className="flex-1">Benefit Analysis</TabsTrigger>
                    <TabsTrigger value="line" className="flex-1">Timeline</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="pie">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={generatePieData()}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {generatePieData().map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="bar">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={generateBarData()}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis tickFormatter={(value) => `₹${value / 1000000}M`} />
                          <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                          <Legend />
                          <Bar dataKey="value" name="Benefit Value" fill="#7ac9a7" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="line">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={generateLineData()}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" label={{ value: 'Month', position: 'insideBottom', offset: -5 }} />
                          <YAxis tickFormatter={(value) => `₹${value / 1000000}M`} />
                          <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                          <Legend />
                          <Line type="monotone" dataKey="costs" stroke="#245e4f" name="Total Costs" strokeWidth={2} />
                          <Line type="monotone" dataKey="benefits" stroke="#e9c46a" name="Cumulative Benefits" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold text-darkGreen mb-2">Key Insights:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {results.roi > 0 ? (
                  <>
                    <li>Your training program is projected to deliver a positive ROI of <span className="font-medium">{results.roi.toFixed(2)}%</span></li>
                    <li>You can expect to recover your investment within <span className="font-medium">{results.paybackPeriod.toFixed(1)} months</span></li>
                    <li>The net benefit of <span className="font-medium">{formatCurrency(results.netBenefit)}</span> represents a significant return on your L&D investment</li>
                  </>
                ) : (
                  <>
                    <li>Your training program currently shows a negative ROI of <span className="font-medium">{results.roi.toFixed(2)}%</span></li>
                    <li>Consider adjusting training parameters to improve potential returns</li>
                    <li>Focus on areas with higher impact on productivity or employee retention</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ROICalculator;
