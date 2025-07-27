import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play, Users, Building2, UserCheck } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: "1,200+", label: "Members Joined" },
    { icon: Building2, value: "10+", label: "Locations" },
    { icon: UserCheck, value: "99%", label: "Member Satisfaction" },
  ];

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      alt: "Modern coworking lounge with people collaborating",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      alt: "Open workspace with natural light and desks",
    },
    {
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      alt: "Team brainstorming in a meeting room",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
    >
      <div className="container mx-auto px-4 py-20">
        <div
          className={`text-center mb-12 fade-in ${isVisible ? "visible" : ""}`}
        >
          <div className="inline-block mb-6">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Your Space to Thrive
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Work. Connect. Grow.
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            NextDesk offers modern coworking solutions for freelancers,
            startups, and growing teams. Experience productivity, connection,
            and growth in a dynamic environment.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="hover-scale">
              Book a Tour
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover-scale group border-primary text-primary"
            >
              <Play
                size={20}
                className="mr-2 group-hover:scale-110 transition-transform"
              />
              Explore Spaces
            </Button>
          </div>
        </div>

        <div
          className={`relative fade-in ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "200ms" }}
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl z-10"></div>
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div
          className={`grid grid-cols-3 gap-6 pt-16 max-w-2xl mx-auto fade-in ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "400ms" }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
