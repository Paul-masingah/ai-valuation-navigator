
import { useState } from "react";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { DollarSign, Users, BarChart2, TrendingUp } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const marketTrendData = [
  { month: 'Jan', price: 500000, demand: 85, supply: 120 },
  { month: 'Feb', price: 510000, demand: 82, supply: 115 },
  { month: 'Mar', price: 505000, demand: 88, supply: 110 },
  { month: 'Apr', price: 515000, demand: 90, supply: 105 },
  { month: 'May', price: 525000, demand: 95, supply: 100 },
  { month: 'Jun', price: 535000, demand: 98, supply: 95 },
  { month: 'Jul', price: 545000, demand: 100, supply: 90 },
  { month: 'Aug', price: 550000, demand: 102, supply: 85 },
  { month: 'Sep', price: 560000, demand: 105, supply: 80 },
  { month: 'Oct', price: 570000, demand: 108, supply: 75 },
  { month: 'Nov', price: 580000, demand: 110, supply: 70 },
  { month: 'Dec', price: 590000, demand: 115, supply: 65 },
];

const socioData = [
  { name: 'Family Size', value: 3.2, change: +0.2 },
  { name: 'Median Age', value: 35, change: -1.5 },
  { name: 'Income Level', value: 85000, change: +5000 },
  { name: 'Education (Yrs)', value: 16.2, change: +0.4 },
  { name: 'Work from Home %', value: 28, change: +12 },
];

const PropertyTrendAnalysis = () => {
  const [timeframe, setTimeframe] = useState("12m");
  const [metric, setMetric] = useState("price");

  const chartConfig = {
    price: { color: "#2C7A7B", label: "Property Price ($)" },
    demand: { color: "#3182CE", label: "Demand Index" },
    supply: { color: "#DD6B20", label: "Supply Index" },
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold text-realestate-navy">Property Market Trends Analysis</h3>
        <div className="flex items-center gap-4">
          <Select value={metric} onValueChange={setMetric}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Price Trends</SelectItem>
              <SelectItem value="demand">Demand Index</SelectItem>
              <SelectItem value="supply">Supply Index</SelectItem>
            </SelectContent>
          </Select>
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3m">3 Months</SelectItem>
              <SelectItem value="6m">6 Months</SelectItem>
              <SelectItem value="12m">12 Months</SelectItem>
              <SelectItem value="24m">24 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-realestate-teal" />
              Market Price Trends
            </CardTitle>
            <CardDescription>
              Property values and market dynamics over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketTrendData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" />
                  <YAxis 
                    domain={['auto', 'auto']}
                    tickFormatter={(value) => metric === 'price' ? `$${(value/1000)}k` : value.toString()}
                  />
                  <Tooltip 
                    formatter={(value) => metric === 'price' ? `$${value.toLocaleString()}` : value}
                    labelFormatter={(label) => `${label} 2023`}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey={metric}
                    stroke={chartConfig[metric as keyof typeof chartConfig].color}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 8 }}
                    name={chartConfig[metric as keyof typeof chartConfig].label}
                    animationDuration={1500}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Users className="h-5 w-5 text-realestate-teal" />
              Socio-Demographic Trends
            </CardTitle>
            <CardDescription>
              Key demographic shifts affecting housing demand
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={socioData} margin={{ top: 20, right: 5, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis hide />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="value" 
                    fill="#4FD1C5" 
                    name="Current Value"
                    animationDuration={1500}
                    isAnimationActive={true}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-realestate-teal" />
            Supply & Demand Balance
          </CardTitle>
          <CardDescription>
            The relationship between property supply and buyer demand
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketTrendData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" stroke="#3182CE" />
                <YAxis yAxisId="right" orientation="right" stroke="#DD6B20" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="demand"
                  stroke="#3182CE"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 8 }}
                  name="Demand Index"
                  animationDuration={1500}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="supply"
                  stroke="#DD6B20"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 8 }}
                  name="Supply Index"
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-medium text-realestate-navy mb-2">Analysis Insights:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          <li>Property values have increased by <span className="font-semibold text-green-600">18%</span> over the past 12 months</li>
          <li>Supply has decreased by <span className="font-semibold text-red-600">45%</span> while demand increased by <span className="font-semibold text-green-600">35%</span></li>
          <li>The increase in work-from-home percentage is driving demand for larger properties</li>
          <li>Current market conditions favor sellers with limited inventory and strong demand</li>
        </ul>
      </div>
    </div>
  );
};

export default PropertyTrendAnalysis;
