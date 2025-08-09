import { Quote } from "lucide-react";
import { Card } from "./ui/card";
import { useRef, useState, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const testimonials = [
  {
    quote:
      "NextDesk has transformed the way I work. The community is incredibly supportive, and the facilities are top-notch. Highly recommend!",
    author: "Sarah Chen",
    title: "Freelance Designer",
    avatar: "/avt1.webp",
  },
  {
    quote:
      "Our startup found the perfect home at NextDesk. Flexible plans, private offices, and a vibrant atmosphere that fuels creativity.",
    author: "David Lee",
    title: "CEO, Innovate Solutions",
    avatar: "/avt3.webp",
  },
  {
    quote:
      "The best coworking space in the city! The events are fantastic for networking, and the unlimited coffee keeps me going.",
    author: "Maria Garcia",
    title: "Remote Marketing Specialist",
    avatar: "/avt2.webp",
  },
  {
    quote:
      "NextDesk helped me boost my productivity and connect with inspiring professionals. The environment is perfect for growth.",
    author: "James Carter",
    title: "Business Analyst",
    avatar: "/avt1.webp",
  },
  {
    quote:
      "The flexible plans and modern facilities at NextDesk made it easy for our team to collaborate and innovate every day.",
    author: "Michael Evans",
    title: "Startup Co-Founder",
    avatar: "/avt3.webp",
  },
  {
    quote:
      "I love the vibrant community and the endless coffee! NextDesk is my go-to place for focus and networking.",
    author: "William Smith",
    title: "Marketing Consultant",
    avatar: "/avt2.webp",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialsCount = testimonials.length;
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);
  const emblaApiRef = useRef<any>(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsCount);
    }, 3500);
    return () => clearInterval(interval);
  }, [testimonialsCount, isPaused]);

  const handleUserInteraction = () => {
    setIsPaused(true);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setIsPaused(false), 4000);
  };

  return (
    <section
      id="testimonials"
      className="py-20  bg-gradient-to-br from-slate-50 to-blue-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            What Our Members Say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Hear From Our Thriving Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from professionals who found their perfect workspace at
            NextDesk.
          </p>
        </motion.div>

        <Carousel
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
          className="w-full"
        >
          <CarouselContent className="py-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center min-w-0 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center w-full max-w-md">
                  <Quote className="w-10 h-10 text-primary mb-4" />
                  <p className="text-muted-foreground italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-primary"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/100x100/cccccc/333333?text=User";
                    }}
                  />
                  <h3 className="text-lg font-semibold text-foreground">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
