import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureStrip from "@/components/FeatureStrip";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import AtmosphereSection from "@/components/AtmosphereSection";
import OutdoorSection from "@/components/OutdoorSection";
import AboutSection from "@/components/AboutSection";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeatureStrip />
      <MenuSection />
      <GallerySection />
      <AtmosphereSection />
      <OutdoorSection />
      <AboutSection />
      <CtaStrip />
      <Footer />
    </div>
  );
};

export default Index;
