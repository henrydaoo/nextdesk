import { Quote } from "lucide-react";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";

const TestimonialsSection = () => {
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

    const element = document.getElementById("testimonials");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote:
        "NextDesk has transformed the way I work. The community is incredibly supportive, and the facilities are top-notch. Highly recommend!",
      author: "Sarah Chen",
      title: "Freelance Designer",
      avatar: "/avt1.png",
    },
    {
      quote:
        "Our startup found the perfect home at NextDesk. Flexible plans, private offices, and a vibrant atmosphere that fuels creativity.",
      author: "David Lee",
      title: "CEO, Innovate Solutions",
      avatar: "/avt3.png",
    },
    {
      quote:
        "The best coworking space in the city! The events are fantastic for networking, and the unlimited coffee keeps me going.",
      author: "Maria Garcia",
      title: "Remote Marketing Specialist",
      avatar: "/avt2.png",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20  bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 fade-in ${isVisible ? "visible" : ""}`}
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
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center fade-in ${
                isVisible ? "visible" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
