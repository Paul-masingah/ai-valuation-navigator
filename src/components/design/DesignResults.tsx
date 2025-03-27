import { useState } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Building, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Edit, 
  Expand, 
  Home, 
  Info, 
  LineChart, 
  Ruler, 
  Send, 
  Share2, 
  Sparkles, 
  Thermometer, 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer,
  Legend,
  Cell
} from 'recharts';
import { toast } from "sonner";

interface DesignResultsProps {
  setShowResults: (show: boolean) => void;
}

const DesignResults = ({ setShowResults }: DesignResultsProps) => {
  const [selectedDesign, setSelectedDesign] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>("overview");
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  const handleShareClick = () => {
    toast.success("Link copied to clipboard!");
  };

  const handleDownloadClick = () => {
    toast.success("Design files downloaded!");
  };
  
  // Sample data for ROI comparison
  const roiComparisonData = [
    {
      name: 'Design A',
      roi: 18.5,
      fill: '#2C7A7B',
    },
    {
      name: 'Design B',
      roi: 16.8,
      fill: '#3182CE',
    },
    {
      name: 'Design C',
      roi: 15.2,
      fill: '#805AD5',
    },
    {
      name: 'Market Avg',
      roi: 12.5,
      fill: '#A0AEC0',
    },
  ];
  
  // Sample data for energy efficiency
  const energyEfficiencyData = [
    {
      name: 'Design A',
      efficiency: 85,
      fill: '#2C7A7B',
    },
    {
      name: 'Design B',
      efficiency: 78,
      fill: '#3182CE',
    },
    {
      name: 'Design C',
      efficiency: 82,
      fill: '#805AD5',
    },
    {
      name: 'Typical',
      efficiency: 65,
      fill: '#A0AEC0',
    },
  ];
  
  const designs = [
    {
      id: 1,
      name: "Modern Duplex",
      description: "Maximized rental income with optimal space utilization",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      confidenceScore: 92,
      constructionCost: 520000,
      estimatedValue: 750000,
      roi: 18.5,
      squareFeet: 2400,
      unitsCount: 2,
      energyScore: 85,
      keyFeatures: [
        "Optimal solar orientation for energy efficiency",
        "Flexible floor plan with potential for home office or rental unit",
        "High-efficiency HVAC system reduces operating costs",
        "Attractive modern facade increases curb appeal and value",
        "Open concept living spaces appeal to current market preferences",
        "Smart home technology integration"
      ]
    },
    {
      id: 2,
      name: "Contemporary Triplex",
      description: "Maximum units for highest rental income potential",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      confidenceScore: 87,
      constructionCost: 580000,
      estimatedValue: 820000,
      roi: 16.8,
      squareFeet: 2800,
      unitsCount: 3,
      energyScore: 78,
      keyFeatures: [
        "Three separate rental units maximize income",
        "Efficient layout minimizes common areas",
        "Modern aesthetics with low-maintenance materials",
        "Sound isolation between units increases tenant satisfaction",
        "Zoning-compliant design that maximizes allowable density",
        "Separate entrances for each unit"
      ]
    },
    {
      id: 3,
      name: "Sustainable Single-Family",
      description: "High-end design with premium sustainability features",
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      confidenceScore: 90,
      constructionCost: 490000,
      estimatedValue: 680000,
      roi: 15.2,
      squareFeet: 2200,
      unitsCount: 1,
      energyScore: 82,
      keyFeatures: [
        "Net-zero energy design with solar panel integration",
        "Rainwater harvesting and greywater recycling systems",
        "Premium finishes that appeal to high-end market",
        "Flexible spaces that adapt to changing family needs",
        "Indoor-outdoor living concept with multiple deck spaces",
        "EV charging station and energy storage capability"
      ]
    }
  ];
  
  const selectedDesignData = designs.find(d => d.id === selectedDesign) || designs[0];
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <button 
            onClick={() => setShowResults(false)}
            className="flex items-center text-gray-500 hover:text-realestate-teal mb-2"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Design Form</span>
          </button>
          <h1 className="text-2xl font-bold text-realestate-navy">AI-Generated Building Designs</h1>
          <p className="text-gray-500">123 Main Street, Austin, TX 78701</p>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="text-gray-600"
            onClick={handleShareClick}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button 
            variant="outline" 
            className="text-gray-600"
            onClick={handleDownloadClick}
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="relative">
              <img 
                src={selectedDesignData.image} 
                alt={`Design ${selectedDesign}`} 
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="bg-white/90 backdrop-blur-sm hover:bg-white"
                >
                  <Expand className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="bg-white/90 backdrop-blur-sm hover:bg-white"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-2 border border-gray-100">
                <div className="flex items-center gap-1 text-sm font-medium text-realestate-teal">
                  <Sparkles className="h-4 w-4" />
                  <span>AI Confidence Score: {selectedDesignData.confidenceScore}%</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-realestate-navy mb-2">
                {selectedDesignData.name}
              </h2>
              <p className="text-gray-600 mb-6">
                {selectedDesignData.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-500 mb-1">Construction Cost</div>
                  <div className="font-bold text-lg text-realestate-navy">
                    {formatCurrency(selectedDesignData.constructionCost)}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-500 mb-1">Estimated Value</div>
                  <div className="font-bold text-lg text-realestate-navy">
                    {formatCurrency(selectedDesignData.estimatedValue)}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-500 mb-1">ROI</div>
                  <div className="font-bold text-lg text-realestate-success">
                    +{selectedDesignData.roi}%
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-500 mb-1">Total Area</div>
                  <div className="font-bold text-lg text-realestate-navy">
                    {selectedDesignData.squareFeet.toLocaleString()} sq ft
                  </div>
                </div>
              </div>
              
              <div 
                className="border border-gray-100 rounded-lg cursor-pointer mb-4"
                onClick={() => toggleSection("overview")}
              >
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-2 font-medium text-realestate-navy">
                    <Home className="h-5 w-5 text-realestate-teal" />
                    <span>Design Overview</span>
                  </div>
                  {expandedSection === "overview" ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                {expandedSection === "overview" && (
                  <div className="px-4 pb-4 border-t border-gray-100 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-start gap-2">
                        <Building className="h-5 w-5 text-gray-400 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Number of Units</div>
                          <div className="font-medium">{selectedDesignData.unitsCount}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Ruler className="h-5 w-5 text-gray-400 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Average Unit Size</div>
                          <div className="font-medium">
                            {Math.round(selectedDesignData.squareFeet / selectedDesignData.unitsCount).toLocaleString()} sq ft
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Thermometer className="h-5 w-5 text-gray-400 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Energy Efficiency Score</div>
                          <div className="font-medium">{selectedDesignData.energyScore}/100</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <LineChart className="h-5 w-5 text-gray-400 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Market Demand</div>
                          <div className="font-medium">High</div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="font-medium text-realestate-navy mb-2">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedDesignData.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-realestate-teal mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div 
                className="border border-gray-100 rounded-lg cursor-pointer mb-4"
                onClick={() => toggleSection("analysis")}
              >
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-2 font-medium text-realestate-navy">
                    <LineChart className="h-5 w-5 text-realestate-teal" />
                    <span>Investment Analysis</span>
                  </div>
                  {expandedSection === "analysis" ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                {expandedSection === "analysis" && (
                  <div className="px-4 pb-4 border-t border-gray-100 pt-4">
                    <div className="mb-4">
                      <h3 className="font-medium text-realestate-navy mb-2">ROI Comparison</h3>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={roiComparisonData}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                            <XAxis dataKey="name" />
                            <YAxis 
                              label={{ 
                                value: 'ROI (%)', 
                                angle: -90, 
                                position: 'insideLeft',
                                style: { textAnchor: 'middle' }
                              }} 
                            />
                            <RechartsTooltip 
                              formatter={(value: number) => [`${value}%`, 'ROI']}
                            />
                            <Bar dataKey="roi" radius={[4, 4, 0, 0]}>
                              {roiComparisonData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                      <Info className="h-5 w-5 text-realestate-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-realestate-navy mb-1">Investment Insights</h4>
                        <p className="text-sm text-gray-600">
                          This design optimizes ROI through efficient space utilization and layout that appeals to the local rental market. The modern aesthetic and energy efficiency features command higher rents while reducing operating costs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div 
                className="border border-gray-100 rounded-lg cursor-pointer"
                onClick={() => toggleSection("sustainability")}
              >
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-2 font-medium text-realestate-navy">
                    <Thermometer className="h-5 w-5 text-realestate-teal" />
                    <span>Sustainability & Efficiency</span>
                  </div>
                  {expandedSection === "sustainability" ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                {expandedSection === "sustainability" && (
                  <div className="px-4 pb-4 border-t border-gray-100 pt-4">
                    <div className="mb-4">
                      <h3 className="font-medium text-realestate-navy mb-2">Energy Efficiency Comparison</h3>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={energyEfficiencyData}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                            <XAxis dataKey="name" />
                            <YAxis 
                              label={{ 
                                value: 'Efficiency Score', 
                                angle: -90, 
                                position: 'insideLeft',
                                style: { textAnchor: 'middle' }
                              }} 
                            />
                            <RechartsTooltip 
                              formatter={(value: number) => [`${value}/100`, 'Efficiency Score']}
                            />
                            <Bar dataKey="efficiency" radius={[4, 4, 0, 0]}>
                              {energyEfficiencyData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                      <Info className="h-5 w-5 text-realestate-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-realestate-navy mb-1">Sustainability Features</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-realestate-teal mt-0.5" />
                            <span>Southern exposure maximizes natural light and solar gain in winter</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-realestate-teal mt-0.5" />
                            <span>High-efficiency HVAC system reduces energy costs by ~30%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-realestate-teal mt-0.5" />
                            <span>Enhanced insulation package exceeds code requirements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-realestate-teal mt-0.5" />
                            <span>Roof designed for optimal solar panel installation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <Card className="shadow-md border border-gray-100 mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">All Design Options</CardTitle>
              <CardDescription>Compare alternative designs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {designs.map((design) => (
                  <div 
                    key={design.id} 
                    className={`border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200 ${
                      selectedDesign === design.id ? 'border-realestate-teal shadow-sm' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedDesign(design.id)}
                  >
                    <div className="relative">
                      <img 
                        src={design.image} 
                        alt={design.name} 
                        className="w-full h-32 object-cover"
                      />
                      {selectedDesign === design.id && (
                        <div className="absolute top-2 right-2 bg-realestate-teal rounded-full p-1">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-realestate-navy">{design.name}</h3>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-gray-500">{design.unitsCount} units</span>
                        <span className="text-sm font-medium text-realestate-success">+{design.roi}% ROI</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border border-gray-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Request Modifications</CardTitle>
              <CardDescription>Customize your selected design</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-gray-50 rounded-lg mb-4">
                <h3 className="font-medium text-realestate-navy mb-1">Suggested Modifications</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-realestate-teal mt-0.5" />
                    <span className="text-sm text-gray-600">Add covered patio to increase living space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-realestate-teal mt-0.5" />
                    <span className="text-sm text-gray-600">Convert garage to ADU for additional rental income</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-realestate-teal mt-0.5" />
                    <span className="text-sm text-gray-600">Upgrade interior finishes for premium market</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-2 mb-4">
                <Button className="flex-1 bg-realestate-teal hover:bg-realestate-navy text-sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Modify Design
                </Button>
                <Button variant="outline" className="flex-1 text-sm">
                  <Send className="h-4 w-4 mr-2" />
                  Request Custom
                </Button>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <Button 
                  variant="outline" 
                  className="text-gray-600"
                  onClick={handleDownloadClick}
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download Plans
                </Button>
                
                <Button className="bg-white text-realestate-teal border-realestate-teal hover:bg-realestate-teal hover:text-white">
                  Proceed <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DesignResults;
