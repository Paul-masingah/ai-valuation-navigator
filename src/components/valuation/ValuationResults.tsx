
import { useState } from "react";
import { 
  AlertCircle,
  ArrowLeft, 
  BarChart3, 
  Building, 
  Calendar, 
  CircleDollarSign, 
  Download, 
  Home, 
  Info, 
  LineChart, 
  Map as MapIcon, 
  Ruler, 
  Share2, 
  TrendingUp 
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { toast } from "sonner";

interface ValuationResultsProps {
  setShowResults: (show: boolean) => void;
}

const ValuationResults = ({ setShowResults }: ValuationResultsProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Sample data - in a real app, this would come from your AI backend
  const propertyDetails = {
    address: "123 Main Street, Austin, TX 78701",
    estimatedValue: 750000,
    valueRange: {
      low: 720000,
      high: 780000
    },
    confidence: 94,
    lastUpdated: "June 15, 2023",
    propertyType: "Single Family Home",
    yearBuilt: 2010,
    squareFeet: 2400,
    bedrooms: 4,
    bathrooms: 2.5,
    lotSize: 7500,
    pricePerSqFt: 312.5,
    propertyTax: 8400,
    hoa: 0,
    zoning: "Residential (R-1)",
    investmentGrade: "A",
    roi: {
      oneYear: 7.2,
      threeYear: 18.5,
      fiveYear: 32.1
    }
  };
  
  const valuationFactors = [
    { name: "Location", value: 35, color: "#2C7A7B" },
    { name: "Property Size", value: 25, color: "#38B2AC" },
    { name: "Age & Condition", value: 15, color: "#4FD1C5" },
    { name: "Market Trends", value: 15, color: "#81E6D9" },
    { name: "Amenities", value: 10, color: "#B2F5EA" }
  ];
  
  const historicalData = [
    { month: 'Jan', value: 695000 },
    { month: 'Feb', value: 705000 },
    { month: 'Mar', value: 710000 },
    { month: 'Apr', value: 720000 },
    { month: 'May', value: 735000 },
    { month: 'Jun', value: 750000 },
    { month: 'Jul', value: 765000 },
    { month: 'Aug', value: 780000 },
    { month: 'Sep', value: 790000 },
    { month: 'Oct', value: 795000 },
    { month: 'Nov', value: 805000 },
    { month: 'Dec', value: 820000 },
  ];
  
  const projectionData = [
    { year: '2023', value: 750000 },
    { year: '2024', value: 780000 },
    { year: '2025', value: 819000 },
    { year: '2026', value: 859950 },
    { year: '2027', value: 902948 },
  ];
  
  const comparableProperties = [
    { 
      address: "456 Park Ave", 
      price: 735000, 
      sqft: 2350, 
      beds: 4, 
      baths: 2, 
      distanceInMiles: 0.5,
      daysAgo: 30
    },
    { 
      address: "789 Oak St", 
      price: 765000, 
      sqft: 2500, 
      beds: 4, 
      baths: 3, 
      distanceInMiles: 0.8,
      daysAgo: 15
    },
    { 
      address: "234 Elm Dr", 
      price: 720000, 
      sqft: 2200, 
      beds: 3, 
      baths: 2.5, 
      distanceInMiles: 1.2,
      daysAgo: 45
    }
  ];

  const handleShareClick = () => {
    toast.success("Link copied to clipboard!");
  };

  const handleDownloadClick = () => {
    toast.success("Valuation report downloaded!");
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <button 
            onClick={() => setShowResults(false)}
            className="flex items-center text-gray-500 hover:text-realestate-teal mb-2"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Valuation Form</span>
          </button>
          <h1 className="text-2xl font-bold text-realestate-navy">{propertyDetails.address}</h1>
          <p className="text-gray-500">Valuation Report | Last Updated: {propertyDetails.lastUpdated}</p>
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
            Download PDF
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-2 shadow-md border border-gray-100">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl flex items-center">
              <CircleDollarSign className="h-5 w-5 text-realestate-teal mr-2" />
              AI Estimated Property Value
            </CardTitle>
            <CardDescription>
              Based on our advanced machine learning model
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-realestate-navy mb-2">
                {formatCurrency(propertyDetails.estimatedValue)}
              </div>
              <div className="text-gray-500 mb-4">
                Estimated Range: {formatCurrency(propertyDetails.valueRange.low)} - {formatCurrency(propertyDetails.valueRange.high)}
              </div>
              <div className="flex items-center bg-realestate-teal/10 px-3 py-1 rounded-full">
                <AlertCircle className="h-4 w-4 text-realestate-teal mr-1" />
                <span className="text-sm font-medium text-realestate-teal">
                  {propertyDetails.confidence}% Confidence Score
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-md border border-gray-100">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl flex items-center">
              <TrendingUp className="h-5 w-5 text-realestate-teal mr-2" />
              Investment Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500">Price per sq ft</span>
                  <span className="font-medium">${propertyDetails.pricePerSqFt}</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500">Annual property tax</span>
                  <span className="font-medium">{formatCurrency(propertyDetails.propertyTax)}</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500">Investment grade</span>
                  <span className="font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    {propertyDetails.investmentGrade}
                  </span>
                </div>
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500">1 Year ROI</span>
                  <span className="font-medium text-realestate-success">+{propertyDetails.roi.oneYear}%</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500">3 Year ROI</span>
                  <span className="font-medium text-realestate-success">+{propertyDetails.roi.threeYear}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">5 Year ROI</span>
                  <span className="font-medium text-realestate-success">+{propertyDetails.roi.fiveYear}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs 
        defaultValue="overview" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="bg-white rounded-xl shadow-md border border-gray-100 p-1"
      >
        <TabsList className="grid grid-cols-4 mb-6 bg-gray-100">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white">
            Overview
          </TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-white">
            Value History
          </TabsTrigger>
          <TabsTrigger value="factors" className="data-[state=active]:bg-white">
            Valuation Factors
          </TabsTrigger>
          <TabsTrigger value="comparables" className="data-[state=active]:bg-white">
            Comparables
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="p-6 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-realestate-navy">
                Property Details
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Home className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Property Type</div>
                    <div className="font-medium">{propertyDetails.propertyType}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Year Built</div>
                    <div className="font-medium">{propertyDetails.yearBuilt}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Ruler className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Square Feet</div>
                    <div className="font-medium">{propertyDetails.squareFeet.toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Building className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Bedrooms</div>
                    <div className="font-medium">{propertyDetails.bedrooms}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Building className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Bathrooms</div>
                    <div className="font-medium">{propertyDetails.bathrooms}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapIcon className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Lot Size</div>
                    <div className="font-medium">{propertyDetails.lotSize.toLocaleString()} sq ft</div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mt-8 mb-4 text-realestate-navy">
                Value Projection (5 Years)
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={projectionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                    />
                    <RechartsTooltip 
                      formatter={(value: number) => [`$${value.toLocaleString()}`, 'Projected Value']}
                      labelFormatter={(label) => `Year: ${label}`}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#2C7A7B" 
                      fill="url(#colorValue)" 
                      strokeWidth={2}
                    />
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2C7A7B" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#2C7A7B" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-realestate-navy">
                AI Insights
              </h3>
              <div className="space-y-4">
                <div className="bg-realestate-teal/5 p-4 rounded-lg border border-realestate-teal/20">
                  <div className="flex items-start gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-realestate-teal mt-0.5" />
                    <h4 className="font-medium text-realestate-navy">Market Trend Analysis</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The property is located in a rapidly appreciating neighborhood with a projected annual growth rate of 5.2%, higher than the city average of 3.8%.
                  </p>
                </div>
                
                <div className="bg-realestate-teal/5 p-4 rounded-lg border border-realestate-teal/20">
                  <div className="flex items-start gap-2 mb-2">
                    <BarChart3 className="h-5 w-5 text-realestate-teal mt-0.5" />
                    <h4 className="font-medium text-realestate-navy">Competitive Position</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    This property offers 8% more square footage than similar homes in the area, positioning it favorably for both rental yield and resale value.
                  </p>
                </div>
                
                <div className="bg-realestate-teal/5 p-4 rounded-lg border border-realestate-teal/20">
                  <div className="flex items-start gap-2 mb-2">
                    <Building className="h-5 w-5 text-realestate-teal mt-0.5" />
                    <h4 className="font-medium text-realestate-navy">Investment Recommendation</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    With an A investment grade and strong projected ROI, this property represents an excellent long-term investment opportunity with above-average appreciation potential.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mt-6 flex items-start gap-3">
                  <Info className="h-5 w-5 text-realestate-teal flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Our AI valuation model analyzes over 200 data points including recent sales, property condition, neighborhood quality, school ratings, and economic trends to provide this assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="p-6 pt-0">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-realestate-navy">
              Historical Value Trends (12 Months)
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    domain={[650000, 850000]}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <RechartsTooltip 
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Property Value']}
                  />
                  <defs>
                    <linearGradient id="colorLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor="#1A365D" stopOpacity={1}/>
                      <stop offset="95%" stopColor="#2C7A7B" stopOpacity={1}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="url(#colorLine)" 
                    fill="url(#colorGradient)" 
                    strokeWidth={3}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2C7A7B" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#2C7A7B" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-realestate-teal flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-realestate-navy mb-1">Historical Value Analysis</h4>
                <p className="text-sm text-gray-600">
                  This property has shown consistent appreciation over the past 12 months, with a total increase of 17.99% ($125,000). This outperforms the neighborhood average of 12.5% and the city-wide average of 10.2% during the same period.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="factors" className="p-6 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-realestate-navy">
                Value Influence Factors
              </h3>
              <p className="text-gray-600 mb-6">
                Our AI model calculates property value based on these key factors, weighted by their importance in this specific market.
              </p>
              
              <div className="space-y-4">
                {valuationFactors.map((factor, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700">{factor.name}</span>
                      <span className="font-medium">{factor.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full" 
                        style={{ 
                          width: `${factor.value}%`, 
                          backgroundColor: factor.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-realestate-navy">
                Valuation Factor Breakdown
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={valuationFactors}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {valuationFactors.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip 
                      formatter={(value: number) => [`${value}%`, 'Influence']}
                      labelFormatter={(_, data) => data[0].payload.name}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-realestate-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-realestate-navy mb-1">Location Quality Score: A+</h4>
                    <p className="text-sm text-gray-600">
                      Location is the strongest factor for this property, with excellent school districts, low crime rates, and proximity to employment centers all contributing to its high valuation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="comparables" className="p-6 pt-0">
          <h3 className="text-lg font-semibold mb-4 text-realestate-navy">
            Comparable Properties
          </h3>
          <p className="text-gray-600 mb-6">
            These recently sold properties were used by our AI model to help determine the valuation of your property.
          </p>
          
          <div className="space-y-4">
            {comparableProperties.map((property, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-realestate-navy mb-1">{property.address}</h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        <span>{property.beds} bd</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        <span>{property.baths} ba</span>
                      </div>
                      <div className="flex items-center">
                        <Ruler className="h-4 w-4 mr-1" />
                        <span>{property.sqft.toLocaleString()} sq ft</span>
                      </div>
                      <div className="flex items-center">
                        <MapIcon className="h-4 w-4 mr-1" />
                        <span>{property.distanceInMiles} miles away</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Sold {property.daysAgo} days ago</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xl font-bold text-realestate-navy">
                    {formatCurrency(property.price)}
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Price per sq ft: <span className="font-medium">${Math.round(property.price / property.sqft)}</span>
                  </span>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1 text-sm text-realestate-teal cursor-help">
                          <Info className="h-4 w-4" />
                          <span>Similarity score: 92%</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs max-w-xs">
                          This property has similar characteristics to yours. The AI model considers factors like location, size, age, condition, and features when determining similarity.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-realestate-teal flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-realestate-navy mb-1">Comparable Property Analysis</h4>
                <p className="text-sm text-gray-600">
                  Your property's estimated value is 2.3% higher than the average of comparable properties due to its larger lot size and updated interior features. The AI model has adjusted for these differences in the final valuation.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ValuationResults;
