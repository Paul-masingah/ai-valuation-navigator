
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnalyticsDashboard from "@/components/analytics/AnalyticsDashboard";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="py-12 bg-gradient-to-r from-realestate-navy to-realestate-teal text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Advanced Real Estate Analytics</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Gain deeper insights into property potential, market trends, and optimization opportunities.
            </p>
          </div>
        </div>
        <div className="py-12">
          <AnalyticsDashboard />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
