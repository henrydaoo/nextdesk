import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import CommitmentSection from "./components/CommitmentSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <HowItWorksSection />
      <CommitmentSection />
      <Footer />
    </div>
  );
};

export default App;
