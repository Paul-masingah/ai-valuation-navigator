
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  Building, 
  CircleDollarSign, 
  Home, 
  Hotel, 
  Info, 
  MapPin, 
  Ruler, 
  SearchCheck 
} from "lucide-react";
import ValuationResults from "./ValuationResults";

const ValuationTool = () => {
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("3");
  const [bathrooms, setBathrooms] = useState("2");
  const [squareFeet, setSquareFeet] = useState(2000);
  const [lotSize, setLotSize] = useState(5000);
  const [yearBuilt, setYearBuilt] = useState(2000);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {!showResults ? (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 animate-fade-in">
          <div className="flex items-center mb-6">
            <CircleDollarSign className="h-6 w-6 text-realestate-teal mr-2" />
            <h2 className="text-2xl font-bold text-realestate-navy">AI Property Valuation</h2>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="col-span-1 md:col-span-2">
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
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Type
                </label>
                <Select 
                  value={propertyType} 
                  onValueChange={setPropertyType}
                  required
                >
                  <SelectTrigger className="input-field">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single-family">
                      <div className="flex items-center">
                        <Home className="h-4 w-4 mr-2" />
                        <span>Single Family Home</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="multi-family">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        <span>Multi-Family Home</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="condo">
                      <div className="flex items-center">
                        <Hotel className="h-4 w-4 mr-2" />
                        <span>Condominium</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="townhouse">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        <span>Townhouse</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="commercial">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        <span>Commercial Property</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
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
                      {["1", "2", "3", "4", "5", "6+"].map((num) => (
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
                      {["1", "1.5", "2", "2.5", "3", "3.5", "4+"].map((num) => (
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
                    Square Feet
                  </label>
                  <span className="text-sm text-gray-500">{squareFeet.toLocaleString()} sq ft</span>
                </div>
                <div className="flex items-center gap-3">
                  <Ruler className="h-5 w-5 text-gray-400" />
                  <Slider
                    value={[squareFeet]}
                    min={500}
                    max={10000}
                    step={100}
                    onValueChange={(values) => setSquareFeet(values[0])}
                    className="flex-1"
                  />
                </div>
              </div>
              
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
                    onValueChange={(values) => setLotSize(values[0])}
                    className="flex-1"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Year Built
                  </label>
                  <span className="text-sm text-gray-500">{yearBuilt}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-gray-400" />
                  <Slider
                    value={[yearBuilt]}
                    min={1900}
                    max={2023}
                    step={1}
                    onValueChange={(values) => setYearBuilt(values[0])}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 flex items-start gap-3">
              <Info className="h-5 w-5 text-realestate-teal flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">
                Our AI valuation model analyzes thousands of comparable properties, local market trends, economic indicators, and property-specific features to provide an accurate estimate.
              </p>
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                size="lg"
                className="bg-realestate-teal hover:bg-realestate-navy"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Processing
                  </>
                ) : (
                  <>
                    <SearchCheck className="mr-2 h-5 w-5" />
                    Generate AI Valuation
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <ValuationResults setShowResults={setShowResults} />
      )}
    </div>
  );
};

export default ValuationTool;
