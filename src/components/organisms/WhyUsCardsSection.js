"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const cards = [
  {
    icon: "/icons/envelope-simple-fill.svg",
    title: "Comprehensive Offering",
    description:
      "We provide end-to-end product development, covering everything from concept and design to development, testing, and launch. This allows you to focus on other key aspects of venture building.",
  },
  {
    icon: "/icons/chart-line-up-fill.svg",
    title: "Track Record of Success",
    description:
      "Our portfolio speaks volumes. We have helped startups secure over $50M in funding through 12+ successful funding rounds. Our proven track record demonstrates our ability to create valuable, investment-worthy products.",
  },
  {
    icon: "/icons/lightbulb-fill.svg",
    title: "Expertise in Diverse Domains",
    description:
      "With experience building 25+ startup products across various industries, our team brings a wealth of knowledge and technical expertise to every project. We adapt our approach to meet the specific needs of your ventures.",
  },
  {
    icon: "/icons/speedometer-fill.svg",
    title: "Rapid Development Cycle",
    description:
      "Time is critical in the startup ecosystem. Our streamlined processes and agile methodologies ensure your MVP is developed and ready for market within 12 weeks, allowing you to test, iterate, and scale quickly.",
  },
  {
    icon: "/icons/clock-fill.svg",
    title: "Timeline Guarantee",
    description:
      "We understand the importance of meeting deadlines. Our timeline guarantee ensures that your MVP will be delivered within the agreed timeframe, providing you with a reliable and predictable development schedule.",
  },
  {
    icon: "/icons/map-pin-simple-area-fill.svg",
    title: "Roadmap support",
    description:
      "At MVPRockets, we provide detailed roadmap support to ensure your product development journey is clear and aligned with your strategic goals. Our expert guidance helps you navigate each phase with confidence.",
  },
];

export default function WhyUsCardsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className={`w-full px-6 py-20 md:px-20 transition-all duration-1000 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
     
      <div className="text-center mb-12">
        <h2 className="text-xl font-bold text-pinko uppercase tracking-wider mb-2">
          MVPRockets
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-pgown">
          Why Us?
        </h3>
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`flex items-start gap-4 p-2 transition duration-700 ease-in-out transform ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="w-12 h-12 bg-pinko rounded-full flex items-center justify-center shrink-0">
              <Image src={card.icon} alt={card.title} width={32} height={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-pgown mb-2">
                {card.title}
              </h3>
              <p className="text-gr font-pop text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
