
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Info,
  PieChart,
  Maximize2,
  Clock
} from "lucide-react";

const ROIHeatmap = () => {
  const [viewType, setViewType] = useState("heatmap");
  const [timeframe, setTimeframe] = useState("5yr");
  const [floor, setFloor] = useState(1);
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-realestate-navy">ROI Visualization Tool</h3>
          <p className="text-sm text-gray-600 mt-1">
            Visual analysis of return on investment across property areas and features
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1yr">1 Year</SelectItem>
              <SelectItem value="3yr">3 Years</SelectItem>
              <SelectItem value="5yr">5 Years</SelectItem>
              <SelectItem value="10yr">10 Years</SelectItem>
            </SelectContent>
          </Select>
          
          <Tabs value={viewType} onValueChange={setViewType} className="w-[220px]">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
              <TabsTrigger value="feature">Features</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="rounded-xl overflow-hidden border border-gray-200">
        <div className="bg-gray-100 p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Floor:</span>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8 px-2" 
                onClick={() => setFloor(Math.max(1, floor - 1))}
                disabled={floor === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{floor}</span>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8 px-2"
                onClick={() => setFloor(Math.min(3, floor + 1))}
                disabled={floor === 3}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">ROI Scale:</span>
            <div className="flex items-center h-5">
              <div className="w-16 h-full bg-gradient-to-r from-blue-200 via-green-300 to-green-500 rounded-sm"></div>
              <div className="flex justify-between text-xs w-16 px-1">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white">
          <TabsContent value="heatmap" className="mt-0">
            <div className="relative">
              <img 
                src="https://placehold.co/800x500/e2e8f0/475569?text=Floor+Plan+Heatmap" 
                alt="ROI Heatmap" 
                className="w-full h-auto rounded-md"
              />
              
              {/* Interactive hotspots */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="absolute top-[25%] left-[30%] w-12 h-12 rounded-full bg-green-500/40 cursor-pointer border-2 border-white flex items-center justify-center animate-pulse">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="w-64">
                    <div className="p-2">
                      <div className="font-medium">Kitchen Upgrades</div>
                      <div className="text-sm text-gray-600 mt-1">Premium appliances and finishes</div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm">ROI:</span>
                        <Badge className="bg-green-500">210%</Badge>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="absolute top-[45%] left-[60%] w-12 h-12 rounded-full bg-green-300/40 cursor-pointer border-2 border-white flex items-center justify-center animate-pulse">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="w-64">
                    <div className="p-2">
                      <div className="font-medium">Master Bathroom</div>
                      <div className="text-sm text-gray-600 mt-1">Luxury fixtures and spa features</div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm">ROI:</span>
                        <Badge className="bg-green-300 text-green-800">165%</Badge>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="absolute top-[70%] left-[45%] w-12 h-12 rounded-full bg-blue-300/40 cursor-pointer border-2 border-white flex items-center justify-center animate-pulse">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="w-64">
                    <div className="p-2">
                      <div className="font-medium">Secondary Bedroom</div>
                      <div className="text-sm text-gray-600 mt-1">Standard finishes and fixtures</div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm">ROI:</span>
                        <Badge className="bg-blue-300 text-blue-800">110%</Badge>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-md border border-gray-200 text-xs text-gray-600">
                Interactive Model - Click on hotspots to see ROI details
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="feature" className="mt-0">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Feature ROI Analysis</CardTitle>
                <CardDescription>
                  Return on investment for various property features and amenities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Maximize2 className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Open Floor Plan</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-500">320%</Badge>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs w-56">
                                Converting to open concept living spaces yields the highest ROI for this property type in this location.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Premium Kitchen</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-500">210%</Badge>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs w-56">
                                High-end appliances and premium countertops consistently return more than double their cost.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <PieChart className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Smart Home Technology</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-400 text-green-800">175%</Badge>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs w-56">
                                Integrated smart home systems are increasingly valued by buyers in this market segment.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Energy Efficient Features</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-400 text-blue-800">140%</Badge>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs w-56">
                                Energy efficiency upgrades deliver strong returns and enhance marketability, especially to eco-conscious buyers.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 rounded-full" style={{ width: '52%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <Info className="h-4 w-4 text-realestate-teal" />
                    Feature Recommendation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Based on the {timeframe} ROI analysis, prioritize open floor plan conversions and kitchen upgrades for maximum return. Smart home technology continues to show increased demand and ROI potential.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </div>
    </div>
  );
};

export default ROIHeatmap;
