
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ValuationTool from "@/components/valuation/ValuationTool";
import VideoModal from "@/components/home/VideoModal";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Valuation = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="py-12 bg-gradient-to-r from-realestate-navy to-realestate-teal text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Property Valuation</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-6">
              Get accurate, data-driven property valuations using our advanced machine learning algorithms.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setVideoModalOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              <Play className="mr-2 h-4 w-4" /> Watch Demo Video
            </Button>
          </div>
        </div>
        <div className="py-12">
          <ValuationTool />
        </div>
      </main>
      <Footer />
      
      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
      />
    </div>
  );
};

export default Valuation;
