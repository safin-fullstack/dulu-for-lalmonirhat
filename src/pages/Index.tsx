import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { VisionSection } from "@/components/VisionSection";
import { DevelopmentSection } from "@/components/DevelopmentSection";
import { AdviceSection } from "@/components/AdviceSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AdviceSection />
      <VisionSection />
      <DevelopmentSection />
      
      <Footer />
    </div>
  );
};

export default Index;
