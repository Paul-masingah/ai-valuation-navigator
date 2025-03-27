
import { Building, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-realestate-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building className="h-6 w-6 text-realestate-teal" />
              <span className="font-bold text-xl">PropVision AI</span>
            </div>
            <p className="text-gray-300 mb-4">
              AI-powered real estate valuation and building design optimization for smarter investment decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-realestate-teal transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-realestate-teal transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-realestate-teal transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-realestate-teal transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/valuation" className="text-gray-300 hover:text-realestate-teal transition-colors">
                  AI Valuation
                </Link>
              </li>
              <li>
                <Link to="/design" className="text-gray-300 hover:text-realestate-teal transition-colors">
                  Building Design
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-realestate-teal transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/comparisons" className="text-gray-300 hover:text-realestate-teal transition-colors">
                  Property Comparisons
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-realestate-teal transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-300 hover:text-realestate-teal transition-colors">
                  Investment Guides
                </Link>
              </li>
              <li>
                <Link to="/market-reports" className="text-gray-300 hover:text-realestate-teal transition-colors">
                  Market Reports
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-realestate-teal transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-realestate-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-realestate-teal transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-realestate-teal transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-realestate-teal transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} PropVision AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
