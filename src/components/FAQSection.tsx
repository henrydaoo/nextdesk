import { HelpCircle } from "lucide-react";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";

const FAQSection = () => {
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

    const element = document.getElementById("faq");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What are your operating hours?",
      answer:
        "Our coworking spaces are accessible 24/7 for members with dedicated desks or private offices. FlexiPass members have access from Monday to Friday, 9 AM to 5 PM.",
    },
    {
      question: "Do you offer trial periods?",
      answer:
        "Yes, we offer a complimentary day pass for first-time visitors to experience our space. You can book it through our 'Book a Tour' button.",
    },
    {
      question: "Can I bring guests to the coworking space?",
      answer:
        "Members can bring guests for meetings in booked meeting rooms. For general coworking areas, guests are welcome for short visits, but extended stays require a day pass.",
    },
    {
      question: "What kind of internet speed do you provide?",
      answer:
        "We provide high-speed, fiber-optic internet with redundant connections to ensure seamless productivity for all our members.",
    },
    {
      question: "Are there printing services available?",
      answer:
        "Yes, all members receive monthly printing credits. Additional printing can be purchased at a competitive rate.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20  bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 fade-in ${isVisible ? "visible" : ""}`}
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to the most common questions about NextDesk.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`p-6 bg-white rounded-2xl shadow-md fade-in ${
                isVisible ? "visible" : ""
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
                <HelpCircle className="w-6 h-6 text-primary mr-3" />
                {faq.question}
              </h3>
              <p className="text-muted-foreground pl-9">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
