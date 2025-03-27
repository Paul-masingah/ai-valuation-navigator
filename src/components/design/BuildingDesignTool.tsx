
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building, 
  Check, 
  ChevronRight, 
  FileText, 
  Globe, 
  Home, 
  Info, 
  Layers, 
  MapPin, 
  Ruler, 
  Sparkles, 
  Upload 
} from "lucide-react";
import DesignResults from "./DesignResults";

const BuildingDesignTool = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  // Form state
  const [address, setAddress] = useState("");
  const [lotSize, setLotSize] = useState(5000);
  const [lotWidth, setLotWidth] = useState(50);
  const [lotDepth, setLotDepth] = useState(100);
  const [buildingType, setBuildingType] = useState("");
  const [projectGoals, setProjectGoals] = useState("");
  const [floors, setFloors] = useState(2);
  const [bedrooms, setBedrooms] = useState("3");
  const [bathrooms, setBathrooms] = useState("2");
  const [squareFeet, setSquareFeet] = useState(2000);
  const [budget, setBudget] = useState(500000);
  const [architecturalStyle, setArchitecturalStyle] = useState("");
  
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2500);
  };
  
  return (
    <div className="max-w-5xl mx-auto px-4">
      {!showResults ? (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 animate-fade-in">
          <div className="flex items-center mb-6">
            <Building className="h-6 w-6 text-realestate-teal mr-2" />
            <h2 className="text-2xl font-bold text-realestate-navy">AI Building Design Optimizer</h2>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep >= 1 ? 'bg-realestate-teal text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                <MapPin className="h-5 w-5" />
              </div>
              <div className={`flex-1 h-1 mx-2 ${
                currentStep >= 2 ? 'bg-realestate-teal' : 'bg-gray-200'
              }`}></div>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep >= 2 ? 'bg-realestate-teal text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                <Home className="h-5 w-5" />
              </div>
              <div className={`flex-1 h-1 mx-2 ${
                currentStep >= 3 ? 'bg-realestate-teal' : 'bg-gray-200'
              }`}></div>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep >= 3 ? 'bg-realestate-teal text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                <Layers className="h-5 w-5" />
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <span className={`text-sm ${
                currentStep >= 1 ? 'text-realestate-teal font-medium' : 'text-gray-500'
              }`}>Property Location</span>
              <span className={`text-sm ${
                currentStep >= 2 ? 'text-realestate-teal font-medium' : 'text-gray-500'
              }`}>Building Requirements</span>
              <span className={`text-sm ${
                currentStep >= 3 ? 'text-realestate-teal font-medium' : 'text-gray-500'
              }`}>Design Preferences</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Enter full property address"
                      className="pl-10 input-field"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    This helps us analyze zoning regulations and building codes for your location.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Lot Size (sq ft)
                      </label>
                      <span className="text-sm text-gray-500">{lotSize.toLocaleString()} sq ft</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Ruler className="h-5 w-5 text-gray-400" />
                      <Slider
                        value={[lotSize]}
                        min={1000}
                        max={50000}
                        step={500}
                        onValueChange={(values) => {
                          setLotSize(values[0]);
                          // Update width and depth proportionally
                          const sqrtArea = Math.sqrt(values[0]);
                          setLotWidth(Math.round(sqrtArea * 0.7));
                          setLotDepth(Math.round(sqrtArea * 1.4));
                        }}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Lot Width (ft)
                      </label>
                      <span className="text-sm text-gray-500">{lotWidth} ft</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Ruler className="h-5 w-5 text-gray-400" />
                      <Slider
                        value={[lotWidth]}
                        min={20}
                        max={200}
                        step={1}
                        onValueChange={(values) => {
                          setLotWidth(values[0]);
                          setLotSize(values[0] * lotDepth);
                        }}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Lot Depth (ft)
                      </label>
                      <span className="text-sm text-gray-500">{lotDepth} ft</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Ruler className="h-5 w-5 text-gray-400" />
                      <Slider
                        value={[lotDepth]}
                        min={40}
                        max={400}
                        step={1}
                        onValueChange={(values) => {
                          setLotDepth(values[0]);
                          setLotSize(lotWidth * values[0]);
                        }}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lot Constraints (Optional)
                  </label>
                  <div className="flex gap-4 mb-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="text-sm flex-1"
                      onClick={() => {}}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Survey
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="text-sm flex-1"
                      onClick={() => {}}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Site Plan
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                  <Info className="h-5 w-5 text-realestate-teal flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Our AI analyzes your property location to check zoning laws, building codes, and environmental factors to ensure compliance while maximizing design potential.
                  </p>
                </div>
                
                <div className="flex justify-end pt-4">
                  <Button 
                    type="button" 
                    className="bg-realestate-teal hover:bg-realestate-navy"
                    onClick={nextStep}
                  >
                    Next Step <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Building Type
                  </label>
                  <Select 
                    value={buildingType} 
                    onValueChange={setBuildingType}
                    required
                  >
                    <SelectTrigger className="input-field">
                      <SelectValue placeholder="Select building type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-family">
                        <div className="flex items-center">
                          <Home className="h-4 w-4 mr-2" />
                          <span>Single Family Home</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="duplex">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          <span>Duplex</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="triplex">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          <span>Triplex</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="fourplex">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          <span>Fourplex</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="apartment">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          <span>Small Apartment Building</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Goals
                  </label>
                  <Textarea 
                    placeholder="Describe your investment goals and requirements for this property. E.g. maximize rental income, optimize for resale value, etc."
                    className="input-field h-24"
                    value={projectGoals}
                    onChange={(e) => setProjectGoals(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Number of Floors
                      </label>
                      <span className="text-sm text-gray-500">{floors}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-gray-400" />
                      <Slider
                        value={[floors]}
                        min={1}
                        max={5}
                        step={1}
                        onValueChange={(values) => setFloors(values[0])}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Target Square Footage
                      </label>
                      <span className="text-sm text-gray-500">{squareFeet.toLocaleString()} sq ft</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Ruler className="h-5 w-5 text-gray-400" />
                      <Slider
                        value={[squareFeet]}
                        min={1000}
                        max={10000}
                        step={100}
                        onValueChange={(values) => setSquareFeet(values[0])}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bedrooms
                    </label>
                    <Select 
                      value={bedrooms} 
                      onValueChange={setBedrooms}
                    >
                      <SelectTrigger className="input-field">
                        <SelectValue placeholder="Bedrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        {["1", "2", "3", "4", "5", "6+"]. map((num) => (
                          <SelectItem key={num} value={num}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bathrooms
                    </label>
                    <Select 
                      value={bathrooms} 
                      onValueChange={setBathrooms}
                    >
                      <SelectTrigger className="input-field">
                        <SelectValue placeholder="Bathrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        {["1", "1.5", "2", "2.5", "3", "3.5", "4+"]. map((num) => (
                          <SelectItem key={num} value={num}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Construction Budget
                    </label>
                    <span className="text-sm text-gray-500">${budget.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5 text-gray-400" />
                    <Slider
                      value={[budget]}
                      min={100000}
                      max={2000000}
                      step={10000}
                      onValueChange={(values) => setBudget(values[0])}
                      className="flex-1"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                  <Button 
                    type="button" 
                    className="bg-realestate-teal hover:bg-realestate-navy"
                    onClick={nextStep}
                  >
                    Next Step <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Architectural Style
                  </label>
                  <Select 
                    value={architecturalStyle} 
                    onValueChange={setArchitecturalStyle}
                  >
                    <SelectTrigger className="input-field">
                      <SelectValue placeholder="Select architectural style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="modern">Modern</SelectItem>
                      <SelectItem value="contemporary">Contemporary</SelectItem>
                      <SelectItem value="traditional">Traditional</SelectItem>
                      <SelectItem value="craftsman">Craftsman</SelectItem>
                      <SelectItem value="colonial">Colonial</SelectItem>
                      <SelectItem value="mediterranean">Mediterranean</SelectItem>
                      <SelectItem value="farmhouse">Modern Farmhouse</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="minimalist">Minimalist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <h3 className="block text-sm font-medium text-gray-700 mb-3">Design Priorities</h3>
                  <Tabs defaultValue="sustainability" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
                      <TabsTrigger value="flexibility">Flexibility</TabsTrigger>
                      <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sustainability" className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-realestate-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-realestate-navy mb-1">Sustainability Focus</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Optimize the design for energy efficiency, sustainable materials, and reduced environmental impact.
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-realestate-teal mr-2" />
                              <span className="text-sm">Solar orientation</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-realestate-teal mr-2" />
                              <span className="text-sm">Natural ventilation</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-realestate-teal mr-2" />
                              <span className="text-sm">Efficient insulation</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-realestate-teal mr-2" />
                              <span className="text-sm">Water conservation</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="flexibility" className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Layers className="h-5 w-5 text-realestate-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-realestate-navy mb-1">Flexibility Focus</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Design spaces that can adapt to different uses and evolve with changing needs over time.
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-realestate-teal mr-2" />
                              <span className="text-sm">Adaptable spaces</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-realestate-teal mr-2" />
                              <span className="text-sm">Multipurpose rooms</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-realestate-teal mr-2" />
                              <span className="text-sm">Expansion potential</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-realestate-teal mr-2" />
                              <span className="text-sm">Modular elements</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="efficiency" className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-realestate-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-realestate-navy mb-1">Efficiency Focus</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Maximize usable space and minimize construction costs while maintaining quality and function.
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-realestate-teal mr-2" />
                              <span className="text-sm">Space optimization</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-realestate-teal mr-2" />
                              <span className="text-sm">Cost-effective materials</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-realestate-teal mr-2" />
                              <span className="text-sm">Simplified construction</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-realestate-teal mr-2" />
                              <span className="text-sm">Standardized dimensions</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="bg-realestate-teal/5 p-4 rounded-lg border border-realestate-teal/20 flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-realestate-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-realestate-navy mb-1">AI Design Generation</h4>
                    <p className="text-sm text-gray-600">
                      Our AI will generate multiple design options based on your requirements, considering zoning regulations, market demand, and investment return potential. You'll receive floor plans, 3D visualizations, and investment metrics.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-realestate-teal hover:bg-realestate-navy"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Generating Designs
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Generate AI Designs
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      ) : (
        <DesignResults setShowResults={setShowResults} />
      )}
    </div>
  );
};

export default BuildingDesignTool;
