import { useEffect, useState } from 'react';
import { Users, Building2, UserCheck, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    members: 0,
    locations: 0,
    events: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = {
      members: 1200,
      locations: 10,
      events: 150,
      satisfaction: 99,
    };

    const duration = 2000;
    const intervals = {};

    Object.keys(targets).forEach((key) => {
      const target = targets[key];
      const increment = target / (duration / 50);
      let current = 0;

      intervals[key] = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals[key]);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    });
  };

  const stats = [
    {
      icon: Users,
      value: counts.members,
      suffix: '+',
      label: 'Active Members',
    },
    {
      icon: Building2,
      value: counts.locations,
      suffix: '+',
      label: 'Locations',
    },
    {
      icon: Coffee,
      value: counts.events,
      suffix: '+',
      label: 'Community Events',
    },
    {
      icon: UserCheck,
      value: counts.satisfaction,
      suffix: '%',
      label: 'Satisfaction Rate',
    },
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 fade-in ${isVisible ? 'visible' : ''}`}> 
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Community in Numbers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how our community is growing every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-white/60 shadow-md rounded-2xl hover-lift fade-in ${
                isVisible ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={`text-center fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '400ms' }}>
          <Button
            size="lg"
            variant="outline"
            className="hover-scale border-primary text-primary px-8 py-4 text-lg font-semibold rounded-full"
          >
            Join the Community
          </Button>
          <div className="text-muted-foreground mt-4">
            Become a part of NextDesk and unlock your potential.
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;