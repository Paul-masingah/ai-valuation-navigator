
import { Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Investor",
    company: "Urban Capital Partners",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    testimonial: "PropVision AI's valuation technology is nothing short of revolutionary. I've been able to identify undervalued properties that other investors overlooked, resulting in significantly higher returns.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    company: "Horizon Developments",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial: "The building design optimization tool helped us maximize our property's value by suggesting layout changes that increased rentable space by 15%. The ROI on using this platform has been exceptional.",
    rating: 5
  },
  {
    name: "David Williams",
    role: "Investment Fund Manager",
    company: "Broadstone Capital",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    testimonial: "As someone managing a $200M real estate portfolio, I need reliable data. PropVision AI provides accuracy that's unmatched in the industry, helping us make confident investment decisions.",
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-realestate-teal/10 text-realestate-teal px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Success Stories</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
            Trusted by Real Estate Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered platform is helping investors and developers make smarter decisions and achieve exceptional returns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md border border-gray-100 card-hover"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover" 
                />
                <div>
                  <h4 className="font-semibold text-realestate-navy">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
