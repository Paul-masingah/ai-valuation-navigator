
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ValuationTool from "@/components/valuation/ValuationTool";

const Valuation = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="py-12 bg-gradient-to-r from-realestate-navy to-realestate-teal text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Property Valuation</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Get accurate, data-driven property valuations using our advanced machine learning algorithms.
            </p>
          </div>
        </div>
        <div className="py-12">
          <ValuationTool />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Valuation;
