
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer } from "@/components/ui/chart";
import PropertyTrendAnalysis from "./PropertyTrendAnalysis";
import ZoningOptimizer from "./ZoningOptimizer";
import ROIHeatmap from "./ROIHeatmap";
import { Building, TrendingUp, Zap } from "lucide-react";

const AnalyticsDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("trends");

  return (
    <div className="container mx-auto px-4">
      <Tabs 
        defaultValue="trends" 
        className="w-full"
        onValueChange={(value) => setSelectedTab(value)}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-realestate-navy mb-4 md:mb-0">
            Advanced Analytics Tools
          </h2>
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="trends" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Market Trends</span>
            </TabsTrigger>
            <TabsTrigger value="zoning" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span className="hidden sm:inline">Zoning Optimizer</span>
            </TabsTrigger>
            <TabsTrigger value="roi" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">ROI Heatmap</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mb-8">
          <TabsContent value="trends" className="animate-fade-in">
            <PropertyTrendAnalysis />
          </TabsContent>
          
          <TabsContent value="zoning" className="animate-fade-in">
            <ZoningOptimizer />
          </TabsContent>
          
          <TabsContent value="roi" className="animate-fade-in">
            <ROIHeatmap />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default AnalyticsDashboard;
