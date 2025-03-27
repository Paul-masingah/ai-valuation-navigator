
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-realestate-navy to-realestate-teal rounded-2xl overflow-hidden shadow-xl">
          <div className="p-12 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Real Estate Investments?
            </h2>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              Join thousands of investors who are leveraging AI to identify opportunities, optimize returns, and stay ahead of the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-realestate-navy hover:bg-gray-100">
                <Link to="/signup" className="flex items-center">
                  Start Your Free Trial <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/demo">
                  Book a Demo
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-white/70 text-sm">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
