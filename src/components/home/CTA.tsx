
import { Button } from "@/components/ui/button";
import { ChevronRight, MousePointer, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          className="bg-gradient-to-r from-realestate-navy to-realestate-teal rounded-2xl overflow-hidden shadow-xl relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated background effect */}
          <div className="absolute inset-0 opacity-20">
            <div className={`absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-1000 ${isHovered ? 'left-full' : '-left-full'}`}></div>
          </div>
          
          <div className="p-8 sm:p-12 md:p-16 text-white text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Limited Time Offer</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Real Estate Investments?
            </h2>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              Join thousands of investors who are leveraging AI to identify opportunities, optimize returns, and stay ahead of the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className={`bg-white text-realestate-navy hover:bg-gray-100 group transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}
              >
                <Link to="/signup" className="flex items-center">
                  Start Your Free Trial 
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/demo" className="flex items-center">
                  Book a Demo
                  <MousePointer className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-white/70 text-sm">
              No credit card required. 14-day free trial.
            </p>
            
            {/* Floating badges */}
            <div className="hidden md:block absolute -bottom-6 -right-6 bg-white rounded-full p-3 shadow-lg transform rotate-12 transition-transform duration-300 hover:rotate-0">
              <div className="text-realestate-navy font-bold text-sm">
                50% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
