import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { openTidioChat } from "@/lib/openTidioChat";

const MembershipPlansSection = () => {
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

    const element = document.getElementById("plans");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "FlexiPass",
      price: "$99",
      period: "/month",
      description: "Ideal for occasional users and freelancers.",
      features: [
        "Hot Desk Access (Mon-Fri, 9-5)",
        "High-Speed Wi-Fi",
        "Unlimited Coffee & Tea",
        "Community Events Access",
      ],
      highlight: false,
    },
    {
      name: "Dedicated Desk",
      price: "$299",
      period: "/month",
      description: "Your own permanent desk in a shared space.",
      features: [
        "24/7 Access",
        "Dedicated Desk & Chair",
        "Mail Handling Service",
        "Meeting Room Credits (2 hrs/month)",
        "Printing Credits ($10/month)",
      ],
      highlight: true,
    },
    {
      name: "Private Office",
      price: "$799",
      period: "/month",
      description: "Fully furnished office for small teams.",
      features: [
        "24/7 Access",
        "Private Lockable Office",
        "Mail Handling Service",
        "Meeting Room Credits (8 hrs/month)",
        "Printing Credits ($25/month)",
        "Guest Reception",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 fade-in ${isVisible ? "visible" : ""}`}
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Flexible Membership Options
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Find Your Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your work style, team size, and budget. No
            hidden fees, just clear value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 rounded-2xl shadow-lg flex flex-col fade-in ${
                isVisible ? "visible" : ""
              } ${
                plan.highlight
                  ? "bg-primary text-white border-2 border-primary-dark"
                  : "bg-white border border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={`text-2xl font-bold ${
                    plan.highlight ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                {plan.highlight && (
                  <span className="bg-white text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </span>
                )}
              </div>
              <p
                className={`text-muted-foreground mb-6 ${
                  plan.highlight ? "text-primary-foreground" : ""
                }`}
              >
                {plan.description}
              </p>
              <div className="flex items-baseline mb-6">
                <span
                  className={`text-5xl font-bold ${
                    plan.highlight ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-xl font-medium ml-2 ${
                    plan.highlight ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center ${
                      plan.highlight ? "text-white/90" : "text-muted-foreground"
                    }`}
                  >
                    <CheckCircle
                      className={`w-5 h-5 mr-3 ${
                        plan.highlight ? "text-white" : "text-primary"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlight ? "secondary" : "default"}
                className={`w-full hover-scale ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : ""
                }`}
                size="lg"
                onClick={openTidioChat}
              >
                Choose Plan
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlansSection;
