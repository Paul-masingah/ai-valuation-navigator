
import { Activity, BarChart2, Building, CircleDollarSign, Clock, Compass, Database, Fingerprint, LineChart, Scale, Search, Shield } from "lucide-react";

const features = [
  {
    icon: <CircleDollarSign className="h-8 w-8 text-realestate-teal" />,
    title: "Accurate Valuations",
    description: "Our AI analyzes thousands of data points to provide the most accurate property valuations in the market."
  },
  {
    icon: <Building className="h-8 w-8 text-realestate-teal" />,
    title: "Building Design Optimization",
    description: "Maximize profitability with AI-generated optimal building designs based on location and market demand."
  },
  {
    icon: <Database className="h-8 w-8 text-realestate-teal" />,
    title: "Real-time Market Data",
    description: "Access up-to-date market trends, comparable sales, and neighborhood analytics."
  },
  {
    icon: <LineChart className="h-8 w-8 text-realestate-teal" />,
    title: "ROI Forecasting",
    description: "Use our advanced models to predict future returns and make data-driven investment decisions."
  },
  {
    icon: <Search className="h-8 w-8 text-realestate-teal" />,
    title: "Property Comparison",
    description: "Compare multiple properties side by side with detailed metrics and AI insights."
  },
  {
    icon: <Activity className="h-8 w-8 text-realestate-teal" />,
    title: "Risk Assessment",
    description: "Identify potential risks and uncertainties before investing with our comprehensive risk analysis."
  },
  {
    icon: <Compass className="h-8 w-8 text-realestate-teal" />,
    title: "Location Intelligence",
    description: "Explore neighborhood quality, amenities, and growth potential through our location scoring system."
  },
  {
    icon: <Clock className="h-8 w-8 text-realestate-teal" />,
    title: "Timing Optimizer",
    description: "Get AI recommendations on the best time to buy, sell, or renovate based on market cycles."
  },
  {
    icon: <Fingerprint className="h-8 w-8 text-realestate-teal" />,
    title: "Personalized Insights",
    description: "Receive customized recommendations based on your investment goals and risk tolerance."
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
            AI-Powered Investment Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform combines advanced machine learning, big data analytics, and real estate expertise to give you the competitive edge in property investments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center shadow-sm mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-realestate-navy">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
