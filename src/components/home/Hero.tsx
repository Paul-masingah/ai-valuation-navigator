
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Building2, Play, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import VideoModal from "./VideoModal";

const Hero = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openVideoModal = () => {
    setVideoModalOpen(true);
  };

  return (
    <div className="relative overflow-hidden bg-gray-50 py-16 sm:py-24">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-realestate-navy/5 to-realestate-teal/5"></div>
      <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className={`text-center md:text-left transition-all duration-500 ${scrolled ? 'translate-y-0 opacity-100' : 'md:translate-y-4 md:opacity-90'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading leading-tight">
            AI-Powered Real Estate <span className="block md:inline">Investment Intelligence</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Make smarter, more profitable real estate investment decisions with 
            advanced AI valuation and optimal building design insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-realestate-teal hover:bg-realestate-navy text-white transform transition-transform hover:scale-105">
              <Link to="/valuation" className="flex items-center">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-realestate-teal text-realestate-navy hover:bg-realestate-teal hover:text-white"
              onClick={openVideoModal}
            >
              <div className="flex items-center">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </div>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-realestate-teal mb-2" />
              <p className="text-xs md:text-sm text-gray-600">99% Valuation Accuracy</p>
            </div>
            <div className="flex flex-col items-center">
              <BarChart3 className="h-8 w-8 md:h-10 md:w-10 text-realestate-teal mb-2" />
              <p className="text-xs md:text-sm text-gray-600">25% Higher ROI</p>
            </div>
            <div className="flex flex-col items-center">
              <Building2 className="h-8 w-8 md:h-10 md:w-10 text-realestate-teal mb-2" />
              <p className="text-xs md:text-sm text-gray-600">10K+ Properties</p>
            </div>
          </div>
        </div>
        
        <div className={`relative transition-all duration-700 ${scrolled ? 'translate-y-0 opacity-100' : 'md:translate-y-6 md:opacity-90'}`}>
          <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-1 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" 
              alt="Real estate investment dashboard" 
              className="rounded-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-realestate-navy/50 to-transparent rounded-lg flex flex-col justify-end p-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform -translate-y-4 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-realestate-navy">Property Value Analysis</h3>
                  <span className="text-realestate-success font-medium">+12.4%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-realestate-teal to-realestate-navy w-3/4 rounded-full animate-pulse-soft"></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Current: $1.2M</span>
                  <span>Projected: $1.35M</span>
                </div>
              </div>
            </div>
          </div>
          
          {!isMobile && (
            <>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-48 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-realestate-success"></div>
                  <span className="text-sm font-medium">AI Recommendation</span>
                </div>
                <p className="text-xs text-gray-600">Optimal time to invest in this property based on market trends and location data.</p>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <p className="text-sm font-medium">AI Confidence Score</p>
                <p className="text-2xl font-bold text-realestate-navy">92%</p>
              </div>
            </>
          )}
        </div>
      </div>
      
      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
      />
    </div>
  );
};

export default Hero;
