import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { openTidioChat } from "@/lib/openTidioChat";
import { Users, Building2, UserCheck, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const StatsSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [counts, setCounts] = useState({
    members: 0,
    locations: 0,
    events: 0,
    satisfaction: 0,
  });

  const hasAnimated = useRef(false);
  useEffect(() => {
    if (inView && !hasAnimated.current) {
      animateCounters();
      hasAnimated.current = true;
    }
  }, [inView]);

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
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    });
  };

  const stats = [
    {
      icon: Users,
      value: counts.members,
      suffix: "+",
      label: "Thriving Members",
    },
    {
      icon: Building2,
      value: counts.locations,
      suffix: "+",
      label: "Prime Locations",
    },
    {
      icon: Coffee,
      value: counts.events,
      suffix: "+",
      label: "Engaging Events",
    },
    {
      icon: UserCheck,
      value: counts.satisfaction,
      suffix: "%",
      label: "Member Satisfaction",
    },
  ];

  return (
    <section
      id="stats"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the scale and success of the NextDesk community.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {},
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 60, damping: 18 }}
            >
              <div className="text-center p-6 bg-white/60 shadow-md rounded-2xl hover-lift">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="hover-scale border-primary text-primary px-8 py-4 text-lg font-semibold rounded-full"
            onClick={openTidioChat}
          >
            Join Us Now
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
