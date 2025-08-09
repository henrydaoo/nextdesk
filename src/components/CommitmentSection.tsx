import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Coffee, Users, Sparkles } from "lucide-react";

const CommitmentSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const commitments = [
    {
      icon: Shield,
      title: "Secure & Professional Environment",
      description:
        "Enjoy peace of mind with 24/7 secure access and a professionally managed space.",
      tag: "Top Rated",
    },
    {
      icon: Sparkles,
      title: "Comprehensive Premium Amenities",
      description:
        "Benefit from high-speed internet, complimentary refreshments, and cutting-edge facilities.",
      tag: "New",
    },
    {
      icon: Coffee,
      title: "Unlimited Refreshments",
      description:
        "Stay energized with a continuous supply of gourmet coffee, tea, and healthy snacks.",
      tag: null,
    },
    {
      icon: Users,
      title: "Vibrant & Supportive Community",
      description:
        "Connect, collaborate, and grow alongside a diverse network of professionals.",
      tag: null,
    },
  ];

  return (
    <motion.section
      id="commitment"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      ref={sectionRef}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 60, damping: 18 }}
    >
      <div className="container mx-auto px-4">
        <div className={`mb-16`}>
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <Shield className="w-7 h-7 text-primary" />
            </span>
            <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-base font-semibold border border-primary/10 shadow-sm">
              Our Promise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mt-4 mb-4">
            Dedicated to Your Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            At NextDesk, we are committed to providing an exceptional coworking
            experience that supports your productivity, comfort, and
            professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="relative p-8 bg-white border border-primary/10 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shadow-sm">
                  <commitment.icon className="w-8 h-8 text-primary" />
                </span>
                {commitment.tag && (
                  <span className="ml-2 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/10">
                    {commitment.tag}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {commitment.title}
              </h3>
              <p className="text-muted-foreground text-base">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CommitmentSection;
