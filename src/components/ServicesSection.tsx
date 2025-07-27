import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Film,
  User,
  Lightbulb,
  Gamepad2,
  Building2,
  Mountain,
  Glasses,
  Sparkles
} from 'lucide-react';

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

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Flexible Desks",
      icon: User,
      description: "Choose any open seat in our vibrant shared workspace. Perfect for freelancers and remote workers.",
      featured: true,
    },
    {
      title: "Private Offices",
      icon: Building2,
      description: "Fully furnished private offices for teams and startups seeking focus and privacy.",
      featured: false,
    },
    {
      title: "Meeting Rooms",
      icon: Sparkles,
      description: "Book modern meeting rooms with AV equipment for your next brainstorm or client pitch.",
      featured: false,
    },
    {
      title: "Event Space",
      icon: Lightbulb,
      description: "Host workshops, networking events, or launches in our spacious event area.",
      featured: false,
    },
    {
      title: "High-Speed Wi-Fi",
      icon: Glasses,
      description: "Reliable, fast internet throughout the space—stay connected and productive.",
      featured: false,
    },
    {
      title: "Pantry & Coffee Bar",
      icon: Mountain,
      description: "Unlimited coffee, tea, and snacks in our cozy kitchen and lounge area.",
      featured: false,
    },
    {
      title: "Printing & Office Supplies",
      icon: Film,
      description: "Access printers, scanners, and all the essentials for your daily workflow.",
      featured: false,
    },
    {
      title: "Community Events",
      icon: Gamepad2,
      description: "Join regular workshops, talks, and networking sessions to grow your network.",
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}> 
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Our Amenities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Everything You Need to Work and Thrive
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover flexible workspaces, premium facilities, and a supportive community at NextDesk.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-6 hover-lift transition-all duration-300 cursor-pointer fade-in ${
                isVisible ? 'visible' : ''
              } ${
                service.featured 
                  ? 'bg-primary/10 border border-primary text-primary' 
                  : 'bg-white hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-primary/10">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '600ms' }}>
          <Button size="lg" className="hover-scale">
            Book Your Desk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;