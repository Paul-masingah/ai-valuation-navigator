
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Home, 
  Hotel, 
  LayoutGrid, 
  Maximize, 
  DollarSign, 
  Sparkles,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import DashboardMetricCard from "../dashboard/DashboardMetricCard";

const ZoningOptimizer = () => {
  const [propertyType, setPropertyType] = useState("residential");
  const [lotSize, setLotSize] = useState(5000);
  const [floorArea, setFloorArea] = useState(0.6);
  const [height, setHeight] = useState(35);
  const [unitCount, setUnitCount] = useState(4);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<boolean>(false);

  const handleAnalyze = () => {
    setAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setAnalyzing(false);
      setResults(true);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="w-full md:w-2/3 space-y-6">
          <h3 className="text-xl font-bold text-realestate-navy">Property Zoning Optimizer</h3>
          <p className="text-gray-600">
            Analyze zoning regulations and optimize your property development for maximum value and compliance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Property Type</Label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">
                    <div className="flex items-center">
                      <Home className="mr-2 h-4 w-4" />
                      <span>Residential</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="commercial">
                    <div className="flex items-center">
                      <Building className="mr-2 h-4 w-4" />
                      <span>Commercial</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="mixed">
                    <div className="flex items-center">
                      <LayoutGrid className="mr-2 h-4 w-4" />
                      <span>Mixed Use</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="hospitality">
                    <div className="flex items-center">
                      <Hotel className="mr-2 h-4 w-4" />
                      <span>Hospitality</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Property Address</Label>
              <Input placeholder="Enter property address" className="border-gray-300" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Lot Size (sq ft)</Label>
                <span className="text-sm text-gray-500">{lotSize.toLocaleString()} sq ft</span>
              </div>
              <Slider
                value={[lotSize]}
                min={1000}
                max={20000}
                step={100}
                onValueChange={(values) => setLotSize(values[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Floor Area Ratio (FAR)</Label>
                <span className="text-sm text-gray-500">{floorArea}</span>
              </div>
              <Slider
                value={[floorArea]}
                min={0.1}
                max={5}
                step={0.1}
                onValueChange={(values) => setFloorArea(values[0])}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Maximum Height (ft)</Label>
                <span className="text-sm text-gray-500">{height} ft</span>
              </div>
              <Slider
                value={[height]}
                min={15}
                max={100}
                step={1}
                onValueChange={(values) => setHeight(values[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Unit Count (Residential)</Label>
                <span className="text-sm text-gray-500">{unitCount} units</span>
              </div>
              <Slider
                value={[unitCount]}
                min={1}
                max={50}
                step={1}
                onValueChange={(values) => setUnitCount(values[0])}
                disabled={propertyType !== "residential" && propertyType !== "mixed"}
              />
            </div>
          </div>

          <Button 
            className="w-full bg-realestate-teal hover:bg-realestate-navy"
            disabled={analyzing}
            onClick={handleAnalyze}
          >
            {analyzing ? (
              <>
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                Analyzing Zoning Options...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Analyze Optimal Zoning Usage
              </>
            )}
          </Button>
        </div>

        <Card className="w-full md:w-1/3 bg-gray-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Zoning Regulations</CardTitle>
            <CardDescription>Current restrictions and allowances</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Zoning Type:</span>
              <Badge variant="outline" className="font-medium">R-4 Residential</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Max FAR:</span>
              <Badge variant="outline" className="font-medium">1.2</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Height Limit:</span>
              <Badge variant="outline" className="font-medium">45 ft</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Setbacks:</span>
              <Badge variant="outline" className="font-medium">15 ft front, 5 ft sides</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Parking Required:</span>
              <Badge variant="outline" className="font-medium">1.5 spaces per unit</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Commercial Use:</span>
              <Badge variant="outline" className="font-medium text-yellow-600">Limited</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Special Overlay:</span>
              <Badge variant="outline" className="font-medium text-blue-600">Historic District</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {results && (
        <div className="space-y-6 animate-fade-in border-t pt-6">
          <h3 className="text-xl font-bold text-realestate-navy flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-realestate-teal" />
            Optimized Development Scenarios
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <DashboardMetricCard
              title="Optimal Building Size"
              icon={<Maximize className="h-5 w-5 text-realestate-teal" />}
            >
              <div className="pt-2">
                <div className="text-2xl font-bold">{Math.round(lotSize * floorArea).toLocaleString()} sq ft</div>
                <p className="text-sm text-gray-500">Total buildable area</p>
                <div className="mt-2 text-xs text-green-600 flex items-center">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Complies with zoning regulations
                </div>
              </div>
            </DashboardMetricCard>
            
            <DashboardMetricCard
              title="Highest Value Use"
              icon={<Building className="h-5 w-5 text-realestate-teal" />}
            >
              <div className="pt-2">
                <div className="text-2xl font-bold">Mixed Use</div>
                <p className="text-sm text-gray-500">Retail + Residential</p>
                <div className="mt-2 text-xs text-green-600 flex items-center">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  70% higher ROI than alternatives
                </div>
              </div>
            </DashboardMetricCard>
            
            <DashboardMetricCard
              title="Estimated Property Value"
              icon={<DollarSign className="h-5 w-5 text-realestate-teal" />}
            >
              <div className="pt-2">
                <div className="text-2xl font-bold">${(lotSize * floorArea * 350).toLocaleString()}</div>
                <p className="text-sm text-gray-500">Post-development valuation</p>
                <div className="mt-2 text-xs text-green-600 flex items-center">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  245% increase from current value
                </div>
              </div>
            </DashboardMetricCard>
          </div>
          
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Optimization Recommendations</CardTitle>
              <CardDescription>
                Based on zoning analysis and market conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Apply for Mixed-Use Rezoning</h4>
                    <p className="text-sm text-gray-600">
                      Current R-4 zoning limits commercial use. Applying for mixed-use designation could increase property value by up to 70%.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Maximize FAR with Density Bonus</h4>
                    <p className="text-sm text-gray-600">
                      Including 15% affordable units qualifies for a 30% density bonus, increasing total buildable area to 7,800 sq ft.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Historic District Considerations</h4>
                    <p className="text-sm text-gray-600">
                      Property is in a historic overlay district. Design must comply with architectural guidelines. Budget for additional design costs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ZoningOptimizer;
