import { useEffect, useState } from 'react';
import { User, Building2, Calendar, Coffee, CheckCircle, Sparkles } from 'lucide-react';

const HowItWorksSection = () => {
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

    const element = document.getElementById('how-it-works');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: User,
      number: '01',
      title: 'Book a Tour',
      description: 'Schedule a visit and explore our coworking spaces in person.',
    },
    {
      icon: Building2,
      number: '02',
      title: 'Choose Your Workspace',
      description: 'Pick a flexible desk, private office, or meeting room that fits your needs.',
    },
    {
      icon: Calendar,
      number: '03',
      title: 'Join the Community',
      description: 'Sign up, move in, and start connecting with other professionals at NextDesk.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-10 fade-in ${isVisible ? 'visible' : ''}`}> 
            {/* Header with icon */}
            <div className="space-y-4 text-center lg:text-left relative">
              {/* Gradient Glow Particle */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 z-0 pointer-events-none">
                <div className="w-32 h-12 bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 blur-xl opacity-50" />
              </div>
              <div className="inline-flex items-center gap-2 mb-2 relative z-10">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Sparkles className="w-6 h-6 text-primary" />
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/10">
                  Our Workflow
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                How to Get Started at NextDesk
              </h2>
              <p className="text-lg text-muted-foreground">
                Joining our coworking community is easy and seamless.
              </p>
            </div>

            {/* Steps as cards */}
            <div className="grid md:grid-cols-1 gap-7">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center md:items-start bg-white border border-primary/10 shadow-md rounded-2xl p-7 gap-6 hover:shadow-lg hover:scale-[1.03] hover:border-primary transition-all duration-300 cursor-pointer fade-in ${isVisible ? 'visible' : ''}`}
                  style={{ animationDelay: `${(index + 1) * 200}ms`, zIndex: 2 - index }}
                >
                  {/* Number + Icon */}
                  <div className="flex flex-col items-center gap-2 min-w-[60px] relative">
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-primary/10 text-primary text-base font-bold border-2 border-white shadow-sm flex items-center justify-center z-20">
                      {step.number}
                    </span>
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/10 mt-6">
                      <step.icon className="w-7 h-7 text-primary" />
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`relative fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '600ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-blue-200/10 to-transparent rounded-3xl z-10 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                alt="Coworking space tour"
                className="w-full h-[500px] object-cover rounded-3xl shadow-xl border-4 border-primary/10"
              />
              <div className="absolute top-6 right-6 bg-white/90 p-4 rounded-xl shadow-lg flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Move-In Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;