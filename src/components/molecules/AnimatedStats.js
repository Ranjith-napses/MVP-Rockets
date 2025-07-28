"use client";
import { useEffect, useRef, useState } from "react";


export function VentureStudioHero() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideInLeftCenter");
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <section className="bg-black text-white h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div
        ref={ref}
        className="max-w-3xl text-center opacity-0 transform translate-x-[-100px] transition-all duration-1000 ease-out"
      >
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Product Partner for{" "}
          <span className="text-pinko">Venture Studios</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We are startup product experts & we take care of your product woes.
          <br /> So, you can take care of the venture.
        </p>
        <button className="bg-pinko hover:bg-pink-600 text-white py-2 px-6 rounded-full transition-all duration-300">
          Talk to an expert
        </button>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="w-full">
          <img
            src="/images/why-choose-mvp-rockets.png"
            alt="Why MVP Rockets"
            className="w-full h-auto object-contain rounded-2xl shadow-lg"
          />
        </div>
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            show ? "opacity-100 animate-fadeInUp" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-pinko font-bold uppercase tracking-widest mb-2">
            MVPROCKETS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
            Why Choose MVP Rockets?
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            From idea to launch, we’re your go-to product team. Our proven
            record of delivering MVPs in 12 weeks, helping startups raise over
            $50M, and experience across 25+ domains makes us the ideal product
            partner for venture studios.
          </p>
        </div>
      </div>
    </section>
  );
}


export function WhyUsGridSection() {
  const data = [
    {
      icon: "📊",
      title: "Comprehensive Offering",
      desc: "We provide end-to-end product development, from concept to testing & launch.",
    },
    {
      icon: "🏆",
      title: "Track Record of Success",
      desc: "Helped startups secure $50M+ funding through 12+ successful rounds.",
    },
    {
      icon: "💡",
      title: "Expertise in Diverse Domains",
      desc: "Built 25+ startup products across industries with deep tech knowledge.",
    },
    {
      icon: "🚀",
      title: "Rapid Development Cycle",
      desc: "We deliver MVPs in just 12 weeks with agile, streamlined processes.",
    },
    {
      icon: "⏱️",
      title: "Timeline Guarantee",
      desc: "We ensure MVP delivery within the agreed timeline — reliably and predictably.",
    },
    {
      icon: "🗺️",
      title: "Roadmap Support",
      desc: "We guide your product journey with detailed roadmap alignment to goals.",
    },
  ];

  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (gridRef.current) obs.observe(gridRef.current);
    return () => gridRef.current && obs.unobserve(gridRef.current);
  }, []);

  return (
    <section className="bg-white px-4 md:px-20 py-16 text-center">
      <h2 className="text-pinko uppercase font-bold text-sm mb-2">
        MVPROCKETS
      </h2>
      <h3 className="text-4xl font-extrabold text-pgown mb-12">
        Why Us?
      </h3>

      <div
        ref={gridRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-1000 ${
          visible ? "opacity-100 animate-fadeInUp" : "opacity-0 translate-y-10"
        }`}
      >
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start text-left gap-4 rounded-xl p-4 bg-white shadow-sm"
          >
            <div className="text-2xl bg-pinko text-white rounded-full w-10 h-10 flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <h4 className="text-lg font-bold text-pgown mb-1">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MeetTeamSection() {
  const headingRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const team = [
    {
      name: "Giridharan N (CEO)",
      desc: "IIMB, Ex - Yahoo, Microsoft, Simplilearn, Babajob (CPO)",
      image: "/images/giri.jpg",
    },
    {
      name: "Praveen MV (COO)",
      desc: "Ex - Thoughtworks, Babajob (CTO), 3x Entrepreneur, 1 exit",
      image: "/images/praveen.jpg",
    },
    {
      name: "Satish Bhat (CTO)",
      desc: "Architecture, CTO of various companies, 4x Entrepreneur",
      image: "/images/satish.jpg",
    },
    {
      name: "Ashitha Shetty (CPO)",
      desc: "Ex - SAP, Product leadership",
      image: "/images/ashitha.jpg",
    },
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );
    if (headingRef.current) obs.observe(headingRef.current);
    return () => headingRef.current && obs.unobserve(headingRef.current);
  }, []);

  return (
    <section className="bg-white px-4 md:px-20 py-20 text-center">
      <h2
        ref={headingRef}
        className={`text-4xl font-bold text-purple-800 mb-12 transition-all duration-1000 ${
          visible ? "opacity-100 animate-fadeInUp" : "opacity-0 translate-y-10"
        }`}
      >
        Meet the Faces Behind MVPRockets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-lg mb-4 w-full h-56 object-cover"
            />
            <h3 className="text-xl font-semibold text-pgown">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600">{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
