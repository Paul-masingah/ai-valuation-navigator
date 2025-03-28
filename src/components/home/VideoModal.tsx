
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-heading mb-2">
            PropVision AI Demo
          </DialogTitle>
          <DialogDescription>
            Watch how our AI-powered platform transforms real estate investment decision-making.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden border border-border">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-realestate-navy/10 to-realestate-teal/10">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                poster="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
              >
                <source 
                  src="https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </AspectRatio>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              variant="outline" 
              className="flex items-center justify-center gap-2 hover:bg-realestate-teal/10"
              onClick={() => window.open("/valuation", "_self")}
            >
              <Play className="h-4 w-4" />
              Try Valuation Tool
            </Button>
            <Button 
              variant="outline"
              className="flex items-center justify-center gap-2 hover:bg-realestate-teal/10"
              onClick={() => window.open("/design", "_self")}
            >
              <Play className="h-4 w-4" />
              Explore Building Design
            </Button>
            <Button 
              variant="outline"
              className="flex items-center justify-center gap-2 hover:bg-realestate-teal/10"
              onClick={() => window.open("/signup", "_self")}
            >
              <Play className="h-4 w-4" />
              Sign Up Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
