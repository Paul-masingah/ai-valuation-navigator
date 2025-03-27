
import { ArrowRight, BarChart, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ValueProposition = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-realestate-navy to-realestate-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Investors Choose PropVision AI
            </h2>
            <p className="text-gray-300 mb-8">
              Our machine learning models analyze thousands of data points including market trends, location quality, property characteristics, and economic indicators to deliver actionable intelligence.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-realestate-teal/20 rounded-lg p-3">
                  <TrendingUp className="h-6 w-6 text-realestate-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Increased Investment Returns</h3>
                  <p className="text-gray-300">Our clients report an average 25% higher ROI compared to traditional investment approaches.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-realestate-teal/20 rounded-lg p-3">
                  <BarChart className="h-6 w-6 text-realestate-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data-Driven Decisions</h3>
                  <p className="text-gray-300">Eliminate guesswork with concrete data and AI-powered insights that give you a competitive edge.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-realestate-teal/20 rounded-lg p-3">
                  <DollarSign className="h-6 w-6 text-realestate-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Optimized Building Designs</h3>
                  <p className="text-gray-300">Maximize property value with AI-generated building designs that meet market demands and zoning requirements.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="bg-realestate-teal hover:bg-white hover:text-realestate-navy text-white">
                <Link to="/case-studies" className="flex items-center">
                  View Success Stories <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-1">
                <img 
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" 
                  alt="Real estate investment meeting" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-3 border border-gray-100">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Success Rate</p>
                  <p className="text-2xl font-bold text-realestate-success">94%</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-5 border border-gray-100 max-w-xs">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-realestate-navy">Investment Performance</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">PropVision AI</span>
                    <span className="font-medium text-realestate-success">+32%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-realestate-success w-[80%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Market Average</span>
                    <span className="font-medium text-gray-500">+7%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400 w-[20%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
