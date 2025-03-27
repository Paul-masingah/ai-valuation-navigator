
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Building, ChevronDown, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-40 border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Building className="h-8 w-8 text-realestate-teal" />
          <span className="font-bold text-xl text-realestate-navy">PropVision AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link to="/valuation" className="text-gray-600 hover:text-realestate-teal transition-colors">
              AI Valuation
            </Link>
            <Link to="/design" className="text-gray-600 hover:text-realestate-teal transition-colors">
              Building Design
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-realestate-teal transition-colors">
              Dashboard
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-realestate-teal transition-colors">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                <Link to="/case-studies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Case Studies
                </Link>
                <Link to="/guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Investment Guides
                </Link>
                <Link to="/market-reports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Market Reports
                </Link>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="border-realestate-teal text-realestate-navy hover:bg-realestate-teal hover:text-white">
              Log in
            </Button>
            <Button className="bg-realestate-teal hover:bg-realestate-navy">
              Sign up
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-500 hover:text-realestate-teal focus:outline-none">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t border-gray-100 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/valuation" className="text-gray-600 hover:text-realestate-teal py-2 transition-colors">
              AI Valuation
            </Link>
            <Link to="/design" className="text-gray-600 hover:text-realestate-teal py-2 transition-colors">
              Building Design
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-realestate-teal py-2 transition-colors">
              Dashboard
            </Link>
            <button className="flex items-center text-gray-600 hover:text-realestate-teal py-2 transition-colors justify-between">
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="pl-4 border-l-2 border-gray-100 space-y-2 py-2">
              <Link to="/case-studies" className="block text-sm text-gray-600 hover:text-realestate-teal py-1">
                Case Studies
              </Link>
              <Link to="/guides" className="block text-sm text-gray-600 hover:text-realestate-teal py-1">
                Investment Guides
              </Link>
              <Link to="/market-reports" className="block text-sm text-gray-600 hover:text-realestate-teal py-1">
                Market Reports
              </Link>
            </div>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="w-full border-realestate-teal text-realestate-navy hover:bg-realestate-teal hover:text-white">
                Log in
              </Button>
              <Button className="w-full bg-realestate-teal hover:bg-realestate-navy">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
