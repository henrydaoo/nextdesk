import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "./components/ServicesSection";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default App;
