
import {
  ArrowRight,
  BarChart4,
  Building,
  Calendar,
  CircleDollarSign,
  Clock,
  Download,
  Filter,
  LineChart,
  MapPin,
  Plus,
  RefreshCw,
  Ruler,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const recentProperties = [
  {
    address: "123 Main Street, Austin, TX 78701",
    type: "Single Family",
    value: 750000,
    change: 5.2,
    lastUpdated: "2 days ago",
  },
  {
    address: "456 Park Avenue, Austin, TX 78704",
    type: "Townhouse",
    value: 550000,
    change: 3.8,
    lastUpdated: "1 week ago",
  },
  {
    address: "789 Oak Street, Austin, TX 78745",
    type: "Multi-family",
    value: 1250000,
    change: -1.2,
    lastUpdated: "3 days ago",
  },
  {
    address: "101 Pine Drive, Austin, TX 78702",
    type: "Condo",
    value: 420000,
    change: 2.5,
    lastUpdated: "5 days ago",
  }
];

const portfolioData = [
  { month: 'Jan', value: 2500000 },
  { month: 'Feb', value: 2530000 },
  { month: 'Mar', value: 2580000 },
  { month: 'Apr', value: 2650000 },
  { month: 'May', value: 2720000 },
  { month: 'Jun', value: 2800000 },
  { month: 'Jul', value: 2950000 },
  { month: 'Aug', value: 3050000 },
  { month: 'Sep', value: 3100000 },
  { month: 'Oct', value: 3180000 },
  { month: 'Nov', value: 3250000 },
  { month: 'Dec', value: 3320000 },
];

const propertyTypeData = [
  {
    name: 'Single Family',
    value: 45,
    fill: '#2C7A7B',
  },
  {
    name: 'Multi-family',
    value: 30,
    fill: '#38B2AC',
  },
  {
    name: 'Condo',
    value: 15,
    fill: '#4FD1C5',
  },
  {
    name: 'Townhouse',
    value: 10,
    fill: '#81E6D9',
  },
];

const marketTrendsData = [
  {
    month: 'Jan',
    'Austin': 3.2,
    'Dallas': 2.8,
    'Houston': 2.1,
  },
  {
    month: 'Feb',
    'Austin': 3.5,
    'Dallas': 2.9,
    'Houston': 2.3,
  },
  {
    month: 'Mar',
    'Austin': 3.6,
    'Dallas': 3.0,
    'Houston': 2.5,
  },
  {
    month: 'Apr',
    'Austin': 3.9,
    'Dallas': 3.2,
    'Houston': 2.6,
  },
  {
    month: 'May',
    'Austin': 4.2,
    'Dallas': 3.3,
    'Houston': 2.8,
  },
  {
    month: 'Jun',
    'Austin': 4.5,
    'Dallas': 3.5,
    'Houston': 2.9,
  },
];

const InvestmentDashboard = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-realestate-navy mb-2">Investment Dashboard</h1>
          <p className="text-gray-500">Monitor your real estate portfolio and market trends</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search properties..." 
              className="pl-10 w-full sm:w-64"
            />
          </div>
          <Button className="bg-realestate-teal hover:bg-realestate-navy">
            <Plus className="h-4 w-4 mr-2" />
            Add Property
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="stats-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 mb-1">Total Portfolio Value</p>
              <p className="text-2xl font-bold text-realestate-navy">$3.32M</p>
              <div className="flex items-center mt-1">
                <div className="text-realestate-success flex items-center text-sm font-medium">
                  <ArrowRight className="h-3 w-3 mr-1 rotate-45" />
                  <span>+12.4%</span>
                </div>
                <span className="text-xs text-gray-500 ml-2">since last year</span>
              </div>
            </div>
            <div className="bg-realestate-teal/10 p-3 rounded-lg">
              <CircleDollarSign className="h-6 w-6 text-realestate-teal" />
            </div>
          </div>
        </Card>
        
        <Card className="stats-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 mb-1">Properties</p>
              <p className="text-2xl font-bold text-realestate-navy">12</p>
              <div className="flex items-center mt-1">
                <div className="text-realestate-success flex items-center text-sm font-medium">
                  <ArrowRight className="h-3 w-3 mr-1 rotate-45" />
                  <span>+2</span>
                </div>
                <span className="text-xs text-gray-500 ml-2">new this quarter</span>
              </div>
            </div>
            <div className="bg-realestate-teal/10 p-3 rounded-lg">
              <Building className="h-6 w-6 text-realestate-teal" />
            </div>
          </div>
        </Card>
        
        <Card className="stats-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 mb-1">Average ROI</p>
              <p className="text-2xl font-bold text-realestate-navy">18.3%</p>
              <div className="flex items-center mt-1">
                <div className="text-realestate-success flex items-center text-sm font-medium">
                  <ArrowRight className="h-3 w-3 mr-1 rotate-45" />
                  <span>+2.7%</span>
                </div>
                <span className="text-xs text-gray-500 ml-2">vs. market avg</span>
              </div>
            </div>
            <div className="bg-realestate-teal/10 p-3 rounded-lg">
              <LineChart className="h-6 w-6 text-realestate-teal" />
            </div>
          </div>
        </Card>
        
        <Card className="stats-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 mb-1">Latest Opportunity</p>
              <p className="text-lg font-bold text-realestate-navy">Downtown Austin</p>
              <div className="flex items-center mt-1">
                <div className="text-realestate-success flex items-center text-sm font-medium">
                  <span>92%</span>
                </div>
                <span className="text-xs text-gray-500 ml-2">confidence score</span>
              </div>
            </div>
            <div className="bg-realestate-teal/10 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-realestate-teal" />
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2 shadow-md border border-gray-100">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Portfolio Performance</CardTitle>
                <CardDescription>12-month valuation trend</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="12m">
                  <SelectTrigger className="w-[100px] h-8 text-xs">
                    <SelectValue placeholder="Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3m">3 months</SelectItem>
                    <SelectItem value="6m">6 months</SelectItem>
                    <SelectItem value="12m">12 months</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={portfolioData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                  />
                  <RechartsTooltip 
                    formatter={(value: number) => [`${formatCurrency(value)}`, 'Portfolio Value']}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2C7A7B" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2C7A7B" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#2C7A7B" 
                    fill="url(#colorGradient)" 
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="text-gray-500">
                <span className="font-medium text-realestate-navy">
                  {formatCurrency(portfolioData[0].value)}
                </span> → <span className="font-medium text-realestate-navy">
                  {formatCurrency(portfolioData[portfolioData.length - 1].value)}
                </span>
              </div>
              <div className="text-realestate-success font-medium">
                +32.8% growth
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-md border border-gray-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Portfolio Composition</CardTitle>
            <CardDescription>By property type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={propertyTypeData}
                  layout="vertical"
                  barSize={40}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" horizontal={true} vertical={false} />
                  <XAxis type="number" tick={{ fontSize: 12 }} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fontSize: 12 }} 
                    width={100}
                  />
                  <RechartsTooltip 
                    formatter={(value: number) => [`${value}%`, 'Portfolio Share']}
                  />
                  <Bar 
                    dataKey="value" 
                    radius={[0, 4, 4, 0]}
                  >
                    {propertyTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Total Units</p>
                <p className="text-lg font-bold text-realestate-navy">32</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Avg. Size</p>
                <p className="text-lg font-bold text-realestate-navy">2,350 sq ft</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="shadow-md border border-gray-100">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Recent Properties</CardTitle>
              <Button variant="link" className="text-realestate-teal p-0 h-auto">
                View all <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProperties.map((property, index) => (
                <div 
                  key={index} 
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-realestate-navy line-clamp-1">{property.address}</p>
                      <div className="flex items-center mt-1">
                        <Building className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">{property.type}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-realestate-navy">{formatCurrency(property.value)}</p>
                      <div className={`flex items-center mt-1 text-sm font-medium ${
                        property.change >= 0 ? 'text-realestate-success' : 'text-realestate-danger'
                      }`}>
                        <ArrowRight className={`h-3 w-3 mr-1 ${
                          property.change >= 0 ? 'rotate-45' : 'rotate-135'
                        }`} />
                        <span>{property.change >= 0 ? '+' : ''}{property.change}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>Updated {property.lastUpdated}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2 shadow-md border border-gray-100">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Market Trends</CardTitle>
                <CardDescription>Appreciation rates by city</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Select defaultValue="6m">
                  <SelectTrigger className="w-[100px] h-8 text-xs">
                    <SelectValue placeholder="Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3m">3 months</SelectItem>
                    <SelectItem value="6m">6 months</SelectItem>
                    <SelectItem value="12m">12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <RechartsTooltip 
                    formatter={(value: number) => [`${value}%`, 'Appreciation']}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="Austin" 
                    stroke="#2C7A7B" 
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="Dallas" 
                    stroke="#3182CE" 
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="Houston" 
                    stroke="#805AD5" 
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-realestate-teal rounded-full mr-2"></div>
                  <span className="text-gray-600">Austin: <span className="font-medium text-realestate-navy">+4.5%</span></span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-[#3182CE] rounded-full mr-2"></div>
                  <span className="text-gray-600">Dallas: <span className="font-medium text-realestate-navy">+3.5%</span></span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-[#805AD5] rounded-full mr-2"></div>
                  <span className="text-gray-600">Houston: <span className="font-medium text-realestate-navy">+2.9%</span></span>
                </div>
              </div>
              <div className="text-xs text-gray-500 flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                <span>Last updated: 15 Jul 2023</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="shadow-md border border-gray-100 mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">AI-Recommended Investment Opportunities</CardTitle>
          <CardDescription>Based on your investment profile and current market conditions</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="properties" className="mt-4">
            <TabsList className="mb-4">
              <TabsTrigger value="properties">Properties</TabsTrigger>
              <TabsTrigger value="markets">Hot Markets</TabsTrigger>
              <TabsTrigger value="strategies">Investment Strategies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="properties">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="h-40 bg-gray-200 relative">
                      <img 
                        src={`https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80`} 
                        alt="Property" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-white text-realestate-success text-xs font-medium px-2 py-1 rounded-full">
                        95% Match
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-realestate-navy mb-1">Luxury Townhouse in South Congress</h3>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Austin, TX 78704</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Building className="h-3 w-3 mr-1" />
                          <span>3 bd</span>
                        </div>
                        <div className="flex items-center">
                          <Building className="h-3 w-3 mr-1" />
                          <span>2.5 ba</span>
                        </div>
                        <div className="flex items-center">
                          <Ruler className="h-3 w-3 mr-1" />
                          <span>2,100 sq ft</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                        <div className="text-xl font-bold text-realestate-navy">$685,000</div>
                        <div className="text-realestate-success text-sm font-medium">+18.3% ROI</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="markets">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { city: "East Austin", growth: "+6.7%", score: 92, properties: 14 },
                  { city: "Cedar Park", growth: "+5.2%", score: 87, properties: 28 },
                  { city: "Round Rock", growth: "+4.9%", score: 85, properties: 17 }
                ].map((market, index) => (
                  <div 
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-realestate-navy">{market.city}</h3>
                      <div className="bg-realestate-teal/10 text-realestate-teal text-sm font-medium px-2 py-1 rounded-full">
                        {market.score}/100
                      </div>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Annual growth</span>
                          <span className="font-medium text-realestate-success">{market.growth}</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-realestate-success w-2/3 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Affordability</span>
                          <span className="font-medium text-amber-500">Medium</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 w-1/2 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Job Growth</span>
                          <span className="font-medium text-realestate-success">High</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-realestate-success w-3/4 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm text-gray-500">{market.properties} available properties</span>
                      <Button variant="link" className="text-realestate-teal p-0 h-auto">
                        Explore <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="strategies">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { 
                    title: "Value-Add Multifamily", 
                    description: "Purchase underperforming multifamily properties and increase value through renovations and improved management.",
                    returnRange: "18-25%",
                    riskLevel: "Medium", 
                    timeframe: "3-5 years" 
                  },
                  { 
                    title: "Short-Term Rental", 
                    description: "Invest in properties in high-traffic tourist areas to leverage the growing short-term rental market.",
                    returnRange: "20-30%",
                    riskLevel: "Medium-High", 
                    timeframe: "1-3 years" 
                  },
                  { 
                    title: "New Development", 
                    description: "Partner with developers on new construction projects in rapidly growing neighborhoods.",
                    returnRange: "25-40%",
                    riskLevel: "High", 
                    timeframe: "2-4 years" 
                  },
                ].map((strategy, index) => (
                  <div 
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 p-4"
                  >
                    <h3 className="font-semibold text-realestate-navy mb-2">{strategy.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 h-24 overflow-hidden">
                      {strategy.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Expected Returns:</span>
                        <span className="font-medium text-realestate-navy">{strategy.returnRange}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Risk Level:</span>
                        <span className="font-medium text-realestate-navy">{strategy.riskLevel}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Timeframe:</span>
                        <span className="font-medium text-realestate-navy">{strategy.timeframe}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-realestate-teal hover:bg-realestate-navy">
                      View Strategy Details
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestmentDashboard;
