import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Film,
  User,
  Lightbulb,
  Gamepad2,
  Building2,
  Mountain,
  Glasses,
  Sparkles,
  Users,
  Coffee,
} from "lucide-react";
import { openTidioChat } from "@/lib/openTidioChat";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Flexible Hot Desks",
      icon: Users,
      description:
        "Access shared workspaces and choose any open seat. Ideal for daily productivity and networking.",
      featured: true,
    },
    {
      title: "Dedicated Private Offices",
      icon: Building2,
      description:
        "Secure, fully furnished offices for teams needing privacy and a permanent base.",
      featured: false,
    },
    {
      title: "Modern Meeting Rooms",
      icon: Sparkles,
      description:
        "Equipped with advanced AV, perfect for presentations, client meetings, or team brainstorms.",
      featured: false,
    },
    {
      title: "Versatile Event Spaces",
      icon: Lightbulb,
      description:
        "Host workshops, seminars, or corporate gatherings in our adaptable event areas.",
      featured: false,
    },
    {
      title: "Blazing Fast Wi-Fi",
      icon: Glasses,
      description:
        "Stay connected with high-speed, reliable internet across all our locations.",
      featured: false,
    },
    {
      title: "Gourmet Coffee & Snacks",
      icon: Coffee,
      description:
        "Enjoy unlimited premium coffee, tea, and a selection of healthy snacks.",
      featured: false,
    },
    {
      title: "Professional Printing & Supplies",
      icon: Film,
      description:
        "Convenient access to printing, scanning, and essential office supplies.",
      featured: false,
    },
    {
      title: "Engaging Community Events",
      icon: Gamepad2,
      description:
        "Participate in exclusive workshops, networking mixers, and social gatherings.",
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 fade-in ${isVisible ? "visible" : ""}`}
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Our Amenities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Everything You Need to Work and Thrive
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From flexible desks to private offices, we provide a comprehensive
            suite of amenities designed to elevate your work experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-6 hover-lift transition-all duration-300 cursor-pointer fade-in ${
                isVisible ? "visible" : ""
              } ${
                service.featured
                  ? "bg-primary/10 border border-primary text-primary"
                  : "bg-white hover:shadow-lg"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-primary/10">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        <div
          className={`text-center mt-12 fade-in ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "600ms" }}
        >
          <Button size="lg" className="hover-scale" onClick={openTidioChat}>
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
