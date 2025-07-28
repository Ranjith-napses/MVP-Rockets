"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Giridharan N (CEO)",
    role: "IIMB, Ex - Yahoo, Microsoft, Simplilearn, Babajob (CPO)",
    image: "/founders/Giridharan-Natarajan-1.jpg",
  },
  {
    name: "Praveen MV (COO)",
    role: "Ex - Thoughtworks, Babajob (CTO), 3x Entrepreneur, 1 exit",
    image: "/founders/Praveen-1.jpg",
  },
  {
    name: "Satish Bhat (CTO)",
    role: "Architecture, CTO of various companies, 4x Entrepreneur",
    image: "/founders/Satish-Bhat.jpg",
  },
  {
    name: "Ashitha Shetty (CPO)",
    role: "Ex - SAP, Product leadership",
    image: "/founders/Ashitha-Shetty-CPO.jpg",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="px-4 md:px-20 py-12 max-w-screen-xl mx-auto">
    
      <h2 className="text-4xl md:text-5xl p-2 font-semibold text-center text-pgown mb-4">
        Meet the Faces Behind
        <br></br>
         MVPRockets
      </h2>
        <h4 className="text-lg md:text-xl font-pop text-gr text-center mb-8">
          Here’s the amazing team we just talked about earlier!
        </h4>

      <div className="flex justify-center mb-12">
        <div className="rounded-xl overflow-hidden shadow-md max-w-xs text-center p-4">
          <Image
            src={teamMembers[0].image}
            alt={teamMembers[0].name}
            width={400}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
          />
          <h3 className="mt-4 text-xl font-bold font-pop text-pgown">{teamMembers[0].name}</h3>
          <p className="text-sm text-gr font-pop">{teamMembers[0].role}</p>
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-16">
        {teamMembers.slice(1).map((member, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-md max-w-xs text-center p-4">
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-xl"
            />
            <h3 className="mt-4 text-xl font-pop font-bold text-pgown">{member.name}</h3>
            <p className="text-sm text-gr font-pop">{member.role}</p>
          </div>
        ))}
      </div>

          <div className="text-center mt-8">
        <h3 className="text-2xl font-bold font-pop text-pgown mb-2">Interested to join our team?</h3>
        <Link
          href="https://linkedin.com/company/mvprockets"
          target="_blank"
          className="inline-block text-pinko font-pop font-semibold text-xl "
        >
          Apply now →   
        </Link>
      </div>
    </section>
  );
};

export default TeamSection;
