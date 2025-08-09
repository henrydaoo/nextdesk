import { HelpCircle } from "lucide-react";
import { Card } from "./ui/card";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const FAQSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

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
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to the most common questions about NextDesk.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 18 } },
              }}
            >
              <Card
                className="p-6 bg-white rounded-2xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
                  <HelpCircle className="w-6 h-6 text-primary mr-3" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground pl-9">{faq.answer}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
