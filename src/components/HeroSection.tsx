import heroImg1 from "@/assets/next-15.webp?imagetools";
import heroImg2 from "@/assets/next-14.webp?imagetools";
import heroImg3 from "@/assets/next-13.webp?imagetools";

import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { scrollToSection } from "@/lib/scrollToSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play, Users, Building2, UserCheck } from "lucide-react";
import { Button } from "./ui/button";
import { openTidioChat } from "@/lib/openTidioChat";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const heroSlides = [
    {
      image: heroImg1,
      alt: "Modern coworking lounge with people collaborating",
    },
    {
      image: heroImg2,
      alt: "Open workspace with natural light and desks",
    },
    {
      image: heroImg3,
      alt: "Team brainstorming in a meeting room",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slidesCount = heroSlides.length;
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);
  const emblaApiRef = useRef<any>(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesCount);
    }, 3500);
    return () => clearInterval(interval);
  }, [slidesCount, isPaused]);

  const handleUserInteraction = () => {
    setIsPaused(true);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setIsPaused(false), 4000);
  };

  const stats = [
    { icon: Users, value: "1,200+", label: "Members Joined" },
    { icon: Building2, value: "10+", label: "Locations" },
    { icon: UserCheck, value: "99%", label: "Member Satisfaction" },
  ];

  const handleExploreSpacesClick = () => {
    scrollToSection("#services");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
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
            <Button size="lg" className="hover-scale" onClick={openTidioChat}>
              Join Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover-scale group border-primary text-primary"
              onClick={handleExploreSpacesClick}
            >
              <Play
                size={20}
                className="mr-2 group-hover:scale-110 transition-transform"
              />
              Explore Spaces
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            delay: 0.15,
          }}
        >
          <Carousel
            className="w-full max-w-5xl mx-auto"
            opts={{ align: "start", loop: true }}
            setApi={(api) => {
              if (api) {
                emblaApiRef.current = api;
                api.scrollTo(current);
                api.on && api.on("pointerDown", handleUserInteraction);
                api.on && api.on("pointerUp", handleUserInteraction);
                api.on &&
                  api.on("select", () => {
                    const idx = api.selectedScrollSnap();
                    setCurrent(idx);
                  });
              }
            }}
          >
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl z-10"></div>
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                      fetchPriority="high"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-6 pt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            delay: 0.3,
          }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
