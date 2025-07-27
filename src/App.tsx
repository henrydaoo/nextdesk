import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CommitmentSection from "@/components/CommitmentSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MembershipPlansSection from "@/components/MembershipPlansSection";
import FAQSection from "@/components/FAQSection";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <HowItWorksSection />
      <CommitmentSection />
      <GallerySection />
      <TestimonialsSection />
      <MembershipPlansSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;
