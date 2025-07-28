
"use client";
import React from "react";

const timeline = [
  { year: "2017", desc: "Incorporated a Recruitment AI" },
  { year: "2018", desc: "Raised a Seed Fund" },
  { year: "Jul 2020", desc: "Launched MVPRockets - 5 Member Team" },
  { year: "Aug 2020", desc: "First Product Launch" },
  { year: "Mar 2021", desc: "First Demo Day" },
  { year: "Jul 2021", desc: "1 Year - 20 Member Team" },
  { year: "Sep 2021", desc: "50 Member Team - 10 Product Launch" },
  { year: "May 2022", desc: "100 Member Team" },
  { year: "Nov 2022", desc: "Signed First Enterprise Client" },
  { year: "Jan 2023", desc: "140 Member Team" },
  { year: "Jun 2023", desc: "4 Enterprise Clients - 20+ Startups" },
  { year: "Jan 2024", desc: "ISO 27001:2022 Certified" },
];

export default function TimelineSection() {
  return (
    <section className="bg-[#FFF7FC] py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
      
        <div className="text-center mb-8">
          <p className="text-pinko font-semibold tracking-widest uppercase text-lg md:text-xl">
            Timeline
          </p>
          <h2 className="text-3xl md:text-3xl font-semibold text-pgown mt-1">
            Progress
          </h2>
        </div>

        
        <div className="relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-pinko before:-translate-x-1/2">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative mb-6 md:mb-8 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 px-2 md:px-4">
                <div className="bg-white rounded-md shadow p-3 text-center md:text-left">
                  <p className="text-pgown font-semibold text-sm md:text-base">
                    {item.year}
                  </p>
                  <p className="text-gr text-sm mt-1">{item.desc}</p>
                </div>
              </div>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-pinko border-4 border-white rounded-full absolute left-1/2 -translate-x-1/2 z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
