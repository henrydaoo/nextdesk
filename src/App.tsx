import React, { Suspense } from "react";
import LazyDataSection from "@/components/LazyDataSection";

const Header = React.lazy(() => import("@/components/Header"));
const HeroSection = React.lazy(() => import("@/components/HeroSection"));
const ServicesSection = React.lazy(() => import("@/components/ServicesSection"));
const StatsSection = React.lazy(() => import("@/components/StatsSection"));
const HowItWorksSection = React.lazy(() => import("@/components/HowItWorksSection"));
const CommitmentSection = React.lazy(() => import("@/components/CommitmentSection"));
const GallerySection = React.lazy(() => import("@/components/GallerySection"));
const TestimonialsSection = React.lazy(() => import("@/components/TestimonialsSection"));
const MembershipPlansSection = React.lazy(() => import("@/components/MembershipPlansSection"));
const FAQSection = React.lazy(() => import("@/components/FAQSection"));
const Footer = React.lazy(() => import("@/components/Footer"));





const App = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <LazyDataSection minHeight="400px">
        <HeroSection />
      </LazyDataSection>
      <LazyDataSection minHeight="400px">
        <ServicesSection />
      </LazyDataSection>
      <LazyDataSection minHeight="400px">
        <StatsSection />
      </LazyDataSection>
      <LazyDataSection minHeight="400px">
        <HowItWorksSection />
      </LazyDataSection>
      <LazyDataSection minHeight="400px">
        <CommitmentSection />
      </LazyDataSection>
      <LazyDataSection minHeight="400px">
        <GallerySection />
      </LazyDataSection>
      <LazyDataSection minHeight="400px">
        <TestimonialsSection />
      </LazyDataSection>
      <LazyDataSection minHeight="400px">
        <MembershipPlansSection />
      </LazyDataSection>
      <LazyDataSection minHeight="400px">
        <FAQSection />
      </LazyDataSection>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
