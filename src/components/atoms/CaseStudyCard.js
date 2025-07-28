"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const iconMap = {
  "Project Requirement":"/icons/file-text (1).svg",
  "Team Size": "/icons/users-three-fill.svg",
  "Outcome": "/icons/trophy-fill.svg",
};

export default function CaseStudyCard({
  image,
  title,
  sidehead,
  subtitle,
  details,
  animateImage,
}) {
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    if (animateImage) {
      setImageKey((prev) => prev + 1);
    }
  }, [animateImage]);

  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 px-4 sm:px-8 lg:px-20 py-16">
 
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-pgown">
          {title}
          <br />
          <span className="text-3xl md:text-4xl text-pgown font-semibold">{sidehead}</span>
        </h2>
        <p className="text-gr font-pop text-lg md:text-base">{subtitle}</p>

       
        <div
          key={imageKey}
          style={{
            animation: "slideImage 1500ms ease-in-out forwards",
          }}
          className="mt-6"
        >
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="rounded-xl w-full h-auto object-cover shadow"
          />
        </div>
      </div>

      
      <div className="w-full lg:w-1/2 flex flex-col pt-10 gap-8">
        {details.map((detail, idx) => (
          <div
            key={idx}
            className="bg-[#fdf9fb] border border-[#fdf0f5] shadow-md rounded-xl p-6 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-[#fdebf2] text-pinko rounded-full flex items-center justify-center">
              <Image
                src={iconMap[detail.title] || "/icons/doc.svg"}
                alt="icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <h4 className="font-semibold text-pgown font-pop text-xl mb-1">{detail.title}</h4>
              {Array.isArray(detail.value) ? (
                <div className="text-gr text-sm font-pop md:text-base space-y-1">
                  {detail.value.map((item, i) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>
              ) : (
                <p className="text-gr font-pop text-sm md:text-base">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}