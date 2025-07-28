"use client";

import { useEffect, useRef, useState } from "react";
import CaseStudyCard from "../atoms/CaseStudyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    image: "/ANSR-Portfolio.png",
    title: "Innovation team for ANSR",
    sidehead: "[Duration - 3 Months]",
    subtitle: "ANSR is a market leader in workforce transformation services.",
    details: [
      { title: "Project Requirement", value: "Build a HR tech SaaS product." },
      {
        title: "Team Size",
        value: ["1 PM", "1 Designer", "4 Devs + Lead + QA", "1 Devops"],
      },
      {
        title: "Outcome",
        value: ["Launched on time", "Beta release", "Ongoing roadmap"],
      },
    ],
  },
  {
    image: "/NirogStreet-Portfolio.png",
    title: "Transformation team for NirogStreet ",
    sidehead: "[Duration - 3 Months]",
    subtitle:
      "Nirogstreet is a series A funded market leader operating with a vision of making alternate medicinal practices mainstream.",
    details: [
      {
        title: "Project Requirement",
        value:
          "Revamp core product experience & make the core tech stable + create new Mobile App.",
      },
      {
        title: "Team Size",
        value: [
          "1 PM",
          " 1 Designer",
          " 6 Developers + Architect + QA",
          "1 Devops",
        ],
      },
      {
        title: "Outcome",
        value: [
          "Transformation complete",
          "New mobile app launched",
          "30 % Revenue growth",
          "$ 12M raised from jungle ventures",
        ],
      },
    ],
  },
 

   {

    image: "/Jiraaf-Portfolio.png",
    title: "MVP for Jiraaf ",
    sidehead: ["[Duration - 2.5 Months]"],
    subtitle: "Jiraaf.com is an Indian fintech platform that enables retail participation in corporate debt.",
    details: [
        {title: "Project Requirement", value:"Build the MVP for Jiraaf that enables retail investors to invest in a debt instrument & receive payments back."},
       { title: "Team Size", value: [ "1 PM", " 1 Designer" ," 3 Developers + Lead + QA","1 Devops" ,] },

      { title: "Outcome", value: ["$80M in investments","$40M in disbursements","$7.5M Funding from Accel",] }
    ],
  },
  {

    image: "/Bimaplan-Portfolio.png",
    title: "MVP for Bimaplan ",
    sidehead: ["[Duration - 2 Months]"],
    subtitle: "Bimaplan is a YC 2021 Insuretech startup founded by a Harvard Alum increasing the risk coverage for the next billion internet users in India",
    details: [
        {title: "Project Requirement", value:"Build the MVP for Bimaplan that enables byte sized insurance products @ < 2 USD for a year's coverage.."},
       { title: "Team Size", value: [ "1 PM", " 1 Designer" ," 3 Developers + Lead + QA","1 Devops" ,] },

      { title: "Outcome", value: ["Success demo on demo day","$3M Funding from Marquee investors",] }
    ],
  },
  {

    image: "/StreamAlive-Portfolio.png",
    title: "MVP for StreamAlive ",
    sidehead: ["[Duration - 2.5 Months]"],
    subtitle: "StreamAlive is a influencer-Audience engagement platform started by serial entrepreneurs targeting Youtube livestreamers & CorporateusersonZoom.",
    details: [
        {title: "Project Requirement", value:"Build the MVP for Streamalive integrating with Youtube, process comments on livestreams & increase audienceengagement."},
       { title: "Team Size", value: [ "1 PM", " 1 Designer" ," 3 Developers + Lead + QA","1 Devops" ,] },

      { title: "Outcome", value: ["Product hunt #5 product of the week","Processed over 1 Million comments,peaking at 15k","comments/seconds."] }
    ],
  },
  {

    image: "/Alanpay-Portfolio.png",
    title: "MVP for Alaanpay ",
    sidehead: ["[Duration - 2.5 Months]"],
    subtitle: "Alaanpay is a fintech platform founded by 2 Ex-McKinsey consultants for MENA that helps SMBs and startups keep track of their employee spends through a virtual card platform.",
    details: [
        {title: "Project Requirement", value:"Build the MVP for Alaanpay, integrating with M2P platform, backed by top banks & provide virtualcards forSMBs."},
       { title: "Team Size", value: [ "1 PM", " 1 Designer" ," 3 Developers + Lead + QA","1 Devops" ,] },

      { title: "Outcome", value: ["Successful launch","100s of SMBS onboarded","One of the top fintechs in th region."] }
    ],
  },
   {

    image: "/Livspace-Portfolio.png",
    title: "Innovation team for Livspace ",
    sidehead: ["[Duration - 2.5 Months]"],
    subtitle: "Livspace is a 1.2B USD tech startup organising the home interiors space for new home owners in India.",
    details: [
        {title: "Project Requirement", value:"Build a home needs services market place for existing homeowners."},
       { title: "Team Size", value: [ "1 PM", " 1 Designer" ," 8 Developers + Architect + QA","1 Devops" ,] },

      { title: "Outcome", value: [" Successful launch on time","Multiple millions of USD in revenues in 1 year","Team continue to support roadmap."] }
    ],
  },

];

export default function CaseStudySlider() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(true);
  const totalSlides = caseStudies.length;
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    if (index === totalSlides - 1) {
      setAnimating(false);
      setIndex(0);
      setTimeout(() => setAnimating(true), 50);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      setAnimating(false);
      setIndex(totalSlides - 1);
      setTimeout(() => setAnimating(true), 50);
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timeoutRef.current);
  }, [index]);

  return (
    <div className="relative overflow-hidden w-full bg-white py-10">
      <div className="w-full overflow-hidden">
        <div
          className={`flex ${
            animating ? "transition-transform duration-[1200ms] ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {caseStudies.map((caseStudy, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <CaseStudyCard {...caseStudy} animateImage={i === index} />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#fdebf2] hover:bg-pink-300 text-pinko p-3 rounded-full shadow z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#fdebf2] hover:bg-pink-300 text-pinko p-3 rounded-full shadow z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}