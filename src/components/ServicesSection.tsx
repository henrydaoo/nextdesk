import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

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
    <section id="services" className="py-20 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 300 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            duration: 0.7,
          }}
          className={`text-center mb-16`}
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
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {},
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 300 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 60, damping: 18 }}
            >
              <Card
                className={`p-6 hover-lift transition-all duration-300 cursor-pointer ${
                  service.featured
                    ? "bg-primary/10 border border-primary text-primary"
                    : "bg-white hover:shadow-lg"
                }`}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-primary/10">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            delay: 0.6,
          }}
        >
          <Button size="lg" className="hover-scale" onClick={openTidioChat}>
            Join Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
